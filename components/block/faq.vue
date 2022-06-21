<template>
  <div class="bg-white-500">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y divide-neutral-500">
        <h2 class="font-semibold text-headline-6 font-nunito text-black-500">
          {{ t('faq.title') }}
        </h2>
        <FaqItem
          v-for="(item, index) in tm('faq.items')"
          :key="index"
          :title="t(`faq.items[${index}].question`)"
        >
          <div
            class="prose"
            v-html="md.render(t(`faq.items[${index}].answer`))"
          ></div>
        </FaqItem>
      </div>
    </div>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

export default {
  setup() {
    const { t, tm } = useI18n()

    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })

    return {
      t,
      tm,
      md,
    }
  },
}
</script>
