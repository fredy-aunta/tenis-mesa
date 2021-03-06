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

        if (!empty($partidos)) {
            $response["partidos"] = $partidos;
            $responseCode = REST_Controller::HTTP_OK;
        } else {
            $response["error"] = "Partidos no encontrados";
            $responseCode = REST_Controller::HTTP_NOT_FOUND;
        }
        $this->response($response, $responseCode);
    }

    public function index2_get()
    {
        $partidos = $this->partidoDB->getAllPartidos2();

        if (!empty($partidos)) {
            $response["partidos"] = $partidos;
            $responseCode = REST_Controller::HTTP_OK;
        } else {
            $response["error"] = "Partidos no encontrados";
            $responseCode = REST_Controller::HTTP_NOT_FOUND;
        }
        $this->response($response, $responseCode);
    }

}