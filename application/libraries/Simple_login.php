<?php if(! defined('BASEPATH')) exit('Akses langsung tidak diperbolehkan'); 

class Simple_login {
	// SET SUPER GLOBAL
	var $CI = NULL;
	public function __construct() {
		$this->CI =& get_instance();
	}
	// Fungsi login
	public function login($username, $password) {	
		
		$this->CI->db->select('username');
		$this->CI->db->from('users');
		$array = array('username'=>$username,'password' => md5($password));
		$this->CI->db->where($array);
		$query = $this->CI->db->get();	
		
		if($query->num_rows() == 1) {

			$row 	= $this->CI->db->query("SELECT * FROM users WHERE username ='$username'");
			$admin 	= $row->row();

			$username 		= $admin->username;
			$nama_login 	= $admin->namauser;
			$user_level 	= $admin->level;
			
			$this->CI->session->set_userdata('user_name', $nama_login);
			$this->CI->session->set_userdata('id_login', uniqid(rand()));
			$this->CI->session->set_userdata('user_id', $username);
			$this->CI->session->set_userdata('kunci_jawaban', 'key1245'.md5($password));
			$this->CI->session->set_userdata('user_level', $user_level);


			if($user_level==1)
			{
				$this->CI->session->set_userdata('home', site_url('bonus/index'));
				redirect(site_url('bonus/index'));
			}		
			else if($user_level==5)
			{
				$this->CI->session->set_userdata('home_desa', site_url('welcome/index_desa'));
				redirect(site_url('welcome/index_desa'));
			}		
			else if($user_level==4)
			{
				$this->CI->session->set_userdata('home_kec', site_url('welcome/index_kec'));
				redirect(site_url('welcome/index_kec'));
			}		 	
		}
		else 
		{
			
			$this->CI->session->set_flashdata('error','Oops... Username/password salah');
			redirect(site_url());		
		}
		return false;
	}
	// Proteksi halaman
	public function cek_auth() {
		if($this->CI->session->userdata('user_name') == '') {
			$this->CI->session->set_flashdata('error','Anda belum login');
			redirect(site_url('auth/index'));
		}
	}
	// Fungsi logout
	public function logout() {
		
		$this->CI->session->unset_userdata('user_name');
		$this->CI->session->unset_userdata('id_login');
		$this->CI->session->unset_userdata('user_id');
		$this->CI->session->unset_userdata('user_level');
		$this->CI->session->unset_userdata('kunci_jawaban');
		$this->CI->session->unset_userdata('home');
		$this->CI->session->set_flashdata('success','Anda berhasil logout');
		redirect(site_url('auth/index'));
	}
}