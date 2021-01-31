import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import {FormsModule} from "@angular/forms";

import {Story} from './story'
import {StoryDataService} from "./story-service.service";
import { ContactusComponent } from './contactus/contactus.component';
import { GallerComponent } from './galler/galler.component';
import { ImagesComponent } from './images/images.component';
import { PaymentComponent } from './payment/payment.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    
    CreateComponent,
    DetailsPageComponent,
    ContactusComponent,
    GallerComponent,
    ImagesComponent,
    PaymentComponent,
    ServicesComponent,
   // StoryDataService

  ],
  imports: [
    BrowserModule,
    HttpModule,
  
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'galler',
        component:GallerComponent
      },
      {
        path:'images',
        component:ImagesComponent
      },
      {
      path:'create',
        component:CreateComponent
      },
      {
        path:'services',
          component:ServicesComponent
        },
      {
        path:'story/:storyid',
        component:DetailsPageComponent
      },
      {
        path:'deleteStory/:storyid',
        component:StoryDataService
      },
      {
        path: 'payment', component: PaymentComponent
      },
      {
        path:'contact',
        component:ContactusComponent
      }
    ])
  ],
  providers:[{provide:APP_BASE_HREF,useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
