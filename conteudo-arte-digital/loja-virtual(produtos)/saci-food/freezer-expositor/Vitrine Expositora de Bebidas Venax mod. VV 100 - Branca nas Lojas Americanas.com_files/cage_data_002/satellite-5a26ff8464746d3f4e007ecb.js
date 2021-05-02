_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	var brand_id = "1010" //ACOM
	var body_responsys = document.getElementsByTagName('body')[0]
	var img_responsys = new Image(); // create image element

	var page_url = encodeURIComponent(_satellite.getVar("getURL"))
	var product_id = _satellite.getVar("getProductPageID")
	var category_id = _satellite.getVar("getDepartamentID")
	var product_name = _satellite.getVar("getProductMostVisited")
	var product_price = parseFloat(_satellite.getVar("getProductValue")).toFixed(2)
	var currency = "BRL"
	var product_original_price = parseFloat(_satellite.getVar("getProductValue")).toFixed(2)
	var product_photo = encodeURIComponent(cage_global_variable.detail.product.images[0].medium);
	var product_desc = "";
	var product_stock = 1;

	img_responsys.src = "//i.afilio.com.br/mastertag_img.php?" +
		"progid=" + brand_id +
		"&type=product&id_partner=americanas" +
		"&product_id1=" + product_id +
		"&id_category=" + category_id +
		"&product_name=" + product_name +
		"&stock=" + product_stock +
		"&product_desc=" + product_desc +
		"&product_photo=" + product_photo +
		"&price1=" + product_price +
		"&price2=" + product_original_price +
		"&product_currency=" + currency +
		"&url_product=" + page_url
 
	img_responsys.width = '1';
	img_responsys.height = '1';
	body_responsys.appendChild(img_responsys);
} catch (e) {
	console.log(e)
}
});
