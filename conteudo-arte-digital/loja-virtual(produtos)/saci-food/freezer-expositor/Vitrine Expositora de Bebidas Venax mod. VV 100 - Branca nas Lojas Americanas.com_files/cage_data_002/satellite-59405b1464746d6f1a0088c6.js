_satellite.pushAsyncScript(function(event, target, $variables){
  try {
  var body_rtbhouse = document.getElementsByTagName('body')[0]
  var img_rtbhouse = new Image()
  var product_id = _satellite.getVar("getProductPageID")
  img_rtbhouse.src = '//us.creativecdn.com/tags?type=img&id=pr_c3lsQvZAJR5rx4hJbram_offer_' + product_id
  img_rtbhouse.width = '1'
  img_rtbhouse.height = '1'
  body_rtbhouse.appendChild(img_rtbhouse)
} catch (e) { }
});
