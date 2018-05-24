<?php
/**
 * Created by PhpStorm.
 * User: Fredy
 * Date: 16/04/2018
 * Time: 7:29 PM
 */

class Partidos
{
    /**
     * @var array
     */
    private $data;

    public function __construct($cantidadPartidos, array $jugadores, array $arbitros, $fechaHoraInicial)
    {
        $this->data = array();
        $contadorPartidos = 0;
        for ($i = 0; $i < count($jugadores); $i=$i+2) {
            if ($i > 0) {
                $date = $this->getLast()->getFechaHora();
            } else {
                $date = $fechaHoraInicial;
            }
            $date = date('Y-m-d H:i:s',strtotime('+30 minutes',strtotime($date)));

                $jugador1 = new Usuario($jugadores[$i]);
                $jugador2 = new Usuario($jugadores[$i+1]);
                $contadorPartidos++;
                $m_Partido = new Partido();
                $m_Partido->setIdJugador1($jugador1->getId());
                $m_Partido->setIdJugador2($jugador2->getId());
                $m_Partido->setFechaHora($date);
                $m_Partido->setIdPartidoTorneo($contadorPartidos);
                $this->agregar($m_Partido);
        }
        $partidosIniciales = $contadorPartidos;
        for ($i = 0; $i < ($cantidadPartidos-$partidosIniciales); $i++) {
            $date = $this->getLast()->getFechaHora();
            $date = date('Y-m-d H:i:s',strtotime('+30 minutes',strtotime($date)));
            //SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm");
            //Calendar c = Calendar.getInstance();
            //c.setTime(date);
            //c.add(Calendar.MINUTE, 30);  // number of days to add
            //date = c.getTime();  // dt is now the new date
            $contadorPartidos++;
            $m_Partido = new Partido();
            $m_Partido->setFechaHora($date);
            $m_Partido->setIdPartidoTorneo($contadorPartidos);
            $this->agregar($m_Partido);
        }
    }

    /**
     * @return Partido
     */
    private function getLast()
    {
        return end($this->data);
    }

    /**
     * @param Partido $partido
     */
    private function agregar($partido)
    {
        if ($partido instanceof Partido) {
            array_push($this->data, $partido);
        }
    }

    /**
     * @return array
     */
    public function getData()
    {
        return $this->data;
    }
}