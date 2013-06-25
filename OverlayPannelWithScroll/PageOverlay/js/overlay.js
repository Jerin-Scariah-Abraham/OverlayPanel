function overlayPage() {

	$("body").append('<div class="overlay" id="loadPage" style="overflow:scroll;"><div id="content"></div></div>');
	

	$("#loadPage").scroll(function move() {

		$("body").scrollTop($("#loadPage").scrollTop());
		$("#loadPage").css("top", $("#loadPage").scrollTop());
	});
}

function onPannel() {

	$('#content').load('Overlay2.html', function() {
			
	});

	$('#loadPage').append("<div class='overlayHide' style'z-index:2000;'></div>");
	$("#content").css("width", $("body").css("width").split("px")[0] * 0.2);
	$("#content").css("height", $("body").css("height").split("px")[0] * 0.2);

}