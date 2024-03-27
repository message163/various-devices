import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "various-devices",
  description: "This is a cross-platform open source library for obtaining device name and device model.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'guide', link: '/desktop/windows' }
    ],

    sidebar: [
      { 
        text: 'Get Started',
        link: '/guide/'
      }, 
      {
        text: 'Desktop',
        items: [
          { text: 'windows', link: '/desktop/windows' },
          { text: 'macos', link: '/desktop/macos' },
          { text: 'linux', link: '/desktop/linux' }
        ]
      },
      {
        text: 'Mobile',
        items: [
          { text: 'android', link: '/mobile/android' },
          { text: 'ios', link: '/mobile/ios' }
        ]
      },
      {
        text: 'Electron',
        items: [
          { text: 'api', link: '/electron/index' },
        ]
      },
      {
        text: 'Node',
        items: [
          { text: 'api', link: '/node/index' },
        ]
      },
      {
        text: 'Miniapp',
        items: [
          { text: 'api', link: '/miniapp/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/message163/various-devices.git' }
    ]
  }
})
