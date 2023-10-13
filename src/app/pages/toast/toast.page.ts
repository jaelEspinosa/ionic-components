
import { Component, OnInit, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  public toastCtrl = inject ( ToastController )
  constructor() { }

  public clickedOpt: string = '';

  ngOnInit() {
  }


  async onClick( position: 'top' | 'middle' | 'bottom'){

    const toast = await this.toastCtrl.create({
      message: 'This is the Toast on '+position,
      duration: 1500,
      position: position,
      icon: 'person',
      animated:true,
      color:'success',
      cssClass: 'toast-style'
    })
   await toast.present()
  }

  async presentToastWithOpts(position: 'middle' ){
    const toast = await this.toastCtrl.create({

      header:'Add to favorites?',
      position: position,
      icon: 'person',
      animated:true,
      color:'success',
      layout:'stacked',
      cssClass: 'toast-style',
      buttons:[
        {
          text: 'Add',
          icon: 'star',
          handler: ()=>{
            this.clickedOpt = 'Favorite'
            setTimeout(() => {
              this.clickedOpt = ''
            }, 1500);
          }
        },
        {
          icon: 'trash',
          text: 'Cancel',
          handler: ()=>{
            this.clickedOpt = 'Cancel'
            setTimeout(() => {
              this.clickedOpt = ''
            }, 1500);
          }
        },
      ]
    })
   await toast.present()
  }

}
