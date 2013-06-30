var bodyHeight;
var lastBodyScroll;
var flag = 0;
var panel;
var pointerHeight;

function overlayPage() {

	// When site loaded, load the Popupbox First
	loadPopupBox();
	
	html2canvas($("body"), {
				onrendered : function(canvas) {
						// canvas is the final rendered <canvas> element
						$(canvas).css("height",$("#popup_box").css("height"));
						$(canvas).css("width",$("#popup_box").css("width"));
						$("#popup_box").append(canvas);
					}
	});
	
	pointerHeight = ($("#popup_box").css("height").split('px')[0] * 750 ) / $("body").css("height").split('px')[0];
	// 750 is window resolution
	panel = $("#popup_box").append('<div class="overlay" id="panel" style="height:' + pointerHeight + '" ondrag=dragAction()></div>');
	
		$(function() {
		$("#panel").draggable({
			containment : '#popup_box'
		});		
		
	});
	
}

function unloadPopupBox() {// TO Unload the Popupbox
	$('#popup_box').fadeOut("slow");
	$("#container").css({// this is just for style
		"opacity" : "1"
	});
}

function loadPopupBox() {// To Load the Popupbox
	$('#popup_box').fadeIn("slow");	
}

function dragAction() {
	//var pointer = $("#panel").css('top').split('px')[0];
	//var moveParent = (pointer * $("body").css("height").split('px')[0])/$("#loadPage").css("height").split('px')[0];
	var ratio = $("body").css("height").split('px')[0] / $("#popup_box").css("height").split('px')[0];

	//$("#loadPage").css('top',$("#panel").css('top').split('px')[0] );
	$('body').scrollTop(($("#panel").css('top').split('px')[0]) * ratio);

}

