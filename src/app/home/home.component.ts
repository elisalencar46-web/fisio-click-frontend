import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormsModule, MatToolbarModule,
    MatMenuTrigger, MatIconModule, MatMenuModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
  }

  ngOnInit(): void {
  }


  cadastrarFisioterapeuta() {

    this.router.navigate(['fisioterapeuta-cadastrar'], {
      relativeTo: this.route
    });
  }

  listarFisioterapeuta() {
    this.router.navigate(['fisioterapeuta-listagem'], {
      relativeTo: this.route
    })
  }



  agendamento() {
    this.router.navigate(['agendamento-listagem'], {
      relativeTo: this.route
    })
  }
}
