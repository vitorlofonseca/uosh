<script lang="ts">
export default {
  props: {
    content: String,
    color: String,
  },
};
</script>

<template>
  <div v-bind:class="'c-tag c-tag--' + color">{{ content }}</div>
</template>

<style lang="scss">
.c-tag {
  height: 19px;
  font-size: 12px;
  border-radius: 25px;
  padding: 0 20px;
  width: fit-content;

  &--red {
    background: rgba(var(--utils-red), 0.5);
  }

  &--green {
    background: rgba(var(--utils-green), 0.5);
  }
}
</style>
