<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'CUỘI ĐI CHÂN LẠNH TOÁT.'
    : 'WELL, THAT ESCALATED QUICKLY.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Dự án khai thác một câu chuyện dân gian Việt Nam thông qua ba bức photo-manipulation có tính liên kết. Mỗi hình ảnh tập trung vào một khoảnh khắc khác nhau trong câu chuyện, đồng thời giữ chung một không khí điện ảnh, giàu cảm xúc và tính kể chuyện. Mục tiêu là chuyển tinh thần của truyện dân gian sang một cách thể hiện trực quan hơn, nơi từng khung hình vừa có thể đứng độc lập, vừa kết nối thành một mạch truyện hoàn chỉnh.`
    : `One minute, Cuội is sitting peacefully under a banyan tree. The next, the whole thing is leaving Earth. I turned the familiar Vietnamese folktale into a three-part visual sequence, following Cuội’s increasingly unlikely journey all the way to the moon.`
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

    <img
      src="/img/projects/folktale-portrayal/image-1.jpg"
      alt="Chú Cuội beneath the banyan tree"
      class="w-full mt-4 mb-4"
    />

    <img
      src="/img/projects/folktale-portrayal/image-2.jpg"
      alt="The banyan tree flying away from Earth"
      class="w-full mb-4"
    />

    <img
      src="/img/projects/folktale-portrayal/image-3.jpg"
      alt="Chú Cuội and the banyan tree on the moon"
      class="w-full mb-6"
    />

  </section>
</template>