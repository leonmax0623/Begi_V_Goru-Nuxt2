<template>
  <div class="arrow-button">
    <span>
      <slot></slot>
    </span>
    <base-icon class="desktop" name="arrow1" size="32" height="16" color="#4c3b92" />
    <base-icon class="mobile" name="arrow1" size="20" height="12" color="#4c3b92" />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.arrow-button {
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-right: 10px;
    font-weight: 500;
  }

  @include semi-wide {
    span {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  @include desktop {
    span {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  @include tablet {
    span {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  @include mobile {
    span {
      font-size: 14px;
      margin-right: 8px;
    }
  }
}
</style>
