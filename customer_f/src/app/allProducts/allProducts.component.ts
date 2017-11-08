import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { AppState } from '../app.service';

@Component({
  selector: 'allProducts',
  templateUrl: './allProducts.template.html',
  styleUrls:['./allProducts.style.scss']
})
export class AllProductsPage {

   data: any;
    brandId:any;
    productList:any;
    brandName:any;
    config:any;
    allInt:any=[];
    allBrands:any=[];
    constructor( private route: ActivatedRoute,private http:Http,appState:AppState){
      this.config = appState;
    }

    ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.brandId = id;
   console.log(id);

               let headers = new Headers();

       let options = new RequestOptions({ headers: headers });
   
    

        this.http.get('http://localhost:4700/api/v1/product/getAll/'+"all",options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res products', result)
          this.productList = result.data.products;
               this.productList = result.data.products.filter((item,i) =>{
            return item.images.filter((img,i) =>{
            return item.images[i] = "http://localhost:4700"+item.images[i].slice(item.images[i].indexOf("/"));
            })
          });
          // this.data = result.data.brands;

        })

          this.http.get('http://localhost:4700/api/v1/brand/getAll',options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res brands', result)
          this.allBrands = result.data.brands;
          

        })

            this.http.get('http://localhost:4700/api/v1/interest/getAll',options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res', result)
          this.allInt = result.data.interests;

        })

        //   this.http.get('http://localhost:4700/api/v1/brand/get/'+id,options)
        // .map(res => res.json())
        // .subscribe(result =>{
        //    console.log('res', result)

        //    this.brandName = result.data.name;
      
        // })
    }

     addToCart(i){


console.log(i); 
let arr=[];

let ls:any = localStorage.getItem("cart");
if(ls == null){

  arr.push(i);
  localStorage.setItem("cart",JSON.stringify(arr));

}else{
  ls = JSON.parse(ls);
  ls.push(i);
  localStorage.setItem("cart",JSON.stringify(ls));
  
}
console.log("ls",localStorage.getItem("cart"));
this.config.setCart();



    }

    submit(){

             let headers = new Headers();

       let options = new RequestOptions({ headers: headers });
   
//     let params: URLSearchParams = new URLSearchParams();
//  params.set('appid', "dd");
//  params.set('cnt', "dsds");


        this.http.get('http://localhost:4700/api/v1/product/getAll/'+"some",{params: {brand: ["5a01c78b584447d36380d24e"], category: ["sdsds","dfdf"]}})
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res products filter', result)
         
          // this.data = result.data.brands;

        })

    }


}
