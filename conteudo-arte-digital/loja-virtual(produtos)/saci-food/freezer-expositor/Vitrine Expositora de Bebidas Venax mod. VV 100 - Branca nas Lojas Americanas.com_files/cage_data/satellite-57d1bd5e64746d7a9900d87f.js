_satellite.pushAsyncScript(function(event, target, $variables){
  /*
	*********** Inicio Variaveis e Funções Globais ***********
	*********** Inicio Variaveis e Funções Globais ***********
	*********** Inicio Variaveis e Funções Globais ***********
*/
//Variaveis Globais
_satellite.getVar("coreGlobalVariables")

//Funções - Erro JS
_satellite.getVar("coreFunctionsJSError")

//Funções - Parametro URL
_satellite.getVar("coreFunctionsURLParameter")

//Funções - Sanitize
_satellite.getVar("coreFunctionsSanitize")

//Funções - LinkP
_satellite.getVar("coreFunctionsLinkP")

//Funções - Cookie
_satellite.getVar("coreFunctionsSetCookie")
//Funções - Cookie
_satellite.getVar("coreFunctionsMD5")

//Funções - Cookie
_satellite.getVar("coreFunctionsSha256")


/*
	*********** LOGS ***********
	*********** LOGS ***********
	*********** LOGS ***********
*/
_satellite.getVar("coreLogs")

/*
	*********** Inicializa biblioteca JavaScript Google Analytics - analytics.js ***********
	*********** Inicializa biblioteca JavaScript Google Analytics - analytics.js ***********
	*********** Inicializa biblioteca JavaScript Google Analytics - analytics.js ***********
*/
// Carrega biblioteca .js do GA
_satellite.getVar("getGALibrary")

// Funções - Enhanced Ecommerce
_satellite.getVar("getGARequireEC")

/*
	*********** EVENTOS ASSÍNCRONOS - PAGINA ***********
	*********** EVENTOS ASSÍNCRONOS - PAGINA ***********
	*********** EVENTOS ASSÍNCRONOS - PAGINA ***********
*/
_satellite.getVar("coreListenersPage")

/*
	*********** METRICAS SAIKA ***********
*/
_satellite.getVar("coreMetrics")



/*
	*********** EVENTOS ASSÍNCRONOS - COMPONENTES ***********
	*********** EVENTOS ASSÍNCRONOS - COMPONENTES ***********
	*********** EVENTOS ASSÍNCRONOS - COMPONENTES ***********
*/
_satellite.getVar("coreListenersComponentsFreight")
_satellite.getVar("coreListenersComponentsRecom")
_satellite.getVar("coreListenersComponentsAds")
_satellite.getVar("coreListenersComponentsCR")
_satellite.getVar("coreListenersComponentsABTest")
_satellite.getVar("coreListenersComponentsSpaceLoad")
_satellite.getVar("coreListenersComponentsGarage")
_satellite.getVar("coreListenersAccountPurchase") //minha conta
_satellite.getVar("coreListenersCouponActivate") //ativação de cupom no catálogo
_satellite.getVar("coreListenersFavorite")
_satellite.getVar("coreListenersModalOpen") //Modal / Tapume Mobile APP

/*
	*********** EVENTOS DO BROWSER ***********
	*********** EVENTOS DO BROWSER ***********
	*********** EVENTOS DO BROWSER ***********
*/
_satellite.getVar("coreListenersBrowser")




/*
	*********** LISTENER window.top.s_wa  - EVENTO CAGE ***********
	*********** LISTENER window.top.s_wa  - EVENTO CAGE ***********
	*********** LISTENER window.top.s_wa  - EVENTO CAGE ***********
*/
_satellite.getVar("coreCageListener")
});
