<template>
  <div
    class="flex flex-row items-center justify-center overflow-x-scroll sm:overflow-x-hidden no-scrollbar h-48 sm:items-end sm:h-24 gap-8 bg-white-500"
  >
    <div
      v-for="partner in partners"
      :key="partner.name"
      class="flex align-middle gap-8 h-8 sm: sm:h-2/5 px-5 sm:px-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
    >
      <img :src="partner.imageUrl" :alt="partner.name" />
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
