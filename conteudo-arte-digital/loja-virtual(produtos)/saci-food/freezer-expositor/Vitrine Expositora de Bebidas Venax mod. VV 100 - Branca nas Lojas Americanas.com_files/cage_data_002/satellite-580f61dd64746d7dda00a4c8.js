_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	var google_tag_params = {
			ET: "product",
			prodId: _satellite.getVar("getProductPageID"),
			pvalues: _satellite.getVar("getProductValue")
		}
		/* <![CDATA[ */
	var google_conversion_id = 1033431979;
	var google_custom_params = window.google_tag_params;
	var google_remarketing_only = true;

	/* ]]> */

	var google_rmkt_src = "//googleads.g.doubleclick.net/pagead/"
						+ "viewthroughconversion/" + google_conversion_id
						+ "/?value=0&guid=ON&script=0"
						+ "&data.ET=" + google_tag_params.ET
						+ "&data.lineid=" + _satellite.getVar("getLineID") 
						+ "&data.pcat=" + _satellite.getVar("getDepartamentID")
						+ "&data.prodid=" + _satellite.getVar("getProductPageID")
						+ "&data.pvalues=" + _satellite.getVar("getProductValue") 
						+ "&data.category=" + _satellite.getVar("getDepartamentID")
						+ "&data.pagetype=" + google_tag_params.ET
						+ "&data.totalvalue=" + _satellite.getVar("getProductValue");

	var google_rmkt_body = document.getElementsByTagName('body')[0]
	var google_rmkt_img = new Image(); // create image element
	google_rmkt_img.src = google_rmkt_src
	google_rmkt_img.border = '0';
	google_rmkt_img.width = '1';
	google_rmkt_img.height = '1';
	google_rmkt_body.appendChild(google_rmkt_img);

} catch (e) {}
});
