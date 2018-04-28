<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 28/02/2018
 * Time: 8:00 PM
 */

class Torneo
{
    public $idTorneo;
    public $nombre;
    public $estructura;
    public $cantidadJugadores;
    public $cantidadMesas;
    public $partidos;

    public function __construct($torneo_db = null)
    {
        if (!is_null($torneo_db)){
            if (is_array($torneo_db)) {
                $torneo_db = (object) $torneo_db;
            }
            $this->setIdTorneo($torneo_db->idTorneo);
            $this->setNombre($torneo_db->nombre);
            $this->setCantidadJugadores($torneo_db->cantidadJugadores);
            $this->setCantidadMesas($torneo_db->cantidadMesas);
            if (isset($torneo_db->estructura) && isset($torneo_db->estructura['idEstructura'])) {
                $estructura = FactoriaEstructura::getEstructura($torneo_db->estructura['idEstructura']);
                $this->setEstructura($estructura);
            }
        }
    }

    /**
     * @return mixed
     */
    public function getIdTorneo()
    {
        return $this->idTorneo;
    }

    /**
     * @param mixed $idTorneo
     */
    public function setIdTorneo($idTorneo)
    {
        $this->idTorneo = $idTorneo;
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

    /**
     * @return Estructura
     */
    public function getEstructura()
    {
        return $this->estructura;
    }

    /**
     * @param Estructura $estructura
     */
    public function setEstructura($estructura)
    {
        $this->estructura = $estructura;
    }

    /**
     * @return mixed
     */
    public function getCantidadJugadores()
    {
        return $this->cantidadJugadores;
    }

    /**
     * @param mixed $cantidadJugadores
     */
    public function setCantidadJugadores($cantidadJugadores)
    {
        $this->cantidadJugadores = $cantidadJugadores;
    }

    /**
     * @return mixed
     */
    public function getCantidadMesas()
    {
        return $this->cantidadMesas;
    }

    /**
     * @param mixed $cantidadMesas
     */
    public function setCantidadMesas($cantidadMesas)
    {
        $this->cantidadMesas = $cantidadMesas;
    }

    /**
     * @return mixed
     */
    public function getPartidos()
    {
        return $this->partidos;
    }

    /**
     * @param mixed $partidos
     */
    public function setPartidos($partidos)
    {
        $this->partidos = $partidos;
    }

    public function getObjectDatabase($exludeId = false)
    {
        $obj = new stdClass();
        if (!$exludeId) {
            $obj->idTorneo = $this->getIdTorneo();
        }
        $obj->nombre = $this->getNombre();
        $obj->idEstructura = $this->getEstructura()->getIdEstructura();
        $obj->cantidadJugadores = $this->getCantidadJugadores();
        $obj->cantidadMesas = $this->getCantidadMesas();
        return $obj;
    }
}