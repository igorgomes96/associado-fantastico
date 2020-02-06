import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { CiclosApiService } from '@core/services/ciclos-api.service';
import { Votacao } from '@shared/entities/votacao';


@Injectable({
  providedIn: 'root'
})
export class VotacaoResolverService implements Resolve<Votacao> {

  constructor(private api: CiclosApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Votacao> {
      const cicloId = route.paramMap.get('cicloid');
      const votacaoId = route.paramMap.get('votacaoid');
      return this.api.getVotacao(cicloId, votacaoId);
  }

}
