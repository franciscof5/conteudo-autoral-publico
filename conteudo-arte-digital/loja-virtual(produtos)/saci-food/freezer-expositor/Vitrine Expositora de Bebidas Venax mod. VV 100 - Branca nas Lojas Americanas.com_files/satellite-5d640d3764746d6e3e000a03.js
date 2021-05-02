_satellite.pushAsyncScript(function(event, target, $variables){
  try{
    //console.log("Redir - 1")
    if(window.location.href != window.top.location.href){
        //console.log("Redir - 2")
        window.top.s_wa.eVar14  = window.top.location.href
        window.top.s_wa.eVar198 = window.top.location.href
        window.top.s_wa.eVar199 = window.location.href
        window.top.s_wa.prop66  = _satellite.getVar("getCookiesPorNome")        

        window.top.s_wa.tl(this, 'o', "ACOM:Redirect:Home:Parent");            
    }
}catch(e){}
});
