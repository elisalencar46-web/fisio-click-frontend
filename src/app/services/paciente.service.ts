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
  http = inject(HttpClient);

  constructor() {
    this.url = "http://localhost:8080/paciente";
  }

  salvar(paciente: PacienteDTO): Observable<ResponseDTO> {
    const endpoint = "/salvar";
    return this.http.post<ResponseDTO>(this.url.concat(endpoint), paciente);
  }


}
