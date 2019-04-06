<template>
  <div :class="{'animated fadeIn': lazyLoad}">
    <section class="section container-box">
      <div class="columns box-padding">
        <div class="column text-box title is-size-1 is-size-3-mobile has-text-centered-mobile">
          <span>I am a web developer.</span>
        </div>
        <div class="column svg-box is-three-fifths">
          <img class="svg-1" src="../assets/svg/dev.svg" alt="">
        </div>
      </div>
    </section>

    <section class="section container-box">
      <div class="columns reverse-row-order box-padding">
        <div class="column text-box title is-size-1 is-size-3-mobile has-text-right has-text-centered-mobile">
          <span>I am a student.</span>
        </div>

        <div class="column svg-box is-three-fifths">
          <img class="svg-2" src="../assets/svg/education.svg" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  components: {},
  data: function() {
    return {
      lazyLoad: false
    }
  },
  asyncData() {
    return (
      client
        .getEntries({
          content_type: 'post',
          order: '-sys.createdAt'
        })
        .then(entries => {
          // eslint-disable-next-line no-console
          // console.log(entries.items)

          return {
            posts: entries.items
          }
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    )
  },
  mounted: function() {
    this.lazyLoad = true
  }
}
</script>

<style lang="scss" scoped>
$black: #4a4a4a;

.container-box {
  height: 80vh;
  position: relative;
}

.box-padding {
  padding: 6vh 12vw;
}

.svg-box {
  margin-top: 2vh;
}

.svg-2 {
  height: 90%;
}

.reverse-row-order {
  flex-direction: row-reverse;
}
</style>
