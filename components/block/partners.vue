<template>
  <div
    class="flex flex-row items-center justify-around overflow-x-scroll sm:overflow-x-hidden no-scrollbar sm:items-center h-36 md:h-52 p-2 space-x-8 bg-white-500"
  >
    <div
      v-for="partner in partners"
      :key="partner.name"
      class="flex items-center gap-8 md:gap-60"
    >
      <img :src="partner.imageUrl" :alt="partner.name" class="h-8 sm:h-10" />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const partners = [
      { name: 'PG avogados', imageUrl: '/partners/pg-avogados.svg' },
      { name: 'Banovo', imageUrl: '/partners/banovo.svg' },
      { name: 'SNK', imageUrl: '/partners/snk.svg' },
    ]
    return {
      partners,
    }
  },
}
</script>
