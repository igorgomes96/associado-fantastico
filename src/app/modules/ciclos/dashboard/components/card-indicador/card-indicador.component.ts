import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-indicador',
  templateUrl: './card-indicador.component.html',
  styleUrls: ['./card-indicador.component.scss']
})
export class CardIndicadorComponent implements OnInit {

  @Input() icone: string;
  @Input() classe = 'card-header-success';
  @Input() titulo: string;
  @Input() valor: string;
  @Input() iconeRodape: string;
  @Input() textoRodape: string;

  constructor() { }

  ngOnInit() {
  }

}
