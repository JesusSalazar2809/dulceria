import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const user = localStorage.getItem('access_token');

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public apiUrl = environment.apiURL;
  
  constructor(
    private _http: HttpClient,
  ){ 
  }

  getCandies(): Observable<any>{
    return this._http.get<any>(`/api/candy/getCandies`, { headers: { 'content-Type': 'application/json', 'Authorization': `Bearer ${user}` }});
  }
}
