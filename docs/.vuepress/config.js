module.exports = {
  title: 'Wehelp',
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
    sidebar: {
      '/about/': [
        {
          title: 'About Us',
          collapsable: false,
          children: [
            '',
            'what',
            'why',
            'difference',
            'mission',
            'values',
            'principles',
            'roadmap',
            'strategy',
            'domains',
            'others-say',
            'support',
          ],
        },
      ],
    },
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
