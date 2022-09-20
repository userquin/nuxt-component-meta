import nuxtMetaModule from '../src/module'

export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      },
      '~/components'
    ]
  },
  modules: [
    '@nuxt/content',
    nuxtMetaModule
  ]
})
