import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Componente } from '../interfaces';

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


}
