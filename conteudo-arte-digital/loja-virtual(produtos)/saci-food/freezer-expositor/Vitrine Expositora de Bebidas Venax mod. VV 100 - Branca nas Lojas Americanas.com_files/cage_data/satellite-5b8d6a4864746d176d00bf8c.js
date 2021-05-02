_satellite.pushAsyncScript(function(event, target, $variables){
  //Sinopse Livros
	try{
		//Criar objeto com variáveis do disparo
			document.addEventListener("synopsis:read",function(e){
				if(typeof WA_linkP == 'function'){
					var omni = {
						link_o   : "Squads:Livros:Leia-A-Sinopse",
						products : _satellite.getVar("Products"),
						eVar49   : _satellite.getVar("getDepartmentLineSubline"),
						eVar76   : _satellite.getVar("getProductType")
					}
	
					WA_linkP(omni);
				}	
			})					
	} catch (e) {
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSynopsisClick", e);
		} catch (e) {}
	}
});
