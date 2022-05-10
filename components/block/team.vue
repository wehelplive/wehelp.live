<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="h-300 line-height: 5rem bg-blue-500 	text-align: center"
      >Slide 1</swiper-slide
    >
    <swiper-slide class="h-300 line-height: 5rem bg-blue-500 text-align: center"
      >Slide 2</swiper-slide
    >
    <swiper-slide class="h-300 line-height: 5rem bg-blue-500 text-align: center"
      >Slide 3</swiper-slide
    >
  </swiper>
</template>
<script>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    }
  },
}
</script>
<style scoped>
.swiper-slide {
  height: 300px;
  line-height: 300px;
  font-size: 30px;
  text-align: center;
  background-color: pink;
}
</style>
