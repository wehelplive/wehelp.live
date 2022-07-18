<template>
  <div class="py-8">
    <div
      class="flex flex-row items-center justify-center gap-2 py-4 sm:py-8 px-6 sm:px-12"
    >
      <div class="text-headline-6 sm:text-headline-4 font-nunito font-semibold">
        {{ t('reviews.title') }}
      </div>
    </div>
    <swiper :pagination="true" :modules="modules" :breakpoints="breakpoints">
      <swiper-slide
        v-for="(review, index) in reviews"
        :key="index"
        class="flex flex-row items-center justify-center overflow-hidden py-14 px-6"
      >
        <review-item :review="review" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { t } = useI18n()

    const breakpoints = ref({
      480: {
        slidesPerView: 1,
      },
      720: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    })
    const reviews = [
      {
        name: 'Tatjana Ovchinnikova',
        role: 'domains.customer',
        imageUrl: 'reviews/TatyanaOvchinnikova.jpg',
        rating: 5,
        content: 'reviews.tatyanaOvchinnikova',
        date: new Date('5/13/22'),
        source: 'https://goo.gl/maps/iUeFK42jy9XTdDz47',
      },
      {
        name: 'Maria Diaz',
        role: 'domains.design',
        imageUrl: 'reviews/MariaDiaz.jpg',
        rating: 5,
        content: 'reviews.mariaDiaz',
        date: new Date('4/13/22'),
        source: 'https://goo.gl/maps/i3rGPjcaG7QyepWG6',
      },
      {
        name: 'Irina Valigura',
        role: 'domains.customer',
        imageUrl: 'reviews/IrinaValigura.jpg',
        rating: 5,
        content: 'reviews.irinaValigura',
        date: new Date('5/13/22'),
        source: 'https://goo.gl/maps/sc6vgeTxo24eyQuQ8',
      },
      {
        name: 'Dipali Mankodi',
        role: 'domains.design',
        imageUrl: 'reviews/DipaliMankodi.jpg',
        rating: 5,
        content: 'reviews.dipaliMankodi',
        date: new Date('6/6/22'),
        source: 'https://goo.gl/maps/FaeHWcHAvm86HjNJ6',
      },
      {
        name: 'Arun Rajeev',
        role: 'domains.design',
        imageUrl: 'reviews/ArunRajeev.jpg',
        rating: 5,
        content: 'reviews.arunRajeev',
        date: new Date('4/13/22'),
        source: 'https://goo.gl/maps/mLhrbkYYisATnDVm8',
      },
      {
        name: 'Olga N',
        role: 'domains.customer',
        imageUrl: 'reviews/OlgaN.jpg',
        rating: 5,
        content: 'reviews.olgaN',
        date: new Date('5/13/22'),
        source: 'https://goo.gl/maps/rrV3Ww5zVoUqyB597',
      },
      {
        name: 'Olga Ivanova',
        role: 'domains.design',
        imageUrl: 'reviews/OlgaIvanova.jpg',
        rating: 5,
        content: 'reviews.olgaIvanova',
        date: new Date('5/13/22'),
        source: 'https://goo.gl/maps/9LbjPQvc7bfUW4mQ7',
      },
    ]
    return { t, reviews, breakpoints, modules: [Pagination] }
  },
}
</script>
