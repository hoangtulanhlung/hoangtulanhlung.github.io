<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const isVietnamese = computed(() => localeStore.currentLocale === 'vi')
</script>

<template>
  <section class="text-xs md:text-header-window">

    <h3 class="mt-5 mb-2 font-bold">
      {{ isVietnamese ? 'QUEN MÀ LẠ.' : 'A LITTLE FICTION IN THE FAMILIAR.' }}
    </h3>

    <p class="mb-4">
      {{
        isVietnamese
          ? 'Dự án khai thác những khung cảnh quen thuộc trong đời sống thường ngày của người Việt thông qua visual manipulation mang tính sáng tạo và siêu thực. Bằng cách đưa những chi tiết bất ngờ vào các bối cảnh đời thường, bộ ảnh biến những khoảnh khắc quen thuộc thành các hình ảnh vui nhộn, kỳ quặc và có phần phi thực, nhưng vẫn giữ được nét đặc trưng của đời sống Việt Nam.'
          : 'I took familiar Vietnamese street scenes and let childhood imagination leak back into them, turning ordinary corners, signs, and everyday moments into something nostalgic, playful, and a little unreal. A small visual exercise in what happens when memory edits reality.'
      }}
    </p>

    <img
      src="/img/projects/iconic-street-scene/image-1.jpg"
      :alt="isVietnamese ? 'Tác phẩm Iconic Street Scene 1' : 'Iconic Street Scene artwork 1'"
      class="w-full mt-4 mb-4"
    />

    <img
      src="/img/projects/iconic-street-scene/image-2.jpg"
      :alt="isVietnamese ? 'Tác phẩm Iconic Street Scene 2' : 'Iconic Street Scene artwork 2'"
      class="w-full mb-4"
    />

    <img
      src="/img/projects/iconic-street-scene/image-3.jpg"
      :alt="isVietnamese ? 'Tác phẩm Iconic Street Scene 3' : 'Iconic Street Scene artwork 3'"
      class="w-full mb-6"
    />

  </section>
</template>