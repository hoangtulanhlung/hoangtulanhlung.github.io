
<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'DỰNG CHUYỆN CHO HAI KẺ GÂY CHUYỆN.'
    : 'IT TAKES A LOT TO START A FIGHT.'
})

const bodyParagraph1 = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Để màn đối đầu giữa Duo và Vua Tuyết diễn ra suôn sẻ, mình đã tham gia nhiều công việc trong quá trình sản xuất. Từ tìm kiếm đơn vị làm đạo cụ, xoay xở để hoàn thiện trang phục mascot ngay trong ngày, đến trực tiếp vận hành mascot. Mỗi đầu việc đều có những thử thách riêng, đòi hỏi mình phải linh hoạt và tìm cách xử lý trong thời gian ngắn.`
    : `Duo and Snow King had a beef and my job was to help make it happen. From hunting down vendors for props and mascot costumes to rushing to a sewing workshop to get an outfit made within the day, I spent a good part of this project figuring out how to make impossible things actually possible. At one point, I even ended up jumping in and operating a mascot myself.`
})

const bodyParagraph2 = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Bên cạnh đó, mình còn đảm nhận vai trò Production Assistant trên trường quay cho cả hero film và các social video.`
    : `And when I wasn't busy getting the mascots ready for their big showdown, I was on set as a production assistant for both the hero film and social videos.`
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <!-- Hero Film -->
    <video
      controls
      preload="metadata"
      class="w-full mb-5"
    >
      <source
        src="/videos/duolingo-mixue.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Headline -->
    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <!-- Description -->
    <p class="mb-4">
      {{ bodyParagraph1 }}
    </p>

    <p class="mb-5">
      {{ bodyParagraph2 }}
    </p>

    
<!-- Behind the Scenes -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">

  <img
    src="/img/projects/duolingo-mixue/costume.jpg"
    alt="Duolingo mascot costume production at the sewing workshop"
    class="w-full aspect-[4/3] object-cover"
  />

  <img
    src="/img/projects/duolingo-mixue/event.jpg"
    alt="Duolingo and Mixue mascots at the event"
    class="w-full aspect-[4/3] object-cover"
  />
    </div>

  </section>
</template>
