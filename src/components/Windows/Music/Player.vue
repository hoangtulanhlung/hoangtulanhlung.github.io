<template>
  <div class="absolute bottom-0 w-full bg-player h-20 shadow-inner">

<!-- Windows Media Player 9 Seek Bar -->
<div class="wmp-panel">
  <div class="wmp-seek-row">

    <!-- Rewind -->
    <button
      class="wmp-arrow"
      @click="jumpSeek(-5)"
      aria-label="Rewind 5 seconds"
    >
      <svg viewBox="0 0 28 14">
        <path
          d="M13 2 L5 7 L13 12Z M23 2 L15 7 L23 12Z"
          fill="#597b9c"
        />
      </svg>
    </button>

    <!-- Seek track -->
    <div
      ref="seekRail"
      class="wmp-rail"
      role="slider"
      tabindex="0"
      aria-label="Seek music"
      aria-valuemin="0"
      :aria-valuemax="Math.round(trackDuration / 1000)"
      :aria-valuenow="Math.round(currentTime / 1000)"
      @pointerdown="beginSeek"
      @pointermove="moveSeek"
      @pointerup="endSeek"
      @pointercancel="endSeek"
      @keydown="handleSeekKey"
    >
      <div
        class="wmp-progress"
        :style="{ width: progressWidth + 'px' }"
      ></div>

      <div
        class="wmp-thumb"
        :style="{ left: thumbPosition + 'px' }"
      >
        <div class="wmp-thumb-edge"></div>
        <div class="wmp-thumb-middle"></div>
        <div class="wmp-thumb-edge right"></div>
      </div>
    </div>

    <!-- Fast forward -->
    <button
      class="wmp-arrow"
      @click="jumpSeek(5)"
      aria-label="Forward 5 seconds"
    >
      <svg viewBox="0 0 28 14">
        <path
          d="M5 2 L13 7 L5 12Z M15 2 L23 7 L15 12Z"
          fill="#597b9c"
        />
      </svg>
    </button>

  </div>
</div>
    <div class="flex items-center justify-between h-14 px-2">

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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
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

/* Windows Media Player 9 Seek Bar */

const seekRail = ref(null)
const railWidth = ref(0)
const thumbWidth = 38
const isDragging = ref(false)

let resizeObserver = null

const trackDuration = computed(() => {
  return currentTrack.value?.duration_ms || 1
})

const seekProgress = computed(() => {
  return Math.max(
    0,
    Math.min(1, currentTime.value / trackDuration.value)
  )
})

const thumbPosition = computed(() => {
  const travel = Math.max(0, railWidth.value - thumbWidth)
  return seekProgress.value * travel
})

const progressWidth = computed(() => {
  if (railWidth.value <= 0) return 0

  return Math.min(
    railWidth.value,
    thumbPosition.value + thumbWidth / 2
  )
})

const seekTo = (milliseconds) => {
  if (!audioElement) return

  const safeTime = Math.max(
    0,
    Math.min(milliseconds, trackDuration.value)
  )

  try {
    audioElement.currentTime = safeTime / 1000
    currentTime.value = safeTime
  } catch (error) {
    console.warn('Unable to seek:', error)
  }
}

const jumpSeek = (seconds) => {
  if (!audioElement) return

  seekTo(
    (audioElement.currentTime + seconds) * 1000
  )
}

const seekFromPointer = (event) => {
  if (!seekRail.value || !audioElement) return

  const bounds = seekRail.value.getBoundingClientRect()
  const availableWidth = Math.max(
    0,
    bounds.width - thumbWidth
  )

  if (availableWidth === 0) return

  const x = Math.max(
    0,
    Math.min(
      availableWidth,
      event.clientX - bounds.left - thumbWidth / 2
    )
  )

  seekTo((x / availableWidth) * trackDuration.value)
}

const beginSeek = (event) => {
  if (!audioElement) return

  isDragging.value = true
  event.currentTarget.setPointerCapture(event.pointerId)
  seekFromPointer(event)
}

const moveSeek = (event) => {
  if (!isDragging.value) return
  seekFromPointer(event)
}

const endSeek = (event) => {
  isDragging.value = false

  if (
    event.currentTarget.hasPointerCapture?.(event.pointerId)
  ) {
    event.currentTarget.releasePointerCapture(event.pointerId)
  }
}

const handleSeekKey = (event) => {
  if (!audioElement) return

  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      event.preventDefault()
      jumpSeek(-5)
      break

    case 'ArrowRight':
    case 'ArrowUp':
      event.preventDefault()
      jumpSeek(5)
      break

    case 'Home':
      event.preventDefault()
      seekTo(0)
      break

    case 'End':
      event.preventDefault()
      seekTo(trackDuration.value)
      break
  }
}

onMounted(() => {
  if (!seekRail.value) return

  const measureRail = () => {
    railWidth.value = seekRail.value?.clientWidth || 0
  }

  measureRail()

  resizeObserver = new ResizeObserver(measureRail)
  resizeObserver.observe(seekRail.value)
})

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
  if (audioElement) {
    removeAudioListeners()

    audioElement.pause()
    audioElement.currentTime = 0

    audioElement = null
  }

  currentTime.value = 0
  isDragging.value = false
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
  resizeObserver?.disconnect()
  stopCurrentTrack()
})
</script>

<style scoped>
/* Windows Media Player 9 Replica */

.wmp-panel {
  height: 24px;
  width: 100%;
  padding: 2px 7px;
  background: linear-gradient(
    180deg,
    #a6bedd 0%,
    #e5f1fc 35%,
    #cadcf2 75%,
    #a6bfdf 100%
  );
  border-top: 1px solid #829fca;
  border-bottom: 1px solid #8eadd1;
  box-shadow: inset 0 1px #ffffff;
}

.wmp-seek-row {
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  gap: 3px;
}

/* Silver arrow buttons */

.wmp-arrow {
  flex: 0 0 48px;
  height: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  cursor: pointer;
  border: 1px solid #7596b7;
  border-radius: 13px;
  background: linear-gradient(
    to bottom,
    #f8fcff 0%,
    #b7cfe7 28%,
    #dcebf8 54%,
    #a1bad5 85%,
    #e9f4fc 100%
  );
  box-shadow:
    inset 0 1px #ffffff,
    0 1px 2px #758faa;
}

.wmp-arrow svg {
  width: 23px;
  height: 12px;
  filter: drop-shadow(0 1px #ffffff);
}

.wmp-arrow:active {
  background: linear-gradient(
    #8caac8,
    #d8eafb
  );
}

/* Track between the two buttons */

.wmp-rail {
  position: relative;
  flex: 1;
  min-width: 0;
  height: 15px;
  border: 1px solid #7698ad;
  border-radius: 4px;
  background: linear-gradient(
    to bottom,
    #b0c9d9 0%,
    #e6f0f5 50%,
    #b3c9d9 100%
  );
  box-shadow:
    inset 0 1px 2px #7797a9,
    0 1px #ffffff;
  cursor: pointer;
  touch-action: none;
  user-select: none;
  outline-offset: 4px;
}

/* Green progress fill */

.wmp-progress {
  position: absolute;
  top: 1px;
  left: 0;
  height: calc(100% - 2px);
  background: linear-gradient(
    to bottom,
    #c4f4c4 0%,
    #83d88f 26%,
    #6acd7c 55%,
    #9ce4a9 85%,
    #c6f5cb 100%
  );
  border-radius: 2px;
  pointer-events: none;
}

/* Horizontal green and silver thumb */

.wmp-thumb {
  position: absolute;
  top: 50%;
  width: 38px;
  height: 18px;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #2aa853;
  border-radius: 6px;
  background: linear-gradient(
    #caffcf,
    #60d77d 45%,
    #7ee294
  );
  box-shadow:
    inset 0 1px #effff1,
    0 0 2px #46bf6d;
  pointer-events: none;
}

.wmp-thumb-edge {
  width: 9px;
  flex-shrink: 0;
  background: linear-gradient(
    to right,
    #8cf7a4,
    #0dba4b 75%,
    #10a13e
  );
  box-shadow: inset 0 1px #d6ffd7;
}

.wmp-thumb-edge.right {
  background: linear-gradient(
    to right,
    #0aa83f,
    #29d35e 50%,
    #9af8aa
  );
}

.wmp-thumb-middle {
  flex: 1;
  background: linear-gradient(
    to bottom,
    #ffffff,
    #dce9f1 50%,
    #eef5fa
  );
  box-shadow:
    inset 1px 0 #ffffff,
    inset -1px 0 #a5bbca;
}

@media (max-width: 450px) {
  .wmp-arrow {
    flex-basis: 37px;
  }
}

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