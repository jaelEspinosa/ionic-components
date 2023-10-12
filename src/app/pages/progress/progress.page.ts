import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor() { }

  public porcent: number = 0.05

  ngOnInit() {
  }


  rangeChange( event:any ) {
    console.log(event.detail.value.upper)

    this.porcent = event.detail.value.upper/100
  }
}
