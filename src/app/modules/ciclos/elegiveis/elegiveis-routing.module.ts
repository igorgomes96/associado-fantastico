import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElegiveisComponent } from './pages/elegiveis/elegiveis.component';
import { PerfisComponent } from './pages/perfis/perfis.component';

const routes: Routes = [
  {
    path: '',
    component: ElegiveisComponent
  },
  {
    path: 'perfis',
    component: PerfisComponent,
    data: {
      title: 'Perfis dos Associados Elegíveis'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElegiveisRoutingModule { }
