module.exports = {
  title: 'sangongchi',
  description: '使用vuePress-reco脚手架制作博客',

  dest: 'blog',
  theme: 'reco',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: '笔记', link: '/note/', icon: 'reco-document' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '关于我', link: '/about/', icon: 'reco-account' },
      { text: 'GitHub', link: 'https://github.com/sangongchi', icon: 'reco-github' },
    ],
    friendLink: [
      {
        title: '参考链接',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://www.recoluan.com',
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag', // 默认 “标签”
      },
    },
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/note/': [
        {
          title: '虚拟机',
          collapsable: true,
          children: ['Vmware/language', 'Vmware/mongodb', 'Vmware/nginx'],
        },
        {
          title: '前端笔记',
          collapsable: true,
          children: ['web/Canvas'],
        },
      ],
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'sangongchi',
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'no',
    recordLink: 'http://sangongchi.top/#/',
    // 项目开始时间
    startYear: '2019',
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: 'WLyrHRzAKEy8S395UdtJ4V3b-gzGzoHsz', // your appId
      appKey: 'pGGogAciU6j74rYQhLClRRCk', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'sangongchi',
      // serverUrl: 'https://leanserver.smallsunnyfox.com',
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
  ],
};
