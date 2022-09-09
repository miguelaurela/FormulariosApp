import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario:FormGroup=new FormGroup({
    //   nombre:     new FormControl('RTX 4080ti'),
    //   precio:     new FormControl(1500),
    //   existencias:new FormControl(5),
    // })
  miFormulario!:FormGroup
  constructor(private _formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario=this._formBuilder.group({
      nombre:[,[Validators.required,Validators.minLength(3)]],
      precio:[,[Validators.required,Validators.min(0)]],
      existencias:[,[Validators.required,Validators.min(0)]]
    })
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
