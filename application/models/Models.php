<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Models extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
	}

	public function insert($table,$data)
	{
		$res = $this->db->insert($table,$data);
		return $res;
	}

	public function update($table,$data,$where){
		$res = $this->db->update($table,$data, $where);
		return $res;
	}

	public function delete($table,$where){
		$res = $this->db->delete($table,$where);
		return $res;
	}

	public function instansi()
	{
		$hasil = $this->db->get('instansi');
		return $hasil->result();
	}
	public function edit($id)
	{
		$this->db->where('idinstansi', $id);
		$hasil = $this->db->get('instansi');
		return $hasil->result();
	}
}