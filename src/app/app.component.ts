import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

Date1: Date= new Date()
  // title = 'newsWeb';

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
