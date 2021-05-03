(function($) {
	/** **************************************************************************************** */
	// jquery.onlyNumbers.js - version 0.1
	// A jQuery plugin for detect DOM element
	// Author: Edson Vicente Carli Junior
	// Created: 2013-06-28 | Updated: 2013-06-28
	/** **************************************************************************************** */

	$.fn.onlyNumbers = function(options) {
		$(this).bind('keypress', onlyNumbersKeyDownEvent);
		return this.length > 0;
	}

	function onlyNumbersKeyDownEvent(e) {
		var tecla = (window.event) ? event.keyCode : e.which;
		if ((tecla > 47 && tecla < 58)) {
			return true;
		} else {
			if (tecla == 8 || tecla == 0) {
				return true;
			}

			else {
				return false;
			}
		}
	}
})(jQuery);
