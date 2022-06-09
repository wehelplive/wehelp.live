<template>
  <div class="grid place-items-center  min-h-screen">
    <div class="max-w-2xl text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2
        class="font-nunito font-semibold text-headline-6 mb-10 tracking-tight sm:text-headline-4"
      >
        <span class="block">{{ t('values.title') }}</span>
      </h2>
      <p
        class="mt-[10%]   lg:text-headline-5 leading-6 font-nunito text-lg  text-zinc-700"
      >
        <span v-html="t('values.subtitle')"></span>
      </p>
      <img
        class="mt-[15%] inline-flex items-center justify-center object-cove"
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
