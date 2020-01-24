import { NgModule } from '@angular/core';

import { ElegiveisRoutingModule } from './elegiveis-routing.module';
import { ElegiveisComponent } from './pages/elegiveis/elegiveis.component';
import {
  VotacaoAssociadosFantasticosComponent
} from './components/votacao-associados-fantasticos/votacao-associados-fantasticos.component';
import {
  VotacaoAssociadosSuperFantasticosComponent
} from './components/votacao-associados-super-fantasticos/votacao-associados-super-fantasticos.component';
import { SharedModule } from 'app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfisComponent } from './pages/perfis/perfis.component';

@NgModule({
  declarations: [
    ElegiveisComponent,
    VotacaoAssociadosFantasticosComponent,
    VotacaoAssociadosSuperFantasticosComponent,
    PerfisComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ElegiveisRoutingModule
  ]
})
export class ElegiveisModule { }
