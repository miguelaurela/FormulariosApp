import { Component,  ViewChild} from '@angular/core';
import { NgForm, } from '@angular/forms';
interface Persona{
  nombre:string;
  favoritos:Favorito[]
}
interface Favorito{
  id:number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  {
  nuevoJuego:string=''
  @ViewChild('miFormulario') miFormulario!: NgForm;
  favoritos:Favorito[]=[
    {
      id:1,
      nombre:'cepeda'
    },{
      id:2,
      nombre:'camilo'
    },{
      id:3,
      nombre:'andres'
    },{
      id:4,
      nombre:'nose quien'
    },
  ]
  persona:Persona={
    nombre:'Fernando',
    favoritos:this.favoritos
  }
  guardar(){
    console.log(this.miFormulario);
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
  agregarJuego(){
    
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }
    this.favoritos.push({...nuevoFavorito})
    this.nuevoJuego='';
  }
}
