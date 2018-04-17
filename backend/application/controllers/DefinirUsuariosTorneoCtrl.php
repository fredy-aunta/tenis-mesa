<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:43 PM
 */

class DefinirUsuariosTorneoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('torneoDB');
    }

    public function index_post()
    {
//        String[] jugadoresSeleccionados, arbitrosSeleccionados, names;
        $jugadoresSeleccionados = $this->post("jugadoresSelec");
        $arbitrosSeleccionados = $this->post("arbitrosSelec");
//        ArrayList<Usuario> jugadores = construirUsuarios(new ArrayList<String>(Arrays.asList(jugadoresSeleccionados)));
//        ArrayList<Usuario> arbitros = construirUsuarios(new ArrayList<String>(Arrays.asList(arbitrosSeleccionados)));
        $this->torneoDB->definirUsuarios($jugadoresSeleccionados, $arbitrosSeleccionados);
        $this->session->set_userdata("jugadoresSesion", $jugadoresSeleccionados);
        $this->session->set_userdata("arbitrosSesion", $arbitrosSeleccionados);

        $response = array(
            'estadoAsociación' => true
        );
        $this->response($response, REST_Controller::HTTP_OK);
    }
}