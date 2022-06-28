<template>
  <Popover class="relative bg-white">
    <div class="max-w-full z-50 shadow-md sm:px-6 md:px-0">
      <div class="flex justify-between items-center">
        <div class="flex justify-start min-w-fit mt-2 mx-1 lg:w-0 lg:flex-1 ">
          <NuxtLink to="/">
            <BrandLogo class="w-24 h-24" />
          </NuxtLink>
        </div>

        <div class="mr-4 md:hidden">
          <PopoverButton
            class="bg-white-500 rounded-md mt-1 p-2 inline-flex items-center justify-center text-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-blue-600"
          >
            <span class="sr-only">{{ t('menu.open') }}</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup
          as="nav"
          class="hidden md:flex items-center py-1 mx-4 space-x-10"
        >
          <NuxtLink
            v-for="item in navigation.main"
            :key="item.name"
            :to="item.to"
            class="text-base font-nunito text-black-500 hover:text-black-500"
          >
            {{ t(item.name) }}
          </NuxtLink>
          <locale-switcher />
        </PopoverGroup>
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
        class="bg-white-500 h-auto absolute top-0 inset-x-0 transition transform origin-top-right md:hidden overflow-hidden"
      >
        <div class="bg-white-500 ">
          <div class="">
            <div class="flex m-0 p-0 items-center justify-between">
              <div class="mt-2 ml-2">
                <BrandLogo class="w-24 h-24" />
              </div>
              <div class="mr-2">
                <PopoverButton
                  class="bg-white-500 rounded-md mr-2 mt-1.5 p-2 inline-flex items-center justify-center text-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-blue-600"
                >
                  <span class="sr-only">{{ t('menu.close') }}</span>
                  <XIcon class="h-5.5 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex justify-end w-full py-1 mb-1">
            <div class="w-fit pr-6">
              <locale-switcher />
            </div>
          </div>

          <div class="max-w-7xl flex flex-row justify-center">
            <div
              class="pt-2 px-6 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 w-full"
            >
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3
                    class="text-sm font-semibold text-zinc-700 tracking-wider uppercase"
                  >
                    {{ t('services.title') }}
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in navigation.services" :key="item.name">
                      <a
                        :href="item.to"
                        class="text-base w-max text-grey-600 hover:text-grey-800"
                      >
                        {{ t(item.name) }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 md:mt-0">
                  <h3
                    class="text-sm font-semibold text-grey-600 tracking-wider uppercase"
                  >
                    {{ t('company.legal') }}
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in navigation.legal" :key="item.name">
                      <a
                        :href="item.href"
                        class="text-base text-grey-600 hover:text-grey-800"
                      >
                        {{ t(item.name) }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3
                    class="text-sm font-semibold text-grey-600 tracking-wider uppercase"
                  >
                    {{ t('company.title') }}
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in navigation.company" :key="item.name">
                      <a
                        :href="item.href"
                        class="text-base text-grey-600 hover:text-grey-800"
                      >
                        {{ t(item.name) }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col h-36 mt-4 justify-center">
          <div class="mx-8">
            <div class="text-subtitle text-center text-zinc-700 font-nunito">
              {{ t('hero.description') }}
            </div>
          </div>
          <div class="flex mt-4 items-center justify-center space-x-1 mx-8">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-zinc-400 hover:text-zinc-400"
            >
              <span class="sr-only">{{ item.name }}</span>
              <img :src="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-8 mb-8">
          <p class="text-body font-sans text-zinc-700 text-center">
            &copy; {{ t('company.copyright') }}
          </p>
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

import { MenuIcon, XIcon } from '@heroicons/vue/outline'

import { useI18n } from 'vue-i18n'

import { navigation } from '~/utils/navigation'

export default {
  name: 'Header',
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    const { t } = useI18n()

    return {
      navigation,
      t,
    }
  },
}
</script>
