<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 16/04/2018
 * Time: 10:44 PM
 */

class UsuariosTorneoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index_get()
    {
        $torneo = $this->session->userdata("torneoSession");
        if ($torneo instanceof Torneo) {
            $jugadores = $this->usuarioDB->getJugadores();
            $arbitros = $this->usuarioDB->getArbitros();
            $response = array(
                'jugadores' => $jugadores,
                'arbitros' => $arbitros,
                'cantidadJugadores' => $torneo->getCantidadJugadores(),
                'cantidadMesas' => $torneo->getCantidadMesas(),
            );
            $responseCode = REST_Controller::HTTP_OK;
        } else {
            $response['error'] = "Error en Torneo";
            $responseCode = REST_Controller::HTTP_BAD_REQUEST;
        }
        $this->response($response, $responseCode);
    }
}