import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>('http://wentapps.com/api_server/response.json');
  }

  getBuscados() {
    return this.http.get<any[]>('http://wentapps.com/api_server/response.json');
  }

}

