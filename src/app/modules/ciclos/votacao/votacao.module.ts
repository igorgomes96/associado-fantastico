import { NgModule } from '@angular/core';

import { VotacaoRoutingModule } from './votacao-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { VotacaoComponent } from './pages/votacao/votacao.component';

@NgModule({
  declarations: [VotacaoComponent],
  imports: [
    SharedModule,
    VotacaoRoutingModule
  ]
})
export class VotacaoModule { }
