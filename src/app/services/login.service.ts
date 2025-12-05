import { Injectable, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../login/usuario";
import {Observable} from "rxjs";
import {ResponseDTO} from "../shared/response-dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;
  http = inject(HttpClient);

  constructor() {
    this.url = "http://localhost:8080/login";
  }

  logar(usuario: Usuario): Observable<ResponseDTO> {
    const endpoint = "/logar";
    return this.http.post<ResponseDTO>(this.url.concat(endpoint), usuario);
  }


}
