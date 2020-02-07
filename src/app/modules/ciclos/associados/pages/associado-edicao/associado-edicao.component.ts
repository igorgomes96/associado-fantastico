import { Component, OnInit } from '@angular/core';
import { Associado } from '@shared/entities/associado';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciclo } from '@shared/entities/ciclo';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { PerfilUsuario } from '@shared/entities/usuario';
import { ToastType, NotificacoesService } from '@core/services/notificacoes.service';

@Component({
  selector: 'app-associado-edicao',
  templateUrl: './associado-edicao.component.html',
  styleUrls: ['./associado-edicao.component.scss']
})
export class AssociadoEdicaoComponent implements OnInit {

  ciclo: Ciclo;
  associado: Associado;
  constructor(
    private route: ActivatedRoute,
    private api: CiclosApiService,
    private notificacoes: NotificacoesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.ciclo = data.ciclo);
    this.route.data.subscribe(data => this.associado = data.associado);
  }

  salvarAssociado(associado: Associado) {
    associado.id = this.associado.id;
    associado.usuarioId = this.associado.usuarioId;
    associado.perfil = PerfilUsuario.Associado;
    this.api.putAtualizarAssociado(this.ciclo.id, associado)
      .subscribe(_ => {
        this.notificacoes.toast('Associado editado com sucesso!', ToastType.Sucess);
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }
}
