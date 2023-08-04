<script setup lang="ts">
import { usePageSwiper } from "../src"

const { replace, back } = usePageSwiper()

const replaceTo = () => replace("/", "pageFade", "out-in")
const goBack = () => back()
</script>

<template>
  <div class="page page2">
    <div class="title">Page 3</div>
    <button class="replace" @click="replaceTo">replace with page1</button>
    <button @click="goBack">back</button>
  </div>
</template>

<style scoped>
.page2 {
  background-color: rgb(0, 140, 255);
}

.replace {
  width: 300px;
}
</style>
