import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginApiService } from '@core/services/login-api.service';
import { Usuario } from '@shared/entities/usuario';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';
import { pipe } from 'rxjs';
import { finalize, filter } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  usuario = new Usuario();
  redirectTo = '/ciclos';

  constructor(
    private router: Router,
    private loginApi: LoginApiService,
    private notificacoes: NotificacoesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        filter(params => params.has('redirectTo'))
      ).subscribe(params => this.redirectTo = params.get('redirectTo'));
  }

  login() {
    this.isLoading = true;
    this.loginApi.login(this.usuario)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(_ => {
        this.notificacoes.toast('Sucesso ao realizar login.', ToastType.Sucess);
        this.router.navigate([this.redirectTo]);
      });
  }

}
