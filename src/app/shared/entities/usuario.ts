export enum PerfilUsuario {
    RH,
    Associado,
    Coordenador
}

export class Usuario {
    id: string;
    cpf: string;
    matricula: string;
    nome: string;
    cargo: string;
    area: string;
    perfil: PerfilUsuario;
    empresaId: string;
}
