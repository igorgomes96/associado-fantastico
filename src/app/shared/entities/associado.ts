import { Grupo } from './grupo';

export interface Associado {
    cpf: string;
    matricula: string;
    nome: string;
    cargo: string;
    centroCusto: string;
    grupo: Grupo;
}