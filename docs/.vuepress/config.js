import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

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
  title: '大连理工大学2024级MBA-4班',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  description: '这是我的第一个 VuePress 站点',
  
})