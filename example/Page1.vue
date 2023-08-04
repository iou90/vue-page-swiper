<script setup lang="ts">
import { usePageSwiper } from "../src"

const { push } = usePageSwiper()

const next = () => push("/page2")
</script>

<template>
  <div class="page">
    <p v-for="index in 100" :key="index">page1: balabalbalbalblablablalbalb {{ index }}</p>
    <button @click="next">next</button>
  </div>
</template>
