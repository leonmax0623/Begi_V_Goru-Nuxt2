<template>
  <div class="block block--full-width">
    <div class="block__wrapper">
      <h2 class="block__title">
        Услуги
        <ArrowButton>Все услуги</ArrowButton>
      </h2>
    </div>
    <div class="mobile">
      <div class="items">
        <template v-for="(item, idx) in items">
          <ServicesBlockItem :key="idx" :item="item"></ServicesBlockItem>
        </template>
      </div>
    </div>
    <div id="sr_items" v-swiper="options" class="swiper-container desktop">
      <div class="items swiper-wrapper">
        <template v-for="(item, idx) in items">
          <ServicesBlockItem :key="idx" :item="item"></ServicesBlockItem>
        </template>
      </div>
      <swiper-navigation :parent="parent" />
    </div>
    <div class="block__wrapper">
      <div class="services-descr">
        <div class="services-descr-title desktop">
          <span><strong>#БегиВгору</strong></span>
          <span>&mdash;</span>
          <span>
            многофункциональный портал для профессионалов и любителей спорта,
            посвященный бегу в горах, туризму и кэмпингу
          </span>
        </div>
        <!-- <div class="services-descr-advantages">
          <div class="services-descr-advantage">
            <div class="services-descr-advantage__icon">
              <icon-running-man-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Регистрация на события</div>
              <div class="services-descr-advantage__description">
                Удобный поиск спортивных событий по виду активности. Регистрируйтесь
                и оплачивайте участие прямо на сайте
              </div>
            </div>
          </div>
          <div class="services-descr-advantage">
            <div class="services-descr-advantage__icon">
              <icon-calendar-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Организация событий</div>
              <div class="services-descr-advantage__description">
                Удобный личный кабинет организатора с расширенным функционалом для
                организации вашего спортивного события
              </div>
            </div>
          </div>
          <div class="services-descr-advantage">
            <div class="services-descr-advantage__icon">
              <icon-watch-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Интернет-магазин</div>
              <div class="services-descr-advantage__description">
                Товары для спорта, туризма и отдыха с официальной гарантией от
                производителя с доставкой в любую точку России
              </div>
            </div>
          </div>
          <div class="services-descr-advantage">
            <div class="services-descr-advantage__icon">
              <icon-info-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Онлайн-журнал</div>
              <div class="services-descr-advantage__description">
                Актуальные и полезные статьи про бег, тренировки, советы
                профессионалов, новости спорта и туризма, а также многое другое
              </div>
            </div>
          </div>
          <div class="services-descr-advantage desktop">
            <div class="services-descr-advantage__icon">
              <icon-play-btn-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Видео и фильмы</div>
              <div class="services-descr-advantage__description">
                Лучшие мотивирующие ролики и фильмы про бег, трейл и другие виды
                спорта. Видео-обзоры гаджетов, экипировки и других товаров для
                спорта
              </div>
            </div>
          </div>
          <div class="services-descr-advantage desktop">
            <div class="services-descr-advantage__icon">
              <icon-lifebuoi-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Услуги профессионалов</div>
              <div class="services-descr-advantage__description">
                Профессиональные тренеры, массажисты и другие специалисты помогут
                вам подготовиться к старту и всегда быть в форме
              </div>
            </div>
          </div>
          <div class="services-descr-advantage desktop">
            <div class="services-descr-advantage__icon">
              <icon-cycle-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">
                Аренда спортивного снаряжения
              </div>
              <div class="services-descr-advantage__description">
                Возьмите понравившийся гаджет или другой товар для спорта и туризма
                в аренду и оцените все его преимущества самостоятельно
              </div>
            </div>
          </div>
          <div class="services-descr-advantage desktop">
            <div class="services-descr-advantage__icon">
              <icon-dialog-gradient-xl />
            </div>
            <div class="services-descr-advantage__info-wrapper">
              <div class="services-descr-advantage__title">Спортивное сообщество</div>
              <div class="services-descr-advantage__description">
                Есть вопрос или тема, которую вы хотите обсудить? Спортивное
                сообщество к вашим услугам
              </div>
            </div>
          </div>
        </div> -->
        <ServiceItems />
      </div>
    </div>
  </div>
</template>
<script>
import ArrowButton from "@/components/base/ArrowButton.vue"
import SwiperNavigation from '@/components/SwiperNavigation.vue'
import ServicesBlockItem from "~/components/blocks/ServicesBlock/ServicesBlockItem";
import ServiceItems from "~/components/blocks/ServicesBlock/ServiceItems";
import IconRunningManGradientXl from '@/assets/icons/running-man-gradient-xl.svg'
import IconCalendarGradientXl from '@/assets/icons/calendar-gradient-xl.svg'
import IconWatchGradientXl from '@/assets/icons/watch-gradient-xl.svg'
import IconInfoGradientXl from '@/assets/icons/info-gradient-xl.svg'
import IconPlayBtnGradientXl from '@/assets/icons/play-btn-gradient-xl.svg'
import IconLifebuoiGradientXl from '@/assets/icons/lifebuoi-gradient-xl.svg'
import IconCycleGradientXl from '@/assets/icons/cycle-gradient-xl.svg'
import IconDialogGradientXl from '@/assets/icons/dialog-gradient-xl.svg'

export default {
  components: {
    ArrowButton,
    ServicesBlockItem,
    ServiceItems,
    SwiperNavigation,
    IconRunningManGradientXl,
    IconCalendarGradientXl,
    IconWatchGradientXl,
    IconInfoGradientXl,
    IconPlayBtnGradientXl,
    IconLifebuoiGradientXl,
    IconCycleGradientXl,
    IconDialogGradientXl
  },
  data() {
    return {
      parent: null,
      items: [
        { id: 1, img: '/services/serv4.jpg', name: 'Услуги тренера', count: 10 },
        { id: 2, img: '/services/serv3.jpg', name: 'Массаж', count: 6 },
        { id: 3, img: '/services/serv2.jpg', name: 'Название', count: 12 },
        {
          id: 4,
          img: '/services/serv1.jpg',
          name: 'Аренда снаряжения',
          count: 4,
        },
        { id: 5, img: '/services/serv4.jpg', name: 'Услуги тренера', count: 10 },
        { id: 6, img: '/services/serv3.jpg', name: 'Массаж', count: 6 },
        { id: 7, img: '/services/serv2.jpg', name: 'Название', count: 12 },
        {
          id: 8,
          img: '/services/serv1.jpg',
          name: 'Аренда снаряжения',
          count: 4,
        },
      ]
    }
  },
  computed: {
    options() {
      return {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted() {
    this.parent = document.getElementById('sr_items')
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';

.swiper-container {
  padding-left: calc((100% - 1440px) / 2);
  position: relative;
}

.items {
  display: flex;
}

.services-descr {
  margin-top: 96px;

  &-title {
    margin: auto auto 62px;
    font-size: 40px;
    line-height: 1.2;
  }

  &-advantage {
    width: calc(25% - 20px);
    height: 240px;
    min-height: 265px;
    margin-bottom: 70px;

    &__icon {
      width: 80px;
      height: 80px;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 18px;
    }

    &__title {
      max-width: 260px;
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 10px;
    }

    &__description {
      max-width: 315px;
      line-height: 24px;
    }
  }
}

.services-descr {
  margin-top: 96px;

  &-title {
    max-width: $max-content-width;
    margin: auto auto 62px;
    text-align: center;
    font-size: 30px;
    line-height: 1.2;

    span:first-child {
      color: $accent;
    }
  }

  &-advantages {
    max-width: $max-content-width;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &-advantage {
    width: calc(25% - 20px);
    height: 240px;
    min-height: 265px;
    margin-bottom: 70px;

    &__icon {
      width: 80px;
      height: 80px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eaeaea;
      border-radius: 4px;
      margin-bottom: 18px;
    }

    &__title {
      max-width: 260px;
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 10px;
    }

    &__description {
      max-width: 315px;
      line-height: 24px;
    }
  }
}

@include semi-wide {
  .swiper-container {
    padding-left: calc((100% - 1280px) / 2);
  }

  .services-descr {
    margin-top: 48px;

    &-title {
      margin: auto 0 54px;
      font-size: 26px;
      line-height: 1.2;
      text-align: left;
    }

    &-advantages {
      margin-bottom: -54px;
    }

    &-advantage {
      width: calc(25% - 18px);
      min-height: 245px;
      margin-bottom: 54px;

      &__icon {
        width: 72px;
        height: 72px;
        padding: 8px;
        border-radius: 4px;
        margin-bottom: 16px;
      }

      &__title {
        max-width: 248px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.1;
        margin-bottom: 10px;
      }

      &__description {
        font-size: 15px;
        max-width: 280px;
        line-height: 22px;
      }
    }
  }
}

@include desktop {
  .swiper-container {
    padding-left: calc((100% - 1080px) / 2);
  }

  .services-descr {
    margin-top: 48px;

    &-title {
      margin: auto 0 54px;
      font-size: 26px;
      line-height: 1.2;
      text-align: left;
    }

    &-advantages {
      margin-bottom: -54px;
    }

    &-advantage {
      width: calc(25% - 18px);
      min-height: 245px;
      margin-bottom: 54px;

      &__icon {
        width: 72px;
        height: 72px;
        padding: 8px;
        border-radius: 4px;
        margin-bottom: 16px;
      }

      &__title {
        max-width: 248px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.1;
        margin-bottom: 10px;
      }

      &__description {
        font-size: 15px;
        max-width: 280px;
        line-height: 22px;
      }
    }
  }
}

@include tablet {
  .swiper-container {
    padding-left: 24px;
  }

  .services-descr {
    margin-top: 48px;

    &-title {
      margin: auto 0 54px;
      font-size: 26px;
      line-height: 1.2;
      text-align: left;
    }

    &-advantages {
      margin-bottom: -54px;
    }

    &-advantage {
      width: calc(25% - 18px);
      min-height: 245px;
      margin-bottom: 54px;

      &__icon {
        width: 72px;
        height: 72px;
        padding: 8px;
        border-radius: 4px;
        margin-bottom: 16px;
      }

      &__title {
        max-width: 248px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.1;
        margin-bottom: 10px;
      }

      &__description {
        font-size: 15px;
        max-width: 280px;
        line-height: 22px;
      }
    }
  }
}

@include mobile {
  .swiper-container {
    padding-left: 18px;
  }

  .items {
    overflow: auto;
    padding-left: 18px;

    @include hide-scrollbar;
  }

  .services-descr {
    margin-top: 48px;

    &-top {
      margin-bottom: 90px;
    }

    &-advantages {
      max-width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }

    &-advantage {
      width: 100%;
      height: auto;
      min-height: auto;
      margin-bottom: 28px;
      display: flex;

      &:last-child {
        margin-bottom: 0;
      }

      &__icon {
        margin-right: 18px;
      }

      &__title {
        font-size: 24px;
      }

      &__description {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
}
</style>
