<template>
  <div>
    <div v-if="services.length">
      <ServiceList :services="services" />
    </div>
  </div>
</template>
<script>
import { fetchServices } from '../../utils/airtable'

export default {
  name: 'Services',
  data: () => ({
    services: [],
  }),
  async mounted() {
    const filter = this.$route.params
    this.services = await fetchServices(null, filter)
    console.log(this.services)
  },
}
</script>
