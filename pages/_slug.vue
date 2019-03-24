<template>
  <div>
    <section
      :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(' + post.fields.slugImage.fields.file.url + ')' }" 
      class="hero is-info is-medium bg-image"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            {{ post.fields.title }}
          </h1>
        </div>
      </div>
    </section>
    
    <section class="section">
      <hr>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content" v-html="$md.render(post.fields.content)" />
    </section>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }

    return (
      client
        .getEntries({
          content_type: 'post',
          'fields.slug': params.slug
        })
        .then(entries => {
          return { post: entries.items[0] }
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    )
  },
  head() {
    return {
      title: this.post.fields.title
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-position: center;
  background-size: cover;
}
</style>
