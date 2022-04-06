<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="mx-auto my-0 max-w-4xl">
      <div class="space-y-8 divide-y divide-gray-200 sm:space-y-10">
        <div>
          <div>
            <h1
              class="text-4xl mt-10 leading-6 font-medium text-gray-900 items-center justify-center"
            >
              Want to help? Get Involved!
            </h1>
            <p class="text-md mb-5 mt-5 justify-center items-center">
              Submit your application by filling the form below:
            </p>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            id="name"
          >
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Name
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                v-model="name"
                placeholder="John Doe"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Phone Number
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                autocomplete="phone"
                placeholder="+1 (123) 456-7890"
                v-model="phone"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Email address
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="johndoe@gmail.com"
                v-model="email"
                class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              LinkedIn
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="link"
                name="linkedin"
                id="linkedin"
                autocomplete="linkedin"
                placeholder="https://www.linkedin.com/in/john-doe-12345"
                v-model="linkedin"
                class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Instagram
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="link"
                name="instagram"
                id="instagram"
                placeholder="https://www.instagram.com/john_doe"
                v-model="instagram"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Facebook
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="link"
                name="facebook"
                id="facebook"
                placeholder="https://www.facebook.com/john.doe"
                v-model="facebook"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Telegram
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="link"
                name="telegram"
                id="telegram"
                v-model="telegram"
                placeholder="https://t.me/john_doe"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Why do you want to join?
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <textarea
                id="about"
                name="about"
                rows="3"
                placeholder="I want to join because..."
                v-model="reasonOfJoining"
                class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              How can you help? <span>which skills do you have?</span>
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <textarea
                id="about"
                name="about"
                rows="3"
                placeholder="I can help with..."
                v-model="detailOfHelp"
                class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="languages"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Languages
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <fieldset class="space-y-5">
                <legend class="sr-only">Notifications</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700"
                      >English</label
                    >
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700"
                      >German</label
                    >
                    <br />
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700"
                      >Russian</label
                    >
                    <br />
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700"
                      >Other</label
                    >
                    <br />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="team"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Choose a team
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <select
                id="choose-team"
                name="team"
                class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              >
                <option>WeHelp</option>
                <option>Coordination</option>
                <option>Talents</option>
                <option>Verification</option>
                <option>Networking</option>
                <option>Call center</option>
                <option>Donations to Ukraine</option>
                <option>Brainstorming</option>
                <option>Communication</option>
                <option>Website</option>
                <option>Accomodations</option>
                <option>Hackathon</option>
                <option>Donate cars to Ukraine</option>
                <option>Donate to volunteers in Ukraine</option>
                <option>Donations in Europe</option>
                <option>Work possibilities</option>
                <option>Refugees group in Facebook</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="hours"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Choose a team
          </label>
          <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
            <select
              id="choose-hours"
              name="hours"
              class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option>1 hour per day</option>
              <option>1-4 hours per day</option>
              <option>more than 4 hours per day</option>
            </select>
          </div>
        </div>
      </div>
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5"></div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button
            type="button"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            @click="submit"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
// import { createApp } from 'vue'
// var firstName = ''
// var lastName = ''
// var email = ''

// var reasonOfJoining = ''
// var city = ''
// var state = ''
// var zipCode = ''
// var country = ''
// const myObject = new createApp({
//   el: '.container',
//   data: { firstName: 'xyz' },
// })
// myObject.mount('.container')
import Airtable from 'airtable'
var base = new Airtable({ apiKey: 'keyQ54SEzABIZEm9F' }).base(
  'appv6M4U4ckXcHzhU'
)
export default {
  name: 'formUI',
  data() {
    return {
      name: null,
      phone: null,

      email: null,
      linkedin: null,
      instagram: null,
      facebook: null,
      telegram: null,
      reasonOfJoining: null,
      detailOfHelp: null,
    }
  },
  methods: {
    submit() {
      console.warn('values : ', this.name)
    },
  },
}
</script>

<style>
/* .container {
  max-width: 960px;
  margin: 0 auto;
} */
</style>
