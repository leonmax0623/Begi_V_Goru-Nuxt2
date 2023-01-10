<template>
  <div
    class="profile-menu"
    style="position: absolute"
  >
    <div class="profile-menu-header">
      <base-icon
        name="arrow2"
        size="12"
        color="#dfe6ee"
        class="profile-menu-header__arrow-icon"
      />
      <div class="profile-menu-header__text">
        <p>{{ user.second_name }} {{ user.name }}</p>
        <p>Управление аккаунтом</p>
      </div>
      <img
        src="@/assets/img/user-avatar.jpg"
        class="profile-menu-header__avatar"
      />
    </div>
    <div class="profile-menu-item" @mouseover="showOrganizerPopup = true">
      <div class="profile-menu-item__text">
        <p class="item-title">Организатор</p>
        <p>4 события</p>
      </div>
      <icon-calendar-gradient />

      <div
        v-if="showOrganizerPopup"
        class="profile-menu profile-menu--organizer"
      >
        <div class="profile-menu-header">
          <div class="profile-menu-item">
            <div class="profile-menu-item__title">
              <p>Все продажи</p>
              <base-icon name="arrow2" size="12" color="#dfe6ee" />
            </div>
            <div class="profile-menu-item__info">
              <icon-bank-card-gradient />
              <span>190 220 ₽</span>
            </div>
          </div>
          <div class="profile-menu-item">
            <div class="profile-menu-item__title">
              <p>Все участники</p>
              <base-icon name="arrow2" size="12" color="#dfe6ee" />
            </div>
            <div class="profile-menu-item__info">
              <icon-users-gradient />
              <span>324</span>
            </div>
          </div>
        </div>
        <ul class="profile-menu-body">
          <li class="profile-menu-body__item">Мои события</li>
          <li class="profile-menu-body__item">Участники</li>
          <li class="profile-menu-body__item">Результаты</li>
          <li class="profile-menu-body__item">Продажи</li>
          <li class="profile-menu-body__item">Продукты</li>
          <li class="profile-menu-body__item">Промокоды</li>
          <li class="profile-menu-body__item">Заказать услуги</li>
          <li class="profile-menu-body__item">
            Отзывы и оценки
            <base-badge size="14" top="-7" right="-17">3</base-badge>
          </li>
          <li class="profile-menu-body__item">Конференции</li>
          <li class="profile-menu-body__item">Помощь</li>
        </ul>
      </div>
    </div>
    <div class="profile-menu-item">
      <div class="profile-menu-item__text">
        <p class="item-title">Участник</p>
        <p>12 событий</p>
      </div>
      <icon-running-man-gradient />
    </div>
    <div class="profile-menu-item">
      <div class="profile-menu-item__text">
        <p class="item-title">Магазин</p>
        <p>8 заказов</p>
      </div>
      <icon-cart-gradient />
    </div>
    <div class="profile-menu-item">
      <div class="profile-menu-item__text">
        <p class="item-title">Избранное</p>
        <p>8 записей</p>
      </div>
      <icon-star-gradient />
    </div>
    <div class="profile-menu-logout">
      <span @click="logOut">Выйти</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import IconCalendarGradient from '@/assets/icons/calendar-gradient.svg'
import IconRunningManGradient from '@/assets/icons/running-man-gradient.svg'
import IconCartGradient from '@/assets/icons/cart-gradient.svg'
import IconStarGradient from '@/assets/icons/star-gradient.svg'
import IconBankCardGradient from '@/assets/icons/bank-card-gradient.svg'
import IconUsersGradient from '@/assets/icons/users-gradient.svg'

export default {
  name: 'ProfileMenuPopup',
  components: {
    IconCalendarGradient,
    IconRunningManGradient,
    IconCartGradient,
    IconStarGradient,
    IconBankCardGradient,
    IconUsersGradient,
  },
  data: () => ({
    showOrganizerPopup: false
  }),
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    logOut() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-menu {
    width: 265px;
    padding: 10px;
    color: #000;
    background-color: #fff;
    box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 3;
    position: absolute;
    top: -10px;
    right: -10px;

    &-header {
      display: flex;
      justify-content: flex-end;
      
      &__arrow-icon {
        margin-right: auto;
        align-self: center;
        transform: rotate(180deg);
      }

      &:hover p:last-child {
        color: $accent;
      }

      &__text {
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: right;
        
        p:first-child {
          font-weight: 600;
        }
        p:last-child {
          margin-top: 4px;
          margin-bottom: 2px;
          font-size: 12px;
          font-weight: 500px;
          color: #818181;
        }
      }

      &__avatar {
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }
    }

    &-item {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f5f7fa;
      border-radius: 4px;

      &__text {
        
        p:first-child {
          font-weight: 500;
        }
        p:last-child {
          margin-top: 8px;
          margin-bottom: 2px;
          font-size: 12px;
          font-weight: 500px;
          color: #818181;
        }
      }

      &:hover p.item-title {
        color: $accent;
      }
    }

    &-logout {
      margin-top: 24px;
      text-align: right;
      font-weight: 500;

      span {
        cursor: pointer;

        &:hover {
          color: $accent;
        }
      }
    }
  }

  .profile-menu--organizer {
    padding: 0;
    position: absolute;
    top: 61px;
    left: -270px;
    
    .profile-menu-header {
      padding: 10px;
      display: block;
      border-radius: 4px;
      background-color: #f5f7fa;

      .profile-menu-item {
        margin: 10px 0;
        display: block;
        background-color: #fff;

        &:hover p {
          color: $accent;
        }

        &__title {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 500;
          color: #818181;
        }

        &__info {
          margin-top: 8px;

          span {
            font-weight: 500;
          }
        }
      }
    }
    .profile-menu-body {
      padding: 10px;
      border-radius: 0 0 4px 4px;
      background-color: #fff;

      &__item {
        width: fit-content;
        margin: 14px 0;
        font-weight: 500;
        position: relative;
        cursor: pointer;

        &:hover {
          color: $accent;
        }
      }
    }
  }
</style>
