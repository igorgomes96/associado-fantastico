import { Empresa } from './empresa';
import { Votacao } from './votacao';
import { Periodo } from './periodo';

export interface Ciclo {
    id: string;
    ano: number;
    semestre: number;
    descricao: string;
    dataInicio: Date;
    dataFinalizacao?: Date;

    empresa: Empresa;
    votacaoAssociadoFantastico: Votacao;
    votacaoAssociadoSuperFantastico: Votacao;
}

export interface NovoCiclo {
    ano: number;
    semestre: number;
    descricao: string;

    periodoVotacaoAssociadoFantastico: Periodo;
    periodoVotacaoAssociadoSuperFantastico: Periodo;

}
