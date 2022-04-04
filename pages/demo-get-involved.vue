<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="container">
      <div class="space-y-8 divide-y divide-gray-200 sm:space-y-10">
        <div>
          <div>
            <h1 class="text-4xl mt-10 leading-6 font-medium text-gray-900">
              Want to help? Get Involved!
            </h1>
            <h6 class="text-sm mt-5">
              Submit your application by filling the form below:
            </h6>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              First name
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
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
              Last name
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
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
                class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div
              class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="photo"
                class="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
                <div class="flex items-center">
                  <span
                    class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                  >
                    <svg
                      class="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <button
                    type="button"
                    class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Country
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
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
                class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="city"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              City
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="region"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              State / Province
            </label>
            <div class="mt-1 mb-5 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              ZIP / Postal code
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div class="space-y-6 sm:space-y-5"></div>
        </div>
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
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<style>
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
