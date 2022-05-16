<template>
  <div>
    <h1 class="text-center text-xl font-bold">What others say about us</h1>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :pagination="pagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!-- :pagination="{ clickable: true }" -->
      <swiper-slide class="h-300 "><BlockVolunteer /> </swiper-slide>
      <swiper-slide class="h-300 "><BlockVolunteer /></swiper-slide>
      <swiper-slide class="h-300 "><BlockVolunteer /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
      pagination: {
        clickable: true,
        renderBullet(index, className) {
          return '<span class="' + className + '">' + '</span>'
        },
      },
      autoplay: {
        delay: 3000,
      },
      modules: [Pagination, Autoplay],
    }
  },
}
</script>
<style scoped>
.swiper-pagination-bullet {
  /** Stylization of bookmarks that are not selected */
  width: var(
    --swiper-pagination-bullet-width,
    var(--swiper-pagination-bullet-size, 16px)
  );
  height: var(
    --swiper-pagination-bullet-height,
    var(--swiper-pagination-bullet-size, 16px)
  );
  display: inline-block;
  border-radius: 50%;
  background: var(--swiper-pagination-bullet-inactive-color, red);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
.swiper-pagination-bullet-active {
  /** Marker styling of selected image in carousel */
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
</style>
