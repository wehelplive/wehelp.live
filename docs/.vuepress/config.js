module.exports = {
  title: 'WeHelp',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: 'logo.svg',
    sidebar: [
      {
        title: 'About Us',
        path: '/about/',
        collapsable: false,
      },
      {
        title: 'Coordination',
        path: '/domains/coordination',
        collapsable: false,
      },
      {
        title: 'Product',
        path: '/domains/product',
        collapsable: false,
      },
      {
        title: 'Communication',
        path: '/domains/communication',
        collapsable: false,
      },
      {
        title: 'Operations',
        path: '/domains/operations',
        collapsable: false,
      },
      {
        title: 'Partnerships',
        path: '/domains/partnerships',
        collapsable: false,
      },
      {
        title: 'Talents',
        path: '/domains/talents',
        collapsable: false,
      },
    ],
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
