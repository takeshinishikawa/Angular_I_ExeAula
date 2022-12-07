import { AddressSectionData } from './../../models/address-section-data.model';
import { AddressData } from './../../models/address-data-model.ts';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input () public addressSectionData!: AddressSectionData;

  /*public addressData: AddressData = {
    street: "Rua Galvão Bueno",
    number: 123,
    complement: "apto 1",
    state: "SP",
    city: "São Paulo",
    district: "Liberdade",
    zipCode: "01506-000"
  }*/
}
