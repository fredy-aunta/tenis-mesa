<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 28/02/2018
 * Time: 8:16 PM
 */

abstract class Estructura
{
    private $idEstructura;
    private $nombre;

    function __construct()
    {
        $this->setIdEstructura(FactoriaEstructura.ESTRUCTURA_ARBOL);
    }

    public abstract function crearEstructura($cantidadJugadores);

    public abstract function getCantidadPartidos();

    public abstract function getIdSiguientePartido($idPartidoTorneo);

    /**
     * @return mixed
     */
    public function getIdEstructura()
    {
        return $this->idEstructura;
    }

    /**
     * @param integer $idEstructura
     */
    public function setIdEstructura($idEstructura)
    {
        $this->idEstructura = $idEstructura;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }


}