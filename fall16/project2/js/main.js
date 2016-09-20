$(document).ready(function () {
	//reload one iframe
	$('.reload-ads').find('.reload-btn').click(function () {
		var $reloadBtn = $(this);
		if ($reloadBtn.data('target') == 'all') {
			$('.iframe-wrapper').find('iframe').attr( 'src', function ( i, val ) { return val; });
		} else {
			$('.' + $reloadBtn.data('target') ).find('iframe').attr( 'src', function ( i, val ) { return val; });
		}
	});
});
