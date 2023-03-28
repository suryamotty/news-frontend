import { Component, OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'


@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit{

businessNewsDisplay:any=[]

  constructor(private services:NewsapieSrvice){

  }
  ngOnInit(): void {
    this.services.businessNews().subscribe((result:any)=>{
     this.businessNewsDisplay=result.articles;
      

    })
  }
}
