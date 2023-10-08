
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor() { }

  public user = {
    email: '',
    password: ''
  }

  public nombre:string = '';

  ngOnInit() {
  }

onSubmit( formulario: NgForm){
  console.log(this.user)
  console.log( formulario.value )
}
}
