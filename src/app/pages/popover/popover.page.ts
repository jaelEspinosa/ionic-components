import { Component, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public popoverCtrl = inject ( PopoverController )

  public itemSelected: number | undefined

  ngOnInit() {
  }


  onClick(ev: any){
     this.presentPopover(ev)
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
  })
     await popover.present()
     const { data } = await popover.onWillDismiss();
     this.itemSelected = data.item


  }


}
