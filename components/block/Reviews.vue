<template>
  <div>
    <div
      class="flex flex-row items-center justify-center gap-8 px-6 md:px-12 md:pt-14"
    >
      <div class="text-headline-6 md:text-headline-4 font-nunito font-semibold">
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
        name: 'Татьяна Овчинникова',
        role: 'domains.customer',
        imageUrl: 'reviews/ТатьянаОвчинникова.jpg',
        rating: 5,
        content: 'reviews.ТатьянаОвчинникова',
        date: new Date(),
      },
      {
        name: 'Maria Diaz',
        role: 'domains.design',
        imageUrl: 'reviews/MariaDiaz.jpg',
        rating: 5,
        content: 'reviews.MariaDiaz',
        date: new Date(),
      },
      {
        name: 'Ірина Валігура',
        role: 'domains.customer',
        imageUrl: 'reviews/ІринаВалігура.jpg',
        rating: 5,
        content: 'reviews.ІринаВалігура',
        date: new Date(),
      },
      {
        name: 'Dipali Mankodi',
        role: 'domains.design',
        imageUrl: 'reviews/DipaliMankodi.jpg',
        rating: 5,
        content: 'reviews.DipaliMankodi',
        date: new Date(),
      },
      {
        name: 'Arun Rajeev',
        role: 'domains.design',
        imageUrl: 'reviews/ArunRajeev.jpg',
        rating: 5,
        content: 'reviews.ArunRajeev',
        date: new Date(),
      },
      {
        name: 'Olga N',
        role: 'domains.customer',
        imageUrl: 'reviews/OlgaN.jpg',
        rating: 5,
        content: 'reviews.OlgaN',
        date: new Date(),
      },
      {
        name: 'Olga Ivanova',
        role: 'domains.design',
        imageUrl: 'reviews/OlgaIvanova.jpg',
        rating: 5,
        content: 'reviews.OlgaIvanova',
        date: new Date(),
      },
    ]
    return { t, reviews, breakpoints, modules: [Pagination] }
  },
}
</script>
