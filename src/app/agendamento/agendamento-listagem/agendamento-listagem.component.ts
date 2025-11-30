import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";

export interface Agendamento {
  id: number;
  nomeFisioterapeuta: string;
  dataHoraAgendamento: string;
  inscricao: string;
}

const ELEMENT_DATA: Agendamento[] = [
  {id: 1, nomeFisioterapeuta: 'Hydrogen', dataHoraAgendamento: '1.0079', inscricao: 'H'},
  {id: 2, nomeFisioterapeuta: 'Helium', dataHoraAgendamento: '4.0026', inscricao: 'He'},
  {id: 3, nomeFisioterapeuta: 'Lithium', dataHoraAgendamento: '6.941', inscricao: 'Li'},
  {id: 4, nomeFisioterapeuta: 'Beryllium', dataHoraAgendamento: '9.0122', inscricao: 'Be'},
  {id: 5, nomeFisioterapeuta: 'Boron', dataHoraAgendamento: '10.811', inscricao: 'B'}

];

@Component({
  selector: 'app-agendamento-listagem',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './agendamento-listagem.component.html',
  styleUrl: './agendamento-listagem.component.css'
})
export class AgendamentoListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nomeFisioterapeuta', 'dataHoraAgendamento', 'acao'];
  dataSource: Agendamento[];

  constructor() {
    this.dataSource = ELEMENT_DATA
  }

  ngOnInit(): void {
  }



  cancelar(id: number) {
    console.log(id)

  }

  agendar() {

  }
}
