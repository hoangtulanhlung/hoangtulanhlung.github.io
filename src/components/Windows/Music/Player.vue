<template>
  <div class="absolute bottom-0 w-full bg-player h-14 shadow-inner">
    <div class="flex items-center justify-between h-full px-2">

      <!-- Current track -->
      <div class="w-1/3">
        <div class="flex items-center gap-2">
          <img
            v-if="currentTrack.album && currentTrack.album.images"
            :src="currentTrack.album.images[0].url"
            alt="Album cover"
            class="w-10 h-10 rounded-sm"
          />

          <div class="flex flex-col mr-5 w-full">
            <p class="text-xs font-trebuchet-pixel truncate">
              {{ currentTrack.name }}
            </p>

            <p class="text-xs font-trebuchet-pixel truncate">
              {{ currentTrack.artists ? currentTrack.artists[0].name : '' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="w-1/3 flex items-center justify-center">
        <button
          @click="previousTrack"
          class="w-6 h-6 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 cursor-pointer"
        >
          <img
            src="/img/icons/music/previous-icon.webp"
            alt="Previous track"
            class="w-full h-full"
          />
        </button>

        <button
          @click="togglePlay"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 relative overflow-hidden play-button cursor-pointer"
          :class="{ 'is-playing': isPlaying }"
        ></button>

        <button
          @click="nextTrack"
          class="w-6 h-6 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 cursor-pointer"
        >
          <img
            src="/img/icons/music/next-icon.webp"
            alt="Next track"
            class="w-full h-full"
          />
        </button>
      </div>

      <!-- Time -->
      <div class="w-1/3">
        <p class="text-xs font-trebuchet-pixel text-center">
          {{ formatTime(currentTime) }} /
          {{ formatTime(currentTrack.duration_ms) }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useVolumeStore } from '@/stores/volumeStore'

const props = defineProps({
  playlist: {
    type: Array,
    required: true
  },
  trackToggled: String
})

const volumeStore = useVolumeStore()

const currentTrack = ref(props.playlist[0])
const isPlaying = ref(false)
const currentTime = ref(0)

let audioElement = null

const getAudioFile = (track) => {
  return '/musics/' + track.id + '.mp3'
}

const updateCurrentTime = () => {
  if (audioElement) {
    currentTime.value = audioElement.currentTime * 1000
  }
}

const removeAudioListeners = () => {
  if (!audioElement) return

  audioElement.removeEventListener('timeupdate', updateCurrentTime)
  audioElement.removeEventListener('ended', handleTrackEnded)
}

const addAudioListeners = () => {
  if (!audioElement) return

  audioElement.addEventListener('timeupdate', updateCurrentTime)
  audioElement.addEventListener('ended', handleTrackEnded)
}

const startCurrentTrack = () => {
  const audioFile = getAudioFile(currentTrack.value)

  volumeStore.playAudio(audioFile)

  audioElement = volumeStore.audioElements[audioFile]

  addAudioListeners()
}

const stopCurrentTrack = () => {
  const audioFile = getAudioFile(currentTrack.value)

  removeAudioListeners()

  volumeStore.pauseAudio(audioFile)
  volumeStore.resetAudio(audioFile)

  currentTime.value = 0
}

const togglePlay = () => {
  if (isPlaying.value) {
    const audioFile = getAudioFile(currentTrack.value)

    volumeStore.pauseAudio(audioFile)
    removeAudioListeners()

    isPlaying.value = false
  } else {
    isPlaying.value = true
    startCurrentTrack()
  }
}

const previousTrack = () => {
  const currentIndex = props.playlist.findIndex(
    (track) => track.id === currentTrack.value.id
  )

  stopCurrentTrack()

  if (currentIndex === 0) {
    currentTrack.value = props.playlist[props.playlist.length - 1]
  } else {
    currentTrack.value = props.playlist[currentIndex - 1]
  }

  isPlaying.value = true
  startCurrentTrack()
}

const nextTrack = () => {
  const currentIndex = props.playlist.findIndex(
    (track) => track.id === currentTrack.value.id
  )

  stopCurrentTrack()

  if (currentIndex === props.playlist.length - 1) {
    currentTrack.value = props.playlist[0]
  } else {
    currentTrack.value = props.playlist[currentIndex + 1]
  }

  isPlaying.value = true
  startCurrentTrack()
}

const handleTrackEnded = () => {
  nextTrack()
}

function formatTime(ms) {
  if (ms == null || isNaN(ms)) {
    return '0:00'
  }

  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

/*
  Khi click vào một bài trong playlist:
  - dừng bài hiện tại
  - chuyển sang bài được chọn
  - autoplay ngay
*/
watch(
  () => props.trackToggled,
  (newTrack) => {
    if (!newTrack) return

    const selectedTrack = props.playlist.find(
      (track) => track.id === newTrack
    )

    if (!selectedTrack) return

    stopCurrentTrack()

    currentTrack.value = selectedTrack

    isPlaying.value = true
    startCurrentTrack()
  }
)

onUnmounted(() => {
  stopCurrentTrack()
})
</script>

<style scoped>
.play-button {
  background-image: url('/img/icons/music/play-icon.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.play-button:hover {
  background-image: url('/img/icons/music/play-icon-hover.webp');
}

.play-button.is-playing {
  background-image: url('/img/icons/music/pause-icon.webp');
}
</style>