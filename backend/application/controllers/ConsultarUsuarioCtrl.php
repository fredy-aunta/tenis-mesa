<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class ConsultarUsuarioCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('usuarioDB');
    }

    public function index_post()
    {
        $idUsuario = $this->post('idUsuario');
        $usuario = null;
        if (is_numeric($idUsuario) && $idUsuario > 0) {
            $usuario = $this->usuarioDB->buscarUsuarioById($idUsuario);
        }
        if (is_null($usuario)) {
            $usuario = new Usuario($this->session->userdata("usuarioLogueado"));
        }
        $response = array(
            'usuario' => $usuario
        );
        $this->response($response, REST_Controller::HTTP_OK);
    }
}