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
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <NuxtLink
            v-for="item in navigation.solutions"
            :key="item.name"
            :to="item.to"
            class="font-nunito text-xl text-black-500 hover:text-black-500 self-center"
          >
            {{ item.name?.value ? item.name?.value : item.name }}
          </NuxtLink>
          <div id="locale-switcher">
            <div>
              <select
                v-model="$i18n.locale"
                class="form-select w-13 h-12 rounded-lg block w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-white-500 bg-clip-padding bg-no-repeat border border-solid border-slate-200 transition ease-in-out m-0 focus:text-slate-500 focus:bg-white-500 focus:border-royal-blue-600 focus:outline-none"
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
        class="bg-white-500 fixed h-auto top-0 inset-x-0 transition transform origin-top-right md:hidden overflow-hidden"
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
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-5.5 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>

          <div class="h-10"></div>
          <div class="flex flex-col float-right">
            <div class="flex flex-col float-right mr-5">
              <NuxtLink
                v-for="item in navigation.solutions"
                :key="item.name"
                :to="item.to"
                class="text-base w-fit color-[#202020] mb-3 font-nunito text-black-500 hover:text-black-500"
              >
                {{ item.name?.value ? item.name?.value : item.name }}
              </NuxtLink>
            </div>
            <div class="block mr-5 ml-[60px] mt-[30px] justify-end">
              <div id="locale-switcher">
                <div>
                  <select
                    v-model="$i18n.locale"
                    class="form-select w-13 h-12 rounded-lg block w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-white-500 bg-clip-padding bg-no-repeat border border-solid border-slate-200 transition ease-in-out m-0 focus:text-slate-500 focus:bg-white-500 focus:border-royal-blue-600 focus:outline-none"
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

            <div class="max-w-7xl mt-1-">
              <div
                class="mt-6 ml-[20px] grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"
              >
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3
                      class="text-sm font-semibold text-zinc-700  tracking-wider uppercase"
                    >
                      Services
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.solutions" :key="item.name">
                        <a
                          :href="item.href"
                          class="text-base w-max text-grey-600 hover:text-grey-800"
                        >
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12 md:mt-0">
                    <h3
                      class="text-sm font-semibold text-grey-600 tracking-wider uppercase"
                    >
                      Support
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.support" :key="item.name">
                        <a
                          :href="item.href"
                          class="text-base text-grey-600 hover:text-grey-800"
                        >
                          {{ item.name }}
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
                      Company
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.company" :key="item.name">
                        <a
                          :href="item.href"
                          class="text-base text-grey-600 hover:text-grey-800"
                        >
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12 md:mt-0">
                    <h3
                      class="text-sm font-semibold text-grey-600 tracking-wider uppercase"
                    >
                      Legal
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li v-for="item in navigation.legal" :key="item.name">
                        <a
                          :href="item.href"
                          class="text-base text-grey-600 hover:text-grey-800"
                        >
                          {{ item.name }}
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
              We're helping to solve comlex problems in Ukrainian refugee crisis
              in Europe
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
              <a
                href="https://fb.com/WeHelpLiveFB"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3635 0.919983H3.00352C1.67872 0.919983 0.603516 1.99518 0.603516 3.31998V18.68C0.603516 20.0048 1.67872 21.08 3.00352 21.08H18.3635C19.6883 21.08 20.7635 20.0048 20.7635 18.68V3.31998C20.7635 1.99518 19.6883 0.919983 18.3635 0.919983ZM16.4435 8.11998H15.4835C14.4563 8.11998 14.0435 8.35998 14.0435 9.07998V10.52H16.4435L15.9635 12.92H14.0435V20.12H11.6435V12.92H9.72352V10.52H11.6435V9.07998C11.6435 7.15998 12.6035 5.71998 14.5235 5.71998C15.9155 5.71998 16.4435 6.19998 16.4435 6.19998V8.11998Z"
                    fill="#878787"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/wehelplive"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4436 0.919983H3.08359C1.75879 0.919983 0.683594 1.99518 0.683594 3.31998V18.68C0.683594 20.0048 1.75879 21.08 3.08359 21.08H18.4436C19.7684 21.08 20.8436 20.0048 20.8436 18.68V3.31998C20.8436 1.99518 19.7684 0.919983 18.4436 0.919983ZM6.92359 8.59998V17.72H4.04359V8.59998H6.92359ZM4.04359 5.94558C4.04359 5.27358 4.61959 4.75998 5.48359 4.75998C6.34759 4.75998 6.88999 5.27358 6.92359 5.94558C6.92359 6.61758 6.38599 7.15998 5.48359 7.15998C4.61959 7.15998 4.04359 6.61758 4.04359 5.94558ZM17.4836 17.72H14.6036C14.6036 17.72 14.6036 13.2752 14.6036 12.92C14.6036 11.96 14.1236 11 12.9236 10.9808H12.8852C11.7236 10.9808 11.2436 11.9696 11.2436 12.92C11.2436 13.3568 11.2436 17.72 11.2436 17.72H8.36359V8.59998H11.2436V9.82878C11.2436 9.82878 12.17 8.59998 14.0324 8.59998C15.938 8.59998 17.4836 9.91038 17.4836 12.5648V17.72Z"
                    fill="#878787"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCp8WN3Abo6p8GahnWSaNKFg"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <svg
                  width="31"
                  height="22"
                  viewBox="0 0 31 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.5688 3.78125C29.2949 2.26929 27.9897 1.16821 26.4751 0.824463C24.2085 0.34375 20.0137 0 15.4751 0C10.9392 0 6.67725 0.34375 4.40796 0.824463C2.896 1.16821 1.58814 2.19946 1.31421 3.78125C1.0376 5.5 0.763672 7.90625 0.763672 11C0.763672 14.0938 1.0376 16.5 1.38135 18.2188C1.65796 19.7307 2.96314 20.8318 4.4751 21.1755C6.88135 21.6562 11.0063 22 15.5449 22C20.0835 22 24.2085 21.6562 26.6147 21.1755C28.1267 20.8318 29.4319 19.8005 29.7085 18.2188C29.9824 16.5 30.3262 14.0239 30.396 11C30.2563 7.90625 29.9126 5.5 29.5688 3.78125ZM11.7637 15.8125V6.1875L20.1506 11L11.7637 15.8125Z"
                    fill="#878787"
                  />
                </svg>
              </a>
              <a
                href="https://medium.com/wehelplive"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <svg
                  width="25"
                  height="14"
                  viewBox="0 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.39551 0C6.47625 -1.93718e-08 5.566 0.18106 4.71672 0.532843C3.86744 0.884626 3.09577 1.40024 2.44576 2.05025C1.79575 2.70026 1.28013 3.47194 0.928351 4.32122C0.576568 5.17049 0.395508 6.08075 0.395508 7C0.395508 7.91925 0.576568 8.82951 0.928351 9.67878C1.28013 10.5281 1.79575 11.2997 2.44576 11.9497C3.09577 12.5998 3.86744 13.1154 4.71672 13.4672C5.566 13.8189 6.47625 14 7.39551 14C8.31476 14 9.22501 13.8189 10.0743 13.4672C10.9236 13.1154 11.6952 12.5998 12.3453 11.9497C12.9953 11.2997 13.5109 10.5281 13.8627 9.67878C14.2144 8.82951 14.3955 7.91925 14.3955 7C14.3955 6.08075 14.2144 5.17049 13.8627 4.32122C13.5109 3.47194 12.9953 2.70026 12.3453 2.05025C11.6952 1.40024 10.9236 0.884626 10.0743 0.532843C9.22501 0.18106 8.31476 -1.93718e-08 7.39551 0V0ZM18.3955 0.5C17.5999 0.5 16.8368 1.18482 16.2742 2.40381C15.7116 3.62279 15.3955 5.27609 15.3955 7C15.3955 8.72391 15.7116 10.3772 16.2742 11.5962C16.8368 12.8152 17.5999 13.5 18.3955 13.5C19.1912 13.5 19.9542 12.8152 20.5168 11.5962C21.0794 10.3772 21.3955 8.72391 21.3955 7C21.3955 5.27609 21.0794 3.62279 20.5168 2.40381C19.9542 1.18482 19.1912 0.5 18.3955 0.5ZM23.3955 2C23.1303 2 22.8759 2.52678 22.6884 3.46447C22.5009 4.40215 22.3955 5.67392 22.3955 7C22.3955 8.32608 22.5009 9.59785 22.6884 10.5355C22.8759 11.4732 23.1303 12 23.3955 12C23.6607 12 23.9151 11.4732 24.1026 10.5355C24.2902 9.59785 24.3955 8.32608 24.3955 7C24.3955 5.67392 24.2902 4.40215 24.1026 3.46447C23.9151 2.52678 23.6607 2 23.3955 2Z"
                    fill="#878787"
                  />
                </svg>
              </a>
              <a
                href="https://medium.com/wehelplive"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3955 0.0667725C5.76551 0.0667725 0.395508 5.54196 0.395508 12.3018C0.395508 17.7159 3.83051 22.2887 8.60051 23.9099C9.20051 24.0169 9.42551 23.6499 9.42551 23.3287C9.42551 23.0381 9.41051 22.0746 9.41051 21.0499C6.39551 21.6158 5.61551 20.3005 5.37551 19.6123C5.24051 19.2605 4.65551 18.1747 4.14551 17.8841C3.72551 17.6547 3.12551 17.0888 4.13051 17.0735C5.07551 17.0582 5.75051 17.9606 5.97551 18.3276C7.05551 20.1782 8.78051 19.6582 9.47051 19.337C9.57551 18.5417 9.89051 18.0064 10.2355 17.7006C7.56551 17.3947 4.77551 16.3394 4.77551 11.6595C4.77551 10.3289 5.24051 9.22778 6.00551 8.37132C5.88551 8.06545 5.46551 6.81135 6.12551 5.12903C6.12551 5.12903 7.13051 4.80786 9.42551 6.38312C10.3855 6.10784 11.4055 5.97019 12.4255 5.97019C13.4455 5.97019 14.4655 6.10784 15.4255 6.38312C17.7205 4.79257 18.7255 5.12903 18.7255 5.12903C19.3855 6.81135 18.9655 8.06545 18.8455 8.37132C19.6105 9.22778 20.0755 10.3136 20.0755 11.6595C20.0755 16.3547 17.2705 17.3947 14.6005 17.7006C15.0355 18.0829 15.4105 18.817 15.4105 19.964C15.4105 21.6005 15.3955 22.9158 15.3955 23.3287C15.3955 23.6499 15.6205 24.0322 16.2205 23.9099C18.6027 23.0898 20.6727 21.5288 22.1392 19.4465C23.6057 17.3641 24.3948 14.8654 24.3955 12.3018C24.3955 5.54196 19.0255 0.0667725 12.3955 0.0667725Z"
                    fill="#878787"
                  /></svg
              ></a>
              <a
                href="https://angel.co/company/wehelplive"
                class="text-zinc-400 hover:text-zinc-400"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3958 0.000244141C5.76835 0.000244141 0.395508 5.37216 0.395508 11.9995C0.395508 18.6269 5.76835 23.9998 12.3958 23.9998C19.0226 23.9998 24.3955 18.6269 24.3955 11.9995C24.3956 5.37216 19.0226 0.000244141 12.3958 0.000244141ZM16.1899 17.7262C15.1118 18.8681 13.7332 19.4391 12.054 19.4391C11.3923 19.4391 10.7501 19.3199 10.1275 19.0816C9.50468 18.8431 8.96941 18.5105 8.52117 18.0836C8.00885 17.6141 7.6246 17.1178 7.36847 16.5949C7.11228 16.0719 6.98421 15.5365 6.98421 14.9885C6.98421 14.3766 7.11584 13.9036 7.37914 13.569C7.64224 13.2346 8.05851 13.007 8.62789 12.8858C8.52122 12.6368 8.44276 12.4269 8.3931 12.2561C8.3433 12.0854 8.3184 11.9538 8.3184 11.8613C8.3184 11.5411 8.4874 11.2139 8.82536 10.8793C9.16317 10.5449 9.48178 10.3777 9.78065 10.3777C9.90872 10.3777 10.0438 10.4008 10.1862 10.4471C10.3285 10.4935 10.492 10.5698 10.6772 10.6765C10.1291 9.12535 9.73079 7.92815 9.48178 7.08494C9.23256 6.24178 9.10824 5.66007 9.10824 5.3399C9.10824 4.89873 9.22194 4.54845 9.44981 4.28861C9.67748 4.02887 9.98703 3.89904 10.3783 3.89904C11.0471 3.89904 11.894 5.39331 12.9186 8.38185C13.0963 8.89417 13.2317 9.28904 13.3242 9.56662C13.4025 9.34616 13.5126 9.03296 13.6551 8.62736C14.6797 5.66728 15.5619 4.18729 16.3021 4.18729C16.665 4.18729 16.9548 4.31005 17.1719 4.55551C17.3889 4.80102 17.4975 5.13026 17.4975 5.54277C17.4975 5.85602 17.3783 6.42867 17.1399 7.26116C16.9014 8.0937 16.5404 9.18237 16.0566 10.5272C16.6969 10.6483 17.1488 10.9185 17.4121 11.3383C17.6752 11.7583 17.807 12.42 17.807 13.3236C17.8069 15.1166 17.2679 16.5842 16.1899 17.7262Z"
                    fill="#878787"
                  /></svg
              ></a>
            </div>
          </div>
        </div>
        <div class="h-10"></div>
        <br />

        <div class="h-20"></div>
        <br />

        <br />
      </PopoverPanel>
    </transition>
  </Popover>
  <!---select language -->
</template>

<script>
import { defineComponent, h, computed } from 'vue'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

import { MenuIcon, XIcon } from '@heroicons/vue/outline'

import { ChevronDownIcon } from '@heroicons/vue/solid'

import { useI18n } from 'vue-i18n'

const langs = [
  { long: 'Deutsch', icon: '🇩🇪', short: 'de' },
  { long: 'English', icon: '🇬🇧', short: 'en' },
  { long: 'Русский', icon: '🇷🇺', short: 'ru' },
  { long: 'Українська', icon: '🇺🇦', short: 'ua' },
]

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
    const navigation = {
      solutions: [
        { name: computed(() => t('guest')), to: '/guest' },
        { name: computed(() => t('host')), to: '/host' },
        {
          name: computed(() => t('exchange')),
          to: '/exchange',
        },
        { name: computed(() => t('request')), to: '/request' },
      ],
      social: [
        {
          name: 'Telegram',
          href: 'https://t.me/wehelplive',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d:
                    'M24.793 12.4937C24.793 19.1211 19.4204 24.4937 12.793 24.4937C6.16555 24.4937 0.792969 19.1211 0.792969 12.4937C0.792969 5.86624 6.16555 0.493652 12.793 0.493652C19.4204 0.493652 24.793 5.86624 24.793 12.4937ZM13.8681 9.06013L5.78718 12.3896C4.36522 12.9445 5.19759 13.4648 5.19759 13.4648C5.19759 13.4648 6.41146 13.8809 7.45192 14.1931C8.49239 14.5052 9.0473 14.1584 9.0473 14.1584L13.9375 10.8636C15.6716 9.6844 15.2554 10.6555 14.8392 11.0717C13.9375 11.9734 12.4461 13.3954 11.1976 14.5399C10.6427 15.0254 10.9201 15.4416 11.1629 15.6497C11.8687 16.2469 13.5305 17.3327 14.286 17.8264C14.4958 17.9634 14.6356 18.0549 14.6658 18.0775C14.8392 18.2162 15.8103 18.8405 16.3999 18.7017C16.9895 18.563 17.0589 17.7653 17.0589 17.7653L17.9259 12.3202C18.003 11.8098 18.08 11.31 18.1519 10.8439C18.3388 9.63179 18.4905 8.64782 18.5155 8.29712C18.6196 7.11793 17.371 7.60348 17.371 7.60348C17.371 7.60348 14.6658 8.7133 13.8681 9.06013Z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        {
          name: 'Instagram',
          href: 'https://instagram.com/wehelplive',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d:
                    'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/wehelplive',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  d:
                    'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                }),
              ]),
          }),
        },
        {
          name: 'GitHub',
          href: 'https://github.com/wehelplive',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d:
                    'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
      ],
    }

    return {
      navigation,
      langs,
      t,
    }
  },
}
</script>
