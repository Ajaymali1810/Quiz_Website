import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  submit(login: any){
    console.log("form submitted", login );
  }
  validateNumberLength(event: KeyboardEvent, phone: any): void {
    const inputValue = (event.target as HTMLInputElement).value;
    
    // Check if the input value exceeds 10 characters
    if (inputValue.length >= 10) {
      event.preventDefault(); // Prevent further input
      phone.control.setValue(inputValue.substring(0, 10)); // Set the value to the first 10 characters
    }
}}
