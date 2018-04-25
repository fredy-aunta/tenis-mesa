import {Partido} from './Partido';

export class Torneo {
  static classMetadata = {
    idTorneo: 'idTorneo',
    nombre: 'nombre',
    estructura: 'estructura',
    cantidadJugadores: 'cantidadJugadores',
    cantidadMesas: 'cantidadMesas',
    partidos: 'partidos',
    idEstructura: 'idEstructura'
  };
  idTorneo: string;
  nombre: string;
  estructura: string;
  cantidadJugadores: string;
  cantidadMesas: string;
  partidos: Array<Partido>;
  idEstructura: string;
}
