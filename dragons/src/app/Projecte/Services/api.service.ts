import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMonsters() {
    return this.http.get('https://www.dnd5eapi.co/api/monsters');
  }

  getMonsterImg(id: string) {
    return this.http.get('https://www.dnd5eapi.co/api/monsters/' + id);
  }
}
