<template>
  <div class="site">
    <navbar v-scroll-reveal.reset />
    <hr>
    <nuxt class="site-content" />
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

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}
</style>
