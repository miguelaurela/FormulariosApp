import { Component } from '@angular/core';
interface MenuItem{
  texto:string;
  ruta:string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent  {
  
  templateMenu:MenuItem[]=[
    {
      texto:'Básicos',
      ruta: './template/basicos'
    },
    {
      texto:'Dínamicos',
      ruta: './template/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './template/switches'
    },
  ]
  reactiveMenu:MenuItem[]=[
    {
      texto:'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto:'Dínamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './reactive/switches'
    },
  ]

}
