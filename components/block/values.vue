<template>
  <div class="grid place-items-center h-fit">
    <div class="max-w-2xl text-center px-4 sm:px-6">
      <h2
        class="font-nunito font-semibold text-headline-6 mb-10 tracking-tight sm:text-headline-4 py-4 sm:py-8 px-6 sm:px-12"
      >
        <span class="block">{{ t('values.title') }}</span>
      </h2>
      <p
        class="mt-5 leading-6 font-nunito text-subtitle sm:mt-14 sm:text-headline-5 text-zinc-700"
      >
        <span v-html="t('values.subtitle')"></span>
        <span class="hidden text-blue-500"></span>
      </p>
      <img
        class="mt-12 inline-flex items-center justify-center object-cove"
        src="/values.svg"
        alt="WeHelp Values"
      />
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
