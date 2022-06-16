<template>
  <div>
    <div
      class="flex flex-row items-center justify-center gap-2 py-4 sm:py-6 px-6 sm:px-12"
    >
      <h2
        class="font-nunito font-semibold text-headline-6 text-black-500 sm:text-headline-4"
      >
        {{ t('mission.title') }}
      </h2>
    </div>
    <div class="flex flex-row items-center justify-center gap-2 sm:px-24 py-16">
      <div class="flex flex-col items-center p-5 gap-3 max-w-5xl">
        <p
          class="font-nunito text-subtitle font-semibold text-black-500 text-center"
        >
          {{ t('mission.subtitle') }}
        </p>
        <p class="font-nunito text-subtitle text-black-500 text-center">
          <span v-html="t('mission.description')"></span>
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
