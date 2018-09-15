<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link to="/" class="navbar-brand">Vue Framework</nuxt-link>
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
      </div>
    </nav>
  </header>
</template>

<style>
</style>
