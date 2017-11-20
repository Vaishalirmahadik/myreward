import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'customerDetails',
  templateUrl: './customerDetails.template.html'
})
export class CustomerDetailsPage  {
    data: any[] ;
    customer:any;
    show=false;
    // name:any;
    // email:any;
    // mobile_no:any;
    // age:any;
    // dob:any;
    // state:any;
    // city:any;
    // country:any;
    // actibe:any;
    // gender:any;
    // addresse

//    "_id": "5a09559707a8be2d546145f0",
//     "updated_at": "2017-11-13T08:19:35.313Z",
//     "created_at": "2017-11-13T08:19:35.313Z",
//     "name": "sidharth Srivastava",
//     "email": "9730273887s",
//     "password": "1234",
//     "mobile_no": "34343242",
//     "dob": "1992-11-10T18:30:00.000Z",
//     "state": "Uttar Pradesh",
//     "city": "Lucknow",
//     "country": "India",
//     "is_active": true,
//     "gender": "female",
//     "addressess": [],
//     "interests": [
//         "5a0883b39f2e3f3d45408eb0",
//         "5a07708f392c199c9382ae72",
//         "5a07717fd3e1cba240a89738"
//     ],
    constructor(private http:Http, private route: ActivatedRoute,router:Router){

         let id = this.route.snapshot.paramMap.get('id');

        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        this.http.get('http://localhost:4700/api/v1/customer/admin/get/'+id,options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res customer', result)
           this.show= true;
          this.customer = result.data;
          this.calculateAge();
         })

         

}
calculateAge(){
    var birthdate:any = new Date(this.customer.dob);
    console.log(birthdate,this.customer.dob);
var cur:any = new Date();
var diff = cur - birthdate; // This is the difference in milliseconds
var age = Math.floor(diff/31557600000);
this.customer.age = age; 
console.log(age);
}


}


