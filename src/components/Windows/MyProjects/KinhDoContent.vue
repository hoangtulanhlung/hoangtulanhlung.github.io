<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'GỬI TRAO TẾT ẤM, ĐONG ĐẦY YÊU THƯƠNG.'
    : '“SUM VẦY” IS A TWO-WAY STREET.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Kinh Đô từ lâu đã gắn với những khoảnh khắc sum vầy. Nhưng khi mọi người quây quần đón Tết, vẫn có những người chưa thể nghỉ ngơi để đón Tết cùng gia đình. Chúng mình biến lời cảm ơn thành một hành động cụ thể: mang Tết đến với những người vẫn đang ở ngoài kia, và để Kinh Đô trở thành món quà nhỏ gửi lại chút ấm áp cho những người thường dành phần ấm áp của mình cho người khác.`
    : `Kinh Do has always stood for togetherness. So we asked what togetherness means when some people are still working while everyone else is celebrating. The campaign turns gratitude into action - inviting people to share Tết with the workers who keep the city moving, and letting Kinh Do become the gesture that brings a little warmth back to those who usually give theirs away.`
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
      src="/img/projects/kinh-do/cover.png"
      alt="Kinh Do Tet Campaign"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <p class="mb-4">
      {{ bodyCopy }}
    </p>

    <!-- Su Gia Kinh Do -->
    <img
      src="/img/projects/kinh-do/su-gia.png"
      alt="Su Gia Kinh Do campaign activation"
      class="w-full mt-5 mb-4"
    />

    <!-- Product Innovation -->
    <img
      src="/img/projects/kinh-do/innovation.png"
      alt="Kinh Do Tet product innovation"
      class="w-full mb-5"
    />

    <a
      rel="noopener"
      href="https://canva.link/kinhdo"
      target="_blank"
      class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
    >
      {{ buttonText }}
    </a>

  </section>
</template>