import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = 'http://wentapps.com/';
  apiKey = 'api_server/ofertas.json'; // <-- Enter your own key here!

  constructor( public http: HttpClient) { }

  getTopHeadlines() : Observable<any> {
     //return this.http.get<RespuestaTopHeadlines>('http://wentapps.com/auth/public/api/producto');
      const route ='http://wentapps.com/auth/public/api/producto';
      return this.http.get<any>(route);
  }

  getDetails(id) {
    return this.http.get(`${this.url}${this.apiKey}`);
  }

  getBuscados() {
    return this.http.get<any[]>('http://wentapps.com/auth/public/api/producto');
  }

  getOfertas () : Observable<any> {
    const route = "http://wentapps.com/api_server/ofertas.json";
    return this.http.get<any>(route);
  }

}

