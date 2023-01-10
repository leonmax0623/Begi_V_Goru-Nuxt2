<template>
  <div class="app">
    <bg-header />
    <client-only>
      <bg-sidebar
        :class="['app__sidebar', {'app__sidebar--visible': isSidebarOpen}]"
      />
    </client-only>
    <nuxt />
    <bg-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuth', 'isSidebarOpen'])
  },
  async mounted() {
    this.$store.commit('setAuth', !!localStorage.getItem('token'))
    if (this.isAuth) {
      const response = await this.$api.user.getInfo()
      this.$store.commit('setUser', response.data)
    }
  },
  methods: {
    close() {
      this.$store.commit('toggleSidebar', false)
    },
    clickOutside() {
      if (this.isSidebarOpen) {
        this.close()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixins';
.app__sidebar {
  left: -350px;
  transition: .8s ease;
  translate: transformX(-100%);
}
.app__sidebar--visible {
  display: inline-block;
  left: 0 !important;
  translate: transformX(0);
}
@include mobile {
  .app__sidebar {
    left: calc(0px - 100vw);
  }
}
</style>
