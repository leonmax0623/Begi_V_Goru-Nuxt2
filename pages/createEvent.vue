<template>
  <div class="container">
    <!-- <HeroBlock></HeroBlock> -->
    <ServiceItems></ServiceItems>
    <SubscribeBlock class="desktop"></SubscribeBlock>
  </div>
</template>

<script>
import HeroBlock from "@/components/blocks/HeroBlock.vue"
import ServiceItems from '@/components/blocks/ServicesBlock/ServiceItems.vue'
import SubscribeBlock from "@/components/blocks/SubscribeBlock/SubscribeBlock.vue"
export default {
  name: 'CreateEvent',
  components: {
    ServiceItems,
    SubscribeBlock,
    HeroBlock

  }
}
</script> 