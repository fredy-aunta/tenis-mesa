import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Partido} from '../../_model/Partido';
import {PartidoService} from '../../_services/partido.service';

@Component({
  selector: 'app-consultar-partido',
  templateUrl: './consultar-partido.component.html',
  styleUrls: ['./consultar-partido.component.less']
})
export class ConsultarPartidoComponent implements OnInit {

  public game: Partido;

  constructor(
    private route: ActivatedRoute,
    private gameService: PartidoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getPartido(id)
      .then(
      data => this.game = data['partido']
      ).catch(error => console.error(error));
  }

}
