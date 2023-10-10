import {  Component, OnInit, inject } from '@angular/core';

import { Componente } from 'src/app/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //private menuCtrl = inject ( MenuController )
  public componentes!: Observable<Componente[]>
  public dataSvc = inject ( DataService)



   //! Este método ya no es necesario utilizando el componente de ionic-menu-button
  /* menuShow() {
   this.menuCtrl.open('first')
  } */

  constructor() { }

  ngOnInit() {
    this.componentes = this.dataSvc.getMenuOpts()
  }

}
