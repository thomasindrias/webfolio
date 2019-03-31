<template>
  <div class="custom-navbar columns is-vcentered">
    <div class="column">
      <div
        class="hamburger"
        @click="isHidden = !isHidden"
      >
        <div class="bottom-bun" />
        <div class="meat" />
        <div class="top-bun" />
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
        <span class="logo-name text-font-sree no-select">TI</span>
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

.logo {
  height: 100px;
  width: 100px;
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
  padding: 50px 30px 50px 30px;
  width: 100%;
  height: 30px;
  z-index: 9999;
}

.hamburger {
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 40px;
  cursor: pointer;
}
.hamburger div {
  align-self: flex-start;
  height: 4px;
  width: 100%;
  background: #4a4a4a;
}
.hamburger .meat {
  width: 75%;
  transition: all 200ms ease-in-out;
}
.hamburger .bottom-bun {
  width: 50%;
  transition: all 400ms ease-in-out;
}
.hamburger:hover div {
  width: 100%;
}
.hamburger:hover .top-bun {
  -webkit-animation: burger-hover 1s ease-in-out 200ms;
  animation: burger-hover 1s ease-in-out 200ms;
}
.hamburger:hover .meat {
  -webkit-animation: burger-hover 1s ease-in-out forwards 400ms;
  animation: burger-hover 1s ease-in-out forwards 400ms;
}
.hamburger:hover .bottom-bun {
  -webkit-animation: burger-hover 1s ease-in-out forwards 600ms;
  animation: burger-hover 1s ease-in-out forwards 600ms;
}

@-webkit-keyframes burger-hover {
  0% {
    width: 100%;
  }
  50% {
    width: 50%;
    background: $red;
  }
  100% {
    width: 100%;
  }
}

@keyframes burger-hover {
  0% {
    width: 100%;
  }
  50% {
    width: 50%;
    background: $red;
  }
  100% {
    width: 100%;
  }
}

@keyframes burger-active {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
}
</style>
