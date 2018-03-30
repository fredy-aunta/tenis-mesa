<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 4/02/2018
 * Time: 3:17 PM
 */

class Partido
{
    private $idPartido;
    /**
     * @var DateTime
     */
    private $fechaHora;
    private $idPartidoTorneo;
    private $idJugador1;
    private $idJugador2;
    private $resultado1;
    private $resultado2;
    private $idArbitro;

    public function __construct($partido_db = null)
    {
        if (!is_null($partido_db)){
            $this->setIdPartido($partido_db->idPartido);
            $this->setFechaHora($partido_db->fechaHora);
            $this->setIdPartidoTorneo($partido_db->idPartidoTorneo);
            list($resultado1,$resultado2) = explode(' ',$partido_db->resultados);
            list($idJugador1,$idJugador2,$idArbitro) = explode(' ',$partido_db->usuarios);
            $this->setIdJugador1($idJugador1);
            $this->setIdJugador2($idJugador2);
            $this->setResultado1($resultado1);
            $this->setResultado2($resultado2);
            $this->setIdArbitro($idArbitro);
        }
    }

    /**
     * @return mixed
     */
    public function getIdPartido()
    {
        return $this->idPartido;
    }

    /**
     * @param mixed $idPartido
     */
    public function setIdPartido($idPartido)
    {
        $this->idPartido = $idPartido;
    }

    /**
     * @return mixed
     */
    public function getFechaHora()
    {
        return $this->fechaHora;
    }

    /**
     * @param mixed $fechaHora
     */
    public function setFechaHora($fechaHora)
    {
        $this->fechaHora = $fechaHora;
    }

    /**
     * @return mixed
     */
    public function getIdPartidoTorneo()
    {
        return $this->idPartidoTorneo;
    }

    /**
     * @param mixed $idPartidoTorneo
     */
    public function setIdPartidoTorneo($idPartidoTorneo)
    {
        $this->idPartidoTorneo = $idPartidoTorneo;
    }

    /**
     * @return mixed
     */
    public function getIdJugador1()
    {
        return $this->idJugador1;
    }

    /**
     * @param mixed $idJugador1
     */
    public function setIdJugador1($idJugador1)
    {
        $this->idJugador1 = $idJugador1;
    }

    /**
     * @return mixed
     */
    public function getIdJugador2()
    {
        return $this->idJugador2;
    }

    /**
     * @param mixed $idJugador2
     */
    public function setIdJugador2($idJugador2)
    {
        $this->idJugador2 = $idJugador2;
    }

    /**
     * @return mixed
     */
    public function getResultado1()
    {
        return $this->resultado1;
    }

    /**
     * @param mixed $resultado1
     */
    public function setResultado1($resultado1)
    {
        $this->resultado1 = $resultado1;
    }

    /**
     * @return mixed
     */
    public function getResultado2()
    {
        return $this->resultado2;
    }

    /**
     * @param mixed $resultado2
     */
    public function setResultado2($resultado2)
    {
        $this->resultado2 = $resultado2;
    }

    /**
     * @return mixed
     */
    public function getIdArbitro()
    {
        return $this->idArbitro;
    }

    /**
     * @param mixed $idArbitro
     */
    public function setIdArbitro($idArbitro)
    {
        $this->idArbitro = $idArbitro;
    }

    public function getFechaHoraF()
    {
        //$dt1 = new SimpleDateFormat("yyyy-MM-dd hh:mm");
        //return $dt1.format($this->getFechaHora());
    }

    public function getFechaHoraFull()
    {
        //SimpleDateFormat dt1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        //return $dt1.format(this.getFechaHora());
    }

    public function terminado()
    {
        return ($this->esGanador1() || $this->esGanador2());
    }

    private function esGanador1()
    {
        return ($this->getResultado1() >= 11 && ($this->getResultado1() - $this->getResultado2()) >= 2);
    }

    private function esGanador2()
    {
        return ($this->getResultado2() >= 11 && ($this->getResultado2() - $this->getResultado1()) >= 2);
    }

    public function getIdGanador()
    {
        if ($this->esGanador1()) {
            return $this->getIdJugador1();
        }
        if ($this->esGanador2()) {
            return $this->getIdJugador2();
        }
        return 0;
    }
}