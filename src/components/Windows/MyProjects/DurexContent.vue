<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Đâu phải chuyện gì cũng nói dễ hơn làm. Thay vì chờ đợi việc các cặp đôi mở lời với nhau về chuyện giường chiếu một cách đầy ngại ngùng, chúng mình để cho Durex gợi ý trước. Mỗi chiếc bao cao su trở thành một cách để mở ra những điều cả hai vẫn muốn thử nhưng chưa biết bắt đầu từ đâu với đối phương.`
    : `Some things are easier to try than to say out loud. So instead of asking couples to have an awkward conversation, we let Durex do some of the talking. Each condom became a playful suggestion for something new to try - turning protection into a little nudge to express what you want, explore what you like, and maybe discover a new favourite.`
})

const endline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'Tỏ bày bản thân, thêm phần tuyệt đỉnh.'
    : 'Express freely to experience fully.'
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
      src="/img/projects/durex/cover.jpg"
      alt="Durex Express, Durex Experience"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      DUREXPRESS, DUREXPERIENCE
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

    <p class="mb-4 font-bold">
      {{ endline }}
    </p>

    <!-- Campaign Mockup 1 -->
    <img
      src="/img/projects/durex/mockup.jpg"
      alt="Durex campaign packaging mockup"
      class="w-full mt-5 mb-4"
    />

    <!-- Campaign Mockup 2 -->
    <img
      src="/img/projects/durex/mockup-2.jpg"
      alt="Durex campaign execution mockup"
      class="w-full mb-5"
    />

    <a
      rel="noopener"
      href="https://canva.link/durex-mumecom"
      target="_blank"
      class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
    >
      {{ buttonText }}
    </a>

  </section>
</template>