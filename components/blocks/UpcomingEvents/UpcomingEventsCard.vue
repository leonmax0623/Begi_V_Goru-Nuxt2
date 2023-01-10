<template>
  <div
    :key="item.id"
    class="upcoming-card"
    :style="`backgroundImage:url(${item.img})`"
  >
    <div class="upcoming-card__header">
      <div class="upcoming-card__tags">
        <span v-for="(tag, idx) in item.tags" :key="idx">
          #{{ tag }}
        </span>
      </div>
      <div class="upcoming-card__star" @click="isFav = !isFav">
        <base-icon v-if="isFav" name="star4" />
        <base-icon v-else name="star3" />
      </div>
    </div>
    <div class="upcoming-card__headline">{{ item.name }}</div>
    <div class="upcoming-card__footer">
      <div class="upcoming-card__info">
        <div class="upcoming-card__date">
          <base-icon name="calendar6" size="14" />
          <span>{{ item.date }}</span>
        </div>
        <div class="upcoming-card__city">
          <base-icon name="map" size="14" />
          <span>{{ item.location }}</span>
        </div>
      </div>
      <div class="upcoming-card__action desktop">
        <base-icon name="arrow1" size="28" height="16" />
      </div>
    </div>
  </div>
</template>
<script>
import BaseIcon from '@/components/base/BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },
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
.upcoming-card {
  width: 100%;
  height: 408px;
  padding: 22px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: 100%;
  background-position: 50%;
  border-radius: 10px;
  color: #fff;
  position: relative;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-size: 110%;
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
        0,
        rgb(0, 22, 43) 0%,
        rgba(0, 22, 43, 0.2) 100%
    );
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;
  }
  &__tags span {
    margin-right: 10px;
    padding: 6px 10px;
    border-radius: 4px;
    background: $main-gradient-color;
    font-size: 12px;
  }
  &__headline {
    margin-top: auto;
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.2;
    z-index: 1;
    display: -webkit-box;
    max-width: 290px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__footer {
    z-index: 1;
  }
  &__date,
  &__city {
    font-size: 18px;
    margin-bottom: 14px;
    color: #dadada;

    svg {
      height: 15px !important;
      margin-right: 6px;
    }
  }
  &__action {
      text-align: right;
      cursor: pointer;
    }
}
@include semi-wide {
  .upcoming-card {
    height: 354px;
    padding: 20px 16px;
    border-radius: 10px;
    &__tags span {
      margin-right: 8px;
      padding: 5px 8px;
      border-radius: 4px;
      font-size: 12px;
    }
    &__headline {
      margin-bottom: 25px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.2;
      max-width: 260px;
      -webkit-line-clamp: 4;
    }
    &__date,
    &__city {
      font-size: 13px;
      margin-bottom: 6px;
      svg {
        width: 12px;
        height: 12px !important;
        margin-right: 10px;
      }
    }
  }
  .upcoming-card__star {
    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
}
@include desktop {
  .upcoming-card {
    height: 354px;
    padding: 20px 16px;
    border-radius: 8px;
    &__tags span {
      margin-right: 6px;
      padding: 4px 7px;
      border-radius: 4px;
      font-size: 11px;
    }
    &__headline {
      margin-bottom: 25px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.2;
      max-width: 220px;
      -webkit-line-clamp: 4;
    }
    &__date,
    &__city {
      font-size: 13px;
      margin-bottom: 6px;
      svg {
        width: 12px;
        height: 12px !important;
        margin-right: 10px;
      }
    }
  }
  .upcoming-card__star {
    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
}
@include tablet {
  .upcoming-card {
    height: 354px;
    padding: 20px 16px;
    border-radius: 8px;
    &__tags span {
      margin-right: 6px;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 11px;
    }
    &__headline {
      margin-bottom: 25px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.2;
      max-width: 200px;
      -webkit-line-clamp: 4;
    }
    &__date,
    &__city {
      font-size: 13px;
      margin-bottom: 6px;
      svg {
        width: 12px;
        height: 12px !important;
        margin-right: 10px;
      }
    }
  }
  .upcoming-card__star {
    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
}
@include mobile {
  .upcoming-card {
    width: 100%;
    height: 224px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: 100%;
    border-radius: 10px;
    color: #fff;
    position: relative;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      background-size: 110%;
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
          0,
          rgb(0, 22, 43) 0%,
          rgba(0, 22, 43, 0.2) 100%
      );
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      z-index: 1;
    }
    &__star {
      svg {
        width: 14px !important;
        height: 14px !important;
      }
    }
    &__tags {
      display: flex;
    }
    &__tags span {
      margin-right: 4px;
      padding: 2px 5px;
      border-radius: 3px;
      background: $main-gradient-color;
      font-size: 10px;
      margin-bottom: 6px;
      display: block;
      width: fit-content;
      height: 14px;

      &:last-child {
        margin-bottom: 0;
      }
    }
    &__headline {
      margin-top: auto;
      margin-bottom: 15px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.25;
      z-index: 1;
      display: -webkit-box;
      max-width: 290px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &__footer {
      z-index: 1;
    }
    &__date {
      margin-bottom: 6px;
    }
    &__date,
    &__city {
      font-size: 11px;
      color: #dadada;
      margin-bottom: 4px;

      svg {
        height: 10px !important;
        margin-right: 4px;
      }
    }
    &__action {
      text-align: right;
      cursor: pointer;
    }
  }
}
</style>
