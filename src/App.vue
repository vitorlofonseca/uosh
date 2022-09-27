<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Topbar from "./components/topbar/topbar.vue";
</script>

<template>
  <header>
    <Topbar />
  </header>

  <RouterView />
</template>

<style scoped></style>
