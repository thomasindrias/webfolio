<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-1 is-10">
          <h1 class="title is-2">
            {{ title }}
          </h1>
          <div />
          <hr>
          <div class="columns is-multiline">
            <post
              v-for="(post, index) in posts"
              :key="index"
              :post-title="post.fields.title"
              :post-slug="post.fields.slug"
              :post-url="post.fields.slugImage.fields.file.url"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import post from '~/components/Post.vue'

export default {
  components: {
    post
  },
  data: function() {
    return {
      title: 'Latest Posts'
    }
  },
  asyncData() {
    return (
      client
        .getEntries({
          content_type: 'post',
          order: 'sys.createdAt'
        })
        .then(entries => {
          return {
            posts: entries.items
          }
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    )
  }
}
</script>
