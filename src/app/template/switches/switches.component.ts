import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
  persona={
    genero:'F',
    nofiticaciones:false,
  }
  terminosYCondiciones:boolean=false;
}
