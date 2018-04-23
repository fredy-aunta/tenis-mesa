<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class ConsultarTorneoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('torneoDB');
    }

    public function index_get($idTorneo)
    {
        $response = array('torneo' => null, 'tipo' => null);

        if (is_numeric($idTorneo) && $idTorneo > 0) {
            $torneo = $this->torneoDB->buscarTorneo($idTorneo);
            $response['torneo'] = $torneo;
            $response_code = REST_Controller::HTTP_OK;
        } else {
            $response['error'] = "Id torneo incorrecto";
            $response_code = REST_Controller::HTTP_BAD_REQUEST;
        }

        $this->response($response, $response_code);
    }
}