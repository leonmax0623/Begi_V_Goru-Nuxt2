<template>
  <div>
    <div v-if="carousel" v-swiper="options" :class="['swiper-container', {'swiper-container--wbg': !isWhite}]">
      <div class="tag-line swiper-wrapper">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          :class="
            [
              'swiper-slide',
              'tag-line__tag',
              {'tag-line__tag--active': index === activeIndex},
              {'tag-line__tag--carousel': carousel},
              {'tag-line__tag--is-white': isWhite}
            ]
          "
          @click="pickTag(index)"
        >
          <span v-show="index !== 0">#</span>
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="tag-line">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          :class="['tag-line__tag', {'tag-line__tag--active': index === activeIndex}]"
          @click="pickTag(index)"
        >
          <span v-show="index !==0 && !noHashtags">#</span>
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagLine',
  components: {
  },
  props: {
    tags: {
      type: Array,
      default: () => ([])
    },
    carousel: {
      type: Boolean,
      default: false
    },
    noHashtags: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    activeIndex: 0,
  }),
  computed: {
    options() {
      return {
        slidesPerView: 'auto'// this.tags.length
      }
    }
  },
  methods: {
    pickTag(tag) {
      this.activeIndex = tag
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixins';
.swiper-container {
  height: 50px;
  overflow-x: hidden;
  position: relative;

  &:before {
    content:"";
    display:block;
    width: 40px;
    height:50px;
    position:absolute;
    top:0;
    right: 0;
    z-index: 3;
    background-image:linear-gradient(to right, rgba(0, 21, 41, 0), #001529 75%)
  }
}
.swiper-container--wbg:before {
  background-image:linear-gradient(to right, rgba(0, 21, 41, 0), #fff 75%)
}
.tag-line {
  width: 100%;
  padding-left: 2px;
  display: flex;
  align-items: center;

  &__tag {
    margin-right: 16px;
    padding: 8px 18px;
    display: flex;
    justify-content: center;
    border: 1px solid #d4d3d3;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;

    span {
      z-index: 1;
    }

    span:first-child {
      color: $accent;
    }
  }
  &__tag--is-white {
    border: 1px solid #fff;
  }
  &__tag--active {
    background: $main-gradient-color;
    border: 2px;
    position: relative;
    color: #fff;

    span:first-child {
      color: #fff;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: 0;
      margin: -2px;
      border-radius: inherit;
      background: $main-gradient-color;
    }
  }
}

@include md {
  .tag-line {
    width: calc(100vw + 18px);
    overflow: auto;
    margin-left: -18px;
    padding-left: 18px;
    padding-right: 18px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
