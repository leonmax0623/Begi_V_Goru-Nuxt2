<template>
  <div class="bg-burger">
    <input type="checkbox" class="bg-burger__checkbox" />
    <div class="bg-burger__line line1" :style="`background-color: ${color}`" />
    <div class="bg-burger__line line2" :style="`background-color: ${color}`" />
    <div class="bg-burger__line line3" :style="`background-color: ${color}`" />
  </div>
</template>

<script>
export default {
  name: 'BaseBurger',
  props: {
    color: {
      type: String,
      default: '#000'
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/burger.scss" />
