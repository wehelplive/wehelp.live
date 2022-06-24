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
                {{ t('i-need-help.how-long.title') }}</span
              >
            </h1>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <NuxtLink
                to="/"
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
              >
                {{ t('i-need-help.how-long.1h') }}
              </NuxtLink>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <NuxtLink
                to="/"
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
              >
                {{ t('i-need-help.how-long.24h') }}
              </NuxtLink>
            </div>
          </div>
          <div
            class="mt-2 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4 sm:mt-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <NuxtLink
                to="/"
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
              >
                {{ t('i-need-help.how-long.7d') }}
              </NuxtLink>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <NuxtLink
                to="/"
                class="text-zinc-500 hover:text-zinc-800 underline underline-offset-1 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
              >
                {{ t('i-need-help.how-long.wait') }}
              </NuxtLink>
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
    return { t }
  },
}
</script>
