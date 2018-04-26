<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 11/03/2018
 * Time: 2:56 PM
 */

class UsuarioDB extends CI_Model
{
    const TABLE_NAME = "usuario";

    const SQL_VALID = "SELECT * FROM " . self::TABLE_NAME . " WHERE username = ? AND password = ? AND tipo = ?";
    const SQL_USUARIOS = "SELECT * FROM " . self::TABLE_NAME . " u ORDER BY u.id DESC";
    const SQL_JUGADORES = "SELECT * FROM " . self::TABLE_NAME . " u WHERE tipo = 'Jugador' ORDER BY u.id DESC";
    const SQL_ARBITROS = "SELECT * FROM " . self::TABLE_NAME . " u WHERE tipo = 'Arbitro' ORDER BY u.id DESC";
    const SQL_SELECT_ID = "SELECT * FROM " . self::TABLE_NAME . " WHERE id = ?";
    const SQL_UPDATE = "UPDATE usuario SET nombre=?, apellido=?, username=?, password=?, telefono=? WHERE id=?";

    const SQL_UPDATE_PASSWORD_ID = "UPDATE auth_user SET password= ? WHERE user_id = ?;";
    const SQL_UPDATE_PASSWORD = "UPDATE auth_user SET password= ? WHERE username = ?;";
    const SQL_DELETE = "DELETE FROM auth_user WHERE user_id = ?";
    const SQL_SELECT = "SELECT * FROM " . self::TABLE_NAME . " ORDER BY user_id";
    const SQL_SELECT_NAME = "SELECT * FROM " . self::TABLE_NAME . " WHERE nombre = ?";

    public function insert(Usuario $usuario)
    {
        $this->db->insert(self::TABLE_NAME, $usuario);
        /**
         * Obtiene el id del cliente que se acabo de insertar
         */
        $idUser = $this->db->insert_id();
        return idUser;
    }

    public function buscarUsuario($nombreUsuario, $clave, $tipo)
    {
        $usuario = null;
        $i = 1;
        $this->db->where('username', $nombreUsuario);
//        $this->db->where('password', $clave);
        $this->db->where('tipo', $tipo);
        $query = $this->db->get(self::TABLE_NAME);
        if ($query->num_rows() != 1) {
            return $usuario;
        }
        $usuarioDb = $query->row();
        $usuario = new Usuario();
        $usuario->setId($usuarioDb->id);
        $usuario->setNombre($usuarioDb->nombre);
        $usuario->setApellido($usuarioDb->apellido);
        $usuario->setCedula($usuarioDb->cedula);
        $usuario->setEstado($usuarioDb->estado);
        $usuario->setNombreUsuario($usuarioDb->username);
        $usuario->setClave($usuarioDb->password);
        $usuario->setTipo($usuarioDb->tipo);
        $usuario->setTelefono($usuarioDb->telefono);
        $usuario->setFechaNacimiento($usuarioDb->fechaNacimiento);
        return $usuario;
    }

    public function getAllUsuarios()
    {
        $usuarios = array();
        $usuario = null;
        $this->db->order_by('id DESC');
        $query = $this->db->get(self::TABLE_NAME);
        foreach ($query->result() as $row) {
            $usuario = new Usuario();
            $usuario->setId($row->id);
            $usuario->setNombre($row->nombre);
            $usuario->setApellido($row->apellido);
            $usuario->setCedula($row->cedula);
            $usuario->setEstado($row->estado);
            $usuario->setNombreUsuario($row->username);
            $usuario->setClave($row->password);
            $usuario->setTipo($row->tipo);
            $usuario->setTelefono($row->telefono);
            $usuario->setFechaNacimiento($row->fechaNacimiento);
            array_push($usuarios, $usuario);
        }
        return $usuarios;
    }

    public function buscarUsuarioById($idUsuario)
    {
        $usuario = null;
        $this->db->where('id', $idUsuario);
        $query = $this->db->get(self::TABLE_NAME);
        $usuarioDb = $query->row();
        $usuario = new Usuario();
        $usuario->setId($usuarioDb->id);
        $usuario->setNombre($usuarioDb->nombre);
        $usuario->setApellido($usuarioDb->apellido);
        $usuario->setCedula($usuarioDb->cedula);
        $usuario->setEstado($usuarioDb->estado);
        $usuario->setNombreUsuario($usuarioDb->username);
        $usuario->setClave($usuarioDb->password);
        $usuario->setTipo($usuarioDb->tipo);
        $usuario->setTelefono($usuarioDb->telefono);
        $usuario->setFechaNacimiento($usuarioDb->fechaNacimiento);
        return $usuario;
    }

    public function update(Usuario $usuario)
    {
        $this->db->set('nombre', $usuario->getNombre());
        $this->db->set('apellido', $usuario->getApellido());
        $this->db->set('username', $usuario->getNombreUsuario());
//        $this->db->set('password', $usuario->getClave());
        $this->db->set('telefono', $usuario->getTelefono());
        $this->db->where('id', $usuario->getId());
        $this->db->update(self::TABLE_NAME);
        $affected_rows = $this->db->affected_rows();
        return ($affected_rows > 0);
    }

    public function getJugadores()
    {
        $jugadores = array();
        $this->db->where('tipo', 'Jugador');
        $this->db->order_by('u.id DESC');
        $query = $this->db->get(self::TABLE_NAME . ' u');
        foreach ($query->result() as $row) {
            $usuario = new Usuario();
            $usuario->setId($row->id);
            $usuario->setNombre($row->nombre);
            $usuario->setApellido($row->apellido);
            $usuario->setCedula($row->cedula);
            $usuario->setEstado($row->estado);
            $usuario->setNombreUsuario($row->username);
            $usuario->setClave($row->password);
            $usuario->setTipo($row->tipo);
            $usuario->setTelefono($row->telefono);
            $usuario->setFechaNacimiento($row->fechaNacimiento);
            array_push($jugadores, $usuario);
        }
        return $jugadores;
    }

    public function getArbitros()
    {
        $arbitros = array();
        $this->db->where('tipo', 'Arbitro');
        $this->db->order_by('u.id DESC');
        $query = $this->db->get(self::TABLE_NAME . ' u');
        foreach ($query->result() as $row) {
            $usuario = new Usuario();
            $usuario->setId($row->id);
            $usuario->setNombre($row->nombre);
            $usuario->setApellido($row->apellido);
            $usuario->setCedula($row->cedula);
            $usuario->setEstado($row->estado);
            $usuario->setNombreUsuario($row->username);
            $usuario->setClave($row->password);
            $usuario->setTipo($row->tipo);
            $usuario->setTelefono($row->telefono);
            $usuario->setFechaNacimiento($row->fechaNacimiento);
            array_push($arbitros, $usuario);
        }
        return $arbitros;
    }
}