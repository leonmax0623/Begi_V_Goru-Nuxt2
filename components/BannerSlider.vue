<template>
  <div>
    <div class="banner-slider__wrapper mobile">
      <img
        v-for="(partner, index) in partners"
        :key="index"
        :src="`/${partner.img}.jpg`"
        class="banner-slider__item swiper-slide"
      >
    </div>
    <div v-swiper="options" class="swiper-container swiper-container--banner desktop">
      <div class="banner-slider swiper-wrapper">
        <img
          v-for="(partner, index) in partners"
          :key="index"
          :src="`/${partner.img}.jpg`"
          class="banner-slider__item swiper-slide"
        >
      </div>
      <swiper-navigation />
    </div>
  </div>
</template>

<script>
import SwiperNavigation from '@/components/SwiperNavigation.vue';

export default {
  name: 'BannerSlider',
  components: {
    SwiperNavigation
  },
  props: {
    partners: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: 1,
        // autoplay: {
        //   delay: 3000
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  }
}
</script>

<style lang="scss">

</style>
