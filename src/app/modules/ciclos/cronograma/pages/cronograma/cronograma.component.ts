import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Votacao } from '@shared/entities/votacao';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { switchMap, filter, finalize } from 'rxjs/operators';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent implements OnInit {

  isLoadingInicio = false;
  isLoadingFim = false;
  form: FormGroup;
  votacao: Votacao;
  constructor(
    private route: ActivatedRoute,
    private api: CiclosApiService,
    private notificacoes: NotificacoesService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.votacao = data.votacao);

    this.form = this.fb.group({
      dataInicio: [this.votacao.periodoPrevisto.dataInicio],
      dataFim: [this.votacao.periodoPrevisto.dataFim],
    });

    this.form.get('dataInicio').valueChanges
      .pipe(filter(data => !!data))
      .subscribe(data => {
        this.votacao.periodoPrevisto.dataInicio = data;
        this.atualizarCronograma();
      });

    this.form.get('dataFim').valueChanges
      .pipe(filter(data => !!data))
      .subscribe(data => {
        this.votacao.periodoPrevisto.dataFim = data;
        this.atualizarCronograma();
      });

  }

  iniciarVotacao() {
    this.notificacoes.confirm('Deseja mesmo iniciar a votação? Essa ação não poderá ser desfeita.', 'Atenção!')
      .subscribe(valor => {
        if (valor) {
          this.isLoadingInicio = true;
          this.api.postIniciarVotacao(this.votacao.cicloId, this.votacao.id)
            .pipe(
              switchMap(_ => this.api.getVotacao(this.votacao.cicloId, this.votacao.id)),
              finalize(() => this.isLoadingInicio = false)
            ).subscribe(votacao => {
              this.votacao = votacao;
              this.notificacoes.toast('Votação iniciada com sucesso!', ToastType.Sucess);
            });
        }
      });
  }

  finalizarVotacao() {
    this.notificacoes.confirm('Deseja mesmo finalizar a votação? Essa ação não poderá ser desfeita.', 'Atenção!')
      .subscribe(valor => {
        if (valor) {
          this.isLoadingFim = true;
          this.api.postFinalizarVotacao(this.votacao.cicloId, this.votacao.id)
            .pipe(
              switchMap(_ => this.api.getVotacao(this.votacao.cicloId, this.votacao.id)),
              finalize(() => this.isLoadingFim = false)
            ).subscribe(votacao => {
              this.votacao = votacao;
              this.notificacoes.toast('Votação finalizada com sucesso!', ToastType.Sucess);
            });
        }
      });
  }

  atualizarCronograma() {
    this.api.putAtualizarVotacao(this.votacao.cicloId, this.votacao.id, this.votacao)
      .subscribe(() => {
        this.notificacoes.toast('Cronograma atualizado com sucesso!', ToastType.Sucess);
      }, _ => {
        this.api.getVotacao(this.votacao.cicloId, this.votacao.id).subscribe(votacao => {
          this.votacao = votacao;
          this.form.reset(this.votacao.periodoPrevisto, { emitEvent: false });
        });
      });
  }
}
