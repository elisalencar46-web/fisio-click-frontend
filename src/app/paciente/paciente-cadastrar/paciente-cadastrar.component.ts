import {Component, inject, Input, OnInit} from '@angular/core';
import {PacienteDTO} from "../paciente-dto";
import {MaterialModule} from "../../material.module";
import {HeaderComponent} from "../../shared/header/header.component";
import {Usuario} from "../../login/usuario";
import {HttpClientModule} from "@angular/common/http";
import {PacienteService} from "../../services/paciente.service";
import {ResponseDTO} from "../../shared/response-dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-paciente-cadastrar',
  standalone: true,
  imports: [MaterialModule, HeaderComponent, HttpClientModule],
  templateUrl: './paciente-cadastrar.component.html',
  styleUrl: './paciente-cadastrar.component.css',
  providers: [PacienteService]
})
export class PacienteCadastrarComponent implements OnInit {

  @Input() tipoUsuario: string = '';

  paciente: PacienteDTO = this.criarPaciente('','',
    this.criarUsuario('','','','P',false));

  service = inject(PacienteService);
  router = inject(Router)
  route = inject(ActivatedRoute)
  erro: boolean;
  messagemErro: string;

  ngOnInit(): void {

  }


  salvar() {

    const paciente = this.criarPaciente(this.paciente.idade, this.paciente.nome,
      this.paciente.usuarioDTO);

    let response: ResponseDTO;

    this.service.salvar(paciente).subscribe(data => {
      response = data;

      if(response.status == "200") {
        console.log(data);
        this.voltar();
      }else {
        this.erro = true;
        this.messagemErro = response.mensagem;
      }

    });

  }

  criarPaciente(idade: string, nome: string, usuario: Usuario) {
    return {
      idade: idade,
      nome: nome,
      usuarioDTO: usuario
    };
  }

  criarUsuario(id: string, cpf: string, senha:string, tipoUsuario: string, autenticado: boolean) {
    return {
      id: id,
      cpf: cpf,
      senha: senha,
      tipoUsuario: tipoUsuario,
      autenticado: autenticado
    };
  }

  voltar() {
    this.router.navigate(['../login'], {
      relativeTo: this.route
    });
  }
}
