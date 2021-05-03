var comments_loaded = false;

function ajaxcomments_load_comments(post_ID) {
	if(typeof jQuery != 'undefined' && !comments_loaded) {
		jQuery("#ajaxcomments_loading").css("display", "block");
		jQuery("#ajaxcomments_display_link").css("display", "none");
		
		jQuery.ajax({url: '/?p='+post_ID+'&get_comments_xml=1&r='+Math.random(), success: function(xml) {
			var xml = jQuery(xml).children("comments");
			
			jQuery(xml).find("comment").each(function() {
				var comment_classes = jQuery(this).children("classes").text();
				var comment_ID = jQuery(this).children("id").text();
				var comment_date = jQuery(this).children("date").text();
				var comment_time = jQuery(this).children("time").text();
				var comment_approved = parseInt(jQuery(this).children("approved").text());
				var comment_author = decodeURIComponent(jQuery(this).children("author_name").text());
				var comment_content = decodeURIComponent(jQuery(this).children("content").text());
				var html = "";
				
				html += "<li class=\""+comment_classes+"\" id=\"li-comment-"+comment_ID+"\">";
				
				html += "<div>";
				html += "<div class=\"comment-author vcard\"><cite class=\"fn\"><a name=\"comment-"+comment_ID+"\">"+comment_author+"</a></cite> em "+comment_date+" às "+comment_time+" hs:</div>";
					if(comment_approved == 0) {
						html += "<em>Seu comentário está aguardando aprovação.</em><br />";
					}
					html += comment_content;
				html += "</li>";
				
				jQuery("#comments_list").append(html);
			});
			jQuery("#ajaxcomments_loading").css("display", "none");
			comments_loaded = true;
			
			hash = self.document.location.hash.substring(1);
			if(hash != '') {
				scrollTo_(hash);
			}
		}, error: function(a,b,c) {
			jQuery("#ajaxcomments_loading").css("display", "none");
		}, dataType: 'xml'});
	}
} 