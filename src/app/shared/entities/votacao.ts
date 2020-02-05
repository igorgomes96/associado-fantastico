import { Periodo } from './periodo';

export interface Votacao {
    id: string;
    periodoPrevisto: Periodo;
    periodoRealizado: Periodo;
    cicloId: string;
}
