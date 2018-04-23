<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 8:14 PM
 */

class ConsultarPartidosTorneoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('partidoDB');
    }

    public function index_get($idTorneo)
    {
        $partidos = $this->partidoDB->getAllPartidos($idTorneo);

        $response["partidos"] = $partidos;
        $this->response($response, REST_Controller::HTTP_OK);
    }
}