_satellite.pushAsyncScript(function(event, target, $variables){
  try{
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:369648,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

  window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
  
  document.addEventListener('hotjar:trigger', function(event) {
  	hj('trigger', event.detail);
	});
  if(!_satellite.readCookie('hj-pagetime')){
    _satellite.setCookie('hj-pagetime', +new Date);
  }
  var hjTime = _satellite.readCookie('hj-pagetime');
  if(+new Date - hjTime > (1000 * 60 *4)){
    console.log('trigger', 'CATALOGO_SESSION_4MIN');
  	hj('trigger', 'CATALOGO_SESSION_4MIN');
  }

} catch(e) {
	console.log(e)
}
});
