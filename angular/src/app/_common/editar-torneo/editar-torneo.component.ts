import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Partido} from '../../_model/Partido';
import {PartidoService} from '../../_services/partido.service';

@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.component.html',
  styleUrls: ['./editar-torneo.component.css']
})
export class EditarTorneoComponent implements OnInit {

  public games: Array<Partido>;

  constructor(
    private route: ActivatedRoute,
    private gamesService: PartidoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gamesService.getPartidosTorneo(id)
      .then(
        data => this.games = data['partidos']
      ).catch(error => console.error(error));
  }

}
