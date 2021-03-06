<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 16/04/2018
 * Time: 10:42 PM
 */

class NumeroJugadoresCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('usuarioDB');
    }

    public function index_get()
    {
        $jugadores = $this->usuarioDB->getJugadores();
        $cantJugadores = count($jugadores);

        $response = array(
            'numeroJugadores' => $cantJugadores
        );
        $responseCode = REST_Controller::HTTP_OK;

        $this->response($response, $responseCode);
    }
}