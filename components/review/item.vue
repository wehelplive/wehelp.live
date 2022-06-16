<template>
  <div
    class="flex flex-col items-center p-2 gap-2 overflow-x-hidden shadow-md rounded-lg h-72"
  >
    <div class="flex flex-row items-center p-2 gap-4 w-full h-fit ">
      <img
        :src="review.imageUrl"
        :alt="review.name"
        class="h-10 w-10 rounded-full"
      />
      <div class="flex flex-col items-start">
        <h3 class="font-nunito font-semibold text-subtitle text-black-500">
          {{ review.name }}
        </h3>
        <div
          v-if="te(review.role)"
          class="font-sans text-caption text-black-500"
        >
          {{ t(review.role) }}
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center px-2 justify-between w-full h-fit">
      <rating-item :rating="review.rating" />
      <a :href="review.source" class="text-slate-500 hover:text-slate-400">
        <div class=" font-sans text-caption text-zinc-600">
          {{ formatDate }}
        </div>
      </a>
    </div>
    <div
      v-if="te(review.content)"
      class="flex flex-row items-start px-2 py-2 font-sans text-body-2 text-grey-500"
    >
      {{ t(review.content) }}
    </div>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import { formatDistance } from 'date-fns'
import { enGB, ru, uk, de } from 'date-fns/locale'

export default {
  props: {
    review: {
      type: Object,
      default() {
        return {
          name: '',
          role: '',
          imageUrl: '',
          rating: 5,
          content: '',
          date: new Date(),
          source: '',
        }
      },
    },
  },
  data() {
    const { t, te } = useI18n()
    return {
      t,
      te,
    }
  },
  computed: {
    formatDate() {
      const locales = { en: enGB, ru, uk, de }
      return formatDistance(this.review.date, new Date(), {
        addSuffix: true,
        locale: locales[this.$i18n.locale],
      })
    },
  },
}
</script>
