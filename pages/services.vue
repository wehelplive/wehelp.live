<template>
  <ServiceList :services="services" />
</template>
<script>
import { fetchServices } from '../utils/airtable.js'

export default {
  name: 'Services',
  data: () => ({
    services: [],
  }),
  async mounted() {
    this.services = await fetchServices()
  },
}
</script>
