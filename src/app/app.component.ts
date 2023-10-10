import { Component, inject } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public dataSvc = inject ( DataService )
  public componentes: Observable<Componente[]>

  //** con "ion-menu-toggle" no me hace falta este metodo para cerrar el menu.*/

  /* private menuCtrl = inject ( MenuController ) */

/* onClick(){
  this.menuCtrl.close('first')
} */


  constructor() {
    this.componentes = this.dataSvc.getMenuOpts()
  }
}
