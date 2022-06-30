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
                {{ t('needHelp.duration.title') }}</span
              >
            </h1>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="bg-red-500 hover:bg-zinc-500 text-white-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="
                  this.$router.push({
                    query: Object.assign(
                      { ...this.$route.query },
                      { duration: '1h' }
                    ),
                  })
                "
              >
                {{ t('needHelp.duration.time.1h') }}
              </button>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="w-full h-full outline outline-1 outline-zinc-500 text-zinc-500 hover:bg-zinc-50 flex justify-center items-center capitalize rounded-3xl text-body"
                @click="
                  this.$router.push({
                    query: Object.assign(
                      { ...this.$route.query },
                      { duration: '24h' }
                    ),
                  })
                "
              >
                {{ t('needHelp.duration.time.24h') }}
              </button>
            </div>
          </div>
          <div
            class="mt-2 gap-2 mx-auto flex flex-col items-center justify-center h-24 sm:max-w-sm sm:gap-4 sm:mt-4"
          >
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="w-full h-full outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 flex justify-center items-center capitalize rounded-3xl text-body"
                @click="
                  this.$router.push({
                    query: Object.assign(
                      { ...this.$route.query },
                      { duration: '7d' }
                    ),
                  })
                "
              >
                {{ t('needHelp.duration.time.7d') }}
              </button>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <button
                class="text-zinc-500 hover:text-zinc-800 underline underline-offset-1 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body"
                @click="
                  this.$router.push({
                    query: Object.assign(
                      { ...this.$route.query },
                      { duration: 'wait' }
                    ),
                  })
                "
              >
                {{ t('needHelp.duration.time.wait') }}
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

export default {
  name: 'NeedHelpDuration',
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>
