import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent  implements OnInit {

  @Input() nombre!: string;
  @Input() email!: string;
  public fb = inject ( FormBuilder )


  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(4)]],
    email:['', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\\-.]+)@([a-zA-Z0-9_\\-.]+)\\.([a-zA-Z]{2,5})$")]]

  })

  private modalCtrl = inject ( ModalController )

  ngOnInit() {}


  salirSinArgumentos(){
       this.modalCtrl.dismiss()
  }


  salirConArgumentos() {

    this.modalCtrl.dismiss(this.myForm.value)
  }
}
