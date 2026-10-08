<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const headline = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? 'KHI LỖI KHÔNG THUỘC VỀ NHỮNG VÌ SAO.'
    : 'THE FAULT ISN’T IN OUR STARS.'
})

const bodyCopy = computed(() => {
  return localeStore.currentLocale === 'vi'
    ? `Ta hay đổ lỗi cho những vì sao, đơn giản vì như vậy dễ hơn phải tự nhìn nhận lại chính mình. Từ Sao Thủy nghịch hành rồi đến Sao Thổ hồi quy, bất kể chuyện gì trong cuộc sống, dù vui hay buồn thì cũng đều sẽ quy về những thứ này. Mình giúp Co-Star biến chiêm tinh từ một cái cớ thành một tấm gương, để thay vì hỏi vũ trụ đang làm gì với ta thì ta nên bắt đầu hỏi mình đang làm gì với chính mình.`
    : `We look to the stars for answers because uncertainty is uncomfortable. Mercury retrograde, Saturn return, a badly timed full moon - sometimes it feels easier to blame the universe than admit we’re just figuring things out as we go. Maybe the fault isn’t in our stars. Maybe astrology isn’t about finding something to blame, but finding something in ourselves worth understanding.`
})
</script>

<template>
  <section class="text-xs md:text-header-window">

    <!-- Cover -->
    <img
      src="/img/projects/co-star/cover.png"
      alt="Co-Star campaign cover"
      class="w-full mb-5"
    />

    <h3 class="mt-5 mb-2 font-bold">
      {{ headline }}
    </h3>

    <p class="mb-5">
      {{ bodyCopy }}
    </p>

    <!-- Mockup 1 -->
    <img
      src="/img/projects/co-star/mockup-1.png"
      alt="Co-Star OOH campaign"
      class="w-full mb-5"
    />

    <!-- Mockup 2 -->
    <img
      src="/img/projects/co-star/mockup-2.png"
      alt="Co-Star OOH campaign"
      class="w-full mb-5"
    />

  </section>
</template>