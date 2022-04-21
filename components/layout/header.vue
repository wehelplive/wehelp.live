<template>
  <Popover class="relative bg-white-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-grey-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <BrandLogo class="w-24 h-24" />
          </NuxtLink>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white-500 rounded-md p-2 inline-flex items-center justify-center text-grey-400 hover:text-grey-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-blue-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <NuxtLink
            class="text-base font-medium text-grey-500 hover:text-grey-800"
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
          >
            {{ item.name }}
          </NuxtLink>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href="/request"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white-500 bg-royal-blue-600 hover:bg-royal-blue-700"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black-500 ring-opacity-5 bg-white-500-500 divide-y-2 divide-grey-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <BrandLogo class="w-24 h024" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white-500 rounded-md p-2 inline-flex items-center justify-center text-grey-400 hover:text-grey-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-blue-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="text-base font-medium text-grey-800 hover:text-grey-700"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
            <div>
              <a
                href="/request"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white-500 bg-royal-blue-600 hover:bg-royal-blue-700"
              >
                Need help?
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Find Accomodation', to: '/guest' },
  { name: 'UAH Exchange', to: '/exchange' },
  { name: 'Recommend', to: '/add' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>
