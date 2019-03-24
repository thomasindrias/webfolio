<template>
  <div class="column is-6">
    <div class="card large mosaic">
      <nuxt-link :to="postSlug">
        <div class="card-image">
          <figure class="image">
            <img :src="postUrl" alt="Image">
          </figure>
        </div>
      </nuxt-link>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <nuxt-link :to="postSlug">
              <p class="title is-4 no-padding">
                {{ postTitle }}
              </p>
            </nuxt-link>
          </div>
        </div>
        <div class="content">      
          <p class="has-text-grey	 has-text-right">
            {{ postDate | formatDate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format('lll')
    }
  },
  props: {
    postTitle: {
      type: String,
      required: true
    },
    postUrl: {
      type: String,
      required: true
    },
    postSlug: {
      type: String,
      required: true
    },
    postContent: {
      type: String,
      required: true
    },
    postDate: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
