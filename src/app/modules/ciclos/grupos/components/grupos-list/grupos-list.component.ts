import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.scss']
})
export class GruposListComponent implements OnInit {

  @Input() grupos: Grupo[] = [];
  @Output() acao = new EventEmitter<{ opcao: string, grupo: Grupo }>();
  opcoes = ['Editar', 'Excluir']
  constructor() { }

  ngOnInit() {
  }

  onAcao(opcao: string, grupo: Grupo) {
    this.acao.emit({ opcao, grupo });
  }

}
