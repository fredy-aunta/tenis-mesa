export class Partido {
  static classMetadata = {
    idPartido: 'idPartido',
    fechaHora: 'fechaHora',
    idPartidoTorneo: 'idPartidoTorneo',
    idJugador1: 'idJugador1',
    idJugador2: 'idJugador2',
    resultado1: 'resultado1',
    resultado2: 'resultado2',
    idArbitro: 'idArbitro'
  };
  idPartido: string;
  fechaHora: string;
  idPartidoTorneo: string;
  idJugador1: string;
  idJugador2: string;
  resultado1: string;
  resultado2: string;
  idArbitro: string;
}
