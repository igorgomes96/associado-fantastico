import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'app/shared/entities/ciclo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclo-cadastro',
  templateUrl: './ciclo-cadastro.component.html',
  styleUrls: ['./ciclo-cadastro.component.scss']
})
export class CicloCadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirCiclo(ciclo: Ciclo) {
    this.router.navigate(['ciclos', ciclo.id, 'cronograma']);
  }

}
