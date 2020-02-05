import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CiclosModule } from './modules/ciclos/ciclos.module';
import { LoginModule } from './modules/login/login.module';
import localePt from '@angular/common/locales/pt';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AssociadosModule } from './modules/ciclos/associados/associados.module';
import { CronogramaModule } from './modules/ciclos/cronograma/cronograma.module';
import { GruposModule } from './modules/ciclos/grupos/grupos.module';
import { DashboardModule } from './modules/ciclos/dashboard/dashboard.module';
import { VotacaoModule } from './modules/ciclos/votacao/votacao.module';
import { ElegiveisModule } from './modules/ciclos/elegiveis/elegiveis.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { registerLocaleData } from '@angular/common';
import { InterceptorsModule } from '@core/interceptors/interceptors.module';

export function tokenGetter() {
  return localStorage.getItem('token');
}

registerLocaleData(localePt);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    CiclosModule,
    AssociadosModule,
    CronogramaModule,
    LoginModule,
    GruposModule,
    DashboardModule,
    VotacaoModule,
    ElegiveisModule,
    InterceptorsModule,
    SweetAlert2Module.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
      }
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
    },
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
