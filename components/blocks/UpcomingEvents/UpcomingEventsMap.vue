<template>
  <yandex-map
    zoom="3"
    :coords="[58.550508, 35.709312]"
    style="width: 100%; height: 420px"
  >
    <ymap-marker
      v-for="(billboard, index) in surfaces"
      :key="index"
      :marker-id="index"
      :controls="['ZoomControl']"
      marker-type="placemark"
      :coords="billboard.coords.split(',')"
      :icon="{ content: billboard.id }"
    />
  </yandex-map>
</template>
<script>
export default {
  props: {
    surfaces: { type: Array, default: () => [] }
  }
}
</script>
