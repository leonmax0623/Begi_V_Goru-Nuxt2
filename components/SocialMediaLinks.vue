<template>
  <div>
    <a
      v-for="(item, index) in socials"
      :key="index"
      :href="item.link"
      class="social-icon-wrapper"
      :style="`border: 1px solid ${color}`"
    >
      <base-icon :name="item.name" :size="iconSize" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaLinks',
  props: {
    iconSize: {
      type: [String, Number],
      default: '20'
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data: () => ({
    socials: [
      { name: 'vk', link: 'https://vk.com' },
      { name: 'youtube', link: 'https://youtube.com' },
      { name: 'wa', link: 'https://whatsapp.com' },
      { name: 'facebook', link: 'https://facebook.com' },
    ],
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins';
.social-icon-wrapper {
  padding: 9px;
  margin-right: 6px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@include semi-wide {
  .social-icon-wrapper {
    padding: 7px;
    width: 36px;
    height: 36px;

    svg {
      width: 17px !important;
    }
  }
}
@include desktop {
  .social-icon-wrapper {
    padding: 7px;
    width: 36px;
    height: 36px;

    svg {
      width: 17px !important;
    }
  }
}
@include tablet {
  .social-icon-wrapper {
    padding: 7px;
    width: 36px;
    height: 36px;

    svg {
      width: 17px !important;
    }
  }
}

.social-icon-wrapper:last-child {
  margin: 0;
}
</style>
