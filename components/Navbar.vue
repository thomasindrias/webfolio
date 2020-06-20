<template>
  <div class="custom-navbar columns is-vcentered">
    <div class="column">
      <!-- eslint-disable-next-line -->
      <div @click="isHidden = !isHidden" class="hamburger">
        <span id="up" />
        <span id="middle" />
        <span id="down" />
      </div>
    </div>
    <div class="column has-text-weight-semibold has-text-right">
      <nuxt-link to="/">
        <span class="logo-name text-font-sree no-select nav-item">TI</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
//  import 'typeface-merriweather'
//  import 'typeface-sree-krushnadevaraya'

import anime from 'animejs'

export default {
  name: 'Navbar',
  props: {
    isHidden: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isHidden: function(isHidden, isHiddenOld) {
      this.toggleMenu()
    }
  },
  methods: {
    toggleMenu() {
      const up = anime.timeline({
        duration: 300,
        easing: 'easeInOutQuad'
      })

      const middle = anime.timeline({
        duration: 150,
        easing: 'easeInOutQuad'
      })

      const down = anime.timeline({
        duration: 300,
        easing: 'easeInOutQuad'
      })

      up.add({
        targets: '#up',
        top: this.isHidden
          ? [{ value: '0', duration: 400, delay: 400 }]
          : [{ value: '50%', duration: 400 }],
        rotate: this.isHidden
          ? [{ value: '0deg', duration: 200, elasticity: 0 }]
          : [{ value: '45deg', duration: 200, elasticity: 0, delay: 400 }]
      })

      middle.add({
        targets: '#middle',
        opacity: this.isHidden ? { value: '1', delay: 300 } : '0'
      })

      down.add({
        targets: '#down',
        top: this.isHidden
          ? [{ value: '100%', duration: 400, delay: 200 }]
          : [{ value: '50%', duration: 400 }],
        rotate: this.isHidden
          ? [{ value: '0deg', duration: 200, elasticity: 0 }]
          : [{ value: '-45deg', duration: 200, elasticity: 0, delay: 400 }]
      })

      this.$emit('toggle', this.isHidden)
    }
  }
}
</script>


<style lang="scss" scoped>
$red: #e04f62;
$yellow: #efecca;
$black: #4a4a4a;
$bar-width: 60px;
$bar-height: 4px;
$bar-spacing: 10px;

.nav-items a.nuxt-link-active {
  border-bottom: 4px solid $yellow;
}

.hidden {
  visibility: hidden;
}

@-webkit-keyframes fadeOutDown {
  from {
    visibility: visible;
  }

  to {
    visibility: hidden;
  }
}

@keyframes fadeOutDown {
  from {
    visibility: visible;
  }

  to {
    visibility: hidden;
  }
}

.nav-item {
  color: $black;

  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;

  transition: 0.2s;
}

.nav-item:hover {
  color: $red;
}

.logo-name {
  font-size: 2.5rem;
  color: $black;
  z-index: 100;
}

.custom-navbar {
  display: flex;
  margin: 0;
  padding: 50px 30px;
  width: 100%;
  height: 30px;
  z-index: 9999;
}

.hamburger {
  display: block;
  position: relative;
  width: $bar-width;
  height: $bar-height + $bar-spacing * 2;
  cursor: pointer;
  z-index: 100;
}

.hamburger span {
  position: absolute;
  left: 0;
  display: block;
  width: $bar-width;
  height: $bar-height;
  background: $black;
  content: '';

  -webkit-transition: width 500ms ease-in-out;
  -moz-transition: width 500ms ease-in-out;
  -o-transition: width 500ms ease-in-out;
  transition: width 500ms ease-in-out;
}

.hamburger:hover #middle {
  width: $bar-width - $bar-width/3;
}

#up {
  top: 0;
}

#middle {
  top: 50%;
}

#down {
  top: 100%;
}
</style>
