module.exports = {
  description: '穹刀的个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/iuk.jpg' }],
    ['link', { rel: 'manifest', href: '/images/iuk.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/iuk.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: './', // 本地
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    logo: '/images/jcw01.png',
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        items: [
          { text: 'html', link: '/' },
          { text: 'css', link: '/' },
          { text: 'javascript', link: '/' }
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'vue', link: '/' },
          { text: 'react', link: '/' }
        ]
      },
      {
        text: '后端基础',
        items: [
          { text: 'java', link: '/' },
          { text: 'python', link: '/' }
        ]
      },
      {
        text: '服务器',
        items: [
          { text: 'ngnix', link: '/' }
        ]
      },
      { text: '算法题库', link: '/algorithm/' },
      {
        text: '涉猎',
        items: [
          { text: '科技', link: '/others/' },
          { text: '人文', link: '/' },
          { text: '历史', link: '/' }
        ]
      },

    ],
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2
  }
};