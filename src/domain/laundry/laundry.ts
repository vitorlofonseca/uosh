import type { Address } from "../address/address";

type OcuppingStatus = "busy" | "unbusy";
type PriceCategory = "cheap" | "expensive";

class Laundry {
  id: number;
  name: string;
  logo: string;
  address: Address;
  openingHour: number;
  closingHour: number;
  ocuppingStatus: OcuppingStatus;
  priceCategory: PriceCategory;
}

export { Laundry };
