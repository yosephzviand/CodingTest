jQuery(document).ready(function ($) {

	tbinstansi = $('#tbinstansi').DataTable({

		"ajax": {
			"url": site_url + "bonus/ajaxinstansi",
			"type": "POST"
		},

	});

	$('.content-wrapper').on('click', '.edit', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		$.ajax({
			type: 'POST',
			url: site_url + "bonus/get_edit",
			data: { id: id },
			dataType: "JSON",
			success: function (data) {
				for (i in data) {
					$('[name="id"]').val(data[i].idinstansi);
					$('[name="editinstansi"]').val(data[i].instansi);
					$('[name="editdeskripsi"]').val(data[i].deskripsi);
					$('#modal-area-edit').modal('show');
				}
			}
		})
	});

	$('.content-wrapper').on('click', '.simpan_instansi', function (e) {
		e.preventDefault();
		var instansi = $('#instansi').val();
		var deskripsi = $('#deskripsi').val();
		if (instansi == '' || deskripsi == '') {
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
				url: site_url + "bonus/insert",
				data: { instansi: instansi, deskripsi: deskripsi },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-area').modal('hide');
					tbinstansi.ajax.reload(null, false);
				}
			})
		}

	});

	$('.content-wrapper').on('click', '.simpan_edit_instansi', function (e) {
		e.preventDefault();
		var id = $('#id').val();
		var instansi = $('#editinstansi').val();
		var deskripsi = $('#editdeskripsi').val();
		if (instansi == '' || deskripsi == '') {
			swal({
				title: "Error!",
				text: "Semua Harus Disi !!",
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
				url: site_url + "bonus/update",
				data: { id: id, instansi: instansi, deskripsi: deskripsi },
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					$('#modal-area-edit').modal('hide');
					tbinstansi.ajax.reload(null, false);
				}
			})
		}
	});

	$('.content-wrapper').on('click', '.hapus', function (e) {
		e.preventDefault();
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
				url: site_url + "bonus/delete",
				data: { id: id},
				dataType: "JSON",
				success: function (data) {
					console.log(data);
					toastr[data.alert](data.data, data.title);
					tbinstansi.ajax.reload(null, false);
				}
			});
		});
	});
});