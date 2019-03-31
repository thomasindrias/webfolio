<template>
  <div class="custom-navbar columns is-vcentered">
    <div class="column">
      <div
        
        class="hamburger"
        @click="isHidden = !isHidden"
      >
        <div class="hamburger-menu" :class="{ 'animate': !isHidden }" />	  
      </div>
    </div>
    <div
      class="column has-text-centered has-text-weight-semibold text-font-sree is-size-4 no-select"
      :class="{'animated fadeInDown': !isHidden, 'hidden animated fadeOutUp ': isHidden}"
    >
      <nuxt-link style="margin: 0 30px;" to="/">
        <span class="nav-item">HOME</span>
      </nuxt-link>
      <nuxt-link style="margin: 0 30px;" to="/about">
        <span class="nav-item">ABOUT</span>
      </nuxt-link>
    </div>
    <div class="column has-text-weight-semibold has-text-right">
      <nuxt-link to="/">
        <span class="logo-name text-font-sree no-select nav-item">TI</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      isHidden: true
    }
  }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sree+Krushnadevaraya');

$red: #e04f62;
$black: #4a4a4a;
$bar-width: 60px;
$bar-height: 5px;
$bar-spacing: 15px;

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

.text-font-sree {
  font-family: 'Sree Krushnadevaraya', serif;
}

.logo-name {
  font-size: 2.5rem;
  color: $black;
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
  display: flex;
  width: $bar-width;
  height: $bar-height + $bar-spacing * 2;
  cursor: pointer;
}

.hamburger-menu,
.hamburger-menu:after,
.hamburger-menu:before {
  width: $bar-width;
  height: $bar-height;
}

.hamburger-menu {
  position: relative;
  transform: translateY($bar-spacing);
  background: $black;
  transition: all 0ms 300ms;

  &.animate {
    background: rgba(255, 255, 255, 0);
  }
}

.hamburger-menu:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: $bar-spacing;
  background: $black;
  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu:after {
  content: '';
  position: absolute;
  left: 0;
  top: $bar-spacing;
  background: $black;
  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu.animate:after {
  top: 0;
  transform: rotate(45deg);
  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu.animate:before {
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
