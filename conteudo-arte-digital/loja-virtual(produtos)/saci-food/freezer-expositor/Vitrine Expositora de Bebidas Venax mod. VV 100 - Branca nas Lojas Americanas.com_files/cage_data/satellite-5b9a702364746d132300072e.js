_satellite.pushAsyncScript(function(event, target, $variables){
  try {
    var gclid = cage_getParam('gclid');
    if(gclid){
      cage_setCookie('gclid', gclid);
    }
}catch(e) {console.log(e)}
});
