<template>
  <div>
    <div v-if="services">
      <div class="flex flex-row">
        <ListBoxItem
          :items="locations"
          :default-value="location"
          @selected="onLocationSelected"
        />
        <ListBoxItem
          :items="serviceTypes"
          :default-value="serviceType"
          @selected="onServiceTypeSelected"
        />
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
  data() {
    const params = this.$route.params
    const loc = this.capitalizeFirstLetter(params.location)
    const serv = this.capitalizeFirstLetter(params.service)
    return {
      services: null,
      location: loc || 'Any-location',
      serviceType: serv || 'Any-service',
    }
  },
  computed: {
    filteredServices() {
      const capLocation = this.location
      const capService = this.serviceType

      if (capLocation === 'Any-location' || capService === 'Any-service') {
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
        .concat('Any-location')
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
        .concat('Any-service')
        .sort()
      return [...new Set(serviceTypes)].map((serviceType) => ({
        name: serviceType,
      }))
    },
  },
  async mounted() {
    this.services = await fetchServices()
    if (!this.$route.params.location && !this.$route.params.service) {
      this.updateRoute(`/${this.location}/${this.serviceType}`)
    }
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    onLocationSelected(location) {
      this.location = location
      this.updateRoute(`/${location}/${this.serviceType}`)
    },
    onServiceTypeSelected(serviceType) {
      this.serviceType = serviceType
      this.updateRoute(`/${this.location}/${serviceType}`)
    },
    updateRoute(path) {
      history.pushState({}, null, this.$route.path.replace(/\/$/, '') + path)
    },
  },
}
</script>
