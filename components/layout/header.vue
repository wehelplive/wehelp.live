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
            class="text-base font-nunito text-xl text-black-500 hover:text-black-500"
            to="/add"
          >
            Add service
          </NuxtLink>
          <NuxtLink
            class="text-base font-nunito text-xl text-black-500 hover:text-black-900"
            to="/partnership"
          >
            Partnership
          </NuxtLink>
          <NuxtLink
            class="text-base font-nunito text-xl text-black-500 hover:text-black-900"
            to="/request"
          >
            Contact us
          </NuxtLink>
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
        <div class="bg-white-500 bg-white-500 ">
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
          <div class="py-6 space-y-6">
            <div class="h-10"></div>
            <div class="flex w-8xl flex-col float-right space-y-4">
              <div class="mr-1 flex flex-col float-right">
                <NuxtLink
                  v-for="item in navigation.solutions"
                  :key="item.name"
                  :to="item.to"
                  class="text-base color-[#202020] mb-3 font-nunito text-black-500 hover:text-black-500"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>

              <div class="m-6 mr-5">
                <select
                  id="language"
                  class="form-select w-13 h-12 rounded-lg block w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-white-500 bg-clip-padding bg-no-repeat border border-solid border-slate-200 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white-500 focus:border-royal-blue-600 focus:outline-none"
                >
                  <option>EN</option>
                  <option>DE</option>
                  <option>RU</option>
                  <option>UA</option>
                </select>
              </div>

              <div class="h-10"></div>
              <br />
              <div
                class="flex flex-col float-right ml-12 space-y-3 overflow-y-clip"
              >
                <a
                  v-for="item in navigation.social"
                  :key="item.name"
                  :href="item.href"
                  class="text-black hover:text-zinc-800"
                >
                  <span class="sr-only">{{ item.name }}</span>
                  <component
                    :is="item.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div class="h-20"></div>
              <br />

              <br />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { defineComponent, h } from 'vue'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

import { MenuIcon, XIcon } from '@heroicons/vue/outline'

import { ChevronDownIcon } from '@heroicons/vue/solid'
const navigation = {
  solutions: [
    { name: 'Add service', to: '/add' },
    { name: 'Partnership', to: '/partnership' },
    { name: 'Contact us', to: '/request' },
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
    return {
      navigation,
    }
  },
}
</script>
