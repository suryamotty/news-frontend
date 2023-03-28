import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg:string=''
  successMsg:boolean=false
  //group for login
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
 constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router){

 }
 ngOnInit(): void {
   
 }
 login(){
  // console.log(this.loginForm.get('uname')?.errors);
  
  if(this.loginForm.valid){
    let email=this.loginForm .value.email
    let pswd =this.loginForm.value.pswd
    // console.log(email,pswd);
    // alert('login clicked')
  this.api.login(email,pswd)
  .subscribe(
     //success case
     (result:any)=>{
      this.successMsg=true;
      // alert(result.message)
      setTimeout(()=>{
         //navigate to todays-news
      this.router.navigateByUrl('todays-news')
      },3000)
     
    },
    //client error
    (result:any)=>{
      this.errorMsg=result.error.message
    }
  )
  }
  else{
    alert('invalid form')
  }
 }
//  unsub(){
//   alert('unsubscribed')
//  }
}
