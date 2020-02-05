import { LaddaModule } from 'angular2-ladda';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    CardComponent,
    AssociadosListComponent,
    CardCandidatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    LaddaModule.forRoot({
      style: 'zoom-in',
    }),
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
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
    CardCandidatoComponent,
    LaddaModule,
    NgxMaskModule
  ]
})
export class SharedModule { }
