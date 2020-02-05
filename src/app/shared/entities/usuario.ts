export enum PerfilUsuario {
    RH,
    Associado,
    Coordenador
}

export class Usuario {
    cpf: string;
    matricula: string;
    nome: string;
    cargo: string;
    area: string;
    perfil: PerfilUsuario;
    empresaId: string;
}
