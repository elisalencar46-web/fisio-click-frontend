import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {HomeComponent} from "../home/home.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "./usuario";
import {MaterialModule} from "../material.module";
import {LoginService} from "../services/login.service";
import {HttpClientModule} from "@angular/common/http";
import {ResponseDTO} from "../shared/response-dto";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, MaterialModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]
})
export class LoginComponent implements OnInit{

  router = inject(Router)
  route = inject(ActivatedRoute)
  service = inject(LoginService);

  usuario: Usuario = this.criarUsuario('','','','',false);

  loginValid: boolean = false;
  username: any;
  password: any;
  erro: boolean = false;
  radioButtonTipoUsuario: string = "P";


  ngOnInit(): void {
  }

  logar() {
    const usuario = this.criarUsuario('', this.usuario.cpf, this.usuario.senha,
      this.radioButtonTipoUsuario,false);
    let response: ResponseDTO;

    this.service.logar(usuario).subscribe(data => {
      response = data;

      if(response.status == "200") {
        let usuario: Usuario = response.object as Usuario;
        if(this.radioButtonTipoUsuario === 'P') {
          this.router.navigate(['../home/agendamento-paciente'], {
            relativeTo: this.route,
            queryParams: { idUsuario: usuario.id}
          });
        }else if (this.radioButtonTipoUsuario === 'F'){
          this.router.navigate(['../home/agendamento-fisioterapeuta'], {
            relativeTo: this.route,
            queryParams: { idUsuario: usuario.id}
          });
        }
      }else {
        this.erro = true;
      }

    });
  }

  registrar() {
    this.router.navigate(['../cadastrar'], {
      relativeTo: this.route,
      queryParams: { tipoUsuario: this.radioButtonTipoUsuario}
    })

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


}
