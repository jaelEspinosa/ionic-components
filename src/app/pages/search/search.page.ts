import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }
  albumes: any[] = [];
  textoBuscar: string = '';

  private dataSvc = inject ( DataService )

  ngOnInit() {
    this.dataSvc.getAlbums()
     .subscribe({
      next: (res: any) => {
        this.albumes = res
        console.log(res)
      }
     })
  }

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }
}
