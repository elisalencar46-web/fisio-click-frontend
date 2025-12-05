import {Component, inject, OnInit} from '@angular/core';
import {MaterialModule} from "../../material.module";
import {ResponseAgendamentoDto} from "../../shared/response-agendamento-dto";
import {AgendamentoService} from "../../services/agendamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-agendamento-fisioterapeuta',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  templateUrl: './agendamento-fisioterapeuta.component.html',
  styleUrl: './agendamento-fisioterapeuta.component.css',
  providers: [AgendamentoService]
})
export class AgendamentoFisioterapeutaComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nomePaciente', 'dataAgendamento', 'hora', 'status', 'acao'];
  listaAgendamentos: ResponseAgendamentoDto[];
  idUsuario: string;
  agendamentoService = inject(AgendamentoService);
  router = inject(Router)
  route = inject(ActivatedRoute)

  constructor() {

  }

  agendamentos: Array<ResponseAgendamentoDto> = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.idUsuario = params['idUsuario']
      }
    )
    this.buscarAgendaFisioterapeuta(this.idUsuario);
  }

  buscarAgendaFisioterapeuta(idUsuario: string) {

    this.agendamentoService.buscarAgendaFisioterapeuta(idUsuario).subscribe(data => {
      this.listaAgendamentos = data;

    });

  }

  cancelar(idAgendamento: string) {
    this.agendamentoService.cancelarAgendamento(idAgendamento).subscribe(data => {

      if (data) {
        this.buscarAgendaFisioterapeuta(this.idUsuario);
      }
    })
  }

}
