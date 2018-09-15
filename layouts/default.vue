<template>
  <div>
    <custom-header></custom-header>
    <nuxt class="min-height"/>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader'
import CustomFooter from '@/components/CustomFooter'
export default {
  components: {
    CustomHeader,
    CustomFooter
  }
}
</script>


<style>
.min-height {
    min-height: calc(100vh - 130px);
}
</style>

