<template>
  <div class="animated delay-0.2s fadeIn">
    <navbar />
    <nuxt class="nuxt-content" />
    <footer-prop style="footer-spacing" />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'Default',
  components: {
    'footer-prop': Footer,
    navbar: Navbar
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
