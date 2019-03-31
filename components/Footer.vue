<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-weight-semibold">
      <p>
        © 2019 Thomas Indrias 💻 Powered by Nuxt and Contentful.
      </p>
      <div>
        <a class="icon icon-size " href="https://www.instagram.com/tictact0m/">
          <i class="hvr-grow fa-lg fab fa-instagram" />
        </a>
        <a class="icon icon-size" href="https://www.linkedin.com/in/thomas-indrias/">
          <i class="hvr-grow fab fa-linkedin-in" />
        </a>
        <a class="icon icon-size" href="https://github.com/thomasindrias/">
          <i class="hvr-grow fab fa-github" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
$red: #e04f62;
$black: #4a4a4a;

.footer {
  margin-top: 150px;
}

.icon-size {
  font-size: 1.5rem;
  margin: 50px 25px 0 25px;

  color: $black;

  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;

  transition: 0.2s;
}

.icon-size:hover {
  color: $red;
}

/* Grow */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.2);
}
</style>
