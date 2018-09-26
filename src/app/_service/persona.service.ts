import { Persona } from './../_model/Persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string='http://localhost:8080/clientes';
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<Persona[]>(this.url);
  }
}
