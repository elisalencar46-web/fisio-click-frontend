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
  public uri: string;
  http = inject(HttpClient);

  constructor() {
    this.url = "http://localhost:8080";
    this.uri = "agendamento";
  }

  buscarAgendaFisioterapeuta(idFisio: string): Observable<Array<ResponseAgendamentoDto>> {
    const endpoint = `${this.uri}/agenda-fisioterapeuta`
    return this.http.get<Array<ResponseAgendamentoDto>>(`${this.url}/${endpoint}/${idFisio}`);
  }

  agendar(requestAgendamento: RequestAgendamentoDto): Observable<boolean> {
    const endpoint = `${this.uri}/agendar`
    return this.http.post<boolean>(`${this.url}/${endpoint}`, requestAgendamento);
  }

  agendaPaciente(idUsuario: string): Observable<Array<ResponseAgendamentoDto>> {
    const endpoint = `${this.uri}/agenda-paciente`
    return this.http.get<Array<ResponseAgendamentoDto>>(`${this.url}/${endpoint}/${idUsuario}`);
  }

  cancelarAgendamento(idAgendamento: string): Observable<boolean> {
    const endpoint = `${this.uri}/cancelar`
    return this.http.get<boolean>(`${this.url}/${endpoint}/${idAgendamento}`);
  }


}
