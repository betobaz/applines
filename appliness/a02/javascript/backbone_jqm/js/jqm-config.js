$(document).bind("mobileinit", function(){
	$.mobile.ajaxEnable = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;

	$('div[data-role="page"]').live('pagehide', function(event, ui){
		$(event.currentTarget).remove();
	});
})