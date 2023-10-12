import { Component, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent  implements OnInit {

  constructor() { }

  private popoverCtrl = inject ( PopoverController )

  data = Array(15)

  ngOnInit() {}


  onClick( valor: number ){

     this.popoverCtrl.dismiss({
      item: valor
     })
  }
}
