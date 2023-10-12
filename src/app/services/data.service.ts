import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';

import { Componente } from '../interfaces';
import { Hero, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject ( HttpClient )

  constructor() { }


getUsuarios():Observable<User[]>{
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
}

getMenuOpts():Observable<Componente[]>{
  return this.http.get<Componente[]>('/assets/data/menu-opts.json')
}

getHeroes():Observable<Hero[]>{
  return this.http.get<Hero[]>('/assets/data/superheroes.json')
  .pipe(
    delay(1500)
  )
}

getAlbums() {
  return this.http.get('https://jsonplaceholder.typicode.com/albums')
}


}
