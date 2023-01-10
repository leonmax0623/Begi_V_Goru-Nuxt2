<template>
  <div class="block block--full-width hero">
    <video ref="video" src="/videos/bg-video.mp4" autoplay muted loop></video>
    <div class="block__wrapper">
      <h1 class="hero__headline">Быстрее. Выше. В&nbsp;гору!</h1>
      <div class="hero__about">
        #БегиВгору - многофункциональный портал о беге, трейле, туризме и других
        видах спорта
      </div>
      <div class="hero__search">
        <base-input has-button btn-name="ПОИСК" class="search-input desktop" placeholder="Найти спортивное событие" />
        <base-input has-button btn-icon="search" class="search-input mobile" placeholder="Найти спортивное событие" />
      </div>
      <div class="hero__btns">
        <button class="button">Результаты</button>
        <button class="button button--outline" @click="createEvent">
          Создать событие&nbsp;&nbsp;<base-icon name="arrow1" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    createEvent() {
      console.log("3333333333")
      this.$router.push('/createEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';

.hero {
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: #fff;
  overflow: hidden;

  .video__wrapper {
    background-color: rgb(0, 22, 43);
    opacity: 0.502;
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  video {
    filter: brightness(0.8);
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50%;
  }

  &__headline {
    text-align: center;
  }

  &__search {
    display: flex;
    align-items: center;
    width: 85%;
    max-width: 920px;
    margin: 0 auto;
    height: 68px;

    .search-input {
      width: 100%;
      height: 100%;
    }

    p {
      margin: 0 20px;
    }
  }

  &__about {
    margin-bottom: 70px;
    font-size: 22px;
    text-align: center;
  }

  &__btns {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    button {
      flex: .25;
      margin: 0 10px;
    }
  }
}

@include wide {
  .block__wrapper {
    margin-top: 100px;
  }

  .hero__btns {
    .button {
      flex: none;
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }
}

@include semi-wide {
  .hero {
    height: 600px;
    justify-content: flex-end;
  }

  .hero__search {
    width: 100%;
    height: 62px;
  }

  .hero__headline {
    margin-bottom: 30px;
  }

  .hero__about {
    margin-bottom: 50px;
    font-size: 20px;
  }

  .hero__btns {
    margin-top: 28px;
    margin-bottom: 100px;

    .button {
      flex: none;
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }
}

@include desktop {
  .hero {
    height: 600px;
    justify-content: flex-end;
  }

  .hero__search {
    width: 100%;
    height: 58px;
  }

  .hero__headline {
    margin-bottom: 30px;
  }

  .hero__about {
    margin-bottom: 50px;
    font-size: 20px;
  }

  .hero__btns {
    margin-top: 24px;
    margin-bottom: 100px;

    .button {
      flex: none;
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }
}

@include tablet {
  .hero {
    height: 600px;
  }

  .block__wrapper {
    margin-top: 90px;
  }

  .hero__search {
    width: 100%;
    height: 52px;
  }

  .hero__headline {
    margin-bottom: 30px;
  }

  .hero__about {
    margin-bottom: 50px;
    font-size: 16px;
  }

  .hero__btns {
    margin-top: 22px;
  }
}

@include mobile {
  .hero {
    height: 520px;
  }

  .hero__headline {
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .hero__search {
    width: 100%;
    height: 46px;
  }

  .hero__about {
    margin-bottom: 46px;
    font-size: 14px;
    line-height: 1.3;
  }

  .hero__btns {
    display: block;

    .button {
      margin-right: auto;
      margin-left: auto;
      width: 216px;
      height: 44px;
      margin-bottom: 12px;
      padding-left: 0;
      padding-right: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .hero__button {
    display: block;
    margin-top: 16px;
    text-align: center;

    div:first-child {
      font-size: 12px;
      margin-bottom: 8px;
    }

    div:last-child {
      font-size: 16px;
      border-bottom: 2px solid #4c3b92;
      padding-bottom: 4px;
    }
  }
}
</style>
