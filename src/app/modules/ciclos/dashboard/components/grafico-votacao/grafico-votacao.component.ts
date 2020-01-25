import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../../grafico.service';

@Component({
  selector: 'app-grafico-votacao',
  templateUrl: './grafico-votacao.component.html',
  styleUrls: ['./grafico-votacao.component.scss']
})
export class GraficoVotacaoComponent implements OnInit {

  horaAtualizacao = new Date();
  constructor(private graficoService: GraficoService) { }

  ngOnInit() {
    this.graficoService.startAnimationForHorizontalBarChart('#apuracao',
      ['Associado Teste 1', 'Associado Teste 2', 'Associado Teste 3', 'Associado Teste 4',
      'Associado Teste 5', 'Associado Teste 6', 'Associado Teste 7', 'Associado Teste 8', 'Associado Teste 9', 'Associado Teste 10'],
      [[15, 14, 12, 12, 9, 9, 8, 5, 5, 2]]);
  }

}
