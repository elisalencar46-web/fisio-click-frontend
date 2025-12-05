import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FisioterapeutaCadastroComponent} from "../fisioterapeuta/fisioterapeuta-cadastro/fisioterapeuta-cadastro.component";
import {PacienteCadastrarComponent} from "../paciente/paciente-cadastrar/paciente-cadastrar.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderComponent, FisioterapeutaCadastroComponent, PacienteCadastrarComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  router = inject(Router)
  route = inject(ActivatedRoute)
  tipoUsuario: string  = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        console.log('tipoUsuario ', params['tipoUsuario']);
        this.tipoUsuario =  params['tipoUsuario'];
      }
    )
  }





}
