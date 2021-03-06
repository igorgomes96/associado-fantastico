import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { GraficoService } from '../../grafico.service';
import { Grupo } from '@shared/entities/grupo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  grupos: Grupo[] = [];
  grupoSelecionado: Grupo;
  constructor(private graficoService: GraficoService) { }

  ngOnInit() {
    this.grupoSelecionado = this.grupos[0];
  }

}
