        <?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 16/04/2018
 * Time: 10:02 PM
 */

class ModificarPartidoCtrl extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('partidoDB');
    }

    public function index_put()
    {
        $response = array();
        $idPartido = $this->put("idPartido");
        $partido = new Partido();
        $partido->setIdPartido($idPartido);
        $fechaHora = $this->put("fechaHora");

        $partido->setFechaHora($fechaHora);
log_message('error', print_r($partido, true));
        $registrosActualizados = $this->partidoDB->update($partido);
        if ($registrosActualizados == 1) {
            $response['mensaje'] = "Actualizado";
            $responseCode = REST_Controller::HTTP_OK;
        } else {
            $response['error'] = "Error em Registros Actualizados";
            $responseCode = REST_Controller::HTTP_BAD_REQUEST;
        }
        $usuario = $this->session->userdata("usuarioLogueado");
        $tipo = null;
        if ($usuario instanceof Usuario) {
            $tipo = $usuario->getTipo();
        }
        $response['tipo'] = $tipo;
        $partido = $this->partidoDB->buscarPartido($idPartido);
        $response['partido'] = null;
        if ($partido instanceof Partido) {
            $response['partido'] = $partido;
        }

        $this->response($response, $responseCode);
    }
}