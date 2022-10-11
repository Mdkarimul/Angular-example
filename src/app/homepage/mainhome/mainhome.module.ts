import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainhomeRoutingModule } from './mainhome-routing.module';
import { MainhomeComponent } from './mainhome.component';
import { BrandComponent } from '../brand/brand.component';
import { DescriptionComponent } from '../description/description.component';
import { ShowcaseComponent } from '../showcase/showcase.component';

import { MessageComponent } from '../message/message.component';
import { ReviewComponent } from '../review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SolutionComponent } from '../solution/solution.component';
import { IndustriesComponent } from '../industries/industries.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    MainhomeComponent,
    BrandComponent,
    DescriptionComponent,
    ShowcaseComponent,
    SolutionComponent,
    MessageComponent,
    ReviewComponent,
    IndustriesComponent,
  ],
  imports: [
    CommonModule,
    MainhomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CarouselModule
   
  
  
   
    
  ],
  providers:[]
})
export class MainhomeModule { }
