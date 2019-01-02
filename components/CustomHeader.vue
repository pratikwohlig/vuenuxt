<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link to="/" class="navbar-brand">Vue Framework {{auth}}</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" active-class="active" exact>Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact" class="nav-link" active-class="active" exact>Contact</nuxt-link>
          </li>
        </ul>
        <button @click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<style>
</style>
<script>

export default {
  data: function () {
    return {
      auth: ""
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
        .then(() => this.$router.replace({ path: 'login' }))
      } catch (e) {
        console.log(e);
        this.formError = e.message
      }
    }
  },
  created: function () {
    if(process.browser) {
      this.auth = localStorage.getItem("auth");
      console.log(this.auth);
    }
  }
}
</script>
