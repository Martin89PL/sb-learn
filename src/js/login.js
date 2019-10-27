$(document).ready(function () {
	var width = $(window).width(), height = $(window).height();
	$('#topbar').css('width', width - 50);
	$('#sidebar').css('height', height - 50);
	$('#hidsidebar').css('height', height - 50);
	$('#main').css('width', width - 50);
	$('#main').css('height', height - 50);
	$('#wide').css('width', width - 200);
});
$(window).load(function () {
	$('#darkoutside').fadeIn('fast');
	$('#loading').hide('fast');
	$('#all').fadeIn('fast');
});

$('#loginform').submit(function (e) {
	e.preventDefault();
	$('#btnLogin').prop('disabled', true);
	$.post('php/login.php', { pwd: $('#pwd').val() }, function (data) {
		$('#btnLogin').prop('disabled', false);
		if (data.error) {
			$('#errorMsg').show();
			$('#errorMsg').text(data.msg);
		} else {
			location.reload();
		}
	});
});
