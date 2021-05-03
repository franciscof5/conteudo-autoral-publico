(function($){
	/*******************************************************************************************/	
	// jquery.jsf-form.js - version 0.1
	// A jQuery plugin for return jq objects from jsf form
	// Author: Edson Vicente Carli Junior
	// Created: 2012-01-26 | Updated: 2012-01-26
	// var formBusca = $("#formBusca").jsfForm();
	// formBusca.get("txtNome");
	// em vez de
	// $("#formBusca\\:txtNome");
	/*******************************************************************************************/

	$.fn.jsfForm = function(options){
		
				
	    /* obj - is a current DOM element
	       index - the current loop index in stack
	       meta - meta data about your selector !!!
	       stack - stack of all elements to loop
	   
	       Return true to include current element
	       Return false to explude current element
	    */

		var selector = this.selector;
		 return  {
			 		get:function(field)
			 		{	
			 			return $(selector+"\\:"+field)
			 		}
		 };
	}	
})(jQuery);