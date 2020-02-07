import { Component, OnInit } from '@angular/core';
import { Ciclo } from '@shared/entities/ciclo';
import { ActivatedRoute, Router } from '@angular/router';
import { Associado } from '@shared/entities/associado';
import { PerfilUsuario } from '@shared/entities/usuario';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';

@Component({
  selector: 'app-associado-cadastro',
  templateUrl: './associado-cadastro.component.html',
  styleUrls: ['./associado-cadastro.component.scss']
})
export class AssociadoCadastroComponent implements OnInit {

  ciclo: Ciclo;
  constructor(
    private route: ActivatedRoute,
    private api: CiclosApiService,
    private router: Router,
    private notificacoes: NotificacoesService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.ciclo = data.ciclo);
  }

  cadastrar(associado: Associado) {
    associado.perfil = PerfilUsuario.Associado;
    this.api.postAdicionarAssociado(this.ciclo.id, associado)
      .subscribe(_ => {
        this.notificacoes.toast('Associado cadastrado com sucesso!', ToastType.Sucess);
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
