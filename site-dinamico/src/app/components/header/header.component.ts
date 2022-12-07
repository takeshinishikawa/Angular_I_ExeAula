import { Component, Input } from '@angular/core';
import { FormDataContact } from 'src/app/models/form-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input () public search!: string;

}
