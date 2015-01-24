var main = function() {
	$("form-horizontal").submit(function() {
		console.log($(this).inputPrice);
	});

}

$(document).ready(main);