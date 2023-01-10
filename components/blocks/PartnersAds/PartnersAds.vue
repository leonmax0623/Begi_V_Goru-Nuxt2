<template>
  <div class="block">
    <div class="block__wrapper">
      <h2 class="block__title desktop">
        Наши партнеры
        <TagsCategories :items="['СпортМастер', 'Сбербанк', 'Лига Героев']" @on-click="handleTag($event)"></TagsCategories>
      </h2>
      <div class="mobile">
        <h2 class="block__title">
          Наши партнеры
        </h2>
        <TagsCategories style="margin-bottom:20px; justify-content: space-between" :items="['СпортМастер', 'Сбербанк', 'Лига Героев']"></TagsCategories>
      </div>
      <div class="banner-slider__wrapper mobile">
        <template v-for="(item, idx) in items">
          <PartnersAdsItem :key="idx" :item="item"></PartnersAdsItem>
        </template>
      </div>
      <div class="desktop" style="position: relative">
        <div id="ads_items" v-swiper:sw="options" class="swiper-container swiper-container--banner">
          <div class="banner-slider swiper-wrapper">
            <template v-for="(item, idx) in items">
              <PartnersAdsItem :key="idx" :item="item"></PartnersAdsItem>
            </template>
          </div>
        </div>
        <swiper-navigation force-centered :parent="parent" />
      </div>
    </div>
  </div>
</template>
<script>
import PartnersAdsItem from "~/components/blocks/PartnersAds/PartnersAdsItem";
import TagsCategories from "~/components/blocks/TagsCategories";
export default {
  components: {TagsCategories, PartnersAdsItem},
  data() {
    return {
      parent: null,
      items: [
        { img: 'ads-banner' },
        { img: 'ads-banner' },
        { img: 'ads-banner' }
      ],
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted() {
    this.parent = document.getElementById('ads_items')
  },
  methods: {
    handleTag(idx) {
      this.sw.slideTo(idx)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.swiper-container {
  margin: auto;
  position: relative;
}
.banner-slider {
  &__item  {
    width: 100%;
  }
}
@include semi-wide {}
@include desktop {}
@include tablet {}
@include mobile {
  .banner-slider__wrapper {
    display: flex;
    width: calc(100vw - 36px);
    overflow: auto;

    @include hide-scrollbar;
  }
  .banner-slider {
    width: calc(100vw - 36px);
    &__item {
      width: 100%;
      height: auto;
      margin-right: 18px;
      margin-left: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
