<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'PROVE YOU’RE HUMAN. TAKE A BREAK.'
    : 'PROVE YOU’RE HUMAN. TAKE A BREAK.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Gen Z lúc nào cũng trong trạng thái phải làm gì đó: lướt điện thoại, trả lời tin nhắn, multitask rồi lặp đi lặp lại. Chúng mình biến CAPTCHA thành một câu hỏi đơn giản cho đề bài này: nếu bạn không biết cách dừng lại thì liệu bạn có còn đang sống như một con người hay không? Chỉ cần một tiếng “Tách” của thanh KitKat là đủ để trả lời cho câu hỏi đó.`
    : `Young people nowadays move through life at machine-like speed - scrolling, multitasking, replying, then repeating the cycle. So we turned CAPTCHA into a test of humanity and asked a simple question: are you still human if you never stop? The answer was just one KitKat “Tách” away. Stop, snap, take a real break, and consider yourself verified as human.`
})

const presentingCaption = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'Slide thuyết trình của tụi mình'
    : 'Our presenting slide'
})

const finaleCaption = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'Tụi mình tại vòng Chung kết Vietnam Young Lions'
    : 'Our team at the Vietnam Young Lions Finale'
})

const watchText = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? '▶ Xem Film'
    : '▶ Watch the Film'
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <!-- Cover -->
    <img
      src="/img/projects/vyl-2026/cover.jpg"
      alt="Vietnam Young Lions 2026 - KitKat Film Category"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

    <!-- Presenting Slide -->
    <div class="mt-5 mb-4">
      <img
        src="/img/projects/vyl-2026/presenting-slide.jpg"
        alt="Vietnam Young Lions 2026 presentation"
        class="w-full"
      />

      <p class="mt-1 text-xxs italic">
        {{ presentingCaption }}
      </p>
    </div>

    <!-- Finale -->
    <div class="mb-8">
      <img
        src="/img/projects/vyl-2026/finale.jpg"
        alt="Vietnam Young Lions 2026 Top 5 Finalist"
        class="w-full"
      />

      <p class="mt-1 text-xxs italic">
        {{ finaleCaption }}
      </p>
    </div>

    <a
      rel="noopener"
      href="https://youtube.com/shorts/74spzOyO7XE"
      target="_blank"
      class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
    >
      {{ watchText }}
    </a>

  </section>
</template>