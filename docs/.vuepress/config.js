module.exports = {
  title: 'sangongchiBlog',
  description: '使用vuePress-reco脚手架制作博客',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: 'note',
        link: '/notes/',
        icon: 'reco-document'
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/sangongchi',
            icon: 'reco-github'
          }
        ]
      }
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },
    sidebarDepth: 2,
    displayAllHeaders: false,
    sidebar: {
      '/notes/': [
        {
          title: '语言',
          collapsable: true,
          children: ['language/chinese', 'language/en']
        },
        {
          title: '测试',
          collapsable: false,
          children: ['web/Canvas']
        }
      ]
    },
    // friendLink: [
    //   {
    //     title: '友情链接地址',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: '18742528898@163.com',
    //     link: 'http:sangongchi.com'
    //   }
    // ],
    logo: '/logo.png',
    search: true,
    mode: 'auto',
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'sangongchi',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2017'
  },
  //评论插件的安装使用
  valineConfig: {
    appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz', // your appId
    appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
    placeholder: '是时候展现真正的技术了',
    avatar: 'wavatar',
    serverUrl: 'https://leanserver.smallsunnyfox.com'
  },
  markdown: {
    lineNumbers: true
  }
};
