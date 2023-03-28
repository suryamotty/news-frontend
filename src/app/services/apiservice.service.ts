import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  register(email:any,pswd:any){
    const body={
      email,
      pswd
    }
    return this.http.post('http://localhost:3000/register',body)
  }
  //login
  login(email:any, pswd:any){
    const body={
      email,
      pswd
    }
    return this.http.post('http://localhost:3000/login',body)
  }
}
