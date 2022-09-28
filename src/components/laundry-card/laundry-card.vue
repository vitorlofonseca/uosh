<script lang="ts">
import { Laundry } from "@/domain/laundry/laundry";
import Tag from "../tag/tag.vue";

export default {
  props: {
    laundry: Laundry,
  },
  components: {
    Tag,
  },
};
</script>
<template>
  <div class="c-laundry">
    <div class="c-laundry__logo">
      <img alt="Laundry logo" v-bind:src="laundry.logo" />
    </div>
    <div class="c-laundry-data">
      <div class="c-laundry__name">{{ laundry.name }}</div>
      <div class="c-laundry__address">
        {{ laundry.address.getShortFormattedAddress() }}
      </div>
      <div class="c-laundry__operation-hours">
        {{ laundry.formattedOperationHours() }}
      </div>
      <div class="c-laundry__statuses">
        <Tag :content="'Busy'" :color="'red'" />
        <Tag :content="'Busy'" :color="'green'" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.c-laundry {
  border: 1px solid;
  width: 262px;
  border: 1px solid var(--black);
  border-radius: 25px;
  min-width: 260px;

  .c-laundry-data {
    padding: 12px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  &__logo {
    height: 200px;

    img {
      border-radius: 25px 25px 0 0;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  &__name {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  &__address,
  &__operation-hours {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  &__statuses {
    display: flex;
    gap: 10px;
  }
}
</style>
