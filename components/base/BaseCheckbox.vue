<template>
  <div class="bg-checkbox">
    <input :id="inputId" v-model="internalValue" type="checkbox" :name="name">
    <label :for="inputId" class="bg-checkbox__label">
      <slot name="label" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    inputId: 'input-' + Math.round(Math.random() * 100000),
    checked: false
  }),
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.checked = !this.checked
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/checkbox.scss" />