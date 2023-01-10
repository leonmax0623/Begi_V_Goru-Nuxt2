<template>
  <div class="container">
    <HeroBlock></HeroBlock>
    <SportEvents></SportEvents>
    <UpcomingEvents></UpcomingEvents>
    <PartnersAds></PartnersAds>
    <OrgEvents></OrgEvents>
    <ArticlesItems></ArticlesItems>
    <NewsBlock></NewsBlock>
    <GoodsBlock></GoodsBlock>
    <ProductsBlock></ProductsBlock>
    <ServicesBlock></ServicesBlock>
    <SubscribeBlock class="desktop"></SubscribeBlock>
  </div>
</template>

<script>
import GoodsBlock from '@/components/blocks/GoodsBlock/GoodsBlockItems.vue'
import HeroBlock from "@/components/blocks/HeroBlock.vue"
import SportEvents from "@/components/blocks/SportEvents/SportEvents.vue"
import UpcomingEvents from "@/components/blocks/UpcomingEvents/UpcomingEvents.vue"
import PartnersAds from "@/components/blocks/PartnersAds/PartnersAds.vue"
import OrgEvents from "@/components/blocks/OrgEvents/OrgEvents.vue"
import ArticlesItems from "@/components/blocks/Articles/ArticlesItems.vue"
import NewsBlock from "@/components/blocks/NewsBlock/NewsBlock.vue"
import ProductsBlock from '@/components/blocks/ProductsBlock/ProductsItems.vue'
import ServicesBlock from '@/components/blocks/ServicesBlock/ServicesBlock.vue'
import SubscribeBlock from "@/components/blocks/SubscribeBlock/SubscribeBlock.vue"

export default {
  name: 'IndexPage',
  components: {
    SubscribeBlock,
    ArticlesItems,
    OrgEvents,
    UpcomingEvents,
    HeroBlock,
    SportEvents,
    GoodsBlock,
    PartnersAds,
    NewsBlock,
    ProductsBlock,
    ServicesBlock
  }
}
</script>
