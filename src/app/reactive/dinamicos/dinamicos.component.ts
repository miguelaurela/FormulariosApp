import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
 miFormulario!:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario=this._formBuilder.group({
      nombre:[,[Validators.required,Validators.minLength(3)]],
      favorito:[,[Validators.required,Validators.minLength(3)],]
    })
  }
  campoEsValido(campo:string):boolean|null{
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    console.log(this.miFormulario.value);
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }
  }
}
