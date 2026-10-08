<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'MƯỢT MÀ VIỆC NHỎ, VỮNG ĐÀ VIỆC TO.'
    : 'CLOSE THE MESS, UP THE REST.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Có những ngày mọi thứ cứ rối tung lên, nhưng đôi khi chỉ cần làm xong một việc nhỏ cũng đủ để ta lấy lại nhịp sống. Chúng mình biến ba phút đánh răng đầu ngày thành một khoảng reset mỗi sáng, rồi xây dựng một thế giới mang tính cá nhân hơn, nơi mà mỗi màu bàn chải có một cá tính riêng.`
    : `When life feels out of control, sometimes the smallest ritual is enough to pull you back in. We turned brushing your teeth into a three-minute power-up ritual, then built a playful world around it - one that feels personal, collectible, and expressive, with every detail shaped around the different colors and personalities of the brushes. The idea was simple: get one small thing right, and maybe the rest of the day follows.`
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
      src="/img/projects/cmo-2025/cover.png"
      alt="CMO Think & Action 2025 - Closeup Precision Clean"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

    <!-- Ritual Mockup -->
    <img
      src="/img/projects/cmo-2025/ritual.png"
      alt="Closeup Precision Clean morning ritual mockup"
      class="w-full mt-5 mb-5"
    />

    <a
      rel="noopener"
      href="https://canva.link/cmo2025"
      target="_blank"
      class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
    >
      {{ buttonText }}
    </a>

  </section>
</template>