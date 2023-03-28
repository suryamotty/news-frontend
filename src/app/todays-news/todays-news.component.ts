import { Component, OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'

@Component({
  selector: 'app-todays-news',
  templateUrl: './todays-news.component.html',
  styleUrls: ['./todays-news.component.css']
})
export class TodaysNewsComponent implements OnInit {
    
  topHeadingsDisplay:any=[]
  
  constructor(private service: NewsapieSrvice){

  }
  ngOnInit(): void {
    this.service.topHeadings().subscribe((result:any)=>{
      console.log(result.articles);
      this.topHeadingsDisplay = result.articles
      
    })
  }
}
