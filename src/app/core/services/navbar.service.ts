import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

declare const $: any;

export declare interface RouteInfo {
  path?: string;
  title: string;
  icon?: string;
  class?: string;
}

export interface NavigationOptions {
  showFooter: boolean;
  showOnMenu: boolean;
  showSidenav: boolean;
  showTopnav: boolean;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  ROUTES: RouteInfo[] = [
    {
      path: 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
      class: ''
    },
    {
      path: 'cronograma',
      title: 'Cronograma',
      icon: 'calendar_today',
      class: ''
    },
    {
      path: 'grupos',
      title: 'Grupos',
      icon: 'people',
      class: ''
    },
    {
      path: 'associados',
      title: 'Associados',
      icon: 'person_add',
      class: ''
    },
    {
      path: 'elegiveis',
      title: 'Elegíveis',
      icon: 'star',
      class: ''
    }
  ];

  private cicloId: string;
  private votacaoId: string;
  alterarRotaEmitter = new BehaviorSubject<RouteInfo>(this.ROUTES[0]);
  alterarCicloIdEmitter = new BehaviorSubject<string>(this.cicloId);
  alterarVotacaoIdEmitter = new BehaviorSubject<string>(this.votacaoId);
  navigationOptions: NavigationOptions = {
    showFooter: true,
    showOnMenu: true,
    showSidenav: true,
    showTopnav: true,
    title: ''
  }

  constructor() { }

  get alterarRotaObservable(): Observable<RouteInfo> {
    return this.alterarRotaEmitter.asObservable();
  }

  get alterarCicloIdObservable(): Observable<string> {
    return this.alterarCicloIdEmitter.asObservable();
  }

  get alterarVotacaoIdObservable(): Observable<string> {
    return this.alterarVotacaoIdEmitter.asObservable();
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
