<script lang="ts">
import { store } from "@/store/store";
import LaundryCard from "../../components/laundry-card/laundry-card.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";

export default {
  setup() {
    const store = useStore();

    onMounted(() => store.dispatch("laundries/loadAll"));

    return { laundries: computed(() => store.state.laundries.all) };
  },
  components: { LaundryCard },
};
</script>

<template>
  <div class="l-section">
    <h2>Favorite Laudries</h2>

    <div class="l-favorite-laundries">
      <LaundryCard v-for="laundry in laundries" :laundry="laundry" />
    </div>
  </div>

  <div class="l-section">
    <h2>Nearest unbusy laundries</h2>

    <img
      class="c-laundries-map"
      src="https://developers.google.com/static/maps/documentation/android-sdk/images/utility-markercluster.png"
    />
  </div>
</template>

<style scoped lang="scss">
.l-section:not(:first-child) {
  margin-top: 40px;
}

.l-favorite-laundries {
  display: flex;
  gap: 22px;
  overflow: auto;
  margin-right: -30px;
  padding-right: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.c-laundries-map {
  width: 100%;
  height: 585px;
  object-fit: cover;
}
</style>
