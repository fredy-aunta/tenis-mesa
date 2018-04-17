<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 7:49 PM
 */

class AsociarUsuariosCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('partidoDB');

    }

    public function index_post()
    {
        $idsPartidosTorneo = $this->post("idPartidoTorneo");
        $idsJugador1 = $this->post("idJugador1");
        $idsJugador2 = $this->post("idJugador2");
        $fechas = $this->post("fechas");
        $arbitros = $this->session->userdata("arbitrosSesion");
        $torneo = $this->session->userdata("torneoSession");
//        Partido partido;
        $idsPartidos = array();
        for ($i = 0; $i < count($idsPartidosTorneo); $i++) {
            $idPartidosTorneo = $idsPartidosTorneo[$i];
            $idJugador1 = $idsJugador1[$i];
            $idJugador2 = $idsJugador2[$i];
            $fecha = $fechas[$i];

            $partido = new Partido();
            $partido->setFechaHora($fecha);
            if (!$idJugador1 == "0") {
                $partido->setIdJugador1($idJugador1);
            }
            if (!$idJugador2 == "0") {
                $partido->setIdJugador2($idJugador2);
            }
            $partido->setIdPartidoTorneo($idPartidosTorneo);
            $arbitro = $arbitros[rand(0, count($arbitros))];
            if ($arbitro instanceof Usuario) {
                $partido->setIdArbitro($arbitro->getId());
            }
            if ($torneo instanceof Torneo) {
                $idNewPartido = $this->partidoDB->insert($partido, $torneo->getIdTorneo());
                array_push($idsPartidosTorneo, $idNewPartido);
            }
        }
        if (count($idsPartidos) == count($idsPartidosTorneo)) {
            $this->session->unset_userdata("torneoSession");
            $this->session->unset_userdata("fechaHoraTorneoSession");
            $this->session->unset_userdata("jugadoresSesion");
            $this->session->unset_userdata("arbitrosSesion");
            $response['estadoAsociación'] = true;
            $response_code = REST_Controller::HTTP_OK;
        } else {
            $response['error'] = "No coincide el numero de partidos insertados";
            $response_code = REST_Controller::HTTP_BAD_REQUEST;
        }
        $this->response($response, $response_code);
    }
}