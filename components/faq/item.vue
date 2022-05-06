<template>
  <dl class="mt-6 space-y-6 divide-y divide-grey-200">
    <div class="pt-6">
      <dt class="text-lg">
        <!-- Expand/collapse question button -->
        <button
          type="button"
          class="text-left w-full flex justify-between items-start text-grey-400"
          :aria-controls="`faq-${faqId}`"
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
              stroke-width="2"
              stroke="#979797"
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
        :id="`faq-${faqId}`"
        class="mt-2 pr-12"
        :class="`${collapse ? 'hidden' : ''}`"
      >
        <slot>no content</slot>
      </dd>
    </div>
  </dl>
</template>
<script>
export default {
  name: 'FaqItem',
  props: {
    faqId: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    collapse: true,
  }),
  methods: {
    switchCollapse() {
      this.collapse = !this.collapse
    },
  },
}
</script>
