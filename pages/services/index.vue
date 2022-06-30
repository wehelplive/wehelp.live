<template>
  <div>
    <div v-if="services">
      <div class="flex flex-col justify-center">
        <div
          class="flex justify-center py-14 font-nunito font-semibold text-headline-4 text-zinc-900"
        >
          {{ $t('services.evacuation.find') }}
        </div>
        <div class="flex flex-row justify-center gap-6 m-1 pb-14 ">
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
    const loc = this.capitalizeFirstLetter(params.location)
    const serv = this.capitalizeFirstLetter(params.service)
    return {
      services: null,
      location: loc || 'Anywhere',
      serviceType: serv || 'Everything',
    }
  },
  computed: {
    filteredServices() {
      const capLocation = this.location
      const capService = this.serviceType

      if (capLocation && capService) {
        return this.services.filter((service) => {
          const loc = service.fields?.Location?.fields?.Name
          const checkLocation =
            loc === capLocation || loc === 'Anywhere' || loc === 'Germany'
          const checkService =
            capService === 'Everything'
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
        .concat('Everything')
        .sort()
      return [...new Set(serviceTypes)].map((serviceType) => ({
        name: serviceType,
      }))
    },
  },
  async mounted() {
    this.services = await fetchServices()
    if (!this.$route.params.location || !this.$route.params.service) {
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
      history.replaceState({}, null, '/services' + path)
    },
  },
}
</script>
