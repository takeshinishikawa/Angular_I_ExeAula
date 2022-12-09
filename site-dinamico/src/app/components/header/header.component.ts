import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormDataContact } from 'src/app/models/form-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input () public search!: string;
  @Output () public searchEventEmitter : EventEmitter<string> = new EventEmitter<string>()
  //public value = "";

  searchSubmitted() {
    this.searchEventEmitter.emit(this.search);
  }
}
