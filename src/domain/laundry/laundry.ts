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

  formattedOperationHours(): string {
    const formattedOpeningHour =
      this.openingHour < 10 ? "0" + this.openingHour : this.openingHour;
    const formattedClosingHour =
      this.closingHour < 10 ? "0" + this.closingHour : this.closingHour;
    return `${formattedOpeningHour}h to ${formattedClosingHour}h`;
  }
}

export { Laundry };
