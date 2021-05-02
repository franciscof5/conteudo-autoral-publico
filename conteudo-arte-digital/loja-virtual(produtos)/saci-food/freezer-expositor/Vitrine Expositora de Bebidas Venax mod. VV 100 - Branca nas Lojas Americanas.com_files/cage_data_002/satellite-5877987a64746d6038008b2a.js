_satellite.pushAsyncScript(function(event, target, $variables){
  try{
	(function(a, b, c, d, e, f, g) {
		a['CsdmObject'] = e;
		a[e] = a[e] || function() {
			(a[e].q = a[e].q || []).push(arguments)
		}, a[e].l = 1 * new Date();
		f = b.createElement(c),
			g = b.getElementsByTagName(c)[0];
		f.async = 1;
		f.src = d;
		g.parentNode.insertBefore(f, g)
	})(window, document, 'script', '//device.clearsale.com.br/m/cs.js', 'csdm');
	var keywords = 'name='+_satellite.getVar("getProductPageID");
	csdm('app', '077214ba55');
	csdm('mode', 'manual');
	csdm('send', 'product' , keywords);
}catch(e){}
});
