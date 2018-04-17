<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 8:07 PM
 */

class IngresarResultadoPartidoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('torneoDB');
        $this->load->model('partidoDB');
    }

    public function index_post()
    {
        $resultado1 = $this->post("resultado1");
        $resultado2 = $this->post("resultado2");
        $idPartido = $this->post("idPartido");
        $idJugador1 = $this->post("idJugador1");
        $idJugador2 = $this->post("idJugador2");
        $idPartidoTorneo = $this->post("idPartidoTorneo");

        $partido = new Partido();
        $torneo = null;
            $partido->setResultado1($resultado1);
            $partido->setResultado2($resultado2);
            $partido->setIdPartido($idPartido);
            $partido->setIdJugador1($idJugador1);
            $partido->setIdJugador2($idJugador2);
            $partido->setIdPartidoTorneo($idPartidoTorneo);
            $torneo = $this->torneoDB->buscarTorneoPartido($idPartido);

        $subidos = $this->partidoDB->subirResultados($partido);
        if ($partido->terminado() && $torneo->getEstructura()->getIdEstructura() == FactoriaEstructura::ESTRUCTURA_ARBOL) {
            $this->partidoDB->definirSiguientePartido($torneo,$partido);
        }
        $response['subidos'] = $subidos;
        $response['partido'] = $partido;

        $responseCode = REST_Controller::HTTP_OK;
        $this->response($response, $responseCode);
    }
}