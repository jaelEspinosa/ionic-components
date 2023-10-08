import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AlertController, IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public dataSvc = inject ( DataService )
  public toastCtl = inject ( ToastController )
  public alertCtl = inject ( AlertController )

  public usuarios!: Observable<User[]>

  @ViewChild(IonList) ionList!: IonList;

  ngOnInit() {
    this.usuarios = this.dataSvc.getUsuarios()
    }

   async share( data : string){
   this.ionList.closeSlidingItems()

    const toast = await this.toastCtl.create({
      message: 'Compartido '+ data,
      duration: 3000,
      position: 'bottom'
    })
    toast.present()
  }

  async favorite( data: string ){
  this.ionList.closeSlidingItems()

    const alert = await this.alertCtl.create({
      header: 'Favorite',

      message: 'Agregado '+data,
      buttons: ['OK'],
      backdropDismiss:false,
    });

    await alert.present();
}

 async trash( data: string) {
 this.ionList.closeSlidingItems()

  const alert = await this.alertCtl.create({
    header:'Eliminar',
    message:'Vamos a eliminar a '+data,
    buttons:[
      {
        text:'OK',
        role: 'confirm',
        handler:()=>{
          console.log('eliminando....')
        }
      },
      {
        text:'cancel',
        role:'cancel'
      }
    ]
  })
await alert.present()

}




}
