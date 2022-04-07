<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <form
    class="space-y-8 divide-y divide-gray-200"
    action=""
    method="POST"
    id="addLink"
  >
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Add Link</h3>
          <p class="mt-1 text-sm text-gray-500">
            Dear friends from Ukraine and volunteers! What chats, sites,
            organizations helped?
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="url-name"
                id="url-name"
                required
                v-model="fields.Name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="url" class="block text-sm font-medium text-gray-700">
              URL
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="url"
                id="url"
                required
                v-model="fields.URL"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-center">
        <button
          type="submit"
          @click="handleSubmit"
          class="ml-3 inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Airtable from 'airtable'

const base = new Airtable({ apiKey: 'keydEXl97LFVx03hM' }).base(
  'appBBi7Uoylg0ILTk'
)
export default {
  name: 'Links',
  data() {
    return {
      fields: {
        Name: '',
        URL: '',
      },
    }
  },
  methods: {
    handleSubmit(e) {
      base('Services').create(
        [
          {
            fields: {
              Name: fields.Name,
              URL: fields.URL,
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err)
            return
          }
          records.forEach(function (record) {
            console.log(record.getId())
          })
        }
      )
    },
  },
}
// name: 'PostComponent',
// data() {
//   return {
//     records: [
//       {
//         fields: {
//           Name: '',
//           URL: '',
//         },
//       },
//     ],
//   }
// },
// methods: {
//   handleSubmit(e) {
//     console.log(this.records[0])
//     e.preventDefault()
//   },
// },

//   async setup() {
//     const testData = {
//       records: [
//         {
//           fields: {
//             Name: '',
//             URL: '',
//           },
//         },
//       ],
//     }
//     const config = useRuntimeConfig()
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${config.API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(testData),
//     }

//     const data = fetch(
//       `https://api.airtable.com/v0/appBBi7Uoylg0ILTk/Services`,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//       })
//       .catch(function (error) {
//         console.log('Request failed', error)
//       })

//   },
// }
</script>
