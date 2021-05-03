(function($) {
	/** **************************************************************************************** */
	// jquery.loading.js - version 0.1
	// A jQuery plugin for detect DOM element
	// Author: Edson Vicente Carli Junior
	// Created: 2014-02-19 | Updated:
	// Dependencies: jquery.simplemodal
	/** **************************************************************************************** */

	$.loading = function(options) {

		
		var defaults = {
			operation : "open",
			message : 'Carregando...',
			imageSrc : contextPath + "/imagens/ajax-loader.gif",
			nomodal : false
		};
		
		

		if (options != null && !options) {
			defaults.operation = "close";		
		}
		
		
		

		// Overwrite default options
		// with user provided ones
		// and merge them into "options".
		var options = $.extend({}, defaults, options);

		
		
		if (options.operation == "close") {
				window.setTimeout("$.modal.close()",1000);
				window.setTimeout('$("#ajaxModalLoading").remove()',1000);
		} else {

			$("BODY").append(
					"<div id='ajaxModalLoading'>" + "<p>" + options.message
							+ "</p>" + "<img src='" + options.imageSrc + "'/>"
							+ "</div>");

			if (options.nomodal) {
				return;
			}

			$("#ajaxModalLoading").modal({
				escClose : false,
				maxWidth : 300,
				minWidth : 200,
				minHeight : 550,
				maxHeight : 550
			});

			$(".simplemodal-close").remove();
		}
	}
})(jQuery);