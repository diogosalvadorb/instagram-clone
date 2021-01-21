import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('oculto', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })), 
      transition('oculto => visivel', animate('1s ease-in')),
      transition('visivel => oculto', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel'

  constructor() { }

  ngOnInit(): void {
  }

  public toggleEstado(): void{
    this.estado = this.estado === 'visivel' ? 'oculto': 'visivel'
  }

}