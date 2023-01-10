<template>
  <div class="bg-toggle">
    <label for="toggle">{{ label }}</label>
    <input id="toggle" :checked="value" type="checkbox" @change="toggle">
  </div>
</template>

<script>
export default {
  name: 'BaseToggle',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/toggle.scss" />