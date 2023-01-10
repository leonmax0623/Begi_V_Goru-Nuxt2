<template>
  <div class="item swiper-slide">
    <div class="item__img">
      <img :src="item.img" alt="" />
    </div>
    <div>
      <div class="item__date">{{ item.date }}</div>
      <div class="item__title">{{ item.title }}</div>
    </div>
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
.item {
  max-width: 435px;
  margin-right: 40px;
  display: flex;
  cursor: pointer;

  &__img img {
    min-width: 120px;
    height: 120px;
    margin-right: 30px;
  }
  &__date {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
  }
}
@include semi-wide {
  .item {
    max-width: 340px;
    margin-right: 30px;

    &__img img {
      min-width: 80px;
      height: 80px;
      margin-right: 18px;
    }
    &__date {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
    }
    &__title {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.1;
    }
  }
}
@include desktop {
  .item {
    max-width: 340px;
    margin-right: 30px;

    &__img img {
      min-width: 80px;
      height: 80px;
      margin-right: 18px;
    }
    &__date {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
    }
    &__title {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.1;
    }
  }
}
@include tablet {
  .item {
    max-width: 340px;
    margin-right: 30px;

    &__img img {
      min-width: 80px;
      height: 80px;
      margin-right: 18px;
    }
    &__date {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
    }
    &__title {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.1;
    }
  }
}
@include mobile {
  .item {
    max-width: 290px;
    margin-right: 20px;

    &__img img {
      min-width: 74px;
      height: 74px;
      margin-right: 20px;
    }
    &__date {
      font-size: 12px;
      margin-bottom: 10px;
      font-weight: 500;
    }
    &__title {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>
