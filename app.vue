<template>
  <div>
    <LayoutHeader />
    <NuxtChild />
    <LayoutFooter />
  </div>
</template>

<script>
window.dataLayer = window.dataLayer || []

function gtag() {
  dataLayer.push(arguments)
}

export default {
  mounted() {
    gtag('js', new Date())

    gtag('config', 'G-TVX1HJNMVX')
  },
}
</script>
