import { reactive, type Ref } from "vue";
import { Laundry } from "./laundry";

class LaundryStore {
  public state;

  constructor() {
    const laundries: Laundry[] = [];

    this.state = reactive({
      laundries,
    });
  }

  async loadAllLaundries(): Promise<void> {
    const res = await fetch("/api/laundries");
    this.state.laundries = (await res.json()).map((laundry: any) =>
      Object.assign(new Laundry(), laundry)
    );
  }
}

export const laundryStore = new LaundryStore();
