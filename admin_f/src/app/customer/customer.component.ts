import { Component } from '@angular/core';
const PEOPLE = [
  {
   
    'name': 'ABC xxc',
    'email':'sid.srib@gmail.com',
    'mobileNo':"343322123",
    'gender':'Male'
    
  },
  {
   
    'name': 'ABC xxc',
    'email':'sid.srib@gmail.com',
    'mobileNo':"343322123",
    'gender':'Male'
    
  }
  
];
@Component({
  selector: 'customer',
  templateUrl: './customer.template.html'
})
export class CustomerPage {
    data: any[] = PEOPLE;

}
