<template>
  <div style="position:relative">
    <div class="product-card__fav-btn" @click.stop="isFav = !isFav">
      <base-icon v-if="!isFav" name="heart1" />
      <base-icon v-else name="heart3" color="red" />
    </div>
    <div ref="swiper" v-swiper="options" class="swiper-container">
      <div class="product-card swiper-wrapper">
        <div
          v-for="(img, idx) in product.images"
          :key="idx"
          class="product-card__image swiper-slide"
        >
          <img :src="img" />
          <div class="product-card__img-bg"></div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets">
        <span
          v-for="bullet in product.images.length"
          :key="bullet"
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
        >
      </span>
      </div>
      <div class="slide-observer">
        <span
          v-for="item in product.images.length"
          :key="item"
          class="slide-observer__item"
          @mouseover="swipeSlide(item)"
        ></span>
      </div>
      <div class="product-card__info">
        <div class="product-card__price-block">
          <div v-if="product.discount" class="product-card__discount">
            - {{ formatCurrency(product.discount) }}
          </div>
          <div class="product-card__price-diff">
            <div
              :class="[
                'product-card__actual-price',
                { 'product-card__actual-price--hot-price': product.discount },
              ]"
            >
              {{ formatCurrency(product.actual_price) }}
            </div>
            <div v-if="product.old_price" class="product-card__old-price">
              {{ formatCurrency(product.old_price) }}
            </div>
          </div>
        </div>
        <div class="product-card__name">{{ product.name }}</div>
        <div class="product-card__action">
          <button class="button button--sm">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatCurrency } from '@/helpers'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isFav: false,
    swiper: null,
  }),
  computed: {
    options() {
      return {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      }
    },
  },
  mounted() {
    this.swiper = this.$refs.swiper
  },
  methods: {
    formatCurrency,
    swipeSlide(item) {
      this.swiper.swiper.slideTo(item - 1)
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.swiper-container {
  width: 342px;
  margin-left: auto;
  margin-right: 25px;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-pagination-bullets {
  top: 350px;
}
.slide-observer {
  width: 100%;
  // height: 342px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;

  &__item {
    width: 100%;
  }
}
.product-card {
  width: 342px;
  margin: auto;
  display: flex;
  align-items: flex-start;

  &__img-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    top: 0;
    opacity: 0.1;
  }
  &__image {
    overflow-x: hidden;

    img {
      width: 342px;
      height: 342px;
    }
  }
  &__fav-btn {
    position: absolute;
    top: 20px;
    right: 44px;
    z-index: 3;
    cursor: pointer;
  }
  &__info {
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__price-block {
    margin-top: 30px;
    position: relative;
  }
  &__discount {
    font-weight: 500;
    width: fit-content;
    padding: 0 6px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #db0840;
    color: #fff;
    border-radius: 12px;
    font-size: 12px;
    position: absolute;
    top: -40px;
    z-index: 2;
  }
  &__actual-price {
    font-size: 30px;
    font-weight: 600;
  }
  &__actual-price--hot-price {
    color: #db0840;
  }
  &__price-diff {
    display: flex;
    align-items: center;
  }
  &__old-price {
    margin-left: 20px;
    font-weight: 500;
    text-decoration: line-through;
    text-decoration-color: $danger;
  }
  &__name {
    height: 62px;
    margin: 20px 0;
    font-size: 20px;
    font-weight: 500;
    display: -webkit-box;
    max-width: 290px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__action {
    button {
      padding: 0 36px;
      font-weight: 500;
    }
  }
}

@include semi-wide {
  .swiper-container {
    width: 250px;
    margin-right: 20px;
  }
  .swiper-pagination-bullets {
    top: 252px;
  }
  .slide-observer {
    height: 250px;
  }
  .product-card {
    width: 250px;
    &__image {
      img {
        width: 250px;
        height: 250px;
      }
    }
    &__fav-btn {
      top: 12px;
      right: 30px;
    }
    &__info {
      height: 196px;
    }
    &__price-block {
      margin-top: 26px;
    }
    &__discount {
      height: 18px;
      border-radius: 10px;
      font-size: 12px;
      top: -36px;
    }
    &__actual-price {
      font-size: 26px;
      font-weight: 600;
    }
    &__old-price {
      margin-left: 18px;
      font-weight: 500;
      font-size: 16px;
    }
    &__name {
      margin: 0;
      font-size: 17px;
      line-height: 1.2;
      font-weight: 500;
      max-width: 270px;
      -webkit-line-clamp: 3;
    }
  }
}
@include desktop {
  .swiper-container {
    width: 250px;
    margin-right: 20px;
  }
  .swiper-pagination-bullets {
    top: 252px;
  }
  .slide-observer {
    height: 250px;
  }
  .product-card {
    width: 250px;
    &__image {
      img {
        width: 250px;
        height: 250px;
      }
    }
    &__fav-btn {
      top: 12px;
      right: 30px;
    }
    &__info {
      height: 196px;
    }
    &__price-block {
      margin-top: 26px;
    }
    &__discount {
      height: 18px;
      border-radius: 10px;
      font-size: 12px;
      top: -36px;
    }
    &__actual-price {
      font-size: 26px;
      font-weight: 600;
    }
    &__old-price {
      margin-left: 18px;
      font-weight: 500;
      font-size: 16px;
    }
    &__name {
      margin: 0;
      font-size: 17px;
      line-height: 1.2;
      font-weight: 500;
      max-width: 270px;
      -webkit-line-clamp: 3;
    }
  }
}
@include tablet {
  .swiper-container {
    width: 250px;
    margin-right: 20px;
  }
  .swiper-pagination-bullets {
    top: 252px;
  }
  .slide-observer {
    height: 250px;
  }
  .product-card {
    width: 250px;
    &__image {
      img {
        width: 250px;
        height: 250px;
      }
    }
    &__fav-btn {
      top: 12px;
      right: 30px;
    }
    &__info {
      height: 196px;
    }
    &__price-block {
      margin-top: 26px;
    }
    &__discount {
      height: 18px;
      border-radius: 10px;
      font-size: 12px;
      top: -36px;
    }
    &__actual-price {
      font-size: 26px;
      font-weight: 600;
    }
    &__old-price {
      margin-left: 18px;
      font-weight: 500;
      font-size: 16px;
    }
    &__name {
      margin: 0;
      font-size: 17px;
      line-height: 1.2;
      font-weight: 500;
      max-width: 270px;
      -webkit-line-clamp: 3;
    }
  }
}
@include mobile {
  .swiper-container {
    width: 160px;
    margin-right: 0;
  }
  .product-card {
    width: 160px;
    height: auto;

    .swiper-slide {
      width: 160px;
      height: 160px;
    }

    &__fav-btn {
      top: 10px;
      right: 10px;
    }
    &__image {
      overflow-x: hidden;
      overflow-y: hidden;

      .product-card__img-bg {
        width: 160px;
        height: 160px;
      }

      img {
        width: 130px;
        height: 130px;
        margin-top: 15px;
        margin-left: 15px;
      }
    }
    &__price-block {
      margin-top: 15px;
      position: relative;
    }
    &__info {
      height: 136px;
    }
    &__discount {
      height: auto;
      width: fit-content;
      padding: 3px 6px;
      top: -20px;
      font-size: 9px;
      font-weight: 400;
    }
    &__price-diff {
      margin-top: 2px;
    }
    &__name {
      margin: 10px 0;
      font-size: 13px;
      line-height: 1.25;
    }
    &__actual-price {
      font-size: 18px;
    }
    &__old-price {
      font-size: 12px;
      margin-left: 10px;
    }
    &__action {
      button {
        padding: 0 16px;
      }
    }
  }
  .swiper-pagination-bullets {
    top: calc(100vw / 2 - 38px);
    height: 10px;
  }
}
</style>
