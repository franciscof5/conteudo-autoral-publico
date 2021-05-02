_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	//Adobe Analytics - Comparador de Preços - Botao Comprar
		document.addEventListener("squad:compare:buy",function(e){
			try{
				//Logs
					if(_satellite.getVar("enableLog") == "true"){
						console.log("WA: DataElement - Analytics - Logica Produto - Comparador de Preços")
					}

				//Verifica se existe um produto selecionado
					if(typeof e.detail.productId == "string" && typeof e.detail.index == "number"){											
						var pos = e.detail.index + 1

						var omni = {
							link_o   : "Produto:PFM:Comparador",
							products : ";" + e.detail.productId + ";1;;;",
							eVar74   : "Recomendacao|Produto|ComparadorDePrecos|" + pos,
							eVar119  : 'Mecanismo Vitrine|ComparadorDePrecos|Rich Relevance|-|item|'+ pos + '|',
							events   : 'event73'
						}

						//Dispara via CustomLink
							WA_linkP(omni);	
					}
			}catch(e){
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","Direct Call Rules","[DC] Catalogo - Produto - ComparadorProduto:Erro Global", e);
			}
		})	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","Direct Call Rules","[DC] Catalogo - Produto - ComparadorProduto:Erro Global", e);
	} catch (e) {}
}
});
