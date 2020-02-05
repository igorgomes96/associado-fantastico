import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { isObject } from 'util';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificacoes: NotificacoesService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((event: HttpEvent<any>) => {
          if (event instanceof HttpErrorResponse) {
            if (event.status === 401) {
              this.router.navigate(['login'], { queryParams: { redirectTo: window.location.pathname } });
            } else if (event.status === 403) {
                this.notificacoes.toast(
                    'Usuário sem permissão de acesso!',
                    ToastType.Warning
                );
            } else {
              if (isObject(event.error)) {
                this.notificacoes.toast(
                    (event.error.errors && event.error.errors[Object.keys(event.error.errors)[0]][0]) || event.message,
                    ToastType.Danger
                );
              } else {
                this.notificacoes.toast(
                    event.error || event.message,
                    ToastType.Danger
                );
              }

            }
          }
          return throwError(event);
        })
      );
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ]
})
export class InterceptorsModule { }
