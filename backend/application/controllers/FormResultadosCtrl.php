<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 8:18 PM
 */

class FormResultadosCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index_get()
    {
        $edit = $this->get("edit");
            $idPartido = $this->get("idPartido");
        $partido = $this->partidoDB->buscarPartido($idPartido);

        $response = array('partido' => null);
        if ($partido instanceof Partido) {
            $response['partido'] = $partido;
            $responseCode = REST_Controller::HTTP_OK;
        } else {
            $response['error'] = "Error en partido";
            $responseCode = REST_Controller::HTTP_BAD_REQUEST;
        }

        if ($edit == null) {
            $edit = "1";
        }
        $response["ingresarResultados"] = ($edit != "0");

        $this->response($response, $responseCode);
    }
}