<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class IniciarSesionCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function cc_get()
    {
        $this->response(array("prueba" => "Prueba GET"), REST_Controller::HTTP_OK);
    }

    public function cc_post()
    {
        echo("Prueba POST");
    }

    public function cc_put()
    {
        echo("Prueba PUT");
    }

    public function cc_delete()
    {
        echo("Prueba DELETE");
    }
}