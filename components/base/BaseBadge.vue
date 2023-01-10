<template>
  <span class="bg-badge" :style="style">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    size: {
      type: [String, Number],
      default: '21'
    },
    top: {
      type: [String, Number],
      default: '-10'
    },
    right: {
      type: [String, Number],
      default: '-10'
    },
  },

  computed: {
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        top: this.top + 'px',
        right: this.right + 'px',
        bottom: this.bottom + 'px'
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/badge.scss" />