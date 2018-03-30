<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 28/02/2018
 * Time: 8:24 PM
 */

class Cuadros extends Estructura
{
    public function __construct()
    {
        $this->setIdEstructura(FactoriaEstructura::ESTRUCTURA_CUADROS);
    }

    public function crearEstructura($cantidadJugadores)
    {
        throw new Exception("Not supported yet.");
    }

    public function getCantidadPartidos()
    {
        throw new Exception("Not supported yet.");
    }

    public function getIdSiguientePartido($idPartidoTorneo)
    {
        throw new Exception("Not supported yet.");
    }
}