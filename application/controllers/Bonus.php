<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bonus extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('models');
	}

	public function index()
	{
		$this->load->view('home');
	}

	public function insert()
	{
		$instansi = $_POST['instansi'];
		$deskripsi = $_POST['deskripsi'];
		$data = array(
			'instansi' => $instansi,
			'deskripsi' => $deskripsi
		);

		$list = $this->models->insert('instansi', $data);

		if ($list) {
			echo json_encode(array("status" => TRUE, "alert" => 'success', "data" => 'Berhasil Simpan', "title" => 'Info'));
		} else {
			echo json_encode(array("status" => TRUE, "alert" => 'warning', "data" => 'Tidak Berhasil', "title" => 'Info'));
		}

	}

	public function ajaxinstansi(){
		$list = $this->models->instansi();
		$data = array();
		$no = 0;
		foreach ($list as $item) {

			$no++;
			$row = array();
			$row[] = $no;
			$row[] = '<button class="btn btn-sm btn-warning edit"  data-kode="' . $item->idinstansi . '"><i class="nav-icon fas fa-pencil-alt"></i></button> <div id="process" class="spinner-border text-warning" role="status" style="display: none;"><span class="sr-only"></span></div> 
			<button class="btn btn-sm btn-danger hapus"  data-kode="' . $item->idinstansi . '"><i class="nav-icon fas fa-trash-alt"></i></button> <div id="process" class="spinner-border text-warning" role="status" style="display: none;"><span class="sr-only"></span></div>';
			$row[] = $item->instansi;
			$row[] = $item->deskripsi;
			$data[] = $row;
		}

		$output = array(
			"data" => $data,
		);
		echo json_encode($output);
	}

	public function get_edit()
	{
		$id = $this->input->post('id');
		$list = $this->models->edit($id);

		echo json_encode($list);
	}

	public function update()
	{
		$id = $_POST['id'];
		$instansi = $_POST['instansi'];
		$deskripsi = $_POST['deskripsi'];
		$data = array(
			'instansi' => $instansi,
			'deskripsi' => $deskripsi
		);

		$where = array(
			'idinstansi' => $id,
		);

		$list = $this->models->update('instansi', $data, $where);

		if ($list) {
			echo json_encode(array("status" => TRUE, "alert" => 'success', "data" => 'Berhasil Simpan', "title" => 'Info'));
		} else {
			echo json_encode(array("status" => TRUE, "alert" => 'warning', "data" => 'Tidak Berhasil', "title" => 'Info'));
		}

	}

	public function delete()
	{
		$id = $_POST['id'];
		$data = array('idinstansi' => $id);
		$list = $this->models->delete('instansi',$data);

		if ($list) {
			echo json_encode(array("status" => TRUE, "alert" => 'success', "data" => 'Berhasil Dihapus', "title" => 'Info'));
		} else {
			echo json_encode(array("status" => TRUE, "alert" => 'warning', "data" => 'Tidak Berhasil', "title" => 'Info'));
		}
	}


}
