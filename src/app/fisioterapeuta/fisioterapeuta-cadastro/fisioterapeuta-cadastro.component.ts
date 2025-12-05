import {Component, inject, Input, OnInit} from '@angular/core';
import {FisioterapeutaDto} from "./fisioterapeuta-dto";
import {MaterialModule} from "../../material.module";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../login/usuario";
import {ResponseDTO} from "../../shared/response-dto";
import {FisioterapeutaService} from "../../services/fisioterapeuta.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-fisioterapeuta-cadastro',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  templateUrl: './fisioterapeuta-cadastro.component.html',
  styleUrl: './fisioterapeuta-cadastro.component.css',
  providers: [FisioterapeutaService]
})
export class FisioterapeutaCadastroComponent implements OnInit {

  router = inject(Router)
  route = inject(ActivatedRoute)
  service = inject(FisioterapeutaService);
  fisioterapeuta: FisioterapeutaDto = this.criarFisioterapeuta('','','',
    this.criarUsuario('','','','F',false));

  @Input() tipoUsuario: string = '';

  erro: boolean;
  messagemErro: string;

  constructor() {

  }

  ngOnInit(): void {
  }

  salvar() {

    let fisioterapeuta = this.criarFisioterapeuta('', this.fisioterapeuta.nome, this.fisioterapeuta.inscricao, this.fisioterapeuta.usuarioDTO);

    let response: ResponseDTO;

    this.service.salvar(fisioterapeuta).subscribe(data => {
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



  criarFisioterapeuta(id: string, nome: string, inscricao: string, usuario: Usuario) {
    return {
      id: id,
      inscricao: inscricao,
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
