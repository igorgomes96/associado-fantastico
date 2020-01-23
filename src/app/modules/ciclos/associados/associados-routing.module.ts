import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociadosComponent } from './pages/associados/associados.component';
import { AssociadoCadastroComponent } from './pages/associado-cadastro/associado-cadastro.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadosRoutingModule { }
