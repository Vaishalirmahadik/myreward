import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';
const PEOPLE = [
  {
   
    'name': 'Arts And Music',
    'category':'Category 1, Category 2'
   
    
  },
  {
     'name': 'Swimming',
    'category':'Category 3, Category 4'
    
  }
  
];
@Component({
  selector: 'interests',
  templateUrl: './interests.template.html'
})
export class InterestsPage {
    data: any[] = PEOPLE;

    constructor(private http:Http, private route: ActivatedRoute,router:Router){
    //  this.editorContent = 'My Document\'s Description'
              let headers = new Headers();

       let options = new RequestOptions({ headers: headers });
   
    

        this.http.get('http://localhost:4700/api/v1/interest/getAll',options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res', result)
          this.data = result.data.interests;

        })

          let id = this.route.snapshot.paramMap.get('id');
   console.log(id);

}

}
