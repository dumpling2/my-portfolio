const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  pwa: {
    name: 'My Portfolio',
    themeColor: '##E0E0E0', // テーマカラー
    msTileColor: '#E0E0E0', // Windowsタイルのカラー
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'myTheme',

    // アイコンの設定
    iconPaths: {
      favicon32: 'img/icons/32-32.png',
      favicon16: 'img/icons/16-16.png',
      appleTouchIcon: 'img/icons/android129-129.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/android129-129.png'
    },

    // オフライン時にキャッシュするリソースを指定
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1年
            },
          },
        },
      ],
    },
  },
});