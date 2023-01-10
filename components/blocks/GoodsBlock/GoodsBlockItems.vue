<template>
  <div class="block block--full-width">
    <div class="block__wrapper">
      <h2 class="block__title desktop">
        Товары для любимого занятия
        <ArrowButton class="desktop">Все товары</ArrowButton>
      </h2>
      <h2 class="mobile">Интернет-магазин</h2>
    </div>
    <div class="mobile">
        <div class="items">
          <div
            v-for="item in items"
            :key="item.id"
            class="items__item"
            :style="`backgroundImage:url(${item.img})`"
          >
            <div class="items__item-wrapper">
              <div class="items__name">{{ item.name }}</div>
              <div class="items__count">{{ item.count }} товаров</div>
            </div>
          </div>
        </div>
    </div>
    <div id="gd_items" v-swiper="options" class="swiper-container desktop">
      <div class="items swiper-wrapper">
        <div
          v-for="(group, index) in groupedGoods"
          :key="index"
          class="swiper-slide items-group"
          :class="[{ 'items-group--reverse': index !== 0 && index % 2 === 1 }]"
        >
          <div
            v-for="item in group"
            :key="item.id"
            class="items-group__item"
            :style="`backgroundImage:url(${item.img})`"
          >
            <div class="items-group__name">{{ item.name }}</div>
            <div class="items-group__count">{{ item.count }} товаров</div>
          </div>
        </div>
      </div>
      <swiper-navigation :parent="parent" />
    </div>
  </div>
</template>
<script>
import ArrowButton from "@/components/base/ArrowButton.vue"

export default {
  components: {
    ArrowButton
  },
  data() {
    return {
      parent: null,
      items: [
        {
          id: 1,
          img: '/goods/goods1.jpg',
          name: 'Пульсометры',
          count: 10,
        },
        {
          id: 2,
          img: '/goods/goods2.jpg',
          name: 'Экипировка',
          count: 120,
        },
        {
          id: 3,
          img: '/goods/goods3.jpg',
          name: 'Часы',
          count: 120,
        },
        {
          id: 4,
          img: '/goods/goods4.jpg',
          name: 'Палатки',
          count: 120,
        },
        {
          id: 5,
          img: '/goods/goods5.jpg',
          name: 'Название категории',
          count: 15,
        },
        {
          id: 6,
          img: '/goods/goods6.jpg',
          name: 'Термокружки',
          count: 86,
        },
        {
          id: 7,
          img: '/goods/goods1.jpg',
          name: 'Название',
          count: 120,
        },
        {
          id: 8,
          img: '/goods/goods2.jpg',
          name: 'Название категории',
          count: 10,
        },
        {
          id: 9,
          img: '/goods/goods3.jpg',
          name: 'Название',
          count: 120,
        },
        {
          id: 10,
          img: '/goods/goods1.jpg',
          name: 'Название',
          count: 120,
        },
        {
          id: 11,
          img: '/goods/goods2.jpg',
          name: 'Название категории',
          count: 10,
        },
        {
          id: 12,
          img: '/goods/goods3.jpg',
          name: 'Название',
          count: 120,
        },
        {
          id: 13,
          img: '/goods/goods1.jpg',
          name: 'Название',
          count: 120,
        },
        {
          id: 14,
          img: '/goods/goods2.jpg',
          name: 'Название категории',
          count: 10,
        },
        {
          id: 15,
          img: '/goods/goods3.jpg',
          name: 'Название',
          count: 120,
        },
      ]
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    },
    groupedGoods() {
      const size = 3
      const grouped = []
      const goodsCopy = [...this.items]
      while (goodsCopy.length > 0) {
        grouped.push(goodsCopy.splice(0, size))
      }
      return grouped
    }
  },
  mounted() {
    this.parent = document.getElementById('gd_items')
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.swiper-container {
  padding-left: calc((100% - 1440px) / 2);
  position: relative;
}
.items {
  display: flex;

  &-group {
    max-width: 708px;
    display: flex;
    flex-wrap: wrap;

    &__item {
      cursor: pointer;
      width: calc(50% - 25px);
      height: calc(219px - 25px);
      margin-right: 25px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 6px;
      background-size: 120%;
      background-position: 50%;
      background-repeat: no-repeat;
      color: #fff;
      position: relative;
      transition: all 0.25s;

      &:hover {
        background-size: 135%;
      }

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 6px;
        background: linear-gradient(
            90deg,
            rgba(0, 22, 43, 0.5) 0%,
            rgba(0, 22, 43, 0.2) 100%
        );
      }
    }
    &__item:first-child {
      width: 100%;
      height: calc(276px - 25px);
      padding: 40px;
      margin-bottom: 20px;

      .items-group__name {
        font-size: 42px;
      }
    }

    &__name,
    &__count {
      z-index: 2;
    }
    &__name {
      font-size: 30px;
      font-weight: 500;
      line-height: 1.1;
    }
    &__count {
      color: #ccc;
    }
  }
  &-group--reverse .items-group__item:first-child {
    width: calc(50% - 25px);
    height: calc(219px - 25px);
    padding: 30px;
  }
  &-group--reverse .items-group__item {
    .items-group__name {
      font-size: 30px;
    }
  }
  &-group--reverse .items-group__item:last-child {
    width: 100%;
    height: calc(276px - 25px);
    padding: 40px;

    .items-group__name {
      font-size: 42px;
    }
  }
}

@include semi-wide {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
  }
  .items {
    &-group {
      max-width: 550px;
      &__item {
        width: calc(50% - 20px);
        height: calc(186px - 20px);
        margin-right: 20px;
        padding: 25px;
        border-radius: 6px;
      }
      &__item:first-child {
        height: calc(228px - 20px);
        padding: 30px;
        margin-bottom: 16px;

        .items-group__name {
          font-size: 32px;
        }
        .items-group__count {
          font-size: 15px;
        }
      }
      &__name {
        font-size: 24px;
      }
      &__count {
        font-size: 14px;
      }
    }
    &-group--reverse .items-group__item:first-child {
      width: calc(50% - 20px);
      height: calc(186px - 20px);
      padding: 20px;
    }
    &-group--reverse .items-group__item {
      .items-group__name {
        font-size: 24px;
      }
      .items-group__count {
        font-size: 14px;
      }
    }
    &-group--reverse .items-group__item:last-child {
      width: 100%;
      height: calc(228px - 20px);
      padding: 30px;

      .items-group__name {
        font-size: 32px;
      }
      .items-group__count {
        font-size: 15px;
      }
    }
  }
}
@include desktop {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
  }
  .items {
    &-group {
      max-width: 550px;
      &__item {
        width: calc(50% - 20px);
        height: calc(186px - 20px);
        margin-right: 20px;
        padding: 25px;
        border-radius: 6px;
      }
      &__item:first-child {
        height: calc(228px - 20px);
        padding: 30px;
        margin-bottom: 16px;

        .items-group__name {
          font-size: 32px;
        }
        .items-group__count {
          font-size: 15px;
        }
      }
      &__name {
        font-size: 24px;
      }
      &__count {
        font-size: 14px;
      }
    }
    &-group--reverse .items-group__item:first-child {
      width: calc(50% - 20px);
      height: calc(186px - 20px);
      padding: 20px;
    }
    &-group--reverse .items-group__item {
      .items-group__name {
        font-size: 24px;
      }
      .items-group__count {
        font-size: 14px;
      }
    }
    &-group--reverse .items-group__item:last-child {
      width: 100%;
      height: calc(228px - 20px);
      padding: 30px;

      .items-group__name {
        font-size: 32px;
      }
      .items-group__count {
        font-size: 15px;
      }
    }
  }
}
@include tablet {
  .swiper-container {
    padding-left: 24px
  }
  .items {
    &-group {
      max-width: 550px;
      &__item {
        width: calc(50% - 20px);
        height: calc(186px - 20px);
        margin-right: 20px;
        padding: 25px;
        border-radius: 6px;
      }
      &__item:first-child {
        height: calc(228px - 20px);
        padding: 30px;
        margin-bottom: 16px;

        .items-group__name {
          font-size: 32px;
        }
        .items-group__count {
          font-size: 15px;
        }
      }
      &__name {
        font-size: 24px;
      }
      &__count {
        font-size: 14px;
      }
    }
    &-group--reverse .items-group__item:first-child {
      width: calc(50% - 20px);
      height: calc(186px - 20px);
      padding: 20px;
    }
    &-group--reverse .items-group__item {
      .items-group__name {
        font-size: 24px;
      }
      .items-group__count {
        font-size: 14px;
      }
    }
    &-group--reverse .items-group__item:last-child {
      width: 100%;
      height: calc(228px - 20px);
      padding: 30px;

      .items-group__name {
        font-size: 32px;
      }
      .items-group__count {
        font-size: 15px;
      }
    }
  }
}
@include mobile {
  .swiper-container {
    padding-left: 18px;
  }
  .items {
    overflow: auto;
    white-space: nowrap;
    width: auto;
    display: block;
    padding-left: 18px;

    @include hide-scrollbar;

    &__item {
      width: 270px;
      height: 168px;
      margin-right: 18px;
      margin-bottom: 0;
      padding: 20px;
      display: inline-block;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 4px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      color: #fff;
      position: relative;

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 4px;
        background: linear-gradient(
            90deg,
            rgba(0, 22, 43, 0.5) 0%,
            rgba(0, 22, 43, 0.2) 100%
        );
      }
      &-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }
    &__name {
      color: #fff;
      z-index: 99;
      font-size: 24px;
      font-weight: 600;
    }
    &__count {
      margin-top: auto;
      color: #fff;
      z-index: 99;
      opacity: 0.7;
      font-size: 14px;
    }
  }
}
</style>
