import { Component, OnInit, Input } from '@angular/core';
import { Ciclo } from '@shared/entities/ciclo';
import { Periodo } from '@shared/entities/periodo';
import { Votacao } from '@shared/entities/votacao';

@Component({
  selector: 'app-ciclo-card',
  templateUrl: './ciclo-card.component.html',
  styleUrls: ['./ciclo-card.component.scss']
})
export class CicloCardComponent implements OnInit {

  @Input() ciclo: Ciclo;
  constructor() { }

  ngOnInit() {
  }

  periodoVotacao(votacao: Votacao): Periodo {
    return {
      dataInicio: votacao.periodoRealizado.dataInicio || votacao.periodoPrevisto.dataInicio,
      dataFim: votacao.periodoRealizado.dataFim || votacao.periodoPrevisto.dataFim
    };
  }

}
