import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  registerForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  
  constructor(private fb: FormBuilder,private api:ApiserviceService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  register(){
    if(this.registerForm.valid){
      let email=this.registerForm .value.email
      let pswd =this.registerForm.value.pswd
      console.log(email,pswd);
      
      this.api.register(email,pswd)
      .subscribe(
        //success case
        (result:any)=>{
          alert(result.message)
          //navigate to todays-news
          this.router.navigateByUrl('login')
        },
        //client error
        (result:any)=>{
          alert(result.error.message)
        }
      )
      
}
else{
alert('invalid form')
}
  }
  subscribe(){
    alert('kindly fill the subscription form below')
  }

}
// .pattern('[a-zA-Z]*')]