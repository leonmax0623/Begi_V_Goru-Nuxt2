<template>
  <SlideYDownTransition :duration="200">
    <div class="mega-menu-wrapper">
      <div class="mega-menu" @mouseleave="clickOutside">
        <div class="mega-menu__cat-list">
          <div v-for="cat in cats" :key="cat.id" class="mega-menu-cat">
            <img :src="cat.img">
            <div class="mega-menu__cat-wrapper">
              <div class="mega-menu-cat__title">{{ cat.name }}</div>
              <div v-for="sub in cat.subcats" :key="sub.id" class="mega-menu-cat__sub">{{ sub.name }}</div>
            </div>
          </div>
        </div>
        <div class="mega-menu__all-cats">Все категории</div>
        <div v-swiper="options" class="swiper-container">
          <div class="swiper-wrapper mega-menu__brands">
            <div v-for="(brand, index) in brands" :key="index" class="swiper-slide mega-menu__brand">
              <img :src="brand">
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideYDownTransition>
</template>
<script>
import { SlideYDownTransition } from 'vue2-transitions'

export default {
  name: 'MegaMenu',
  components: {
    SlideYDownTransition
  },
  data: () => ({
    cats: [
      {
        id: 1,
        name: 'Экипировка',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Подкатегория' },
          { id: 2, name: 'Название поддкатегории' },
          { id: 3, name: 'Категория' },
          { id: 4, name: 'Название' },
        ]
      },
      {
        id: 2,
        name: 'Туризм',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Палатки' },
          { id: 2, name: 'Снаряжение' },
          { id: 3, name: 'Категория' },
          { id: 4, name: 'Название катеогрии' },
          { id: 5, name: 'Ножи и мультитулы' },
        ]
      },
      {
        id: 3,
        name: 'Название категории',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Подкатегория' },
          { id: 2, name: 'Название поддкатегории' },
          { id: 3, name: 'Категория' },
        ]
      },
      {
        id: 4,
        name: 'Обувь',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Для бега' },
          { id: 2, name: 'Кроссовкт' },
          { id: 3, name: 'Для лыжников' },
          { id: 4, name: 'Название' },
        ]
      },
      {
        id: 5,
        name: 'Туризм',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Палатки' },
          { id: 2, name: 'Снаряжение' },
          { id: 3, name: 'Категория' },
          { id: 4, name: 'Название катеогрии' },
          { id: 5, name: 'Ножи и мультитулы' },
        ]
      },
      {
        id: 6,
        name: 'Обувь',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Для бега' },
          { id: 2, name: 'Кроссовкт' },
          { id: 3, name: 'Для лыжников' },
          { id: 4, name: 'Название' },
        ]
      },
      {
        id: 7,
        name: 'Экипировка',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Подкатегория' },
          { id: 2, name: 'Название поддкатегории' },
          { id: 3, name: 'Категория' },
          { id: 4, name: 'Название' },
        ]
      },
      {
        id: 8,
        name: 'Название категории',
        img: '/goods/megasumka.jpg',
        subcats: [
          { id: 1, name: 'Подкатегория' },
          { id: 2, name: 'Название поддкатегории' },
          { id: 3, name: 'Категория' },
        ]
      },
    ],
    brands: [
      '/brands/adidas-logo.png',
      '/brands/brooks-logo.png',
      '/brands/hoka-logo.png',
      '/brands/mizuno-logo.png',
      '/brands/new-balance-logo.png',
      '/brands/nike-logo.png',
      '/brands/adidas-logo.png',
      '/brands/brooks-logo.png',
      '/brands/hoka-logo.png',
      '/brands/mizuno-logo.png',
      '/brands/new-balance-logo.png',
      '/brands/nike-logo.png',
      '/brands/adidas-logo.png',
      '/brands/brooks-logo.png',
      '/brands/hoka-logo.png',
      '/brands/mizuno-logo.png',
      '/brands/new-balance-logo.png',
      '/brands/nike-logo.png'
    ]
  }),
  computed: {
    options() {
      return {
        slidesPerView: 3,
        autoPlay: {
          delay: 1000
        },
      }
    }
  },
  methods: {
    clickOutside() {
      this.$emit('click-outside')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/mixins';
.mega-menu-wrapper {
  margin-inline: auto;
  position: absolute;
  top: 50px;
}
.mega-menu {
  width: 1440px;
  padding: 50px 30px;
  margin: 0 auto;
  // margin-left: calc((100% - 1440px) / 2);
  background-color: $secondary;
  border-radius: 0 0 6px 6px;

  &__cat-wrapper {
    padding-top: 6px;
  }
  &__cat-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    .mega-menu-cat {
      width: calc(25% - 85px);
      margin-bottom: 35px;
      margin-right: 85px;
      display: flex;

      img {
        width: 65px;
        height: 65px;
        margin-right: 20px;
        border-radius: 4px;
      }

      &__title {
        margin-bottom: 25px;
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        color: #fff;
        letter-spacing: 0.025em;
      }

      &__sub {
        margin-top: 13px;
        color: #ccc;
      }
    }
  }
  &__all-cats {
    width: fit-content;
    margin: auto;
    padding-bottom: 8px;
    font-size: 24px;
    color: #fff;
    border-bottom: 4px solid $accent;
    cursor: pointer;
  }
  &__brands {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__brand {
    min-width: 180px;
    height: 100px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4a5a68;
    border-radius: 4px;
  }
}

@include semi-wide {
  .mega-menu {
    width: 1280px;
    padding: 38px 28px;
    &__cat-list {
      .mega-menu-cat {
        width: calc(25% - 72px);
        margin-bottom: 28px;
        margin-right: 72px;
        img {
          width: 58px;
          height: 58px;
          margin-right: 18px;
          border-radius: 4px;
        }
        &__title {
          margin-bottom: 22px;
          font-size: 22px;
          line-height: 24px;
          font-weight: 600;
          letter-spacing: 0.025em;
        }
        &__sub {
          margin-top: 11px;
        }
      }
    }
    &__all-cats {
      padding-bottom: 6px;
      font-size: 22px;
      border-bottom: 3px solid $accent;
    }
    &__brands {
      margin-top: 38px;
    }
    &__brand {
      min-width: 160px;
      height: 82px;
      margin-right: 18px;
      border: 2px solid #4a5a68;
      border-radius: 4px;
    }
  }
}
@include desktop {
  .mega-menu {
    width: 1080px;
    padding: 32px 24px;
    &__cat-list {
      .mega-menu-cat {
        width: calc(25% - 66px);
        margin-bottom: 24px;
        margin-right: 66px;
        img {
          width: 52px;
          height: 52px;
          margin-right: 16px;
          border-radius: 3px;
        }
        &__title {
          margin-bottom: 18px;
          font-size: 20px;
          line-height: 22px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        &__sub {
          margin-top: 10px;
        }
      }
    }
    &__all-cats {
      padding-bottom: 5px;
      font-size: 20px;
      border-bottom: 2px solid $accent;
    }
    &__brands {
      margin-top: 32px;
    }
    &__brand {
      min-width: 126px;
      height: 72px;
      margin-right: 16px;
      border: 2px solid #4a5a68;
      border-radius: 3px;
    }
  }
}
@include tablet {
  .mega-menu {
    width: calc(100vw - 48px);
    padding: 28px 20px;
    &__cat-list {
      .mega-menu-cat {
        width: 25%;
        margin-bottom: 22px;
        margin-right: 60px;
        img {
          width: 48px;
          height: 48px;
          margin-right: 14px;
          border-radius: 3px;
        }
        &__title {
          margin-bottom: 16px;
          font-size: 18px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        &__sub {
          margin-top: 8px;
        }
      }
    }
    &__all-cats {
      padding-bottom: 4px;
      font-size: 18px;
      border-bottom: 2px solid $accent;
    }
    &__brands {
      margin-top: 28px;
    }
    &__brand {
      min-width: 112px;
      height: 66px;
      margin-right: 14px;
      border: 2px solid #4a5a68;
      border-radius: 3px;
    }
  }
}
</style>
