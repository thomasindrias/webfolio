<template>
  <div class="custom-navbar columns is-vcentered">
    <div class="column">
      <div class="hamburger ">
        <div class="bottom-bun" />
        <div class="meat" />
        <div class="top-bun" />
      </div>
    </div>
    <div class="column has-text-weight-semibold has-text-right">
      <span class="logo-name">TI</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sree+Krushnadevaraya');

.logo {
  height: 100px;
  width: 100px;
}

.logo-name {
  font-size: 2.5rem;
  font-family: 'Sree Krushnadevaraya', serif;
}

.custom-navbar {
  display: flex;
  background-color: rgba(255, 255, 255, 0.959);
  margin: 0;
  padding: 30px;
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
  background: #3e4651;
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
  -webkit-animation: burger-hover 1s infinite ease-in-out alternate;
  animation: burger-hover 1s infinite ease-in-out alternate;
}
.hamburger:hover .meat {
  -webkit-animation: burger-hover 1s infinite ease-in-out alternate forwards
    200ms;
  animation: burger-hover 1s infinite ease-in-out alternate forwards 200ms;
}
.hamburger:hover .bottom-bun {
  -webkit-animation: burger-hover 1s infinite ease-in-out alternate forwards
    400ms;
  animation: burger-hover 1s infinite ease-in-out alternate forwards 400ms;
}

@-webkit-keyframes burger-hover {
  0% {
    width: 100%;
  }
  50% {
    width: 50%;
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
  }
  100% {
    width: 100%;
  }
}
</style>
