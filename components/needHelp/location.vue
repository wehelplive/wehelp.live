<template>
  <div class="flex justify-center pt-40 items-center min-h-full">
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <div class="flex-column gap-8">
            <h1
              class="mt-3 tracking-tight font-nunito text-headline-4 text-zinc-800 sm:text-headline-2"
            >
              <span class="block xl:inline">
                {{ t('needHelp.location.title') }}</span
              >
            </h1>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4"
          >
            <div class="w-full h-full">
              <div class="mt-2 relative">
                <select
                  id="place"
                  name="place"
                  class="appearance-none block w-full h-16 bg-none bg-white-500 border border-zinc-50 hover:border-zinc-500 rounded-xl text-body pl-5 pr-12 py-2 text-zinc-500 focus:outline-none focus:ring-zinc-50 focus:border-zinc-500"
                >
                  <option>Argentina</option>
                  <option>Australia</option>
                  <option selected="">Location</option>
                  <option>Canada</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"
                >
                  <!-- <ChevronDownIcon
                    class="h-4 w-4 text-zinc-500"
                    aria-hidden="true"
                  /> -->
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-center gap-6 m-1 pb-14 ">
              <ListBoxItem :items="locations" @selected="onLocationSelected" />
            </div>
            <div class="w-full h-full flex items-right justify-right">
              <NuxtLink
                to="/"
                class="text-zinc-500 hover:text-zinc-800 underline underline-offset-1 w-full h-full pl-5 flex justify-end capitalize rounded-3xl text-body"
              >
                {{ t('needHelp.location.use-my-location') }}
              </NuxtLink>
            </div>
          </div>

          <div
            class="mt-2 gap-2 mx-auto flex flex-col items-right justify-right h-24 sm:max-w-sm sm:gap-4 sm:mt-4"
          >
            <div class="w-full h-full flex items-right justify-right"></div>
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="
                  this.$router.push({
                    query: Object.assign(
                      { ...this.$route.query },
                      { location: 'Germany' }
                    ),
                  })
                "
              >
                {{ t('needHelp.location.next') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import { fetchServices } from '../../utils/airtable'

export default {
  name: 'NeedHelpLocation',
  setup() {
    const { t } = useI18n()
    return { t }
  },

  data() {
    return {
      services: [],
    }
  },
  computed: {
    locations() {
      const locations = this.services
        .filter((service) => service.fields.Location?.fields?.Name)
        .map((service) => service.fields.Location.fields.Name)
        .sort()
      const locationsSet = [...new Set(locations)].map((location) => ({
        name: location,
      }))
      return locationsSet
    },
  },
  async mounted() {
    this.services = await fetchServices()
  },

  methods: {
    onLocationSelected(location) {
      this.location = location
    },
  },
}
</script>
