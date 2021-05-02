_satellite.pushAsyncScript(function(event, target, $variables){
  try{			
	//Frete
		document.addEventListener("social:share",function(e){
			try{
				//Rede social
					var rede_social = e.detail;

                //Criar objeto com variáveis do disparo
					var omni = {
						link_o   : "Compartilhar Social",
						prop5    : rede_social,
                        products : _satellite.getVar("Products"),
						events   : 'event150'
					}

				WA_linkP(omni);				
			}catch(e){
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DirectCall", "Compartilhar Produto", e);
			}
		})
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DirectCall", "Compartilhar Produto", e);
	} catch (e) {}
}
});
