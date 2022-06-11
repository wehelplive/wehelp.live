<template>
  <div>
    <div
      class="text-4xl text-zinc-900 font-nunito flex justify-center lg:text-4xl mt-8 mb-6 lg:mt-12"
    >
      <h2>{{ t('services.question') }}</h2>
    </div>
    <div class="bg-white-500">
      <div class="max-w-7xl mx-auto px-4 sm:py-2 sm:px-6 lg:px-8">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="rounded-md shadow p-12"
          >
            <dt class="text-lg leading-6 font-medium text-gray-900">
              {{ t(service.name) }}
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ t(service.description) }}
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
        {{ t('services.suggest') }}
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    const services = [
      {
        id: 1,
        name: 'services.evacuation.find',
        description: 'services.evacuation.description',
      },
      {
        id: 2,
        name: 'services.accomodations.title',
        description: 'services.accomodations.description',
      },
      {
        id: 3,
        name: 'services.exchange.title',
        description: 'services.exchange.description',
      },
      {
        id: 4,
        name: 'services.problems.title',
        description: 'services.problems.description',
      },
    ]
    return {
      t,
      services,
    }
  },
}
</script>
