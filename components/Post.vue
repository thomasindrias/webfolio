<template>
  <div class="post column is-vertical">
    <article
      class="tile is-child notification is-primary"
    >
      <nuxt-link :to="postSlug">
        {{ postTitle }}
      </nuxt-link>
    </article>
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

<style>
</style>
