<template>
  <div class="block block--full-width organizer">
    <div class="block__wrapper">
      <img class="mobile organizer__logo" src="/BegivGoruHorizontalLogo.png" />
      <div class="organizer__title">
        <div>Эффективный инструмент для</div>
        <div>организации спортивного события</div>
      </div>
    </div>
    <div
      v-swiper:sw1="options"
      class="desktop swiper-container swiper-container--smooth"
    >
      <div class="organizer__gallery swiper-wrapper">
        <img
          v-for="(item, idx) in items"
          :key="idx"
          :src="`/organizer/${item.img}.jpg`"
          class="swiper-slide"
        />
      </div>
    </div>
    <div
      v-swiper:sw2="options2"
      class="mobile swiper-container swiper-container--smooth"
    >
      <div class="organizer__gallery swiper-wrapper">
        <img
          v-for="(item, idx) in items"
          :key="idx"
          :src="`/organizer/${item.img}_m.jpg`"
          class="swiper-slide"
        />
      </div>
    </div>
    <div class="block__wrapper">
      <div class="organizer__steps">
        <div class="organizer__step">
          <div class="orgstep-number"><span>01</span></div>
          <p>Создавайте</p>
          <p>
            Мы обеспечиваем процесс шаг за шагом для создания идеального события
          </p>
        </div>
        <div class="organizer__step">
          <div><span>02</span></div>
          <p>Настраивайте</p>
          <p>Настройте набор и объем персональных сервисов для участников</p>
        </div>
        <div class="organizer__step">
          <div><span>03</span></div>
          <p>Продвигайте</p>
          <p>Используйте маркетинговые сервисы и платформы</p>
        </div>
        <div class="organizer__step">
          <div><span>04</span></div>
          <p>Анализируйте</p>
          <p>
            Агрегированная статистика по всем участиям в событиях,
            предстваленных на платформе
          </p>
        </div>
      </div>
      <div class="organizer__actions">
        <button class="button button--outline-gradient">Организатору</button>
        <button class="button">
          Создать событие &nbsp;<base-icon name="arrow1" size="26" height="12" color="#fff" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, img: 'org1' },
        { id: 2, img: 'org2' },
        { id: 3, img: 'org3' },
        { id: 4, img: 'org4' },
        { id: 5, img: 'org5' },
        { id: 6, img: 'org3' }
      ]
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: this.items.length,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
        speed: 2000,
        loop: true
      }
    },
    options2() {
      return {
        slidesPerView: this.items.length,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
        speed: 2000,
        loop: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.organizer {
  padding: 86px 0 70px;
  background-color: #f3f3f3;

  .swiper-container--smooth .swiper-wrapper {
    transition-timing-function: linear;
  }
  &__title {
    text-align: center;

    div:first-child {
      font-size: 30px;
      margin-bottom: 20px;
    }
    div:last-child {
      font-size: 48px;
      font-weight: 600;
    }
  }
  &__gallery {
    margin-top: 80px;
    display: flex;
    align-items: center;

    img {
      width: fit-content;
      height: fit-content;
      margin-right: 10px;
    }
  }
  &__steps {
    max-width: 1440px;
    margin: auto;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      width: 1010px;
      border: 1px dashed $accent;
      position: absolute;
      top: 42px;
      z-index: -1;
    }
  }
  &__step {
    width: 340px;
    margin: 0 25px;
    text-align: center;

    div {
      width: 80px;
      height: 80px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: #eaeaea;

      span {
        margin-top: 10px;
        font-size: 48px;
        font-weight: 500;
        background: -webkit-linear-gradient(
            90deg,
            rgba(76, 59, 146, 1) 0%,
            rgba(237, 59, 75, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p:nth-child(2) {
      margin: 20px 0 14px;
      font-size: 28px;
      font-weight: 600;
    }
    p:last-child {
      font-size: 17px;
      font-weight: 400;
      line-height: 1.412;
    }
  }
  &__actions {
    margin-top: 65px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin: 0 10px;
      font-weight: 500;
    }
    button:first-child {
      background: linear-gradient(#f3f3f3, #f3f3f3) padding-box,
      $main-gradient-color border-box;
    }
  }
}
@include semi-wide {
  .organizer {
    padding: 78px 0 60px;
    &__title {
      div:first-child {
        font-size: 24px;
        margin-bottom: 10px;
      }
      div:last-child {
        font-size: 40px;
        font-weight: 600;
      }
    }
    &__gallery {
      margin-top: 72px;
      img {
        margin-right: 8px;
      }
    }
    &__steps {
      max-width: 100%;
      margin: 52px auto auto;
      &::before {
        width: 1010px;
        top: 38px;
      }
    }
    &__step {
      width: 320px;
      margin: 0 20px;
      div {
        width: 70px;
        height: 70px;
        span {
          margin-top: 8px;
          font-size: 42px;
          font-weight: 500;
        }
      }
      p:nth-child(2) {
        margin: 30px 0 12px;
        font-size: 24px;
        font-weight: 600;
      }
      p:last-child {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.3;
      }
    }
    &__actions {
      margin-top: 50px;
      button {
        margin: 0 10px;
      }
    }
  }
}
@include desktop {
  .organizer {
    padding: 68px 0 52px;
    &__title {
      div:first-child {
        font-size: 24px;
        margin-bottom: 10px;
      }
      div:last-child {
        font-size: 40px;
        font-weight: 600;
      }
    }
    &__gallery {
      margin-top: 60px;
      img {
        margin-right: 7px;
      }
    }
    &__steps {
      max-width: 100%;
      margin: 42px auto auto;
      &::before {
        width: 860px;
        top: 34px;
      }
    }
    &__step {
      width: 280px;
      margin: 0 18px;
      div {
        width: 70px;
        height: 70px;
        span {
          margin-top: 8px;
          font-size: 42px;
          font-weight: 500;
        }
      }
      p:nth-child(2) {
        margin: 30px 0 12px;
        font-size: 24px;
        font-weight: 600;
      }
      p:last-child {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.2;
      }
    }
    &__actions {
      margin-top: 50px;
      button {
        margin: 0 10px;
      }
    }
  }
}
@include tablet {
  .organizer {
    padding: 54px 0 46px;
    &__title {
      div:first-child {
        font-size: 24px;
        margin-bottom: 10px;
      }
      div:last-child {
        font-size: 40px;
        font-weight: 600;
      }
    }
    &__gallery {
      margin-top: 48px;
      img {
        margin-right: 6px;
      }
    }
    &__steps {
      max-width: 100%;
      margin: 36px auto auto;
      &::before {
        width: 740px;
        top: 30px;
      }
    }
    &__step {
      width: 220px;
      margin: 0 16px;
      div {
        width: 70px;
        height: 70px;
        span {
          margin-top: 8px;
          font-size: 42px;
          font-weight: 500;
        }
      }
      p:nth-child(2) {
        margin: 30px 0 12px;
        font-size: 24px;
        font-weight: 600;
      }
      p:last-child {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
      }
    }
    &__actions {
      margin-top: 50px;
      button {
        margin: 0 10px;
      }
    }
  }
}
@include mobile {
  .organizer {
    width: 100vw;
    padding: 30px 0;
    background-color: #f3f3f3;
    $outlined-btn-bg-color: #f3f3f3;

    .swiper-container--smooth .swiper-wrapper {
      transition-timing-function: linear;
    }

    &__logo {
      width: 230px;
      display: block;
      margin: 0 auto 26px;
    }
    &__title {
      padding: 0 18px;
      text-align: center;

      div:first-child {
        margin-bottom: 12px;
        font-size: 16px;
      }
      div:last-child {
        font-size: 24px;
        font-weight: 500;
      }
    }
    &__gallery {
      margin-top: 50px;
      display: flex;
      align-items: center;

      img {
        width: fit-content;
        height: fit-content;
        margin-right: 6px;
      }
    }
    &__steps {
      max-width: 100%;
      margin: auto;
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 1;

      &::before {
        display: none;
      }
    }
    &__step {
      width: 100%;
      padding: 0 18px;
      margin: 0 0 25px;
      text-align: center;

      div {
        width: 66px;
        height: 66px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: #eaeaea;

        span {
          margin-top: 10px;
          font-size: 40px;
          font-weight: 500;
          background: -webkit-linear-gradient(
              90deg,
              rgba(76, 59, 146, 1) 0%,
              rgba(237, 59, 75, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p:nth-child(2) {
        margin: 16px 0 8px;
        font-size: 24px;
        font-weight: 600;
      }
      p:last-child {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.412;
      }
    }
    &__actions {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        width: 70%;
        margin: 0 10px;
      }
      button:first-child {
        background: linear-gradient(#f3f3f3, #f3f3f3) padding-box,
        $main-gradient-color border-box;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
