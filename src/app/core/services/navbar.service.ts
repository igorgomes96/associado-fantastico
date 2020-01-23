import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

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
    }
    // { path: '/user-profile', title: 'User Profile', icon: 'person', class: '', showOnMenu: true, showNav: true },
    // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '', showOnMenu: true, showNav: true },
    // { path: '/typography', title: 'Typography', icon: 'library_books', class: '', showOnMenu: true, showNav: true },
    // { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '', showOnMenu: true, showNav: true },
    // { path: '/maps', title: 'Maps', icon: 'location_on', class: '', showOnMenu: true, showNav: true },
    // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '', showOnMenu: true, showNav: true },
    // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro', showOnMenu: true, showNav: true },
  ];

  private cicloId: number;
  alterarRotaEmitter = new BehaviorSubject<RouteInfo>(this.ROUTES[0]);
  alterarCicloIdEmitter = new BehaviorSubject<number>(this.cicloId);
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

  get alterarCicloIdObservable(): Observable<number> {
    return this.alterarCicloIdEmitter.asObservable();
  }

}
