import { CookieServeService } from './../cookie-serve.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-add-cookie',
  templateUrl: './add-cookie.component.html',
  styleUrls: ['./add-cookie.component.css']
})
export class AddCookieComponent implements OnInit {
  addForm:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,
              private cookieServe:CookieServeService) { }

  response:any;
  ngOnInit() {
    this.addForm=this.formBuilder.group({
      cafe:['',[Validators.required]],
      cookieName:['',Validators.required],
      price:['',Validators.required]
    })
    this.cookieServe.getAllCafe().subscribe(data=>{
      this.response=data.body;
      console.log(this.response)
    })
  }

  get f(){return this.addForm.controls;}


  onSubmit(){

  this.cookieServe.addCookie(this.addForm.get('cafe').value,this.addForm.get('cookieName').value,this.addForm.get('price').value)
      .subscribe(data=>{
        this.response=data;
        alert("Cookie Added Successfully")
      })

  }

}
