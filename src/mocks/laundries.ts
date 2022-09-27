import { Address } from "@/domain/address/address";
import { Laundry } from "@/domain/laundry/laundry";

const mockedLaundries: Laundry[] = [
  Object.assign(new Laundry(), {
    id: 1,
    name: "5 a Sec",
    logo: "https://www.5asec.pt/sites/5asec_pt/files/5asec_share.jpg",
    address: Object.assign(new Address(), {
      street: "Rua Maria do Carmo",
      number: 72,
      neighborhood: "Cedofeita",
      city: "Porto",
      country: "Portugal",
      postalCode: "4050-442",
    }),
    openingHour: 9,
    closingHour: 19,
    ocuppingStatus: "busy",
    priceCategory: "cheap",
  }),
  Object.assign(new Laundry(), {
    id: 2,
    name: "Roupa na mão",
    logo: "https://roupanamao.pt/wp-content/uploads/2018/06/Lavandaria-Roupa-na-M%C3%A3o-Logo01.png",
    address: Object.assign(new Address(), {
      street: "Rua João da Carmelita",
      number: 32,
      neighborhood: "São Mamede de Infesta",
      city: "Matosinhos",
      country: "Portugal",
      postalCode: "7313-982",
    }),
    openingHour: 9,
    closingHour: 19,
    ocuppingStatus: "unbusy",
    priceCategory: "expensive",
  }),
];

export { mockedLaundries };
