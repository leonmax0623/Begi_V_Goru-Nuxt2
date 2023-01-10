<template>
  <div class="container" style="border:1px solid red">
    <div class="block">
      <div class="block__wrapper">
        <h1>title</h1>
        content
      </div>
    </div>
    <div class="block">
      <div class="block__wrapper">
        <h2>title</h2>
        content
        <div>
          <div>
            <button class="button">button 1</button>
          </div>
          <div>
            <button class="button button--sm">button 1</button>
          </div>
          <div>
            <button class="button button--xs button--outline">button 1</button>
          </div>
          <div>
            <button class="button button--outline-gradient">button 1</button>
          </div>
        </div>
      </div>
    </div>
    <div class="block block--full-width">
      <div class="block__wrapper">
        <h2>title</h2>
      </div>
      <TagsCategories class="left-padding"></TagsCategories>
    </div>
    <div class="block">
      <div class="block__wrapper">
        <h2>title</h2>
        content
      </div>
    </div>
  </div>
</template>
<script>
import TagsCategories from '@/components/blocks/TagsCategories.vue'
export default {
  components: {
    TagsCategories
  },
  layout: 'test'
}
</script>
