import { Component, OnInit, inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  public title:string = 'action sheet'

  private actionSheetCtrl = inject ( ActionSheetController)

  ngOnInit() {
  }
  onClick() {
    this.presentActionSheet()
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action Sheet',
      subHeader: 'My Action Sheet',
      cssClass: 'my-custom-class',
      backdropDismiss: false, // evita  que se cierre al clickear fuera

      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
          handler: () =>{
            console.log('Delete clicked')
          }
        },
        {
          text: 'Share',
          icon: 'share',
          cssClass:'verde',
          data: {
            action: 'share',
          },
          handler: () =>{
            console.log('Share clicked')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          data: {
            action: 'cancel',
          },
          handler: () =>{
            console.log('Cancel clicked')
          }
        },
      ],
    });

    actionSheet.present();
  }


}
