<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 28/02/2018
 * Time: 8:19 PM
 */
require_once APPPATH . 'modelo/Estructura.php';
class Arbol extends Estructura
{
    /**
     * @var ArbolEstructura
     */
    public $arbol;

    public function __construct()
    {
        $this->setIdEstructura(FactoriaEstructura::ESTRUCTURA_ARBOL);
    }

    /**
     * @param $cantidadJugadores
     */
    public function crearEstructura($cantidadJugadores)
    {
        $this->arbol = $this->crearArbol($cantidadJugadores / 2);
    }

    public function crearArbol($cantidadPartidosInicio)
    {
        $nodos = array();
        $newNodos = array();
        $numeroNodos = 1;
        for ($i = 0; $i < $cantidadPartidosInicio; $i++) {
            $nodo = new Nodo($numeroNodos);
            $numeroNodos++;
            array_push($nodos, $nodo);
        }
        $raiz = $this->construirArbol($nodos, $numeroNodos);
        $arbol = new ArbolEstructura($raiz);
        return $arbol;
    }

    private function construirArbol(array $nodos, $numeroNodos)
    {
        $n = null;
        if (count($nodos) >= 2) {
            $newNodos = array();
            for ($i = 0; $i < count($nodos); $i = $i + 2) {
                $nodo = new Nodo($numeroNodos);
                $nodo->setIzq($nodos[$i]);
                $nodo->setDer($nodos[$i + 1]);
                $numeroNodos++;
                array_push($newNodos, $nodo);
            }
            $nodos = $newNodos;
            $n = $this->construirArbol($nodos, $numeroNodos);
        } else {
            $n = $nodos[0];
        }
        return $n;
    }

    public function getCantidadPartidos()
    {
//        return $this->arbol->cantidad();
        return 8;
    }

    /**
     * @param $idPartidoTorneo
     * @return int
     */
    public function getIdSiguientePartido($idPartidoTorneo)
    {
        $this->arbol->padre($this->arbol->getRaiz(), $idPartidoTorneo);
        return $this->arbol->getRes();
    }
}