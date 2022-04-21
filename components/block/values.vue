<template>
  <div class="relative bg-white-500 py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2
        class="text-base font-semibold uppercase tracking-wider text-royal-blue-600"
      >
        Our core values
      </h2>
      <p class="mx-auto mt-5 max-w-prose text-xl text-grey-500">
        We aim to be a <strong>trustful</strong> source that give people
        <strong>hope</strong> and help them through effective
        <strong>actions</strong>.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-neutral-300 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-royal-blue-500 p-3 shadow-lg"
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-white-500"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-grey-800"
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-grey-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CloudUploadIcon,
  LockClosedIcon,
  RefreshIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Hope',
    icon: CloudUploadIcon,
  },
  {
    name: 'Trust',
    icon: LockClosedIcon,
  },
  {
    name: 'Action',
    icon: RefreshIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>
