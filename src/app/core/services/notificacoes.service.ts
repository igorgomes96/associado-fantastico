import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

declare var $: any;

export enum ToastType {
  Sucess = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger'
}

export interface SwalOptions {
  mensagem: string;
  titulo: string;
  icone: string;
  confirmacao?: (valor: boolean) => void;
}

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {

  private _onShowSwal = new EventEmitter<SwalOptions>();
  constructor() { }

  onShowSwal(): Observable<SwalOptions> {
    return this._onShowSwal.asObservable();
  }

  toast(mensagem: string, tipo: ToastType = ToastType.Info, titulo: string = '') {
    $.notify({
      icon: 'notifications',
      message: mensagem,
      title: titulo,
    }, {
      type: tipo,
      delay: tipo === ToastType.Sucess ? 2000 : 4000,
      placement: {
        from: 'top',
        align: 'right'
      },
      template:
        '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">' +
        '<i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0"' +
        'aria-valuemax="100" style="width: 0%;"></div></div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a></div>'
    });
  }

  confirm(mensagem: string, titulo: string): Observable<boolean> {
    const onConfirm = new EventEmitter<boolean>();
    this._onShowSwal.emit({
      mensagem,
      titulo,
      icone: 'warning',
      confirmacao: (confirmacao) => onConfirm.emit(confirmacao === true)
    });
    return onConfirm.asObservable().pipe(take(1));
  }
}
