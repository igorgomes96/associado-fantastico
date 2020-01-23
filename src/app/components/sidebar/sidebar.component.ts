import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouteInfo, NavbarService } from 'app/core/services/navbar.service';
import { tap } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  cicloId = 1;
  constructor(public navbarService: NavbarService) {
    this.navbarService.alterarCicloIdObservable.subscribe(cicloId => this.cicloId = cicloId);
  }

  ngOnInit() {
    this.menuItems = this.navbarService.ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };


}
