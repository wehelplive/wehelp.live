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
        children: [
          '/',
          'mission',
          'values',
          'principles',
          'others-say',
          'support',
          'what',
        ],
      },
      {
        title: 'Coordination',
        path: '/domains/coordination',
        collapsable: false,
        children: ['coordination'],
      },
      {
        title: 'Product',
        path: '/domains/product',
        collapsable: false,
        children: ['product'],
      },
      {
        title: 'Communication',
        path: '/domains/communication',
        collapsable: false,
        children: ['communication'],
      },
      {
        title: 'Operations',
        path: '/domains/operations',
        collapsable: false,
        children: ['operations'],
      },
      {
        title: 'Partnerships',
        path: '/domains/partnerships',
        collapsable: false,
        children: ['partnerships'],
      },
      {
        title: 'Talents',
        path: '/domains/talents',
        collapsable: false,
        children: ['talents'],
      },
    ],
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
