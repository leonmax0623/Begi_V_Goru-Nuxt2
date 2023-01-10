<template>
  <div class="block block--full-width">
    <div class="block__wrapper">
      <h2>События по видам спорта</h2>
    </div>
    <div class="events mobile">
      <template v-for="(item, idx) in items">
        <SportEventCard :item="item" :key="idx"></SportEventCard>
      </template>
    </div>
    <div id="se_items" v-swiper="options" class="swiper-container desktop">
      <div class="events swiper-wrapper">
        <template v-for="(item, idx) in items">
          <SportEventCard class="swiper-slide" :item="item" :key="idx"></SportEventCard>
        </template>
      </div>
      <swiper-navigation :parent="parent" />
    </div>
  </div>
</template>
<script>
import SwiperNavigation from '@/components/SwiperNavigation.vue'
import SportEventCard from "~/components/blocks/SportEvents/SportEventCard";
export default {
  components: {
    SportEventCard,
    SwiperNavigation
  },
  data() {
    return {
      parent: null,
      items: [
        {
          id: 1,
          name: 'Туризм',
          count: 14,
          img: '/sports/tourism.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 2,
          name: 'Кэмпы',
          count: 8,
          img: '/sports/camping.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 3,
          name: 'Бег',
          count: 26,
          img: '/sports/running.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 4,
          name: 'Трейлы',
          count: 14,
          img: '/sports/trailing.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 5,
          name: 'Плавание',
          count: 7,
          img: '/sports/swimming.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 6,
          name: 'Велоспорт',
          count: 1,
          img: '/sports/cycling.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 7,
          name: 'Альпинизм',
          count: 14,
          img: '/sports/alpinism.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 8,
          name: 'Альпинизм',
          count: 14,
          img: '/sports/alpinism.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
        {
          id: 9,
          name: 'Альпинизм',
          count: 14,
          img: '/sports/alpinism.jpg',
          events: [
            {
              date: '18 сентября',
              name: 'Заголовок ближайшего события',
              img: 'mountain',
            },
            {
              date: '22-28 сентября',
              name: 'Заголовок события, который размещается на несколько строчек',
              img: 'mountain',
            },
            {
              date: '30 сентября - 6 октября',
              name: 'Заголовок. Если название события длинное, то сокращаем его до 3 строк и тут еще какие то слова',
              img: 'mountain',
            },
          ],
        },
      ]
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: 'auto',
        width: 1080,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    },
  },
  mounted() {
    this.parent = document.getElementById('se_items')
  },
  methods: {
    eventDeclination(value) {
      const words = ['событие', 'события', 'событий']
      value = Math.abs(value) % 100
      const num = value % 10
      if (value > 10 && value < 20) return words[2]
      if (num > 1 && num < 5) return words[1]
      if (num === 1) return words[0]
      return words[2]
    },
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';

.events {
  display: flex;
}

.swiper-container {
  padding-left: calc((100% - 1440px) / 2);
}

@include semi-wide {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
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
  .events {
    overflow: auto;
    padding-left: 18px;
    padding-right: 18px;

    @include hide-scrollbar;
  }
}
</style>
