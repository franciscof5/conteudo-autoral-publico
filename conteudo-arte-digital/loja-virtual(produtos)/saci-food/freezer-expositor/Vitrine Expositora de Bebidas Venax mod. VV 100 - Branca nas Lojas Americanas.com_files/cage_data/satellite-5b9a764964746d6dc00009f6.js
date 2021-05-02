_satellite.pushAsyncScript(function(event, target, $variables){
  try {
  
  	var gclid = cage_getParam('gclid');
		
  	if(gclid)
      document.location.hash = 'gclid=' + gclid;
    //Marca
    var brand_id    = 0
    var brand_label = ""

    //ACOM
    if(_satellite.getVar("coreBrandName") == "ACOM"){
        brand_id    = 1039881882
        brand_label = "FOnYCLSDuwgQmq3t7wM"
    }
    //SUBA
    else if(_satellite.getVar("coreBrandName") == "SUBA"){
        brand_id    = 1062580143
        brand_label = "AsTqCJWD1AgQr9_W-gM"
    }
    //SHOP
    else if(_satellite.getVar("coreBrandName") == "SHOP"){
        brand_id    = 1050952254
        brand_label = "9X47CJjnlAkQvoSR9QM"
    }
    //SOUB
    else if(_satellite.getVar("coreBrandName") == "SOUB"){
        brand_id    = 975063433
        brand_label = "QbpGCLSnhVcQiZP50AM"
    }

    //Carrega script do Google
    var googleAdwords = document.createElement('script');
    googleAdwords.type = 'text/javascript';
    googleAdwords.async = true;
    googleAdwords.src = 'https://www.googletagmanager.com/gtag/js?id=AW-'+ brand_id;

    document.getElementsByTagName('body')[0].appendChild(googleAdwords);

    //Cria datalayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
 
    gtag('js', new Date());
    gtag('config', 'AW-'+brand_id);
    gtag('config', _satellite.getVar('getGAUA'));
  	gtag('config', 'DC-4662445');
  	gtag('config', 'DC-4945378');
} catch (e) {
}
});
