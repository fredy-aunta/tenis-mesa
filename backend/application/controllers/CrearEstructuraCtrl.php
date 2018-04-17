<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class CrearEstructuraCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index_post()
    {
        $torneo = $this->session->userdata('torneoSession');
        $response = array('partidos' => array());
        if ($torneo instanceof Torneo) {
            $jugadores = $this->session->userdata("jugadoresSesion");
            $arbitros = $this->session->userdata("arbitrosSesion");
            $torneo->getEstructura()->crearEstructura($torneo->getCantidadJugadores());
            $estructura = $torneo->getEstructura();
            if ($estructura instanceof Estructura) {
                $cantidadPartidos = $estructura->getCantidadPartidos();
                $fechaHora = $this->session->userdata("fechaHoraTorneoSession");
                $partidos = new Partidos($cantidadPartidos, $jugadores,$arbitros,$fechaHora);
                $response['partidos'] = $partidos->getData();
                $response_code = REST_Controller::HTTP_OK;
            } else {
                $response['error'] = "Error en Estructura";
                $response_code = REST_Controller::HTTP_BAD_REQUEST;
            }
        } else {
            $response['error'] = "Error en Torneo";
            $response_code = REST_Controller::HTTP_BAD_REQUEST;
        }

        $this->response($response, $response_code);
    }
}