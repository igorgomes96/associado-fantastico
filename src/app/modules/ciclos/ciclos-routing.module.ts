import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiclosComponent } from './pages/ciclos/ciclos.component';
import { CicloCadastroComponent } from './pages/ciclo-cadastro/ciclo-cadastro.component';
import { VotacaoResolverService } from 'src/app/guards/resolvers/votacao-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CiclosComponent
  },
  {
    path: 'cadastro',
    component: CicloCadastroComponent,
    data: {
      title: 'Abrir novo Ciclo'
    }
  },
  {
    path: ':cicloid',
    children: [
      {
        path: 'votacoes/:votacaoid',
        resolve: {
          votacao: VotacaoResolverService
        },
        children: [
          {
            path: 'associados',
            loadChildren: './associados/associados.module#AssociadosModule',
            data: {
              title: 'Associados',
              showSidenav: true,
              showTopnav: true,
              showFooter: true
            }
          },
          {
            path: 'cronograma',
            loadChildren: './cronograma/cronograma.module#CronogramaModule',
            data: {
              showSidenav: true,
              showTopnav: true,
              showFooter: true
            }
          },
          {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule',
            data: {
              title: 'Dashboard',
              showSidenav: true,
              showTopnav: true,
              showFooter: true
            }
          },
          {
            path: 'grupos',
            loadChildren: './grupos/grupos.module#GruposModule',
            data: {
              showSidenav: true,
              showTopnav: true,
              showFooter: true
            }
          },
          {
            path: 'elegiveis',
            loadChildren: './elegiveis/elegiveis.module#ElegiveisModule',
            data: {
              showSidenav: true,
              showTopnav: true,
              showFooter: true
            }
          },
          {
            path: 'votacao',
            loadChildren: './votacao/votacao.module#VotacaoModule',
            data: {
              title: 'Votação',
              showSidenav: false,
              showTopnav: true,
              showFooter: true
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiclosRoutingModule { }
