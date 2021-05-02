_satellite.pushAsyncScript(function(event, target, $variables){
  try{			
	//Frete
		document.addEventListener("notify:submit",function(e){
			try{
				//Inicia objeto CR
					_satellite.data.customVars['notify'] = {
						retornoApi  : e						
					};

                //Criar objeto com variáveis do disparo
					var omni = {
						link_o   : "Avise-Me",
						eVar13   : _satellite.getVar("getB2W-UID"),
						eVar39   : _satellite.getVar("getEmail"),
                        products : _satellite.getVar("Products"),
						events   : 'event11,event15'
					}

				WA_linkP(omni);				
			}catch(e){
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DirectCall", "Produto - AviseMe", e);
			}
		})
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DirectCall", "Produto - AviseMe", e);
	} catch (e) {}
}
});
