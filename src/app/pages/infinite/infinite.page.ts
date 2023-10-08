import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  constructor() { }

  public data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infiniteScroll!:IonInfiniteScroll;

  ngOnInit() {
  }


  loadData( event:any ){
    //  console.log( event )
     if (this.data.length > 50){
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return
     }
      setTimeout(() => {
        const newArr = Array(20);
        this.data.push(...newArr);
      //  event.target.complete();

      this.infiniteScroll.complete()
      }, 1000);
  }
}
