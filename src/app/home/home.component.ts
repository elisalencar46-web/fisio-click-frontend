import {Component, OnInit} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {RouterOutlet} from "@angular/router";
import {MaterialModule} from "../material.module";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, MatMenuTrigger, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }


}
