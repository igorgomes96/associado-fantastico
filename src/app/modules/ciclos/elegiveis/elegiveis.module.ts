import { NgModule } from '@angular/core';

import { ElegiveisRoutingModule } from './elegiveis-routing.module';
import { ElegiveisComponent } from './pages/elegiveis/elegiveis.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfisComponent } from './pages/perfis/perfis.component';

@NgModule({
  declarations: [
    ElegiveisComponent,
    PerfisComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ElegiveisRoutingModule
  ]
})
export class ElegiveisModule { }
