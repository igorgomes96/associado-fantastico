import { Votacao } from './votacao';

export interface Ciclo {
    id: number;
    ano: number;
    semestre: number;
    descricao: string;

    votacaoAssociadoFantastico: Votacao;
    votacaoAssociadoSuperFantastico: Votacao;
}
