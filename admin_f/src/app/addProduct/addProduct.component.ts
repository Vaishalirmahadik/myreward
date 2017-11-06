import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';

declare let jQuery:any;
@Component({
  selector: 'addProduct',
  templateUrl: './addProduct.template.html',
  styleUrls:['./addProduct.style.scss']
})
export class AddProductPage {

showFileNames:any;
editorContent:any;
filesToUpload: Array<File> = [];
fileLogoUpload:any;
name:any;
videoLink:any;
videoLinkList:any=[];
category:any;
categoryList:any=[];
nAvailable:any;
fbLink:any;
linkedInLink:any;
twitterLink:any;
location:any;
locationList:any=[];
model:any;
permonthperuser:any;
perweekperuser:any;
perdayperuser:any;
brandId:any;
survey:any;
surveyList:any=[];
minAge:any;
maxAge:any;





constructor(private route: ActivatedRoute,private http:Http){
     this.editorContent = 'My Document\'s Description'
         this.model = {
            sex: "both"
        };
    

}

 ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.brandId = id;
   console.log(id);
  }
     onChange(event: any) {
    let files = [].slice.call(event.target.files);
    
    this.showFileNames = files;

     this.filesToUpload = <Array<File>>[].slice.call(event.target.files);
     console.log(this.filesToUpload);
     
    //  let files = [].slice.call(event.target.files);
  }

  // onChangeLogo(event: any){
  //    this.fileLogoUpload = [].slice.call(event.target.files);
  //    console.log(this.fileLogoUpload);

  // }

  addVideo(){
    this.videoLinkList.push(this.videoLink);
  }
  addCategory(){
    this.categoryList.push(this.category);
  }
  addLocation(){
     this.locationList.push(this.location);
  }
  addSurvey(){
     this.surveyList.push(this.survey);
    
  }
  sub(){
      console.log(this.editorContent);
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    const fileLogo:any = this.fileLogoUpload;
    console.log(files,fileLogo);

    for(let i =0; i < files.length; i++){
        formData.append("imgStore", files[i], "img");
    }

    
        // formData.append("imgStore", fileLogo[0], "logo");
    
    console.log('form data variable :   '+ formData.toString());
      let info = {
        name: this.name,
        description: this.editorContent,
        videos: this.videoLinkList,
        category: this.categoryList,
        location: this.locationList,
        fbLink: this.fbLink,
        updatedBy: undefined,
        brand:this.brandId,
        no_of_available_items:this.nAvailable,
        total_Qunatity:this.nAvailable,
        survey:this.surveyList,
        target_audience:{
          "age":{
            "min":this.minAge,
            "max":this.maxAge
          },
          "gender":this.model.sex,
          "location":this.locationList
        }
      };
      
    


        formData.append('data', JSON.stringify(info));
         let headers = new Headers();
    // headers.append('content-type', 'multipart/formdata');
    let options = new RequestOptions({ headers: headers });
   
    // formData.append("uploads[]", files[0], files[0]['name']);
    // this.address.documents = files.toString();

        this.http.post('http://localhost:4700/api/v1/product/create', formData,options)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
    // this.filesToUpload = <Array<File>>fileInput.target.files;
    //  let files = [].slice.call(event.target.files);
    
    // this.showFileNames = files;
    //this.product.photo = fileInput.target.files[0]['name'];
}
}
