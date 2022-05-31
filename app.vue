<template>
  <div>
    <LayoutHeader />
    <NuxtChild />
    <LayoutFooter />
  </div>
</template>
<script>
import { getBrowserLocale } from '~/utils/browserLanguage'
export default {
  mounted() {
    const locale = getBrowserLocale()
    const exists = this.$i18n.availableLocales.includes(locale)
    if (locale && exists) {
      this.$i18n.locale = locale
    }
  },
}
</script>
