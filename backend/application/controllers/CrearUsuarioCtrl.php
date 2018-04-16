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
        $tipo = $this->post('tipo');
        $response = array('usuarioCreado' => false);
        if ($tipo != null ){
            $nombreUsuario = $this->post('nombreUsuario');
            $clave = $this->post('clave');
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
                'nombre' => $this->post('nombre'),
                'apellido' => $this->post('apellido'),
                'cedula' => $this->post('nombreUsuario'),
                'tipo' => $tipo,
                'telefono' => $this->post('telefono'),
                'fechaNacimiento' => $this->post('fechaNacimiento')
            );
            $idCreatedUser = $this->ion_auth->register($nombreUsuario, $clave, null, $additionalInfo);
            if ($idCreatedUser){
                $response['usuarioCreado'] = $idCreatedUser;
            } else {
                $response['error'] = $this->ion_auth->errors();
            }
        }
        $this->response($response, REST_Controller::HTTP_OK);
    }
}