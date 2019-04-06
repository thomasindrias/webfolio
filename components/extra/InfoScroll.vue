<template>
  <div class="roles is-size-4-mobile">
    <div>
      <section class="section container-box">
        <div class="container">
          <div
            class="columns is-multiline"
          >
            <div class="content column is-half is-offset-one-quarter box-padding">
              <img src="/../../assets/svg/dev.svg" alt="">
            </div>
            <div class="content is-half is-offset-one-quarter column">
              blksand
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <div>
      I am a designer.
    </div>
    
    <div>
      I am a student.
    </div>
    
    <div>
      I am an aspiring individual.
    </div>
  </div>
</template>

<script>
import JQuery from 'jquery'
const $ = JQuery
export default {
  name: 'Quote',
  data: function() {
    return {
      quote: {
        desc: 'Unfortunately, no quote today :(',
        author: 'Curiosity Cat'
      }
    }
  },

  mounted: function() {
    let current = 1 // keeps track of the current div
    const height = $('.roles').height() // the height of the roles div
    const numberDivs = $('.roles').children().length // the number of children of the roles div
    const first = $('.roles div:nth-child(1)') // the first div nested in roles div
    setInterval(function() {
      const number = current * -height
      first.css('margin-top', number + 'px')
      if (current === numberDivs) {
        first.css('margin-top', '0px')
        current = 1
      } else current++
    }, 2500)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sree+Krushnadevaraya');

$black: #4a4a4a;

.roles {
  font-size: 30px;
  height: 50px;
  vertical-align: middle;
  overflow: hidden;
}

.roles div {
  height: 50px;
  transition: margin-top 1s ease-in-out;
}

.svg-1 {
  position: relative;
  height: 50vw;
}

.box-padding {
  padding: 2rem;
}
</style>
