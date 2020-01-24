import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatIconModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatAutocompleteModule
} from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { AssociadosListComponent } from './components/associados-list/associados-list.component';
import { CardCandidatoComponent } from './components/card-candidato/card-candidato.component';

@NgModule({
  declarations: [
    CardComponent,
    AssociadosListComponent,
    CardCandidatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule,
    CardComponent,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AssociadosListComponent,
    CardCandidatoComponent
  ]
})
export class SharedModule { }
