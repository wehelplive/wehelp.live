<template>
  <div>
    <div v-if="services">
      <div class="flex flex-row">
        <ListBoxItem :items="locations" @selected="onLocationSelected" />
        <ListBoxItem :items="serviceTypes" @selected="onServiceTypeSelected" />
      </div>
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
    services: null,
    location: null,
    serviceType: null,
  }),
  computed: {
    filteredServices() {
      const capLocation = this.location
      const capService = this.serviceType

      if (capLocation === 'All' || capService === 'All') {
        return this.services
      }

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
    locations() {
      const locations = this.services
        .filter((service) => service.fields.Location?.fields?.Name)
        .map((service) => service.fields.Location.fields.Name)
        .concat('All')
        .sort()
      return [...new Set(locations)].map((location) => ({
        name: location,
      }))
    },
    serviceTypes() {
      const serviceTypes = this.services
        .filter((service) => service.fields?.Services)
        .map((service) => service.fields.Services)
        .flat(1)
        .concat('All')
        .sort()
      return [...new Set(serviceTypes)].map((serviceType) => ({
        name: serviceType,
      }))
    },
  },
  async mounted() {
    this.services = await fetchServices()
  },
  methods: {
    onLocationSelected(location) {
      this.location = location
    },
    onServiceTypeSelected(serviceType) {
      this.serviceType = serviceType
    },
  },
}
</script>
