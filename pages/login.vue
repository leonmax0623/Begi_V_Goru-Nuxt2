<template>
  <!-- TODO: Form Component -->
  <div class="login">
    <div class="login__logo">
      <icon-logo-main />
    </div>
    <base-input
      :value="email"
      :has-error="emailError"
      label="Email или телефон"
      placeholder="Введите почту или телефон"
      @input="email = $event"
    >
      <template #error-text>
        <span v-if="$v.email.$dirty && !$v.email.required">Введите электронную почту</span>
        <span v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный email</span>
      </template>
    </base-input>
    <div class="login__password">
      <base-input
        :value="password"
        :has-error="passwordError"
        :type="showPassword ? 'text' : 'password'"
        label="Пароль"
        placeholder="Введите пароль"
        @input="password = $event"
      >
        <template #error-text>
          <span v-if="$v.password.$dirty && !$v.password.required">Введите пароль</span>
          <span v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль должен быть длиной минимум 8, состоять из латинских букв (как минимум 1 заглавная и 1 строчная), содержать хотя бы одну цифру и хотя бы один специальный символ (знак препинания, $, @, скобка и т.п.)</span>
        </template>
      </base-input>
      <span class="password-forgot" @click="goToRecover">Забыли пароль?</span>
      <span class="password-toggle" @click="showPassword=!showPassword">
        <icon-eye v-if="showPassword" class="password-icon" />
        <icon-eye-hide v-else class="password-icon" />
      </span>
    </div>

    <div class="login__login-btn">
      <base-button label="Войти" is-submit @click="login">
        <template #icon>
          <base-icon name="arrow1" size="16" />
        </template>
      </base-button>
    </div>
    
    <div class="login__socials-wrapper">
      <span>Войти с помощью</span>
      <div class="login__socials">
        <icon-login-vk />
        <icon-login-google />
      </div>
    </div>
    <div class="login__footer">
      <span>Еще нет аккаунта?</span>
      <base-button label="Зарегистрироваться" outlined @click="goToRegister" />
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
 
import IconLogoMain from '@/assets/icons/logo-main.svg'
import IconLoginVk from '@/assets/icons/login-vk.svg'
import IconLoginGoogle from '@/assets/icons/login-google.svg'
import IconEye from '@/assets/icons/eye-1.svg'
import IconEyeHide from '@/assets/icons/eye-1-hide.svg'

export default {
  name: 'Login',
  components: {
    IconLogoMain,
    IconLoginVk,
    IconLoginGoogle,
    IconEye,
    IconEyeHide
  },
  layout: 'auth',
  data: () => ({
    email: '',
    password: '',
    showPassword: false
  }),
  computed: {
    emailError() {
      return (this.$v.email.$dirty && !this.$v.email.required) ||
      (this.$v.email.$dirty && !this.$v.email.email)
    },
    passwordError() {
      return (this.$v.password.$dirty && !this.$v.password.required) ||
        (this.$v.password.$dirty && !this.$v.password.minLength)
    },
  },
  methods: {
    async login() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
       const response = await this.$api.user.login({
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', response.data.access_token)
        this.$router.push({ path: '/' })
      } catch (e) {
        console.log(e)
      }
    },
    goToRecover() {
      this.$router.push({ path: '/recover' })
    },
    goToRegister() {
      this.$router.push({ path: '/register' })
    }
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      check(value) {
        const containsUppercase = /[A-Z]/.test(value)
        const containsLowercase = /[a-z]/.test(value)
        const containsNumber = /[0-9]/.test(value)
        const containsSpecial = /[#?!@$%^&*-]/.test(value)
        return containsUppercase && containsLowercase && containsNumber && containsSpecial
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
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

  &__password {
    margin: 20px 0;
    position: relative;

    .password-forgot {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      font-weight: 500;
      color: $accent;
      cursor: pointer;
    }

    .password-toggle {
      position: absolute;
      top: 50%;
      right: 20px;
      cursor: pointer;

      .password-icon {
        width: 24px;
        height: 24px;
        fill: #a9a9a9;
      }
    }
  }

  &__login-btn {  
    button {
      margin-left: auto;
    }
  }

  &__socials-wrapper {
    margin-top: 40px;
    padding: 25px 0;
    border-top: 1px solid #dfe3e9;
    border-bottom: 1px solid #dfe3e9;

    span {
      font-weight: 600;
    }
  }

  &__socials {
    margin-top: 14px;

    svg {
      margin-right: 8px;
      cursor: pointer;
    }
  }

  &__footer {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 20px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
}
</style>