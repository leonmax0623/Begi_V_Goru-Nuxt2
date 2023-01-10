<template>
  <div class="swiper-buttons" :class="{'centered': forceCentered}">
    <div
      class="swiper-button swiper-button-prev"
      :style="{'top': `${heightOffset}px`}"
    >
      <base-icon name="arrow3" color="#000" :size="iconSize" />
    </div>
    <div
      class="swiper-button swiper-button-next"
      :style="{'top': `${heightOffset}px`}"
    >
      <base-icon name="arrow3" color="#000" :size="iconSize" />
    </div>
  </div>
</template>
<script>
let Any;
export default {
  name: 'SwiperNavigation',
  props: {
    forceCentered: { type: Boolean, default: false },
    parent: { type: Any }
  },
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    console.log(this.parent)
  },
  watch: {
    parent() {
      this.height = this.parent.offsetHeight
    }
  },
  computed: {
    heightOffset() {
      return this.height / 2 + 12
    },
    iconSize() {
      return this.$mq === 'lg' ? '18' : '24'
    }
  }
}
</script>
<style lang="scss">
@import '../assets/css/mixins';
.swiper-buttons {
  position: absolute;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 1;

  &.centered {
    width: 100%;
    left: 0;

    .swiper-button-prev {
      left: 6px;
    }
    .swiper-button-next {
      right: 6px;
    }
  }
}
.swiper-button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.swiper-button-disabled {
  display: none;
}
.swiper-button-prev {
  left: 0;

  &::after {
    display: none;
  }
  svg {
    transform: rotate(90deg);
  }
}
.swiper-button-next {
  right: 0;

  &::after {
    display: none;
  }
  svg {
    transform: rotate(-90deg);
  }
}

@include wide {
  .swiper-buttons {
    &.centered {
      width: 1440px;
      .swiper-button-prev {
        left: -24px;
      }
      .swiper-button-next {
        right: -24px;
      }
    }
  }
  .swiper-button-prev {
    left: 52px;
  }
  .swiper-button-next {
    right: 52px;
  }
}
@include semi-wide {
  .swiper-buttons {
    &.centered {
      width: 1080px;

      .swiper-button-prev {
        left: -24px;
      }
      .swiper-button-next {
        right: -24px;
      }
    }
  }
  .swiper-button {
    width: 40px;
    height: 40px;
  }
  .swiper-button-prev {
    left: 30px;
  }
  .swiper-button-next {
    right: 30px;
  }
}
@include desktop {
  .swiper-buttons {
    &.centered {
      width: 1080px;
    }
  }
  .swiper-button-prev {
    left: 30px;
  }
  .swiper-button-next {
    right: 30px;
  }
  .swiper-button {
    width: 40px;
    height: 40px;
  }
}
@include tablet {
  .swiper-buttons {
    left: 0;
    width: 100%;
  }
  .swiper-button {
    width: 40px;
    height: 40px;
  }
  .swiper-button-prev {
    left: 24px;
  }
  .swiper-button-next {
    right: 24px;
  }
}
</style>
