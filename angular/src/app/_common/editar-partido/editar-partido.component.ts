import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PartidoService} from '../../_services/partido.service';
import {Partido} from '../../_model/Partido';

@Component({
  selector: 'app-editar-partido',
  templateUrl: './editar-partido.component.html',
  styleUrls: ['./editar-partido.component.less']
})
export class EditarPartidoComponent implements OnInit {

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
