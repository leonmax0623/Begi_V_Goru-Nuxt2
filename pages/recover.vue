<template>
  <!-- TODO: Form Component -->
  <div class="recover">
    <div class="recover__logo">
      <icon-logo-main />
    </div>

    <base-input :value="email" :has-error="emailError" label="Email" placeholder="Введите почту"
      @input="email = $event">
      <template #error-text>
        <span v-if="$v.email.$dirty && !$v.email.required">Введите электронную почту</span>
        <span v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный email</span>
      </template>
    </base-input>

    <div class="recover__footer">
      <base-button label="Сбросить пароль" />
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

import IconLogoMain from '@/assets/icons/logo-main.svg'

export default {
  name: 'Recover',
  components: {
    IconLogoMain,
  },
  layout: 'auth',
  data: () => ({
    email: '',
  }),
  computed: {
    emailError() {
      return (this.$v.email.$dirty && !this.$v.email.required) ||
        (this.$v.email.$dirty && !this.$v.email.email)
    },
  },
  methods: {
    async recover() {
      const response = await this.$api.user.recoverPassword({ email: 'sesquipedalian2020@mail.ru' })
      console.log(response)
    },
  },
  validations: {
    email: { required, email },
  }
}
</script>

<style lang="scss" scoped>
.recover {
  width: 450px;
  padding: 30px;
  border-radius: 6px;
  background-color: #fff;
  z-index: 0;

  &__logo {
    width: 200px;
    margin: auto;
    margin-bottom: 40px;
  }

  &__footer {
    margin-top: 25px;
    padding-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #dfe3e9;

    span {
      margin-right: 20px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
}
</style>