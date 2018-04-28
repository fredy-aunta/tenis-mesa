<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 4/03/2018
 * Time: 6:41 PM
 */

class Nodo
{
    /**
     * @var integer
     */
    public $dato;
    /**
     * @var Nodo
     */
    public $izq, $der;

    public function __construct($dato = null, $izq = null, $der = null)
    {
        if (!is_null($dato)) {
            $this->dato = $dato;
        }
        if (!is_null($izq)) {
            $this->izq = $izq;
        }
        if (!is_null($der)) {
            $this->der = $der;
        }
    }

    /**
     * @return int
     */
    public function getDato()
    {
        return $this->dato;
    }

    /**
     * @param int $dato
     */
    public function setDato($dato)
    {
        $this->dato = $dato;
    }

    /**
     * @return Nodo
     */
    public function getIzq()
    {
        return $this->izq;
    }

    /**
     * @param Nodo $izq
     */
    public function setIzq($izq)
    {
        $this->izq = $izq;
    }

    /**
     * @return Nodo
     */
    public function getDer()
    {
        return $this->der;
    }

    /**
     * @param Nodo $der
     */
    public function setDer($der)
    {
        $this->der = $der;
    }
}