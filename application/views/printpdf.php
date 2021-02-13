<!-- <?php foreach ($data['data'] as $key) {?>
<p>Nama : <?= $key['NAMAWP']?></p>
<p>Alamat : <?= $key['ALAMATWP'].' '.$key['KELURAHANWP'].' '.$key['KECAMATANWP'] ?></p>
<?php } ?> -->
<p style="text-align: center;"><strong>DAFTAR PIUTANG PAJAK PBB</strong> </p>
<table width="100%" cellspacing="0" cellpadding="3" style="font-size: 10pt;" border="1" >
	<thead>
		<tr>
			<th>No</th>
			<th>NOP</th>
			<th>Tahun Pajak</th>
			<th>Ketetapan</th>
			<th>Denda</th>
			<th>Tagihan</th>
		</tr>
	</thead>
	<tbody>
		<?php 
		$no = 1;
		foreach ($dat['data'] as $key) : ?>
			<tr>
				<td  style="text-align: center;"><?= $no++ ?></td>
				<td width="300px" style="text-align: center;"><?= $key['NOP'] ?></td>
				<td style="text-align: center;"><?= $key['THNPAJAK'] ?></td>
				<td style="text-align: right;"><?= number_format($key['KETETAPAN'],0,',','.')?></td>
				<td style="text-align: right;"><?= number_format($key['DENDA'],0,',','.') ?></td>
				<td style="text-align: right;"><?= number_format($key['KETETAPAN']+$key['DENDA'],0,',','.') ?></td>
			</tr>
		<?php endforeach; ?>
		</tbody>
	</table>