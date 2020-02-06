import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';
import { Associado } from '@shared/entities/associado';

@Component({
  selector: 'app-associados-list',
  templateUrl: './associados-list.component.html',
  styleUrls: ['./associados-list.component.scss']
})
export class AssociadosListComponent implements OnInit {

  @Input() associados: Associado[] = [
    {
      cpf: '111.222.333-10',
      matricula: '34878',
      nome: 'Lucas Fernandes Alves',
      cargo: 'Atendente JR',
      centroCusto: '2398234',
      aplausogramas: 20,
    } as any,
    {
      cpf: '332.123.654-14',
      matricula: '654545',
      nome: 'Igor Gomes de Oliveira',
      cargo: 'Desenvolvedor SR',
      centroCusto: '23423444',
      aplausogramas: 18,
      grupo: null
    } as any
  ];
  @Input() opcoes: string[] = [];
  @Output() acao = new EventEmitter<{ opcao: string, associado: Associado }>();

  grupos: Grupo[] = [];

  constructor() { }

  ngOnInit() {
  }

  onAcao(opcao: string, associado: Associado) {
    this.acao.emit({ opcao, associado });
  }

}
