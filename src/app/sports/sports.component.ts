import { Component, OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{
  topHeadingsDisplay:any=[]
  constructor(private service: NewsapieSrvice){

  }
  ngOnInit(): void {
    this.service.spotsNews().subscribe((result:any)=>{
      console.log(result.articles);
      this.topHeadingsDisplay = result.articles
      
    })
  }

}
