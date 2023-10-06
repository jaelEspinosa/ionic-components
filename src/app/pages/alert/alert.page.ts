import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  public title:string = 'Alert'
  constructor() { }

  public alertController = inject ( AlertController)

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
      backdropDismiss:false,
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Clicked Confirm')
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Clicked Cancel')
          },
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {
  }






  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name:'name',
          placeholder: 'Name',
          type:'text'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          name:'nickname',
          type:'text',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'desc',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    buttons:[
      {
        text:'Cancel',
        role: 'cancel',
        cssClass: 'secondarty',
        handler: () =>{
          console.log('Confirm cancel')
        }
      },
      {
        text:'Guardar',
        handler: (data) =>{
          console.log( data )  // en data tenemos el value del formulario
        }
      }
    ]
    });

    await alert.present();
  }

}
