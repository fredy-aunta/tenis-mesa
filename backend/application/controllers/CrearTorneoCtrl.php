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
		$tournamentCreate = $this->post('tournamentCreate');
        $response = array('torneoCreado' => null);
        $nombre = $tournamentCreate["nombre"];
        $tipoEstructura = $tournamentCreate["idEstructura"];
        $cantidadJugadores = $tournamentCreate["cantidadJugadores"];
        $cantidadMesas = $tournamentCreate["cantidadMesas"];
        // $nombreEstructura = $tournamentCreate["nombreEstructura"];
        $fechaHora = $tournamentCreate["fechaHora"];
        $torneo = new Torneo();
        $torneo->setNombre($nombre);
        $torneo->setCantidadJugadores($cantidadJugadores);
        $torneo->setCantidadMesas($cantidadMesas);
        $estructura = FactoriaEstructura::getEstructura($tipoEstructura);
        //$estructura->setNombre($nombreEstructura);
        $torneo->setEstructura($estructura);

        $idTorneo = $this->torneoDB->insert($torneo);

        if ($idTorneo > 0) {
            $torneo->setIdTorneo($idTorneo);
            $this->session->set_userdata('torneoSession', $torneo);
            $this->session->set_userdata('fechaHoraTorneoSession', $fechaHora);
            $response["torneoCreado"] = $torneo;
			$responseCode = REST_Controller::HTTP_OK;
        } else {
			$response['error'] = 'Torneo no creado';
			$responseCode = REST_Controller::HTTP_BAD_REQUEST;
		}
        $this->response($response, $responseCode);
    }
}