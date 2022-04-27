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
                  <!-- Heroicon name: solid/link -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                  </svg>
                  {{url}}
                </p>
                <p  v-if="cities.length > 0" class="m-2 text-sm text-gray-500 w-52 truncate ">
                  <!-- Heroicon name: solid/location-marker -->
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  {{cities[0].fields.Name}}
                </p>
                <p v-if="comments" class="m-2 text-sm text-gray-500 w-52 truncate ">
                  <!-- Heroicon name: solid/chat -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                  </svg>
                  {{comments}}
                </p>
              </div>
            </div>
            <!--<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <p>
                Closing on
                <time datetime="2020-01-07">January 7, 2020</time>
              </p>
            </div>--> 
          </div> 
        </div>
      </a>
    </li>
</template>
<script>
export default {
  name: 'TServiceListItem',
  props: {
    fieldId: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    comments: {
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
    }
  },
  data: () => ({
    color: '',
    cities: [],
  }),
  async created() {
    await this.getCities()
  },
  computed: {
    typeClass() {
      let style = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
      switch(this.type) {
        case "Chat":
          this.color = 'bg-orange-100 text-orange-800'
          break;
        case "Channel":
          this.color = 'bg-blue-100 text-blue-800'
          break;
        case "Website":
          this.color = 'bg-purple-100 text-purple-800'
          break;
        case  "Document":
          this.color = 'bg-yellow-100 text-yellow-800'
          break;
        case "Youtube":
          this.color = 'bg-red-100 text-red-800'
          break;
        default:
          this.color = 'bg-green-100 text-green-800'
          break
      }
      return style + this.color
    }
  },
  methods: {
    async getCities() {
      const option = {
        headers: { 
            'Authorization': `Bearer ${this.$config.API_KEY}`, 
        }
      }
      try {
        this.location.forEach( async (location) => {
          const url = `https://api.airtable.com/v0/${this.$config.BASE_ID}/Cities/${location}`
          const response = await $fetch(url, option)
          if(response) {
            this.cities.push(response)
          }
        })
      } catch (error) {
        throw error 
      }
    }
  }
}
</script>

