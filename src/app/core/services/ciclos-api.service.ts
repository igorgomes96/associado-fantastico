import { take } from 'rxjs/operators';
import { GenericApi } from './generic-api';
import { Injectable } from '@angular/core';
import { Ciclo, NovoCiclo } from '@shared/entities/ciclo';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Votacao } from '@shared/entities/votacao';
import { Observable } from 'rxjs';
import { Grupo } from '@shared/entities/grupo';
import { Associado } from '@shared/entities/associado';
import { Elegivel } from '@shared/entities/elegivel';

@Injectable({
  providedIn: 'root'
})
export class CiclosApiService extends GenericApi<Ciclo> {

  constructor(private httpCliente: HttpClient) {
    super(httpCliente, `${environment.api}${environment.endpoints.ciclos}`);
  }

  postCiclo(ciclo: NovoCiclo): Observable<Ciclo> {
    return this.http.post<Ciclo>(this.url, ciclo).pipe(take(1));
  }

  getVotacao(cicloId: string, votacaoId: string): Observable<Votacao> {
    return this.http.get<Votacao>(`${this.url}/${cicloId}/votacoes/${votacaoId}`).pipe(take(1));
  }

  postIniciarVotacao(cicloId: string, votacaoId: string): Observable<void> {
    return this.http.post<void>(`${this.url}/${cicloId}/votacoes/${votacaoId}/iniciar`, null).pipe(take(1));
  }

  postFinalizarVotacao(cicloId: string, votacaoId: string): Observable<void> {
    return this.http.post<void>(`${this.url}/${cicloId}/votacoes/${votacaoId}/finalizar`, null).pipe(take(1));
  }

  putAtualizarVotacao(cicloId: string, votacaoId: string, votacao: Votacao): Observable<void> {
    return this.http.put<void>(`${this.url}/${cicloId}/votacoes/${votacaoId}`, votacao).pipe(take(1));
  }

  postAdicionarGrupo(cicloId: string, grupo: Grupo): Observable<void> {
    return this.http.post<void>(`${this.url}/${cicloId}/grupos`, grupo).pipe(take(1));
  }

  putAtualizarGrupo(cicloId: string, grupo: Grupo): Observable<void> {
    return this.http.put<void>(`${this.url}/${cicloId}/grupos/${grupo.id}`, grupo).pipe(take(1));
  }

  deleteGrupo(cicloId: string, grupoId: string): Observable<Grupo> {
    return this.http.delete<Grupo>(`${this.url}/${cicloId}/grupos/${grupoId}`).pipe(take(1));
  }

  getGrupos(cicloId: string): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(`${this.url}/${cicloId}/grupos`).pipe(take(1));
  }

  getAssociados(cicloId: string, params: any = {}): Observable<Associado[]> {
    return this.http.get<Associado[]>(`${this.url}/${cicloId}/associados`, { params: this.validParams(params) }).pipe(take(1));
  }

  getNaoElegiveis(cicloId: string, params: any = {}): Observable<Associado[]> {
    return this.http.get<Elegivel[]>(`${this.url}/${cicloId}/associados/naoelegiveis`, { params: this.validParams(params) })
      .pipe(take(1));
  }

  getAssociado(cicloId: string, associadoId: string): Observable<Associado> {
    return this.http.get<Associado>(`${this.url}/${cicloId}/associados/${associadoId}`).pipe(take(1));
  }

  postAdicionarAssociado(cicloId: string, associado: Associado): Observable<void> {
    return this.http.post<void>(`${this.url}/${cicloId}/associados`, associado).pipe(take(1));
  }

  putAtualizarAssociado(cicloId: string, associado: Associado): Observable<void> {
    return this.http.put<void>(`${this.url}/${cicloId}/associados/${associado.id}`, associado).pipe(take(1));
  }

  deleteAssociado(cicloId: string, associadoId: string): Observable<Associado> {
    return this.http.delete<Associado>(`${this.url}/${cicloId}/associados/${associadoId}`).pipe(take(1));
  }

  postElegivel(cicloId: string, votacaoId: string, associadoId: string): Observable<Elegivel> {
    return this.http.post<Elegivel>(`${this.url}/${cicloId}/votacoes/${votacaoId}/elegiveis`, { id: associadoId }).pipe(take(1));
  }

  deleteElegivel(cicloId: string, votacaoId: string, elegivelId: string): Observable<Elegivel> {
    return this.http.delete<Elegivel>(`${this.url}/${cicloId}/votacoes/${votacaoId}/elegiveis/${elegivelId}`).pipe(take(1));
  }

  getElegiveis(cicloId: string, votacaoId: string, params: any = {}): Observable<Elegivel[]> {
    return this.http.get<Elegivel[]>(`${this.url}/${cicloId}/votacoes/${votacaoId}/elegiveis`, { params: this.validParams(params) })
      .pipe(take(1));
  }


}
