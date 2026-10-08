<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Quảng cáo cho Kinder Bueno, sản xuất cùng 116 Pictures và quay tại Thái Lan. Từ pre-production, mình hỗ trợ kết nối hai phía Việt Nam và Thái Lan xuyên suốt quá trình chuẩn bị, từ casting, địa điểm quay, phục trang, visual reference cho tới PPM.`
    : `A Kinder Bueno commercial produced with 116 Pictures and shot in Thailand. I supported the project across pre-production, helping keep the Vietnam and Thailand sides aligned - from casting and locations to wardrobe, visual references, and PPM preparation.`
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <!-- Film 1 -->
    <video
      controls
      class="w-full mb-4"
    >
      <source
        src="/videos/kinder-bueno-1.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Film 2 -->
    <video
      controls
      class="w-full mb-5"
    >
      <source
        src="/videos/kinder-bueno-2.mp4"
        type="video/mp4"
      />
    </video>

    <h3 class="mt-5 mb-2 font-bold">
      BEHIND THE BUENO.
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

  </section>
</template>