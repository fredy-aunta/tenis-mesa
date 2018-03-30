<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 28/02/2018
 * Time: 8:27 PM
 */

class FactoriaEstructura
{
    /**
     *
     */
    const ESTRUCTURA_ARBOL = 1;
    /**
     *
     */
    const ESTRUCTURA_CUADROS = 2;

    public function __construct()
    {

    }

    public static function getEstructura($idEstructura)
    {
        $estructura = null;
        switch ($idEstructura) {
            case self::ESTRUCTURA_ARBOL:
                $estructura = new Arbol();
                break;
            case self::ESTRUCTURA_CUADROS:
                $estructura = new Cuadros();
                break;
        }
        return $estructura;
    }

    public function getTipoEstructura()
    {
        return "";
    }
}