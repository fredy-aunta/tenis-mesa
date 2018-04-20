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
        $this->load->model('usuarioDB');
        $this->load->library('ion_auth');
    }

    public function index_post()
    {
        $tipo = $this->post('tipo');
        $response = array('usuarioLogueado' => null);
        if ($tipo != null ){
            $nombreUsuario = $this->post('nombreUsuario');
            $clave = $this->post('clave');
            switch($tipo){
                case 1://Jugador
                    $tipo = Usuario::TIPO_JUGADOR;
                    break;
                case 2://Arbitro
                    $tipo = Usuario::TIPO_ARBITRO;
                    break;
                case 3://Administrador
                    $tipo = Usuario::TIPO_ADMINISTRADOR;
                    break;
                case 4://Apostador
                    $tipo = Usuario::TIPO_APOSTADOR;
                    break;
                default:
                    break;
            }
            $validLogin = $this->ion_auth->login($nombreUsuario, $clave);
            if ($validLogin){
                $usuario = $this->usuarioDB->buscarUsuario($nombreUsuario, $clave, $tipo);
                if ($usuario instanceof Usuario){
                    $this->session->set_userdata("usuarioLogueado", $usuario);
                    $response['usuarioLogueado'] = $usuario;
                } else {
                    $this->ion_auth->set_errors('login_unsuccessful');
                    $response['error'] = $this->ion_auth->errors();
                }
            } else {
                $response['error'] = $this->ion_auth->errors();
            }
        }
        $this->response($response, REST_Controller::HTTP_OK);
    }
}