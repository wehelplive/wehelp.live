export const navigation = {
  main: [
    {
      name: 'company.home',
      to: '/',
    },
    {
      name: 'services.accomodations.find',
      to: '/guest',
    },
    {
      name: 'services.accomodations.add',
      to: '/host',
    },
  ],
  services: [
    {
      name: 'services.accomodations.find',
      to: '/guest',
    },
    {
      name: 'services.accomodations.add',
      to: '/host',
    },
    {
      name: 'services.evacuation.request',
      to: '/request',
    },
    {
      name: 'services.evacuation.find',
      to: '/services',
    },
    {
      name: 'services.evacuation.add',
      to: '/add',
    },
  ],
  company: [
    {
      name: 'company.about',
      href: 'https://handbook.wehelp.live/about/',
    },
    {
      name: 'team.title',
      href: '/teams',
    },
    {
      name: 'team.calendar',
      href: '/calendar',
    },
    {
      name: 'team.join',
      href: '/get-involved',
    },
    {
      name: 'team.jobs',
      href: 'https://angel.co/company/wehelplive/jobs',
    },
    {
      name: 'company.contact',
      href: 'mailto:hello@wehelp.live',
    },
  ],
  legal: [
    {
      name: 'company.imprint',
      href: 'https://handbook.wehelp.live/imprint',
    },
    {
      name: 'company.terms',
      href: 'https://handbook.wehelp.live/terms',
    },
    {
      name: 'company.privacy',
      href: 'https://handbook.wehelp.live/privacy',
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
