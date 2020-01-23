import { Component, OnInit } from '@angular/core';
import { Grupo } from 'app/shared/entities/grupo';

@Component({
  selector: 'app-associados-list',
  templateUrl: './associados-list.component.html',
  styleUrls: ['./associados-list.component.scss']
})
export class AssociadosListComponent implements OnInit {

  grupos: Grupo[] = [{ nome: 'Grupo 1' }, { nome: 'Grupo 2' }];
  constructor() { }

  ngOnInit() {
  }

}
