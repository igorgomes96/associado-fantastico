import { take } from 'rxjs/operators';
import { GenericApi } from './generic-api';
import { Injectable } from '@angular/core';
import { Ciclo, NovoCiclo } from '@shared/entities/ciclo';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Votacao } from '@shared/entities/votacao';
import { Observable } from 'rxjs';

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

  putAtualizarVotacao(cicloId: string, votacaoId: string, votacao: Votacao) {
    return this.http.put<void>(`${this.url}/${cicloId}/votacoes/${votacaoId}`, votacao).pipe(take(1));
  }

}
