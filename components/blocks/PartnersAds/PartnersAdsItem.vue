<template>
  <img
    :src="`/${item.img}.jpg`"
    class="banner-slider__item swiper-slide"
  >
</template>
<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  }
}
</script>
