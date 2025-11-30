import {Component, OnInit} from '@angular/core';
import {Fisioterapeuta} from "./fisioterapeuta";
import {HeaderComponent} from "../../shared/header/header.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "../../home/home.component";

@Component({
  selector: 'app-fisioterapeuta-cadastro',
  standalone: true,
  imports: [MatCardModule,MatInputModule,
    MatButtonModule, HeaderComponent, FormsModule],
  templateUrl: './fisioterapeuta-cadastro.component.html',
  styleUrl: './fisioterapeuta-cadastro.component.css'
})
export class FisioterapeutaCadastroComponent implements OnInit {

  fisioterapeuta: Fisioterapeuta = new Fisioterapeuta();

  constructor() {

  }

  ngOnInit(): void {
  }

  cadastrar() {
    console.log("salvo");
  }
}
