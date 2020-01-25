import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { GraficoService } from '../../grafico.service';
import { Grupo } from 'app/shared/entities/grupo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  grupos: Grupo[] = [{ nome: 'Grupo 1' }, { nome: 'Grupo 2' }];
  grupoSelecionado: Grupo;
  constructor(private graficoService: GraficoService) { }

  ngOnInit() {
    this.grupoSelecionado = this.grupos[0];
  }

}
