import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterDataContact } from 'src/app/models/register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() public formRegisterOutput: EventEmitter<FormGroup> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  registerData!: FormGroup;

  public btnDisabled= true;


  ngOnInit() {
    this.registerData = this.formBuilder.group({
      name: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      birthDate: new Date,
      address: {
        street: [null, [Validators.required]],
        number: 0,
        complement: [null, [Validators.required]],
        state: [null, [Validators.required]],
        city: [null, [Validators.required]],
        district: [null, [Validators.required]],
        zipCode: [null, [Validators.required]],
      },
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  public submitForm():void {
    this.formRegisterOutput.emit(this.registerData);
    this.registerData.reset();
  }

  get f() { return this.registerData.controls; }
}
