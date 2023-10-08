
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor() { }

  public fb = inject ( FormBuilder )

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email:['', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\\-.]+)@([a-zA-Z0-9_\\-.]+)\\.([a-zA-Z]{2,5})$")
  ]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

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

submitForm(){
  console.log( this.myForm.value)

}
}
