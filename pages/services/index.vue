<template>
  <div>
    <div v-if="services.length">
      <ServiceList :services="filteredServices" />
    </div>
    <div
      v-else
      class="flex w-full h-full min-h-screen items-center justify-center"
    >
      <loader-item />
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
  computed: {
    filteredServices() {
      const params = this.$route.params
      const capLocation =
        params?.location && this.capitalizeFirstLetter(params.location)
      const capService =
        params?.service && this.capitalizeFirstLetter(params.service)

      if (capLocation && capService) {
        return this.services.filter((service) => {
          if (
            (service.fields?.Location !== undefined &&
              service.fields.Location.fields.Name === capLocation) ||
            (service.fields?.Services !== undefined &&
              service.fields.Services.includes(capService))
          ) {
            return service
          }
        })
      } else if (capLocation) {
        return this.services.filter((service) => {
          if (
            service.fields?.Location !== undefined &&
            service.fields.Location.fields.Name === capLocation
          ) {
            return service
          }
        })
      } else if (capService) {
        return this.services.filter((service) => {
          if (
            service.fields?.Services !== undefined &&
            service.fields.Services.includes(capService)
          ) {
            return service
          }
        })
      } else {
        return this.services
      }
    },
  },
  async mounted() {
    this.services = await fetchServices()
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
}
</script>
