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
        $torneo = $this->post('torneo');
        $torneo = new Torneo($torneo);
        $response = array('partidos' => array());

        if ($torneo instanceof Torneo) {
            $jugadores = $this->post("jugadores");
            $arbitros = $this->post("arbitros");
            $torneo->getEstructura()->crearEstructura($torneo->getCantidadJugadores());
            $estructura = $torneo->getEstructura();
            $response['torneo'] = print_r($torneo, true);
            $response['estu'] = $estructura;
            if ($estructura instanceof Estructura) {
                //$estructura->crearEstructura($torneo->getCantidadJugadores());
                $cantidadPartidos = $estructura->getCantidadPartidos();
                $fechaHora = $this->post("fechaHora");
                $partidos = new Partidos($cantidadPartidos, $jugadores,$arbitros,$fechaHora);
                $response['partidos'] = $partidos->getData();
                $response_code = REST_Controller::HTTP_OK;
            } else {
                $response['error'] = "Error en Estructura";
                $response_code = REST_Controller::HTTP_BAD_REQUEST;
            }
        } else {
            $response['error'] = "Error en Torneo";
            $response['torneo'] = print_r($torneo, true);
            $response_code = REST_Controller::HTTP_BAD_REQUEST;
        }

        $this->response($response, $response_code);
    }
}