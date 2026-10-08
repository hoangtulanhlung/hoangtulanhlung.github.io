<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Một “click” làm chẳng nên non, 300 “click” chụm lại nên hòn núi cao.

Khi một âm thanh nhỏ cứ lặp đi lặp lại với tần suất liên tục, nó sẽ không còn nhỏ nữa. Chúng mình biến tiếng click thành thứ gây ám ảnh nhất trong một không gian yên tĩnh, rồi để Logitech Signature M650 xuất hiện như một anh hùng: trả sự im lặng về đúng chỗ của nó. Ít tiếng click hơn. Ít gây phân tâm hơn. Làm việc mượt hơn.`
    : `A mouse click is small. Until you hear it 300 times in a quiet café. So we made the most annoying sound in the room the star of the campaign, then let Logitech Signature M650 do what it does best: shut it up. Less clicking. Less distracting. More getting things done.`
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
      src="/img/projects/logitech/cover.jpg"
      alt="Logitech Silent Mouse Campaign"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      JUST A “CLICK” AWAY
    </h3>

    <p class="mb-4 whitespace-pre-line">
      {{ bodyCopy }}
    </p>

    <!-- Key Visual -->
    <img
      src="/img/projects/logitech/im-lang.png"
      alt="Logitech Signature M650 - IM LẶNG là..."
      class="w-full mt-5 mb-5"
    />

    <!-- Film -->
    <video
      controls
      class="w-full mt-5 mb-5"
    >
      <source
        src="/videos/logitech.mp4"
        type="video/mp4"
      />
    </video>

    <a
      rel="noopener"
      href="https://canva.link/lo-gi-tech"
      target="_blank"
      class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
    >
      {{ buttonText }}
    </a>

  </section>
</template>