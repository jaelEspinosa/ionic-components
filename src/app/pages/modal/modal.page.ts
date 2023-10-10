import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/components/modal-info/modal-info.component';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public data: any

  private modalCtrl = inject ( ModalController )

  ngOnInit() {
  }
  modalShow(){
   this.openModal()
  }

  async openModal (){
    const modal = await this.modalCtrl.create({
      component: ModalInfoComponent,
      componentProps:{
        nombre:'jaelEspinosa',
        email: 'jaelespinosa@gmail.com'
      }
    });

    await modal.present()

    const resp = await modal.onWillDismiss()

    this.data = resp.data
  }
}
