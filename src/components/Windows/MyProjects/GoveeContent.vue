<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Quảng cáo dịp Giáng sinh cho Govee, sản xuất cùng 116 Pictures. Mình tham gia từ giai đoạn pre-production, hỗ trợ tổng hợp mọi thứ lại cho buổi quay - từ casting, tìm kiếm địa điểm quay, hướng dẫn talent trong giai đoạn tuyển chọn đến việc phối hợp các đầu việc trước ngày quay.`
    : `A Christmas commercial for Govee, produced with 116 Pictures. I supported the project across pre-production, helping bring the shoot together through casting, location scouting, talent direction for auditions, and coordination leading up to production.`
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <!-- Film -->
    <video
      controls
      class="w-full mb-5"
    >
      <source
        src="/videos/govee.mp4"
        type="video/mp4"
      />
    </video>

    <h3 class="mt-5 mb-2 font-bold">
      BEFORE THE LIGHTS CAME ON.
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

  </section>
</template>