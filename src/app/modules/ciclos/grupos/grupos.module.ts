import { NgModule } from '@angular/core';

import { GruposRoutingModule } from './grupos-routing.module';
import { GruposComponent } from './pages/grupos/grupos.component';
import { GrupoFormComponent } from './components/grupo-form/grupo-form.component';
import { GruposListComponent } from './components/grupos-list/grupos-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [GruposComponent, GrupoFormComponent, GruposListComponent],
  imports: [
    SharedModule,
    GruposRoutingModule
  ]
})
export class GruposModule { }
