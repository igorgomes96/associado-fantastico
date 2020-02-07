import { Component, OnInit } from '@angular/core';
import { Ciclo } from '@shared/entities/ciclo';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Votacao, TipoVotacao } from '@shared/entities/votacao';
import { Observable } from 'rxjs';
import { Elegivel } from '@shared/entities/elegivel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { inputPesquisa } from '@shared/rxjs-operators';
import { startWith, switchMap, map, tap } from 'rxjs/operators';
import { Associado } from '@shared/entities/associado';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';

@Component({
  selector: 'app-elegiveis',
  templateUrl: './elegiveis.component.html',
  styleUrls: ['./elegiveis.component.scss']
})
export class ElegiveisComponent implements OnInit {

  opcoes = [];
  pesquisa: { grupoId: string, nome: string };
  ciclo: Ciclo;
  votacao: Votacao;
  elegiveis$: Observable<Elegivel[]>;
  filteredOptions$: Observable<Associado[]>;
  form: FormGroup;
  constructor(
    private api: CiclosApiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notificacoes: NotificacoesService
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.ciclo = data.ciclo);
    this.route.data.subscribe(data => this.votacao = data.votacao);
    if (this.permitirEdicao) {
      this.opcoes.push(...['Remover da Lista', 'Foto']);
    }
    this.elegiveis$ = this.api.getElegiveis(this.ciclo.id, this.votacao.id);
    this.form = this.fb.group({
      filtro: [null],
    });

    this.filteredOptions$ = this.form.get('filtro').valueChanges
      .pipe(
        startWith(''),
        inputPesquisa(),
        switchMap(valor => this.api.getNaoElegiveis(this.ciclo.id, { nome: valor, pageSize: 5, pageNumber: 1 })),
        map((page: any) => page.result)
      );
  }

  pesquisar({ grupoId, pesquisa }) {
    this.pesquisa = {
      grupoId: grupoId,
      nome: pesquisa
    };
    this.elegiveis$ = this.api.getElegiveis(this.ciclo.id, this.votacao.id, this.pesquisa);
  }

  onAcao({ opcao, associado }) {
    switch (opcao) {
      case 'Editar':
        this.router.navigate([associado.id], { relativeTo: this.route });
        break;
      case 'Remover da Lista':
        this.removerElegivel(associado);
        break;
    }
  }

  private removerElegivel(associado: Associado) {
    this.elegiveis$ = this.api.deleteElegivel(this.ciclo.id, this.votacao.id, associado.id)
    .pipe(
      switchMap(() => this.api.getElegiveis(this.ciclo.id, this.votacao.id, this.pesquisa)),
      tap(() => this.notificacoes.toast('Elegível removido.', ToastType.Sucess))
    );
  }

  private tornarElegivel(associado: Associado) {
    this.elegiveis$ = this.api.postElegivel(this.ciclo.id, this.votacao.id, associado.id)
      .pipe(
        switchMap(() => this.api.getElegiveis(this.ciclo.id, this.votacao.id, this.pesquisa)),
        tap(() => {
          this.notificacoes.toast('Esse associado agora é elegível nessa votação.', ToastType.Sucess);
          this.form.get('filtro').reset();
        })
      );
  }

  onSelectAssociado(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) { return; }
    this.tornarElegivel(event.option.value as Associado);
  }

  nomeAssociado(associado: Associado) {
    return associado && associado.nome;
  }

  get permitirEdicao(): boolean {
    return this.votacao &&
      this.votacao.tipoVotacao === TipoVotacao.VotacaoAssociadoFantastico &&
      !this.votacao.periodoRealizado.dataFim
  }

}
