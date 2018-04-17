<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class ConsultarTorneosCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('torneoDB');
    }

    public function index_get()
    {
        $response = array(
            'torneos' => $this->torneoDB->getAllTorneos()
        );
        $this->response($response, REST_Controller::HTTP_OK);
    }
}