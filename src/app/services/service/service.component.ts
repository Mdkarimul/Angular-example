import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @HostListener('mouseover',['$event.target'])
  onHover(ele){

  }

  constructor() { }

  ngOnInit(): void {
  }


}
