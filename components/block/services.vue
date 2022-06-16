<template>
  <div>
    <div
      class="flex flex-row justify-center items-center gap-2 px-6 sm:px-12 py-4 sm:py-8"
    >
      <h2
        class="font-nunito font-semibold text-headline-6 flex items-center text-black-500 sm:text-headline-4"
      >
        {{ t('services.question') }}
      </h2>
    </div>
    <div class="bg-white-500">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-3  md:gap-x-8 md:gap-y-12"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="rounded-md shadow p-12"
          >
            <dt class="text-subtitle font-semibold font-nunitotext-zinc-800">
              {{ t(service.name) }}
            </dt>
            <dd class="mt-2 text-body-2 font-sanstext-zinc-700">
              {{ t(service.description) }}
            </dd>
          </div>
        </dl>
      </div>
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
