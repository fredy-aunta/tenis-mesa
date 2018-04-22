import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TorneoService} from '../../_services/torneo.service';
import {Torneo} from '../../_model/Torneo';

@Component({
  selector: 'app-consultar-torneos',
  templateUrl: './consultar-torneos.component.html',
  styleUrls: ['./consultar-torneos.component.css']
})
export class ConsultarTorneosComponent implements OnInit {

  public tournaments: Array<Torneo>;

  constructor(
    private tournamentService: TorneoService
  ) { }

  ngOnInit() {
    this.tournamentService.getTorneos()
      .then(
        data => this.tournaments = data['torneos'],
      ).catch(error => console.error(error));
  }

}
