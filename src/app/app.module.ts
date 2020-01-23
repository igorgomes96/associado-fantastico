import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CiclosModule } from './modules/ciclos/ciclos.module';
import { LoginModule } from './modules/login/login.module';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AssociadosModule } from './modules/ciclos/associados/associados.module';
import { CronogramaModule } from './modules/ciclos/cronograma/cronograma.module';
import { GruposModule } from './modules/ciclos/grupos/grupos.module';
import { DashboardModule } from './modules/ciclos/dashboard/dashboard.module';
import { VotacaoModule } from './modules/ciclos/votacao/votacao.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    // }),
    CiclosModule,
    AssociadosModule,
    CronogramaModule,
    LoginModule,
    GruposModule,
    DashboardModule,
    VotacaoModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
