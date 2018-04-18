import {Partido} from './Partido';

export interface Torneo {
  idTorneo: string;
  nombre: string;
  estructura: string;
  cantidadJugadores: string;
  cantidadMesas: string;
  partidos: Array<Partido>;
}
