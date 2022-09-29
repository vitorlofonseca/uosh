import { createStore } from "vuex";
import { laundriesStore } from "@/domain/laundry/laundry.store";

export const store = createStore({
  modules: {
    laundries: laundriesStore,
  },
});
