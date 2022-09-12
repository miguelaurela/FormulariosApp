import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  miFormulario!:FormGroup
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario=this._formBuilder.group({
      genero:['M',Validators.required],
      notificaciones:[true,Validators.required],
      condiciones:[false,Validators.requiredTrue],
      
    })
    this.miFormulario.reset({
      ...this.persona,
      condiciones:true
    })
    //esto es para que objerve los cambios que hay en los formularios
    this.miFormulario.valueChanges.subscribe(({condiciones,...restoVariables})=>{
      this.persona=restoVariables
    })
  }
  persona={
    genero:'F',
    notificaciones:true 
  }
}
