<template>
  <dl class="mt-6 space-y-6 divide-y divide-grey-300">
    <div class="pt-6">
      <dt class="text-lg">
        <!-- Expand/collapse question button -->
        <button
          type="button"
          class="text-left w-full flex justify-between items-start text-grey-400"
          :aria-controls="`faq-${slug}`"
          :aria-expanded="collapse"
          @click="switchCollapse"
        >
          <span
            v-if="title"
            class="font-nunito font-semibold text-black-500 text-subtitle-2"
          >
            {{ title }}
          </span>
          <span class="ml-6 h-7 flex items-center">
            <svg
              class="h-6 w-6 transform"
              :class="`${collapse ? 'rotate-0' : 'rotate-180'}`"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#7B7B7B"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd
        :id="`faq-${slug}`"
        class="mt-2 pr-12"
        :class="`${collapse ? 'hidden' : ''}`"
      >
        <slot>{{ $t('faq.item.empty') }}</slot>
      </dd>
    </div>
  </dl>
</template>
<script>
export default {
  name: 'FaqItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    collapse: true,
  }),
  computed: {
    slug() {
      return this.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
    },
  },
  methods: {
    switchCollapse() {
      this.collapse = !this.collapse
    },
  },
}
</script>
