import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { CiclosApiService } from '@core/services/ciclos-api.service';
import { Ciclo } from '@shared/entities/ciclo';
import { Associado } from '@shared/entities/associado';


@Injectable({
  providedIn: 'root'
})
export class AssociadoResolverService implements Resolve<Associado> {

  constructor(private api: CiclosApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Associado> {
    const cicloId = route.paramMap.get('cicloid');
    const associadoId = route.paramMap.get('associadoid');
    return this.api.getAssociado(cicloId, associadoId);
  }

}
