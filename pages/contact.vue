<template>
  <section class="container">
    <form class="pt-5">
        <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="name">
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="email">
            </div>
        </div>
    </form>
  </section>
</template>

<script>

export default {
  // fetch ({ store, redirect }) {
  //   console.log( store.state);
  //   if (!store.state.auth) {
  //     // return redirect('/')
  //     console.log("not conn");
  //   }
  // },
  head () {
    return {
      title: "Vue Framework - Contact",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  middleware: 'auth'
}
</script>

<style>
</style>

