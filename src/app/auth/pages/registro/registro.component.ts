import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern  } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  
  miFormulario!:FormGroup
  
  // noPuedeSerStrider(control:FormControl){
  //   console.log(control.value);
  //   const valor:string=control.value?.trim().toLowerCase();
  //   if (valor==='strider') {
  //     return{
  //       noStrider:true
  //     }
  //   }
  //   return null;
  // }

  
  constructor(private formBuilder:FormBuilder, private validatorService:ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario=this.formBuilder.group(
      {
        nombre:['',[Validators.required,Validators.pattern(nombreApellidoPattern)]],
        email:['',[Validators.required,Validators.pattern(emailPattern)]],
        username:['',[Validators.required,this.validatorService.noPuedeSerStrider]]
      }
    )
    this.miFormulario.reset({
      nombre:'Fernando Herrera',
      email:'test@test.com'
    })
  }
  guardar(){

  }
}
