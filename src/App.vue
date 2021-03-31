<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout';
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
}
</script>

<style lang="sass">
@import '~sanitize.css/sanitize'
@import '~sanitize.css/forms'

@import '@/assets/style'

@font-face
    font-family: 'Raleway'
    src: url('./assets/fonts/Raleway/Raleway-Black.ttf') format('truetype')
    font-weight: 900
    font-style: normal

@font-face
    font-family: 'SF UI Display'
    src: url('./assets/fonts/SFUIDisplay/SFUIDisplay-Light.woff') format('woff')
    font-weight: 300
    font-style: normal

@font-face
    font-family: 'SF UI Display'
    src: url('./assets/fonts/SFUIDisplay/SFUIDisplay-Heavy.woff') format('woff')
    font-weight: 700
    font-style: normal
</style>