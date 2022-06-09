<template>
  <div>
    <div
      class="text-4xl text-zinc-900 font-nunito flex justify-center lg:text-4xl mt-8 mb-6 lg:mt-12"
    >
      <h2>{{ t('home.initiatives.title') }}</h2>
    </div>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:py-2 sm:px-6 lg:px-8">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="rounded-md shadow p-12"
          >
            <dt class="text-lg leading-6 font-medium text-gray-900">
              {{ service.name?.value }}
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ service.description?.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="flex justify-center mt-14">
      <NuxtLink
        to="/"
        class="flex font-openSans items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white-500 bg-red-500 hover:bg-zinc-500 md:py-4 md:text-lg md:px-10"
      >
        {{ t('home.initiatives.button') }}
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    const services = [
      {
        id: 1,
        name: computed(() => t('home.initiatives.services.names[0]')),
        description: computed(() =>
          t('home.initiatives.services.descriptions[0]')
        ),
      },
      {
        id: 2,
        name: computed(() => t('home.initiatives.services.names[1]')),
        description: computed(() =>
          t('home.initiatives.services.descriptions[1]')
        ),
      },
      {
        id: 3,
        name: computed(() => t('home.initiatives.services.names[2]')),
        description: computed(() =>
          t('home.initiatives.services.descriptions[2]')
        ),
      },
      {
        id: 4,
        name: computed(() => t('home.initiatives.services.names[3]')),
        description: computed(() =>
          t('home.initiatives.services.descriptions[3]')
        ),
      },
    ]
    return {
      t,
      services,
    }
  },
}
</script>
