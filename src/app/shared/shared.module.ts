import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatIconModule, MatTooltipModule, MatFormFieldModule } from '@angular/material';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
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
    MatFormFieldModule
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
    MatFormFieldModule
  ]
})
export class SharedModule { }
