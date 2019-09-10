<template>
  <div 
    class="content column is-three-fifths is-offset-one-fifth is-size-1 banner is-size-3-mobile content-box animated delay-1s fadeIn"
  >
    <span style="color:#efecca">“</span> 
    <span id="text" /> 
    <span style="color:#efecca">”</span>
    <span><br> - </span>
    <span id="author" />
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

  mounted: async function() {
    await $.getJSON(
      'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
      function(quote) {
        // eslint-disable-next-line no-console
        // console.log(quote.quoteText)
        if (quote.quoteAuthor === '') quote.quoteAuthor = 'Mysterious Person'
        $('#text').text(quote.quoteText)
        $('#author').text(quote.quoteAuthor)
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.banner {
  font-family: 'Sree Krushnadevaraya';
}

.content-box {
  overflow: hidden;
  transition: height 0.66s ease-out;
}
</style>
