<template>
  <footer
    class="bg-white-500 border-t-2 border-white-600"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-screen-xl mx-auto py-14 px-6 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1 mx-auto xl:mx-0 px-4 py-4">
          <div class="flex justify-center xl:justify-start">
            <BrandLogo class="h-24 w-24" />
          </div>
          <p
            class="text-grey-600 text-base text-center sm:text-left flex justify-center xl:justify-start"
          >
            {{ t('hero.description') }}
          </p>
          <div class="flex justify-center xl:justify-start">
            <div class="flex space-x-2">
              <a
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
              >
                <span class="sr-only">{{ item.name }}</span>
                <img class="fill-currentColor" :src="item.icon" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-2 md:flex md:justify-around xl:justify-between flex-row justify-around col-span-2 mt-12 xl:mt-0"
        >
          <div class="flex flex-col items-start p-4 min-w-fit">
            <h3
              class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
            >
              {{ t('services.title') }}
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.services" :key="item.name">
                <a
                  :href="item.to"
                  class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                >
                  {{ t(item.name) }}
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col items-center p-4 min-w-fit">
            <h3
              class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
            >
              {{ t('company.title') }}
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.company" :key="item.name">
                <a
                  :href="item.href"
                  class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                >
                  {{ t(item.name) }}
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col items-start p-4 min-w-fit">
            <h3
              class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
            >
              {{ t('company.legal') }}
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.legal" :key="item.name">
                <a
                  :href="item.href"
                  class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                >
                  {{ t(item.name) }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-grey-200 pt-8">
        <p class="text-base text-grey-600 xl:text-center flex justify-center">
          &copy; {{ t('company.copyright') }}
        </p>
      </div>
    </div>
    <div class="bg-no-repeat bg-top bg-favicon h-64 w-screen"></div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { navigation } from '~/utils/navigation'

export default {
  setup() {
    const { t } = useI18n()

    return {
      navigation,
      t,
    }
  },
}
</script>
