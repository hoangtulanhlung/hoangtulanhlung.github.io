<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? '47 CHƯA TỪNG LÀ MỘT GIỚI HẠN.'
    : '47 YEARS OLD. NEVER LOOKED YOUNGER.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `47 năm là đủ lâu để một thương hiệu trở nên quen thuộc đến mức khó thay đổi. Nhưng Vinamilk không chọn đứng yên. Thay vì bỏ đi những gì đã làm nên mình, thương hiệu giữ lại cái cũ, làm mới cách kể, rồi bước vào thời đại mới với diện mạo táo bạo hơn.`
    : `Vinamilk didn’t need a new identity because people had forgotten it. Quite the opposite. The challenge was making one of Vietnam’s most familiar brands feel new again without losing everything that made it familiar in the first place. We unpacked how the rebrand used heritage, culture and a much bolder visual system to bring a 47-year-old brand into a younger generation.`
})

const buttonText = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'Xem dự án'
    : 'View the Project'
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <!-- Cover -->
    <img
      src="/img/projects/vinamilk/cover.jpg"
      alt="Vinamilk Rebrand Analysis"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

    <!-- Rebrand GIF -->
    <img
      src="/img/projects/vinamilk/vina.gif"
      alt="Vinamilk rebrand visual"
      class="w-full mt-5 mb-5"
    />

    <!-- Vimeo Video -->
    <div class="w-full mt-5 mb-5 aspect-video">
      <iframe
        title="Vinamilk rebrand video"
        src="https://player.vimeo.com/video/878129503?h=9b04253231"
        class="w-full h-full"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <a
      rel="noopener"
      href="https://canva.link/vinamilk-brmn"
      target="_blank"
      class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
    >
      {{ buttonText }}
    </a>

  </section>
</template>