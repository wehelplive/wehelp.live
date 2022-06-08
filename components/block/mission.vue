<template>
  <div class="bg-white-500">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="font-nunito font-semibold text-headline-6 mb-10 tracking-tight sm:text-headline-4"
        >
          {{ t('home.mission.title') }}
        </h2>
        <p
          class="mt-1 text-4xl font-extrabold text-grey-800 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          {{ t('home.mission.subtitle') }}
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-grey-500">
          <span v-html="t('home.mission.description')"></span>
        </p>
      </div>
    </div>
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
