<template>
  <div id="sidebar" class="bg-sidebar">
    <div class="bg-sidebar__wrapper">
      <div class="bg-sidebar__top mobile">
        <div class="bg-sidebar__top-wrapper">
          <div class="bg-sidebar__close-btn" @click="closeSidebar">✕</div>
          <icon-main-logo-mobile class="bg-sidebar__logo"></icon-main-logo-mobile>
        </div>
        <div class="bg-sidebar__divider" />
      </div>
      <icon-main-logo-white class="bg-sidebar__logo desktop" />
      <div class="bg-sidebar__close-btn desktop" @click="closeSidebar">✕</div>
      <div class="bg-sidebar__content">
        <ul class="bg-sidebar__nav">
          <li v-for="(item, index) in navItemsGeneral" :key="index" @click="handleNavItem(item)">
            <span>{{ item }}</span>
            <base-icon name="arrow3" size="12" />
          </li>
        </ul>
        <div class="bg-sidebar__divider" />
        <ul class="bg-sidebar__nav bg-sidebar__nav--extra">
          <li v-for="(item, index) in navItemsExtra" :key="index">
            <span>{{ item }}</span>
          </li>
        </ul>
        <div class="bg-sidebar__phone">
        <a href="tel:88001234567">8 800 123 45 67</a>
        <p>Звонок по РФ бесплатный</p>
      </div>
      </div>
      <base-button class="desktop" label="Создать событие" large>
      <template #icon>
        <base-icon name="arrow1" size="20" />
      </template>
    </base-button>
    </div>
    <sidebar-content-box
      v-show="showSidebarContent"
      name="Все события"
      class="bg-sidebar__content-box desktop"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import IconMainLogoWhite from '@/assets/icons/logo-main-white.svg'
import IconMainLogoMobile from '@/assets/img/BegivGoruHorizontalLogoWhite.svg'
import SidebarContentBox from '@/components/SidebarContentBox.vue'

export default {
  name: 'BgSidebar',
  components: {
    IconMainLogoWhite,
    SidebarContentBox,
    IconMainLogoMobile
  },
  data: () => ({
    showSidebarContent: false,
    navItemsGeneral: [
      'Старты',
      'Туримз',
      'Кэмпы',
      'Смотри',
      'Журнал',
      'Беседка',
      'Услуги',
      'Магазин',
    ],
    navItemsExtra: [
      'О портале',
      'Участнику',
      'Организатору',
      'Реклама',
      'Вакансии',
      'Помощь',
      'Контакты',
    ],
  }),
  computed: {
    ...mapGetters({
      isSidebarOpen: 'isSidebarOpen'
    })
  },
  mounted() {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.closeSidebar()
      }
    })
    window.addEventListener('click', (e) => {
      this.handleDocumentClick(e)
    })
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleDocumentClick(null))
  },
  watch: {
    isSidebarOpen() {
      if (this.isSidebarOpen) {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
      } else {
        document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        setTimeout(() => {
          this.showSidebarContent = false
        }, 250)
      }
    }
  },
  methods: {
    handleDocumentClick(e) {
      if (e && (
        !document.getElementById('sidebar').contains(e.target) &&
        !document.getElementById('sidebar_toggler').contains(e.target) &&
        !document.getElementById('sidebar_toggler-mobile').contains(e.target)
        )) {
        this.closeSidebar()
      }
    },
    closeSidebar() {
      if (this.isSidebarOpen) {
        this.$store.commit('toggleSidebar', false)
      }
    },
    handleNavItem(item) {
      this.showSidebarContent = true
    },

  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixins';
.bg-sidebar {
  width: 350px;
  height: 100%;
  padding: 30px 40px 50px;
  background-color: $secondary;
  position: fixed;
  top: 0;
  z-index: 5;

  &__wrapper {
    overflow: auto;
    height: calc(100vh - 40px);
    padding-bottom: 50px;

    @include hide-scrollbar;
  }
  &__logo {
    width: 165px;
    height: 60px;
  }
  &__close-btn {
    padding-top: 4px;
    font-size: 24px;
    color: #fff;
    position: absolute;
    top: 22px;
    right: 40px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      transition: transform .5s;
      transform: rotate(-90deg);
    }
  }
  &__divider {
    width: 100%;
    height: 2px;
    margin-top: 20px;
    background-color: #4a5a68;
  }
  &__nav {
    margin-top: 30px;
    color: #fff;

    &--extra {
      li {
        margin-bottom: 14px !important;

        span {
          font-size: 14px !important;
          font-weight: 400 !important;
        }
      }
    }

    li {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: $accent;
      }

      span {
        font-size: 16px;
        font-weight: 600;
      }
    }

    svg {
      transform: rotate(-90deg);
    }
  }

  &__nav--extra span {
    font-weight: 400 !important;
  }
  &__phone {
    margin: 60px auto 30px;
    text-align: center;

    a {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
    }

    p {
      margin-top: 16px;
      font-size: 12px;
      color: $grey;
    }
  }
  &__content-box {
    position: absolute;
    top: 0;
    left: 350px;
  }
}
@include mobile {
  .bg-sidebar {
    width: 100vw;
    height: 100vh;
    padding: 18px;

    &__wrapper {
      padding: 0;
      overflow: auto;
      height: auto;
    }
    &__top {
      background-color: $secondary;

      &-wrapper {
        display: flex;
        align-items: center;
      }
    }
    &__close-btn {
      position: relative;
      top: 0;
      right: 0;
    }
    &__logo {
      width: 162px;
      height: 24px;
      margin-left: 12px;
    }

    &__content {
      overflow: auto;
      height: calc(100vh - 50px);
      padding-bottom: 40px;

      @include hide-scrollbar;
    }

    &__nav {
      padding: 0 18px;
      margin-top: 48px;
      li {
        padding-bottom: 14px;
        border-bottom: 1px solid #0e2336;

        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>
