import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseDTO} from "../shared/response-dto";
import {FisioterapeutaDto} from "../fisioterapeuta/fisioterapeuta-cadastro/fisioterapeuta-dto";

@Injectable({
  providedIn: 'root'
})
export class FisioterapeutaService {

  public url: string;
  http = inject(HttpClient);

  constructor() {
    this.url = "http://localhost:8080/fisioterapeuta";
  }

  salvar(fisioterapeuta: FisioterapeutaDto): Observable<ResponseDTO> {
    const endpoint = "/salvar"
    return this.http.post<ResponseDTO>( this.url.concat(endpoint), fisioterapeuta);
  }

  buscar(): Observable<FisioterapeutaDto[]> {
    const endpoint = "/buscar"
    return this.http.get<FisioterapeutaDto[]>(this.url.concat(endpoint));
  }


}
