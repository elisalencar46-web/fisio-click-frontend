import {Component, inject, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {HeaderComponent} from "../shared/header/header.component";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "../home/home.component";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Usuario} from "./usuario";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatInputModule,
    MatButtonModule, HeaderComponent, HomeComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  router = inject(Router)

  usuario: Usuario = this.criarUsuario('','');

  constructor(router: Router) {
  }

  ngOnInit(): void {
  }

  logar() {
    this.router.navigateByUrl('home');
    console.log(this.usuario)
  }

  registrar() {

  }

  criarUsuario(nome: string, senha:string) {
    return {
      usuario: nome,
      senha: senha
    };
  }

}
