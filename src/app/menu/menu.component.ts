import {Component, inject, OnInit} from '@angular/core';
import {MaterialModule} from "../material.module";
import {MatMenuTrigger} from "@angular/material/menu";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, MatMenuTrigger],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  router = inject(Router);
  route = inject(ActivatedRoute);

  sair() {
    this.router.navigate(['../login'], {
      relativeTo: this.route
    })
  }
}
