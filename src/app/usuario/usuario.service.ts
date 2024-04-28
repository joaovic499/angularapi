import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'usuarios';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/${this.endpoint}`);
  }
}
