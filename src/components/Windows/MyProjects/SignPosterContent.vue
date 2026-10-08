<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'LÃNH ĐẠO TỐI CAO ĐI CẮT TÓC.'
    : 'BIG BROTHER NEEDS A TRIM.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Mọi thứ bắt đầu từ một bảng hiệu ngoài đường mang tên “Tóc Triều Tiên”. Từ cái tên vốn đã đủ gây tò mò, poster được phát triển theo tinh thần của phong trào nghệ thuật Dada - nơi sự phi lý, châm biếm và hỗn loạn trở thành ngôn ngữ chính.`
    : `It started with a neighborhood salon sign called “Tóc Triều Tiên.” I took the name literally and pushed it into a Dadaist collage of surveillance, control, propaganda, and haircuts, keeping just enough of the original salon language to make the whole thing feel absurdly plausible.`
})

const originalCaption = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'Bảng hiệu gốc'
    : 'The original sign'
})

const finalCaption = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'Poster hoàn thiện'
    : 'The final poster'
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

    <!-- Original Sign -->
    <div class="mt-4 mb-4">
      <img
        src="/img/projects/sign-poster/sign.png"
        alt="Original Tóc Triều Tiên sign"
        class="w-full max-w-[520px] mx-auto"
      />

      <p class="mt-1 text-xxs italic text-center">
        {{ originalCaption }}
      </p>
    </div>

    <!-- Final Poster -->
    <div class="mb-6">
      <img
        src="/img/projects/sign-poster/poster.jpg"
        alt="Final Sign Poster"
        class="w-full max-w-[520px] mx-auto"
      />

      <p class="mt-1 text-xxs italic text-center">
        {{ finalCaption }}
      </p>
    </div>

  </section>
</template>