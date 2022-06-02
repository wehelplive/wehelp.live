<template>
  <div
    class="flex justify-center pt-40 items-center min-h-full bg-gradient-to-r from-blue-sky-200 to-yellow-sun-100"
  >
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <div class="flex-column gap-8">
            <h1
              class="mt-3 tracking-tight font-nunito text-headline-4 text-zinc-800  sm:text-headline-2"
            >
              <span class="block xl:inline">{{ t('home.start.title') }}</span>
            </h1>
            <p
              class="mt-5 max-w-[302px] mx-auto font-nunito text-subtitle text-zinc-700  sm:text-headline-5 sm:max-w-[652px]"
            >
              {{ t('home.start.description') }}
            </p>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:mt-12 sm:max-w-sm sm:h-16 sm:flex-row sm:gap-4"
          >
            <div
              class="w-full h-1/2 flex items-center justify-center sm:w-1/2 sm:h-16"
            >
              <NuxtLink
                to="/guest"
                class="bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body1 sm:rounded-xl"
              >
                {{ t('home.start.findAccomodation') }}
              </NuxtLink>
            </div>
            <div
              class="w-full h-1/2 flex items-center justify-center sm:w-1/2 sm:h-16"
            >
              <NuxtLink
                to="/host"
                class="bg-green-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body1 sm:rounded-xl"
              >
                {{ t('home.start.offerAccomodation') }}
              </NuxtLink>
            </div>
          </div>
          <div
            class="mt-12 flex items-end flex-row justify-center gap-2 w-xs h-28"
          >
            <div class="sm:hidden">
              <RatingItem :rating="4.8" />
            </div>
            <div class="hidden sm:flex">
              <RatingItem :rating="4.8" :size="10" />
            </div>
            <div
              class="mb-2 font-nunito text-subtitle sm:text-headline-5 text-zinc-700"
            >
              {{ t('home.start.review', { stars: 4.8, reviews: 5 }) }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import RatingItem from '../rating/item.vue'

export default {
  setup() {
    const { t } = useI18n()
    return {
      t,
      RatingItem,
    }
  },
}
</script>
