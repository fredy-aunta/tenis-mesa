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
