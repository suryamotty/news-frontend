import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';
import { HttpClientModule} from '@angular/common/http'
import { NewsapieSrvice } from './services/newsapi.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodaysNewsComponent } from './todays-news/todays-news.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingsComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    HealthComponent,
    LoginComponent,
    RegisterComponent,
    TodaysNewsComponent,
    SportsComponent,
    EntertainmentComponent,
    HeaderOneComponent,
    HeaderTwoComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NewsapieSrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
