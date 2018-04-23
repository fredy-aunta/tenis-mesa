import {Partido} from './Partido';

export class Torneo {
  idTorneo: string;
  nombre: string;
  estructura: string;
  cantidadJugadores: string;
  cantidadMesas: string;
  partidos: Array<Partido>;
  idEstructura: string;
}
