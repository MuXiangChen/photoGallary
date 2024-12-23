import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'
const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
        {
            text: '首页',
            link: '/',
        },
        {
            text: '学习指南',
            link: '/guide/',
        },
        {
            text: '论文攻略',
            link: '/paper/',
        },
        {
            text: '通讯录',
            link: '/contact/',
        },
        {
            text: '相册',
            link: '/album/',
        },
        {
            text: '上传',
            link: '/upload/',
        },
      ],
  }),
  
  base: '/photoGallary/',
  lang: 'zh-CN',
  title: 'DUT MBA Class4',
  description: '这是我的第一个 VuePress 站点',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      },
      registerComponentsPlugin({
        components: {
          HelloWorld: path.resolve(__dirname, './components/HelloWorld.vue'),
          AvatarGrid: path.resolve(__dirname, './components/AvatarGrid.vue'),
        },
      }),
    ]
  ],
  
})