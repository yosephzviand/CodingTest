jQuery(document).ready(function ($) {
	// $('.select2').select2();

	

	$('#datepicker').datepicker({
		autoclose: true,
		format: "yyyy-mm-dd",
	});

	$('#datepicker1').datepicker({
		autoclose: true,
		format: "yyyy-mm-dd",
	});

	area = $('#tbarea').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxarea",
			"type": "POST"
		},

	});

	paket = $('#tbpaketharga').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxharga",
			"type": "POST"
		},

	});

	pelanggan = $('#tbpelanggan').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxpelanggan",
			"type": "POST"
		},

	});

	pengguna = $('#tbpengguna').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxpengguna",
			"type": "POST"
		},

	});

	tbtagihan = $('#tbtagihan').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxtagihan",
			"type": "POST"
		},

	});

	tbpembayaran = $('#tbpembayaran').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxpembayaran",
			"type": "POST"
		},

	});

	tbuserpelanggan = $('#tbuserpelanggan').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxuserpelanggan",
			"type": "POST"
		},

	});

	tbkaryawan = $('#tbkaryawan').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxkaryawan",
			"type": "POST"
		},

	});

	tbgajian = $('#tbgajian').DataTable({

		"ajax": {
			"url": site_url + "amc/ajaxgajian",
			"type": "POST"
		},

	});


	$('.content-wrapper').on('click', '.editarea', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editarea",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idarea"]').val(data[i].idarea);
					$('[name="editnamaarea"]').val(data[i].namaarea);
					$('#modal-edit-area').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_area', function (e) {
		e.preventDefault();
		var namaarea = $('#namaarea').val();
		if (namaarea == '') {
			swal({
				title: "Error!",
				text: "Nama Area Harus Disi !!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertarea",
				data: { namaarea: namaarea },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-area').modal('hide');
					area.ajax.reload(null, false);
				}
			})
		}
		
	});

	$('.content-wrapper').on('click', '.simpan_area_edit', function (e) {
		e.preventDefault();
		var idarea = $('#idarea').val();
		var namaarea = $('#editnamaarea').val();
		if (namaarea == '') {
			swal({
				title: "Error!",
				text: "Nama Area Harus Disi !!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatearea",
				data: { idarea: idarea, namaarea: namaarea },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-area').modal('hide');
					area.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapusarea', function (e) {
		e.preventDefault();
		var idarea = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletearea",
				data: { idarea: idarea},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					area.ajax.reload(null, false);
				}
			});
		});
	});

	$('.content-wrapper').on('click', '.editpaket', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editpaket",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idpaket"]').val(data[i].idpaket);
					$('[name="editnamapaket"]').val(data[i].namapaket);
					$('[name="edithargapaket"]').val(data[i].hargapaket);
					$('#modal-edit-paket').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_paket', function (e) {
		e.preventDefault();
		var namapaket = $('#namapaket').val();
		var hargapaket =  $('#hargapaket').val();
		if (namapaket == '' || hargapaket == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertpaket",
				data: { namapaket: namapaket, hargapaket: hargapaket },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-paket').modal('hide');
					paket.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_paket_edit', function (e) {
		e.preventDefault();
		var idpaket = $('#idpaket').val();
		var namapaket = $('#editnamapaket').val();
		var hargapaket =  $('#edithargapaket').val();
		if (namapaket == '' || hargapaket == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatepaket",
				data: { idpaket: idpaket, namapaket: namapaket, hargapaket: hargapaket },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-paket').modal('hide');
					paket.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapuspaket', function (e) {
		e.preventDefault();
		var idpaket = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletepaket",
				data: { idpaket: idpaket},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					paket.ajax.reload(null, false);
				}
			})
		})
	});

	$('.content-wrapper').on('click', '.editpelanggan', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editpelanggan",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idpelanggan"]').val(data[i].idpelanggan);
					$('[name="editnamapelanggan"]').val(data[i].namapelanggan);
					$('[name="editalamatpelanggan"]').val(data[i].alamatpelanggan);
					$('[name="editnotelp"]').val(data[i].notelp);
					$('[name="editareapelanggan"]').val(data[i].idarea);
					$('#modal-edit-pelanggan').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_pelanggan', function (e) {
		e.preventDefault();
		var namapelanggan = $('#namapelanggan').val();
		var alamatpelanggan =  $('#alamatpelanggan').val();
		var areapelanggan =  $('#areapelanggan').val();
		var notelp =  $('#notelp').val();
		var paket = $('#paketpelanggan').val();
		var harga =  $('#hargapaket').val();
		var sales = $('#sales').val();
		if (namapelanggan == '' || alamatpelanggan == '' || areapelanggan == '' || notelp == '' || paket == '' || harga == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertpelanggan",
				data: { namapelanggan: namapelanggan, alamatpelanggan: alamatpelanggan, areapelanggan: areapelanggan, notelp: notelp, paket: paket, harga: harga, sales: sales },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-pelanggan').modal('hide');
					pelanggan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_pelanggan_edit', function (e) {
		e.preventDefault();
		var idpelanggan = $('#idpelanggan').val();
		var namapelanggan = $('#editnamapelanggan').val();
		var alamatpelanggan =  $('#editalamatpelanggan').val();
		var areapelanggan =  $('#editareapelanggan').val();
		var notelp =  $('#editnotelp').val();
		var paket = $('#editpaketpelanggan').val();
		var harga =  $('#edithargapaket').val();
		var sales = $('#editsales').val();
		if (namapelanggan == '' || alamatpelanggan == '' || areapelanggan == '' || notelp == '' || paket == '' || harga == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatepelanggan",
				data: { idpelanggan: idpelanggan, namapelanggan: namapelanggan, alamatpelanggan: alamatpelanggan, areapelanggan: areapelanggan, notelp: notelp, paket: paket, harga: harga, sales: sales },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-pelanggan').modal('hide');
					pelanggan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapuspelanggan', function (e) {
		e.preventDefault();
		var idpelanggan = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletepelanggan",
				data: { idpelanggan: idpelanggan},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					pelanggan.ajax.reload(null, false);
				}
			})
		})
	});

	$('.content-wrapper').on('click', '.editpengguna', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editpengguna",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idpengguna"]').val(data[i].idusers);
					$('[name="editnamapengguna"]').val(data[i].nama);
					$('[name="editusername"]').val(data[i].username);
					$('#modal-edit-pengguna').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_pengguna', function (e) {
		e.preventDefault();
		var namapengguna = $('#namapengguna').val();
		var username =  $('#username').val();
		var password =  $('#password').val();
		var level =  $('#level').val();
		if (namapengguna == '' || username == '' || password == '' || level == '' ) {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertpengguna",
				data: { namapengguna: namapengguna, username: username, password: password, level: level },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-pengguna').modal('hide');
					pengguna.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_pengguna_edit', function (e) {
		e.preventDefault();
		var idpengguna = $('#idpengguna').val();
		var editnamapengguna = $('#editnamapengguna').val();
		var editusername =  $('#editusername').val();
		var editpassword =  $('#editpassword').val();
		var editlevel =  $('#editlevel').val();
		if (editnamapengguna == '' || editusername == '' || editpassword == '' || editlevel == '' ) {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatepengguna",
				data: { idpengguna: idpengguna, editnamapengguna: editnamapengguna, editusername: editusername, editpassword: editpassword, editlevel: editlevel  },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-pengguna').modal('hide');
					pengguna.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapuspengguna', function (e) {
		e.preventDefault();
		var idpengguna = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletepengguna",
				data: { idpengguna: idpengguna},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					pengguna.ajax.reload(null, false);
				}
			})
		})
	});

	$('.content-wrapper').on('click', '.edittagihan', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_edittagihan",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idtagihan"]').val(data[i].idtransaksi);
					$('[name="editbulan"]').val(data[i].bulan);
					$('[name="edittambahan"]').val(data[i].penambahan);
					$('[name="editnamapelanggan"]').val(data[i].namapelanggan);
					$('[name="editpakettagihan"]').val(data[i].namapaket);
					$('[name="edittagihan"]').val(data[i].harga);
					$('#modal-edit-tagihan').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_tagihan', function (e) {
		e.preventDefault();
		var pelanggan = $('#pelanggan').val();
		var bulan =  $('#bulan').val();
		var paket =  $('#idpakettagihan').val();
		var harga = $('#tagihan').val();
		var tagihan =  $('#totaltagihan').val();
		var tambahan = $('#tambahan').val();
		if (pelanggan == '' || bulan == '' || paket == '' || harga == '' || tagihan == '' || tambahan == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/inserttagihan",
				data: { pelanggan: pelanggan, bulan: bulan, paket: paket, tagihan: tagihan, harga: harga, tambahan: tambahan },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-tagihan').modal('hide');
					tbtagihan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_tagihan_edit', function (e) {
		e.preventDefault();
		var idtagihan = $('#idtagihan').val();
		var bulan =  $('#editbulan').val();
		var tagihan =  $('#edittotaltagihan').val();
		var tambahan = $('#edittambahan').val();
		if (bulan == '' || tagihan == '' || tambahan == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatetagihan",
				data: { idtagihan: idtagihan, bulan: bulan, tagihan: tagihan, tambahan: tambahan },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-tagihan').modal('hide');
					tbtagihan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapustagihan', function (e) {
		e.preventDefault();
		var idtransaksi = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletetagihan",
				data: { idtransaksi: idtransaksi},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					tbtagihan.ajax.reload(null, false);
				}
			})
		})
	});

	$('.content-wrapper').on('click', '.pdftagihan', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		window.open(site_url + "amc/pdf/"+id, '_blank');
	});


	$('.content-wrapper').on('click', '.bayar', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editpembayaran",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idtransaksi"]').val(data[i].idtransaksi);
					$('[name="idbilling"]').val(data[i].idbilling);
					$('[name="namapelanggan"]').val(data[i].namapelanggan);
					$('[name="bulan"]').val(data[i].nmbulan);
					$('[name="paket"]').val(data[i].namapaket);
					$('[name="tagihan"]').val(rubah(data[i].subharga));
					$('#modal-pembayaran').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_pembayaran', function (e) {
		e.preventDefault();
		var id = $('#idtransaksi').val();
		console.log(id);
		$.ajax({
			type: 'POST',
			url: site_url + "amc/insertpembayaran",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				console.log(data);
				toastr[data.alert](data.data, data.title);
				$('#modal-pembayaran').modal('hide');
				tbpembayaran.ajax.reload(null, false);
			}
		})
	});

	// $('.content-wrapper').on('click', '.hapuspembayaran', function (e) {
	// 	e.preventDefault();
	// 	var id = $(this).data('kode');
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: site_url + "amc/get_editpembayaran",
	// 		data: { id: id },
	// 		dataType: "JSON",
	// 		success: function (data) {
	// 			for (i in data) {
	// 				$('[name="idtransaksi"]').val(data[i].idtransaksi);
	// 				$('#modal-hapus-pembayaran').modal('show');
	// 			}
	// 		}
	// 	})
	// });

	$('.content-wrapper').on('click', '.hapuspembayaran', function (e) {
		e.preventDefault();
		// var id = $('#idtransaksi').val();
		var id = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatehapuspembayaran",
				data: { id: id },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-hapus-pembayaran').modal('hide');
					tbpembayaran.ajax.reload(null, false);
				}
			})
		})
	});

	$('.content-wrapper').on('click', '.pdfpembayaran', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		window.open(site_url + "amc/pdfpembayaran/"+id, '_blank');
	});


	$('.content-wrapper').on('click', '.edituserpelanggan', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editpengguna",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idpenggunauser"]').val(data[i].idusers);
					$('[name="editnamapenggunauser"]').val(data[i].namapelanggan);
					$('[name="editusernameuser"]').val(data[i].username);
					$('#modal-edit-penggunauser').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_user_pelanggan', function (e) {
		e.preventDefault();
		var pelangganuser = $('#pelangganuser').val();
		var usernameuser = $('#usernameuser').val();
		var passworduser = $('#passworduser').val();
		var leveluser = $('#leveluser').val();
		if (pelangganuser == '' || usernameuser == '' || passworduser == '' || leveluser == '' ) {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertuserpelanggan",
				data: { pelangganuser: pelangganuser, usernameuser: usernameuser, passworduser: passworduser, leveluser: leveluser },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-userpelanggan').modal('hide');
					tbuserpelanggan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_penggunauser_edit', function (e) {
		e.preventDefault();
		var idpenggunauser = $('#idpenggunauser').val();
		var editusernameuser = $('#editusernameuser').val();
		var editpassworduser = $('#editpassworduser').val();
		if (editusernameuser == '' || editpassworduser == '' ) {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updateuserpelanggan",
				data: { idpenggunauser: idpenggunauser, editusernameuser: editusernameuser, editpassworduser: editpassworduser },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-penggunauser').modal('hide');
					tbuserpelanggan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapususerpelanggan', function (e) {
		e.preventDefault();
		var idpenggunauser = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deleteuserpelanggan",
				data: { idpenggunauser: idpenggunauser},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					tbuserpelanggan.ajax.reload(null, false);
				}
			})
		})
	});

	//Karyawan

	$('.content-wrapper').on('click', '.editkaryawan', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editkaryawan",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idkaryawan"]').val(data[i].idkaryawan);
					$('[name="editnamakaryawan"]').val(data[i].namakaryawan);
					$('[name="editalamatkaryawan"]').val(data[i].alamatkaryawan);
					$('[name="editgajipokok"]').val(data[i].gajipokok);
					$('[name="editnotelpkaryawan"]').val(data[i].notelp);
					$('[name="edittglterima"]').val(data[i].masakerja);
					$('[name="editpendidikan"]').val(data[i].pendidikan);
					$('[name="editjabatan"]').val(data[i].jabatan);
					$('#modal-edit-karyawan').modal('show');
				}
			}
		})
	});


	$('.content-wrapper').on('click', '.simpan_karyawan', function (e) {
		e.preventDefault();
		var nmkaryawan = $('#nmkaryawan').val();
		var alamatkaryawan =  $('#alamatkaryawan').val();
		var jabatan =  $('#jabatan').val();
		var pendidikan =  $('#pendidikan').val();
		var tglterima =  $('#datepicker').val();
		var gajipokok =  $('#gajipokok').val();
		var notelp =  $('#notelpkaryawan').val();
		var jnskaryawan =  $('#jnskaryawan').val();

		if (jnskaryawan == '' ||  nmkaryawan == '' || alamatkaryawan == '' || jabatan == '' || pendidikan == '' || tglterima == '' || notelp == '' ) {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertkaryawan",
				data: { jnskaryawan: jnskaryawan, nmkaryawan: nmkaryawan, alamatkaryawan: alamatkaryawan, jabatan: jabatan, pendidikan: pendidikan, tglterima: tglterima, gajipokok, gajipokok, notelp: notelp },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-userpelanggan').modal('hide');
					tbkaryawan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_karyawan_edit', function (e) {
		e.preventDefault();
		var idkaryawan = $('#idkaryawan').val();
		var namakaryawan = $('#editnamakaryawan').val();
		var alamatkaryawan =  $('#editalamatkaryawan').val();
		var jabatan =  $('#editjabatan').val();
		var pendidikan =  $('#editpendidikan').val();
		var tglterima =  $('#datepicker1').val();
		var gajipokok =  $('#editgajipokok').val();
		var notelp =  $('#editnotelpkaryawan').val();
		var jeniskaryawan =  $('#editjeniskaryawan').val();

		if (jeniskaryawan == '' || namakaryawan == '' || alamatkaryawan == '' || jabatan == '' || pendidikan == '' || tglterima == '' || notelp == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updatekaryawan",
				data: { idkaryawan: idkaryawan, jeniskaryawan: jeniskaryawan, namakaryawan: namakaryawan, alamatkaryawan: alamatkaryawan, jabatan: jabatan, pendidikan: pendidikan, tglterima: tglterima, gajipokok, gajipokok, notelp: notelp },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-karyawan').modal('hide');
					tbkaryawan.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapuskaryawan', function (e) {
		e.preventDefault();
		var idkaryawan = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletekaryawan",
				data: { idkaryawan: idkaryawan},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					tbkaryawan.ajax.reload(null, false);
				}
			});
		});
	});

	// Gaji Karyawan

	$('.content-wrapper').on('click', '.editgajian', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "amc/get_editgajian",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="idgajian"]').val(data[i].idgaji);
					$('[name="editnamakaryawan"]').val(data[i].namakaryawan);
					$('[name="edittahun"]').val(data[i].tahun);
					$('[name="editbulan"]').val(data[i].bulan);
					$('[name="editgajipokok"]').val(data[i].gajipokok);
					$('[name="edittunjangan"]').val(data[i].tunjangan);
					$('[name="editpotongan"]').val(data[i].potongan);
					$('#modal-edit-gajian').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_gajian', function (e) {
		e.preventDefault();
		var namakaryawan = $('#namakaryawan').val();
		// var tahun =  $('#tahun').val();
		var bulan =  $('#bulan').val();
		var gajipokok =  $('#gajipokok').val();
		var tunjangan =  $('#tunjangan').val();
		var potongan =  $('#potongan').val();
		var gajibersih =  $('#gajibersih').val();
		if (namakaryawan == '' || gajibersih == '' || gajipokok == '' || bulan == '' || tunjangan == '' || potongan == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/insertgajian",
				data: { namakaryawan: namakaryawan, bulan: bulan, gajipokok: gajipokok, tunjangan: tunjangan, potongan, potongan, gajibersih: gajibersih },
				dataType: "JSON",
				success: function (data, status) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-gajian').modal('hide');
					tbgajian.ajax.reload(null, false);

					if (status == 'success') {
						$('#namakaryawan').val(null).trigger('change');
						$('#bulan').val(null).trigger('change');
						$('#gajipokok').val('');
						$('#tunjangan').val('');
						$('#potongan').val('');
						$('#gajibersih').val('');

					}
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.simpan_gajian_edit', function (e) {
		e.preventDefault();
		var idgajian = $('#idgajian').val();
		// var tahun =  $('#edittahun').val();
		var bulan =  $('#editbulan').val();
		var gajipokok =  $('#editgajipokok').val();
		var tunjangan =  $('#edittunjangan').val();
		var potongan =  $('#editpotongan').val();
		var gajibersih =  $('#editgajibersih').val();
		if (gajibersih == '' || gajipokok == '' || bulan == '' || tunjangan == '' || potongan == '') {
			swal({
				title: "Error!",
				text: "Harus Disi Semua!!",
				type: "error",
				showCancelButton: false,
				showConfirmButton: false,
				timer: 2000
			}, function() {
				swal.close();
			});
		} else {
			$.ajax({
				type: 'POST',
				url: site_url + "amc/updategajian",
				data: { idgajian: idgajian, bulan: bulan, gajipokok: gajipokok, tunjangan: tunjangan, potongan, potongan, gajibersih: gajibersih },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-edit-gajian').modal('hide');
					tbgajian.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapusgajian', function (e) {
		e.preventDefault();
		var idgaji = $(this).data('kode');
		swal({
			title: 'Delete Data',
			text: 'Yakin Ingin Menghapus Data ?',
			html: true,
			confirmButtonColor: '#d9534f',
			showCancelButton: true,
		},
		function(){
			$.ajax({
				type: 'POST',
				url: site_url + "amc/deletegajian",
				data: { idgaji: idgaji},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					tbgajian.ajax.reload(null, false);
				}
			});
		});
	});

	$('.content-wrapper').on('click', '.pdfgajian', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		window.open(site_url + "amc/pdfgajian/"+id, '_blank');
	});

	$.ajax({
		url: site_url + "amc/chart",
		method: "GET",
		dataType: "JSON",
		success: function (data) {
			var label = [];
			var tagihan = [];
			var pembayaran = [];
			var kurangbayar = [];
			var d = new Date();
			var n = d.getFullYear();
			for (var i in data) {
				label.push(data[i].nmbulan);
				tagihan.push(Number(data[i].tagihan));
				pembayaran.push(Number(data[i].pembayaran));
				kurangbayar.push(Number(data[i].kurangbayar));
			}

			Highcharts.chart('container', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Data Tagihan, Pembayaran dan Kurang Bayar Tahun '+ n
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				xAxis: {
					categories: label,
					crosshair: true
				},
				yAxis: {
					min: 0
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>Rp. {point.y} </b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: 'Tagihan',
					data: tagihan

				}, {
					name: 'Pembayaran',
					data: pembayaran

				}, {
					name: 'Kurang Bayar',
					data: kurangbayar

				}]
			});
		}
	});
});

$('#lappdftagihan').click(function () {
	$('#ipladder').attr('target', '_blank');
	$('#ipladder').attr('action', site_url + "amc/pdftagihanlaporan");
	$('#ipladder').submit();
});

$('#lappdfbelumbayar').click(function () {
	$('#ipladder1').attr('target', '_blank');
	$('#ipladder1').attr('action', site_url + "amc/pdfblmbayar");
	$('#ipladder1').submit();
});

$('#cetakpelanggan').click(function () {
	$('#ipladder2').attr('target', '_blank');
	$('#ipladder2').attr('action', site_url + "amc/pdfpelanggan");
	$('#ipladder2').submit();
});

$('#lapgajian').click(function () {
	$('#formgajian').attr('target', '_blank');
	$('#formgajian').attr('action', site_url + "amc/pdfgajianglobal");
	$('#formgajian').submit();
});

// function cetakpelanggan() {
// 	window.open(site_url + "amc/pdfpelanggan", '_blank');
// }
