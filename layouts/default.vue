<template>
  <div>
    <nuxt />
    <footer-prop />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    'footer-prop': Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
