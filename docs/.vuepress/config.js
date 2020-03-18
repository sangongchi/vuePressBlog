module.exports = {
  title: '个人文档',
  description: '练习文档',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '高级',
        items: [
          {
            text: '算法',
            items: [
              { text: '冒泡', link: '/bar/chinese' },
              { text: '快速', link: '/bar/en' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        title: '分组标题1',
        collapsable: true,
        children: [
          ['/slidebar/slide', '自定义侧边栏一'],
          ['/slidebar/slide2', '自定义侧边栏2']
        ]
      }
    ]
  }
};
