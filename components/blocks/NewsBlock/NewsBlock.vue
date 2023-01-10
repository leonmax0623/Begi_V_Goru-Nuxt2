<template>
  <div class="block block--full-width news" style="background-color: #f3f3f3">
    <div class="block__wrapper" style="position:relative;">
      <h2 class="block__title">
        Новости
        <ArrowButton>Все новости</ArrowButton>
      </h2>
    </div>
    <div class="mobile items">
      <template v-for="(item, idx) in items">
        <NewsBlockItem :key="idx" :item="item"></NewsBlockItem>
      </template>
    </div>
    <div id="news_items" v-swiper="options" class="desktop swiper-container">
      <div class="items swiper-wrapper">
        <template v-for="(item, idx) in items">
          <NewsBlockItem :key="idx" :item="item"></NewsBlockItem>
        </template>
      </div>
      <swiper-navigation :parent="parent" />
    </div>
  </div>
</template>
<script>
import ArrowButton from "@/components/base/ArrowButton.vue"
import SwiperNavigation from "@/components/SwiperNavigation.vue"
import NewsBlockItem from "@/components/blocks/NewsBlock/NewsBlockItem.vue"

export default {
  components: {
    ArrowButton,
    NewsBlockItem,
    SwiperNavigation
  },
  data() {
    return {
      parent: null,
      items: [
        {
          id: 1,
          img: '/news/news1.jpg',
          date: '12 августа 2022',
          title: 'Первый в Забайкалье трейл прошел под снегом',
        },
        {
          id: 2,
          img: '/news/news2.jpg',
          date: '10 августа 2022',
          title: 'Заголовок новости, которая размещается на несколько строчек',
        },
        {
          id: 3,
          img: '/news/news3.jpg',
          date: '2 августа 2022',
          title: 'Открылся новый магазин СпортМастер в Москве',
        },
        {
          id: 4,
          img: '/news/news4.jpg',
          date: '1 августа 2022',
          title: 'Заголовок новости, которая размещается на несколько строчек',
        },
        {
          id: 5,
          img: '/news/news1.jpg',
          date: '12 августа 2022',
          title: 'Первый в Забайкалье трейл прошел под снегом',
        },
        {
          id: 6,
          img: '/news/news2.jpg',
          date: '10 августа 2022',
          title: 'Заголовок новости, которая размещается на несколько строчек',
        },
        {
          id: 7,
          img: '/news/news3.jpg',
          date: '2 августа 2022',
          title: 'Открылся новый магазин СпортМастер в Москве',
        },
        {
          id: 8,
          img: '/news/news4.jpg',
          date: '1 августа 2022',
          title: 'Заголовок новости, которая размещается на несколько строчек',
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
    }
  },
  mounted() {
    this.parent = document.getElementById('news_items')
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.swiper-container {
  padding-left: calc((100% - 1440px) / 2);
  position: relative;
}
.news {
  padding: 48px 0;
}
.items {
  margin: auto;
  display: flex;
  align-items: flex-start;
}

@include semi-wide {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
  }
  .news {
    padding: 44px 0 60px;
  }
}
@include desktop {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
  }
  .swiper-wrapper {
    width: $max-content-width;
    margin-left: 0;
  }
  .news {
    padding: 44px 0 60px;
  }
}
@include tablet {
  .swiper-container {
    padding-left: 24px;
  }
  .news {
    padding: 44px 0 60px;
  }
}
@include mobile {
  .swiper-container {
    padding-left: 18px;
  }
  .news {
    padding: 24px 0;
  }
  .items {
    padding: 0 18px;
    overflow: auto;

    @include hide-scrollbar;
  }
}
</style>
