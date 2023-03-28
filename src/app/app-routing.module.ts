import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SportsComponent } from './sports/sports.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TodaysNewsComponent } from './todays-news/todays-news.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';

const routes: Routes = [
  { path:'', component:TopheadingsComponent},
  {path:'todays-news', component:TodaysNewsComponent},
  { path:'business', component:BusinessNewsComponent},
  { path:'health', component:HealthComponent},
  { path:'tech', component:TechNewsComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'sports', component:SportsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
