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
            <div class="w-full h-full relative ">
              <ListBoxItem
                :items="locations"
                :default-value="location"
                @selected="onLocationSelected"
              />
            </div>
            <div class="w-full h-full flex items-right justify-right">
              <!-- <NuxtLink
                to="/"
                class="text-zinc-500 hover:text-zinc-800 underline underline-offset-1 w-full h-full pl-5 flex justify-end capitalize rounded-3xl text-body"
              >
                {{ t('needHelp.location.use-my-location') }}
              </NuxtLink> -->
            </div>
          </div>

          <div
            class="mt-2 gap-2 mx-auto flex flex-col items-right justify-right h-24 sm:max-w-sm sm:gap-4 sm:mt-4"
          >
            <div class="w-full h-full flex items-right justify-right"></div>
            <div class="w-full h-full flex items-center justify-center">
              <button
                :disabled="!location"
                class="w-full h-full disabled:bg-red-100 bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="
                  this.$router.push({
                    query: Object.assign(
                      { ...this.$route.query },
                      { location: location }
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
      location: '',
      buttonEnabled: false,
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
      this.buttonEnabled = true
    },
  },
}
</script>
