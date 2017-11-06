import { Component } from '@angular/core';
const PEOPLE = [
  {
   
    'productName': 'A',
    'email':'sid@gamil.com',
    'mobileNo':"9882273899",
    'type':'Video'
    
  },
  {
   
  
    'productName': 'B',
    'email':'sid@gamil.com',
    'mobileNo':"9882273899",
    'type':'Video'
    
  }
  
];
@Component({
  selector: 'feedbacks',
  templateUrl: './feedbacks.template.html'
})
export class FeedbacksPage {
    data: any[] = PEOPLE;

}
