import { NgModule } from '@angular/core';

import { VotacaoRoutingModule } from './votacao-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { VotacaoComponent } from './pages/votacao/votacao.component';
import { CardCandidatoComponent } from './components/card-candidato/card-candidato.component';

@NgModule({
  declarations: [VotacaoComponent, CardCandidatoComponent],
  imports: [
    SharedModule,
    VotacaoRoutingModule
  ]
})
export class VotacaoModule { }
