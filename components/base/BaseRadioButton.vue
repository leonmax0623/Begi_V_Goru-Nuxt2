<template>
  <div class="bg-radio-button">
    <input :id="inputId" v-model="internalValue" type="radio" :name="name" :value="label" >
    <label :for="inputId" class="bg-radio-button__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseRadioButton',
  props: {
    value: {
      type: String,
      default: ''
    },  
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
  },
  data: () => ({
    inputId: 'input-' + Math.round(Math.random() * 100000)
  }),
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/radio-button.scss" />