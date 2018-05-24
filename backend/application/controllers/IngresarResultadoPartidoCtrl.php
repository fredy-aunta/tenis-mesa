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

    public function index_put()
    {
        $resultado1 = $this->put("resultado1");
        $resultado2 = $this->put("resultado2");
        $idPartido = $this->put("idPartido");
        $idJugador1 = $this->put("idJugador1");
        $idJugador2 = $this->put("idJugador2");
        $idPartidoTorneo = $this->put("idPartidoTorneo");
        $fechaHora = $this->put("fechaHora");
        $idArbitro = $this->put("idArbitro");

        $partido = new Partido();
        $torneo = null;
        $partido->setResultado1($resultado1);
        $partido->setResultado2($resultado2);
        $partido->setIdPartido($idPartido);
        $partido->setIdJugador1($idJugador1);
        $partido->setIdJugador2($idJugador2);
        $partido->setIdPartidoTorneo($idPartidoTorneo);
        $partido->setFechaHora($fechaHora);
        $partido->setIdArbitro($idArbitro);
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