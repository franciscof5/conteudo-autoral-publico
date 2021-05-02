
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"430",
  
  "macros":[{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"OESP_INFO"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"OESP_SUBSCRIPTION"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=",["escape",["macro",1],8,16],";return b?\"Assinante\":a?\"Logado\":\"Anonimo\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";if(a)return JSON.parse(a).id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"genericCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"genericAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"convers\\u00e3o\"===",["escape",["macro",4],8,16],"\u0026\u0026-1\u003C",["escape",["macro",5],8,16],".indexOf(\"bot\\u00e3o_assine\")?{ecommerce:",["escape",["macro",6],8,16],"}:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);if(a.clientHeight){if(\"undefined\"===typeof DFP)return document.body.removeChild(a),\"ativo\";document.body.removeChild(a);return\"inativo\"}document.body.removeChild(a);return\"ativo\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.host,b=window.location.pathname;return a.concat(b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Object.values(checkoutMaster.getLeadId())[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#tipo_documento\")[0].value;return a=a.includes(\"cnpj\")?\"PJ\":\"PF\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=null;$(\"button[class*\\x3d'payment']\").click(function(){this.outerText.includes(\"D\\u00c9BITO\")?a=\"D\\u00c9BITO\":this.outerText.includes(\"CR\\u00c9DITO\")\u0026\u0026(a=\"CART\\u00c3O DE CR\\u00c9DITO\")});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.self!==window.top}catch(a){return!0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.editoria"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",14],8,16],".toLocaleLowerCase().includes(\"acervo\")?\"Acervo\":",["escape",["macro",14],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"23902"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.age?a.age:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.gender?a.gender:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.everyone?a.everyone:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.education?a.education:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.marital?a.narital:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.career?a.career:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.product?a.product:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.interest?a.interest:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.brand?a.brand:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(window.localStorage.getItem(\"nvgpersona",["escape",["macro",16],7],"\"));if(\"null\"!==typeof a)return\"undefined\"!==typeof a.income?a.income:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(window.getProductAssine=function(){var a=products.filter(function(a){if(a.id==id_product_assine)return a});return a.length?a[0]:products})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=products.map(function(a){return a.id});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";return\"undefined\"!=typeof checkoutLogin?checkoutLogin.user.email:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003Cwindow.navigator.userAgent.indexOf(\"MSIE \")||!!navigator.userAgent.match(\/Trident.*rv:11\\.\/)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!!navigator.userAgent.match(\/Version\\\/[\\d\\.]+.*Safari\/)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.performance.navigation.type,b=window.performance.navigation.TYPE_NAVIGATE,c=window.performance.navigation.TYPE_RELOAD,d=window.performance.navigation.TYPE_BACK_FORWARD;switch(a){case b:return\"direto\";case c:return\"reload\";case d:return\"back\";default:return\"indisponivel\"}})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],";return\"checkout_login\"==a?1:\"checkout_address\"==a?2:\"checkout_payment\"==a?3:4})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.PAYWALL?window.PAYWALL:!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(arte\\.estadao\\.com\\.br\\\/politica\\\/eleicoes\\\/2018\\\/voce-conhece-seu-candidato)","value","true"],["map","key","(arte.estadao.com.br\\\/especiais\\\/e-books\\\/para_entender_2019_resultado)","value","true"],["map","key","(arte.estadao.com.br\\\/especiais\\\/e-books\\\/25_anos_sem_senna_resultado)","value","true"],["map","key","(acesso\\.estadao\\.com\\.br\\\/paywall)","value","true"],["map","key","(arte\\.estadao\\.com\\.br\\\/especiais\\\/e-books\\\/orgulho_de_mae_resultado)","value","true"],["map","key","(arte\\.estadao\\.com\\.br\\\/especiais\\\/e\\-books)","value","true"],["map","key","^((https?):\\\/\\\/((devl|qa)\\.)?brpolitico\\.com\\.br)","value","true"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"OESP_GA_GID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(a||(a=",["escape",["macro",41],8,16],"))return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^((?!assine\\.estadao|assineestadao|(estadao\\.com\\.br(\\\/$|\\\/\\?))).)*$","value","useAmpClientId"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^((?!assine\\.estadao|assineestadao|(estadao\\.com\\.br(\\\/$|\\\/\\?))).)*$","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^https\\:\\\/\\\/assine\\.com\\.br","value","assine"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.valorSemDesconto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.valorComDesconto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.valorProximoMes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.tipo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.titulo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.modulos"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.formato"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.paywallStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.oferta"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.chamada"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.periodo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.tipoAssinatura"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.produto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.subeditoria"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.blog"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.midia"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.autor"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",33],
      "vtp_map":["list",["map","key","forcePvScroll","value","scroll"],["map","key","forcePvGaleria","value","galeria"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.galeriaImagem"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.galeriaPos"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.paywall"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.nome"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.tipo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.coluna"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.tags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.subtipo"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","userId","value",["macro",42]],["map","fieldName",["macro",43],"value",["macro",44]]],
      "vtp_trackerName":["macro",45],
      "vtp_metric":["list",["map","index","1","metric",["macro",46]],["map","index","2","metric",["macro",47]],["map","index","3","metric",["macro",48]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",42]],["map","index","2","dimension",["macro",2]],["map","index","3","dimension",["macro",49]],["map","index","4","dimension",["macro",50]],["map","index","5","dimension",["macro",15]],["map","index","6","dimension",["macro",51]],["map","index","7","dimension",["macro",52]],["map","index","8","dimension",["macro",53]],["map","index","9","dimension",["macro",54]],["map","index","10","dimension",["macro",55]],["map","index","11","dimension",["macro",56]],["map","index","12","dimension",["macro",57]],["map","index","17","dimension",["macro",58]],["map","index","18","dimension",["macro",59]],["map","index","19","dimension",["macro",60]],["map","index","20","dimension",["macro",61]],["map","index","21","dimension",["macro",62]],["map","index","22","dimension",["macro",63]],["map","index","23","dimension",["macro",64]],["map","index","24","dimension",["macro",65]],["map","index","25","dimension",["macro",66]],["map","index","26","dimension",["macro",67]],["map","index","53","dimension",["macro",68]],["map","index","54","dimension",["macro",69]],["map","index","16","dimension",["macro",70]],["map","index","62","dimension",["macro",71]],["map","index","68","dimension",["macro",8]],["map","index","64","dimension",["macro",9]],["map","index","70","dimension",["macro",17]],["map","index","69","dimension",["macro",18]],["map","index","71","dimension",["macro",19]],["map","index","72","dimension",["macro",20]],["map","index","73","dimension",["macro",21]],["map","index","74","dimension",["macro",22]],["map","index","75","dimension",["macro",23]],["map","index","76","dimension",["macro",24]],["map","index","77","dimension",["macro",25]],["map","index","78","dimension",["macro",26]],["map","index","79","dimension",["macro",72]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-166963-24",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"genericValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"genericLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"UA-166963-24",
      "vtp_map":["list",["map","key","^http.*\\\/\\\/esportefera\\.com\\.br.*","value","UA-166963-26"],["map","key","^http.*\\\/\\\/jornaldocarro\\.(estadao.com|com)\\.br.*","value","UA-166963-38"],["map","key","^http.*eldorado.estadao\\.com\\.br.*","value","UA-166963-27"],["map","key","^http.*\\\/\\\/estradao\\.estadao\\.com\\.br.*","value","UA-166963-48"],["map","key","^http.*\\\/\\\/internacional\\.estadao\\.com\\.br\\\/(noticias\\\/|)nytiw.*","value","UA-166963-49"],["map","key","^http.*\\\/\\\/jornaldocarro\\.(sydle.com).*","value","UA-166963-38"],["map","key","^http.*\\\/\\\/assine\\.estadao\\.com\\.br.*","value","UA-166963-51"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",42]],["map","fieldName","forceSSL","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","userId","value",["macro",42]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-166963-51",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shippingMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userType"
    },{
      "function":"__d",
      "vtp_elementId":"pw-config",
      "vtp_attributeName":"data-produto",
      "vtp_selectorType":"ID"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","userId","value",["macro",42]],["map","fieldName",["macro",43],"value",["macro",44]]],
      "vtp_trackerName":["macro",45],
      "vtp_metric":["list",["map","index","1","metric",["macro",46]],["map","index","2","metric",["macro",47]],["map","index","3","metric",["macro",48]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",42]],["map","index","2","dimension",["macro",2]],["map","index","3","dimension",["macro",49]],["map","index","4","dimension",["macro",50]],["map","index","5","dimension",["macro",15]],["map","index","6","dimension",["macro",51]],["map","index","7","dimension",["macro",52]],["map","index","8","dimension",["macro",53]],["map","index","9","dimension",["macro",54]],["map","index","10","dimension",["macro",55]],["map","index","12","dimension",["macro",56]],["map","index","13","dimension",["macro",57]],["map","index","15","dimension",["macro",58]],["map","index","16","dimension",["macro",59]],["map","index","17","dimension",["macro",60]],["map","index","18","dimension",["macro",61]],["map","index","19","dimension",["macro",62]],["map","index","24","dimension",["macro",63]],["map","index","23","dimension",["macro",64]],["map","index","22","dimension",["macro",65]],["map","index","25","dimension",["macro",66]],["map","index","20","dimension",["macro",67]],["map","index","14","dimension",["macro",70]],["map","index","21","dimension",["macro",71]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-166963-67",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],".filter(function(a){if(a.category.includes(\"OBR\"))return!0});return a.length?!0:!1})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__j",
      "vtp_name":"window.dataLayerGlobal"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagina.url"
    },{
      "function":"__c",
      "vtp_value":"1659995760901982"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["template","false - ",["macro",39]],
      "vtp_map":["list",["map","key","acesso\\.estadao\\.com\\.br\\\/login\\\/cadastrar","value","?utm_source=pagina_cadastro\u0026utm_medium=pagina_cadastro\u0026utm_campaign=pagina_cadastro\u0026utm_content=pagina_cadastro"],["map","key","acesso\\.estadao\\.com\\.br\\\/login(\\\/index|)","value","?utm_source=pagina_login\u0026utm_medium=pagina_login\u0026utm_campaign=pagina_login\u0026utm_content=pagina_login"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^(https\\:\\\/\\\/arte.estadao.com.br\\\/especiais\\\/e\\-books\\\/orgulho\\_de\\_mae\\_resultado).*$","value","https:\/\/arte.estadao.com.br\/especiais\/e-books\/orgulho_de_mae.php"],["map","key","^(https\\:\\\/\\\/arte.estadao.com.br\\\/especiais\\\/e-books\\\/para_entender\\_2019\\_resultado).*$","value","https:\/\/arte.estadao.com.br\/especiais\/e-books\/para_entender_2019.php"],["map","key","^(https\\:\\\/\\\/arte.estadao.com.br\\\/especiais\\\/e\\-books\\\/25\\_anos\\_sem\\_senna\\_resultado).*$","value","https:\/\/arte.estadao.com.br\/especiais\/e-books\/25_anos_sem_senna.php"],["map","key","^(https\\:\\\/\\\/arte.estadao.com.br\\\/especiais\\\/e\\-books\\\/fausto\\_resultado).*$","value","https:\/\/arte.estadao.com.br\/especiais\/e-books\/fausto.php"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","anonimo_assine","value","paywall"],["map","key","cadastrado_ativo","value","paywall"],["map","key","cadastrado_assine","value","paywall"],["map","key","cadastrado_assiduo","value","paywall"],["map","key","ex_baixo_engajamento","value","paywall"],["map","key","ex_alto_engajamento","value","paywall"],["map","key","colunista","value","paywall"],["map","key","conteudo_exclusivo","value","paywall"],["map","key","anonimo_engaje","value","extended"],["map","key","cadastrado_30_dias\\+","value","extended"],["map","key","anonimo_identificado","value","registration"],["map","key","anonimo_assiduo","value","registration"],["map","key","anonimo_retornante","value","registration"],["map","key","anonimo_ativo","value","registration"],["map","key","Notícia 6 \\- modal Paywall","value","paywall"],["map","key","Noticia Post Blog 6 \\- modal Paywall","value","paywall"],["map","key","Noticia 6 \\- modal Paywall","value","paywall"],["map","key","Especial 6 \\- modal Paywall","value","paywall"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Evar ja_sucesso=1,id_product_assine=\"\";\n(function(b,f,d,g,h){id_product_assine=id_product_assine?id_product_assine:g(\"assineCart\");var e=function(){",["escape",["macro",94],8,16],".push({event:\"checkout_login\"});",["escape",["macro",94],8,16],".push({event:\"checkout_address\"});",["escape",["macro",94],8,16],".push({event:\"checkout_payment\"});products.filter(function(a){a.id.includes(\"AAP\")\u0026\u0026(id_product_assine=a.id)});c();",["escape",["macro",94],8,16],".push({event:\"debug_subscribe\"})},k=function(){var a=String(",["escape",["macro",98],8,16],".substring(",["escape",["macro",98],8,16],".lastIndexOf(\"?utm\")));a=\na.substring(0,a.length-1);h(\"assineCart\");location.search.includes(a)||a.includes(\"false\")||window.history.pushState(\"\",\"\",location.pathname+a);products.filter(function(a){a.id==id_product_assine\u0026\u0026",["escape",["macro",94],8,16],".push({event:\"forcePvPurchase\",page:\"\/success\",ecommerce:{purchase:{actionField:{id:1E16*Math.random(),affiliation:\"\",revenue:a.price,tax:\"\",shipping:\"\",coupon:\"\"},products:[a]},paymentMethod:\"Google Pay\",shippingMethod:\"\",userType:\"PF\",fullPrice:a.metric4}})});",["escape",["macro",94],8,16],".push({event:\"forcePixelSmart\"})},\nc=function(){ja_sucesso\u0026\u0026(ja_sucesso=0,k())};d(\"mousedown\",\"#google-topo\",function(a){1==",["escape",["macro",93],8,16],"\u00262==a.button\u0026\u0026e()});d(\"mousedown\",\".google-subscribe-wrapper button\",function(a){1==",["escape",["macro",93],8,16],"\u00262==a.button\u0026\u0026e()});(b.ESWG=b.ESWG||[]).push(function(a){var b=window.location.search;a.Event.addEventListener(\"open\",function(a){a.productID\u0026\u0026(",["escape",["macro",93],8,16],"?console.log(a.productID):\"\",window.id_product_assine,window.id_product_assine=a.productID.substring(a.productID.lastIndexOf(\"_\")+\n1).toLocaleUpperCase(),document.cookie=\"assineCart\\x3d\"+id_product_assine,",["escape",["macro",94],8,16],".push({event:\"checkout_login\"}),",["escape",["macro",94],8,16],".push({event:\"checkout_address\"}),",["escape",["macro",94],8,16],".push({event:\"checkout_payment\"}),location.pathname.includes(\"app\")||f(\"convers\\u00e3o\",\"bot\\u00e3o_assine_google-subscribe\",id_product_assine,\"\",\"\",\"ga_event\"))});a.Event.addEventListener(\"success\",function(a){window.history.pushState({},\"\",\"\/success-com-cpf\"+b);c()});a.Event.addEventListener(\"successDocument\",\nfunction(a){window.history.pushState({},\"\",\"\/success\"+b);c()})})})(window,window.dp6GenericEvent,window.estadaoListen,window.getCookieEstadao,window.deleteCookieEstadao);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":225
    },{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){String(",["escape",["macro",5],8,16],").toLocaleLowerCase();var b=String(",["escape",["macro",76],8,16],").toLocaleLowerCase();String(",["escape",["macro",4],8,16],").toLocaleLowerCase();b.includes(\"show\")\u0026\u0026(\"paywall\"==",["escape",["macro",104],8,16],"?a({type:\"paywall\",category:\"block\",action:\"stop\"},\"paywallEvent\"):\"registration\"==",["escape",["macro",104],8,16],"?a({category:\"registration\",action:\"created\"},\"paywallEvent\"):\"extended\"==",["escape",["macro",104],8,16],"?a({category:\"display\",action:\"modal\",offers:[]},\"paywallEvent\"):a({category:\"display\",\naction:\"overlay\",offers:[]},\"paywallEvent\"))})(window.genericEventMa);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":332
    },{
      "function":"__html",
      "priority":2,
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,d){var a=String(",["escape",["macro",76],8,16],").toLocaleLowerCase(),c=String(",["escape",["macro",5],8,16],").toLocaleLowerCase();String(",["escape",["macro",4],8,16],").toLocaleLowerCase();\"cadastra-se\"!=c||a.includes(\"recusa\")||a.includes(\"erro\")?\"cadastra-se\"!=c||a.includes(\"recusa\")||a.includes(\"erro\")||b({category:\"registration\",action:\"logon\"},\"paywallEvent\"):b({category:\"registration\",action:\"activation_lookup\"},\"paywallEvent\")})(window.genericEventMa,window.estadaoListen);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":333
    },{
      "function":"__html",
      "priority":2,
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a({category:\"registration\",action:\"activation_confirmation\"},\"paywallEvent\")})(window.genericEventMa);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":334
    },{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=\"\";\"addtocart\"==",["escape",["macro",33],8,16],"?a=\"subscription_selected\":\"checkout_address\"==",["escape",["macro",33],8,16],"?a=\"address_information\":\"checkout_payment\"==",["escape",["macro",33],8,16],"\u0026\u0026(a=\"payment_information\");products\u0026\u0026b({category:\"payment\",action:a,offers:",["escape",["macro",27],8,16],"},\"paywallEvent\")})(window.genericEventMa);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":336
    },{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a({category:\"payment\",action:\"terms_and_condition\",offers:",["escape",["macro",27],8,16],"},\"paywallEvent\");a({category:\"payment\",action:\"payment_confirmation\",offers:",["escape",["macro",27],8,16],"},\"paywallEvent\");a({category:\"payment\",action:\"completed\",offers:",["escape",["macro",27],8,16],"},\"paywallEvent\")})(window.genericEventMa);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":337
    },{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){(window._matherq=window._matherq||[]).push([\"setUserId\",\"",["escape",["macro",42],7],"\"])})(window.genericEventMa);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":338
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayerGlobal=window.dataLayerEstadao||window.dataLayerAssineEstadao||window.dataLayerParceirosEstadao||[];window.dp6FirstURL=document.location.href;var status_proximo_noticia_dp6=0;window.dp6Listen=function(d,c,a,b){if(b){var e=function(c){try{a(c)}catch(m){}};try{if(b)$(d).on(c,b,e);else $(d).on(c,e)}catch(h){try{document.querySelectorAll(d).forEach(function(a){a.addEventListener(c,function(a){(!b||b\u0026\u0026a.target\u0026\u0026a.target.matches(b))\u0026\u0026e(a)})})}catch(m){}}}else window.estadaoListen(c,d,a)};\nwindow.estadaoListen=function(d,c,a,b){b=b?b:document.querySelector(\"body\");d=",["escape",["macro",93],8,16],"?\"mousedown\":d;\"string\"==typeof c?function(){var d=a;a=function(a){a.target.matches(c)?d.apply(a.target,arguments):a.target.closest(c)\u0026\u0026d.apply(a.target.closest(c),arguments)}}():a=c;null!==b\u0026\u0026b.addEventListener(d,a)};\nwindow.breakTags=function(d,c,a){var b=0;window.dataLayerGlobal\u0026\u0026window.dataLayerGlobal\u0026\u0026setTimeout(function(){window.dataLayerGlobal.forEach(function(a){a.event==d\u0026\u0026(b=1)});b||window.dataLayerGlobal.push({event:c})},a)};window.dp6GenericEvent=function(d,c,a,b,e,h){d=d\u0026\u0026d.toString().trim();c=c\u0026\u0026c.toString().trim();a=a\u0026\u0026a.toString().trim();e||(e=!1);try{var m=dataLayerGlobal;m\u0026\u0026m.push({event:h?h:\"genericEvent\",genericCategory:d,genericAction:c,genericLabel:a,genericValue:b,nonInteraction:e})}catch(f){}};\nwindow.listenEventosFormularioEstadao=function(d,c,a,b,e,h){var m=",["escape",["macro",93],8,16],"?\"mousedown\":\"click\",f=Object.keys(c),n,l={},k=\"\",p=0,r=!1;b?b:\"\\x3cblank\\x3e\";String(b).includes(\"erro\")\u0026\u0026(h=b,b=\"\\x3cblank\\x3e\");var t=new MutationObserver(function(a){a.forEach(function(a){r=a.target.className.includes(b)})}),u={attributes:!0,childList:!0,characterData:!0},q=c[f[0]][Object.keys(c[f[0]])[0]];\"object\"==typeof q\u0026\u0026(q!=q.substr(q.indexOf(\"_\")+1)\u0026\u0026(b=q.substr(q.indexOf(\"_\")+1)),c[f[0]][Object.keys(c[f[0]])[0]]=\nq.substr(0,q.indexOf(\"_\")));\"single\"==c[f[0]][Object.keys(c[f[0]])[0]]?p=1:\"concatenado\"==c[f[0]][Object.keys(c[f[0]])[0]]?p=2:\"separado\"==c[f[0]][Object.keys(c[f[0]])[0]]?p=3:\"sem_status\"==c[f[0]][Object.keys(c[f[0]])[0]]?p=4:\"concatenado_sem_status\"==c[f[0]][Object.keys(c[f[0]])[0]]?p=5:\"concatenado_com_status\"==c[f[0]][Object.keys(c[f[0]])[0]]\u0026\u0026(p=6);c[f[0]]=Object.keys(c[f[0]])[0];f=Object.keys(c);window.estadaoListen(m,f[0],function(b){if((b=b.target.closest(d))\u0026\u0026\"object\"==typeof c\u0026\u0026f.length){t.observe(b.querySelector(f[0]),\nu);for(var g=1;g\u003Cf.length;g++)b.querySelector(f[g])?(n=b.querySelector(f[g]).parentElement.attributes[\"data-error\"]||b.querySelector(f[g]).parentElement.attributes[h]||b.querySelector(f[g]).attributes[h]||b.querySelector(f[g]).attributes[\"data-error\"]||b.querySelector(f[g]).parentElement.querySelector(h)||b.querySelector(f[g]).querySelector(h)?b.querySelector(f[g]).attributes.required?\"erro\":\"sucesso\":b.querySelector(f[g]).value?\"preenchido\":\"nao_preenchido\",l[c[f[g]]]={status:n}):l[c[f[g]]]={status:\"_nao_encontrado\"};\nif(\"undefined\"!==typeof a){if(3\u003Ea.length)for(g=0;3\u003Eg;g++)\"undefined\"==typeof a[g]\u0026\u0026(a[g]=\"\");setTimeout(function(){document.querySelector(f[0])?n=\"erro\":n=\"sucesso\";\"sucesso\"==n\u0026\u0026(l[c[f[0]]]={status:n});setTimeout(function(){r\u0026\u0026(n=\"sucesso\");l[c[f[0]]]={status:n};var b=Object.keys(l),d=\"\";\"conversao\"!==a[0]\u0026\u0026\"convers\\u00e3o\"!==a[0]\u0026\u0026(d=a[0],a[0]=\"conversao\");if(1==p)window.dp6GenericEvent(d?d:a[0],a[1]+b[0],a[2]+l[b[0]].status),",["escape",["macro",93],8,16],"?console.log(a[0],a[1]+b[0],a[2]+l[b[0]].status):\n\"\";else if(2==p)k=\"\",b.forEach(function(a){k=k+k?\"|\":\"\"+a+l[a].status}),window.dp6GenericEvent(d?d:a[0],a[1],k),",["escape",["macro",93],8,16],"?console.log(a[0],a[1],k):\"\";else if(3==p)b.forEach(function(b){window.dp6GenericEvent(d?d:a[0],a[1]+b,a[2]+l[b].status);",["escape",["macro",93],8,16],"?console.log(a[0],a[1]+b,a[2]+l[b].status):\"\"});else if(4==p\u0026\u0026\"sucesso\"==n)window.dp6GenericEvent(d?d:a[0],a[1]+b[0],a[2]),",["escape",["macro",93],8,16],"?console.log(a[0],a[1]+b[0],a[2]):\"\";else if(5==p){evento_single_botao=k=\"\";for(var e=\n0;e\u003Cb.length;e++)e==b.length-1?evento_single_botao=b[e]:k=k+\"|\"+b[e]+l[b[e]].status;window.dp6GenericEvent(d?d:a[0],a[1],k);window.dp6GenericEvent(a[0],a[1],evento_single_botao);",["escape",["macro",93],8,16],"?console.log(a[0],a[1],k):\"\";",["escape",["macro",93],8,16],"?console.log(a[0],a[1],evento_single_botao):\"\"}else if(6==p){status_tmp=evento_single_botao=k=\"\";for(e=0;e\u003Cb.length;e++)e==b.length-1?evento_single_botao=b[e]:(k=k+\"|\"+b[e]+l[b[e]].status,l[b[e]].status.includes(\"erro\")\u0026\u0026!status_tmp.includes(\"erro\")\u0026\u0026(status_tmp=\n\"erro\"));evento_single_botao+=\"erro\";window.dp6GenericEvent(d?d:a[0],a[1],k);window.dp6GenericEvent(a[0],a[1],evento_single_botao);",["escape",["macro",93],8,16],"?console.log(a[0],a[1],k):\"\";",["escape",["macro",93],8,16],"?console.log(a[0],a[1],evento_single_botao):\"\"}},e?e:500)},500)}}})};window.dp6WordCounter=function(d,c){var a=0;try{for(var b=$(d).toArray(),e=0;e\u003Cb.length;e++)try{var h=$(b[e]).text().trim(),m=$(b[e]).find(\"a\").text().trim();c\u0026\u0026c.test(h)||h==m||(a+=h.replace(\/(\\s+|\\r\\n|\\r|\\n)\/g,\" \").split(\" \").length)}catch(f){}}catch(f){}return a};\nwindow.dp6Helper={genericEvent:window.dp6GenericEvent,listen:window.dp6Listen,wordCounter:window.dp6WordCounter};\nwindow.dp6WatchNewsOn=function(d,c,a,b){if(!document.querySelector(\"body\").classList.contains(\"reportagem-especial\")){var e=-1,h=-1;a=$(c).toArray();for(var m=0;m\u003Ca.length-1;m++);var f=$(window).scrollTop()+$(window).height(),n=[!1],l=[!1];$(window).on(\"unload\",function(){try{if(!document.querySelector(\"body\").classList.contains(\"reportagem-especial\")\u0026\u0026!n[e]){var a=Math.max(f,$(window).scrollTop()+$(window).height()),b=$($(c)[e]),d=b.offset().top,g=b.innerHeight(),h=Math.min(100*(a-d)\/g,100);parseInt(h\/\n10);parseInt(h\/10)}}catch(w){}});$(window).scroll(function(){try{f=Math.max(f,$(window).scrollTop()+$(window).height());var a=$($(c)[e]),b=$(window).scrollTop()+$(window).innerHeight(),h=a.offset().top+a.height(),g=Math.max(f,$(window).scrollTop()+$(window).height()),k=$($(c)[e]),l=k.offset().top,p=k.innerHeight(),m=Math.min(100*(g-l)\/p,100);25\u003Cm\u0026\u00260==status_proximo_noticia_dp6\u0026\u0026100!==m\u0026\u0026!n[e]?(d.genericEvent(\"engajamento\",\"maxscroll_noticia\",\"scroll 25%\",25),status_proximo_noticia_dp6=1):50\u003Cm\u0026\u00261==\nstatus_proximo_noticia_dp6\u0026\u0026100!==m\u0026\u0026!n[e]?(d.genericEvent(\"engajamento\",\"maxscroll_noticia\",\"scroll 50%\",50),status_proximo_noticia_dp6=2):75\u003Cm\u0026\u00262==status_proximo_noticia_dp6\u0026\u0026!n[e]\u0026\u0026(d.genericEvent(\"engajamento\",\"maxscroll_noticia\",\"scroll 75%\",75),status_proximo_noticia_dp6=3);b\u003Eh\u0026\u0026!n[e]\u0026\u0026(n[e]=!0,n.push(!1),d.genericEvent(\"engajamento\",\"maxscroll_noticia\",\"scroll 100%\",100),status_proximo_noticia_dp6=0)}catch(x){}});$(window).scroll(function(){try{var a=$($('iframe[name*\\x3d\"coral_talk\"]')[h]);\nif(0!==a.length){var b=$(window).scrollTop()+$(window).innerHeight()\/2,c=a.offset().top;b\u003Ec\u0026\u0026!l[h]\u0026\u0026(l[h]=!0,l.push(!1),d.genericEvent(\"engajamento\",\"scroll_noticia\",\"scroll_comentario\"))}}catch(g){}});var k=[],p=[],r=function(a){a=$(a.target).attr(\"title\");var b=\"esquerda_\";\/compartilhe\/i.test(a)?a=a.replace(\"Compartilhe pelo \",\"\").trim():\/siga\/i.test(a)\u0026\u0026(a=a.replace(\"Siga o Estad\\u00e3o no \",\"\").trim(),b=\"direita_\");d.genericEvent(\"engajamento\",\"not\\u00edcia\",b+a)},t=function(){k.push(setInterval(function(){try{var a=\n0;a=b?d.wordCounter(c+\":eq(\"+(e+1).toString()+\") p,\"+c+\":eq(\"+(e+1).toString()+\") h3\"):d.wordCounter(c+\":eq(\"+(e+1).toString()+\")\\x3ep,\"+c+\":eq(\"+(e+1).toString()+\")\\x3eh3\");var f=$(window).scrollTop()+$(window).innerHeight(),l=$($(c)[e+1]).offset().top;if(20\u003Ca\u0026\u0026f\u003El){d.genericEvent(\"engajamento\",\"word_counter\",a,void 0,!0);clearInterval(k[e+1]);p.push(k[e+1]);if(g){var g=document.querySelectorAll(\"li.twitter a, li.facebook a, li.whatsapp a, li.gplus a, li.linkedin a, li.instagram a, li.youtube a, li.pinterest a\");\nfor(a=0;a\u003Cg.length;a++)g[a].removeEventListener(\"mousedown\",r);document.querySelectorAll(\"li.twitter a, li.facebook a, li.whatsapp a, li.gplus a, li.linkedin a, li.instagram a, li.youtube a, li.pinterest a\").forEach(function(a){a.addEventListener(\"mousedown\",r)})}e++;h++;void 0===$('iframe[name*\\x3d\"coral_talk\"]')[h]\u0026\u0026h--;t()}}catch(v){}},500))};t()}};\nwindow.getCookieEstadao=function(d){var c=document.cookie;d+=\"\\x3d\";var a=c.indexOf(\"; \"+d);if(-1==a){if(a=c.indexOf(d),0!=a)return null}else a+=2;var b=c.indexOf(\";\",a);-1==b\u0026\u0026(b=c.length);return unescape(c.substring(a+d.length,b))};window.deleteCookieEstadao=function(d){window.getCookieEstadao(d)\u0026\u0026(document.cookie=d+\"\\x3d; expires\\x3dThu, 01-Jan-70 00:00:01 GMT\")};window.selectorVisivel=function(d){d=document.querySelector(d);return\"object\"===typeof d\u0026\u0026null!=d?(d.getBoundingClientRect(),!0):!1};\nwindow.selectorVisivelInterval=function(d,c,a){var b=setInterval(function(){window.selectorVisivel(d)\u0026\u0026(clearInterval(b),(window.dataLayerEstadao||window.dataLayerAssineEstadao||window.dataLayerParceirosEstadao||[]).push({event:c}))},a?a:300)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(k){k.BrowsingModeDetector=function(){var a=this,b=!0,c,l,g,d;this.BROWSING_NORMAL_MODE=\"NORMAL_MODE\";this.BROWSING_INCOGNITO_PRIVATE_MODE=\"INCOGNITO_PRIVATE_MODE\";this.ignoringBots=function(){b=!0;return this};this.notIgnoringBots=function(){b=!1;return this};this.getBrowsingMode=function(){return c?this.BROWSING_INCOGNITO_PRIVATE_MODE:this.BROWSING_NORMAL_MODE};this.setBrowsingInIncognitoMode=function(){c=!0};this.setBrowsingInNormalMode=function(){c=!1};this.isBotBrowsing=function(b){var a=\nwindow.navigator.userAgent;a=\/googlebot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis\/i.test(a);\nreturn\"undefined\"===typeof b?a:b(a)};this.setCallbackForNormalMode=function(b){l=b;return this};this.setCallbackForIncognitoOrPrivateMode=function(b){g=b;return this};this[\"do\"]=function(a){d=a;if(\"function\"!==typeof d\u0026\u0026(\"function\"!==typeof l||\"function\"!==typeof g))throw\"Default callback or specific callbacks are required\";b\u0026\u0026this.isBotBrowsing()?(c=!1,e()):(new m).browser(this).detectBrowsingMode(e)};var e=function(){c\u0026\u0026\"function\"===typeof g?g(a):c||\"function\"!==typeof l||l(a);\"undefined\"!==typeof d\u0026\u0026\nd(c,a)};return this};var m=function(){var a;this.browser=function(b){b=\"object\"===typeof a?a:a=b=window.webkitRequestFileSystem?new n(b):\"MozAppearance\"in document.documentElement.style?new h(b):\/constructor\/i.test(window.HTMLElement)?new d(b):window.PointerEvent||window.MSPointerEvent?new e(b):new f(b);return b};return this},n=function(a){this.BrowsingModeDetector=a;this.detectBrowsingMode=function(b){var a=this,d=function(){a.BrowsingModeDetector.setBrowsingInNormalMode();b()},g=function(){a.BrowsingModeDetector.setBrowsingInIncognitoMode();\nb()};window.webkitRequestFileSystem(window.TEMPORARY,1,d,g)};return this},h=function(a){this.BrowsingModeDetector=a;this.detectBrowsingMode=function(b){navigator.serviceWorker?this.BrowsingModeDetector.setBrowsingInNormalMode():this.BrowsingModeDetector.setBrowsingInIncognitoMode();b()};return this},d=function(a){this.BrowsingModeDetector=a;this.detectBrowsingMode=function(b){try{window.openDatabase(null,null,null,null)}catch(c){this.BrowsingModeDetector.setBrowsingInIncognitoMode(),b()}try{localStorage.length||\n(localStorage.i=1,localStorage.removeItem(\"i\")),this.BrowsingModeDetector.setBrowsingInNormalMode()}catch(c){navigator.cookieEnabled?this.BrowsingModeDetector.setBrowsingInIncognitoMode():this.BrowsingModeDetector.setBrowsingInNormalMode()}b()};return this},e=function(a){this.BrowsingModeDetector=a;this.detectBrowsingMode=function(b){window.indexedDB?this.BrowsingModeDetector.setBrowsingInNormalMode():this.BrowsingModeDetector.setBrowsingInIncognitoMode();b()};return this},f=function(a){this.BrowsingModeDetector=\na;this.detectBrowsingMode=function(b){this.BrowsingModeDetector.setBrowsingInNormalMode();b()};return this}})(window);\n(function(k){var m=function(d){d+=\"\\x3d\";var e=decodeURIComponent(document.cookie);e=e.split(\";\");for(var f=0;f\u003Ce.length;f++){for(var a=e[f];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(d))return a.substring(d.length,a.length)}return null},n=[\"assine.estadao.com.br\",\"acesso.estadao.com.br\",\"jornaldocarro.estadao.com.br\"],h=k.dataLayerEstadao||[{}];-1===window.location.hostname.indexOf(\"estadao.com.br\")\u0026\u0026-1===window.location.hostname.indexOf(\"br18.com.br\")\u0026\u0026-1===window.location.hostname.indexOf(\"esportefera.com.br\")||\nh[0].pagina\u0026\u0026h[0].pagina.tipo\u0026\u0026-1!==h[0].pagina.tipo.toLowerCase().indexOf(\"home\")||\"\/\"===window.location.pathname||-1!==n.indexOf(window.location.hostname)||m(\"OESP_INFO\")||(k=new BrowsingModeDetector,k[\"do\"](function(d,e){if(d){var f=window.location.href,a=\"https:\/\/www.estadao.com.br\/usuario-anonimo\",b=document.createElement(\"iframe\"),c=new XMLHttpRequest;c.onreadystatechange=function(){4==this.readyState\u0026\u0026200==this.status\u0026\u0026(b.setAttribute(\"id\",\"aba-anonima-block\"),b.setAttribute(\"srcdoc\",\"\"),b.onload=\nfunction(){b.contentWindow.document.write(c.responseText);var a=b.contentWindow.document.querySelector(\".login .acesso-btn\");a\u0026\u0026a.setAttribute(\"href\",\"https:\/\/acesso.estadao.com.br\/login?r\\x3d\"+f);setTimeout(function(){var a=b.contentWindow.document.createEvent(\"Event\");a.initEvent(\"DOMContentLoaded\",!0,!0);b.contentWindow.document.dispatchEvent(a);a=b.contentWindow.document.createEvent(\"Event\");a.initEvent(\"load\",!0,!0);b.contentWindow.dispatchEvent(a)},1E3);-1\u003Cnavigator.userAgent.toLowerCase().indexOf(\"firefox\")\u0026\u0026\nsetTimeout(function(){b.contentWindow.stop()},5E3)},document.documentElement.appendChild(b),b.setAttribute(\"style\",\"position: fixed;bottom: 0;left: 0;width: 100vw;height: 100vh;z-index: 9999999999999;border: none;padding: 0;margin: 0\"),setTimeout(function(){h.push({event:\"aba_anonima\"})},1E3))};c.open(\"GET\",a,!0);c.send()}}))})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":286
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d){",["escape",["macro",99],8,16],".includes(\"https:\/\/submit.jotformz\")||\"false\"==",["escape",["macro",100],8,16],"||(window.location.href=",["escape",["macro",100],8,16],");labels={\".form-submit-button\":{botao_enviar_:\"concatenado_com_status\"},'[name\\x3d\"q10_nome[first]\"]':\"nome_\",'[name\\x3d\"q10_nome[last]\"]':\"sobrenome_\",'[name\\x3d\"q4_email\"]':\"email_\",'[name\\x3d\"q9_numeroDe[area]\"]':\"ddd_\",'[name\\x3d\"q9_numeroDe[phone]\"]':\"telefone_\"};d(\"form.jotform-form\",labels,[\"engajamento\",\"ebook_estadao\"],\".form-validation-error\",\n0);c(\"click\",\"a.botao\",function(a){a=a.target.innerText.toLocaleLowerCase();\"e-book\"==a\u0026\u0026(a=\"ebook\");b(\"conversao\",\"ebook_estadao\",\"download_\"+a)})})(window.dp6GenericEvent,window.estadaoListen,window.listenEventosFormularioEstadao);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "priority":1,
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,h){(function(a,c,g,e,b,d,f){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;d=c.createElement(g);f=c.getElementsByTagName(g)[0];d.async=1;d.src=e;f.parentNode.insertBefore(d,f)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");var c=function(){ga(\"create\",\"UA-166963-24\",\"auto\",\"forcePageViewEbook\");ga(\"forcePageViewEbook.send\",\"pageview\",{hitType:\"pageview\",event:\"forcePageView\",location:location.href,dimension1:\"",["escape",["macro",42],7],"\",\ndimension2:\"",["escape",["macro",2],7],"\",dimension3:\"Ebook\",dimension4:document.title,dimension5:\"Ebook\",dimension6:\"\",dimension7:0,dimension8:\"\",dimension9:\"\",dimension10:\"\",dimension11:\"\",dimension12:\"\",dimension17:\"Estad\\u00e3o\",dimension18:\"Geral\",dimension19:\"\",dimension20:\"\",dimension21:\"Ebook\",dimension22:\"\",dimension23:\"\",dimension24:\"\",dimension25:\"\",dimension26:\"inativo\",dimension53:\"\",dimension54:document.title,dimension16:\"\",dimension62:\"Ebook\",dimension68:",["escape",["macro",8],8,16],"?",["escape",["macro",8],8,16],":\n\"\",dimension64:\"",["escape",["macro",9],7],"\",dimension70:",["escape",["macro",17],8,16],"?",["escape",["macro",17],8,16],":\"\",dimension69:",["escape",["macro",18],8,16],"?",["escape",["macro",18],8,16],":\"\",dimension71:",["escape",["macro",19],8,16],"?",["escape",["macro",19],8,16],":\"\",dimension72:",["escape",["macro",20],8,16],"?",["escape",["macro",20],8,16],":\"\",dimension73:",["escape",["macro",21],8,16],"?",["escape",["macro",21],8,16],":\"\",dimension74:",["escape",["macro",22],8,16],"?",["escape",["macro",22],8,16],":\"\",dimension75:",["escape",["macro",23],8,16],"?",["escape",["macro",23],8,16],":\"\",dimension76:",["escape",["macro",24],8,16],"?",["escape",["macro",24],8,16],":\n\"\",dimension77:",["escape",["macro",25],8,16],"?",["escape",["macro",25],8,16],":\"\",dimension78:",["escape",["macro",26],8,16],"?",["escape",["macro",26],8,16],":\"\",dimension79:",["escape",["macro",72],8,16],"?",["escape",["macro",72],8,16],":\"\"})};a=window.location.search?window.location.search:a(\"ebook_utm\");",["escape",["macro",99],8,16],".includes(\"https:\/\/submit.jotformz\")\u0026\u0026\"false\"!=",["escape",["macro",100],8,16],"?(\"null\"!=a\u0026\u0026window.history.pushState({},\"\",a),e(\"ebook_utm\"),setTimeout(function(){\"undefined\"!=typeof ga\u0026\u0026c()},300)):\"\"!==a\u0026\u0026\"false\"==",["escape",["macro",100],8,16],"\u0026\u0026\n(document.cookie=\"ebook_utm\\x3d\"+a,setTimeout(function(){\"undefined\"!=typeof ga\u0026\u0026c()},300))})(window.getCookieEstadao,window.deleteCookieEstadao,window.dataLayerEstadao);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E4\u003E",["escape",["macro",34],8,16],"\u0026\u0026",["escape",["macro",94],8,16],".push({event:\"forcePvCheckout\",page:\"\/passo-\"+",["escape",["macro",34],8,16],",ecommerce:{checkout:{actionField:{step:",["escape",["macro",34],8,16],",option:\"\"},products:products}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.id_product_assine=\"\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":318
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,b,g){var a=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0]||document.head,e;try{if(!(e=localStorage._matherVer))throw!1;}catch(h){e=Math.round(new Date\/10368E5)}a.type=\"text\/javascript\";a.async=!0;a.defer=!0;a.id=\"_mljs\";a.src=(\"https:\"==window.location.protocol?\"https\":\"http\")+\":\/\/\"+(g||\"js.matheranalytics.com\/s\")+\"\/\"+c+\"\/\"+d+\"\/\"+(b?b+\"\/\":\"\")+\"ml.js?cb\\x3d\"+e;f.parentNode.insertBefore(a,f)})(\"ma18232\",\"303657000\",\"\");window._matherq=window._matherq||[];\nwindow.genericEventMa=function(c,d){var b=[d,c||{}];_matherq.push(b);",["escape",["macro",93],8,16],"?console.log(\"_matherq.push(\",b,\");\"):\"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":322
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",73],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",74],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",7],
      "vtp_eventValue":["macro",75],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":["macro",5],
      "vtp_eventLabel":["macro",76],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",78],
      "vtp_eventCategory":"Video view",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__hjtc",
      "teardown_tags":["list",["tag",33,0]],
      "once_per_event":true,
      "vtp_hotjar_site_id":"785763",
      "tag_id":32
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",82],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",42]],["map","index","2","dimension",["macro",2]],["map","index","3","dimension",["macro",49]],["map","index","4","dimension",["macro",50]],["map","index","5","dimension",["macro",14]],["map","index","6","dimension",["macro",51]],["map","index","7","dimension",["macro",53]],["map","index","8","dimension",["macro",67]],["map","index","9","dimension",["macro",58]],["map","index","10","dimension",["macro",59]],["map","index","11","dimension",["macro",60]],["map","index","12","dimension",["macro",61]],["map","index","13","dimension",["macro",62]],["map","index","14","dimension",["macro",63]],["map","index","15","dimension",["macro",9]],["map","index","16","dimension",["macro",71]],["map","index","17","dimension",["macro",18]],["map","index","18","dimension",["macro",17]],["map","index","19","dimension",["macro",19]],["map","index","20","dimension",["macro",20]],["map","index","21","dimension",["macro",21]],["map","index","22","dimension",["macro",22]],["map","index","23","dimension",["macro",23]],["map","index","24","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":42
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1053126066",
      "vtp_conversionLabel":"YwqLCIjw0gEQstuV9gM",
      "vtp_url":["macro",83],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",84],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":66
    },{
      "function":"__vei",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_jsUrl":"\/\/configusa.veinteractive.com\/tags\/E0F4158F\/6117\/47B3\/81D9\/3E4934515E68\/tag.js",
      "tag_id":79
    },{
      "function":"__veip",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelUrl":"\/\/cdsusa.veinteractive.com\/DataReceiverService.asmx\/Pixel?journeycode=E0F4158F-6117-47B3-81D9-3E4934515E68",
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",85]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",73],
      "vtp_dimension":["list",["map","index","65","dimension",["macro",86]],["map","index","66","dimension",["macro",87]],["map","index","67","dimension",["macro",88]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",74],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",7],
      "vtp_eventValue":["macro",75],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",82],
      "vtp_eventAction":["macro",5],
      "vtp_eventLabel":["macro",76],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",85]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",82],
      "vtp_dimension":["list",["map","index","2","dimension",["macro",86]],["map","index","3","dimension",["macro",87]],["map","index","4","dimension",["macro",88]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":103
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":116
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":117
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"788653",
      "tag_id":119
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",78],
      "vtp_eventCategory":"Video view",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":176
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_bem-vindo",
      "vtp_eventLabel":"show",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":195
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_bem-vindo",
      "vtp_eventLabel":"maistarde",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_bem-vindo",
      "vtp_eventLabel":"sim",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_caroleitor",
      "vtp_eventLabel":"show",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":200
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_caroleitor",
      "vtp_eventLabel":"maistarde",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":201
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_caroleitor",
      "vtp_eventLabel":"sim",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":202
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_noticiasativadas",
      "vtp_eventLabel":"show_assinante",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":205
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engajamento",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",73],
      "vtp_eventAction":"webpush_noticiasativadas",
      "vtp_eventLabel":"show_naoassinante",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":326
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":327
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",74],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",7],
      "vtp_eventValue":["macro",75],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",82],
      "vtp_eventAction":["macro",5],
      "vtp_eventLabel":["macro",76],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":343
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-PMJLHJ3",
      "vtp_gaSettings":["macro",82],
      "tag_id":344
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",91],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":346
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",74],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",7],
      "vtp_eventValue":["macro",75],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",5],
      "vtp_eventLabel":["macro",76],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":350
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",27],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715559334",
      "vtp_conversionLabel":"RhGoCLGWpKgBEKajmtUC",
      "vtp_url":["macro",83],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":354
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-PMJLHJ3",
      "vtp_gaSettings":["macro",73],
      "tag_id":362
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10,25,50,75,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"8104086_128",
      "vtp_enableTriggerStartOption":true,
      "tag_id":363
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"8104086_587",
      "vtp_enableTriggerStartOption":true,
      "tag_id":364
    },{
      "function":"__cl",
      "tag_id":365
    },{
      "function":"__cl",
      "tag_id":366
    },{
      "function":"__cl",
      "tag_id":367
    },{
      "function":"__cl",
      "tag_id":368
    },{
      "function":"__hl",
      "tag_id":369
    },{
      "function":"__hl",
      "tag_id":370
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8104086_969",
      "tag_id":371
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","8104086_984_91"],
      "vtp_uniqueTriggerId":"8104086_984",
      "tag_id":372
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8104086_984_91",
      "tag_id":373
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","8104086_988_2147479553","8104086_988_607"],
      "vtp_uniqueTriggerId":"8104086_988",
      "tag_id":374
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8104086_988_2147479553",
      "tag_id":375
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8104086_988_607",
      "tag_id":377
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8104086_1036",
      "tag_id":378
    },{
      "function":"__jel",
      "tag_id":379
    },{
      "function":"__hl",
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d){if(\"function\"===typeof jQuery){d(\"#barra-estadao-parceiros a\",\"mousedown\",function(a){a\u0026\u0026a.target\u0026\u0026a.target.text\u0026\u0026(\"assine o estad\\u00e3o\"==a.target.text.toLowerCase().trim()?c(\"convers\\u00e3o\",\"menu_superior\",\"bot\\u00e3o_assine_superior\"):c(\"engajamento\",\"menu_superior\",a.target.text))});d(\".header-hamburger-menu\",\"mousedown\",function(a){a=\"block\"==$(\"section.header-menu-user\").css(\"display\")?\"fechando\":\"abrindo\";\"abrindo\"==a\u0026\u0026c(\"engajamento\",\"menu_superior\",\"bot\\u00e3o_menu\")});var f=\nwindow.location.href;f.includes(\"https:\/\/politica.estadao.com.br\/eleicoes\/2018\")||d(\".header-menu a\",\"mousedown\",function(a){if(a\u0026\u0026a.target\u0026\u0026a.target.text)if(\"assine\"==a.target.text.toLowerCase().trim())c(\"convers\\u00e3o\",\"menu_superior\",\"bot\\u00e3o_assine_direto\");else{var b=\"home\";try{var d=document.location.host.replace(\/devl-2016\\.|qa2016\\.\/i,\"\");b=d.split(\".\")[0];if(\"www\"==b||\"estadao\"==b)b=\"home\";b=b.replace(\"www\",\"home\").replace(\"estadao\",\"home\");\"esportes\"==b\u0026\u00260\u003Cdocument.location.pathname.indexOf(\"copa-do-mundo\")\u0026\u0026\n(b=\"copadomundo\")}catch(h){b=\"home\"}c(\"engajamento\",\"menu_editorias_\"+b,a.target.text)}});d('a[title\\x3d\"Meu Perfil\"]',\"mousedown\",function(a){a=\"block\"==$(\"section.header-menu-user\").css(\"display\")?\"menu_lateral\":\"menu_superior\";c(\"engajamento\",a,\"Login\")});d(\".assine-bar\",\"click\",function(){c(\"conversao\",\"home\",\"botao_assine_lateral\")});d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"facebook\")},\"div.label .share li.facebook\");d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"whatsapp\")},\n\"div.label .share li.whatsapp\");d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"twitter\")},\"div.label .share li.twitter\");d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"google Plus\")},\"div.label .share li.gplus\");d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"linkedIn\")},\"div.label .share li.linkedin\");d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"email\")},\"div.label .share li.email\");d(\"body\",\"mousedown\",function(a){c(\"engajamento\",\"home\",\"imprimir\")},\"div.label .share li.print\");\nd(\".module__share.js-fixed-noticia-cover .share li a\",\"mousedown\",function(a){a=a.target.parentElement.className;a=\"gplus\"==a?\"google plus\":a;console.log(a);c(\"engajamento\",\"noticia\",\"esquerda_\"+a)});d(\".follow-links.share\",\"mousedown\",function(a){a=a.target.parentElement.className;a=\"gplus\"==a?\"google plus\":a;c(\"engajamento\",\"noticia\",\"direita_\"+a)});d(\"body\",\"mousedown\",function(a){a=$(\"li.swiper-slide-active div.pagination span.swiper-pagination-1\").text().trim();var b=$(\"li.swiper-slide-active div.pagination span.swiper-pagination-2\").text().trim();\na\u0026\u0026b\u0026\u0026c(\"engajamento\",\"home_galeria\",a+\"\/\"+b)},\"div.prev, div.next\");d(\"body\",\"mousedown\",function(a){var b=\/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$\/i;a=$(\"span.nome-newsletter\").text().trim();var d=\/\\\/noticias\/.test(document.location.pathname)?\"noticia\":\"home\";b=b.test($('input[name\\x3d\"email\"]').val())?\"preenchido\":\"recusado\";c(\"convers\\u00e3o\",d+\"_newsletter_\"+a,\"bot\\u00e3o_assinar\");c(\"convers\\u00e3o\",d+\"_newsletter_\"+a,b)},\"a.btn-cadastre-newsletter\");\nd($(\".btn-news\"),\"mousedown\",function(a){setTimeout(function(){$(\".btn-news\")[0].innerText.includes(\"INV\\u00c1LIDO\")?c(\"convers\\u00e3o\",\"agenda_copa_do_mundo\",\"newsletter_recusado\"):$(\".btn-news\")[0].innerText.includes(\"Carregando\")\u0026\u0026c(\"convers\\u00e3o\",\"agenda_copa_do_mundo\",\"newsletter_preenchido\")},1E3)});d(\"body\",\"mousedown\",function(a){if(a\u0026\u0026a.target\u0026\u0026a.target.text){var b=\"home\";try{b=document.location.host.split(\".\")[0];if(\"www\"==b||\"estadao\"==b)b=\"home\";b=b.replace(\"www\",\"home\").replace(\"estadao\",\n\"home\")}catch(e){b=\"home\"}c(\"engajamento\",\"menu_inferior_\"+b,a.target.text.toLowerCase())}},\"nav.another-links a\");d(\"body\",\"mousedown\",function(a){var b=\"home\";try{b=document.location.host.split(\".\")[0];if(\"www\"==b||\"estadao\"==b)b=\"home\";b=b.replace(\"www\",\"home\").replace(\"estadao\",\"home\")}catch(e){b=\"home\"}c(\"engajamento\",\"menu_inferior_\"+b,$(a.target).text().toLowerCase())},'section.footer-container a[title*\\x3d\"Estad\\u00e3o no\"]');d(\"section.header-menu-user ul.navbar li\",\"mousedown\",function(a){\"entrar\"==\n$(a.target).text().toLowerCase().trim()?c(\"engajamento\",\"menu_lateral\",\"Login\"):\"assine\"==$(a.target).text().toLowerCase().trim()\u0026\u0026c(\"convers\\u00e3o\",\"menu_lateral\",\"bot\\u00e3o_assine_superior\")},\"section\");d(\".-categ-patrocinado\",\"click\",function(a){a=\"home\";window.location.href.match(\/^https?:\\\/\\\/(.+)\\.estadao\\.com\\.br\\\/(noticias|blogs)\\\/\/g)?console.log(\"achou\"):console.log(\"n\\u00e3o achou\");try{var b=document.location.host.split(\".\");a=\"qa2016\"!=b[0]?b[0]:b[1];if(\"www\"==a||\"estadao\"==a)a=\"home\";\na=a.replace(\"www\",\"home\").replace(\"estadao\",\"home\")}catch(e){a=\"home\"}c(\"branded_content\",\"clique\",a)},\"a:not(.ico-dots-three-horizontal):not(.ico-facebook):not(.ico-whatsapp):not(.ico-twitter):not(.ico-google-plus):not(.ico-linkedin):not(.ico-envelope-o):not(.ico-printer-text)\");d(\"div.menu-list a\",\"mousedown\",function(a){c(\"engajamento\",\"menu_lateral\",$(a.target).text().trim())});var g=setInterval(function(){try{ACT\u0026\u0026ACT.GoogleAnalyticsPlugin\u0026\u0026ACT.GoogleAnalyticsPlugin.prototype\u0026\u0026ACT.GoogleAnalyticsPlugin.prototype.sendEvent\u0026\u0026\n(clearInterval(g),ACT.GoogleAnalyticsPlugin.prototype._sendEvent=ACT.GoogleAnalyticsPlugin.prototype.sendEvent,ACT.GoogleAnalyticsPlugin.prototype.sendEvent=function(){var a=\"home\";try{a=document.location.host.split(\".\")[0];if(\"www\"==a||\"estadao\"==a)a=\"home\";a=a.replace(\"www\",\"home\").replace(\"estadao\",\"home\")}catch(b){a=\"home\"}c(\"engajamento\",a+\"_video\",arguments[1]);ACT.GoogleAnalyticsPlugin.prototype._sendEvent.apply(ACT.GoogleAnalyticsPlugin.prototype,arguments)})}catch(a){}},1E3)}else-1!=location.hostname.indexOf(\"www.estadao.com.br\")\u0026\u0026\nwindow.addEventListener(\"DOMContentLoaded\",function(){d(\".assine-bar\",\"click\",function(){c(\"conversao\",\"home\",\"botao_assine_lateral\")})})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar on=function(a,b,c,d){\"string\"==typeof c?function(){var a=d;d=function(b){b.target.matches(c)?a.apply(b.target,arguments):b.target.closest(c)\u0026\u0026a.apply(b.target.closest(c),arguments)}}():d=c;null!==a\u0026\u0026a.addEventListener(b,d)};(function(a,b){var c=\"\";document.querySelectorAll(\"div.post-content\").length?c=\"div.post-content\":document.querySelectorAll(\"section.col-content\").length\u0026\u0026(c=\"section.col-content\");b(a,c,!0,!0)})(window.dp6Helper,window.dp6WatchNewsOn);\n(function(a,b){$(\".loaded-trending .trending-bar__item\").click(function(){a(\"engajamento\",\"trending_bar_noticias\",\"posicao_\"+($(this).index()+1)+\"_\"+$(this).find(\"a\").attr(\"href\"))});on(document.querySelector(\"body\"),\"click\",\".n--noticia__content a\",function(){a(\"engajamento\",\"click\",\"link_noticia_\"+this.href)});on(document.querySelector(\"body\"),\"click\",\".n--noticia-especial__list a\",function(){a(\"engajamento\",\"click\",\"link_box_\"+this.href)})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){c('input[name\\x3d\"enviarsolicitacao\"]',\"mousedown\",function(a){b(\"convers\\u00e3o\",\"newsletter\",\"enviar\");a=\/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$\/i;a.test($('input[name\\x3d\"email\"]').val())?(b(\"convers\\u00e3o\",\"newsletter\",\"preenchido\"),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(\"trigger\",\"newsletter-preenchido\")}):(b(\"convers\\u00e3o\",\"newsletter\",\"recusado\"),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(\"trigger\",\"newsletter-recusado\")})});\nc('input[type\\x3d\"checkbox\"]',\"change\",function(a){var c=a.target.checked?\"select_\":\"unselect_\";a=$('label[for\\x3d\"'+a.target.id+'\"]').text().trim();b(\"convers\\u00e3o\",\"newsletter\",c+a)})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar on=function(a,b,f,e){\"string\"==typeof f?function(){var a=e;e=function(b){b.target.matches(f)?a.apply(b.target,arguments):b.target.closest(f)\u0026\u0026a.apply(b.target.closest(f),arguments)}}():e=f;null!==a\u0026\u0026a.addEventListener(b,e)};\n(function(a){var b=function(a,b,c){a=[].slice.call(document.querySelectorAll(a));a.forEach(function(a,g){a.addEventListener(b,function(b){b=c.bind(a,b,g);b()})})},f=function(a){return a.replace(\/(\\s+)(\\s+)(\\s+)\/gm,\"\").replace(\/([\\n\\t'\"]*)\/gm,\"\").replace(\/\\s+\/gm,\"-\").toLowerCase()},e=function(a,b){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||\nfunction(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb});for(;a\u0026\u0026a!==document;a=a.parentNode)if(a.matches(b))return a;return null};b(\".n-hdr .menu-hamburguer\",\"click\",function(){a(\"engajamento\",\"menu_superior\",\"bot\\u00e3o_menu\")});b(\".n-hdr .editorias ul li a\",\"click\",function(){a(\"engajamento\",\"menu_editorias\",this.textContent)});b(\".n-hdr .bt-action-login\",\"click\",function(){a(\"engajamento\",\"menu_superior\",\"Login\")});var c=\n\"\",d=\"home\";b(\".compartilha .icon-facebook, .sociais .icon-facebook:not(.icone-square)\",\"click\",function(){c=e(this,\".manchete-eleicoes\");console.log(this);d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"facebook\")});b(\".compartilha .icon-twitter, .sociais .icon-twitter:not(.icone-square)\",\"click\",function(){c=e(this,\".manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"twitter\")});b(\".compartilha .icon-whatsapp:not(.icone-square)\",\"click\",function(){c=\ne(this,\".manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"whatsapp\")});b(\".compartilha .icon-ellipsis-h .gplus.rede:not(.icone-square)\",\"click\",function(){a(\"engajamento\",\"home\",\"google plus\")});b(\".compartilha .linkedin:not(.icone-square)\",\"click\",function(){c=e(this,\".manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"linkedin\")});b(\".sociais .icon-instagram:not(.icone-square)\",\"click\",function(){a(\"engajamento\",\"home\",\"instagram\")});\nb(\".sociais .icon-youtube-play:not(.icone-square)\",\"click\",function(){a(\"engajamento\",\"home\",\"youtube\")});on(document.querySelector(\"body\"),\"click\",\".gplus.rede\",function(){c=e(this,\".-manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"google plus\")});on(document.querySelector(\"body\"),\"click\",\".linkedin.rede\",function(){c=e(this,\".-manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"linkedin\")});on(document.querySelector(\"body\"),\"click\",\n\".twitter.rede\",function(){c=e(this,\".-manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"twitter\")});on(document.querySelector(\"body\"),\"click\",\".email.rede\",function(){c=e(this,\".-manchete-eleicoes\");d=null!=c?\"compartilhar_supercolunas\":\"home\";a(\"engajamento\",d,\"email\")});on(document.querySelector(\"body\"),\"click\",\"footer .icon-facebook.icone-square\",function(){a(\"engajamento\",\"menu_inferior\",\"facebook\")});on(document.querySelector(\"body\"),\"click\",\"footer .icon-twitter.icone-square\",\nfunction(){a(\"engajamento\",\"menu_inferior\",\"twitter\")});on(document.querySelector(\"body\"),\"click\",\"footer .icon-instagram.icone-square\",function(){a(\"engajamento\",\"menu_inferior\",\"instagram\")});on(document.querySelector(\"body\"),\"click\",\"footer .icon-youtube-play.icone-square\",function(){a(\"engajamento\",\"menu_inferior\",\"youtube\")});b(\".row-editorials .mold-popover\",\"popoverAdicionado\",function(a){a=a.detail.form.querySelector('button[data-js\\x3d\"btnNewsletter\"]');var b=this.parentElement.querySelector(\".title-one a\").textContent;\nb=f(b);formNewsletter(a,\"home_\"+b+\"_newsletter\",!1)});b(\".row-galeria-videos .swiper-slide \\x3e a\",\"click\",function(){var b=this.parentElement.querySelector(\".swiper-title\").textContent;b=f(b);a(\"engajamento\",\"home_video\",\"click_\"+b)});b(\".row-olhar-estadao .swiper-bt-navigation\",\"click\",function(){setTimeout(function(){var b=document.querySelector(\".row-olhar-estadao .swiper-slide-active\"),c=[].slice.call(document.querySelectorAll(\".row-olhar-estadao .swiper-slide:not(.swiper-slide-duplicate)\")).length;\nb=b.getAttribute(\"data-swiper-slide-index\")||\"\";a(\"engajamento\",\"home_galeria\",Number(b)+1+\"\/\"+c)},200)});b(\".n-ftr .newsletter a\",\"click\",function(){a(\"convers\\u00e3o\",\"button\",\"newsletter\")});b(\".n-hdr .bt-assine, .n-hdr .selo-assine\",\"click\",function(){a(\"conversao\",\"menu_superior\",\"botao_assine_direito\")});b(\".menu-ltr .bt-assine, .menu-ltr .selo-assine\",\"click\",function(){a(\"conversao\",\"menu_lateral\",\"botao_assine_menu_lateral\")});b(\".row-colunas .board-assine a, .row-colunas .secao-assine a, .row-colunas .board-dynamic a\",\n\"click\",function(){a(\"conversao\",\"home\",\"botao_assine_colunas\")});b(\".row-jd-acervo .board-assine a, .row-jd-acervo .secao-assine a, .row-jd-acervo .board-dynamic a\",\"click\",function(){a(\"conversao\",\"home\",\"botao_assine_jornal_digital\")});b(\".n-ftr .assinatura .bt, .n-ftr .assinatura .holder-selo-bottom\",\"click\",function(){a(\"conversao\",\"home\",\"botao_assine_bottom\")})})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d){window.dp6WaitForjQueryModules=setInterval(function(){if(\"function\"===typeof $){clearInterval(window.dp6WaitForjQueryModules);var a=[];$(window).scroll(function(){$(\".container-modulo.loaded\").each(function(k,e){try{var b=$(e),c=b.find(\"section\").eq(0).attr(\"class\").replace(\"container editorial \",\"\"),f=b.offset().top,g=$(window).height(),h=$(window).scrollTop();h\u003Ef+200-g\u0026\u0026-1===a.indexOf(c)\u0026\u0026(a.push(c),d(\"engajamento\",\"contagem_modular\",a.length))}catch(l){}})})}},100)})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(f){var a=-1,c=-1,g=$(window).scrollTop()+$(window).height(),d=[!1],h=[!1];$(window).on(\"unload\",function(){try{if(!d[0]){var e=Math.max(g,$(window).scrollTop()+$(window).height()),a=$($(\"article.content\")[0]).innerHeight(),b=Math.min(100*e\/a,100);b=10*(parseInt(b\/10)+Math.ceil((b-10*parseInt(b\/10))\/10));f.genericEvent(\"engajamento\",\"maxscroll_noticia\",\"scroll \"+b+\"%\",b)}}catch(k){}});$(window).scroll(function(){try{g=Math.max(g,$(window).scrollTop()+$(window).height());var e=$($(\"article.content\")[a]),\nc=$(window).scrollTop()+$(window).innerHeight(),b=e.offset().top+e.height();c\u003Eb\u0026\u0026!d[a]\u0026\u0026(d[a]=!0,d.push(!1),f.genericEvent(\"engajamento\",\"maxscroll_noticia\",\"scroll 100%\",100))}catch(k){}});$(window).scroll(function(){try{var a=$($('iframe[name*\\x3d\"coral_talk\"]')[c]);if(0!==a.length){var d=$(window).scrollTop()+$(window).innerHeight()\/2,b=a.offset().top;d\u003Eb\u0026\u0026!h[c]\u0026\u0026(h[c]=!0,h.push(!1),f.genericEvent(\"engajamento\",\"scroll_noticia\",\"scroll_coment\\u00e1rio\"))}}catch(k){}});var l=[],n=[],m=function(){l.push(setInterval(function(){try{var e=\nf.wordCounter(\"article.content:eq(\"+(a+1).toString()+\")\\x3ep,article.content:eq(\"+(a+1).toString()+\")\\x3eh3\"),d=$(window).scrollTop()+$(window).innerHeight(),b=$($(\"article.content\")[a+1]).offset().top;20\u003Ce\u0026\u0026d\u003Eb\u0026\u0026(f.genericEvent(\"engajamento\",\"word_counter\",e,void 0,!0),clearInterval(l[a+1]),n.push(l[a+1]),a++,c++,void 0===$('iframe[name*\\x3d\"coral_talk\"]')[c]\u0026\u0026c--,m())}catch(k){}},500))};m()})(window.dp6Helper);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,d,b){try{var c=b(\"article.content\\x3ep,article.content\\x3eh3\");a(\"engajamento\",\"word_counter\",c)}catch(e){}})(window.dp6GenericEvent,window.dp6Listen,window.dp6WordCounter);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){b(a,\"section.content\")})(window.dp6Helper,window.dp6WatchNewsOn);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){b(a,\"div.content\")})(window.dp6Helper,window.dp6WatchNewsOn);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){b(a,\"div.article__content\")})(window.dp6Helper,window.dp6WatchNewsOn);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=function(b,a,d){b=[].slice.call(document.querySelectorAll(b));b.forEach(function(b,c){b.addEventListener(a,function(a){a=d.bind(b,a,c);a()})})};a(\".menu-br18 ul li a\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",a.target.text)});a(\".share-topo-br18 #icon-facebook\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",\"facebook\")});a(\".share-topo-br18 #icon-insta\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",\"instagram\")});a(\".share-topo-br18 #icon-twitter\",\"click\",function(a){b(\"engajamento\",\n\"menu_br18\",\"twitter\")});a(\".header-share .facebook\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",\"facebook\")});a(\".header-share .twitter\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",\"twitter\")});a(\".header-share .gplus\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",\"gplus\")});a(\".header-share .linkedin\",\"click\",function(a){b(\"engajamento\",\"menu_br18\",\"linkedin\")});a(\".custom-news .share .facebook a\",\"click\",function(){b(\"engajamento\",\"home_br18\",\"facebook\")});a(\".custom-news .share .twitter a\",\n\"click\",function(){b(\"engajamento\",\"home_br18\",\"twitter\")});a(\".custom-news .share .gplus a\",\"click\",function(){b(\"engajamento\",\"home_br18\",\"gplus\")});a(\".custom-news .share .linkedin a\",\"click\",function(){b(\"engajamento\",\"home_br18\",\"linkedin\")});a(\".noticia-template .share .facebook a\",\"click\",function(){b(\"engajamento\",\"noticia_br18\",\"facebook\")});a(\".noticia-template .share .twitter a\",\"click\",function(){b(\"engajamento\",\"noticia_br18\",\"twitter\")});a(\".noticia-template .share .gplus a\",\"click\",\nfunction(){b(\"engajamento\",\"noticia_br18\",\"gplus\")});a(\".noticia-template .share .linkedin a\",\"click\",function(){b(\"engajamento\",\"noticia_br18\",\"linkedin\")});a(\".go.more-list-news.brd-e\",\"click\",function(){b(\"engajamento\",\"home_br18\",\"mais_noticias\")})})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(b){b=\"; \"+b+\"\\x3d\";var a=\"; \"+document.cookie,d=a.indexOf(b);if(-1===d)return null;a=a.substring(d+b.length);b=a.indexOf(\";\");return window.unescape(-1===b?a:a.substring(0,b))}function g(b,a,d){a=b+\"\\x3d\"+escape(a);d.exdays\u0026\u0026(b=new Date,b.setDate(b.getDate()+d.exdays),a+=\"; expires\\x3d\"+b.toUTCString());d.domain\u0026\u0026(a+=\"; domain\\x3d\"+d.domain);a+=\"; path\\x3d\"+(d.path||\"\/\");return document.cookie=a}function h(b){if(window.fetch)return{then:function(a,c){window.fetch(b,{credentials:\"include\"}).then(function(a){return a.json()},\nc).then(a)}};var a=new XMLHttpRequest;\"withCredentials\"in a||(a=new XDomainRequest);a.open(\"GET\",b,!0);a.withCredentials=!0;return{then:function(b,c){c\u0026\u0026(a.onerror=c);b\u0026\u0026(a.onload=function(){b(JSON.parse(a.responseText))});a.send()}}}var e=",["escape",["macro",3],8,16],",c=\"OESP_GA_GID\",k=f(c),l=\"https:\/\/estadao-bi-ga360.appspot.com\/\",m=function(b){b=b.data.gid;var a=(location.hostname.match(\/[^.]+\\.[^.]+\\.\\w{2}$|[^.]+\\.[^.]+$\/)||[\"\"])[0];g(c,b,{domain:a,exdays:720});f(c)||g(c,b,{exdays:720})};e?k!=e\u0026\u0026h(l+\n\"?gid\\x3d\"+e).then(m):k||h(l).then(m)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayerEstadao.push({event:\"forcePvScroll_filtrado\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dp6WaitForJquery=setInterval(function(){if(\"function\"===typeof jQuery){clearInterval(window.dp6WaitForJquery);var a=window.dataLayerEstadao||window.dataLayerAssineEstadao;a.push({event:\"jquery_disponivel\"})}},100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,d,b){try{var c=b(\"div.jc-container:eq(6)\");a(\"engajamento\",\"word_counter\",c)}catch(e){}})(window.dp6GenericEvent,window.dp6Listen,window.dp6WordCounter);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){c(\".item-selecoes\",\"mousedown\",function(a){b(\"engajamento\",\"sele\\u00e7\\u00f5es\",a.target.closest(\"article\").dataset.title)});c(\".jogadores-em-destaque li\",\"mousedown\",function(a){b(\"engajamento\",\"jogadores_em_destaque\",a.target.closest(\"a\").title)});var e=document.querySelector(\".snippet\");e\u0026\u0026(b(\"engajamento\",\"testeira\",\"impressao\"),b(\"engajamento\",\"eleicoes_2018\",\"testeira_impressao\"),c(\".snippet-content\",\"mousedown\",function(a){a=a.target.closest(\"a\").title;\"Elei\\u00e7\\u00f5es 2018\"==\na?b(\"engajamento\",\"eleicoes_2018\",\"testeira_click\"):b(\"engajamento\",\"testeira\",\"click\")}));var d=document.querySelectorAll(\".js-swiper-jogos-ao-vivo li\");0\u003Cd.length\u0026\u0026setTimeout(function(){Array.prototype.slice.call(d).forEach(function(a){c(a,\"mousedown\",function(c){b(\"engajamento\",\"carrossel_jogos_ao_vivo_\"+a.dataset.vivo,\"click\")});a.classList.contains(\"swiper-slide-visible\")\u0026\u0026(b(\"engajamento\",\"carrossel_jogos_ao_vivo_\"+a.dataset.vivo,\"show\"),a.classList.add(\"showed\"))});c(\".jogos-button i\",\"mousedown\",\nfunction(a){a=document.querySelector(\".js-swiper-jogos-ao-vivo li:not(.showed)\");b(\"engajamento\",\"carrossel_jogos_ao_vivo_\"+a.dataset.vivo,\"show\");a.classList.add(\"showed\")})},2500)})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b){b(\"click\",\".assine-btn\",function(a){a=a.target;a=a.href;pos_final=a.lastIndexOf(\"?\");pos_final=a.includes(\"?\")?a.lastIndexOf(\"?\"):a.length;var c=a.substring(0,pos_final),b=c.lastIndexOf(\"-\");c=a.substring(b+1,pos_final).toUpperCase();products.filter(function(a){a.id==c\u0026\u0026(dataLayerAssineEstadao.push({ecommerce:\"\"}),dataLayerAssineEstadao.push({event:\"ga_event\",genericCategory:\"convers\\u00e3o\",genericAction:\"bot\\u00e3o_assine\",genericLabel:a.name,ecommerce:{add:{products:[a]}}}))})})})(window.dp6GenericEvent,\nwindow.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,g){var b=window.performance.navigation.type,c=window.performance.navigation.TYPE_NAVIGATE,d=window.performance.navigation.TYPE_RELOAD,e=window.performance.navigation.TYPE_BACK_FORWARD,f=window.performance.navigation.TYPE_RESERVED;b===c?a(\"convers\\u00e3o\",\"carregamento da pagina\",\"direto\"):b===d?a(\"convers\\u00e3o\",\"carregamento da pagina\",\"reload\"):b===e?a(\"convers\\u00e3o\",\"carregamento da pagina\",\"back\"):b===f\u0026\u0026a(\"convers\\u00e3o\",\"carregamento da pagina\",\"indiponivel\")})(window.dp6GenericEvent,\nwindow.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar hotsite=document.querySelector('[name\\x3d\"hotsite\"]');fbq(\"track\",\"Purchase\",{name:products[0].name,category:products[0].category,id:products[0].id,price:products[0].price,full_price:products[0].metric4,quanity:products[0].quantity,variant:products[0].variant,metric4:products[0].metric4,currency:\"BRL\",referrer:document.referrer,userAgent:navigator.userAgent,language:navigator.language,offer_code:products[0].id,value:products[0].price,campaign_code:hotsite\u0026\u0026hotsite.value?hotsite.value:null});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction dataLayerPush(a,b,c){4\u003Ea?",["escape",["macro",94],8,16],".push({event:b,page:\"\/passo-\"+a,ecommerce:{checkout:{actionField:{step:a,option:\"\"},products:",["escape",["macro",27],8,16],"}}}):4==a\u0026\u0026(a=$(\"#tipo_documento\")[0].value,b=(b=document.querySelector(\".carrinho-revisao .valor-total\"))?parseFloat(b.innerText.substr(3).replace(\",\",\".\")):\"\",a=a.includes(\"cnpj\")?\"PJ\":\"PF\",",["escape",["macro",94],8,16],".push({event:\"forcePvPurchase\",page:\"\/success\",ecommerce:{purchase:{actionField:{id:Object.values(checkoutMaster.getLeadId())[0],\naffiliation:\"\",revenue:b,tax:\"\",shipping:\"\",coupon:\"\"},products:products},paymentMethod:c,shippingMethod:\"\",userType:a,fullPrice:b}}))}",["escape",["macro",94],8,16],".push({event:\"addtocart\"});var i_global=1,CHECKOUT=\"forcePvCheckout\",pagamento=null,alterar_login=$(\"a.edit\")[1],alterar_endereco=$(\"a.edit\")[2],com_endereco=\"undefined\"!==typeof alterar_endereco;\n$(\"button[class*\\x3d'payment']\").click(function(){this.outerText.includes(\"D\\u00c9BITO\")?pagamento=\"D\\u00c9BITO\":this.outerText.includes(\"CR\\u00c9DITO\")\u0026\u0026(pagamento=\"CART\\u00c3O DE CR\\u00c9DITO\")});com_endereco||alterar_login.addEventListener(\"click\",function(a){i_global=1;",["escape",["macro",94],8,16],".push({event:\"checkout_login\"})});com_endereco\u0026\u0026alterar_endereco.addEventListener(\"click\",function(a){i_global=2;",["escape",["macro",94],8,16],".push({event:\"checkout_address\"})});\nnull==checkoutLogin.user?(i_global=1,",["escape",["macro",94],8,16],".push({event:\"checkout_login\"})):1===i_global\u0026\u0026(",["escape",["macro",94],8,16],".push({event:\"checkout_login\"}),com_endereco\u0026\u0026i_global++,",["escape",["macro",94],8,16],".push({event:\"checkout_address\"}));AssineEvent.addEventListener(\"userLogged\",function(){com_endereco?(i_global=2,",["escape",["macro",94],8,16],".push({event:\"checkout_address\"})):(i_global=2,",["escape",["macro",94],8,16],".push({event:\"checkout_address\"}),i_global=3,",["escape",["macro",94],8,16],".push({event:\"checkout_payment\"}))});\ncom_endereco\u0026\u0026AssineEvent.addEventListener(\"finishAddress\",function(){i_global=3;",["escape",["macro",94],8,16],".push({event:\"checkout_payment\"})});AssineEvent.addEventListener(\"successCheckout\",function(){",["escape",["macro",94],8,16],".push({event:\"forcePageView\"});",["escape",["macro",94],8,16],".push({event:\"forcePixelSmart\"});i_global=4;dataLayerPush(i_global,CHECKOUT,pagamento)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,e,f,g,b,c,d){a.PriceFinderObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=\"https:\/\/invttjs.com.br\/pft.js\";d.parentNode.insertBefore(c,d)}(window,document,\"script\",0,\"pf\");pf(\"send\",\"pageview\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async data-gtmsrc=\"https:\/\/static.vptrack.com.br\/web\/vt.js\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Evar vtconversao={valor_pedido:products[0].price,id_pedido:1E16*Math.random()};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" async data-gtmsrc=\"\/\/tag.viptarget.com.br\/web\/vt.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._appKey=\"k7QyT5\";var servicecall=document.createElement(\"script\");servicecall.type=\"text\/javascript\";servicecall.async=!0;servicecall.src=window.location.protocol+\"\/\/powermarketing.nubium.io\/web\/static\/visitor\/scripts\/pm.bootstrapper.js\";document.getElementsByTagName(\"head\")[0].appendChild(servicecall);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,f){function e(a){setTimeout(function(){document.querySelectorAll(a).length\u0026\u0026document.querySelectorAll(a).forEach(function(a){var b=a.contentWindow;window.addEventListener(\"message\",function(a){if(a.source===b){var c=\"geral\";console.log(\"testa: \",b);null!=b.frameElement.closest(\".playlist-deezer__item\").querySelector(\"h3\")?c=b.frameElement.closest(\".playlist-deezer__item\").querySelector(\"h3\").innerText:null!=b.frameElement.closest(\".hat-news\").querySelector(\".hat-news__title\")\u0026\u0026(c=b.frameElement.closest(\".hat-news\").querySelector(\".hat-news__title\").innerText);\nc=c.replace(\/ \/g,\"_\");switch(a.data.playerEvent){case \"player_paused\":d(\"engajamento\",\"player_deezer_\"+c,\"pause\");break;case \"player_play\":d(\"engajamento\",\"player_deezer_\"+c,\"play\")}}})})},3E3)}e(\".iframe-player-deezer\")})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E\n\n\n               ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function a(){dataLayerEstadao.push({event:\"event_detect_paywall\"})}window.addEventListener(\"loadSignwall\",function(){a()});window.addEventListener(\"loadPaywall\",function(){a()});window.addEventListener(\"loadHardPaywall\",function(){a()});window.addEventListener(\"loadHardPaywallImpresso\",function(){a()});window.addEventListener(\"loadPaywallColunistas\",function(){a()})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/configusa.veinteractive.com\/tags\/44E4F078\/A203\/45D0\/98DA\/63F03D65574A\/tag.js\";var a=document.getElementsByTagName(\"head\")[0];a?a.appendChild(b,a):(a=document.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(b,a))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a[b]||(a.GlobalIvcNamespace=a.GlobalIvcNamespace||[],a.GlobalIvcNamespace.push(b),a[b]=function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].q=a[b].q||[],c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.async=1,c.src=g,d.parentNode.insertBefore(c,d))})(window,document,\"script\",\"\/\/ivccftag.ivcbrasil.org.br\/ivc.js\",\"ivc\");window.ivc(\"newTracker\",\"cf\",\"ivccf.ivcbrasil.org.br\",{idWeb:\"4\"});window.ivc(\"trackPageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{name:",["escape",["macro",27],8,16],".name,category:",["escape",["macro",27],8,16],".category,id:",["escape",["macro",27],8,16],".id,price:",["escape",["macro",27],8,16],".price,full_price:",["escape",["macro",27],8,16],".metric4,quanity:",["escape",["macro",27],8,16],".quantity,variant:",["escape",["macro",27],8,16],".variant,metric4:",["escape",["macro",27],8,16],".metric4,currency:\"BRL\",referrer:document.referrer,userAgent:navigator.userAgent,language:navigator.language});\n(function(c,d){var b={offer_code:",["escape",["macro",27],8,16],".id},a=d.querySelector('[name\\x3d\"hotsite\"]');a\u0026\u0026a.value\u0026\u0026(b.campaign_code=a.value);c.fbq(\"track\",\"InitiateCheckout\",b)})(window,document);\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "setup_tags":["list",["tag",171,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"init\",\"1659995760901982\",{uid:\"",["escape",["macro",42],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{products:products});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"checkout_login\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"checkout_address\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"checkout_payment\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"WEBVIEWIOS\"===navigator.userAgent\u0026\u0026($(\"li.inline-block.assine.item-8\").hide(),$(\"a.bt.bt-square\").hide(),$(\".selo-assine.-lateral\").hide(),$(\".board-dynamic.-board-bottom\").hide(),$(\".selo-assine.-topo.img\").hide());\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction removerAcentos(c){var d={a:\/[\\xE0-\\xE6]\/g,e:\/[\\xE8-\\xEB]\/g,i:\/[\\xEC-\\xEF]\/g,o:\/[\\xF2-\\xF6]\/g,u:\/[\\xF9-\\xFC]\/g,c:\/\\xE7\/g,n:\/\\xF1\/g},e;for(e in d){var f=d[e];c=c.replace(f,e)}return c}function isEmpty(c){for(var d in c)if(c.hasOwnProperty(d))return!1;return!0}\n(function(c,d){function e(a){var b=\"\";a=document.querySelectorAll(a);for(i=0;i\u003Ca.length;i++)a[i].checked\u0026\u0026(\"\"!==b\u0026\u0026(b=b.concat(\"|\")),b=b.concat(a[i].value));return b}var f=function(a){for(var b=[],c=a.parentNode.firstChild;c;c=c.nextSibling)1===c.nodeType\u0026\u0026c!==a\u0026\u0026b.push(c);return b},h=[].slice.call(document.querySelectorAll('[data-js\\x3d\"select-button\"]')||[]);h.forEach(function(a,b){var d=a.querySelector('[data-js\\x3d\"select-button-go\"]');d\u0026\u0026d.addEventListener(\"click\",function(b){b=a.querySelector(\".form-control\").value.replace(\"\/\",\n\"\");c(\"engajamento\",\"eleicoes_2018\",\"clique_apuracao_completa_dropdown_\"+b)})});d('[data-action\\x3d\"back\"]',\"mousedown\",function(a){c(\"engajamento\",\"eleicoes_2018\",\"mapa_brasil_voltar_clique\")});d(\".espacamento-mapa .mold-autocomplete-select .autocomplete-item\",\"mousedown\",function(a){console.log(a.target.innerText)});d('[title\\x3d\"Apura\\u00e7\\u00e3o Completa\"]',\"mousedown\",function(a){var b=a.target.parentElement;a=a.target.closest(\".apuracao-list-card\");var d;a.dataset.path.includes(\"governador\")?\nd=\"governador\":a.dataset.path.includes(\"presidente\")?d=\"presidente\":a.dataset.path.includes(\"senador\")\u0026\u0026(d=\"senador\");b=b.href;b=b.substring(b.lastIndexOf(\"\/\")+1);c(\"engajamento\",\"eleicoes_2018\",\"clique_apuracao_\"+d+\"_completa_inferior_\"+b)});d(\".header-secundary-menu a\",\"mousedown\",function(a){a=a.target.innerText;a=a.toLowerCase().replace(\" \",\"_\");a=removerAcentos(a);c(\"engajamento\",\"menu_superior\",\"clique_menu_\"+a.toLowerCase())});d(\"a.go.cor-e.no-hover\",\"mousedown\",function(a){a=a.target.innerText;\na.includes(\"AN\\u00c1LISES GR\\u00c1FICAS\")\u0026\u0026c(\"engajamento\",\"menu_superior\",\"analises_graficas\")});d('.mold-content-busca [title\\x3d\"mais\"]',\"mousedown\",function(a){c(\"engajamento\",\"eleicoes_2018\",\"buscar_candidato_clique_mais\")});d('.mold-content-busca [title\\x3d\"Limpar\"]',\"mousedown\",function(a){a=a.target;void 0==a.attributes.disabled\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"buscar_candidato_clique_mais\")});d('.top-table-apuracao [data-js\\x3d\"filter-autocomplete\"]',\"mousedown\",function(a){c(\"engajamento\",\n\"eleicoes_2018\",\"buscar_candidato_\"+a.target.innerText.toLowerCase())});d('.mold-content-busca [value\\x3d\"Buscar\"]',\"mousedown\",function(a){a=a.target;void 0==a.attributes.disabled\u0026\u0026(a=\"[nome:\".concat(document.querySelector('input.form-control.form-control-lg.input-busca[name\\x3d\"search\"]').value+\"]\"),a=a.concat(\"[cargo:\"+e('.mold-busca input[name\\x3d\"descricao_cargo[]\"]')+\"]\"),a=a.concat(\"[partido:\"+e('.mold-busca input[name\\x3d\"sigla_partido[]\"]')+\"]\"),a=a.concat(\"[estado:\"+document.querySelector(\".mold-busca #sel-est-candidatos\").value+\n\"]\"),a=a.concat(\"[situacao:\"+e('.mold-busca  [name\\x3d\"cod_situacao_candidatura[]\"]')+\"]\"),a=a.concat(\"[despesas:\"+document.querySelector('.mold-busca [name\\x3d\"despesa_min_campanha\"]').value+\"|\"+document.querySelector('[name\\x3d\"despesa_max_campanha\"]').value+\"]\"),a=a.concat(\"[grau:\"+e('.mold-busca [name\\x3d\"descricao_grau_instrucao[]\"]')+\"]\"),a=a.concat(\"[idade:\"+document.querySelector('.mold-busca [name\\x3d\"idade_data_eleicao_min\"]').value+\"|\"+document.querySelector('.mold-busca [name\\x3d\"idade_data_eleicao_max\"]').value+\n\"]\"),a=a.concat(\"[estadocivil:\"+e('.mold-busca [name\\x3d\"descricao_estado_civil[]\"]')+\"]\"),a=a.concat(\"[genero:\"+e('.mold-busca [name\\x3d\"descricao_sexo[]\"]')+\"]\"),a=a.concat(\"[etnia:\"+e('.mold-busca [name\\x3d\"descricao_cor_raca[]\"]')+\"]\"),c(\"engajamento\",\"eleicoes_2018\",\"buscar_candidato_\".concat(a)))});d(\".mold-select-estado #ver-est-candidatos\",\"mousedown\",function(a){var b=f(a.target.closest(\"div.mold-select-estado\"))[f(a.target.closest(\"div.mold-select-estado\")).length-1].className.includes(\"mold-select-estado\")?\n\"superior\":\"inferior\";a=\"candidatos_porestado_\".concat(b+\"_\"+a.target.closest(\".select-button form\").children[0].children[0].value.replace(\"candidatos\/\",\"\"));c(\"engajamento\",\"eleicoes_2018\",a.toLowerCase())});d(\".box .label h4 a\",\"mousedown\",function(a){c(\"engajamento\",\"menu_superior\",\"clique_chapeu\")});d(\".list-estados-big li\",\"mousedown\",function(a){a=a.target.innerText;c(\"engajamento\",\"menu_superior\",\"acompanhar_cobertura_superior_\".concat(a.toLowerCase()))});d(\".list-estados-min li\",\"mousedown\",\nfunction(a){a=a.target.innerText;c(\"engajamento\",\"menu_superior\",\"acompanhar_cobertura_superior_\".concat(a.toLowerCase()))});d(\".autocomplete-list\",\"mousedown\",function(a){var b=\"\";a.target.closest(\"a\").href.includes(\"federal\")?b=\"federal\":a.target.closest(\"a\").href.includes(\"estadual\")\u0026\u0026(b=\"estadual\");c(\"engajamento\",\"eleicoes_2018\",\"buscar_deputados_\".concat(b+\"_\"+a.target.innerText.replace(\" \",\"_\").toLowerCase()))});d(\".table-candidatos tbody tr\",\"mousedown\",function(a){var b=\"\";a.target.closest(\".mold-table-candidatos\").children[0].innerText.toLowerCase().includes(\"federal\")?\nb=\"federal\":a.target.closest(\".mold-table-candidatos\").children[0].innerText.toLowerCase().includes(\"estadual\")\u0026\u0026(b=\"estadual\");c(\"engajamento\",\"eleicoes_2018\",\"buscar_deputados_\".concat(b+\"_tabela_\"+a.target.closest(\"tr\").childNodes[1].innerText.toLowerCase().replace(\/ \/g,\"_\")))});d('.mold-pesquisa [data-js\\x3d\"bt-presidente\"]',\"mousedown\",function(a){c(\"engajamento\",\"eleicoes_2018\",\"clique_cargo_presidente\")});d('.mold-pesquisa [data-js\\x3d\"bt-governador\"]',\"mousedown\",function(a){c(\"engajamento\",\n\"eleicoes_2018\",\"clique_cargo_governador\")});d('.mold-pesquisa [data-js\\x3d\"bt-turno1\"]',\"mousedown\",function(a){c(\"engajamento\",\"eleicoes_2018\",\"clique_turno_1_turno\")});d('.mold-pesquisa [title\\x3d\"2\\u00ba TURNO\"]',\"mousedown\",function(a){!0!==a.target.disabled\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"clique_turno_2_turno\")});d('.mold-pesquisa [title\\x3d\"Ibope\"]',\"mousedown\",function(a){!0!==a.target.disabled\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"pesquisa_ibope\")});d('.mold-pesquisa [title\\x3d\"Datafolha\"]',\n\"mousedown\",function(a){!0!==a.target.disabled\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"pesquisa_datafolha\")});d(\".link-arrow.uppercase\",\"mousedown\",function(a){a.target.innerText.toLocaleLowerCase().includes(\"apura\\u00e7\\u00e3o\",\"completa\")\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"clique_apuracao_estadual_completa\")});isEmpty(document.querySelectorAll('[data-js\\x3d\"order-candidatos\"]'))||document.querySelectorAll('[data-js\\x3d\"order-candidatos\"]')[0].addEventListener(\"change\",function(a){document.querySelectorAll('[data-js\\x3d\"order-candidatos\"] option').forEach(function(b){b.value==\na.target.value\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"clique_ordenar_por_\"+removerAcentos(b.innerText).toLowerCase().replace(\" \",\"_\"))})});if(!isEmpty(document.querySelector(\".mold-pesquisa #uf_municipio\"))){var g=document.querySelector(\".mold-pesquisa #uf_municipio\").onchange;document.querySelector(\"#uf_municipio\").onchange=function(a){console.log(a.target);g.apply(this)};document.querySelector(\".mold-pesquisa #uf_municipio\").onchange=function(){};document.querySelector(\".mold-pesquisa #uf_municipio\").onchange=\nfunction(a){c(\"engajamento\",\"eleicoes_2018\",\"pesquisas_localizacao_\"+a.target.value.toLowerCase());g.apply(this)}}isEmpty(document.querySelector('[data-js\\x3d\"sel-est-candidatos-ap\"]'))||(g=document.querySelector('[data-js\\x3d\"sel-est-candidatos-ap\"]').onchange,document.querySelector('[data-js\\x3d\"sel-est-candidatos-ap\"]').onchange=function(){},document.querySelector('[data-js\\x3d\"sel-est-candidatos-ap\"]').onchange=function(a){a=a.target.value;var b=a.lastIndexOf(\"turno\/\")+6;a=a.substring(b,b+2);\nc(\"engajamento\",\"eleicoes_2018\",\"selecionar_estado_\"+a.toLowerCase());g.apply(this)});d('[onclick\\x3d\"PesquisaCandidatos.toggleCandidato(this);\"] .ico-eye',\"mousedown\",function(a){var b=a.target;a=\"removed\"!==b.closest(\"a\").className?\"desativar\":\"ativar\";b=b.closest(\"a\").dataset.seolabel;c(\"engajamento\",\"eleicoes_2018\",\"grafico_\"+a+\"_\"+b.replace(\"-\",\"_\"))});if(!isEmpty(document.querySelectorAll(\".apuracao-mapa\"))){h=document.querySelector(\".secoes-totalizadas\");var k=new MutationObserver(function(a){a.forEach(function(a){var b=\n\"governador\";window.location.href.includes(\"presidente\")\u0026\u0026(b=\"brasil\");\"brasil\"!==a.target.querySelector(\".title-secundary\").innerText.toLowerCase()\u0026\u0026c(\"engajamento\",\"eleicoes_2018\",\"mapa_\"+b+\"_buscar_\"+a.target.querySelector(\".title-secundary\").innerText.toLowerCase())})}),l={attributes:!0,childList:!0,characterData:!0};k.observe(h,l)}d('#zona-eleitoral[name\\x3d\"zona-eleitoral\"]',\"change\",function(a){var b=\"governador\";window.location.href.includes(\"presidente\")\u0026\u0026(b=\"brasil\");c(\"engajamento\",\"eleicoes_2018\",\n\"mapa_\"+b+\"l_zona_\"+a.target.options[a.target.selectedIndex].innerText)});d(\".mold-select-partidos #partidos\",\"change\",function(a){var b=\"governador\";window.location.href.includes(\"presidente\")\u0026\u0026(b=\"brasil\");c(\"engajamento\",\"eleicoes_2018\",\"mapa_\"+b+\"_partido_\"+a.target.value.toLowerCase())})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,e){e('.wpb_single_image.wpb_content_element.vc_align_center [sizes\\x3d\"(max-width: 354px) 100vw, 354px\"]',\"mousedown\",function(a){b(\"engajamento\",\"logo_superior\",\"clique\")});e('.wpb_single_image.wpb_content_element.vc_align_left.image-100 [sizes\\x3d\"(max-width: 1899px) 100vw, 1899px\"]',\"mousedown\",function(a){b(\"engajamento\",\"banner_superior\",\"clique\")});e(':not(.vc_row-o-content-middle) .wpb_column\\x3e.vc_column-inner\\x3e.wpb_wrapper\\x3e.wpb_single_image[class*\\x3d\"vc_custom\"]\\x3efigure',\n\"mousedown\",function(a){a=a.target.closest(\".wpb_column\").querySelector(\".wpb_text_column strong\").innerText.toLowerCase();b(\"engajamento\",\"nome_\".concat(a),\"clique\")});e(\".lead_number_act.cvc\",\"mousedown\",function(a){b(\"convers\\u00e3o\",\"ver_telefone\",\"clique\")});document.getElementById(\"fld_4269959_1\").addEventListener(\"click\",function(){var a=!0,c=document.querySelector(\"#fld_7527565_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?b(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(a=!1,b(\"convers\\u00e3o\",\n\"campo_nome\",\"recusado\"));c=document.querySelector(\"#fld_841226_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?b(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(a=!1,b(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=document.querySelector(\"#fld_1095087_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?b(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(a=!1,b(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));c=document.querySelector(\"#fld_4686853_1\");0\u003Cc.value.length?b(\"convers\\u00e3o\",\"campo_texto\",\n\"preenchido\"):(a=!1,b(\"convers\\u00e3o\",\"campo_texto\",\"nao_preenchido\"));!0===a?b(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):b(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});e(\".vc_grid-item-mini.vc_clearfix\",\"mousedown\",function(a){a=a.target.closest(\".vc_grid-item-mini.vc_clearfix\").querySelector(\".vc_custom_heading h4\").innerText;var c=a.toLowerCase().replace(\" \\u2013 \",\"_\");console.log(a);b(\"convers\\u00e3o\",\"nome_\".concat(c),\"clique\")});e(\".btn.btn-primary.cta-sb\",\"mousedown\",function(a){a=a.target;\na=a.className.includes(\"opened\")?\"fechar\":\"confira_ja\";b(\"engajamento\",\"botao_\".concat(a),\"clique\")});document.querySelector(\"#frame-stick-bottom\").addEventListener(\"load\",function(){var a=document.querySelector(\"#frame-stick-bottom\").contentWindow;a.document.querySelector(\"#fld_4269959_1\").addEventListener(\"click\",function(){var c=!0,d=a.document.querySelector(\"#fld_7527565_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?b(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(c=!1,b(\"convers\\u00e3o\",\n\"campo_nome\",\"recusado\"));d=a.document.querySelector(\"#fld_841226_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?b(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(c=!1,b(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=a.document.querySelector(\"#fld_1095087_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?b(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(c=!1,b(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));d=a.document.querySelector(\"#fld_4686853_1\");0\u003Cd.value.length?b(\"convers\\u00e3o\",\"campo_texto\",\n\"preenchido\"):(c=!1,b(\"convers\\u00e3o\",\"campo_texto\",\"nao_preenchido\"));!0===c?b(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):b(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});a.document.querySelector(\".lead_number_act.cvc\").addEventListener(\"click\",function(){b(\"convers\\u00e3o\",\"ver_telefone\",\"clique\")})})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,g){g('.wpb_single_image.wpb_content_element.vc_align_center [sizes\\x3d\"(max-width: 488px) 100vw, 488px\"]',\"mousedown\",function(b){a(\"engajamento\",\"logo_superior\",\"clique\")});document.getElementById(\"fld_2739857_1\").addEventListener(\"click\",function(){var b=!0,c=document.querySelector(\"#fld_443848_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));c=document.querySelector(\"#fld_5793560_1\");\n!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=document.querySelector(\"#fld_7259190_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});var e=document.querySelectorAll(\".wpb_image_grid_ul .isotope-item\"),\nh=e.length,f;for(f in e)e.hasOwnProperty(f)\u0026\u0026function(b,c){c.addEventListener(\"mousedown\",function(c){a(\"engajamento\",\"foto \"+b+\"\/\"+h,\"clique\")})}(parseInt(f)+1,e[f]);document.querySelector(\".wpb_image_grid_ul .isotope-item\");g('[class\\x3d\"wrap-icon\"]',\"mousedown\",function(b){a(\"convers\\u00e3o\",\"fale_com_corretor\",\"clique\")});jQuery(\"a.wrap-icon.letter\").click(function(){jQuery(this).find(\".cta-sb\").hasClass(\"opened\")?a(\"convers\\u00e3o\",\"botao_fechar\",\"clique\"):a(\"convers\\u00e3o\",\"deixe_seus_dados\",\n\"clique\")});g(\".wrap-icon.whatsapp\",\"mousedown\",function(b){a(\"convers\\u00e3o\",\"fale_whatsapp\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_play\",function(){a(\"engajamento\",\"iniciar_slide\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_arrow_previous,.pp_content_container .pp_previous\",function(b){a(\"engajamento\",\"foto_anterior\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_arrow_next,.pp_content_container .pp_next\",function(b){a(\"engajamento\",\n\"proxima_foto\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_close\",function(b){a(\"engajamento\",\"botao_fechar\",\"clique\")});document.querySelector(\"#frame-stick-bottom\").addEventListener(\"load\",function(){var b=document.querySelector(\"#frame-stick-bottom\").contentWindow;b.document.getElementById(\"fld_2739857_1\").addEventListener(\"click\",function(){var c=!0,d=document.querySelector(\"#fld_443848_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\n\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));d=b.document.querySelector(\"#fld_5793560_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=b.document.querySelector(\"#fld_7259190_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===c?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):\na(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,d){function c(a,d,c,g){setTimeout(function(){var e=\"\";labels=document.querySelectorAll(a);for(var f=0;f\u003Clabels.length;f++)e=null!=d[f]?e.concat(d[f]):e.concat(labels[f].parentElement.children[1].htmlFor),e=null!==labels[f].closest(\"[data-error]\")?e.concat(\"|recusado|\"):e.concat(\"|preenchido|\");b(\"convers\\u00e3o\",c,e);g\u0026\u0026e.includes(\"recusado\")?b(\"convers\\u00e3o\",c,\"pagar_erro\"):g\u0026\u0026!e.includes(\"recusado\")\u0026\u0026(b(\"convers\\u00e3o\",c,\"pagar_sucesso\"),document.querySelector('[data-payment-method\\x3d\"dc\"]').className.includes(\"active\")\u0026\u0026\n(document.querySelector('[name\\x3d\"pagador[dc][newsletter]\"]').checked?b(\"convers\\u00e3o\",\"cartadebito_novidades\",\"select\"):b(\"convers\\u00e3o\",\"cartadebito_novidades\",\"unselect\")),document.querySelector('[data-payment-method\\x3d\"cc\"]').className.includes(\"active\")\u0026\u0026(document.querySelector('[name\\x3d\"pagador[cc][newsletter]\"]').checked?b(\"convers\\u00e3o\",\"cartadebito_novidades\",\"select\"):b(\"convers\\u00e3o\",\"cartadebito_novidades\",\"unselect\")))},1E3)}d(\"a.edit\",\"mousedown\",function(a){a=a.target.parentElement.children[0].innerText;\na.includes(\"ASSINATURA\")?b(\"convers\\u00e3o\",\"detalhes_assinatura\",\"alterar\"):a.includes(\"IDENTIFICA\\u00c7\\u00c3O\")?b(\"convers\\u00e3o\",\"identificacao\",\"alterar\"):a.includes(\"ENTREGA\")\u0026\u0026b(\"convers\\u00e3o\",\"entrega\",\"alterar\")});d(\"div.edit\",\"mousedown\",function(a){b(\"convers\\u00e3o\",\"detalhes_assinatura\",\"alterar\")});d(\".button-login\",\"mousedown\",function(a){a=a.target;eventolabel=null;a=a.parentElement.className;a=a.includes(\"facebook\")?\"facebook\":a.includes(\"google\")?\"google\":\"redesocial\";document.querySelectorAll(\".tab\").forEach(function(a){a.className.includes(\"active\")\u0026\u0026\n(\"Entrar\"==a.textContent?eventolabel=\"cadastra-se\":\"Cadastrar\"==a.textContent\u0026\u0026(eventolabel=\"formulario_cadastro\"))});b(\"convers\\u00e3o\",eventolabel,a)});d(\"#make_login\",\"mousedown\",function(a){setTimeout(function(){var a=document.querySelector(\"#email_login\"),c=document.querySelector(\"#password_login\");null!==a.closest(\"[data-error]\")?b(\"convers\\u00e3o\",\"cadastra-se\",\"email|recusado|senha|recusado|\"):null==a.closest(\"[data-error]\")\u0026\u0026null!==c.closest(\"[data-error]\")?b(\"convers\\u00e3o\",\"cadastra-se\",\n\"email|preenchido|senha|recusado|\"):b(\"convers\\u00e3o\",\"cadastra-se\",\"email|preenchido|senha|preenchido|\")},1E3)});d(\"#go-entrega\",\"mousedown\",function(a){c(\"#firstname,#email,#lastname,#password\",[\"nome\",null,null,\"senha\"],\"formulario_cadastro\")});d(\"#btn-recuperar-senha\",\"mousedown\",function(a){setTimeout(function(){document.querySelector(\"#lembrar-senha\").children[0].className.includes(\"success\")?b(\"convers\\u00e3o\",\"recuperar_senha\",\"preenchido\"):null!==document.querySelector(\"#lembrar-senha\").closest(\"[data-error]\")\u0026\u0026\nb(\"convers\\u00e3o\",\"recuperar_senha\",\"recusado\")},3E3)});d(\"#go-pagamento\",\"mousedown\",function(a){document.querySelector('[name\\x3d\"presente\"]').checked\u0026\u0026(document.querySelectorAll(\"#gift_pessoa_fisica\")[0].checked?c(\"#gift_nome,#gift_sobrenome,#gift_telefone,#genero-pagador,#gift_cep,#gift_numero,#gift_email\",\"nome sobrenome telefone genero cep numero email\".split(\" \"),\"formulario_presente\",!1):document.querySelectorAll(\"#gift_pessoa_juridica\")[0].checked\u0026\u0026c(\"#gift_razao,#gift_email,#gift_telefone,#gift_cep,#gift_numero\",\n[\"razao\",\"email\",\"telefone\",\"cep\",\"numero\"],\"formulario_presente\",!1));document.querySelectorAll(\"#pessoa-fisica\")[0].checked?c(\"#bpr_nome,#bpr_sobrenome,#telefone,#genero-recebedor,#cep,#numero\",\"nome sobrenome telefone genero cep numero\".split(\" \"),\"fomulario_entrega\",!1):document.querySelectorAll(\"#pessoa-juridica\")[0].checked\u0026\u0026c(\"#razao,#telefone,#cep,#numero\",[\"razao\",\"telefone\",\"cep\",\"numero\"],\"fomulario_entrega\",!1)});d(\".payment-credit-card-now\",\"mousedown\",function(a){c(\"#cc_number,#cc_name,#mm_val_cc,#aa_val_cc,#cod_seg_cc,#payment_phone,#pagamento_documento\",\n\"numero_cartao nome_cartao mes_cartao ano_cartao cod_seguranca_cartao telefone_cartao documento_cartao\".split(\" \"),\"cartaocredito_form\",!0);document.querySelector('[name\\x3d\"presente\"]').checked\u0026\u0026c(\"#gift_p_name,#gift_p_sobrenome,#gift_p_email,#gift_mensagem\",[\"nome\",\"sobrenome\",\"email\",\"mensagem\"],\"formulario_presente_pagamento\",!1)});d(\".payment-debito-em-conta-now\",\"mousedown\",function(a){c(\"#agencia_n,#conta_n,#conta_n_dig,#payment_phone,#pagamento_documento\",[null,null,null,\"telefone\",null],\n\"cartaodebito_form\",!0);document.querySelector('[name\\x3d\"pagamento\"] [name\\x3d\"presente\"]').checked\u0026\u0026c(\"#gift_p_name,#gift_p_sobrenome,#gift_p_email,#gift_mensagem\",[\"nome\",\"sobrenome\",\"email\",\"mensagem\"],\"formulario_presente_pagamento\",!1)})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":178
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-8865799\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8865799\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template"," \n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"addtocart\",{allow_custom_scripts:!0,value:products[0].price,transaction_id:",["escape",["macro",95],8,16],",quantity:1,session_id:",["escape",["macro",41],8,16],",send_to:\"DC-8865799\/sales\/itd9x9le+items_sold\"});\u003C\/script\u003E \n\u003Cnoscript\u003E \n\u003Cimg src=\"1;cost=products[0][\u0026#39;price\u0026#39;]; \u0026#39;session_id\u0026#39;= ",["escape",["macro",41],3],";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=Object.values(checkoutMaster.getLeadId())[0]?\" width=\"1\" height=\"1\" alt=\"\"\u003E \n\u003C\/noscript\u003E \n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,d){d(\".wpb_wrapper.vc_figure a\",\"mousedown\",function(b){null==b.target.closest(\".wpb_column\").querySelector(\".wpb_text_column strong\")\u0026\u0026a(\"engajamento\",\"logo_superior\",\"clique\")});d(':not(.vc_row-o-content-middle) .wpb_column\\x3e.vc_column-inner\\x3e.wpb_wrapper\\x3e.wpb_single_image[class*\\x3d\"vc_custom\"]\\x3efigure',\"mousedown\",function(b){b=b.target.closest(\".wpb_column\").querySelector(\".wpb_wrapper b\").innerText;a(\"engajamento\",b,\"clique\")});d(\".flex-prev\",\"mousedown\",function(b){a(\"engajamento\",\n\"botao_anterior\",\"clique\")});d(\".flex-next\",\"mousedown\",function(b){a(\"engajamento\",\"botao_proximo\",\"clique\")});d(\".flex-viewport\",\"mousedown\",function(b){a(\"engajamento\",\"banner_superior\",\"clique\")});document.getElementById(\"fld_3382637_1\").addEventListener(\"click\",function(){var b=!0,c=document.querySelector(\"#fld_9315043_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));c=document.querySelector(\"#fld_2394930_1\");\n!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=document.querySelector(\"#fld_7846681_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));c=document.querySelector(\"#fld_2394930_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_cpf\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\n\"campo_cpf\",\"recusado\"));c=document.querySelector(\"#fld_2394930_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_cpf\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_cpf\",\"recusado\"));c=document.querySelector(\"#fld_6204634_1\");0\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_curso\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_curso\",\"nao_preenchido\"));!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})})(window.dp6GenericEvent,\nwindow.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c){c(\".logo-tegra\",\"mousedown\",function(b){a(\"engajamento\",\"logo_superior\",\"clique\")});c(\".desktop\",\"mousedown\",function(b){b=document.querySelectorAll('[name\\x3d\"region\"]')[0].selectedOptions[0].innerText;var d=document.querySelectorAll('[name\\x3d\"type\"]')[0].selectedOptions[0].innerText;a(\"engajamento\",\"buscar\",\"clique\");a(\"engajamento\",\"busca_regi\\u00e3o\",b);a(\"engajamento\",\"busca_imovel\",d)});c(\".link.text-right\",\"mousedown\",function(b){a(\"engajamento\",\"busca_avancada\",\"clique\")});\nc(\".flex-prev\",\"mousedown\",function(b){a(\"engajamento\",\"botao_anterior\",\"clique\")});c(\".flex-next\",\"mousedown\",function(b){a(\"engajamento\",\"botao_proximo\",\"clique\")});c(\".btn.btn-light.btn-lg\",\"mousedown\",function(b){a(\"engajamento\",\"ver_mais_empreendimentos\",\"clique\")});c(\".flex-viewport\",\"mousedown\",function(b){a(\"engajamento\",\"banner_superior\",\"clique\")});c(\".col-md-offset-2.button btn.btn-block.btn-warning\",\"mousedown\",function(b){a(\"engajamento\",\"buscar\",\"clique\")});c(\".owl-prev\",\"mousedown\",\nfunction(b){a(\"engajamento\",\"botao_anterior\",\"clique\")});c(\".owl-next\",\"mousedown\",function(b){a(\"engajamento\",\"botao_proximo\",\"clique\")});c(\".lead_number_act.tegra\",\"mousedown\",function(b){a(\"convers\\u00e3o\",\"ver_telefone\",\"clique\")});c(\".search-bar button.btn.btn-block.btn-warning\",\"mousedown\",function(b){b=document.getElementById(\"area_min\").innerText;var d=document.getElementById(\"area_max\").innerText;a(\"engajamento\",\"area\",b.concat(\"|\"+d));a(\"engajamento\",\"buscar\",\"clique\")});c(\".search-bar button.btn.btn-block.btn-warning\",\n\"mousedown\",function(b){b=document.querySelectorAll('[name\\x3d\"region\"]')[0].selectedOptions[0].innerText;var d=document.querySelectorAll('[name\\x3d\"type\"]')[0].selectedOptions[0].innerText;a(\"engajamento\",\"busca_regi\\u00e3o\",b);a(\"engajamento\",\"buscar_im\\u00f3vel\",d)});document.getElementById(\"CF5b7ab08fa0b25_1\")\u0026\u0026document.getElementById(\"fld_2739857_1\").addEventListener(\"click\",function(){var b=!0,d=document.querySelector(\"#fld_443848_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\n\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));d=document.querySelector(\"#fld_5793560_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=document.querySelector(\"#fld_7259190_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\n\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});jQuery(\"body\").on(\"click\",\".fancybox-nav.fancybox-prev\",function(b){a(\"engajamento\",\"foto_anterior\",\"clique\")});jQuery(\"body\").on(\"click\",\".fancybox-nav.fancybox-next\",function(b){a(\"engajamento\",\"proxima_foto\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".fancybox-item.fancybox-close\",function(b){a(\"engajamento\",\"botao_fechar\",\"clique\")});document.querySelector(\"#frame-stick-bottom\").addEventListener(\"load\",function(){var b=document.querySelector(\"#frame-stick-bottom\").contentWindow;\nb.document.querySelector(\"#fld_2739857_1\").addEventListener(\"click\",function(){var d=!0;console.log(\"Entrou\");var c=b.document.querySelector(\"#fld_443848_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(d=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));c=b.document.querySelector(\"#fld_5793560_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(d=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=\nb.document.querySelector(\"#fld_7259190_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(d=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===d?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})});jQuery(\"a.wrap-icon.letter\").click(function(){jQuery(this).find(\".cta-sb\").hasClass(\"opened\")?a(\"convers\\u00e3o\",\"botao_fechar\",\"clique\"):a(\"convers\\u00e3o\",\"botao_cadastrar\",\"clique\")})})(window.dp6GenericEvent,\nwindow.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template"," \n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.location.href.includes(\"jornal\")||gtag(\"event\",\"purchase\",{allow_custom_scripts:!0,value:",["escape",["macro",27],8,16],".price,transaction_id:",["escape",["macro",95],8,16],",quantity:1,session_id:",["escape",["macro",41],8,16],",send_to:\"DC-8865799\/sales\/itd9x9le+items_sold\"});\u003C\/script\u003E \n\u003Cnoscript\u003E \n\u003Cimg src=\"1;cost=",["escape",["macro",27],3],"; \u0026#39;session_id\u0026#39;= ",["escape",["macro",41],3],";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=",["escape",["macro",95],3],"\" width=\"1\" height=\"1\" alt=\"\"\u003E \n\u003C\/noscript\u003E \n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,g){g('.wpb_single_image.wpb_content_element.vc_align_center [sizes\\x3d\"(max-width: 488px) 100vw, 488px\"]',\"mousedown\",function(b){a(\"engajamento\",\"logo_superior\",\"clique\")});document.getElementById(\"fld_2739857_1\").addEventListener(\"click\",function(){var b=!0,c=document.querySelector(\"#fld_443848_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));c=document.querySelector(\"#fld_5793560_1\");\n!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=document.querySelector(\"#fld_7259190_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});var e=document.querySelectorAll(\".wpb_image_grid_ul .isotope-item\"),\nh=e.length,f;for(f in e)e.hasOwnProperty(f)\u0026\u0026function(b,c){c.addEventListener(\"mousedown\",function(c){a(\"engajamento\",\"foto \"+b+\"\/\"+h,\"clique\")})}(parseInt(f)+1,e[f]);console.log(document.querySelector(\".wpb_image_grid_ul .isotope-item\"));document.querySelector(\".wpb_image_grid_ul .isotope-item\");g('[class\\x3d\"wrap-icon\"]',\"mousedown\",function(b){a(\"convers\\u00e3o\",\"fale_com_corretor\",\"clique\")});jQuery(\"a.wrap-icon.letter\").click(function(){jQuery(this).find(\".cta-sb\").hasClass(\"opened\")?a(\"convers\\u00e3o\",\n\"botao_fechar\",\"clique\"):a(\"convers\\u00e3o\",\"deixe_seus_dados\",\"clique\")});g(\".wrap-icon.whatsapp\",\"mousedown\",function(b){a(\"convers\\u00e3o\",\"fale_whatsapp\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_play\",function(){a(\"engajamento\",\"iniciar_slide\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_arrow_previous,.pp_content_container .pp_previous\",function(b){a(\"engajamento\",\"foto_anterior\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_arrow_next,.pp_content_container .pp_next\",\nfunction(b){a(\"engajamento\",\"proxima_foto\",\"clique\")});jQuery(\"body\").on(\"mousedown\",\".pp_content_container .pp_close\",function(b){a(\"engajamento\",\"botao_fechar\",\"clique\")});document.querySelector(\"#frame-stick-bottom\").addEventListener(\"load\",function(){var b=document.querySelector(\"#frame-stick-bottom\").contentWindow;b.document.getElementById(\"fld_2739857_1\").addEventListener(\"click\",function(){var c=!0,d=document.querySelector(\"#fld_443848_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?\na(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));d=b.document.querySelector(\"#fld_5793560_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=b.document.querySelector(\"#fld_7259190_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===c?a(\"convers\\u00e3o\",\n\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d){function e(a){var b={a:\/[\\xE0-\\xE6]\/g,e:\/[\\xE8-\\xEB]\/g,i:\/[\\xEC-\\xEF]\/g,o:\/[\\xF2-\\xF6]\/g,u:\/[\\xF9-\\xFC]\/g,c:\/\\xE7\/g,n:\/\\xF1\/g},c;for(c in b){var d=b[c];a=a.replace(d,c)}return a}function f(){d(\"#arte-conteudo .alternatives blockquote \",\"mousedown\",function(a){console.log(\"entrou\");var b=a.target;a=b.closest(\".question\").id;a=parseInt(a.substring(1,a.length))+1;b=b.closest(\"li\").className;b=parseInt(b.substring(1,b.length))+1;c(\"engajamento\",\"eleicoes_2018\",\"quiz_pergunta\"+a+\"_resposta\"+\nb)});d(\"#slt-candidate \",\"change\",function(a){c(\"engajamento\",\"eleicoes_2018\",\"quiz_escolha_candidato_\"+a.target.value)})}d(\"#arte-conteudo nav li\",\"mousedown\",function(a){a=e(a.target.innerText.toLocaleLowerCase());setTimeout(function(){f()},800);c(\"engajamento\",\"menu_superior\",\"quiz_escolha_tema_\".concat(a))});d(\"#arte-conteudo .alternatives blockquote \",\"mousedown\",function(a){console.log(\"entrou\");var b=a.target;a=b.closest(\".question\").id;a=parseInt(a.substring(1,a.length))+1;b=b.closest(\"li\").className;\nb=parseInt(b.substring(1,b.length))+1;c(\"engajamento\",\"eleicoes_2018\",\"quiz_pergunta\"+a+\"_resposta\"+b)});d(\"#slt-candidate \",\"change\",function(a){c(\"engajamento\",\"eleicoes_2018\",\"quiz_escolha_candidato_\"+a.target.value)})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,g){g(\".vc_single_image-wrapper.vc_box_border_grey\",\"mousedown\",function(b){b=b.target;b.closest(\"a\").href.includes(\"\/imoveis\/fibra\/cayre-perdizes\/\")\u0026\u0026a(\"engajamento\",\"logo_superior\",\"clique\")});g('.vc_single_image-wrapper.vc_box_border_grey [sizes\\x3d\"(max-width: 1980px) 100vw, 1980px\"]',\"mousedown\",function(b){a(\"engajamento\",\"saiba_mais_superior\",\"clique\")});document.getElementById(\"fld_6618613_1\").addEventListener(\"click\",function(){var b=!0,c=document.querySelector(\"#fld_2244816_1\");\n!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));c=document.querySelector(\"#fld_9500105_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=document.querySelector(\"#fld_566736_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\n\"campo_telefone\",\"recusado\"));!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});var e=document.querySelectorAll(\".wpb_text_column.wpb_content_element.vc_custom_1535052132616 .ngg-gallery-thumbnail-box\"),h=e.length,f;for(f in e)e.hasOwnProperty(f)\u0026\u0026function(b,c){c.addEventListener(\"mousedown\",function(c){a(\"engajamento\",\"foto \"+b+\"\/\"+h,\"clique\")})}(parseInt(f)+1,e[f]);g('.wpb_wrapper.vc_figure [sizes\\x3d\"(max-width: 1896px) 100vw, 1896px\"]',\"mousedown\",\nfunction(b){a(\"engajamento\",\"saiba_mais_inferior\",\"clique\")});jQuery(\"a.wrap-icon.letter\").click(function(){jQuery(this).find(\".cta-sb\").hasClass(\"opened\")?a(\"convers\\u00e3o\",\"botao_fechar\",\"clique\"):a(\"convers\\u00e3o\",\"botao_cadastrar\",\"clique\")});document.querySelector(\"#frame-stick-bottom\").addEventListener(\"load\",function(){console.log(\"Formulario Ativo\");var b=document.querySelector(\"#frame-stick-bottom\").contentWindow;b.document.querySelector(\"#fld_6618613_1\").addEventListener(\"click\",function(){var c=\n!0,d=b.document.querySelector(\"#fld_2244816_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));d=b.document.querySelector(\"#fld_9500105_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=b.document.querySelector(\"#fld_566736_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\n\"campo_telefone\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===c?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e){e(\".icon-prev\",\"mousedown\",function(c){a(\"engajamento\",\"botao_anterior_galeria\",\"clique\")});e(\".icon-next\",\"mousedown\",function(c){a(\"engajamento\",\"botao_proximo_galeria\",\"clique\")});document.getElementById(\"fld_8902566_1\").addEventListener(\"click\",function(){var c=!0,b=document.querySelector(\"#fld_6243479_1\");!b.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cb.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));b=document.querySelector(\"#fld_1437306_1\");\n!b.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cb.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));b=document.querySelector(\"#fld_2531093_1\");!b.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cb.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===c?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});e(\".vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-rounded.vc_btn3-style-modern.vc_btn3-color-black\",\n\"mousedown\",function(c){a(\"convers\\u00e3o\",\"botao_eu_quero\",\"clique\")});document.querySelector(\"#frame-stick-bottom\").addEventListener(\"load\",function(){var c=document.querySelector(\"#frame-stick-bottom\").contentWindow;c.document.querySelector(\"#fld_8902566_1\").addEventListener(\"click\",function(){var b=!0,d=c.document.querySelector(\"#fld_6243479_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));d=\nc.document.querySelector(\"#fld_1437306_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=c.document.querySelector(\"#fld_2531093_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})});jQuery(\"a.wrap-icon.letter\").click(function(){jQuery(this).find(\".cta-sb\").hasClass(\"opened\")?\na(\"convers\\u00e3o\",\"botao_fechar\",\"clique\"):a(\"convers\\u00e3o\",\"botao_cadastrar\",\"clique\")})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e){e('.vc_single_image-wrapper.vc_box_border_grey [sizes\\x3d\"(max-width: 420px) 100vw, 420px\"]',\"mousedown\",function(b){a(\"engajamento\",\"logo_superior\",\"clique\")});e(\".wpb_gallery_slides.wpb_flexslider.flexslider_slide.flexslider .slides\",\"mousedown\",function(b){b=b.target;b.closest(\"a\").href.includes(\"\/viagem\/egp\/pacotes-para-os-melhores-destinos-com-atendimento-exclusivo\")\u0026\u0026a(\"engajamento\",\"banner_superior\",\"clique\")});e(\".flex-prev\",\"mousedown\",function(b){a(\"engajamento\",\"botao_anterior_superior\",\n\"clique\")});e(\".flex-next\",\"mousedown\",function(b){a(\"engajamento\",\"botao_proximo_superior\",\"clique\")});e(\".wpb_wrapper a b\",\"mousedown\",function(b){a(\"engajamento\",\"chapeu_destino\",\"clique\")});e(\".wpb_wrapper.vc_figure\",\"mousedown\",function(b){b=b.target;b.closest(\"a\").href.includes(\"\/viagem\/egp\/pacotes-para-os-melhores-destinos-com-atendimento-exclusivo\")\u0026\u0026a(\"engajamento\",\"imagem_destino\",\"clique\")});e(\".wpb_wrapper a strong\",\"mousedown\",function(b){a(\"engajamento\",\"solicite_orcamento\",\"clique\")});\ndocument.getElementById(\"fld_8673073_1\").addEventListener(\"click\",function(){var b=!0,c=document.querySelector(\"#fld_5697_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));c=document.querySelector(\"#fld_3580578_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));c=document.querySelector(\"#fld_5021473_1\");\n!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));c=document.querySelector(\"#fld_5198151_1\");!c.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_destino\",\"preenchido\"):(b=!1,a(\"convers\\u00e3o\",\"campo_destino\",\"recusado\"));c=document.querySelector(\"#fld_6158375_1\");0\u003Cc.value.length?a(\"convers\\u00e3o\",\"campo_mensagem\",\"preenchido\"):a(\"convers\\u00e3o\",\"campo_mensagem\",\"nao_preenchido\");\n!0===b?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")});setTimeout(function(){var b=document.querySelector(\"#frame-stick-bottom\").contentWindow;b.document.querySelector(\"#fld_8673073_1\").addEventListener(\"click\",function(){var c=!0,d=b.document.querySelector(\"#fld_5697_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_nome\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_nome\",\"recusado\"));d=b.document.querySelector(\"#fld_3580578_1\");\n!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_email\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_email\",\"recusado\"));d=b.document.querySelector(\"#fld_5021473_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_telefone\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\"campo_telefone\",\"recusado\"));d=document.querySelector(\"#fld_5198151_1\");!d.hasAttribute(\"aria-invalid\")\u0026\u00260\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_destino\",\"preenchido\"):(c=!1,a(\"convers\\u00e3o\",\n\"campo_destino\",\"recusado\"));d=document.querySelector(\"#fld_6158375_1\");0\u003Cd.value.length?a(\"convers\\u00e3o\",\"campo_mensagem\",\"preenchido\"):a(\"convers\\u00e3o\",\"campo_mensagem\",\"nao_preenchido\");!0===c?a(\"convers\\u00e3o\",\"botao_enviar\",\"sucesso\"):a(\"convers\\u00e3o\",\"botao_enviar\",\"recusado\")})},4E3);e(\".btn.btn-primary.cta-sb\",\"mousedown\",function(b){b=b.target;b.className.includes(\"opened\")?a(\"convers\\u00e3o\",\"botao_fechar\",\"clique\"):a(\"convers\\u00e3o\",\"garanta\",\"clique\")})})(window.dp6GenericEvent,\nwindow.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){a(\".jornalhj\",\"mousedown\",function(a){b(\"engajamento\",\"jornal_digital\",\"clique_topo\")});a(\".mold-jornal\",\"mousedown\",function(a){b(\"engajamento\",\"jornal_digital\",\"clique_mid\")});a('.complement-col-jornal [title\\x3d\"Jornal Digital\"]',\"mousedown\",function(a){b(\"engajamento\",\"jornal_digital\",\"clique_mid\")});setTimeout(function(){a(\".assinatura .holderimage figure\",\"mousedown\",function(a){b(\"engajamento\",\"jornal_digital\",\"clique_rodape\")});a('.assinatura [title\\x3d\"Jornal de hoje\"]',\"mousedown\",\nfunction(a){b(\"engajamento\",\"jornal_digital\",\"clique_rodape\")});a(\".edicao-digital a.digital\",\"mousedown\",function(a){b(\"engajamento\",\"jornal_digital\",\"clique_rodape_editorias\")})},2E3)})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){setTimeout(function(){a(\".edicao-digital a.digital\",\"mousedown\",function(a){b(\"engajamento\",\"jornal_digital\",\"clique_rodape_editorias\")})},2E3)})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5220128\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E \n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){if(\"undefined\"!==typeof fbq){b.DFP=b.DFP||{};var c={};(b.DFP.cmd=b.DFP.cmd||[]).push(function(){var a=JSON.parse(DFP.getCookie(\"OESP_INFO\"));c.is_subscriber=\"true\"===DFP.isAssinante()?!0:!1;a\u0026\u0026\"object\"===typeof a\u0026\u0026\"undefined\"!==typeof a.id\u0026\u0026(c.subscription_id=a.id)});var d=document.querySelector('meta[property\\x3d\"article:content_tier\"]');d?c.article_content_tier=d.content:document.querySelector('script[src*\\x3d\"\/paywall\/pw.js\"]')?(b.PWAfterRun=b.PWAfterRun||[]).push(function(a){c.article_content_tier=\n1===a[\"var\"].Page.tipo_acesso?\"free\":a[\"var\"].Page.isColunista||2===a[\"var\"].Page.tipo_acesso?\"locked\":\"metered\"}):c.article_content_tier=\"free\";fbq(\"track\",\"ViewContent\",c)}})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"setUserProperties\",\"1659995760901982\",{tipo:\"",["escape",["macro",49],7],"\",subtipo:\"",["escape",["macro",72],7],"\",url:\"",["escape",["macro",96],7],"\",titulo:\"",["escape",["macro",50],7],"\",produto:\"Estad\\u00e3o\",editoria:\"",["escape",["macro",15],7],"\",subeditoria:\"",["escape",["macro",59],7],"\",modulos:\"",["escape",["macro",51],7],"\",paywall:\"",["escape",["macro",67],7],"\",paywallStatus:\"",["escape",["macro",53],7],"\",coluna:\"",["escape",["macro",70],7],"\",blog:\"",["escape",["macro",60],7],"\",id:\"",["escape",["macro",61],7],"\",midia:\"",["escape",["macro",62],7],"\",tags:\"",["escape",["macro",71],7],"\",\nautor:\"",["escape",["macro",63],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"==typeof fbq\u0026\u0026\"undefined\"!==dataLayerEstadao\u0026\u0026dataLayerEstadao.push({event:\"pixel_facebook\"});setTimeout(function(){fbq(\"init\",\"",["escape",["macro",97],7],"\",{uid:\"",["escape",["macro",42],7],"\"})},1E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "setup_tags":["list",["tag",124,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1256231881211063\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1256231881211063\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){(window.PWOnload=window.PWOnload||[]).push(function(a){var b=[\"loadSignwall\",\"loadPaywall\",\"loadHardPaywallDigital\",\"loadHardPaywallImpresso\",\"loadPaywallColunistas\"],e=[\"paywall\",\"signwall\",\"hard_paywall_impresso\",\"hard_paywall_digital\",\"conteudo_exclusivo\"],c=function(){a.document.querySelector(\"#paywall-chat-powermarketing-gtm\")||(script=a.document.createElement(\"script\"),script.src=\"\/\/static-powermarketing.nubium.io\/scripts\/Caba2b.bootstrapper.js\",script.type=\"text\/javascript\",script.id=\n\"paywall-chat-powermarketing-gtm\",a.document.querySelector(\"head\").appendChild(script))},d;for(d in b)a.PWEvents.addEventListener(b[d],function(){c()});a.layout_rendered\u0026\u0026-1\u003Ce.indexOf(a.layout_rendered)\u0026\u0026c()})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":226
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){c('[data-modulo\\x3d\"contatos\"] a.phone',\"mousedown\",function(a){a=a.target.innerText;b(\"convers\\u00e3o\",\"telefone\",\"click_\"+a)});c('[data-modulo\\x3d\"contatos\"] a.whatsapp',\"mousedown\",function(a){a=a.target.innerText;b(\"convers\\u00e3o\",\"whatsapp\",\"click_\"+a)})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1ecu\");twq(\"track\",\"PageView\");\u003C\/script\u003E \n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,d){window.addEventListener(\"DOMContentLoaded\",function(){var c=function(){var a=document.querySelector(\".player-static\")?document.querySelector(\".player-static\").classList:!1;return a=a?a.contains(\"d-none\")?document.getElementById(\"estadao-overlay\").innerText:document.querySelector(\"div.estadao-overlay\").innerText:document.getElementById(\"estadao-overlay\").innerText};d(\".vjs-big-play-button\",\"mousedown\",function(a){a.target.className.includes(\"pause\")?b(\"engajamento\",\"radio_player_superior \"+\nc(),\"pause\"):b(\"engajamento\",\"radio_player_superior \"+c(),\"play\")});d(\".play-audio\",\"mousedown\",function(a){b(\"engajamento\",\"radio_player_inferior \"+c(),\"play\")});d(\".pause-audio\",\"mousedown\",function(a){b(\"engajamento\",\"radio_player_inferior \"+c(),\"pause\")})})})(window.dp6GenericEvent,window.dp6Listen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":235
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ScrolledOn=function(d){d||(d=function(b,c,a,d,g){g||(g=!1);console.log(\"[scrolled-on]\",{event:\"genericEvent\",genericCategory:b,genericAction:c,genericLabel:a,genericValue:d,nonInteraction:g})});var k=\".infinito\",l=\".content\",m=function(b){var c=b.getBoundingClientRect();b=c.top;c=c.bottom;return 0\u003Cb\u0026\u0026b\u003Cwindow.innerHeight\/2||0\u003Eb\u0026\u0026c\u003Ewindow.innerHeight\/2},n=function(b){if(b){var c={gone:!1},a={25:{gone:!1},50:{gone:!1},75:{gone:!1},100:{gone:!1}},f={el:b.closest(k)\u0026\u0026b.closest(k).querySelector(\".comentarios\"),\ngone:!1},g=function(){c.gone\u0026\u0026f.gone\u0026\u0026(window.removeEventListener(\"scroll\",g),console.log(\"[scrolled-on] words \",c),console.log(\"[scrolled-on] comments \",f),console.log(\"[scrolled-on] percents \",a));!window.isJumping\u0026\u0026a[\"100\"].gone\u0026\u0026f.el\u0026\u0026!f.gone\u0026\u0026m(f.el)\u0026\u0026(d(\"engajamento\",\"scroll_noticia\",\"scroll_comentario\"),f.gone=!0);if(!window.isJumping\u0026\u0026m(b)){var e=b.getBoundingClientRect(),h=e.height-e.bottom+window.innerHeight\/2;a[\"25\"].size=25*e.height\/100;a[\"50\"].size=50*e.height\/100;a[\"75\"].size=75*e.height\/\n100;a[\"100\"].size=e.height-window.innerHeight\/2;c.gone||(c.total=b.innerText.trim().replace(\/(\\s+|\\r\\n|\\r|\\n)\/g,\" \").split(\" \").length,c.gone=!0,d(\"engajamento\",\"word_counter\",c.total,void 0,!0));(h\u003E=a[\"25\"].size\u0026\u0026h\u003Ca[\"50\"].size||h\u003E=a[\"25\"].size\u0026\u00260\u003C=e.y)\u0026\u0026!a[\"25\"].gone\u0026\u0026(a[\"25\"].gone=!0,d(\"engajamento\",\"maxscroll_noticia\",\"scroll 25%\",25));h\u003E=a[\"50\"].size\u0026\u0026!a[\"50\"].gone\u0026\u0026a[\"25\"].gone\u0026\u0026(a[\"50\"].gone=!0,d(\"engajamento\",\"maxscroll_noticia\",\"scroll 50%\",50));h\u003E=a[\"75\"].size\u0026\u0026!a[\"75\"].gone\u0026\u0026a[\"50\"].gone\u0026\u0026\n(a[\"75\"].gone=!0,d(\"engajamento\",\"maxscroll_noticia\",\"scroll 75%\",75));h\u003E=a[\"100\"].size\u0026\u0026!a[\"100\"].gone\u0026\u0026a[\"75\"].gone\u0026\u0026(a[\"100\"].gone=!0,d(\"engajamento\",\"maxscroll_noticia\",\"scroll 100%\",100))}};window.addEventListener(\"scroll\",g)}},p=function(b,c){k=b||k;l=c||l;document.querySelectorAll(k).forEach(function(a){a.querySelector(l)\u0026\u0026n(a.querySelector(l))})};return{scrolledOn:n,scrolledOnAll:p}}(window.dp6GenericEvent);document.querySelector(\"body\").classList.contains(\"reportagem-especial\")\u0026\u0026ScrolledOn.scrolledOnAll();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,b,e){if(window.location.href.includes(\"?token\")){var d={\"#btn-submit\":{minha_senha:\"single\"}};e(\"#form-reset-senha\",d,[\"engajamento\",\"esqueci_\",\"redefinir_\"],\"sucesso\");b(\"click\",\"div.extra-action a\",function(a){c(\"engajamento\",\"esqueci_minha_senha\",\"redefinir_tentar_novamente\")})}else window.location.href.includes(\"?link_expirado\")?(d={'[value\\x3d\"Enviar\"]':{minha_senha:\"single\"}},e(\"#form-lembrar-senha\",d,[\"engajamento\",\"esqueci_\",\"link_expirado_enviar_\"]),b(\"click\",\"a.back-link\",function(a){c(\"engajamento\",\n\"esqueci_minha_senha\",\"link_expirado_voltar\")})):window.location.pathname.includes(\"esqueci-minha-senha\")?(d={'[value\\x3d\"Enviar\"]':{minha_senha:\"single\"}},e(\"#form-lembrar-senha\",d,[\"engajamento\",\"esqueci_\",\"enviar_\"]),b(\"click\",\"a.back-link\",function(a){c(\"engajamento\",\"esqueci_minha_senha\",\"voltar\")})):window.location.pathname.includes(\"\/cadastrar\/\")?(b(\"click\",\"#btn-cadastrar\",function(a){setTimeout(function(){var a=document.querySelector(\"#aceite_newsletter\").value,b=\"cadastro_novidades_\";b=\n\"true\"==a?b+\"select\":b+\"unselect\";a=document.querySelector(\"#btn-cadastrar\").value;var d=\"cadastro_e-mail_\";d=a.toLocaleLowerCase().includes(\"sucesso\")?d+\"sucesso\":d+\"erro\";c(\"engajamento\",\"pagina_cadastro\",b);c(\"engajamento\",\"pagina_cadastro\",d)},1500)}),b(\"click\",'[data-dtkey\\x3d\"cadastro_google\"]',function(a){c(\"engajamento\",\"pagina_cadastro\",\"  cadastro_google\")}),b(\"click\",'[data-dtkey\\x3d\"cadastro_facebook\"]',function(a){c(\"engajamento\",\"pagina_cadastro\",\"cadastro_facebook\")}),b(\"click\",'[data-dtkey\\x3d\"cadastro_login\"]',\nfunction(a){c(\"engajamento\",\"pagina_cadastro\",\"cadastro_login\")}),b(\"click\",'[data-dtkey\\x3d\"cadastro_assine_outros\"]',function(a){c(\"engajamento\",\"pagina_cadastro\",\"cadastro_assine_outros\")}),b(\"click\",\".assine-btn.btn-green\",function(a){c(\"conversao\",\"pagina_cadastro\",\"cadastro_bt_assine\")})):window.location.pathname.includes(\"\/redefinir-usuario\/\")?b(\"click\",'[data-dtkey\\x3d\"login_redifinir_usuario_voltar\"]',function(a){c(\"engajamento\",\"pagina_login\",\" login_redifinir_usuario_voltar\")}):(b(\"click\",\n'[data-dtkey\\x3d\"login_assine_botao_google-subscribe\"]',function(a){a=\"?utm_source\\x3dpagina_login\\x26utm_medium\\x3dpagina_login\\x26utm_campaign\\x3dpagina_login\\x26utm_content\\x3dpagina_login\";location.search.includes(a)\u0026\u0026window.history.pushState(\"\",\"\",location.pathname+a)}),b(\"click\",'[data-dtkey\\x3d\"login_google\"]',function(a){c(\"engajamento\",\"pagina_login\",\"login_google\")}),b(\"click\",'[data-dtkey\\x3d\"login_facebook\"]',function(a){c(\"engajamento\",\"pagina_login\",\"login_facebook\")}),b(\"click\",'[data-dtkey\\x3d\"login_esqueci_usuario\"]',\nfunction(a){c(\"engajamento\",\"pagina_login\",\"login_esqueci_usuario\")}),b(\"click\",'[data-dtkey\\x3d\"login_esqueci_senha\"]',function(a){c(\"engajamento\",\"pagina_login\",\"login_esqueci_senha\")}),b(\"click\",'[data-dtkey\\x3d\"login_cadastre-se\"]',function(a){c(\"engajamento\",\"pagina_login\",\"login_cadastre-se\")}),b(\"click\",'[data-dtkey\\x3d\"login_botao_assine_outros\"]',function(a){c(\"engajamento\",\"pagina_login\",\"login_botao_assine_outros\")}),b(\"click\",\".assine-btn.btn-green\",function(a){c(\"conversao\",\"pagina_login\",\n\"login_bt_assine\")}))})(window.dp6GenericEvent,window.estadaoListen,window.listenEventosFormularioEstadao);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":239
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",76],8,16],".toLowerCase().includes(\"show\")\u0026\u0026(dataLayerEstadao.push({event:\"breakEventosPaywall\"}),fbq(\"setUserProperties\",\"1659995760901982\",{tipo:\"",["escape",["macro",49],7],"\",subtipo:\"",["escape",["macro",72],7],"\",url:\"",["escape",["macro",96],7],"\",titulo:\"",["escape",["macro",50],7],"\",produto:\"Estad\\u00e3o\",editoria:\"",["escape",["macro",15],7],"\",subeditoria:\"",["escape",["macro",59],7],"\",modulos:\"",["escape",["macro",51],7],"\",paywall:\"",["escape",["macro",67],7],"\",paywallStatus:\"",["escape",["macro",53],7],"\",coluna:\"",["escape",["macro",70],7],"\",blog:\"",["escape",["macro",60],7],"\",\nid:\"",["escape",["macro",61],7],"\",midia:\"",["escape",["macro",62],7],"\",tags:\"",["escape",["macro",71],7],"\",autor:\"",["escape",["macro",63],7],"\",paywall_tipo:\"",["escape",["macro",5],7],"\"}));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":252
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(\"breakEventosPaywall\",\"delayEventosPaywall\",1E3)})(window.breakTags);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/acesso.estadao.com.br\/paywall\/chatbot\/chatbot.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){window.location.pathname.includes(\"app\")\u0026\u0026(a(\"click\",\"#google-topo\",function(a){b(\"convers\\u00e3o\",\"bot\\u00e3o_assine_google-subscribe_lp-topo\",\"aap00123\")}),a(\"click\",\"#google-rodape\",function(a){b(\"convers\\u00e3o\",\"bot\\u00e3o_assine_google-subscribe_lp-rodape\",\"aap00123\")}),a(\"click\",\"#google-play-topo\",function(a){b(\"convers\\u00e3o\",\"dowload app\",\"android\")}),a(\"click\",\"#apple-store-topo\",function(a){b(\"convers\\u00e3o\",\"dowload app\",\"ios\")}),a(\"click\",\"#google-store-rodape\",function(a){b(\"convers\\u00e3o\",\n\"dowload app_rodape\",\"android\")}),a(\"click\",\"#apple-store-rodape\",function(a){b(\"convers\\u00e3o\",\"dowload app_rodape\",\"ios\")}))})(window.dp6GenericEvent,window.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":259
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(window.ESWG=window.ESWG||[]).push(function(c){c.Order.submit({packageName:\"com.fett.android.estadao\",productId:\"dig_full_aap00117\",purchaseToken:\"pnpniobodcpflfmejdmjdagp.AO-J1OwVBprYkMmYqZlxrbvv6KR0tHOWYUnj5W3nlncHWkf8SO9DLpIoBj1ts-0iXIFNGepZ0l0w8klTjoW6VqY50yR-Hs2L6ehWjyjmVZQWXfc-3jIHNPaW-unidl7JM-4fK2Lv1YmA\"},{},null).then(function(b){(window.ESWG=window.ESWG||[]).push(function(a){a.Event.dispatchEvent(\"completeOrder\",b);b.html\u0026\u0026(b.document?a.Event.dispatchEvent(\"successDocument\",b):a.Event.dispatchEvent(\"success\",\nb))});c.Template.showIframeHtml(b.html).then(function(a){a.style.display=\"inline-block\";a.style.width=\"100%\";a.style.height=\"100%\";a.style.border=\"none\";a.style.position=\"fixed\";a.style.top=\"0\";a.style.left=\"0\";a.style.background=\"rgba(0,0,0,0.5)\";a.style.zIndex=\"99999999\"})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":264
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=\"\";send_btn=document.querySelector(\".correcoes-button\");send_btn.onclick=function(d){document.querySelector(\".correcoes__resultado\").addEventListener(\"DOMNodeInserted\",function(c){b=document.querySelector(\"#motivo:checked\").getAttribute(\"data-event\");return_div=c.relatedNode.children.item(0);(return_div_success=return_div.classList.contains(\"correcoes__resultado--sucesso\"))?(a(\"engajamento\",\"saindo newsletter\",\"sucesso\"),a(\"engajamento\",\"saindo newsletter\",b)):a(\"engajamento\",\"saindo newsletter\",\n\"nao-enviado\")},!1)}})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":271
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a,c,d){a(\"click\",\".pm-textchat-request-buttons a\",function(a){b(\"engajamento\",\"chat_assine\",\"clique\")});a(\"click\",\"a.pm-textchat-cancel-button\",function(a){b(\"engajamento\",\"chat_assine\",\"cancelar\")});a(\"click\",\".pm-chat-feedback-buttons div.button-close\",function(a){b(\"engajamento\",\"chat_assine\",\"fechar\")});a(\"click\",\"div.pm-chat-close\",function(a){b(\"engajamento\",\"chat_assine\",\"aguarde_fechar\")});a(\"click\",\".button-no\",function(a){b(\"engajamento\",\"chat_assine\",\"finalizar_nao\")});a(\"click\",\n\".button-yes\",function(a){b(\"engajamento\",\"chat_assine\",\"finalizar_sim\")});labels={\"a.pm-textchat-start-button\":{Iniciar:\"concatenado_sem_status\"},'.pm-textchat-starter-form-field input[placeholder\\x3d\"Nome\"]':\"nome_\",'.pm-textchat-starter-form-field input[placeholder\\x3d\"Email\"]':\"email_\",'.pm-textchat-starter-form-field input[placeholder\\x3d\"Phone\"]':\"telefone_\"};c(\".pm-textchat-starter\",labels,[\"engajamento\",\"chat_assine\"]);\"direto\"===",["escape",["macro",32],8,16],"\u0026\u0026d(\".pm-textchat-request\",\"open_chat_assine\")})(window.dp6GenericEvent,\nwindow.estadaoListen,window.listenEventosFormularioEstadao,window.selectorVisivelInterval);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":274
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.SevenTrackingObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/estadao.sevennova.com.br\/sv.js\",\"sv\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":277
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a,c,d){a(\"click\",\".pm-textchat-request-buttons a\",function(a){b(\"engajamento\",\"chat_paywall\",\"clique\")});a(\"click\",\"a.pm-textchat-cancel-button\",function(a){b(\"engajamento\",\"chat_paywall\",\"cancelar\")});a(\"click\",\".pm-chat-feedback-buttons div.button-close\",function(a){b(\"engajamento\",\"chat_paywall\",\"fechar\")});a(\"click\",\"div.pm-chat-close\",function(a){b(\"engajamento\",\"chat_paywall\",\"aguarde_fechar\")});a(\"click\",\".button-yes\",function(a){b(\"engajamento\",\"chat_paywall\",\"finalizar_sim\")});\na(\"click\",\".button-no\",function(a){b(\"engajamento\",\"chat_paywall\",\"finalizar_nao\")});labels={\"a.pm-textchat-start-button\":{Iniciar:\"concatenado_sem_status\"},'.pm-textchat-starter-form-field input[placeholder\\x3d\"Nome\"]':\"nome_\",'.pm-textchat-starter-form-field input[placeholder\\x3d\"Email\"]':\"email_\",'.pm-textchat-starter-form-field input[placeholder\\x3d\"Phone\"]':\"telefone_\"};c(\".pm-textchat-starter\",labels,[\"engajamento\",\"chat_paywall\"]);\"direto\"===",["escape",["macro",32],8,16],"\u0026\u0026d(\".pm-textchat-request\",\n\"open_chat_paywall\")})(window.dp6GenericEvent,window.estadaoListen,window.listenEventosFormularioEstadao,window.selectorVisivelInterval);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(b){var d=this;if(!document.documentElement.contains(d))return null;do{if(d.matches(b))return d;d=d.parentElement}while(null!==d);return null});dataLayerEstadao=dataLayerEstadao||[];\nvar eventAction=\"meu_estadao\",engajamento=\"engajamento\",conversao=\"convers\\u00e3o\",gtmKeys={meus_dados:{genericCategory:engajamento,genericAction:eventAction},meus_pagamentos:{genericCategory:engajamento,genericAction:eventAction},meus_produtos:{genericCategory:engajamento,genericAction:eventAction},servicos_contrato_assinatura:{genericCategory:conversao,genericAction:eventAction},servicos_nota_fiscal_eletronica:{genericCategory:conversao,genericAction:eventAction},servicos_transferencia_temporaria:{genericCategory:conversao,\ngenericAction:eventAction},servicos_historico_pagamento:{genericCategory:conversao,genericAction:eventAction},servicos_interrupcao_temporaria:{genericCategory:conversao,genericAction:eventAction},servicos_reclamacao_entrega:{genericCategory:conversao,genericAction:eventAction},atividades_dados_cadastrais:{genericCategory:engajamento,genericAction:eventAction},atividades_newsletter:{genericCategory:engajamento,genericAction:eventAction},atividades_convites:{genericCategory:engajamento,genericAction:eventAction},\natividades_tutoriais:{genericCategory:engajamento,genericAction:eventAction},atividades_alterar_plano:{genericCategory:engajamento,genericAction:eventAction},atividades_personalizar_assunto:{genericCategory:engajamento,genericAction:eventAction},news:{genericCategory:engajamento,genericAction:eventAction},tags:{genericCategory:engajamento,genericAction:eventAction},parceiros:{genericCategory:engajamento,genericAction:eventAction},eventos:{genericCategory:engajamento,genericAction:eventAction},publicacoes:{genericCategory:engajamento,\ngenericAction:eventAction},chat:{genericCategory:engajamento,genericAction:eventAction},fale_conosco:{genericCategory:engajamento,genericAction:eventAction},faq:{genericCategory:engajamento,genericAction:eventAction},jornal_digital_rodape:{genericCategory:engajamento,genericAction:eventAction},seja_assinante:{genericCategory:conversao,genericAction:eventAction},botao_assine_direito:{genericCategory:conversao,genericAction:eventAction},parceiros_listar_todos:{genericCategory:engajamento,genericAction:eventAction},\neventos_listar_todos:{genericCategory:engajamento,genericAction:eventAction},publicacoes_listar_todos:{genericCategory:engajamento,genericAction:eventAction},newsletter:{genericCategory:engajamento,genericAction:eventAction},tutorial:{genericCategory:engajamento,genericAction:eventAction},salvar_dados:{genericCategory:engajamento,genericAction:eventAction},menu_lateral:{genericCategory:engajamento,genericAction:eventAction},clique_sair_conta:{genericCategory:engajamento,genericAction:\"menu_lateral\"},\nbotao_assine_meus_produtos:{genericCategory:engajamento,genericAction:eventAction},botao_assine_meus_dados:{genericCategory:engajamento,genericAction:eventAction},botao_assine_meus_pagamentos:{genericCategory:engajamento,genericAction:eventAction},servicos_alterar_forma_de_pagamento:{genericCategory:engajamento,genericAction:eventAction},install_app:{genericCategory:conversao,genericAction:\"instalar\"},install_app_cancelar:{genericCategory:conversao,genericAction:\"cancelar\"}};\nwindow.addEventListener(\"click\",function(b){b=b.target;b.getAttribute(\"data-dtkey\")?enviaEvento(b):(b=b.closest(\"[data-dtkey]\"))\u0026\u0026enviaEvento(b)});window.addEventListener(\"alertPush\",function(b){window.dp6GenericEvent(b.detail.genericCategory,b.detail.genericAction,b.detail.genericLabel)});\nfunction enviaEvento(b){(new Date).getTime();var d=b.getAttribute(\"data-dtkey\");if(\"undefined\"!==typeof gtmKeys[d]){var c=gtmKeys[d];switch(d){case \"news\":var a=\"estadao_agora_\"+b.getAttribute(\"href\");window.dp6GenericEvent(c.genericCategory,c.genericAction,a);break;case \"tags\":a=\"assuntos_\"+b.getAttribute(\"title\");window.dp6GenericEvent(c.genericCategory,c.genericAction,a);break;case \"parceiros\":a=b.getAttribute(\"title\").replace(\" \",\"_\");a=\"parceiros_\"+a;window.dp6GenericEvent(c.genericCategory,\nc.genericAction,a);break;case \"eventos\":a=b.getAttribute(\"title\").replace(\" \",\"_\");a=\"eventos_\"+a;window.dp6GenericEvent(c.genericCategory,c.genericAction,a);break;case \"publicacoes\":a=b.getAttribute(\"title\").replace(\" \",\"_\");a=\"publicacoes_\"+a;window.dp6GenericEvent(c.genericCategory,c.genericAction,a);break;case \"newsletter\":a=\"true\"===b.getAttribute(\"data-inscrito\")?\"desinscrever\":\"inscrever\";a=\"newsletter_\"+a+\"_\"+b.getAttribute(\"data-editoria\");window.dp6GenericEvent(c.genericCategory,c.genericAction,\na);break;case \"tutorial\":a=b.getAttribute(\"data-step\");c.genericAction=\"meu_estadao_tutorial_step\"+a;a=b.innerText;a=\"clique_\"+a;window.dp6GenericEvent(c.genericCategory,c.genericAction,a);break;case \"salvar_dados\":b=\"\";d=document.querySelectorAll(\"#form-meus-dados [name]\");for(a in d)if(d.hasOwnProperty(a)\u0026\u0026d[a].getAttribute(\"name\")){var e=d[a].getAttribute(\"name\");b=\"undefined\"!==typeof d[a].value\u0026\u00260\u003Cd[a].value.length?b+(\"|\"+e+\"_preenchido\"):b+(\"|\"+e+\"_recusado\")}window.dp6GenericEvent(c.genericCategory,\nc.genericAction,b);break;case \"menu_lateral\":a=\"clique_menu_\"+b.innerText;window.dp6GenericEvent(c.genericCategory,c.genericAction,a);break;case \"install_app\":window.dp6GenericEvent(c.genericCategory,c.genericAction,\"meu_estadao_app\");break;case \"install_app_cancelar\":window.dp6GenericEvent(c.genericCategory,c.genericAction,\"meu_estadao_app\");break;default:window.dp6GenericEvent(c.genericCategory,c.genericAction,d)}}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":281
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a,e){a(\"click\",\".user-informations\",function(a){b(\"engajamento\",\"menu_superior\",\"login\")});setTimeout(function(){(window.ESTADAO_MENU=window.ESTADAO_MENU||[]).push(function(d){d.appendScript(function(c){a(\"click\",\".menu.meu-estadao a\",function(a){b(\"engajamento\",\"menu_lateral_direito\",\"clique_menu_meus_dados_\"+a.target.innerText.toLowerCase().replace(\/ \/g,\"_\"))},c.document);a(\"click\",\".menu.editorias\",function(a){b(\"engajamento\",\"menu_lateral_direito\",\"clique_menu_editorias_\"+a.target.innerText.toLowerCase().replace(\/ \/g,\n\"_\"))},c.document);a(\"click\",\".logout\",function(a){b(\"engajamento\",\"menu_lateral_direito\",\"clique_menu_sair_conta\")},c.document)})})},3E3)})(window.dp6GenericEvent,window.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":290
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1659995760901982\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1659995760901982\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EString.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":293
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,e,f,g){d(\"click\",\"img.logo_br18\",function(a){c(\"engajamento\",\"noticia\",\"logo_br18\")});d(\"click\",\".icones_redes\",function(a){a=a.target.parentElement.href;var b=\"\";a.includes(\"facebook\")?b=\"facebook\":a.includes(\"twitter\")?b=\"twitter\":a.includes(\"instagram\")\u0026\u0026(b=\"instagram\");c(\"engajamento\",\"noticia\",\"compartilhamento_\"+b)});e=\"\";document.querySelectorAll(\"#container_notas\").length\u0026\u0026(e=\"#container_notas\");g(f,e,!0,!0);d(\"click\",\"p a\",function(a){(a=a.target.href)\u0026\u0026c(\"engajamento\",\"click\",\n\"link_noticia_\"+a)})})(window.dp6GenericEvent,window.estadaoListen,window.dp6WordCounter,window.dp6Helper,window.dp6WatchNewsOn);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":294
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a(\"engajamento\",\"ebook_estadao\",\"|nome_preenchido|sobrenome_preenchido|email_preenchido\");a(\"conversao\",\"ebook_estadao\",\"botao_enviar_sucesso\")})(window.dp6GenericEvent,window.estadaoListen,window.listenEventosFormularioEstadao);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":296
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){a(\"click\",\".container .gaEngajamento\",function(a){b(\"engajamento\",\"link\",\"click\")})})(window.dp6GenericEvent,window.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":297
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){a(\"click\",'[data-dtkey\\x3d\"bot\\u00e3o_ios\"]',function(a){b(\"conversao\",\"dowload_app_clube\",\"bot\\u00e3o_ios\")});a(\"click\",'[data-dtkey\\x3d\"bot\\u00e3o_android\"]',function(a){b(\"conversao\",\"dowload_app_clube\",\"bot\\u00e3o_android\")})})(window.dp6GenericEvent,window.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":298
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(\"engajamento\",\"chat_paywall\",\"show_icone\")})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":304
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(\"engajamento\",\"chat_assine\",\"show_icone\")})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":305
    },{
      "function":"__html",
      "setup_tags":["list",["tag",7,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(\"engajamento\",\"pagina_login\",\"login_e-mail\")})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":316
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(\"error\",\"",["escape",["macro",102],7],"|",["escape",["macro",103],7],"\",\"",["escape",["macro",39],7],"\")})(window.dp6GenericEvent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":319
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){document.title.includes(\"encontrada\")?a(\"convers\\u00e3o\",\"google-subscribe\",\"success_pagina_nao_encontrada\"):a(\"convers\\u00e3o\",\"google-subscribe\",\"success\")})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":320
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/tracker.izmarketing.com.br\/Formulario\/Recebe.aspx?campanha=a3e40e2b-bcb4-41c3-9c17-af731f8b832a\u0026amp;identificador=$email$\u0026amp;nome=$nome$\u0026amp;redirect=.\" width=\"0\" height=\"0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":323
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",158,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar path=window.location.pathname;\"\/\"==path\u0026\u0026(path=\"\");var url=document.domain+path,split_dom=url.split(\"\/\");\"\"==split_dom[2]\u0026\u0026split_dom.pop();var split_pontos=url.split(\".\"),host=window.location.hostname,niveis=split_dom.length;if(host.match(\"devl|qa|devel|blogsdevel\")){var editoria=split_pontos[1];\"estadao\"==editoria\u0026\u0026(editoria=\"www\")}else editoria=split_pontos[0];var sections_new=\"\";\nif(\"undefined\"==typeof window.estadao_info){if(1==niveis)sections_new=editoria;else if(2==niveis){var subeditoria=\"-\"+split_dom[1];sections_new=editoria+\",\"+editoria+subeditoria}else if(3\u003C=niveis){subeditoria=\"-\"+split_dom[1];if(\"\"!=split_dom[2])var outros=\"-\"+split_dom[2];if(outros.match(\",[a-z]\")){var n3=outros.split(\",\");outros=n3[0]}sections_new=editoria+\",\"+editoria+subeditoria+\",\"+editoria+subeditoria+outros}var authors=\"\"}else{subeditoria=split_dom[1];var editoria_link=\"undefined\"!=typeof window.estadao_info.editoria||\nnull!=window.estadao_info.editoria?window.estadao_info.editoria:\"\",subeditoria_link=\"undefined\"!=typeof window.estadao_info.subeditoria||null!=window.estadao_info.subeditoria?window.estadao_info.subeditoria:\"\";if(\"\"==subeditoria_link||null==subeditoria_link)subeditoria_link=subeditoria;if(\"\"==editoria_link||null==editoria_link)editoria_link=editoria;\"undefined\"!=typeof toSeo\u0026\u0026(editoria_link=toSeo(editoria_link),subeditoria_link=toSeo(subeditoria_link));if(host.match(\"tv\"))1==niveis\u0026\u0026(sections_new=\neditoria_link),2==niveis\u0026\u0026(sections_new=editoria_link+\",\"+editoria_link+\"-\"+subeditoria_link),url.match(\",\")\u0026\u0026(sections_new=url.match(\"playlist\")?editoria_link+\",\"+editoria_link+\"-\"+subeditoria_link+\",\"+editoria_link+\"-\"+subeditoria_link+\"-playlist\":editoria_link+\",\"+editoria_link+\"-\"+subeditoria_link+\",\"+editoria_link+\"-\"+subeditoria_link+\"-video\");else{var fase3=outros=\"\";url.match(\"noticias|discute|fotos|infograficos|tv|blogs\")\u0026\u0026(outros=\"-\"+split_dom[1],fase3=\",\"+editoria_link+\"-\"+subeditoria_link+\noutros);if(\"esportefera.com.br\"==split_dom[0]){var fera_dom=url.split(\".\");sections_new=fera_dom[0]+\",\"+fera_dom[0]+\"-\"+editoria_link+\",\"+fera_dom[0]+\"-\"+editoria_link+outros;\"blogs\"==split_dom[1]\u0026\u0026(sections_new=fera_dom[0]+\",\"+fera_dom[0]+\"-\"+subeditoria_link+\",\"+fera_dom[0]+\"-\"+subeditoria_link+outros);\"galerias\"==split_dom[1]\u0026\u0026(sections_new=fera_dom[0]+\",\"+fera_dom[0]+\"-\"+editoria_link+\",\"+fera_dom[0]+\"-\"+editoria_link+\"-\"+split_dom[1])}else sections_new=editoria_link+\",\"+editoria_link+\"-\"+subeditoria_link+\nfase3}authors=\"undefined\"!=typeof window.estadao_info.autor?window.estadao_info.autor:\"Noticia sem autor\"}authors=null==authors||\"undefined\"==authors?\"\":authors.replace(\/ e \/g,\",\");",["escape",["macro",93],8,16],"?console.log(authors,sections_new):\"\";location.host.includes(\"brpolitico\")\u0026\u0026!sections_new.includes(\"brpolitico\")\u0026\u0026(sections_new=\"brpolitico,brpolitico-geral,brpolitico-geral-noticias\");_sf_async_config.sections=sections_new;_sf_async_config.authors=authors;var url_chartbeat=\"\/\/static.chartbeat.com\/js\/chartbeat.js\";\n-1\u003Cdocument.location.pathname.search(\"tracking\/fb\/tracking\")\u0026\u0026(url_chartbeat=\"\/\/static.chartbeat.com\/js\/chartbeat_fia.js\",_sf_async_config.sections=\"IA-section\",sf_async_config.authors=\"IA-author\");\n(function(){function b(){window._sf_endpt=(new Date).getTime();var a=document.createElement(\"script\");a.setAttribute(\"language\",\"javascript\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",url_chartbeat);document.body.appendChild(a)}b();window.onload=\"function\"!=typeof window.onload?b:function(){setTimeout(function(){c()},500)};var c=window.onload})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":324
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _sf_startpt=(new Date).getTime(),_sf_async_config=_sf_async_config||{};_sf_async_config.uid=50621;-1\u003Cdocument.domain.search(\"estadao.com.br\")?_sf_async_config.domain=\"estadao.com.br\":-1\u003Cdocument.domain.search(\"esportefera.com.br\")?(_sf_async_config.sections=\"ESPORTEFERA\",_sf_async_config.domain=\"estadao.com.br\"):-1\u003Cdocument.domain.search(\"brpolitico.com.br\")\u0026\u0026(_sf_async_config.sections=\"brpolitico,brpolitico-geral,brpolitico-geral-noticias\",_sf_async_config.domain=\"estadao.com.br\");\n_sf_async_config.flickerControl=!1;_sf_async_config.playerdomain=\"front.multimidia.estadao.com.br\";_sf_async_config.useCanonical=!0;function getCookie(c){c+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var d=0;d\u003Cb.length;d++){for(var a=b[d];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"}var _cbq=window._cbq=window._cbq||[],ckAssinante=getCookie(\"OESP_SUBSCRIPTION\"),ckLogado=getCookie(\"PORTAL_AUTH\");\n\"undefined\"!=typeof ckAssinante\u0026\u0026\"\"!==ckAssinante?_cbq.push([\"_acct\",\"paid\"]):\"undefined\"!=typeof ckLogado\u0026\u0026\"\"!==ckLogado?_cbq.push([\"_acct\",\"lgdin\"]):_cbq.push([\"_acct\",\"anon\"]);\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/static.chartbeat.com\/js\/chartbeat_mab.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":325
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){(a.ESWG=a.ESWG||[]).push(function(a){a.Event.addEventListener(\"success\",function(a){b(\"convers\\u00e3o\",\"google-subscribe\",\"success_google\")});a.Event.addEventListener(\"successDocument\",function(a){b(\"convers\\u00e3o\",\"google-subscribe\",\"success_google\")})})})(window.dp6GenericEvent,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":330
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){a(\"click\",\"#link_basometro_topo\",function(a){b(\"convers\\u00e3o\",\"basometro\",\"clique_link\")});a(\"click\",\"#link_monitor_topo\",function(a){b(\"convers\\u00e3o\",\"monitor_bolsonaro\",\"clique_link\")});a(\"click\",\"#btn_basometro_lateral\",function(a){b(\"convers\\u00e3o\",\"basometro\",\"clique_navegue\")});a(\"click\",\"#btn_monitor_lateral\",function(a){b(\"convers\\u00e3o\",\"monitor_bolsonaro\",\"clique_navegue\")});a(\"click\",\"#btn_assine_digital_completa\",function(a){b(\"convers\\u00e3o\",\"bot\\u00e3o_assine\",\n\"AM100878\")});a(\"click\",\"#btn_assine_impressa\",function(a){b(\"convers\\u00e3o\",\"assine_monitor\",\"clique_impresso\")});a(\"click\",\"#link_google_play\",function(a){b(\"convers\\u00e3o\",\"download_app_monitor\",\"bot\\u00e3o_android\")});a(\"click\",\"#link_app_store\",function(a){b(\"convers\\u00e3o\",\"download_app_monitor\",\"bot\\u00e3o_ios\")});a(\"click\",\"#link_clube_estadao\",function(a){b(\"convers\\u00e3o\",\"clube_mais_monitor\",\"clique\")});a(\"click\",\"#link_meu_estadao\",function(a){b(\"convers\\u00e3o\",\"meu_estadao_monitor\",\n\"clique\")})})(window.dp6GenericEvent,window.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":331
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){products\u0026\u0026(0,window.genericEventMa)({category:\"payment\",action:\"subscriptions_offered\",offers:",["escape",["macro",27],8,16],"},\"paywallEvent\")},1E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":335
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar pwrealtime=document.createElement(\"script\");pwrealtime.setAttribute(\"src\",\"https:\/\/acesso.estadao.com.br\/paywall\/v2\/js\/pw-realtime.js\");document.body.append(pwrealtime);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":340
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){c(\"click\",\"a.line-leia-link\",function(a){b(\"engajamento\",\"link\",a.target.title)});c(\"click\",\".n--noticias__more__list .n--noticias__more__itens a\",function(a){b(\"engajamento\",\"link\",a.target.innerText)})})(window.dp6GenericEvent,window.estadaoListen);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":341
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/pln.brtrk2.com\/aff_l?offer_id=5614\u0026amp;adv_sub=",["escape",["macro",95],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":342
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayerEstadao=dataLayerEstadao||[];window.addEventListener(\"br_politico_landing\",function(a){console.log(Object.keys(a.detail).length);if(0\u003CObject.keys(a.detail).length)for(var b in a.detail)window.dp6GenericEvent(a.detail[b].genericCategory,a.detail[b].genericAction,a.detail[b].genericLabel)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",132,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d){var c=function(a,b,d,c){c=c||document;b=[].slice.call(c.querySelectorAll(b)||[]);b.forEach(function(b){b.addEventListener(a,d)})},e=document.body||document.querySelector(\"body\");ScrolledOn.scrolledOnAll(\".infinito\",\".corpo-materia\");c(\"click\",'[data-action\\x3d\"submenu\"]',function(a){setTimeout(function(){e.classList.contains(\"-submenu\")?d(\"engajamento\",\"br_politico\",\"menu_principal\"):d(\"engajamento\",\"br_politico\",\"menu_fechar\")},1)});c(\"click\",\"div.corpo-materia a\",function(a){\"string\"==\ntypeof a.target.href\u0026\u0026a.target.href.includes(\"assine.estadao.com.br\")\u0026\u0026d(\"conversao\",\"br_politico\",\"assine_materia\")});c(\"click\",'[data-login\\x3d\"link\"]',function(a){d(\"engajamento\",\"br_politico\",\"login_header\")});c(\"click\",'[data-login\\x3d\"assine\"]',function(a){e.classList.contains(\"-submenu\")?d(\"conversao\",\"br_politico\",\"assine_menu_principal\"):d(\"conversao\",\"br_politico\",\"assine_header\")});c(\"click\",'[data-login\\x3d\"icon\"]',function(a){d(\"engajamento\",\"br_politico\",\"meu_perfil\")});c(\"click\",\".submenu-menu a\",\nfunction(a){a=a.target.getAttribute(\"data-url-id\");d(\"engajamento\",\"br_politico\",\"menu_\"+a)});c(\"click\",\".submenu-social a\",function(a){var b=a.target;\"a\"!=a.target.tagName\u0026\u0026(b=a.target.closest(\"a\"));a=b.getAttribute\u0026\u0026b.getAttribute(\"data-social\");\"facebook\"!=a\u0026\u0026\"twitter\"!=a\u0026\u0026\"instagram\"!=a||d(\"engajamento\",\"br_politico\",\"menu_\"+a)});c(\"submit\",'[action\\x3d\"\/busca\"]',function(a){var b=a.target.querySelector('[data-search\\x3d\"input\"]'),c=\"menu_busca\";b||(b=a.target.querySelector('[data-search\\x3d\"input-404\"]'),\nc=\"404_busca\");a=b.value?b.value:\"\";a=a.replace(\/\\s\/g,\"_\");d(\"engajamento\",\"br_politico\",c+\"_\"+a)});c(\"click\",'[data-action\\x3d\"visite-home\"]',function(a){d(\"engajamento\",\"br_politico\",\"redirecionar_home\")});c(\"click\",\".header-share a\",function(a){var b=a.target;\"a\"!=a.target.tagName\u0026\u0026(b=a.target.closest(\"a\"));a=b.getAttribute\u0026\u0026b.getAttribute(\"data-social\");\"facebook\"!=a\u0026\u0026\"twitter\"!=a\u0026\u0026\"email\"!=a\u0026\u0026\"whatsapp\"!=a\u0026\u0026\"linkedin\"!=a||d(\"engajamento\",\"br_politico\",\"materia_compartilhar_\"+a)});c(\"click\",\".n-hdr-logo a\",\nfunction(a){d(\"engajamento\",\"br_politico\",\"logo_home\")});c(\"click\",\"body\",function(a){var b=a.target.closest(\".module__share\");b\u0026\u0026(a=(a=a.target.closest(\"li\"))\u0026\u0026a.getAttribute(\"data-social\"),\"facebook\"!=a\u0026\u0026\"twitter\"!=a\u0026\u0026\"email\"!=a\u0026\u0026\"whatsapp\"!=a\u0026\u0026\"linkedin\"!=a\u0026\u0026\"comentar\"!=a||d(\"engajamento\",\"br_politico\",\"compartilhar_lateral_\"+a))})})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":349
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",7,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a,c){a(\"click\",\"body div.container div#popup-assine-v1 div.content div.body-content a\",function(a){b(\"conversao\",\"slider-popup\",\"clique-botao-assine\")});c(\"#popup-assine-v1.visible\",\"open_banner_lateral\")})(window.dp6GenericEvent,window.estadaoListen,window.selectorVisivelInterval);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":351
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){window.dp6GenericEvent(\"engajamento\",\"slider-popup\",\"show\")})(window.dp6GenericEvent);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":352
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-715559334\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-715559334\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":353
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10086995\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":356
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1659995760901982\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1659995760901982\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePvGaleria"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(noticias|blogs)"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"brpolitico.com.br"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePvScroll_filtrado"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"br18.com.br"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(((devl|qa)\\.)?brpolitico\\.com\\.br)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePageView"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"meu\\.estadao\\.com\\.br",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"^https\\:\\\/\\\/acesso\\.estadao\\.com\\.br\\\/paywall",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"show-iframe="
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"genericEvent"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"ga_event"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"disparoPaywall"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(noticias|blogs)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^viagem\\.estadao",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(www\\.|)br18\\.com\\.br$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)8104086_128($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"^((?!assine\\.estadao|assineestadao).)*$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(jornaldocarro\\.sydle\\.com)|(jornaldocarro\\.(estadao.com|com)\\.br)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"jornaldocarro"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePvPurchase"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePvCheckout"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^estradao\\.estadao\\.com\\.br",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"internacional.estadao.com.br"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(noticias\\\/|)nytiw",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"^http.*eldorado.estadao\\.com\\.br.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^esportefera\\.com\\.br",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePixelSmart"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(assine\\.estadao|assineestadao)|(qa-assine\\.estadao|assineestadao)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(app)|(\\?mobile_android=1)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"assine.estadao.com.br\/jornalistas"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"assine.estadao.com.br\/paywall-modal"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"assine.estadao.com.br\/100diasbolsonaro"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"assine.estadao.com.br"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"[^null|undefined]",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(estadao\\.com\\.br)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^politica\\.estadao",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)8104086_587($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"push_detectado"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"welcome-deny"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"welcome-accept"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^((paladar|jornaldocarro|link|pme)\\.estadao|esportefera)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"push_detectado_assinante"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"assinante-deny"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"assinante-accept"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"push_aceite_assinante"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"push_aceite_naoassinante"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(jornaldocarro.estadao.com.br)|(jornaldocarro.sydle.com)$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"\/blogs\/estadao-verifica\/boato-falso-afirma-que-bolsonaro-tirou-orcamento-do-vermelho-apos-20-anos\/"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"forcePvScroll"
    },{
      "function":"_cn",
      "arg0":["macro",92],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"70003019544"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"arte"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(|dev\\.|devl\\.)acesso\\.estadao\\.com\\.br",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/login(\\\/index|)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"^(www\\.|)br18\\.com\\.br$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"jquery_disponivel"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(br18\\.com\\.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^(\\\/mais-lidas\\\/|\\\/categorias\\\/|\\\/autores\\\/|\\\/$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^((devl-2016|devl-2015|qa2016|qa2015)\\.)?([a-z0-9](-?[a-zA-Z0-9])+)?(\\.estadao|esportefera)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(noticias|blogs|carros|motos|caminhao)\\\/([a-zA-Z0-9]+)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"^https\\:\\\/\\\/(www\\.estadao|estadao).com.br(\\\/|)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(www|estadao)\\.",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^paladar\\.estadao",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^emais\\.estadao",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^link\\.estadao",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^pme\\.estadao",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^esportefera",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^jornaldocarro\\.estadao\\.com\\.br",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(|(fanaticos|servicos|guia-de-compras|seminovos|ofertas-0km|carros|motos|videos|marcas|galerias|blogs|blog-do-boris|blog-do-hp|gerson-campos|onboard|placa-amarela|primeira-classe)(\\\/(carro-do-leitor|historia|manutencao|legislacao|defenda-se|recall|comparador-2|tabela-jc|noticias(|-motos)|antigos|avaliacao(|-motos)|comparativo|lancamentos(|-motos)|mercado|tecnologia)|)\\\/)(|#)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(\\\/(copa-do-mundo)\\\/(2018)|(\\\/ao-vivo\\\/futebol\\\/))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(devl-2016\\.|qa2016\\.|)esportes\\.estadao",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(assine\\.estadao|assineestadao|qa\\-assine\\.estadao)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"\/subscribe\/"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"success"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"app"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"mobile_android=1"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"\\\/([a-zA-Z0-9-]+)?\\\/?subscribe\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(qa-assine||assine\\.estadao|assineestadao)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"assine.estadao.com.br\/basometro"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(eldorado\\.estadao)|^(qaex-eldorado\\.estadao)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"eldorado.estadao.com.br"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"event_detect_paywall"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"addtocart"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"checkout_login"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"checkout_address"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"checkout_payment"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"\\\/eleicoes\\\/2018",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/viagem\/cvc"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/imoveis\/econ\/horizon\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/educacao\/uninove\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/imoveis\/tegra"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/imoveis\/exto\/"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"^https\\:\\\/\\\/arte\\.estadao\\.com\\.br\\\/politica\\\/eleicoes\\\/2018\\\/voce-conhece-seu-candidato",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"verticais.estadao.com.br\/imoveis\/fibra\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/imoveis\/mar\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/verticais.estadao.com.br\/viagem\/egp\/"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"delayEventosPaywall"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"economia.estadao.com.br\/seu-imovel"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^((|dev\\.|devl\\.)acesso\\.estadao\\.com\\.br)",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",39],
      "arg1":"https:\/\/meu.estadao.com.br\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(acesso|assine)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"debug_subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.estadao.com.br\/saindo?"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(|devl\\.|qa)meu\\.estadao\\.com\\.br",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(qa|dev|devl|devel|qaex)(|\\-)(|[0-9]+)(\\.|assine)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"pixel_facebook"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(br18\\.com\\.br\\\/relatorio\\\/fique-de-olho\\\/)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(e-books)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(arte\\.estadao)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"jotform-form"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)8104086_969($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(patrocinados\\.estadao\\.com\\.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(dedalus|takeda)\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/clube",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)8104086_984($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"open_chat_paywall"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"open_chat_assine"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)8104086_1036($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"assine"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.pageError"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"^\\\/(success((\\-com\\-cpf)|$))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"tracking\/fb\/tracking",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(assine\\.estadao\\.)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"\/basometro"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"acesso.estadao.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"validation"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"br18.com.br\/novidade"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"open_banner_lateral"
    }],
  "rules":[
    [["if",0],["add",14]],
    [["if",1,3],["unless",2],["add",14]],
    [["if",3,4],["add",14]],
    [["if",6],["unless",5],["add",14]],
    [["if",7,8],["add",14]],
    [["if",9],["add",14,46,67,72,83,85,99,106,111,124,126,135,13,159,6,170,57,58,59,60,61,62,64,66,70,71]],
    [["if",14],["unless",5],["add",15]],
    [["if",15],["add",15,29]],
    [["if",16],["add",15,134,1,2]],
    [["if",9,17,18],["add",16]],
    [["if",19,20,21],["add",17]],
    [["if",9,22],["add",18,47,48,144,157,158]],
    [["if",9,23],["add",19],["block",72]],
    [["if",24,25],["add",19]],
    [["if",24,26],["add",19]],
    [["if",9,27],["add",20]],
    [["if",9,28,29],["add",21]],
    [["if",9,30],["add",22]],
    [["if",9,31],["add",23]],
    [["if",32],["add",24,26,27,90,92,94,101,123,130,141,156,5,164]],
    [["if",9,33],["add",25,26,31,34,65,92,93,101,123,0,130,141,146,12,167],["block",46,72,122,124,125,126,135]],
    [["if",26],["unless",24],["add",28,30]],
    [["if",25],["unless",24],["add",28,30,115]],
    [["if",14,38],["add",29]],
    [["if",39,40,41],["add",32,97,128,142]],
    [["if",9,17,42],["add",33]],
    [["if",20,43,44],["add",35]],
    [["if",45],["add",36,45]],
    [["if",46,47],["add",37]],
    [["if",47,48],["add",38]],
    [["if",9,17],["unless",49],["add",39,73,87,122,132]],
    [["if",50],["add",40,45]],
    [["if",47,51],["add",41]],
    [["if",47,52],["add",42]],
    [["if",53],["add",43]],
    [["if",54],["add",44]],
    [["if",14,55],["add",49]],
    [["if",9,56],["add",50]],
    [["if",5,9],["add",51,166]],
    [["if",5,57],["add",51]],
    [["if",5,6],["add",51]],
    [["if",5,14],["add",52]],
    [["if",32,58],["add",53]],
    [["if",9,59],["add",54]],
    [["if",41],["add",55,56]],
    [["if",9,60],["add",63]],
    [["if",9],["unless",13],["add",68],["block",14]],
    [["if",9,61,62],["add",69]],
    [["if",64],["add",7]],
    [["if",9,65],["unless",66],["add",74,8]],
    [["if",9,67,68],["add",74,8,163]],
    [["if",41,69],["add",75]],
    [["if",9,70],["add",76]],
    [["if",9,17,71],["add",77]],
    [["if",9,17,72],["add",78]],
    [["if",9,17,73],["add",79]],
    [["if",17,74,75],["add",80]],
    [["if",17,75,76],["add",81]],
    [["if",9,63],["add",82],["block",72]],
    [["if",1,57],["add",84]],
    [["if",4,57],["add",84]],
    [["if",9,77],["unless",78],["add",86]],
    [["if",9,79,80],["add",87]],
    [["if",75,81],["unless",82,83,84,85],["add",88,102,129]],
    [["if",75,86,87],["add",89,91,110]],
    [["if",9,81],["unless",35,36,37,82,83,84,85,88],["add",95,140,161]],
    [["if",9,89],["add",96,131]],
    [["if",8,90],["add",96]],
    [["if",91],["add",98]],
    [["if",92],["add",100,112,4]],
    [["if",93],["add",103,11]],
    [["if",94],["add",104,11]],
    [["if",95],["add",105,11]],
    [["if",9,40,96],["add",107]],
    [["if",9,97],["add",108]],
    [["if",9,98],["add",109]],
    [["if",9,99],["add",113]],
    [["if",9,100],["add",114]],
    [["if",9,101],["add",116]],
    [["if",9,102],["add",117]],
    [["if",9,103],["add",118]],
    [["if",9,104],["add",119]],
    [["if",9,105],["add",120]],
    [["if",9,69],["add",121],["block",122]],
    [["if",22,106],["add",125]],
    [["if",9,107],["add",127]],
    [["if",9,108],["add",133,161]],
    [["if",9,109,110,111],["add",136]],
    [["if",9,110,111],["unless",112],["add",136]],
    [["if",9,33,34],["add",137],["block",26,95]],
    [["if",113,114],["add",138]],
    [["if",9,115],["add",139]],
    [["if",9,116],["add",143]],
    [["if",118],["add",145]],
    [["if",9,119],["add",147]],
    [["if",9,120,121],["add",9,10]],
    [["if",122,123,124],["add",148]],
    [["if",9,125,126],["add",149]],
    [["if",127,128,129],["add",150]],
    [["if",130],["add",151]],
    [["if",131],["add",152]],
    [["if",123,132],["add",153]],
    [["if",133,134],["add",154]],
    [["if",8,135],["add",155]],
    [["if",75,137,138],["add",160]],
    [["if",9,139,140],["add",3]],
    [["if",41,141],["add",162]],
    [["if",75,142],["add",165]],
    [["if",143],["add",168]],
    [["if",33,41,58],["add",169]],
    [["if",9,10],["block",14]],
    [["if",9,11,12],["block",14,25]],
    [["if",9,35,36,37],["block",26,95]],
    [["if",9,117],["block",8,157,158]],
    [["if",9,136],["block",157]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},f=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},pa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ra=function(a,b){for(var c=new qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},qa=function(){this.prefix="gtm.";this.values={}};qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};qa.prototype.get=function(a){return this.values[this.prefix+a]};qa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Da=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ea=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Fa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ga=function(a){if(null==a)return String(a);var b=Fa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ha=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ia=function(a){if(!a||"object"!=Ga(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ha(a,"constructor")&&!Ha(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ha(a,b)},u=function(a,b){var c=b||("array"==Ga(a)?[]:{}),d;for(d in a)if(Ha(a,d)){var e=a[d];"array"==Ga(e)?("array"!=Ga(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Ia(e)?(Ia(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Ja=[],Ka={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},La=function(a){return Ka[a]},Ma=/[\x00\x22\x26\x27\x3c\x3e]/g;Ja[3]=function(a){return String(a).replace(Ma,La)};var Qa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ra={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Va=function(a){return Ra[a]};Ja[7]=function(a){return String(a).replace(Qa,Va)};
Ja[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Qa,Va)+"'"}};var ab=/['()]/g,bb=function(a){return"%"+a.charCodeAt(0).toString(16)};Ja[12]=function(a){var b=
encodeURIComponent(String(a));ab.lastIndex=0;return ab.test(b)?b.replace(ab,bb):b};var cb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,db={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},eb=function(a){return db[a]};Ja[16]=function(a){return a};var hb;
var ib=[],jb=[],kb=[],lb=[],mb=[],nb={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!nb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?nb[c](e):hb(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},wb=
function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=nb[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Ac(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Ff(d,k))}catch(w){b.Yd&&b.Yd(w,Number(g)),d=!1}c[g]=!1;return d;case "map":d=
{};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ub(a[n],b,c);qb&&(m=m||p===qb.vb);d.push(p)}return qb&&m?qb.If(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.jg(a))return qb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ja[a[t]]&&(d=Ja[a[t]](d));return d;case "tag":var q=a[1];if(!lb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Kd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),bh:a("debug_mode_metadata"),ia:a("function"),Se:a("instance_name"),Te:a("live_only"),Ue:a("malware_disabled"),Ve:a("metadata"),eh:a("original_vendor_template_id"),We:a("once_per_event"),yd:a("once_per_load"),zd:a("setup_tags"),Ad:a("tag_id"),Bd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Db,Eb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.qf&&(l["fix_"+m]=!0),l.Ld=l.Ld||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,H:q.H,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,A){var z=y||x||A||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=z;r[w]=B.textContent||B.innerText||z});return{tagName:q[1],H:r,jb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Ld&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Xd=function(){return this[this.length-1]};v.Ec=function(B){var E=this.Xd();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.Ef=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.jb=q.test(B.tagName)||B.jb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Ec("TABLE")?(k="<TBODY>"+k,z()):l.oh&&r.test(E)&&v.Ef(E)?v.Ec(E)?x():(k="</"+B.tagName+">"+k,z()):B.jb||v.push(B)},endTag:function(B){v.Xd()?l.Sf&&!v.Ec(B.tagName)?x():v.pop():l.Sf&&(y(),z())}},z=function(){var B=k,E=w(y());k=B;if(E&&
A[E.type])A[E.type](E)};t=function(){z();return w(y())}}();return{append:function(q){k+=q},Eg:t,th:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},uh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.zh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.vh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ah=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.H){var t=m.H[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.jb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.nh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.vf=a.vf||!b[h]&&h;Db=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={cf:a,df:a,ef:a,ff:a,rf:a,sf:function(p){return p},done:a,error:function(p){throw p;},Ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,lb:v.defaultView||v.parentWindow,Aa:v,Ob:Db("",{qf:!0}),mc:[q],Oc:"",Pc:v.createElement(q.nodeName),hb:[],na:[]});p(this.Pc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.na,arguments);for(var q;!this.Gb&&this.na.length;)q=this.na.shift(),"function"===typeof q?this.zf(q):this.Zc(q)};t.prototype.zf=function(q){var r={type:"function",value:q.name||q.toString()};this.Lc(r);q.call(this.lb,this.Aa);this.$d(r)};
t.prototype.Zc=function(q){this.Ob.append(q);for(var r,v=[],w,y;(r=this.Ob.Eg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.$g(v);w&&this.Yf(r);y&&this.Zf(r)};t.prototype.$g=function(q){var r=this.wf(q);r.Dd&&(r.yc=this.Oc+r.Dd,this.Oc+=r.Ag,this.Pc.innerHTML=r.yc,this.Yg())};t.prototype.wf=function(q){var r=this.mc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.H){if(!/^noscript$/i.test(x.tagName)){var A=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.H.id&&"ps-style"!==x.H.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.jb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Bh:q,raw:v.join(""),Dd:w.join(""),Ag:y.join("")}};t.prototype.Yg=function(){for(var q,r=[this.Pc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.mc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.mc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Yf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.src=q.H.src||q.H.fh;q.src&&this.hb.length?this.Gb=q:this.Lc(q);var v=this;this.Zg(q,function(){v.$d(q)})};t.prototype.Zf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.type=q.H.type||q.H.gh||"text/css";this.ah(q);r&&this.write()};t.prototype.ah=function(q){var r=this.yf(q);this.hg(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Aa.createTextNode(q.content)))};t.prototype.yf=function(q){var r=this.Aa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.H,function(v,w){r.setAttribute(v,w)});return r};t.prototype.hg=function(q){this.Zc('<span id="ps-style"/>');var r=this.Aa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Lc=function(q){q.qg=this.na;this.na=[];this.hb.unshift(q)};t.prototype.$d=function(q){q!==this.hb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.hb.shift(),this.write.apply(this,q.qg),!this.hb.length&&this.Gb&&(this.Lc(this.Gb),this.Gb=null))};t.prototype.Zg=function(q,r){var v=this.xf(q),w=this.Ng(v),y=this.options.cf;q.src&&(v.src=q.src,this.Lg(v,w?y:function(){r();y()}));try{this.gg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.xf=function(q){var r=this.Aa.createElement(q.tagName);d(q.H,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.gg=function(q){this.Zc('<span id="ps-script"/>');
var r=this.Aa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Lg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.Ng=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.df(),w.stream=t.apply(null,w),y.ef())}function t(w,y,x){function A(F){F=x.sf(F);v.write(F);x.ff(F)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var z=w.ownerDocument,B={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=v.lb.onerror||a;v.lb.onerror=function(F,M,N){x.error({qh:F+
" - "+M+":"+N});E.apply(v.lb,arguments)};v.write(y,function(){e(z,B);v.lb.onerror=E;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ph?w[0]:w;var A=[w,y,x];w.ug={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.rf(A);r.push(A);v||p();return w.ug},{streams:{},sh:r,hh:n})}();Eb=l.postscribe}})();for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var C=window,D=document,Hb=navigator,Ib=D.currentScript&&D.currentScript.src,Jb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){C.setTimeout(a,0)},Rb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tb=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ub=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Vb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Yb:"event_callback",La:"event_timeout",V:"gtag.config",O:"allow_ad_personalization_signals",R:"cookie_expires",Ka:"cookie_update",va:"session_duration"};var jc=/[A-Z]+/,kc=/\s/,lc=function(a){if(ka(a)&&(a=wa(a),!kc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(jc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},nc=function(a){for(var b={},c=0;c<a.length;++c){var d=lc(a[c]);d&&(b[d.id]=d)}mc(b);var e=[];sa(b,function(g,h){e.push(h)});return e};
function mc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var oc={},pc=null,qc=Math.random();oc.m="GTM-M4LH38R";oc.zb="9p0";var rc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+oc.m+"&cv=430",yc={},zc={},Ac=function(){var a=pc.sequence||0;pc.sequence=a+1;return a};var Bc={},Dc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Ec=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Fc=function(){return"&tc="+lb.filter(function(a){return a}).length},Pc=function(){Gc&&(C.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.lg()||0>=Mc--?(Dc("GTM",1),Kc[Hc]=!0):(Lc.Gg(),Ob(Nc()),Ic[Hc]=!0,Oc=Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";var b=Ec("GTM"),c=Ec("TAGGING");return[Qc,Ic[a]?"":"&es=1",Rc[a],b?"&u="+b:"",c?"&ut="+c:"",Fc(),Jc,Oc,"&z=0"].join("")},Sc=function(){return[xc,"&v=3&t=t","&pid="+pa(),"&rv="+oc.zb].join("")},Tc="0.005000">
Math.random(),Qc=Sc(),Uc=function(){Qc=Sc()},Ic={},Jc="",Oc="",Hc=void 0,Rc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},Gg:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Mc=1E3,Vc=function(a,b){if(Tc&&!Kc[a]&&Hc!==a){Pc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Rc[a]="&e="+c+"&eid="+a;Gc||(Gc=C.setTimeout(Pc,500))}},Wc=function(a,b,c){if(Tc&&!Kc[a]&&b){a!==Hc&&(Pc(),Hc=a);var d=String(b[yb.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Jc=Jc?Jc+"."+e:"&tr="+e;Gc||(Gc=C.setTimeout(Pc,500));2022<=Nc().length&&Pc()}};var Xc={},Yc=new qa,Zc={},$c={},dd={name:"dataLayerEstadao",set:function(a,b){u(ad(a,b),Zc);bd()},get:function(a){return cd(a,2)},reset:function(){Yc=new qa;Zc={};bd()}},cd=function(a,b){if(2!=b){var c=Yc.get(a);if(Tc){var d=ed(a);c!==d&&Dc("GTM",5)}return c}return ed(a)},ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:gd(d)},gd=function(a){for(var b=Zc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var jd=function(a,b){$c.hasOwnProperty(a)||(Yc.set(a,b),u(ad(a,b),Zc),bd())},ad=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},bd=function(a){sa($c,function(b,c){Yc.set(b,c);u(ad(b,void 0),Zc);u(ad(b,c),Zc);a&&delete $c[b]})},kd=function(a,b,c){Xc[a]=Xc[a]||{};var d=1!==c?ed(b):Yc.get(b);"array"===Ga(d)||"object"===Ga(d)?Xc[a][b]=u(d):Xc[a][b]=d},ld=function(a,b){if(Xc[a])return Xc[a][b]};var md=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===nd()||d||"http:"!=C.location.protocol?a:b)+c},nd=function(){var a=Mb(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Dd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ed={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Fd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Hd=function(a){var b=cd("gtm.whitelist");b&&Dc("GTM",9);var c=b&&Ea(va(b),Dd),d=cd("gtm.blacklist");d||(d=cd("tagTypeBlacklist"))&&Dc("GTM",3);
d?Dc("GTM",8):d=[];Gd()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=f(va(d),"google")&&Dc("GTM",2);var e=d&&Ea(va(d),Ed),g={};return function(h){var k=h&&h[yb.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>f(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
f(c,l[p])){Dc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=f(e,k);if(q)t=q;else{var r=ra(e,l||[]);r&&Dc("GTM",10);t=r}}var v=!m||t;v||!(0<=f(l,"sandboxedScripts"))||c&&-1!==f(c,"sandboxedScripts")||(v=ra(e,Fd));return g[k]=v}},Gd=function(){return Cd.test(C.location&&C.location.hostname)};var Id={Ff:function(a,b){b[yb.cd]&&"string"===typeof a&&(a=1==b[yb.cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.ed)&&null===a&&(a=b[yb.ed]);b.hasOwnProperty(yb.gd)&&void 0===a&&(a=b[yb.gd]);b.hasOwnProperty(yb.fd)&&!0===a&&(a=b[yb.fd]);b.hasOwnProperty(yb.dd)&&!1===a&&(a=b[yb.dd]);return a}};var Jd={active:!0,isWhitelisted:function(){return!0}},Kd=function(a){var b=pc.zones;!b&&a&&(b=pc.zones=a());return b};var Ld=!1,Md=0,Nd=[];function Od(a){if(!Ld){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ld=!0;for(var e=0;e<Nd.length;e++)G(Nd[e])}Nd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Pd(){if(!Ld&&140>Md){Md++;try{D.documentElement.doScroll("left"),Od()}catch(a){C.setTimeout(Pd,50)}}}var Qd=function(a){Ld?a():Nd.push(a)};var Rd={},Sd={},Td=function(a,b,c,d){if(!Sd[a]||rc[b]||"__zone"===b)return-1;var e={};Ia(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Sd[a].tags.push(e)-1},Ud=function(a,b,c,d){if(Sd[a]){var e=Sd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Vd(a){for(var b=Rd[a]||[],c=0;c<b.length;c++)b[c]();Rd[a]={push:function(d){d(oc.m,Sd[a])}}}
var Yd=function(a,b,c){Sd[a]={tags:[]};ja(b)&&Wd(a,b);c&&C.setTimeout(function(){return Vd(a)},Number(c));return Xd(a)},Wd=function(a,b){Rd[a]=Rd[a]||[];Rd[a].push(za(function(){return G(function(){b(oc.m,Sd[a])})}))};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Vd(a)})},nf:function(){d=!0;b>=c&&Vd(a)}}};var Zd=function(){function a(d){return!la(d)||0>d?0:d}if(!pc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=la(dd.get("gtm.start"))?dd.get("gtm.start"):0;pc._li={cst:a(c-b),cbt:a(vc-b)}}};var ce=!1,de=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},ee=!1;
var fe=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Dc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}Zd();return C[b]},ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=de();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ie=function(){},he=function(){return C.GoogleAnalyticsObject||"ga"};var ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var le=/:[0-9]+$/,me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ne(a.protocol)||ne(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(le,"").toLowerCase());var g=b,h,k=ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Dc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=f(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ne=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
qe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Dc("TAGGING",1),c="/"+c);var d=b.hostname.replace(le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var we=function(a){};function ve(a,b){a.containerId=oc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function xe(a,b,c,d){var e=lb[a],g=ye(a,b,c,d);if(!g)return null;var h=ub(e[yb.zd],c,[]);if(h&&h.length){var k=h[0];g=xe(k.index,{J:g,T:1===k.Kd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ye(a,b,c,d){function e(){if(g[yb.Ue])k();else{var w=vb(g,c,[]),y=Td(c.id,String(g[yb.ia]),Number(g[yb.Ad]),w[yb.Ve]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-z;Wc(c.id,lb[a],"5");Ud(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-z;Wc(c.id,lb[a],"6");Ud(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Wc(c.id,g,"1");var A=function(B){var E=xa()-z;we(B);Wc(c.id,g,"7");Ud(c.id,y,"exception",E);x||(x=!0,k())};var z=xa();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.T,l=b.terminate;if(c.Ac(g))return null;var m=ub(g[yb.Bd],c,[]);if(m&&m.length){var n=m[0],p=xe(n.index,{J:h,T:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Kd?l:p}if(g[yb.yd]||g[yb.We]){var t=g[yb.yd]?mb:c.Pg,q=h,r=k;if(!t[a]){e=za(e);var v=ze(a,t,e);h=v.J;k=v.T}return function(){t[a](q,r)}}return e}
function ze(a,b,c){var d=[],e=[];b[a]=Ae(d,e,c);return{J:function(){b[a]=Be;for(var g=0;g<d.length;g++)d[g]()},T:function(){b[a]=Ce;for(var g=0;g<e.length;g++)e[g]()}}}function Ae(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Be(a){a()}function Ce(a,b){b()};var Fe=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.cb[d]){var e=lb[d];var g=b.add();try{var h=xe(d,{J:g,T:g,terminate:g},a,d);h?c.push({oe:d,de:wb(e),Qf:h}):(De(d,a),g())}catch(l){g()}}b.nf();c.sort(Ee);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Ee(a,b){var c,d=b.de,e=a.de;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.oe,k=b.oe;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!Tc)return;var c=function(d){var e=b.Ac(lb[d])?"3":"4",g=ub(lb[d][yb.zd],b,[]);g&&g.length&&c(g[0].index);Wc(b.id,lb[d],e);var h=ub(lb[d][yb.Bd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ge=!1,He=function(a,b,c,d,e){if("gtm.js"==b){if(Ge)return!1;Ge=!0}Vc(a,b);var g=Yd(a,d,e);kd(a,"event",1);kd(a,"ecommerce",1);kd(a,"gtm");var h={id:a,name:b,Ac:Hd(c),cb:[],Pg:[],Yd:function(n){Dc("GTM",6);we(n)}};h.cb=Cb(h);var k=Fe(h,g);
if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=lb[l];if(m&&!rc[String(m[yb.ia])])return!0}return!1};var Je=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.fb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.fb[h])return g.fb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Ke={},Le=["G"];Ke.pe="";var Me=Ke.pe.split(",");function Ne(){var a=pc;return a.gcq=a.gcq||new Oe}
var Pe=function(a,b){Ne().register(a,b,void 0)},Qe=function(a,b,c,d){Ne().push("event",[b,a],c,d)},Re=function(a,b){Ne().push("config",[a],b)},Se={},Te=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.fb={};this.ee=null;this.Ud=!1},Ue=function(a,b,c,d,e){this.type=a;this.Ug=b;this.N=c||"";this.Cb=d;this.defer=e},Oe=function(){this.Gd={};this.Pd={};this.Xa=[]},Ve=function(a,b){var c=lc(b);return a.Gd[c.containerId]=a.Gd[c.containerId]||new Te},We=function(a,b,c,d){if(d.N){var e=
Ve(a,d.N),g=e.ee;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.fb),n=u(a.Pd),p=new Je(h,k,l,m,n);try{g(b,d.Ug,p)}catch(t){}}}};Oe.prototype.register=function(a,b,c){if(3!==Ve(this,a).status){Ve(this,a).ee=b;Ve(this,a).status=3;c&&(Ve(this,a).fb=c);var d=lc(a),e=Se[d.containerId];if(void 0!==e){var g=cd("gtm.uniqueEventId"),h=d.prefix,k=xa()-e;if(Tc&&!Kc[g]){g!==Hc&&(Pc(),Hc=g);var l=""+h+Math.floor(k);Oc=Oc?Oc+"."+l:"&cl="+l}delete Se[d.containerId]}this.flush()}};
Oe.prototype.push=function(a,b,c,d){var e=Math.floor(xa()/1E3);if(c){var g=lc(c),h;if(h=g){var k;if(k=1===Ve(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ve(this,c).status=2,this.push("require",[],g.containerId),Se[g.containerId]=xa(),!md())){var m=encodeURIComponent(g.containerId);Lb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayerEstadao&cx=c"))}}this.Xa.push(new Ue(a,e,c,b,d));d||this.flush()};
Oe.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ve(this,c.N).status&&!a)return;break;case "set":sa(c.Cb[0],function(l,m){b.Pd[l]=m});break;case "config":var d=c.Cb[0],e=!!d[H.tb];delete d[H.tb];var g=Ve(this,c.N),h=lc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.Ud&&e||We(this,H.V,d,c);g.Ud=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;case "event":We(this,
c.Cb[1],c.Cb[0],c)}this.Xa.shift()}};var Xe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},af=function(a,b,c,d){var e=Ye(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ze(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Ze(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function bf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Xe(b,e).indexOf(c)}
var ef=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=cf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!df(y,t)&&bf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!df(p,t)&&bf(m,a,l)}return k};function Ze(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Ye(a,b){for(var c=[],d=Xe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var ff=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i,df=function(a,b){return gf.test(document.location.hostname)||"/"===b&&ff.test(a)},cf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;gf.test(e)||ff.test(e)||a.push("none");return a};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.Yb]&&(c.eventCallback=b[H.Yb]),b[H.La]&&(c.eventTimeout=b[H.La]));return c};
var tf={config:function(a){},event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ia(a[2])&&void 0!=a[2])return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).ih(a[1],a[2])},set:function(a){var b;2==a.length&&Ia(a[1])?b=u(a[1]):3==a.length&&ka(a[1])&&(b={},Ia(a[2])||ma(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},uf={policy:!0};var wf=function(a){return vf?D.querySelectorAll(a):null},xf=function(a,b){if(!vf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yf=!1;if(D.querySelectorAll)try{var zf=D.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==D.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=function(a){if(Ff(a))return a;this.Xg=a};Gf.prototype.Xf=function(){return this.Xg};var Ff=function(a){return!a||"object"!==Ga(a)||Ia(a)?!1:"getUntrustedUpdateValue"in a};Gf.prototype.getUntrustedUpdateValue=Gf.prototype.Xf;var Hf=!1,If=[];function Jf(){if(!Hf){Hf=!0;for(var a=0;a<If.length;a++)G(If[a])}}var Kf=function(a){Hf?G(a):If.push(a)};var Lf=[],Mf=!1,Nf=function(a){return C["dataLayerEstadao"].push(a)},Of=function(a){var b=pc["dataLayerEstadao"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Qf=function(a){var b=a._clear;sa(a,function(g,h){"_clear"!==g&&(b&&jd(g,void 0),jd(g,h))});uc||(uc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,jd("gtm.uniqueEventId",d));wc=c;var e=Pf(a);
wc=null;switch(c){case "gtm.init":Dc("GTM",19),e&&Dc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=pc.zones;d=e?e.checkState(oc.m,c):Jd;return d.active?He(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Zc.eventModel;bd();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=cd(h,1);if(ma(k)||Ia(k))k=u(k);$c[h]=k}}try{if(ja(b))try{b.call(dd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=cd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&bd(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=oc.m,c=C["dataLayerEstadao"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Jb("dataLayerEstadao",[]),b=Jb("google_tag_manager",{});b=b["dataLayerEstadao"]=b["dataLayerEstadao"]||{};Qd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<pc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Dc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.vb=new String("undefined");
var qg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pg.vb?b:a[d]);return c.join("")}};qg.prototype.toString=function(){return this.resolve("undefined")};qg.prototype.valueOf=qg.prototype.toString;pg.Ye=qg;pg.jc={};pg.If=function(a){return new qg(a)};var rg={};pg.Hg=function(a,b){var c=Ac();rg[c]=[a,b];return c};pg.Hd=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pg.vg=function(a){if(a===pg.vb)return a;var b=Ac();pg.jc[b]=a;return'google_tag_manager["'+oc.m+'"].macro('+b+")"};pg.ng=function(a,b,c){a instanceof pg.Ye&&(a=a.resolve(pg.Hg(b,c)),b=ia);return{yc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=function(a){pc.hasOwnProperty("autoEventsSettings")||(pc.autoEventsSettings={});var b=pc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ug=function(a,b,c){tg(a)[b]=c},vg=function(a,b,c,d){var e=tg(a),g=ya(e,b,d);e[b]=c(g)},wg=function(a,b,c){var d=tg(a);return ya(d,b,c)};var xg=function(){for(var a=Hb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return af(a,e,zg(c),d)},Bg=function(a,b,c,d){var e=""+yg(c),g=zg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},yg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},zg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);ef(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}function Eg(a){return(a||"_gcl")+"_au"};var Ig=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Uf:k[2]}))}return g};function Jg(){for(var a=Kg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kg=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=function(){var a=Rg,b=Sg,c=Tg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Pb(D,"mousedown",d);Pb(D,"keyup",d);Pb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Tg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ng(String(d))))}var e=b.join("*");return["1",$g(e),e].join("*")},$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=qe(C.location.href),c=b.search.replace("?",""),d=me(c,"_gl",!0)||"";a.query=bh(d)||{};var e=pe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ca(c,d.query),Ca(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Da(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);ke.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Da(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);ke.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=pe(qe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=function(){var a=D.location.hostname,b=Wg.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xg,""),l=e.replace(Xg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},jh=function(a,b){return!1===a?!1:a||b||ih()};var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ph(a){return a&&"string"==typeof a&&a.match(lh)?a:"_gcl"}var rh=function(){var a=qe(C.location.href),b=pe(a,"query",!1,void 0,"gclid"),c=pe(a,"query",!1,void 0,"gclsrc"),d=pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||me(e,"gclid",void 0);c=c||me(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&ef(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Hc?7776E3:b.Hc;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),xa()),t;b:{for(var q=p,r=Xe(m,D.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||ef(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=function(a,b){var c=oh[a];if(void 0!==c)return b+c},vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=Xe(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=function(a){return a.filter(function(b){return nh.test(b)})},Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);sa(d,function(g,h){var k=Xe(c+h,D.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=qe(C.location.href),c=pe(b,"host",!1);if(c&&c.match(Bh)){var d=pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(D.cookie){var l=Xe(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===f(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];sa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=pc.joined_au=pc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===oc.zb.length)Gh="g";else{var Hh="G";Gh=Hh}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=oc.m.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===oc.zb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+oc.zb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!na(Ph,function(c){return c===b})||"input"===b&&na(Qh,function(c){return c===a.type.toLowerCase()})?!1:!0},Sh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):Ub(a,["form"],100)},Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!C.MutationObserver,Xh=void 0,Yh=function(a){if(!Xh){var b=function(){var c=D.body;if(c)if(Wh)(new MutationObserver(function(){for(var e=0;e<Xh.length;e++)G(Xh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pb(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Xh.length;e++)G(Xh[e])}))})}};Xh=[];D.body?b():G(b)}Xh.push(a)};
var pi=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Dc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},qi=function(a){var b=pi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},ri=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};
var yi=function(a,b,c){function d(){var h=a();g+=e?(xa()-e)*h.playbackRate/1E3:0;e=xa()}var e=0,g=0;return{Ib:function(h,k,l){var m=a(),n=m.Id,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Id*k):Math.round(m.Jf),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=D.hidden?!1:.5<=qi(c);d();var r=sg(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(p);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;Nf(r)},Jg:function(){e=xa()},kc:function(){d()}}};var zi=C.clearTimeout,Ai=C.setTimeout,K=function(a,b,c){if(md()){b&&G(b)}else return Lb(a,b,c)},Bi=function(){return C.location.href},Ci=function(a){return pe(qe(a),"fragment")},Di=function(a){return oe(qe(a))},Ei=null;
var Fi=function(a,b){return cd(a,b||2)},Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Ii=function(a,b,c){return Xe(a,b,void 0===c?!0:!!c)},Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Hc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=function(a,b,c,d,e){
yh(a,b,c,d,e);},Mi=function(a,b){if(md()){b&&G(b)}else Nb(a,b)},Ni=function(a){return!!wg(a,"init",!1)},Oi=function(a){ug(a,"init",!0)},Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayerEstadao";b&&sa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Qi=function(a,b){var c=a[b];
return c};
var Si=pg.ng;var Ti=new qa,Ui=function(a,b){function c(h){var k=qe(h),l=pe(k,"protocol"),m=pe(k,"host",!0),n=pe(k,"port"),p=pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=f(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var $i={},aj=encodeURI,X=encodeURIComponent,bj=Ob;var cj=function(a,b){if(!a)return!1;var c=pe(qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var dj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};$i.kg=function(){var a=!1;return a};var Ej=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||pa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Xe("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var uk=function(a,b,c){Qe(b,c,a)},vk=function(a,b,c){Qe(b,c,a,!0)},xk=function(a,b){},wk=function(a,b){},
yk=function(a){return"_"===a.charAt(0)},zk=function(a){sa(a,function(c){yk(c)&&delete a[c]});var b=a[H.ub]||{};sa(b,function(c){yk(c)&&delete b[c]})};var Z={a:{}};

Z.a.veip=["nonGooglePixels"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else if(cj(c.vtp_pixelUrl,["veinteractive.com","ve-interactive.cn"]))try{bj(c.vtp_pixelUrl,c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure),a=!0}catch(d){G(c.vtp_gtmOnFailure)}else G(c.vtp_gtmOnFailure)};Z.__veip=b;Z.__veip.b="veip";Z.__veip.g=!0;Z.__veip.priorityOverride=0}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=D.getElementById(a.vtp_elementId);b&&(c=d?Rb(b,d):Sb(b));return wa(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ld(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Fi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?pe(qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Di(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sg(c,"gtm.click");Gi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ni("cl")){var c=W("document");Pb(c,"click",a,!0);Oi("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ii(a.vtp_name,Fi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return pa(a.vtp_min,a.vtp_max)})}();
Z.a.tg=["google"],function(){function a(k){h.push(k);1<h.length||G(function(){var l=h.join(",");h=[];Gi({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){G(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var p=e[n];p?b(n,p):g.push(n)}else{d[l]=m;for(var t=0,q;q=m[t];t++)e[q]=l;for(var r=0;r<g.length;r++)b(g[r],l)}}var d={},e={},g=[],h=[];Z.__tg=c;Z.__tg.b="tg";Z.__tg.g=!0;Z.__tg.priorityOverride=0}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Fi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;u(dj(n.vtp_fieldsToSet,"fieldName","value"),g);u(dj(n.vtp_contentGroup,"index","group"),h);u(dj(n.vtp_dimension,"index","dimension"),k);u(dj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=u(n);d=u(d,p)}u(dj(d.vtp_fieldsToSet,"fieldName","value"),g);u(dj(d.vtp_contentGroup,
"index","group"),h);u(dj(d.vtp_dimension,"index","dimension"),k);u(dj(d.vtp_metric,"index","metric"),l);var t=fe(d.vtp_functionName);if(ja(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ac(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(S){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(S,O){return void 0===O?O:S(O)},A=function(S,O){if(O)for(var oa in O)O.hasOwnProperty(oa)&&y("set",S+oa,O[oa])},z=function(){
var S=function(Jk,Ih,Kk){if(!Ia(Ih))return!1;for(var Cc=ya(Object(Ih),Kk,[]),$e=0;Cc&&$e<Cc.length;$e++)y(Jk,Cc[$e]);return!!Cc&&0<Cc.length},O;if(d.vtp_useEcommerceDataLayer){var oa=!1;oa||(O=Fi("ecommerce",1))}else d.vtp_ecommerceMacroData&&(O=d.vtp_ecommerceMacroData.ecommerce);if(!Ia(O))return;O=Object(O);var Sa=ya(g,"currencyCode",O.currencyCode);
void 0!==Sa&&y("set","&cu",Sa);S("ec:addImpression",O,"impressions");if(S("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){y("ec:setAction","promo_click",O.promoClick.actionField);return}for(var Aa="detail checkout checkout_option click add remove purchase refund".split(" "),Ta="refund purchase remove checkout checkout_option add click detail".split(" "),Ua=0;Ua<Aa.length;Ua++){var gb=O[Aa[Ua]];if(gb){S("ec:addProduct",gb,"products");y("ec:setAction",Aa[Ua],gb.actionField);
if(Tc)for(var ob=0;ob<Ta.length;ob++){var Zb=O[Ta[ob]];if(Zb){Zb!==gb&&Dc("GTM",13);break}}break}}},B=function(S,O,oa){var Sa=0;if(S)for(var Aa in S)if(S.hasOwnProperty(Aa)&&(oa&&v[Aa]||!oa&&void 0===v[Aa])){var Ta=w[Aa]?ua(S[Aa]):S[Aa];"anonymizeIp"!=Aa||Ta||(Ta=void 0);O[Aa]=Ta;Sa++}return Sa},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Kh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(S,O){void 0!==d[O]&&y("set",S,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var S=g&&g.hitCallback;ja(S)&&S();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ta,d.vtp_eventValue||
e.value)};B(M,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var da="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:da})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ea=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ea="internal/"+ea);a=!0;var Ba=J("https:","http:","//www.google-analytics.com/"+ea,g&&g.forceSSL);K(Ba,function(){var S=de();S&&S.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0;Z.__jel.priorityOverride=0})(function(a){if(!Ni("jel")){var b=W("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Gi({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Oi("jel")}G(a.vtp_gtmOnSuccess)})}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return D.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<t.length;x++)if(0<=w.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!r){var x=W("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.Xc)&&(w.setAttribute("data-gtm-yt-inspected-"+y.Xc,"true"),d(w,y.Md))){w.id||(w.id=a());var x=W("YT"),A=x.get(w.id);A||(A=new x.Player(w.id));var z=h(A,y),B={},E;for(E in z)B.Ha=E,z.hasOwnProperty(B.Ha)&&A.addEventListener(B.Ha,function(F){return function(M){return z[F.Ha](M.data)}}(B)),B={Ha:B.Ha}}}
function g(w){G(function(){function y(){for(var A=x.getElementsByTagName("iframe"),z=A.length,B=0;B<z;B++)e(A[B],w)}var x=W("document");y();Yh(y)})}function h(w,y){var x,A;function z(){P=yi(function(){return{url:Q,title:V,Id:I,Jf:w.getCurrentTime(),playbackRate:Y}},y.Xc,w.getIframe());I=0;V=Q="";Y=1;return B}function B(S){switch(S){case q.PLAYING:I=Math.round(w.getDuration());Q=w.getVideoUrl();if(w.getVideoData){var O=w.getVideoData();V=O?O.title:""}Y=w.getPlaybackRate();y.Cf?P.Ib("start"):P.kc();
L=m(y.yg,y.xg,w.getDuration());return E(S);default:return B}}function E(){da=w.getCurrentTime();ea=(new Date).getTime();P.Jg();R();return F}function F(S){var O;switch(S){case q.ENDED:return N(S);case q.PAUSED:O="pause";case q.BUFFERING:var oa=w.getCurrentTime()-da;O=1<Math.abs(((new Date).getTime()-ea)/1E3*Y-oa)?"seek":O||"buffering";w.getCurrentTime()&&(y.Bf?P.Ib(O):P.kc());T();return M;case q.UNSTARTED:return z(S);default:return F}}function M(S){switch(S){case q.ENDED:return N(S);case q.PLAYING:return E(S);
case q.UNSTARTED:return z(S);default:return M}}function N(){for(;A;){var S=x;zi(A);S()}y.Af&&P.Ib("complete",1);return z(q.UNSTARTED)}function U(){}function T(){A&&(zi(A),A=0,x=U)}function R(){if(L.length&&0!==Y){var S=-1,O;do{O=L[0];if(O.ma>w.getDuration())return;S=(O.ma-w.getCurrentTime())/Y;if(0>S&&(L.shift(),0===L.length))return}while(0>S);x=function(){A=0;x=U;0<L.length&&L[0].ma===O.ma&&(L.shift(),P.Ib("progress",O.ce,O.ke));R()};A=Ai(x,1E3*S)}}var P,L=[],I,Q,V,Y,da,ea,Ba=z(q.UNSTARTED);A=0;
x=U;return{onStateChange:function(S){Ba=Ba(S)},onPlaybackRateChange:function(S){da=w.getCurrentTime();ea=(new Date).getTime();P.kc();Y=S;T();R()}}}function k(w){for(var y=w.split(","),x=y.length,A=[],z=0;z<x;z++){var B=parseInt(y[z],10);isNaN(B)||100<B||0>B||A.push(B/100)}A.sort(function(E,F){return E-F});return A}function l(w){for(var y=w.split(","),x=y.length,A=[],z=0;z<x;z++){var B=parseInt(y[z],10);isNaN(B)||0>B||A.push(B)}A.sort(function(E,F){return E-F});return A}function m(w,y,x){var A=w.map(function(E){return{ma:E,
ke:E,ce:void 0}});if(!y.length)return A;var z=y.map(function(E){return{ma:E*x,ke:void 0,ce:E}});if(!A.length)return z;var B=A.concat(z);B.sort(function(E,F){return E.ma-F.ma});return B}function n(w){w.vtp_triggerStartOption?p(w):Qd(function(){p(w)})}function p(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,A=!!w.vtp_capturePause,z=k(w.vtp_progressThresholdsPercent+""),B=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||A||z.length||B.length){var F={Cf:y,Af:x,Bf:A,
xg:z,yg:B,Md:E,Xc:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=W("YT"),N=function(){g(F)};G(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(N);else{var U=W("onYouTubeIframeAPIReady");Hi("onYouTubeIframeAPIReady",function(){U&&U();N()});G(function(){for(var T=W("document"),R=T.getElementsByTagName("script"),P=R.length,L=0;L<P;L++){var I=R[L].getAttribute("src");if(b(I,"iframe_api")||b(I,"player_api"))return}for(var Q=T.getElementsByTagName("iframe"),V=Q.length,Y=0;Y<V;Y++)if(!v&&d(Q[Y],F.Md)){K("https://www.youtube.com/iframe_api");
v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();
Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;u(dj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=u(e);c=u(c,g)||{}}u(dj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=fe(c.vtp_functionName);if(ja(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Ac(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(y,x,A){var z=0,B;for(B in y)if(y.hasOwnProperty(B)&&
(A&&m[B]||!A&&void 0===m[B])){var E=n[B]?ua(y[B]):y[B];"anonymizeIp"!==B||E||(E=void 0);x[B]=E;z++}return z},t={name:l};p(d,t,!0);var q={"&gtm":Kh(!0)};p(d,q,!1);var r=encodeURI(J("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayerEstadao"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,K(r,function(){return de().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayerEstadao"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else G(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();

Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Hi("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Hi("_hjSettings",{hjid:b,hjsv:5});K("//static.hotjar.com/c/hotjar-"+X(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[yb.ia]=null;c[yb.Se]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Bi()}function b(g,h){Pb(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Di(l),D:Ci(l)})})}function c(g,h){Pb(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Di(l),D:Ci(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ja(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Di(Bi()),
D:Ci(Bi())})}}catch(n){}}function e(){var g={source:null,state:W("history").state||null,url:Di(Bi()),D:Ci(Bi())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Gi(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Ni("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Oi("hl")}G(g.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Zd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Kh()},m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Fi(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var z="DATA_LAYER"==
v?Fi(x):k[y];A(z)&&p(w,z)}},q="//www.googleadservices.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc",
"vtp_awNewCustomer","new_customer",ca),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,K(q,g(),e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;Pb(e,"click",function(k){var l=k.target;if(l&&(l=Ub(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Rb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:D.getElementById(l.form):Ub(l,["form"],100))&&g.store(m,l)}},!1);Pb(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return na(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=wg("fsl",h?"nv.mwt":"mwt",0),n;n=h?wg("fsl","nv.ids",[]):wg("fsl","ids",[]);if(!n.length)return!0;var p=sg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!Gi(p,Of(g),m))return!1}else Gi(p,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};vg("fsl","mwt",m,0);h||vg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};vg("fsl","ids",n,[]);h||vg("fsl","nv.ids",n,[]);Ni("fsl")||(a(),Oi("fsl"));G(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=dj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return pg.vb})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var b=function(d,e,g){Qd(function(){var h,k=pc;k.postscribe||(k.postscribe=Eb);h=k.postscribe;var l={done:e},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.yc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,Tb(h),k,e)()}else Ai(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();
Z.a.vei=["nonGoogleScripts"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else if(cj(c.vtp_jsUrl,["veinteractive.com","ve-interactive.cn"]))try{K(c.vtp_jsUrl,c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure),a=!0}catch(d){G(c.vtp_gtmOnFailure)}else G(c.vtp_gtmOnFailure)};Z.__vei=b;Z.__vei.b="vei";Z.__vei.g=!0;Z.__vei.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();





var Ik={};Ik.macro=function(a){if(pg.jc.hasOwnProperty(a))return pg.jc[a]},Ik.onHtmlSuccess=pg.Hd(!0),Ik.onHtmlFailure=pg.Hd(!1);Ik.dataLayer=dd;Ik.callback=function(a){yc.hasOwnProperty(a)&&ja(yc[a])&&yc[a]();delete yc[a]};Ik.tf=function(){pc[oc.m]=Ik;Ca(zc,Z.a);qb=qb||pg;rb=Id};
Ik.fg=function(){kh.gtm_3pds=!0;pc=C.google_tag_manager=C.google_tag_manager||{};if(pc[oc.m]){var a=pc.zones;a&&a.unregisterChild(oc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(p)}nb=Z;pb=Vi;Ik.tf();Tf();Ld=!1;Md=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Od();else{Pb(D,"DOMContentLoaded",Od);Pb(D,"readystatechange",Od);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Pd()}Pb(C,"load",Od)}Hf=!1;"complete"===D.readyState?Jf():
Pb(C,"load",Jf);a:{if(!Tc)break a;C.setInterval(Uc,864E5);}
vc=(new Date).getTime();}};(0,Ik.fg)();

})()
