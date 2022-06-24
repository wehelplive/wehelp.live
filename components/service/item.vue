<template>
  <div
    class="col-span-1 flex flex-col p-5 bg-white-500 box-border rounded-lg border-2 border-solid border-slate-200"
  >
    <div class="flex flex-col pr-3 mb-4">
      <div class="font-nunito text-subtitle mb-2">
        {{ name }}
      </div>

      <RatingItem :rating="rating" />

      <div
        v-if="services.length > 0"
        class="font-openSans font-semibold w-fit text-zinc-500 text-body"
      >
        {{ services[0] }}
      </div>
    </div>

    <p class="flex-1 font-sans text-body text-zinc-800 mb-4 line-clamp-2">
      {{ description }}
    </p>

    <div v-if="url" class="flex flex-row mb-4 items-center">
      <LinkIcon class="h-5 w-5 mr-2 text-grey-500" />
      <a
        class="text-grey-500 flex-1 font-sans truncate"
        :href="url"
        target="_blank"
      >
        {{ url }}
      </a>
    </div>

    <div v-if="phone" class="flex flex-row mb-4 items-center">
      <PhoneIcon class="h-5 w-5 mr-2 text-grey-500" />
      <div class="text-grey-500 flex-1 font-sans">
        {{ phone }}
      </div>
    </div>

    <div v-if="location" class="flex flex-row mb-4 items-center">
      <LocationMarkerIcon class="h-5 w-5 mr-2 text-grey-500" />
      <div class="text-zinc-500 flex-1 font-sans">
        {{ location.fields.Name }}
      </div>
    </div>
  </div>
</template>
<script>
import { PhoneIcon, LinkIcon, LocationMarkerIcon } from '@heroicons/vue/solid'

export default {
  name: 'ServiceItem',
  components: {
    PhoneIcon,
    LinkIcon,
    LocationMarkerIcon,
  },
  props: {
    fieldId: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    location: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: '',
    },
    services: {
      type: Array,
      default: () => [],
    },
    phone: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
}
</script>
