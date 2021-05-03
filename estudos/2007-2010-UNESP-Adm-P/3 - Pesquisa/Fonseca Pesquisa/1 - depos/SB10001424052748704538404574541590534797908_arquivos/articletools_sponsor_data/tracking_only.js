
try{if(!document.body){document.write("<img style='display:none'/>");}
var i=document.createElement("img");i.setAttribute("src","http://cheetah.vizu.com/t.gif?cid=621;t="+new Date().getTime());i.style.display="none";document.body.insertBefore(i,document.body.lastChild)}catch(e){}
if(typeof VIZU=="undefined"){var VIZU=window.VIZU={};if(window.top){try{window.top.vizu={};window.top.vizu.x=0;VIZU=window.top.VIZU={};VIZU.perm=1;}
catch(e){VIZU.perm=0;}}}
(function(){var s=document.getElementsByTagName('script');for(var i=s.length-1;i>=0;i--){if(s[i].src!=null){if(s[i].src.match("tracking_only.js")=="tracking_only.js"){s=s[i];break;}}}
try{var d=document,n=navigator,ua=n.userAgent.toLowerCase(),w=window,cid,adtype=1,stype=0,vars,code=5,ud="undefined",ts=new Date().getTime(),s=s.src.replace(/^[^\?]+\??/,''),p=[],pairs=s.split(/[;&]/),KeyVal,alnum=/^([a-zA-Z0-9_-]+)$/;VIZU.path="http://puma.vizu.com";VIZU.ver="v4";if(typeof VIZU.cid==ud)
VIZU.cid={};VIZU.attach=function(x,f,c){try{d.body.insertBefore(x,d.body.firstChild);}catch(e){var error=new Error();error.name="function";error.call=f;error.message=e.message;throw(error);}};VIZU.getScript=function(src){var s=d.createElement('script');s.setAttribute('type','text/javascript');s.src=src;VIZU.attach(s,"getScript",1);};VIZU.setMov=function(file,id,vars){var m=document.createElement("div");m.style.left="-1px";m.style.width="1px";m.style.height="1px";m.style.overflow="hidden";m.style.position="absolute";m.innerHTML="<div><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' id='"+id+"' width='1' height='1'><param name='wmode' value='window' /><param name='FlashVars' value='"+vars+"' /><param name='allowScriptAccess' value='always' /><param name='movie' value='"+file+"' /><embed src='"+file+"' allowScriptAccess='always' wmode='window' name='"+id+"' FlashVars='"+vars+"' width='1' height='1' /></object></div>";VIZU.attach(m,"getMov",1);};VIZU.callImg=function(type,code,msg){var i=d.createElement("img"),file="http://cheetah.vizu.com/",info="cid="+cid+";adid="+p.adid+";siteid="+p.siteid+";adtype="+adtype+";stype="+stype+";siteurl="+location.host.substring(0,1000)+";os="+escape(navigator.platform.substring(0,1000))+";b="+escape(ua)+";t="+ts;type=="e"?file+="e.gif?errcd="+code+";err="+escape(msg)+";"+info:type=="f"?file+="f.gif?cd="+code+";"+info:file+=type+".gif?"+info;i.setAttribute("src",file);i.style.display="none";VIZU.attach(i,"callImg",0);};VIZU.iframe=function(file,vars){var f=d.createElement("iframe");f.style.top="0px";f.style.left="-5px";f.style.position="absolute";f.style.width="1px";f.style.height="0px";f.style.border="0px";f.src=file;if(file.match(/cookie_util_so.htm/)){if(typeof addEventListener!=ud){f.addEventListener("load",function(){VIZU.setMov(VIZU.path+"/v4/swf/andes.swf?t=1","gateway",vars);},false);}
else
if(typeof attachEvent!=ud){f.attachEvent("onload",function(){VIZU.setMov(VIZU.path+"/v4/swf/andes.swf?t=1","gateway",vars);});}}
VIZU.attach(f,"iframe",0);};VIZU.f=function(){if(w.ActiveXObject){for(var i=9;i<=10;i++){try{axo=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+i+"');");if(axo)
return true;}
catch(e){}}}
else
if(n.plugins){if(n.plugins["Shockwave Flash 2.0"]||n.plugins["Shockwave Flash"]){if(n.plugins["Shockwave Flash 2.0"])
return false;var fd=n.plugins["Shockwave Flash"].description;var fv=parseInt(fd.substr(fd.indexOf(".")-2,fd.indexOf(".")-1));for(var i=9;i<=10;i++){if(fv==i)
return true;}}}
return false;};VIZU.b={ver:(ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,'0'])[1],chrome:/webkit/.test(ua)&&/(chrome)/.test(ua),safari:/webkit/.test(ua)&&!/(chrome)/.test(ua),ie:/msie/.test(ua)&&!/opera/.test(ua),ff:/firefox/.test(ua)&&!/(compatible|webkit)/.test(ua)};cid="621";VIZU.cid[cid]={};VIZU.cid[cid].pids=["115745","115746"];VIZU.cid[cid].tags={};VIZU.cid[cid].tags["115745"]=[0,0,0,0,0,0,0,0];VIZU.cid[cid].tags["115746"]=[0,0,0,0,0,0,0,0];for(var i=0;i<pairs.length;i++){KeyVal=pairs[i].split('=');if(!KeyVal||KeyVal.length!=2)
continue;p[unescape(KeyVal[0])]=unescape(KeyVal[1]).replace(/(^\s*)|(\s*$)/g,"");}
if(!d.body)
d.write("<img width='0' height='0' style='display:none'/>");VIZU.callImg("a");if(VIZU.perm==0)
VIZU.callImg("i");if(VIZU.b.safari){code=0;if(!VIZU.f())
code=1;}
else
if(VIZU.b.ie&&VIZU.b.ver<6){code=2;if(!VIZU.f())
code=3;}
else
if(!VIZU.f()){code=4;}
if(code>4){VIZU.getScript(VIZU.path+"/sid/sites/csites.js?ts="+ts);var cInt=setInterval(function(){if(VIZU.c){clearInterval(cInt);vars="adid="+p.adid+"&adtype="+adtype+"&siteid="+p.siteid+"&cid="+cid+"&pid="+VIZU.cid[cid].pids+"&test=0.0&control=0.0&pixel=0.0&stype=0&wc="+p.wc+"&path="+VIZU.path;if(VIZU.c(p.siteid)){VIZU.setMov(VIZU.path+"/v4/swf/cookie_catcher.swf","catcher","cid="+cid);VIZU.callImg("c");VIZU.iframe(VIZU.path+"/v4/htm/cookie_util_c.htm?"+vars);}
else{VIZU.iframe(VIZU.path+"/v4/htm/cookie_util_so.htm?"+VIZU.path,vars);}}},100);}
else{VIZU.callImg("f",code);}}
catch(e){if(e.name=="function"){var ie=document.createElement("img");ie.style.display="none";document.body.insertBefore(ie,document.body.lastChild);ie.setAttribute("src","http://cheetah.vizu.com/e.gif?f="+e.call+";errcd=401;cid=621;siteid="+p.siteid+";adid="+p.adid+";siteurl="+escape(window.location).substring(0,1000)+";err="+escape(e.message).substring(0,1000)+";os="+escape(navigator.platform)+";b="+escape(navigator.userAgent)+";script="+escape(s.src)+";t="+new Date().getTime());}else{var ie=document.createElement("img");ie.style.display="none";document.body.insertBefore(ie,document.body.lastChild);ie.setAttribute("src","http://cheetah.vizu.com/e.gif?errcd=400;cid=621;siteid="+p.siteid+";adid="+p.adid+";siteurl="+escape(window.location).substring(0,1000)+";err="+escape(e.message).substring(0,1000)+";os="+escape(navigator.platform)+";b="+escape(navigator.userAgent)+";script="+escape(s.src)+";t="+new Date().getTime());}}})();