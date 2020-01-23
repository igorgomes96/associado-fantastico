import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationStart, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { NavbarService } from './core/services/navbar.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private inscricoes = new Subscription();
  constructor(private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationStart),
      distinctUntilChanged()
    ).subscribe((event: ActivationStart) => {
      for (const prop in event.snapshot.data) {
        if (this.navbarService.navigationOptions.hasOwnProperty(prop)) {
          this.navbarService.navigationOptions[prop] = event.snapshot.data[prop];
        }
      }
      const cicloId = event.snapshot.params['cicloid'];
      if (cicloId) {
        this.navbarService.alterarCicloIdEmitter.next(cicloId);
      }
    });

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      const rota = this.navbarService.ROUTES.find(r => r.path === event.url.split('/').pop());
      this.navbarService.alterarRotaEmitter.next(rota || { title: this.navbarService.navigationOptions.title });
    });
  }

  ngOnDestroy(): void {
    this.inscricoes.unsubscribe();
  }
}
