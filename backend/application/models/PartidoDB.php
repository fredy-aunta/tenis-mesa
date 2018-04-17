<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 4/02/2018
 * Time: 3:12 PM
 */

class PartidoDB extends CI_Model
{
    const TABLE_NAME_PARTIDO = "partido";
    const TABLE_NAME_USUARIO_PARTIDO = "usuariopartido";

    public function __construct()
    {
        parent::__construct();
    }

    public function insert(Partido $partido, $idTorneo)
    {
        $partidoInsert = array(
            'fechaHora' => $partido->getFechaHoraFull(),
            'idTorneo' => $idTorneo,
            'idPartidoTorneo' => $partido->getIdPartidoTorneo()
        );
        $this->db->insert(self::TABLE_NAME_PARTIDO, $partidoInsert);
        $rows = $this->db->affected_rows();
        if ($rows == 1) {
            return true;
        } else {
            return false;
        }
    }

    public function getAllPartidos($idTorneo)
    {
        $query = $this->db->query("SELECT p.idPartido, p.fechaHora, p.idPartidoTorneo," .
            " group_concat(up.idUsuario order by up.idUsuarioPartido ASC, u.tipo ASC SEPARATOR ' ') usuarios," .
            " group_concat(up.resultado order by up.idUsuarioPartido ASC, u.tipo ASC SEPARATOR ' ') resultados," .
            " group_concat(u.tipo order by p.idPartidoTorneo ASC, u.tipo ASC SEPARATOR ' ') tipos" .
            " FROM " . self::TABLE_NAME_PARTIDO . " p" .
            " join usuarioPartido up on up.idPartido = p.idPartido" .
            " join usuario u on u.idUsuario = up.idUsuario" .
            " where p.idTorneo = " . $idTorneo .
            " group by p.idPartido");

        $partidos = array();
        foreach ($query->result() as $row) {
            $partido = new Partido();
            $partido->setIdPartido($row->idPartdo);
            $partido->setFechaHora($row->fechaHora);
            $partido->setIdPartidoTorneo($row->idPartidoTorneo);
            list($resultado1,$resultado2) = explode(' ',$row->resultados);
            list($idJugador1,$idJugador2,$idArbitro) = explode(' ',$row->usuarios);
            $partido->setIdJugador1($idJugador1);
            $partido->setIdJugador2($idJugador2);
            $partido->setResultado1($resultado1);
            $partido->setResultado2($resultado2);
            $partido->setIdArbitro($idArbitro);
            $partidos[] = $partido;
        }
        return $partidos;
    }

    public function buscarPartido($idPartido) {
        $query = $this->db->query("SELECT p.idPartido, p.fechaHora, p.idPartidoTorneo
, group_concat(up.idUsuario order by up.idUsuarioPartido ASC, u.tipo ASC SEPARATOR ' ') usuarios
, group_concat(up.resultado order by up.idUsuarioPartido ASC, u.tipo ASC SEPARATOR ' ') resultados
, group_concat(u.tipo order by p.idPartidoTorneo ASC, u.tipo ASC SEPARATOR ' ') tipos
 FROM " . self::TABLE_NAME_PARTIDO . "p
 join usuarioPartido up on up.idPartido = p.idPartido
 join usuario u on u.idUsuario = up.idUsuario 
 where up.idPartido = " . $idPartido .
 "group by p.idPartido");
        $partido_db = $query->row();
        $partido = new Partido($partido_db);
        return $partido;
    }

    /**
     * @param Partido $partido
     * @return integer
     */
    public function update(Partido $partido)
    {
        $this->db->set('fechaHora', $partido->getFechaHoraFull());
        $this->db->where('idPartido', $partido->getIdPartido());
        $this->db->update(self::TABLE_NAME_PARTIDO);
        $affected_rows = $this->db->affected_rows();
        return $affected_rows;
    }

    /**
     * @param Partido $partido
     * @return bool
     */
    public function subirResultados(Partido $partido)
    {
        $this->db->set('resultado', $partido->getResultado1());
        $this->db->where('idPartido', $partido->getIdPartido());
        $this->db->where('idUsuario', $partido->getIdJugador1());
        $this->db->update(self::TABLE_NAME_USUARIO_PARTIDO);

        $affected_rows = $this->db->affected_rows();

        $this->db->set('resultado', $partido->getResultado2());
        $this->db->where('idPartido', $partido->getIdPartido());
        $this->db->where('idUsuario', $partido->getIdJugador2());
        $this->db->update(self::TABLE_NAME_USUARIO_PARTIDO);

        $affected_rows += $this->db->affected_rows();

        if ($affected_rows > 0) {
            return true;
        }
        return false;
    }

    public function definirSiguientePartido(Torneo $torneo, Partido $partido)
    {
        $e = $torneo->getEstructura();
        $idNextUsuario = $partido->getIdGanador();
        $this->db->select("up.idUsuarioPartido");
        $this->db->join('partido p','p.idPartido = up.idPartido');
        $this->db->where('p.idPartidoTorneo', $e->getIdSiguientePartido($partido->getIdPartidoTorneo()));
        $this->db->where('p.idTorneo', $torneo->getIdTorneo());
        $this->db->where('up.idUsuario', 0);
        $this->db->order_by('up.idUsuarioPartido ASC');
        $this->db->limit(1);
        $query = $this->db->get("usuariopartido up");
        $idUsuarioPartido = $query->row()->idUsuarioPartido;
        $this->db->set('idUsuario');
        $this->db->where('idUsuarioPartido', $idNextUsuario);
        $this->db->update('usuariopartido', $idUsuarioPartido);
        $affected_rows = $this->db->affected_rows();
        return ($affected_rows > 0);
    }
}