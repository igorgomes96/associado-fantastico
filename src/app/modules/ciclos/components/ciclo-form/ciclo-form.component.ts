import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ciclo } from 'app/shared/entities/ciclo';

@Component({
  selector: 'app-ciclo-form',
  templateUrl: './ciclo-form.component.html',
  styleUrls: ['./ciclo-form.component.scss']
})
export class CicloFormComponent implements OnInit {

  anos = [2020, 2021, 2022];
  semestres = [1, 2];

  @Output() submit = new EventEmitter<Ciclo>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit({
      id: 1,
      ano: 2020,
      descricao: 'Teste',
      semestre: 1,
      votacaoAssociadoFantastico: null,
      votacaoAssociadoSuperFantastico: null
    });
  }

}
