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

      <section
        v-scroll-reveal.reset
        :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(' + contentImageUrl + ')' }"
        class="hero is-info is-fullheight bg-image"
      />

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
  head() {
    // eslint-disable-next-line no-console
    // console.log(this.post)
    if (this.post.fields.contentImage)
      this.contentImageUrl = this.post.fields.contentImage[0].fields.file.url
    else this.contentImageUrl = this.post.fields.slugImage.fields.file.url

    return {
      title: this.post.fields.title
    }
  },
  metaInfo() {
    return {
      title: this.lazyLoad ? 'Loading...' : this.post.fields.title,
      meta: [
        {
          vmid: 'og:description',
          name: 'og:description',
          content: this.post.fields.title
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

.hidden {
  visibility: hidden;
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
</style>
