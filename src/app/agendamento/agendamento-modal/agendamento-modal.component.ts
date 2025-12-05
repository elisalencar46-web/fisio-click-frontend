import {Component, inject, Inject, OnInit} from '@angular/core';
import {MaterialModule} from "../../material.module";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {provideNativeDateAdapter} from '@angular/material/core';
import {FisioterapeutaCombo} from "../../shared/fisioterapeuta-combo";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DatePipe} from "@angular/common";
import {RequestAgendamentoDto} from "../agendamento-paciente/request-agendamento-dto";

interface Hora {
  descricao: string;
  valor: string;
}

@Component({
  selector: 'app-agendamento-modal',
  standalone: true,
  imports: [MaterialModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './agendamento-modal.component.html',
  styleUrl: './agendamento-modal.component.css',
  providers: [provideNativeDateAdapter(), DatePipe]
})
export class AgendamentoModalComponent implements OnInit{

  fisioterapeutaCombo: Array<FisioterapeutaCombo> = [];
  fisioterapeutaComboSelecionado: FisioterapeutaCombo;
  horaSelecionada: Hora;
  dataAgendamentoSelecionada: string;
  idUsuario: string;

  datePipe = inject(DatePipe);

  horas: Hora[] = [
    {descricao: '08:00', valor: '08'},
    {descricao: '09:00', valor: '09'},
    {descricao: '10:00', valor: '10'},
    {descricao: '11:00', valor: '11'},
    {descricao: '12:00', valor: '12'},
    {descricao: '14:00', valor: '14'},
    {descricao: '15:00', valor: '15'},
    {descricao: '16:00', valor: '16'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AgendamentoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.fisioterapeutaCombo = data.fisioterapeutaCombo;
    this.idUsuario = data.idUsuario;
  }


  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };


  agendar() {
    const requestAgendamento: RequestAgendamentoDto = this.criarObjetoAgendamento(this.idUsuario,
      this.fisioterapeutaComboSelecionado.id, this.dataAgendamentoSelecionada, this.horaSelecionada.valor);

    this.dialogRef.close(requestAgendamento);

  }

  dataSelecionada(event: MatDatepickerInputEvent<Date>) {

    let dataConvertida = this.datePipe.transform(event.value, 'dd/MM/yyyy');
    this.dataAgendamentoSelecionada = dataConvertida == null ? "" : dataConvertida ;
  }

  criarObjetoAgendamento(idUsuario: string, idFisioterapeuta: string, dataAgendamento: string, horaAgendamento: string) {
    return {idUsuario: idUsuario, idFisioterapeuta: idFisioterapeuta, dataAgendamento: dataAgendamento, horaAgendamento: horaAgendamento};
  }
}
