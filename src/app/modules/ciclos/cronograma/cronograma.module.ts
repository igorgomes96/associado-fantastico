import { NgModule } from '@angular/core';

import { CronogramaRoutingModule } from './cronograma-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';

@NgModule({
  declarations: [CronogramaComponent],
  imports: [
    SharedModule,
    CronogramaRoutingModule
  ]
})
export class CronogramaModule { }
