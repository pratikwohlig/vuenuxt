<template>
  <section class="container">
    <div class="pt-5">
      <h1>Welcome to Vue Framework</h1>
      <p>And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
      <nuxt-link class="btn btn-outline-secondary" to="/contact">Contact</nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  head () {
    return {
      title: "Vue Framework - Home",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>
</style>

