<template>
  <div class="flex justify-center pt-40 items-center min-h-full">
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <div class="flex-column gap-8">
            <h1
              class="mt-3 tracking-tight font-nunito text-headline-4 text-zinc-800 sm:text-headline-2"
            >
              <span class="block xl:inline">
                {{ t('needHelp.service.title') }}</span
              >
            </h1>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="$router.push({ query: { service: 'accomodations' } })"
              >
                {{ t('services.type.accomodations') }}
              </button>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="$router.push({ query: { service: 'medical' } })"
              >
                {{ t('services.type.medical') }}
              </button>
            </div>
          </div>
          <div
            class="mt-2 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4 sm:mt-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="$router.push({ query: { service: 'mobile' } })"
              >
                {{ t('services.type.mobile') }}
              </button>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="w-full h-full text-zinc-500 hover:text-zinc-800 underline underline-offset-1 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="$router.push({ query: { service: 'other' } })"
              >
                {{ t('services.type.other') }}
              </button>
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
  name: 'NeedHelpService',
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>
