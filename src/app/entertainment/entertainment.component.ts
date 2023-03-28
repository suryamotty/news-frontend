import { Component, OnInit } from '@angular/core';
import { NewsapieSrvice} from '../services/newsapi.service'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{
  techNewsDisplay:any=[]
constructor(private services:NewsapieSrvice){

}
ngOnInit(): void {
  this.services.entNews().subscribe((result:any)=>{
    this.techNewsDisplay=result.articles
     }
     )
}
}
