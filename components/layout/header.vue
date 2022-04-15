<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <BrandLogo class="w-24 h-24" />
          </NuxtLink>
        </div>
        <div class="font-medium text-gray-800">Hotline 24/7</div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <NuxtLink
            class="text-base font-medium text-gray-500 hover:text-gray-900"
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
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
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
        class="bg-white absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="bg-white bg-white divide-y-2 divide-gray-50">
          <div class="">
            <div class="flex items-center justify-between">
              <div class="mt-17 ml-15">
                <BrandLogo class="w-24 h-24" />
              </div>
              <div class="font-medium text-gray-800">Hotline 24/7</div>
              <div class="mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="flex flex-col float-right space-y-4">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </NuxtLink>
              <div class="m-6">
                <select
                  class="form-select appearance-none rounded-lg block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="language"
                >
                  <option selected>EN</option>
                  <option>GER</option>
                  <option>RUS</option>
                  <option>UKR</option>
                </select>
              </div>
              <br />
              <div class="h-20"></div>
              <br />
              <div class="float-right m-8 space-y-2">
                <Icon icon="akar-icons:telegram-fill" height="24" width="24" />
                <Icon
                  icon="ant-design:instagram-filled"
                  height="24"
                  width="24"
                />
                <Icon icon="bi:twitter" height="24" width="24" />
                <Icon icon="bi:github" height="24" width="24" />
              </div>
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
import { Icon } from '@iconify/vue'
const navigation = [
  { name: 'Add service', to: '/guest' },
  { name: 'Partnership', to: '/exchange' },
  { name: 'Contact us', to: '/add' },
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
    Icon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>
