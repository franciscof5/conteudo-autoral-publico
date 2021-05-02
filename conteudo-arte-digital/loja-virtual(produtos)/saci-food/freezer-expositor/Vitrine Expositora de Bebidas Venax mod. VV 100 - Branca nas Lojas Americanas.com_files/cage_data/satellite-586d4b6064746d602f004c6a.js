_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	//ComboVIP
		document.addEventListener("combo:selected",function(e){
			try{
				//Logs
					if(_satellite.getVar("enableLog") == "true"){
						console.log("WA: DataElement - Analytics - Logica Produto - ComboVIP")
					}

				//Verifica se existe um produto selecionado
					if(e.detail.products.length > 0){
						//Verifica tipo
							var tipo = ''
							
							if(e.detail.type.indexOf("combo_vip") >=0){
								tipo = "ComboVIP"
							}
							else if(e.detail.type.indexOf("combo") >=0){
								tipo = "CrossSell"
							}
						
						
						//Criar objeto com variáveis do disparo (logica de length menos 1 pois o crossSell possui 2 produtosx)
							if(typeof e.detail.products[e.detail.products.length -1] == "string"){
								var omni = {
									link_o   : "Produto:" + tipo,
									products : ";" + e.detail.products[e.detail.products.length - 1] + ";1;;;",
									eVar74   : "Recomendacao|Produto|" + tipo + "|" + e.detail.products.length + "|-",
									eVar119  : 'Mecanismo Vitrine|Recomendação sem ads|Rich Relevance|' + tipo + '|item|'+ e.detail.products.length + '|',
									events   : 'event73'
								}
							}

						//Dispara via CustomLink
							WA_linkP(omni);	
					}
			}catch(e){
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","Direct Call Rules","[DC] Catalogo - Produto - ComboVIP:Erro Global", e);
			}
		})	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","Direct Call Rules","[DC] Catalogo - Produto - ComboVIP:Erro Global", e);
	} catch (e) {}
}
});
