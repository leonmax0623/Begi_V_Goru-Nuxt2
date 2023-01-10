<template>
  <button
    :class="[
      'bg-button',
      { 'bg-button--outlined': outlined },
      { 'bg-button--flat': flat },
      { 'bg-button--white': isWhite },
      { 'bg-button--submit': isSubmit },
      { 'bg-button--long': long },
      { 'bg-button--large': large },
      { 'bg-button--full-width': fullWidth },
      { 'bg-button--disabled': disabled },
      { 'bg-button--loading': isLoading }
    ]"
    @click="$emit('click')"
  >
    <span>{{ label }}</span>
    <div v-if="$slots.icon" class="bg-button__icon">
      <slot name="icon" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    isSubmit: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/button.scss" />
