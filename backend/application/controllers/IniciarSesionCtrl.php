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
        $userLogin = $this->post('userLogin');
        $tipo = $this->post('tipo');
        $response = array('usuarioLogueado' => null);
        $responseCode = REST_Controller::HTTP_BAD_REQUEST;
        if ($userLogin){
            $tipo = $userLogin['tipo'];
            $nombreUsuario = $userLogin['nombreUsuario'];
            $clave = $userLogin['clave'];
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
                    $responseCode = REST_Controller::HTTP_OK;
                } else {
                    $this->ion_auth->set_model_error('login_unsuccessful');
                    $response['error'] = $this->ion_auth->model_errors();
                    $response['nom'] = $nombreUsuario;
                    $response['clave'] = $clave;
                    $response['tipo'] = $tipo;
                    $responseCode = REST_Controller::HTTP_UNAUTHORIZED;
                }
            } else {
                $response['error'] = $this->ion_auth->model_errors();
                $responseCode = REST_Controller::HTTP_BAD_REQUEST;
            }
        }
        $this->response($response, $responseCode);
    }
}