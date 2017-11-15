import { Component } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';

@Component({
  selector: 'addBrand',
  templateUrl: './addBrand.template.html',
  styleUrls:['./addBrand.style.scss']
})
export class AddBrandPage {
showFileNames:any;
editorContent:any;
filesToUpload: Array<File> = [];
fileLogoUpload:any;
name:any;
videoLink:any;
videoLinkList:any=[];
category:any;
categoryList:any=[];
headquaters:any;
fbLink:any;
linkedInLink:any;
twitterLink:any;
inti:any;







constructor(private http:Http){
     this.editorContent = 'My Document\'s Description'
            let headers = new Headers();

       let options = new RequestOptions({ headers: headers });
   
    

        this.http.get('http://localhost:4700/api/v1/category/getAll',options)
        .map(res => res.json())
        .subscribe(result =>{
           console.log('res', result)
          this.inti = result.data.category;

        })

}
     onChange(event: any) {
    let files = [].slice.call(event.target.files);
    
    this.showFileNames = files;

     this.filesToUpload = <Array<File>>[].slice.call(event.target.files);
     console.log(this.filesToUpload);
     
    //  let files = [].slice.call(event.target.files);
  }

  onChangeLogo(event: any){
     this.fileLogoUpload = [].slice.call(event.target.files);
     console.log(this.fileLogoUpload);

  }

  addVideo(){
    this.videoLinkList.push(this.videoLink);
  }
  addCategory(){
    this.categoryList.push(this.category);
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

    
        formData.append("imgStore", fileLogo[0], "logo");
    
    console.log('form data variable :   '+ formData.toString());
      let info = {
             name: this.name,
        description: this.editorContent,
        videos: this.videoLinkList,
        category: this.categoryList,
        headquaters: this.headquaters,
        fbLink: this.fbLink,
        twitterLink: this.twitterLink,
        updatedBy: undefined
        };
        formData.append('data', JSON.stringify(info));
         let headers = new Headers();
    // headers.append('content-type', 'multipart/formdata');
    let options = new RequestOptions({ headers: headers });
   
    // formData.append("uploads[]", files[0], files[0]['name']);
    // this.address.documents = files.toString();

        this.http.post('http://localhost:4700/api/v1/brand/create', formData,options)
        .map(files => files.json())
        .subscribe(files => {
          
          alert("Brand Created");
          console.log('files', files)})
}

fileChangeEvent(fileInput: any) {
    // this.filesToUpload = <Array<File>>fileInput.target.files;
    //  let files = [].slice.call(event.target.files);
    
    // this.showFileNames = files;
    //this.product.photo = fileInput.target.files[0]['name'];
}

}
