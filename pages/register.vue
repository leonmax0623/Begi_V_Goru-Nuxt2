<template>
  <!-- TODO: Form Component -->
  <div class="register">
    <div class="register__logo">
      <icon-logo-main />
    </div>
    <base-input
      :value="firstName"
      label="Имя"
      placeholder="Введите имя"
      class="register__text-field"
      @input="firstName = $event"
      />
    <base-input
      :value="lastName"
      label="Фамилия"
      placeholder="Введите фамилию"
      class="register__text-field"
      @input="lastName = $event"
      />
    <base-input
      :value="email"
      :has-error="emailError"
      label="Email"
      placeholder="Введите адрес электронной почты"
      class="register__text-field"
      @input="email = $event"
    >
      <template #error-text>
        <span v-if="$v.email.$dirty && !$v.email.required">Введите электронную почту</span>
        <span v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный email</span>
      </template>
    </base-input>
    <div class="register__text-field register__password">
      <base-input
        :value="password"
        :has-error="passwordError"
        :type="showPassword ? 'text' : 'password'"
        label="Придумайте пароль"
        placeholder="Пароль 6+ символов"
        class="register__text-field"
        @input="password = $event"
      >
        <template #error-text>
          <span v-if="$v.password.$dirty && !$v.password.required">Введите пароль</span>
          <span v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль должен быть длиной минимум 8 символов</span>
          <span v-else-if="$v.password.$dirty && !$v.password.check">Пароль должен состоять из латинских букв (как минимум 1 заглавная и 1 строчная), содержать хотя бы одну цифру и хотя бы один специальный символ (знак препинания, $, @, скобка и т.п.)</span>
        </template>
      </base-input>
      <span class="password-toggle" @click="showPassword=!showPassword">
        <icon-eye v-if="showPassword" class="password-icon" />
        <icon-eye-hide v-else class="password-icon" />
      </span>
    </div>
    <div class="register__text-field register__datepicker">
      <p>Дата рождения</p>
      <date-picker v-model="date" value-type="format" placeholder="Укажите дату рождения">
        <template #icon-calendar>
          <base-icon name="calendar7" :color="'#4c3b92'" />
        </template>
      </date-picker>
    </div>
    <div class="register__text-field register__gender">
      <base-radio-button name="gender" label="Мужчина" :value="gender" @change="changeGender" />
      <base-radio-button name="gender" label="Женщина" :value="gender" @change="changeGender" />
    </div>
    <div class="register__terms">
      <base-checkbox name="terms" :value="terms" @input="terms=!terms">
        <template #label>
          <span>
            С условиями <a href="#">предоставления услуг</a> <br> ознакомлен и согласен
          </span>
        </template>
      </base-checkbox>
      <base-checkbox terms="spam" :value="spam" @input="spam=!spam">
        <template #label>
          <span>
            Согласен получать информационно- <br>  рекламные письма
          </span>
        </template>
      </base-checkbox>
    </div>
    <base-button label="Зарегистрироваться" full-width @click="register">
      <template #icon>
        <base-icon name="arrow1" size="18" />
      </template>
    </base-button>
    <div class="register__footer">
      <p>Есть аккаунт?</p>
      <base-button label="Войти" outlined @click="goToLogin" />
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/ru'

import IconLogoMain from '@/assets/icons/logo-main.svg'
import IconEye from '@/assets/icons/eye-1.svg'
import IconEyeHide from '@/assets/icons/eye-1-hide.svg'

export default {
  name: 'Register',
  components: {
    DatePicker,
    IconLogoMain,
    IconEye,
    IconEyeHide
  },
  layout: 'auth',
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    date: '',
    gender: 'Мужчина',
    terms: false,
    spam: false,
    showPassword: false
  }),
  computed: {
    emailError() {
      return (this.$v.email.$dirty && !this.$v.email.required) ||
        (this.$v.email.$dirty && !this.$v.email.email)
    },
    passwordError() {
      return (this.$v.password.$dirty && !this.$v.password.required) ||
        (this.$v.password.$dirty && !this.$v.password.minLength) ||
        (this.$v.password.$dirty && !this.$v.password.check)
    },
  },
  methods: {
    changeGender(val) {
      this.gender = val
    },
    async register() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.terms) return
      try {
        await this.$api.user.register({
          name: this.firstName,
          second_name: this.lastName,
          email: this.email,
          password: this.password,
          birthdate: this.date,
          sex: this.gender,
        })
        this.$store.commit('setAuth', true)
        this.$router.push({ path: '/' })
      } catch (e) {
        console.log(e)
      }
    },
    goToLogin() {
      this.$router.push({ path: '/login' })
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

<style lang="scss">
.register {
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

  &__text-field {
    margin-bottom: 20px;

    input {
      color: inherit;
    }
  }

  &__password {
    margin: 20px 0;
    position: relative;

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

  &__datepicker p {
    margin-bottom: 5px;
    display: inline-block;
    font-weight: 600;
  }

  &__gender {
    display: flex;
  }

  &__terms {
    padding: 25px 0;
    border-top: 1px solid #dfe3e9;

    a {
      color: $accent;
    }
  }

  &__footer {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-right: 20px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
}

.mx-datepicker {
  width: 100%;

  .mx-input{
    height: 46px;
    padding: 20px;
    border-color: $grey;
    color: $grey;

    &::placeholder {
      font-size: 16px;
      color: $grey;
    }
  }

  .mx-icon-calendar {
    right: 20px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
