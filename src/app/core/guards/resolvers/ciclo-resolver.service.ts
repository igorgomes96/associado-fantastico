import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { CiclosApiService } from '@core/services/ciclos-api.service';
import { Ciclo } from '@shared/entities/ciclo';


@Injectable({
  providedIn: 'root'
})
export class CicloResolverService implements Resolve<Ciclo> {

  constructor(private api: CiclosApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ciclo> {
      const cicloId = route.paramMap.get('cicloid');
      return this.api.get(cicloId);
  }

}
