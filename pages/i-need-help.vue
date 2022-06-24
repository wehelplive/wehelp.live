<template>
  <div class="flex justify-center pt-40 items-center min-h-full">
    <swiper
      :pagination="true"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="flex flex-row items-center justify-center overflow-hidden py-14 px-6"
      >
        <I-need-helpWhat-help />
        slide 1
      </swiper-slide>
      <swiper-slide
        class="flex flex-row items-center justify-center overflow-hidden py-14 px-6"
      >
        <!-- <I-need-helpWhat-help /> -->
        slide 2
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { modules: [Pagination] }
  },
}
</script>
