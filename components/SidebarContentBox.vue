<template>
  <SlideXRightTransition>
    <div v-if="isSidebarOpen">
      <div v-intersection="loadContent" class="sidebar-content-box">
        <div class="sidebar-content-box__name">
          <span>{{ name }}</span>
          <base-icon name="arrow1" size="18" color="#4c3b92" accent />
        </div>
        <tag-line :tags="tags" carousel is-white />
        <sidebar-starts :content="content" />
      </div>
    </div>
  </SlideXRightTransition>
</template>

<script>
import { mapGetters } from 'vuex'
import { SlideXRightTransition } from 'vue2-transitions'

import TagLine from '@/components/TagLine.vue'
import SidebarStarts from '@/components/sidebar/SidebarStarts.vue'

export default {
  name: 'SidebarContentBox',
  components: {
    SlideXRightTransition,
    TagLine,
    SidebarStarts
  },
  props: {
    name: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    tags: [
      'Все события',
      'Онлайн',
      'Бег',
      'Трейлраннинг',
      'Триатлон',
      'Триатлон',
      'Триатлон',
    ],
    content: null
  }),
  computed: {
    ...mapGetters(['isSidebarOpen'])
  },
  created() {
    this.loadContent()
  },
  methods: {
    loadContent() {
      this.content = [
      {
        id: 0,
        year: '2022',
        month: 'Апрель',
        events: [
          {
            date: '08 — 09 апрлея',
            name: 'Фестиваль трейлраннигна Бештаугорский Крест',
            cat: 'Трейлранниг',
            location: 'Россия, г. Ханты-Мансийск',
            image: 'mountain'
          },
          {
            date: '12 апрлея',
            name: 'Так держать #STRELARUN',
            cat: 'Трейлранниг',
            location: 'Весь мир',
            image: 'mountain'
          },
          {
            date: '16 апрлея',
            name: 'Беговая экскурсия по центру Петербурга 16 апреля',
            cat: 'Трейлранниг',
            location: 'Россия, г. Санкт-петербург',
            image: 'mountain'
          }
        ]
      },
      {
        id: 1,
        year: '2022',
        month: 'Май',
        events: [
        {
            date: '08 —  09 апрлея',
            name: 'Фестиваль трейлраннигна Бештаугорский Крест',
            cat: 'Трейлранниг',
            location: 'Россия, г. Ханты-Мансийск',
            image: 'mountain'
          },
          {
            date: '12 апрлея',
            name: 'Так держать #STRELARUN',
            cat: 'Трейлранниг',
            location: 'Весь мир',
            image: 'mountain'
          },
          {
            date: '16 апрлея',
            name: 'Беговая экскурсия по центру Петербурга 16 апреля',
            cat: 'Трейлранниг',
            location: 'Россия, г. Санкт-петербург',
            image: 'mountain'
          },
        ]
      },
      {
        id: 2,
        year: '2022',
        month: 'Май',
        events: [
        {
            date: '08 —  09 апрлея',
            name: 'Фестиваль трейлраннигна Бештаугорский Крест',
            cat: 'Трейлранниг',
            location: 'Россия, г. Ханты-Мансийск',
            image: 'mountain'
          },
          {
            date: '12 апрлея',
            name: 'Так держать #STRELARUN',
            cat: 'Трейлранниг',
            location: 'Весь мир',
            image: 'mountain'
          },
          {
            date: '16 апрлея',
            name: 'Беговая экскурсия по центру Петербурга 16 апреля',
            cat: 'Трейлранниг',
            location: 'Россия, г. Санкт-петербург',
            image: 'mountain'
          },
        ]
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-content-box {
  width: 840px;
  height: 100vh;
  padding: 40px 50px;
  color: #fff;
  background-color: #001529;
  overflow-y: scroll !important;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:before {
    content: '';
    position: fixed;
    width: 50px;
    height: 100%;
    top: 0;
    left: 300px;
    box-shadow: 35px 4px 40px -15px rgba(0, 0, 0, 0.8);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: #001529;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
      background: #767676;
    }

  &__name {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    span {
      margin-right: 10px;
    }
  }
}
</style>
