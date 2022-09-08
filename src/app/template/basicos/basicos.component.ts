import { Component, OnInit,Input,Output,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  //Decorador
  @Input() Recibir!:any;
  
  @Output() Emitir!:any;
  
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  // guardar( miformulario:any){
  nombreValido():boolean{
    return  this.miFormulario?.controls['producto']?.invalid &&
            this.miFormulario?.controls['producto']?.touched
  }
  precioValido():boolean{
    return  this.miFormulario?.controls['precio']?.touched && 
            this.miFormulario?.controls['precio']?.value<0 
  }
  guardar(){
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      precio:0,
      producto:'Algo',
      existencias:0
    })
    // console.log(this.miFormulario.controls['existencias']);
  }
}
