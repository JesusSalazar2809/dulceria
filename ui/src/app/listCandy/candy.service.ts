import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const user = localStorage.getItem('access_token');

@Injectable({
  providedIn: 'root'
})
export class CandyService {
  
  constructor( private _http: HttpClient ){}
  getCandies(){
    return this._http.get(`/api/candy/getCandies`, { headers: {'Authorization': `Bearer ${user}`}});
  }
}
