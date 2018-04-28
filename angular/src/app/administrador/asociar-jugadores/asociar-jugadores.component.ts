import { Component, OnInit } from '@angular/core';
import {CustomCookieService} from '../../_services/custom-cookie.service';
import {Partido} from '../../_model/Partido';
import {TorneoService} from '../../_services/torneo.service';

@Component({
  selector: 'app-asociar-jugadores',
  templateUrl: './asociar-jugadores.component.html',
  styleUrls: ['./asociar-jugadores.component.css']
})
export class AsociarJugadoresComponent implements OnInit {

  public partidos: Array<Partido>;
  constructor(
    private cookieService: CustomCookieService,
    private tournamentService: TorneoService
  ) { }

  ngOnInit() {
    if (this.cookieService.checkTournament() &&
      this.cookieService.checkPlayers() &&
      this.cookieService.checkReferees() &&
      this.cookieService.checkInitialDateTournament()) {
      const params = {
        torneo: this.cookieService.getTournament(),
        jugadores: this.cookieService.getPlayers(),
        arbitros: this.cookieService.getReferees(),
        fechaHora: this.cookieService.getInitialDateTournament()
      };
      this.tournamentService.createEstructura(params)
        .then(partidos => {
          this.partidos = partidos;
        })
        .catch( response => {
          console.error(response);
        });
    }
  }

}
