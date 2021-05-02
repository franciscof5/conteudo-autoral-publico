_satellite.pushAsyncScript(function(event, target, $variables){
  try {
    var body_sirdata = document.getElementsByTagName('body')[0]
    var img_sirdata = new Image()
    var product_id = _satellite.getVar("getProductPageID")

    img_sirdata.src = '//secure.adnxs.com/seg?add=9855263&t=2&redir=https://js.sddan.com/product.d?pa=20701%26product_id%3D'+ product_id +'%26return%3Dimg'
    img_sirdata.width = '1'
    img_sirdata.height = '1'
    body_sirdata.appendChild(img_sirdata)
  } catch (e) { }
});
