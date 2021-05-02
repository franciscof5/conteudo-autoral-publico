_satellite.pushAsyncScript(function(event, target, $variables){
  try {
    rtgsettings ={
        'pdt_id': _satellite.getVar("getProductPageID"),
        'pdt_sku': cage_global_variable.detail.product.skus[0],
        'pdt_name': '',
        'pdt_price': '', //não temos
        'pdt_amount': '', //não temos
        'pdt_currency': 'BRL',
        'pdt_url': cage_global_variable.detail.navigation.url,
        'pdt_photo': '',
        'pdt_instock': '', //não temos
        'pdt_expdate': '', //não temos
        'pdt_category_list': '',
        'pdt_smalldescription':  '', 
        'pagetype': 'product',
        'key': 'DIR',
        'token': 'AMERICANAS_BR',
        'layer': 'iframe'
    };
    (function(d) {
        var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
        s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.mainadv.com/Visibility/Rtgdir2-min.js';
        var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
    }(document));
} catch (e) {
}
});
