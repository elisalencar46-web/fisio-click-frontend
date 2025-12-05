import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestAgendamentoDto} from "../agendamento/agendamento-paciente/request-agendamento-dto";
import {ResponseAgendamentoDto} from "../shared/response-agendamento-dto";

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  public url: string;
  http = inject(HttpClient);

  constructor() {
    this.url = "http://localhost:8080/agendamento";
  }

  buscarAgendaFisioterapeuta(idFisio: string): Observable<Array<ResponseAgendamentoDto>> {
    const endpoint = "/agenda-fisioterapeuta/".concat(idFisio)
    return this.http.get<Array<ResponseAgendamentoDto>>(this.url.concat(endpoint));
  }

  agendar(requestAgendamento: RequestAgendamentoDto): Observable<boolean> {
    const endpoint = "/agendar"
    return this.http.post<boolean>(this.url.concat(endpoint), requestAgendamento);
  }

  agendaPaciente(idUsuario: string): Observable<Array<ResponseAgendamentoDto>> {
    const endpoint = "/agenda-paciente/".concat(idUsuario)
    return this.http.get<Array<ResponseAgendamentoDto>>(this.url.concat(endpoint));
  }

  cancelarAgendamento(idAgendamento: string): Observable<boolean> {
    const endpoint = "/cancelar/".concat(idAgendamento)
    return this.http.get<boolean>(this.url.concat(endpoint));
  }


}
