<template>
  <div class="bg-footer">
    <div class="bg-footer-bottom">
      <div class="bg-footer-hashtags">
        <div class="bg-footer-hashtags__logo">
          <icon-new-hash-footer />
        </div>
        <div
          v-swiper="options"
          class="bg-footer-hashtags__ticker swiper-container swiper-container--smooth"
        >
          <div class="bg-footer-hashtags__ticker-wrapper swiper-wrapper">
            <span v-for="(tag, idx) in tags" :key="idx" class="swiper-slide"
              >#{{ tag }}</span
            >
          </div>
        </div>
      </div>
      <div class="bg-footer-standard">
        <div class="bg-footer-standard-wrapper">
          <div class="mobile">
            <div class="bg-footer-standard__company">
              <div class="bg-footer-standard__logo">
                <img src="/logo-footer.svg" />
              </div>
              <span class="bg-footer-standard__description">
                  Многофункциональный портал,
                  посвященный бегу в горах,
                  туризму и&nbsp;кемпингу
                </span>
            </div>
            <div>
              <div class="bg-footer-standard__menu">
                <div class="bg-footer-standard__menu-item">События</div>
                <div class="bg-footer-standard__menu-item">Услуги</div>
                <div class="bg-footer-standard__menu-item">Журнал</div>
                <div class="bg-footer-standard__menu-item">Другое</div>
                <div class="bg-footer-standard__menu-item">Магазин</div>
                <div class="bg-footer-standard__menu-item">О портале</div>
              </div>
            </div>
            <div>
              <div class="bg-footer-standard__phone">
                <p>8 800 123 45 67</p>
                <p>Звонок по РФ бесплатный</p>
                <div class="bg-footer-standard__socials">
                  <social-media-links color="#fff" />
                </div>
              </div>
              <div class="bg-footer-standard__payments">
                <img src="/payments/mastercard.png" alt="mastercard" />
                <img src="/payments/maestro.png" alt="maestro" />
                <img src="/payments/visa.png" alt="visa" />
                <img src="/payments/mir.png" alt="mir" />
                <img src="/payments/google.png" alt="google pay" />
                <img src="/payments/apple.png" alt="apple pay" />
              </div>
            </div>
            <div>
              <div class="bg-footer-standard__copy">
                <p>© begivgo.ru, 2022</p>
                <p>
                Использование любых материалов Сайта <br />
                разрешено только с письменного согласия <br />
                Правообладателя
              </p></div>
            </div>
          </div>

          <div class="bg-footer-standard__block desktop">
            <div class="bg-footer-standard__company">
              <div class="bg-footer-standard__logo">
                <img src="/logo-footer.svg" />
              </div>
              <span class="bg-footer-standard__description">
                Многофункциональный портал,
                посвященный бегу в горах,
                туризму и&nbsp;кемпингу
              </span>
            </div>
            <div class="bg-footer-standard__copy">
              <p>© begivgo.ru, 2022</p>
              <p>
                Использование любых материалов Сайта <br />
                разрешено только с письменного согласия <br />
                Правообладателя
              </p>
            </div>
          </div>
          <div class="bg-footer-standard__sections desktop">
            <div class="bg-footer-standard__section footer-nav">
              <div class="footer-nav__name">События</div>
              <ul class="footer-nav__list">
                <li>Cтарты</li>
                <li>Туризм</li>
                <li>Кэмпы</li>
              </ul>
              <p class="subnav">Организатору</p>
              <div class="footer-nav__all-btn">
                <span>Создать событие</span>
                <base-icon name="arrow1" size="14" />
              </div>
            </div>
            <div class="bg-footer-standard__section footer-nav">
              <div class="footer-nav__name">Журнал</div>
              <ul class="footer-nav__list footer-nav__list--tags">
                <li>#Здоровье</li>
                <li>#Тренировки</li>
                <li>#Гаджеты</li>
                <li>#СоветыЭксперта</li>
                <li>#Туризм</li>
                <li>#Маршруты</li>
                <li>#Бег</li>
                <li>#Плавание</li>
              </ul>
              <div class="footer-nav__all-btn">
                <span>Все темы</span>
                <base-icon name="arrow1" size="14" />
              </div>
            </div>
            <div class="bg-footer-standard__section footer-nav">
              <div class="footer-nav__name">Магазин</div>
              <ul class="footer-nav__list">
                <li>Распродажи</li>
                <li>Доставка и оплата</li>
                <li>Гарантия</li>
                <li>Все товары</li>
              </ul>
              <div class="footer-nav__all-btn">
                <span>Личный кабинет</span>
                <base-icon name="arrow1" size="14" />
              </div>
            </div>
            <div class="bg-footer-standard__section footer-nav">
              <div class="footer-nav__name">Услуги</div>
              <ul class="footer-nav__list">
                <li>Услуги тренера</li>
                <li>Название услуги</li>
                <li>Аренда снаряжения</li>
                <li>Нзвание</li>
              </ul>
              <div class="footer-nav__all-btn">
                <span>Все услуги</span>
                <base-icon name="arrow1" size="14" />
              </div>
            </div>
            <div class="bg-footer-standard__section footer-nav">
              <div class="footer-nav__name">Другое</div>
              <ul class="footer-nav__list">
                <li>Беседка</li>
                <li>Смотри</li>
              </ul>
              <div>
                <div class="footer-nav__all-btn footer-nav__all-btn--policy">
                  Пользовательское соглашение
                </div>
                <div class="footer-nav__all-btn footer-nav__all-btn--policy">
                  Политика кофиденциальности
                </div>
              </div>
            </div>
            <div class="bg-footer-standard__section footer-nav">
              <div class="footer-nav__name">О нас</div>
              <ul class="footer-nav__list">
                <li>О портале</li>
                <li>Реклама</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
              <div class="footer-nav__all-btn">
                <span>Написать нам</span>
                <base-icon name="arrow1" size="14" />
              </div>
            </div>
          </div>
          <div class="bg-footer-standard__block desktop">
            <div class="bg-footer-standard__phone">
              <p>8 800 123 45 67</p>
              <p>Звонок по РФ бесплатный</p>
              <div class="bg-footer-standard__socials">
                <social-media-links color="#fff" />
              </div>
            </div>
            <div class="bg-footer-standard__payments">
              <img src="/payments/mastercard.png" alt="mastercard" />
              <img src="/payments/maestro.png" alt="maestro" />
              <img src="/payments/visa.png" alt="visa" />
              <img src="/payments/mir.png" alt="mir" />
              <img src="/payments/google.png" alt="google pay" />
              <img src="/payments/apple.png" alt="apple pay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconNewHashFooter from '@/assets/icons/new-hash-footer.svg'

import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  name: 'BgFooter',
  components: {
    IconNewHashFooter,
    SocialMediaLinks,
  },
  data: () => ({
    tags: [
      'Трейлы',
      'Бег',
      'Туризм',
      'Профи',
      'Походы',
      'Плавание',
      'Восхождение',
      'Общение',
      'Кэмпы',
      'Тренировки',
      'Здоровье',
      'Советы',
      'Соревнованияч',
      'Экипировка',
    ],
  }),
  computed: {
    options() {
      return {
        slidesPerView: this.tags.length,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
        speed: 2000,
        loop: true,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/css/mixins';
.bg-footer {
  &-subscribe {
    max-width: $max-content-width;
    height: 400px;
    padding: 60px 90px;
    margin: auto;
    margin-bottom: 70px;
    text-align: center;
    border-radius: 4px;
    background-image: url('@/assets/img/subscribe-background.png');
    background-size: cover;
    background-repeat: no-repeat;

    &__title {
      font-size: 40px;
      font-weight: 500;
    }

    &__description {
      margin: 30px 0 40px;
      font-size: 20px;
      line-height: 28px;
    }

    &__email-form {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    &__politics {
      margin-top: 20px;
      font-size: 14px;
      font-weight: 500;

      a {
        color: $accent;
      }
    }
  }
  &-hashtags {
    // margin-top: 170px;
    text-align: center;
    position: relative;

    &__logo svg {
      width: 735px;
      position: absolute;
      left: 50%;
      bottom: 50px;
      transform: translateX(-50%);
      z-index: -1;
    }

    .swiper-container--smooth .swiper-wrapper {
      transition-timing-function: linear;
    }

    &__ticker {
      padding: 20px 0;
      background-color: $accent;
      color: #fff;
      overflow-x: hidden;

      &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          margin-right: 40px;
          color: #cacaca;
          cursor: pointer;
        }
      }
    }
  }
  &-standard {
    height: 100%;
    padding: 60px 0 80px 0;
    background-color: $secondary;
    color: #fff;

    &-wrapper {
      max-width: 1440px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    &__block {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__logo {
      width: 130px;
      height: 130px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: linear-gradient(
        45deg,
        rgba(76, 59, 146, 1) 0%,
        rgba(237, 59, 75, 1) 100%
      );

      img {
        width: 70%;
      }
    }
    &__description {
      font-size: 12px;
      color: $grey;
    }
    &__copy p:last-child {
      margin-top: 10px;
      font-size: 10px;
      color: #6a6a6a;
    }
    &__sections {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .footer-nav {
        width: 33%;
        max-width: 260px;
        height: 190px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__name {
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 800;
          color: $accent;
        }

        &__list li {
          margin-bottom: 10px;
          color: $grey;

          &:hover {
            color: #fff;
          }
        }

        &__all-btn,
        .subnav {
          margin-top: 0;
          display: flex;
          align-items: center;
          font-size: 14px;
          color: $grey;
          cursor: pointer;

          &:hover {
            color: #fff;
          }

          span {
            margin-right: 5px;
          }
        }

        &__all-btn--policy {
          margin-top: 5px;
          color: #6a6a6a;
        }
      }

      .footer-nav:nth-child(-n + 3) {
        margin-bottom: 70px;
      }
      .footer-nav:nth-child(3n) {
        margin-left: 70px;
      }

      .footer-nav__list--tags {
        min-width: 320px;
        display: flex;
        flex-wrap: wrap;

        li {
          margin-right: 5px;
          padding: 6px;
          border: 1px solid $grey;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
    &__phone {
      text-align: right;

      p:first-child {
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 600;
      }
      p:nth-child(2) {
        font-size: 10px;
        color: $grey;
      }
    }
    &__socials {
      margin-top: 30px;
      text-align: right;
    }
    &__payments {
      width: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      margin-left: auto;

      img {
        width: 50px;
        margin-top: 5px;
        margin-left: 5px;
      }
    }
  }

  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}

@include semi-wide {
  .bg-footer-standard {
    padding: 48px 0 68px 0;
  }
  .bg-footer-standard-wrapper {
    max-width: 1280px;
  }
}
@include desktop {
  .bg-footer-standard {
    padding: 40px 0 60px 0;
  }
  .bg-footer-standard-wrapper {
    max-width: 1080px;
  }
  .bg-footer-standard__sections {
    justify-content: flex-end;
    .footer-nav {
      max-width: 190px;

      &__name {
        margin-bottom: 16px;
        // font-size: 16px;
        // font-weight: 700;
      }

      &__list--tags {
        min-width: 260px;
      }
    }
  }
}
@include tablet {
  .bg-footer-standard {
    padding: 36px 0 52px 0;
  }
  .bg-footer-standard-wrapper {
    max-width: 100%;
    padding: 0 24px;
  }
}
@include mobile {
  .bg-footer {
    margin-top: 100px;

    &-hashtags__logo {
      svg {
        width: 80%;
        bottom:  46px;
      }
    }
    &-hashtags__ticker {
      padding: 16px 0;
    }
    &-standard {
      padding: 30px 18px 40px;

      &__company {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 40px;
      }
      &__logo {
        width: 85px;
        min-width: 85px;
        max-width: 85px;
        height: 85px;
        min-height: 85px;
        max-height: 85px;
        margin-right: 18px;
        margin-bottom: 0;

        img {
          width: 70%;
        }
      }
      &__description {
        font-size: 17px;
        line-height: 18px;
      }
      &__phone {
        text-align: center;

        p:first-child {
          font-size: 28px !important;
        }
        p:nth-child(2) {
          font-size: 14px !important;
        }
      }
      &__socials {
        text-align: center;
        margin-bottom: 40px;
      }
      &__payments {
        justify-content: center;
        width: 50%;
        margin-right: auto;

        img {
          width: 60px;
        }
      }
      &__copy {
        width: 100%;
        border-top: 1px solid #6a6a6a;
        margin-top: 40px;
        padding-top: 25px;
        text-align: center;
      }
      &__menu {
        margin-bottom: 40px;
        &-item {
          font-size: 18px;
          color: rgba(255, 255, 255, .8);
          padding-bottom: 18px;
          margin-bottom: 18px;
          border-bottom: 1px solid #0e2336;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
