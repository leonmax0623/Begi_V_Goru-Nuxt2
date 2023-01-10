<template>
  <div>
    <div ref="swiper" v-swiper="options" class="swiper-container">
      <div class="product-card swiper-wrapper">
        <div
          v-for="(img, idx) in product.images"
          :key="idx"
          class="product-card__image swiper-slide"
        >
          <img :src="img" />
          <div class="product-card__img-bg"></div>
          <div class="product-card__fav-btn" @click.stop="isFav = !isFav">
            <base-icon v-if="!isFav" name="heart1" />
            <base-icon v-else name="heart3" color="red" />
          </div>
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
      />
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
          <base-button label="В корзину" is-submit />
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
@import '../assets/css/mixins';
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
  height: 342px;
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
    top: 0px;
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
    right: 20px;
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
    width: 68px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $danger;
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
    color: $danger;
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
    margin: 20px 0;
    padding-right: 20px;
    font-size: 20px;
    font-weight: 500;
    display: -webkit-box;
    max-width: 290px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

@include xl {
  .swiper-container {
    width: 256px;
  }
  .swiper-pagination-bullets {
    top: 262px;
  }
  .product-card {
    width: 256px;

    img {
      width: 256px;
      height: 256px;
    }
    &__info {
      height: 182px;
    }
    &__discount {
      width: 50px;
      font-size: 8px;
      font-weight: 500;
    }
    &__actual-price {
      font-size: 24px;
    }
    &__old-price {
      font-size: 14px;
    }
    &__name {
      margin: 15px 0;
      font-size: 16px;
    }
  }
}
@include md {
  .swiper-container {
    width: calc(100vw / 2 - 10px);
    margin-right: 0;
  }
  .product-card {
    height: auto;

    &__price-block {
      margin-top: 15px;
      position: relative;
    }
    &__info {
      height: 180px;
    }
    &__discount {
      top: -25px;
    }
    &__name {
      margin: 10px 0;
      font-size: 18px;
    }
    &__actual-price {
      font-size: 25px;
    }
  }
  .swiper-pagination-bullets {
    top: calc(100vw / 2 - 30px);
    height: 10px;
  }
}
</style>
