<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 16/04/2018
 * Time: 10:38 PM
 */

class NumeroArbitrosCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('usuarioDB');
    }

    public function index_get()
    {
        $arbitros = $this->usuarioDB->getArbitros();
        $cantArbitros = count($arbitros);

        $response = array(
            'numeroArbitros' => $cantArbitros
        );
        $responseCode = REST_Controller::HTTP_OK;

        $this->response($response, $responseCode);
    }
}