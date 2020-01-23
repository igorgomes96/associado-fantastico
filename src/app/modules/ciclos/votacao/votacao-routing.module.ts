import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotacaoComponent } from './pages/votacao/votacao.component';

const routes: Routes = [
  {
    path: '',
    component: VotacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotacaoRoutingModule { }
