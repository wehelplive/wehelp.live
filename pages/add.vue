<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute left-full transform translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          ></pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 transform -translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
      </svg>
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Добавить ссылку
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Дорогие друзья из Украины и волонтеры! Какие чаты, сайты, организации
          помогли?
        </p>
      </div>
      <div class="mt-12">
        <form
          action=""
          id="addLink"
          @submit.prevent="handleSubmit"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-gray-700"
              >URL</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="url"
                id="url"
                required
                v-model="fields.URL"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-gray-700"
              >Название</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="url-name"
                id="url-name"
                required
                v-model="fields.Name"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
            >
              Ваш отзыв</label
            >
            <p class="mt-2 leading-6 text-gray-500">Чем помог этот ресурс?</p>
            <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="4"
                v-model="fields.Description"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <!-- <div class="sm:col-span-2">
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
              >Город</label
            >
               <p class="mt-2 leading-6 text-gray-500">
             Для какого города или страны актуально? Или везде?
            </p>
            <div class="mt-1">
              <input
                id="location"
                name="location"
                type="location"
                autocomplete="location"
                v-model="fields.Location"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>
          </div> -->
          <!-- <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-medium text-gray-700"
              >Тип</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="category" class="sr-only">Выберите тип</label>
                <select
                  id="category"
                  name="category"
                  v-model="fields.Category"
                  class="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                >
                  <option>Chat</option>
                  <option>Channel</option>
                  <option>Website</option>
                  <option>Document</option>
                  <option>Youtube</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div> -->

          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Airtable from 'airtable'

const base = new Airtable({ apiKey: 'keydEXl97LFVx03hM' }).base(
  'appBBi7Uoylg0ILTk'
)
export default {
  name: 'Services',
  data() {
    return {
      fields: {
        URL: '',
        Name: '',
        Location: [],
      },
    }
  },
  methods: {
    handleSubmit(e) {
      base('Services').create(
        [
          {
            fields: this.fields,
          },
        ],
        function (err, records) {
          console.log('Response')
          if (err) {
            console.error(err)
            return
          }
        }
      )
    },
  },
}
</script>
