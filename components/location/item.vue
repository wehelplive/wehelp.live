<template>
  <div v-if="location" class="flex flex-row mb-4 items-center">
    <LocationMarkerIcon class="h-5 w-5 mr-2 text-grey-500" />
    <div class="text-[#5F6267] flex-1 font-sans">
      {{ location.fields.Name }}
    </div>
  </div>
</template>
<script>
import { LocationMarkerIcon } from '@heroicons/vue/solid'
import { getCities } from '../../utils/airtable.js'

export default {
  name: 'LocationItem',
  components: {
    LocationMarkerIcon,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      location: null,
    }
  },
  async mounted() {
    this.location = await getCities(this.id)
  },
}
</script>
