<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 8:04 PM
 */

class CerrarSesionCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index_post()
    {
        $this->session->unset_userdata('usuarioLogueado');

        $this->response(array('cerradaSesion'=>true), REST_Controller::HTTP_OK);
    }
}