import { Address } from "../address/address";
import { Laundry } from "./laundry";

export const laundriesStore = {
  namespaced: true,
  state() {
    return {
      all: [],
    };
  },

  mutations: {
    setLaundries(state, laundries: Laundry[]) {
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
