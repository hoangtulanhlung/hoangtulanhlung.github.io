<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'BIỂU KỲ ĐỊA PHƯƠNG.'
    : 'A FLAG FOR THE DISTRICT.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Dự án bắt đầu từ việc lựa chọn Xóm Đạo, Quận 8 làm khu vực nghiên cứu. Từ quá trình quan sát không gian, con người và những yếu tố văn hoá đặc trưng của khu, mình xác định ba lớp hình ảnh nổi bật nhất gồm đức tin Công giáo, không khí Giáng Sinh và tinh thần cộng đồng. Những yếu tố này sau đó được chắt lọc và giản lược thành một hệ biểu tượng thị giác, nhằm tạo ra một lá cờ vừa có tính nhận diện rõ ràng, vừa phản ánh được bản sắc riêng của Xóm Đạo.`
    : `I designed a flag for Xóm Đạo, a Catholic neighborhood in District 8, using the symbols people already associate with the place - faith, Christmas, and community - and reducing them into something simple enough to feel instantly recognizable, but bold enough to stand on its own.`
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
      src="/img/projects/the-hood/flag.jpg"
      alt="The Hood flag design"
      class="w-full mt-4 mb-6"
    />

  </section>
</template>