<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class CrearUsuarioCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('ion_auth');
    }

    public function index_post()
    {
		$userCreate = $this->post('tournamentCreate');
        $tipo = $userCreate['tipo'];
        $response = array();
		$responseCode = REST_Controller::HTTP_NOT_FOUND;
        if ($userCreate){
            $nombreUsuario = $userCreate['nombreUsuario'];
            $clave = $userCreate['clave'];
            switch($tipo){
                case 1://Jugador
                    $tipo = Usuario::TIPO_JUGADOR;
                    $url = "/jugador/homeJugadorVista.jsp";
                    break;
                case 2://Arbitro
                    $tipo = Usuario::TIPO_ARBITRO;
                    $url = "/arbitro/homeArbitroVista.jsp";
                    break;
                case 3://Administrador
                    $tipo = Usuario::TIPO_ADMINISTRADOR;
                    $url = "/admin/homeAdminVista.jsp";
                    break;
                case 4://Apostador
                    $tipo = Usuario::TIPO_APOSTADOR;
                    $url = "/apostador/homeApostadorVista.jsp";
                    break;
                default:
                    break;
            }
            $additionalInfo = array(
                'nombre' => $userCreate['nombre'],
                'apellido' => $userCreate['apellido'],
                'cedula' => $userCreate['nombreUsuario'],
                'tipo' => $tipo,
                'telefono' => $userCreate['telefono'],
                'fechaNacimiento' => $userCreate['fechaNacimiento']
            );
            $createdUser = $this->ion_auth->register($nombreUsuario, $clave, null, $additionalInfo);
            if ($createdUser){
                $response['usuarioCreado'] = $createdUser;
				$responseCode = REST_Controller::HTTP_OK;
            } else {
                $response['error'] = $this->ion_auth->model_errors();
				$responseCode = REST_Controller::HTTP_BAD_REQUEST;
            }
        }
        $this->response($response, $responseCode);
    }
}