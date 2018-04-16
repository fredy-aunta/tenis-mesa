<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class CrearTorneoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('torneoDB');
    }

    public function index_post()
    {
        $response = array();
        $nombre = $this->post("nombre");
        $tipoEstructura = $this->post("estructura");
        $cantidadJugadores = $this->post("numeroJugadores");
        $cantidadMesas = $this->post("numeroMesas");
        $nombreEstructura = $this->post("nombreEstructura");
        $fechaHora = $this->post("fechaHora");
        $torneo = new Torneo();
        $torneo->setNombre($nombre);
        $torneo->setCantidadJugadores($cantidadJugadores);
        $torneo->setCantidadMesas($cantidadMesas);
        $estructura = FactoriaEstructura::getEstructura($tipoEstructura);
        $estructura->setNombre($nombreEstructura);
        $torneo->setEstructura($estructura);

        $idTorneo = $this->torneoDB->insert($torneo);

        if ($idTorneo > 0) {
            $torneo->setIdTorneo($idTorneo);
            $response["torneoSession"] = $torneo;
            $response["fechaHoraTorneoSession"] = $fechaHora;
        }
        $this->response($response, REST_Controller::HTTP_OK);
    }
}