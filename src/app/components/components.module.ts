import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalInfoComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    ModalInfoComponent,
    PopoverInfoComponent
  ]
})
export class ComponentsModule { }
