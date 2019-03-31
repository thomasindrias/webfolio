<template>
  <div>
    <section class="section container-box">
      <div class="container columns is-fluid"> 
        <quote />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <hr>
          <div class="columns is-multiline animated delay-1s fadeIn">
            <blog-card
              v-for="(post, index) in posts"
              :key="index"
              :post-link="post.fields.slug"
              :name="post.fields.title"
              :image="post.fields.slugImage.fields.file.url"
              :desc="post.fields.content"
              :author="post.fields.author.fields.name"
              :category="post.fields.genre"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import Quote from '~/components/Quote.vue'
import blogCard from '~/components/blogCard.vue'

export default {
  components: {
    quote: Quote,
    'blog-card': blogCard
  },
  data: function() {
    return {
      quote: 'Sorry, no quote today :('
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
