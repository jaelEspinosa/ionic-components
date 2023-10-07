import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  public fechaNaci: Date = new Date()

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( ev:any ) {
    console.log( ev.target.value )
    console.log( ev.detail.value )
    console.log( new Date( ev.target.value))
    console.log( new Date( ev.detail.value))
  }
}
