jQuery(document).ready(function ($) {

	$('#datapelanggan').DataTable({

		"ajax": {
			"url": site_url + "pelanggan/ajaxhome",
			"type": "POST"
		},

	});

	$('.content-wrapper').on('click', '.pdftagihan', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		window.open(site_url + "pelanggan/pdf/"+id, '_blank');
	});

	$('.content-wrapper').on('click', '.pdfpembayaran', function (e) {
		e.preventDefault();
		var id = $(this).data('kode');
		window.open(site_url + "pelanggan/pdfpembayaran/"+id, '_blank');
	});
});