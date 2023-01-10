<template>
  <div class="block">
    <div class="block__wrapper">
      <div>
        <h2>Ближайшие события</h2>
      </div>
      <div class="events__tags">
        <TagsCategories :items="tags" :hashtags="true"></TagsCategories>
        <base-toggle v-model="isMap" class="desktop" label="Карта событий" />
      </div>
      <div class="mobile" style="display:flex;justify-content:flex-end;margin-bottom:14px;">
        <base-toggle v-model="isMap" label="Карта событий" />
      </div>
      <template v-if="isMap">
        <UpcomingEventsMap :surfaces="surfaces"></UpcomingEventsMap>
      </template>
      <template v-else>
        <div class="home__upcoming">
          <template v-for="(item, idx) in events">
            <UpcomingEventsCard :item="item" :key="idx"></UpcomingEventsCard>
          </template>
        </div>
        <div class="home__load-more-btn">
          <button class="button button--outline-gradient-bg-white w-100">Загрузить еще</button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import TagsCategories from "~/components/blocks/TagsCategories.vue"
import UpcomingEventsCard from "~/components/blocks/UpcomingEvents/UpcomingEventsCard"
import UpcomingEventsMap from "~/components/blocks/UpcomingEvents/UpcomingEventsMap"
import surfaces from "~/mocks/mapEvents.js"

export default {
  components: {
    UpcomingEventsMap,
    UpcomingEventsCard,
    TagsCategories
  },
  data() {
    return {
      surfaces,
      isMap: false,
      events: [
        {
          id: 11,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 12,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег', 'Онлайн'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 13,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 14,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 15,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 16,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек  несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 17,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 18,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 19,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
        {
          id: 20,
          img: '/sports/running.jpg',
          name: 'Заголовок события размещается здесь. Без сокращений, на несколько строчек',
          tags: ['Бег'],
          date: '30 сентября',
          location: 'Санкт-Петербург',
        },
      ],
      tags: [
        'Все события',
        'Старты',
        'Туризм',
        'Кэмпы'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/_mixins';
.events__tags {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home__upcoming {
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 32px;
}
.home__load-more-btn {
  button {
    font-weight: 500;
  }
}
@include semi-wide {
  .events__tags {
    margin-bottom: 35px;
  }
  .home__upcoming {
    grid-gap: 22px 20px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 28px;
  }
}
@include desktop {
  .events__tags {
    margin-bottom: 35px;
  }
  .home__upcoming {
    grid-gap: 22px 20px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 24px;
  }
}
@include tablet {
  .events__tags {
    margin-bottom: 35px;
  }
  .home__upcoming {
    grid-gap: 22px 20px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 20px;
  }
}
@include mobile {
  .events__tags {
    margin-bottom: 20px;
  }
  .home__upcoming {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 20px;
  }
  .home__load-more-btn {
    margin: 0 auto;
    width: fit-content;
  }
}
</style>
