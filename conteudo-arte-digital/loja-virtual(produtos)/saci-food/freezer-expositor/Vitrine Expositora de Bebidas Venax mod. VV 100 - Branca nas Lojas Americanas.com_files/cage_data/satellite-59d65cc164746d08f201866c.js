_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	//Informações do pixel
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var urlPath = _satellite.getVar("getHostAndPath");

	var brand_id = ""
	var brand_name = ""

	//ACOM
	if (_satellite.getVar("coreBrandName") == "ACOM") {
		brand_id = "4945378"
		brand_name = "acom_0"
	}
	//SUBA
	else if (_satellite.getVar("coreBrandName") == "SUBA") {
		brand_id = "4949408"
		brand_name = "suba_0"
	}
	//SHOP
	else if (_satellite.getVar("coreBrandName") == "SHOP") {
		brand_id = "4944387"
		brand_name = "shop_0"
	}

	var src_google_dcm_iframe = "https://" + brand_id + ".fls.doubleclick.net/activityi;src=" + brand_id + ";type=" + brand_name + ";cat=produ0;u1=produto;u2=" + _satellite.getVar("getProductMostVisited") + ";u3=" + _satellite.getVar("getProductPageID") + ";u4=" + _satellite.getVar("getProductValue") + ";u6=" + _satellite.getVar("getDepartamentID") + ";u8=" + _satellite.getVar("getLineID") + ";u13=" + _satellite.getVar("getProductValue") + ";u15=" + urlPath + ";u16=" + _satellite.getVar("getB2W-UID") + ";u17=" + _satellite.getVar("getGACID") + ";u18=" + _satellite.getVar("getDMPCookie") + ";ord=" + a + "?";

	//Criação do Iframe
	var google_dcm_rmkt_iframe = document.createElement("iframe");
	var google_dcm_rmkt_body = document.getElementsByTagName('body')[0]
	google_dcm_rmkt_iframe.src = src_google_dcm_iframe;
	google_dcm_rmkt_iframe.width = '1';
	google_dcm_rmkt_iframe.height = '1';
	google_dcm_rmkt_iframe.setAttribute("frameborder", "0");
	google_dcm_rmkt_iframe.setAttribute("style", "display:none");
	google_dcm_rmkt_body.appendChild(google_dcm_rmkt_iframe);
} catch (e) { }
});
