import { Component, OnInit } from '@angular/core';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { Associado } from '@shared/entities/associado';
import { Observable } from 'rxjs';
import { Ciclo } from '@shared/entities/ciclo';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';
import { Votacao, TipoVotacao } from '@shared/entities/votacao';

@Component({
  templateUrl: './associados.component.html',
  styleUrls: ['./associados.component.scss']
})
export class AssociadosComponent implements OnInit {

  pesquisa: { grupoId: string, nome: string };
  ciclo: Ciclo;
  votacao: Votacao;
  associados$: Observable<Associado[]>;
  opcoes = [];
  constructor(
    private api: CiclosApiService,
    private route: ActivatedRoute,
    private router: Router,
    private notificacoes: NotificacoesService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.ciclo = data.ciclo);
    this.route.data.subscribe(data => this.votacao = data.votacao);
    this.opcoes = ['Editar'];
    if (this.votacao.tipoVotacao === TipoVotacao.VotacaoAssociadoFantastico && !this.votacao.periodoRealizado.dataFim) {
      this.opcoes.push('Excluir');
      this.opcoes.push('Tornar elegível');
    }
    this.associados$ = this.api.getAssociados(this.ciclo.id);
  }

  onAcao({ opcao, associado }) {
    switch (opcao) {
      case 'Editar':
        this.router.navigate([associado.id], { relativeTo: this.route });
        break;
      case 'Excluir':
        this.excluirAssociado(associado);
        break;
      case 'Tornar elegível':
        this.tornarElegivel(associado);
        break;
    }
  }

  excluirAssociado(associado: Associado) {
    this.api.deleteAssociado(this.ciclo.id, associado.id)
      .subscribe(_ => {
        this.notificacoes.toast('Associado removido com sucesso', ToastType.Sucess);
        this.associados$ = this.api.getAssociados(this.ciclo.id, this.pesquisa);
      });
  }

  tornarElegivel(associado: Associado) {
    this.api.postElegivel(this.ciclo.id, this.votacao.id, associado.id)
      .subscribe(_ => this.notificacoes.toast('Esse associado agora é elegível nessa votação.', ToastType.Sucess));
  }

  pesquisar({ grupoId, pesquisa }) {
    this.pesquisa = {
      grupoId: grupoId,
      nome: pesquisa
    };
    this.associados$ = this.api.getAssociados(this.ciclo.id, this.pesquisa);
  }

}
