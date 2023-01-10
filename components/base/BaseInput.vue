<template>
  <div
    :class="
      [
        'bg-input',
        {
          'has-error': hasError,
          'has-button': hasButton
        }
      ]
    ">
    <label v-if="label" :for="inputId" class="bg-input__label">
      {{ label }}
      <div v-if="hasError" class="bg-input__error-badge">!</div>
    </label>
    <input
      :id="inputId"
      v-model="internalValue"
      :type="type"
      :name="name"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :style="`width: ${width}`"
    >
    <template v-if="hasButton">
      <template v-if="btnName">
        <button class="bg-input__button">{{ btnName }}</button>
      </template>
      <template v-if="btnIcon">
        <template v-if="btnIcon === 'search'">
          <div class="bg-input__icon">
            <icon-search></icon-search>
          </div>
        </template>
      </template>
    </template>
    <div v-if="hasError" class="bg-input__error-text">
      <slot name="error-text" />
    </div>
  </div>
</template>

<script>
import IconSearch from '@/assets/icons/search.svg'

export default {
  name: 'BaseInput',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Number],
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    hasButton: { type: Boolean, default: false },
    hasError: { type: Boolean, default: false },
    hideDetails: { type: Boolean, default: false },
    errorText: { type: String, default: '' },
    btnName: { type: String, default: '' },
    width: { type: String, default: '100%' },
    btnIcon: { type: String, default: null }
  },
  components: {
    IconSearch
  },
  data: () => ({
    inputId: 'input-' + Math.round(Math.random() * 100000),
  }),
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/base/input.scss" />
<style lang="scss" scoped>
@import '../../assets/css/mixins';
.bg-input__icon {
  padding: 0 12px;
  display: flex;
  align-items: center;
}
.bg-input__icon svg {
  fill: #fff;
  height: 28px;
  width: 28px;
}
@include mobile {
  .has-button input {
    height: auto;
    padding: 12px;
  }
  .bg-input__icon svg {
    width: 20px;
    height: 20px;
  }
}
</style>
