import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: './account.template.html',
  styleUrls:['./account.style.scss']
})
export class AccountPage {

    radioModel='given';
    email:any;
    name:any;
    mobile_no:any;
    editName:any=false;
    editEmail:any=false;
addressType:any="Home";
nameAd:any;
mobile_noAd:any;
address:any;
state:any;
city:any;
country:any;
pincode:any
near_by:any;
label:any;
addressess:any=[];

    editMobile:any=false;
    showDialog:any=false;

    constructor(private http:Http, private route: ActivatedRoute,router:Router){

      let ls:any = localStorage.getItem("currentUser");
      ls=JSON.parse(ls);
      console.log("account ----- ",ls);
      if(ls != null){
     let headers = new Headers();
       let options = new RequestOptions({ headers: headers });
        this.http.get('http://localhost:4700/api/v1/customer/get/'+ls._id,options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res', result)
           this.name=result.data.name;
           this.mobile_no = result.data.mobile_no;
           this.email = result.data.email;
           this.addressess = result.data.addressess
        })
        

      }
   

      

}

clickEditName(){
  this.editName = !this.editName;
}

clickEditEmail(){
  this.editEmail = !this.editEmail;
}
clickEditMobile(){
  this.editMobile = !this.editMobile;
}

clickSave(){

  let headers = new Headers();
       let options = new RequestOptions({ headers: headers });
        let ls:any = localStorage.getItem("currentUser");
      ls=JSON.parse(ls);
        this.http.post('http://localhost:4700/api/v1/customer/update',{

          name:this.name,
          email:this.email,
          mobile_no:this.mobile_no,
          _id:ls._id
        },options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res saved success', result)
           if(this.editName == true){
             this.editName =false;
           }
           if(this.editMobile == true){
             this.editMobile =false;
           }
           if(this.editEmail == true){
             this.editEmail =false;
           }
         
        })

}
 addNewAddress(){

   this.showDialog = !this.showDialog;

 }

 submitNewAddress(){
     let ls:any = localStorage.getItem("currentUser");
      ls=JSON.parse(ls);
     let headers = new Headers();
       let options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:4700/api/v1/customer/update',{
          _id:ls._id,
          obj:{
            name:this.nameAd,
            lable:this.label,
            address:this.address,
            mobile_no:this.mobile_noAd,
            address_type:this.addressType,
            state:this.state,
            city:this.city,
            country:this.country,
            pincode:this.country,
            near_by:this.near_by

          }
        },options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res address add', result)
           alert("address added success");
          this.showDialog = !this.showDialog;
          this.http.get('http://localhost:4700/api/v1/customer/get/'+ls._id,options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res', result)
           this.name=result.data.name;
           this.mobile_no = result.data.mobile_no;
           this.email = result.data.email;
           this.addressess = result.data.addressess
        })
          
        })

 }
 deleteAddress(i,a){

      let ls:any = localStorage.getItem("currentUser");
      ls=JSON.parse(ls);
     let headers = new Headers();
       let options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:4700/api/v1/customer/delete/address',{
          _id:ls._id,
          address:{
         _id:i._id

          }
        },options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res address del', result)
           alert("address deleted success");
           this.addressess.splice(a,1);
        })

 }


}
