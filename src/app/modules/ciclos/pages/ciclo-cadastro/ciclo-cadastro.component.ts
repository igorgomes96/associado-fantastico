import { Component, OnInit } from '@angular/core';
import { NovoCiclo } from '@shared/entities/ciclo';
import { Router } from '@angular/router';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { finalize } from 'rxjs/operators';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';

@Component({
  selector: 'app-ciclo-cadastro',
  templateUrl: './ciclo-cadastro.component.html',
  styleUrls: ['./ciclo-cadastro.component.scss']
})
export class CicloCadastroComponent implements OnInit {

  isLoading = false;
  constructor(
    private router: Router,
    private api: CiclosApiService,
    private notificacoes: NotificacoesService) { }

  ngOnInit() {
  }

  abrirCiclo(ciclo: NovoCiclo) {
    this.isLoading = true;
    this.api.postCiclo(ciclo).pipe(finalize(() => this.isLoading = false))
      .subscribe(novoCiclo => {
        this.notificacoes.toast('Ciclo aberto com sucesso!', ToastType.Sucess);
        this.router.navigate(['/ciclos', novoCiclo.id, 'votacoes', novoCiclo.votacaoAssociadoFantastico.id, 'cronograma']);
      });
  }

}
