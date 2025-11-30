import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";

export interface PeriodicElement {
  id: number;
  nome: string;
  cpf: string;
  inscricao: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome: 'Hydrogen', cpf: '1.0079', inscricao: 'H'},
  {id: 2, nome: 'Helium', cpf: '4.0026', inscricao: 'He'},
  {id: 3, nome: 'Lithium', cpf: '6.941', inscricao: 'Li'},
  {id: 4, nome: 'Beryllium', cpf: '9.0122', inscricao: 'Be'},
  {id: 5, nome: 'Boron', cpf: '10.811', inscricao: 'B'}

];

@Component({
  selector: 'app-fisioterapeuta-listagem',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './fisioterapeuta-listagem.component.html',
  styleUrl: './fisioterapeuta-listagem.component.css'
})
export class FisioterapeutaListagemComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'inscricao', 'acao'];
  dataSource: PeriodicElement[];

  constructor() {
    this.dataSource = ELEMENT_DATA
  }

  ngOnInit(): void {
  }



  addData() {

  }


  remover(id: number) {
    console.log(id)

  }
}
