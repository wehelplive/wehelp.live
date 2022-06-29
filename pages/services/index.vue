<template>
  <div>
    <div v-if="services">
      <div class="flex flex-column justify-center sm:justify-start py-10">
        <div class="flex flex-row gap-2 m-2">
          <ListBoxItem
            :items="serviceTypes"
            :default-value="serviceType"
            @selected="onServiceTypeSelected"
          />
          <ListBoxItem
            :items="locations"
            :default-value="location"
            @selected="onLocationSelected"
          />
        </div>
      </div>
      <div v-if="filteredServices.length">
        <ServiceList :services="filteredServices" />
      </div>
      <div v-else>
        <div class="flex justify-center font-sans sm:justify-start p-10">
          No service found.
        </div>
      </div>
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
    const serv = this.capitalizeFirstLetter(params.service)
    const loc = this.capitalizeFirstLetter(params.location)
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

      if (capLocation === 'Any-location' && capService === 'Any-service') {
        return this.services
      }

      if (capLocation && capService) {
        return this.services.filter((service) => {
          const checkLocation =
            capLocation === 'Any-location'
              ? true
              : service.fields?.Location?.fields?.Name === capLocation
          const checkService =
            capService === 'Any-service'
              ? true
              : service.fields?.Services
              ? service.fields.Services.includes(capService)
              : false
          if (checkLocation && checkService) {
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
    if (!this.$route.params.location || !this.$route.params.service) {
      this.updateRoute(`/${this.serviceType}/${this.location}`)
    }
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    onLocationSelected(location) {
      this.location = location
      this.updateRoute(`/${this.serviceType}/${location}`)
    },
    onServiceTypeSelected(serviceType) {
      this.serviceType = serviceType
      this.updateRoute(`/${serviceType}/${this.location}`)
    },
    updateRoute(path) {
      history.replaceState({}, null, '/services' + path)
      console.log(this.filteredServices)
    },
  },
}
</script>
