import { Component, OnInit, inject } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  public loadingCtl = inject ( LoadingController )
  public loading!: HTMLIonLoadingElement;

  ngOnInit() {
  }

  showLoading(){
    this.presentLoading()

    setTimeout(() => {
      this.loading.dismiss()
    }, 2000);
  }

  async presentLoading(){

   this.loading = await this.loadingCtl.create({

       message:'Cargando...',
       translucent: true,
       backdropDismiss: false
    })
  await this.loading.present()
  }

}
