<script setup lang="ts">
// import { usePageSwiper } from "../src"

// const next = () => pageSwiperRouter.push("/page2")
</script>

<template>
  <div class="page">
    <p v-for="index in 30" :key="index">page2: balabalbalbalblablablalbalb {{ index }}</p>
    <!-- <button @click="next">next</button> -->
  </div>
</template>
