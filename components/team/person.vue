<template>
  <div class="space-y-4">
    <img
      class="mx-auto h-28 w-28 rounded-full drop-shadow lg:w-40 lg:h-40"
      :src="person.imageUrl"
      :alt="person.name"
    />
    <div class="space-y-4">
      <div
        class="text-body font-nunito text-regular font-medium lg:text-subtitle"
      >
        <h3>{{ person.name }}</h3>
        <p class="mt-2 text-caption lg:text-body text-zinc-600">
          {{ person.role?.value }}
        </p>
      </div>
      <div class="space-y-2">
        <ul role="list" class="flex justify-center space-x-2">
          <li v-for="(value, key) in person.networks" :key="key">
            <a :href="value" class="text-slate-500 hover:text-slate-400">
              <span class="sr-only">{{ key }}</span>
              <img class="fill-currentColor" :src="getIcons()[key]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    person: {
      type: Object,
      default() {
        return {
          name: '',
          role: '',
          imageUrl: '',
          networks: {},
        }
      },
    },
  },
  methods: {
    getIcons() {
      return {
        linkedin: '/icons/LinkedIn.svg',
        telegram: '/icons/Telegram.svg',
        facebook: '/icons/Facebook.svg',
        githab: '/icons/Github.svg',
        instagram: '/icons/Instagram.svg',
        twitter: '/icons/Twitter.svg',
        youtube: '/icons/YouTube.svg',
        medium: '/icons/Medium.svg',
        angellist: '/icons/Angellist.svg',
      }
    },
  },
}
</script>
