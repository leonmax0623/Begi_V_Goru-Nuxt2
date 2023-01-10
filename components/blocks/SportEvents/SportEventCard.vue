<template>
  <div
    class="event-card swiper-slide"
    :style="`backgroundImage:url(${item.img})`"
  >
    <div class="event-card__text">
      <div class="event-card__name">{{ item.name }}</div>
      <div class="event-card__count">
        {{ item.count }} {{ eventDeclination(item.count) }}
      </div>
    </div>
    <button class="desktop button button--sm w-100">Все события</button>

    <div class="event-list desktop">
      <div
        v-for="(event, index) in item.events"
        :key="index"
        class="event-list-item"
      >
        <img :src="require(`@/assets/img/${event.img}.jpg`)" />
        <div class="event-list-item__text">
          <p>{{ event.date }}</p>
          <p>{{ event.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.event-card {
    min-width: 274px;
    height: 460px;
    padding: 30px 28px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
    overflow-x: hidden;
    cursor: pointer;
    transition: background .2s;

    &:last-child {
      margin-right: 0;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 6px;
      background-color: rgba(0, 22, 43, 0.6);
    }
    &:hover {
      background-size: 110%;
    }
    &:hover::before {
      backdrop-filter: brightness(0.5);
    }
    &:hover .event-list {
      left: 30px;
    }
    &__text {
      z-index: 1;
    }
    &__name {
      margin-bottom: 16px;
      font-size: 34px;
      font-weight: 600;
      color: #fff;
    }
    &__count {
      color: #ccc;
    }
    button {
      justify-self: flex-end;
      z-index: 1;
      font-weight: 500;
    }
    .event-list {
      width: calc(100% - 60px);
      position: absolute;
      bottom: 96px;
      left: -100%;
      color: #fff;
      transition: 0.3s ease;

      &-item {
        margin-top: 16px;
        display: flex;

        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 40px;
        }
        &__text {
          p:first-child {
            font-size: 13px;
            margin-bottom: 4px;
            font-weight: 600;
          }
          p:last-child {
            font-size: 12px;
            line-height: 1.2;
            display: -webkit-box;
            max-width: 200px;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }

@include semi-wide {
  .event-card {
    min-width: 256px;
    height: 420px;
    padding: 22px 20px;
    margin-right: 18px;
    &:hover .event-list {
      left: 24px;
    }
    &__name {
      margin-bottom: 12px;
      font-size: 30px;
    }
    .event-list {
      width: calc(100% - 52px);
      bottom: 92px;
      left: -100%;
      &-item {
        margin-top: 14px;
        img {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          border-radius: 36px;
        }
        &__text {
          p:first-child {
            font-size: 12px;
            margin-bottom: 4px;
          }
          p:last-child {
            font-size: 11px;
            line-height: 1;
            line-height: 1.1;
          }
        }
      }
    }
  }
}
@include desktop {
  .event-card {
    min-width: 248px;
    height: 380px;
    padding: 22px 20px;
    margin-right: 16px;
    &:hover .event-list {
      left: 22px;
    }
    &__name {
      margin-bottom: 12px;
      font-size: 30px;
    }
    .event-list {
      width: calc(100% - 44px);
      bottom: 86px;
      left: -100%;
      &-item {
        margin-top: 12px;
        img {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          border-radius: 34px;
        }
        &__text {
          p:first-child {
            font-size: 12px;
            margin-bottom: 4px;
          }
          p:last-child {
            font-size: 11px;
            line-height: 1;
            line-height: 1.1;
          }
        }
      }
    }
  }
}
@include tablet {
  .event-card {
    min-width: 226px;
    height: 320px;
    padding: 22px 20px;
    margin-right: 15px;
    &:hover .event-list {
      left: 20px;
    }
    &__name {
      margin-bottom: 12px;
      font-size: 30px;
    }
    .event-list {
      width: calc(100% - 40px);
      bottom: 80px;
      left: -100%;
      &-item {
        margin-top: 10px;
        img {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          border-radius: 32px;
        }
        &__text {
          p:first-child {
            font-size: 12px;
            margin-bottom: 4px;
          }
          p:last-child {
            font-size: 11px;
            line-height: 1.1;
            line-height: 1;
          }
        }
      }
    }
  }
}
@include mobile {
  .event-card {
    min-width: 160px;
    width: 160px;
    height: 218px;
    padding: 20px;

    &__name {
      font-size: 24px;
    }
    &__text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    &__count {
      font-size: 14px;
    }
  }
}
</style>
