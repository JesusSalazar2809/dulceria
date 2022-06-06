import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandyService {
  public apiUrl = environment.apiURL;
  constructor(private _http: HttpClient) { }
  addCandy() {
    return this._http.post(`${this.apiUrl}/candy/create`, { headers: { 'content-Type': 'application/json' /*'Authorization': `Bearer ${this.user}`*/ } });
  }
}
