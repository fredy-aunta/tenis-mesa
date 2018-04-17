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
        $response = array('torneoCreado' => false);
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
            $this->session->set_userdata('torneoSession', $torneo);
            $this->session->set_userdata('fechaHoraTorneoSession', $fechaHora);
            $response["torneoCreado"] = true;
        }
        $this->response($response, REST_Controller::HTTP_OK);
    }
}