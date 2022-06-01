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
            class="mt-8 mb-5 mx-auto sm:flex sm:justify-center items-center sm:mt-12 gap-2.5"
          >
            <div class="rounded-3xl">
              <NuxtLink
                to="/guest"
                class="w-72 h-12 flex shadow font-sans items-center justify-center capitalize border border-transparent  font-semibold  rounded-3xl text-white-500 bg-red-500 hover:bg-zinc-500 md:py-4 md:text-lg md:px-10"
              >
                {{ t('home.start.findAccomodation') }}
              </NuxtLink>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <NuxtLink
                to="/host"
                class="w-full underline underline-offset-1 flex font-sans items-center justify-center capitalize px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 hover:text-zinc-500 sm:hover:text-white-500 sm:text-white-500 sm:bg-green-500 sm:w-72 sm:h-12 sm:no-underline sm:rounded-3xl sm:py-4 sm:text-lg sm:px-10"
              >
                {{ t('home.start.offerAccomodation') }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-end flex-row justify-center gap-2 w-xs h-28">
            <RatingItem :rating="4.8" class="md:h-[34px]" />
            <div
              class="mb-2 font-nunito text-subtitle md:text-headline-5 text-zinc-700"
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
