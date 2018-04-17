<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class ConsultarUsuariosCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('usuarioDB');
//        header('Access-Control-Allow-Origin: *');
//        header("Access-Control-Allow-Credentials: true");
//        header('Access-Control-Allow-Headers: X-Requested-With');
//        header('Access-Control-Allow-Headers: Content-Type');
//        header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT'); // http://stackoverflow.com/a/7605119/578667
//        header('Access-Control-Max-Age: 86400');
    }

    public function index_options()
    {
        $this->response(array(), REST_Controller::HTTP_OK);
    }

    public function index_get()
    {
        $response = array(
            'usuarios' => $this->usuarioDB->getAllUsuarios()
        );
        $this->response($response, REST_Controller::HTTP_OK);
    }
}