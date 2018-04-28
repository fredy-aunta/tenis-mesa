<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 4/03/2018
 * Time: 6:35 PM
 */

class ArbolEstructura
{
    /**
     * @var integer
     */
    public $res;
    /**
     * @var Nodo
     */
    public $raiz;
    public $cant;
    public $altura;
    public $subizq;
    public $subder;
    /**
     * @var array
     */
    public $niveles;

    public function __construct(Nodo $nodo = null)
    {
        $this->raiz = $nodo;
        $this->subizq = 0;
        $this->subder = 0;
    }

    public function agregar($dato)
    {
        $nuevo = new Nodo(dato, null, null);
        $this->insertar($nuevo, $this->raiz);
    }

    public function insertar($nuevo, $pivote)
    {
        if ($this->raiz == null) {
            $this->raiz = $nuevo;
        } else {
            if ($nuevo->getDato() <= $pivote->getDato()) {
                if ($pivote->getIzq() == null) {
                    $pivote->setIzq($nuevo);
                } else {
                    insertar($nuevo, $pivote->getIzq());
                }
            } else {
                if ($pivote->getDer() == null) {
                    $pivote->setDer($nuevo);
                } else {
                    insertar($nuevo, $pivote->getDer());
                }
            }
        }

    }

    /**
     * @param $info
     * @return bool
     */
    public function existe($info)
    {
        $reco = $this->raiz;
        while ($reco != null) {
            if ($info == $reco->getDato()) {
                return true;
            } else if ($info > $reco->getDato()) {
                $reco = $reco->getDer();
            } else {
                $reco = $reco->getIzq();
            }
        }
        return false;
    }

    //TODO: Revisar funcionalidad
    public function cantidad($reco = null)
    {
        if ($reco != null) {
            $this->cant++;
            $this->cantidad($reco->getIzq());
            $this->cantidad($reco->getDer());
        } else {
            $this->cant = 0;
            $this->cantidad($this->raiz);
        }
        return $this->cant;
    }

    //TODO: Revisar funcionalidad
    private function cantidadNodosHoja($reco = null)
    {
        if ($reco != null) {
            if ($reco->getIzq() == null && $reco->getDer() == null) {
                $this->cant++;
            }
            $this->cantidadNodosHoja($reco->getIzq());
            $this->cantidadNodosHoja($reco->getDer());
        } else {
            $this->cant = 0;
            $this->cantidadNodosHoja($this->raiz);
        }
        return $this->cant;
    }

    //TODO: Revisar funcionalidad
    private function retornarAltura($reco, $nivel)
    {
        if ($reco != null) {
            $this->retornarAltura($reco->getIzq(), $nivel + 1);
            if ($nivel > $this->altura) {
                $this->altura = $nivel;
            }
            $this->retornarAltura($reco->getDer(), $nivel + 1);
        } else {
            $this->altura = 0;
            $this->retornarAltura($this->raiz, 1);
        }
        return $this->altura;
    }

    public function menorValor()
    {
        if ($this->raiz != null) {
            $reco = $this->raiz;
            while ($reco->getIzq() != null) {
                $reco = $reco->getIzq();
            }
            log_message('info', "Menor valor del árbol:" . $reco->getDato());
        }
    }

    public function mayorValor()
    {
        if ($this->raiz != null) {
            $reco = $this->raiz;
            while ($reco->getDer() != null) {
                $reco = $reco->getDer();
            }
            log_message('info', "Mayor valor del árbol:" . $reco->getDato());
        }
    }


    public function imprimirBalance()
    {
        $this->subizq = 0;
        $this->subder = 0;

        $this->balance($this->raiz, true, 0);
        log_message('info', "lado Izquierdo " . $this->subizq . " Lado Derecho " . $this->subder);
        if ($this->subizq - $this->subder == 0) {
            log_message('info', "El balance es: 0");
        } elseif ($this->subizq - $this->subder == -1) {
            log_message('info', "El balance es -1, derecha");
        } else if ($this->subizq - $this->subder == 1) {
            log_message('info', "El balance 1, izquierda");
        } else {
            log_message('info', "No es balanceado... " .
                "porque es mas grande el lado" .
                (($this->subizq > $this->subder) ? "Izquierdo" : "Derecho"));
        }
    }

    public function balance($reco, $lado, $i)
    {
        if ($reco != null) {

            if ($reco->getDer() == null && $reco->getIzq() == null) {
                if ($lado) {
                    $this->subder = ($i > $this->subder) ? $i : $this->subder;
                } else {
                    $this->subizq = ($i > $this->subizq) ? $i : $this->subizq;
                }
            }

            $this->balance($reco->getDer(), $lado, $i + 1);
            if ($i == 0) {
                $lado = false;
            }
            $this->balance($reco->getIzq(), $lado, $i + 1);
        }
    }

    public function alturaArbol($pivote, $nivel)
    {
        if ($pivote != null) {
            $this->alturaArbol($pivote->getIzq(), $nivel + 1);
            if ($nivel > $this->altura) {
                $this->altura = $nivel;
            }
            $this->alturaArbol($pivote->getDer(), $nivel + 1);
        } else {
            $this->altura = 0;
            $this->alturaArbol(raiz, 0);
        }
        return $this->altura;
    }

//    public function imprimirNivel($pivote = null, $nivel2 = null)
//    {
//        if ($pivote != null) {
//            $this->niveles[$nivel2] = $pivote->getDato() . ", " . (($this->niveles[$nivel2] != null) ? $this->niveles[$nivel2] : "");
//            $this->imprimirNivel($pivote->getDer(), $nivel2 + 1);
//            $this->imprimirNivel($pivote->getIzq(), $nivel2 + 1);
//        } else {
//            $this->niveles = new String[$this->altura + 1];
//
//            $this->imprimirNivel($this->raiz, 0);
//            for ($i = 0; $i < count($this->niveles); $i++) {
//                log_message('info', $this->niveles[$i] . " En nivel: " . $i);
//            }
//        }
//
//    }

    /**
     * @param Nodo $nodo
     */
    private function ayudantePreorden($nodo)
    {
        if ($nodo == null) {
            return;
        }
        log_message('info', "Dato: " . $nodo->getDato());
        $this->ayudantePreorden($nodo->getIzq());
        $this->ayudantePreorden($nodo->getDer());
    }

    public function recorridoPreorden()
    {
        $this->ayudantePreorden($this->raiz);
    }

    public function padre($padre, $hijo)
    {
        $p = 0;
        if ($padre == null) {
            return;
        }
        if ($padre->getIzq()->getDato() == $hijo) {
            $p = $padre->getDato();
            $res = $padre->getDato();
        } else if ($padre->getDer()->getDato() == $hijo) {
            $p = $padre->getDato();
            $res = $padre->getDato();
        } else if ($padre->getIzq()->getIzq() != null) {
            $this->padre($padre->getIzq(), $hijo);
            $this->padre($padre->getDer(), $hijo);
        }
        return;
    }

    /**
     * @return Nodo
     */
    public function getRaiz()
    {
        return $this->raiz;
    }

    /**
     * @return integer
     */
    public function getRes()
    {
        return $this->res;
    }


}