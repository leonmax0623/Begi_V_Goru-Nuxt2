<template>
  <div
    class="items__item swiper-slide"
    :style="`backgroundImage:url(${item.img})`"
  >
    <div class="items__name">{{ item.name }}</div>
    <div class="items__count">{{ item.count }} объявлений</div>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.items {
  &__item {
    cursor: pointer;
    min-width: 352px;
    max-width: 352px;
    height: 238px;
    margin-right: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
    background-size: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    color: #fff;
    position: relative;
    transition: background .2s;

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
      background: linear-gradient(0, #00162b 0%, rgba(0, 22, 43, 0.2) 100%);
    }
  }
  &__name,
  &__count {
    z-index: 1;
  }
  &__name {
    margin-bottom: 12px;
    font-size: 36px;
    font-weight: 600;
  }
  &__count {
    color: #ccc;
    font-size: 18px;
  }
}
@include semi-wide {
  .items {
    &__item {
      min-width: 350px;
      max-width: 350px;
      height: 240px;
      margin-right: 14px;
      padding: 26px;
    }
    &__name {
      margin-bottom: 10px;
      font-size: 32px;
      font-weight: 500;
    }
    &__count {
      font-size: 16px;
    }
  }
}
@include desktop {
  .items {
    &__item {
      min-width: 350px;
      max-width: 350px;
      height: 240px;
      margin-right: 14px;
      padding: 26px;
    }
    &__name {
      margin-bottom: 10px;
      font-size: 32px;
      font-weight: 500;
    }
    &__count {
      font-size: 16px;
    }
  }
}
@include tablet {
  .items {
    &__item {
      min-width: 350px;
      max-width: 350px;
      height: 240px;
      margin-right: 14px;
      padding: 26px;
    }
    &__name {
      margin-bottom: 10px;
      font-size: 32px;
      font-weight: 500;
    }
    &__count {
      font-size: 16px;
    }
  }
}
@include mobile {
  .items {
    &__item {
      padding: 20px;
      min-width: 272px;
      max-width: 272px;
      height: 186px;
    }
    &__name {
      font-size: 24px;
      margin-bottom: 12px;
    }
    &__count {
      font-size: 12px;
    }
  }
}
</style>
