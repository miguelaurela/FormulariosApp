import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern  } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

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

  
  constructor(private formBuilder:FormBuilder, 
              private validatorService:ValidatorService,
               private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario=this.formBuilder.group(
      {
        nombre:['',[Validators.required,Validators.pattern(nombreApellidoPattern)]],
        email:['',[Validators.required,Validators.pattern(emailPattern)],[this.emailValidator]],
        username:['',[Validators.required,this.validatorService.noPuedeSerStrider]],
        password:['',[Validators.required,Validators.minLength(6)]],
        password2:['',[Validators.required]],
      },{
        validators:[this.validatorService.camposIguales('password','password2') ]
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
