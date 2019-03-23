<template>
  <!--
  <div
    class="post column is-vertical"
  >
    <article
      :style="{ backgroundImage: 'url(' + postUrl + ')' }"
      class="tile is-child notification is-primary"
    >
      <nuxt-link :to="postSlug">
        {{ postTitle }}
      </nuxt-link>
    </article>
  </div>
  -->

  <div class="column is-6">
    <div class="card large">
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
          {{ postSlug }}
          <div class="background-icon">
            <span class="icon-twitter" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style lang="scss">
</style>
