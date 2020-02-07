import { Periodo } from './periodo';

export enum TipoVotacao {
    VotacaoAssociadoFantastico = 0,
    VotacaoAssociadoSuperFantastico = 1
}

export interface Votacao {
    id: string;
    periodoPrevisto: Periodo;
    periodoRealizado: Periodo;
    cicloId: string;
    tipoVotacao: TipoVotacao;
}
