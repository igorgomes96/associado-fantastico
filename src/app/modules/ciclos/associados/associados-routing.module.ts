import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociadosComponent } from './pages/associados/associados.component';
import { AssociadoCadastroComponent } from './pages/associado-cadastro/associado-cadastro.component';
import { AssociadoEdicaoComponent } from './pages/associado-edicao/associado-edicao.component';
import { AssociadoResolverService } from '@core/guards/resolvers/associado-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AssociadosComponent
  },
  {
    path: 'cadastro',
    component: AssociadoCadastroComponent,
    data: {
      title: 'Cadastro de Associados',
      showSidenav: true,
      showTopnav: true,
      showFooter: true
    }
  },
  {
    path: ':associadoid',
    component: AssociadoEdicaoComponent,
    resolve: {
      associado: AssociadoResolverService
    },
    data: {
      title: 'Edição de Associado',
      showSidenav: true,
      showTopnav: true,
      showFooter: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadosRoutingModule { }
