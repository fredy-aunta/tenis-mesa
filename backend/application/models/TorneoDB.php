<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 20/03/2018
 * Time: 9:11 PM
 */

class TorneoDB extends CI_Model
{
    const TABLE_NAME = "Torneo";

    public function insert(Torneo $torneo)
    {
        $this->db->insert(self::TABLE_NAME, $torneo->getObjectDatabase(true));
        /**
         * Obtiene el id del torneo que se acabo de insertar
         */
        $idTorneo = $this->db->insert_id();
        return $idTorneo;
    }

    public function definirUsuarios(array $jugadores, array $arbitros)
    {
        return 0;
    }

    public function getAllTorneos()
    {
        $torneos = array();
        $this->db->select('torneo.*,e.nombre');
        $this->db->join('estructura e', 'e.idEstructura = torneo.idEstructura');
        $query = $this->db->get(self::TABLE_NAME);
        foreach ($query->result() as $row) {
            $torneo = new Torneo();
            $torneo->setIdTorneo($row->idTorneo);
            $torneo->setNombre($row->nombre);
            $estructura = FactoriaEstructura::getEstructura($row->idEstructura);
            $torneo->setCantidadJugadores($row->cantidadJugadores);
            $torneo->setCantidadMesas($row->cantidadMesas);
            $estructura->setNombre($row->nombre);
            $torneo->setEstructura($estructura);
            array_push($torneos, $torneo);
        }
        return $torneos;
    }

    public function buscarTorneo($idTorneo)
    {
        $this->db->select('torneo.*,e.nombre');
        $this->db->join('estructura e', 'e.idEstructura = torneo.idEstructura');
        $query = $this->db->get(self::TABLE_NAME);
        $torneoDb = $query->row();
        $torneo = new Torneo();
        $torneo->setIdTorneo($torneoDb->idTorneo);
        $torneo->setNombre($torneoDb->nombre);
        $estructura = FactoriaEstructura::getEstructura($torneoDb->idEstructura);
        $torneo->setCantidadJugadores($torneoDb->cantidadJugadores);
        $torneo->setCantidadMesas($torneoDb->cantidadMesas);
        $estructura->setNombre($torneoDb->nombre);
        $torneo->setEstructura($estructura);

        return $torneo;
    }

    public function buscarTorneoPartido($idPartido)
    {
        $this->db->select('t.*,e.nombre');
        $this->db->join('torneo t', 't.idTorneo = p.idTorneo');
        $this->db->join('estructura e', 'e.idEstructura = t.idEstructura');
        $this->db->where('p.idPartido', $idPartido);
        $query = $this->db->get(self::TABLE_NAME);
        $torneoDb = $query->row();
        $torneo = new Torneo();
        $torneo->setIdTorneo($torneoDb->idTorneo);
        $torneo->setNombre($torneoDb->nombre);
        $estructura = FactoriaEstructura . getEstructura($torneoDb->idEstructura);
        $torneo->setCantidadJugadores($torneoDb->cantidadJugadores);
        $torneo->setCantidadMesas($torneoDb->cantidadMesas);
        $estructura->setNombre($torneoDb->nombre);
        $torneo->setEstructura($estructura);
        return $torneo;
    }
}