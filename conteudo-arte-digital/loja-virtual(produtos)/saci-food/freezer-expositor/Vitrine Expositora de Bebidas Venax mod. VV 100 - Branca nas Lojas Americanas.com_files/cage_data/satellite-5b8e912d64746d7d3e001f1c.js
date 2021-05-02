_satellite.pushAsyncScript(function(event, target, $variables){
  try {
  var value = cage_getParam('afpid');
  if(value){
    cage_setCookie('afpid', value);
  }
}catch(e) {console.log(e)}
});
