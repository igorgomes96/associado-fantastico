export interface AuthInfo {
    criacao: Date;
    expiracao: Date;
    cpf: string;
    matricula: string;
    roles: string[];
    accessToken: string;
}
