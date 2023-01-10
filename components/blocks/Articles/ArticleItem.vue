<template>
  <div class="article">
    <div class="article__visual" :style="`backgroundImage:url(${item.img})`">
      <div class="article__header">
        <div class="article__header-top">
          <div class="article__tags">
            <span
              v-for="(tag, idx) in item.tags"
              :key="idx"
              class="article__tag">
              #{{ tag }}
            </span>
          </div>
          <div class="article__star" @click="isFav=!isFav">
            <base-icon v-if="isFav" name="star4" />
            <base-icon v-else name="star3" />
          </div>
        </div>
        <div class="article__header-bottom mobile">
          <div class="article__date mobile">{{ item.date }}</div>
          <div class="article__title mobile">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="article__info desktop">
      <div class="article__date">{{ item.date }}</div>
      <div class="article__title">{{ item.title }}</div>
      <div class="article__text">{{ item.text }}</div>
      <div class="article__footer">
        <span>Читать: <time>{{ item.read_time }} мин.</time></span>
        <span>
          <base-icon name="eye2" size="16" color="#e2e3e5" /> {{ item.views }}
        </span>
        <span>
          <base-icon name="comment" size="16" color="#e2e3e5" /> {{ item.comments }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  },
  data() {
    return {
      isFav: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.article {
  cursor: pointer;

  &__visual {
    width: 100%;
    height: 256px;
    padding: 12px;
    margin-bottom: 30px;
    background-size: 120%;
    background-position: 50%;
    background-repeat: no-repeat;
    transition: background .2s;
  }
  &:hover {
    .article__visual {
      background-size: 140%;
    }
  }
  &__header {
    position: relative;
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
    font-size: 17px;
    font-weight: 500;
  }
  &__title {
    margin-bottom: 18px;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.321;
  }
  &__text {
    font-size: 17px;
    line-height: 1.529;
  }
  &__footer {
    margin-top: 22px;
    padding-top: 15px;
    display: flex;
    color: #818181;
    border-top: 1px solid #e2e3e5;

    span {
      font-size: 16px;
      margin-right: 10px;
      display: flex;
      align-items: flex-start;
      font-weight: 400;

      time {
        margin-left: 5px;
        font-weight: 500;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
}

@include semi-wide {
  .article {
    &__visual {
      height: 190px;
      padding: 6px;
      margin-bottom: 26px;
    }
    &__star {
      svg {
        width: 20px !important;
        height: 20px !important;
      }
    }
    &__header {
      &-top {
        padding-top: 0;
      }
    }
    &__tags {
      align-self: flex-start;
    }
    &__tag {
      margin-right: 8px;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 10px;
    }
    &__date {
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
    }
    &__title {
      margin-bottom: 14px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.2;
    }
    &__text {
      font-size: 16px;
      line-height: 1.4;
    }
    &__footer {
      margin-top: 18px;
      padding-top: 14px;
      span {
        font-size: 14px;
        margin-right: 16px;
        svg {
          margin-top: -1px;
          margin-right: 5px;
        }
      }
    }
  }
}
@include desktop {
  .article {
    &__visual {
      height: 190px;
      margin-bottom: 26px;
      padding: 6px;
    }
    &__star {
      svg {
        width: 20px !important;
        height: 20px !important;
      }
    }
    &__header {
      &-top {
        padding-top: 0;
      }
    }
    &__tags {
      align-self: flex-start;
    }
    &__tag {
      margin-right: 6px;
      padding: 4px 8px;
      font-size: 10px;
    }
    &__date {
      margin-bottom: 12px;
      font-size: 16px;
    }
    &__title {
      margin-bottom: 14px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.1;
    }
    &__text {
      font-size: 16px;
      line-height: 1.4;
    }
    &__footer {
      margin-top: 18px;
      padding-top: 14px;
      span {
        font-size: 14px;
        margin-right: 16px;
        svg {
          margin-top: -1px;
          margin-right: 5px;
        }
      }
    }
  }
}
@include tablet {
  .article {
    &__visual {
      height: 190px;
      margin-bottom: 26px;
      padding: 6px;
    }
    &__header {
      &-top {
        padding-top: 0;
      }
    }
    &__star {
      svg {
        width: 20px !important;
        height: 20px !important;
      }
    }
    &__tags {
      align-self: flex-start;
    }
    &__tag {
      margin-right: 4px;
      padding: 3px 6px;
      font-size: 10px;
    }
    &__date {
      margin-bottom: 12px;
      font-size: 16px;
    }
    &__title {
      margin-bottom: 14px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
    }
    &__text {
      font-size: 16px;
      line-height: 1.4;
    }
    &__footer {
      margin-top: 18px;
      padding-top: 14px;
      span {
        font-size: 14px;
        margin-right: 16px;
        svg {
          margin-top: -1px;
          margin-right: 5px;
        }
      }
    }
  }
}
@include mobile {
  .article {

    &:last-child {
      margin-bottom: 0;
    }
    &__visual {
      margin-bottom: 0;
      height: 190px;
      position: relative;

      &:before {
        content: '';
        background: linear-gradient(3600deg, #00162b 0%, rgba(0, 22, 43, 0) 100%);
        opacity: .7;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    &__header {
      display: flex;
      flex-direction: column;
      height: 100%;

      &-top {
        padding-top: 0;
        align-items: flex-start;
      }
      &-bottom {
        margin-top: auto;
      }
    }
    &__tag {
      margin-right: 4px;
      padding: 3px 5px;
      border-radius: 3px;
      font-size: 10px;
      background: $main-gradient-color;
      color: #fff;
    }
    &__star {
      svg {
        height: 14px !important;
      }
    }
    &__date {
      color: #fff;
      margin-bottom: 12px;
      font-size: 12px;
    }
    &__title {
      color: #fff;
      margin-bottom: 0;
      font-size: 18px;
    }
  }
}
</style>
