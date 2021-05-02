_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var urlPath = _satellite.getVar("getHostAndPath");
	var src_google_dbm_rmkt_iframe = "//4662445.fls.doubleclick.net/activityi;src=4662445;type=invmedia;cat=p5uqgacu;u1=" + _satellite.getVar("getProductValue") + ";u2=" + _satellite.getVar("getProductPageID") + ";u3=" + _satellite.getVar("getProductMostVisited") + ";u4=" + _satellite.getVar("getDepartamentID") + ";u6=product;u9=" + urlPath + ";u10=" + _satellite.getVar("getLineID") + ";ord=" + a + "?";

	//Criação do Iframe
	var google_dbm_rmkt_iframe = document.createElement("iframe");
	var google_dbm_rmkt_body = document.getElementsByTagName('body')[0]
	google_dbm_rmkt_iframe.src = src_google_dbm_rmkt_iframe;
	google_dbm_rmkt_iframe.width = '1';
	google_dbm_rmkt_iframe.height = '1';
	google_dbm_rmkt_iframe.setAttribute("frameborder", "0");
	google_dbm_rmkt_iframe.setAttribute("style", "display:none");
	google_dbm_rmkt_body.appendChild(google_dbm_rmkt_iframe);
} catch (e) {}
});
