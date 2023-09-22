<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from './views/headermuf.vue'
import cardmovie from './components/cardmovie.vue'
</script>

<template>
  
  <div class="header">
    <headermuf></headermuf>
    <div class="main m-3 p-3">
      <h2>NEW MOVIES</h2>
        <cardmovie></cardmovie>
    </div>
    <div class="footer"></div>

  </div>
</template>

<style scoped></style>
