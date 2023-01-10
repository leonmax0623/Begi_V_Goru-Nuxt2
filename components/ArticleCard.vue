<template>
  <div class="article-card">
    <template v-for="article in articles">
      <div :key="article.id" class="article">
      <div class="article__visual" :style="`backgroundImage:url(${article.img})`">
        <div class="article__header">
          <div class="article__header-top">
            <div class="article__tags">
                <span v-for="(tag, idx) in article.tags" :key="idx" class="article__tag">#{{ tag }}</span>
              </div>
            <div class="article__star" @click="isFav=!isFav">
            <base-icon v-if="isFav" name="star4" />
            <base-icon v-else name="star3" />
          </div>
          </div>
          <div class="article__header-bottom mobile">
            <div class="article__date mobile">{{ article.date }}</div>
            <div class="article__title mobile">{{ article.title }}</div>
          </div>
        </div>
      </div>
      <div class="article__info desktop">
        <div class="article__date">{{ article.date }}</div>
        <div class="article__title">{{ article.title }}</div>
        <div class="article__text">{{ article.text }}</div>
        <div class="article__footer">
          <span>Читать: {{ article.read_time }} мин.</span>
          <span> <base-icon name="eye2" size="16" color="#e2e3e5" /> {{ article.views }}</span>
          <span> <base-icon name="comment" size="16" color="#e2e3e5" /> {{ article.comments }}</span>
        </div>
      </div>
    </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    articles: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    isFav: false
  })
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixins';
.article-card {
  max-width: $max-content-width;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .article {
    max-width: 450px;

    &__visual {
      width: 100%;
      height: 256px;
      padding: 12px;
      margin-bottom: 30px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &__header {;
      &-top {
        padding-top: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__tag {
      margin-right: 10px;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 12px;
      background: $main-gradient-color;
      color: #fff;
    }

    &__star {
      color: #fff;
      cursor: pointer;
    }

    &__date {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
    }

    &__title {
      margin-bottom: 25px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.321;
    }

    &__text {
      line-height: 1.529;
    }

    &__footer {
      margin-top: 30px;
      padding-top: 15px;
      display: flex;
      color: #818181;
      border-top: 1px solid #e2e3e5;

      span {
        margin-right: 10px;
        display: flex;
        align-items: flex-start;
        font-weight: 500;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
}

@include xl {
  .article-card {
    $max-content-width: 1080px;
    max-width: $max-content-width;

    .article {
      max-width: 338px;

      &__visual {
        height: 192px;
        margin-bottom: 22.5px;
      }

      &__tags {
        align-self: flex-start;
      }

      &__tag {
        margin-right: 8px;
        padding: 4px 8px;
        font-size: 10px;
      }

      &__date {
        margin-bottom: 22.5px;
        font-size: 16px;
      }

      &__title {
        margin-bottom: 22.5px;
        font-size: 20px;
      }
    }
  }
}

@include md {
  .article-card {
    flex-direction: column;
    max-width: 100%;

    .article {
      &__visual {
        margin-bottom: 0;
      }
      &__header {
        display: flex;
        flex-direction: column;
        height: calc(100% - 24px);

        &-top {
          padding-top: 0;
        }
        &-bottom {
          margin-top: auto;
        }
      }
      &__date {
        color: #fff;
        margin-bottom: 12px;
      }
      &__title {
        color: #fff;
        margin-bottom: 0;
      }
    }
  }
}
</style>
