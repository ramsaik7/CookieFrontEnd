import { Cookie } from './cookie';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieServeService {

  cookie:Cookie;
  constructor(private http:HttpClient) { }
  url="http://localhost:8080/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json'});

  options = {headers:this.headers}

    searchProject(cookieId:Number):any{

      return this.http.get<any>(this.url+"search/"+cookieId);

    }

    getAllCafe(){

      return this.http.get<any>(this.url+"getAllcafe",this.options)

    }


    deleteCookie(id:number){

      return this.http.delete<any>(this.url+"delete/"+id);
    }

    addCookie(cafeid:number,cookieName:string,price:number):Observable<Object>{
      
        this.cookie=new Cookie(0,cookieName,price);
        return this.http.post<any>(this.url+"add/"+cafeid,this.cookie,this.options);
    }

}
