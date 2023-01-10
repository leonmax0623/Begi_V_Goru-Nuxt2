<template>
  <div class="tags-categories">
    <template v-for="(item, idx) in items">
      <button
        :key="idx"
        class="button button--xs button--outline"
        :class="{'button--active': idx === active}"
        @click="setActive(idx)"
      >
        <span v-if="hashtags && idx" class="hash">#</span>{{ item }}
      </button>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
    hashtags: { type: Boolean, default: false }
  },
  data() {
    return {
      active: null
    }
  },
  mounted() {
    this.active = 0
  },
  methods: {
    setActive(idx) {
      if (this.active !== idx) {
        this.active = idx
      } else {
        this.active = null
      }
      this.$emit('on-click', idx)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.tags-categories {
  display: flex;
  align-items: center;
  overflow: auto;

  @include hide-scrollbar;

  button {
    color: #131317;
    margin-right: 10px;
    font-weight: 500;
    @include mobile {
      margin-right: 10px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.hash {
  color: #4c3b92;
}
.button--active {
  color: #fff !important;
  margin-right: 12px !important;
  .hash {
    color: #fff !important;
  }
}
</style>
