<template>
  <div class="site">
    <navbar v-scroll-reveal.reset />
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
html,
body {
  height: 100%;
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
