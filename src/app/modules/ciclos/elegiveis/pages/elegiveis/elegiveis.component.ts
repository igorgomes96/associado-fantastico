import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elegiveis',
  templateUrl: './elegiveis.component.html',
  styleUrls: ['./elegiveis.component.scss']
})
export class ElegiveisComponent implements OnInit {

  opcoesVotacao1 = ['Remover da Lista', 'Foto'];
  opcoesVotacao2 = ['Foto'];

  constructor() {
  }

  ngOnInit(): void {
  }


}
