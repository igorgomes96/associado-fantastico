import { Component, OnInit } from '@angular/core';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { Ciclo } from '@shared/entities/ciclo';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent implements OnInit {

  ciclos: Ciclo[] = [];
  constructor(
    private api: CiclosApiService
  ) { }

  ngOnInit() {
    this.api.getAll({ status: 'aberto' })
      .subscribe((ciclos: Ciclo[]) => this.ciclos = ciclos);
  }

}
