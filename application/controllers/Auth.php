<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function index()
	{
		$this->load->library('form_validation');
		$valid = $this->form_validation;
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$this->load->view('login');
		
		$valid->set_rules('username','Username','required');
		$valid->set_rules('password','Password','required');

		if($valid->run()) {
			$this->simple_login->login($username,$password);
		}
	}

	public function login() {
		
		if($this->session->userdata('user_name') == '') {
			$this->CI->session->set_flashdata('error','Anda belum login');
			$this->load->library('form_validation');
			$valid = $this->form_validation;
			$username = $this->input->post('username');
			$password = $this->input->post('password');
			$this->load->view('login');
			
			$valid->set_rules('username','Username','required');
			$valid->set_rules('password','Password','required');

			if($valid->run()) {
				$this->simple_login->login($username,$password);
			}
		}
	}

	public function logout() {
		
		$this->simple_login->logout();
	}
}
