<template>
  <div
    class="col-span-1 flex flex-col p-5  bg-white-500 box-border rounded-lg border-2 border-solid border-[#0000001a]"
  >
    <div class="flex flex-col pr-3 mb-4">
      <div class="font-nunito text-subtitle mb-2">
        {{ name }}
      </div>

      <RatingItem :rating="rating" />

      <div
        v-if="services.length > 0"
        class="font-openSans font-semibold w-fit text-[#5F6267] text-[16px] leading-6"
      >
        {{ services[0] }}
      </div>
    </div>

    <p class="flex-1 font-sans text-body text-[#202020] mb-4 line-clamp-2">
      {{ description }}
    </p>

    <div v-if="url" class="flex flex-row mb-4 items-center">
      <LinkIcon class="h-5 w-5 mr-2 text-grey-500" />
      <a
        class="text-[#5F6267] flex-1 font-sans truncate"
        :href="url"
        target="_blank"
      >
        {{ url }}
      </a>
    </div>

    <div v-if="phone" class="flex flex-row mb-4 items-center">
      <PhoneIcon class="h-5 w-5 mr-2 text-grey-500" />
      <div class="text-[#5F6267] flex-1 font-sans">
        {{ phone }}
      </div>
    </div>

    <LocationItem :id="location" />
  </div>
</template>
<script>
import { PhoneIcon, LinkIcon } from '@heroicons/vue/solid'

export default {
  name: 'ServiceItem',
  components: {
    PhoneIcon,
    LinkIcon,
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
      type: String,
      default: '',
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
