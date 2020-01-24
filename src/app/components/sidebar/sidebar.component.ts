import { Component, OnInit } from '@angular/core';
import { NavbarService, NavigationOptions } from 'app/core/services/navbar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  cicloId = 1;
  options: NavigationOptions;
  constructor(public navbarService: NavbarService) {
    this.navbarService.alterarCicloIdObservable.subscribe(cicloId => this.cicloId = cicloId);
  }

  ngOnInit() {
    this.options = this.navbarService.navigationOptions;
    this.menuItems = this.navbarService.ROUTES.filter(menuItem => menuItem);
  } 


}
