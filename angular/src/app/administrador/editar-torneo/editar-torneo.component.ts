import { Component, OnInit } from '@angular/core';
import {TorneoService} from '../../_services/torneo.service';
import {Torneo} from '../../_model/Torneo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.component.html',
  styleUrls: ['./editar-torneo.component.css']
})
export class EditarTorneoComponent implements OnInit {

  public tournament: Torneo;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TorneoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.getTorneo(id)
      .then(
        data => this.tournament = data['torneo'],
      ).catch(error => console.error(error));
  }

}
