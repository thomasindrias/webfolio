<template>
  <div class="site">
    <div
    v-if="showNotis && isHidden"
    class="notification py-1 has-text-white has-text-centered has-text-weight-semibold"
    >
      <button class="delete is-small" @click="hideNotis"></button>
      New portfolio coming!
    </div>
    <div class="menu">
      <div class="wrapper">
        <div class="menu-bars is-centered columns text-font-icon">
          <nuxt-link style="margin: 0 30px;" class="column is-one-quarter" exact to="/">
            <span @click="isHidden = !isHidden" class="">Home</span>
          </nuxt-link>
          <nuxt-link style="margin: 0 30px;" class="column is-one-quarter" exact to="/about">
            <span @click="isHidden = !isHidden" class="">About</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <navbar v-scroll-reveal.reset :isHiddenProp="isHidden" @toggle="toggleMenu" />
    <nuxt v-if="!animFinished || isHidden" class="site-content" />
    <footer-prop style="footer-spacing" />
  </div>
</template>

<script>
import anime from 'animejs'
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'Default',
  components: {
    'footer-prop': Footer,
    navbar: Navbar,
  },
  data: function() {
    return {
      isHidden: true,
      animFinished: false,
      showNotis: false
    }
  },
  watch: {
    isHidden: function(isHidden, isHiddenOld) {
      this.animate(isHidden)
    }
  },
  mounted() {
    console.log(this.$cookies.get('has-visited'))
    if(!this.$cookies.get('has-visited')) this.showNotis = true;
  },
  methods: {
    toggleMenu(isHidden) {
      this.isHidden = isHidden
    },
    hideNotis(){
      this.showNotis = false;
      this.$cookies.set('has-visited', true)
    },
    animate(isHidden) {
      this.animFinished = false

      const hamburger = anime.timeline({
        duration: 100,
        easing: 'easeInOutQuad'
      })

      const timeline = anime.timeline({
        duration: 700,
        easing: 'easeInOutQuad'
      })

      timeline.add({
        targets: '.menu',
        width: this.isHidden ? '0vw' : '100vw'
      })

      timeline.add({
        duration: 100,
        targets: '.logo-name',
        color: this.isHidden ? '#4a4a4a' : '#FFF'
      })

      timeline.add(
        {
          targets: '.menu-bars',
          opacity: [
            { value: '0%', duration: 500 },
            { value: '100%', duration: 500 }
          ],
          scale: [
            { value: '60%', duration: 500 },
            { value: '100%', duration: 500 }
          ]
        },
        '-=650'
      )

      timeline.add(
        {
          targets: ['.site-content', 'footer'],
          opacity: this.isHidden ? '1' : '0'
        },
        '-=600'
      )

      hamburger.add({
        targets: '.hamburger span',
        background: this.isHidden ? '#4a4a4a' : '#FFF'
      })


      timeline.finished.then(() => {
        if (!isHidden) this.animFinished = true
      })
    }
  },
  metaInfo: {
    meta: [{ charset: 'utf-8' }]
  }
}
</script>

<style lang="scss">
$yellow: #efecca;
$black: #4a4a4a;

.text-font-sree {
  font-family: 'Sree Krushnadevaraya', serif;
  font-display: swap;
}

.text-font-icon {
  font-family: 'Merriweather', serif;
  font-display: swap;
}

html,
body {
  height: 100%;
}

blockquote,
pre {
  max-height: 600px !important;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}

.notification {
  position: fixed;
  z-index: 9999999;
  min-width: 100%;
  border-radius: 0;

  background-color: $black;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;

  overflow: hidden;

  background-color: $black;

  z-index: 99;
}

.menu-bars span {
  color: white;

  font-size: 2em;

  -webkit-transition: font-size 500ms cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: font-size 500ms cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: font-size 500ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: font-size 500ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-bars span:hover {
  font-size: 2.1em;
}

.wrapper {
  position: relative;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
