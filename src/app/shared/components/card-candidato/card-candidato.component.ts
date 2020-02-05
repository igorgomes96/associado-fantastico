import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Associado } from '@shared/entities/associado';

export interface CardCandidatoOpcoes {
  opcao: string;
  class: string;
}

@Component({
  selector: 'app-card-candidato',
  templateUrl: './card-candidato.component.html',
  styleUrls: ['./card-candidato.component.scss']
})
export class CardCandidatoComponent implements OnInit {

  @Input() associado: Associado;
  @Input() opcoes: CardCandidatoOpcoes[] = [];
  @Output() acao = new EventEmitter<{ opcao: string, associado: Associado }>();
  constructor() { }

  ngOnInit() {
  }

  onAcao(opcao: string) {
    this.acao.emit({ opcao, associado: this.associado });
  }

}
