import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {AgendamentoModalComponent} from "../agendamento-modal/agendamento-modal.component";
import {MaterialModule} from "../../material.module";
import {FisioterapeutaService} from "../../services/fisioterapeuta.service";
import {HttpClientModule} from "@angular/common/http";
import {FisioterapeutaDto} from "../../fisioterapeuta/fisioterapeuta-cadastro/fisioterapeuta-dto";
import {FisioterapeutaCombo} from "../../shared/fisioterapeuta-combo";
import {RequestAgendamentoDto} from "./request-agendamento-dto";
import {AgendamentoService} from "../../services/agendamento.service";
import {ResponseAgendamentoDto} from "../../shared/response-agendamento-dto";

@Component({
  selector: 'app-agendamento-paciente',
  standalone: true,
  imports: [MaterialModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, HttpClientModule],
  templateUrl: './agendamento-paciente.component.html',
  styleUrl: './agendamento-paciente.component.css',
  providers: [FisioterapeutaService, AgendamentoService]
})
export class AgendamentoPacienteComponent implements OnInit{

  @Input() tipoUsuario: string = '';

  displayedColumns: string[] = ['id', 'nomeFisioterapeuta', 'nomePaciente', 'dataHoraAgendamento', 'hora', 'status','acao'];
  dataSource: ResponseAgendamentoDto[];

  router = inject(Router)
  route = inject(ActivatedRoute)
  dialog = inject(MatDialog)
  service = inject(FisioterapeutaService);
  agendamentoService = inject(AgendamentoService);

  listaFisioterapia: FisioterapeutaDto[] = [];

  fisioterapeutaCombo: Array<FisioterapeutaCombo> = [];
  idUsuario: string;

  constructor() {

    this.buscarFisioterapeutas();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.idUsuario = params['idUsuario']
      }
    )
    this.agendamentosPaciente(this.idUsuario);
  }

  buscarFisioterapeutas() {

    this.service.buscar().subscribe(data => {
      this.listaFisioterapia = data;

      if(data != null) {
        for (const fisioterapeuta of data) {
          this.fisioterapeutaCombo.push({nome: fisioterapeuta.nome, id: fisioterapeuta.id})
        }
      }

    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgendamentoModalComponent, {
      data: {fisioterapeutaCombo: this.fisioterapeutaCombo, idUsuario: this.idUsuario},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.agendar(result);
      }
    });
  }


  cancelar(idAgendamento: string) {
    this.agendamentoService.cancelarAgendamento(idAgendamento).subscribe(data => {

      if(data) {
        this.agendamentosPaciente(this.idUsuario);
      }
    })

  }

  agendar(requestAgendamento: RequestAgendamentoDto) {
    this.agendamentoService.agendar(requestAgendamento).subscribe(data => {
      if(data) {
        this.agendamentosPaciente(requestAgendamento.idUsuario);
      }
    })

  }

  agendamentosPaciente(idUsuario: string) {
    this.agendamentoService.agendaPaciente(idUsuario).subscribe(data => {
      this.dataSource = data;
    })
  }

}
