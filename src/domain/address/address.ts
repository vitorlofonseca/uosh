export class Address {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  country: string;
  postalCode: string;

  getShortFormattedAddress(): string {
    return `${this.street}, ${this.number}`;
  }
}
