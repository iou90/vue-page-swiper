<script setup lang="ts">
import { usePageSwiper } from "../src"

const { push, back } = usePageSwiper()

const next = () => push("/page3")
const goBack = () => back()
</script>

<template>
  <div class="page page2">
    <div class="title">Page 2</div>
    <button @click="next">next</button>
    <button @click="goBack">back</button>
  </div>
</template>

<style scoped>
.page2 {
  background-color: rgb(211, 122, 7);
}
</style>
