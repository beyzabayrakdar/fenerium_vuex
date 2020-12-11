<template>
  <div class="container">
    <div>
     <Slider />
     <Sayfa />
     <Sectiklerimiz />
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue"
import Sayfa from "@/components/Sayfa.vue"
import Sectiklerimiz from "@/components/Sectiklerimiz.vue"

export default {
  components:{
    Slider,
    Sayfa,
    Sectiklerimiz

  }
}
</script>
