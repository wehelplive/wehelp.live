<template>
  <div class="flex justify-center pt-40 items-center min-h-full">
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <div class="flex-column gap-8">
            <h1
              class="mt-3 tracking-tight font-nunito text-headline-4 text-zinc-800 sm:text-headline-2"
            >
              <span class="block xl:inline">
                {{ t('needHelp.contact.title') }}</span
              >
            </h1>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4"
          >
            <div class="w-full h-full mt-2 relative">
              <form class="flex">
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  id="email-address"
                  v-model="email"
                  name="email-address"
                  type="email"
                  autocomplete="email"
                  required=""
                  class="appearance-none block w-full h-16 bg-none bg-white-500 border border-zinc-50 hover:border-zinc-500 rounded-xl text-body pl-5 pr-12 py-2 text-zinc-500 focus:outline-none focus:ring-zinc-50 focus:border-zinc-500"
                  placeholder="Enter your email"
                />
              </form>
            </div>
            <div
              class="form-group flex text-left form-check form-check-inline mb-6"
            >
              <div>
                <input
                  id="termsChecked"
                  v-model="termsChecked"
                  type="checkbox"
                  class="form-check-input font-sans-serif appearance-none h-6 w-6 border border-zinc-500 rounded-3xl bg-white-500 checked:bg-green-500 checked:border-green-600 focus:outline-none transition duration-200 align-center bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  value="false"
                />
              </div>
              <label
                class="form-check-label inline-block text-zinc-800"
                for="termsChecked"
                v-html="md.render(t('needHelp.contact.privacy'))"
              ></label>
            </div>
          </div>

          <div
            class="mt-2 gap-2 mx-auto flex flex-col items-right justify-right h-24 sm:max-w-sm sm:gap-4 sm:mt-4"
          >
            <div class="w-full h-full flex items-center justify-center"></div>

            <div class="w-full h-full flex items-center justify-center">
              <button
                :disabled="!email.length || !termsChecked"
                class="w-full h-full disabled:bg-red-100 bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center rounded-3xl text-body"
                @click="
                  $router.push({
                    path: `/services/${$route.query.location}/${$route.query.service}`,
                  })
                "
              >
                {{ t('needHelp.contact.next') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

export default {
  name: 'NeedHelpContact',

  setup() {
    const { t, tm } = useI18n()

    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })

    return {
      t,
      tm,
      md,
    }
  },
  data() {
    // console.log('service in contact', service)
    // console.log('duration in contact', duration)
    // console.log('location in contact', location)
    // console.log('contact in contact', contact)
    return {
      service: '',
      duration: '',
      location: '',
      email: '',
      termsChecked: false,
    }
  },
}
</script>
