<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 16/04/2018
 * Time: 10:19 PM
 */

class ModificarUsuarioCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('usuarioDB');
    }

    public function index_put()
    {
        $idUsuario = $this->put("idUsuario");
        $usuario = new Usuario();
        $usuario->setId($idUsuario);
        $usuario->setNombre($this->put("nombre"));
        $usuario->setApellido($this->put("apellido"));
        $usuario->setTelefono($this->put("telefono"));
        $usuario->setNombreUsuario($this->put("nombreUsuario"));
//        TODO: Utilizar las funcionaes de ION AUTH
//        $usuario.setClave(request.getParameter("clave"));

        $registrosActualizados = $this->usuarioDB->update($usuario);
        if ($registrosActualizados == 1) {
            $response['mensaje'] = "Actualizado";
            $responseCode = REST_Controller::HTTP_OK;
        } else {
            $response['error'] = "Error em Registros Actualizados";
            $responseCode = REST_Controller::HTTP_BAD_REQUEST;
        }
        $usuarioLogueado = $this->session->userdata("usuarioLogueado");
        $tipo = null;
        if ($usuarioLogueado instanceof Usuario) {
            $tipo = $usuarioLogueado->getTipo();
        }
        $response['tipo'] = $tipo;
        $usuario = $this->usuarioDB->buscarUsuario($idUsuario);
        $response['usuario'] = $usuario;

        $this->response($response, $responseCode);
    }
}