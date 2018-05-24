import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../_services/graficas.service';
import { Chart } from 'chart.js';
import {User} from '../../_model/User';
import {USER_TYPES} from '../../app.contants';
import {Partido} from '../../_model/Partido';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.less']
})
export class GraficasComponent implements OnInit {
  tiposUsuario = [];
  fechaPartidos = [];
  jugadoresTorneo = [];
  public arbi;
  public admi;
  public juga;
  public pendientes;
  public jugados;
  public fechaActual = new Date();
  public torne;
  public jugadores = [];
  public torneos = [];

  constructor(private graficas: GraficasService) { }

  ngOnInit() {
    this.graficas.graficaTipoUsuario()
      .then(
        usuarios => {
          this.arbi = usuarios.filter((value) => {
            return value.tipo === USER_TYPES.ARBITRO.value;
          }).length;

          this.admi = usuarios.filter((value) => {
            return value.tipo === USER_TYPES.ADMIN.value;
          }).length;

          this.juga = usuarios.filter((value) => {
            return value.tipo === USER_TYPES.JUGADOR.value;
          }).length;

          this.tiposUsuario = new Chart('tiposUsuario', {
            type: 'pie',
            data: {
              datasets: [{
                data: [
                  this.admi,
                  this.arbi,
                  this.juga,
                ],
                backgroundColor: [
                  '#FA5858',
                  '#5858FA',
                  '#F4FA58',
                ],
                label: 'Dataset 1'
              }],
              labels: [
                USER_TYPES.ADMIN.value,
                USER_TYPES.ARBITRO.value,
                USER_TYPES.JUGADOR.value
              ]
            },
            options: {
              responsive: true
            }
          })
        })

    this.graficas.graficaFechaPartidos()
      .then( (partidos) => {

        this.pendientes = partidos.filter((partido) => {
          return new Date(partido.fechaHora) > this.fechaActual;
        }).length;

        this.jugados = partidos.filter((partido) => {
          return new Date(partido.fechaHora) < this.fechaActual;
        }).length;


        this.fechaPartidos = new Chart('fechaPartidos', {
          type: 'pie',
          data: {
            datasets: [{
              data: [
                this.pendientes,
                this.jugados,
              ],
              backgroundColor: [
                '#2EFE2E',
                '#00FFFF',
              ],
              label: 'Dataset 2'
            }],
            labels: [
              'Partidos Pendientes',
              'Partidos Jugados'
            ]
          },
          options: {
            responsive: true
          }
        })
      })

    this.graficas.graficaJugadoresTorneo()
      .then( torneos => {

        torneos.filter((torneo) => {
          this.jugadores.push(torneo.cantidadJugadores) ;
          this.torneos.push(torneo.nombre);
        });

        console.log(this.torne)

        this.jugadoresTorneo = new Chart('jugadoresTorneo', {
          type: 'line',
          data: {
            labels: this.torneos,
            datasets: [{
              label: 'Jugadores por Torneo',
              backgroundColor: '#2EFE2E',
              borderColor: '#00FFFF',
              borderWidth: 1,
              data: this.jugadores
            }]
          },
          options: {
            responsive: true
          }
        })
      }).catch(response => console.error(response));
  }

}
