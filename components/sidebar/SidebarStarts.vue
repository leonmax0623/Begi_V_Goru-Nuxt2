<template>
  <div class="sidebar-starts">
    <div v-for="start in content" :key="start.id" class="sidebar-starts__event-wrapper">
      <div class="sidebar-starts__title">
        <span>{{ start.month }}</span>
        <span>{{ start.year }}</span>
      </div>
      <div v-for="(event, index) in start.events" :key="index" class="sidebar-starts__events">
        <div class="sidebar-starts__event">
          <div class="sidebar-starts__image">
            <img :src="require(`@/assets/img/${event.image}.jpg`)" alt="">
          </div>
          <div class="sidebar-starts__info">
            <div>
              <span class="sidebar-starts__date">{{ event.date }}</span>
              <span class="sidebar-starts__cat">#{{ event.cat }}</span>
            </div>
            <div class="sidebar-starts__name">{{ event.name }}</div>
            <div class="sidebar-starts__location">{{ event.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarStarts',
  props: {
    content: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.sidebar-starts {
  margin-top: 40px;
  overflow-y: hidden;

  &__event-wrapper {
    margin-bottom: 75px;
  }

  &__events {
    margin-bottom: 40px;
  }

  &__title {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 12px;
    border-bottom: 1px solid #4a5a68;

    span:first-child {
      font-size: 20px;
    }
    span:last-child {
      font-size: 16px;
    }
  }

  &__event {
    width: 100%;
    display: flex;
  }

  &__image img {
    border-radius: 4px;
  }

  &__info {
    width: 100%;
    margin-left: 30px;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__date {
    font-weight: 500;
    color: $accent;
  }

  &__cat {
    float: right;
    padding: 4px;
    font-size: 12px;
    background: $main-gradient-color;
    border-radius: 4px;
  }

  &__location {
    font-size: 12px;
    color: #ccc;
  }
}
</style>
