<template>
  <div class="subscribe block block--full-width">
    <div class="block__wrapper">
      <div class="subscribe__title">Будьте первым</div>
      <div class="subscribe__description">
        Подпишитесь на нашу рассылку и узнавайте первыми о новых спортивных
        событиях, полезных статьях из мира спорта,
        о новинках и специальных ценах на товары, а также получайте много
        другой полезной информации
      </div>
      <div class="subscribe__email-form">
        <base-input
          has-button
          btn-name="Подписаться"
          :width="'338px'"
          placeholder="Ваш email"
        />
      </div>
      <div class="subscribe__politics">
        Нажимая «Подписаться» вы соглашаетесь с
        <a href="#">Условиями использования сайта</a><br />
        и <a href="#">Политикой обработки персональных данных</a>.
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.subscribe {
  min-height: 400px;
  padding: 60px 90px;
  margin-bottom: 182px;
  text-align: center;
  border-radius: 4px;
  background-image: url('@/assets/img/subscribe-background.png');
  background-size: cover;
  background-repeat: no-repeat;

  &__title {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &__description {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
  }
  &__email-form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 18px;
  }
  &__politics {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;

    a {
      color: $accent;
    }
  }
}
@include semi-wide {
  .subscribe {
    min-height: 340px;
    padding: 58px 72px;
    margin-bottom: 168px;
    &__title {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &__description {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 32px;
    }
    &__email-form {
      margin-bottom: 20px;
      height: 58px;
    }
    &__politics {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
    }
  }
}
@include desktop {
  .subscribe {
    min-height: 340px;
    padding: 58px 72px;
    margin-bottom: 168px;
    &__title {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &__description {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 32px;
    }
    &__email-form {
      margin-bottom: 20px;
      height: 58px;
    }
    &__politics {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
    }
  }
}
@include tablet {
  .subscribe {
    min-height: 340px;
    padding: 58px 72px;
    margin-bottom: 168px;
    &__title {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &__description {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 32px;
    }
    &__email-form {
      margin-bottom: 20px;
      height: 58px;
    }
    &__politics {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
    }
  }
}
</style>
