<template>
  <div class="block">
    <div class="block__wrapper">
      <h2 class="block__title">
        Статьи
        <ArrowButton>Все статьи</ArrowButton>
      </h2>
      <div class="block__tags">
        <TagsCategories :items="tags" :hashtags="true"></TagsCategories>
      </div>
      <div class="article-card">
        <template v-for="(item, idx) in articles">
          <ArticleItem :item="item" :key="idx"></ArticleItem>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import ArrowButton from '@/components/base/ArrowButton.vue'
import ArticleItem from "@/components/blocks/Articles/ArticleItem.vue"
import TagsCategories from "@/components/blocks/TagsCategories.vue"

export default {
  components: {
    ArrowButton,
    ArticleItem,
    TagsCategories
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          img: '/articles/art1.jpg',
          tags: ['Трейлранниг', 'СоветыЭкспертов'],
          date: '12 августа 2022',
          title: 'Как ухаживать за экипировкой и хранить снаряжение',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit.',
          read_time: 7,
          views: 721,
          comments: 2,
        },
        {
          id: 2,
          img: '/articles/art2.jpg',
          tags: ['Питание'],
          date: '12 августа 2022',
          title: 'Как ухаживать за экипировкой и хранить снаряжение',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit.',
          read_time: 7,
          views: 721,
          comments: 2,
        },
        {
          id: 3,
          img: '/articles/art2.jpg',
          tags: ['Питание'],
          date: '12 августа 2022',
          title: 'Как ухаживать за экипировкой и хранить снаряжение',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit.',
          read_time: 7,
          views: 721,
          comments: 2,
        },
      ],
      tags: [
        'Все темы',
        'Упражнения',
        'СоветыЭкспертов',
        'Питание',
        'Маршруты'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.block__tags {
  margin-bottom: 36px;
}
.article-card {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

@include semi-wide {
  .block__tags {
    margin-bottom: 36px;
  }
  .article-card {
    grid-gap: 30px;
  }
}
@include desktop {
  .block__tags {
    margin-bottom: 36px;
  }
  .article-card {
    grid-gap: 30px;
  }
}
@include tablet {
  .block__tags {
    margin-bottom: 36px;
  }
  .article-card {
    grid-gap: 30px;
  }
}
@include mobile {
  .block__tags {
    margin-bottom: 20px;
  }
  .article-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    max-width: 100%;
  }
}
</style>
