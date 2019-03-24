<template>
  <div>
    <section class="hero is-primary has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <nuxt-link to="/">
              Thomas Indrias
            </nuxt-link>
          </h1>
          <h2 class="subtitle">
            Welcome to my portfolio!
          </h2>
        </div>
      </div>
    </section>
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
                :post-content="post.fields.content"
                :post-url="post.fields.slugImage.fields.file.url"
                :post-date="post.sys.createdAt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
          // eslint-disable-next-line no-console
          // console.table(entries.items)
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

<style lang="scss" scoped>
</style>
