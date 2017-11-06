import { Component } from '@angular/core';
const PEOPLE = [
  {
   
    'orderid': '2323453',
    'productName':'sadc',
    'status':"Dispached",
    'dateOfOrder':'23/2/2017'
    
  },
  {
   
  'orderid': '2323453',
    'productName':'sadc',
    'status':"Dispached",
    'dateOfOrder':'23/2/2017'
  }
  
];
@Component({
  selector: 'orders',
  templateUrl: './orders.template.html'
})
export class OrdersPage {
    data: any[] = PEOPLE;

}
