import { NgModule } from '@angular/core';

import { CiclosRoutingModule } from './ciclos-routing.module';
import { CiclosComponent } from './pages/ciclos/ciclos.component';
import { CicloCardComponent } from './components/ciclo-card/ciclo-card.component';
import { SharedModule } from 'app/shared/shared.module';
import { CicloCadastroComponent } from './pages/ciclo-cadastro/ciclo-cadastro.component';
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';

@NgModule({
  declarations: [CiclosComponent, CicloCardComponent, CicloCadastroComponent, CicloFormComponent],
  imports: [
    SharedModule,
    CiclosRoutingModule
  ]
})
export class CiclosModule { }
