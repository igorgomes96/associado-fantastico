import { Component, OnInit } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';
import { Ciclo } from '@shared/entities/ciclo';
import { ActivatedRoute } from '@angular/router';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';
import { switchMap, finalize, filter } from 'rxjs/operators';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  isSaving = false;
  ciclo: Ciclo;
  grupos: Grupo[] = [];
  grupoSelecionado: Grupo = null;
  constructor(
    private route: ActivatedRoute,
    private api: CiclosApiService,
    private notificacoes: NotificacoesService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.ciclo = data.ciclo
      this.api.getGrupos(this.ciclo.id).subscribe(grupos => this.grupos = grupos);
    });
  }

  salvarGrupo(grupo: Grupo) {
    this.isSaving = true;
    grupo.id = this.grupoSelecionado ? this.grupoSelecionado.id : undefined;
    const httpCall = (this.grupoSelecionado ?
      this.api.putAtualizarGrupo(this.ciclo.id, grupo) :
      this.api.postAdicionarGrupo(this.ciclo.id, grupo));

    httpCall.pipe(
      switchMap(_ => this.api.getGrupos(this.ciclo.id)),
      finalize(() => {
        this.isSaving = false;
        this.grupoSelecionado = null;
      })).subscribe(grupos => {
        this.grupos = grupos;
        this.notificacoes.toast('Grupo salvo com sucesso!', ToastType.Sucess);
      });
  }

  acao({ opcao, grupo }) {
    if (opcao === 'Editar') {
      this.editar(grupo);
    } else if (opcao === 'Excluir') {
      this.excluir(grupo);
    }
  }

  cancelarEdicao() {
    this.grupoSelecionado = null;
  }

  private editar(grupo: Grupo) {
    this.grupoSelecionado = grupo;
  }

  private excluir(grupo) {
    this.notificacoes.confirm('Deseja mesmo excluir esse grupo? Essa ação não poderá ser desfeita.', 'Atenção!')
      .pipe(
        filter(confirmacao => !!confirmacao),
        switchMap(_ => this.api.deleteGrupo(this.ciclo.id, grupo.id)),
        switchMap(_ => this.api.getGrupos(this.ciclo.id))
      ).subscribe(grupos => {
        this.grupos = grupos;
        this.notificacoes.toast('Grupo excluído com sucesso!', ToastType.Sucess);
      });
  }

}
