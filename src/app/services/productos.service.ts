import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  constructor( public http: HttpClient) { }

  getTopHeadlines() {
     return this.http.get<RespuestaTopHeadlines>('http://wentapps.com/api_server/response.json'); 
    // se retorna desde el atajo, invocando directamente desde el apikey
    
    //return this.http.get<RespuestaTopHeadlines>(`${this.apiKey}`);
  }

  getBuscados() {
    return this.http.get<any[]>('http://wentapps.com/api_server/response.json');
  }

  

}

