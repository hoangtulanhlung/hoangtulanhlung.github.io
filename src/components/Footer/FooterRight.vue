<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useVolumeStore } from '@/stores/volumeStore'
import { useLocaleStore } from '@/stores/localeStore'

import CurrentTime from './CurrentTime.vue'
import NotificationModal from '@/components/Modals/NotificationModal.vue'
import MusicVolumeModal from '@/components/Modals/MusicVolumeModal.vue'
import LanguageModal from '@/components/Modals/LanguageModal.vue'

const volumeStore = useVolumeStore()
const localeStore = useLocaleStore()

const volume = computed(() => volumeStore.volume)

const currentLocale = computed(() => {
  return localeStore.currentLocale === 'vi' ? 'vi' : 'en'
})

const isFullScreen = ref(false)
const originalTitle = ref('Full screen')

const isVolumeSettingsDisplayed = ref(false)
const isLanguageSettingsDisplayed = ref(false)

const musicModalRef = ref(null)
const languageModalRef = ref(null)

const enterFullScreen = () => {
  if (isFullScreen.value) {
    document.exitFullscreen()
    originalTitle.value = 'Full screen'
    isFullScreen.value = false
  } else {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }

    originalTitle.value = 'Exit full screen'
    isFullScreen.value = true
  }
}

const toggleMusicModal = () => {
  isVolumeSettingsDisplayed.value = !isVolumeSettingsDisplayed.value
  isLanguageSettingsDisplayed.value = false
}

const toggleLanguageModal = () => {
  isLanguageSettingsDisplayed.value = !isLanguageSettingsDisplayed.value
  isVolumeSettingsDisplayed.value = false
}

const handleClickOutside = (event) => {
  const { target } = event

  if (
    musicModalRef.value &&
    !musicModalRef.value.$el.contains(target)
  ) {
    isVolumeSettingsDisplayed.value = false
  }

  if (
    languageModalRef.value &&
    !languageModalRef.value.$el.contains(target)
  ) {
    isLanguageSettingsDisplayed.value = false
  }
}

onMounted(() => {
  document.body.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.body.removeEventListener('click', handleClickOutside)
})

const volumeIconSrc = computed(() => {
  return volume.value === 0
    ? '/img/icons/mute-icon-sm.webp'
    : '/img/icons/volume-icon-sm.webp'
})

const languageFlagSrc = computed(() => {
  if (currentLocale.value === 'vi') {
    return '/img/icons/langs/flag-vn.png'
  }

  return '/img/icons/langs/flag-en.webp'
})
</script>

<template>
  <div
    class="absolute right-0 text-white h-full flex items-center px-1.5 sm:px-3 gap-0.5 bg-footer-right-component footer-left-shadow select-none"
  >
    <!-- Language - LEFT SIDE -->
    <div class="relative flex items-center">
      <img
        class="w-5 h-3 mr-1 cursor-pointer object-cover"
        :src="languageFlagSrc"
        :alt="$t('alt.currLang')"
        :title="$t('common.language')"
        @click.stop="toggleLanguageModal"
      />

      <LanguageModal
        v-if="isLanguageSettingsDisplayed"
        ref="languageModalRef"
        :currentLocale="currentLocale"
      />
    </div>

    <!-- Fullscreen -->
    <img
      class="w-4 h-4 cursor-pointer"
      src="/img/icons/full-screen-icon-sm.webp"
      alt="Full screen"
      :title="originalTitle"
      @click="enterFullScreen"
    />

    <!-- Volume -->
    <img
      class="w-4 h-4 mt-px cursor-pointer"
      :src="volumeIconSrc"
      alt="Volume"
      title="Volume"
      @click.stop="toggleMusicModal"
    />

    <MusicVolumeModal
      v-if="isVolumeSettingsDisplayed"
      ref="musicModalRef"
    />

    <!-- Notifications -->
    <NotificationModal class="md:block z-fmax" />

    <!-- Clock -->
    <CurrentTime />
  </div>
</template>