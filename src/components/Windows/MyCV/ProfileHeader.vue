
<script setup>
const props = defineProps({
  age: Number
})
</script>

<template>
  <div class="cv-profile">
    <img
      src="/img/icons/cv/khoi.jpg"
      alt="Nguyen Trong Khoi"
      class="cv-profile-image"
    />

    <div class="flex justify-center flex-col">
      <h1 class="font-trebuchet-pixel">Nguyễn Trọng Khôi</h1>
      <h2 class="font-trebuchet-pixel">
        {{ props.age + ' ' + $t('common.years') }}
      </h2>
    </div>

    <div class="flex items-center ml-10">
      <h2 class="font-trebuchet-pixel py-1">
        Creative
      </h2>
    </div>
  </div>
</template>

<style scoped>
.cv-profile {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 8px;
  align-items: center;
  container-type: inline-size;
}

.cv-profile-image {
  width: clamp(80px, 20cqw, 240px);
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
