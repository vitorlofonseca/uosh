<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Topbar from "./components/topbar/topbar.vue";
import { registerMockServer } from "./mocks/mockServer";

registerMockServer();
</script>

<template>
  <header>
    <Topbar />
  </header>

  <div class="c-body-container">
    <RouterView />
  </div>
</template>

<style scoped>
.c-body-container {
  margin: 30px;
}
</style>
