var bodyHeight;
var lastBodyScroll;
var flag=0;

function overlayPage() {
	
	lastBodyScroll = 0;
	$("body").append('<div class="overlay" id="loadPage" style="overflow:scroll;"><div id="content"></div></div>');
	bodyHeight = $("body").css("height").split("px")[0];

	$("#loadPage").scroll(function move() {
	
		if(($("#loadPage").scrollTop()+800) < bodyHeight)
		{
			$("body").scrollTop($("#loadPage").scrollTop());			
			$("#loadPage").css("top", $("#loadPage").scrollTop());
			
		}
	
	});
}

function onPannel() {

	$('#content').load('Overlay3.html', function() {
			alert($("#loadPage").css("height"));
	});

	$('#loadPage').append("<div class='overlayHide' style'z-index:2000;'></div>");
	$("#content").css("width", $("body").css("width").split("px")[0] * 0.2);
	$("#content").css("height", $("body").css("height").split("px")[0] * 0.2);

}