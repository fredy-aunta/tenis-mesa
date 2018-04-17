<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 8:07 PM
 */

class ConsultarPartidoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('partidoDB');
    }

    public function index_get()
    {
        $idPartido = $this->get("idPartido");
        $partido = $this->partidoDB->buscarPartido($idPartido);
        $response = array('partido' => null);
        $responseCode = REST_Controller::HTTP_BAD_REQUEST;
        if ($partido instanceof Partido) {
            $response['partido'] = $partido;
        } else {
            $response['error'] = "Error en Partido";
        }
        $this->response($response, $responseCode);
    }
}