<template>
  <div
    class="col-span-1 flex flex-col  text-center bg-white rounded-lg shadow divide-y divide-gray-200"
  >
    <div class="flex-1 flex flex-col p-8">
      <img
        class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        alt=""
      />
      <h3 class="mt-6 text-gray-900 text-sm font-medium">Jane Cooper</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-gray-500 text-sm">Paradigm Representative</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span
            class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full"
            >Admin</span
          >
        </dd>
      </dl>
      <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
    </div>
  </div>
  <!-- <a href="#" class="block border-2 hover:bg-gray-50 hover:border-gray-400">
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
                v-if="location.length > 0"
                class="m-2 text-sm text-gray-500 w-52 truncate "
              >
                <LocationMarkerIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                />
                {{ location[0].fields.Name }}
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
    </a> -->
</template>
<script>
import { LocationMarkerIcon } from '@heroicons/vue/solid'

export default {
  name: 'TServiceListItem',
  components: {
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
}
</script>
