import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {Imagem } from './image.model'
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
      transition('oculto <=> visivel', animate('1s ease-in')),
    ])
  ]
})

export class BannerComponent implements OnInit {

  public estado: string = 'visivel'

  public imagens: Imagem[] =[
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'oculto', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'oculto', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'oculto', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'oculto', url: '/assets/banner-acesso/img_5.png' }
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(), 3000)
  }

  public logicaRotacao(): void {
    
    let proximaImagem: number
    //oculta imagem
    for(let i:number = 0; i <=4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'oculto'

        proximaImagem = i === 4 ? 0 : i + 1
        break
      }

    }
    //exibir proxima imagem
    this.imagens[proximaImagem].estado = 'visivel'

    setTimeout(() => this.logicaRotacao(), 3000)
  }
}