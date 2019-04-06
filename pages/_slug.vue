<template>
  <div
    class="full-page"
    :class="{'animated fadeIn': lazyLoad}"
  >
    <section v-scroll-reveal.reset class="section is-medium container-box">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="container columns is-fluid"> 
        <div class="content column is-three-fifths is-offset-one-fifth content-box">
          <h1 class="title is-size-1">
            {{ post.fields.title }}
          </h1>
          <hr>
          <div class="columns is-mobile is-vcentered">
            <div
              :style="{ backgroundImage: 'url(' + post.fields.author.fields.portrait.fields.file.url + ')' }" 
              class="avatar column is-narrow"
            />
            <div class="column">
              <p class="is-size-4 has-text-weight-semibold is-family-monospace avatar-text">
                {{ post.fields.author.fields.name }}
              </p>
              <p class="is-size-6 has-text-weight-semibold is-family-monospace avatar-text">
                {{ post.sys.createdAt | formatDate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section
      v-scroll-reveal.reset
      :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(' + post.fields.slugImage.fields.file.url + ')' }" 
      class="hero is-info is-fullheight bg-image"
    />
    
    <section v-scroll-reveal.reset class="section container-box">
      <hr>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="container columns is-fluid"> 
        <div class="content column is-three-fifths is-offset-one-fifth content-box">
          <vue-markdown>{{ post.fields.content }}</vue-markdown>
        </div>
      </div>
    </section>
    
    <section class="section container-box">
      <hr>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="container columns is-fluid"> 
        <div class="content column is-three-fifths is-offset-one-fifth content-box">
          <vue-disqus shortname="flashcms" :identifier="post.fields.slug" url="https://flashcms.netlify.com/" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'

export default {
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format('lll')
    }
  },
  components: {
    'vue-markdown': VueMarkdown
  },
  data: function() {
    return {
      lazyLoad: false
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
    return {
      title: this.post.fields.title
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

.bg-image {
  background-position: center;
  background-size: cover;
}
</style>
