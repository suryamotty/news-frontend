import { Component,OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit{
  topHeadingsDisplay:any=[]
  constructor(private service: NewsapieSrvice){

  }
  ngOnInit(): void {
    this.service.healthNews().subscribe((result:any)=>{
      console.log(result.articles);
      this.topHeadingsDisplay = result.articles
      
    })
  }
}
