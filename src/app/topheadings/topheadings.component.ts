import { Component, OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'
@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit{

  topHeadingsDisplay:any=[]

  constructor(private service: NewsapieSrvice){}

  ngOnInit(): void {
    this.service.topHeadings().subscribe((result:any)=>{
      console.log(result.articles);
      this.topHeadingsDisplay = result.articles
      
    })
  }
}
