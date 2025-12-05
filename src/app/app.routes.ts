import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {AgendamentoPacienteComponent} from "./agendamento/agendamento-paciente/agendamento-paciente.component";
import {AgendamentoFisioterapeutaComponent} from "./agendamento/agendamento-fisioterapeuta/agendamento-fisioterapeuta.component";

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
    path:'cadastrar',
    component: CadastroComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
        path: 'agendamento-paciente',
        component: AgendamentoPacienteComponent,
      },
      {
        path: 'agendamento-fisioterapeuta',
        component: AgendamentoFisioterapeutaComponent,
      }
    ]

  }
];
