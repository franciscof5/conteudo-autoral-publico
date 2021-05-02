_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	var tipo_produto = cage_global_variable.detail.product.sellerTypeClassification
	
	//Disparo para itens 1P ou Mistos	
		if(tipo_produto == "MIXED" || tipo_produto == "B2W"){
			var body_responsys   = document.getElementsByTagName('body')[0]
			var img_responsys    = new Image(); // create image element
			img_responsys.src    = _satellite.getVar("getAfiliadosAccount")
			img_responsys.width  = '1';
			img_responsys.height = '1';
			body_responsys.appendChild(img_responsys);
		}
} catch (e) {}


});
