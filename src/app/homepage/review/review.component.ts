import { Component, ElementRef, OnInit,AfterContentInit, ViewChild,AfterViewInit,AfterViewChecked, ViewChildren } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { ReviewService } from "../../services/review.service";
import { Review } from "../../services/review";
import { review_slide } from '../../animations';
import { trigger } from "@angular/animations";
import { state } from "@angular/animations";
import { animate } from "@angular/animations";
import { style } from "@angular/animations";
import { transition } from "@angular/animations";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  animations : [

    trigger("slide",[
      state("one",style({
       })),
    ]),
  ],

})
export class ReviewComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit{
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() 
  {
  
  }


  ngOnInit(): void {
  
  }
  ngAfterContentInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }
  ngAfterViewChecked(): void {

  
  }
  
 

  






}
