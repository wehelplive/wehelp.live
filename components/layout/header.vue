<template>
  <Popover class="relative bg-white">
    <div class="max-w-8xl z-50 m-0 p-0 shadow-md sm:px-6">
      <div class="flex justify-between items-center md:justify-start">
        <div class="flex justify-start mt-2 ml-2 lg:w-0 lg:flex-1">
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
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <NuxtLink
            v-for="item in navigation.main"
            :key="item.name"
            :to="item.to"
            class="text-base font-nunito text-xl text-black-500 hover:text-black-500"
          >
            {{ t(item.name) }}
          </NuxtLink>
          <div id="locale-switcher">
            <div>
              <select
                v-model="$i18n.locale"
                class="form-select uppercase w-13 h-12 rounded-lg block w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-white-500 bg-clip-padding bg-no-repeat border border-solid border-slate-200 transition ease-in-out m-0 focus:text-slate-500 focus:bg-white-500 focus:border-royal-blue-600 focus:outline-none"
              >
                <option
                  v-for="(locale, i) in $i18n.availableLocales"
                  :key="`Lang${i}`"
                  :value="locale"
                >
                  {{ locale }}
                </option>
              </select>
            </div>
          </div>
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
        class="bg-white-500 fixed h-auto absolute top-0 inset-x-0 transition transform origin-top-right md:hidden overflow-hidden"
      >
        <div class="bg-white-500 bg-white-500">
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

          <div class="flex flex-col">
            <div class="flex w-full justify-end pr-6">
              <div class="flex">
                <div id="locale-switcher">
                  <div>
                    <select
                      v-model="$i18n.locale"
                      class="form-select uppercase w-13 h-12 rounded-lg block w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-white-500 bg-clip-padding bg-no-repeat border border-solid border-slate-200 transition ease-in-out m-0 focus:text-slate-500 focus:bg-white-500 focus:border-royal-blue-600 focus:outline-none"
                    >
                      <option
                        v-for="(locale, i) in $i18n.availableLocales"
                        :key="`Lang${i}`"
                        :value="locale"
                      >
                        {{ locale }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-7xl mt-1-">
              <div
                class="mt-6 ml-[20px] grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"
              >
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3
                      class="text-sm font-semibold text-zinc-700  tracking-wider uppercase"
                    >
                      {{ t('services.title') }}
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.solutions" :key="item.name">
                        <a
                          :href="item.href"
                          class="text-base w-max text-grey-600 hover:text-grey-800"
                        >
                          {{ t(item.name) }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12 md:mt-0">
                    <h3
                      class="text-sm font-semibold text-grey-600 tracking-wider uppercase"
                    >
                      {{ t('company.support') }}
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.support" :key="item.name">
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
                  <div class="mt-12 md:mt-0">
                    <h3
                      class="text-sm font-semibold text-grey-600 tracking-wider uppercase"
                    >
                      {{ t('informations.legal') }}
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.legal" :key="item.name">
                        <a
                          :href="item.href"
                          class="text-base text-grey-600 hover:text-grey-800"
                        >
                          {{ item.name?.value }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="h-52">
            <div
              class="text-base text-center mt-[42px] mx-2 text-zinc-700 font-nunito"
            >
              {{ t('hero.description') }}
            </div>
            <div class="flex mt-[8px] items-center justify-center space-x-1">
              <a
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div class="h-20"></div>
          <br />

          <br />
        </div>
        <div class="h-10"></div>
        <br />

        <div class="h-20"></div>
        <br />

        <br />
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

import { ChevronDownIcon } from '@heroicons/vue/solid'

import { useI18n } from 'vue-i18n'

import { navigation } from '~/utils/navigation'

export default {
  name: 'Header',
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
    const { t } = useI18n()

    return {
      navigation,
      t,
    }
  },
}
</script>
