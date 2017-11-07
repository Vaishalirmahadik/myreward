import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';
import { AppState } from '../app.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.template.html',
  styleUrls:['./cart.style.scss']
})
export class CartPage {
cartList:any=[];
config:any;
  constructor(private http:Http, private route: ActivatedRoute,router:Router,appState:AppState){
this.config=appState;
    // let arr=[];

let ls:any = localStorage.getItem("cart");
if(ls != null){
  ls = JSON.parse(ls);
  this.cartList = ls;

}
console.log("ls",JSON.parse(localStorage.getItem("cart")));
  }

  remove(i){
    // this.cartList =  this.cartList.splice(i,1);
    let ls:any = localStorage.getItem("cart");
    console.log(i,ls);
    
if(ls != null){
  ls = JSON.parse(ls);
  // this.cartList = ls;
ls = ls.splice(i,1);
localStorage.setItem("cart",JSON.stringify(ls));
this.config.downCart();
   this.cartList =  this.cartList.splice(i,1);


}
  }

}
