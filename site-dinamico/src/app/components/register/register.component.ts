import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RegisterDataContact } from 'src/app/models/register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() public formRegisterOutput: EventEmitter<RegisterDataContact> =
    new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  public formRegisterData!: FormGroup;
  public formData!: RegisterDataContact;

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.formRegisterData = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      birthDate: new FormControl(null, [Validators.required, Validators.min((new Date).getDate())]),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        number: new FormControl(0, [Validators.required, Validators.min(1)]),
        complement: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required, Validators.minLength(2)]),
        city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        district: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        zipCode: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      }),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      user: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public submitForm(): void {
    this.formData = this.formRegisterData.getRawValue();
    this.formRegisterOutput.emit(this.formData);
    this.formRegisterData.reset();
  }

  get f() {
    return this.formRegisterData.controls;
  }
}
