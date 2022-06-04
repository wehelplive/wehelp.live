<template>
  <footer class="bg-white-500" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-18 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <div class="flex justify-center xl:justify-start">
            <BrandLogo class="h-24 w-24" />
          </div>
          <p
            class="text-grey-600 text-base text-center sm:text-left flex justify-center xl:justify-start"
          >
            {{ t('footer.subtitle') }}
          </p>
          <div class="flex justify-center xl:justify-start">
            <div class="flex space-x-2">
              <a
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
              >
                <span class="sr-only">{{ item.name }}</span>
                <img class="fill-currentColor" :src="item.icon" />
              </a>
            </div>
          </div>
        </div>
        <div
          class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 justify-items-center xl:justify-items-start"
        >
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
              >
                {{ t('informations.services') }}
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                  >
                    {{ item.name?.value }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
              >
                {{ t('informations.support') }}
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                  >
                    {{ item.name?.value }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
              >
                {{ t('informations.company') }}
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                  >
                    {{ item.name?.value }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-subtitle font-semibold text-zinc-700 tracking-wider uppercase"
              >
                {{ t('informations.legal') }}
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-body font-normal text-zinc-700 hover:text-zinc-800"
                  >
                    {{ item.name?.value }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-grey-200 pt-8">
        <p class="text-base text-grey-600 xl:text-center flex justify-center">
          &copy; {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
    <div class="bg-no-repeat bg-top bg-favicon h-64 w-full"></div>
  </footer>
</template>

<script>
<<<<<<< HEAD
import { defineComponent, h, computed } from 'vue'
import { useI18n } from 'vue-i18n'
||||||| parent of c2ef6c8... fix: fetchServices, add fetchGuests
import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
    { name: 'Find Accomodation', href: '/guest' },
    { name: 'Offer Accomodation', href: '/host' },
    { name: 'UAH Exchange', href: '/exchange' },
    { name: 'Ask for Help', href: '/request' },
    { name: 'Evacuation Planner', href: '/services' },
    { name: 'Add review', href: '/add' },
  ],
  support: [{ name: 'Contact Us', href: 'mailto:hello@wehelp.vip' }],
  company: [
    {
      name: 'About',
      href: 'https://handbook.wehelp.live/about/',
    },
    {
      name: 'Teams',
      href: '/teams',
    },
    {
      name: 'Calendar',
      href: '/calendar',
    },
    {
      name: 'Get Involved',
      href: '/get-involved',
    },
    {
      name: 'Jobs',
      href: 'https://angel.co/company/wehelplive/jobs',
    },
  ],
  legal: [
    {
      name: 'Imprint',
      href:
        'https://docs.google.com/document/d/15h_1__MAk8CgBoF4n8mhA-XAyorzDlUQPVNOsGMyhEs/edit',
    },
    {
      name: 'Terms',
      href:
        'https://docs.google.com/document/d/15h_1__MAk8CgBoF4n8mhA-XAyorzDlUQPVNOsGMyhEs/edit',
    },
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
      name: 'Telegram',
      href: 'https://github.com/wehelplive',
      icon: '/icons/Telegram.svg',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/wehelplive',
      icon: '/icons/Instagram.svg',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/wehelplive',
      icon: '/icons/Twitter.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/wehelplive',
      icon: '/icons/Github.svg',
    },
    {
      name: 'Facebook',
      href: 'https://fb.com/WeHelpLiveFB',
      icon: '/icons/Facebook.svg',
    },
    {
      name: 'LinkedIn',
      href: 'https://github.com/wehelplive',
      icon: '/icons/LinkedIn.svg',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCp8WN3Abo6p8GahnWSaNKFg',
      icon: '/icons/YouTube.svg',
    },
    {
      name: 'Medium',
      href: 'https://medium.com/wehelplive',
      icon: '/icons/Medium.svg',
    },
    {
      name: 'Angellist',
      href: 'https://angel.co/company/wehelplive',
      icon: '/icons/Angellist.svg',
    },
  ],
}
=======
// import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
    { name: 'Find Accomodation', href: '/guest' },
    { name: 'Offer Accomodation', href: '/host' },
    { name: 'UAH Exchange', href: '/exchange' },
    { name: 'Ask for Help', href: '/request' },
    { name: 'Evacuation Planner', href: '/services' },
    { name: 'Guests', href: '/guests' },
    { name: 'Add review', href: '/add' },
  ],
  support: [{ name: 'Contact Us', href: 'mailto:hello@wehelp.vip' }],
  company: [
    {
      name: 'About',
      href: 'https://handbook.wehelp.live/about/',
    },
    {
      name: 'Teams',
      href: '/teams',
    },
    {
      name: 'Calendar',
      href: '/calendar',
    },
    {
      name: 'Get Involved',
      href: '/get-involved',
    },
    {
      name: 'Jobs',
      href: 'https://angel.co/company/wehelplive/jobs',
    },
  ],
  legal: [
    {
      name: 'Imprint',
      href:
        'https://docs.google.com/document/d/15h_1__MAk8CgBoF4n8mhA-XAyorzDlUQPVNOsGMyhEs/edit',
    },
    {
      name: 'Terms',
      href:
        'https://docs.google.com/document/d/15h_1__MAk8CgBoF4n8mhA-XAyorzDlUQPVNOsGMyhEs/edit',
    },
  ],
  social: [
    // {
    //   name: 'Telegram',
    //   href: 'https://t.me/wehelplive',
    //   icon: defineComponent({
    //     render: () =>
    //       h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
    //         h('path', {
    //           'fill-rule': 'evenodd',
    //           d:
    //             'M24.793 12.4937C24.793 19.1211 19.4204 24.4937 12.793 24.4937C6.16555 24.4937 0.792969 19.1211 0.792969 12.4937C0.792969 5.86624 6.16555 0.493652 12.793 0.493652C19.4204 0.493652 24.793 5.86624 24.793 12.4937ZM13.8681 9.06013L5.78718 12.3896C4.36522 12.9445 5.19759 13.4648 5.19759 13.4648C5.19759 13.4648 6.41146 13.8809 7.45192 14.1931C8.49239 14.5052 9.0473 14.1584 9.0473 14.1584L13.9375 10.8636C15.6716 9.6844 15.2554 10.6555 14.8392 11.0717C13.9375 11.9734 12.4461 13.3954 11.1976 14.5399C10.6427 15.0254 10.9201 15.4416 11.1629 15.6497C11.8687 16.2469 13.5305 17.3327 14.286 17.8264C14.4958 17.9634 14.6356 18.0549 14.6658 18.0775C14.8392 18.2162 15.8103 18.8405 16.3999 18.7017C16.9895 18.563 17.0589 17.7653 17.0589 17.7653L17.9259 12.3202C18.003 11.8098 18.08 11.31 18.1519 10.8439C18.3388 9.63179 18.4905 8.64782 18.5155 8.29712C18.6196 7.11793 17.371 7.60348 17.371 7.60348C17.371 7.60348 14.6658 8.7133 13.8681 9.06013Z',
    //           'clip-rule': 'evenodd',
    //         }),
    //       ]),
    //   }),
    // },
    {
      name: 'Telegram',
      href: 'https://github.com/wehelplive',
      icon: '/icons/Telegram.svg',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/wehelplive',
      icon: '/icons/Instagram.svg',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/wehelplive',
      icon: '/icons/Twitter.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/wehelplive',
      icon: '/icons/Github.svg',
    },
    {
      name: 'Facebook',
      href: 'https://fb.com/WeHelpLiveFB',
      icon: '/icons/Facebook.svg',
    },
    {
      name: 'LinkedIn',
      href: 'https://github.com/wehelplive',
      icon: '/icons/LinkedIn.svg',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCp8WN3Abo6p8GahnWSaNKFg',
      icon: '/icons/YouTube.svg',
    },
    {
      name: 'Medium',
      href: 'https://medium.com/wehelplive',
      icon: '/icons/Medium.svg',
    },
    {
      name: 'Angellist',
      href: 'https://angel.co/company/wehelplive',
      icon: '/icons/Angellist.svg',
    },
  ],
}
>>>>>>> c2ef6c8... fix: fetchServices, add fetchGuests

export default {
  setup() {
    const { t } = useI18n()
    const navigation = {
      solutions: [
        { name: computed(() => t('footer.list.solutions[0]')), href: '/guest' },
        { name: computed(() => t('footer.list.solutions[1]')), href: '/host' },
        {
          name: computed(() => t('footer.list.solutions[2]')),
          href: '/exchange',
        },
        {
          name: computed(() => t('footer.list.solutions[3]')),
          href: '/request',
        },
        {
          name: computed(() => t('footer.list.solutions[4]')),
          href: '/services',
        },
        { name: computed(() => t('footer.list.solutions[5]')), href: '/add' },
      ],
      support: [
        {
          name: computed(() => t('footer.list.support')),
          href: 'mailto:hello@wehelp.vip',
        },
      ],
      company: [
        {
          name: computed(() => t('footer.list.company[0]')),
          href: 'https://handbook.wehelp.live/about/',
        },
        {
          name: computed(() => t('footer.list.company[1]')),
          href: '/teams',
        },
        {
          name: computed(() => t('footer.list.company[2]')),
          href: '/calendar',
        },
        {
          name: computed(() => t('footer.list.company[3]')),
          href: '/get-involved',
        },
        {
          name: computed(() => t('footer.list.company[4]')),
          href: 'https://angel.co/company/wehelplive/jobs',
        },
      ],
      legal: [
        {
          name: computed(() => t('footer.list.legal[0]')),
          href:
            'https://docs.google.com/document/d/15h_1__MAk8CgBoF4n8mhA-XAyorzDlUQPVNOsGMyhEs/edit',
        },
        {
          name: computed(() => t('footer.list.legal[1]')),
          href:
            'https://docs.google.com/document/d/15h_1__MAk8CgBoF4n8mhA-XAyorzDlUQPVNOsGMyhEs/edit',
        },
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
          name: 'Telegram',
          href: 'https://github.com/wehelplive',
          icon: '/icons/Telegram.svg',
        },
        {
          name: 'Instagram',
          href: 'https://instagram.com/wehelplive',
          icon: '/icons/Instagram.svg',
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/wehelplive',
          icon: '/icons/Twitter.svg',
        },
        {
          name: 'GitHub',
          href: 'https://github.com/wehelplive',
          icon: '/icons/Github.svg',
        },
        {
          name: 'Facebook',
          href: 'https://fb.com/WeHelpLiveFB',
          icon: '/icons/Facebook.svg',
        },
        {
          name: 'LinkedIn',
          href: 'https://github.com/wehelplive',
          icon: '/icons/LinkedIn.svg',
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCp8WN3Abo6p8GahnWSaNKFg',
          icon: '/icons/YouTube.svg',
        },
        {
          name: 'Medium',
          href: 'https://medium.com/wehelplive',
          icon: '/icons/Medium.svg',
        },
        {
          name: 'Angellist',
          href: 'https://angel.co/company/wehelplive',
          icon: '/icons/Angellist.svg',
        },
      ],
    }
    return {
      navigation,
      t,
    }
  },
}
</script>
