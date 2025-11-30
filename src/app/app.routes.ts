import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FisioterapeutaCadastroComponent} from "./fisioterapeuta/fisioterapeuta-cadastro/fisioterapeuta-cadastro.component";
import {FisioterapeutaListagemComponent} from "./fisioterapeuta/fisioterapeuta-listagem/fisioterapeuta-listagem.component";
import {AgendamentoListagemComponent} from "./agendamento/agendamento-listagem/agendamento-listagem.component";

export const routes: Routes = [
  {path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
        path: 'fisioterapeuta-cadastrar',
        component: FisioterapeutaCadastroComponent,
      },
      {
        path: 'fisioterapeuta-listagem',
        component: FisioterapeutaListagemComponent,
      },
      {
        path: 'agendamento-listagem',
        component: AgendamentoListagemComponent,
      }
    ]

  }
];
