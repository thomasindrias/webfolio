<template>
  <div class="full-page">
    <div :class="{'animated fadeIn': lazyLoad}">
      <section v-scroll-reveal.reset class="section is-medium container-box">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="container columns is-fluid">
          <div class="content column is-three-fifths is-offset-one-fifth content-box">
            <h1 class="title is-size-1 is-size-2-mobile">
              {{ post.fields.title }}
            </h1>
            <hr>
            <div class="columns is-mobile is-vcentered">
              <div
                :style="{ backgroundImage: 'url(' + post.fields.author.fields.portrait.fields.file.url + ')' }"
                class="avatar column is-narrow"
              />
              <div class="column">
                <p
                  class="is-size-4 is-size-5-mobile has-text-weight-semibold is-family-monospace avatar-text"
                >
                  {{ post.fields.author.fields.name }}
                </p>
                <p
                  class="is-size-6 is-size-7-mobile has-text-weight-semibold is-family-monospace avatar-text"
                >
                  {{ post.sys.createdAt | formatDate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-scroll-reveal.reset class="hero hero-container is-info is-fullheight">
        <div
          :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(' + contentImageUrl + ')' }"
          class="hero is-info is-fullheight bg-image kenburns-bottom"
        />
      </section>

      <section class="section container-box">
        <hr>
        <div class="container columns is-fluid">
          <div class="content column is-three-fifths is-offset-one-fifth content-box content-text">
            <vue-markdown>{{ post.fields.content }}</vue-markdown>
          </div>
        </div>
      </section>

      <section class="section container-box">
        <hr>
        <div class="container columns is-fluid">
          <div class="content column is-three-fifths is-offset-one-fifth content-box">
            <disqus ref="disqus" :shortname="shortName" :identifier="shortName + post.fields.slug" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Disqus from 'vue-disqus/dist/vue-disqus.vue'
import VueMarkdown from 'vue-markdown'
import client from '~/plugins/contentful'

export default {
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format('lll')
    }
  },
  components: {
    'vue-markdown': VueMarkdown,
    Disqus
  },
  data: function() {
    return {
      lazyLoad: false,
      shortName: 'flashcms',
      id: 'unique',
      contentImageUrl: ''
    }
  },
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }

    return (
      client
        .getEntries({
          content_type: 'post',
          'fields.slug': params.slug
        })
        .then(entries => {
          return {
            post: entries.items[0],
            lazyLoad: true
          }
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    )
  },
  methods: {
    truncate: function(text, stop, clamp) {
      let start = 0
      if (text.charAt(0) === '#') start = 1
      return (
        text.slice(start, stop) + (stop < text.length ? clamp || '...' : '')
      )
    }
  },
  head() {
    // eslint-disable-next-line no-console
    // console.log(this.post)
    if (this.post.fields.contentImage)
      this.contentImageUrl = this.post.fields.contentImage[0].fields.file.url
    else this.contentImageUrl = this.post.fields.slugImage.fields.file.url

    return {
      title: this.post.fields.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.truncate(this.post.fields.content, 120)
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.fields.slugImage.fields.file.url
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radius-size: 14px;

*,
*:before,
*:after {
  box-sizing: border-box;
}

img {
  max-height: 600px !important;
}

.hidden {
  visibility: hidden;
}

.hero-container {
  overflow: hidden;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.avatar-text {
  margin-bottom: 0 !important;
}

.content-text {
  font-size: 20px;
  line-height: 40px;
}

.bg-image {
  background-position: center;
  background-size: cover;
}

.kenburns-bottom {
  -webkit-animation: kenburns-bottom 10s ease-in-out reverse both;
  animation: kenburns-bottom 10s ease-in-out reverse both;
}

/* ----------------------------------------------
 * Generated by Animista on 2020-1-7 23:26:4
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation kenburns-bottom
 * ----------------------------------------
 */
@-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
    transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
    transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
}
@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
    transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
    transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
}
</style>
