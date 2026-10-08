<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/localeStore'

const { locale } = useI18n()
const localeStore = useLocaleStore()

const localeNames = {
  en: 'English',
  vi: 'Tiếng Việt'
}

const props = defineProps({
  currentLocale: {
    type: String,
    default: 'en'
  }
})

const getFlagSrc = (currentLocale) => {
  if (currentLocale === 'vi') {
    return '/img/icons/langs/flag-vn.png'
  }

  return '/img/icons/langs/flag-en.webp'
}

const oppositeLocale = computed(() => {
  return props.currentLocale === 'en' ? 'vi' : 'en'
})

const handleLanguageSwitch = () => {
  const newLocale = props.currentLocale === 'en' ? 'vi' : 'en'

  // Save locale
  localStorage.setItem('currentLocale', newLocale)

  // Update vue-i18n
  locale.value = newLocale

  // Update Pinia store so the rest of the UI reacts immediately
  localeStore.currentLocale = newLocale
}
</script>

<template>
  <section
    class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-24 rounded-t-md overflow-hidden bg-window-blue-deactivated p-0.5 z-fmax"
  >
    <div
      class="absolute top-0 left-0 h-7 w-full z-10 flex items-center px-1.5 bg-header-window-active"
    >
      <img
        :src="getFlagSrc(props.currentLocale)"
        :alt="$t('common.icon') + ' language'"
        class="w-4 h-3 mr-1"
      />

      <h4 class="text-header-window text-header-shadow truncate">
        {{ $t('common.language') }}
      </h4>
    </div>

    <div class="bg-light-yellow h-12 mt-3 pr-1">
      <div class="h-full w-full flex items-center px-2 pt-3">
        <div
          @click="handleLanguageSwitch"
          class="flex items-center cursor-pointer"
        >
          <img
            :src="getFlagSrc(oppositeLocale)"
            :alt="$t('common.icon') + ' language'"
            class="w-5 h-4 mr-1 cursor-pointer"
          />

          <label
            class="text-black text-xs font-trebuchet-pixel pr-4 cursor-pointer whitespace-nowrap"
            for="language"
          >
            {{ localeNames[oppositeLocale] }}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>