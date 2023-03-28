import { Component, OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'


@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

techNewsDisplay:any=[]

  constructor(private services:NewsapieSrvice){

  }
  ngOnInit(): void {
    this.services.techNews().subscribe((result:any)=>{
   this.techNewsDisplay=result.articles
    }
    )
     
      
    }
  }

