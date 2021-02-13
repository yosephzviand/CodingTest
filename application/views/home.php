<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>Home | BKAD GK</title>
  <link href="<?= base_url()?>assets/AdminLTE/dist/img/gk.png" rel="icon">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- jsGrid -->
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/plugins/jsgrid/jsgrid.min.css">
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/plugins/jsgrid/jsgrid-theme.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/dist/css/toastr.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?= base_url()?>assets/AdminLTE3/dist/css/adminlte.min.css">
  <link rel="stylesheet" href="<?= base_url()?>assets/sweetalert/dist/sweetalert.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition layout-top-nav">
  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand-md navbar-orange navbar-light">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="<?= base_url()?>assets/AdminLTE3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
          style="opacity: .8">
          <b>SISTEM INFORMASI BONUS TEST</b>
        </a>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="<?= base_url()?>assets/AdminLTE/dist/img/avatar04.png" class="user-image img-circle elevation-2" alt="User Image">
              <span class="hidden-xs"><b><?php echo ucfirst($this->session->userdata('user_name')); ?></b></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <li class="user-header bg-orange">
                <img src="<?= base_url()?>assets/AdminLTE/dist/img/avatar04.png"  alt="User Image">
                <p><b>
                  <?php echo ucfirst($this->session->userdata('user_name')); ?>
                </b></p>
              </li>
              <li class="user-footer">
                <a href="https://bkad.gunungkidulkab.go.id" target="_blank" class="btn btn-default btn-flat">Profile</a>
                <a href="<?php echo site_url('auth/logout') ?>" class="btn btn-default btn-flat float-right">Sign out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <div class="content-wrapper">
      <div class="content-header">
      </div>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <button type="button" id="pdfdesa" class="btn btn-primary" data-toggle="modal" data-target="#modal-area" title="Tambah Data Area" > Tambah
                  </button>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table width="100%" id="tbinstansi" class="table table-striped table-bordered table-sm">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Aksi</th>
                          <th>Instansi</th>
                          <th>Deskripsi</th>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modal-area">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Tambah Instansi</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div class="card-body">
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Instansi</label>
                      <div class="col-sm-10">
                        <input type="text" name="instansi" class="form-control" id="instansi" placeholder="Instansi">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Deskripsi</label>
                      <div class="col-sm-10">
                        <!-- <input type="text" name="namaarea" class="form-control" id="namaarea" placeholder="Nama Area"> -->
                        <textarea name="deskripsi" class="form-control" id="deskripsi" placeholder="Deskripsi"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary simpan_instansi">Simpan</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modal-area-edit">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Edit Instansi</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div class="card-body">
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">ID</label>
                      <div class="col-sm-10">
                        <input type="text" name="id" class="form-control" id="id" placeholder="Instansi" readonly="">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Instansi</label>
                      <div class="col-sm-10">
                        <input type="text" name="editinstansi" class="form-control" id="editinstansi" placeholder="Instansi">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Deskripsi</label>
                      <div class="col-sm-10">
                        <!-- <input type="text" name="namaarea" class="form-control" id="namaarea" placeholder="Nama Area"> -->
                        <textarea name="editdeskripsi" class="form-control" id="editdeskripsi" placeholder="Deskripsi"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary simpan_edit_instansi">Simpan</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Main Footer -->
      <footer class="main-footer">
        <strong>Copyright &copy; 2021 <a href="https://mervia.my.id" target="_blank">MERVIA</a>.</strong> All rights reserved.
      </footer>
    </div>
    <script src="<?= base_url()?>assets/AdminLTE3/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="<?= base_url()?>assets/AdminLTE3/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- DataTables -->
    <script src="<?= base_url()?>assets/AdminLTE3/plugins/datatables/jquery.dataTables.js"></script>
    <script src="<?= base_url()?>assets/AdminLTE3/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="<?= base_url()?>assets/AdminLTE3/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
    <script src="<?= base_url()?>assets/AdminLTE3/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>

    <!-- AdminLTE App -->

    <script src="<?= base_url()?>assets/AdminLTE3/dist/js/toastr.min.js"></script>
    <script src="<?= base_url()?>assets/AdminLTE3/dist/js/adminlte.min.js"></script>
    <script src="<?= base_url()?>assets/sweetalert/dist/sweetalert.min.js"></script>
    <script src="<?php echo base_url() ?>assets/AdminLTE3/dist/js/bonus.js"></script>

    <script>
      var site_url = '<?php echo site_url(); ?>';
    </script>
  </body>
  </html>
