import { Component, OnInit } from '@angular/core';
import { FormDataContact } from 'src/app/models/form-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public btnDisabled= true;
  public formData: FormDataContact = {
    email: "",
    message: "",
  };

  ngOnInit() {
    setTimeout(() => {
      this.btnDisabled = false
    }, 5000);
  }

  public submitForm():void {
    console.log("Formulário enviado!");
    console.log(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value);
  }
}
