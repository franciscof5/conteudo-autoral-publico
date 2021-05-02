_satellite.pushAsyncScript(function(event, target, $variables){
  try {
  var epar = _satellite.getVar('getEpar');
  var body = document.body;
  var script = document.createElement('script');
  script.src = 'https://statics-americanas.b2w.io/saispa/tracker.js';

  body.appendChild(script);
}catch(e) {
  console.log('[SAISPA]:', e);
}
});
