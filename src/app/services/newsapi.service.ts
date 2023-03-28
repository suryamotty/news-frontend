import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapieSrvice implements OnInit{

  constructor(private http:HttpClient) { }

  //news api url
  newsApiUrl ='https://newsapi.org/v2/top-headlines?country=in&apiKey=a4f06fc9184844e8b2d7ba02d19b0fcf';
  techApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a4f06fc9184844e8b2d7ba02d19b0fcf';
  businessApiUrl ='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a4f06fc9184844e8b2d7ba02d19b0fcf';
  healthApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a4f06fc9184844e8b2d7ba02d19b0fcf';
  entApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4f06fc9184844e8b2d7ba02d19b0fcf';
  sportsApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a4f06fc9184844e8b2d7ba02d19b0fcf'
  ngOnInit(): void {
    
  }
  topHeadings(){
   return  this.http.get(this.newsApiUrl)
  }
  techNews(){
    return  this.http.get(this.techApiUrl)
   }
   businessNews(){
    return  this.http.get(this.businessApiUrl)
   }
   healthNews(){
    return this.http.get(this.healthApiUrl)
   }
   entNews(){
    return this.http.get(this.entApiUrl)
   }
   spotsNews(){
    return this.http.get(this.sportsApiUrl)
   }
}
