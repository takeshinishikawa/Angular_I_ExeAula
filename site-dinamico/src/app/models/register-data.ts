import { AddressData } from "./address-data-model.ts";

export interface RegisterDataContact {
  name: string;
  cpf: string;
  birthDate: Date;
  address: AddressData;
  phone: string;
  email: string;
  user: string;
  password: string;
}
