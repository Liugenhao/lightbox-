$(document).ready(function() {
	//点击打开弹层
	$('#btn').click(function() {
		$('#module').fadeIn('fast', function() {
			$('.lightbox').show().addClass('lightboxShow');
		});
	});

	//关闭弹层
	$('#close').click(function() {
		$('.lightbox').fadeOut('fast', function() {
			$('#module').fadeOut('slow');
		}).removeClass('lightboxShow');
	});
});