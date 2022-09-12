import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
 miFormulario!:FormGroup;
 nuevoFavorito!:FormControl

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario=this._formBuilder.group({
      nombre:[,[Validators.required,Validators.minLength(3)]],
      favoritos:this._formBuilder.array([
        ['Metal Gear',Validators.required],
        ['Death Stranding',Validators.required],
      ],Validators.required)
    });
    this.nuevoFavorito=this._formBuilder.control('',Validators.required);
  }
  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {return;}
      // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required))
      this.favoritosArr.push(this._formBuilder.control(this.nuevoFavorito.value,Validators.required))
      this.nuevoFavorito.reset()
  }
  borrarFavorito(index:number){
    this.favoritosArr.removeAt(index)
  }
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }
  campoEsValido(campo:string):boolean|null{
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }
}
