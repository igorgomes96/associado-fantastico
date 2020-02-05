import { Component, OnInit } from '@angular/core';
import { NavbarService, NavigationOptions } from '@core/services/navbar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  cicloId = '';
  votacaoId = '';
  options: NavigationOptions;
  constructor(public navbarService: NavbarService) {
    this.navbarService.alterarCicloIdObservable.subscribe(cicloId => this.cicloId = cicloId);
    this.navbarService.alterarVotacaoIdObservable.subscribe(votacaId => this.votacaoId = votacaId);

  }

  ngOnInit() {
    this.options = this.navbarService.navigationOptions;
    this.menuItems = this.navbarService.ROUTES.filter(menuItem => menuItem);
  }


}
