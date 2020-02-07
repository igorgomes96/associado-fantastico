import { Ciclo } from '@shared/entities/ciclo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';
import { Associado } from '@shared/entities/associado';
import { Observable } from 'rxjs';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inputPesquisa } from '@shared/rxjs-operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-associados-list',
  templateUrl: './associados-list.component.html',
  styleUrls: ['./associados-list.component.scss']
})
export class AssociadosListComponent implements OnInit {

  @Input() ciclo: Ciclo;
  @Input() associados: Associado[] = [];
  @Input() opcoes: string[] = [];
  @Output() acao = new EventEmitter<{ opcao: string, associado: Associado }>();
  @Output() pesquisar = new EventEmitter<{ grupoId: string, pesquisa: string }>();

  grupos$: Observable<Grupo[]>;
  form: FormGroup;

  constructor(
    private api: CiclosApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.grupos$ = this.api.getGrupos(this.ciclo.id)
      .pipe(map(grupos => [{ nome: '(Todos)', id: '' }, ...grupos]));

    this.form = this.fb.group({
      grupo: [''],
      pesquisa: [null]
    });

    this.form.get('grupo').valueChanges
      .subscribe(grupoId => this.pesquisar.emit({ grupoId, pesquisa: this.form.get('pesquisa').value || '' }));
    this.form.get('pesquisa').valueChanges
      .pipe(inputPesquisa())
      .subscribe((pesquisa: string) => this.pesquisar.emit({ grupoId: this.form.get('grupo').value || '', pesquisa }));

  }

  onAcao(opcao: string, associado: Associado) {
    this.acao.emit({ opcao, associado });
  }

}
