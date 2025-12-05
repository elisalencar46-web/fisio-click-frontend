import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseDTO} from "../shared/response-dto";
import {PacienteDTO} from "../paciente/paciente-dto";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  public url: string;
  public uri: string;
  http = inject(HttpClient);

  constructor() {
    this.url = "http://localhost:8080";
    this.uri = "paciente";
  }

  salvar(paciente: PacienteDTO): Observable<ResponseDTO> {
    const endpoint = `${this.uri}/salvar`
    return this.http.post<ResponseDTO>(`${this.url}/${endpoint}`, paciente);
  }


}
