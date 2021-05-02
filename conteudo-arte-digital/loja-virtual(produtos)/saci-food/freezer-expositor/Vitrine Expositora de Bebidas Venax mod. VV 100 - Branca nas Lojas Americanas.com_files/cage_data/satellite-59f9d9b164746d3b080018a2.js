_satellite.pushAsyncScript(function(event, target, $variables){
  try {
    
    var listIdsCoop = _satellite.getVar("getIdsGoogleDCMCoop");
    var epar = _satellite.readCookie("b2wEPar").toLowerCase();
    var idCoop = undefined;
    var idBrand = "";
    
    //ACOM
        if(_satellite.getVar("coreBrandName") == "ACOM"){
            idBrand   = "b2wam0"
        }
    //SUBA
        else if(_satellite.getVar("coreBrandName") == "SUBA"){
            idBrand   = "b2wsu0"
        }
    //SHOP
        else if(_satellite.getVar("coreBrandName") == "SHOP"){
            idBrand   = "b2wsh00"
        }
    
    //checando se tem uma chave do objeto que tem relação com o epar atual
    for(var key in listIdsCoop) {
        if (epar.startsWith(key)) {
            idCoop = listIdsCoop[key];
            break;
        }
    }

    //se houver o id do parceiro, dispara a tag
    if(idCoop){

        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var src_google_dcm_coop_iframe = "//" + idCoop 
            + ".fls.doubleclick.net/activityi;src=" + idCoop
            + ";type=b2wr30;cat=" + idBrand
            + ";u1="+ _satellite.getVar("getProductPageID")
            + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;" 
            + "ord=" + a + "?";
    
        //Criação do Iframe
        var google_dcm_coop_iframe = document.createElement("iframe");
        var google_dcm_coop_body = document.getElementsByTagName('body')[0]
        google_dcm_coop_iframe.src = src_google_dcm_coop_iframe;
        google_dcm_coop_iframe.width = '1';
        google_dcm_coop_iframe.height = '1';
        google_dcm_coop_iframe.setAttribute("frameborder", "0");
        google_dcm_coop_iframe.setAttribute("style", "display:none");
        google_dcm_coop_body.appendChild(google_dcm_coop_iframe);

    }
} catch (e) {}
});
