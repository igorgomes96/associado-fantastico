import { NgModule } from '@angular/core';

import { AssociadosRoutingModule } from './associados-routing.module';
import { AssociadosComponent } from './pages/associados/associados.component';
import { AssociadoEdicaoComponent } from './pages/associado-edicao/associado-edicao.component';
import { AssociadoCadastroComponent } from './pages/associado-cadastro/associado-cadastro.component';
import { AssociadoFormComponent } from './components/associado-form/associado-form.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AssociadosComponent,
    AssociadoEdicaoComponent,
    AssociadoCadastroComponent,
    AssociadoFormComponent
  ],
  imports: [
    SharedModule,
    AssociadosRoutingModule
  ]
})
export class AssociadosModule { }
