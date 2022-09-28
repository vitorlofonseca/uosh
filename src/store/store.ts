import { reactive } from "vue";
import { Address } from "../domain/address/address";
import { Laundry } from "../domain/laundry/laundry";
import { createStore } from "vuex";

const laundries = {
  namespaced: true,
  state() {
    return {
      all: [],
    };
  },

  mutations: {
    setLaundries(state, laundries) {
      state.all = laundries;
    },
  },

  actions: {
    async loadAll(ctx) {
      const res = await fetch("/api/laundries");
      const responseJson = await res.json();
      const laundries = responseJson.map((laundry: any) => {
        const laundryObject = Object.assign(new Laundry(), laundry);
        laundryObject.address = Object.assign(
          new Address(),
          laundryObject.address
        );
        return laundryObject;
      });

      ctx.commit("setLaundries", laundries);
    },
  },

  getters: {},
};

export const store = createStore({
  modules: {
    laundries,
  },
});
