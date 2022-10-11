import { Injectable } from '@angular/core';
import { isNamedExportBindings } from 'typescript';
import { HttpClient } from '@angular/common/http';
import { Review } from "./review";

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
private ajax:any;
  constructor(private http:HttpClient) { }



//get data
insertData(data:Review):void
{
 this.ajax =  this.http.post("http://localhost/example/index.php",data);
 return this.ajax;
}

getData():void
{
 this.ajax =  this.http.get("http://localhost/example/index.php");
 return this.ajax;
}



}


