<template>
  <div
    class="flex justify-center pt-40 items-center min-h-full bg-gradient-to-r from-blue-sky-200 to-yellow-sun-100"
  >
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <div class="flex-column gap-8">
            <h1
              class="mt-3 tracking-tight font-nunito text-headline-4 text-zinc-800 sm:text-headline-2"
            >
              <span class="block xl:inline">{{ t('hero.title') }}</span>
            </h1>
            <p
              class="mt-5 max-w-xs mx-auto font-nunito text-subtitle text-zinc-700  sm:text-headline-5 sm:max-w-2xl"
            >
              {{ t('hero.description') }}
            </p>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:h-12 sm:mt-12 sm:max-w-sm sm:flex-row sm:gap-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <NuxtLink
                to="/guest"
                class="bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
              >
                {{ t('services.accomodations.find') }}
              </NuxtLink>
              <NuxtLink
                to="/i-need-help"
                class="bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body sm:rounded-xl"
              >
                {{ t('hero.ineedhelp') }}
              </NuxtLink>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <NuxtLink
                to="/host"
                class="bg-green-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
              >
                {{ t('services.accomodations.add') }}
              </NuxtLink>
            </div>
          </div>
          <div
            class="mt-12 flex items-end flex-row justify-center gap-2 w-xs h-28"
          >
            <div class="sm:hidden mb-2">
              <rating-item :rating="4.8" />
            </div>
            <div class="hidden sm:flex mb-2">
              <rating-item :rating="4.8" :size="8" />
            </div>
            <div
              class="mb-2 font-nunito text-body sm:text-headline-5 text-zinc-700"
            >
              {{ t('hero.reviews', { stars: 4.8, reviews: 7 }) }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
}
</script>
