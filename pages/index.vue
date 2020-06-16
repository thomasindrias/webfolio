<template>
  <div>
    <div :class="{'animated fadeIn': lazyLoad}">
      <section class="section container-box">
        <div class="container quote columns">
          <quote
            v-scroll-reveal.reset
            class="animated delay-1s fadeIn"
          />
        </div>
      </section>
      <section
        :class="{'hidden animated fadeIn': !lazyLoad}"
        class="section"
      >
        <dropdown @genre="toggleDropdown" />
        <hr>
        <div class="container">
          <div class="columns">
            <div class="results columns is-multiline">
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
              <div
                v-scroll-reveal.reset
                :class="{'not-hidden animated fadeIn delay-1s': lazyLoad}"
                class="end column has-text-centered is-centered is-fullwidth"
              >
                <span class="title">No more posts ✍️</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import Quote from '~/components/extra/Quote.vue'
import blogCard from '~/components/blogCard.vue'
import Dropdown from '~/components/extra/Dropdown.vue'

export default {
  components: {
    quote: Quote,
    'blog-card': blogCard,
    Dropdown
  },
  data: function() {
    return {
      lazyLoad: false,
      genre: null
    }
  },
  computed: {
    posts: function() {
      return !this.genre
        ? this.rawPosts
        : this.rawPosts.filter(item => {
            return item.fields.genre === this.genre
          })
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
            rawPosts: entries.items
          }
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    )
  },
  mounted: function() {
    this.lazyLoad = true
  },
  methods: {
    toggleDropdown(option) {
      if (option === 'All') this.genre = null
      else this.genre = option
    }
  }
}
</script>

<style lang="scss" scoped>
$black: #4a4a4a;

.hidden {
  visibility: hidden;
}

.not-hidden {
  visibility: visible;
}

.quote {
  min-height: 40vh;
}

.results {
  width: 100%;
}

.end {
  margin-top: 4rem;
}
</style>
