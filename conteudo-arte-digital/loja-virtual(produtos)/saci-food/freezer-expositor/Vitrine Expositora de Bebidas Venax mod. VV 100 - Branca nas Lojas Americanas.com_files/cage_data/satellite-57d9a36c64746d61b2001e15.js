_satellite.pushAsyncScript(function(event, target, $variables){
  try{
	//Logs
		if(_satellite.getVar("enableLog") == "true"){
			console.log("WA: DirectCall - Analytics - Produto")
		}

	// Chama lógicas do Adobe Analytics e GA
  	_satellite.getVar("pageProductAdobe")
    _satellite.getVar("pageProductGA")
	
	//Disparo Adobe
		_satellite.data.customVars['pageTracking'] = "true"
		_satellite.getVar("coreTrackPageView")
}catch(e){
	try{
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Analytics","Direct Call Rules","[DC] Catalogo - Produto:Erro Global", e);
		//Disparo Adobe
			_satellite.data.customVars['pageTracking'] = "true"
			_satellite.getVar("coreTrackPageView")
	}catch(e){}
}
});
