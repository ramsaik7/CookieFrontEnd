import { CookieServeService } from './../cookie-serve.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-delete-cookie',
  templateUrl: './delete-cookie.component.html',
  styleUrls: ['./delete-cookie.component.css']
})
export class DeleteCookieComponent implements OnInit {
  deleteForm:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,
              private cookieServe:CookieServeService) { }

  response;
  cookieResponse:any[]=[];
  cookieResp:any[]=[];
  ngOnInit() {
    this.deleteForm=this.formBuilder.group({
      cafe:[''],
      cookie:['']
    })

    this.cookieServe.getAllCafe().subscribe(data=>{
      console.log(data)
      this.cookieResponse=data.body;
      //this.cookieResp=this.cookieResponse[0].cookies;
      console.log(this.cookieResponse);
      console.log(this.cookieResp);
     
    })


  }
  get f(){return this.deleteForm.controls;}

  onSubmit(){
    console.log(this.deleteForm.get('cookie').value);
    this.cookieServe.deleteCookie(this.deleteForm.get('cookie').value)
        .subscribe(data=>{
          this.response=data;
          if(this.response.error==false)
            alert("Cookie Deleted Successfully");
          
        });    
        
  }


  onChangeCookie(cafeValue) {
    this.cookieResp=this.cookieResponse[cafeValue].cookies;
    //this.districtInfo=this.stateInfo[0].districts;
    console.log(this.cookieResp);
    return this.cookieResp;
  }
}



