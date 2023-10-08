import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  constructor() { }

  public reorderShow: boolean = false;

  public personajes:string[] = ['Superman','Spiderman','Hulk','Arrow','Aquaman']

  ngOnInit() {
  }

  doReorder( event:any ){
   // console.log(event)
   const itemToMove = this.personajes.splice(event.detail.from, 1)[0];

   this.personajes.splice( event.detail.to, 0, itemToMove )
   event.detail.complete()
   // console.log(this.personajes)

  }

  toogle(){
   this.reorderShow= !this.reorderShow
  }


}
