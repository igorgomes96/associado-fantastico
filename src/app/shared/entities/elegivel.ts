import { Associado } from './associado';

export enum Apuracao {
    NaoApurado,
    Eleito,
    NaoEleito
}

export class Elegivel extends Associado {
    apuracao: Apuracao;
}
