import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
})
export class MaterialModule { }
