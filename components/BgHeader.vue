<template>
  <div :class="['bg-header', {'bg-header--main': isMain}]">
    <!-- HEADER TOP -->
    <div class="container">
      <div class="bg-header-top">

        <div class="desktop">
          <social-media-links class="bg-header__social" :color="isMain ? '#fff' : '#000'" />
        </div>
        <div class="mobile">
          <base-burger id="sidebar_toggler-mobile" :color="isMain ? '#fff' : '#000'" @click.native="showSidebar" />
        </div>

        <div class="desktop">
          <div @click="$router.push({ path: '/' })" class="bg-header-top__logo">
            <icon-logo-main v-if="!isMain" class="bg-header-top__main-logo" />
            <icon-logo-main-white v-else class="bg-header-top__main-logo--white" />
          </div>
        </div>
        <div class="mobile">
          <icon-logo-main-mobile class="bg-header-top__mobile-logo"></icon-logo-main-mobile>
        </div>

        <div class="desktop">
          <template v-if="!isAuth">
            <div class="bg-header-top__auth">
              <base-button label="Личный кабинет" :outlined="!isMain" :is-white="isMain" @click="$router.push({ path: '/login' })">
                <template #icon>
                  <base-icon name="arrow1" size="18" />
                </template>
              </base-button>
            </div>
          </template>
          <template v-else>
          <div
            v-click-outside="hidePopups"
            class="bg-header-top__profile-menu"
            @mouseover="showProfileMenuPopup = true"
            >
            <div v-if="user" class="bg-header-top__user">
              <div class="bg-header-top__user-text">
                <div class="bg-header-top__user-name">{{ user.second_name }} {{ user.name }}</div>
                <div class="bg-header-top__user-stats">
                  <base-icon name="running_man" size="20" :color="isMain ? '#fff' : '#4c3b92'" />
                  <span>8</span>
                </div>
              </div>
              <div class="bg-header-top__user-avatar">
                <img src="@/assets/img/user-avatar.jpg">
                <base-badge>3</base-badge>
              </div>
            </div>

            <profile-menu-popup v-if="showProfileMenuPopup" />
          </div>
        </template>
        </div>
      </div>
      <div class="desktop">
        <div :class="['bg-header-bottom', {'bg-header-bottom--fixed left-padding': headerFixed}]">
          <div ref="navbar" class="bg-header-bottom__content">

            <base-burger id="sidebar_toggler" :color="isMain ? '#fff' : '#000'" @click.native="showSidebar" />

            <ul class="bg-header-bottom__navbar">
              <li
                v-for="(item, index) in menuItems"
                :key="index" :class="{'bg-header-bottom__navbar--active': $route.path == item.path}"
                @mouseover="hoverOn($event, index)"
                @mouseout="hoverOut"
                @click="$router.push({ path: item.path })"
                >
                <span>{{ item.name }}</span>
                <base-icon v-if="index == menuItems.length - 1" name="arrow3" size="12" />
              </li>
            </ul>
            <div class="bg-header-bottom__search-btn">
              <base-icon name="search" size="21" />
            </div>
          </div>
          <div>
            <mega-menu
              v-show="showMegaMenu"
              @click-outside="() => showMegaMenu = false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import ProfileMenuPopup from '@/components/ProfileMenuPopup.vue'
import MegaMenu from '@/components/MegaMenu.vue'

import IconLogoMain from '@/assets/icons/logo-main.svg'
import IconLogoMainWhite from '@/assets/icons/logo-main-white.svg'
import IconLogoMainMobile from '@/assets/img/BegivGoruHorizontalLogoWhite.svg'
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  name: 'BgHeader',
  components: {
    ProfileMenuPopup,
    MegaMenu,
    IconLogoMain,
    IconLogoMainWhite,
    SocialMediaLinks,
    IconLogoMainMobile
  },
  data: () => ({
    socials: [
      { name: 'vk', link: 'https://vk.com' },
      { name: 'youtube', link: 'https://youtube.com' },
      { name: 'wa', link: 'https://whatsapp.com' },
      { name: 'facebook', link: 'https://facebook.com' },
    ],
    menuItems: [
      {name: 'СТАРТЫ', path: '/starts'},
      {name: 'ТУРИЗМ', path: '/tourism'},
      {name: 'КЭМПЫ', path: '/camp'},
      {name: 'СМОТРИ', path: '/watch'},
      {name: 'ЖУРНАЛ', path: '/journal'},
      {name: 'УСЛУГИ', path: '/service'},
      {name: 'МАГАЗИН', path: '/shop'},
    ],
    headerFixed: false,
    showProfileMenuPopup: false,
    showOrganizerPopup: false,
    showMegaMenu: false
  }),
  computed: {
    ...mapGetters({
      isAuth: 'isAuth',
      user: 'getUser',
      isSidebarOpen: 'isSidebarOpen'
    }),
    isMain() {
      return this.$route.path === '/' && !this.headerFixed
    }
  },
  mounted() {
    window.document.onscroll = () => {
      const navbar = this.$refs.navbar
      if (window.scrollY > navbar.offsetTop + 120) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    }
  },
  methods: {
    hoverOn(e, i) {
      e.target.classList.add('bg-header-bottom__navbar--hovered')

      if (i === this.menuItems.length - 1 && !this.isSidebarOpen) {
        this.showMegaMenu = true
      }
    },
    hoverOut(e) {
      e.target.classList.remove('bg-header-bottom__navbar--hovered')
    },
    hidePopups() {
      this.showProfileMenuPopup = false
      this.showOrganizerPopup = false
    },
    showSidebar() {
      if (!this.isSidebarOpen) {
        this.$store.commit('toggleSidebar', true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/mixins';
.bg-header {
  width: 100%;
  margin: 0 auto;
  position: absolute;

  &-top {
    height: 120px;
    margin: 0 auto;
    padding-top: 28px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f6f6f6;

    @include tablet {
      padding-left: 24px;
      padding-right: 24px;
    }
    @include mobile {
      padding-left: 16px;
      padding-right: 16px;
    }

    &__main-logo,
    &__main-logo--white {
      width: 253px;
      height: 69px;
      cursor: pointer;
    }
    &__profile-menu {
      position: relative;
      cursor: pointer;
    }
    &__profile-menu,
    &__profile-menu-controls {
      display: flex;
      justify-content: space-between;
    }
    &__user {
      display: flex;
      font-weight: 600;

      span {
        line-height: 24px;
      }
    }
    &__user-name {
      margin-top: 6px;
    }
    &__user-stats {
      float: right;
      display: flex;
    }
    &__user-avatar {
      position: relative;

      img {
        width: 40px;
        height: 40px;
        margin-left: 10px;
        border-radius: 4px;
      }
    }
  }
  &-bottom {
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    position: relative;

    @include tablet {
      padding-left: 24px;
      padding-right: 24px;
    }
    @include mobile {
      padding-left: 16px;
      padding-right: 16px;
    }

    &--fixed {
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
    }
    &__content {
      height: 50px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__navbar {
      display: flex;
      font-weight: 500;

      li {
        cursor: pointer;
        position: relative;

        svg {
          margin-left: 6px;
        }
      }

      li:not(:last-child) {
        margin-right: 44px;
      }

      &--hovered {
        color: $accent
      }

      &--active::before {
        content: '';
        width: 100%;
        border-bottom: 4px solid $accent;
        position: absolute;
        top: 37px;
      }
    }
  }
}
.bg-header--main {
  position: absolute;
  color: #fff;

  .bg-header-top {
    border-color: rgba(246, 246, 246, 0.1);
  }
  .bg-header-bottom--fixed {
    background: transparent;
  }
}

@include semi-wide {
  .bg-header {
    &__social {
      margin-top: 4px;
    }
  }
  .bg-header-top {
    height: 100px;
  }
  .bg-header-top__logo {
    margin-top: -8px;

    svg {
      width: 237px;
      height: 60px;
    }
  }
  .bg-header-bottom__navbar {
    font-size: 14px;
  }
  .bg-header-top__auth {
    button {
      font-size: 14px;
    }
  }
}
@include desktop {
  .bg-header {
    &__social {
      margin-top: 4px;
    }
  }
  .bg-header-top {
    height: 100px;
  }
  .bg-header-top__logo {
    margin-top: -8px;
    svg {
      width: 237px;
      height: 60px;
    }
  }
  .bg-header-bottom__navbar {
    font-size: 14px;
  }
  .bg-header-top__auth {
    button {
      font-size: 14px;
    }
  }
}
@include tablet {
  .bg-header {
    &__social {
      margin-top: 4px;
    }
  }
  .bg-header-top {
    height: 100px;
  }
  .bg-header-top__logo {
    margin-top: -8px;
    svg {
      width: 237px;
      height: 60px;
    }
  }
  .bg-header-bottom__navbar {
    font-size: 14px;
  }
  .bg-header-top__auth {
    button {
      font-size: 14px;
    }
  }
}
@include mobile {
  .bg-header-top {
    height: auto;
    padding: 18px;
    border: none;
    justify-content: flex-start;
    align-items: center;

    &__mobile-logo {
      width: 200px;
      height: 27px;
      margin-left: 12px;
    }
  }
}
</style>
