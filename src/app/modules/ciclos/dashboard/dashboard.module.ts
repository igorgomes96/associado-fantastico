import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardIndicadorComponent } from './components/card-indicador/card-indicador.component';
import { GraficoVotacaoComponent } from './components/grafico-votacao/grafico-votacao.component';
import { RelatorioVotosComponent } from './components/relatorio-votos/relatorio-votos.component';
import { RelatorioApuracaoComponent } from './components/relatorio-apuracao/relatorio-apuracao.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardIndicadorComponent,
    GraficoVotacaoComponent,
    RelatorioVotosComponent,
    RelatorioApuracaoComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
