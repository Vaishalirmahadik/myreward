import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls:['./home.style.scss']
})
export class Home {
  // data: any[] = PEOPLE;
data1:any;
data2:any;
productList1:any;
productList2:any;

constructor(private http:Http, private route: ActivatedRoute,router:Router){

   let headers = new Headers();

       let options = new RequestOptions({ headers: headers });
   
    

        this.http.get('http://localhost:4700/api/v1/brand/getAll',options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res', result)
          this.data1 = result.data.brands.filter((item,i) =>{
            return i <= 3;
          });
           this.data2 = result.data.brands.filter((item,i) =>{
            return i > 3 && i <= 7;
          });

        })

}  

    ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');

    // this.brandId = id;
  //  console.log(id);

               let headers = new Headers();

       let options = new RequestOptions({ headers: headers });
   
    let id="all";

        this.http.get('http://localhost:4700/api/v1/product/getAll/'+id,options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res products', result)
             this.productList1 = result.data.products.filter((item,i) =>{
            return item.images.filter((img,i) =>{
            return item.images[i] = "http://localhost:4700"+item.images[i].slice(item.images[i].indexOf("/"));
            })
          });
            this.productList1 = result.data.products.filter((item,i) =>{
            return i <= 3;
          });
          console.log(this.productList1);
          //      this.productList2 = result.data.products.filter((item,i) =>{
          //   return item.images.filter((img,i) =>{
          //   return item.images[i] = "http://localhost:4700"+item.images[i].slice(item.images[i].indexOf("/"));
          //   })
          // });
            this.productList2 = result.data.products.filter((item,i) =>{
            return i > 3 && i < 7;
          });
          console.log("sss",this.productList2);
          


          // this.images = this.images.map(i =>{
          //    return "http://localhost:4700"+i.slice(i.indexOf("/"))
          //  })
          // this.data = result.data.brands;

        })

        //   this.http.get('http://localhost:4700/api/v1/brand/get/'+id,options)
        // .map(res => res.json())
        // .subscribe(result =>{
        //    console.log('res', result)

        //    this.brandName = result.data.name;
      
        // })
    }

}


