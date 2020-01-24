import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardIndicadorComponent } from './components/card-indicador/card-indicador.component';
import { GraficoVotacaoComponent } from './components/grafico-votacao/grafico-votacao.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardIndicadorComponent,
    GraficoVotacaoComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
