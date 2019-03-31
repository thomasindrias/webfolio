<template>
  <div :class="{'hidden animated fadeIn': lazyLoad}">
    <section class="section container-box">
      <div class="container quote columns"> 
        <quote v-scroll-reveal.reset class="animated delay-1s fadeIn" />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div
            class="columns is-multiline"
          >
            <blog-card
              v-for="(post, index) in posts"
              :key="index"
              v-scroll-reveal.reset
              :post-link="post.fields.slug"
              :name="post.fields.title"
              :image="post.fields.slugImage.fields.file.url"
              :desc="post.fields.content"
              :author="post.fields.author.fields.name"
              :category="post.fields.genre"
            />
            <div class="end column has-text-centered">
              <span class="title">No more posts ✍️</span>
            </div>
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
            posts: entries.items,
            lazyLoad: true
          }
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    )
  }
}
</script>

<style lang="scss" scoped>
$black: #4a4a4a;

.hidden {
  visibility: hidden;
}

.quote {
  min-height: 40vh;
}

.end {
  margin-top: 4rem;
}
</style>
