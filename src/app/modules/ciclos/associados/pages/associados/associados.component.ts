import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './associados.component.html',
  styleUrls: ['./associados.component.scss']
})
export class AssociadosComponent implements OnInit {

  opcoes = ['Editar', 'Excluir', 'Tornar elegível'];
  constructor() { }

  ngOnInit() {
  }

}
