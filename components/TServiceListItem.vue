<template>
  <li class="m-2">
    <a href="#" class="block border-2 hover:bg-gray-50 hover:border-gray-400">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-indigo-600 truncate">{{ name }}</p>
          <div class="ml-2 flex-shrink-0 flex">
            <p :class="typeClass">{{ type }}</p>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between ">
          <div class="sm:flex">
            <div class="flex items-center justify-between ">
              <p v-if="url" class="m-2 text-sm text-gray-500  w-52 truncate">
                <LinkIcon class="h-5 w-5" />
                {{ url }}
              </p>
              <p
                v-if="cities.length > 0"
                class="m-2 text-sm text-gray-500 w-52 truncate "
              >
                <LocationMarkerIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                />
                {{ cities[0].fields.Name }}
              </p>
              <p
                v-if="description"
                class="m-2 text-sm text-gray-500 w-52 truncate "
              >
                <ChatIcon class="h-5 w-5" />
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
import { ChatIcon, LocationMarkerIcon, LinkIcon } from '@heroicons/vue/solid'
import { getCities } from '../airtable'

export default {
  name: 'TServiceListItem',
  components: {
    ChatIcon,
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
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    cities: [],
  }),
  computed: {
    typeClass() {
      const style =
        'px-2 inline-flex text-xs leading-5 font-semibold rounded-full '
      let color = ''
      switch (this.type) {
        case 'Chat':
          color = 'bg-orange-100 text-orange-800'
          break
        case 'Channel':
          color = 'bg-blue-100 text-blue-800'
          break
        case 'Website':
          color = 'bg-purple-100 text-purple-800'
          break
        case 'Document':
          color = 'bg-yellow-100 text-yellow-800'
          break
        case 'Youtube':
          color = 'bg-red-100 text-red-800'
          break
        default:
          color = 'bg-green-100 text-green-800'
          break
      }
      return style + color
    },
  },
  created() {
    this.location.forEach(async (location) => {
      const result = await getCities(location)
      this.cities.push(result)
    })
  },
}
</script>
