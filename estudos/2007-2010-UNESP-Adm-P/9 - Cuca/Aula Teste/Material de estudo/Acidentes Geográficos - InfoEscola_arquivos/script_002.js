jQuery(document).ready(function(){
	
	
		jQuery(".menu").hover(function(){
			jQuery(this).animate({left: "+=40"}, "fast");
			return false;
		}, function() {
			jQuery(this).animate({left: "-=40"}, "fast");
			return false;
		});
	
		
		if(top.location.href != location.href) {
			top.location.href = location.href;
		}
		
		if(screen.width > 1024) {
			jQuery("#ads250x650").css("display", "block");
		}
});

function ajaxsuggestions_load(query_b64) {

	if(typeof jQuery != 'undefined') {
				
		jQuery.ajax({url: '/?get_ajax_suggestions=1&q='+query_b64+'&r='+Math.random(), success: function(xml) {
			var xml = jQuery(xml).children("suggestions");
			
			jQuery(xml).find("suggestion").each(function() {
				var html = "";
				
				var title = jQuery(this).attr("title");
				var permalink = jQuery(this).attr("permalink");
				var excerpt = jQuery(this).attr("excerpt");
				
				html += title+"<br />";
				
				jQuery("#suggestions").append(html);
			});
				
			jQuery("#suggestions").css("display", "block");
		}, error: function(a,b,c) {
			jQuery("#suggestions").css("display", "none");
		}, dataType: 'xml'});
	}
} 

/* Sem animação */
/*
jQuery(document).ready(function(){
		jQuery(".menu").hover(function(){
			jQuery(this).css("left", "40px");
			return false;
		}, function() {
			jQuery(this).css("left", "0px");
			return false;
		});
});
*/