<template>
  <div class="block block--full-width">
    <div class="block__wrapper desktop">
      <h2 class="block__title">
        Интернет-магазин #БегиВгору
        <ArrowButton>Все товары</ArrowButton>
      </h2>
    </div>
    <div class="mobile">
        <div class="items swiper-wrapper">
          <div v-for="product in items" :key="product.id" class="swiper-slide">
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    <div id="pr_items" v-swiper="options" class="swiper-container desktop">
        <div class="items swiper-wrapper">
          <template v-for="product in items">
            <ProductItem class="swiper-slide" :key="product.id" :product="product" />
          </template>
        </div>
        <swiper-navigation :parent="parent" />
      </div>
  </div>
</template>
<script>
import ArrowButton from "@/components/base/ArrowButton.vue"
import ProductItem from "@/components/blocks/ProductsBlock/ProductItem.vue"
import SwiperNavigation from '@/components/SwiperNavigation.vue'

export default {
  components: {
    ArrowButton,
    ProductItem,
    SwiperNavigation
  },
  data() {
    return {
      parent: null,
      items: [
        {
          id: 1,
          images: [
            '/products/led_simple.jpg',
            '/products/vail.jpg',
            '/products/polar_vintage.jpg',
          ],
          actual_price: 4990,
          old_price: 5990,
          discount: 1000,
          name: 'Фонарь LED SimpleShop светодиодный для охоты и рыбалки, аккумуляторный, с радио',
        },
        {
          id: 2,
          images: [
            '/products/vail.jpg',
            '/products/led_simple.jpg',
            '/products/polar_vintage.jpg',
            '/products/evo_fitness.jpg',
          ],
          actual_price: 4990,
          old_price: null,
          discount: null,
          name: 'Термос Вакуумный, Кнопка-клапан, Крышка-чашка, Кошка-пушка VAIL',
        },
        {
          id: 3,
          images: [
            '/products/polar_vintage.jpg',
            '/products/led_simple.jpg',
            '/products/vail.jpg',
            '/products/evo_fitness.jpg',
          ],
          actual_price: 30990,
          old_price: 32990,
          discount: 2000,
          name: 'Спортивные часы Polar Vantage M2 GPS',
        },
        {
          id: 4,
          images: [
            '/products/evo_fitness.jpg',
            '/products/led_simple.jpg',
            '/products/vail.jpg',
            '/products/polar_vintage.jpg',
          ],
          actual_price: 4990,
          old_price: null,
          discount: null,
          name: 'Беговая дорожка EVO FITNESS Omega электрическая, складная для дома',
        },
        {
          id: 5,
          images: [
            '/products/led_simple.jpg',
            '/products/vail.jpg',
            '/products/polar_vintage.jpg',
          ],
          actual_price: 4990,
          old_price: 5990,
          discount: 1000,
          name: 'Фонарь LED SimpleShop светодиодный для охоты и рыбалки, аккумуляторный, с радио',
        },
        {
          id: 6,
          images: [
            '/products/vail.jpg',
            '/products/led_simple.jpg',
            '/products/polar_vintage.jpg',
            '/products/evo_fitness.jpg',
          ],
          actual_price: 4990,
          old_price: null,
          discount: null,
          name: 'Термос Вакуумный, Кнопка-клапан, Крышка-чашка, Кошка-пушка VAIL',
        },
        {
          id: 7,
          images: [
            '/products/polar_vintage.jpg',
            '/products/led_simple.jpg',
            '/products/vail.jpg',
            '/products/evo_fitness.jpg',
          ],
          actual_price: 30990,
          old_price: 32990,
          discount: 2000,
          name: 'Спортивные часы Polar Vantage M2 GPS',
        },
        {
          id: 8,
          images: [
            '/products/evo_fitness.jpg',
            '/products/led_simple.jpg',
            '/products/vail.jpg',
            '/products/polar_vintage.jpg',
          ],
          actual_price: 4990,
          old_price: null,
          discount: null,
          name: 'Беговая дорожка EVO FITNESS Omega электрическая, складная для дома',
        },
      ]
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: 'auto',
        // noSwiping: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted() {
    this.parent = document.getElementById('pr_items')
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.swiper-container {
  padding-left: calc((100% - 1440px) / 2);
  position: relative;
}
.items {
  margin: auto;
  display: flex;
  align-items: flex-start;
}

@include semi-wide {
  .swiper-container {
    padding-left: calc((100% - 1280px) / 2);
  }
}
@include desktop {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
  }
}
@include tablet {
  .swiper-container {
    padding-left: 24px;
  }
}
@include mobile {
  .swiper-container {
    padding-left: 16px;
  }
  .items {
    overflow: auto;
    padding-left: 18px;
    padding-right: 18px;

    @include hide-scrollbar

    .swiper-slide {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
