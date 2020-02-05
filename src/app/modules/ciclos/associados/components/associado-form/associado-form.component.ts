import { Component, OnInit } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';

@Component({
  selector: 'app-associado-form',
  templateUrl: './associado-form.component.html',
  styleUrls: ['./associado-form.component.scss']
})
export class AssociadoFormComponent implements OnInit {

  grupos: Grupo[] = [{ nome: 'Grupo 1' }, { nome: 'Grupo 2' }];
  constructor() { }

  ngOnInit() {
  }

}
