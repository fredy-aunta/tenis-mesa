import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../_model/User';
import {Torneo} from '../../_model/Torneo';
import {FormDataUtil} from '../../_services/form-data-util.service';
import {AlertService} from '../../_services/alert.service';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {TorneoService} from '../../_services/torneo.service';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.css']
})
export class CrearTorneoComponent implements OnInit {

  public createTournamentForm: FormGroup;
  public tournament: Torneo;
  public submitted: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private formDataUtil: FormDataUtil,
    private tournamentService: TorneoService,
    private router: Router,
    private alertService: AlertService
  ) { }

  buildForm(): void {
    this.createTournamentForm = this.formBuilder.group({
      nombreTorneo: [this.tournament.nombre,
        [Validators.required]
      ],
      numeroMesas: [this.tournament.cantidadMesas, [
        Validators.required
      ]
      ],
      numeroJugadores: [this.tournament.cantidadJugadores,
        [Validators.required]
      ],
      idEstructura: [this.tournament.idEstructura,
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
    this.tournament = new Torneo();
    this.buildForm();
  }

}
