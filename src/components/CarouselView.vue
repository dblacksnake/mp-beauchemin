<template>
  <swiper
    :spaceBetween="50"
    :effect="'fade'"
    :loop="true"
    :navigation="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="content in contents" :key="content.alt"
      ><img :src="content.src"
    /></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper'
import { computed } from 'vue'

defineProps({
  contents: Object
})

const imgs = computed(() => '../assets/mapPicture.png')
const modules = [EffectFade, Navigation, Pagination]
</script>

<style lang="scss" scoped>
.swiper {
  // margin-top: 0.15rem;
  width: 100;
  height: 25rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  // aspect-ratio: 2/4;
}

// .swiper {
//   margin-left: auto;
//   margin-right: auto;
// }
</style>
