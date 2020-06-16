<template>
  <div
    @click="toggle"
    :class="[selected ? 'at-selected' : '']"
    class="container"
  >
    <div
      class="dropdown"
    >
      <div class="selected">
        {{ genre }}
      </div>
      <div class="arrow">
        <i class="fas fa-caret-down" />
      </div>
    </div>
    <div v-if="selected" class="options">
      <div v-for="option in options" :key="option" @click="toggleSelection(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',

  data: function() {
    return {
      selected: false,
      genre: 'Choose genre',
      options: ['All', 'Project', 'Web', 'Tech', 'Other']
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    toggle() {
      this.selected = !this.selected
    },

    toggleSelection(option) {
      this.genre = option

      this.$emit('genre', option)
    },

    close(e) {
      if (!this.$el.contains(e.target)) {
        this.selected = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$black: #4a4a4a;
$gray: #808080;
$light-gray: #ececec;

.container {
  position: relative;
  z-index: 99;

  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;

  width: 150px;

  border-bottom: 2px solid $gray;

  color: $gray;

  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;

  -webkit-transition: width 400ms ease-out;
  -ms-transition: width 400ms ease-out;
  transition: width 400ms ease-out;
}

.container:hover {
  color: $black;
  border-bottom-color: $black;
  width: 200px;

  -webkit-transition: border-bottom-color 100ms ease-in-out;
  -ms-transition: border-bottom-color 100ms ease-in-out;
  transition: border-bottom-color 100ms ease-in-out;

  -webkit-transition: color 100ms ease-in-out;
  -ms-transition: color 100ms ease-in-out;
  transition: color 100ms ease-in-out;

  -webkit-transition: width 400ms ease-out;
  -ms-transition: width 400ms ease-out;
  transition: width 400ms ease-out;

  cursor: pointer;
}

.at-selected {
  color: $black;
  border-bottom-color: $black;
  width: 200px;
}

.at-selected .arrow {
  opacity: 1;
  transform: rotate(0deg);
}

.dropdown {
  display: flex;
  width: 100%;

  justify-content: space-between;
}

.arrow {
  opacity: 0;
  transform: rotate(90deg);

  -webkit-transition: transform 400ms ease-out;
  -ms-transition: transform 400ms ease-out;
  transition: transform 400ms ease-out;
}

.container:hover .arrow {
  opacity: 1;
  transform: rotate(0deg);

  -webkit-transition: transform 400ms ease-out;
  -ms-transition: transform 400ms ease-out;
  transition: transform 400ms ease-out;
}

.options {
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50px;
  left: 0px;

  width: 100%;

  padding: 10px;

  background-color: white;
  -webkit-box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.75);
}

.options > div {
  padding: 10px 2px;
}

.options > div:hover {
  background-color: $light-gray;
}
</style>
