import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public textoBuscar: string = ''

  constructor() {
    this.superHeroes = this.dataSvc.getHeroes()
  }

  superHeroes: Observable<Hero[]>

  private dataSvc = inject( DataService )

  ngOnInit() {

  }


  segmentChanged( event: any) {

   this.textoBuscar =  event.target.value

  }
}
