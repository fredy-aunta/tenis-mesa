<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 28/02/2018
 * Time: 8:00 PM
 */

class Torneo
{
    private $idTorneo;
    private $nombre;
    private $estructura;
    private $cantidadJugadores;
    private $cantidadMesas;
    private $partidos;

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
     * @return mixed
     */
    public function getEstructura()
    {
        return $this->estructura;
    }

    /**
     * @param mixed $estructura
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


}