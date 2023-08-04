<script setup lang="ts">
import { usePageSwiper } from "../src"

const { push } = usePageSwiper()

const next = () => push("/page2")
</script>

<template>
  <div class="page page1">
    <div class="title">Page 1</div>
    <button @click="next">next</button>
  </div>
</template>

<style scoped>
.page1 {
  background-color: rgb(118, 163, 12);
}
</style>
