_satellite.pushAsyncScript(function(event, target, $variables){
  try{
	//Logs
		if(_satellite.getVar("enableLog") == "true"){
			console.log("WA: DirectCall - Analytics - Global")
		}

	// Chama lógicas do Adobe Analytics e GA 
		_satellite.getVar("pageGlobalAdobe")
		_satellite.getVar("pageGlobalGA")

	//Informa que lógica global do Adobe foi carregada
		_satellite.data.customVars['globalTracking'] = "true"

	//Disparo Adobe
		_satellite.getVar("coreTrackPageView")
}catch(e){
	//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Analytics","Direct Call Rules","[DC] Analytics:Erro Global", e);
	//Disparo Adobe
		_satellite.data.customVars['globalTracking'] = "true"
		_satellite.getVar("coreTrackPageView")
}
});
