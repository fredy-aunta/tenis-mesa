import { Component, OnInit } from '@angular/core';
import {TorneoService} from '../../_services/torneo.service';
import {Torneo} from '../../_model/Torneo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-consultar-torneo',
  templateUrl: './consultar-torneo.component.html',
  styleUrls: ['./consultar-torneo.component.css']
})
export class ConsultarTorneoComponent implements OnInit {

  public tournament: Torneo;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TorneoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.getTorneo(id)
      .then(
        data => this.tournament = data['torneo']
      ).catch(error => console.error(error));
  }

}
