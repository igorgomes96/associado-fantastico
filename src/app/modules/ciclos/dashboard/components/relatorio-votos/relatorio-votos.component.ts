import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-votos',
  templateUrl: './relatorio-votos.component.html',
  styleUrls: ['./relatorio-votos.component.scss']
})
export class RelatorioVotosComponent implements OnInit {

  data = new Date();
  constructor() { }

  ngOnInit() {
  }

}
