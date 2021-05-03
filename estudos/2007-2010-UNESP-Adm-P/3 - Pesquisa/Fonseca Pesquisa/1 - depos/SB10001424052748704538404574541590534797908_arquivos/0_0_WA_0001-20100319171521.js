// dojo.provide at end since the code overwrites window.swfobject
/*  SWFObject v2.2 <http://code.google.com/p/swfobject/>
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

dojo.provide("swfobject.swfobject_2_2.swfobject");
dojo.provide("swfobject.swfobject_1_5.swfobject");
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
dojo.provide("dj.util.Compatibility");function OpenG(url){dj.util.Url.openWin(url,"",980,707,"off",true,40,10);}
function OpenWin(){dj.util.Url.openWin.apply(null,arguments);}
function launchAudio(aFilePath){var whichis=aFilePath.split("/");var numArgs=whichis.length;var theFileName=whichis[numArgs-1];var theLaunchPath="http://s.wsj.net/public/resources/documents/WSJ_audioPlayer08.html?audioFile="+aFilePath+"&trackName="+theFileName;OpenG(theLaunchPath);}
dojo.provide("dj.util.Video");dojo.require("dj.lang._oop");dojo.require("dj.util.Cookie");dojo.require("dj.util.Observer");dojo.require("dj.util.Omniture");dojo.require("dj.util.Page");dojo.require("dj.util.Region");dojo.require("dj.util.User");(function(){var dju=dj.util,djp=dj.util.Page,obs=new dju.Observer(dj.util.Video),players={};dju.Video={unpauseVideo:function(playerId){obs.fireByName("unpauseVideo",playerId);},pauseVideo:function(playerId){obs.fireByName("pauseVideo",playerId);},playVideo:function(playerId){obs.fireByName("playVideo",playerId);},getSeek:function(playerId){obs.fireByName("getSeek",playerId);},stopVideo:function(playerId){obs.fireByName("stopVideo",playerId);},collapsePlayer:function(playerId){obs.fireByName("collapsePlayer",playerId);},expandPlayer:function(playerId){obs.fireByName("expandPlayer",playerId);},isVideoPlayerCollapsed:function(playerId){var player=this._getOrCreatePlayer(playerId);if(player.isCollapsed){return true;}
var cookie=dju.Cookie.getGroupCookie("DJCOOKIE","PLAYERCOLLAPSED_"+playerId),isPlayerCollapsed=(cookie==="yes");if(isPlayerCollapsed){this._collapsePlayerCallback(playerId);}
player.isCollapsed=isPlayerCollapsed;return player.isCollapsed;},subscribe:function(videoEventName,callback,context){obs.subscribeByName(videoEventName,callback,context);},_getOrCreatePlayer:function(playerId){if(!players[playerId]){players[playerId]={isCollapsed:false,largestHeight:25,smallestHeight:25};}
return players[playerId];},handlePageRefresh:function(){var dup=dju.Page,onCb=function(playerId){dup.enableRefresh();},offCb=function(playerId){dup.disableRefresh();};this._subOnOff(onCb,offCb);},handleModuleRefresh:function(moduleName){var onCb=function(playerId){djp.enableModuleRefresh(moduleName);if(dj.module[moduleName+'_updater']){dj.module[moduleName+'_updater'].start();}},offCb=function(playerId){djp.disableModuleRefresh(moduleName);};this._subOnOff(onCb,offCb);},handleVideoPlayer:function(){this.subscribe("collapsePlayer",this._collapsePlayerCallback,this);this.subscribe("expandPlayer",this._expandPlayerCallback,this);},_getPlayerAndUpdateHeights:function(playerId){var player=this._getOrCreatePlayer(playerId);player.node=dojo.byId(playerId);player.largestHeight=(player.node.height>player.largestHeight)?player.node.height:player.largestHeight;player.smallestHeight=(player.node.height<player.smallestHeight)?player.node.height:player.smallestHeight;return player;},_collapsePlayerCallback:function(playerId){var player=this._getPlayerAndUpdateHeights(playerId);if(player.isCollapsed){return;}
player.isCollapsed=true;dojo.anim(player.node,{height:{end:player.smallestHeight}});dju.Cookie.setGroupCookie("DJCOOKIE","PLAYERCOLLAPSED_"+playerId,"yes",(1/24));},_expandPlayerCallback:function(playerId){var player=this._getPlayerAndUpdateHeights(playerId);if(!player.isCollapsed){return;}
player.isCollapsed=false;dojo.anim(player.node,{height:{end:player.largestHeight}});dju.Cookie.deleteGroupCookie("DJCOOKIE","PLAYERCOLLAPSED_"+playerId);},handleNewsHubPageRefresh:function(){var refreshNewsHubPage=function(){location.pathname=location.pathname;};this.subscribe("stopVideo",refreshNewsHubPage,this);},_subOnOff:function(on,off){this.subscribe("unpauseVideo",off,this);this.subscribe("pauseVideo",off,this);this.subscribe("playVideo",off,this);this.subscribe("getSeek",off,this);this.subscribe("stopVideo",on,this);},formatduration:function(d){var minutes=Math.floor(d/60);var seconds=d%60;if(seconds<10){seconds='0'+seconds;}
return''+minutes+':'+seconds;},getVideoDetails:function(args){if(!args.id){return"No Id.";}
var url='/api-video/get_video_info.asp?guid='+args.id;if(args.fields){url+='&fields='+args.fields;}
else{url+='&fields=all';}
dojo.getObject("dj.util.Video.jsonData",true);var params={context:this,handleAs:"json",sync:true,responseType:"application/json",callback:function(json){dju.Video.handleGetVideoDetails(json,args.id);},errorCallback:function(){console.error("Failed while executing util.Video.getVideoDetails");}};dj.util.Video.getVideoData(url,params);return dju.Video.jsonData[args.id];},handleGetVideoDetails:function(json,id){dju.Video.jsonData[id]=json;},getVideoData:function(url,params){params.responseType=(!params.responseType)?"text/xml":params.responseType;var isResponseJson=(params.responseType.indexOf("json")>-1);this._sendXhrRequest(url,params,{requestMethod:"GET",handleAs:(isResponseJson)?"json":"xml",appendCacheBuster:true,requestHeaders:{"Accept":params.responseType},sync:(params.sync?true:false)});},postVideoData:function(url,postData,params){this._sendXhrRequest(url,params,{requestMethod:"POST",content:dojo.toJson(postData),requestHeaders:{"X-HTTP-Method-Override":"POST","Content-Type":"application/json"},sync:(params.sync?true:false)});},putVideoData:function(url,postData,params){this._sendXhrRequest(url,params,{requestMethod:"PUT",content:dojo.toJson(postData),requestHeaders:{"X-HTTP-Method-Override":"PUT","Content-Type":"application/json"},sync:(params.sync?true:false)});},deleteDashboardData:function(url,postData,params){this._sendXhrRequest(url,params,{requestMethod:"POST",content:dojo.toJson(postData),requestHeaders:{"X-HTTP-Method-Override":"DELETE","Content-Type":"application/json"},sync:(params.sync?true:false)});},_sendXhrRequest:function(requestUrl,userParams,requestOptions){var params=dj.lang.cloneMixin({callback:function(){}},userParams);var options=dj.lang.cloneMixin({requestHeaders:{"Accept":"application/json"},handleAs:"json",appendCacheBuster:false,sync:false},requestOptions);if(options.appendCacheBuster){requestUrl=this._appendCacheBuster(requestUrl);}
var xhrReq=this._getRequestByMethod(options.requestMethod);var deferred=xhrReq({url:requestUrl,headers:options.requestHeaders,handleAs:options.handleAs,postData:options.content,sync:options.sync,load:function(data,ioargs){if(params.context){params.callback.apply(params.context,[data,ioargs.xhr,params]);}else{params.callback.apply(this,[data,ioargs.xhr,params]);}},error:function(error,ioargs){console.error("HTTP status code: %s, response: %o",ioargs.xhr.status,data);if(typeof params.errorCallback!=="undefined"){params.errorCallback.apply(params.context,[ioargs.xhr.status,ioargs.xhr,params]);}else{params.callback.apply(params.context,[ioargs.xhr.status,ioargs.xhr,params]);}}});return deferred;},_appendCacheBuster:function(requestUrl){var cb=(Math.floor(10000000*Math.random()));requestUrl+=(requestUrl.indexOf('?')>-1)?("&cb="+cb):("?cb="+cb);return requestUrl;},_getRequestByMethod:function(requestMethod){return(requestMethod=="GET")?dojo.xhrGet:dojo.xhrPost;},getUrlParam:function(srcUrl,name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(srcUrl);if(results===null){return"";}
else{return results[1];}},nonSupportingFlashPlayer:function(divId){var str='';str+='<table width="75%" cellspacing="1" cellpadding="2" bordercolor="#336699" border="2">';str+='<tbody>';str+='<tr>';str+='</tr>';str+='<tr>';str+='<td align="left">';str+='<span style="font-size: 12px;">';str+='The version of Adobe Flash Player required to view this interactive has not been found.';str+='<br/>';str+='To enjoy our complete interactive experience, please download a free copy of the latest version of Adobe Flash Player ';str+='<b>';str+='<a target="_blank" href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash">here.</a>';str+='</b>';str+='</span>';str+='</td>';str+='</tr>';str+='</tbody>';str+='</table>';dojo.byId(divId).innerHTML=str;},omnitureEncoding:function(col,subcol,type){if(col=='News'){if(subcol=='Politics'&&type=='s'){return'Politics & Campaign';}
if((!this.isNotBlankOrNull(subcol))&&type=='c'){return'US';}
if((!this.isNotBlankOrNull(subcol))&&type=='s'){return'US';}}
if(col=='Management'){if((!this.isNotBlankOrNull(subcol))&&type=='c'){return'Business';}
if((!this.isNotBlankOrNull(subcol))&&type=='s'){return'Management';}
if(subcol=='Business Insight'&&type=='c'){return'Business';}
if(subcol=='Business Insight'&&type=='s'){return'Business Insight';}
return'Business';}
if(col=='Lifestyle'){return'Life & Style';}
if(col=='Special Packages'){if(subcol=='Journal Reports'&&type=='c'){return'Special';}
if(subcol=='Journal Reports'&&type=='s'){return'In-Depth Reports';}
if(subcol=='Journal Women'&&type=='c'){return'Careers';}
if(subcol=='Journal Women'&&type=='s'){return'Journal Women';}}
if(type=='s'&&!(this.isNotBlankOrNull(subcol))){return col;}
if(type=='s'){return subcol;}
if(type=='c'){return col;}},isNotBlankOrNull:function(strVar){return(strVar!==''&&strVar!==null&&typeof strVar!='undefined');},setupConfig:function(widget){var config={};config.emailURL='http:\u002F\u002Fwww.emailthis.clickability.com\u002Fet\u002FemailThis?clickMap=create&fb=Y&url=@VIDEO_LINK_URL&title=@VIDEO_TITLE&random=@RANDOM_NUMBER&partnerID=@EMAIL_PARTNER_ID&image=@VIDEO_STILL_URL&expire=&summary=@VIDEO_DESCRIPTION';config.domainName='wsj';config.embedConfigURL="http://wsj.vo.llnwd.net/o28/players/";config.popUpPageUrl='/public/page/0_0_WP_3001.html';var siteFrmUrl=this.getUrlParam(window.location.href,'site');var siteFrmContxt='';try{siteFrmContxt=dj.context.videoCenter.host;}
catch(e){console.error("Error while getting site value from context. "+e.message);}
config.site=this.isNotBlankOrNull(siteFrmUrl)?siteFrmUrl:siteFrmContxt;config.msrc=this.getUrlParam(window.location.href,'msrc');config.playFromRegisteredVideos=false;config.pageSize=12;config.browsingGroup="collection";config.playingGroup="collection";config.skipCollection=true;config.prop24='';config.prop25='';config.prop27='';try{config.prop24=setEdition(dj.util.Region.getViewByRegion());}
catch(e){console.error("cookie read error while fetching prop24 : "+e);}
try{config.prop25=dj.util.Cookie.getCookie('TR');}
catch(e){console.error("cookie read error while fetching prop25 : "+e);}
try{config.cookieUserType=dj.util.Cookie.getCookie("user_type");}
catch(e){console.error("cookie read error while fetching cookieUserType : "+e);}
try{dj.util.User.isLoggedIn(function(isLoggedIn){if(isLoggedIn){dj.util.User.isSubLoggedIn(function(subLoggedIn){if(subLoggedIn){config.prop27='WSJ_sub_yes';}
else{config.prop27='WSJ_mem_yes';}});}
else{if(config.cookieUserType===null||config.cookieUserType!=="subscribed"){config.prop27='WSJ_free';}
else{config.prop27='WSJ_reg_yes';}}});}
catch(e){console.error("cookie read error while fetching prop27");}
return config;}};}());/*global document window dojo*/
/** 
 * script.aculo.us slider.js v1.8.1, Thu Jan 03 22:07:12 -0500 2008
 * Copyright (c) 2005-2007 Marty Haught, Thomas Fuchs 
 * script.aculo.us is freely distributable under the terms of an MIT-style license.
 * For details, see the script.aculo.us web site: http://script.aculo.us/
 * 
 * Ported to dojo library
*/

dojo.provide("dj.widget.Slider");

/**
 *    options:
 *     axis: 'vertical', or 'horizontal' (default)
 *    callbacks:
 *     onChange(value)
 *     onSlide(value)
 * 
 * Sample usage:
 * new dj.widget.Slider(dojo.query('.slider_pointer',sliderElement), sliderElement, {
        range: {start:0, end:2},
        values: [0, 1, 2],
        sliderValue: getCurrentSetting(),

        onChange: function(value) {
            setTimeout(function(){
              changeSetting(value);
            },0);
        }
    });
 */
dojo.declare("dj.widget.Slider", null,{
    constructor : function(handle, track, options) {
      this._eventConnectHandles = [];
      var slider = this;
  
      if (dojo.isArray(handle)) {
        this.handles = [];
        for ( var count = 0, max = handle.length; count < max; count++) {
          this.handles.push(dojo.byId(handle[count]));
        }
      } else {
        this.handles = [ dojo.byId(handle) ];
      }
  
      this.track = dojo.byId(track);
      this.options = options || {};
  
      this.axis = this.options.axis || 'horizontal';
      this.increment = this.options.increment || 1;
      this.step = parseInt(this.options.step || '1' , 10);
      this.range = this.options.range || {start:0, end:1};
  
      this.value = 0; /* assure backwards compat */
      this.values = [];
      dojo.forEach(this.handles, dojo.hitch(this, function(){
        this.values.push(0);
      }));

      this.spans = this.options.spans ? dojo.forEach(this.options.spans,
          function(s) {
            return dojo.byId(s);
          }) : false;
      this.options.startSpan = dojo.byId(this.options.startSpan || null);
      this.options.endSpan = dojo.byId(this.options.endSpan || null);
  
      this.restricted = this.options.restricted || false;
  
      this.maximum = this.options.maximum || this.range.end;
      this.minimum = this.options.minimum || this.range.start;
  
      // Will be used to align the handle onto the track, if necessary
      this.alignX = parseInt(this.options.alignX || '0', 10);
      this.alignY = parseInt(this.options.alignY || '0', 10);
  
      this.trackLength = this.maximumOffset() - this.minimumOffset();
  
      this.handleLength = this.isVertical() ? (this.handles[0].offsetHeight !== 0 ? this.handles[0].offsetHeight
          : this.handles[0].style.height.replace(/px$/, ""))
          : (this.handles[0].offsetWidth !== 0 ? this.handles[0].offsetWidth
              : this.handles[0].style.width.replace(/px$/, ""));
  
      this.active = false;
      this.dragging = false;
      this.disabled = false;
  
      if (this.options.disabled){
        this.setDisabled();
      }
  
      // Allowed values array
      this.allowedValues = this.options.values ? this.options.values
          .sort() : false;
      if (this.allowedValues) {
        this.minimum = (this.allowedValues.length > 0) ? this.allowedValues[0]
            : 0;
        this.maximum = (this.allowedValues.length > 0) ? this.allowedValues[this.allowedValues.length - 1]
            : 0;
      }
  
      this.eventMouseDown = dojo.hitch(this, this.startDrag);
      this.eventMouseUp = dojo.hitch(this, this.endDrag);
      this.eventMouseMove = dojo.hitch(this, this.update);
  
      // Initialize handles in reverse (make sure first handle is active)
      dojo.forEach(
              this.handles,
              function(h, i) {
                i = slider.handles.length - 1 - i;
                slider.setValue(
                        parseFloat((dojo.isArray(slider.options.sliderValue) ? slider.options.sliderValue[i]
                            : slider.options.sliderValue) || slider.range.start), i);
                if (h.style.position && h.style.position === 'static') {
                  h.style.position = 'relative';
                  if (dojo.isOpera) {
                    h.style.top = 0;
                    h.style.left = 0;
                  }
                }
                slider._eventConnectHandles.push(dojo.connect(h,
                    'onmousedown', slider.eventMouseDown));
              });
  
      this._eventConnectHandles.push(dojo.connect(this.track,
          'onmousedown', this.eventMouseDown));
      this._eventConnectHandles.push(dojo.connect(document, 'onmouseup',
          this.eventMouseUp));
      this._eventConnectHandles.push(dojo.connect(document,
          'onmousemove', this.eventMouseMove));
  
      this.initialized = true;
    },
    dispose : function() {
      dojo.forEach(this._eventConnectHandles, dojo.disconnect);
    },
    setDisabled : function() {
      this.disabled = true;
    },
    setEnabled : function() {
      this.disabled = false;
    },
    getNearestValue : function(value) {
      if (this.allowedValues) {
        var max = (this.allowedValues.length > 0) ? this.allowedValues[this.allowedValues.length - 1]
            : 0;
        if (value >= max){
          return (max);
        }
        var min = (this.allowedValues.length > 0) ? this.allowedValues[0] : 0;
        if (value <= min){
          return (min);
        }
  
        var offset = Math.abs(this.allowedValues[0] - value);
        var newValue = this.allowedValues[0];
        dojo.forEach(this.allowedValues, function(v) {
          var currentOffset = Math.abs(v - value);
          if (currentOffset <= offset) {
            newValue = v;
            offset = currentOffset;
          }
        });
        return newValue;
      }
      if (value > this.range.end){
        return this.range.end;
      }
      if (value < this.range.start){
        return this.range.start;
      }
      return value;
    },
    setValue : function(sliderValue, handleIdx) {
      if (!this.active) {
        this.activeHandleIdx = handleIdx || 0;
        this.activeHandle = this.handles[this.activeHandleIdx];
        this.updateStyles();
      }
      handleIdx = handleIdx || this.activeHandleIdx || 0;
      if (this.initialized && this.restricted) {
        if ((handleIdx > 0) && (sliderValue < this.values[handleIdx - 1])){
          sliderValue = this.values[handleIdx - 1];
        }
        if ((handleIdx < (this.handles.length - 1)) && (sliderValue > this.values[handleIdx + 1])){
          sliderValue = this.values[handleIdx + 1];
        }
      }
      sliderValue = this.getNearestValue(sliderValue);
      this.values[handleIdx] = sliderValue;
      this.value = this.values[0]; // assure backwards compat
  
      this.handles[handleIdx].style[this.isVertical() ? 'top' : 'left'] = this.translateToPx(sliderValue);
  
      this.drawSpans();
      if (!this.dragging || !this.event){
        this.updateFinished();
      }
    },
    setValueBy : function(delta, handleIdx) {
      this.setValue(this.values[handleIdx || this.activeHandleIdx || 0] + delta, 
                              handleIdx || this.activeHandleIdx || 0);
    },
    translateToPx : function(value) {
      return Math.round(((this.trackLength - this.handleLength) / (this.range.end - this.range.start)) * 
                      (value - this.range.start)) + "px";
    },
    translateToValue : function(offset) {
      return ((offset / (this.trackLength - this.handleLength) * (this.range.end - this.range.start)) + this.range.start);
    },
    getRange : function(range) {
      var v = this.values.sort();
      range = range || 0;
      return {start:v[range], end:v[range + 1]};
    },
    minimumOffset : function() {
      return (this.isVertical() ? this.alignY : this.alignX);
    },
    maximumOffset : function() {
      return (this.isVertical() ? (this.track.offsetHeight !== 0 ? this.track.offsetHeight
          : this.track.style.height.replace(/px$/, "")) - this.alignY
          : (this.track.offsetWidth !== 0 ? this.track.offsetWidth
              : this.track.style.width.replace(/px$/, "")) - this.alignX);
    },
    isVertical : function() {
      return (this.axis == 'vertical');
    },
    drawSpans : function() {
      var slider = this;
      if (this.spans) {
        for ( var count = 0, max = this.spans.length - 1; count <= max; count++) {
          slider.setSpan(slider.spans[count], slider.getRange(count));
        }
      }
      if (this.options.startSpan) {
        this.setSpan(this.options.startSpan, {start:0, end:this.values.length > 1 ? this.getRange(0).start
                    : this.value});
      }
      if (this.options.endSpan) {
        this.setSpan(this.options.endSpan, 
            {start:this.values.length > 1 ? this.getRange(this.spans.length - 1).end : this.value, 
             end:this.maximum});
      }
    },
    setSpan : function(span, range) {
      if (this.isVertical()) {
        span.style.top = this.translateToPx(range.start);
        span.style.height = this.translateToPx(range.end - range.start + this.range.start);
      } else {
        span.style.left = this.translateToPx(range.start);
        span.style.width = this.translateToPx(range.end - range.start + this.range.start);
      }
    },
    updateStyles : function() {
      dojo.forEach(this.handles, function(h) {
        dojo.removeClass(h, 'selected');
      });
      dojo.addClass(this.activeHandle, 'selected');
    },
    startDrag : function(event) {
      if (dojo.mouseButtons.isLeft(event)) {
        if (!this.disabled) {
          this.active = true;
          var handle = event.target;
          var pointer = [ event.clientX, event.clientY ];
          var track = handle;
          if (track == this.track) {
            var trackPosition = dojo.position(this.track);
            this.event = event;
            this.setValue(this .translateToValue((this.isVertical() ? 
                                    pointer[1] - trackPosition.y 
                                    : pointer[0] - trackPosition.x) - (this.handleLength / 2)));
            var handlePosition = dojo.position(this.activeHandle);
            this.offsetX = (pointer[0] - handlePosition.x);
            this.offsetY = (pointer[1] - handlePosition.y);
          } else {
            // find the handle (prevents issues with Safari)
            while ((dojo.indexOf(this.handles, handle) == -1) && handle.parentNode){
              handle = handle.parentNode;
            }
  
            if (dojo.indexOf(this.handles, handle) != -1) {
              this.activeHandle = handle;
              this.activeHandleIdx = dojo.indexOf(this.handles,
                  this.activeHandle);
              this.updateStyles();
  
              var activeHandlePosition = dojo.position(this.activeHandle);
              this.offsetX = (pointer[0] - activeHandlePosition.x);
              this.offsetY = (pointer[1] - activeHandlePosition.y);
            }
          }
        }
        dojo.stopEvent(event);
      }
    },
    update : function(event) {
      if (this.active) {
        if (!this.dragging){
          this.dragging = true;
        }
        this.draw(event);
        if (dojo.isWebKit){
          window.scrollBy(0, 0);
        }
        dojo.stopEvent(event);
      }
    },
    draw : function(event) {
      var pointer = [ event.clientX, event.clientY ];
      var trackPosition = dojo.position(this.track);
      pointer[0] -= this.offsetX + trackPosition.x;
      pointer[1] -= this.offsetY + trackPosition.y;
      this.event = event;
      this.setValue(this.translateToValue(this.isVertical() ? pointer[1]
          : pointer[0]));
      if (this.initialized && this.options.onSlide){
        this.options.onSlide(this.values.length > 1 ? this.values
            : this.value, this);
      }
    },
    endDrag : function(event) {
      if (this.active && this.dragging) {
        this.finishDrag(event, true);
        dojo.stopEvent(event);
      }
      this.active = false;
      this.dragging = false;
    },
    finishDrag : function(event, success) {
      this.active = false;
      this.dragging = false;
      this.updateFinished();
    },
    updateFinished : function() {
      if (this.initialized && this.options.onChange){
        this.options.onChange(this.values.length > 1 ? this.values
            : this.value, this);
      }
      this.event = null;
    }
});

dojo.provide("dj.util.XSLT");dj.util.XSLT=function(){var processor=(typeof window.ActiveXObject!='undefined'?null:new XSLTProcessor());var result=null;var xsl=null;var xml=null;var _xmlhttp_progids=['Msxml2.XMLHTTP','Microsoft.XMLHTTP','Msxml2.XMLHTTP.4.0'];var success=function(){};var error=function(){};var setXsl=function(S){xsl=S;};var setXml=function(M){xml=M;};var getMsxml=function(){var http=null;var last_e=null;try{http=new XMLHttpRequest();}catch(e){}
if(!http){for(var i=0;i<3;++i){var progid=_xmlhttp_progids[i];try{http=new ActiveXObject(progid);}
catch(er){}
if(http){_xmlhttp_progids=[progid];break;}}}
return http;};return{transform:function(O){if(O.onError){error=O.onError;}
if(typeof O.xslUrl=='undefined'||O.xslUrl===null||typeof O.feedUrl=='undefined'||O.feedUrl===null){error('error: need xslUrl and feedUrl to proceed');return;}
if(O.onSuccess){success=O.onSuccess;}
var that=this,xsl,xml;try{if(processor===null){xsl=getMsxml();xml=getMsxml();xsl.async=true;xsl.onreadystatechange=function(){if(xsl.readyState==4){setXsl(xsl);that.doTransform();}};xsl.load(O.xslUrl);xml.async=true;xml.onreadystatechange=function(){if(xml.readyState==4){setXml(xml);that.doTransform();}};xml.load(O.feedUrl);}
else{xsl=new XMLHttpRequest();xml=new XMLHttpRequest();xsl.overrideMimeType('text/xml');xsl.onreadystatechange=function(){if(xsl.readyState==4&&xsl.status=='200'){setXsl(xsl.responseXML);that.doTransform();}};xsl.open('GET',O.xslUrl,true);xsl.send(null);xml.overrideMimeType('text/xml');xml.onreadystatechange=function(){if(xml.readyState==4&&xml.status=='200'){setXml(xml.responseXML);that.doTransform();}};xml.open('GET',O.feedUrl,true);xml.send(null);}}catch(e){error(e);}},doTransform:function(){if(xsl===null||xml===null){return;}
try{if(processor===null){var y=xml.transformNode(xsl),i=y.indexOf('?>');if(i!=-1){y=y.substring(i+2);}
var z=new Element('div');z.innerHTML=y;result=document.createDocumentFragment();while(z.childNodes.length>0){result.appendChild(z.childNodes[0]);}}
else{processor.importStylesheet(xsl);result=processor.transformToFragment(xml,document);processor.reset();}
success(result);}catch(e){error(e);}}};}();
dojo.provide("dj.util.Form");dj.util.Form={submitOnEvent:function(elm,formName,event){event=event||"onclick";var el=dojo.byId(elm);var frm=document[formName];if(el===null||typeof frm==="undefined"||frm===null){throw new Error("{dj.util.Form} element and/or form not found");}
var deferred=dojo.connect(el,event,function(ev){dojo.stopEvent(ev);frm.submit();});return deferred;},clearValue:function(id,defaultText){var defTxt=[];var oEl=dojo.byId(id);if(oEl===null){throw new Error("{dj.util.Form} element not found");}
var fv=dojo.trim(oEl.value);if(typeof defaultText=="undefined"){oEl.value=" ";}else if(!dojo.isArray(defaultText)){defTxt.push(defaultText);}else{defTxt=defaultText;}
for(var i=0,len=defTxt.length;i<len;i++){if(defTxt[i]==fv){oEl.value="";}}},checkEmpty:function(id,errorMessage){var oEl=dojo.byId(id);if(oEl===null){throw new Error("{dj.util.Form} element not found");}
return(dojo.trim(oEl.value)==="");},validateEmailAddresses:function(emailAddresses){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return reg.test(emailAddresses);},hasValidContent:function(regExp,value){var _value=value;if(_value!==""){return regExp.test(_value);}
return false;}};
dojo.provide("dj.util.History");dojo.require("dj.util.Observer");dojo.require("dojo.back");dj.util.History=function(){var hHistory=null;var initted=false;var obs=null;function getHash(){var h=window.location.hash;if(h.charAt(0)=="#"){h=h.substring(1);}
return dojo.isMozilla?h:decodeURIComponent(h);}
function setHash(h){if(!h){h="";}
window.location.hash=encodeURIComponent(h);historyCounter=history.length;}
function _init(){var currUrlHash=getHash();obs=new dj.util.Observer();hHistory=dojo.queryToObject(currUrlHash);dojo.back.init();dojo.back.setInitialState({changeUrl:currUrlHash,back:function(){obs.fireByName("_init",null);},forward:function(){obs.fireByName("_init",null);}});}
return{init:function(){if(initted){return;}initted=true;_init();},get:function(name){return hHistory[name];},set:function(name,value,suppressHistory){hHistory[name]=value;var newUrl=dojo.objectToQuery(hHistory);suppressHistory=(typeof suppressHistory==="boolean")?suppressHistory:false;if(suppressHistory===false){dojo.back.addToHistory({changeUrl:newUrl,back:function(){obs.fireByName(name,value);},forward:function(){obs.fireByName(name,value);}});}else{setHash(newUrl);}},subscribe:function(name,callback,context){obs.subscribeByName(name,callback,context);}};}();
dojo.provide("dj.util.Config");dojo.require("dj.util.Observer");dojo.declare("dj.util.Config",null,{constructor:function(owner){this.setOwner(owner);this.cfg={};this.obs={};this.hasFired={};},getOwner:function(){return this.owner;},setOwner:function(owner){this.owner=owner;},addProperty:function(key,config){key=key.toLowerCase();if(typeof config=="undefined"){throw new Error("Config {key: '_', value: '_'} must be set for key '"+key+"'.");}else if(typeof config.value=="undefined"){throw new Error("Config value must be defined for key '"+key+"'.");}else if(typeof config.handler=="undefined"){this.setProperty(key,config.value,true);return;}
var ob=new dj.util.Observer();var own=this.getOwner();ob.subscribe(config.handler,own);this.obs[key]=ob;this.setProperty(key,config.value,true);},getProperty:function(key){key=key.toLowerCase();return this.cfg[key];},setProperty:function(key,value,silent){key=key.toLowerCase();this.cfg[key]=value;var ob=null;if(!silent){ob=this.obs[key];ob.fire(value);}},applyConfig:function(config,init){for(var key in config){if(config.hasOwnProperty(key)){this.setProperty(key,config[key],true);}}},fireQueue:function(ignoreFired){ignoreFired=(typeof ignoreFired=="undefined")?false:ignoreFired;var ob=null;for(var key in this.cfg){if(this.cfg.hasOwnProperty(key)){var value=this.cfg[key];if(!ignoreFired&&this.hasFired[key]){return;}
ob=this.obs[key];if(typeof ob=="undefined"){return;}
ob.fire(value);this.hasFired[key]=true;}}}});dojo.provide("dj.widget.video.VideoCenter");

dojo.require("dj.lang");
dojo.require("dj.util.Ads");
dojo.require("dj.util.Cookie");
dojo.require("dj.util.Omniture");
dojo.require("dj.util.Region");
dojo.require("dj.util.Tracking");
dojo.require("dj.util.User");
dojo.require("dj.util.Video");

dojo.require("swfobject.swfobject_2_2.swfobject");



dojo.getObject("dj.context.video",true);

if (!console) {
    var console = {};
    console.log = function(){};
}

dojo.declare("dj.widget.video.VideoCenter", null, {
    constructor: function(args, objName){
        this.version = "1.0.2";
        this.videoUtil = dj.util.Video;
        this.usrActnHash = {
            '': this.handleResponse,
            'toBrowse': this.handleBrowsingResults,
            'toSearch': this.handleSearchResults,
            'current': this.handleCurrent,
            'next': this.handleNext
        };
        this.microPlayers = [];
        this.microPlayersObjects = {};
        this.videoIdMicroPlayerIdMap = {};
        this.popUpWindow = ''; //Name of the pop up window to set focus
        //File paths
        this.flashPlayerPath = cdnDomain + "/media/swf/";
        this.collectionsXMLPath = "/static_html_files/";
        this.videoCenterPageUrl = "/video-center";

        this.popUpPageUrl = '/public/page/0_0_WP_3001.html';
        //this.popUpPageUrl = '0_0_Neeki_PopUp.html'; //For testing popup at local system
        this.objName = objName;
        this.videoPlayerDivId = 'video_player';
        this.sideNavUlId = 'video_sidenav';
        this.topNavUlId = 'video_topnav';
        this.nextVideoDivId = 'next_video';
        this.videoResultsDivId = 'video_results';
        this.searchDivId = 'video_search';
        this.advertisementDivId = 'advertisement';
        this.collectionsSelectId = 'collectionsSelectId';
        this.videoSummaryDivId = 'video_headline';
        this.registeredVideosDivId = 'registered_videos';
        //DIV ids
        if (this.videoUtil.isNotBlankOrNull(args)) {
            this.videoPlayerDivId = args.videoPlayerDivId ? args.videoPlayerDivId : 'video_player';
            this.sideNavUlId = args.sideNavUlId ? args.sideNavUlId : 'video_sidenav';
            this.topNavUlId = args.topNavUlId ? args.topNavUlId : 'video_topnav';
            this.nextVideoDivId = args.nextVideoDivId ? args.nextVideoDivId : 'next_video';
            this.videoResultsDivId = args.videoResultsDivId ? args.videoResultsDivId : 'video_results';
            this.searchDivId = args.searchDivId ? args.searchDivId : 'video_search';
            this.advertisementDivId = args.advertisementDivId ? args.advertisementDivId : 'advertisement';
            this.videoSummaryDivId = args.videoSummaryDivId ? args.videoSummaryDivId : 'video_headline';
            this.registeredVideosDivId = args.registeredVideosDivId ? args.registeredVideosDivId : '';
        }
        this.xmlDoc = '';
        this.defaultCollectionName = 'News';

        //Objects from xml parsing
        this.rssUrlsObject = {};
        this.contentUrlsObject = {};
        this.collectionNamesArray = [];
        this.subcollectionsObject = {};
        this.urlKeysCollectionMap = {};
        this.urlKeysSubCollectionMap = {};

        //Current and next video id
        this.currentlyPlayingVideoId = '';
        this.currentlyPlayingVideoIds = [];
        this.currentlyPlayingCollection = '';
        this.currentlyPlayingSubCollection = '';
        this.nextVideoId = '';

        // visible collection & subcollection id
        this.visibleCollectionId = '';
        this.visibleSubCollectionId = '';

        //Search variable
        this.sortOrder = 'relevancy'; //Default is kept as relevancy
        this.currentSearchText = '';
        this.isVideoResultsInSideNav = false;

        //JSON objects -
        this.currentPlayingJsonObject = {};
        this.currentBrowsingJsonObject = {};
        this.currentSearchJsonObject = {};
        this.currentVideoDetailsJsonObject = {};
        this.nextVideoDetailsJsonObject = {};

        //Registered videos on article page
        this.registeredVideos = [];
        this.registeredVideosIds = [];
        this.relatedVideosCollection = ''; //collection of the 1st video in the article page.
        //pagination
        //this.lastPageNumber = 1;
        //this.currentPageNumber = 1;
        //this.browsingPageNumber = 1;
        // Default - toPlay - blank, toSearch, toBrowse
        this.userAction = '';

        //source application
        this.sourceApplicationName = '';


        //Article page bookmark
        this.bookMarkedId = '';
        this.bookMarkedLocation = '';
        this.cookieUserType = '';
        // get common config parameters, mix into "this" for now, to avoid major rework
        // TODO: move all config info to this.cfg
        dj.lang.mixin(this,this.videoUtil.setupConfig());
    },

    loadVideo: function(id, sourceApplicationName, domainName){
      console.info("video.js v" + this.version);
        if (this.videoUtil.isNotBlankOrNull(domainName)) {
            this.domainName = domainName;
        }
        this.sourceApplicationName = sourceApplicationName;
        if (this.videoUtil.isNotBlankOrNull(id)) {
            if (id.indexOf('{') == -1) {
                this.currentlyPlayingVideoId = '{' + id + '}';
            }
            else {
                this.currentlyPlayingVideoId = id;
            }
        }

        if (swfobject.getFlashPlayerVersion().major >= 9) {
          this.createFlashPlayer();
        }
        else {
          dj.util.Video.nonSupportingFlashPlayer(this.videoPlayerDivId);
        }
    },

    continueLoadVideo: function(){
        this.loadCollectionsDoc(this,this.handleLoadVideo);
    },

    handleLoadVideo: function(data, xhr) {
        this.xmlDoc = xhr.responseXML.documentElement;
        this.parseInformationFromXmlDoc();

        if (this.sourceApplicationName == 'articlePage') {
            this.visibleCollectionId = '';
            var vObj = '';
            if (this.videoUtil.isNotBlankOrNull(this.currentlyPlayingVideoId)) {
                vObj = this.registeredVideos[this.registeredVideosIds.indexOf(this.currentlyPlayingVideoId)];
                this.playVideoByParam(vObj);
            } else {
                if (this.videoUtil.isNotBlankOrNull(this.bookMarkedId)) {
                    this.currentlyPlayingVideoId = this.bookMarkedId;
                    vObj = this.registeredVideos[this.registeredVideosIds.indexOf(this.currentlyPlayingVideoId)];
                    vObj.seekTime = this.bookMarkedLocation;
                    this.playVideoByParam(vObj);
                } else {
                    vObj = this.registeredVideos[0];
                    this.currentlyPlayingVideoId = vObj.id;
                    this.playVideoByParam(vObj);
                }
            }

            this.relatedVideosCollection = this.videoUtil.isNotBlankOrNull(this.registeredVideos[0]['wsj-section']) ? this.registeredVideos[0]['wsj-section'] : this.defaultCollectionName;
            this.currentlyPlayingCollection = this.registeredVideos[0]['wsj-section'];
            if (this.currentlyPlayingCollection == 'Lifestyle') {
                this.currentlyPlayingCollection = 'Life & Style';
            }
            this.getVideos(this.validateContentUrl(this.contentUrlsObject[this.currentlyPlayingCollection]) + '&count=60', '', this, this.finishHandleLoadVideo); //to-do
        }
        else {
            if (typeof AT_VARS != 'undefined' && AT_VARS.baseDocId) {
                this.currentlyPlayingVideoId = '{' + AT_VARS.baseDocId + '}';
            }
            //Logic for Initial play in Video center STARTS
            if (this.videoUtil.isNotBlankOrNull(this.currentlyPlayingVideoId)) {
                this.playVideoByVideoId(this.currentlyPlayingVideoId);
                //currentVideoDetailsJsonObject - param set in playVideoByVideoId
                this.currentlyPlayingCollection = this.currentVideoDetailsJsonObject['wsj-section'];
                this.currentlyPlayingSubCollection = this.currentVideoDetailsJsonObject['wsj-subsection'];
                //Then make a call to getVideos with the content url of collection name or subcollection name
                if (this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection)) {
                    this.visibleCollectionId = this.collectionNameForSubcollection(this.currentlyPlayingSubCollection);
                    this.currentlyPlayingCollection = this.visibleCollectionId;
                    this.getVideos(this.validateContentUrl(this.contentUrlsObject[this.currentlyPlayingSubCollection]) + '&count=60', '', this, this.finishHandleLoadVideo);
                    //this.updateSideNavAppearance('subcollection',this.currentlyPlayingSubCollection);
                }
                else {
                    if (!this.videoUtil.isNotBlankOrNull(this.currentlyPlayingCollection)) {
                        this.currentlyPlayingCollection = this.defaultCollectionName;
                    }
                    this.getVideos(this.validateContentUrl(this.contentUrlsObject[this.currentlyPlayingCollection]) + '&count=60', '', this, this.finishHandleLoadVideo);
                }
            }
            else {
                //BROWSER URL SCANNING LOGIC with sample for browserUrl starts
                var browserUrl = window.location.pathname;
                //browserUrl = '/video-center/personal-finance.html';
                //browserUrl = '/video-center/sports-lifestyle.html';
                this.currentlyPlayingCollection = this.defaultCollectionName;
                if (browserUrl.indexOf(".") != -1) {
                    var urlArray = browserUrl.split(".")[0].split('/');
                    var urlKey = urlArray.pop();
                    if (this.urlKeysCollectionMap[urlKey]) {
                        this.currentlyPlayingCollection = this.urlKeysCollectionMap[urlKey];
                    }
                    if (this.urlKeysSubCollectionMap[urlKey]) {
                        this.currentlyPlayingSubCollection = this.urlKeysSubCollectionMap[urlKey];
                        this.visibleCollectionId = this.collectionNameForSubcollection(this.currentlyPlayingSubCollection);
                        this.currentlyPlayingCollection = this.visibleCollectionId;
                    }
                }

                var getVideoCallback = dojo.hitch(this, function(){
                  this.currentlyPlayingVideoId = this.currentPlayingJsonObject.items[0].id;
                  this.playVideoByVideoId(this.currentlyPlayingVideoId);
                  this.finishHandleLoadVideo();
                });
                //BROWSER URL SCANNING LOGIC with sample for browserUrl ends
                if (this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection)) {
                    this.getVideos(this.validateContentUrl(this.contentUrlsObject[this.currentlyPlayingSubCollection]) + '&count=60', '', null, getVideoCallback);
                } else {
                    this.getVideos(this.validateContentUrl(this.contentUrlsObject[this.currentlyPlayingCollection]) + '&count=60', '', null, getVideoCallback);
                }

            }
        }

    },
    finishHandleLoadVideo: function() {
        //Logic for Initial play in Video center ENDS

        this.populateSideNav();
        this.populateTopNav();
        //In the begining Playing variables are set as browsing variables
        if (this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection)) {
            //this.getVideos(this.contentUrlsObject[this.currentlyPlayingSubCollection]);
            this.updateSideNavAppearance('subcollection', this.currentlyPlayingSubCollection);
            this.visibleSubCollectionId = this.currentlyPlayingSubCollection;
            this.browsingGroup = "subcollection";
            this.playingGroup = "subcollection";
        } else {
            //this.getVideos(this.contentUrlsObject[this.currentlyPlayingCollection]);
            this.updateSideNavAppearance('collection', this.currentlyPlayingCollection);
            this.visibleCollectionId = this.currentlyPlayingCollection;
        }
        this.currentBrowsingJsonObject = this.currentPlayingJsonObject;

        if (this.sourceApplicationName == 'articlePage' && this.registeredVideosIds.length > 0) {
            this.createRegisteredVideosThumbnails();
            this.updateVideoThumbnailVisual('', 'reg' + this.currentlyPlayingVideoId);
        }
        this.updateTopNavAppearance('', this.currentlyPlayingCollection);
        this.createNextVideo();
        this.createSearch();
        this.createAdvertisementFramework();
        //this.createAdvertisement('', '');
        this.populateMoreVideos(1);
        this.loadPagination(1);
        this.updateRssFeed((this.visibleSubCollectionId !== '') ? this.visibleSubCollectionId : this.visibleCollectionId);
    },
    validateContentUrl: function(contentUrl){
        if (this.videoUtil.isNotBlankOrNull(contentUrl)) {
            return contentUrl;
        } else {
            //this.visibleCollectionId = this.defaultCollectionName;
            this.currentlyPlayingCollection = this.defaultCollectionName;
            return this.contentUrlsObject[this.defaultCollectionName];
        }
    },
    createAdvertisementFramework: function(){
        if (this.advertisementDivId) {
            if (swfobject.getFlashPlayerVersion().major >= 9) {
                var dim = {w: "336", h: "280"};
                swfobject.embedSWF(this.flashPlayerPath + "adPlayer.swf", this.advertisementDivId, dim.w, dim.h, "9.0.0", "", {
                    'objName': this.getName(),
                    'movieWidth': dim.w,
                    'movieHeight': dim.h,
                    'host': location.host
                }, {
                    allowscriptaccess: "always",
                    wmode: "opaque"
                }, {});
            } else {
              dj.util.Video.nonSupportingFlashPlayer(this.advertisementDivId);
            }
        }
    },
    collectionNameForSubcollection: function(subCol){
        for (var index = 0, len = this.collectionNamesArray.length; index < len; ++index) {
            if (this.subcollectionsObject[(this.collectionNamesArray[index])].indexOf(subCol) != -1) {
                return this.collectionNamesArray[index];
            }
        }
    },
    pauseMicroPlayers: function(){
        try {
            for (var index = 0, len = this.microPlayers.length; index < len; ++index) {
                swfobject.getObjectById(this.microPlayers[index]).pauseVideo();
            }
        }
        catch (e) {
            console.error("Error while pausing microPlayers. " + e.message);
        }
    },
    setBookMark: function(){
        try {
            this.bookMarkedId = this.currentlyPlayingVideoId; // current playing video id
            this.bookMarkedLocation = Math.floor(swfobject.getObjectById("flashPlayer").getSeek()); // current playing video location
            swfobject.getObjectById("flashPlayer").pauseVideo();
        }
        catch (e) {
            console.error("Error while setting the bookmark. " + e.message);
        }
    },
    updateVideoThumbnailVisual: function(cleanId, applyId){
        if (cleanId !== '' && dojo.byId("li_" + cleanId)) {
          dojo.byId("li_" + cleanId).className = "";
        }
        if (applyId !== '' && dojo.byId("li_" + applyId)) {
          dojo.byId("li_" + applyId).className = "nowPlaying";
        }
    },

    //Will have to have different maps for url key for section and sub section
    parseInformationFromXmlDoc: function(){
        var collectionArray = this.xmlDoc.getElementsByTagName("collection");
        for (var index = 0, len = collectionArray.length; index < len; ++index) {
            var item = collectionArray[index];
            this.urlKeysCollectionMap[item.getAttribute("urlkey")] = item.getAttribute("name");
            this.contentUrlsObject[item.getAttribute("name")] = item.getAttribute("contenturl");
            this.rssUrlsObject[item.getAttribute("name")] = item.getAttribute("rssurl");
            this.collectionNamesArray[this.collectionNamesArray.length] = item.getAttribute("name");
            var subCollectionArray = item.getElementsByTagName("subcollection");
            var subCollectionArrayLength = subCollectionArray.length;
            var subCollNamesAr = [];
            for (var sindex = 0, slen = subCollectionArray.length; sindex < slen; ++sindex) {
                var sitem = subCollectionArray[sindex];
                this.urlKeysSubCollectionMap[sitem.getAttribute("urlkey")] = sitem.getAttribute("name");
                this.contentUrlsObject[sitem.getAttribute("name")] = sitem.getAttribute("contenturl");
                this.rssUrlsObject[sitem.getAttribute("name")] = sitem.getAttribute("rssurl");
                subCollNamesAr[sindex] = sitem.getAttribute("name");
            }
            this.subcollectionsObject[item.getAttribute("name")] = subCollNamesAr;
        }
    },
    createFlashPlayer: function(){
        if (dojo.byId(this.videoPlayerDivId)) {
            try {
                var dim = {w: "512", h: "363"};
                swfobject.embedSWF(this.flashPlayerPath + "main.swf", this.videoPlayerDivId, dim.w, dim.h, "9.0.0", "", {
                    'objName': this.getName(),
                    'allowPlayerPopup': '1',
                    'plyMediaEnabled': '1',
                    'movieWidth': dim.w,
                    'movieHeight': dim.h,
                    'host': location.host
                }, {
                    allowscriptaccess: "always",
                    wmode: "opaque"
                }, {
                    id: "flashPlayer"
                });
            }
            catch (e) {
                console.error("Error occured createFlashPlayer.." + e.message);
                dojo.byId(this.videoPlayerDivId).innerHTML = 'Couldn\'t load the flash player. \n Error message is: ' + e.message;
            }
        }
    },
    convertCurrentPlayingJsonToIdsArray: function(){
        this.currentlyPlayingVideoIds = [];
        if (this.currentPlayingJsonObject.items.length > 0) {
            for (var index = 0, len = this.currentPlayingJsonObject.items.length; index < len; ++index) {
                this.currentlyPlayingVideoIds[index] = this.currentPlayingJsonObject.items[index].id;
            }
        }
    },

    populateVideoSummary: function(name, description, formattedCreationDate){
        if (dojo.byId(this.videoSummaryDivId)) {
            var str = '';
            try {
                str += '<h2>' + name + ' <small>' + formattedCreationDate.split(' ')[0] + '</small>';
                str += '</h2>';
                str += '<p>' + description + '</p>';
            }
            catch (e) {
                console.error("Error occured in populateVideoSummary." + e.message);
                str += 'Couldn\'t get video summary.';
            }
            dojo.byId(this.videoSummaryDivId).innerHTML = str;
        }
    },

    createAdvertisement: function(imgUrl, link){
        try {
            swfobject.getObjectById(this.advertisementDivId).loadAd(imgUrl, link);
        }
        catch (e) {
            console.error("Error while loading ad in createAdvertisement : " + e);
        }
    },

    createNextVideo: function(){
        var str = 'Loading...';
        try {
            this.nextVideoId = this.getNextVideoId();
            if (this.nextVideoId !== '') {
                var url = '/api-video/get_video_info.asp?guid=' + this.nextVideoId + '&fields=all';
                this.getVideos(url, 'next');
            }
            else {
                str = 'No more videos.';
            }
        }
        catch (e) {
            console.error("Error occured while executing createNextVideo() - " + e.message);
            str += 'Couldn\'t determine next video details.';
        }
        if (dojo.byId(this.nextVideoDivId)) {
          dojo.byId(this.nextVideoDivId).innerHTML = str;
        }
    },
    populateNextVideo: function(){
        var str = '';
        try {
            var nameToDisplay = this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection) ? this.currentlyPlayingSubCollection : this.currentlyPlayingCollection;
            if (this.currentlyPlayingCollection == 'Search Results') {
                str += '<h3>Next in Video ' + this.currentlyPlayingCollection + '</h3>';
            }
            else {
                str += '<h3>Next in ' + nameToDisplay + ' Video</h3>';
            }
            str += '<ul class="newsItem video">';
            str += '<li>';
            str += '<a href="javascript:' + this.getName() + '.nextVideoThumbnailClicked(\'' + this.nextVideoDetailsJsonObject.id + '\')" style="background-image: url(' + this.nextVideoDetailsJsonObject.thumbnailURL + ')" class="preview"><span>&nbsp;</span></a>';
            str += '<h2><a href="javascript:' + this.getName() + '.nextVideoThumbnailClicked(\'' + this.nextVideoDetailsJsonObject.id + '\')">' + this.nextVideoDetailsJsonObject.name + '</a></h2>';
            var minutes = Math.floor(this.nextVideoDetailsJsonObject.duration / 60);
            var seconds = this.nextVideoDetailsJsonObject.duration % 60;
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            str += '<small>' + minutes + ':' + seconds + '</small>';
            str += '<p>' + this.nextVideoDetailsJsonObject.description + '</p>';
            str += '</li>';
            str += '</ul>';
        }
        catch (e) {
            console.error("Error occured while executing populateNextVideo() - " + e.message);
            str += 'Couldn\'t populate next video details.';
        }
        if (dojo.byId(this.nextVideoDivId)) {
          dojo.byId(this.nextVideoDivId).innerHTML = str;
        }
    },
    //need to work - to-do
    nextVideoThumbnailClicked: function(videoId){
        this.userAction = '';
        this.populateMoreVideos(1);
        this.loadPagination(1);
        this.updateVideoThumbnailVisual(this.currentlyPlayingVideoId, videoId);
        this.currentlyPlayingVideoId = videoId;
        this.playVideoByVideoId(videoId);
        this.createNextVideo();
        if (this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection)) {
            this.updateSideNavAppearance('subcollection', this.currentlyPlayingSubCollection);
        }
        else {
            this.updateSideNavAppearance('collection', this.currentlyPlayingCollection);
        }
    },

    createSearch: function(){
        var str = '';
        str += '<form id="searchForm" onSubmit="javascript:' + this.getName() + '.searchButtonClicked();return false;" class="" method="post" accept-charset="utf-8">';
        str += '<fieldset>';
        str += '<legend>Search Videos</legend>';
        str += '<div class="ctl">';
        str += '<label for="frmSearchSectCtl01">Search Videos</label>';
        str += '<input type="text" name="frmSearchSectCtl01" value="Search Video" id="frmSearchSectCtl01" class="text" onFocus="' + this.getName() + '.searchInputBoxFocused();"/>';
        str += '</div>';
        str += '<div class="ctl">';
        str += '<label for="frmSearchSectSub">Search</label>';
        str += '<button id="searchButton" type="submit">Search</button>';
        str += '</div>';
        str += '</fieldset>';
        str += '</form>';
        if (dojo.byId(this.searchDivId)) {
          dojo.byId(this.searchDivId).innerHTML = str;
        }
    },
    searchInputBoxFocused: function(){
      dojo.byId("frmSearchSectCtl01").value = "";
      dojo.byId("searchForm").className = "";
    },
    searchButtonClicked: function(){
        var searchTxt = dojo.byId("frmSearchSectCtl01").value.replace(/^\s+|\s+$/, '');
        if (searchTxt === '') {
          dojo.byId("searchForm").className = "search_error";
          dojo.byId("frmSearchSectCtl01").value = "Please enter search terms";
          dojo.byId("searchButton").focus();
            return false;
        }
        this.currentSearchText = searchTxt;
        this.sortOrder = 'relevancy';
        if (!this.isVideoResultsInSideNav) {
            this.insertVideoResultsInSideNav();
            this.isVideoResultsInSideNav = true;
        }
        this.updateVideoResultsInSideNav(this.currentSearchText);
        this.updateSideNavAppearance('collection', 'Search Results');
        var searchUrl = '/api-video/find_all_videos.asp?type=wsj-fulltext&query=' + searchTxt;
        this.performSearch(searchUrl);
        dojo.byId("searchButton").focus();
    },
    insertVideoResultsInSideNav: function(){
        var str = '';
        str += '<li id="Search Results" class="noSubCollection">';
        str += '</li>';
        str += dojo.byId(this.sideNavUlId).innerHTML;
        dojo.byId(this.sideNavUlId).innerHTML = str;
    },
    updateVideoResultsInSideNav: function(srchText){
        var fields = 'id,name,description,duration,thumbnailURL,videoURL,formattedCreationDate,wsj-section,wsj-subsection';
        var srchContentUrl = '/api-video/find_all_videos.asp?type=wsj-fulltext&query=' + srchText + '&fields=' + fields;
        this.contentUrlsObject['Search Results'] = srchContentUrl;
        var str = '';
        str += '<a id="a_Search Results" class="" href="javascript:' + this.getName() + '.sideNavClicked(\'collection\',\'Search Results\');">';
        str += 'Search Results</a>';
        dojo.byId("Search Results").innerHTML = str;
    },
    performSearch: function(searchUrl){
        this.userAction = 'toSearch';
        var fields = 'id,name,description,duration,thumbnailURL,videoURL,formattedCreationDate,wsj-section,wsj-subsection';
        dojo.byId(this.videoResultsDivId).innerHTML = '<p class="noResults"> Loading ... </p>';
        this.getVideos(searchUrl + '&fields=' + fields + '&count=60', this.userAction);
    },
    loadPagination: function(pageNumber){
        var varToDisplay = '';
        // Change the variable to display on the basis of user action
        if (this.userAction == 'toBrowse') {
            if (typeof this.currentBrowsingJsonObject != "undefined") {
                varToDisplay = this.currentBrowsingJsonObject.items;
            }
        }
        else
            if (this.userAction == 'toSearch') {
                if (typeof this.currentSearchJsonObject != "undefined") {
                    varToDisplay = this.currentSearchJsonObject.items;
                }
            }
            else {
                varToDisplay = this.currentPlayingJsonObject.items;
            }

        var currentPageNumber = Number(pageNumber);
        var flr = Math.floor(varToDisplay.length / this.pageSize);
        var cl = Math.ceil(varToDisplay.length / this.pageSize);
        /* variables for testing purpose
         currentPageNumber = 3;
         var flr = (Math.floor(60/this.pageSize));
         var cl = (Math.ceil(60/this.pageSize));
         */
        //var lastPageNumber = (flr == cl) ? Math.min(flr, cl) : Math.min(flr, cl) + 1;
        var lastPageNumber = Math.max(flr, cl);
        //this.lastPageNumber = lastPageNumber;
        //if currentpage number is = 1 - previous is disabled
        // if currentpagenumber = lastpage number - next is disabled
        var str = '';
        if (currentPageNumber == 1) {
            str += '<li id="previous" class="listFirst"><span>Previous</span></li>';
        }
        else {
            str += '<li id="previous" class="listFirst"><a href="javascript:' + this.getName() + '.paginationClicked(\'' + (currentPageNumber - 1) + '\')">Previous</a></li>';
        }
        for (var index = 1; index <= lastPageNumber; index++) {
            if (currentPageNumber == index) {
                str += '<li><span>' + index + '</span></li>';
            }
            else {
                str += '<li><a href="javascript:' + this.getName() + '.paginationClicked(\'' + index + '\')" >' + index + '</a></li>';
            }
        }
        if (currentPageNumber >= lastPageNumber) {
            str += '<li id="next"><span>Next</span></li>';
        }
        else {
            str += '<li id="next"><a href="javascript:' + this.getName() + '.paginationClicked(\'' + (currentPageNumber + 1) + '\')">Next</a></li>';
        }
        dojo.byId("pagination").innerHTML = str;
    },
    paginationClicked: function(pageNumber){
        /*
         if ((((this.playingGroup == 'collection') && (this.visibleCollectionId != this.currentlyPlayingCollection)) || ((this.playingGroup == 'subcollection') && (this.visibleSubCollectionId != this.currentlyPlayingSubCollection))) || (pageNumber != this.currentPageNumber)) {
         this.browsingPageNumber = Number(pageNumber);
         }
         else {
         this.currentPageNumber = Number(pageNumber);
         }
         */
        this.populateMoreVideos(pageNumber);
        this.loadPagination(pageNumber);
        this.updateRssFeed((this.visibleSubCollectionId !== '') ? this.visibleSubCollectionId : this.visibleCollectionId);
    },
    getVideos: function(url, userAction, context, callback, error ){

      var localErrorCallback = dojo.hitch( this, function(err, url, userAction, context, callback){
            setTimeout( this.getVideos( url, userAction, context, callback, err ), 10000);});

      var that=this;
      var params = {
          handleAs: "json",
          responseType: "application/json",
          callback: function(json){
              that.usrActnHash[userAction].apply(that,[json]);
              if ( callback ) {
                if ( context ) {
                  callback.apply(context);
                } else {
                  callback();
                }
              }
          },
          errorCallback: function(err){
            console.warn("faled to getVideos:"+err+", fetching "+url);
            localErrorCallback(err, url, userAction, context, callback);
          }
      };

      dj.util.Video.getVideoData(url, params);

    },
    handleResponse: function(json){
        this.currentPlayingJsonObject = json;
        this.convertCurrentPlayingJsonToIdsArray();
        /*
         this.populateMoreVideos(1);
         this.loadPagination(1);
         this.updateRssFeed((this.visibleSubCollectionId != '') ? this.visibleSubCollectionId : this.visibleCollectionId);
         */
    },
    handleBrowsingResults: function(json){
        this.currentBrowsingJsonObject = json;
        this.populateMoreVideos(1);
        this.loadPagination(1);
        this.updateRssFeed((this.visibleSubCollectionId !== '') ? this.visibleSubCollectionId : this.visibleCollectionId);
    },
    handleSearchResults: function(json){
        this.currentSearchJsonObject = json;
        this.populateMoreVideos(1);
        this.loadPagination(1);
    },
    handleCurrent: function(json){
        this.currentVideoDetailsJsonObject = json;
        this.currentlyPlayingCollection = this.currentVideoDetailsJsonObject['wsj-section'];
        this.currentlyPlayingSubCollection = this.currentVideoDetailsJsonObject['wsj-subsection'];
        this.playVideoByParam(this.currentVideoDetailsJsonObject);
        this.populateVideoSummary(this.currentVideoDetailsJsonObject.name, this.currentVideoDetailsJsonObject.description, this.currentVideoDetailsJsonObject.formattedCreationDate);
    },
    handleNext: function(json){
        this.nextVideoDetailsJsonObject = json;
        this.populateNextVideo();
    },
    populateSideNav: function(){
        var src = '';
        var collectionArray = this.xmlDoc.getElementsByTagName("collection");
        for (var index = 0, len = collectionArray.length; index < len; ++index) {
            var item = collectionArray[index];
            var subCollectionArray = item.getElementsByTagName("subcollection");
            var subCollectionArrayLength = subCollectionArray.length;
            if (subCollectionArrayLength > 0) {
                src += '<li class="expand" id="' + item.getAttribute("name") + '"><a id="a_' + item.getAttribute("name") + '" class="" href="javascript:' + this.getName() + '.sideNavClicked(\'' + item.nodeName + '\',\'' + item.getAttribute("name") + '\');">' + item.getAttribute("name") + '</a>';
            }
            else {
                src += '<li class="noSubCollection" id="' + item.getAttribute("name") + '"><a id="a_' + item.getAttribute("name") + '" class="" href="javascript:' + this.getName() + '.sideNavClicked(\'' + item.nodeName + '\',\'' + item.getAttribute("name") + '\');">' + item.getAttribute("name") + '</a>';
            }
            if (subCollectionArrayLength > 0) {
                src += '<ul id=Sub' + item.getAttribute("name") + '>';
                for (var sindex = 0, slen = subCollectionArray.length; sindex < slen; ++sindex) {
                    var sitem = subCollectionArray[sindex];
                    src += '<li><a id="a_' + sitem.getAttribute("name") + '" class="current" href="javascript:' + this.getName() + '.sideNavClicked(\'' + sitem.nodeName + '\',\'' + sitem.getAttribute("name") + '\');">' + sitem.getAttribute("name") + '</a></li>';
                }
                src += '</ul>';
            }
            src += '</li>';
        }
        dojo.byId(this.sideNavUlId).innerHTML = src;
    },

    populateTopNav: function(){
        if (dojo.byId(this.topNavUlId)) {
            var src = '';
            var collectionArray = this.xmlDoc.getElementsByTagName("collection");
            for (var index = 0, len = collectionArray.length; index < len; ++index) {
                var item = collectionArray[index];
                var itemName = item.getAttribute("name");
                if ((itemName != 'Most Popular Today') && (itemName != 'Management') && (itemName != 'Special Packages')) {
                    var className = itemName;
                    className = 'navlink_' + className.toLowerCase().replace(/\s+/g, '_');
                    if (index == '1') {
                        src += '<li class="listFirst">';
                    }
                    else {
                        src += '<li>';
                    }
                    src += '<a class=' + className + ' id="a_topnav_' + itemName + '" href="javascript:' + this.getName() + '.topNavClicked(\'' + item.nodeName + '\',\'' + itemName + '\');">' + itemName + '</a>';
                    src += '</li>';
                }
            }
            dojo.byId(this.topNavUlId).innerHTML = src;
        }
    },

    topNavClicked: function(strType, strName){
        this.userAction = '';
        this.updateSideNavAppearance(strType, strName);
        this.updateTopNavAppearance(strType, strName);
        this.currentlyPlayingCollection = strName;
        this.getVideos(this.validateContentUrl(this.contentUrlsObject[this.currentlyPlayingCollection]) + '&count=60', '',
                this, this.handleTopNavGetVideos);
    },
    handleTopNavGetVideos: function() {
        this.visibleCollectionId = this.currentlyPlayingCollection;
        this.currentBrowsingJsonObject = this.currentPlayingJsonObject;
        this.currentlyPlayingVideoId = this.currentPlayingJsonObject.items[0].id;
        this.playVideoByVideoId(this.currentlyPlayingVideoId);
        this.populateMoreVideos(1);
        this.loadPagination(1);
        this.browsingGroup = "collection";
        this.playingGroup = "collection";
        this.createNextVideo();
    },

    updateTopNavAppearance: function(strType, strName){
        var removeFrom = this.currentlyPlayingCollection;
        if (removeFrom == 'Lifestyle') {
            removeFrom = 'Life & Style';
        }
        if (dojo.byId('a_topnav_' + removeFrom)) {
            var playingCollectionClassName = dojo.byId('a_topnav_' + removeFrom).className;
            var newPlayingCollectionClassName = playingCollectionClassName.replace('selected ', '');
            dojo.byId('a_topnav_' + removeFrom).className = newPlayingCollectionClassName;
        }
        if (dojo.byId('a_topnav_' + strName)) {
            var classNameToApply = 'selected ' + 'navlink_' + strName.toLowerCase().replace(/\s+/g, '_');
            dojo.byId('a_topnav_' + strName).className = classNameToApply;
        }
    },

    sideNavClicked: function(strType, strName){
        this.userAction = '';
        if (this.videoUtil.isNotBlankOrNull(this.contentUrlsObject[strName])) {
            this.browsingGroup = strType;
            if (strName == 'Search Results') {
                this.userAction = 'toSearch';
                this.sortOrder = 'relevancy';
            }
            else
                if (((strType == 'subcollection') && (strName != this.currentlyPlayingSubCollection)) || ((strType == 'collection') && (strName != this.currentlyPlayingCollection))) {
                    this.userAction = 'toBrowse';
                }
            this.updateSideNavAppearance(strType, strName);
            dojo.byId(this.videoResultsDivId).innerHTML = '<p class="noResults"> Loading ... </p>';
            if (this.videoUtil.isNotBlankOrNull(this.userAction)) {
                this.getVideos(this.contentUrlsObject[strName] + '&count=60', this.userAction);
            }
            else {
                this.populateMoreVideos(1);
                this.loadPagination(1);
            }
        }
        else {
            this.updateSideNavAppearance(strType, strName);
        }
    },
    searchLinkClicked: function(searchUrl, sortParam){
        this.sortOrder = sortParam;
        this.performSearch(searchUrl);
    },
    populateMoreVideos: function(pageNumber){
        var varToDisplay = '';
        // Change the variable to display on the basis of user action
        if (this.userAction == 'toBrowse') {
            if (typeof this.currentBrowsingJsonObject != "undefined") {
                varToDisplay = this.currentBrowsingJsonObject.items;
            }
        }
        else
            if (this.userAction == 'toSearch') {
                if (typeof this.currentSearchJsonObject != "undefined") {
                    varToDisplay = this.currentSearchJsonObject.items;
                }
            }
            else {
                varToDisplay = this.currentPlayingJsonObject.items;
            }
        var startIndex = (pageNumber - 1) * 12;
        var endIndex = Math.min(pageNumber * 12 - 1, varToDisplay.length - 1);
        var str = '';
        if (this.userAction == 'toSearch' && varToDisplay.length > 0) {
            str += '<ul class="sort"><li class="listFirst">Sort by:</li>';
            var sUrl = '/api-video/find_all_videos.asp?type=wsj-fulltext&query=' + this.currentSearchText;
            if (this.sortOrder == 'relevancy') {
                str += '<li class="selected"><span>relevance</span></li>';
                str += '<li class="listLast"><a href="javascript:' + this.getName() + '.searchLinkClicked(\'' + sUrl + '&sort=date+desc\',\'date\')">Date</a></li>';
            }
            else {
                str += '<li><a href="javascript:' + this.getName() + '.searchLinkClicked(\'' + sUrl + '&sort=relevancy\',\'relevancy\')">Relevance</a></li>';
                str += '<li class="listLast selected"><span>Date</span></li>';
            }
            str += '</ul>';
            str += '<p class="resultsLabel">' + (startIndex + 1) + ' - ' + (endIndex + 1) + ' results out of ' + varToDisplay.length + ' for: ' + this.currentSearchText + '</p>';
        }
        if (this.userAction == 'toSearch' && varToDisplay.length === 0) {
            str += '<p class="noResults"> No content matches your search terms. Please try again. </p>';
            dojo.byId(this.videoResultsDivId).innerHTML = str;
            return false;
        }
        str += '<ul class="newsItem video videoListMed">';
        for (var i = startIndex; i < endIndex + 1; i++) {
            var title = varToDisplay[i];
            str += '<li id="li_' + title.id + '" class="">';
            str += '<a href="javascript:' + this.getName() + '.videoThumbnailClicked(\'' + title.id + '\')" id="' + title.id + '" style="background-image: url(' + unescape(title.thumbnailURL) + ');" class="preview"><span>&nbsp;</span></a>';
            str += '<h2><a href="javascript:' + this.getName() + '.videoThumbnailClicked(\'' + title.id + '\')">' + title.name + '</a></h2>';
            var minutes = Math.floor(title.duration / 60);
            var seconds = title.duration % 60;
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            str += '<small>' + minutes + ':' + seconds + '</small>';

            if (this.videoUtil.isNotBlankOrNull(title.formattedCreationDate)) {
                str += '<small> ' + title.formattedCreationDate.split(' ')[0] + '</small>';
            }
            str += '</li>';
            if (((i + 1) % 4) === 0) {
                str += '<li class="rowEnd"></li>';
            }
        }
        str += '</ul>';

        //Pagination starts
        str += '<ul id="pagination" class="pagination">';
        str += '</ul>';
        //pagination ends

        //RSS feed starts
        if (this.userAction != 'toSearch') {
            var nameToDisplay = this.videoUtil.isNotBlankOrNull(this.visibleSubCollectionId) ? this.visibleSubCollectionId : this.visibleCollectionId;
            str += '<a target="_blank" id="rssFeed" class="rss" href="">' + nameToDisplay + ' Video Feed</a>';
        }
        //RSS feed ends
        dojo.byId(this.videoResultsDivId).innerHTML = str;

        if (!this.playFromRegisteredVideos) {
            this.updateVideoThumbnailVisual('', this.currentlyPlayingVideoId);
        }
    },
    updateRssFeed: function(str){
        if (dojo.byId("rssFeed")) {
          dojo.byId("rssFeed").href = this.rssUrlsObject[str];
        }
    },
    videoThumbnailClicked: function(videoId){
        //      this.currentPageNumber  = this.browsingPageNumber;
        var videoDetails = '';
        if (this.sourceApplicationName == 'articlePage') {
            this.playFromRegisteredVideos = false;
            this.updateVideoThumbnailVisual('reg' + this.currentlyPlayingVideoId, '');
            videoDetails = this.videoUtil.getVideoDetails({
                'id': videoId,
                'fields': 'linkRelativeURL,wsj-section'
            });
        }
        if (videoDetails !== '' && (this.relatedVideosCollection != videoDetails['wsj-section'] || this.visibleCollectionId == 'Search Results')) {
            window.location.href = videoDetails.linkRelativeURL + '.html';
;
        }
        else {
            this.playingGroup = this.browsingGroup;
            if (this.userAction == 'toSearch') {
                this.currentPlayingJsonObject = this.currentSearchJsonObject;
            }
            else
                if (this.userAction == 'toBrowse') {
                    this.currentPlayingJsonObject = this.currentBrowsingJsonObject;
                }
            this.convertCurrentPlayingJsonToIdsArray();
            //Update top navigation
            this.updateTopNavAppearance('', this.visibleCollectionId);

            this.currentlyPlayingCollection = this.visibleCollectionId;
            this.currentlyPlayingSubCollection = this.visibleSubCollectionId;
            this.updateVideoThumbnailVisual(this.currentlyPlayingVideoId, videoId);
            this.currentlyPlayingVideoId = videoId;
            this.playVideoByVideoId(videoId);
            this.createNextVideo();

            // for testing auto play
            //this.playNextVideo();
        }
        if (dojo.byId("flashPlayer")) {
          window.scrollTo( 0, dojo.position( dojo.byId("flashPlayer"), true ).y );
        }
    },
    //Called by flash player - upon finishing a video
    playNextVideo: function(){
        if (this.nextVideoId !== '') {
            this.updateVideoThumbnailVisual('reg' + this.currentlyPlayingVideoId, 'reg' + this.nextVideoDetailsJsonObject.id);
            this.updateVideoThumbnailVisual(this.currentlyPlayingVideoId, this.nextVideoDetailsJsonObject.id);
            this.currentlyPlayingVideoId = this.nextVideoDetailsJsonObject.id;
            this.playVideoByParam(this.nextVideoDetailsJsonObject);
            this.populateVideoSummary(this.nextVideoDetailsJsonObject.name, this.nextVideoDetailsJsonObject.description, this.nextVideoDetailsJsonObject.formattedCreationDate);
            this.createNextVideo();

            /*
             if ((((this.playingGroup == 'collection') && (this.visibleCollectionId == this.currentlyPlayingCollection)) || ((this.playingGroup == 'subcollection') && (this.visibleSubCollectionId == this.currentlyPlayingSubCollection))) && (this.currentPageNumber == this.browsingPageNumber)) {
             this.currentPageNumber = Math.floor(this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) / this.pageSize) + 1;
             this.populateMoreVideos(this.currentPageNumber);
             this.loadPagination(Number(this.currentPageNumber));
             this.updateRssFeed((this.visibleSubCollectionId != '') ? this.visibleSubCollectionId : this.visibleCollectionId);
             }
             */
        }
    },
    getNextVideoId: function(){
        if (this.sourceApplicationName == 'articlePage') {
            //autoplay logic for article page
            if (this.playFromRegisteredVideos && this.registeredVideosIds.indexOf(this.currentlyPlayingVideoId) < this.registeredVideosIds.length - 1) {
                return this.registeredVideosIds[this.registeredVideosIds.indexOf(this.currentlyPlayingVideoId) + 1];
            }
            if (this.playFromRegisteredVideos && this.registeredVideosIds.indexOf(this.currentlyPlayingVideoId) == this.registeredVideosIds.length - 1) {
                this.playFromRegisteredVideos = false;
                return this.currentlyPlayingVideoIds[0];
            }

            if (this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) < (this.currentlyPlayingVideoIds.length - 1)) {
                return this.currentlyPlayingVideoIds[this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) + 1];
            }
            if (this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) == (this.currentlyPlayingVideoIds.length - 1)) {
                return '';
            }
        }
        else {
            //autoplay logic for video center
            if (this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) == -1) {
                return this.currentlyPlayingVideoIds[0];
            }
            if (this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) < (this.currentlyPlayingVideoIds.length - 1)) {
                return this.currentlyPlayingVideoIds[this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) + 1];
            }
            if (this.currentlyPlayingVideoIds.indexOf(this.currentlyPlayingVideoId) == (this.currentlyPlayingVideoIds.length - 1)) {
                if (this.currentlyPlayingCollection == 'Search Results') {
                    return '';
                }
                if (this.playingGroup !== "" && this.playingGroup == 'collection') {
                    //get the videos for next collection
                    return this.getVideoIdFromNextCollection();
                }
                if (this.playingGroup !== "" && this.playingGroup == 'subcollection') {
                    //get the videos for next subcollection
                    return this.getVideoIdFromNextSubCollection();
                }
            }
        }
    },
    getVideoIdFromNextSubCollection: function(){
      var subColAr = this.subcollectionsObject[this.currentlyPlayingCollection];
      if (subColAr.indexOf(this.currentlyPlayingSubCollection) != subColAr.length - 1) {
          this.currentlyPlayingSubCollection = subColAr[subColAr.indexOf(this.currentlyPlayingSubCollection) + 1];
          this.getVideos(this.contentUrlsObject[this.currentlyPlayingSubCollection] + '&count=60', '', this, handleGetVideoIdFromNextSubColection );
      } else {
          //to-do
          //this.playingGroup = 'collection';
          this.currentlyPlayingSubCollection = '';
          return this.getVideoIdFromNextCollection();
      }
    },
    handleGetVideoIdFromNextSubColection : function() {
        if (this.currentPlayingJsonObject.items.length === 0) {
            return this.getVideoIdFromNextSubCollection();
        }
        else {
            return this.currentPlayingJsonObject.items[0].id;
        }
    },
    getVideoIdFromNextCollection: function(){

        if (this.collectionNamesArray.indexOf(this.currentlyPlayingCollection) != this.collectionNamesArray.length - 1) {
            if (this.skipCollection) {
                this.currentlyPlayingCollection = this.collectionNamesArray[this.collectionNamesArray.indexOf(this.currentlyPlayingCollection) + 1];
            }
            this.skipCollection = true;
            this.getVideos(this.contentUrlsObject[this.currentlyPlayingCollection] + '&count=60', '', this, handleGetVideoIdFromNextCollection);
        }
        else {
            //return '';
            this.currentlyPlayingCollection = this.defaultCollectionName;
            this.skipCollection = false;
            return this.getVideoIdFromNextCollection();
            //this.getVideos(this.contentUrlsObject[this.currentlyPlayingCollection] + '&count=60', '', false);
            //return this.getNextVideoId();
        }
    },
    handleGetVideoIdFromNextCollection : function() {
            if (this.currentPlayingJsonObject.items.length === 0) {
                return this.getVideoIdFromNextCollection();
            }
            else {
                return this.currentPlayingJsonObject.items[0].id;
            }
    },

    loadCollectionsDoc: function(context, callback){

      var params = {
          context: context,
          callback: callback,
          responseType: "text/xml",
          errorCallback: function(){
            console.error("Failure while loading video Collection xml.");
          }
      };
      dj.util.Video.getVideoData(this.collectionsXMLPath + "video-collections.xml", params);
    },

    updateSideNavAppearance: function(strType, id){
        if (this.visibleSubCollectionId !== '') {
            if (dojo.byId('a_' + this.visibleSubCollectionId)) {
                if (dojo.byId('a_' + this.visibleSubCollectionId).className == 'subcollection-selected') {
                  dojo.byId('a_' + this.visibleSubCollectionId).className = 'current';
                }
            }
        }
        if (strType == 'collection') {
            if (this.visibleCollectionId !== '') {
                var vCol = dojo.byId(this.visibleCollectionId);
                var aVCol = dojo.byId('a_' + this.visibleCollectionId);

                if (vCol.className == 'expanded') {
                    vCol.className = 'expand';
                    aVCol.className = '';
                } else if (vCol.className == 'expand') {
                    aVCol.className = '';
                } else {
                    vCol.className = 'noSubCollection';
                    aVCol.className = '';
                }
            }
            if (dojo.byId(id).className == 'expand') {
              dojo.byId(id).className = 'expanded';
              dojo.byId('a_' + id).className = 'collection-selected';
            }
            else {
              dojo.byId(id).className = 'noSubCollection-expanded';
              dojo.byId('a_' + id).className = 'selected';
            }
            this.visibleCollectionId = id;
            this.visibleSubCollectionId = '';
        }
        if (strType == 'subcollection') {
            if (this.videoUtil.isNotBlankOrNull(dojo.byId('a_' + id))) {
              dojo.byId('a_' + id).className = 'subcollection-selected';
            }
            if (this.videoUtil.isNotBlankOrNull(dojo.byId(this.visibleCollectionId))) {
              dojo.byId(this.visibleCollectionId).className = 'expanded';
            }
            if (this.videoUtil.isNotBlankOrNull(dojo.byId('a_' + this.visibleCollectionId))) {
              dojo.byId('a_' + this.visibleCollectionId).className = '';
            }
            this.visibleSubCollectionId = id;
        }
    },
    getName: function(){
        return this.objName;
    },
    playVideoByVideoId: function(videoId){
        var url = '/api-video/get_video_info.asp?guid=' + videoId + '&fields=all';
        this.getVideos(url, 'current');
    },
    playVideoByParam: function(params){
        var adZone = new dj.util.Ads().getRegisteredAdsZone('');
        var lineup = this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection) ? this.currentlyPlayingSubCollection : this.currentlyPlayingCollection;//lineup - collection / subcollection name
        //var rssUrl = this.rssUrlsObject[lineup];//rssUrl - call get RSS
        if (adZone != 'default' && adZone != '') {
            params.adZone = adZone;
        }
        params.lineup = lineup;
        params.emailPartnerID = 110626;
        params.site = this.site;
        params.msrc = this.msrc;
        params.adFrmt = "frmt=2;";
        params.playerName = (this.sourceApplicationName == 'articlePage') ? "video_articletab" : "video_videocenter";
        params.embedPlayerURL = this.flashPlayerPath + "main.swf";
        params.embedConfigURL = this.embedConfigURL;
        params.embedPlayerID = "1000";
        params.embedName = "flashPlayer"; //Name of the flash object
        params.embedBaseURL = this.flashPlayerPath;
        params.embedHeight = 363;
        params.embedWidth = 512;
        params.larsID = 91;
        params.larsAdTrackingID = 1259;
        params.prop5 = window.location.href.split('?')[0];//window.location.host+window.location.pathname; //this.videoUtil.getUrlParam(
        params.prop6 = window.location.href;
        params.prop10 = this.videoUtil.getUrlParam(window.location.href, 'mod');
        params.prop11 = this.videoUtil.getUrlParam(window.location.href, 'reflink');
        params.prop19 = (this.sourceApplicationName == 'articlePage') ? "video_tab" : "video";
        params.prop24 = this.prop24;
        params.prop25 = this.prop25;
        params.prop27 = this.prop27;
        //var subSecComponent = this.videoUtil.isNotBlankOrNull(this.currentlyPlayingSubCollection) ? this.currentlyPlayingSubCollection : this.currentlyPlayingCollection;
        var subSecComponent = this.videoUtil.omnitureEncoding(this.currentlyPlayingCollection, this.currentlyPlayingSubCollection, 's');
        var secComponent = this.videoUtil.omnitureEncoding(this.currentlyPlayingCollection, this.currentlyPlayingSubCollection, 'c');
        params.prop2 = "WSJ_" + secComponent;
        params.prop3 = "WSJ_Video_Video_" + secComponent;
        params.prop22 = "WSJ_Video_Video_" + subSecComponent;
        params.prop26 = "WSJ_" + subSecComponent;
        params.emailURL = this.emailURL;
        //console.info("For main player: " + $H(params).inspect());
        swfobject.getObjectById("flashPlayer").playVideo(dojo.toJson(params));
    },


    openPopUpPlayer: function(){
        var currentPlayingLocation = Math.floor(swfobject.getObjectById("flashPlayer").getSeek());
        var width = '512';
        var height = '660';
        var currentlyPlayingCollection = this.currentlyPlayingCollection;
        if ((currentlyPlayingCollection == 'Special Packages') || (currentlyPlayingCollection == 'Search Results')) {
            currentlyPlayingCollection = this.currentVideoDetailsJsonObject['wsj-section'];
        }
        //window.open(this.popUpPageUrl,'name','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
        this.popUpWindow = window.open(this.popUpPageUrl + '?currentPlayingLocation=' + currentPlayingLocation + '&currentlyPlayingCollection=' + escape(currentlyPlayingCollection) + '&currentlyPlayingVideoId=' + this.currentlyPlayingVideoId, 'popUpPlayer', 'height=' + height + ',width=' + width + ',left=' + ((screen.width - Number(width)) / 2) + ',top=' + (screen.height - Number(height)) / 2 + ',resizable=yes,scrollbars=no,toolbar=no,status=no');
    },

    focusPopUp: function(){
        if (this.popUpWindow) {
            this.popUpWindow.focus();
        }
    },

    //ARTICLE PAGE SPECIFIC
    createRegisteredVideosThumbnails: function(){
        if (this.registeredVideosIds.length > 0) {
            var str = '';
            for (var index = 0, len = this.registeredVideosIds.length; index < len; ++index) {
                var title = this.registeredVideos[index];
                if (title) {
                  str += '<li id="li_reg' + title.id + '" class="">';
                  str += '<a href="javascript:' + this.getName() + '.regVideoThumbnailClicked(\'' + title.id + '\',\'' + unescape(title.videoURL) + '\')" id="' + title.id + '" style="background-image: url(' + unescape(title.thumbnailURL) + ');" class="preview"><span>&nbsp;</span></a>';
                  str += '<h2><a href="javascript:' + this.getName() + '.regVideoThumbnailClicked(\'' + title.id + '\',\'' + unescape(title.videoURL) + '\')">' + title.name + '</a></h2>';

                  var minutes = Math.floor(title.duration / 60);
                  var seconds = title.duration % 60;
                  if (seconds < 10) {
                      seconds = '0' + seconds;
                  }
                  str += '<small>' + minutes + ':' + seconds + '</small>';
                  str += '</li>';
                  if (((index + 1) % 4) === 0) {
                      str += '<li class="rowEnd"></li>';
                  }
                }
            }
            dojo.byId(this.registeredVideosDivId).innerHTML = str;
        }
    },

    regVideoThumbnailClicked: function(videoId){
        this.playFromRegisteredVideos = true;
        this.updateVideoThumbnailVisual('reg' + this.currentlyPlayingVideoId, 'reg' + videoId);
        this.updateVideoThumbnailVisual(this.currentlyPlayingVideoId, '');
        this.currentlyPlayingVideoId = videoId;
        this.playVideoByVideoId(videoId);
        this.createNextVideo();
    },

    // ARTICLE PAGE WRAPPER CLASSES
    registerVideo: function(videoId){
        this.playFromRegisteredVideos = true;
        if (videoId.indexOf('{') == -1) {
            videoId = '{' + videoId + '}';
        }
        if (this.registeredVideosIds.indexOf(videoId) == -1) {
            this.registeredVideosIds[this.registeredVideosIds.length] = videoId;
            //Details of the videos will be used to create the thumbnails
            this.registeredVideos[this.registeredVideos.length] = this.videoUtil.getVideoDetails({
                'id': videoId,
                'fields': 'all'
            });
        }
    },
    loadSoloVideo: function(videoId, divId){
        if (videoId.indexOf('{') == -1) {
            videoId = '{' + videoId + '}';
        }
        var microPlayerId = "MicroPlayer_" + Math.floor(Math.random() * 1000000);
        this.microPlayers[this.microPlayers.length] = microPlayerId;
        this.videoIdMicroPlayerIdMap[videoId] = microPlayerId;
        if (!dj.context.video) {
            dj.context.video = {};
        }
        if (!dj.context.video.soloVideos) {
            dj.context.video.soloVideos = [];
        }
        dj.context.video.soloVideos[videoId] = this;

        if (swfobject.getFlashPlayerVersion().major >= 9) {
            var dim = {w: "272", h: "180"};
            swfobject.embedSWF(this.flashPlayerPath + "microPlayer.swf", divId, dim.w, dim.h, "9.0.0", "", {
                'objName': "dummy",
                'videoGUID': videoId,
                'allowPlayerPopup': '1',
                'plyMediaEnabled': '1',
                'movieWidth': dim.w,
                'movieHeight': dim.h,
                'host': location.host
            }, {
                allowscriptaccess: "always",
                wmode: "opaque"
            }, {
                id: microPlayerId
            });
        }
        else {
          dj.util.Video.nonSupportingFlashPlayer(divId);
        }
    },

    //Methods for microplayer...called from flash, needs to return JSON...use dojo.Deferred to implement sync behavior
    getJSON: function(id){
        var url = '/api-video/get_video_info.asp?guid=' + id;

        url += '&fields=all';

        var params = {
            context: this,
            handleAs: "json",
            sync: true,  // This is a callout to Flash to get JSON data, FLash should probably fetch data directly :-{
            responseType: "application/json",
            callback: this.handleGetJSON,
            errorCallback: function(){
                console.error("Failed while executing video.VideoCenter.getJSON");
            }
        };

        dj.util.Video.getVideoData(url, params);

        this.microPlayersObjects[id] = this.jsonData;
        return dojo.toJson(this.jsonData);
    },
    handleGetJSON: function(json){
        this.jsonData = json;
        var adZone = new dj.util.Ads().getRegisteredAdsZone('');
        if (adZone != 'default' && adZone != '') {
            this.jsonData.adZone = adZone;
        }
        //params.lineup = lineup;
        this.jsonData.emailPartnerID = 110626;
        this.jsonData.site = this.site;
        this.jsonData.msrc = this.msrc;
        this.jsonData.adFrmt = "frmt=0;";
        this.jsonData.playerName = "video_articleembed";
        this.jsonData.videoCenterURL = "http://" + window.location.host + "/video-center";
        this.jsonData.embedPlayerURL = this.flashPlayerPath + "microPlayer.swf";
        this.jsonData.embedConfigURL = this.embedConfigURL;
        this.jsonData.embedPlayerID = "1000";
        //to - do
        this.jsonData.embedName = "microflashPlayer"; //Name of the flash object
        this.jsonData.embedBaseURL = this.flashPlayerPath;
        this.jsonData.embedHeight = 180;
        this.jsonData.embedWidth = 272;
        this.jsonData.larsID = 91;
        this.jsonData.larsAdTrackingID = 1259;
        this.jsonData.prop5 = window.location.href.split('?')[0];//window.location.host+window.location.pathname; //this.videoUtil.getUrlParam(
        this.jsonData.prop6 = window.location.href;
        this.jsonData.prop10 = this.videoUtil.getUrlParam(window.location.href, 'mod');
        this.jsonData.prop11 = this.videoUtil.getUrlParam(window.location.href, 'reflink');
        this.jsonData.prop19 = "video_emb";
        this.jsonData.prop24 = this.prop24;
        this.jsonData.prop25 = this.prop25;
        this.jsonData.prop27 = this.prop27;
        var subSecComponent = this.videoUtil.omnitureEncoding(this.jsonData['wsj-section'], this.jsonData['wsj-subsection'], 's');
        var secComponent = this.videoUtil.omnitureEncoding(this.jsonData['wsj-section'], this.jsonData['wsj-subsection'], 'c');
        this.jsonData.prop2 = "WSJ_" + secComponent;
        this.jsonData.prop3 = "WSJ_Video_Video_" + secComponent;
        this.jsonData.prop22 = "WSJ_Video_Video_" + subSecComponent;
        this.jsonData.prop26 = "WSJ_" + subSecComponent;
        this.jsonData.emailURL = this.emailURL;
        //var pID = "0_0_WH_abc";
        var suprsAd = '0';
        try {
            if (pID.indexOf('0_0_WH') != -1) {
                suprsAd = '1';
            }
        }
        catch (e) {
            console.error("pID read error");
        }
        this.jsonData.suppressAds = suprsAd;
    },
    updateTitle:function(){
      var title=dj.lang.query('#videoPlayerDescription h2')[0].innerHTML;
      title=title.substring(0,title.indexOf('<small>')-1);
      document.title=document.title.replace('Article',title);
    }

});

// Create wrapper subclass for old video.video for compatibility and with deprecation mesage
dojo.declare("dj.widget.video.video", dj.widget.video.VideoCenter, {
  constructor: function(args, objName){
    dojo.deprecated("dj.widget.video.video", "Use dj.widget.video.VideoCenter, remove alias when MST JSEXECs updated", "1.0");
  }
});

dojo.provide("dj.widget.ProgressBar");dojo.declare("dj.widget.ProgressBar",null,{TYPES:["horizontal"],constructor:function(container,config){this.cfg=dojo.mixin({indicator:"div",fps:30,timer:4,type:"horizontal"},(config||{}));this.oCnt=dojo.byId(container);this.oInd=dojo.create(this.cfg.indicator,{width:"100%"},this.oCnt);this._anim=null;},play:function(){if(this._anim!==null){if(this._anim.status=="stopped"){this._anim.play(0,true);}else{this._anim.gotoPercent(0,true);}
return;}
this._createAnimation();this._anim.play();},pause:function(){if(this._anim===null){return;}
this._anim.pause();},stop:function(){if(this._anim===null){return;}
this._anim.stop();this._anim.gotoPercent(0);dojo.style(this.oInd,"left",0);},_createAnimation:function(){var maxLeft=this._getMaxLeft(),durationInMillis=(this.cfg.timer*1000),animCfg={node:this.oInd,duration:durationInMillis,easing:function(x){return x;},onBegin:this.cfg.beforeStart,onEnd:this.cfg.afterFinish,properties:{left:maxLeft}};this._anim=dojo.animateProperty(animCfg);},_getMaxLeft:function(){if(this._maxLeftCache){return this._maxLeftCache;}
var pos=dojo.position(this.oCnt);this._maxLeftCache=pos.w;return pos.w;}});
dojo.provide("dj.widget.panels.PanelModel");dojo.require("dj.util.Observer");(dj.widget.panels.PanelModel=function(panels,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._hPanels={};this._panelIds=[];this._prevInHistory=null;this._lastPosition=1;this._activePanel=null;this._activePanelObserver=new dj.util.Observer();this._direction=this.DIRECTION.NEXT;this._isLocked=false;this._lockObserver=0;this._rotationState=1;if(panels){this.addPanels(panels);}}).prototype={ROTATION_TYPE:{LINEAR:0,CIRCULAR:1},DIRECTION:{PREVIOUS:0,NEXT:1},DEFAULT_CONFIG:{rotationType:0},addPanel:function(panelId){var panel=new dj.widget.panels.Panel(panelId,this._lastPosition);this._panelIds[this._lastPosition]=panel.getId();this._hPanels[panelId]=panel;this._lastPosition++;},addPanels:function(panels){var that=this;for(var pid in panels){if(panels.hasOwnProperty(pid)){var panel=panels[pid];var panelId=panel.getId();that._panelIds[that._lastPosition]=panelId;that._hPanels[panelId]=panel;that._lastPosition++;}}},hasId:function(panelId){return(typeof this._hPanels[panelId]!=="undefined");},hasPosition:function(panelPosition){return((panelPosition>0)&&(panelPosition<this._panelIds.length));},getById:function(panelId){if(!this.hasId(panelId)){throw new Error("NoSuchElementException");}
return this._hPanels[panelId];},getByPosition:function(panelPosition){if(!this.hasPosition(panelPosition)){if(this._cfg.rotationType===this.ROTATION_TYPE.CIRCULAR){var numOfPan=this.getNumberOfPanels();panelPosition=(panelPosition%numOfPan);panelPosition=(panelPosition===0)?numOfPan:panelPosition;}else{return;}}
var pid=this._panelIds[panelPosition];return this._hPanels[pid];},getActive:function(){return this._activePanel;},getPrevInHistory:function(){return this._prevInHistory;},getAll:function(){var values=[];for(var value in this._hPanels){if(this._hPanels.hasOwnProperty(value)){values.push(this._hPanels[value]);}}
return values;},getNumberOfPanels:function(){return(this._panelIds.length-1);},getRotationState:function(){return this._rotationState;},setRotationState:function(state){if(state<0||state>1){this._activePanelObserver.fireByName("rotationStateFailure",state);}
this._rotationState=state;this._activePanelObserver.fireByName("rotationStateSuccess",state);},getDirection:function(){return this._direction;},setDirection:function(dir){if(dir<0||dir>1){throw new Error("IndexOutOfBoundsException");}
this._direction=dir;},getRotationType:function(){return this._cfg.rotationType;},setActive:function(panel){if(panel&&panel.getId){this.setActiveById(panel.getId());}},setActiveById:function(panelId){if(!this.hasId(panelId)){this._activePanelObserver.fireByName("failure",panelId);return;}
var panel=this.getById(panelId);this._prevInHistory=this._activePanel;this._activePanel=panel;this._activePanelObserver.fireByName("success",panel);},setActiveByPosition:function(panelPosition){if(!this.hasPosition(panelPosition)){if(this._cfg.rotationType===this.ROTATION_TYPE.CIRCULAR){var numOfPan=this.getNumberOfPanels();panelPosition=(panelPosition%numOfPan);panelPosition=(panelPosition===0)?numOfPan:panelPosition;}else{this._activePanelObserver.fireByName("failure",panelPosition);return;}}
var pid=this._panelIds[panelPosition];this.setActiveById(pid);},addChangeListener:function(event,listener,context){if(arguments.length<3&&(typeof event==="function")){context=listener;listener=event;event="success";}
context=(typeof context!=="undefined")?context:this;this._activePanelObserver.subscribeByName(event,listener,context);},isLocked:function(){return this._isLocked;},addLockListener:function(obs,context){this._lockObserver={cb:obs,ctx:context};},doLock:function(){this._isLocked=true;},releaseLock:function(){this._isLocked=false;if(this._lockObserver&&typeof this._lockObserver.cb=="function"){this._lockObserver.cb.call(this._lockObserver.ctx);}},getViewArea:function(){return this._viewArea;},setViewArea:function(va){this._viewArea=va;},getActivePanel:function(){return this.getActive().getId();},setActivePanel:function(pid){var meth=(typeof pid=="string")?this.setActiveById:this.setActiveByPosition;return meth.call(this,pid);},hasPanel:function(panel){var pid=(panel.getId)?panel.getId():panel;return this.hasId(pid);},observePanels:function(callback){this.addChangeListener(function(panel){callback.apply(this,[panel.getId(),panel.getId()]);},this);}};
dojo.provide("dj.widget.panels.PanelDTO");dojo.declare("dj.widget.panels.PanelDTO",null,{constructor:function(id,position){this._id=null;this._position=null;if(typeof id!=="undefined"){this.setId(id);}
if(typeof position!=="undefined"){this.setPosition(position);}},getId:function(){return this._id;},setId:function(id){if(typeof id==="undefined"){throw new Error("ID must be defined.");}
this._id=id;},getPosition:function(){return this._position;},setPosition:function(position){if(typeof position!=="number"){throw new TypeError("Position must be a number.");}
this._position=position;}});
dojo.provide("dj.widget.panels.Panel");dojo.require("dj.widget.panels.PanelDTO");dojo.declare("dj.widget.panels.Panel",dj.widget.panels.PanelDTO,{constructor:function(id,position,element){this._element=null;if(typeof element!=="undefined"){this.setElement(element);}},getElement:function(){return this._element;},setElement:function(element){if(typeof element!=="object"){throw new TypeError("Element must be an object.");}
this._element=element;}});
dojo.provide("dj.widget.panels.controller.Timer");dojo.require("dj.widget.ProgressBar");(dj.widget.panels.controller.Timer=function(model,cfg){this._model=model;this.connectHandles=[];dj.lang.mixin((this._cfg={rotateTime:4,rotateIterations:3,progressBar:".progressbarBox",pauseButton:".nav-inline .pause"}),cfg);}).prototype={addEvents:function(){this._setupProgressBars();this._setupPauseButton();this._startTimer(this._cfg.rotateTime);this._addEvents();this._model.addChangeListener("rotationStateSuccess",function(state){if(state==0){this._pause();}
else{this._play();}},this);},removeEvents:function(){for(var i=0,len=this.connectHandles.length;i<len;i++){dojo.disconnect(this.connectHandles[i]);}
this._pause();this._destroyProgressBars();},_setupProgressBars:function(){var progressBar=this._cfg.progressBar;var rotateTime=this._cfg.rotateTime;var pbs=[];var oPb=dojo.query(progressBar,this._cfg.container).empty(oPb);for(var i=0,len=oPb.length;i<len;i++){pbs.push(new dj.widget.ProgressBar(oPb[i],{timer:rotateTime}));}
this._pbState="mt";this._pbIrupt=false;this._progressBars=pbs;var activePos=this._model.getActive().getPosition()-1;var ipb=this._progressBars[activePos];if(ipb){ipb.play();}},_destroyProgressBars:function(){for(var i=0,len=this._progressBars.length;i<len;i++){this._progressBars[i].destructor();}},_setupPauseButton:function(){var oPause=dojo.query(this._cfg.pauseButton,this._cfg.container);if(oPause.length<1){return;}else{oPause=oPause[0];}
var btnOn=this._cfg.pauseButtonEnabledStyle;this.connectHandles.push(dojo.connect(oPause,"onclick",this,function(ev){dojo.stopEvent(ev);if(this._model.getRotationState()==0){this._model.setRotationState(1);}
else{this._model.setRotationState(0);}}));},_startTimer:function(seconds){if(((typeof this._intervalId!="undefined")&&(this._intervalId!==null))||(typeof seconds=="undefined")||(seconds===0)){return;}
var model=this._model;var nextPanel=null;this._maxIter=this._maxIter||(this._cfg.rotateIterations*model.getNumberOfPanels());this._iteration=(this._iteration||1);var that=this;this._intervalId=setInterval(function(){if(that._iteration>that._maxIter){that._intervalId=null;return;}
nextPanel=(model.getByPosition(model.getActive().getPosition()+1)||model.getByPosition(1));model.setActiveByPosition(nextPanel.getPosition());var pb=that._progressBars[nextPanel.getPosition()-1];if(typeof pb!=="undefined"){if(that._pbIrupt===false){pb.stop();pb.play();}else{pb.pause();}}
that._iteration++;},seconds*1000);},_addEvents:function(){this.connectHandles.push(dojo.connect(this._cfg.container,"onmouseover",this,function(){var tid=this._model.getActive().getPosition();this._pause(tid);}));this.connectHandles.push(dojo.connect(this._cfg.container,"onmouseout",this,function(){var tid=this._model.getActive().getPosition();this._play(tid);}));},_play:function(tabNum){if(this._pbState==="mt"||(this._model.getRotationState()==0)){return;}else{this._pbState="mt";}
this._pbIrupt=true;this._startTimer(this._cfg.rotateTime);this._pbIrupt=false;var pb=this._progressBars[tabNum-1];if(pb){pb.play();}},_pause:function(tabNum){if(this._pbState==="mr"){return;}else{this._pbState="mr";}
if(this._intervalId){clearInterval(this._intervalId);this._intervalId=null;}
var pb=this._progressBars[tabNum-1];if(pb){pb.pause();}}};
dojo.provide("dj.widget.panels.view.NavArrows");(dj.widget.panels.view.NavArrows=function(model,nav,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._model=model;this._nav=nav;}).prototype={DEFAULT_CONFIG:{prevButtonEnabledStyle:"enabledPrev",nextButtonEnabledStyle:"enabledNext",firstButtonEnabledStyle:"enabledFirst",lastButtonEnabledStyle:"enabledLast"},displayActiveSuccess:function(panel){var mod=this._model,lng=dj.lang;var pp=mod.getByPosition(mod.getActive().getPosition()-1);if(!pp){dojo.removeClass(this._nav.prevButton,this._cfg.prevButtonEnabledStyle);if(this._nav.firstButton){dojo.removeClass(this._nav.firstButton,this._cfg.firstButtonEnabledStyle);}}else{dojo.addClass(this._nav.prevButton,this._cfg.prevButtonEnabledStyle);if(this._nav.firstButton){dojo.addClass(this._nav.firstButton,this._cfg.firstButtonEnabledStyle);}}
var np=mod.getByPosition(mod.getActive().getPosition()+mod.getViewArea());if(!np){dojo.removeClass(this._nav.nextButton,this._cfg.nextButtonEnabledStyle);if(this._nav.lastButton){dojo.removeClass(this._nav.lastButton,this._cfg.lastButtonEnabledStyle);}}else{dojo.addClass(this._nav.nextButton,this._cfg.nextButtonEnabledStyle);if(this._nav.lastButton){dojo.addClass(this._nav.lastButton,this._cfg.lastButtonEnabledStyle);}}}};
dojo.provide("dj.widget.panels.view.Pagination");(dj.widget.panels.view.Pagination=function(model,pagCnt){this._model=model;this._pagCnt=pagCnt;}).prototype={displayActiveSuccess:function(){var ap=this._model.getActive();var num=this._model.getNumberOfPanels();this._pagCnt.innerHTML=ap.getPosition()+"/"+num;}};
dojo.provide("dj.widget.panels.view.Panel");(dj.widget.panels.view.Panel=function(model,panels,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._model=model;this._oPanels=panels;}).prototype={DEFAULT_CONFIG:{selectedClass:"",deselectedClass:"hidden"},displayActiveSuccess:function(panel){this._deselectAllExcept(panel);this._select(panel);},getContainer:function(){if(this._oCnt){return this._oCnt;}
if(this._cfg.container&&this._cfg.container!==""){this._oCnt=dojo.byId(this._cfg.container);return this._oCnt;}
if(this._oPanelGroup){this._oCnt=this._oPanelGroup.parentNode;return this._oCnt;}
var ap=this._model.getByPosition(1);var el=this._oPanels[ap.getId()];if(!el.parentNode||!el.parentNode.parentNode){return null;}
var grp=el.parentNode;this._oCnt=grp.parentNode;return this._oCnt;},_deselectAllExcept:function(panelNotToHide){var panel=null;for(var pid in this._oPanels){if(this._oPanels.hasOwnProperty(pid)){panel=this._oPanels[pid];if(panelNotToHide.getId()==pid){continue;}
dojo.removeClass(panel.getElement(),this._cfg.selectedClass);dojo.addClass(panel.getElement(),this._cfg.deselectedClass);}}},_select:function(panel){var pid=panel.getId();var oPan=this._oPanels[pid];if(!oPan){return;}
dojo.removeClass(oPan.getElement(),this._cfg.deselectedClass);dojo.addClass(oPan.getElement(),this._cfg.selectedClass);}};
dojo.provide("dj.widget.panels.view.RangePagination");(dj.widget.panels.view.RangePagination=function(model,pagCnt,totalCnt,ototalResultsCnt,pageSize){this._model=model;this._pagCnt=pagCnt;this._totalCnt=totalCnt;this._ototalResultsCnt=ototalResultsCnt;this.pageSize=pageSize;}).prototype={displayActiveSuccess:function(){var ap=this._model.getActive();var num=this._model.getNumberOfPanels();var totalResults=this._totalCnt;var startRange=1;if(ap.getPosition()!=1)
startRange=(ap.getPosition()-1)*this.pageSize+1;var endRange=ap.getPosition()*this.pageSize;if(endRange>totalResults)endRange=totalResults;this._pagCnt.innerHTML=startRange+"-"+endRange+" ";this._ototalResultsCnt.innerHTML=totalResults;}};
dojo.provide("dj.widget.panels.view.SlidePanel");(dj.widget.panels.view.SlidePanel=function(model,panels,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._isOrientVert=(this._cfg.orientation=="vertical");this._isOrientHoriz=(this._cfg.orientation=="horizontal");this._model=model;this._panels=panels;this._isSetupDone=false;this._animation=null;this._deltaMap=[];}).prototype={DEFAULT_CONFIG:{animationDuration:0.3,animationType:"slide",orientation:"horizontal"},displayActiveSuccess:function(activePanel){var model=this._model;model.doLock();this._isRotationCircular=(model.getRotationType()==model.ROTATION_TYPE.CIRCULAR);if(!this._isSetupDone){this._setCoreValues();if(this._isRotationCircular){this._circularLoopSetup();}
this._isSetupDone=true;}
var prevPanel=model.getPrevInHistory(),prvPos=prevPanel.getPosition(),avePos=activePanel.getPosition(),afterFin=function(){model.releaseLock();},beforeStr=function(){},isIncreasing=(model.getDirection()==model.DIRECTION.NEXT),delta=0;var that=this;if(this._isRotationCircular){var isIncFlip=false;var isDecrFlip=false;if(isIncreasing&&(prvPos==this._numberOfPanels)&&(avePos==1)){isIncFlip=true;delta=(that._isOrientVert)?-this._panelHeight:-this._panelWidth;}else if(!isIncreasing&&(prvPos==1)&&(avePos==this._numberOfPanels)){isDecrFlip=true;delta=(that._isOrientVert)?this._panelHeight:this._panelWidth;}else{delta=this._getDelta(prevPanel,activePanel);}
afterFin=function(){if(isIncFlip){var offsetType=(that._isOrientVert)?"top":"left";that._oPanelGroup.style[offsetType]="0px";}
model.releaseLock();};beforeStr=function(){if(isDecrFlip){var mv,offsetTopOrLeft,offsetHeightOrWidth;if(that._isOrientVert){offsetTopOrLeft="top";offsetHeightOrWidth="_panelHeight";}else if(that._isOrientHoriz){offsetTopOrLeft="left";offsetHeightOrWidth="_panelWidth";}
mv=-that._getDelta(activePanel,prevPanel)-that[offsetHeightOrWidth];this.properties.left=(mv+this.properties.xD);dojo.style(that._oPanelGroup,offsetTopOrLeft,mv+"px");}};}else{delta=this._getDelta(prevPanel,activePanel);}
var xD,yD;if(that._isOrientVert){xD=0;yD=delta;}else if(that._isOrientHoriz){xD=delta;yD=0;}
var newLeft=(dojo.style(that._oPanelGroup,"left")+xD),newTop=(dojo.style(that._oPanelGroup,"top")+yD),animationDurationInMillis=(that._cfg.animationDuration*1000);var animCfg={node:that._oPanelGroup,duration:animationDurationInMillis,beforeBegin:beforeStr,onEnd:afterFin,properties:{"xD":xD,"yD":yD,left:newLeft,top:newTop}};this._animation=dojo.animateProperty(animCfg);this._animation.play();},getContainer:function(){if(this._oCnt){return this._oCnt;}
if(this._cfg.container&&this._cfg.container!==""){this._oCnt=dojo.byId(this._cfg.container);return this._oCnt;}
if(this._oPanelGroup){this._oCnt=this._oPanelGroup.parentNode;return this._oCnt;}
var ap=this._model.getByPosition(1);var el=ap.getElement();if(!el.parentNode||!el.parentNode.parentNode){return null;}
var grp=el.parentNode;this._oCnt=grp.parentNode;return this._oCnt;},getViewArea:function(){var that=this;if(!this._viewArea){if(typeof this._cfg.viewArea=="number"){this._viewArea=this._cfg.viewArea;}else{var el=(this._panels[this._model.getByPosition(1).getId()]).getElement();var cnt=el.parentNode.parentNode;if(that._isOrientVert){this._viewArea=Math.round(dojo.position(cnt).h/dojo.position(el).h);}else if(that._isOrientHoriz){this._viewArea=Math.round(dojo.position(cnt).w/dojo.position(el).w);}
this._model.setViewArea(this._viewArea);}}
return this._viewArea;},_getDelta:function(prevPanel,currPanel){var delta=this._deltaMap[prevPanel.getPosition()];var that=this;if(delta){var x=delta[currPanel.getPosition()];if(x){return x;}}
var pp=prevPanel.getPosition();var cp=currPanel.getPosition();var isInc=((cp-pp)>0);var ppl,cpl;var el=this._panels[prevPanel.getId()].getElement();var offsetType=(that._isOrientVert)?"offsetTop":"offsetLeft";ppl=el[offsetType];cpl=(this._panels[currPanel.getId()].getElement()[offsetType]);delta=isInc?(cpl-ppl):(ppl-cpl);delta*=((isInc)?-1:1);this._deltaMap[pp]=(this._deltaMap[pp]||[]);this._deltaMap[pp][cp]=delta;return delta;},_setCoreValues:function(){if(this._isCoreValuesSet){return;}
var model=this._model,ap=this._panels[model.getByPosition(1).getId()];this._oPanelGroup=ap.getElement().parentNode;this._numberOfPanels=model.getNumberOfPanels();this._isRotationCircular=(model.getRotationType()==model.ROTATION_TYPE.CIRCULAR);if(this._isOrientVert){this._panelHeight=dojo.position(ap.getElement()).h;}else if(this._isOrientHoriz){this._panelWidth=dojo.position(ap.getElement()).w;}
this._isCoreValuesSet=true;},_circularLoopSetup:function(){for(var i=1,element=null,clone=null,len=this.getViewArea();i<=len;i++){element=this._panels[this._model.getByPosition(i).getId()].getElement();clone=element.cloneNode(true);this._oPanelGroup.appendChild(clone);}}};
dojo.provide("dj.widget.panels.view.Timer");(dj.widget.panels.view.Timer=function(model,nav,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._model=model;this._nav=nav;}).prototype={DEFAULT_CONFIG:{pauseButtonEnabledStyle:"enabledPause"},rotationStateSuccess:function(state){if(state==1){dojo.removeClass(this._nav.pauseButton,this._cfg.pauseButtonEnabledStyle);}else{dojo.addClass(this._nav.pauseButton,this._cfg.pauseButtonEnabledStyle);}}};
dojo.provide("dj.widget.panels.controller.History");dojo.require("dj.util.History");(dj.widget.panels.controller.History=function(model,cfg){this._isEnabled=false;this._model=model;this._cfg=cfg||{};this._container=cfg.container;this._cfg.doSetActive=(typeof this._cfg.doSetActive==="boolean")?this._cfg.doSetActive:true;}).prototype={isEnabled:function(){return this._isEnabled;},addEvents:function(){if(this._isEnabled){console.warn("{Panels} browser-history has already been enabled for \""+this._container+"\"");return;}else{console.info("{Panels} browser-history enabled for \""+this._container+"\"");this._isEnabled=true;}
var hist=dj.util.History;hist.init();var model=this._model;var pid=hist.get(this._container);var panelId="";if((typeof pid==="string")&&model.hasId(pid)){panelId=pid;}else if(model.hasPosition(1)){panelId=model.getByPosition(1).getId();}else{console.warn("{Panels} browser-history failed. No panels found.");return;}
if(this._cfg.doSetActive){model.setActiveById(panelId);}
var fromHist=false;hist.subscribe("_init",function(){fromHist=true;model.setActiveById(panelId);});hist.subscribe(this._container,function(tid){fromHist=true;model.setActiveById(tid);});var that=this;model.addChangeListener(function(panel){if(fromHist){fromHist=false;return;}
hist.set(that._container,panel.getId());});}};
dojo.provide("dj.widget.panels.controller.NavArrows");(dj.widget.panels.controller.NavArrows=function(model,nav,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._model=model;this._nav=nav;this._procs=[];this.connectHandles=[];}).prototype={DEFAULT_CONFIG:{prevButtonEnabledStyle:"enabledPrev",nextButtonEnabledStyle:"enabledNext",firstButtonEnabledStyle:"enabledFirst",lastButtonEnabledStyle:"enabledLast",doStopEvent:true,panelIncrement:1},setLastActive:function(){var mdl=this._model;if(mdl.isLocked()){this._enqueueProc(this.setNextActive);return;}
mdl.setActiveByPosition(mdl.getNumberOfPanels());},setFirstActive:function(){if(this._model.isLocked()){this._enqueueProc(this.setPreviousActive);return;}
this._model.setDirection(this._model.DIRECTION.PREVIOUS);this._model.setActiveByPosition(1);},setPreviousActive:function(){if(this._model.isLocked()){this._enqueueProc(this.setPreviousActive);return;}
this._model.setDirection(this._model.DIRECTION.PREVIOUS);this._model.setActiveByPosition(this._model.getActive().getPosition()-this._cfg.panelIncrement);},setNextActive:function(){var mdl=this._model;if(mdl.isLocked()){this._enqueueProc(this.setNextActive);return;}
var nxt=mdl.getByPosition(this._model.getActive().getPosition()+this._cfg.panelIncrement);if(mdl.getRotationType()==mdl.ROTATION_TYPE.LINEAR){var hasMore=(((mdl.getNumberOfPanels()-mdl.getViewArea())-mdl.getActive().getPosition())>=0);if(hasMore===false){return;}}
mdl.setDirection(mdl.DIRECTION.NEXT);mdl.setActiveByPosition(nxt.getPosition());},addEvents:function(){if(this._nav.prevButton){this._addEventForType(this._nav.prevButton,"prev");}
if(this._nav.nextButton){this._addEventForType(this._nav.nextButton,"next");}
if(this._nav.firstButton){this._addEventForType(this._nav.firstButton,"first");}
if(this._nav.lastButton){this._addEventForType(this._nav.lastButton,"last");}},removeEvents:function(){for(var i=0,len=this.connectHandles.length;i<len;i++){dojo.disconnect(this.connectHandles[i]);}},_enqueueProc:function(proc){this._procs.push(proc);this._model.addLockListener(function(){var pr=this._procs.shift();if(pr){pr.call(this);}},this);},_addEventForType:function(oBtn,btnType,doRemoveEvent){this.connectHandles.push(dojo.connect(oBtn,"onclick",this,this._stopEventBridge));this.connectHandles.push(dojo.connect(oBtn,'onmousedown',this,function(ev){this._stopEventBridge(ev);this._setActiveByTypeOrBeginInterval(btnType);}));this.connectHandles.push(dojo.connect(oBtn,'onmouseup',this,this._endEventBridge));this.connectHandles.push(dojo.connect(oBtn,'onmouseout',this,this._endEventBridge));},_stopEventBridge:function(ev){if(this._cfg.doStopEvent===true){dojo.stopEvent(ev);}},_setActiveByTypeOrBeginInterval:function(type){if(!this._nextInterval||this._nextInterval===null){this._setActiveByType(type);}
this._nextInterval=setInterval(dojo.hitch(this,function(){this._setActiveByType(type);}),400);},_endEventBridge:function(){clearInterval(this._nextInterval);this._nextInterval=null;},_setActiveByType:function(type){var proc;switch(type){case"prev":proc=this.setPreviousActive;break;case"first":proc=this.setFirstActive;break;case"last":proc=this.setLastActive;break;default:proc=this.setNextActive;break;}
proc.call(this);}};
dojo.provide("dj.widget.panels.controller.NavTabs");(dj.widget.panels.controller.NavTabs=function(model,tabs,config){this.model=model;this.tabs=tabs;this.connectHandles=[];dj.lang.mixin((this.cfg={activeEvent:"onclick",doStopEvent:true}),config);}).prototype={setActive:function(tid){this.model.setActiveById(tid);},addEvents:function(doRemoveEvents){for(var tid in this.tabs){if(this.tabs.hasOwnProperty(tid)){this._addEventForTab(this.tabs[tid]);}}},removeEvents:function(){for(var i=0,len=this.connectHandles.length;i<len;i++){dojo.disconnect(this.connectHandles[i]);}},_addEventForTab:function(tab){this.connectHandles.push(dojo.connect(tab.getElement(),this.cfg.activeEvent,dojo.hitch(this,function(ev){if(this.cfg.doStopEvent===true){dojo.stopEvent(ev);}
this.setActive(tab.getId());})));}};
dojo.provide("dj.widget.panels.PanelsFactory");dojo.require("dj.lang");dojo.require("dj.widget.panels.PanelDTO");dojo.require("dj.widget.panels.Panel");dojo.require("dj.widget.panels.PanelModel");dj.widget.panels.PanelsFactory={_CONFIG:{core:{panelGroup:".newsItem",panel:"> li",panelPrefix:"panelsPanel_",panels:undefined,panelToggleStyle:"hidden",activePanel:1,disabledPanels:undefined,panelIncrement:1,viewArea:undefined,paginationContainer:".pagination",controller:undefined,enableBrowserHistory:false,animationDuration:0.3},tabs:{tabPrefix:"panelsTab_",tabGroup:".newsItem",tab:"> li",navContainer:".nav-inline",prevButton:".prev",nextButton:".next",navButtonEnabledStyle:"enabled",tabOnEvent:"click",tabOnStyle:"active",tabOffStyle:"deselected"},carousel:{orientation:"horizontal",navContainer:".nav-inline",prevButton:".prev",nextButton:".next",prevButtonEnabledStyle:"enabledPrev",nextButtonEnabledStyle:"enabledNext"},rotator:{rotateTime:8,rotateIterations:3,pauseOnMouseOver:false,pauseButton:".nav-inline .pause",pauseButtonEnabledStyle:"enabledPause",progressBar:".progressbarBox"}},_panelsType:{NONE:0,SLIDE:1,SWITCH:2},_paginationType:{SIMPLE:0,RANGE:1},_lookupType:{NONE:0,SELECTOR:1,PREFIX:2},create:function(container,cfg,doIgnoreOptCache){if(!container||(typeof cfg!=="object")){console.warn("{Panels} no container or config specified.");return;}
container=dojo.byId(container);if(container&&!doIgnoreOptCache){var optCache=['{',container.id,': ',dj.lang.objectToString(cfg,true),'}'].join('');var cntOpt=container.getAttribute("djw_optcache");if(cntOpt){var opts=cntOpt.split("_");for(var i=0,len=opts.length;i<len;i++){if(opts[i]==optCache){console.warn("{Panels} prevented attempt to reinitialize \""+container.id+"\".");return;}}}
if(cntOpt){container.setAttribute("djw_optcache",[optCache,cntOpt].join("_"));}else{container.setAttribute("djw_optcache",optCache);}}
try{var mvc=this._setupMvc(container,cfg);this._addCompatibilityMethods(mvc,container,cfg);return mvc.model;}catch(ex){console.info(ex.message);return;}},createPanels:function(userCfg){var djwp=dj.widget.panels,_lookupType=this._lookupType,_panType=this._panelsType,_d=dojo,model=null,views={},controllers={};var config=dojo.clone(this._CONFIG.core);config.container="";config.doAddChangeListeners=true;config.panelsType=_panType.SWITCH;config.panelsLookupType=_lookupType.SELECTOR;dj.lang.mixin(config,userCfg);var panels=null;switch(config.panelsLookupType){case _lookupType.PREFIX:panels=this.lookupByPrefix(config.panelPrefix,config.panels);break;case _lookupType.SELECTOR:panels=this.lookupBySelector(config.container,config.panelGroup,config.panel);break;default:return;}
var rotType=(((config.type==djwp.PanelModel.prototype.ROTATION_TYPE.CIRCULAR)||(config.type=="circular"))?djwp.PanelModel.prototype.ROTATION_TYPE.CIRCULAR:djwp.PanelModel.prototype.ROTATION_TYPE.LINEAR);model=new djwp.PanelModel(this.panelsToPanelsDTO(panels),{rotationType:rotType});model.setActiveByPosition(config.activePanel);var view=null,viewPanelConfig,viewPanelType;switch(config.panelsType){case _panType.SLIDE:_d.require("dj.widget.panels.view.SlidePanel");viewPanelType="SlidePanel";viewPanelConfig={animationDuration:config.animationDuration,viewArea:config.viewArea,orientation:config.orientation};break;case _panType.SWITCH:_d.require("dj.widget.panels.view.Panel");viewPanelType="Panel";viewPanelConfig={selectedClass:config.selectedPanelClass,deselectedClass:config.deselectedPanelClass};break;}
view=new djwp.view[viewPanelType](model,panels,viewPanelConfig);views.panels=view;if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}
return{"model":model,"views":views,"controllers":controllers};},addModuleNavArrows:function(mvc,userCfg){var _lookupType=this._lookupType,model=mvc.model,views=mvc.views,controllers=mvc.controllers,_d=dojo;var config=_d.clone(this._CONFIG.carousel);config.container="";config.doAddEvents=true;config.doAddChangeListeners=true;config.doHide=false;dj.lang.mixin(config,userCfg);if(!config.container&&views.panels&&views.panels.getContainer){config.container=views.panels.getContainer();}
var navArrowsLookupType=_lookupType.NONE;if(!config.lookupType){navArrowsLookupType=(config)?_lookupType.SELECTOR:navArrowsLookupType;}else{navArrowsLookupType=config.lookupType;}
var navArrows={};if(navArrowsLookupType==_lookupType.SELECTOR){navArrows.navContainer=_d.query(config.navContainer,config.container)[0];if(navArrows.navContainer){navArrows.prevButton=_d.query(config.prevButton,navArrows.navContainer)[0];navArrows.nextButton=_d.query(config.nextButton,navArrows.navContainer)[0];navArrows.lastButton=(config.lastButton)?_d.query(config.lastButton,navArrows.navContainer)[0]:null;navArrows.firstButton=(config.firstButton)?_d.query(config.firstButton,navArrows.navContainer)[0]:null;}else{return;}}else{return;}
if(config.doHide){navArrows.navContainer.style.visibility="hidden";return;}
_d.require("dj.widget.panels.controller.NavArrows");var controller=new dj.widget.panels.controller.NavArrows(model,navArrows);controllers.navArrows=controller;_d.require("dj.widget.panels.view.NavArrows");var view=new dj.widget.panels.view.NavArrows(model,navArrows,config);view.displayActiveSuccess();views.navArrows=view;if(config.doAddEvents){controller.addEvents();}
if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}},addModuleNavTabs:function(mvc,userCfg){var _lookupType=this._lookupType,model=mvc.model,views=mvc.views,controllers=mvc.controllers,_d=dojo;var config=dojo.clone(this._CONFIG.tabs);config.container="";config.panels=this._CONFIG.core.panels;config.doAddEvents=true;config.doAddChangeListeners=true;dj.lang.mixin(config,userCfg);if(!config.container&&views.panels&&views.panels.getContainer){config.container=views.panels.getContainer();}
var navTabsLookupType=_lookupType.NONE;if(!config.lookupType){navTabsLookupType=(userCfg)?_lookupType.SELECTOR:navTabsLookupType;navTabsLookupType=(userCfg&&userCfg.tabPrefix)?_lookupType.PREFIX:navTabsLookupType;}else{navTabsLookupType=config.lookupType;}
var navTabs=null;switch(navTabsLookupType){case _lookupType.PREFIX:navTabs=this.lookupByPrefix(config.tabPrefix,config.panels);break;case _lookupType.SELECTOR:navTabs=this.lookupBySelector(config.container,config.tabGroup,config.tab);break;default:return;}
_d.require("dj.widget.panels.view.Panel");var view=new dj.widget.panels.view.Panel(model,navTabs,{selectedClass:config.tabOnStyle,deselectedClass:config.tabOffStyle});_d.require("dj.widget.panels.controller.NavTabs");var controller=new dj.widget.panels.controller.NavTabs(model,navTabs,{activeEvent:config.tabOnEvent});views.navTabs=view;controllers.navTabs=controller;if(config.doAddEvents){controller.addEvents();}
if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}},addModulePagination:function(mvc,userCfg){var config={},_d=dojo;var model=mvc.model,views=mvc.views;dj.lang.mixin((config={container:"",doAddChangeListeners:true,paginationContainer:this._CONFIG.core.paginationContainer,doHide:false}),userCfg);if(!config.container&&views.panels&&views.panels.getContainer){config.container=views.panels.getContainer();}
var oPaginationCnt=_d.query(config.paginationContainer,config.container)[0];if(!oPaginationCnt){return;}
if(config.doHide){oPaginationCnt.style.visibility="hidden";return;}
var view,isTypeRangePagination=(config.type&&config.type==this._paginationType.RANGE),requireClassName=(isTypeRangePagination)?"RangePagination":"Pagination";if(isTypeRangePagination){var ototalResultsCnt=_d.query(config.totalResultsContainer,config.container)[0];var totalCnt=ototalResultsCnt.innerHTML;_d.require("dj.widget.panels.view.RangePagination");view=new dj.widget.panels.view.RangePagination(model,oPaginationCnt,totalCnt,ototalResultsCnt,config.pageSize);model.setViewArea(1);model.setActiveByPosition(1);}else{_d.require("dj.widget.panels.view.Pagination");view=new dj.widget.panels.view.Pagination(model,oPaginationCnt);}
view.displayActiveSuccess();views.pagination=view;if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}},addModuleTimer:function(mvc,userCfg){var _d=dojo,config=_d.clone(this._CONFIG.rotator);config.container="";config.doAddEvents=true;config.doAddChangeListeners=true;dj.lang.mixin(config,userCfg);var controllers=mvc.controllers;_d.require("dj.widget.panels.controller.Timer");controllers.timer=new dj.widget.panels.controller.Timer(mvc.model,config);var oPause=_d.query(config.pauseButton,config.container)[0];if(oPause){_d.require("dj.widget.panels.view.Timer");var view=new dj.widget.panels.view.Timer(mvc.model,{pauseButton:oPause},userCfg);if(config.doAddChangeListeners){mvc.model.addChangeListener("rotationStateSuccess",view.rotationStateSuccess,view);}}
if(config.doAddEvents){controllers.timer.addEvents();}},addModuleBrowserHistory:function(mvc,userCfg){var config={},_d=dojo;dj.lang.mixin((config={doAddEvents:true}),userCfg);dojo.require("dj.widget.panels.controller.History");mvc.controllers.browserHistory=new dj.widget.panels.controller.History(mvc.model,config);if(config.doAddEvents){controllers.browserHistory.addEvents();}},addController:function(mvc,cMvc){if(!cMvc||!cMvc.model||!cMvc.model.addChangeListener||!mvc||!mvc.model){throw new Error("{Panels.addController} mvc and/or controller is invalid.");}
var model=mvc.model,controllerModel=cMvc.model;controllerModel.addChangeListener("success",function(panel){model.setActive(panel);});},_setupMvc:function(container,userConfig){var oCnt=dojo.byId(container);container=(oCnt.id||container);var config=dj.lang.cloneMixin(this._CONFIG,userConfig),typeCfg=this._getPanelsTypeConfig(userConfig,config);var panelsCfg={container:oCnt,doAddChangeListeners:false,panelsType:typeCfg.panelsType,panelsLookupType:typeCfg.panelsLookupType};dj.lang.mixin(panelsCfg,config.core);if(typeCfg.panelsType==this._panelsType.SWITCH){dj.lang.mixin(panelsCfg,config.tabs);}else if(typeCfg.panelsType==this._panelsType.SLIDE){dj.lang.mixin(panelsCfg,config.carousel);}
var mvc=this.createPanels(panelsCfg);if(mvc.model.getNumberOfPanels()==-1){throw new Error("{Panels} container \""+container+"\" has no panels.");}
var model=mvc.model,views=mvc.views,controllers=mvc.controllers;if(typeCfg.hasNavTabs){var navTabCfg=config.tabs;navTabCfg.container=oCnt;navTabCfg.panels=config.core.panels;navTabCfg.doAddEvents=false;navTabCfg.doAddChangeListeners=false;navTabCfg.lookupType=typeCfg.navTabsLookupType;this.addModuleNavTabs(mvc,navTabCfg);}
if(typeCfg.hasNavArrows){var navArrCfg=config.carousel;navArrCfg.container=oCnt;navArrCfg.doAddEvents=false;navArrCfg.doAddChangeListeners=false;navArrCfg.lookupType=typeCfg.navArrowsLookupType;navArrCfg.doHide=((typeCfg.panelsType==this._panelsType.SLIDE)&&(views.panels.getViewArea()>=model.getNumberOfPanels()));this.addModuleNavArrows(mvc,navArrCfg);}
if(typeCfg.panelsType==this._panelsType.SLIDE&&(views.panels.getViewArea()==1)){var paginCfg={container:oCnt,paginationContainer:config.core.paginationContainer,doAddEvents:false,doAddChangeListeners:false,doHide:(views.panels.getViewArea()!==1)};this.addModulePagination(mvc,paginCfg);}
if(typeCfg.hasTimer){var timerCfg=config.rotator;timerCfg.container=oCnt;timerCfg.doAddEvents=false;this.addModuleTimer(mvc,timerCfg);}
if(typeCfg.hasBrowserHistory){var histConf={container:(typeCfg.panelsLookupType==this._lookupType.SELECTOR)?oCnt.id:container,doAddEvents:false};this.addModuleBrowserHistory(mvc,histConf);}
if(typeCfg.hasController){this.addController(mvc,config.core.controller);}
this._addViewChangeListenersToModel(model,views);this._addEventsToControllers(controllers);if(!typeCfg.hasBrowserHistory&&typeCfg.panelsType==this._panelsType.SWITCH){model.setActiveByPosition(panelsCfg.activePanel);}
return mvc;},_getPanelsTypeConfig:function(userConfig,config){var _panType=this._panelsType;var _lookType=this._lookupType;var typeCfg={};typeCfg.panelsType=_panType.NONE;typeCfg.panelsType=(userConfig.core)?_panType.SWITCH:typeCfg.panelsType;typeCfg.panelsType=(userConfig.carousel)?_panType.SLIDE:typeCfg.panelsType;typeCfg.panelsLookupType=_lookType.SELECTOR;typeCfg.panelsLookupType=(userConfig.core&&userConfig.core.panelPrefix)?_lookType.PREFIX:typeCfg.panelsLookupType;typeCfg.navTabsLookupType=_lookType.NONE;typeCfg.navTabsLookupType=(userConfig.tabs)?_lookType.SELECTOR:typeCfg.navTabsLookupType;typeCfg.navTabsLookupType=(userConfig.tabs&&userConfig.tabs.tabPrefix)?_lookType.PREFIX:typeCfg.navTabsLookupType;typeCfg.navArrowsLookupType=_lookType.NONE;typeCfg.navArrowsLookupType=(userConfig.carousel)?_lookType.SELECTOR:typeCfg.navArrowsLookupType;typeCfg.navArrowsLookupType=(userConfig.tab&&userConfig.tab.navContainer)?_lookType.SELECTOR:typeCfg.navArrowsLookupType;typeCfg.hasController=(userConfig.core&&(typeof userConfig.core.controller=="object"));typeCfg.hasNavArrows=(typeCfg.navArrowsLookupType!==_lookType.NONE);typeCfg.hasNavTabs=(typeCfg.navTabsLookupType!==_lookType.NONE);typeCfg.hasTimer=(typeof userConfig.rotator=="object"&&userConfig.rotator.rotateTime>0);typeCfg.hasBrowserHistory=(config.core.enableBrowserHistory);return typeCfg;},_addViewChangeListenersToModel:function(model,views){var view=null;for(var viewName in views){if(views.hasOwnProperty(viewName)){view=views[viewName];if(view.displayActiveSuccess){model.addChangeListener("success",view.displayActiveSuccess,view);}
if(view.displayActiveFailure){model.addChangeListener("failure",view.displayActiveFailure,view);}}}},_addEventsToControllers:function(controllers){var controller=null;for(var controllerName in controllers){if(controllers.hasOwnProperty(controllerName)){controller=controllers[controllerName];controller.addEvents();}}},_addCompatibilityMethods:function(mvc,container,config){if(typeof mvc.model.update==="undefined"){var that=this;mvc.model.update=function(){that.destroy(mvc);mvc=that.create((container.id||container),config,true);return mvc;};}
if(typeof mvc.model.destroy==="undefined"){var that=this;mvc.model.destroy=function(){that.destroy(mvc);};}
if(mvc.controllers&&mvc.controllers.navTabs){var tabs=mvc.controllers.navTabs.tabs,_d=dojo;mvc.model.observeTabs=function(callback,eventType){eventType=(eventType||"onclick");var _addEvForTab=function(tab){_d.connect(tab.getElement(),eventType,function(ev){var tid=tab.getId();if(mvc.controllers.navTabs.cfg.doStopEvent===true){_d.stopEvent(ev);}
tid=(isNaN(parseInt(tid,10)))?tid:(mvc.model.getById(tid).getPosition()+"");callback.call(null,tid,mvc.model);});};for(var tid in tabs){if(tabs.hasOwnProperty(tid)){_addEvForTab(tabs[tid]);}}};}
mvc.model.model=mvc.model;mvc.model.views=mvc.views;mvc.model.controllers=mvc.controllers;},destroy:function(mvc){for(var controller in mvc.controllers){if(mvc.controllers.hasOwnProperty(controller)){mvc.controllers[controller].removeEvents();delete mvc.controllers[controller];}}
for(var view in mvc.views){if(mvc.views.hasOwnProperty(view)){delete mvc.views[view];}}},panelsToPanelsDTO:function(panels){var elms={};for(var panId in panels){if(panels.hasOwnProperty(panId)){var pan=panels[panId];elms[panId]=new dj.widget.panels.PanelDTO(pan.getId(),pan.getPosition());}}
return elms;},lookupByPrefix:function(prefix,names){var elms={};for(var i=0,len=names.length,id=null,el=null,pos=1;i<len;i++){id=names[i];el=dojo.byId(prefix+id);if((typeof el==="undefined")||el===null||el.firstChild===null){continue;}
elms[id]=new dj.widget.panels.Panel(id,pos++,el);}
return elms;},lookupBySelector:function(container,group,node){if(!container||container===null){throw new Error('{dj.util.Panels} container for group: "'+group+'" is undefined.');}
var oCnt=dojo.byId(container);var oPanels=dojo.query((group+' '+node),oCnt);var elms={};for(var i=0,len=oPanels.length,el=null,pos=1;i<len;i++){el=oPanels[i];if(el===null||(el.tagName!=="IMG"&&el.firstChild===null)){continue;}
elms[pos-1]=new dj.widget.panels.Panel(pos-1,pos++,el);}
return elms;}};
dojo.provide("dj.widget.panel.ModalPanel");dojo.require("dj.util.Config");dojo.require("dj.util.Element");dojo.require("dj.util.Observer");(dj.widget.panel.ModalPanel=function(modalId,modalContainer,config){this.oModalId=dojo.byId(modalId);if(!this.oModalId){throw new Error("{dj.widget.panel.ModalPanel} modal-id is null or undefined");}
this.oModalContainer=dojo.byId(modalContainer);if(!this.oModalContainer){throw new Error("{dj.widget.panel.ModalPanel} modal-container is null or undefined");}
this.observeOpenModalPanel=new dj.util.Observer();this.observeCloseModalPanel=new dj.util.Observer();this.cfg=new dj.util.Config(this);this._setupConfig();if(config){this.cfg.applyConfig(config,true);}
this.cfg.fireQueue();if(this.oModalId===null){this._setupTargetlessModalPanel(this.oModalContainer);}else{this._setupModalPanel(this.oModalId,this.oModalContainer);}}).prototype={DEFAULT_CONFIG:{OPEN_MODAL_PANEL_EVENT_OPTION:{key:"openModalPanelEvent",value:"mouseover"},CLOSE_MODAL_PANEL_EVENT_OPTION:{key:"closeModalPanelEvent",value:"mouseout"},CLOSE_MODAL_PANEL_BUTTON_SELECTOR:{key:"closeModalPanelButtonSelector",value:null},CLOSE_MODAL_PANEL_EVENT_FOR_BUTTON_SELECTOR:{key:"closeModalPanelEventForButtonSelector",value:null}},_setupModalPanel:function(oModalId,oModalContainer){dojo.style(oModalContainer,{visibility:"hidden"});var modalOpenEvent=this.cfg.getProperty(this.DEFAULT_CONFIG.OPEN_MODAL_PANEL_EVENT_OPTION.key);var modalCloseEvent=this.cfg.getProperty(this.DEFAULT_CONFIG.CLOSE_MODAL_PANEL_EVENT_OPTION.key);var that=this;dojo.connect(oModalId,"on"+modalOpenEvent,this,function(event){dojo.stopEvent(event);this.openModalPanel();});var closeModalPanelSelector=this.cfg.getProperty(this.DEFAULT_CONFIG.CLOSE_MODAL_PANEL_BUTTON_SELECTOR.key);if(closeModalPanelSelector!==null){var closeModalPanelButtons=dojo.query(closeModalPanelSelector,oModalContainer);var modalCloseEventForButtonSelector=(this.cfg.getProperty(this.DEFAULT_CONFIG.CLOSE_MODAL_PANEL_EVENT_FOR_BUTTON_SELECTOR.key)!==null)?this.cfg.getProperty(this.DEFAULT_CONFIG.CLOSE_MODAL_PANEL_EVENT_FOR_BUTTON_SELECTOR.key):modalCloseEvent;closeModalPanelButtons.forEach(function(oCloseModalPanelButton){dojo.connect(oCloseModalPanelButton,"on"+modalCloseEventForButtonSelector,this,function(event){dojo.stopEvent(event);this.closeModalPanel();});},this);}else{dojo.connect(oModalContainer,"onmouseover",this,this.openModalPanel);dojo.connect(oModalContainer,"on"+modalCloseEvent,this,this.closeModalPanel);}
if(modalCloseEvent=='blur'){dojo.connect(document,"onclick",this,function(event){var isMousePointerinModalContainer=dj.util.Element.contains(oModalContainer,event.clientX,event.clientY);if(isMousePointerinModalContainer===false){this.closeModalPanel();}});}},_setupTargetlessModalPanel:function(oModalContainer){var modalCloseEvent=this.cfg.getProperty(this.DEFAULT_CONFIG.CLOSE_MODAL_PANEL_EVENT_OPTION.key);var closeModalPanelSelector=this.cfg.getProperty(this.DEFAULT_CONFIG.CLOSE_MODAL_PANEL_BUTTON_SELECTOR.key);this.openModalPanel();var that=this;if(closeModalPanelSelector!==null){var closeModalPanelButtons=dojo.query(closeModalPanelSelector,oModalContainer).each(function(oCloseModalPanelButton){dojo.connect(oCloseModalPanelButton,"on"+modalCloseEvent,this,function(event){dojo.stopEvent(event);this.closeModalPanel();});});}else{dojo.connect(oCloseModalPanelButton,"on"+modalCloseEvent,this,this.closeModalPanel);}},openModalPanel:function(){dojo.style(this.oModalContainer,{visibility:"visible"});},closeModalPanel:function(){dojo.style(this.oModalContainer,{visibility:"hidden"});},_setupConfig:function(config){var cfg=this.cfg;var defCfg=this.DEFAULT_CONFIG;cfg.addProperty(defCfg.OPEN_MODAL_PANEL_EVENT_OPTION.key,{value:defCfg.OPEN_MODAL_PANEL_EVENT_OPTION.value});cfg.addProperty(defCfg.CLOSE_MODAL_PANEL_EVENT_OPTION.key,{value:defCfg.CLOSE_MODAL_PANEL_EVENT_OPTION.value});cfg.addProperty(defCfg.CLOSE_MODAL_PANEL_BUTTON_SELECTOR.key,{value:defCfg.CLOSE_MODAL_PANEL_BUTTON_SELECTOR.value});cfg.addProperty(defCfg.CLOSE_MODAL_PANEL_EVENT_FOR_BUTTON_SELECTOR.key,{value:defCfg.CLOSE_MODAL_PANEL_EVENT_FOR_BUTTON_SELECTOR.value});}};
dojo.provide("dj.widget.panel.Tooltip");dojo.require("dj.lang");dojo.require("dj.util.Query");dojo.declare("dj.widget.panel.Tooltip",null,{constructor:function(containerClass,tipTargetBox,tipTarget,tooltipBox,container,hideDelayInMillis){this._delayedMouseOver(tipTarget,dojo.hitch(this,function(node){this.init(containerClass,{elementsContainerClass:tipTargetBox,targetClass:tipTarget,tooltipClass:tooltipBox,container:container,hideTooltipDelay:hideDelayInMillis});this.isInitialized=true;var ttb=dj.util.Query.up(node,tipTargetBox),tb=dojo.query(tooltipBox,ttb)[0];this.showTooltip(tb);}),200);},_delayedMouseOver:function(containerClass,func,time){var doInit=false,initDelay;var outEvent=dj.lang.addLiveEvent(containerClass,"mouseout",function(){doInit=false;});var overEvent=dj.lang.addLiveEvent(containerClass,"mouseover",function(){if(initDelay){clearTimeout(initDelay);}
doInit=true;var elm=this;initDelay=setTimeout(function(){if(!doInit){return;}
dj.lang.removeLiveEvent(overEvent);dj.lang.removeLiveEvent(outEvent);func.call(null,elm);},time);});},DEFAULT_CONFIG:{hideTooltipDelay:100},init:function(containerClass,config){this.eventPointerList=[];this.containerClass=containerClass;this.cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,config);this._setupTooltips();},_setupTooltips:function(){this.oContainer=(this.cfg.container?dojo.byId(this.cfg.container):this.cfg.container);this.oTooltipContainers=((typeof this.oContainer!=='undefined')&&(this.oContainer!==null))?dojo.query(this.containerClass,this.oContainer):dojo.query(this.containerClass);this.oTooltipContainers.forEach(dojo.hitch(this,function(oTooltipContainer){var oTooltipElementsContainer=dojo.query(this.cfg.elementsContainerClass,oTooltipContainer)[0],oTooltipTarget=dojo.query(this.cfg.targetClass,oTooltipContainer)[0],oTooltip=dojo.query(this.cfg.tooltipClass,oTooltipContainer)[0];if(!((typeof oTooltipElementsContainer!=='undefined')&&(oTooltipElementsContainer!==null)&&(typeof oTooltipTarget!=='undefined')&&(oTooltipTarget!==null)&&(typeof oTooltip!=='undefined')&&(oTooltip!==null))){console.log("{Tooltip} oTooltipTarget or oTooltip is not defined for tooltip container");return;}
var tipTarget=dojo.query(this.cfg.targetClass,oTooltipElementsContainer)[0];if((typeof tipTarget==='undefined')||(tipTarget===null)){dojo.place(oTooltipElementsContainer,oTooltipTarget,"before");dojo.place(oTooltipTarget,oTooltip,"after");}
var tooltipVisibleFlag=false;var showTooltipListener=function(){tooltipVisibleFlag=true;this.showTooltip(oTooltip);};var hideTooltipListener=function(){tooltipVisibleFlag=false;setTimeout(dojo.hitch(this,function(){if(tooltipVisibleFlag===false){this.hideTooltip(oTooltip);}}),this.cfg.hideTooltipDelay);};this.eventPointerList.push(dojo.connect(oTooltipTarget,"onmouseover",dojo.hitch(this,showTooltipListener)));this.eventPointerList.push(dojo.connect(oTooltipTarget,"onmouseout",dojo.hitch(this,hideTooltipListener)));this.eventPointerList.push(dojo.connect(oTooltip,"onmouseover",dojo.hitch(this,showTooltipListener)));this.eventPointerList.push(dojo.connect(oTooltip,"onmouseout",dojo.hitch(this,hideTooltipListener)));}));},showTooltip:function(oTooltip){dojo.style(oTooltip,{display:"block"});},hideTooltip:function(oTooltip){dojo.style(oTooltip,{display:"none"});},destructor:function(){if(!this._isInited()){return;}
this.oContainer=null;this.oTooltipContainers=null;for(var i=0,len=this.eventPointerList.length;i<len;i++){dojo.disconnect(this.eventPointerList[i]);delete this.eventPointerList[i];}},refreshTooltips:function(container){if(!this._isInited()){return;}
this.destructor();this._setupTooltips();},_isInited:function(){if(this.isInitialized==true){return true;}
console.warn("{dj.widget.panel.Tooltip} has not been initialized yet");return false;}});
dojo.provide("dj.widget.panel.SelectDropdownPanel");dojo.require("dj.util.Element");dojo.require("dj.lang");dojo.declare("dj.widget.panel.SelectDropdownPanel",null,{DEFAULT_CONFIG:{scrollContainerClass:".scroll_container",scrollBarClass:".scrollbar",scrollTrackClass:".scrollbar_container",scrollValuesContainerClass:".scroll_values_container",dropdownCollapsedClassName:"dropdown_collapsed",dropdownExpandedClassName:"dropdown_open",scrollContainerCollapsedClassName:"collapsed",scrollContainerExpandedClassName:"expanded",selectedClassName:".selected",scrollTrackContainerClassName:".scroll_track",dropdownScrollUpArrow:".scroll_up",dropdownScrollDownArrow:".scroll_down",scrollTrackHeight:"154",scrollValuesDisplayHeight:"190",scrollBarArrowShiftValue:"2"},constructor:function(selectDropdownContainer,config){this.cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,config);var scrollBarClass=this.cfg.scrollBarClass;var scrollTrackClass=this.cfg.scrollTrackClass;var scrollContainerClass=this.cfg.scrollContainerClass;var scrollValuesContainerClass=this.cfg.scrollValuesContainerClass;this.oSelectDropDownContainer=dojo.byId(selectDropdownContainer);if(this.oSelectDropDownContainer){this.oScrollBar=dojo.query(scrollBarClass,this.oSelectDropDownContainer)[0];this.oScrollTrack=dojo.query(scrollTrackClass,this.oSelectDropDownContainer)[0];this.oScrollContainer=dojo.query(scrollContainerClass,this.oSelectDropDownContainer)[0];this.oScrollValuesContainer=dojo.query(scrollValuesContainerClass,this.oSelectDropDownContainer)[0];this._setupSelectDropdown(this.oSelectDropDownContainer,this.oScrollContainer,this.oScrollValuesContainer,this.oScrollBar,this.oScrollTrack);}},_setupSelectDropdown:function(oSelectDropdownContainer,oScrollContainer,oScrollValuesContainer,oScrollBar,oScrollTrack){var selectDropdownCollapsedClassName=this.cfg.dropdownCollapsedClassName;var selectDropdownExpandedClassName=this.cfg.dropdownExpandedClassName;var scrollContainerCollapsedClassName=this.cfg.scrollContainerCollapsedClassName;var scrollContainerExpandedClassName=this.cfg.scrollContainerExpandedClassName;var selectedClassName=this.cfg.selectedClassName;this.oSelected=dojo.query(selectedClassName,oSelectDropdownContainer)[0];var toggleDropdownClass=function(){if(dojo.hasClass(oSelectDropdownContainer,selectDropdownCollapsedClassName)){dojo.removeClass(oSelectDropdownContainer,selectDropdownCollapsedClassName);dojo.addClass(oSelectDropdownContainer,selectDropdownExpandedClassName);}else
if(dojo.hasClass(oSelectDropdownContainer,selectDropdownExpandedClassName)){dojo.removeClass(oSelectDropdownContainer,selectDropdownExpandedClassName);dojo.addClass(oSelectDropdownContainer,selectDropdownCollapsedClassName);}
if(dojo.hasClass(oScrollContainer,scrollContainerCollapsedClassName)){dojo.removeClass(oScrollContainer,scrollContainerCollapsedClassName);dojo.addClass(oScrollContainer,scrollContainerExpandedClassName);}else
if(dojo.hasClass(oScrollContainer,scrollContainerExpandedClassName)){dojo.removeClass(oScrollContainer,scrollContainerExpandedClassName);dojo.addClass(oScrollContainer,scrollContainerCollapsedClassName);}};dojo.connect(this.oSelected,"onclick",toggleDropdownClass);dojo.connect(oScrollValuesContainer,"onclick",toggleDropdownClass);dojo.connect(document,"onclick",function(event){var isMousePointerinModalContainer=dj.util.Element.contains(oScrollContainer,event.clientX,event.clientY);if(isMousePointerinModalContainer==false){if(dojo.hasClass(oSelectDropdownContainer,selectDropdownExpandedClassName)){dojo.removeClass(oSelectDropdownContainer,selectDropdownExpandedClassName);dojo.addClass(oSelectDropdownContainer,selectDropdownCollapsedClassName);}
if(dojo.hasClass(oScrollContainer,scrollContainerExpandedClassName)){dojo.removeClass(oScrollContainer,scrollContainerExpandedClassName);dojo.addClass(oScrollContainer,scrollContainerCollapsedClassName);}}});if(oScrollBar&&oScrollBar!==null&&oScrollTrack&&oScrollTrack!==null){dojo.require("dj.widget.Slider");var noOfValues=oScrollValuesContainer.children.length;var scrollTrackHeight=parseInt(this.cfg.scrollTrackHeight,10);var scrollValuesDisplayHeight=parseInt(this.cfg.scrollValuesDisplayHeight,10);var scrollBarHeight=parseInt((scrollTrackHeight/(noOfValues/10)),10);dojo.style(oScrollBar,{height:scrollBarHeight+"px"});var scrollValuesTopShiftFactor=(scrollValuesDisplayHeight/scrollTrackHeight)*(noOfValues/10);var moveDropDown=function(value){var sliderPx=slider.translateToPx(value);var sliderPxValue=sliderPx.replace("px","");dojo.style(oScrollValuesContainer,{top:"-"+sliderPxValue*scrollValuesTopShiftFactor+"px"});};var slider=new dj.widget.Slider(oScrollBar,oScrollTrack,{onSlide:moveDropDown,onChange:moveDropDown,axis:'vertical'});var scrollTrackContainerClass=this.cfg.scrollTrackContainerClassName;this.oScrollTrackContainer=dojo.query(scrollTrackContainerClass,oSelectDropdownContainer)[0];var scrollUpArrowClass=this.cfg.dropdownScrollUpArrow;var scrollDownArrowClass=this.cfg.dropdownScrollDownArrow;this.oScrollUpArrow=dojo.query(scrollUpArrowClass,this.oScrollTrackContainer)[0];this.oScrollDownArrow=dojo.query(scrollDownArrowClass,this.oScrollTrackContainer)[0];var scrollArrowShiftValue=parseInt(this.cfg.scrollBarArrowShiftValue,10);var scrollBarTopPx,scrollBarTop,sliderValue;dojo.connect(this.oScrollUpArrow,"onclick",function(event){scrollBarTop=dojo.style(oScrollBar,"top");sliderValue=slider.translateToValue(scrollBarTop-scrollArrowShiftValue);if(scrollBarTop>0){slider.setValue(sliderValue);}});dojo.connect(this.oScrollDownArrow,"onclick",function(event){scrollBarTop=dojo.style(oScrollBar,"top");sliderValue=slider.translateToValue(scrollBarTop+scrollArrowShiftValue);if(scrollBarTop<(scrollTrackHeight-scrollBarHeight)){slider.setValue(sliderValue);}});}}});
Digg={remoteSubmit:function(url,title,bodytext,topic){if(!url)return;title=title||'';bodytext=bodytext||'';topic=topic||'';window.open('http://digg.com/remote-submit?phase=2&url='+url+'&title='+title+'&bodytext='+bodytext+'&topic='+topic+'&s=d797e79292867d0b9369ab247c9fac9b',new Date().getTime(),'toolbar=1,scrollbars=1,location=0,statusbar=1,menubar=1,resizable=1,width=650,height=450');}};dojo.provide("clickability.w-button");
dojo.require("dj.util.Cookie");

/* Copyright 2000-2004 Clickability Inc.  */
/* Clickability ButtonServer v4.01        */                                  

/*Functions*/
function getRegionpartnerID(TrackType)
{
  var regionCookie = dj.util.Cookie.getCookie('wsjregion');
  var defaultETRegion = 398944;
  var defaultPVRegion = 399154;

  if (typeof regionCookie !== "string" || regionCookie.length === 0)
  {
    return ((TrackType == "ET") ? defaultETRegion : defaultPVRegion);
  }
  var regionid = regionCookie.split(',');
  var ET = {};
  var PV = {};

  if (TrackType == 'ET')
  {
    ET.na = defaultETRegion;
    ET.europe = 398949;
    ET.asia = 398954;
	ET.india = 398959;
    //  console.log(ET[regionid[0]]);
	if(typeof regionid[1]!== "string")
	{
	return ET[regionid[0]];
	}
	else
	{
	 return ((regionid[1].toLowerCase()=="india") ? ET[regionid[1]] : ET[regionid[0]]);
	} 
  }
  else
  {
   PV.na = defaultPVRegion;
   PV.europe = 399159;
   PV.asia = 399164;
   PV.india = 399169;
   //  console.log(PV[regionid[0]]);
   if(typeof regionid[1]!== "string")
	{
    return PV[regionid[0]]; 
	}
	else 
	{ 
     return ((regionid[1].toLowerCase()=="india") ? PV[regionid[1]] : PV[regionid[0]]);
    }
  }
}


function ST () {
	window.open('http://www.savethis.clickability.com/st/saveThisApp?clickMap=saveThis'+commonLoc,'click',popWin);
	return false;
}

function STMouseOver () {
	window.status='SAVE THIS';
	return true;
}

function STMouseOut () {
	window.status='';
	return true;
}

function ET () {
    	var _c=new Image();
     	var _qc='http://s.clickability.com/s?';
    	_qc+="&7="+regionpartnerID;
    	_qc+="&8="+escape(getEmailURL());
    	_qc+="&10="+escape(getClickTitle());
    	_qc+="&19=40003";
    	_qc+="&21=1";
    	_qc+="&18="+Math.random();
    	_c.src=_qc;

	window.open('http://www.emailthis.clickability.com/et/emailThis?clickMap=create'+commonLoc,'click',popWin);
	return false;
}

function ETMouseOver () {
	window.status='EMAIL THIS';
	return true;
}

function ETMouseOut () {
	window.status='';
	return true;
}

function MP () {
	window.open('http://at.wsj.com/mostpopular','click',popWin);
	return false;
}

function MPMouseOver () {
	window.status='MOST POPULAR';
	return true;
}

function MPMouseOut () {
	window.status='';
	return true;
}

function getClickURL() {
        if (self.clickURL) return clickURL;
        return document.location.href;
}

function getEmailURL() {
	if (AT_VARS && AT_VARS.articleEmailUrl) {
    return AT_VARS.articleEmailUrl;
  }
	return getClickURL();
}

function getClickTitle() {
	if (self.clickTitle) return clickTitle;
	return document.title;
}
function getClickExpire() {
	if (self.clickExpire) return clickExpire; 
	return "";
}

//document.write('<script language="JavaScript"> \n');
//document.write('window.onerror=function(){clickURL=document.location.href;return true;} \n');
//document.write('if(!self.clickURL) clickURL=parent.location.href; \n');
//document.write('<\/script> \n');

if(!self.clickURL)
{
 clickURL=parent.location.href;
}

/* WSJ.com Clickability Default Section Id/PV Id */
var PVpartnerID="59941",partnerID="150";
var regionpartnerID  = getRegionpartnerID('ET');
var PVregionpartnerID = getRegionpartnerID('PV');
/* WSJ.com Clickbility Section Id and PV Id mapping */

var section_pv = new Array(20);

section_pv["Technology"]="110636";
section_pv["Tech"]="110636";
section_pv["Markets"]="110641";
section_pv["Market News"]="110641";
section_pv["Personal Journal"]="110651";
section_pv["Personal Finance"]="110651";
section_pv["Opinion"]="110646";
section_pv["Leisure/Weekend"]="110656";
section_pv["Lifestyle"]="110656";
section_pv["Life & Style"]="110656";
section_pv["Life &amp; Style"]="110656";
section_pv["Health"]="110676";
section_pv["Media"]="110671";

var section = new Array(20);

section["Technology"]="110591";
section["Tech"]="110591";
section["Markets"]="110596";
section["Market News"]="110596";
section["Personal Journal"]="110606";
section["Personal Finance"]="110606";
section["Opinion"]="110601";
section["Leisure/Weekend"]="110611";
section["Lifestyle"]="110611";
section["Life & Style"]="110611";
section["Life &amp; Style"]="110611";
section["Health"]="110631";
section["Media"]="110626";

try {
  if(window.mpsection){
	  if(section_pv[mpsection]){
	  	PVpartnerID = section_pv[mpsection];	
	  }
	  if(section[mpsection]){
	  	partnerID = section[mpsection];	
	  }
	}
}catch(err){
  txt="ERROR.\n\n"
  txt+="Error description: " + err.description + "\n\n"
  txt+="Click OK to continue.\n\n"
  console.error(txt);
}

var popWin="width=510,height=480,resizable=1,scrollbars=1";
var commonLoc="&fb=Y&url="+escape(getEmailURL())+"&title="+escape(getClickTitle())+"&random="+Math.random()+"&partnerID="+partnerID+"&expire="+escape(getClickExpire());

var inpop  = ( (document.domain.indexOf("printthis.clickability.com")>-1)?true:false);
var _a=new Image();
var _b=new Image();
var clickRan=Math.random();
var clickFac = 10;
if(clickFac==0)clickFac=1;
if(!inpop && clickRan>(1-(1/clickFac))){
var _ti=900;
    var _qa="";
    var _qb="";
    

    // PAGE VIEW TRACKING
    var _qa='http://s.clickability.com/s?';
    _qa+="&7="+PVpartnerID;
    _qa+="&8="+escape(getClickURL());
    _qa+="&10="+escape(getClickTitle());
    _qa+="&19="+_ti;
    _qa+="&21="+clickFac;
    _qa+="&18="+Math.random();
    _a.src=_qa;
    // ET PAGEVIEW TRACKING
     var _qb='http://s.clickability.com/s?';
    _qb+="&7="+partnerID;
    _qb+="&8="+escape(getEmailURL());
    _qb+="&10="+escape(getClickTitle());
    _qb+="&19="+_ti;
    _qb+="&21="+clickFac;
    _qb+="&18="+Math.random();
    _b.src=_qb;


	 // PAGE VIEW REGION TRACKING
    var _qa='http://s.clickability.com/s?';
    _qa+="&7="+PVregionpartnerID;
    _qa+="&8="+escape(getClickURL());
    _qa+="&10="+escape(getClickTitle());
    _qa+="&19="+_ti;
    _qa+="&21="+clickFac;
    _qa+="&18="+Math.random();
    _a.src=_qa;

	
    // ET PAGEVIEW REGION TRACKING
     var _qb='http://s.clickability.com/s?';
    _qb+="&7="+regionpartnerID;
    _qb+="&8="+escape(getEmailURL());
    _qb+="&10="+escape(getClickTitle());
    _qb+="&19="+_ti;
    _qb+="&21="+clickFac;
    _qb+="&18="+Math.random();
    _b.src=_qb;
}

window.onresize = function () {
    for (var i=0; i<document.links.length; i++) {
        document.links[i].onclick = document.links[i].onclick;
    }
}

var L_VARS={};L_VARS.publisher_key=6563391702;L_VARS.guid=(typeof s!='undefined')?s.prop20:"";L_VARS.anchor="_loomia_si_anchor";L_VARS.zone=999;function _loomia_addScript(url,script_anchor){$(script_anchor).appendChild(new Element('script',{'src':url}));}
var _loomia_scripts_loaded=0;function _loomia_addCS(){if(!_loomia_scripts_loaded){_loomia_addScript("http://assets.loomia.com/js/clixdom.js","_loomia_cs_script_anchor");_loomia_addScript("http://assets.loomia.com/js/simitems.js","_loomia_si_script_anchor");}
_loomia_scripts_loaded=1;}
if(typeof dj=="undefined"){dj={};}
if(typeof dj.module=="undefined"){dj.module={};}
if(typeof dj.module.loomia=="undefined"){dj.module.loomia={};}
dj.module.loomia.Initilizer=Class.create({initialize:function(){if(!Prototype.Browser.IE){_loomia_addCS();}}});dj.lang.provide("djscript.j_dashboard");dojo.provide("dj.module.dashboard.dragdrop");


// script.aculo.us dragdrop.js v1.8.1, Thu Jan 03 22:07:12 -0500 2008

// Copyright (c) 2005-2007 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2007 Sammi Williams (http://www.oriontransfer.co.nz, sammi@oriontransfer.co.nz)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if(Object.isUndefined(Effect)) {
  throw("dragdrop.js requires including script.aculo.us' effects.js library");
}

var Droppables = {
  drops: [],

  remove: function(element) {
    this.drops = this.drops.reject(function(d) { return d.element==$(element); });
  },

  add: function(element) {
    element = $(element);
    var options = Object.extend({
      greedy:     true,
      hoverclass: null,
      tree:       false
    }, arguments[1] || { });

    // cache containers
    if(options.containment) {
      options._containers = [];
      var containment = options.containment;
      if(Object.isArray(containment)) {
        containment.each( function(c) { options._containers.push($(c)); });
      } else {
        options._containers.push($(containment));
      }
    }

    if(options.accept){options.accept = [options.accept].flatten();}

    Element.makePositioned(element); // fix IE
    options.element = element;

    this.drops.push(options);
  },

  findDeepestChild: function(drops) {
    deepest = drops[0];

    for (i = 1; i < drops.length; ++i) {
      if (Element.isParent(drops[i].element, deepest.element)){deepest = drops[i];}
    }

    return deepest;
  },

  isContained: function(element, drop) {
    var containmentNode;
    if(drop.tree) {
      containmentNode = element.treeNode;
    } else {
      containmentNode = element.parentNode;
    }
    return drop._containers.detect(function(c) { return containmentNode == c; });
  },

  isAffected: function(point, element, drop) {
    return (
      (drop.element!=element) &&
      ((!drop._containers) ||
        this.isContained(element, drop)) &&
      ((!drop.accept) ||
        (Element.classNames(element).detect(
          function(v) { return drop.accept.include(v); } ) )) &&
      Position.within(drop.element, point[0], point[1]) );
  },

  deactivate: function(drop) {
    if(drop.hoverclass){dojo.removeClass(drop.element, drop.hoverclass);}
    this.last_active = null;
  },

  activate: function(drop) {
    if(drop.hoverclass){dojo.addClass(drop.element, drop.hoverclass);}
    this.last_active = drop;
  },

  show: function(point, element) {
    if(!this.drops.length) {
      return;
    }
    var drop, affected = [];

    this.drops.each( function(drop) {
      if(Droppables.isAffected(point, element, drop)){affected.push(drop);}
    });

    if(affected.length>0){drop = Droppables.findDeepestChild(affected);}

    if(this.last_active && this.last_active != drop){this.deactivate(this.last_active);}
    if (drop) {
      Position.within(drop.element, point[0], point[1]);
      if(drop.onHover){drop.onHover(element, drop.element, Position.overlap(drop.overlap, drop.element));}

      if (drop != this.last_active){Droppables.activate(drop);}
    }
  },

  fire: function(event, element) {
    if(!this.last_active) {
      return;
    }
    Position.prepare();

    if (this.isAffected([Event.pointerX(event), Event.pointerY(event)], element, this.last_active)) {
      if (this.last_active.onDrop) {
        this.last_active.onDrop(element, this.last_active.element, event);
        return true;
      }
    }
  },

  reset: function() {
    if(this.last_active){this.deactivate(this.last_active);}
  }
};

var Draggables = {
  drags: [],
  observers: [],

  register: function(draggable) {
    if(this.drags.length == 0) {
      this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
      this.eventMouseMove = this.updateDrag.bindAsEventListener(this);
      this.eventKeypress  = this.keyPress.bindAsEventListener(this);

      Event.observe(document, "mouseup", this.eventMouseUp);
      Event.observe(document, "mousemove", this.eventMouseMove);
      Event.observe(document, "keypress", this.eventKeypress);
    }
    this.drags.push(draggable);
  },

  unregister: function(draggable) {
    this.drags = this.drags.reject(function(d) { return d==draggable; });
    if(this.drags.length == 0) {
      Event.stopObserving(document, "mouseup", this.eventMouseUp);
      Event.stopObserving(document, "mousemove", this.eventMouseMove);
      Event.stopObserving(document, "keypress", this.eventKeypress);
    }
  },

  activate: function(draggable) {
    if(draggable.options.delay) {
      this._timeout = setTimeout(function() {
        Draggables._timeout = null;
        window.focus();
        Draggables.activeDraggable = draggable;
      }.bind(this), draggable.options.delay);
    } else {
      window.focus(); // allows keypress events if window isn't currently focused, fails for Safari
      this.activeDraggable = draggable;
    }
  },

  deactivate: function() {
    this.activeDraggable = null;
  },

  updateDrag: function(event) {
    if(!this.activeDraggable) {
      return;
    }
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    // Mozilla-based browsers fire successive mousemove events with
    // the same coordinates, prevent needless redrawing (moz bug?)
    if(this._lastPointer && (this._lastPointer.inspect() == pointer.inspect())) {
      return;
    }
    this._lastPointer = pointer;

    this.activeDraggable.updateDrag(event, pointer);
  },

  endDrag: function(event) {
    if(this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    if(!this.activeDraggable) {
      return;
    }
    this._lastPointer = null;
    this.activeDraggable.endDrag(event);
    this.activeDraggable = null;
  },

  keyPress: function(event) {
    if(this.activeDraggable){this.activeDraggable.keyPress(event);}
  },

  addObserver: function(observer) {
    this.observers.push(observer);
    this._cacheObserverCallbacks();
  },

  removeObserver: function(element) {  // element instead of observer fixes mem leaks
    this.observers = this.observers.reject( function(o) { return o.element==element; });
    this._cacheObserverCallbacks();
  },

  notify: function(eventName, draggable, event) {  // 'onStart', 'onEnd', 'onDrag'
    if(this[eventName+'Count'] > 0){this.observers.each( function(o) {
      if(o[eventName]){o[eventName](eventName, draggable, event);}
    });}
    if(draggable.options[eventName]){draggable.options[eventName](draggable, event);}
  },

  _cacheObserverCallbacks: function() {
    ['onStart','onEnd','onDrag'].each( function(eventName) {
      Draggables[eventName+'Count'] = Draggables.observers.select(
        function(o) { return o[eventName]; }
      ).length;
    });
  }
};

/*--------------------------------------------------------------------------*/

var Draggable = Class.create({
  initialize: function(element) {
    var defaults = {
      handle: false,
      reverteffect: function(element, top_offset, left_offset) {
        var dur = Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;
        new Effect.Move(element, { x: -left_offset, y: -top_offset, duration: dur,
          queue: {scope:'_draggable', position:'end'}
        });
      },
      endeffect: function(element) {
        var toOpacity = Object.isNumber(element._opacity) ? element._opacity : 1.0;
        new Effect.Opacity(element, {duration:0.2, from:0.7, to:toOpacity,
          queue: {scope:'_draggable', position:'end'},
          afterFinish: function(){
            Draggable._dragging[element] = false;
          }
        });
      },
      zindex: 1000,
      revert: false,
      quiet: false,
      scroll: false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      snap: false,  // false, or xy or [x,y] or function(x,y){ return [x,y] }
      delay: 0
    };

    if(!arguments[1] || Object.isUndefined(arguments[1].endeffect)){Object.extend(defaults, {
      starteffect: function(element) {
        element._opacity = Element.getOpacity(element);
        Draggable._dragging[element] = true;
        new Effect.Opacity(element, {duration:0.2, from:element._opacity, to:0.7});
      }
    });}

    var options = Object.extend(defaults, arguments[1] || { });

    this.element = $(element);

    if(options.handle && Object.isString(options.handle)){this.handle = this.element.down('.'+options.handle, 0);}

    if(!this.handle){this.handle = $(options.handle);}
    if(!this.handle){this.handle = this.element;}

    if(options.scroll && !options.scroll.scrollTo && !options.scroll.outerHTML) {
      options.scroll = $(options.scroll);
      this._isScrollChild = Element.childOf(this.element, options.scroll);
    }

    Element.makePositioned(this.element); // fix IE

    this.options  = options;
    this.dragging = false;

    this.eventMouseDown = this.initDrag.bindAsEventListener(this);
    Event.observe(this.handle, "mousedown", this.eventMouseDown);

    Draggables.register(this);
  },

  destroy: function() {
    Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
    Draggables.unregister(this);
  },

  currentDelta: function() {
    return([
      parseInt(Element.getStyle(this.element,'left') || '0'),
      parseInt(Element.getStyle(this.element,'top') || '0')]);
  },

  initDrag: function(event) {
    if(!Object.isUndefined(Draggable._dragging[this.element]) &&
      Draggable._dragging[this.element]) {
      return;
    }
    if(Event.isLeftClick(event)) {
      // abort on form elements, fixes a Firefox issue
      var src = Event.element(event);
      if((tag_name = src.tagName.toUpperCase()) && (
        tag_name=='INPUT' ||
        tag_name=='SELECT' ||
        tag_name=='OPTION' ||
        tag_name=='BUTTON' ||
        tag_name=='TEXTAREA')) {
        return;
      }

      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      var pos     = Position.cumulativeOffset(this.element);
      this.offset = [0,1].map( function(i) { return (pointer[i] - pos[i]); });

      Draggables.activate(this);
      Event.stop(event);
    }
  },

  startDrag: function(event) {
    this.dragging = true;
    if(!this.delta){this.delta = this.currentDelta();}

    if(this.options.zindex) {
      this.originalZ = parseInt(Element.getStyle(this.element,'z-index') || 0);
      this.element.style.zIndex = this.options.zindex;
    }

    if(this.options.ghosting) {
      this._clone = this.element.cloneNode(true);
      this.element._originallyAbsolute = (this.element.getStyle('position') == 'absolute');
      if (!this.element._originallyAbsolute){Position.absolutize(this.element);}
      this.element.parentNode.insertBefore(this._clone, this.element);
    }

    if(this.options.scroll) {
      if (this.options.scroll == window) {
        var where = this._getWindowScroll(this.options.scroll);
        this.originalScrollLeft = where.left;
        this.originalScrollTop = where.top;
      } else {
        this.originalScrollLeft = this.options.scroll.scrollLeft;
        this.originalScrollTop = this.options.scroll.scrollTop;
      }
    }

    Draggables.notify('onStart', this, event);

    if(this.options.starteffect){this.options.starteffect(this.element);}
  },

  updateDrag: function(event, pointer) {
    if(!this.dragging){this.startDrag(event);}

    if(!this.options.quiet){
      Position.prepare();
      Droppables.show(pointer, this.element);
    }

    Draggables.notify('onDrag', this, event);

    this.draw(pointer);
    if(this.options.change){this.options.change(this);}

    if(this.options.scroll) {
      this.stopScrolling();

      var p;
      if (this.options.scroll == window) {
        with(this._getWindowScroll(this.options.scroll)) { p = [ left, top, left+width, top+height ]; }
      } else {
        p = Position.page(this.options.scroll);
        p[0] += this.options.scroll.scrollLeft + Position.deltaX;
        p[1] += this.options.scroll.scrollTop + Position.deltaY;
        p.push(p[0]+this.options.scroll.offsetWidth);
        p.push(p[1]+this.options.scroll.offsetHeight);
      }
      var speed = [0,0];
      if(pointer[0] < (p[0]+this.options.scrollSensitivity)){speed[0] = pointer[0]-(p[0]+this.options.scrollSensitivity);}
      if(pointer[1] < (p[1]+this.options.scrollSensitivity)){speed[1] = pointer[1]-(p[1]+this.options.scrollSensitivity);}
      if(pointer[0] > (p[2]-this.options.scrollSensitivity)){speed[0] = pointer[0]-(p[2]-this.options.scrollSensitivity);}
      if(pointer[1] > (p[3]-this.options.scrollSensitivity)){speed[1] = pointer[1]-(p[3]-this.options.scrollSensitivity);}
      this.startScrolling(speed);
    }

    // fix AppleWebKit rendering
    if(Prototype.Browser.WebKit){window.scrollBy(0,0);}

    Event.stop(event);
  },

  finishDrag: function(event, success) {
    this.dragging = false;

    if(this.options.quiet){
      Position.prepare();
      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      Droppables.show(pointer, this.element);
    }

    if(this.options.ghosting) {
      if (!this.element._originallyAbsolute){Position.relativize(this.element);}
      delete this.element._originallyAbsolute;
      Element.remove(this._clone);
      this._clone = null;
    }

    var dropped = false;
    if(success) {
      dropped = Droppables.fire(event, this.element);
      if (!dropped){dropped = false;}
    }
    if(dropped && this.options.onDropped){this.options.onDropped(this.element);}
    Draggables.notify('onEnd', this, event);

    var revert = this.options.revert;
    if(revert && Object.isFunction(revert)){revert = revert(this.element);}

    var d = this.currentDelta();
    if(revert && this.options.reverteffect) {
      if (dropped == 0 || revert != 'failure'){this.options.reverteffect(this.element,
        d[1]-this.delta[1], d[0]-this.delta[0]);}
    } else {
      this.delta = d;
    }

    if(this.options.zindex){this.element.style.zIndex = this.originalZ;}

    if(this.options.endeffect){this.options.endeffect(this.element);}

    Draggables.deactivate(this);
    Droppables.reset();
  },

  keyPress: function(event) {
    if(event.keyCode!=Event.KEY_ESC) {
      return;
    }
    this.finishDrag(event, false);
    Event.stop(event);
  },

  endDrag: function(event) {
    if(!this.dragging) {
      return;
    }
    this.stopScrolling();
    this.finishDrag(event, true);
    Event.stop(event);
  },

  draw: function(point) {
    var pos = Position.cumulativeOffset(this.element);
    if(this.options.ghosting) {
      var r   = Position.realOffset(this.element);
      pos[0] += r[0] - Position.deltaX; pos[1] += r[1] - Position.deltaY;
    }

    var d = this.currentDelta();
    pos[0] -= d[0]; pos[1] -= d[1];

    if(this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
      pos[0] -= this.options.scroll.scrollLeft-this.originalScrollLeft;
      pos[1] -= this.options.scroll.scrollTop-this.originalScrollTop;
    }

    var p = [0,1].map(function(i){
      return (point[i]-pos[i]-this.offset[i]);
    }.bind(this));

    if(this.options.snap) {
      if(Object.isFunction(this.options.snap)) {
        p = this.options.snap(p[0],p[1],this);
      } else {
      if(Object.isArray(this.options.snap)) {
        p = p.map( function(v, i) {
          return (v/this.options.snap[i]).round()*this.options.snap[i]; }.bind(this));
      } else {
        p = p.map( function(v) {
          return (v/this.options.snap).round()*this.options.snap; }.bind(this));
      }
    }}

    var style = this.element.style;
    if((!this.options.constraint) || (this.options.constraint=='horizontal')){style.left = p[0] + "px";}
    if((!this.options.constraint) || (this.options.constraint=='vertical')){style.top  = p[1] + "px";}

    if(style.visibility=="hidden"){style.visibility = ""; // fix gecko rendering
}
  },

  stopScrolling: function() {
    if(this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
      Draggables._lastScrollPointer = null;
    }
  },

  startScrolling: function(speed) {
    if(!(speed[0] || speed[1])) {
      return;
    }
    this.scrollSpeed = [speed[0]*this.options.scrollSpeed,speed[1]*this.options.scrollSpeed];
    this.lastScrolled = new Date();
    this.scrollInterval = setInterval(this.scroll.bind(this), 10);
  },

  scroll: function() {
    var current = new Date();
    var delta = current - this.lastScrolled;
    this.lastScrolled = current;
    if(this.options.scroll == window) {
      with (this._getWindowScroll(this.options.scroll)) {
        if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
          var d = delta / 1000;
          this.options.scroll.scrollTo( left + d*this.scrollSpeed[0], top + d*this.scrollSpeed[1] );
        }
      }
    } else {
      this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
      this.options.scroll.scrollTop  += this.scrollSpeed[1] * delta / 1000;
    }

    Position.prepare();
    Droppables.show(Draggables._lastPointer, this.element);
    Draggables.notify('onDrag', this);
    if (this._isScrollChild) {
      Draggables._lastScrollPointer = Draggables._lastScrollPointer || $A(Draggables._lastPointer);
      Draggables._lastScrollPointer[0] += this.scrollSpeed[0] * delta / 1000;
      Draggables._lastScrollPointer[1] += this.scrollSpeed[1] * delta / 1000;
      if (Draggables._lastScrollPointer[0] < 0){Draggables._lastScrollPointer[0] = 0;}
      if (Draggables._lastScrollPointer[1] < 0){Draggables._lastScrollPointer[1] = 0;}
      this.draw(Draggables._lastScrollPointer);
    }

    if(this.options.change){this.options.change(this);}
  },

  _getWindowScroll: function(w) {
    var T, L, W, H;
    with (w.document) {
      if (w.document.documentElement && documentElement.scrollTop) {
        T = documentElement.scrollTop;
        L = documentElement.scrollLeft;
      } else if (w.document.body) {
        T = body.scrollTop;
        L = body.scrollLeft;
      }
      if (w.innerWidth) {
        W = w.innerWidth;
        H = w.innerHeight;
      } else if (w.document.documentElement && documentElement.clientWidth) {
        W = documentElement.clientWidth;
        H = documentElement.clientHeight;
      } else {
        W = body.offsetWidth;
        H = body.offsetHeight;
      }
    }
    return { top: T, left: L, width: W, height: H };
  }
});

Draggable._dragging = { };

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create({
  initialize: function(element, observer) {
    this.element   = $(element);
    this.observer  = observer;
    this.lastValue = Sortable.serialize(this.element);
  },

  onStart: function() {
    this.lastValue = Sortable.serialize(this.element);
  },

  onEnd: function() {
    Sortable.unmark();
    if(this.lastValue != Sortable.serialize(this.element)){this.observer(this.element);
}  }
});

var Sortable = {
  SERIALIZE_RULE: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/,

  sortables: { },

  _findRootElement: function(element) {
    while (element.tagName.toUpperCase() != "BODY") {
      if(element.id && Sortable.sortables[element.id]) {
        return element;
      }
      element = element.parentNode;
    }
  },

  options: function(element) {
    element = Sortable._findRootElement($(element));
    if(!element) {
      return;
    }
    return Sortable.sortables[element.id];
  },

  destroy: function(element){
    var s = Sortable.options(element);

    if(s) {
      Draggables.removeObserver(s.element);
      s.droppables.each(function(d){ Droppables.remove(d); });
      s.draggables.invoke('destroy');

      delete Sortable.sortables[s.element.id];
    }
  },

  create: function(element) {
    element = $(element);
    var options = Object.extend({
      element:     element,
      tag:         'li',       // assumes li children, override with tag: 'tagname'
      dropOnEmpty: false,
      tree:        false,
      treeTag:     'ul',
      overlap:     'vertical', // one of 'vertical', 'horizontal'
      constraint:  'vertical', // one of 'vertical', 'horizontal', false
      containment: element,    // also takes array of elements (or id's); or false
      handle:      false,      // or a CSS class
      only:        false,
      delay:       0,
      hoverclass:  null,
      ghosting:    false,
      quiet:       false,
      scroll:      false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      format:      this.SERIALIZE_RULE,

      // these take arrays of elements or ids and can be
      // used for better initialization performance
      elements:    false,
      handles:     false,

      onChange:    Prototype.emptyFunction,
      onUpdate:    Prototype.emptyFunction
    }, arguments[1] || { });

    // clear any old sortable with same element
    this.destroy(element);

    // build options for the draggables
    var options_for_draggable = {
      revert:      true,
      quiet:       options.quiet,
      scroll:      options.scroll,
      scrollSpeed: options.scrollSpeed,
      scrollSensitivity: options.scrollSensitivity,
      delay:       options.delay,
      ghosting:    options.ghosting,
      constraint:  options.constraint,
      handle:      options.handle };

    if(options.starteffect){options_for_draggable.starteffect = options.starteffect;}

    if(options.reverteffect){options_for_draggable.reverteffect = options.reverteffect;}else
      if(options.ghosting){options_for_draggable.reverteffect = function(element) {
        element.style.top  = 0;
        element.style.left = 0;
      };}

    if(options.endeffect){options_for_draggable.endeffect = options.endeffect;}

    if(options.zindex){options_for_draggable.zindex = options.zindex;}

    // build options for the droppables
    var options_for_droppable = {
      overlap:     options.overlap,
      containment: options.containment,
      tree:        options.tree,
      hoverclass:  options.hoverclass,
      onHover:     Sortable.onHover
    };

    var options_for_tree = {
      onHover:      Sortable.onEmptyHover,
      overlap:      options.overlap,
      containment:  options.containment,
      hoverclass:   options.hoverclass
    };

    // fix for gecko engine
    Element.cleanWhitespace(element);

    options.draggables = [];
    options.droppables = [];

    // drop on empty handling
    if(options.dropOnEmpty || options.tree) {
      Droppables.add(element, options_for_tree);
      options.droppables.push(element);
    }

    (options.elements || this.findElements(element, options) || []).each( function(e,i) {
      var handle = options.handles ? $(options.handles[i]) :
        (options.handle ? $(e).select('.' + options.handle)[0] : e);
      options.draggables.push(
        new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
      Droppables.add(e, options_for_droppable);
      if(options.tree){e.treeNode = element;}
      options.droppables.push(e);
    });

    if(options.tree) {
      (Sortable.findTreeElements(element, options) || []).each( function(e) {
        Droppables.add(e, options_for_tree);
        e.treeNode = element;
        options.droppables.push(e);
      });
    }

    // keep reference
    this.sortables[element.id] = options;

    // for onupdate
    Draggables.addObserver(new SortableObserver(element, options.onUpdate));

  },

  // return all suitable-for-sortable elements in a guaranteed order
  findElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.tag);
  },

  findTreeElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.treeTag);
  },

  onHover: function(element, dropon, overlap) {
    if(Element.isParent(dropon, element)) {
      return;
    }

    if(overlap > .33 && overlap < .66 && Sortable.options(dropon).tree) {
      return;
    } else if(overlap>0.5) {
      Sortable.mark(dropon, 'before');
      if(dropon.previousSibling != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, dropon);
        if(dropon.parentNode!=oldParentNode){Sortable.options(oldParentNode).onChange(element);}
        Sortable.options(dropon.parentNode).onChange(element);
      }
    } else {
      Sortable.mark(dropon, 'after');
      var nextElement = dropon.nextSibling || null;
      if(nextElement != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, nextElement);
        if(dropon.parentNode!=oldParentNode){Sortable.options(oldParentNode).onChange(element);}
        Sortable.options(dropon.parentNode).onChange(element);
      }
    }
  },

  onEmptyHover: function(element, dropon, overlap) {
    var oldParentNode = element.parentNode;
    var droponOptions = Sortable.options(dropon);

    if(!Element.isParent(dropon, element)) {
      var index;

      var children = Sortable.findElements(dropon, {tag: droponOptions.tag, only: droponOptions.only});
      var child = null;

      if(children) {
        var offset = Element.offsetSize(dropon, droponOptions.overlap) * (1.0 - overlap);

        for (index = 0; index < children.length; index += 1) {
          if (offset - Element.offsetSize (children[index], droponOptions.overlap) >= 0) {
            offset -= Element.offsetSize (children[index], droponOptions.overlap);
          } else if (offset - (Element.offsetSize (children[index], droponOptions.overlap) / 2) >= 0) {
            child = index + 1 < children.length ? children[index + 1] : null;
            break;
          } else {
            child = children[index];
            break;
          }
        }
      }

      dropon.insertBefore(element, child);

      Sortable.options(oldParentNode).onChange(element);
      droponOptions.onChange(element);
    }
  },

  unmark: function() {
    if(Sortable._marker){Sortable._marker.hide();}
  },

  mark: function(dropon, position) {
    // mark on ghosting only
    var sortable = Sortable.options(dropon.parentNode);
    if(sortable && !sortable.ghosting) {
      return;
    }

    if(!Sortable._marker) {
      Sortable._marker =
        ($('dropmarker') || Element.extend(document.createElement('DIV'))).
          hide().addClassName('dropmarker').setStyle({position:'absolute'});
      document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
    }
    var offsets = Position.cumulativeOffset(dropon);
    Sortable._marker.setStyle({left: offsets[0]+'px', top: offsets[1] + 'px'});

    if(position=='after') {
      if(sortable.overlap == 'horizontal'){Sortable._marker.setStyle({left: (offsets[0]+dropon.clientWidth) + 'px'});} else {Sortable._marker.setStyle({top: (offsets[1]+dropon.clientHeight) + 'px'});}
    }

    Sortable._marker.show();
  },

  _tree: function(element, options, parent) {
    var children = Sortable.findElements(element, options) || [];

    for (var i = 0; i < children.length; ++i) {
      var match = children[i].id.match(options.format);

      if (!match) {
        continue;
      }

      var child = {
        id: encodeURIComponent(match ? match[1] : null),
        element: element,
        parent: parent,
        children: [],
        position: parent.children.length,
        container: $(children[i]).down(options.treeTag)
      };

      /* Get the element containing the children and recurse over it */
      if (child.container){
        this._tree(child.container, options, child);
      }
      parent.children.push (child);
    }

    return parent;
  },

  tree: function(element) {
    element = $(element);
    var sortableOptions = this.options(element);
    var options = Object.extend({
      tag: sortableOptions.tag,
      treeTag: sortableOptions.treeTag,
      only: sortableOptions.only,
      name: element.id,
      format: sortableOptions.format
    }, arguments[1] || { });

    var root = {
      id: null,
      parent: null,
      children: [],
      container: element,
      position: 0
    };

    return Sortable._tree(element, options, root);
  },

  /* Construct a [i] index for a particular node */
  _constructIndex: function(node) {
    var index = '';
    do {
      if (node.id){index = '[' + node.position + ']' + index;}
    } while ((node = node.parent) != null);
    return index;
  },

  sequence: function(element) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[1] || { });

    return $(this.findElements(element, options) || []).map( function(item) {
      return item.id.match(options.format) ? item.id.match(options.format)[1] : '';
    });
  },

  setSequence: function(element, new_sequence) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[2] || { });

    var nodeMap = { };
    this.findElements(element, options).each( function(n) {
        if (n.id.match(options.format)){nodeMap[n.id.match(options.format)[1]] = [n, n.parentNode];}
        n.parentNode.removeChild(n);
    });

    new_sequence.each(function(ident) {
      var n = nodeMap[ident];
      if (n) {
        n[1].appendChild(n[0]);
        delete nodeMap[ident];
      }
    });
  },

  serialize: function(element) {
    element = $(element);
    var options = Object.extend(Sortable.options(element), arguments[1] || { });
    var name = encodeURIComponent(
      (arguments[1] && arguments[1].name) ? arguments[1].name : element.id);

    if (options.tree) {
      return Sortable.tree(element, arguments[1]).children.map( function (item) {
        return [name + Sortable._constructIndex(item) + "[id]=" +
                encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
      }).flatten().join('&');
    } else {
      return Sortable.sequence(element, arguments[1]).map( function(item) {
        return name + "[]=" + encodeURIComponent(item);
      }).join('&');
    }
  }
};

// Returns true if child is contained within element
Element.isParent = function(child, element) {
  if (!child.parentNode || child == element) {
    return false;
  }
  if (child.parentNode == element) {
    return true;
  }
  return Element.isParent(child.parentNode, element);
};

Element.findChildren = function(element, only, recursive, tagName) {
  if(!element.hasChildNodes()) {
    return null;
  }
  tagName = tagName.toUpperCase();
  if(only){only = [only].flatten();}
  var elements = [];
  $A(element.childNodes).each( function(e) {
    if(e.tagName && e.tagName.toUpperCase()==tagName &&
      (!only || (Element.classNames(e).detect(function(v) { return only.include(v); })))){elements.push(e);};
    if(recursive) {
      var grandchildren = Element.findChildren(e, only, recursive, tagName);
      if(grandchildren){elements.push(grandchildren);}
    }
  });

  return (elements.length>0 ? elements.flatten() : []);
};

Element.offsetSize = function (element, type) {
  return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
};

dojo.provide("dj.util.dashboard");dojo.require("dj.lang");dj.util.dashboard={getDashboardData:function(url,params){params.responseType=(!params.responseType)?"application/json":params.responseType;var isResponseJson=(params.responseType.indexOf("json")>-1);this._sendXhrRequest(url,params,{requestMethod:"GET",handleAs:(isResponseJson)?"json":"text",appendCacheBuster:true,requestHeaders:{"Accept":params.responseType}});},postDashboardData:function(url,postData,params){this._sendXhrRequest(url,params,{requestMethod:"POST",content:dojo.toJson(postData),requestHeaders:{"X-HTTP-Method-Override":"POST","Content-Type":"application/json"}});},putDashboardData:function(url,postData,params){this._sendXhrRequest(url,params,{requestMethod:"PUT",content:dojo.toJson(postData),requestHeaders:{"X-HTTP-Method-Override":"PUT","Content-Type":"application/json"}});},deleteDashboardData:function(url,postData,params){this._sendXhrRequest(url,params,{requestMethod:"POST",content:dojo.toJson(postData),requestHeaders:{"X-HTTP-Method-Override":"DELETE","Content-Type":"application/json"}});},_sendXhrRequest:function(requestUrl,userParams,requestOptions){var params=dj.lang.cloneMixin({callback:function(){}},userParams);var options=dj.lang.cloneMixin({requestHeaders:{"Accept":"application/json"},handleAs:"json",appendCacheBuster:false},requestOptions);if(options.appendCacheBuster){requestUrl=this._appendCacheBuster(requestUrl);}
var xhrReq=this._getRequestByMethod(options.requestMethod);var deferred=xhrReq({url:requestUrl,headers:options.requestHeaders,handleAs:options.handleAs,postData:options.content,load:function(data,ioargs){params.callback.apply(params.context,[data,ioargs.xhr,params]);},error:function(data,ioargs){console.error("HTTP status code: %s, response: %o",ioargs.xhr.status,data);if(typeof params.errorCallback!=="undefined"){params.errorCallback.apply(params.context,[data.status,ioargs.xhr,params]);}else{params.callback.apply(params.context,[data.status,ioargs.xhr,params]);}}});return deferred;},_appendCacheBuster:function(requestUrl){var cb=(Math.floor(10000000*Math.random()));requestUrl+=(requestUrl.indexOf('?')>-1)?("&cb="+cb):("?cb="+cb);return requestUrl;},_getRequestByMethod:function(requestMethod){return(requestMethod=="GET")?dojo.xhrGet:dojo.xhrPost;}};
dojo.provide("jkl.jkl-parsexml");if(typeof(JKL)=='undefined'){JKL=function(){};}
JKL.ParseXML=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,false);return this;};JKL.ParseXML.VERSION="0.22";JKL.ParseXML.MIME_TYPE_XML="text/xml";JKL.ParseXML.MAP_NODETYPE=["","ELEMENT_NODE","ATTRIBUTE_NODE","TEXT_NODE","CDATA_SECTION_NODE","ENTITY_REFERENCE_NODE","ENTITY_NODE","PROCESSING_INSTRUCTION_NODE","COMMENT_NODE","DOCUMENT_NODE","DOCUMENT_TYPE_NODE","DOCUMENT_FRAGMENT_NODE","NOTATION_NODE"];JKL.ParseXML.prototype.async=function(func,args){this.callback_func=func;this.callback_arg=args;};JKL.ParseXML.prototype.onerror=function(func,args){this.onerror_func=func;};JKL.ParseXML.prototype.parse=function(){if(!this.http){return;}
if(this.onerror_func){this.http.onerror(this.onerror_func);}
if(this.callback_func){var copy=this;var proc=function(){if(!copy.http){return;}
var data=copy.parseResponse();copy.callback_func(data,copy.callback_arg);};this.http.async(proc);}
this.http.load();if(!this.callback_func){var data=this.parseResponse();return data;}};JKL.ParseXML.prototype.setOutputArrayAll=function(){this.setOutputArray(true);};JKL.ParseXML.prototype.setOutputArrayAuto=function(){this.setOutputArray(null);};JKL.ParseXML.prototype.setOutputArrayNever=function(){this.setOutputArray(false);};JKL.ParseXML.prototype.setOutputArrayElements=function(list){this.setOutputArray(list);};JKL.ParseXML.prototype.setOutputArray=function(mode){if(typeof(mode)=="string"){mode=[mode];}
if(mode&&typeof(mode)=="object"){if(mode.length<0){mode=false;}else{var hash={};for(var i=0;i<mode.length;i++){hash[mode[i]]=true;}
mode=hash;if(mode["*"]){mode=true;}}}
this.usearray=mode;};JKL.ParseXML.prototype.parseResponse=function(){var root=this.http.documentElement();var data=this.parseDocument(root);return data;};JKL.ParseXML.prototype.parseDocument=function(root){if(!root){return;}
var ret=this.parseElement(root);if(this.usearray==true){ret=[ret];}else if(this.usearray==false){}else if(this.usearray==null){}else if(this.usearray[root.nodeName]){ret=[ret];}
var json={};json[root.nodeName]=ret;return json;};JKL.ParseXML.prototype.parseElement=function(elem){if(elem.nodeType==7){return;}
if(elem.nodeType==3||elem.nodeType==4){var bool=elem.nodeValue.match(/[^\x00-\x20]/);if(bool==null){return;}
return elem.nodeValue;}
var retval;var cnt={};if(elem.attributes&&elem.attributes.length){retval={};for(var i=0;i<elem.attributes.length;i++){var key=elem.attributes[i].nodeName;if(typeof(key)!="string"){continue;}
var val=elem.attributes[i].nodeValue;if(!val){continue;}
if(typeof(cnt[key])=="undefined"){cnt[key]=0;}
cnt[key]++;this.addNode(retval,key,cnt[key],val);}}
if(elem.childNodes&&elem.childNodes.length){var textonly=true;if(retval){textonly=false;}
for(var i=0;i<elem.childNodes.length&&textonly;i++){var ntype=elem.childNodes[i].nodeType;if(ntype==3||ntype==4){continue;}
textonly=false;}
if(textonly){if(!retval){retval="";}
for(var i=0;i<elem.childNodes.length;i++){retval+=elem.childNodes[i].nodeValue;}}else{if(!retval){retval={};}
for(var i=0;i<elem.childNodes.length;i++){var key=elem.childNodes[i].nodeName;if(typeof(key)!="string"){continue;}
var val=this.parseElement(elem.childNodes[i]);if(!val){continue;}
if(typeof(cnt[key])=="undefined"){cnt[key]=0;}
cnt[key]++;this.addNode(retval,key,cnt[key],val);}}}
return retval;};JKL.ParseXML.prototype.addNode=function(hash,key,cnts,val){if(this.usearray==true){if(cnts==1){hash[key]=[];}
hash[key][hash[key].length]=val;}else if(this.usearray==false){if(cnts==1){hash[key]=val;}}else if(this.usearray==null){if(cnts==1){hash[key]=val;}else if(cnts==2){hash[key]=[hash[key],val];}else{hash[key][hash[key].length]=val;}}else if(this.usearray[key]){if(cnts==1){hash[key]=[];}
hash[key][hash[key].length]=val;}else{if(cnts==1){hash[key]=val;}}};JKL.ParseXML.Text=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,true);return this;};JKL.ParseXML.Text.prototype.parse=JKL.ParseXML.prototype.parse;JKL.ParseXML.Text.prototype.async=JKL.ParseXML.prototype.async;JKL.ParseXML.Text.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.Text.prototype.parseResponse=function(){var data=this.http.responseText();return data;};JKL.ParseXML.JSON=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,true);return this;};JKL.ParseXML.JSON.prototype.parse=JKL.ParseXML.prototype.parse;JKL.ParseXML.JSON.prototype.async=JKL.ParseXML.prototype.async;JKL.ParseXML.JSON.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.JSON.prototype.parseResponse=function(){var text=this.http.responseText();if(typeof(text)=='undefined'){return;}
if(!text.length){return;}
var data=eval("("+text+")");return data;};JKL.ParseXML.DOM=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,false);return this;};JKL.ParseXML.DOM.prototype.parse=JKL.ParseXML.prototype.parse;JKL.ParseXML.DOM.prototype.async=JKL.ParseXML.prototype.async;JKL.ParseXML.DOM.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.DOM.prototype.parseResponse=function(){var data=this.http.documentElement();return data;};JKL.ParseXML.CSV=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,true);return this;};JKL.ParseXML.CSV.prototype.parse=JKL.ParseXML.prototype.parse;JKL.ParseXML.CSV.prototype.async=JKL.ParseXML.prototype.async;JKL.ParseXML.CSV.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.CSV.prototype.parseResponse=function(){var text=this.http.responseText();var data=this.parseCSV(text);return data;};JKL.ParseXML.CSV.prototype.parseCSV=function(text){text=text.replace(/\r\n?/g,"\n");var pos=0;var len=text.length;var table=[];while(pos<len){var line=[];while(pos<len){if(text.charAt(pos)=='"'){var nextquote=text.indexOf('"',pos+1);while(nextquote<len&&nextquote>-1){if(text.charAt(nextquote+1)!='"'){break;}
nextquote=text.indexOf('"',nextquote+2);}
if(nextquote<0){}else if(text.charAt(nextquote+1)==","){var quoted=text.substr(pos+1,nextquote-pos-1);quoted=quoted.replace(/""/g,'"');line[line.length]=quoted;pos=nextquote+2;continue;}else if(text.charAt(nextquote+1)=="\n"||len==nextquote+1){var quoted=text.substr(pos+1,nextquote-pos-1);quoted=quoted.replace(/""/g,'"');line[line.length]=quoted;pos=nextquote+2;break;}else{}}
var nextcomma=text.indexOf(",",pos);var nextnline=text.indexOf("\n",pos);if(nextnline<0){nextnline=len;}
if(nextcomma>-1&&nextcomma<nextnline){line[line.length]=text.substr(pos,nextcomma-pos);pos=nextcomma+1;}else{line[line.length]=text.substr(pos,nextnline-pos);pos=nextnline+1;break;}}
if(line.length>=0){table[table.length]=line;}}
if(table.length<0){return;}
return table;};JKL.ParseXML.CSVmap=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,true);return this;};JKL.ParseXML.CSVmap.prototype.parse=JKL.ParseXML.prototype.parse;JKL.ParseXML.CSVmap.prototype.async=JKL.ParseXML.prototype.async;JKL.ParseXML.CSVmap.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.CSVmap.prototype.parseCSV=JKL.ParseXML.CSV.prototype.parseCSV;JKL.ParseXML.CSVmap.prototype.parseResponse=function(){var text=this.http.responseText();var source=this.parseCSV(text);if(!source){return;}
if(source.length<0){return;}
var title=source.shift();var data=[];for(var i=0;i<source.length;i++){var hash={};for(var j=0;j<title.length&&j<source[i].length;j++){hash[title[j]]=source[i][j];}
data[data.length]=hash;}
return data;};JKL.ParseXML.LoadVars=function(url,query,method){this.http=new JKL.ParseXML.HTTP(url,query,method,true);return this;};JKL.ParseXML.LoadVars.prototype.parse=JKL.ParseXML.prototype.parse;JKL.ParseXML.LoadVars.prototype.async=JKL.ParseXML.prototype.async;JKL.ParseXML.LoadVars.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.LoadVars.prototype.parseResponse=function(){var text=this.http.responseText();text=text.replace(/\r\n?/g,"\n");var hash={};var list=text.split("&");for(var i=0;i<list.length;i++){var eq=list[i].indexOf("=");if(eq>-1){var key=decodeURIComponent(list[i].substr(0,eq).replace("+","%20"));var val=decodeURIComponent(list[i].substr(eq+1).replace("+","%20"));hash[key]=val;}else{hash[list[i]]="";}}
return hash;};JKL.ParseXML.HTTP=function(url,query,method,textmode){this.url=url;if(typeof(query)=="string"){this.query=query;}else{this.query="";}
if(method){this.method=method;}else if(typeof(query)=="string"){this.method="POST";}else{this.method="GET";}
this.textmode=textmode?true:false;this.req=null;this.xmldom_flag=false;this.onerror_func=null;this.callback_func=null;this.already_done=null;return this;};JKL.ParseXML.HTTP.REQUEST_TYPE="application/x-www-form-urlencoded";JKL.ParseXML.HTTP.ACTIVEX_XMLDOM="Microsoft.XMLDOM";JKL.ParseXML.HTTP.ACTIVEX_XMLHTTP="Microsoft.XMLHTTP";JKL.ParseXML.HTTP.EPOCH_TIMESTAMP="Thu, 01 Jun 1970 00:00:00 GMT";JKL.ParseXML.HTTP.prototype.onerror=JKL.ParseXML.prototype.onerror;JKL.ParseXML.HTTP.prototype.async=function(func){this.async_func=func;};JKL.ParseXML.HTTP.prototype.load=function(){if(window.ActiveXObject){var activex=JKL.ParseXML.HTTP.ACTIVEX_XMLHTTP;if(this.method=="GET"&&!this.textmode){activex=JKL.ParseXML.HTTP.ACTIVEX_XMLDOM;}
this.req=new ActiveXObject(activex);}else if(window.XMLHttpRequest){this.req=new XMLHttpRequest();}
var async_flag=this.async_func?true:false;if(typeof(this.req.send)!="undefined"){this.req.open(this.method,this.url,async_flag);}
if(typeof(this.req.setRequestHeader)!="undefined"){this.req.setRequestHeader("Content-Type",JKL.ParseXML.HTTP.REQUEST_TYPE);}
if(typeof(this.req.overrideMimeType)!="undefined"&&!this.textmode){this.req.overrideMimeType(JKL.ParseXML.MIME_TYPE_XML);}
if(async_flag){var copy=this;copy.already_done=false;var check_func=function(){if(copy.req.readyState!=4){return;}
var succeed=copy.checkResponse();if(!succeed){return;}
if(copy.already_done){return;}
copy.already_done=true;copy.async_func();};this.req.onreadystatechange=check_func;}
if(typeof(this.req.send)!="undefined"){this.req.send(this.query);}else if(typeof(this.req.load)!="undefined"){this.req.async=async_flag;this.req.load(this.url);}
if(async_flag){return;}
var succeed=this.checkResponse();};JKL.ParseXML.HTTP.prototype.checkResponse=function(){if(this.req.parseError&&this.req.parseError.errorCode!=0){if(this.onerror_func){this.onerror_func(this.req.parseError.reason);}
return false;}
if(this.req.status-0>0&&this.req.status!=200&&this.req.status!=206&&this.req.status!=304){if(this.onerror_func){this.onerror_func(this.req.status);}
return false;}
return true;};JKL.ParseXML.HTTP.prototype.documentElement=function(){if(!this.req){return;}
if(this.req.responseXML){return this.req.responseXML.documentElement;}else{return this.req.documentElement;}};JKL.ParseXML.HTTP.prototype.responseText=function(){if(!this.req){return;}
if(navigator.appVersion.match("KHTML")){var esc=escape(this.req.responseText);if(!esc.match("%u")&&esc.match("%")){return decodeURIComponent(esc);}}
return this.req.responseText;};dojo.provide("dj.module.dashboard.DashboardExpletives");

dj.module.dashboard.expletives = [ "ahole", "fuck", "dickface", "b!tch", "fatboner", "hitlery", "pinksock",
    "dirtysanchez", "dirty-sanchez", "pink.sock", "gooks", "horseshit", "tableofwisdom.com", "fuckers", "bullshit",
    "bullshiter", "a.s.s.h.o.l.e", "jackasses", "erwin.rommel", "f.u.c.k.i.n.g.", "a$$", "cr\*p", "a$$wipe",
    "repuglican", "s.c.r.e.w.", "aarghasm", "scum", "fuckit", "aasman", "fucku", "f-u-c-k", "f\*uck", "null", "dooche",
    "dumbass", "ipenis", "pussies", "stfu", "fucktard", "shitting", "s.h.i.t", "shites", "shite", "c.u.n.t.s",
    "pusssy", "moron's", "moron", "morons", "d\*mn", "f.ucked", "sht", "f\*ck", "fuckyou", "fuc\*", "p\*ssy", "sh\*t",
    "pigfucking", "scumsucking", "phuque", "shiiiit", "buttfucked", "goldtradercomments.blogspot.com", "milf", "wtf",
    "libtard", "shat", "krap", "dumbocrats", "obaminables", "fugers", "www.anoox.com/blog/real_news", "www.anoox.com",
    "obminable", "fu@ked", "a-s-s", "obamanible", "mc*w*a*r!", "dumbocrat", "m.i.l.f", "dipshit", "repugnants",
    "fucksticks", "mclame", "tur.d", "niggers", "buttkissing", "obaminable", "demonrats", "bullshiite", "bullsh\*t",
    "www.yousearchengine.com", "retardado", "gawdamn", "macclame", "fagots", "repig", "dickwad", "motherfuckers",
    "unfuckingbelievable", "obamacrimes.com", "dogfucking", "fuckthesouth.com", "phucking", "a$$holes",
    "http://www.easystockalerts.com", "smegma", "www.scottpodcast.com", "democrap", "www.stockgravity.com",
    "www.proloanmods.com", "a$$clowns", "www.aaronabed.com", "wingnuts", "http://www.quickstubs.com",
    "www.quickstubs.com", "quickstubs.com", "www.debtchallenges.com", "debtchallenges.com", "www.blackjfk.com",
    "octaroon", "idiot", "www.saadvisory.com", "seismicstocktrading.com", "repukes", "www.joesixpack.me", "whoredog",
    "dipsh*t", "poorbrokesoul", "demorat", "pusified", "ribono", "@ss", "www.dollartalk.net",
    "www.usmegatrends.blogspot.com", "aholez", "alhambrainvestments.com", "asses", "www.swanconsultinginc.com",
    "dumbacrats", "honkeys", "jagoff", "http://www.places2network.com", "schit", "schmuck", "r-tards",
    "http://tinyurl.com/6kp4bp", "http://tinyurl.com",
    "http://www.prisonplanet.com/ex-isi-chief-gul-exposes-911-inside-job.html", "goddamn", "$h!t", "goddamned",
    "b@astards", "b@stard", "krapp", "fuked", "sh8", "holysh8", "@ssh0les", "bull*hit", "shi*ter", "cr#p", "crappy",
    "$hit", "f*cked", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagit", "fags", "fagz", "faig", "faigs",
    "schwartzenigger", "biatchys", "s-h-i-t", "q-u-e-e-r", "felch", "f.ucking", "felching", "unfucking", "shittibank",
    "fucker", "fuckinfuckhead", "fucking", "fucks", "fuckstain", "fucktwat", "fuckwit", "fuk", "fukah", "fuken",
    "fuker", "fukin", "fukk", "fukkah", "fukken", "fukker", "fukkin", "fucked", "pigfart", "g00k", "shitheads",
    "gayboy", "gaygirl", "billionairecupid.com", "d-bags", "dbags", "h00r", "h0ar", "obamanation", "h0re", "c_r_a_p",
    "hell", "honkies", "honky", "hoor", "hoore", "democraps", "phuckers", "tuurds", "cocksucking", "jackass",
    "jack-ass", "jackoff", "jack-off", "jap", "japs", "jerkass", "jerk-ass", "jerk-off", "jerkoff", "jisim",
    "w-e-t-b-a-c-k", "jizm", "cocksuckers", "fvck", "http://www.theoffshorebankaccount.com", "clusterf*ck",
    "knobcheese", "knobz", "washingfuckington", "http://www.economicreality.net/money.htm", "www.easystockalerts.com",
    "easystockalerts.com", "kunt", "kunts", "kuntz", "www.mimarker.net", "retardicans", "repug",
    "http://www.fakepaycheckstub.com", "www.fakepaycheckstub.com", "lezzian", "lipshits", "lipshitz",
    "fakepaycheckstub.com", "manpiss", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate",
    "masterbates", "fukn", "bitching", "a$$es", "mosshead", "otha-fucker", "motha-fuker", "motha-fukkah",
    "motha-fukker", "mother-fucker", "mother-fukah", "mother-fuker", "mother-fukkah", "mother-fukker", "motherfucking",
    "mother-fucking", "mutha-fucker", "mutha-fukah", "mutha-fuker", "mutha fukkah", "mutha-fukker", "n1gr", "niggar",
    "nigger", "niggra", "nigguh", "nigur", "niiger", "niigr", "packi", "packie", "packy", "pecker", "peeenus",
    "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "phuc", "phuk",
    "phuker", "phukker", "piss", "polac", "polack", "polak", "poonani", "poopshoot", "poop-shoot", "ppopchute", "pr1c",
    "pr1ck", "pr1k", "prick", "pussee", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "retard", "rimmer",
    "tard", "scank", "schlong", "semen", "santorum", "sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "she-male",
    "shitchute", "shit-chute", "shiteater", "shit-eater", "shithead", "shit-head", "shits", "shitshute", "shit-shute",
    "shitter", "shitty", "shity", "shitz", "shyt", "shyte", "shytty", "shyty", "skanck", "skank", "skankee", "skankey",
    "skanks", "skanky", "sluts", "slutty", "slutz", "son-of-a-bitch", "scumbags", "bullshiit", "libloons", "dubmassss",
    "f_uc-kin", "shiit", "c.rap", "p.iss", "tit", "son-of-a-b.itch", "titz", "turd", "turds", "turdz", "gtfo", "twats",
    "twatz", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "a.s.s.l.i.c.k.e.r.", "b.a.s.t.a.r.d",
    "scumball", "pissing", "w0p", "wanker", "wankers", "wankerz", "wetback", "wet-back", "wetbacks", "wetbackz",
    "wet-backs", "wet-backz", "wh00r", "wh0re", "dickhead", "mccdong", "whore", "whores", "whorez", "libterd",
    "whorze", "demon'rats", "wop", "wops", "wopz", "http://logicstudio8.blogspot.com/",
    "www.buymyhousebeforethebanktakesit.com.", "buymyhousebeforethebanktakesit.com.", "www.derivativescollapse.com",
    "dotcom", "shitload", "www.palestine-info.co.uk/", "pink-sock", "clusterphuc", "ass", "fucken", "libturd",
    "www.smartstops.net", "azzholes", "slimebags", "slimebag", "dirtbag", "fart", "fuking", "p#ss", "anus", "biotches",
    "boobs", "m0r0n", "fuckage", "h-o-n-k-y", "fuckkk", "c.u.n.t.", "f-ing", "cornholed", "fuctard", "mcwar",
    "oblahblah", "mcshit", "http://www.debtchallenges.com", "http://blog.tradingideas.in/", "infotips@yahoo.com",
    "dirtbags", "azzes", "goddam", "bimbo", "chick", "doodoohead", "www.themastertrader.net", "monoprice.com",
    "http://www.dollartalk.net", "shlt", "dumbasses", "phucked", "http://www.jewwatch.com/", "shiti",
    "www.yourgold.com", "www.peacecorps.gov/", "douche", "http://www.smartstops.net", "pendejo", "repugnantcans",
    "www.fakepaycheckstubs.com", "truemetalprices.com", "omfg", "www.usbailout.com", "www.insuredira.com",
    "www.economicvesuvius.blogspot.com", "anoox", "reptards", "jackoffs",
    "http://www.moorelandrey.com/ml/scottckinsel", "clusterfuk", "putz", "tirds", "tird", "a$$*oles", "anilingus",
    "bitchers", "jewliani", "jeweliani", "assrammer", "scumbag", "b17ch", "b1tch", "bastard", "bi7ch",
    "buttholesurfers", "beaner", "a$$wipes", "butt-pirate", "c0ck", "mfucking", "cawk", "repugs", "chink", "fuckups",
    "horse$hit", "stupidass", "clits", "cum", "d4mn", "daygo", "dego", "dildo", "pissit", "pissaway", "fukking",
    "ejackulate", "fuckin", "shyste", "faen", "phaggot", "mcclame", "fatass", "fcuk", "blowjobs", "faggots", "felcher",
    "ficken", "flikker", "foreskin", "fubar", "lmfao", "fux0r", "shitstorm", "gook", "pisses", "h0r", "h4x0r",
    "http://www.buymyhousebeforethebanktakesit.com.", "pissed", "honkey", "hore", "paki",
    "http://alhambrainvestments.com/blog/", "injun", "jism", "jizz", "kawk", "kike", "alhambrainvestments.com/blog/",
    "kraut", "http://davronstaffing.blogspot.com/", "kuk", "kuksuger", "www.blackfdr.com",
    "http://freetradingquiz.com/", "l3itch", "a-holes", "lesbo", "motherfucker", "mofo", "nigga", "nutsack", "phuck",
    "poontsee", "shitt", "pusse", "pussy", "puta", "puto", "shemale", "slut", "spic", "splooge", "suka", "teets",
    "tits", "twat", "whoar", "shit", "aholes", "anuz", "anusranger", "anus-ranger", "arschloch", "arsez", "arsewit",
    "arsewitts", "ash0le", "ash0les", "f.u.c.k.", "asholes", "ass-monkey", "assbitch", "assface", "assfucker",
    "assh0le", "assh0lez", "asshat", "asshole", "assholes", "assholz", "asslick", "assmaster", "assmonkey",
    "ass-rammer", "asswipe", "asswipes", "asswipez", "asswiper", "asswipers", "asswiperz", "azzhole", "bassterds",
    "bastards", "bastardz", "basterds", "basterdz", "biatch", "bitch", "bitches", "blow-job", "blowjob", "boffing",
    "bollocks", "boll\*cks", "boner", "bugger", "bulldyke", "bumboy", "bunghole", "butthole", "buttmuncher",
    "buttwipe", "c0cks", "c0k", "carpet-muncher", "cawks", "clit", "cnts", "cntz", "cock", "cockhead", "cock-head",
    "cocklick", "cocks", "cocksucker", "cock-sucker", "coon", "crap", "cumsucker", "cunilingus", "cunt", "cuntlick",
    "cunts", "cuntz", "damn", "dicklick", "dild0", "dild0s", "dildos", "dilld0", "dilld0s", "douchebag", "dyke" ];
dojo.provide("dj.service.dashboard.DashboardService");
dojo.require("dj.util.dashboard");
dojo.require("dj.util.Observer");
dojo.require("dj.util.User");

/**
 * @author cooksonl
 */

/* global dj, dojo */

if ( typeof dj == "undefined" ) {
  dj = {};
}
if ( typeof dj.service == "undefined" ) {
  dj.service = {};
}
if ( typeof dj.service.dashboard == "undefined" ) {
  dj.service.dashboard = {};
}
if ( typeof dj.widget == "undefined" ) {
  dj.widget = {};
}
if ( typeof dj.widget.dashboard == "undefined" ) {
  dj.widget.dashboard = {};
}

(function() {

  var _du = dj.util;
  var _dsd = dj.service.dashboard;
  var _dwd = dj.widget.dashboard; // Internal, only for use to instantiate
  // service
  var _dud = _du.dashboard;

  // --- DashboardService ---

  (_dwd.DashboardService = function(cfg) {
    this._cfg = dj.lang.cloneMixin(this.DEFAULT_CONFIG, cfg);
    this._responses = {};
    this._responsePending = {};
    this._postResponses = {};
    this._postResponsePending = {};
    this._subscribed = {};
    this._updateObservers = {};
    this._updateCallbacks = {};
    this._loaded = false;

    // used to subscribe clients to this service. When data updates, observer is
    // fired
    // subscribers get called back with new data
    this._dataObserver = new _du.Observer();

  }).prototype = {

    DEFAULT_CONFIG : {
    // add any constants here for easy config and oerride
    },

    // subscribe to data feed by name, supply callback.
    // If data hasn't been loaded, or is stale, data will be reloaded, and
    // callback will be fired.
    // If data is cached locally and not stale, callback will be fired
    // immediately
    // When data is reloaded, all subscribers will be called again.
    subscribeFeed : function(name, key, callback, context) {

      this._dataObserver.subscribeByName(this.getFeedId(name, key), callback, context);

    },

    getFeedId : function(name, key) {
      return name + ":" + key;
    },

    /*
     * callback to set up ajax call to get data. Will not call service if data
     * is present Use updateFeed for forcing an update to data.
     */
    getFeed : function(name, key, url, criteria) {
      this._performUuidSubstitution1(this._getFeedWithUser, this, name, key, url, criteria);
    },

    _getFeedWithUser : function(name, key, url, criteria) {
      var feedName = name || null;
      var feedKey = key || null;
      var feedId = this.getFeedId(feedName, feedKey);
      if ( this._responses[feedId] && typeof criteria === "undefined" ) {
        this.fireFeed(name, key, this._responses[feedId]);
        return;
      }
      var c = criteria || null;
      if ( !this._responsePending[feedId] ) {
        var feedUrl = url;
        // clear data so that subscribes during will get notified with fresh
        // data.
        this._responses[feedId] = null;
        this._responsePending[feedId] = true;

        _dud.getDashboardData(feedUrl, {
          callback : this.handleFeed,
          context : this,
          feedName : feedName,
          feedKey : feedKey,
          url : feedUrl,
          criteria : c
        });
      }
    },

    handleFeed : function(response, ioArgs, params) {

      this._responses[this.getFeedId(params.feedName, params.feedKey)] = response;
      this.fireFeed(params.feedName, params.feedKey, response, params.criteria);

    },

    fireFeed : function(name, key, response, criteria) {

      this._responsePending[this.getFeedId(name, key)] = false;
      this._dataObserver.fireByName(this.getFeedId(name, key), key, response, criteria);

    },

    reloadFeed : function(name, key, url, criteria) {
      this._performUuidSubstitution1(this._reloadFeedWithUser, this, name, key, url, criteria);
    },

    _reloadFeedWithUser : function(name, key, url, criteria) {

      this._responses[this.getFeedId(name, key)] = null;
      this.getFeed(name, key, url, criteria);

    },

    /*
     * TODO: document params
     * 
     * @param methodOverride, optiona, defaults to "post"
     */
    doPost : function(name, key, url, postData, callback, context, methodOverride) {

      this._performUuidSubstitution2(this._doPostWithUser, this, name, key, url, postData, callback, context,
          methodOverride);

    },

    _doPostWithUser : function(thisObj, name, key, url, postData, callback, context, methodOverride) {

      var postName = name;
      var postKey = key || null;
      var method = methodOverride || "post";

      thisObj._postResponses[thisObj.getFeedId(name, key)] = null;
      thisObj._postResponsePending[thisObj.getFeedId(name, key)] = true;

      thisObj._subscribeUpdateObserver(name, key, callback, context);

      var params = {
        callback : thisObj.handlePost,
        errorCallback : thisObj.handlePost,
        context : thisObj,
        postName : name,
        postKey : postKey,
        url : url
      };

      if ( method == "put" ) {
        _dud.putDashboardData(url, postData, params);
      } else if ( method == "delete" ) {
        _dud.deleteDashboardData(url, postData, params);
      } else {
        _dud.postDashboardData(url, postData, params);
      }

    },

    handlePost : function(response, ioArgs, params) {
      var postName = params.postName;
      var postKey = params.postKey;

      this._postResponses[this.getFeedId(params.postName, params.postKey)] = response;
      this.firePost(params.postName, params.postKey, response);

    },

    handlePostError : function(response, ioArgs, params) {
      // TODO: implement handler for error case.
    console.error("Dashboard Service post error :" + ioArgs);
  },

    firePost : function(name, key, response) {
      this._postResponsePending[this.getFeedId(name, key)] = false;
      this._fireUpdateObserver(name, key, key, response);
      this._unsubscribeUpdateObserver(name, key);
    },

    doPut : function(name, key, url, postData, callback, context) {
      this._performUuidSubstitution2(this._doPutWithUser, this, name, key, url, postData, callback, context);
    },

    _doPutWithUser : function(thisObj, name, key, url, postData, callback, context, methodOverride) {
      thisObj.doPost(name, key, url, postData, callback, context, "put");
    },

    doDelete : function(name, key, url, postData, callback, context) {
      this._performUuidSubstitution2(this._doDeleteWithUser, this, name, key, url, postData, callback, context);
    },

    _doDeleteWithUser : function(thisObj, name, key, url, postData, callback, context, methodOverride) {
      thisObj.doPost(name, key, url, postData, callback, context, "delete");
    },

    // Creates a new observer used to handle updates (PUT,POST,DELETE)
    _subscribeUpdateObserver : function(name, key, callback, context) {
      // console.log("#%#% sub "+name+","+key);
      var feedId = this.getFeedId(name, key);
      var updateObserver = this._updateObservers[feedId];
      if ( !updateObserver ) {
        updateObserver = new _du.Observer();
        this._updateObservers[feedId] = updateObserver;
        this._updateCallbacks[feedId] = callback;
        updateObserver.subscribe(callback, context);
      }

    },

    _fireUpdateObserver : function(name, key) {
      // console.log("#%#% fire "+name+","+key);
      var updateObserver = this._updateObservers[this.getFeedId(name, key)];
      if ( updateObserver ) {
        var fireParams = [];
        for ( var i = 2, arg, len = arguments.length; i < len; i++) {
          fireParams.push(arguments[i]);
        }
        updateObserver.fire.apply(updateObserver, fireParams);
      }
    },

    _unsubscribeUpdateObserver : function(name, key) {
      // console.log("#%#% unsub "+name+","+key);

      var feedId = this.getFeedId(name, key);
      this._updateObservers[feedId] = null;
    },

    _performUuidSubstitution1 : function(callback, context, name, key, url, criteria) {
      var that = this;
      if ( this.uuid ) {
        callback.apply(context, [ name, key, that._substituteMacros(url), criteria ]);
      } else {
        var that = this;
        dj.util.User.getUserId(function(uuidVal) {
          // store user uuid in that.uuid
            that.uuid = uuidVal;
            // then invoke
            callback.apply(context, [ name, key, that._substituteMacros(url), criteria ]);
          });
      }
    },

    _performUuidSubstitution2 : function(callback, thisObj, name, key, url, postData, callbk, context, methodOverride) {
      var that = this;
      if ( this.uuid ) {
        callback.apply(context, [ thisObj, name, key, that._substituteMacros(url), postData, callbk, context,
            methodOverride ]);
      } else {
        var that = this;
        dj.util.User.getUserId(function(uuidVal) {
          // store user uuid in that.uuid
            that.uuid = uuidVal;
            // then invoke
            callback.apply(context, [ thisObj, name, key, that._substituteMacros(url), postData, callbk, context,
                methodOverride ]);
          });
      }
    },

    _substituteMacros : function(url) {
      url = url.replace('$userName$', this.uuid);
      return url;
    }

  };

  // Instantiate singleton service instance of this widget here.
  dj.service.dashboard.DashboardService = new _dwd.DashboardService();

}());
dojo.provide("dj.service.dashboard.DashboardPZNServiceFactory");
dojo.require("dj.service.dashboard.DashboardService");
dojo.require("dj.util.User");
dojo.require("jkl.jkl-parsexml");
/**
 * @author cooksonl
 */


(function() {

  var _du = dj.util;
  var _dsd = dj.service.dashboard;
  var _dwd = dj.widget.dashboard; // Internal, only for use to instantiate
  // service
  var _dud = _du.dashboard;
  var _ctx = dj.context;

  // --- DashboardPZNService ---

  /*
   * serviceWidget is the instance of DashboardService to be used cfg is a
   * config that can overridden
   */

  (_dwd.DashboardPZNService = function(cfg) {
    this._serviceWidget = null;
    this._cfg = dj.lang.cloneMixin(this.DEFAULT_CONFIG, cfg);
    this._responsePending = {};
    this._subscribed = {};
    this._allFolders = null;
    this._userFolders = {};
    this._userPortfolioQuotes = {};
    this._mostRecentArticles = {};
    this._globalPref = {};
    this._email = {};
    this._updateObservers = {};
    this._updateCallbacks = {};
    this._serviceWidget = _dsd.DashboardService;
    this._dataObserver = new _du.Observer();
    // this._mjversion = "/version/2?loc=mj";

  }).prototype = {

    DEFAULT_CONFIG : {
      // add service URLs here...can be for get, post, etc.
      serviceUrls : {
        "mostRecentArticles" : "/WSJDBFeeds/service.svc/TopArticles/$userName$/5",
        "mostRecentPZNOverview" : "/pznusersvc/view/getUserPagination/mostRecentOverview",
        "topNewsOverview" : "/pznusersvc/view/getUserPagination/topNewsArticlesOverview",
        "companiesOverview" : "/pznusersvc/view/getUserPagination/companiesArticlesOverview",
        "industriesOverview" : "/pznusersvc/view/getUserPagination/industriesArticlesOverview",
        "sectionsOverview" : "/pznusersvc/view/getUserPagination/sectionsArticlesOverview",
        "columnsOverview" : "/pznusersvc/view/getUserPagination/columnsArticlesOverview",
        "editorsPickOverview" : "/pznusersvc/view/getUserPagination/editorsPickArticlesOverview",
        "updateUser" : "/pznusersvc/update/updateUser/version/2",
        "marketData" : "/pznusersvc/view/getUser/indexes/userName",
        "allIndustries" : "/pznusersvc/view/getAll/industries",
        "allSections" : "/pznusersvc/view/getAll/sections",
        "allColumns" : "/pznusersvc/view/getAll/columnists",
        "allTopNews" : "/pznusersvc/view/getAll/topNews",
        "allIndexes" : "/pznusersvc/view/getAll/indexes",
        "allCompanies" : "/pznusersvc/view/getAll/companies", // this get only
        // defaults
        // companies.
        "quote" : "/quote/quote",
        "globalPref" : "/pznusersvc/view/getUser/defaultFolders/version/2",
        "email" : "/pznusersvc/view/getUser/EmailInfo",
        "updatePmProfile" : "/epsvcs/update/userProfile",
        "updateEmail" : "/pznusersvc/update/updateUser/EmailInfo",
        "welcomeMsg" : "/pznusersvc/view/getUser/userFlags",
        "portfolioList" : "/pznusersvc/view/getPortfolios/"
      },
      xhtmlServiceUrls : {
        "companies" : "/fragment/0_0_WM_1034_companies_update.html",
        "industries" : "/fragment/0_0_WM_1033_industries_update.html",
        "sections" : "/fragment/0_0_WM_1031_sections_update.html",
        "columns" : "/fragment/0_0_WM_1032_columns_update.html",
        "topNews" : "/fragment/0_0_WM_1036_topNews_update.html",
        "mostRecent" : "/fragment/0_0_WM_1035_mostRecent_update.html",
        "editorsPick" : "/fragment/0_0_WM_1037_EditorPicks_update.html",
        "mostRecentSaved" : "/fragment/0_0_WM_1060_mjDockSaved.html",
        "userSaved" : "/fragment/0_0_WM_1060_mjDockSavedColl.html",
        "mjDockSavedNav" : "/fragment/0_0_WM_1060_mjDockSavedNav.html",
        "mjDockCompany_News" : "/fragment/0_0_WM_1055_mjDockCompany_News.html",
        "mjDockIndustry_News" : "/fragment/0_0_WM_1055_mjDockIndustry_News.html",
        "mjDockTopics" : "/fragment/0_0_WM_1055_mjDockTopics.html",
        "mjDockColumns" : "/fragment/0_0_WM_1055_mjDockColumns.html",
        "mjDockTop_News" : "/fragment/0_0_WM_1055_mjDockTop_News.html",
        "mjDockMost_Recent" : "/fragment/0_0_WM_1055_mjDockMost_Recent.html",
        "mjDockEditors_Pick" : "/fragment/0_0_WM_1055_mjDockEditors_Pick.html",
        "mjDocktabCompanies" : "/fragment/0_0_WM_1055_mjDocktabCompanies.html",
        "mjDocktabIndustries" : "/fragment/0_0_WM_1055_mjDocktabIndustries.html",
        "pmDocktabCompanies" : "/fragment/0_0_EM_1055_mjDocktabCompanies.html",
        "pmDocktabIndustries" : "/fragment/0_0_EM_1055_mjDocktabIndustries.html",
        "pmDockTopics" : "/fragment/0_0_EM_1055_mjDockTopics.html",
        "pmDockColumns" : "/fragment/0_0_EM_1055_mjDockColumns.html",
        "pmDockTop_News" : "/fragment/0_0_EM_1055_mjDockTop_News.html",
        "pmDockMost_Recent" : "/fragment/0_0_EM_1055_mjDockMost_Recent.html",
        "pmDockEditors_Pick" : "/fragment/0_0_EM_1055_mjDockEditors_Pick.html",
        "mjDockMostRecentSaved" : "/fragment/0_0_EM_1055_mjDocktabSaved.html",
        "mjDockKeywordAlerts" : "/fragment/0_0_EM_1055_mjDocktabKeywordAlerts.html"
      },
      pznCollectionUrl : [ "/page/mj-companies.html", "/page/mj-industries.html", "/page/mj-sections.html",
          "/page/mj-columnists.html", "/page/mj-topnews.html", "/page/mj-mostrecent.html", "/page/mj-editorspick.html",
          "/page/my-journal-setup.html", "/page/my-journal-main.html" ],
      pznSingleCollectionUrl : [ "/page/mj-companies.html?collection=", "/page/mj-industries.html?collection=",
          "/page/mj-sections.html?collection=", "/page/mj-columnists.html?collection=",
          "/page/mj-topnews.html?collection=" ],
      pznCollectionEditUrl : [ "/page/mj-companies.html?editMode=yes", "/page/mj-industries.html?editMode=yes",
          "/page/mj-sections.html?editMode=yes", "/page/mj-columnists.html?editMode=yes",
          "/page/mj-topnews.html?editMode=yes", "/page/mj-mostrecent.html?editMode=yes",
          "/page/mj-editorspick.html?editMode=yes" ],
      pznDisplayValues : [ "Companies", "Industries", "WSJ Sections", "WSJ Columns", "Top News from Today\'s Paper",
          "Most Recent", "Top News", "Most Recent in all Collections", "Editors' Picks", "Markets", "Portfolio" ],
      pznCollectionDatabaseValue : [ "Company News", "Industry News", "Topics", "Columns", "Top News", "Most Recent",
          "Editors Pick" ],
      pznDisplayTitle : [ "Companies", "Industries", "Sections", "Columns", "Top News", "Most Recent", "Editors Pick" ],
      pznCommanValues : [ "Settings", "Collapse", "Sort", "Save Settings", "Hide Module", "My Journal Preferences",
          "Cancel", "Expand" ],
      otherDefaultVisibleFolders : "Portfolio~", // Portfolio~Deals~Today's
      // Print Edition~Latest News~,
      pagePathValue : "/page",
      mjVersion : "/version/2?loc=mj"
    },

    getPznCollectionUrl : function() {
      return this._cfg.pznCollectionUrl;
    },

    getPagePathValue : function() {
      return this._cfg.pagePathValue;
    },

    getPznSingleCollectionUrl : function() {
      return this._cfg.pznSingleCollectionUrl;
    },
    getPznCollectionEditUrl : function() {
      return this._cfg.pznCollectionEditUrl;
    },

    getPznDisplayValues : function() {
      return this._cfg.pznDisplayValues;
    },
    getPznCollectionDatabaseValue : function() {
      return this._cfg.pznCollectionDatabaseValue;
    },
    getPznCommanValues : function() {
      return this._cfg.pznCommanValues;
    },
    getOtherDefaultVisibleFolders : function() {
      return this._cfg.otherDefaultVisibleFolders;
    },
    getPznDisplayTitle : function() {
      return this._cfg.pznDisplayTitle;
    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/industriesArticlesOverview/"/{From}/{To}?collection={Filter} //
     */
    searchIndustriesArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "industryArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.industriesOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchIndustryArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchIndustryArticles : function(folderId, data, criteria) {
      var name = "industryArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/companiesArticlesOverview/"/{From}/{To}?collection={Filter}
     */
    searchCompaniesArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "companyArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.companiesOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchCompaniesArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchCompaniesArticles : function(folderId, data, criteria) {
      var name = "companyArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/topNewsArticlesOverview/"/{From}/{To}?collection={Filter}
     */
    searchTopNewsArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "topNewsArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.topNewsOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchTopNewsArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchTopNewsArticles : function(folderId, data, criteria) {
      var name = "topNewsArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/sectionsArticlesOverview/"/{From}/{To}?collection={Filter}
     */
    searchSectionsArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "sectionArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.sectionsOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchSectionsArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchSectionsArticles : function(folderId, data, criteria) {
      var name = "sectionArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/columnsArticlesOverview/"/{From}/{To}collection={Filter}
     */
    searchColumnsArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "columnsArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.columnsOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchColumnsArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchColumnsArticles : function(folderId, data, criteria) {
      var name = "columnsArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/mostRecentOverview/"/{From}/{To}collection={Filter}
     */
    searchRecentArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "mostRecentPZNArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.mostRecentPZNOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchRecentArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchRecentArticles : function(folderId, data, criteria) {
      var name = "mostRecentPZNArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * FilterBy
     *
     * build URL as:
     * /pznusersvc/getUser/editorsPickOverview/"/{From}/{To}collection={Filter} --
     * no filter here
     */
    searchEditorsPickArticles : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "editorsPickArticles";
      criteria.name = name;

      // Use update observer since the results are not cached, and we don't want
      // multiple subscriptions for multiple searches.
      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.editorsPickOverview;
      url += '/' + (criteria.From || 1) + '/' + (criteria.To || 100) + this._cfg.mjVersion
          + ((criteria.Filter) ? "&collection=" + criteria.Filter : "");

      this._userFolders[name + ":" + folderId] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleSearchEditorsPickArticles, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleSearchEditorsPickArticles : function(folderId, data, criteria) {
      var name = "editorsPickArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._fireUpdateObserver(criteria.name, folderId, response);
      this._unsubscribeUpdateObserver(criteria.name);

    },

    /*
     * Use this to update user's industries:
     *
     */
    updateIndustries : function(industries, callback, context) {
      if ( typeof industries != "string" ) {
        var industries = industries.join("~");
      }

      var name = "UpdateIndustries";

      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.updateUser;

      var postData = {
        "industries" : industries
      };

      this._serviceWidget.doPost(name, industries, url, postData, this.handleUpdateIndustries, this);

    },

    handleUpdateIndustries : function(industries, data) {

      var name = "UpdateIndustries";

      this._fireUpdateObserver(name, industries, data);
      this._unsubscribeUpdateObserver(name);

    },

    /*
     * Use this to update user's sections:
     *
     */
    updateSections : function(sections, callback, context) {
      if ( typeof sections != "string" ) {
        var sections = sections.join("~");
      }
      var name = "UpdateSections";

      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.updateUser;

      var postData = {
        "topics" : sections
      };

      this._serviceWidget.doPost(name, sections, url, postData, this.handleUpdateSections, this);

    },

    handleUpdateSections : function(sections, data) {

      var name = "UpdateSections";

      this._fireUpdateObserver(name, sections, data);
      this._unsubscribeUpdateObserver(name);

    },

    /*
     * Use this to update user's columns:
     *
     */
    updateColumns : function(columns, callback, context) {
      if ( typeof columns != "string" ) {
        var columns = columns.join("~");
      }

      var name = "UpdateColumns";

      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.updateUser;

      var postData = {
        "columns" : columns
      };

      this._serviceWidget.doPost(name, columns, url, postData, this.handleUpdateColumns, this);

    },

    handleUpdateColumns : function(columns, data) {

      var name = "UpdateColumns";

      this._fireUpdateObserver(name, columns, data);
      this._unsubscribeUpdateObserver(name);

    },
    /** Columns function ends here */

    /*
     * Use this to update user's columns:
     *
     */
    updateTopNews : function(topNews, callback, context) {
      if ( typeof topNews != "string" ) {
        var topNews = topNews.join("~");
      }

      var name = "UpdateTopNews";

      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.updateUser;

      var postData = {
        "topNews" : topNews
      };

      this._serviceWidget.doPost(name, topNews, url, postData, this.handleUpdateTopNews, this);

    },

    handleUpdateTopNews : function(topNews, data) {

      var name = "UpdateTopNews";

      this._fireUpdateObserver(name, topNews, data);
      this._unsubscribeUpdateObserver(name);

    },
    /** Top News function ends here */

    /*
     * Get My Marktet Data
     */

    subscribeMarketData : function(callback, context) {

      var name = "marketData";
      var url = this._cfg.serviceUrls.marketData;
      this._dataObserver.subscribeByName(name, callback, context);
      this._serviceWidget.subscribeFeed(name, "all", this.handleMarketData, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleMarketData : function(key, data) {
      var name = "marketData";
      this._dataObserver.fireByName(name, data);
    },
    /* My market data ends here */

    /*
     * Get Articles for Most Recent for Dashboard
     */
    subscribeMostRecentArticles : function(callback, context) {
      var name = "mostRecentArticles";
      var url = this._cfg.serviceUrls.mostRecentArticles;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleMostRecentArticles, this);

      var criteria = {
        "mostRecentArticles" : "all" // blank means all
      };
      this._serviceWidget.getFeed(name, "all", url, criteria);

    },

    handleMostRecentArticles : function(key, data, criteria) {
      var name = "mostRecentArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._mostRecentArticles = response;
      this._dataObserver.fireByName(name, response);

    },
    /* Most Recent for Dashboard ends here */

    /* Global Pref */

    subscribeGlobalPref : function(callback, context) {
      var name = "globalPref";
      var url = this._cfg.serviceUrls.globalPref;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleGlobalPref, this);

      var criteria = {
        "globalPref" : "all" // blank means all
      };
      this._serviceWidget.getFeed(name, "all", url, criteria);

    },

    handleGlobalPref : function(key, data, criteria) {
      var name = "globalPref";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._globalPref = response;
      this._dataObserver.fireByName(name, response);

    },

    subscribeEmail : function(callback, context) {
      var name = "email";
      var url = this._cfg.serviceUrls.email;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleEmail, this);

      var criteria = {
        "globalPref" : "all" // blank means all
      };
      this._serviceWidget.getFeed(name, "all", url, criteria);

    },

    handleEmail : function(key, data, criteria) {
      var name = "email";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._email = response;
      this._dataObserver.fireByName(name, response);

    },

    /* Global Pref ends here */

    /* XHTML Service retrieval */

    /*
     * callback, context are standard callback params, first param of callback
     * is XHTML params: specify "type" as "industries", "sections", "companies",
     * "topNews", "columns", "mostRecent"
     */
    getXhtmlModule : function(params, callback, context) {
      var name = "XHTML" + params.type;
      if ( typeof params.url !== "undefined" ) {
        var url = params.url.toString();
      } else {
        var url = this._cfg.xhtmlServiceUrls[params.type];
      }
      this._subscribeUpdateObserver(name, callback, context);
      var newParams = {};
      newParams.responseType = 'text/html';
      newParams.type = params.type;
      newParams.callback = this.handleXhtmlModule;
      newParams.errorCallback = this.handleXhtmlModule;
      newParams.context = this;
      _dud.getDashboardData(url, newParams);
    },

    handleXhtmlModule : function(response, ioArgs, params) {
      var name = "XHTML" + params.type;
      this._fireUpdateObserver(name, response);
      this._unsubscribeUpdateObserver(name);
    },
    /* end XHTML Service retrieval */

    /* Update Show/Hide Folders */

    updateShowhideFolder : function(showFolders, callback, context) {
      if ( typeof showFolders != "string" ) {
        var showFolders = showFolders.join("~");
      }
      var name = "updateShowhideFolder";
      this._subscribeUpdateObserver(name, callback, context);
      var url = this._cfg.serviceUrls.updateUser;
      var postData = {
        "ShowFolder" : showFolders
      };
      this._serviceWidget.doPost(name, showFolders, url, postData, this._handleUpdateShowhideFolder, this);
    },

    _handleUpdateShowhideFolder : function(showFolders, data) {
      var name = "updateShowhideFolder";
      this._fireUpdateObserver(name, showFolders, data);
      this._unsubscribeUpdateObserver(name);
    },

    /* Update Show/Hide Folders ends here */

    /* Update email */

    updateEmail : function(delopt, callback, context) {
      if ( typeof delopt != "string" ) {
        var delopt = delopt.join("~");
      }
      var name = "updateEmail";
      this._subscribeUpdateObserver(name, callback, context);
      var url = this._cfg.serviceUrls.updateEmail;
      var postData = {
        "deliveryOptions" : delopt
      };
      this._serviceWidget.doPost(name, delopt, url, postData, this._handleUpdateEmail, this);
    },

    _handleUpdateEmail : function(delopt, data) {
      var name = "updateEmail";
      this._fireUpdateObserver(name, delopt, data);
      this._unsubscribeUpdateObserver(name);
    },

    /* Update email ends here */

    /*
     * getQuoteData @param symbols: javascript array of symbol strings or
     * tilde-separated string
     */
    getQuoteData : function(symbols, callback, context) {
      if ( typeof symbols === "string" ) {
        symbols = symbols.split('~');
      } else if ( typeof symbols === "undefined" ) {
        return;
      }

      var name = "quoteData";
      var url = this._cfg.serviceUrls.quote;

      this._subscribeUpdateObserver(name, callback, context);

      var symbolQS = "?";
      for ( var s = 0; s < symbols.length && (symbol = symbols[s]); s++) {
        if ( s > 0 ) {
          symbolQS += "&";
        }
        symbolQS += "symbol=" + symbol + "&type=usstocks";
      }
      url += symbolQS;

      // this._serviceWidget.subscribeFeed( name, symbols, this.handleQuoteData,
      // this );

      // this._serviceWidget.getFeed( name, symbols, url );

      var xml = new JKL.ParseXML(url);
      var that = this;
      xml.async(function(data) {
        that.handleQuoteData(data);
      });
      xml.parse();

    },

    handleQuoteData : function(data) {
      var name = "quoteData";

      this._fireUpdateObserver(name, data);
      this._unsubscribeUpdateObserver(name);

    },

    /*
     * Get Quotes info for user portfolio with default -1
     */
    subscribeUserPortfolioQuotes : function(portfolioId, callback, context) {
      var name = "userPortfolioQuotes:" + portfolioId;
      var url = this._cfg.serviceUrls.portfolioList + portfolioId;

      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed("userPortfolioQuotes", portfolioId, this.handleUserPortfolioQuotes, this);
        this._subscribed[name] = true;
      }

      var criteria = {
        "p_id" : portfolioId
      };

      this._serviceWidget.getFeed("userPortfolioQuotes", portfolioId, url, criteria);

    },

    /*
     * request for user portfolio quotes must set criteria that contains "p_id"
     * element
     */
    handleUserPortfolioQuotes : function(portfolioId, data, criteria) {
      var name = "userPortfolioQuotes";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._userPortfolioQuotes[name + ":" + portfolioId] = response;
      this._dataObserver.fireByName(name + ":" + portfolioId, portfolioId, response);

    },

    getAllIndustries : function(callback, context) {

      var name = "allIndustries";
      var url = this._cfg.serviceUrls.allIndustries;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleGetAllIndustries, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleGetAllIndustries : function(key, data) {
      var name = "allIndustries";

      this._dataObserver.fireByName(name, data);

    },

    getAllCompanies : function(callback, context) {

      var name = "allCompanies";
      var url = this._cfg.serviceUrls.allCompanies;
      this._dataObserver.subscribeByName(name, callback, context);
      this._serviceWidget.subscribeFeed(name, "all", this.handleGetAllCompanies, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleGetAllCompanies : function(key, data) {
      var name = "allCompanies";
      this._dataObserver.fireByName(name, data);
    },

    getAllSections : function(callback, context) {

      var name = "allSections";
      var url = this._cfg.serviceUrls.allSections;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleGetAllSections, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleGetAllSections : function(key, data) {
      var name = "allSections";

      this._dataObserver.fireByName(name, data);

    },

    getAllColumns : function(callback, context) {

      var name = "allColumns";
      var url = this._cfg.serviceUrls.allColumns;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleGetAllColumns, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleGetAllColumns : function(key, data) {
      var name = "allColumns";

      this._dataObserver.fireByName(name, data);

    },

    getAllIndexes : function(callback, context) {

      var name = "allIndexes";
      var url = this._cfg.serviceUrls.allIndexes;
      this._dataObserver.subscribeByName(name, callback, context);
      this._serviceWidget.subscribeFeed(name, "all", this.handleGetAllIndexes, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleGetAllIndexes : function(key, data) {
      var name = "allIndexes";
      this._dataObserver.fireByName(name, data);
    },

    getAllTopNews : function(callback, context) {

      var name = "allTopNews";
      var url = this._cfg.serviceUrls.allTopNews;

      this._dataObserver.subscribeByName(name, callback, context);

      this._serviceWidget.subscribeFeed(name, "all", this.handleGetAllTopNews, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleGetAllTopNews : function(key, data) {
      var name = "allTopNews";

      this._dataObserver.fireByName(name, data);

    },

    /*
     * Use this to update user's collections:
     *
     */
    updatePZNCollection : function(postDataValues, callback, context) {
      var name = "UpdatePZNCollection";
      this._subscribeUpdateObserver(name, callback, context);
      var url = this._cfg.serviceUrls.updateUser;
      this._serviceWidget.doPost(name, "all", url, postDataValues, this.handlePZNCollection, this);
    },

    handlePZNCollection : function(data) {
      var name = "UpdatePZNCollection";
      this._fireUpdateObserver(name, "all", data);
      this._unsubscribeUpdateObserver(name);

    },
    /*
     * Use this to update user's collections:
     *
     */
    updatePremium : function(postDataValues, callback, context, check) {
      if ( typeof check === 'undefined' ) {
        check = "all";
      }
      var name = "UpdatePremium" + check;

      this._subscribeUpdateObserver(name, callback, context);
      var url = this._cfg.serviceUrls.updatePmProfile;
      this._serviceWidget.doPost(name, check, url, postDataValues, this.handlePremium, this);
    },

    handlePremium : function(key, data) {
      var name = "UpdatePremium" + key;
      this._fireUpdateObserver(name, "all", data);
      this._unsubscribeUpdateObserver(name);

    },

    getDockWelMsg : function(callback, context) {
      var name = "DockWelMsg";
      var url = "/epsvcs/view/personal/user/settings?profileType=dockMsg";
      this._dataObserver.subscribeByName(name, callback, context);
      this._serviceWidget.subscribeFeed(name, "all", this.handleDockWelMsg, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleDockWelMsg : function(key, data) {
      var name = "DockWelMsg";
      this._dataObserver.fireByName(name, data);
    },

    getCIWelMsg : function(callback, context) {
      var name = "CIWelMsg";
      var url = "/epsvcs/view/personal/user/settings?profileType=ci_msg";
      this._dataObserver.subscribeByName(name, callback, context);
      this._serviceWidget.subscribeFeed(name, "all", this.handleCIWelMsg, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleCIWelMsg : function(key, data) {
      var name = "CIWelMsg";
      this._dataObserver.fireByName(name, data);
    },

    getWelcomeMessages : function(callback, context) {
      var name = "welcomeMessages";
      var url = this._cfg.serviceUrls.welcomeMsg;
      this._dataObserver.subscribeByName(name, callback, context);
      this._serviceWidget.subscribeFeed(name, "all", this.handleWelcomeMessages, this);
      this._serviceWidget.getFeed(name, "all", url);
    },

    handleWelcomeMessages : function(key, data) {
      var name = "welcomeMessages";
      this._dataObserver.fireByName(name, data);
    },

    getDisplayViewCode : function(_mjView, _saveSetting, _cancelEditing, saveButton, cancelButton, _mjViewValue,
        restoreCheck, restoreButton, _dockView, _dockViewValue) {
      var _pm = false;
      var dockViewValue = "0";
      if ( typeof _dockView !== 'undefined' ) {
        _pm = true;

        dockViewValue = _dockViewValue;
      }

      var resphtml = [];
      if ( restoreCheck == "Restore" ) {
        resphtml[resphtml.length] = [ '<div class="mjFilterContent restoreDefault sixColumn"><ul class="buttonBar">',
            '<li class="button buttonType-hide"><a href="#" id="', restoreButton, '">RESTORE DEFAULTS</a></li></ul>',
            '<p>This action will overwrite your current selections.</p></div>' ].join("");
      }

      resphtml[resphtml.length] = [
          '<div class="mod_setDisplay"><h4>Set Display: <span>Choose how you see your content for this collection.</span>',
          '</h4><div class="setDisplay bottomBorder">' ].join("");

      if ( _pm ) {
        resphtml[resphtml.length] = [ '<ul class="headline">',
            '<li><h4>Within My News</h4></li><li class="divider"><h4>Within My Toolbar</h4></li></ul>' ].join("");
      } else {
        resphtml[resphtml.length] = [ '<ul class="headline"><li><h4>Within My Journal</h4></li></ul>' ].join("");
      }

      resphtml[resphtml.length] = [ '<ul class="summaryText">' ].join("");

      if ( _mjViewValue == "1" ) {
        resphtml[resphtml.length] = [ '<li><input type="radio" checked="checked" value="layout" name="myJournal" id="',
            _mjView, '"/>', '<label for="myJournalSummary">Headlines, Summaries and Images</label></li>',
            '<li><input type="radio" value="list" name="myJournal" id="myJournalHeadline"/>',
            '<label for="myJournalHeadline">Headlines Only</label></li>' ].join("");
      } else {
        resphtml[resphtml.length] = [ '<li><input type="radio" value="layout" name="myJournal" id="', _mjView, '"/>',
            '<label for="myJournalSummary">Headlines, Summaries and Images</label></li>',
            '<li><input type="radio" value="list" checked="checked" name="myJournal" id="myJournalHeadline"/>',
            '<label for="myJournalHeadline">Headlines Only</label></li>' ].join("");
      }
      if ( _pm ) {
        if ( dockViewValue == "1" ) {
          resphtml[resphtml.length] = [
              '<li class="divider"><input type="radio" checked="checked" name="myToolbar" id="', _dockView, '"/>',
              '<label for="myToolbarSummary">Headlines, Summaries and Images</label></li>',
              '<li><input type="radio" name="myToolbar" />',
              '<label for="myToolbarHeadline">Headlines Only</label></li>' ].join("");
        } else {
          resphtml[resphtml.length] = [ '<li class="divider"><input type="radio" name="myToolbar" id="', _dockView,
              '"/>', '<label for="myToolbarSummary">Headlines, Summaries and Images</label></li>',
              '<li><input type="radio" name="myToolbar" checked="checked"/>',
              '<label for="myToolbarHeadline">Headlines Only</label></li>' ].join("");
        }
      }

      resphtml[resphtml.length] = [ '</ul>' ].join("");

      if ( _pm ) {
        resphtml[resphtml.length] = [
            '<ul class="summaryText"><li><img src="/img/icon_headlinesummary.gif" alt="Headlines only" title="Headlines Only"/></li>',
            '<li><img src="/img/icon_headline.gif" alt="Headlines only" title="Headlines Only"/></li>',
            '<li class="divider"><img src="/img/icon_headlinesummary.gif" alt="Headlines only" title="Headlines Only"/></li>',
            '<li><img src="/img/icon_headline.gif" alt="Headlines only" title="Headlines Only"/></li></ul>' ].join("");
      } else {
        resphtml[resphtml.length] = [
            '<ul class="summaryText"><li><img src="/img/icon_headlinesummary.gif" alt="Headlines only" title="Headlines Only"/></li>',
            '<li><img src="/img/icon_headline.gif" alt="Headlines only" title="Headlines Only"/></li></ul>' ].join("");
      }

      resphtml[resphtml.length] = [
          '</div><div class="editOps"><ul class="buttonBar"><li class="button buttonType-save">', '<a href="#" id="',
          _saveSetting, '" class="', _saveSetting, '">', saveButton, '</a></li>',
          '<li class="nonbutton linkType-cancel"><a href="#" id="', _cancelEditing, '">', cancelButton,
          '</a></li></ul></div></div>' ].join("");

      return resphtml.join("");

    },

    /*
     * UTILITY FUNCTIONS GO HERE Keep get/update methods above
     */

    // Creates a new observer used to handle updates (PUT,POST,DELETE)
    _subscribeUpdateObserver : function(name, callback, context) {
      // console.log("@PZN #%#% sub "+name);

      var updateObserver = this._updateObservers[name];
      if ( !updateObserver ) {
        updateObserver = new _du.Observer();
        this._updateObservers[name] = updateObserver;
        this._updateCallbacks[name] = callback;
        updateObserver.subscribe(callback, context);
      }

    },

    _fireUpdateObserver : function(name) {
      // console.log("@PZN #%#% fire "+name);
    var updateObserver = this._updateObservers[name];
    if ( updateObserver ) {
      var fireParams = [];
      for ( var i = 1, arg, len = arguments.length; i < len; i++) {
        fireParams.push(arguments[i]);
      }
      updateObserver.fire.apply(updateObserver, fireParams);
    }
  },

  _unsubscribeUpdateObserver : function(name) {
    // console.log("@PZN #%#% unsub "+name);

    this._updateObservers[name] = null;
  }

  };

  // Instantiate singleton service instance of this widget here.
  // dj.service.dashboard.DashboardPZNService = new _dwd.DashboardPZNService();

  _dsd.DashboardPZNServiceFactory = {
    getPZNServiceInstance : function(callback, context) {

      if ( dj.service.dashboard.DashboardPZNService ) {

        callback.apply(context, [ dj.service.dashboard.DashboardPZNService ]);

      } else if ( this.pznSvcInstanceObserver ) {

        // Existence of the observer means we have called hasRole
    // and we're waiting for the response.
    // Subscribe any clients o they will be notified when
    // hasRole calls us back

    this._subscribePznSvcInstanceObserver(callback, context);

  } else {
    // first call, create an observer to handle clients who
    // request an instance before hasRoll calls back.
    this._subscribePznSvcInstanceObserver(callback, context);
    var that = this;
    dj.util.User.hasRole("WSJ-ENT", function(hasENTRole) {
      that.createPZNServiceInstance(hasENTRole);
    });
  }

},

createPZNServiceInstance : function(hasENTRole) {

  if ( hasENTRole ) {

    // Instantiate singleton service instance of this widget here.
    dj.service.dashboard.DashboardPZNService = new _dwd.DashboardPZNService(
        {
          "pznCollectionUrl" : [ "/professional-page/mj-companies.html", "/professional-page/mj-industries.html",
              "/professional-page/mj-sections.html", "/professional-page/mj-columnists.html",
              "/professional-page/mj-topnews.html", "/professional-page/mj-mostrecent.html",
              "/professional-page/mj-editorspick.html", "/professional-page/my-journal-setup.html",
              "/professional-page/my-journal-main.shtml" ],
          "pznSingleCollectionUrl" : [ "/professional-page/mj-companies.html?collection=",
              "/professional-page/mj-industries.html?collection=", "/professional-page/mj-sections.html?collection=",
              "/professional-page/mj-columnists.html?collection=", "/professional-page/mj-topnews.html?collection=" ],
          "pznCollectionEditUrl" : [ "/professional-page/mj-companies.html?editMode=yes",
              "/professional-page/mj-industries.html?editMode=yes", "/professional-page/mj-sections.html?editMode=yes",
              "/professional-page/mj-columnists.html?editMode=yes", "/professional-page/mj-topnews.html?editMode=yes",
              "/professional-page/mj-mostrecent.html?editMode=yes",
              "/professional-page/mj-editorspick.html?editMode=yes" ],
          "pagePathValue" : "/professional-page",
          "mjVersion" : "/version/3?loc=mj&dedupe=true",
          xhtmlServiceUrls : {
            "companies" : "/professional-npage/0_0_EM_1034_companies_update.html",
            "industries" : "/professional-npage/0_0_EM_1033_industries_update.html",
            "sections" : "/professional-npage/0_0_EM_1031_sections_update.html",
            "columns" : "/professional-npage/0_0_EM_1032_columns_update.html",
            "topNews" : "/professional-npage/0_0_EM_1036_topNews_update.html",
            "mostRecent" : "/professional-npage/0_0_EM_1035_mostRecent_update.html",
            "editorsPick" : "/professional-npage/0_0_EM_1037_EditorPicks_update.html",
            "mostRecentSaved" : "/professional-npage/0_0_EM_1060_mjDockSaved.html",
            "userSaved" : "/professional-npage/0_0_EM_1060_mjDockSavedColl.html",
            "mjDockSavedNav" : "/professional-npage/0_0_EM_1060_mjDockSavedNav.html",
            "mjDockCompany_News" : "/professional-npage/0_0_EM_1055_mjDockCompany_News.html",
            "mjDockIndustry_News" : "/professional-npage/0_0_EM_1055_mjDockIndustry_News.html",
            "mjDockTopics" : "/professional-npage/0_0_EM_1055_mjDockTopics.html",
            "mjDockColumns" : "/professional-npage/0_0_EM_1055_mjDockColumns.html",
            "mjDockTop_News" : "/professional-npage/0_0_EM_1055_mjDockTop_News.html",
            "mjDockMost_Recent" : "/professional-npage/0_0_EM_1055_mjDockMost_Recent.html",
            "mjDockEditors_Pick" : "/professional-npage/0_0_EM_1055_mjDockEditors_Pick.html",
            "mjDocktabCompanies" : "/professional-npage/0_0_EM_1055_mjDocktabCompanies.html",
            "mjDocktabIndustries" : "/professional-npage/0_0_EM_1055_mjDocktabIndustries.html",
            "pmDocktabCompanies" : "/professional-npage/0_0_EM_1055_mjDocktabCompanies.html",
            "pmDocktabIndustries" : "/professional-npage/0_0_EM_1055_mjDocktabIndustries.html",
            "mjDockMostRecentSaved" : "/professional-npage/0_0_EM_1055_mjDocktabSaved.html",
            "mjDockKeywordAlerts" : "/professional-npage/0_0_EM_1055_mjDocktabKeywordAlerts.html",
            "mjDockMarkets" : "/professional-npage/0_0_EM_1055_mjDocktabMarkets.html"
          },
          serviceUrls : {
            "updatePmProfile" : "/epsvcs/update/userProfile"
          }
        });

  } else {

    // Instantiate singleton service instance of this widget here. Legacy
    // modules may still use this.
    dj.service.dashboard.DashboardPZNService = new _dwd.DashboardPZNService();

  }

  this._firePznSvcInstanceObserver();

},

// Creates a new observer used to handle pzn svc instance
    _subscribePznSvcInstanceObserver : function(callback, context) {

      if ( !this.pznSvcInstanceObserver ) {
        this.pznSvcInstanceObserver = new _du.Observer();
      }
      this.pznSvcInstanceObserver.subscribe(callback, context);

    },

    _firePznSvcInstanceObserver : function() {

      if ( this.pznSvcInstanceObserver ) {
        this.pznSvcInstanceObserver.fire();
      }
    }

  };

}());
/* global dj, dojo */

dojo.provide("dj.service.dashboard.DashboardFolderService");
dojo.require("dj.service.dashboard.DashboardPZNServiceFactory");
dojo.require("dj.service.dashboard.DashboardService");
dojo.require("dj.module.dashboard.DashboardExpletives");

/*
 * * @author cooksonl
 */

if ( typeof dj == "undefined" ) {
  dj = {};
}
if ( typeof dj.widget == "undefined" ) {
  dj.widget = {};
}
if ( typeof dj.widget.dashboard == "undefined" ) {
  dj.widget.dashboard = {};
}
if ( typeof dj.service == "undefined" ) {
  dj.service = {};
}
if ( typeof dj.service.dashboard == "undefined" ) {
  dj.service.dashboard = {};
}

(function() {

  var _du = dj.util;
  var _dsd = dj.service.dashboard;
  var _dwd = dj.widget.dashboard; // Internal, only for use to instantiate
  // service
  var _dud = _du.dashboard;
  var _ctx = dj.context;

  // --- DashboardFolderService ---

  /*
   * serviceWidget is the instance of DashboardService to be used cfg is a
   * config that can overridden
   */

  (_dwd.DashboardFolderService = function(cfg) {
    this._serviceWidget = null;

    this._cfg = dj.lang.cloneMixin(this.DEFAULT_CONFIG, cfg);

    this._responsePending = {};
    this._subscribed = {};
    this._allFolders = null;
    this._folderContacts = null;
    this._allFolderContacts = null;
    this._allFolderFreqContacts = null;
    this._defaultFolder = null;
    this._userFolders = {};

    this.initServices();

    this._updateObservers = {};
    this._updateCallbacks = {};

    this._dataObserver = new _du.Observer();

  }).prototype = {

    DEFAULT_CONFIG : {
      // add service URLs here...can be for get, post, etc.
      serviceUrls : {
        // URL for dashboard service
        "defaultFolders" : "/pznusersvc/view/getUser/defaultFolders/version/2", // TODO:
        // use
        // epiton/dj.util.User
        // to
        // get
        // login
        "userFolders" : "/WSJDBFolders/service.svc/Folders/User/userName/FolderTitle", // TODO:
        // use
        // epiton/dj.util.User
        // to
        // get
        // login
        "userFoldersOnCreate" : "/WSJDBFolders/service.svc/Folders/User/userName/LatestFirst", // TODO:
        // use
        // epiton/dj.util.User
        // to
        // get
        // login
        "userFolder" : "/WSJDBFolders/service.svc/Folders/userName", // TODO:
        // use
        // epiton/dj.util.User
        // to get
        // login
        "folderFeed" : "/pznusersvc/getFolders/userName/", // pzn folder
        // articles feed
        // services
        "folderFeedPage" : "/pznusersvc/view/dash/FeedPage/version/2/",
        "topArticlesFolder" : "/pznusersvc/view/dash/TopArticlesPage/version/2",
        "folderPrefs" : "/WSJDBFolders/service.svc/FolderPrefs/userName",
        "article" : "/WSJDBFeeds/service.svc/Article",
        "articleTypesCount" : "/WSJDBFeeds/service.svc/ArticleTypesCount/userName",
        "updateUser" : "/pznusersvc/update/updateUser/userName",
        "articles" : "/WSJDBFeeds/service.svc/Articles/userName", // for
        // deleting
        // all
        // articles
        "folderContacts" : "/WSJDBFolders/service.svc/Folder/", // +
        // {FolderID}/Contacts
        "modifyFolderContacts" : "/WSJDBFolders/service.svc/Folder/Contacts",
        "allUserContacts" : "/WSJDBFolders/service.svc/User/Contacts",
        "frequentUserContacts" : "/WSJDBFolders/service.svc/User/Contacts/Frequent",
        "mostRecentSettings" : "/WSJDBFolders/service.svc/UserPrefs",
        "deleteAlertFolder" : "/epsvcs/update/Alert/DeleteAlertById/format/{xml}/id/",
        "updateAlertMjDockView" : "/epsvcs/update/userProfile"
      },
      folderProps : [ 'Y', 'User', 'Default', 'System', 'Quick Save' ],
      pznFolderNames : [ 'Companies', 'Industries', 'Sections', 'Columnists', 'Markets', 'Portfolio', 'Quick Save',
          'Top News' ],
      colBlankError : "Please enter a name for your new Collection.",
      colMaxCharError : "Please enter a name for your Collection less than 30 characters",
      colValidError : "Text includes invalid characters: Only use letters, numbers and . , - _",
      colLimitError : "Limit reached: Please remove a collection before adding another.",
      colDuplicateError : "Collection already exists. Please enter a new name.",
      inappNameError : "Please refrain from using inappropriate vocabulary."

    },

    initServices : function() {
      _dsd.DashboardPZNServiceFactory.getPZNServiceInstance(this.handleInitServices, this);
    },

    handleInitServices : function(_pznServiceWidget) {
      this._serviceWidget = _dsd.DashboardService;
      this._pznServiceWidgetDFS = (_pznServiceWidget) ? _pznServiceWidget : _dsd.DashboardPZNService;
      this._collVisibility = this._pznServiceWidgetDFS.getOtherDefaultVisibleFolders();
    },

    getFolderProps : function() {
      return this._cfg.folderProps;
    },

    getPznFolderNames : function() {
      return this._cfg.pznFolderNames;
    },

    getAllUserFolders : function() {
      return this._allFolders;
    },

    articleTimestampFormat : function(newsArticleDate) {
      if ( newsArticleDate === "" ) {
        return newsArticleDate;
      }

      newsArticleDate = newsArticleDate.replace("PM", "");
      newsArticleDate = newsArticleDate.replace("AM", "");
      newsArticleDate = newsArticleDate.replace("pm", "");
      newsArticleDate = newsArticleDate.replace("am", "");

      newsArticleDate = new Date(newsArticleDate);
      var todaysDate = new Date();
      if ( todaysDate.getDate() === newsArticleDate.getDate() && todaysDate.getMonth() === newsArticleDate.getMonth() ) {
        var newsArticleHrs = newsArticleDate.getHours();
        if ( newsArticleHrs >= 12 ) {
          var amOrPmVal = " p.m.";
          newsArticleHrs = 12 - newsArticleHrs;
          if ( newsArticleHrs < 0 ) newsArticleHrs = -newsArticleHrs;
        } else {
          var amOrPmVal = " a.m.";
        }
        if ( newsArticleHrs === 0 ) newsArticleHrs = "12";
        var newsArticleMins = newsArticleDate.getMinutes();
        if ( newsArticleMins < 10 ) {
          newsArticleMins = "0" + newsArticleMins;
        }
        newsArticleDate = newsArticleHrs + ":" + newsArticleMins + amOrPmVal;

      } else {
        var newsArticleDay = newsArticleDate.getDate();
        var newsArticleMonth = newsArticleDate.getMonth() + 1;
        newsArticleDate = newsArticleMonth + "/" + newsArticleDay;
      }
      return newsArticleDate;
    },

    typeOfResult : function(obj) {
      if ( typeof (obj) == "object" ) {
        if ( obj.length ) {
          return "array";
        } else {
          return "object";
        }
      } else {
        return typeof (obj);
      }
    },

    validateCollectionName : function(type, foldername, id, foldernames, totalUserCollection) {
      var _djl = dj.lang;
      var el = dojo.byId(id);
      foldername = foldername.replace(/^\s+|\s+$/g, '').toLowerCase();
      if ( typeof dj.module.dashboard.expletives !== 'undefined' ) {// Handling
        // Curse words
        var cursewords = dj.module.dashboard.expletives;
        var _icheck = 0;
        var nameval = foldername.replace(/ /g, "");
        while (cursewords[_icheck]) {
          if ( nameval.indexOf(cursewords[_icheck]) !== -1 ) {
            el.innerHTML = this._cfg.inappNameError;
            el.style.display = "block";
            return false;
          }
          ;
          _icheck++;
        }
      }

      if ( typeof totalUserCollection !== 'undefined' ) {
        if ( totalUserCollection > 20 ) {
          el.innerHTML = this._cfg.colLimitError;
          el.style.display = "block";
          return false;
        }
      }

      if ( typeof foldernames !== 'undefined' ) {
        var _check = 0;
        if ( type === "new" ) { // for new collections
          while (foldernames[_check]) {
            if ( foldername === foldernames[_check].FolderTitle.toLowerCase() ) {
              el.innerHTML = this._cfg.colDuplicateError;
              el.style.display = "block";
              return false;
            }
            _check++;
          }
        } else { // for Rename
          var _check = 0;
          var _folderId = type.replace("User", "");
          while (foldernames[_check]) {
            if ( foldername == (foldernames[_check].FolderTitle.toLowerCase())
                && foldernames[_check].FolderID != _folderId ) {
              el.innerHTML = this._cfg.colDuplicateError;
              el.style.display = "block";
              return false;
            }
            _check++;
          }
        }
      }// end of undefined

      if ( "" === foldername ) {
        el.innerHTML = this._cfg.colBlankError;
        el.style.display = "block";
        return false;
      }

      if ( "most recent" == foldername || "quick save" == foldername ) {
        dojo.byId(id).innerHTML = this._cfg.colDuplicateError;
        el.style.display = "block";
        return false;
      }

      if ( foldername.length > 30 ) {
        el.innerHTML = this._cfg.colMaxCharError;
        el.style.display = "block";
        return false;
      }

      el.style.display = "none";
      var invalidChars = "~?!#$%&*()\"||<>=+;:][{}/\\";
      for ( var count = 0, len = invalidChars.length; count < len; count++) {
        var badChar = invalidChars.charAt(count);
        if ( foldername.indexOf(badChar, 0) > -1 ) {
          el.innerHTML = this._cfg.colValidError;
          el.style.display = "block";
          return false;
        }
      }
      return true;
    },
    subscribeUserFolders : function(callback, context, firstViewMode) {
      var name = "userFolders";
      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed(name, "all", this.handleUserFolders, this);
        this._subscribed[name] = true;
      }

      if ( firstViewMode ) {
        this._serviceWidget.getFeed(name, "all", this._cfg.serviceUrls.userFoldersOnCreate);
      } else {
        this._serviceWidget.getFeed(name, "all", this._cfg.serviceUrls.userFolders);
      }
    },

    handleUserFolders : function(key, data) {
      var name = "userFolders";

      this._allFolders = data;
      this._dataObserver.fireByName(name, data);
    },

    subscribeDefaultFolders : function(callback, context) {
      var name = "defaultFolders";
      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed(name, "all", this.handleDefaultFolders, this);
        this._subscribed[name] = true;
      }

      this._serviceWidget.getFeed(name, "all", this._cfg.serviceUrls.defaultFolders);
    },

    handleDefaultFolders : function(key, data) {
      var name = "defaultFolders";
      this._allFolders = data;
      this._defaultFolder = data;
      var folderdata = this._defaultFolder.Folders;
      if ( (typeof folderdata !== 'undefined') ) {
        var _check = 0;
        while (folderdata[_check]) {
          if ( "Y" == folderdata[_check].Visibility ) { // Visibility
            this._collVisibility += folderdata[_check].FolderTitle + "~";
          }
          _check++;
        }
      }

      //

      this._dataObserver.fireByName(name, data);
    },

    reloadUserFolders : function() {
      var name = "userFolders";

      this._serviceWidget.reloadFeed(name, "all", this._cfg.serviceUrls.userFolders);

    },

    /*
     * Get Articles from a folder
     */
    subscribeUserFolder : function(folderId, callback, context) {
      var name = "folderArticles";

      var url = this._cfg.serviceUrls.folderFeed + folderId;

      this._dataObserver.subscribeByName(name + ":" + folderId, callback, context);

      if ( !this._subscribed["folderArticles:" + folderId] ) {
        this._serviceWidget.subscribeFeed("folderArticles", folderId, this.handleUserFolder, this);
        this._subscribed["folderArticles:" + folderId] = true;
      }

      var criteria = {
        FolderID : folderId
      };
      this._serviceWidget.getFeed("folderArticles", folderId, url, criteria);

    },

    /*
     * @param criteria: parameters for query. fields: folderId from NoOfRecords
     * OrderColumn (FolderItemID, FolderID, Title, Desc, URL, ContentID,
     * ContentType, DateAdded) OrderBy (Asc/Desc) ContentType (Article,
     * Slideshow, Video, Interactive Graphic; one or more. omit for "all")
     * 
     * build URL as:
     * /WSJDBFeeds/service.svc/FeedPage/{FolderID}/{from}/{NoOfRecords}/{OrderColumn}/{OrderBy}
     */
    searchUserFolder : function(folderId, criteria, callback, context) {
      // Puts folderId into criteria in case you forget it, it's used later
      var name = "folderArticles";

      if ( folderId === "" ) {
        folderId = "MostRecent";
      }

      criteria.FolderID = folderId;

      this._dataObserver.subscribeByName("folderArticles:" + folderId, callback, context);

      if ( folderId === "MostRecent" ) {
        var url = this._cfg.serviceUrls.topArticlesFolder;
        url += '/' + (criteria.from || 0) + '/' + (criteria.NoOfRecords || 100) + '/'
            + (criteria.fromDate || '09-01-1980') + '/' + (criteria.ContentType || 'null');

      } else {
        var url = this._cfg.serviceUrls.folderFeedPage + folderId;
        url += '/' + (criteria.from || 0) + '/' + (criteria.NoOfRecords || 100) + '/'
            + (criteria.OrderColumn || 'DateAdded') + '/' + (criteria.OrderBy || 'Desc') + '/'
            + (criteria.ContentType || 'null');
      }

      this._userFolders["Folder:" + criteria.FolderID] = null;
      this._serviceWidget.subscribeFeed(name, folderId, this.handleUserFolder, this);

      this._serviceWidget.getFeed(name, folderId, url, criteria);

    },

    reloadFolder : function(folderId) {
      var name = "userFolders";

      this._serviceWidget.reloadFeed(name, folderId, this._cfg.serviceUrls.folderFeedPage + folderId);

    },

    /*
     * request for user folder articles must set criteria that contains
     * "FolderID" element The criteria.FolderID is used to fire proper callback
     * to client
     */
    handleUserFolder : function(key, data, criteria) {
      var name = "folderArticles";

      var response = {
        "Criteria" : criteria,
        "Results" : data
      };
      this._userFolders[name + ":" + criteria.FolderID] = response;
      this._dataObserver.fireByName(name + ":" + criteria.FolderID, criteria.FolderID, response);

    },

    createUserFolder : function(folderName, mjView, dockView, callback, context) {

      var name = "CreateUserFolder";

      if ( !mjView ) {
        mjView = "Layout";
      }

      if ( !dockView ) {
        dockView = "Layout";
      }

      this._subscribeUpdateObserver(name + ":" + folderName, callback, context);

      var url = this._cfg.serviceUrls.userFolder;
      var postData = [ {
        "FolderID" : "0",
        "FolderTitle" : folderName,
        "MJView" : mjView,
        "DockView" : dockView,
        "FolderType" : "User"
      } ];

      this._serviceWidget.doPut(name, folderName, url, postData, this.handleCreateUserFolder, this);

    },

    handleCreateUserFolder : function(folderName, data) {

      var name = "CreateUserFolder";

      this._fireUpdateObserver(name + ":" + folderName, folderName, data);
      this._unsubscribeUpdateObserver(name + ":" + folderName);

      // console.log( "handlecreateUserFolder "+folderName );
    },

    /*
     * Use this to rename a user folder Use updateUserFolderPreferences to
     * change FolderOrder, Visibility, ShowItemCount
     */
    renameUserFolder : function(folderId, newFolderName, callback, context) {

      var name = "RenameUserFolder";

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var url = this._cfg.serviceUrls.userFolder;
      var postData = [ {
        "FolderID" : folderId,
        "FolderTitle" : newFolderName,
        "FolderType" : "User"
      } ];

      this._serviceWidget.doPost(name, folderId, url, postData, this.handleRenameUserFolder, this);

    },

    handleRenameUserFolder : function(folderId, data) {
      var name = "RenameUserFolder";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleRenameUserFolder "+folderId );
    },

    updateUserFolderInfo : function(folderId, folderObj, callback, context) {

      var name = "UpdateUserFolderInfo";

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var url = this._cfg.serviceUrls.userFolder;
      var postData = [ folderObj ];

      this._serviceWidget.doPost(name, folderId, url, postData, this.handleUpdateUserFolderInfo, this);

    },

    handleUpdateUserFolderInfo : function(folderId, data) {
      var name = "UpdateUserFolderInfo";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleUpdateUserFolderInfo "+folderId );
    },

    updateUserAlertInfo : function(alertObj, callback, context) {

      var name = "UpdateUserAlertInfo";
      var alertId = alertObj.id;

      this._subscribeUpdateObserver(name + ":" + alertId, callback, context);

      var url = this._cfg.serviceUrls.updateAlertMjDockView;
      var postData = {

        "profileType" : "alertView",
        "profileName" : alertId,
        "params" : [ {
          "mj" : alertObj.mjView
        }, {
          "dock" : alertObj.dockView
        } ]
      };

      this._serviceWidget.doPost(name, alertId, url, postData, this.handleUpdateUserAlertInfo, this);

    },

    handleUpdateUserAlertInfo : function(alertId, data) {
      var name = "UpdateUserAlertInfo";

      this._fireUpdateObserver(name + ":" + alertId, alertId, data);
      this._unsubscribeUpdateObserver(name + ":" + alertId);

      // console.log( "handleUpdateUserAlertInfo "+alertId );
    },

    /*
     * Use this to update folder preferences: FolderOrder, Visibility,
     * ShowItemCount pass in an object with one or more of these 3 values: {
     * "FolderOrder":"3", "ShowItemCount":4 }
     */
    updateUserFolderPreferences : function(folderId, newPrefs, callback, context) {

      var name = "UpdateUserFolderPrefs";

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var url = this._cfg.serviceUrls.folderPrefs;
      // insert folder ID (required)
      var prefInit = {
        "FolderID" : folderId
      };

      // Add any optional prefs to initial pref object
      var newFolderPrefs = dj.lang.cloneMixin(prefInit, newPrefs);

      var postData = [ newFolderPrefs ];

      this._serviceWidget.doPost(name, folderId, url, postData, this.handleUpdateUserFolderPreferences, this);

    },

    handleUpdateUserFolderPreferences : function(folderId, data) {

      var name = "UpdateUserFolderPrefs";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

    },

    deleteUserFolder : function(folderId, callback, context) {

      var name = "DeleteUserFolder";

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var url = this._cfg.serviceUrls.userFolder;
      var postData = [ {
        "FolderID" : folderId,
        "FolderType" : "User"
      } ];

      this._serviceWidget.doDelete(name, folderId, url, postData, this.handleDeleteUserFolder, this);

    },

    handleDeleteUserFolder : function(folderId, data) {
      var name = "DeleteUserFolder";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleDeleteUserFolder "+folderId );
    },

    deleteUserAlert : function(alertId, callback, context) {

      var name = "DeleteUserAlert";

      this._subscribeUpdateObserver(name + ":" + alertId, callback, context);

      var url = this._cfg.serviceUrls.deleteAlertFolder + "{" + alertId + "}";

      var postData = {};

      this._serviceWidget.doDelete(name, alertId, url, postData, this.handleDeleteUserAlert, this);

    },

    handleDeleteUserAlert : function(alertId, data) {
      var name = "DeleteUserAlert";

      this._fireUpdateObserver(name + ":" + alertId, alertId, data);
      this._unsubscribeUpdateObserver(name + ":" + alertId);

      // console.log( "handleDeleteUserAlert "+alertId );
    },

    moveFolder : function(key, fromIndex, toIndex) {
      /*
       * TODO: need to send moved folder with new index, if folder moved up,
       * increment index of folders between old and new position if folder moved
       * down, decrement index of folders between old and new position
       */
    },

    /*
     * @param folderId: FolderID of folder to add to. @param articleObject: JSON
     * object containing the following "FolderID":"53", "Title":"Industrials
     * Jump 400 Insert", "Desc":"Industrials Jump 400 Insert",
     * "URL":"http://online.wsj.com/article/SB122960669336617899.html?articleTab=video",
     * "ContentType":"Video", "ContentID":"SB122960669336617899", // article
     * base_doc_id }
     */
    addArticleToFolder : function(folderId, articleObject, callback, context) {
      if ( !articleObject ) {
        return;
      }
      var name = "AddArticleToFolder";
      var url = this._cfg.serviceUrls.article;

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      articleObject.FolderItemID = "0";
      articleObject.DateAdded = "";
      if ( !articleObject.ContentType ) {
        articleObject.ContentType = "Article";
      }

      var postData = [ articleObject ];

      this._serviceWidget.doPut(name, folderId, url, postData, this.handleAddArticleToFolder, this);

    },

    handleAddArticleToFolder : function(folderId, data) {

      var name = "AddArticleToFolder";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleAddArticleToFolder "+folderId );
    },

    /*
     * @param folderId: FolderID of folder to remove article. @param
     * articleObject: JSON object containing the following "FolderItemID":"53" }
     */
    deleteArticleFromFolder : function(folderId, folderItemId, callback, context) {
      var name = "DeleteArticleFromFolder";
      var url = this._cfg.serviceUrls.article;

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var articleObject = {};
      articleObject.FolderID = folderId;
      articleObject.FolderItemID = folderItemId;
      var postData = [ articleObject ];

      this._serviceWidget.doDelete(name, folderId, url, postData, this.handleDeleteArticleFromFolder, this);

    },

    handleDeleteArticleFromFolder : function(folderId, data) {
      var name = "DeleteArticleFromFolder";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleDeleteArticleFromFolder "+folderId );
    },

    subscribeArticleTypeCounts : function(daysToInclude, callback, context) {
      var name = "ArticleTypeCounts";

      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed(name, "all", this.handleArticleTypeCounts, this);
        this._subscribed[name] = true;
      }

      this.getArticleTypeCounts(daysToInclude);

    },

    handleArticleTypeCounts : function(daysToInclude, data) {
      var name = "ArticleTypeCounts";

      this._dataObserver.fireByName(name, daysToInclude, data);

      // console.log( "handleArticleTypeCounts "+daysToInclude );
    },

    buildArticleTypeDate : function(daysToInclude) {
      var timeframe = 1;
      if ( typeof daysToInclude !== "undefined" ) {
        timeframe = daysToInclude;
      }
      var todaydate = new Date();
      var newDate = new Date(todaydate.getTime() - (timeframe * 24 * 60 * 60 * 1000));
      var dateValue = (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + newDate.getFullYear();

      return dateValue;
    },

    getArticleTypeCounts : function(daysToInclude) {
      var name = "ArticleTypeCounts";

      var url = this._cfg.serviceUrls.articleTypesCount + "/" + this.buildArticleTypeDate(daysToInclude);

      this._serviceWidget.getFeed(name, "all", url);

    },

    reloadArticleTypeCounts : function(daysToInclude) {
      var name = "ArticleTypeCounts";

      var url = this._cfg.serviceUrls.articleTypesCount + "/" + this.buildArticleTypeDate(daysToInclude);

      this._serviceWidget.reloadFeed(name, "all", url, {
        daysToInclude : daysToInclude
      });
    },

    getFolderVisibility : function(id, check) {
      if ( check == "remove" ) {
        this._collVisibility = this._collVisibility.replace(id, "");
      } else {
        this._collVisibility = this._collVisibility.replace(id, "");
        this._collVisibility = this._collVisibility + id;
      }
      if ( this._collVisibility == "Portfolio~" ) {
        if ( dojo.byId("allMojHidden") ) {
          dojo.removeClass(dojo.byId("allMojHidden"), "hidden");
          dojo.addClass(dojo.byId("sort_button"), "hidden");
        }
      }
      return this._collVisibility;
    },

    updatePZNVisibility : function(folderId, check, callback, context) {
      var name = "UpdatePZNVisibility";
      var folderlist = this.getFolderVisibility();
      this._subscribeUpdateObserver(name, callback, context);
      if ( check == "Y" ) {
        folderlist = folderlist.replace(folderId + "~", "");
        folderlist = folderlist + (folderId + "~");
      } else {
        folderlist = folderlist.replace(folderId + "~", "");
      }
      var url = this._cfg.serviceUrls.updateUser; // this._cfg.serviceUrls.userFolders

      var postData = [ {
        "ShowFolder" : folderlist
      } ];

      this._serviceWidget.doPost(name, "all", url, postData, this.handlePZNVisibility, this);
    },

    handlePZNVisibility : function(folderId, data) {
      var name = "UpdatePZNVisibility";
      this._fireUpdateObserver(name, folderId, data);
      this._unsubscribeUpdateObserver(name);

    },

    // Delete all Articles

    deleteAllArticleFromFolder : function(folderId, callback, context) {
      var name = "DeleteAllArticleFromFolder";

      var url = this._cfg.serviceUrls.articles;

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var postData = [ {
        "FolderID" : folderId
      } ];

      this._serviceWidget.doDelete(name, folderId, url, postData, this.handleDeleteAllArticleFromFolder, this);

    },

    handleDeleteAllArticleFromFolder : function(folderId, data) {
      var name = "DeleteAllArticleFromFolder";
      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);
    },

    // Creates a new observer used to handle updates (PUT,POST,DELETE)
    _subscribeUpdateObserver : function(name, callback, context) {

      var updateObserver = this._updateObservers[name];

      if ( !updateObserver ) {
        updateObserver = new _du.Observer();
        this._updateObservers[name] = updateObserver;
        this._updateCallbacks[name] = callback;
        updateObserver.subscribe(callback, context);
      }

    },

    /* Phase 2 - My Saved functions - start */

    /*
     * Add Contacts To Folder Contact Obj:
     * {"FolderID":"48","ContactID":"","FirstName":"","LastName":"","EmailAddress":"miluonline@gmail.com"}
     */
    addContactsToFolder : function(folderId, contactObject, callback, context) {
      if ( !folderId ) {
        return;
      }
      var name = "AddContactsToFolder";
      var url = this._cfg.serviceUrls.modifyFolderContacts;

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var postData = contactObject;

      this._serviceWidget.doPut(name, folderId, url, postData, this.handleAddContactsToFolder, this);

    },

    handleAddContactsToFolder : function(folderId, data) {
      var name = "AddContactsToFolder";
      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);
      // console.log( "handleAddContactsToFolder "+folderId );
    },

    updateFolderContacts : function(folderId, contactObject, callback, context) {

      var name = "UpdateFolderContacts";

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      var url = this._cfg.serviceUrls.modifyFolderContacts;

      contactObject.ContactID = "";
      contactObject.FirstName = "";
      contactObject.LastName = "";

      var postData = [ contactObject ];

      this._serviceWidget.doPost(name, folderId, url, postData, this.handleUpdateFolderContacts, this);

    },

    handleUpdateFolderContacts : function(folderId, data) {
      var name = "UpdateFolderContacts";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleUpdateFolderContacts "+folderId );
    },

    deleteContactsFromFolder : function(folderId, contactObject, callback, context) {
      var name = "DeleteContactsFromFolder";
      var url = this._cfg.serviceUrls.modifyFolderContacts;

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      contactObject.FirstName = "";
      contactObject.LastName = "";

      var postData = contactObject;

      this._serviceWidget.doDelete(name, folderId, url, postData, this.handleDeleteContactsFromFolder, this);

    },

    handleDeleteContactsFromFolder : function(folderId, data) {
      var name = "DeleteContactsFromFolder";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleDeleteContactsFromFolder "+folderId );
    },

    deleteAllContactsFromFolder : function(folderId, callback, context) {
      var name = "DeleteAllContactsFromFolder";
      var url = this._cfg.serviceUrls.folderContacts + folderId + '/Contacts';

      this._subscribeUpdateObserver(name + ":" + folderId, callback, context);

      this._serviceWidget.doDelete(name, folderId, url, "", this.handleDeleteAllContactsFromFolder, this);

    },

    handleDeleteAllContactsFromFolder : function(folderId, data) {
      var name = "DeleteAllContactsFromFolder";

      this._fireUpdateObserver(name + ":" + folderId, folderId, data);
      this._unsubscribeUpdateObserver(name + ":" + folderId);

      // console.log( "handleDeleteAllContactsFromFolder "+folderId );
    },

    subscribeFolderContacts : function(folderId, callback, context) {
      var name = "foldersContacts";
      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed(name, "all", this.handleFolderContacts, this);
        this._subscribed[name] = true;
      }

      this._serviceWidget.getFeed(name, "all", this._cfg.serviceUrls.folderContacts + folderId + '/Contacts');
    },

    handleFolderContacts : function(folderId, data) {
      var name = "foldersContacts";
      this._folderContacts = data;
      this._dataObserver.fireByName(name, data);
    },

    reloadFolderContacts : function(folderId) {
      var name = "foldersContacts";
      this._serviceWidget.reloadFeed(name, "all", this._cfg.serviceUrls.folderContacts + folderId + '/Contacts');
    },

    subscribeAllUserContacts : function(callback, context) {
      var name = "allUserContacts";
      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed(name, "all", this.handleAllUserContacts, this);
        this._subscribed[name] = true;
      }

      this._serviceWidget.getFeed(name, "all", this._cfg.serviceUrls.allUserContacts);
    },

    handleAllUserContacts : function(key, data) {
      var name = "allUserContacts";
      this._allFolderContacts = data;
      this._dataObserver.fireByName(name, data);
    },

    reloadAllUserContacts : function() {
      var name = "allUserContacts";
      this._serviceWidget.reloadFeed(name, "all", this._cfg.serviceUrls.allUserContacts);
    },

    subscribeFrequentUserContacts : function(callback, context) {
      var name = "frequentUserContacts";
      this._dataObserver.subscribeByName(name, callback, context);

      if ( !this._subscribed[name] ) {
        this._serviceWidget.subscribeFeed(name, "all", this.handleFrequentUserContacts, this);
        this._subscribed[name] = true;
      }

      this._serviceWidget.getFeed(name, "all", this._cfg.serviceUrls.frequentUserContacts);
    },

    handleFrequentUserContacts : function(key, data) {
      var name = "frequentUserContacts";
      this._allFolderFreqContacts = data;
      this._dataObserver.fireByName(name, data);
    },

    reloadFrequentUserContacts : function() {
      var name = "frequentUserContacts";
      this._serviceWidget.reloadFeed(name, "all", this._cfg.serviceUrls.frequentUserContacts);
    },

    updateMostRecentView : function(mjView, dockView, callback, context) {

      var name = "UpdateMostRecentView";

      this._subscribeUpdateObserver(name, callback, context);

      var url = this._cfg.serviceUrls.mostRecentSettings;

      var postData = {
        "MJView" : mjView,
        "DockView" : dockView
      };

      this._serviceWidget.doPost(name, "all", url, postData, this.handleUpdateMostRecentView, this);

    },

    handleUpdateMostRecentView : function(data) {
      var name = "UpdateMostRecentView";

      this._fireUpdateObserver(name, data);
      this._unsubscribeUpdateObserver(name);

      // console.log( "handleUpdateMostRecentView "+data );
  },

    // function for Search

    handleSearchClick : function(eventid) {
      var id = eventid;
      var firstInt = id.indexOf(":");

      var secInt = id.indexOf(":", firstInt + 1);
      var lastInt = id.indexOf(":", secInt + 1);

      var _code = id.substring(firstInt + 1, secInt);
      var _id = id.substring(secInt + 1, lastInt);
      var _desc = unescape(id.substring(lastInt + 1));

      var _entityObj = new dj.module.ep.search.SearchEntity( {
        code : _code,
        id : _id,
        description : _desc
      });

      var _contextObj = new dj.module.ep.search.SearchDataBean();
      _contextObj.add(_entityObj);

      var _service = dj.module.ep.search.searchService;
      _service.postQuery(_contextObj);
    },

    getWrappedFolderTitle : function(folderNameStr) {

      var invalidChars = "~?!#$%&*()\"||<>=+;:][{}/\\";
      for ( var count = 0, len = invalidChars.length; count < len; count++) {
        var badChar = invalidChars.charAt(count);
        if ( folderNameStr.indexOf(badChar, 0) > -1 ) {
          return folderNameStr;
        }
      }

      var folderNameSplit = folderNameStr.split(" ");
      var tempStr = "";
      for (i = 0; i < folderNameSplit.length; i++) {
        if ( folderNameSplit[i].length > 15 ) {
          if ( tempStr != "" ) {
            tempStr = tempStr + " " + folderNameSplit[i].substring(0, 15) + "-<br/>"
                + folderNameSplit[i].substring(15, folderNameSplit[i].length);
          } else {
            tempStr = folderNameSplit[i].substring(0, 15) + "-<br/>"
                + folderNameSplit[i].substring(15, folderNameSplit[i].length);
          }
        } else {
          if ( tempStr != "" ) {
            tempStr = tempStr + " " + folderNameSplit[i];
          } else {
            tempStr = folderNameSplit[i];
          }
        }
      }

      if ( tempStr !== "" ) {
        folderNameStr = tempStr;
      }

      return folderNameStr;

    },

    /* Phase 2 - My Saved functions - end */

    _fireUpdateObserver : function(name) {

      var updateObserver = this._updateObservers[name];

      if ( updateObserver ) {
        var fireParams = [];
        for ( var i = 1, arg, len = arguments.length; i < len; i++) {
          fireParams.push(arguments[i]);
        }
        updateObserver.fire.apply(updateObserver, fireParams);
      }
    },

    _unsubscribeUpdateObserver : function(name) {

      this._updateObservers[name] = null;

    },

    // function for Search

    searchDeepDiveCompanies : function(code, id, desc, metadata, query) {

      var _entityObj = null;
      if ( id != null || id != undefined ) {
        _entityObj = this.getCompEntityObj(code, id, unescape(desc));
      }
      var _contextObj = new dj.module.ep.search.SearchDataBean( {
        baselineQuery : unescape(query),
        baselineQueryMetaData : metadata,
        sortbyValue : dj.module.ep.search.SearchDataBean.searchConstants.sortbyArrivalTime,
        searchType : dj.module.ep.search.SearchDataBean.searchConstants.deepDive,
        queryType : dj.module.ep.search.SearchDataBean.searchConstants.simpleTraditionalQuery
      });
      if ( id != null || id != undefined ) {
        _contextObj.add(_entityObj);
      }

      var _service = dj.module.ep.search.searchService;
      _service.postQuery(_contextObj);

    },

    getCompEntityObj : function(code, id, desc) {
      var _entityObj = new dj.module.ep.search.SearchEntity( {
        code : code,
        id : id,
        description : desc
      });
      return _entityObj;
    }

  };

  // Instantiate singleton service instance of this widget here.
  dj.service.dashboard.DashboardFolderService = new _dwd.DashboardFolderService();

}());
dojo.provide("dj.widget.dashboard.DashboardSaveTo");

dojo.require("dj.service.dashboard.DashboardFolderService");
dojo.require("dj.service.dashboard.DashboardPZNServiceFactory");
dojo.require("dj.util.Element");
dojo.require("dj.util.Query");
dojo.require("dj.util.User");

dojo.getObject("dj.module.dashboard", true);

/**
 * @author namballas
 * @author cooksonl - removed all Prototype usage
 */

/* global dj, dojo */

(function() {

  var _dwd = dj.widget.dashboard;
  var _dsd = dj.service.dashboard;

  // --- DashboardSaveTo ---

  (_dwd.DashboardSaveTo = function(id, cfg) {
    this._cfg = dj.lang.cloneMixin(this.DEFAULT_CONFIG, cfg);
    this._id = null;
    this._serviceWidget = null;

    if ( typeof id !== "undefined" ) {
      this.id = id;
    }

    this.initServices();

    this._dud = dj.util.dashboard;

  }).prototype = {

    DEFAULT_CONFIG : {
      mjSaveToWidgetInstance : "Article",
      mjSaveToWidgetArticle : "Article",
      mjSaveToWidgetSearch : "Search",
      mjSaveToWidgetMJLanding : "MyJournalLanding",
      mjSaveToWidgetMJDetails : "MyJournalDetails",
      mjLandingContBlock : "mjReorderContainer",
      mjDetailsContBlock : "hideArticlesDiv",
      mjDockBarBlock : "pmDock",
      mjDockBarContBlock : ".cnt_DockbarClass",
      mjSearchPremiumContBlock : "djsResultsPanel",
      mjSearchContBlock : "ARTICLESEARCHRESULTS",
      mjAtagsLookUpBlock : "document",
      mjQuickSaveLookUpClass : "mjQuickSave",
      mjMoreLookUpClass : "mjDropdown",
      mjNewCollectionDefaultText : "My New Collection",
      mjListCollectionMode : "list",
      mjNewCollectionMode : "new",
      mjNewFolderCreatedMode : "newFolderCreated",
      mjSaveCollectionMode : "save",
      mjLoginCollectionMode : "login",
      mjSaveDropdownMainBlock : "mjsave_dropdown_block",
      mjMoreLink : "widget.mjsave_more",
      mjMoreSaveThisLink : "widget.mjsave_more_savethis",
      mjMoreSavedLink : "widget.mjsave_more_saved",
      mjQuickSaveLink : "widget.mjsave_quicksave",
      mjQuickSaveThisLink : "widget.mjsave_quicksave_savethis",
      mjQuickSaveSavedLink : "widget.mjsave_saved",
      mjItemBlock : ".mjItemMain",
      mjItemLink : ".mjLinkItem",
      mjItemDesc : ".mjItemDesc",
      mjItemDate : ".mjItemDate",
      mjItemSource : ".mjItemSource",
      mjItemSourceCode : ".mjItemSourceCode",
      mjSaveDropdownCollList : "mjsave_mycoll_collection_list",
      mjUserCollectionType : "User",
      mjSystemCollectionType : "System",
      mjSaveToPrefix : "saveToFolder#",
      mjSaveError : "mjsave_error",
      mjsaveNewCollSubmit : "mjsaveNewCollSubmit",
      mjsaveNewCollCancel : "mjsaveNewCollCancel",
      mjAddCollLink : "mjsave_addcoll_link",
      mjNewCollField : "new-collection",
      mjSaveToNewPromoText : "mjsave_promotext",
      mjSiteWideDock : "false"

    },

    initServices : function() {
      _dsd.DashboardPZNServiceFactory.getPZNServiceInstance(this.initialize, this);
    },

    initialize : function(_pznServiceWidget) {

      this._pznServiceWidget = (_pznServiceWidget) ? _pznServiceWidget : _dsd.DashboardPZNService;

      this._serviceWidget = _dsd.DashboardFolderService;
      this._pagePathValue = this._pznServiceWidget.getPagePathValue();

      this.initialLoad = true;
      this.selfReloadDone = "false";

      // IF INTRO PAGE ONLY SETUP LOGIN / REGISTER
      if ( this._cfg.mjSaveToWidgetInstance === "IntroMJ" || this._cfg.mjSaveToWidgetInstance === "IntroSaved" ) {

        var that = this;
        dj.util.User.isLoggedIn(function(isLoggedIn) {
          if ( !isLoggedIn ) {
            that.setupLoginOrRegister(that._cfg.mjSaveToWidgetInstance);
          }
        });
        return;
      }

      if ( window.location.href.indexOf("/article/") !== -1 ) {

        this._cfg.mjSaveToWidgetInstance = this._cfg.mjSaveToWidgetArticle;
        this._cfg.mjSiteWideDock = "false";

      } else if ( window.location.href.indexOf("/my-") !== -1 || window.location.href.indexOf("/mj-") !== -1 ) {
        this._cfg.mjSiteWideDock = "false";

        if ( window.location.href.indexOf("my-journal-main") !== -1 ) {
          this._cfg.mjSaveToWidgetInstance = this._cfg.mjSaveToWidgetMJLanding;
        }

      }

      if ( this._cfg.mjSiteWideDock === "false" ) {
        this.setUpSaveToObservers();
      } else {
        this.setUpSaveToObservers(dojo.byId(this._cfg.mjDockBarBlock));
      }

      var that = this;
      dj.util.User.isLoggedIn(function(isLoggedIn) {
        if ( isLoggedIn ) {

          that.setupNewCollectionObservers();

        } else {

          that.setupLoginOrRegister();

        }

      });

      this.oMjSaveDropDownContainer = dojo.byId(this._cfg.mjSaveDropdownMainBlock);

      // Close the dropdown when a click happens outside the
      // mjsave_dropdown_block
      dojo.connect(document, "onclick", this, function(event) {

        if ( this.oMjSaveDropDownContainer.innerHTML !== "" ) {
          var isMousePointerinModalContainer = dj.util.Element.contains(this.oMjSaveDropDownContainer,
              event.clientX,
              event.clientY);

          if ( isMousePointerinModalContainer == false ) {
            this.restoreDefaultState();
          }
        }

      });

      if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetArticle ) {
        dj.module.articleTabs.panels.addChangeListener("success", function() {
          this.restoreDefaultState();
        }, this);
      }

    },

    setUpSaveToObservers : function(containerNode) {

      if ( (window.location.href.indexOf("/professional-search/") !== -1 || window.location.href
          .indexOf("/professional-industry/") !== -1)
          && containerNode !== dojo.byId(this._cfg.mjDockBarBlock) ) {
        return;
      }

      var startPoint = eval(this._cfg.mjAtagsLookUpBlock);

      if ( containerNode ){startPoint = containerNode;}

      var tdTags = dojo.query("td", startPoint);

      if ( dojo.isIE < 7 ) {
        if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding ) {

          var divTags = dojo.query("div", startPoint);

          for ( var i = 0; i < divTags.length; i++) {

            if ( divTags[i].className.indexOf("newsFunc") !== -1 ) {
              this.divTag = divTags[i];

              // Close the dropdown when a click happens outside the
              // mjsave_dropdown_block
              var divtag = dojo.byId(this.divTag);
              dojo.connect(divtag, "mouseover", this, function(event) {

                dojo.stopEvent(event);

                if ( window.event ) {
                  var srcElement = window.event.srcElement;
                } else {
                  var srcElement = event.currentTarget;
                }

                if ( dojo.byId(this._cfg.mjLandingContBlock) ) {
                  var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjLandingContBlock);
                } else {
                  var possibleContainers = dojo.query(this._cfg.mjItemBlock);
                }

                var currentSavedItemContainer = "";
                var i = 0;
                while (possibleContainers[i]) {

                  if ( dojo.isDescendant(srcElement, possibleContainers[i]) ) {
                    currentSavedItemContainer = possibleContainers[i];
                    break;
                  }

                  ++i;
                }

                if ( currentSavedItemContainer !== "" ) {
                  var saveToObjMouseOver = dojo.query(".dropdown_container", currentSavedItemContainer)[0];
                }

                if ( typeof saveToObjMouseOver !== "undefined" ) {

                  if ( dojo.hasClass(saveToObjMouseOver, "IE6ddStandardCollapsed-hover") ) {
                    dojo.removeClass(saveToObjMouseOver, "IE6ddStandardCollapsed-hover");
                  }

                  if ( dojo.hasClass(saveToObjMouseOver, "IE6ddStandardCollapsed") ) {
                    dojo.removeClass(saveToObjMouseOver, "IE6ddStandardCollapsed");
                  }

                  dojo.addClass(saveToObjMouseOver, "IE6ddStandardCollapsed-hover");

                }
              });

              // Close the dropdown when a click happens outside the
              // mjsave_dropdown_block
              var div = dojo.byId(this.divtag);
              dojo.connect(div, "onmouseout", this, function(event) {

                dojo.stopEvent(event);

                if ( window.event ) {
                  var srcElement = window.event.srcElement;
                } else {
                  var srcElement = event.currentTarget;
                }

                if ( dojo.byId(this._cfg.mjLandingContBlock) ) {
                  var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjLandingContBlock);
                } else {
                  var possibleContainers = dojo.query(this._cfg.mjItemBlock);
                }

                var currentSavedItemContainer = "";
                var i = 0;
                while (possibleContainers[i]) {

                  if ( dojo.isDescendant(srcElement, possibleContainers[i]) ) {
                    currentSavedItemContainer = possibleContainers[i];
                    break;
                  }

                  ++i;
                }

                if ( currentSavedItemContainer !== "" ) {
                  var saveToObjMouseOut = dojo.query(".dropdown_container", currentSavedItemContainer)[0];
                }

                if ( typeof saveToObjMouseOut !== "undefined" ) {

                  if ( dojo.hasClass(saveToObjMouseOut, "IE6ddStandardCollapsed-hover") ) {
                    dojo.removeClass(saveToObjMouseOut, "IE6ddStandardCollapsed-hover");
                  }
                  if ( !dojo.hasClass(saveToObjMouseOut, "IE6ddStandardCollapsed") ) {
                    dojo.addClass(saveToObjMouseOut, "IE6ddStandardCollapsed");
                  }

                }
              });

            }
          }
        }
      }

      if ( dojo.isIE < 7 ) {
        if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding
            || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails ) {

          for ( var i = 0; i < tdTags.length; i++) {

            if ( tdTags[i].className.indexOf("mjArticleAction") !== -1 ) {
              this.tdTag = tdTags[i];

              if ( this.tdTag && this.tdTag.innerHTML !== "" ) {

                // Close the dropdown when a click happens outside the
                // mjsave_dropdown_block
                var td = dojo.byId(this.tdTag);
                dojo.connect(td, "onmouseover", this, function(event) {

                  dojo.stopEvent(event);

                  if ( window.event ) {
                    var srcElement = window.event.srcElement;
                  } else {
                    var srcElement = event.currentTarget;
                  }

                  // DISTINGUISH SEARCH PAGE VS DETAILS PAGE VS LANDING
                    // PAGE
                    if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetSearch ) {
                      var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjSearchContBlock);
                    } else if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetMJLanding ) {
                      var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjLandingContBlock);
                    } else if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetMJDetails ) {
                      var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjDetailsContBlock);
                    }

                    var currentSavedItemContainer = "";
                    var i = 0;
                    while (possibleContainers[i]) {

                      if ( dojo.isDescendant(srcElement, possibleContainers[i]) ) {
                        currentSavedItemContainer = possibleContainers[i];
                        break;
                      }

                      ++i;
                    }

                    if ( currentSavedItemContainer !== "" ) {
                      var saveToObjMouseOver = dojo.query(".dropdown_container", currentSavedItemContainer)[0];
                    }
                    if ( typeof saveToObjMouseOver !== "undefined" ) {
                      if ( dojo.hasClass(saveToObjMouseOver, "IE6ddStandardCollapsed-hover") ) {
                        dojo.removeClass(saveToObjMouseOver, "IE6ddStandardCollapsed-hover");
                      }

                      if ( dojo.hasClass(saveToObjMouseOver, "IE6ddStandardCollapsed") ) {
                        dojo.removeClass(saveToObjMouseOver, "IE6ddStandardCollapsed");
                      }
                      dojo.addClass(saveToObjMouseOver, "IE6ddStandardCollapsed-hover");
                    }
                  });

                // Close the dropdown when a click happens outside the
                // mjsave_dropdown_block
                var td = dojo.byId(this.tdTag);
                dojo.connect(td, "onmouseout", this, function(event) {

                  dojo.stopEvent(event);

                  if ( window.event ) {
                    var srcElement = window.event.srcElement;
                  } else {
                    var srcElement = event.currentTarget;
                  }

                  // DISTINGUISH SEARCH PAGE VS DETAILS PAGE VS LANDING
                    // PAGE
                    if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetSearch ) {
                      var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjSearchContBlock);
                    } else if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetMJLanding ) {
                      var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjLandingContBlock);
                    } else if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetMJDetails ) {
                      var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjDetailsContBlock);
                    }

                    var currentSavedItemContainer = "";
                    var i = 0;
                    while (possibleContainers[i]) {

                      if ( dojo.isDescendant(srcElement, possibleContainers[i]) ) {
                        currentSavedItemContainer = possibleContainers[i];
                        break;
                      }

                      ++i;
                    }

                    if ( currentSavedItemContainer !== "" ) {
                      var saveToObjMouseOut = dojo.query(".dropdown_container", currentSavedItemContainer)[0];
                    }

                    if ( typeof saveToObjMouseOut !== "undefined" ) {
                      if ( dojo.hasClass(saveToObjMouseOut, "IE6ddStandardCollapsed-hover") ) {
                        dojo.removeClass(saveToObjMouseOut, "IE6ddStandardCollapsed-hover");
                      }
                      if ( !dojo.hasClass(saveToObjMouseOut, "IE6ddStandardCollapsed") ) {
                        dojo.addClass(saveToObjMouseOut, "IE6ddStandardCollapsed");
                      }
                    }
                  });

              }
            }
          }
        }
      }

      // For all instances except search use manual observer init
      if ( window.location.href.indexOf("/professional-search/") === -1
          && window.location.href.indexOf("/professional-industry/") === -1 ) {

        var aTags = dojo.query("a", startPoint);

        for ( var i = 0; i < aTags.length; i++) {

          if ( aTags[i].className.indexOf(this._cfg.mjQuickSaveLookUpClass) !== -1 ) {
            this.aTag = aTags[i];

            dojo
                .connect(
                    this.aTag,
                    "onclick",
                    this,
                    function(event) {
                      dojo.stopEvent(event);

                      if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetArticle ) {
                        var sharedrpDwn = dojo.query(".dropdownType-share")[0];
                        if ( typeof sharedrpDwn !== "undefined" ) {
                          dojo.addClass(sharedrpDwn, "collapsed");
                          dojo.removeClass(sharedrpDwn, "expanded");
                        }
                      }

                      if ( window.event ) {
                        var srcElement = window.event.srcElement;
                      } else {
                        var srcElement = event.currentTarget;
                      }

                      var saveToObj = srcElement.offsetParent;

                      if ( dojo.isIE === 7 ) {
                        saveToObj = srcElement.offsetParent.offsetParent.offsetParent;
                      }

                      if ( dojo.isIE < 7
                          || (dojo.isIE === 7 && this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetSearch) ) {
                        saveToObj = srcElement.offsetParent.offsetParent.offsetParent.offsetParent;
                      }

                      this.dockbarInstance = false;
                      this.searchPremiumInstance = false;

                      if ( (dojo.query(this._cfg.mjDockBarContBlock).length > 0)
                          && dojo.isDescendant(saveToObj, dojo.query(this._cfg.mjDockBarContBlock)[0]) ) {
                        this.dockbarInstance = true;
                      } else if ( dojo.byId(this._cfg.mjSearchPremiumContBlock)
                          && dojo.isDescendant(saveToObj, dojo.query(this._cfg.mjSearchPremiumContBlock)[0]) ) {
                        this.searchPremiumInstance = true;
                      }

                      // Special handlig for Most Recent module in IE6
                      if ( (this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails)
                          && dojo.isIE <= 8 ) {

                        var possibleContainers = dojo.query(this._cfg.mjItemBlock);

                        var currentSavedItemContainer = "";
                        var i = 0;
                        while (possibleContainers[i]) {

                          currentSavedItemContainer = possibleContainers[i];
                          if ( dojo.isDescendant(saveToObj, currentSavedItemContainer) ) {
                            if ( !dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                              dojo.addClass(currentSavedItemContainer, "hasDropdown");
                            }
                          } else {
                            if ( dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                              dojo.removeClass(currentSavedItemContainer, "hasDropdown");
                            }
                          }
                          ++i;
                        }

                      }

                      // If on MJ pages just toggle on Click of Save To...
                      // instead of Quick Save
                      if ( (this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding
                          || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails
                          || this.collectionMode === this._cfg.mjLoginCollectionMode || this.dockbarInstance)
                          && !this.searchPremiumInstance ) {

                        if ( this.collectionMode !== this._cfg.mjLoginCollectionMode ) {
                          if ( this.initialLoad ) {
                            this.setupSaveToCollectionList();
                            this.initialLoad = false;
                          }
                        }
                        this.quickSaveModeBlk = false;
                        this.superImposeBlock(saveToObj, "false");

                      } else {
                        this.currQuickSaveObj = saveToObj;
                        this.quickSaveModeBlk = true;
                        if ( this.initialLoad ) {
                          this.setupSaveToCollectionList();
                          this.initialLoad = false;
                        } else {
                          this.superImposeBlock(this.currQuickSaveObj, "true");
                        }

                      }

                    });
          }

          if ( aTags[i].className.indexOf(this._cfg.mjMoreLookUpClass) !== -1 ) {
            this.aTag = aTags[i];
            dojo
                .connect(
                    this.aTag,
                    "onclick",
                    this,
                    function(event) {
                      dojo.stopEvent(event);

                      this.quickSaveModeBlk = false;

                      if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetArticle ) {
                        var sharedrpDwn = dojo.query(".dropdownType-share")[0];
                        if ( typeof sharedrpDwn !== 'undefined' ) {
                          dojo.addClass(sharedrpDwn, 'collapsed');
                          dojo.removeClass(sharedrpDwn, 'expanded');
                        }
                      }

                      if ( this.collectionMode !== this._cfg.mjLoginCollectionMode ) {
                        if ( this.initialLoad ) {
                          this.setupSaveToCollectionList();
                          this.initialLoad = false;
                        }
                      }

                      if ( window.event ) {
                        var srcElement = window.event.srcElement;
                      } else {
                        var srcElement = event.currentTarget;
                      }

                      var moreObj = srcElement.offsetParent;

                      if ( dojo.isIE === 7 ) {
                        moreObj = srcElement.offsetParent.offsetParent.offsetParent;
                      }

                      if ( dojo.isIE < 7
                          || (dojo.isIE === 7 && this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetSearch) ) {
                        moreObj = srcElement.offsetParent.offsetParent.offsetParent.offsetParent;
                      }

                      this.dockbarInstance = false;
                      this.searchPremiumInstance = false;

                      if ( (dojo.query(this._cfg.mjDockBarContBlock).length > 0)
                          && dojo.isDescendant(moreObj, dojo.query(this._cfg.mjDockBarContBlock)[0]) ) {
                        this.dockbarInstance = true;
                      } else if ( dojo.byId(this._cfg.mjSearchPremiumContBlock)
                          && dojo.isDescendant(moreObj, this._cfg.mjSearchPremiumContBlock) ) {
                        this.searchPremiumInstance = true;
                      }

                      // Special handlig for Most Recent module in IE6
                      if ( (this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails)
                          && dojo.isIE <= 8 ) {

                        var possibleContainers = dojo.query(this._cfg.mjItemBlock);

                        var currentSavedItemContainer = "";
                        var i = 0;
                        while (possibleContainers[i]) {

                          currentSavedItemContainer = possibleContainers[i];
                          if ( dojo.isDescendant(moreObj, currentSavedItemContainer) ) {
                            if ( !dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                              dojo.addClass(currentSavedItemContainer, "hasDropdown");
                            }
                          } else {
                            if ( dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                              dojo.removeClass(currentSavedItemContainer, "hasDropdown");
                            }
                          }

                          ++i;
                        }

                      }

                      this.superImposeBlock(moreObj, "false");
                    });
          }

        }

      } else {

        dj.lang
            .addLiveEvent(
                ".mjQuickSave",
                "click",
                function(ev) {

                  dojo.stopEvent(ev);

                  if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetArticle ) {
                    var sharedrpDwn = dojo.query(".dropdownType-share")[0];
                    if ( typeof sharedrpDwn !== 'undefined' ) {
                      dojo.addClass(sharedrpDwn, 'collapsed');
                      dojo.removeClass(sharedrpDwn, 'expanded');
                    }
                  }

                  var srcElement = (ev.target || ev.srcElement);

                  var saveToObj = srcElement.offsetParent;
                  if ( dojo.isIE === 7 ) {
                    saveToObj = srcElement.offsetParent.offsetParent.offsetParent;
                  }

                  this.dockbarInstance = false;
                  this.searchPremiumInstance = false;

                  if ( (dojo.query(this._cfg.mjDockBarContBlock).length > 0)
                      && dojo.isDescendant(saveToObj, dojo.query(this._cfg.mjDockBarContBlock)[0]) ) {
                    this.dockbarInstance = true;
                  } else if ( dojo.byId(this._cfg.mjSearchPremiumContBlock)
                      && dojo.isDescendant(saveToObj, this._cfg.mjSearchPremiumContBlock) ) {
                    this.searchPremiumInstance = true;
                  }

                  if ( this.searchPremiumInstance ) {
                    if ( dojo.isIE < 7 ) {
                      saveToObj = srcElement.offsetParent.offsetParent.offsetParent.offsetParent;
                    }
                  }

                  // Special handlig for Most Recent module in IE6
                  if ( (this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails)
                      && dojo.isIE <= 8 ) {

                    var possibleContainers = dojo.query(this._cfg.mjItemBlock);

                    var currentSavedItemContainer = "";
                    var i = 0;
                    while (possibleContainers[i]) {

                      currentSavedItemContainer = possibleContainers[i];
                      if ( dojo.isDescendant(saveToObj, currentSavedItemContainer) ) {
                        if ( !dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                          dojo.addClass(currentSavedItemContainer, "hasDropdown");
                        }
                      } else {
                        if ( dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                          dojo.removeClass(currentSavedItemContainer, "hasDropdown");
                        }
                      }
                      ++i;
                    }

                  }

                  // If on MJ pages just toggle on Click of Save To... instead
                  // of
                  // Quick Save
                  if ( (this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding
                      || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails
                      || this.collectionMode === this._cfg.mjLoginCollectionMode || this.dockbarInstance)
                      && !this.searchPremiumInstance ) {

                    if ( this.collectionMode !== this._cfg.mjLoginCollectionMode ) {
                      if ( this.initialLoad ) {
                        this.setupSaveToCollectionList();
                        this.initialLoad = false;
                      }
                    }
                    this.quickSaveModeBlk = false;
                    this.superImposeBlock(saveToObj, "false");

                  } else {
                    this.currQuickSaveObj = saveToObj;
                    this.quickSaveModeBlk = true;
                    if ( this.initialLoad ) {
                      this.setupSaveToCollectionList();
                      this.initialLoad = false;
                    } else {
                      this.superImposeBlock(this.currQuickSaveObj, "true");
                    }

                  }

                }, this);

        dj.lang
            .addLiveEvent(
                ".mjDropdown",
                "click",
                function(ev) {

                  dojo.stopEvent(ev);

                  this.quickSaveModeBlk = false;

                  if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetArticle ) {
                    var sharedrpDwn = dojo.query(".dropdownType-share")[0];
                    if ( typeof sharedrpDwn !== 'undefined' ) {
                      dojo.addClass(sharedrpDwn, 'collapsed');
                      dojo.removeClass(sharedrpDwn, 'expanded');
                    }
                  }

                  if ( this.collectionMode !== this._cfg.mjLoginCollectionMode ) {
                    if ( this.initialLoad ) {
                      this.setupSaveToCollectionList();
                      this.initialLoad = false;
                    }
                  }

                  var srcElement = (ev.target || ev.srcElement);

                  var moreObj = srcElement.offsetParent;

                  if ( dojo.isIE === 7 ) {
                    moreObj = srcElement.offsetParent.offsetParent.offsetParent;
                  }

                  this.dockbarInstance = false;
                  this.searchPremiumInstance = false;

                  if ( (dojo.query(this._cfg.mjDockBarContBlock).length > 0)
                      && dojo.isDescendant(moreObj, dojo.query(this._cfg.mjDockBarContBlock)[0]) ) {
                    this.dockbarInstance = true;
                  } else if ( dojo.byId(this._cfg.mjSearchPremiumContBlock)
                      && dojo.isDescendant(moreObj, dojo.byId(this._cfg.mjSearchPremiumContBlock)) ) {
                    this.searchPremiumInstance = true;
                  }

                  if ( this.searchPremiumInstance ) {
                    if ( dojo.isIE < 7 ) {
                      moreObj = srcElement.offsetParent.offsetParent.offsetParent.offsetParent;
                    }
                  }

                  // Special handlig for Most Recent module in IE6
                  if ( (this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJLanding || this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails)
                      && dojo.isIE <= 8 ) {

                    var possibleContainers = dojo.query(this._cfg.mjItemBlock);

                    var currentSavedItemContainer = "";
                    var i = 0;
                    while (possibleContainers[i]) {

                      currentSavedItemContainer = possibleContainers[i];
                      if ( dojo.isDescendant(moreObj, currentSavedItemContainer) ) {
                        if ( !dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                          dojo.addClass(currentSavedItemContainer, "hasDropdown");
                        }
                      } else {
                        if ( dojo.hasClass(currentSavedItemContainer, "hasDropdown") ) {
                          dojo.removeClass(currentSavedItemContainer, "hasDropdown");
                        }
                      }

                      ++i;
                    }

                  }

                  this.superImposeBlock(moreObj, "false");

                }, this);

      } // end live event based observer init

    },

    toggleSaveToDropdown : function(saveToObj, saveToShowClass, saveToHideClass) {

      if ( saveToObj ) {
        if ( dojo.hasClass(saveToObj, saveToHideClass) ) {
          dojo.removeClass(saveToObj, saveToHideClass);
        }
        if ( !dojo.hasClass(saveToObj, saveToShowClass) ) {
          dojo.addClass(saveToObj, saveToShowClass);
        }
      }

    },

    toggleSaveToPanel : function(saveToShowClass) {

      this.saveToPanelObj = dojo.byId("saveToDropdownPanel");

      if ( !dojo.hasClass(this.saveToPanelObj, saveToShowClass) ) {
        dojo.addClass(this.saveToPanelObj, saveToShowClass);
      }

      if ( saveToShowClass === "ddPanelState-MyCollections" ) {
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-NewCollection");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-SaveConfirmation");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-Login");
        dojo.removeClass(this.saveToPanelObj, "errorDisplay-On");

      } else if ( saveToShowClass === "ddPanelState-NewCollection" ) {
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-MyCollections");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-SaveConfirmation");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-Login");
        dojo.removeClass(this.saveToPanelObj, "errorDisplay-On");
      } else if ( saveToShowClass === "ddPanelState-SaveConfirmation" ) {
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-NewCollection");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-MyCollections");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-Login");
        dojo.removeClass(this.saveToPanelObj, "errorDisplay-On");
      } else if ( saveToShowClass === "ddPanelState-Login" ) {
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-NewCollection");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-SaveConfirmation");
        dojo.removeClass(this.saveToPanelObj, "ddPanelState-MyCollections");
        dojo.removeClass(this.saveToPanelObj, "errorDisplay-On");
      } else if ( saveToShowClass === "errorDisplay-On" ) {
        dojo.addClass(this.saveToPanelObj, saveToShowClass);
      } else if ( saveToShowClass === "errorDisplay-Off" ) {
        dojo.removeClass(this.saveToPanelObj, saveToShowClass);
      }

    },

    superImposeBlock : function(parentObj, quickSaveMode) {

      this.selfReloadDone = "false";
      this.actualTargetObj = parentObj.parentNode;
      this.currentPanelObj = dj.util.Query.next(parentObj);
      // element.nextSibling works, but may be whitespace text node.

      if ( this.collectionMode !== this._cfg.mjLoginCollectionMode ) {
        if ( quickSaveMode !== "true" ) {

          if ( this.collectionMode !== this._cfg.mjLoginCollectionMode ) {
            if ( this.collectionMode === this._cfg.mjNewFolderCreatedMode ) {
              this.setupSaveToCollectionList();
            }
          }

          if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails ) {
            this.closeDeletePopUps();
          }

        } else {
          var qsFolderId = this.quickSaveFolderId;
          this.userSaveToExistingCollSave("", qsFolderId);

        }
      }

      if ( typeof this.mjDynamicWidgetObj === 'undefined' ) {
        this.mjDynamicWidgetObj = dojo.byId(this._cfg.mjSaveDropdownMainBlock);
        this.prevMJObj = dojo.clone(this.mjDynamicWidgetObj);
      } else {
        if ( this.mjDynamicWidgetObj.innerHTML === "" ) {
          var mjSaveDiv = document.createElement('div');
          mjSaveDiv.id = this._cfg.mjSaveDropdownMainBlock;
          mjSaveDiv.className = 'dropdown_container dropdownType-standard expanded';
          mjSaveDiv.innerHTML = this.prevMJObj.innerHTML;
          document.body.appendChild(mjSaveDiv);
          this.mjDynamicWidgetObj = dojo.byId(this._cfg.mjSaveDropdownMainBlock);
          this.setupCollectionObservers();
          this.oMjSaveDropDownContainer = this.mjDynamicWidgetObj;
        }
      }

      var dynamicWidgetParent = this.mjDynamicWidgetObj.parentNode;
      if ( dynamicWidgetParent !== null ) {
        dynamicWidgetParent.removeChild(this.mjDynamicWidgetObj);
      }
      if ( this.mjDynamicWidgetObj.innerHTML === "" ) {
        this.currentPanelObj.appendChild(mjSaveDiv);
      } else {
        this.currentPanelObj.appendChild(this.mjDynamicWidgetObj);
      }

      if ( this.collectionMode === this._cfg.mjLoginCollectionMode ) {
        this.toggleSaveToPanel("ddPanelState-Login");
      } else if ( quickSaveMode === "true" ) {
        this.toggleSaveToPanel("ddPanelState-SaveConfirmation");
      } else {
        this.toggleSaveToPanel("ddPanelState-MyCollections");
      }

      if ( typeof this.lastAccessedId == 'undefined' ) {
        this.lastAccessedId = this.actualTargetObj;
      } else if ( this.lastAccessedId !== this.actualTargetObj ) {
        this.restoreDefaultState(this.lastAccessedId);
        this.lastAccessedId = this.actualTargetObj;
      }

      this.toggleSaveToDropdown(this.actualTargetObj, "ddState-expanded", "ddState-collapsed");
      var quickSaveCaseType = this._cfg.mjQuickSaveLink;
      var moreCaseType = this._cfg.mjMoreLink;

      if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetArticle
          || this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetSearch || this.searchPremiumInstance ) {
        quickSaveCaseType = this._cfg.mjQuickSaveThisLink;
        moreCaseType = this._cfg.mjMoreSaveThisLink;
        if ( quickSaveMode !== "true" ) {
          this.toggleSaveToBar('ddState-saveThis');
        } else {
          this.toggleSaveToBar('ddState-saved');
        }
      } else {
        this.toggleSaveToBar('ddState-saveTo');
      }
      if ( quickSaveMode === "true" ) {
        quickSaveCaseType = this._cfg.mjQuickSaveSavedLink;
        moreCaseType = this._cfg.mjMoreSavedLink;
      }

      this.widgetQuickSaveObj = eval(document.getElementById(quickSaveCaseType));
      this.widgetMoreObj = eval(document.getElementById(moreCaseType));

      if ( !this.quickSaveModeBlk ) {

        dojo.connect(this.widgetMoreObj, "onclick", this, function(ev) {
          dojo.stopEvent(ev);
          this.alreadyClosed = true;
          this.defaultSuperImposeAndClose();

          if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails ) {
            this.closeDeletePopUps();
          }

        });

        dojo.connect(this.widgetQuickSaveObj, "onclick", this, function(ev) {
          dojo.stopEvent(ev);
          this.alreadyClosed = true;
          this.defaultSuperImposeAndClose();

          if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails ) {
            this.closeDeletePopUps();
          }
        });

      } else {

        dojo.connect(this.widgetQuickSaveObj, "onclick", this, function(ev) {
          dojo.stopEvent(ev);

          this.restoreDefaultState();

          if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails ) {
            this.closeDeletePopUps();
          }
        });

        dojo.connect(this.widgetMoreObj, "onclick", this, function(ev) {
          dojo.stopEvent(ev);
          this.restoreDefaultState();

          if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails ) {
            this.closeDeletePopUps();
          }

        });

      }

      this.currentSaveToInstance();
    },

    toggleSaveToBar : function(saveBarClass) {

      this.saveToBarObj = dojo.byId("saveToTopBar");

      if ( !dojo.hasClass(this.saveToBarObj, saveBarClass) ) {
        dojo.addClass(this.saveToBarObj, saveBarClass);
      }

      if ( saveBarClass === "ddState-saveTo" ) {
        dojo.removeClass(this.saveToBarObj, "ddState-saveThis");
        dojo.removeClass(this.saveToBarObj, "ddState-saved");
      } else if ( saveBarClass === "ddState-saveThis" ) {
        dojo.removeClass(this.saveToBarObj, "ddState-saveTo");
        dojo.removeClass(this.saveToBarObj, "ddState-saved");
      } else if ( saveBarClass === "ddState-saved" ) {
        dojo.removeClass(this.saveToBarObj, "ddState-saveTo");
        dojo.removeClass(this.saveToBarObj, "ddState-saveThis");
      }
    },

    defaultSuperImposeAndClose : function(checkClosed) {

      if ( !checkClosed || checkClosed && !this.alreadyClosed ) {
        this.restoreDefaultState();
        if ( checkClosed ) {
          this.alreadyClosed = true;
        }
      }
    },

    currentSaveToInstance : function() {

      if ( this._cfg.mjSaveToWidgetInstance !== this._cfg.mjSaveToWidgetSearch ) {
        if ( typeof this.saveToAdBox === 'undefined' ) {
          this.saveToAdBox = dojo.byId('SaveToSponsorBox');
        }
        if ( this.saveToAdBox ) {
          if ( this.saveToAdBox.innerHTML === "" ) {
            // Un-comment when ads are to be supported along with ad
            // configuration
            // new dj.util.Ads().loadAds("saveToAd");
            // dojo.addClass(this.saveToAdBox, "adUnit");
          }
        }
      }

    },

    closeDeletePopUps : function() {

      var startPoint = dojo.byId("hideArticlesDiv");
      if ( startPoint ) {
        var divTags = dojo.query("div", startPoint);
        var delpop = dojo.query(".deletePopup", "hideArticlesDiv")[0];
        if ( typeof delpop !== "undefined" ) {
          this.deletePopUp = delpop.id;
          var _prevDeleteRow = "currentRow" + this.deletePopUp;
          dojo.util.Element.toggleHiddenClass(this.deletePopUp);
          dojo.removeClass(_prevDeleteRow, "dialogShow");
          dojo.removeClass(this.deletePopUp, "deletePopUp");
        }
      }

    },

    setupNewCollectionObservers : function() {

      this.newCollLink = dojo.byId(this._cfg.mjAddCollLink);
      dojo.connect(this.newCollLink, "onclick", this, function(ev) {
        dojo.stopEvent(ev);
        this.setupNewCollectionPopUp();
      });

      this.saveNewColl = dojo.byId(this._cfg.mjsaveNewCollSubmit);
      dojo.connect(this.saveNewColl, "onclick", this, function(ev) {
        dojo.stopEvent(ev);
        this.userSaveToNewCollSave(ev);
      });

      this.cancelNewColl = dojo.byId(this._cfg.mjsaveNewCollCancel);
      dojo.connect(this.cancelNewColl, "onclick", this, function(ev) {
        dojo.stopEvent(ev);
        this.userSaveToNewCollCancel(ev);
      });

    },

    setupNewCollectionPopUp : function() {

      // Reset previous error messages (if any)
      this.displayResetErrorMsg("reset", this._cfg.mjSaveError, "");
      this.oFolderName = dojo.byId(this._cfg.mjNewCollField);

      this.oFolderName.value = "";

      dojo.connect(this.oFolderName, "focus", this, function(ev) {
        dojo.stopEvent(ev);
        dj.util.Form.clearValue(this.oFolderName, '');
      });

      dojo.connect(this.oFolderName, "onclick", this, function(ev) {
        dojo.stopEvent(ev);
        dj.util.Form.clearValue(this.oFolderName, '');
      });

      // Only specific to IE

      dojo.connect(this.oFolderName, "onkeypress", this, function(ev) {
        var cKeyCode = ev.keyCode || ev.which;
        if ( dojo.isIE < 7 ) {
          if ( cKeyCode == Event.KEY_RETURN ) {
            this.userSaveToNewCollSave(ev);
          }
        }
      });

      this.toggleSaveToPanel("ddPanelState-NewCollection");

    },

    userSaveToExistingCollSave : function(event, folderId) {

      if ( window.event ) {
        var srcElement = window.event.srcElement;
      } else {
        var srcElement = event.currentTarget;
      }

      if ( !folderId || folderId == "" ) {
        var folderId = (srcElement.id).substring(srcElement.id.indexOf('#') + 1, srcElement.id.length);
      }

      var artUrl = (typeof this.currentUrl == 'undefined') ? "" : this.currentUrl;
      var artTitle = "";
      var artDesc = "";
      var artContentID = "";
      var artContentType = "Article";
      var artSource = "WSJ";
      var artSourceCode = "WSJO";
      var artDate = "";

      // DEFAULT ARTICLE INSTANCE
      if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetArticle && !this.dockbarInstance
          && !this.searchPremiumInstance ) {
        if ( typeof AT_VARS != 'undefined' ) {
          artTitle = AT_VARS.articleHeadline;
          artDesc = unescape(AT_VARS.bodyText);
          artContentID = AT_VARS.baseDocId;

          if ( typeof AT_VARS.publicationDate !== 'undefined' ){artDate = AT_VARS.publicationDate;}
          if ( typeof AT_VARS.publicationName !== 'undefined' ){artSource = AT_VARS.publicationName;}
          if ( typeof AT_VARS.articleSourceCode !== 'undefined' ){artSourceCode = AT_VARS.articleSourceCode;}

          // To capture Interactive/Video Tabs
          artUrl = window.location.href;
        }
      } else {

        // DISTINGUISH SEARCH PAGE VS DETAILS PAGE VS LANDING PAGE
        if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetSearch ) {

          if ( dojo.byId(this._cfg.mjSearchContBlock) ) {
            var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjSearchContBlock);
          } else {
            var possibleContainers = "";
          }
        } else if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetMJLanding ) {
          if ( dojo.byId(this._cfg.mjLandingContBlock) ) {
            var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjLandingContBlock);
          } else {
            var possibleContainers = "";
          }
        } else if ( this._cfg.mjSaveToWidgetInstance == this._cfg.mjSaveToWidgetMJDetails ) {
          if ( dojo.byId(this._cfg.mjDetailsContBlock) ) {
            var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjDetailsContBlock);
          } else {
            var possibleContainers = "";
          }
        } else {

          var possibleContainers = "";

        }

        var currentSavedItemContainer = "";
        var i = 0;
        while (possibleContainers[i]) {

          if ( dojo.isDescendant(this.actualTargetObj, possibleContainers[i]) ) {
            currentSavedItemContainer = possibleContainers[i];
            break;
          }

          ++i;
        }

        // Default block being that of Dockbar
        if ( currentSavedItemContainer === "" ) {
          // Either Dock instance or generic page instance
          if ( this.dockbarInstance ) {
            var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjDockBarBlock);
          } else if ( this.searchPremiumInstance ) {
            var possibleContainers = dojo.query(this._cfg.mjItemBlock, this._cfg.mjSearchPremiumContBlock);
          } else {
            var possibleContainers = dojo.query(this._cfg.mjItemBlock);
          }

          var currentSavedItemContainer = "";
          var i = 0;
          while (possibleContainers[i]) {

            if ( dojo.isDescendant(this.actualTargetObj, possibleContainers[i]) ) {
              currentSavedItemContainer = possibleContainers[i];
              break;
            }

            ++i;
          }

        }

        if ( currentSavedItemContainer !== "" ) {
          var savedItemSourceObj = dojo.query(this._cfg.mjItemSource, currentSavedItemContainer)[0];
          var savedItemSourceCodeObj = dojo.query(this._cfg.mjItemSourceCode, currentSavedItemContainer)[0];
          var savedItemLinkObj = dojo.query(this._cfg.mjItemLink, currentSavedItemContainer)[0];
          var savedItemDescObj = dojo.query(this._cfg.mjItemDesc, currentSavedItemContainer)[0];
          var savedItemDateObj = dojo.query(this._cfg.mjItemDate, currentSavedItemContainer)[0];

          artUrl = (savedItemLinkObj.href) ? savedItemLinkObj.href.toString() : savedItemLinkObj.innerHTML;
          artTitle = savedItemLinkObj.innerHTML;
          artDesc = (typeof savedItemDescObj !== 'undefined') ? savedItemDescObj.innerHTML : artTitle;
          artDate = (typeof savedItemDateObj !== 'undefined') ? savedItemDateObj.innerHTML : artDate;
          artSource = (typeof savedItemSourceObj !== 'undefined') ? savedItemSourceObj.innerHTML : artSource;
          artSourceCode = (typeof savedItemSourceCodeObj !== 'undefined') ? savedItemSourceCodeObj.innerHTML
              : artSourceCode;

          var htmlInd = artUrl.indexOf('.html');
          var SBInd = artUrl.indexOf('SB');
          artContentID = (SBInd !== -1 && htmlInd !== -1) ? artUrl.substring(SBInd, htmlInd) : "NA";
        }
      }

      if ( artUrl == "" ){artUrl = window.location.href;}

      if ( artUrl.indexOf('articleTabs') !== -1 ) {
        if ( artUrl.indexOf('video') !== -1 ) {
          artContentType = "Video";
        } else if ( artUrl.indexOf('slideshow') !== -1 ) {
          artContentType = "Slideshow";
        } else if ( artUrl.indexOf('interactive') !== -1 ) {
          artContentType = "Interactive Graphic";
        }
      } else {
        if ( artUrl.indexOf('/video/') !== -1 ) {
          artContentType = "Video";
        }
      }

      if ( artSourceCode.indexOf('sc:') !== -1 ) {
        artSourceCode = artSourceCode.replace("sc:", "");
      }

      artSourceCode = artSourceCode.replace(/^\s+|\s+$/g, '');
      artSourceCode = artSourceCode.replace(" ", "");

      var articleObj = {
        "FolderID" : folderId,
        "Title" : artTitle,
        "Desc" : artDesc,
        "URL" : artUrl,
        "ContentID" : artContentID,
        "ContentType" : artContentType,
        "ArticleSource" : artSource,
        "ArticleSourceCode" : artSourceCode,
        "ArticleDate" : artDate
      };

      this.userSaveToExistingCollSaveAPI(folderId, articleObj, this.showSaveToCollConfirmation, this);

    },

    userSaveToExistingCollSaveAPI : function(folderId, articleObj, callback, context) {

      this._serviceWidget.addArticleToFolder(folderId, articleObj, callback, context);

    },

    showSaveToCollConfirmation : function(key, data, criteria) {

      try {

        if ( !data ) {
          this.displayResetErrorMsg("display", this._cfg.mjSaveError, errorMsg);
          return;
        }

        var errorMsg = "NO ERROR";
        // Get Folder Name (even in case of error)
        if ( (typeof this.foldertitle !== 'undefined') && this.foldertitle !== null ) {
          var folderName = this.foldertitle;
          // Reset Folder Title
          this.foldertitle = null;
          errorMsg = "Article save to " + folderName + " failed";
        } else {
          if ( this.quickSaveModeBlk ) {
            var folderName = "Quick Save";
          } else {
            var folderName = dojo.byId(this._cfg.mjSaveToPrefix + key).firstChild.data;
          }

          // Error if any - use below
          errorMsg = "Collection created! Article save to " + folderName + " failed";
        }

        this.displayResetErrorMsg("reset", this._cfg.mjSaveError, "");


        this.toggleSaveToPanel("ddPanelState-SaveConfirmation");
        this.toggleSaveToBar('ddState-saved');
        this.selfReloadDone = "false";

        var folderUrl = this._pagePathValue + "/mj-usercollection.html?folderid=" + key;

        dojo.byId("mjsave_articlesavedtext").innerHTML = '<p>Article saved to<br /> <a href="' + folderUrl + '">'
            + folderName + '</a> Collection.</p>';

        if ( this.collectionMode !== this._cfg.mjNewFolderCreatedMode ) {
          this.collectionMode = this._cfg.mjSaveCollectionMode;
        }

        this.alreadyClosed = false;

        var currentFolderName = (dojo.byId('mj-userFolderName') !== null) ? dojo.byId('mj-userFolderName').innerHTML
            .replace('<h3>', '').replace('</h3>', '').replace('<H3>', '').replace('</H3>', '') : "";

        if ( this._cfg.mjSaveToWidgetInstance === this._cfg.mjSaveToWidgetMJDetails
            && (folderName === currentFolderName || currentFolderName === 'Most Recent') ) {

          var that = this;

          setTimeout(function() {

            that.defaultSuperImposeAndClose('checkClosed');

            if ( that._cfg.mjSaveToWidgetInstance === that._cfg.mjSaveToWidgetMJDetails ) {
              that._serviceWidget.reloadUserFolders();
            }

            if ( currentFolderName === 'Most Recent' ) {
              // This should be refered to with a config param, not directly to the module.
              dj.module.dashboard.DashboardUserCollection.deleteHeadLineStatus();
            } else {
              dj.module.dashboard.DashboardUserCollection.deleteHeadLineStatus(key);
            }

            that.selfReloadDone = "true";

          }, 5000);

        } else {

          var that = this;

          setTimeout(function() {

            that.defaultSuperImposeAndClose('checkClosed');

          }, 5000);

        }

      } catch ( e ) {
        // error case here
        console.error("showSaveToCollConfirmation error " + e);
      }

    },

    restoreDefaultState : function(prevTargetObj) {

      if ( prevTargetObj ) {

        this.toggleSaveToDropdown(prevTargetObj, "ddState-collapsed", "ddState-expanded");
      } else if ( this.actualTargetObj ) {

        if ( this.selfReloadDone === "false" ) {

          this.toggleSaveToDropdown(this.actualTargetObj, "ddState-collapsed", "ddState-expanded");
        }
      }

    },
    userSaveToNewCollSave : function(ev) {

      var folderNameInput = dojo.byId(this._cfg.mjNewCollField).value;

      if ( this._serviceWidget.validateCollectionName("new", folderNameInput, this._cfg.mjSaveError, this._response,
          this.userFoldersCount) ) {

        this.displayResetErrorMsg("reset", this._cfg.mjSaveError, "");

        folderNameInput = folderNameInput.replace(/^\s+|\s+$/g, '');
        this.userSaveToNewCollSaveAPI(folderNameInput, this.showSaveNewCollConfirmation, this);

      } else {

        this.displayResetErrorMsg("display", this._cfg.mjSaveError, "");

      }

    },

    displayResetErrorMsg : function(dispReset, whatElm, whatMsg) {

      if ( dispReset === "display" ) {

        if ( whatMsg !== "" ){dojo.byId(whatElm).innerHTML = whatMsg;}

        this.toggleSaveToPanel("errorDisplay-On");

      } else {
        dojo.byId(whatElm).innerHTML = "";

        this.toggleSaveToPanel("errorDisplay-Off");
      }

    },

    userSaveToNewCollSaveAPI : function(folderName, callback, context) {

      this._serviceWidget.createUserFolder(folderName, "Layout", "Layout", callback, context);

    },

    showSaveNewCollConfirmation : function(key, data, criteria) {

      try {

        if ( !data ) {
          return;
        }

        if ( typeof data.Message !== 'undefined' ) {
          this.displayResetErrorMsg("display", this._cfg.mjSaveError, data.Message);
          return;
        }

        var folderId = "";

        if ( typeof data[0].FolderID !== 'undefined' ) {
          folderId = data[0].FolderID;
        } else {

          // TODO: Temp solution for network slowness
          while (this.folders[i]) {
            var item = this.folders[i];

            if ( item.FolderTitle === key ) {
              folderId = item.FolderID;
              break;
            }

            i++;
          }

          var maxFolderId = (this.folders[0]) ? this.folders[0].FolderID : "";
          var i = 0;
          while (this.folders[i]) {
            var currFolderId = this.folders[i].FolderID;
            if ( currFolderId > maxFolderId ) {
              maxFolderId = currFolderId;
            }
            i++;
          }

          if ( folderId === "" ) {
            folderId = maxFolderId + 1;
          }

        }

        // Newly Added Folder Title
        this.foldertitle = key;

        if ( folderId !== "" ) {
          this.collectionMode = this._cfg.mjNewFolderCreatedMode;
          this.userSaveToExistingCollSave("", folderId);
        } else {
          this.displayResetErrorMsg("display", this._cfg.mjSaveError, "Collection addition failed");
          return;
        }

      } catch ( e ) {
        // error case here
        console.error("showSaveNewCollConfirmation error " + e);
      }

    },

    userSaveToNewCollCancel : function(ev) {

      this.defaultSuperImposeAndClose();
    },

    setupSaveToCollectionList : function() {

      if ( typeof this.folders === 'undefined' ) {
        // Only the first time we call the subscribe for user folders
        this._serviceWidget.subscribeUserFolders(this.renderSaveToCollectionList, this);
      } else {
        // Reload User Folders before displaying
        this._serviceWidget.reloadUserFolders();
      }

    },

    setupLoginOrRegister : function(mode) {

      if ( !mode ) {
        this.toggleSaveToPanel("ddPanelState-Login");
        this.collectionMode = this._cfg.mjLoginCollectionMode;
        dojo.byId('logInButton').href = dojo.byId('logInButton').href + '&url=' + document.location.href
            + '&mjsaveMode=quicksave';
        dojo.byId('regInButton').href = dojo.byId('regInButton').href + '&url=' + document.location.href
            + '&mjsaveMode=quicksave';
      } else {

        if ( this._cfg.mjSaveToWidgetInstance === "IntroMJ" ) {
          dojo.byId('logInButton').href = dojo.byId('logInButton').href + '&url='+dj.context.core.urlPrefix+'/page/my-journal-main.html';
          dojo.byId('regInButton').href = dojo.byId('regInButton').href + '&url='+dj.context.core.urlPrefix+'/page/my-journal-main.html';
        } else {
          dojo.byId('logInButton').href = dojo.byId('logInButton').href + '&url='+dj.context.core.urlPrefix+'/page/my-saved-main.html';
          dojo.byId('regInButton').href = dojo.byId('regInButton').href + '&url='+dj.context.core.urlPrefix+'/page/my-saved-main.html';
        }
      }

    },

    setupCollectionObservers : function() {

      var i = 0;

      if ( typeof this.folders !== 'undefined' ) {
        while (this.folders[i]) {

          var item = this.folders[i];
          var folderid = item.FolderID;
          var folderObj = dojo.byId(this._cfg.mjSaveToPrefix + folderid);
          if ( folderObj !== null ) {

            dojo.connect(folderObj, "onclick", this, function(ev) {
              dojo.stopEvent(ev);
              this.userSaveToExistingCollSave(ev, "");
            });

          }
          i++;
        }
      }

    },

    /**
     * Renders the Save To My Journal dropdown based on data from the
     * DashboardService widget. called automatically when instantiated..
     *
     * @param {Object}
     *                key
     * @param {Object}
     *                config
     */
    renderSaveToCollectionList : function(response) {

      if ( !response ) {
        return;
      }

      this._response = response;
      this.folders = response;
      var folderdata = "";
      this.quickSaveFolderId = "";
      this.errorCondition = false;
      var i = 0;
      this.userFoldersCount = 0;
      var displayTitle = "";

      dojo.byId(this._cfg.mjSaveDropdownCollList).innerHTML = '<img height="27" width="26" border="0" alt="" src="/img/loadingAni_grey.gif" style="margin-left:60px;"/>';

      if ( typeof response !== 'undefined' ) {
        if ( response.toString().length === 3 ) {
          this.errorCondition = true;
        }
      }

      while (this.folders[i]) {
        var item = this.folders[i];
        var folderid = item.FolderID;
        var foldertitle = item.FolderTitle;
        var foldertype = item.FolderType;

        if ( typeof folderid === 'undefined' ) {
          this.errorCondition = true;
          break;
        }

        displayTitle = (foldertitle.length > 15) ? foldertitle.substring(0, 14) + '...' : foldertitle;

        if ( this._cfg.mjUserCollectionType === foldertype || this._cfg.mjSystemCollectionType === foldertype ) {
          folderdata += "<li><a href='#' id='saveToFolder#" + folderid + "' >" + displayTitle + "</a></li>";
          ++this.userFoldersCount;

          if ( this._cfg.mjSystemCollectionType === foldertype ) {
            this.quickSaveFolderId = folderid;
          }
        }

        i++;
      }

      if ( this.quickSaveModeBlk ) {
        this.superImposeBlock(this.currQuickSaveObj, "true");
      }

      if ( folderdata !== "" ) {

        dojo.byId(this._cfg.mjSaveDropdownCollList).innerHTML = folderdata;

        this.displayResetErrorMsg("reset", this._cfg.mjSaveError, "");

        if ( !this.quickSaveModeBlk && this.collectionMode !== this._cfg.mjNewFolderCreatedMode
            && this.collectionMode !== this._cfg.mjSaveCollectionMode ) {
          this.toggleSaveToPanel("ddPanelState-MyCollections");
        }

        this.collectionMode = this._cfg.mjListCollectionMode;

        // Finally set observers for folder list generated
        this.setupCollectionObservers();
      } else {
        this.collectionMode = "";
        dojo.byId(this._cfg.mjSaveDropdownCollList).innerHTML = "";
        if ( this.errorCondition ) {
          if ( this.collectionMode !== this._cfg.mjNewFolderCreatedMode
              && this.collectionMode !== this._cfg.mjSaveCollectionMode ) {
            this.toggleSaveToPanel("ddPanelState-MyCollections");
          }

          this.collectionMode = this._cfg.mjListCollectionMode;
          this.initialLoad = true;
          this.displayResetErrorMsg("display", this._cfg.mjSaveError, "System error occured. Please try later.");
        }
      }

    },

    getElementLeft : function(Elem) {
      var elem = Elem;

      xPos = elem.offsetLeft;
      tempEl = elem.offsetParent;
      while (tempEl != null) {
        xPos += tempEl.offsetLeft;
        tempEl = tempEl.offsetParent;
      }
      return xPos;
    },

    getElementTop : function(Elem) {
      var elem = Elem;

      yPos = elem.offsetTop;
      tempEl = elem.offsetParent;
      while (tempEl != null) {
        yPos += tempEl.offsetTop;
        tempEl = tempEl.offsetParent;
      }
      return yPos;
    },

    hasValidChars : function(str) {

      str = str.replace(/^\s+|\s+$/g, '');
      if ( !str || str === null || str === "" ) {
        return false;
      }

      var invalidChars = "?!#$%&*()\"||<>=+;:][{}/\\";

      for ( var count = 0, len = invalidChars.length; count < len; count++) {
        var badChar = invalidChars.charAt(count);
        if ( str.indexOf(badChar, 0) > -1 ) {
          return false;
        }
      }
      return true;
    }

  };

}());
dojo.provide("dj.module.dashboard.dashboardDrag");

dojo.require("dj.service.dashboard.DashboardPZNServiceFactory");
//dojo.require("dj.module.dashboard.dragdrop");

dojo.getObject("dj.module.dashboard", true);

var _dsd = dj.service.dashboard;
var _djl = dj.lang;
var _dsd = dj.service.dashboard;
var _conf = {};

dj.module.dashboardDrag = {
    init: function(conf) {
      this.cfg = _djl.cloneMixin(_conf, conf);
      this.conf = conf;
      this.toggleClass = this.cfg.toggleClass;
      this.container = this.cfg.container;
      this.reorderParent = this.cfg.reorderParent;
      this.reorderItem = this.cfg.reorderItem;
      this.submit = this.cfg.submitElementClass;

      _dsd.DashboardPZNServiceFactory.getPZNServiceInstance( this.handleInitServices, this );
    },
    
    handleInitServices: function(_pznServiceWidget) {
      this._pznServiceWidget = (_pznServiceWidget)? _pznServiceWidget : dj.service.dashboard.DashboardPZNService;
      // callback init to ensure dom exists before setToggleEvent is called
      if ( this.conf.initCallback ) {
        this.initCallback = this.conf.initCallback;
        this.initContext = this.conf.initContext;
        this.initCallback.apply( this.initContext, [this.setToggleEvent, this] );
      } else {
        this.setToggleEvent();
      }
  },

  // assigns click event to toggle, cancel and submit elements
  setToggleEvent: function() {
    this.sortableCont = dojo.byId(this.reorderParent);
    this.submitElements = dojo.query(this.submit);
    this.sortButton = dojo.byId('sort_button');

    dojo.connect(dojo.byId(this.container), "onclick", this, function(ev) {
      var target = (ev.srcElement || ev.target);
      if ( dojo.hasClass(target, this.toggleClass.replace('.','')) ) {
        dojo.stopEvent(ev);
        scroll(0,0);
        dojo.addClass(this.sortButton, 'hidden');
        this.initEditModeStart(this.container, this.reorderParent);
        if(dj.module.dashboard.DashboardSaveTo) {
          dj.module.dashboard.DashboardSaveTo.restoreDefaultState();
          }
      }
      if ( dojo.hasClass(target, this.submit.replace('.','')) ) {
        this.destroySortable(this.sortableCont);
        dojo.removeClass(this.sortButton, 'hidden');
        this.submitOrderJSON();
        dojo.removeClass(dojo.byId(this.container), 'reorderMode');
        if(dj.module.dashboard.DashboardSaveTo) {
          dj.module.dashboard.DashboardSaveTo.restoreDefaultState();
          }
      }
    });
    if(dj.module.dashboard.DashboardSaveTo) {
    	dj.module.dashboard.DashboardSaveTo.restoreDefaultState();
    }
  },

  // initializes edit-mode css & creates Sortable instance
  initEditModeStart: function(gCont, sCont) {
    var gCont = dojo.byId(gCont);
    dojo.addClass(gCont, 'reorderMode');
    this.createSortable(sCont);
  },

  // Sortable create object wrapper
  createSortable: function(reorderParent) {
    
    
    //Sortable.create(reorderParent,{tag:'div'});
    
    
  },

  // Sortable destroy object wrapper
  destroySortable: function(el) {
    
    
    //Sortable.destroy(el);
    
    
  },

  // builds json string specifically for DashboardPZNCollection
  getCurrentOrderJson: function(el) {
    var el = dojo.byId(el);
    var oOrderEl = dojo.query(".modeState-viewing", el);
    var oOrderList = [];
    var spaceArray = [];

    for (var i = 0, len = oOrderEl.length; i < len; i++) {
      var id = oOrderEl[i].className.replace("mjJournalContainer mjDashboardWrapper modeState-viewing ","");
      spaceArray = id.match(/([A-Z][a-z]*)/g);
      var idWithSpace = spaceArray[1] ? (spaceArray[0]+' '+spaceArray[1]) : spaceArray[0];
      oOrderList[i] = idWithSpace;
    }
    return {"FolderOrder":oOrderList.join('~')};
  },

  // submits order json to DashboardPZNCollection
  submitOrderJSON: function() {
    that = this;
    var submitOrder = that.getCurrentOrderJson(that.reorderParent);
    this._pznServiceWidget.updatePZNCollection(submitOrder,function(){},this);
  }
};

// dj.module.dashboardDrag.init( {'container':'mjReorderContainer', 'reorderParent':'userCollections', 'reorderItem':'.orderItem', 'submitElementClass':'.submit', 'toggleClass':'.sort' } );
// dj.module.dashboardDrag.init( {'container':'mjReorderContainer', 'reorderParent':'userCollections', 'reorderItem':'.orderItem', 'submitElementClass':'.submit', 'toggleClass':'.sort', 'borderClass':'mjReorderFrame', "initCallback": dj.module.dashboard.DashboardFolders.subscribeFinishRendering, "initContext": dj.module.dashboard.DashboardFolders } );
/*global dojo dj*/
dojo.provide("dj.community.Subject");

dj.community.Subject = function(uri, display, href, typeName) {
  this['s.uri'] = uri;
  this['s.name'] = display;
  this['s.href'] = href;
  this['s.typeName'] = typeName;
};/*global dojo dj setTimeout*/
dojo.provide("dj.community.feedback");
dojo.require("dj.widget.Slider");

dj.community.feedback.toggleCommentByForce = function(commentEntry) {
    var entry = dojo.byId(commentEntry);
    var messageSpan = dojo.query('.cToggle_message', entry)[0];
    var toggleLink = dojo.query('.cToggle_link a', entry)[0];
    //var timestamps = dojo.query('.postStamp', entry);

    if (!dojo.hasClass(entry,'cUnitType-forceshow')) {
      dojo.addClass(entry, 'cUnitType-forceshow');
        messageSpan.innerHTML='Nonsubscriber comment';
        toggleLink.innerHTML='Hide this comment <span>-</span>';
    }
    else
    {
      dojo.removeClass(entry, 'cUnitType-forceshow');
        messageSpan.innerHTML='Nonsubscriber comments are set to \"Hide\"';
        toggleLink.innerHTML='Show this comment <span>+</span>';
    }
};

dj.community.feedback.toggleHelp = function(tooltipTrigger) {
    var container = dojo.query('.sliderbox_tooltip_cont')[0];
    var trigger = dojo.query('.tooltip_trigger',container)[0];
    
    if (dojo.hasClass(container, 'sliderbox_tooltip_hidden')) {
        dojo.removeClass(container, 'sliderbox_tooltip_hidden');
        dojo.addClass(container, 'sliderbox_tooltip_visible');
        trigger.innerHTML="Close";
    }
    else
    {
      dojo.removeClass(container, 'sliderbox_tooltip_visible');
        dojo.addClass(container, 'sliderbox_tooltip_hidden');
        trigger.innerHTML="What's this?";
    }
};

dj.community.feedback.toggleComments = function(sliderId, siteRoot) {

    if (!dojo.byId(sliderId) || dojo.hasClass(dojo.byId(sliderId), "comment-slider")){
        return;
    }

    var show = 0;
    var fade = 1;
    var hide = 2;
    var sliderElement = dojo.byId(sliderId);
    var threadContainer = dojo.byId('threadcontainer0405091518');
    var hideClass = 'threadbox_nonsub_hide';
    var fadeClass = 'threadbox_nonsub_fade';

    function fadeComments() {
        if (dojo.hasClass(threadContainer, hideClass)){
          dojo.removeClass(threadContainer, hideClass);
        }
        dojo.addClass(threadContainer, fadeClass);
    }
    
    function hideComments() {
        if (dojo.hasClass(threadContainer, fadeClass)){
          dojo.removeClass(threadContainer, fadeClass);
        }
        dojo.addClass(threadContainer, hideClass);
    }
    
    function showComments() {
        if (dojo.hasClass(threadContainer, fadeClass)){
          dojo.removeClass(threadContainer, fadeClass);
        }
        if (dojo.hasClass(threadContainer, hideClass)){
          dojo.removeClass(threadContainer, hideClass);
        }
    }

    function toggle(value) {
        switch (value) {
            case fade:
                fadeComments();
                break;
            case hide:
                hideComments();
                break;
            default:
                showComments();
                break;
        }
    }

    function save(value) {
        dojo.xhrPost(
            {
              url: siteRoot + '/member/updateNonSubscriberCommentTransparency.rails',
              postData: 'value=' + value
            }
        );
    }

    function getCurrentSetting() {
        if (dojo.hasClass(threadContainer, fadeClass)) {
            return fade;
        }
        else if (dojo.hasClass(threadContainer, hideClass)) {
            return hide;
        }
        return show;
    }
    
    function changeSetting(value) {
        if (getCurrentSetting() != value) {
            toggle(value);
            save(value);
        }
    }

    var slider = new dj.widget.Slider(dojo.query('.slider_pointer',sliderElement), sliderElement, {
        range: {start:0, end:2},
        values: [0, 1, 2],
        sliderValue: getCurrentSetting(),

        onChange: function(value) {
            setTimeout(function(){
              changeSetting(value);
            },0);
        }
    });
    dojo.addClass(sliderElement, "comment-slider");
};/*global dojo dj console*/
dojo.provide("dj.module.communityUser");
dojo.require("dj.widget.panel.ModalPanel");
dojo.require("dj.util.Element");
dojo.require("dj.util.Url");

/**
 * Contains ajax functions for post, update and functions to handle the 
 * following community response error codes:
 * 300 : user does not have a community profile
 * 301 : user is blocked for community access 
 * 
 * @param {Object} postUrl
 * @param {Object} args
 * @param {Object} callback
 */
dj.module.communityUser = {
	
	/**
	 * 
	 * @param {Object} postUrl
	 * @param {Object} args
	 */
	ajaxPost : function(postUrl, args, callback) { 
  
  dojo.xhrPost(
      {
        url: postUrl,
        postData: dojo.objectToQuery(args),
        error: function(exception, ioargs){
          console.error('Exception occured while posting posting Ajax Request : ' + exception);
        },      
        handle: function(response, ioargs){
          var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
          callback(ioargs, json);
        }
      });
	},
	
	/**
	 * 
	 * @param {Object} oElement
	 * @param {Object} postUrl
	 * @param {Object} args
	 */
	ajaxUpdate : function(oElement, postUrl, args, callback) {
		
	  dojo.xhrPost(
	      {
	        url: postUrl,
	        postData: dojo.objectToQuery(args),
          load: function(data, ioargs){
           dojo.place(data.replace(/^\s*/, ""), oElement,"only");
          },	        
	        error: function(exception, ioargs){
	          console.error('Exception occured while posting posting Ajax Request : ' + exception);
	        },      
	        handle: function(response, ioargs){
	          var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
	          callback(ioargs, json);
	        }
	      });	  
	},
	
	/**
	 * 
	 * @param {Object} postUrl
	 * @param {Object} args
	 */	
	handleError300 : function(postUrl, args, uFirstName, uLastName, callback){

		/* Initialize the popup */
		this.initializeCommunityUserPopup(postUrl, args, uFirstName, uLastName, 300, callback);
				
		this._openCommunityUserPopup();
		
	},
	
	handleError301 : function(uFirstName, uLastName){
		
		/* Initialize the popup */
		this.initializeCommunityUserPopup("", "", uFirstName, uLastName, 301);
				
		this._openCommunityUserPopup();
	},
	
	_openCommunityUserPopup : function(){
		
		var oPopupPosition = dojo.position(this.oPopup, true);
    
    dojo.style(this.oPopup, {position: "absolute", 
                            left: oPopupPosition.x + "px", 
                            top: (oPopupPosition.y +200) + "px",
                            width: oPopupPosition.w +"px",
                            height: oPopupPosition.h +"px"});

		/* Open popup as a targetless modal panel */
		var panel = new dj.widget.panel.ModalPanel(null, dojo.query("div.communityUserPopup")[0],
								{closeModalPanelEvent : "click", closeModalPanelButtonSelector : ".popupClose"});
	},
	
	initializeCommunityUserPopup : function(postUrl, args, uFirstName, uLastName, errorCode, callback) {
		
		/* Assuming that the popup container has a class of communityUserPopup */
		this.oPopup = dojo.query("div.communityUserPopup")[0];
		
		this.oUnblockedUserContainer = dojo.query(".unblockedUser" ,this.oPopup)[0];
		this.oBlockedUserContainer = dojo.query(".blockedUser", this.oPopup)[0]; 
    
		this.oCommentsText = dojo.query(".commentsText", this.oPopup)[0];
		this.oAskQuestionText = dojo.query(".askQuestionText", this.oPopup)[0];
				
		this.oUserFirstName = dojo.query(".userFirstName", this.oPopup);
		this.oUserLastName = dojo.query(".userLastName", this.oPopup);
		
		if((postUrl !== null)&&(postUrl.indexOf('SaveQuestion')!== -1)){
		  dj.util.Element.show(this.oAskQuestionText);
			dj.util.Element.hide(this.oCommentsText);
		} else {
		  dj.util.Element.hide(this.oAskQuestionText);
		  dj.util.Element.show(this.oCommentsText);
		}
		
		var that = this;
		
		var isUserFirstLastNamePresent = true;
			
		if(((uFirstName === null)||(uFirstName === ''))&&((uLastName === null)||(uLastName === ''))) {
				isUserFirstLastNamePresent = false;
			}

		/* For blocked community users */	
		if(errorCode === 300){
			
			this.oBlockedUserContainer.setStyle({display : "none"});
			this.oUnblockedUserContainer.setStyle({display : "block"});
			
			this.oPost = dojo.query(".post", this.oPopup)[0];
			this.oChkBox = dojo.query(".chkBox", this.oPopup)[0];	
			
			this.oWhyLink = dojo.query(".whyLink",this.oPopup)[0];
			this.oWhyLinkPara = dojo.query(".whyLinkPara", this.oPopup)[0];
			
			this.oFirstNameText = dojo.query(".firstNameText", this.oPopup)[0];
			this.oLastNameText = dojo.query(".lastNameText", this.oPopup)[0];
			
			this.oUserNameInfoContainer = dojo.query(".userNameInfoContainer", this.oPopup)[0];
			
			this.oErrorMessage = dojo.query(".errorMessage", this.oPopup)[0];
			this.oCommunityLink = dojo.query(".communityLink",this.oPopup)[0];
			this.oPrivacyLink = dojo.query(".privacyLink", this.oPopup)[0];
			this.oTermsLink = dojo.query(".termsLink", this.oPopup)[0];
			
			/* Show the user info container if the user's first name and last name is not present */
			if(isUserFirstLastNamePresent === false){
			  dj.util.Element.show(this.oUserNameInfoContainer);
			} else {
			  dj.util.Element.hide(this.oUserNameInfoContainer);
				this.oUserFirstName.forEach(function(oFirstName){
					oFirstName.innerHTML = ", " + uFirstName;
				});
				this.oUserLastName.forEach(function(oLastName){
					oLastName.innerHTML = uLastName + ",";
				});
			}
			
			/* Stop all observers and re-initialize */
			if(this.whyLinkListener !== null){
				dojo.disconnect(this.oWhyLinkClickHandle);
			}
			
			if(this.communityLinkListener !== null){
			  dojo.disconnect(this.oCommunityLinkClickHandle);
			}
			
			if(this.privacyLinkListener !== null){
			  dojo.disconnect(this.oPrivacyLinkClickHandle);
			}
			
			if(this.termsLinkListener !== null){
			  dojo.disconnect(this.oTermsLinkClickHandle);
			}
			
			if(this.postListener !== null){
			  dojo.disconnect(this.oPostClickHandle);
			}
			
			this.whyLinkListener = dojo.hitch(this.oWhyLink, function(event){
			  dj.util.Element.show(that.oWhyLinkPara);
			  dj.util.Element.hide(that.oWhyLink);
					});
			
			this.communityLinkListener = dojo.hitch(this.oCommunityLink, function(event){
			      dojo.stopEvent(event);
						dj.util.Url.openWin("/community");
					});
					
			this.privacyLinkListener = dojo.hitch(this.oPrivacyLink, function(event){
			      dojo.stopEvent(event);
						dj.util.Url.openWin("/public/page/privacy_policy.html");
					});
			
			this.termsLinkListener = dojo.hitch(this.oTermsLink, function(event){
			      dojo.stopEvent(event);
						dj.util.Url.openWin("/public/page/subscriber_agreement.html");
					});				
					
			this.postListener = dojo.hitch(this.oPost, function(event){
				
					/* Create a profile if check box is checked */
					if (that.oChkBox.checked === true) {
						args.mode = 2;
					} else 
						if (that.oChkBox.checked === false) {
							args.mode = 1;	
						}
					
					if(isUserFirstLastNamePresent === false){
						if(((that.oFirstNameText.value === null)||(that.oFirstNameText.value === ''))&&((that.oLastNameText.value === null)||(that.oLastNameText.value === ''))){
						    dojo.stopEvent(event);
								that.oErrorMessage.show();
								that._openCommunityUserPopup();	
							} else {
								args.firstName = that.oFirstNameText.value;
								args.lastName = that.oLastNameText.value;
								
								that.ajaxPost(postUrl, args, callback);
							}
					} else {
						args.firstName = uFirstName;
						args.lastName = uLastName;
						
						that.ajaxPost(postUrl, args, callback);
					}
				});		
					
			/* Setup the observers */
				this.oWhyLinkClickHandle = dojo.connect(this.oWhyLink, "onclick", this.whyLinkListener);
				this.oCommunityLinkClickHandle = dojo.connect(this.oCommunityLink, "onclick", this.communityLinkListener);
				this.oPrivacyLinkClickHandle = dojo.connect(this.oPrivacyLink, "onclick", this.privacyLinkListener);
				this.oTermsLinkClickHandle = dojo.connect(this.oTermsLink, "onclick", this.termsLinkListener);
				this.oPostClickHandle = dojo.connect(this.oPost, "onclick", this.postListener);
				
		} else
			if(errorCode === 301){
				this.oBlockedUserContainer.setStyle({display : "block"});
				this.oUnblockedUserContainer.setStyle({display : "none"});
				
				if(isUserFirstLastNamePresent === true){
					this.oUserFirstName.forEach(function(oFirstName){
						oFirstName.innerHTML = uFirstName;
					});
					this.oUserLastName.forEach(function(oLastName){
						oLastName.innerHTML = uLastName;
					});	
				}
			} 
	}
	
};
/*global dojo dj document console Option*/
dojo.provide("dj.community.communityintegration");
dojo.require("dj.module.communityUser");
dojo.require("dj.util.Element");

dj.community.communityintegration = {

    toggleContent : function (id) {
    var el =dojo.byId(id);
    if(el.style.display === "none"){
      el.style.display = "";
    }else{
      el.style.display = "none";
    }
},

CommunityIntegration : function (siteroot, fullsiteroot) {
    this._siteroot = siteroot;
    this.fullsiteroot = fullsiteroot;

},

postQuestion : function (siteroot, fullsiteroot) {
    if (dojo.byId('message')){
        dojo.byId('message').innerHTML = "";
    }
    var sDescText = dojo.byId('AskQDescription').value;
    if (sDescText == 'Enter your question*') {
        sDescText = '';
        dojo.byId('AskQDescription').value = '';
    }
    var strimmedDesc = sDescText.replace(/^\s+|\s+$/g, '');

    var objErrorQstMandatory = dojo.byId('errorQstMandatory');
    var objErrorCatMandatory = dojo.byId('errorCatMandatory');
    var objErrorDefault = dojo.byId('errorDefault');
    var objErrorComplyPolicy = dojo.byId('errorComplyPolicy');
    var objDescription = dojo.byId('AskQDescription');
    var objErrorQuesLabel = dojo.byId('errorQuesLabel');
    var objCategory = dojo.byId('Category');
    var objSubCategoryId = dojo.byId('SubCategoryId');
    var objErrorSubCatMandatory = dojo.byId('errorSubCatMandatory');

    if (strimmedDesc.length === 0 && objCategory.value == "-1" && objSubCategoryId.value == "-1") {
        objErrorQuesLabel.style.display = 'none';
        objErrorCatMandatory.style.display = 'none';
        objErrorDefault.style.display = 'block';
        objErrorComplyPolicy.style.display = 'none';
        objErrorQstMandatory.style.display = 'none';
        return;
    }
    if (strimmedDesc.length === 0) {
        objErrorQstMandatory.style.display = 'block';
        objErrorCatMandatory.style.display = 'none';
        objErrorSubCatMandatory.style.display = 'none';
        objErrorDefault.style.display = 'none';
        objErrorComplyPolicy.style.display = 'none';
        objDescription.value = strimmedDesc;
        objDescription.focus();
        return;
    }
    if (strimmedDesc.length > 2000) {
        objErrorQuesLabel.style.display = 'block';
        objErrorDefault.style.display = 'none';
        objErrorComplyPolicy.style.display = 'none';
        objErrorQstMandatory.style.display = 'none';
        objErrorCatMandatory.style.display = 'none';
        objErrorSubCatMandatory.style.display = 'none';
        objDescription.focus();
        return;
    }
    objDescription.value = strimmedDesc;
    if (objCategory.value == "-1") {
        objErrorQstMandatory.style.display = 'none';
        objErrorDefault.style.display = 'none';
        objErrorComplyPolicy.style.display = 'none';
        objErrorCatMandatory.style.display = 'block';
        objErrorSubCatMandatory.style.display = 'none';
        objCategory.focus();
        return;
    }
    if (objSubCategoryId.value == "-1") {
        objErrorQstMandatory.style.display = 'none';
        objErrorCatMandatory.style.display = 'none';
        objErrorDefault.style.display = 'none';
        objErrorComplyPolicy.style.display = 'none';
        objErrorSubCatMandatory.style.display = 'block';
        objSubCategoryId.focus();
        return;
    }

    var subCategoryvar = objSubCategoryId.value;
    //var selectedCategoryIdvar = objCategory.value;
    strimmedDesc = objDescription.value;
    var notifyMebool = dojo.byId('chkEmail').checked;

    var args = { mode: 0,
        firstName: null,
        lastName: null,
        subCategory: subCategoryvar,
        strDescription: strimmedDesc,
        notifyMe: notifyMebool
    };

    dj.module.communityUser.ajaxPost(fullsiteroot + "/public/SaveQuestion.html", args, function(transport, json) {

        /* User is a community user and hence, successful post */
        if (transport.xhr.status == 200) {
            document.location.href = fullsiteroot + "/answer/#identifier";
        }
        else if (transport.xhr.status == 305) {
            objErrorQstMandatory.style.display = 'none';
            objErrorCatMandatory.style.display = 'none';
            objErrorDefault.style.display = 'none';
            objErrorSubCatMandatory.style.display = 'none';
            objErrorComplyPolicy.style.display = 'block';
            return false;
        }
        else {
            /* User is not a community user */
            if (transport.xhr.status == 300) {
                dj.module.communityUser.handleError300(fullsiteroot + "/public/SaveQuestion.html", args, json.FirstName, json.LastName, function(transport, json) {
                    if (transport.xhr.status == 200) {
                        document.location.href = fullsiteroot + "/answer/#identifier";
                    }
                    else if (transport.xhr.status == 305) {
                        objErrorQstMandatory.style.display = 'none';
                        objErrorCatMandatory.style.display = 'none';
                        objErrorDefault.style.display = 'none';
                        objErrorSubCatMandatory.style.display = 'none';
                        objErrorComplyPolicy.style.display = 'block';
                        return false;
                    }
                });
            } else if (transport.xhr.status == 301) {
                dj.module.communityUser.handleError301(json.FirstName, json.LastName);
            }
        }
    });
},

/* keeping this function for backward compatibility. Should be removed once the main site started using the new AnswerAQuestion module. */
answerQuestion : function (siteroot, fullsiteroot) {
    var answerText = dojo.byId('AnsDescription').value;
    if (answerText == 'Enter your answer') {
        answerText = '';
        dojo.byId('AnsDescription').value = '';
    }
    answerText = answerText.replace(/^\s+|\s+$/g, '');
    var questionId = dojo.byId('hdnQuestionId').value;
    if (answerText.length === 0) {
      dj.util.Element.show("errorAnsDefault");
      dj.util.Element.hide("errorAnsComplyPolicy");
        dojo.byId('errorAnsDefault').innerHTML = 'Please fill out the answer field.';
        return;
    }
    if (answerText.length > 2000) {
      dj.util.Element.show("errorAnsDefault");
      dj.util.Element.hide("errorAnsComplyPolicy");
        dojo.byId('errorAnsDefault').innerHTML = 'The Answer should not be more than 2000 characters';
        return;
    }

    var args = { mode: 0,
        firstName: null,
        lastName: null,
        questionId: questionId,
        strDescription: answerText
    };

    dj.module.communityUser.ajaxPost(fullsiteroot + "/public/SaveSectionAnswer.html", args, function(transport, json) {
        /* User is a community member and successful post */
        if (transport.xhr.status == 200) {
            document.location.href = fullsiteroot + "/answer/questions/" + questionId;
        }
        else if (transport.xhr.status == 305) {
          dj.util.Element.show("errorAnsComplyPolicy");
          dj.util.Element.hide("errorAnsDefault");
          return false;
        }
        else {
            /* User is not a community user */
            if (transport.xhr.status == 300) {
                dj.module.communityUser.handleError300(fullsiteroot + "/public/SaveSectionAnswer.html", args, json.FirstName, json.LastName, function(transport, json) {
                    if (transport.xhr.status == 200) {
                        document.location.href = fullsiteroot + "/answer/questions/" + questionId;
                    }
                    else if (transport.xhr.status == 305) {
                      dj.util.Element.show("errorAnsComplyPolicy");
                      dj.util.Element.hide("errorAnsDefault");
                      return false;
                    }
                });
            } else if (transport.xhr.status == 301) {
                dj.module.communityUser.handleError301(json.FirstName, json.LastName);
            }
        }
    });
},

fnOpenMessageBox : function (targetElement, URI, rowKey) {
    if (dojo.byId('hdnLastShownId').value != "") {
        dojo.byId(dojo.byId('hdnLastShownId').value).style.display = "none";
    }
    if (targetElement == 1) {
        targetElement = 'dvMessage' + rowKey;
    } else {
        targetElement = 'dvConnect' + rowKey;
    }
    var subject = 'msgsubject' + rowKey;
    var message = 'msgeditor' + rowKey;
    var connectMessage = 'txtMessage' + rowKey;
    dojo.byId(targetElement).style.display = 'block';
    dojo.byId('hdnMemberUri' + rowKey).value = URI;
    dojo.byId('hdnLastShownId').value = targetElement;
    dojo.byId(subject).value = "Subject";
    dojo.byId(message).value = "Type your personal message.";
    if (dojo.byId(connectMessage)) {
      dojo.byId(connectMessage).value = "Type your personal message.";
    }

    var _subjectGotFocus = function subject_GotFocus() {
        if (dojo.byId(subject).value == "Subject") {
            dojo.byId(subject).value = "";
        }
    };
    var _subjectLostFocus = function subject_LostFocus() {
        if (dojo.byId(subject).value == "") {
            dojo.byId(subject).value = "Subject";
        }
    };
    var _messageGotFocus = function message_GotFocus() {
        if (dojo.byId(message).value == "Type your personal message.") {
            dojo.byId(message).value = "";
        }
    };
    var _messageLostFocus = function message_LostFocus() {
        if (dojo.byId(message).value == "") {
            dojo.byId(message).value = "Type your personal message.";
        }
    };
    var _messageConnectGotFocus = function messageConnect_GotFocus() {
        if (dojo.byId(connectMessage).value == "Type your personal message.") {
            dojo.byId(connectMessage).value = "";
        }
    };
    var _messageConnectLostFocus = function messageConnect_LostFocus() {
        if (dojo.byId(connectMessage).value == "") {
            dojo.byId(connectMessage).value = "Type your personal message.";
        }
    };
    /* deprecated globals - please remove if you are sure they are not used from xhtml */
    subjectGotFocus = function(){
      dojo.deprecated("subjectGotFocus", "to be removed", "1.0.0");
      _subjectGotFocus();
    };
    subjectLostFocus = function(){
      dojo.deprecated("subjectGotFocus", "to be removed", "1.0.0");
      _subjectLostFocus();
    };    
    messageGotFocus = function(){
      dojo.deprecated("subjectGotFocus", "to be removed", "1.0.0");
      _messageGotFocus();
    };
    messageLostFocus = function(){
      dojo.deprecated("subjectGotFocus", "to be removed", "1.0.0");
      _messageLostFocus();
    };
    messageConnectGotFocus = function(){
      dojo.deprecated("subjectGotFocus", "to be removed", "1.0.0");
      _messageConnectGotFocus();
    };
    messageConnectLostFocus = function(){
      dojo.deprecated("subjectGotFocus", "to be removed", "1.0.0");
      _messageConnectLostFocus();
    };
    
    dojo.connect(dojo.byId(subject), 'onfocus', _subjectGotFocus);
    dojo.connect(dojo.byId(subject), 'onblur', _subjectLostFocus);
    dojo.connect(dojo.byId(message), 'onfocus', _messageGotFocus);
    dojo.connect(dojo.byId(message), 'onblur', _messageLostFocus);
    dojo.connect(dojo.byId(connectMessage), 'onfocus', _messageConnectGotFocus);
    dojo.connect(dojo.byId(connectMessage), 'onblur', _messageConnectLostFocus);
},

SetMostFocus : function () {
    if (dojo.byId('commentBody') !== null && dojo.byId('commentBody') !== undefined) {
      dojo.byId('commentBody').focus();
      dojo.byId('commentBody').blur();
    }
},

ReportTopic1 : function (ajaxFunction) {
    dojo.xhrPost(
        {
          url: ajaxFunction,
          handle: function(response, ioargs){
            var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
            var reported = json.reported;
            var alreadyreported = json.alreadyreported;
            if (reported) {
                dojo.byId('reporttopic').innerHTML ="Topic Reported";
            }
            if (alreadyreported) {
              dojo.byId('reporttopic').innerHTML ="Topic is already reported";
            }
          }
        });
},

fnCloseMessage : function (Rowkey) {
    dojo.byId('dvMessage' + Rowkey).style.display = 'none';
},

fnCloseMessageSent : function (Rowkey) {
    dojo.byId('dvMessageSent' + Rowkey).style.display = 'none';
},

fnCloseConnectionSent : function (Rowkey) {
    dojo.byId('dvConnectionSent' + Rowkey).style.display = 'none';
},

/**
 * Where is this function used.
 * Seems to be a duplicate of dj.community.Comments.ReportComment
 */
ReportComment : function (siteroot, CommentId) {
    var args = { commentid: CommentId,
        mode: 0,
        firstName: null,
        lastName: null
    };

    dj.module.communityUser.ajaxPost(siteroot + "/comments/report.sync", args, function(transport, json) {

        /* User is a community user and hence, successful post */
        if (transport.xhr.status == 200) {
            dojo.byId('reportcomment' + CommentId).innerHTML = transport.xhr.responseText;
        }
        /* User is not a community user */
        else if (transport.xhr.status == 300) {

            dj.module.communityUser.handleError300(siteroot + "/comments/report.sync", args, json.FirstName, json.LastName, function(transport, json) {
                if (transport.xhr.status == 200) {
                    dojo.byId('reportcomment' + CommentId).innerHTML = transport.xhr.responseText;
                }
            });
        }
        else if (transport.xhr.status == 301) {
            dj.module.communityUser.handleError301(json.FirstName, json.LastName);
        }
    });
},

fnSendMessage : function (siteroot, Rowkey) {
    var recipients = dj.community.communityintegration.trim(dojo.byId('hdnMemberUri' + Rowkey).value);
    var subject = dj.community.communityintegration.trim(dojo.byId('msgsubject' + Rowkey).value);
    var content = dj.community.communityintegration.trim(dojo.byId('msgeditor' + Rowkey).value);

    if (subject.length <= 0 || subject == 'Subject') {
        dojo.byId('errorMsg' + Rowkey).style.display = "block";
        dojo.byId('errorMsg' + Rowkey).innerHTML = "Please enter valid subject.";
        return false;
    }
    if (content.length <= 0 || content == 'Type your personal message.') {
        dojo.byId('errorMsg' + Rowkey).style.display = "block";
        dojo.byId('errorMsg' + Rowkey).innerHTML = "Please enter valid message.";
        return false;
    }

    subject = dj.community.communityintegration.fnReplaceHTMLTags(subject);
    content = dj.community.communityintegration.fnReplaceHTMLTags(content);

    var targetElement = 'dvMessage' + Rowkey;
    var messageSent = 'dvMessageSent' + Rowkey;

    var args = { recipients: recipients,
        subject: subject,
        content: content,
        mode: 0,
        firstName: null,
        lastName: null
    };
    dj.module.communityUser.ajaxPost(siteroot + "/member/sendmessage.sync", args, function(transport, json) {
        /* User is a community user and hence, successful post */
        if (transport.xhr.status == 200) {
            dojo.byId('errorMsg' + Rowkey).innerHTML = json.errorMsg;
            dojo.byId(targetElement).style.display = 'none';
            dojo.byId(messageSent).style.display = 'block';
        }
        /* User is not a community user */
        else if (transport.xhr.status == 300) {
            dj.module.communityUser.handleError300(siteroot + "/member/sendmessage.sync", args, json.FirstName, json.LastName, function(transport, json) {
                if (transport.xhr.status == 200) {
                    dojo.byId('errorMsg' + Rowkey).innerHTML = json.errorMsg;
                    dojo.byId(targetElement).style.display = 'none';
                    dojo.byId(messageSent).style.display = 'block';
                }
            });
        } else if (transport.xhr.status == 301) {
            dj.module.communityUser.handleError301(json.FirstName, json.LastName);
        }
    });
},

fnCloseConnect : function (Rowkey) {
    dojo.byId('dvConnect' + Rowkey).style.display = 'none';
},

fnSendInvite : function (siteroot, rowKey) {
    var name = dj.community.communityintegration.trim(dojo.byId('hdnMemberUri' + rowKey).value);
    var message = dj.community.communityintegration.trim(dojo.byId('txtMessage' + rowKey).value);

    message = dj.community.communityintegration.fnReplaceHTMLTags(message);
    if (message.length <= 0 || message == 'Type your personal message.') {
        dojo.byId('errorMsgInvite' + rowKey).style.display = "block";
        dojo.byId('errorMsgInvite' + rowKey).innerHTML = "Please enter valid message.";
        return false;
    }

    var targetElement = 'dvConnect' + rowKey;
    var messageSent = 'dvConnectionSent' + rowKey;


    var args = { name: name,
        message: message,
        mode: 0,
        firstName: null,
        lastName: null
    };

    dj.module.communityUser.ajaxPost(siteroot + "/member/InviteFriend.sync", args, function(transport, json) {

        /* User is a community user and hence, successful post */
        if (transport.xhr.status == 200) {
            dojo.byId('errorMsgInvite' + rowKey).innerHTML = json.errorMsg;
            dojo.byId(targetElement).style.display = 'none';
            dojo.byId(messageSent).style.display = 'block';
        } else
        /* User is not a community user */
            if (transport.xhr.status == 300) {

            dj.module.communityUser.handleError300(siteroot + "/member/InviteFriend.sync", args, json.FirstName, json.LastName, function(transport, json) {
                if (transport.xhr.status == 200) {
                    dojo.byId('errorMsgInvite' + rowKey).innerHTML = json.errorMsg;
                    dojo.byId(targetElement).style.display = 'none';
                    dojo.byId(messageSent).style.display = 'block';
                }
            });
        } else if (transport.xhr.status == 301) {
            dj.module.communityUser.handleError301(json.FirstName, json.LastName);
        }
    });
},

GotFocus : function Connect_GotFocus() {
    if (dojo.byId('txtMessage${Rowkey}').value == "Type your personal message") {
        dojo.byId('txtMessage${Rowkey}').value = "";
    }
},

LostFocus : function Connect_LostFocus() {
    if (dojo.byId('txtMessage${Rowkey}').value == "") {
        dojo.byId('txtMessage${Rowkey}').value = "Type your personal message";
    }
},

fillSubCategoryJS : function () {
    var parentCategoryId = dojo.byId('Category').value;

    if (parentCategoryId == '-1') {
        dojo.byId('SubCategoryId').options.length = 0;
        dojo.byId('SubCategoryId').options[0] = new Option('Sub-category', '-1');
        return;
    }
    var values = dojo.byId('hdnValues').value;
    var categories = values.split("~");
    dojo.byId('SubCategoryId').options.length = 0;
    var SelectedSubCategoryId = dojo.byId('hdnSubCategoryId').value;

    for (i = 0; i < categories.length; i++) {
        var subCatInfo = categories[i];
        var subCategories = subCatInfo.split("^");
        var categoryId = subCategories[0];
        if (categoryId == parentCategoryId) {
            for (j = 1; j < subCategories.length; j++) {
                var subCatValues = subCategories[j].split("=");
                var subCategoryText = subCatValues[0];
                var subCategoryId = subCatValues[1];
                dojo.byId('SubCategoryId').options[j - 1] = new Option(subCategoryText, subCategoryId);
                if (SelectedSubCategoryId == subCategoryId) {
                    dojo.byId('SubCategoryId').options[j - 1].selected = true;
                }
            }
        }
    }

    if (SelectedSubCategoryId == -1) {
        dojo.byId('SubCategoryId').options[j - 1] = new Option('Sub-category', '-1');
        dojo.byId('SubCategoryId').options[j - 1].selected = true;
    }
},

setCategorySubcategory : function (categoryId, subCategoryId) {
    var categoryDropDown = dojo.byId('Category');

    for (i = 0; i < categoryDropDown.options.length; i++) {
        if (categoryDropDown.options[i].value == categoryId) {
            categoryDropDown.options[i].selected = true;
        }
    }

    if (subCategoryId === null) {
        subCategoryId = -1;
    }

    dojo.byId('hdnSubCategoryId').value = subCategoryId;
    dj.community.communityintegration.fillSubCategoryJS();

},

SortArticleComments : function (SBNumber, siteRoot, index, sortId) {
    dojo.byId('sortId').value = sortId;
    dojo.xhrPost(
        {
          url: siteRoot + "/public/ArticleComments.html",
          postData: dojo.objectToQuery({ SBNumber: SBNumber, index: index, sortIndex: sortId }),
          load: function(data, ioargs){
           dojo.place(data.replace(/^\s*/, ""), dojo.byId('Commentsblock'),"only");
          },          
          error: function(exception, ioargs){
            console.error('Exception occured while SortArticleComments : ' + exception);
          }      
        });    
},

/************** Remove HTML tags **************/ 
fnReplaceHTMLTags : function (strValue) {
    strValue = strValue.replace(/</g, '&lt;');
    strValue = strValue.replace(/>/g, '&gt;');
    return strValue;
},

trim : function trim(str) {
    return str.replace(/^\s+|\s+$/, '');
}
};

/* Deprecated global namespaces */

function toggleContent(id){
  dojo.deprecated("toggleContent", "use dj.community.communityintegration.toggleContent instead", "1.0.0");
  dj.community.communityintegration.toggleContent(id);
}

function CommunityIntegration(siteroot, fullsiteroot){
  dojo.deprecated("CommunityIntegration", "use dj.community.communityintegration.CommunityIntegration instead", "1.0.0");
  dj.community.communityintegration.CommunityIntegration(siteroot, fullsiteroot);
}

function postQuestion(siteroot, fullsiteroot) {
  dojo.deprecated("postQuestion", "use dj.community.communityintegration.postQuestion instead", "1.0.0");
  dj.community.communityintegration.postQuestion(siteroot, fullsiteroot);
}

function answerQuestion(siteroot, fullsiteroot) {
  dojo.deprecated("answerQuestion", "use dj.community.communityintegration.answerQuestion instead", "1.0.0");
  dj.community.communityintegration.answerQuestion(siteroot, fullsiteroot);
}

function  fnOpenMessageBox(targetElement, URI, rowKey) {
  dojo.deprecated("fnOpenMessageBox", "use dj.community.communityintegration.fnOpenMessageBox instead", "1.0.0");
  dj.community.communityintegration.fnOpenMessageBox(targetElement, URI, rowKey);
}

function SetMostFocus(){
  dojo.deprecated("SetMostFocus", "use dj.community.communityintegration.SetMostFocus instead", "1.0.0");
  dj.community.communityintegration.SetMostFocus();
}

function ReportTopic1(ajaxFunction) {
  dojo.deprecated("ReportTopic1", "use dj.community.communityintegration.ReportTopic1 instead", "1.0.0");
  dj.community.communityintegration.ReportTopic1(ajaxFunction);
}

function fnCloseMessage(Rowkey) {
  dojo.deprecated("fnCloseMessage", "use dj.community.communityintegration.fnCloseMessage instead", "1.0.0");
  dj.community.communityintegration.fnCloseMessage(Rowkey);
}

function fnCloseMessageSent(Rowkey) {
  dojo.deprecated("fnCloseMessageSent", "use dj.community.communityintegration.fnCloseMessageSent instead", "1.0.0");
  dj.community.communityintegration.fnCloseMessageSent(Rowkey);
}

function fnCloseConnectionSent(Rowkey) {
  dojo.deprecated("fnCloseConnectionSent", "use dj.community.communityintegration.fnCloseConnectionSent instead", "1.0.0");
  dj.community.communityintegration.fnCloseConnectionSent(Rowkey);
}

function ReportComment(siteroot, CommentId) {
  dojo.deprecated("ReportComment", "use dj.community.communityintegration.ReportComment instead", "1.0.0");
  dj.community.communityintegration.ReportComment(siteroot, CommentId);
}

function fnSendMessage(siteroot, Rowkey) {
  dojo.deprecated("fnSendMessage", "use dj.community.communityintegration.fnSendMessage instead", "1.0.0");
  dj.community.communityintegration.fnSendMessage(siteroot, Rowkey);
}

function fnCloseConnect(Rowkey) {
  dojo.deprecated("fnCloseConnect", "use dj.community.communityintegration.fnCloseConnect instead", "1.0.0");
  dj.community.communityintegration.fnCloseConnect(Rowkey);
}

function fnSendInvite(siteroot, rowKey) {
  dojo.deprecated("fnSendInvite", "use dj.community.communityintegration.fnSendInvite instead", "1.0.0");
  dj.community.communityintegration.fnSendInvite(siteroot, rowKey);
}

function GotFocus(){
  dojo.deprecated("GotFocus", "use dj.community.communityintegration.GotFocus instead", "1.0.0");
  dj.community.communityintegration.GotFocus();
}

function LostFocus(){
  dojo.deprecated("LostFocus", "use dj.community.communityintegration.LostFocus instead", "1.0.0");
  dj.community.communityintegration.LostFocus();
}

function fillSubCategoryJS(){
  dojo.deprecated("fillSubCategoryJS", "use dj.community.communityintegration.fillSubCategoryJS instead", "1.0.0");
  dj.community.communityintegration.fillSubCategoryJS();
}

function setCategorySubcategory(categoryId, subCategoryId){
  dojo.deprecated("setCategorySubcategory", "use dj.community.communityintegration.setCategorySubcategory instead", "1.0.0");
  dj.community.communityintegration.setCategorySubcategory(categoryId, subCategoryId);
}

function SortArticleComments(SBNumber, siteRoot, index, sortId) {
  dojo.deprecated("SortArticleComments", "use dj.community.communityintegration.SortArticleComments instead", "1.0.0");
  dj.community.communityintegration.SortArticleComments(SBNumber, siteRoot, index, sortId);
}

function fnReplaceHTMLTags(strValue) {
  dojo.deprecated("fnReplaceHTMLTags", "use dj.community.communityintegration.fnReplaceHTMLTags instead", "1.0.0");
  return dj.community.communityintegration.fnReplaceHTMLTags(strValue);
}

function trim(str){
  dojo.deprecated("trim", "use dj.community.communityintegration.trim instead", "1.0.0");
  return dj.community.communityintegration.trim(str);
}

/* for the ask a question module. */
dojo.addOnLoad(function() {
  if (dojo.byId('hdnValues')) {
    dj.community.communityintegration.fillSubCategoryJS();
  }
});


/*global dojo dj window document setTimeout confirm */
dojo.provide("dj.community.Comments");

dojo.require("dj.util.Element");
dojo.require("dj.community.feedback");
dojo.require("dj.community.communityintegration");
////////////////////////////////////////////////////////
// Comments: single object created to manage the comments on the page
////////////////////////////////////////////////////////
dj.community.Comments = function(elt, subject, ajaxRoot, contentRoot, replyContainer, options) {

    options = options || {};

    this.ShowCommentsFancily = dojo.hitch(this, dj.community.Comments.prototype.__ShowCommentsFancily);
    this.HelpfulComment = dojo.hitch(this, dj.community.Comments.prototype.__HelpfulComment);

    this._commentsList = document.createElement("div");

    this._state = {};
    this._ajaxRoot = ajaxRoot;
    this._contentRoot = contentRoot;
    this._subject = subject;
    this._reply2Id = 0;
    this._replyLevel = 0;
    this._replyContainer = replyContainer;
    this._targetContainer = options.targetContainer;
    this._fnOnNewCommentBox = options.callbackOnNewCommentBox;
    this._fnOnPostComment = options.callbackOnPostComment;
    this._fnCommentPageChange = options.callbackOnCommentPageChange;
    this._ignoreProfileWizard = options.ignoreProfileWizard;
};

dj.community.Comments.SetCommentFocus = function() {
  if (dojo.byId('commentBody')){
      dojo.byId('commentBody').focus();
  }else if (dojo.byId('topicreplyarea')){
      window.scrollTo(0, dojo.byId('topicreplyarea').offsetTop);
  }
};

dj.community.Comments.ShowInlineMessage = function(eltId, msg) {
  var messageContainer = dojo.byId(eltId);
  if (messageContainer === null || typeof messageContainer == "undefined") {
    return;
  }

  messageContainer.innerHTML = msg;
  if (msg != "") {
    messageContainer.style.visibility = 'visible';
  } else {
    messageContainer.style.visibility = 'hidden';
  }
};

dj.community.Comments.__ReplaceHtmlTags = function(strValue) {
  strValue = strValue.replace(/</g, '&lt;');
  strValue = strValue.replace(/>/g, '&gt;');
  return strValue;
};

dj.community.Comments.prototype.Post = function Topic_Post(comment, trackReplies) {

  if (ismember == "False" || isAccountValid == "False") { /* global, leaving as original code */
      dojo.byId('ProfileWizard').style.display = "block";
      dojo.byId('hdnCommentId').value = commentEntryId; /* global, leaving as original code */
      dojo.byId('hdnCalledMethod').value = "ReplyComment";
      window.scroll(0, 0);
      return false;
  }
  dj.community.Comments.ShowInlineMessage("errorOnPost", "");
  if (comment.length === 0) {
      dj.community.Comments.ShowInlineMessage("errorOnPost", strResourceMsg[0]);/* global, leaving as original code*/
      return false;
  }
  if (comment.length >= 10000) {
      dj.community.Comments.ShowInlineMessage("errorOnPost", strResourceMsg[1]);/* global, leaving as original code*/
      return false;
  }

  comment = dj.community.Comments.__ReplaceHtmlTags(comment);
  comment = comment.replace(/\n/g, "<br />");
  if (dojo.byId('commentBody')) {
    dojo.byId('commentBody').value = '';
  }
  var args = dojo.mixin({},{ content: comment, reply2id: this._reply2Id, trackReplies: trackReplies },this._subject);
  var that=this;
  if (this._reply2Id > 1) {
    dojo.xhrPost(
        {
          url: this._ajaxRoot + "/group/postcomment.sync",
          postData: dojo.objectToQuery(args),
          load: function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), that._commentsList,"only");   
          },
          handle: function(response, ioargs){
            var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
            that.ShowCommentsFancily(ioargs, json);
          }
        }
        );
  }
  else {
    dojo.xhrPost(
        {
          url: this._ajaxRoot + "/group/postcomment.sync",
          postData: dojo.objectToQuery(args),
          load: function(data, ioargs){
            dojo.place(data.replace(/^\s*/, ""), dojo.byId("topiccomments"),"only");   
          },
          handle: function(response, ioargs){
            var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
            if (json.success == "False") {
              dojo.byId('commentBody').value = comment;
              dj.community.Comments.ShowInlineMessage("errorOnPost", json.errorMsg);
            }
          }
        }
        );        
  }
};

dj.community.Comments.prototype.PostArticleComment = function Topic_PostArticleComment(comment, joinCommunity, trackReplies, options) {

  options = options || {};
  var errMsgElm = options.errormsgelm ? options.errormsgelm : "errorOnPost";
  var commentBoxId = options.commentboxid;

  dj.community.Comments.ShowInlineMessage(errMsgElm, "");
  if (comment.length === 0) {
      dj.community.Comments.ShowInlineMessage(errMsgElm, "Please enter your comment and then click post.");
      return false;
  }

  if (comment.length >= 10000) {
      comment = comment.substring(0, 9999);
      /*dj.community.Comments.ShowInlineMessage(errMsgElm, "Description cannot exceed beyond 1000 chars.");
       return false;
     */
  }

  comment = dj.community.Comments.__ReplaceHtmlTags(comment);
  comment = comment.replace(/\n/g, "<br />");
  var args = dojo.mixin({},{ content: comment, reply2id: this._reply2Id, joinCommunity: joinCommunity, trackReplies: trackReplies },this._subject);
  
  var that = this;
  
  if (this._reply2Id > 1) {
    dojo.xhrPost(
        {
          url: this._ajaxRoot + "/group/postarticlecomment.sync",
          postData: dojo.objectToQuery(args),
          load: function(data, ioargs){
            dojo.place(data.replace(/^\s*/, ""), that._commentsList,"only");
          },
          handle: function(response, ioargs){
            var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
            
            if (!json.success) {
              dj.community.Comments.ShowInlineMessage(errMsgElm, json.errorMsg);
              if (dojo.byId(commentBoxId)){
                dojo.byId(commentBoxId).value = comment;
              }
            }
            
            if (!json.userInfo.isSuspended){
              that.ShowCommentsFancily(ioargs, json);
            }
            if (that._fnOnPostComment !== undefined){
              that._fnOnPostComment(json.userInfo, json.userInfo.isSuspended);
            }
          }
        }
    ); 
  }
  else {
      if (this._targetContainer) {
        dojo.xhrPost(
            {
              url: this._ajaxRoot + "/group/postarticlecomment.sync",
              postData: dojo.objectToQuery(args),
              load: function(data, ioargs){
                dojo.place(data.replace(/^\s*/, ""), that._targetContainer,"only");
              },
              handle: function(response, ioargs){
                var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
                if (!json.success) {
                  dj.community.Comments.ShowInlineMessage(errMsgElm, json.errorMsg);
                  if (dojo.byId(commentBoxId)){
                    dojo.byId(commentBoxId).value = comment;
                  }
                }
                
                if (dojo.byId('newcommentarea0')) {
                  window.scrollTo(0, dojo.byId('newcommentarea0').offsetTop - 200);
                }
                if (that._fnOnNewCommentBox !== undefined){
                  that._fnOnNewCommentBox();
                }
                if (that._fnOnPostComment !== undefined){
                  that._fnOnPostComment(json.userInfo, false, json.commentsTotalCount);
                }
                setTimeout(function(){
                  dj.community.feedback.toggleComments('fade_slider', that._ajaxRoot);
                },0);
              }
            }
        );
      } else {
          dojo.xhrPost(
              {
                url: this._ajaxRoot + "/group/postarticlecomment.sync",
                postData: dojo.objectToQuery(args),
                handle: dojo.hitch(this, function(response, ioargs){
                  var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
                  if (this._fnOnPostComment !== undefined){
                    this._fnOnPostComment(json.userInfo, false, json.commentsTotalCount);
                  }
                  if (!json.success) {
                    dj.community.Comments.ShowInlineMessage(errMsgElm, json.errorMsg);
                    if (dojo.byId(commentBoxId)){
                      dojo.byId(commentBoxId).value = comment;
                    }
                  }
                  if (this._fnOnPostComment !== undefined){
                    this._fnOnPostComment(json.userInfo, false, json.commentsTotalCount);
                  }
                })
              }
          );          
      }
  }
};

dj.community.Comments.prototype.TrackReplies = function Topic_TrackReplies(commentEntryId) {
  var args = { commentEntryId: commentEntryId };
  var elt = dojo.byId('track' + commentEntryId);

  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/group/trackreplies.sync",
        postData: dojo.objectToQuery(args),
        load: function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), elt,"only");
        }
      }
  );
};

/*TODO: Prototype-To-dojo migration not tested*/
dj.community.Comments.prototype.TrackRepliesStop = function Topic_TrackRepliesStop(commentEntryId) {
  var args = { commentEntryId: commentEntryId };
  var elt = dojo.byId('track' + commentEntryId);

  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/group/trackrepliesstop.sync",
        postData: dojo.objectToQuery(args),
        load: function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), elt,"only");
        }
      }
  );
};

dj.community.Comments.prototype.__ShowCommentsFancily = function Comments_ShowCommentsFancily(transport, json) {
  if (!json.success) {
      dj.community.Comments.ShowInlineMessage("errorOnPost", json.errorMsg);
  } else {
      dojo.byId('newcommentarea' + this._reply2Id).innerHTML += this._commentsList.innerHTML.replace('wrote:', 'replied:');
      dj.util.Element.show(dojo.byId('newcommentarea' + this._reply2Id).parentNode);

      /* hide the old container */
      if (this._replyContainer !== null){
        dj.util.Element.hide(this._replyContainer);
      }
      /* remember the new one */
      this._replyContainer = dojo.byId('topicreplyarea');

      this._replyContainer.appendChild(dojo.byId('newcomment'));
      if (dojo.byId('commentBody')) {
        dojo.byId('commentBody').value = '';
      }

      dj.util.Element.show(this._replyContainer);
      if (this._replyLevel > 0) {
          if (dojo.byId('track' + json.commentEntryId)) {
            dj.util.Element.hide('track' + json.commentEntryId);
          }
      }
      dojo.byId('newcommenttitle').innerHTML = "Add a Comment";
      this._reply2Id = 0;
      this._replyLevel = 0;
  }
};

dj.community.Comments.prototype.OpenReplyBox = function Topic_OpenReplyBox(targetElement, commentEntryId, reply2Name) {
  if (isLoggedIn == "False") {/*global, leaving as original code*/
      RedirectToLogin();/*global, leaving as original code*/
  }
  else if (ismember == "False" || isAccountValid == "False") {
      dojo.byId('ProfileWizard').style.display = "block";
      dojo.byId('hdnCommentId').value = commentEntryId;
      dojo.byId('hdnCalledMethod').value = "ReplyComment";
      window.scroll(0, 0);
      return false;
  }
  else {
      if (dojo.byId('isGroupMember').value != 'Active') {
          dojo.byId('joinGroup' + commentEntryId).style.display = 'block';
          return false;
      }

      dj.community.Comments.ShowInlineMessage("errorOnPost", "");
      this._reply2Id = commentEntryId;
      dj.community.Comments.prototype.ReplyBox(targetElement, commentEntryId, reply2Name);
  }
};

dj.community.Comments.prototype.ReplyBox = function Topic_ReplyBox(targetElement, commentEntryId, reply2Name, replyLevel) {
  if (!this._ignoreProfileWizard && (ismember == "False" || isAccountValid == "False")) {
    dojo.byId('ProfileWizard').style.display = "block";
    dojo.byId('hdnCommentId').value = commentEntryId;
    dojo.byId('hdnCalledMethod').value = "ReplyComment";
      window.scroll(0, 0);
      return false;
  }
  this.CancelEditComment();
  dj.community.Comments.ShowInlineMessage("errorOnPost", "");
  this._reply2Id = commentEntryId;
  this._replyLevel = replyLevel;

  /* hide the old container 
  //if(this._replyContainer != null)
  // this._replyContainer.hide();
  */
  /* remember the new one */
  this._replyContainer = dojo.byId(targetElement);

  this._replyContainer.appendChild(dojo.byId('newcomment'));
  if (dojo.byId('commentBody')) {
    dojo.byId('commentBody').value = '';
  }
  dj.util.Element.show(this._replyContainer);
  try {
      if (replyLevel > 0){
        dj.util.Element.hide(dojo.query('#trackreply','newcomment')[0]);
      }else{
          dj.util.Element.show(dojo.query('#trackreply','newcomment')[0]);
      }
  } catch (e) { }




  if (reply2Name) {
    dojo.byId('newcommenttitle').innerHTML = "Reply to " + reply2Name + "'s comment";
  } else {
    dojo.byId('newcommenttitle').innerHTML = "Add a Comment";
  }
  if (dojo.byId('commentBody')){
      dojo.byId('commentBody').focus();
  }
  else{
    var elementPos = dojo.position(dojo.byId('newcomment'),true);
    if (elementPos) {
        window.scrollTo(0, elementPos.y);
    }
  }
};

dj.community.Comments.prototype.EditComment = function Topic_EditComment(commentEntryId) {
  this.CancelEditComment();
  var args = { commentEntryId: commentEntryId };
  dojo.byId('newcomment').style.display = 'none';
  var commentEntryElt = dojo.byId('commententry' + commentEntryId);
  var bodyElt;
  if (commentEntryElt) {
      bodyElt = commentEntryElt;
      /* commentEntryElt.getElementsByClassName('body')[0]; */
  }
  if (bodyElt) {
    dojo.byId('editcomment' + commentEntryId).style.display = 'none';
      this._bubbleContentHeight = bodyElt.offsetHeight;

      dojo.xhrPost(
          {
            url: this._ajaxRoot + "/group/editcomment.sync",
            postData: dojo.objectToQuery(args),
            load: function(data, ioargs){
              dojo.place(data.replace(/^\s*/, ""), bodyElt,"only");   
            }
          }
          );
  }
};

dj.community.Comments.prototype.ReportComment = function(siteroot, commentId) {
dojo.xhrPost(
    {
      url: this._ajaxRoot + "/comments/report.sync?commentId=" + commentId,
      postData: "",
      load: function(data, ioargs){
        dojo.byId("reportcomment" + commentId).innerHTML = data;
      }
    });    
};

dj.community.Comments.prototype.RemoveCommentByGroupOwner = function(commentId, groupName) {
  if (!confirm('Are you sure you wish to remove the comment?')) {
      return;
  }
 
  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/group/removecommentbygroupowner.sync",
        postData: dojo.objectToQuery({ commentId: commentId, groupName: groupName }),
        handle: function(response, ioargs){
            var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));          
            if (json.totalcnt <= 0){ 
              return; 
            }
            dojo.fade({node:'commententry' + commentId, duration:500}).play();
          }
      });
};

dj.community.Comments.prototype.PostEditComment = function Topic_PostEditComment(comment, commentEntryId) {
  comment = dj.community.Comments.__ReplaceHtmlTags(comment);
  comment = comment.replace(/\n/g, "<br />");

  if (comment == '') {
      dj.community.Comments.ShowInlineMessage("errorOnEditPost", 'Please enter your comment and then click post.');
      return false;
  } else if (comment.length >= 10000) {
      dj.community.Comments.ShowInlineMessage("errorOnEditPost", 'Comment should not be more than 10000 chars');
      return false;
  }

  var args = dojo.mixin({},{ content: comment },this._subject,{ commentEntryId: commentEntryId });

  var tempDiv = document.createElement("div");

  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/group/posteditcomment.sync",
        postData: dojo.objectToQuery(args),
        load: function(data, ioargs){
          tempDiv.innerHTML = data.replace(/^\s*/, "");   
        },
        handle: dojo.hitch(this, function(response, ioargs){
            var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));            
            if (!json.success) {
                dj.community.Comments.ShowInlineMessage("errorOnEditPost", json.errorMsg);
            } else {
                dojo.byId('commententry' + commentEntryId).innerHTML = tempDiv.innerHTML;
                dojo.byId('newcomment').style.display = '';
                /* hide the old container */
                if (this._replyContainer !== null){
                  dj.util.Element.hide(this._replyContainer);
                }
                /* remember the new one */
                this._replyContainer = dojo.byId('topicreplyarea');
                this._replyContainer.appendChild(dojo.byId('newcomment'));
                if (dojo.byId('commentBody')) {
                  dojo.byId('commentBody').value = '';
                }
      
                dj.util.Element.show(this._replyContainer);
                dojo.byId('newcommenttitle').innerHTML = "Add a Comment";
                this._reply2Id = 0;
            }              
        })
      }
      );
};

dj.community.Comments.SortComments = function (groupName, topicName, index, sortId) {
  dojo.byId('sortId').value = sortId;
  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/group/sortComment.sync",
        postData: dojo.objectToQuery({ groupname: groupName, topicname: topicName, index: index, sortIndex: sortId }),
        load: function(data, ioargs){
        dojo.place(data.replace(/^\s*/, ""), dojo.byId("topiccomments"),"only");   
      }
      }
  ); 
};

dj.community.Comments.prototype.__PostEditCommentComplete = function Topic_PostEditCommentComplete(transport, json) {
  /* Update the "TimeAgo" and "EditComment" spans with their new elts */
  var editCommentId = json.commentEntryId;

  var editSpanContext = this._editSpanManager.Find(editCommentId);
  if (editSpanContext) {
      editSpanContext._elt = dojo.byId("editcomment" + editCommentId);
  }

  var timeAgoContext = this._agoSpanManager.Find(editCommentId);
  if (timeAgoContext) {
      timeAgoContext._elt = dojo.byId("timeago" + editCommentId);
      dojo.removeClass(dojo.byId("timeago" + editCommentId), "timeago");

  }

  this._editSpanManager.Sweep();
  this._agoSpanManager.Sweep();
  this._editCommentEditor = null;

  this.BeginUpdating();
};

dj.community.Comments.prototype.CancelEditComment = function Topic_CancelEditComment() {
  var prevEditcomment = dojo.byId('commentarea');
  if (!prevEditcomment){ 
    return;
  }
  var commentEntryId = document.getElementById('EditcommentEntryId').value;

  dojo.byId('newcomment').style.display = '';
  /* hide the old container */
  if (this._replyContainer !== null && this._replyContainer !== undefined) {
      this._replyContainer.style.display = 'none';
  }
  /* remember the new one */
  this._replyContainer = dojo.byId('topicreplyarea');

  this._replyContainer.appendChild(dojo.byId('newcomment'));
  if (dojo.byId('commentBody')) {
    dojo.byId('commentBody').value = '';
  }
  this._replyContainer.style.display = 'block';
  dojo.byId('newcommenttitle').innerHTML = "Add a Comment";
  this._reply2Id = 0;

  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/group/canceleditcomment.sync",
        postData: dojo.objectToQuery({ commentEntryId: commentEntryId }),
        load: function(data, ioargs){
          dojo.byId('commententry' + commentEntryId).innerHTML = data.replace(/^\s*/, "");   
        },
        handle: dojo.hitch(this, function(response, ioargs){
          var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));            
          this.PostEditCommentComplete(ioargs, json);
        })
      }
      );     
};

dj.community.Comments.prototype.__HelpfulComment = function(commentEntryId) {
  dj.community.Comments.HelpfulComment(this._ajaxRoot, commentEntryId);
};

dj.community.Comments.HelpfulComment = function(ajaxroot, commentEntryId) {
  var args = { commentEntryId: commentEntryId };
  var elt = dojo.byId('numhelpful' + commentEntryId);

  dojo.xhrPost(
      {
        url: ajaxroot + "/components/comments/helpfulcomment.sync",
        postData: dojo.objectToQuery(args),
        load: function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), elt,"only");   
        }
      });     
};


dj.community.Comments.prototype.GetArticlecommentsInitialPage = function Topic_GetArticleInitialPage() {
  /* See if we are linking directly to a comment, IE can not seem to move to the fragment
   corectly when the element we want to move to is AJAXed into the document */
  this._commentId = "";
  var results = unescape(window.location.href).match(/commentId=(\d+)/);
  if (results && (results.length == 2)) {
      this._commentId = results[1];
  }

  var args = dojo.mixin({}, this._subject, { commentEntryId: this._commentId });
  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/mdcrpc/comments/GetArticlecommentsInitialPage.sync",
        postData: dojo.objectToQuery(args),
        load: dojo.hitch(this, function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), this._targetContainer,"only");   
        }),
        handle: dojo.hitch(this, function(response,ioargs){
          var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));            
          if (this._fnOnNewCommentBox !== undefined){
            this._fnOnNewCommentBox(json.commentsTotalCount);
          }
          setTimeout(dojo.hitch(this,function(){
            dj.community.feedback.toggleComments('fade_slider', this._ajaxRoot);
          }),0);            
          /* Move to the comment (IE has issues using the protoType scrollTo with Ajaxed elements) */
          if (this._commentId != "") {
              if (dojo.byId('commententry' + this._commentId)) {
                  var elementPos = dojo.position(dojo.byId('commententry' + this._commentId),true);
                  if (elementPos) {
                      window.scrollTo(0, elementPos.y);
                  }
              }
              this._commentId = "";
          }            
        })
      });    
};

dj.community.Comments.prototype.GetArticlecommentsPage = function Topic_GetArticlecommentsPage(indx, sortIndex) {
  if (sortIndex === undefined) {
      sortIndex = 1;
      if (dojo.byId('sortId')){
          sortIndex = dojo.byId('sortId').value;
      }
      if (sortIndex === null || sortIndex === ''){
          sortIndex = 1;
      }
  }

  var args = dojo.mixin({ pageNumber: indx, sortIndex: sortIndex }, this._subject);

  dojo.xhrPost(
      {
        url: this._ajaxRoot + "/mdcrpc/comments/GetArticleComments.sync",
        postData: dojo.objectToQuery(args),
        load: dojo.hitch(this, function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), this._targetContainer,"only");   
        }),
        handle: dojo.hitch(this, function(response, ioargs){
          var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
          window.scrollTo(0, dojo.byId('top-of-comments').offsetTop);
          if (this._fnOnNewCommentBox !== undefined){
              this._fnOnNewCommentBox(json.commentsTotalCount);
          }
          try {
              setTimeout(dojo.hitch(this, function(){
                dj.community.feedback.toggleComments('fade_slider', this._ajaxRoot);
              }),0);
          } catch (e) { }
          if (this._fnCommentPageChange !== undefined){
              this._fnCommentPageChange();            
          }
        })
      });     
};

/* this function is not being used anywhere */
dj.community.Comments.prototype.ScrollToElementId = function Topic_ScrollToElementId(elementId) {
  var element = dojo.byId(elementId);
  if (element === null){ return ;}

  window.scrollTo(0, element.offsetTop);
};

/*This method takes the cursor to the most recently added comment.
it looks like it can be safely dropped (alex) */
dj.community.Comments.prototype.GoToMostRecentComment = function Topic_GoToMostRecentComment(sbnumber, indx) {
  var siteroot = this._ajaxRoot;
  var sortIndex = dojo.byId('sortId').value;
  if (sortIndex === null || sortIndex === '') {
      sortIndex = 1;
  }
  var iIndex = 0;
  /* If the sort order is oldest */
  if (sortIndex == 1) {
      iIndex = indx;
  }
  else if (sortIndex == 2)/* If the sort order is newest */
  {
      iIndex = 1;
  }
  
  dojo.xhrPost(
      {
        url: siteroot + "/public/ArticleComments.html",
        postData: dojo.objectToQuery({ SBNumber: sbnumber, index: iIndex, sortIndex: sortIndex }),
        load: dojo.hitch(this, function(data, ioargs){
          dojo.place(data.replace(/^\s*/, ""), this._targetContainer,"only");   
        }),
        handle: function(response, ioargs){
            if (sortIndex === 1 || sortIndex === '1') {
              var anchor_node = dojo.byId('newcommentarea0');
              if (anchor_node) {
                  window.scrollTo(0, anchor_node.offsetTop - 200);
              }
            }
        }
      });
};/*global dojo dj document*/
dojo.provide("dj.community.ArticleComments");

dojo.require("dj.util.Element");
dojo.require("dj.community.Subject");
dojo.require("dj.community.Comments");
dojo.getObject("dj.community", true);

dj.community.theTopic = undefined;


dj.community.ArticleComments = function(sbNumber, articleName, fullsiteroot, contentroot, onGetCommentsCount, onPostComment, isOpinion, onCommentPageChange, options) {

    options = options || {};

    this._fullSiteRoot = fullsiteroot;
    this._contenRoot = contentroot;
    this._forceMembership = options.forcemembership ? true : false;

    var subjectType = "story";
    if (options.istopic){
        subjectType = "grouptopic";
    }
    else if (isOpinion){
        subjectType = "opinion";
    }

    this._subject = new dj.community.Subject(sbNumber, articleName, options.href, subjectType);

    this._onGetCommentsCount = onGetCommentsCount;
    this._onPostComment = onPostComment;
    this._onCommentPageChange = onCommentPageChange;

    this._userInfo = undefined;
    this._totalCommentsCount = undefined;

    this.__Init();
};

dj.community.ArticleComments.prototype.__Init = function() {

    var updateDiv = document.createElement("div");

    var args = {};
    args = dojo.mixin(args, this._subject);

    dojo.xhrPost(
        {
        url: this._fullSiteRoot + "/mdcrpc/comments/GetArticleCommentPopupBox.sync",
          postData: dojo.objectToQuery(args),
          load: dojo.hitch(this, function(data, ioargs){
              dojo.place(data.replace(/^\s*/, ""), updateDiv,"only");
                }),
          handle: dojo.hitch(this, function(response, ioargs){
                    var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
                    this._userInfo = json.userInfo;
                    document.body.appendChild(updateDiv);
                    dojo.connect(dojo.byId('cmd0404174609'),'onclick', dj.community.HideMembershipDialog);
                    dojo.connect(dojo.byId('cmd0406115509'),'onclick', dojo.hitch(this, this.__PostAndConfirmJoin));
                    dojo.connect(dojo.byId('cmd0406115609'),'onclick', dj.community.HideMembershipDialog);
                    dojo.connect(dojo.byId('cmd0406115709'),'onclick', dj.community.HideMembershipDialog);
                    this._totalCommentsCount = json.commentCount;
                    if (this._onGetCommentsCount){
                      this._onGetCommentsCount(json.commentCount);
                    }
                 })
        }
    );

    dj.community.theTopic = new dj.community.Comments('synccomments', this._subject, this._fullSiteRoot, this._contenRoot,
        dojo.byId('topicreplyarea'),
        {
            ignoreProfileWizard: true,
            callbackOnNewCommentBox: dojo.hitch(this, this.__BindCommentBoxOnCommentsTab),
            callbackOnPostComment: dojo.hitch(this, this.__OnPostComment),
            callbackOnCommentPageChange: this._onCommentPageChange
        });
    dj.community.theTopic.HelpfulComment =
      dojo.hitch(this, dj.community.ArticleComments.prototype.__HelpfulComment);
};

dj.community.ArticleComments.prototype.GetCommentBox = function(targetContainer, slimversion) {
  if (targetContainer === undefined){
        targetContainer = this._commentBoxDiv;
  }

    this._commentBoxDiv = targetContainer;

    var args = { slimversion: slimversion ? true : false };
    args = dojo.mixin(args, this._subject);
  
    dojo.xhrPost(
        {
        url: this._fullSiteRoot + "/mdcrpc/comments/GetArticleCommentBox.sync",
          postData: dojo.objectToQuery(args),
          load: dojo.hitch(this, function(data, ioargs){
              dojo.place(data.replace(/^\s*/, ""), dojo.byId(targetContainer),"only");
                }),
          handle: dojo.hitch(this, function(data, ioargs){
                    var json = dojo.fromJson(ioargs.xhr.getResponseHeader("X-JSON"));
                    this.__OnGetCommentBox(ioargs, json);
                 })
        }
    );
};

dj.community.ArticleComments.prototype.GetComments = function(targetContainer) {
  dj.community.theTopic = new dj.community.Comments('synccomments', this._subject, this._fullSiteRoot, this._contenRoot,
        dojo.byId('topicreplyarea'),
        {
            targetContainer: targetContainer,
            ignoreProfileWizard: true,
            callbackOnNewCommentBox: dojo.hitch(this, this.__BindCommentBoxOnCommentsTab),
            callbackOnPostComment: dojo.hitch(this, this.__OnPostComment),
            callbackOnCommentPageChange: this._onCommentPageChange
        }
        );
    dj.community.theTopic.HelpfulComment =
      dojo.hitch(this, dj.community.ArticleComments.prototype.__HelpfulComment);
    dj.community.theTopic.GetArticlecommentsInitialPage();
};

dj.community.ArticleComments.prototype.__OnGetCommentBox = function(transport, json) {
    if (dojo.byId('commentbox0817091638') && dojo.byId('slimbox0817091645')){
      dj.util.Element.hide('commentbox0817091638');
    }

    if (!dojo.byId('cmd0409091704')){
        return;
    }

    dojo.connect(dojo.byId('cmd0409091704'),'onclick', dojo.hitch(this, function() {
        if (this._onPostComment){
            this._onPostComment();
        }
    }));

    dojo.connect(dojo.byId('clearCommentBody0'),'onclick', function() {
        dojo.byId('commentBody0').value = '';
        dojo.byId('commentBody0').focus();
        dj.community.Comments.ShowInlineMessage("errorOnPost0", "");
    });

    dojo.connect(dojo.byId('postComment0'),'onclick', dojo.hitch(this, function(event) {
        dj.community.Comments.ShowInlineMessage("errorOnPost0", "");
        if (dojo.byId('commentBody0').value.length === 0) {
            dj.community.Comments.ShowInlineMessage("errorOnPost0", "Please enter your comment and then click post.");
            return false;
        }
        dj.community.Comments.ShowInlineMessage("errorOnPost0", "");
        this._currentCommentBox = dojo.byId('commentBody0');
        this._currentTrackReply = dojo.byId('cbxtrackreply0');
        this.__PostArticleComment(event.target);
    }));
};

dj.community.ArticleComments.prototype.__BindCommentBoxOnCommentsTab = function(total_comments_count) {
    if (dojo.byId('cmd0406091327')) {
      
      dojo.attr("cmd0406091327","onclick","");
        
        dojo.connect(dojo.byId('cmd0406091327'),'onclick', dojo.hitch(this, function(event) {
            dj.community.Comments.ShowInlineMessage("errorOnPost", "");
            if (dojo.byId('commentBody').value.length === 0) {
                dj.community.Comments.ShowInlineMessage("errorOnPost", "Please enter your comment and then click post.");
                return false;
            }
            dj.community.Comments.ShowInlineMessage("errorOnPost", "");
            this._currentCommentBox = dojo.byId('commentBody');
            this._currentTrackReply = dojo.byId('cbxtrackreply');
            this.__PostArticleComment(event.target);
        }));
    }
    if (total_comments_count !== undefined) {
        this._totalCommentsCount = total_comments_count;
        if (this._onGetCommentsCount){
            this._onGetCommentsCount(this._totalCommentsCount);
        }
    }
};

dj.community.ArticleComments.prototype.__HelpfulComment = function(commentEntryId) {
    if (this._userInfo.isMember) {
        dj.community.theTopic.__HelpfulComment(commentEntryId);
    }
    else {
      dj.community.ShowMembershipDialog(dojo.byId('numhelpful' + commentEntryId), true, dojo.hitch(this, function() {
          dj.community.theTopic.__HelpfulComment(commentEntryId);
          dj.community.HideMembershipDialog();
          this._userInfo.isMember = true;
      }));
    }
};

dj.community.ArticleComments.prototype.__PostArticleComment = function(clicked) {
    if (this._userInfo.isMember) {
        this.__CommentPost(false);
    }
    else {
      var forceMembership = (this._userInfo.Status == "subscriber" && !this._forceMembership);
      dj.community.ShowMembershipDialog(this._currentCommentBox, forceMembership, dojo.hitch(this, this.__PostAndJoin));
    }
};

dj.community.ShowMembershipDialog = function(relativeElement, forceMembership, callback) {
  var cp = dojo.byId("commentpopup"), 
  pos = dojo.position(relativeElement, true);
  dojo.style(cp, {position: "absolute", left: (pos.x + 20) + "px", top: (pos.y - 40) + "px"});
  
  if (callback){
    dojo.connect(dojo.byId('cmd0404174509'),'onclick', callback);
  }
  
    if (!forceMembership) {
      dj.util.Element.show("commentpopup");
      dj.util.Element.show("subscribercontent");
      dj.util.Element.hide("freeregcontent");
    }
    else {
      dj.util.Element.show("commentpopup");
      dj.util.Element.show("freeregcontent");
      dj.util.Element.hide("subscribercontent");
    }
};

dj.community.HideMembershipDialog = function() {
  dj.util.Element.hide("commentpopup");
};

dj.community.ArticleComments.prototype.__PostAndJoin = function() {
    this.__CommentPost(true);
};

dj.community.ArticleComments.prototype.__PostAndConfirmJoin = function() {
    this.__CommentPost(dojo.byId("chkBecomeMember").checked);
};

dj.community.ArticleComments.prototype.__CommentPost = function(joinCommunity) {
    dj.util.Element.hide("commentpopup");
    var errMsgElm = this._currentCommentBox.id == 'commentBody0' ? 'errorOnPost0' : null;
    dj.community.theTopic.PostArticleComment(this._currentCommentBox.value, joinCommunity, this._currentTrackReply.checked,
    { errormsgelm: errMsgElm, commentboxid: this._currentCommentBox.id });

    if (!this._userInfo.isMember){
        this._userInfo.isMember = joinCommunity;
    }

    this._currentCommentBox.value = '';
    this._currentTrackReply.checked = false;
    this._currentCommentBox.focus();
};


dj.community.ArticleComments.prototype.__OnPostComment = function(userInfo, reload_comments, comments_total_count) {
    if (userInfo !== undefined && userInfo.isSuspended) {
        this.GetCommentBox();
        if (reload_comments !== undefined && reload_comments){
            dj.community.theTopic.GetArticlecommentsInitialPage();
        }
        return;
    }

    if (comments_total_count === undefined){
        this._totalCommentsCount++;
    }else{
        this._totalCommentsCount = comments_total_count;
    }

    if (this._onGetCommentsCount){
        this._onGetCommentsCount(this._totalCommentsCount);
    }

    /* will only get fired from the comment box on the article page */
    if (this._currentCommentBox.id == 'commentBody0') {
        if (this._onPostComment){
            this._onPostComment(dojo.byId('newcommentarea0') ? 'newcommentarea0' : undefined);
        }
    }
};
dj.module.showSelectionForCarousel={init:function(){this.sectPan=dj.module.carouselSection.panels;if(!this.sectPan){console.warn("showSectionAndTicker carousel is not found");return;}
this.bind();},bind:function(){var ctr=0,span=this.sectPan,tot=span.model.getNumberOfPanels();span.model.addChangeListener("success",function(panel){if(panel.getPosition()==tot){ctr++;}
if((panel.getPosition()==1)&&(ctr>0)){span.model.setRotationState(0);}});}};dojo.provide("dj.widget.flash.Flash");

dojo.require("dj.lang");

dojo.require("dj.util.Cookie");
dojo.require("dj.util.Observer");
dojo.require("swfobject.swfobject_1_5.swfobject");

dojo.getObject("dj.module.flash", true);
// TODO: requires swfobject 1.5... upgrade to 2.x

/*
 * Article flash handler Assumes flash in div with id="articleTabFlash" Also, for each flash to support, call
 * document.observe('dom:loaded', dj.widget.flash.articlePlayer.register('flash ID','width','height','none','player ID',
 * 'With warmer weather on its way...caption goes here'))
 * 
 * Requires /public/resources/documents/swfobject.js
 * 
 * params can contain: noload: true/false // true-> do not load the flash, just initialize the object flashVars: { } //
 * a set of vars to pass to the flash as flashVars
 */
(function() {

  var _dwf = dj.widget.flash;

  dojo.declare("dj.widget.flash.Flash", null, {
    constructor: function(id,p,s,params) {

      this.parent=dojo.byId(id);
      if ( typeof params == "undefined") { params={"noload":false}; }
      if ( !params.noload ) { params.noload=false; }
      //console.log('flash init 1, noload='+noload);
  
      this.config={};
      this.config.myMovie='/public/resources/documents/info-flash08-preloader.swf';
  
      this.p=p;
      this.s=s;
      this.getSettings=true;
      this.swfPrefix='info-';
      this.params=params;
  
      this.settingsObserver = new dj.util.Observer();
      //console.log('flash init 2');
      if(p&&!params.noload){
       //console.log('loading '+p+','+s);
          this.load(p,s);
    }
    },
    newId:function(){
        this.flid="flashdiv_"+Math.floor(Math.random()*999999);
    },
    loadsettings:function(p,s){
        this.p=p;
        this.s=s;
        if ( !this.getSettings) {
            this.swfsettings={};
            return;
        }
        //console.log('1 loadsettings='+p+', s='+s);
        this.settingfile='/public/resources/documents/'+this.swfPrefix+p+'-settings.js';
        if(!this.swfsettings){
            //console.log('getting settings');

            this.swfsettings=null;
            var that=this;

            var deferred = dojo.xhrGet( {
              url : this.settingfile,

              load : function(data, ioargs) {
                // console.log('AJAX loadsettings='+that.p+', s='+that.s);
                that.raw_response=data;
                if ( that.raw_response ){
                  var json_start=that.raw_response.indexOf('{');
                  var json_end=that.raw_response.lastIndexOf('}');
                  if ( json_start > -1 ) {
                    // remove var stmt from beginning
                    that.raw_response=that.raw_response.substring(json_start,json_end+1);
                  }
                  that.raw_json=dojo.fromJson(that.raw_response);
                  that.finishsettings();
                }
                },
              error : function(err) {
                  console.error("HTTP status code: %s, response: %o", ioargs.xhr.status, data);
              }
            });

        }
        //console.log('2 loadsettings='+this.swfsettings);
        //if(this.swfsettings)console.log('3 loadsettings.swfwidth='+this.swfsettings.swfwidth);

    },
    finishsettings:function(){
        // assumes JSON object has been populated from ajax response

        //console.log('finishsettings='+transport.responseText);
        this.swfsettings=this.raw_json.swfsettings;
        //console.log('fin settings.swfwidth='+this.swfsettings.swfwidth);
        this.swfpreloader = this.swfsettings.requiredSettings.preloader;
        this.swfwidth = this.swfsettings.requiredSettings.swfwidth;
        this.swfheight = this.swfsettings.requiredSettings.swfheight;

        this.settingsObserver.fire(this.p, this.s);

    },
    createwrapper:function(){
        //console.log('start cw');
        this.newId();
        this.div=document.createElement('div');
        //console.log('in cw='+this.div);

        this.div.setAttribute('id',this.flid);
        this.parent.appendChild(this.div);
    },
    createflash:function(){
        //console.log('createflash this.so='+this.so);

        if(this.so) {return;}
        if (this.swfpreloader) {
          this.myMovie = uP+'/public/resources/documents/' + this.swfpreloader + '?' + this.p;
        } else {
          this.myMovie = this.config.myMovie + '?' + this.p;
        }
        //console.log('cf this.swfsettings.swfwidth='+this.swfsettings.swfwidth);
        //console.log('cf this.swfheight='+this.swfheight);
        //console.log('creating '+this.p+', s='+this.s );
        this.so = new SWFObject(this.myMovie, this.p, this.swfwidth, this.swfheight, "9", "#FFFFFF");
        this.preload = 'info-'+this.p+'-preload.xml';
        this.so.addParam('allowScriptAccess', 'always');
        this.so.addParam('allowfullscreen', 'true');
        this.so.addParam("wmode", "opaque");
        this.so.addParam('base', '/public/resources/documents');
        this.so.addParam("menu", "false");
        this.so.addParam("height", this.swfheight);
        if (this.swfsettings&&this.swfsettings.optionalSettings){
            for (setting in this.swfsettings.optionalSettings){
                this.so.addVariable(setting,this.swfsettings.optionalSettings[setting]);
            }
        }
		if ( this.params && this.params.flashVars ) {
            for (param in this.params.flashvars){
                this.so.addVariable(setting,this.params.flashvars[setting]);
            }
    	}
        // For flash in tab,use "tab", for in article, use "articleBody"
        //  only supporting "tab" for now, but will need to extend to a constructor variable
        this.so.addVariable("SlugName",this.p);
        this.so.addVariable("placement","tab");
        this.so.addVariable("PreloaderURL", this.preload);
        this.so.addVariable("MovieWidth", this.swfwidth);
        this.so.addVariable("MovieHeight", this.swfheight);
        this.so.addVariable("asub", dj.util.Cookie.getCookie("user_type"));
        this.so.addVariable("basePath", '/public/resources/documents');
        this.so.addVariable("cdnDomain", cdnDomain);
        this.so.addVariable("serverDomain", uP);
        this.so.addVariable("id", this.s);
        this.so.addVariable("PLAYER_ID", this.p);
        this.so.write(this.div);
    },
    load:function(p,s){
        var that=this;
        this.settingsObserver.subscribe(function(){that.create();});

        this.newId();
        //console.log('load p='+p+', s='+s);
        this.loadsettings(p,s);

        //console.log('load settings='+this.swfsettings);
        if (this.swfsettings){
            this.create(p,s);
        }
    },
    create:function(p,s){
         // Not meant to be used with redraw
         this.createwrapper();
         this.createflash();
         // not ready for styling yet.
         // needs JS also.
         this.settingsObserver.unsubscribe(this.create);

    }
  });
  
    
  dojo.declare( "dj.widget.flash.SlideshowFlash", dj.widget.flash.Flash, {
    constructor: function(id,p,s,noload) {
  
      this.config.myMovie='/public/resources/documents/info-slideshow08-preloader.swf';
      window.getContent=this.getContent;
    },
    getContent:function(){
      // placholder function to make info-slideshow08-preloader.swf switch to
      //   "djmlflash" retrieval mode.
      return null;
    }
  
  });

}());

dojo.provide("dj.widget.video.Video");dojo.require("dj.lang");dojo.require("dj.util.Video");dojo.require("dj.util.Ads");dojo.require("swfobject.swfobject_1_5.swfobject");dojo.require("swfobject.swfobject_2_2.swfobject");dojo.require("dj.widget.video.VideoCenter");dojo.getObject("dj.module.video",true);dojo.declare("dj.widget.video.Video",null,{config:{thumbnail:{divclass:"headlineSummary video",onclickprefix:"dj.module.articleVideoPlayer.tabplay(",onclicksuffix:");",hrefprefix:"#articleTabs_video-"},bc:{src:"http://wsj.vo.llnwd.net/o28/plymedia/SWF/BrightPLYembed.swf",flashVars:"playerId=452319854&viewerSecureGatewayURL=https://services.brightcove.com/services/amfgateway&servicesURL=http://services.brightcove.com/services&cdnURL=http://admin.brightcove.com&domain=embed&autoStart=false&showTicker=true&flashId=flashObj&videoId=",base:"http://wsj.vo.llnwd.net/o28/plymedia/SWF",bgcolor:"#000000",name:"BrightPLYembed",pluginspage:"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash",flashversion:"8"}},constructor:function(id,v,w,h,c){this.microPlayers=[];this.microPlayersObjects={};this.videoIdMicroPlayerIdMap={};this.videoUtil=dj.util.Video;var overlayConfig=this.videoUtil.setupConfig();dj.lang.mixin(this,overlayConfig);this.flashPlayerPath=cdnDomain+"/media/swf/";if(!id){return;}
this.parentid=id;this.parent=dojo.byId(id);if(!this.parent){console.log('id '+id+' not found');return;}
this.v=v;w=264;this.w=w;h=254;this.h=h;this.c=c;if(v){this.load(v,w,h,c);}},createwrapper:function(v,w,h){this.div=dojo.create("div",{"id":this.vidid});if(w&&!this.isguid(v)){this.tryw=''+w+'px';this.div.style.width=this.tryw;}
this.parent.appendChild(this.div);},createvideobc:function(v,w,h,c){dojo.deprecated("dj.widget.video.Video.createvideobc","If brightcove is not supported, remove this method","2.0");this.so=new SWFObject(this.config.bc.src,v,w,h,this.config.bc.flashversion,this.config.bc.bgcolor);this.so.setAttribute('id','video_'+this.vidid);this.so.addParam('base',this.config.bc.base);this.so.addParam("flashVars",this.config.bc.flashVars+v+'&');this.so.addParam("seamlesstabbing","false");this.so.addParam("swLiveConnect","true");this.so.addParam("name",this.config.bc.name);this.so.addParam("pluginspage",this.config.bc.pluginspage);this.so.addParam("wmode","opaque");this.so.write(this.div);if(c){var caption=dojo.create("p",{"class":"targetCaption",innerHTML:c});this.div.appendChild(caption);}},createvideoguid:function(v){this.loadSoloVideo(v,this.vidid);if(this.c){var caption=dojo.create("p",{"class":"targetCaption","innerHTML":this.c});this.parent.appendChild(caption);}},createvideo:function(v,w,h,c){if(this.isguid(v))
{this.createvideoguid(v);}else{this.createvideobc(v,w,h,c);}},load:function(v,w,h,c){if(!this.div){this.newId();this.createwrapper(v,w,h);this.createvideo(v,w,h,c);}},createthumbnail:function(playObserver){if(!this.guidvideo){console.error('no guidvideo');return;}
if(!this.guidvideo.details){console.error('no guidvideo.details');return;}
if(!playObserver){console.warn('no playObserver');}
var vtdiv=dojo.create('div',{'class':'videoTree'});this.div.appendChild(vtdiv);var vfdiv=dojo.create('div',{'class':'videoFrame'});vtdiv.appendChild(vfdiv);var aimg=dojo.create('a',{'href':"#"});var that=this;dojo.connect(aimg,"onclick",this,function(ev){playObserver.fire(this.v);dojo.stopEvent(ev);});vfdiv.appendChild(aimg);var img=dojo.create('img',{'src':this.guidvideo.details.thumbnailURLSmall,'width':'115','height':'65','alt':'video'});aimg.appendChild(img);var spannbsp=dojo.create('span',{'class':'videoBug'});spannbsp.innerHTML="&nbsp;";aimg.appendChild(spannbsp);var title=dojo.create("h3",{"class":"first"});this.div.appendChild(title);var ah3=dojo.create("a",{"href":"#",innerHTML:this.guidvideo.details.name});var that2=this;dojo.connect(ah3,"onclick",this,function(ev){playObserver.fire(this.v);dojo.stopEvent(ev);});title.appendChild(ah3);var duration=dojo.create("small",{innerHTML:this.videoUtil.formatduration(this.guidvideo.details.duration)});this.div.appendChild(duration);var desc=dojo.create("p",{"class":"targetCaption",innerHTML:this.guidvideo.details.description});this.div.appendChild(desc);},loadthumbnail:function(v,w,h,playObserver){this.v=v;if(!this.isguid(v)){console.error("cannot create tumbnail to old video");return;}
this.getvideodetails();this.newId();this.createwrapper(v,w,h);this.createthumbnail(playObserver);},getguidvideo:function(){try{if(this.guidvideo){return this.guidvideo;}else{this.guidvideo=new dj.widget.video.VideoCenter();return this.guidvideo;}}
catch(e){console.error("could not instantiate dj.widget.video.VideoCenter");}
return null;},getvideodetails:function(){if(this.getguidvideo()){this.guidvideo.details=this.videoUtil.getVideoDetails({'id':this.v,'fields':'name,id,duration,description,thumbnailURL,thumbnailURLSmall'});}},setBookMark:function(){if(this.getguidvideo()){this.guidvideo.setBookMark();}},pauseMicroPlayer:function(){if(this.getguidvideo()){this.guidvideo.pauseMicroPlayers();}},isguid:function(g){g=''+g;if(g.substring(0,1)!='{'){g='{'+g;}
if(g.substring(0,1)=='{'&&g.substring(9,10)=='-'&&g.substring(14,15)=='-'&&g.substring(19,20)=='-'){return true;}else{return false;}},newId:function(){this.vidid="videodiv_"+Math.floor(Math.random()*999999);},loadSoloVideo:function(videoId,divId){var overlayConfig=this.videoUtil.setupConfig();dj.lang.mixin(this,overlayConfig);if(videoId.indexOf('{')==-1){videoId='{'+videoId+'}';}
var microPlayerId="MicroPlayer_"+Math.floor(Math.random()*1000000);this.microPlayers[this.microPlayers.length]=microPlayerId;this.videoIdMicroPlayerIdMap[videoId]=microPlayerId;dojo.getObject("dj.context.video",true);if(!dj.context.video.soloVideos){dj.context.video.soloVideos=[];}
dj.context.video.soloVideos[videoId]=this;if(swfobject.getFlashPlayerVersion().major>=9){var dim={w:"272",h:"180"};swfobject.embedSWF(this.flashPlayerPath+"microPlayer.swf",divId,dim.w,dim.h,"9.0.0","",{'objName':"dummy",'videoGUID':videoId,'allowPlayerPopup':'1','plyMediaEnabled':'1','movieWidth':dim.w,'movieHeight':dim.h,'host':location.host},{allowscriptaccess:"always",wmode:"opaque"},{id:microPlayerId});}
else{dj.util.Video.nonSupportingFlashPlayer(divId);}},openMicroPopUpPlayer:function(id){var currentPlayingLocation=Math.floor(swfobject.getObjectById(this.videoIdMicroPlayerIdMap[id]).getSeek());var currentlyPlayingCollection=this.microPlayersObjects[id]['wsj-section'];if(currentlyPlayingCollection=='Lifestyle'){currentlyPlayingCollection='Life & Style';}
var currentlyPlayingVideoId=id;var width='512';var height='660';this.popUpWindow=window.open(this.popUpPageUrl+'?currentPlayingLocation='+currentPlayingLocation+'&currentlyPlayingCollection='+escape(currentlyPlayingCollection)+'&currentlyPlayingVideoId='+currentlyPlayingVideoId,'popUpPlayer','height='+height+',width='+width+',left='+((screen.width-Number(width))/2)+',top='+(screen.height-Number(height))/2+',resizable=yes,scrollbars=no,toolbar=no,status=no');},getJSON:function(id){var url='/api-video/get_video_info.asp?guid='+id;url+='&fields=all';var params={context:this,handleAs:"json",sync:true,responseType:"application/json",callback:this.handleGetJSON,errorCallback:function(){console.error("Failed while executing video.Video.getJSON");}};dj.util.Video.getVideoData(url,params);this.microPlayersObjects[id]=this.jsonData;return dojo.toJson(this.jsonData);},handleGetJSON:function(json){this.jsonData=json;var adZone=new dj.util.Ads().getRegisteredAdsZone('');if(adZone!='default'&&adZone!=''){this.jsonData.adZone=adZone;}
this.jsonData.emailPartnerID=110626;this.jsonData.site=this.site;this.jsonData.msrc=this.msrc;this.jsonData.adFrmt="frmt=0;";this.jsonData.playerName="video_articleembed";this.jsonData.videoCenterURL="http://"+window.location.host+"/video-center";this.jsonData.embedPlayerURL=this.flashPlayerPath+"microPlayer.swf";this.jsonData.embedConfigURL=this.embedConfigURL;this.jsonData.embedPlayerID="1000";this.jsonData.embedName="microflashPlayer";this.jsonData.embedBaseURL=this.flashPlayerPath;this.jsonData.embedHeight=180;this.jsonData.embedWidth=272;this.jsonData.larsID=91;this.jsonData.larsAdTrackingID=1259;this.jsonData.prop5=window.location.href.split('?')[0];this.jsonData.prop6=window.location.href;this.jsonData.prop10=this.videoUtil.getUrlParam(window.location.href,'mod');this.jsonData.prop11=this.videoUtil.getUrlParam(window.location.href,'reflink');this.jsonData.prop19="video_emb";this.jsonData.prop24=this.prop24;this.jsonData.prop25=this.prop25;this.jsonData.prop27=this.prop27;var subSecComponent=this.videoUtil.omnitureEncoding(this.jsonData['wsj-section'],this.jsonData['wsj-subsection'],'s');var secComponent=this.videoUtil.omnitureEncoding(this.jsonData['wsj-section'],this.jsonData['wsj-subsection'],'c');this.jsonData.prop2="WSJ_"+secComponent;this.jsonData.prop3="WSJ_Video_Video_"+secComponent;this.jsonData.prop22="WSJ_Video_Video_"+subSecComponent;this.jsonData.prop26="WSJ_"+subSecComponent;this.jsonData.emailURL=this.emailURL;var suprsAd='0';try{if(pID.indexOf('0_0_WH')!=-1){suprsAd='1';}}
catch(e){console.error("pID read error");}
this.jsonData.suppressAds=suprsAd;}});
dj.module.mostPopularTab={init:function(){var _tabIds=["mostRead","mostEmailed","mostPopularVideo","mostCommented"];this.pnl=dj.widget.panels.PanelsFactory.create("mostPopularTab",{core:{panelPrefix:"mostPopularTab_panel_",panels:_tabIds},tabs:{tabPrefix:"mostPopularTab_tab_",tabOnStyle:"selectedTab",tabOffStyle:"deselected"}});var that=this;this.pnlRss=dj.widget.panels.PanelsFactory.create("mostPopularTab",{core:{panelPrefix:"mostPopularTab_rssPanel_",panels:_tabIds,controller:that.pnl}});}};
dojo.provide("dj.module.videoModule");dojo.require("dj.lang");dojo.require("dj.util.Video");dojo.require("dj.widget.panels.PanelsFactory");dj.module.videoModule={init:function(config){var djL=dj.lang;this.cfg=djL.deepMixin({videoModuleContainerId:"videoModule",autonomyVideoClassName:"autonomy_video"},config);var oVidMod=dojo.byId(this.cfg.videoModuleContainerId);if(oVidMod===null){console.log("{VideoModule} is undefined.");return;}
if(dojo.hasClass(oVidMod,this.cfg.autonomyVideoClassName)){this._setupAutonomyVideo(oVidMod);}
this._setupVideo(oVidMod);},_setupVideo:function(oVidMod){this.panels=dj.widget.panels.PanelsFactory.create(oVidMod,{core:{},carousel:{}});},_setupAutonomyVideo:function(oVidMod){var djL=dj.lang;var oVideoElements=dojo.query('.preview',oVidMod);var oVideoElId=null;for(var i=0,len=oVideoElements.length;i<len;i++){var oVideoEl=oVideoElements[i];oVideoElId=oVideoEl.id;var tempGUID=oVideoElId.split(':');var getImgGuid=tempGUID[1].replace(/_/g,'-');var guidVideoDetails=dj.util.Video.getVideoDetails({'id':getImgGuid,'fields':'thumbnailURLSmall'});if(guidVideoDetails!=="undefined"){var getSmallThumnailURL='url('+guidVideoDetails.thumbnailURLSmall+')';if(getSmallThumnailURL!==null){oVideoEl.style.backgroundImage=getSmallThumnailURL;}}else{console.log('getSmallThumnailURL is '+getSmallThumnailURL);oVideoEl.style.backgroundImage='/img/bb/BB_DBlogo.gif';}}}};
dojo.provide("dj.widget.article.tools.ArticleTools");dojo.require("dj.util.Url");dojo.require("clickability.w-button");dojo.getObject("dj.module.dashboard",true);dojo.getObject("dj.module.articleTools",true);var suppressReprints=0;var digg_url=AT_VARS.articleUrl,clickURL=digg_url+'?mod=mostpop';var digg_title=AT_VARS.clickTitle,clickTitle=digg_title;var digg_bodytext=AT_VARS.bodyText;var digg_topic='';var longUrl=digg_url+'?mod=wsj_share_twitter';var bitlyTargetUrl;var twitter_title=digg_title;if(twitter_title.length>79){twitter_title=twitter_title.substr(0,77)+'...';}
function bitlyCallback(data)
{if((data.statusCode==='OK')&&(data.results[longUrl].shortCNAMEUrl!="undefined")){bitlyTargetUrl='http://twitter.com/home?status='+encodeURIComponent(twitter_title+' '+data.results[longUrl].shortCNAMEUrl);}else{bitlyTargetUrl='http://twitter.com/home?status='+encodeURIComponent(twitter_title+' '+longUrl);}
window.open(bitlyTargetUrl);}
function CopyrightPopUp(){var art=AT_VARS;var reprintUrl="https://s100.copyright.com/Clients/wsj_com/FairUse.jsp?";var params=[];params.push("PublisherName="+escape(art.publicationName));params.push("ContentID="+escape(art.baseDocId+art.baseDocExtension));params.push("orderReset=true");params.push("Title="+escape(art.articleHeadline));params.push("Author="+escape(art.authors));params.push("CreditLine="+escape(art.byLine||""));params.push("PublicationDate="+escape(art.publicationDate));params.push("ArticleType="+escape(art.articleType));params.push("DJType="+escape(art.djType));params.push("orderSource=wsj.com");dj.util.Url.openWin((reprintUrl+params.join("&")),"reprints",515,440,"scroll,resizable",true);}
dj.util.Article={getParentByNodeName:function(O,N){if(O.nodeName.toLowerCase()==N||O.parentNode==null){return O;}
return dj.util.Article.getParentByNodeName(O.parentNode,N);},isFloat:function(N){return/\d+\.\d+/.test(N);},shortenMe:function(){var url="http://api.bit.ly/shorten?callback=bitlyCallback&longUrl="+encodeURIComponent(longUrl)+"&version=2.0.1&login=wsjblogs&apiKey=R_4dd2ea29f00a2b806151d12d7807286b";var scid=document.getElementById('bitlynode');if(scid==null){var e=document.createElement('script');e.setAttribute('id',"bitlynode");e.setAttribute('src',url);document.body.appendChild(e);}else{window.open(bitlyTargetUrl);}
return false;}};dojo.declare("dj.module.articleTools.Initilizer",null,{constructor:function(P,T,B,S){var isLink=false;new dj.module.articleTools.Button(P+'.at.emailthis',function(){ET();},isLink).init();new dj.module.articleTools.Button(P+'.at.print',function(){var l=''.concat(document.location),x=l.indexOf('#');if(x!=-1){l=l.substring(0,x);}
dj.util.Url.openWin(l+'#printMode',"printFriendly",800,600,'',true);},isLink).init();if(!T){new dj.module.articleTools.Button(P+'.at.reprint',function(){CopyrightPopUp();},isLink).init();}
else{var menuButton=new dj.module.articleTools.MenuButton(P+'.share.arrow',P+'.share.ddc').init();new dj.module.articleTools.TextBuddy(P+'.at.tbl',P+'.at.tbs',P+'.at.tbm',menuButton).init(B);}
new dj.module.articleTools.ShareButton(P+'.share.facebook',function(){var targetUrl='http://www.facebook.com/share.php?'+'u='+encodeURIComponent(digg_url+'?mod=wsj_share_facebook')+'&t='+encodeURIComponent(digg_title);window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.delicios',function(){var targetUrl='http://del.icio.us/post?v=4&partner=wsj&noui&jump=close'+'url='+encodeURIComponent(digg_url+'?mod=wsj_share_delicios')+'&title='+encodeURIComponent(digg_title)+'&bodytext='+encodeURIComponent(digg_bodytext);window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.reddit',function(){var targetUrl='http://www.reddit.com/submit?title='+encodeURIComponent(digg_title)+' &url='+encodeURIComponent(digg_url+'?mod=wsj_share_reddit');window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.stumble',function(){var targetUrl='http://www.stumbleupon.com/submit?'+'&url='+encodeURIComponent(digg_url+'?mod=wsj_share_stumble')+'&title='+encodeURIComponent(digg_title);window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.fark',function(){var targetUrl='http://www.fark.com/cgi/farkit.pl?u='+encodeURIComponent(digg_url+'?mod=wsj_share_fark')+'&h='+encodeURIComponent(digg_title);window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.linkedin',function(){var targetUrl='http://www.linkedin.com/shareArticle?mini=true'+'&url='+encodeURIComponent(digg_url+'?mod=wsj_share_linkedin')+'&title='+encodeURIComponent(digg_title)+'&summary='+encodeURIComponent(digg_bodytext)+'&source=WSJ';window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.twitter',function(){dj.util.Article.shortenMe();},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.viadio',function(){var targetUrl='http://www.viadeo.com/shareit/share/?url='+encodeURIComponent(digg_url+'?mod=wsj_share_viadeo')+'&title='+encodeURIComponent(digg_title)+'&urlaffiliate=40510';window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.orkut',function(){var targetUrl='http://promote.orkut.com/preview?nt=orkut.com&'+'tt='+encodeURIComponent(digg_title)+'&cn='+encodeURIComponent(digg_bodytext)+'&du='+encodeURIComponent(digg_url+'?mod=wsj_share_orkut');window.open(targetUrl);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.digg',function(){Digg.remoteSubmit(digg_url+'?mod=wsj_share_digg',digg_title,digg_bodytext,digg_topic);},isLink).init();new dj.module.articleTools.ShareButton(P+'.share.myspace',function(){var targetUrl='http://www.myspace.com/Modules/PostTo/Pages/?'+'t='+encodeURIComponent(digg_title)+'&c='+encodeURIComponent(digg_bodytext)+'&u='+encodeURIComponent(digg_url+'?mod=wsj_share_myspace')+'&l=3';window.open(targetUrl);},isLink).init();isLink=true;new dj.module.articleTools.ShareButton(P+'.share.ybuzz',function(){var ybl=dojo.byId(this.id);if(ybl){ybl.href+=digg_url+'?mod=wsj_share_ybuzz';}},isLink).init();if(S){var sponsor=dojo.byId(P+".at.sponsor");if(sponsor){dojo.removeClass(sponsor,"hidden");}}}});dojo.declare("dj.module.articleTools.Button",null,{constructor:function(I,H,L){this.id=I;this.clickHandler=H;if(H){this.clickHandler=dojo.hitch(this,this.clickHandler);}
this.isLink=L;return this;},init:function(){if(this.isLink){this.clickHandler();}
else{var oId=dojo.byId(this.id);if(oId&&this.clickHandler){dojo.connect(oId,"onclick",this,this.clickHandler);}}
dojo.connect(document,"onclick",this,function(e){this.handleDocClick(e);});return this;},handleDocClick:function(e){var x=dj.util.Article.getParentByNodeName(e.target,'a');if(x.id==this.id&&!this.isLink){dojo.stopEvent(e);}}});dojo.declare("dj.module.articleTools.ShareButton",dj.module.articleTools.Button,{constructor:function(){if(this.clickHandler==null){var oId=dojo.byId(this.id);if(oId){dojo.addClass(oId.parentNode,"hidden");}}}});dojo.declare("dj.module.articleTools.MenuButton",null,{constructor:function(I,M){this.id=I;this.menuItem=dojo.byId(M);return this;},init:function(){var oId=dojo.byId(this.id);if(oId){dojo.connect(oId,"onclick",this,function(e){this.toggleMenu();dojo.stopEvent(e);});}
dojo.connect(document,"onclick",this,function(e){var oId=dojo.byId(this.id);if(oId&&(e.target!=oId)){this.closeMenu();}});return this;},toggleMenu:function(){dojo.toggleClass(this.menuItem,"collapsed");dojo.toggleClass(this.menuItem,"expanded");if(dj.module.dashboard.DashboardSaveTo){dj.module.dashboard.DashboardSaveTo.restoreDefaultState();}},closeMenu:function(){dojo.addClass(this.menuItem,"collapsed");dojo.removeClass(this.menuItem,"expanded");if(dj.module.dashboard.DashboardSaveTo){dj.module.dashboard.DashboardSaveTo.restoreDefaultState();}}});dojo.declare("dj.module.articleTools.TextBuddy",null,{constructor:function(L,S,M,B){this.idLarge=L;this.idSmall=S;this.idMiddle=M;this.targetElements=dojo.query(".article.story p");var T=dojo.query("div.articlePage p");if(T&&T.length>0){this.targetElements=dojo.query("div.articlePage p");}
this.initialState=new Array();this.refFontSize;this.increment=1;this.max=-1;this.min=4;this.menuButton=B;this.unit={'em':0.1,'px':1};return this;},init:function(B){if(B){var oIdl=dojo.byId(this.idLarge);if(oIdl){dojo.connect(oIdl,"onclick",this,function(e){this.makeItSo(true);dojo.stopEvent(e);this.menuButton.closeMenu();});}
var oIds=dojo.byId(this.idSmall);if(oIds){dojo.connect(oIds,"onclick",this,function(e){this.makeItSo(false);dojo.stopEvent(e);this.menuButton.closeMenu();});}
this.targetElements.forEach(function(el,i){var fs=dojo.style(el,"fontSize");this.initialState[i]=fs;if(i==0){fs=fs.substring(0,fs.length-2);if(dj.util.Article.isFloat(fs)){this.refFontSize=parseFloat(fs);}
else{this.refFontSize=parseInt(fs);}}},this);dojo.connect(dojo.byId(this.idMiddle),"onclick",this,function(e){this.clickHandlerMiddle();dojo.stopEvent(e);this.menuButton.closeMenu();});}
else{this.hideIt();}},clickHandlerMiddle:function(){var x=this.initialState;this.targetElements.forEach(function(el,i){dojo.style(el,{"fontSize":''+x[i]});});},makeItSo:function(larger){if(this.targetElements&&this.targetElements.length>0){var CF=dojo.style(this.targetElements[0],"fontSize"),CU=CF.substring(CF.length-2),F=this.unit[CU];CF=CF.substring(0,CF.length-2);var isf=dj.util.Article.isFloat(CF);if(isf){CF=parseFloat(CF);}
else{CF=parseInt(CF);}
var fsDiff=(CF-this.refFontSize);if(isf){fsDiff=fsDiff.toPrecision(2);}
if((larger&&this.max!=-1&&fsDiff>=(this.max*F))||(!larger&&this.min!=-1&&fsDiff<=-(this.min*F))){return;}
var inc=(larger?this.increment:-this.increment)*F;this.targetElements.each(function(el){var FS=dojo.style(el,"fontSize"),idx=FS.indexOf(CU);if(idx!=-1){FS=FS.substring(0,idx);if(dj.util.Article.isFloat(FS)){FS=parseFloat(FS);}
else{FS=parseInt(FS);}
dojo.style(el,{'fontSize':(FS+inc)+CU});}});}},hideIt:function(){var oIdl=dojo.byId(this.idLarge);if(oIdl){dojo.addClass(oIdl.up(),'hidden');}}});
dojo.provide("dj.module.articleTabs");dojo.require("dj.widget.panels.PanelsFactory");dj.module.articleTabs={init:function(){var at_container="articleTabs";var at_config={core:{panelPrefix:"articleTabs_panel_",panels:["article","video","slideshow","interactive","map","comments"],enableBrowserHistory:true},tabs:{tabPrefix:"articleTabs_tab_",tabOnStyle:"selected",tabOffStyle:"deselected"}};this.panels=dj.widget.panels.PanelsFactory.create(at_container,at_config);},getPanels:function(){return this.panels;}};
dojo.provide("dj.module.comments.comments");dojo.require("dj.widget.ad.AdManager");dojo.require("dj.util.Tracking");dojo.require("dj.community.ArticleComments");dj.module.comments={sbNumber:AT_VARS.baseDocId,tabName:'comments',articleName:AT_VARS.articleHeadline,theArticleComments:null,showCommentsOnTabs:function(domainName){var that=this;var isOpinionArticle=false;if(domainName=='undefined'||domainName==null){domainName='http://online.wsj.com';}else{domainName=document.URL.substring(0,document.URL.indexOf('.com')+4);}
dojo.addOnLoad(function(){if(s.prop2==='WSJ_Opinion'||s.prop2==='Opinion'){isOpinionArticle=true;}
that.theArticleComments=new dj.community.ArticleComments(that.sbNumber,that.articleName,domainName+'/community','/community',OnGetCommentsCount,OnPostComment,isOpinionArticle,OnCommentPageChange);that.theArticleComments.GetCommentBox("leaveComment");if(dj.module.articleTabs&&dj.module.articleTabs.panels.getActivePanel()===that.tabName){that.theArticleComments.GetComments("discussionThreadBox");}
function OnGetCommentsCount(count){var hasCommentCount=true;if(hasCommentCount){this.cElement=dojo.query('#articleTabs_tab_comments a')[0];if(!isNaN(count)&&(count>0)){this.cElement.innerHTML="Comments ("+count+")";}}}
function OnPostComment(divId){that.activateCommentsPanel();var oElement=dojo.byId(divId);if(oElement===undefined){window.scrollTo(0,0);}else if(oElement!==null){window.scrollTo(0,oElement.offsetTop-200);}else{console.error("Exception occured in showComments");}}
function OnCommentPageChange(){if(!this.ads){this.ads=dj.widget.ad.AdManager;}
if(this.ads){this.ads.loadAds(that.tabName);}
dj.util.Tracking.omniture.firePixel(true);}});},showCommentsOnCommentTab:function(){this.theArticleComments.GetComments("discussionThreadBox");},clearComment:function(oComment){oComment.value="";},activateCommentsPanel:function(){if(!dj.module.articleTabs){return;}
var activePanel=dj.module.articleTabs.panels.getActivePanel();if(activePanel!==this.tabName){dj.module.articleTabs.panels.setActivePanel(this.tabName);}},replaceHTMLTags:function(strValue){strValue=strValue.replace(/</g,'&lt;');strValue=strValue.replace(/>/g,'&gt;');return strValue;}};
dojo.provide("dj.widget.article.tools.sphere");dojo.require("dj.util.XSLT");dojo.declare("dj.module.sphere.Initializer",null,{constructor:function(){this.initialized=false;this.containerId='sphere_container';this.sponsorId='sphere_sponsor_container';this.articleId=AT_VARS.baseDocId;this.xslPath='/static_html_files/xsl/reno_sphere.xsl';this.feedUrl='/sphere/widgets/sphereit/content?siteid=wsj_teaser&url=http://online.wsj.com/article/'+this.articleId+'.html';this.testUrl='/static_html_files/sphere2.xml';this.test=false;this.showAd=true;this.retry=true;},init:function(){var D=document;if(dojo.isIE){dojo.style(dojo.byId('sphere_root'),{"display":"none"});}
else if(!this.initialized){dojo.byId(this.containerId).appendChild(dojo.create('script',{'type':'text/javascript','src':'/sphere/widgets/sphereit/js?siteid=wsj&baseurl=http://online.wsj.com/sphere/widgets/sphereit/'}));dj.util.XSLT.transform({xslUrl:this.xslPath,feedUrl:(this.test?this.testUrl:this.feedUrl),onSuccess:dojo.hitch(this,"updateContainer"),onError:dojo.hitch(this,"handleError")});this.initialized=true;}},updateContainer:function(frag){var D=document,container=dojo.byId(this.containerId);if(frag!=null){container.appendChild(frag);}
if(dojo.byId('sphere_items')){if(this.showAd){dojo.removeClass(dojo.byId(this.sponsorId),"hidden");}else{dojo.addClass(container.up(),"noAd");}}else{dojo.style(dojo.byId('sphere_root'),{"display":"none"});}},handleError:function(e){console.log('error occurred, hide self',e);dojo.style(dojo.byId('sphere_root'),{"display":"none"});}});
dojo.provide("dj.widget.article.text.ArticleText");dojo.require("dj.widget.video.Video");dojo.require("dj.widget.ad.AdManager");(function(){var _dwat=dj.widget.article.text;(_dwat.ArticleTabText=function(tabModule,playObserver){this.tabModule=tabModule;this.playObserver=playObserver;this.tabName='article';this.videos={};this.videothumbs={};this.flashes={};this.omniture={};this.omniture.saveVars=["pageName","section","aheadline","abasedocid","author"];this.omniture.saveValues=[];var apn=tabModule;var that=this;apn.observePanels(function(panelId,prevPanelId){if(!apn.hasPanel(panelId)){}else if(panelId==that.tabName){that.play();}else if(prevPanelId==that.tabName){that.pausevideos();}});}).prototype={registervideo:function(id,v,w,h,c){this.videos[id]={'v':v,'w':w,'h':h,'c':c};},registerflash:function(id,p,s){this.flashes[id]={'p':p,'s':s};if(!this.fixthumbhref){var z=$("article_story_body");if(z){z.observe("click",function(ev){var el=ev.element();if((typeof el.href!=="undefined")&&(el.href.indexOf("#")>-1)&&(el.href.split("#")[1].indexOf("articleTabs_")>-1)){ev.stop();}});}
this.fixthumbhref=true;}},registervideothumbnail:function(id,v){this.videothumbs[id]={'v':v};},playflashes:function(){for(var id in this.flashes){if(this.flashes[id].flash){continue;}
this.flashes[id].flash=new dj.widget.flash.Flash(id,this.flashes[id].p,this.flashes[id].s);}},playvideos:function(){for(var id in this.videos){if(this.videos[id].video){continue;}
this.videos[id].video=new dj.widget.video.Video(id,this.videos[id].v,this.videos[id].w,this.videos[id].h,this.videos[id].c);}},playvideothumbs:function(){for(var id in this.videothumbs){if(this.videothumbs[id].videothumb){continue;}
this.videothumbs[id].videothumb=new dj.widget.video.Video(id);this.videothumbs[id].videothumb.loadthumbnail(this.videothumbs[id].v,200,120,this.playObserver);}},pausevideos:function(){if(this.videos){for(var id in this.videos){try{this.videos[id].video.pauseMicroPlayer();}catch(e){}}}},play:function(dontscroll){if(!dontscroll){var headlineDiv=dojo.query('div.articleHeadlineBox');if(headlineDiv&&headlineDiv[0]){var parentOffset=dojo.position(headlineDiv[0],true);var parentTop=parentOffset.y;var viewOffset=dojo.getViewport().t;var viewTop=viewOffset[1];if(parentTop<viewTop){window.scrollTo(0,parentTop);}}}
this.playflashes();this.playvideos();this.playvideothumbs();if(!this.ads){this.ads=dj.widget.ad.AdManager;}
if(this.ads){try{this.ads.loadAds('article');}
catch(e){}}
this.omniturefirepixel();},tabplay:function(){this.setdefault();this.tabModule.setActivePanel(this.tabName);},playbookmark:function(){if(this.tabModule.getActivePanel()==this.tabName){this.play(true);}},omnituresavepixel:function(){var svlen=this.omniture.saveVars.length;for(var f=0;f<svlen;f++){this.omniture.saveValues[f]=this.omniture.pixel.getMetaData(this.omniture.saveVars[f]);}},omniturerestorepixel:function(){var svlen=this.omniture.saveVars.length;for(var f=0;f<svlen;f++){this.omniture.pixel.setMetaData(this.omniture.saveVars[f],this.omniture.saveValues[f]);}},omniturefirepixel:function(){if(!this.omniture.pixel){this.omniture.pixel=dj.util.Tracking.omniture;}
this.omniture.pixel.resetPixel();this.omnituresavepixel();this.omniture.pixel.setMetaData('ctype','article');this.omniture.pixel.setMetaData('section','Article');this.omniture.pixel.firePixel(true);this.omniturerestorepixel();}};}());
dojo.provide("dj.widget.article.video.ArticleVideo");dojo.require("dj.module.articleTabs");dojo.require("dj.util.History");(function(){var _dwav=dj.widget.article.video;(_dwav.ArticleTabVideo=function(tabModule,playObserver){this.tabModule=tabModule;this.tabPlayObserver=playObserver;this.tabName='video';if(tabModule){var apn=tabModule;var that=this;apn.observePanels(function(panelId,prevPanelId){if(!apn.hasPanel(panelId)){}else if(panelId==that.tabName){that.play();}else if(prevPanelId==that.tabName){if(that.player){that.player.setBookMark();}
if(dj.util.History.get("video")){dj.util.History.set("video","",false);}}});}
if(this.tabPlayObserver){this.tabPlayObserver.subscribe(dojo.hitch(this,"tabplay"));}}).prototype={guidconfig:{"videoPlayerDivId":"videoPlayer","videoSummaryDivId":"videoSummary","registeredVideosDivId":"videoRelated","advertisementDivId":"videoAd","sideNavUlId":"videoSideNav","videoResultsDivId":"videoSearchResults","searchDivId":"videoSearchForm"},register:function(v){if(this.isguid(v)){if(!this.guidvideos){this.guidvideos=[];}
this.guidvideos.push(v);}},setdefault:function(v){this.defaultvid=v;},playbyid:function(v){if(v&&this.isguid(v)){this.player.loadVideo(v,'articlePage');return true;}else{return false;}},playdefault:function(){if(this.defaultvid){if(this.isguid(this.defaultvid)){this.player.loadVideo(this.defaultvid,'articlePage');}else{this.player.loadVideo('','articlePage');}
this.defaultvid=null;}else{this.player.loadVideo('','articlePage');}},play:function(){if(!this.player){this.player=new dj.widget.video.video(this.guidconfig,'dj.module.articleVideoPlayer.player');if(this.guidvideos){var gvl=this.guidvideos.length;for(var gvi=0;gvi<gvl;gvi++){this.player.registerVideo(this.guidvideos[gvi]);}}}
var hashVideo=dj.util.History.get("video");if(hashVideo){this.playbyid(hashVideo);}else{this.playdefault();}
var headlineDiv=dojo.query('div.articleHeadlineBox');if(headlineDiv&&headlineDiv[0]){var parentOffset=dojo.position(headlineDiv[0],true);var parentTop=parentOffset.y;var viewOffset=dojo.getViewport().t;var viewTop=viewOffset;if(parentTop<viewTop){window.scrollTo(0,parentTop);}}},tabplay:function(v){this.setdefault(v);dj.util.History.set("video",v);this.tabModule.setActivePanel('video');},playbookmark:function(){if(this.tabModule.getActivePanel()=='video'){this.play();}},popupvideo:function(){this.player.openPopUpPlayer();},isguid:function(g){g=''+g;if(g.substring(0,1)!='{'){g='{'+g;}
if(g.substring(0,1)=='{'&&g.substring(9,10)=='-'&&g.substring(14,15)=='-'&&g.substring(19,20)=='-'){return true;}else{return false;}}};}());
dojo.provide("dj.widget.article.flash.ArticleFlash");dojo.require("dj.util.History");dojo.require("dj.widget.flash.Flash");dojo.require("dj.widget.ad.AdManager");(function(){var _dwaf=dj.widget.article.flash;dojo.declare("dj.widget.article.flash.ArticleTabFlash",null,{constructor:function(id,tabModule){this.parent=dojo.byId(id);this.id=id;this.tabModule=tabModule;this.omniture={};this.omniture.ctype='flash';var apn=tabModule;var that=this;apn.observePanels(function(panelId,prevPanelId){if(!apn.hasPanel(panelId)){}else if(panelId==that.tabName){that.play();}else if(prevPanelId==that.tabName){if(dj.util.History.get("project")){dj.util.History.set("project","",false);}
if(dj.util.History.get("s")){dj.util.History.set("s","",false);}}});},clear:function(flash){if(flash){flash.so=null;}
while(this.parent.firstChild){this.parent.removeChild(this.parent.firstChild);}
this.player=null;},makeid:function(p,s){if(p&&s){return p+'|'+s;}
if(p){return p;}},redraw:function(flash){this.clear(this.flash);this.flash=flash;this.flash.load(flash.p,flash.s);},register:function(p,s){if(!this.flashes){this.flashes={};}
var flash={};flash=this.newflash(this.id,p,s,true);flash.swfPrefix=this.swfPrefix;this.flashes[this.makeid(p,s)]=flash;},setdefault:function(p,s){this.flash=this.findflashbyids(p,s);if(!this.flash){this.flash=this.newflash(this.id,p,s,true);this.flash.swfPrefix=this.swfPrefix;this.flashes[this.makeid(p,s)]=this.flash;}},findflashbyids:function(p,s){if(!this.flashes){this.flashes={};}
var fid=this.makeid(p,s);if(this.flashes[fid]){return this.flashes[fid];}else{return null;}},playbyid:function(p,s){this.p=p;this.s=s;this.flash=this.findflashbyids(this.p,this.s);if(this.flash){this.redraw(this.flash);return true;}else{return false;}},playdefault:function(){if(!this.flashes){return;}
if(!this.flash){for(var f in this.flashes){if(this.flashes.hasOwnProperty(f)){if(this.flashes[f]){this.flash=this.flashes[f];}
break;}}}
this.redraw(this.flash);},play:function(){var headlineDiv=dojo.query('div.articleHeadlineBox');if(headlineDiv&&headlineDiv[0]){var parentOffset=dojo.position(headlineDiv[0],true);var parentTop=parentOffset.y;var viewOffset=dojo.getViewport().t;var viewTop=viewOffset;if(parentTop<viewTop){window.scrollTo(0,parentTop);}}
if(this.flash){this.playdefault();}else{var p=dj.util.History.get("project");var s=dj.util.History.get("s");if(!s||!this.playbyid(p,s)){this.playdefault();}}
this.reloadads();},reloadads:function(){if(!this.ads){this.ads=dj.widget.ad.AdManager;}
if(this.ads){this.ads.loadAds(this.tabName);}},tabplay:function(p,s){this.setdefault(p,s);dj.util.History.set("project",p,false);if(s){dj.util.History.set("s",s,false);}
this.tabModule.setActivePanel(this.tabName);},playbookmark:function(){if(this.tabModule.getActivePanel()==this.tabName){this.play();}},newflash:function(id,p,s,noload){return new dj.widget.flash.Flash(id,p,s,{"noload":noload});}});dojo.declare("dj.widget.article.flash.ArticleFlashSlideshow",dj.widget.article.flash.ArticleTabFlash,{constructor:function(id,tabModule){this.swfPrefix='info-';this.tabName='slideshow';this.omniture.ctype='slideshow_tab';},newflash:function(id,p,s,noload){return new dj.widget.flash.SlideshowFlash(id,p,s,noload);}});dojo.declare("dj.widget.article.flash.ArticleFlashInteractive",dj.widget.article.flash.ArticleTabFlash,{constructor:function(id,tabModule){this.swfPrefix='info-';this.tabName='interactive';this.omniture.ctype='interactives_tab';}});dojo.declare("dj.widget.article.flash.ArticleFlashMap",dj.widget.article.flash.ArticleTabFlash,{constructor:function(id,tabModule){this.swfPrefix='info-';this.tabName='map';this.omniture.ctype='maps_tab';}});}());
dojo.provide("dj.widget.article.comments.ArticleComments");dojo.require("dj.widget.ad.AdManager");dojo.require("dj.util.Tracking");dojo.require("dj.module.comments.comments");dojo.declare("dj.widget.article.comments.ArticleComments",null,{constructor:function(tabModule){this.tabModule=tabModule;this.tabName='comments';this.omniture={};this.omniture.saveVars=["pageName","section","aheadline","abasedocid","author"];this.omniture.saveValues=[];this.omniture.ctype='comments_tab';this.omniture.section="Community";this.omniture.abasedocid="";this.omniture.aheadline="";this.omniture.author="";this.omniture.pageNameSuffix="_comments";var apn=tabModule;var that=this;apn.observePanels(function(panelId){if(!apn.hasPanel(panelId)){}else if(panelId==that.tabName){that.play();}});},play:function(){if(!this.ads){this.ads=dj.widget.ad.AdManager;}
this.ads.loadAds(this.tabName);dj.module.comments.showCommentsOnCommentTab();this.omniturefirepixel();},tabplay:function(){},playbookmark:function(){if(this.tabModule.getActivePanel()==this.tabName){this.play(true);}},omnituresavepixel:function(){var svlen=this.omniture.saveVars.length;for(var f=0;f<svlen;f++){this.omniture.saveValues[f]=this.omniture.pixel.getMetaData(this.omniture.saveVars[f]);}},omniturerestorepixel:function(){var svlen=this.omniture.saveVars.length;for(var f=0;f<svlen;f++){this.omniture.pixel.setMetaData(this.omniture.saveVars[f],this.omniture.saveValues[f]);}},omniturefirepixel:function(){if(!this.omniture.pixel){this.omniture.pixel=dj.util.Tracking.omniture;}
this.omniture.pixel.resetPixel();this.omnituresavepixel();this.omniture.pixel.setMetaData('ctype',this.omniture.ctype);this.omniture.pixel.setMetaData('section',this.omniture.section);this.omniture.pixel.setMetaData('aheadline',this.omniture.aheadline);this.omniture.pixel.setMetaData('abasedocid',this.omniture.abasedocid);this.omniture.pixel.setMetaData('author',this.omniture.author);this.omniture.pixel.setMetaData('pageName',this.omniture.pixel.getMetaData('pageName')+this.omniture.pageNameSuffix);this.omniture.pixel.firePixel(true);this.omniturerestorepixel();}});
dojo.provide("dj.module.articlePagination");dojo.require("dj.util.History");dojo.require("dj.util.Observer");dj.module.articlePagination={init:function(){dj.util.History.init();this.oPages=dojo.query("#articleTabs_panel_article .articlePage");if(typeof this.oPages=="undefined"||this.oPages===null){return;}
this.oPages.removeClass("hidden");this.panelsName="articleTabs_panel_article";var numOfPages=this.oPages.length;this.paginationModel.setNumberOfPages(numOfPages);if(numOfPages<2){return;}
var that=this;var page=1;dj.util.History.subscribe(that.panelsName,function(idx){that.paginationModel.setCurrent(idx-1);});this.paginationModel.subscribe("current",function(idx,arg){page=that.oPages[idx];if(typeof page=="undefined"){return;}
that.oPages.style({display:"none"});page.setStyle({display:"block"});});this.paginationModel.subscribe("next",function(pg){that.paginationModel.setCurrent(that.paginationModel.getNext());});this.paginationModel.subscribe("prev",function(pg){that.paginationModel.setCurrent(that.paginationModel.getPrev());});this.paginationModel.subscribe("all",function(pg){that.oPages.invoke("setStyle",{display:"block"});});this.insertPagination(numOfPages,"article_pagination_top","article_pagination_bottom");var currPid=dj.util.History.get(that.panelsName)||null;currPid=(currPid!==null&&currPid<=numOfPages&&currPid>0)?currPid:1;that.paginationModel.setCurrent(currPid-1);dj.util.History.set(this.panelsName,currPid);},paginationModel:function(){var currentPage=null;var numberOfPages=0;var obs=new dj.util.Observer(this);return{getPrev:function(){return(0<=currentPage-1)?currentPage-1:currentPage;},getNext:function(){return(numberOfPages>currentPage+1)?currentPage+1:currentPage;},getCurrent:function(){return currentPage;},setNumberOfPages:function(num){numberOfPages=num;},getNumberOfPages:function(){return numberOfPages;},setCurrent:function(curr,arg){currentPage=curr;obs.fireByName("current",curr,arg);},doNext:function(arg){obs.fireByName("next",arg);},doPrev:function(arg){obs.fireByName("prev",arg);},doAll:function(arg){obs.fireByName("all",arg);},subscribe:function(name,callback){if(arguments.length==1){callback=name;name="current";}
obs.subscribeByName(name,callback);}};}(),insertPagination:function(){var aPagContainers=$A(arguments);var numOfPages=aPagContainers.shift();var model=this.paginationModel;var pgs=[];var that=this;aPagContainers.each(function(el,i){var oEl=$(el);var pg=that.buildPagination(numOfPages);model.subscribe("current",function(curr){if(!isNaN(curr)&&typeof pg.pgs[curr]!=="undefined"){if(curr===0){dojo.addClass(pg.prv,"disabled");}
else{dojo.removeClass(pg.prv,"disabled");}
if(curr==numOfPages-1){dojo.addClass(pg.nxt,"disabled");}
else{dojo.removeClass(pg.nxt,"disabled");}
pg.all.setStyle({display:"block"});pg.pgs.invoke("removeClassName","current");pg.pgs[curr].addClassName("current");window.scrollTo(0,0);}});model.subscribe("all",function(){pg.all.setStyle({display:"none"});pg.pgs.invoke("removeClassName","current");window.scrollTo(0,0);});pg.pgs.each(function(page,idx){page.observe("click",function(ev){ev.stop();model.setCurrent(idx,page);dj.util.History.set(that.panelsName,idx+1);});});pg.nxt.observe("click",function(ev){ev.stop();model.doNext(pg);dj.util.History.set(that.panelsName,model.getCurrent()+1);});pg.prv.observe("click",function(ev){ev.stop();model.doPrev(pg);dj.util.History.set(that.panelsName,model.getCurrent()+1);});pg.all.observe("click",function(ev){ev.stop();model.doAll(pg);});oEl.insert(pg.cnt);});},buildPagination:function(numOfPages){var pCnt=new Element("div",{"class":"pagination"});var pageGroup=new Element("ul",{"class":"listPages"});pCnt.insert(pageGroup);var prevCnt=new Element("li",{"class":"listFirst"});var prev=new Element("a",{href:"#articleTabs_panel_article=prev"}).update("&laquo; Previous");prevCnt.insert(prev);pageGroup.insert(prevCnt);var pages=[],page=null;for(var i=1;i<=numOfPages;i++){page=new Element("li",{"class":((i!==1)?"page":"page current")});page.insert(new Element("a",{"href":"#articleTabs_panel_article="+i}).update(i));pageGroup.insert(page);pages.push(page);}
var nextCnt=new Element("li");var next=new Element("a",{href:"#articleTabs_panel_article=next"}).update("Next &raquo;");nextCnt.insert(next);pageGroup.insert(nextCnt);var allArt=new Element("a",{href:"#articleTabs_panel_article=all","class":"articleOnePage"}).update("All On One Page");pCnt.insert(allArt);return{cnt:pCnt,pgs:pages,prv:prev,nxt:next,all:allArt};}};
dj.module.articleVisitHistory={_cookieName:"articleVisitHistory",_maxNumberOfIds:30,init:function(){dj.util.Cookie.deleteGroupCookie(true,this._cookieName);this._deleteCookie("DJCOOKIE");},_setCookie:function(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}
document.cookie=name+"="+value+expires+"; path=/; domain=online.wsj.com";},_deleteCookie:function(name){this._setCookie(name,"",-1);}};
var hat={search_keypress:function(e)
{var key;if(window.event)key=window.event.keyCode;else key=e.which;if(key==13)
{if(e.preventDefault)
{e.preventDefault();e.stopPropagation();}
else
{e.cancelBubble=true;e.returnValue=false;}
this.search();}},search:function()
{try
{var hatinput=document.getElementById("hat_input");var query=hatinput.value;var site=this.thisSite();if(site=="MW")
{}
else if(site=="MWC"||site=="VSE"||site=="BC")
{query=query.replace(/^\s+|\s+$/g,"").replace(/,$|\.,$/,"");query=query.replace("Enter Keyword\(s\)","");if(query)
window.location='http://www.marketwatch.com/search/?value='+query;else
window.location='http://www.marketwatch.com/search';}
else
{var baseDomain='http://'+document.domain;query=query.replace(/^\s+|\s+$/g,"").replace(/,$|\.,$/,"");var searchURL=baseDomain+((loggedIn)?'/search':'/public/search/page/3_0466.html')+'?KEYWORDS='+escape(query);window.location=searchURL;}}
catch(ex){}},search_form:function()
{var hat_searchform=document.getElementById("hat_searchform");if(hat_searchform)hat_searchform.submit();},hideEl:function(id)
{var el=document.getElementById(id);if(el&&el.style)
{el.olddisplay=el.style.display;el.style.display="none";}},showEl:function(id)
{var el=document.getElementById(id);if(el&&el.style)
{el.style.display=el.olddisplay||"block";}},moremenu:function()
{try
{if(this.moreTimeout)
{clearTimeout(this.moreTimeout);this.moreTimeout=null;return;}
this.showEl("hat_more_menu");var moretab=document.getElementById("hat_tab5");moretab.className="hat_tab hat_more_sel";if(document.all)
{var el=document.getElementById("wsjCRSelectDrpdwn");if(el&&el.style)
{el.style.visibility="hidden";}}}
catch(ex){}},moreTimeout:null,moremenuhide:function()
{if(!this.moreTimeout)
this.moreTimeout=setTimeout(this.moremenuhidedelayed,100);},moremenuhidedelayed:function()
{try
{hat.moreTimeout=null;hat.hideEl("hat_more_menu");var moretab=document.getElementById("hat_tab5");moretab.className="hat_tab";if(document.all)
{var el=document.getElementById("wsjCRSelectDrpdwn");if(el&&el.style)
{el.style.visibility="visible";}}}
catch(ex){}},tabover:function(el)
{try
{if(el.className!="hat_tabsel")
{if(el.srcElement)
{if(el.srcElement.parentNode.tagName=="LI"){el=el.srcElement.parentNode;}}
el.className="hat_tab hat_tab_over";}}
catch(ex){}},tabout:function(el)
{try
{if(el.className!="hat_tabsel")
{if(el.srcElement)
{if(el.srcElement.parentNode.tagName=="LI"){el=el.srcElement.parentNode;}}
el.className="hat_tab";}}
catch(ex){}},menuover:function(el)
{if(el.srcElement)
{el=el.srcElement;if(el.tagName=="A")el=el.parentNode;}
if(el)el.className="hat_drop_item hat_drop_item_sel";},menuout:function(el)
{if(el.srcElement)
{el=el.srcElement;if(el.tagName=="A")el=el.parentNode;}
if(el)el.className="hat_drop_item";},inputfocus:function(searchField)
{try
{var index=searchField.className.indexOf("hat_unused");if(index>=0)
{searchField.value="";searchField.className="hat_input";}}
catch(ex){}},updateAnchorText:function(anchor,text)
{if(anchor.innerHTML!=text)
{if(anchor.firstChild)
{anchor.removeChild(anchor.firstChild);}
anchor.innerHTML=text;}},updateAnchorHref:function(anchor,href)
{if(anchor.href!=href)
{anchor.href=href;}},updateAnchorTitle:function(anchor,title)
{if(anchor.title!=title)
{anchor.title=title;}},updateChangeTab:function(tabnumber,text,url,linkTo,newId,popUp)
{{var anchor=document.getElementById("hat_link"+tabnumber);if(anchor)
{if(text!=null)hat.updateAnchorText(anchor,text);if(url)hat.updateAnchorHref(anchor,url);if(linkTo)hat.updateAddTrackingOnclick(anchor,linkTo);if(popUp)hat.updateAnchorTitle(anchor,popUp);}
else
{hat.updateAddChangeTab(tabnumber,text,url,linkTo);}
if(newId)
{var tab=document.getElementById("hat_tab"+tabnumber);tab.id=newId;}}},updateAddChangeTab:function(tabnumber,text,url,linkTo,popUp){var hat_div=document.getElementById("hat_div");var hat_tab5=document.getElementById("hat_tab5");var hat_tabs;for(var i=0;i<hat_div.childNodes.length;i++){if(hat_div.childNodes[i].className=="hat_tabs"){hat_tabs=hat_div.childNodes[i];}}
var newItem=document.createElement("li");var anchor=document.createElement("a");newItem.appendChild(anchor);newItem.className="hat_tab";newItem.setAttribute("id","hat_tab"+tabnumber);if(newItem.attachEvent)
{newItem.attachEvent("onmouseover",hat.tabover);newItem.attachEvent("onmouseout",hat.tabout);}
else{newItem.setAttribute("onmouseover","hat.tabover(this)");newItem.setAttribute("onmouseout","hat.tabout(this)");}
anchor.href=url;anchor.setAttribute("id","hat_link"+tabnumber);if(text!=null)hat.updateAnchorText(anchor,text);if(url)hat.updateAnchorHref(anchor,url);if(linkTo)hat.updateAddTrackingOnclick(anchor,linkTo);if(popUp)hat.updateAnchorTitle(anchor,popUp);if(hat_tabs)hat_tabs.insertBefore(newItem,hat_tab5);},updateChangeMoreItem:function(morenumber,text,url,linkTo)
{var moreli=document.getElementById("hat_more"+morenumber);if(moreli&&moreli.childNodes)
{for(var i=0;i<moreli.childNodes.length;i++)
{var node=moreli.childNodes[i];var tag=node.tagName;if(tag&&tag.toLowerCase()=="a")
{if(text!=null)hat.updateAnchorText(node,text);if(url)hat.updateAnchorHref(node,url);if(linkTo)hat.updateAddTrackingOnclick(node,linkTo);break;}}}
else
{hat.updateAddMoreItem(morenumber,text,url,linkTo);}},updateRemoveMoreItem:function(morenumber)
{var moreli=document.getElementById("hat_more"+morenumber);var hat_more_menu=document.getElementById("hat_more_menu");if(moreli&&hat_more_menu)
{hat_more_menu.removeChild(moreli);}},updateAddTrackingOnclick:function(anchor,linkTo)
{if(anchor.attributes["onclick"])
{if(anchor.attributes["onclick"].nodeValue==("hat.track('"+linkTo+"')"))
return;anchor.removeAttribute("onclick");}
if(anchor.attachEvent)
{anchor.attachEvent("onclick",hat.track);}
else
{anchor.addEventListener("click",hat.track,false);}
anchor.linkTo=linkTo;},updateAddMoreItem:function(morenumber,text,url,linkTo)
{var hat_more_menu=document.getElementById("hat_more_menu");var newItem=document.createElement("li");var anchor=document.createElement("a");newItem.appendChild(anchor);newItem.className="hat_drop_item";newItem.setAttribute("id","hat_more"+morenumber);if(newItem.attachEvent)
{newItem.attachEvent("onmouseover",hat.menuover);newItem.attachEvent("onmouseout",hat.menuout);}
else
{newItem.setAttribute("onmouseout","hat.menuout(this)");newItem.setAttribute("onmouseover","hat.menuover(this)");}
anchor.href=url;anchor.appendChild(document.createTextNode(text));hat.updateAddTrackingOnclick(anchor,linkTo);if(hat_more_menu)hat_more_menu.appendChild(newItem);},track:function(evt)
{try
{var linkTo;if(evt["target"])
{linkTo=evt["target"]["linkTo"];}
else if(evt["srcElement"])
{linkTo=evt["srcElement"]["linkTo"];}
else
{linkTo=evt;}
var link="dnh_"+hat.thisSite()+'2'+linkTo;link=link.toLowerCase();var s_ios=s.ios;s.ios=1;if(s)s.tl(true,'o',link);s.ios=s_ios;}
catch(ex){}},updateSelectTab:function(tabnumber)
{for(var i=1;i<=4;i++)
{var tab=document.getElementById("hat_tab"+i);if(tab)tab.className=(i==tabnumber?"hat_tabsel":"hat_tab");}},thisSite:function()
{var hat_div=document.getElementById("hat_div");if(hat_div)
{var cl=hat_div.className;if(cl.match(/hat_eur/))return"EUR";if(cl.match(/hat_spa/))return"SPA";if(cl.match(/hat_por/))return"POR";if(cl.match(/hat_chi/))return"CHI";if(cl.match(/hat_jpn/))return"JPN";if(cl.match(/hat_asia/))return"ASIA";if(cl.match(/hat_wsj/))return"WSJ";if(cl.match(/hat_mwc/))return"MWC";if(cl.match(/hat_mw/))return"MW";if(cl.match(/hat_bol/))return"BOL";if(cl.match(/hat_atd/))return"ATD";if(cl.match(/hat_vse/))return"VSE";if(cl.match(/hat_bc/))return"BC";if(cl.match(/hat_sm/))return"SM";if(cl.match(/hat_wrad/))return"WRAD";if(cl.match(/hat_fins/))return"FINS";if(cl.match(/hat_wsd/))return"WSD";}
return"";},updateBuildLink:function(url)
{var site=hat.thisSite();var query="?reflink=";switch(site)
{case"WSJ":if(url.match(/wsj/i))query="?MOD=";break;case"BOL":if(url.match(/barrons/i))query="?MOD=";break;case"ATD":if(url.match(/allthingsd/i))query="?link=";break
case"VSE":if(url.match(/vse/i))query="?dist=";break;case"BC":if(url.match(/bigcharts/i))query="?dist=";break;case"MWC":if(url.match(/community/i))query="?dist=";break;case"MW":if(url.match(/marketwatch/i)&&!url.match(/vse/i)&&!url.match(/bigcharts/i)&&!url.match(/community/i))
query="?dist=";break;}
return url+query+"DNH_"+site;},updateBuildMODLink:function(url)
{return url+"?MOD=DNH_"+hat.thisSite();},updateShowHat:function()
{var hat_div=document.getElementById("hat_div");if(hat_div)
{hat_div.className+=" hat_visible";}},update:function()
{try
{var cookie=document.cookie;var wsjregion;var regionindex=cookie.indexOf("wsjregion");var WSJRenoApp=true;if(regionindex!=-1)
{if((typeof window.currentRegion)=='undefined'){var regioncookie=dj.util.Region.getViewByRegion();if(regioncookie!="na,us")wsjregion=regioncookie;}else{WSJRenoApp=false;if(currentRegion!=''){var regioncookie=currentRegion;if(regioncookie!="na,us")wsjregion=regioncookie;}else{var regioncookie=GetCookie("wsjregion");if(regioncookie.indexOf("reset")!=-1){currentRegion=regioncookie.substring(0,regioncookie.indexOf("reset")-1);}else{currentRegion=regioncookie;}
if(currentRegion!="na,us")wsjregion=currentRegion;}}}
if((typeof window.overrideWSJRenoApp)!=='undefined'){WSJRenoApp=false;}
if(!wsjregion)
{if(!WSJRenoApp){hat.updateChangeTab(1,"","http://online.wsj.com/home","WSJ");hat.updateChangeTab(2,"","http://www.marketwatch.com/","MW");hat.updateChangeTab(3,"","http://online.barrons.com/home","BOL");hat.updateChangeTab(4,"","http://allthingsd.com/","ATD");hat.updateChangeTab(6,"","http://www.fins.com/Finance-Jobs","FINS",0,"Finance & Accounting Jobs");hat.updateChangeTab(7,"","http://www.smartmoney.com","SM");}
hat.updateChangeMoreItem(1,"BigCharts","http://bigcharts.marketwatch.com/","BC");hat.updateChangeMoreItem(2,"Virtual Stock Exchange","http://vse.marketwatch.com/Game/Homepage.aspx","VSE");hat.updateChangeMoreItem(3,"FiLife.com","http://www.filife.com","FLF");hat.updateChangeMoreItem(4,"WSJ Asia","http://asia.wsj.com/","ASIA");hat.updateChangeMoreItem(5,"WSJ Europe","http://europe.wsj.com/","EUR");hat.updateChangeMoreItem(6,"WSJ Portuguese","http://online.wsj.com/portuguese","POR");hat.updateChangeMoreItem(7,"WSJ Spanish","http://online.wsj.com/americas","SPA");hat.updateChangeMoreItem(8,"WSJ Chinese","http://cn.wsj.com/gb/index.asp","CHI");hat.updateChangeMoreItem(9,"WSJ Japanese","http://jp.wsj.com/","JPN");hat.updateChangeMoreItem(10,"WSJ Radio","http://www.wsjradio.com","WRAD");hat.updateChangeMoreItem(11,"Financial News","http://www.efinancialnews.com/","FNO");}
else if(wsjregion=="asia"||wsjregion=="asia,india")
{if(!WSJRenoApp){hat.updateChangeTab(1,"","http://online.wsj.com/home","WSJ");hat.updateChangeTab(2,"","http://cn.wsj.com/gb/index.asp","CHI","hat_tabchi");hat.updateChangeTab(3,"","http://jp.wsj.com/","JPN","hat_tabjp");hat.updateChangeTab(4,"","http://www.marketwatch.com/","MW","hat_tab2");hat.updateChangeTab(6,"","http://allthingsd.com/","ATD","hat_tab4");}
hat.updateChangeMoreItem(1,"SmartMoney.com","http://www.smartmoney.com/","SM");hat.updateChangeMoreItem(2,"BigCharts","http://bigcharts.marketwatch.com/","BC");hat.updateChangeMoreItem(3,"Virtual Stock Exchange","http://vse.marketwatch.com/Game/Homepage.aspx","VSE");hat.updateChangeMoreItem(4,"Barron's","http://online.barrons.com/home","BOL");hat.updateChangeMoreItem(5,"Financial News","http://www.efinancialnews.com/","FNO");hat.updateChangeMoreItem(6,"FiLife.com","http://www.filife.com","FLF");hat.updateChangeMoreItem(7,"WSJ Portuguese","http://online.wsj.com/portuguese","POR");hat.updateChangeMoreItem(8,"WSJ Spanish","http://online.wsj.com/americas","SPA");}
else if(wsjregion=="europe")
{if(!WSJRenoApp){hat.updateChangeTab(1,"","http://online.wsj.com/home","WSJ");hat.updateChangeTab(2,"","http://www.marketwatch.com/","MW");hat.updateChangeTab(3,"","http://online.barrons.com/home","BOL");hat.updateChangeTab(4,"","http://www.efinancialnews.com/","FNO","hat_tabfno");}
hat.updateChangeMoreItem(1,"SmartMoney.com","http://www.smartmoney.com/","SM");hat.updateChangeMoreItem(2,"BigCharts","http://bigcharts.marketwatch.com/","BC");hat.updateChangeMoreItem(3,"All Things D","http://allthingsd.com/","ATD");hat.updateChangeMoreItem(4,"Virtual Stock Exchange","http://vse.marketwatch.com/Game/Homepage.aspx","VSE");hat.updateChangeMoreItem(5,"WSJ India","http://india.wsj.com","IND");hat.updateChangeMoreItem(6,"WSJ Portuguese","http://online.wsj.com/portuguese","POR");hat.updateChangeMoreItem(7,"WSJ Spanish","http://online.wsj.com/americas","SPA");hat.updateChangeMoreItem(8,"WSJ Chinese","http://cn.wsj.com/gb/index.asp","CHI");hat.updateChangeMoreItem(9,"WSJ Japanese","http://jp.wsj.com/","JPN");hat.updateChangeMoreItem(10,"FiLife.com","http://www.filife.com","FLF");}
hat.updateShowHat();}
catch(ex)
{}},hatMaxInitPolling:200,init:function()
{try
{var el=document.getElementById("hat_div");if(el&&hat&&hat.update&&typeof(hat.update)==="function")
{hat.update();}
else
{hat.hatMaxInitPolling--;if(hat.hatMaxInitPolling>0)
setTimeout(hat.init,50);}}
catch(ex)
{}}};hat.init();
dj.module.CCS={init:function(cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this.product='WSJ';var prefixDtext=(typeof window.nSP!='undefined')?window.nSP:"";this.dtext=['<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>','<td class="p10" style="padding:4px 0px 5px 0px;border-right:1px solid #9BADCE;" align="center"><a href="'+prefixDtext+'/acct/setup_account" class="unvisited p10">My Account</a></td>','<td class="p10" style="padding:4px 0px 5px 0px;border-right:1px solid #9BADCE;" align="center"><a href="'+prefixDtext+'/msgcenter/view_messages.html?product='+this.product+'" class="unvisited p10">Messages</a></td>','<td class="p10" style="padding:4px 0px 5px 0px;" align="center"><a href="'+prefixDtext+'/setup/setup_center_mainpage" class="unvisited p10">Preferences</a></td>','</tr></table>'];var prefixAtext=(typeof window.nSP!='undefined')?window.nSP:"";this.atext=['<a href="'+prefixAtext+'/msgcenter/view_messages.html?product='+this.product+'">','<img src="/img/message_alert_icon.gif" border="0" width="25" height="16" style="padding:0px;margin:0px;vertical-align:middle;"/><span class="p11" style="vertical-align:middle;">You have an important message</span>','</a>'];var prefixNtext=(typeof window.nSP!='undefined')?window.nSP:"";this.ntext=['<a href="'+prefixNtext+'/msgcenter/view_messages.html?product='+this.product+'">','<img src="/img/message_icon_WSJ.gif" border="0" width="15" height="11" style="padding:0px;margin:0px;vertical-align:middle;"/><span class="p11" style="vertical-align:middle;">You have a new message</span>','</a>'];},DEFAULT_CONFIG:{product:null,messageCenterRequest:null,messageCenterTimeout:null,displayedInterstitialRequest:null,displayedInterstitialTimeout:null,readRequest:null,readTimeout:null,getContentRequest:null,getContentTimeout:null,changeOrderRequest:null,changeOrderTimeout:null,dtext:null,atext:null,ntext:null,VarX:null,y:null,z:null},changeStyle:function(httpRequest,msgid){var v=document.getElementById('m_'+msgid+'_f');v.style.fontWeight='';v=document.getElementById('m_'+msgid+'_s');v.style.fontWeight='';v=document.getElementById('m_'+msgid+'_r');v.style.fontWeight='';v=document.getElementById('m_'+msgid+'_e');v.style.fontWeight='';},displayMessages:function(httpRequest){var m=document.getElementById("messages");m.innerHTML=httpRequest.responseText;},closeMessage:function(){this.y.style.display='none';this.VarX.style.display='none';},checkAll:function(){var f=document.getElementById("mform");var num=f.elements.length;for(var i=0;i<num;i++){var e=f.elements[i];if(e.type=='checkbox'){e.checked=true;}}},uncheckAll:function(){var f=document.getElementById("mform");var num=f.elements.length;for(var i=0;i<num;i++){var e=f.elements[i];if(e.type=='checkbox'){e.checked=false;}}},displayDiv:function(content,mid,mname,isInterstitial){this.VarX=$('modal');this.y=$('message');this.z=$('messagecontent');this.z.innerHTML=content;this.y.style.zIndex=1000000001;this.y.style.display='block';this.y.style.overflow='hidden';this.VarX.style.zIndex=1000000000;this.VarX.style.display='block';this.VarX.style.height=document.body.scrollHeight+'px';if(typeof s==='undefined'){var s=(typeof window.s!='undefined')?window.s:"";}
if(s!==""){s.events="event30";if(isInterstitial){s.eVar30='WSJ Interstitial - '+mname;}else{s.eVar30='WSJ Message - '+mname;}
s.linkTrackVars="eVar30,events";s.linkTrackEvents="event30";if(isInterstitial){s.tl(true,'o','WSJ Interstitial - '+mname);}else{s.tl(true,'o','WSJ Message - '+mname);}}},showInterstitialContent:function(content,mid,uid,umid,mname){var tmp='';try{tmp=(new XMLSerializer()).serializeToString(content);}catch(e){tmp=content.xml;}
tmp=tmp.replace(/&amp;/g,'&');tmp=tmp.replace(/<user\/>/g,userName);tmp=tmp.replace(/gotosite/g,'WSJ.com');tmp=tmp.replace(/myacctsite/g,'https://commerce.wsj.com/myaccount/do/viewBillingInfo');tmp=tmp.replace(/modvalue/g,'mc_wsj_interstitial_'+mname);tmp=tmp.replace(/<site_name\/>/g,'WSJ.com');tmp=tmp.replace(/site/g,'wsj');tmp=tmp.replace(/msgbg/g,'#364A92');var d=new Date();tmp=tmp.replace(/<year\/>/g,d.getFullYear());tmp=tmp.substring(9,tmp.indexOf("</content>"));this.displayDiv(tmp,mid,mname,true);this.sendDisplayedInterstitialRequest(uid,umid);},processTop:function(httpRequest){try{var strDtext=this.dtext.join("");var strAtext=this.atext.join("");var strNtext=this.ntext.join("");var message=httpRequest.responseXML.getElementsByTagName("message")[0];if(message!==null){if(message.firstChild!==null){var mid=(message.getElementsByTagName("mid")[0]).firstChild.nodeValue;var uid=(message.getElementsByTagName("uid")[0]).firstChild.nodeValue;var umid=(message.getElementsByTagName("umid")[0]).firstChild.nodeValue;var mname=(message.getElementsByTagName("messageid")[0]).firstChild.nodeValue;var priority=message.getElementsByTagName("priority")[0];var display=message.getElementsByTagName("display")[0];if(display!==null){var dvalue=display.firstChild.nodeValue;if(dvalue=='true'){var content=message.getElementsByTagName("content")[0];this.showInterstitialContent(content,mid,uid,umid,mname);}else if(display=='dontshow'){if(priority!==null){var value=priority.firstChild.nodeValue;if(value==1){$('msgCenter').innerHTML=strAtext;dj.util.Cookie.setCookie('CMCAlert',strAtext,1);}else{$('msgCenter').innerHTML=strNtext;dj.util.Cookie.setCookie('CMCAlert',strNtext,1);}}}}else{$('msgCenter').innerHTML=strDtext;}}else{$('msgCenter').innerHTML=strDtext;}}else{$('msgCenter').innerHTML=strDtext;}
return true;}catch(e){return false;}},reloadMessageCenter:function(){this.init();var cmcalertcookie=dj.util.Cookie.getCookie("CMCAlert");if(cmcalertcookie!==null){}
var cmccookie=dj.util.Cookie.getCookie("CMC");if(cmccookie===null){if(this.messageCenterRequest!=null){this.messageCenterRequest=null;}
dj.util.Cookie.setCookie('CMC','top',1);var processX;var d=new Date();var dataUrl='/msgcenter/top_message.html';var dataUrlParams=$H({product:this.product,d:d.getTime()});var that=this;this.messageCenterRequest=new Ajax.Request(dataUrl,{method:'GET',parameters:dataUrlParams.toQueryString(),onSuccess:function(transport){processX=that.processTop(transport);},onException:function(transport,exception){console.error('Exception occured during Ajax Request to retrieve data: %o',exception);}});}},sendDisplayedInterstitialRequest:function(uid,umid){if(this.displayedInterstitialRequest!==null){this.displayedInterstitialRequest=null;}
var params=$H({uId:uid,umId:umid,product:this.product});var postUrl='/msgcenter/displayed_interstitial.html';var that=this;this.displayedInterstitialRequest=new Ajax.Request(postUrl,{method:'POST',parameters:params.toQueryString(),onComplete:function(transport,json){that.reloadMessageCenter();},onException:function(transport,exception){console.error('Exception occured while posting posting Ajax Request : '+exception);}});},sendReadRequest:function(msgid,umid){if(this.readRequest!==null){this.readRequest=null;}
var params=$H({umId:umid,product:this.product});var postUrl='/msgcenter/read_message.html';var that=this;this.readRequest=new Ajax.Request(postUrl,{method:'POST',parameters:params.toQueryString(),onComplete:function(transport,json){that.changeStyle(transport,msgid);that.reloadMessageCenter();},onException:function(transport,exception){console.error('Exception occured while posting posting Ajax Request : '+exception);}});},showMessage:function(httpRequest,msgid,umid,mname){var message=httpRequest.responseText.replace(/&amp;/g,'&');var ccsuser1=document.getElementById('CCS_USER');if(ccsuser1){dj.util.User.renderCallsign(ccsuser1);}
message=message.replace(/gotosite/g,'WSJ.com');message=message.replace(/myacctsite/g,'https://commerce.wsj.com/myaccount/do/viewBillingInfo');message=message.replace(/modvalue/g,'mc_wsj_message_'+mname);var d=new Date();message=message.replace(/<year\/>/g,d.getFullYear());message=message.replace(/<site_name\/>/g,'WSJ.com');message=message.replace(/site/g,'wsj');message=message.replace(/msgbg/g,'#364A92');dj.util.Cookie.setCookie('CMCAlert','',-1);this.displayDiv(message,msgid,mname,false);this.sendReadRequest(msgid,umid);},loadMessageContent:function(msgid,uid,umid,read,mname){if(this.getContentRequest!==null){this.getContentRequest=null;}
var dataUrl='/msgcenter/get_message.html?messageId='+msgid+'&product='+this.product;var that=this;this.getContentRequest=new Ajax.Request(dataUrl,{method:'GET',onSuccess:function(transport){that.showMessage(transport,msgid,umid,mname);},onException:function(transport,exception){console.error('Exception occured during Ajax Request to retrieve data: %o',exception);}});},sendChangeOrderRequest:function(order,product){if(this.changeOrderRequest!==null){this.changeOrderRequest=null;}
var dataUrl='/msgcenter/order_messages.html?order='+order+'&product='+product;var that=this;this.changeOrderRequest=new Ajax.Request(dataUrl,{method:'GET',onSuccess:function(transport){that.displayMessages(transport);},onException:function(transport,exception){console.error('Exception occured during Ajax Request to retrieve data: %o',exception);}});},updateusermessagestatuscode:function(){if(this.readRequest!==null){this.readRequest=null;}
var params=$H({product:this.product});var postUrl='/umsl/user_messages/do_not_show';var that=this;this.readRequest=new Ajax.Request(postUrl,{method:'POST',parameters:params.toQueryString(),onComplete:function(transport,json){that.reloadMessageCenter();},onException:function(transport,exception){console.error('Exception occured while posting posting Ajax Request : '+exception);}});}};
dj.module.globalHeader=function(){var cfg=new dj.util.Config(this);var DEFAULT_CONFIG={HEADER_CONTAINER_CLASS:{key:"headerContainerClass",value:".header"},TIMESTAMP_CLASS:{key:"timestamp",value:".date"},WSJ_LOGO_ID:{key:"wsjLogoId",value:"wsjLogo"},WSJ_LARGE_LOGO_CLASSNAME:{key:"wsjLargeLogoClassName",value:"logo_large"},WSJ_SMALL_LOGO_CLASSNAME:{key:"wsjSmallLogoClassName",value:"logo_small"},CURRENT_SUBSECTION_DISPLAY_CLASS:{key:"currentSubSectionDisplayClass",value:".currentSubSection"},GLOBALNAV_SUBSECTION_ELEMENT_ID:{key:"globalNavSubSectionElementId",value:"currentGlobalNavSubSection"},SUBSCRIBER_LOGIN_CLASS:{key:"subscriberLoginClass",value:".login"},HEADER_PROMO_CLASS:{key:"headerPromoClass",value:".promo"},SUBSCRIBER_DETAILS_ELEMENT_ID:{key:"subscriberDetailsElementId",value:"subscribedUserDetailsId"},COMMUNITY_FORUMS_LINK_CLASS:{key:"communityForumsLinkClass",value:".communityForumsLink"},TODAYS_PAPER_LINK_CLASS:{key:"todaysPaperLinkClass",value:".todaysPaperLink"},MOJ_LINK_CLASS:{key:"mojLinkClass",value:".myOnlineJournalLink"},MESSAGE_CENTER_LINK_CLASS:{key:"messageCenterLink",value:".messageCenterLink"},MESSAGE_COUNT_CLASS:{key:"messageCountClass",value:".messageCount"},LOGIN_USERNAME_ELEMENT_ID:{key:"loginUserElementId",value:"login_username"},LOGIN_PASSWORD_ELEMENT_ID:{key:"loginPasswordElementId",value:"login_password"},LOGIN_FORM_ID:{key:"loginFormId",value:"login_form"},PAGE_URL_ELEMENT_ID:{key:"pageUrlElementId",value:"page_url"},LOGOUT_LINK_ELEMENT_ID:{key:"logoutLinkElementId",value:"logoutLink"},LOGIN_BUTTON_ELEMENT_ID:{key:"loginButtonImageId",value:"login_button"},USER_NAME_ELEMENT_ID:{key:"userNameElementId",value:"userName"},WSJ_LOGO_FADE_APPEAR_DURATION:{key:"wsjLogoFadeAppearDuration",value:"1.0"},WSJ_LOGO_DELAY_DURATION:{key:"wsjLogoDelayDuration",value:"2000"},LOGGED_IN_COMMUNITY_URL:{key:"loggedInCommunityUrl",value:"/community"},LOGGED_IN_TODAYS_PAPER_URL:{key:"loggedInTodaysPaperUrl",value:"/page/us_in_todays_paper.html?mod=WSJ_formfactor"},MESSAGE_CENTER_POST_URL:{key:"messageCenterPostUrl",value:"/community/integration/messagescount.html"},LOGOUT_URL:{key:"logoutUrl",value:"/static_html_files/logout_confirmation.htm"},SUBSCRIBER_HOMEPAGE_PID:{key:"subscriberHomepagePid",value:"0_0_WH_0001"},NONSUBSCRIBER_HOMEPAGE_PID:{key:"nonSubscriberHomepagePid",value:"0_0_WH_0001_public"},ASIA_PAGE_PID:{key:"asiaPagePid",value:"0_0_WP_2103"},EUROPE_PAGE_PID:{key:"europePagePid",value:"0_0_WP_2104"},NONSUBSCRIBER_NEWSLETTERS_ALERTS_PAGE_PID:{key:"nonSubNewslettersAlertsPagePid",value:"5_6007"},NONSUBSCRIBER_SEARCH_PAGE_PID:{key:"nonSubscriberSearchPagePid",value:"3_0466"},HOMEPAGE_SUBSCRIBER_URL:{key:"homePageSubscriberUrl",value:"/"},SEARCH_PAGE_SUBSCRIBER_URL:{key:"searchPageSubscriberUrl",value:"/search"},TODAYS_PAPER_LINK_CONTAINER_CLASS:{key:"todaysPaperLinkContainerClass",value:".todaysPaperLinkContainer"},VIDEO_LINK_CONTAINER_CLASS:{key:"videoLinkClass",value:".videoLinkContainer"},COLUMNS_LINK_CONTAINER_CLASS:{key:"columnsLinkClass",value:".columnsLinkContainer"},BLOGS_LINK_CONTAINER_CLASS:{key:"blogsLinkClass",value:".blogsLinkContainer"},INTERACTIVE_GRAPHICS_LINK_CONTAINER_CLASS:{key:"interactiveGraphicsLinkContainerClass",value:".interactiveGraphicsLinkContainer"},TOPICS_LINK_CONTAINER_CLASS:{key:"topicsLinkClass",value:".topicsLinkContainer"},COMMUNITY_FORUMS_LINK_CONTAINER_CLASS:{key:"communityForumsLinkContainerClass",value:".communityForumsLinkContainer"},TODAYS_PAPER_US_NONSUB_PID:{key:"todaysPaperUsNonSubPid",value:"2_0433"},TODAYS_PAPER_EUROPE_NONSUB_PID:{key:"todaysPaperEuropeNonSubPid",value:"2_0434"},TODAYS_PAPER_ASIA_NONSUB_PID:{key:"todaysPaperAsiaNonSubPid",value:"2_0435"},TODAYS_PAPER_US_PID:{key:"todaysPaperUsPid",value:"2_0133"},TODAYS_PAPER_EUROPE_PID:{key:"todaysPaperEuropePid",value:"2_0134"},TODAYS_PAPER_ASIA_PID:{key:"todaysPaperAsiaPid",value:"2_0135"},TODAYS_PAPER_PAST_EDITIONS_PID:{key:"todaysPaperPastEditionsPid",value:"2_0233"},TODAYS_PAPER_INDEX_BIZ_PID:{key:"todaysPaperIndexBizPid",value:"2_0156"},TODAYS_PAPER_INDEX_PEOPLE_PID:{key:"todaysPaperIndexPeoplePid",value:"2_0155"},TODAYS_PAPER_CORRECTIONS_PID:{key:"todaysPaperCorrectionsPid",value:"Corrections"},VIDEO_PID:{key:"videoPid",value:"0_0_WP_3000"},BLOGS_PID:{key:"blogsPid",value:"8_0019"},COLUMNS_PID:{key:"columnsPid",value:"2_0140"},INTERACTIVE_GRAPHICS_PID:{key:"interactiveGraphicsPid",value:"0_0_WP_2003"},TOPICS_PID:{key:"topicsIndexPid",value:"0_0_WT_0001"},NEWSLETTERS_ALERTS_SUB_PID:{key:"newslettersAlertsSubPid",value:"5_6001"},NEWSLETTERS_ALERTS_PUB_PID:{key:"newslettersAlertsSubPid",value:"5_6003"},MOJ_LINK_URL:{key:"mojLinkUrl",value:"/page/my-journal-main.html"},MDC_LINK_URL:{key:"mdcLinkUrl",value:"/mdc/page/marketsdata.html"},MDC_PAGE_PID:{key:"mdcPagePid",value:"2_3000"},COMMUNITY_HIGHLIGHT_COMPARE_URL:{key:"communityHighlightCompareUrl",value:"/community"},FORUMS_HIGHLIGHT_COMPARE_URL:{key:"forumnsHighlightCompareUrl",value:"forums.wsj.com"},FREE_REG_CLASS:{key:"freeregClass",value:".freereg"},LOCATION_NAV_CLASS:{key:"locationNavClass",value:".location_nav"},LOCATION_NAV_COLLAPSED_CLASSNAME:{key:"locDrpdwnCollapsedClassName",value:"location_collapsed"},LOCATION_NAV_EXPANDED_CLASSNAME:{key:"locDrpdwnExpandedClassName",value:"location_expanded"},US_EDITION_LINK_CLASS:{key:"usEditionLinkClass",value:".map_us"},EU_EDITION_LINK_CLASS:{key:"euEditionLinkClass",value:".map_europe"},ASIA_EDITION_LINK_CLASS:{key:"asiaEditionLinkClass",value:".map_asia"},IN_EDITION_LINK_CLASS:{key:"inEditionLinkClass",value:".map_india"},LOGGED_IN_TODAYS_PAPER_URL_ASIA:{key:"loggedInTodaysPaperUrlAsia",value:"/page/asia_in_todays_paper.html?mod=WSJ_formfactor"},LOGGED_IN_TODAYS_PAPER_URL_EUROPE:{key:"loggedInTodaysPaperUrlEurope",value:"/page/europe_in_todays_paper.html?mod=WSJ_formfactor"},US_EDITION_MDC_URL:{key:"usEditionMDCUrl",value:"/marketsdata"},EU_EDITION_MDC_URL:{key:"euEditionMDCUrl",value:"/mdc/public/page/marketsdata_europe.html"},ASIA_EDITION_MDC_URL:{key:"asiaEditionMDCUrl",value:"/mdc/public/page/marketsdata_asia.html"},IN_EDITION_MDC_URL:{key:"inEditionMDCUrl",value:"/mdc/public/page/marketsdata_asia.html"},MDC_COMPARE_URL:{key:"mdcCompareUrl",value:"/mdc/"},FOOTER_CONTAINER_CLASS:{key:"footerContainerClass",value:".pagefooter"}};var setupConfig=function(config){var defCfg=DEFAULT_CONFIG;cfg.addProperty(defCfg.HEADER_CONTAINER_CLASS.key,{value:defCfg.HEADER_CONTAINER_CLASS.value});cfg.addProperty(defCfg.TIMESTAMP_CLASS.key,{value:defCfg.TIMESTAMP_CLASS.value});cfg.addProperty(defCfg.WSJ_LOGO_ID.key,{value:defCfg.WSJ_LOGO_ID.value});cfg.addProperty(defCfg.WSJ_LARGE_LOGO_CLASSNAME.key,{value:defCfg.WSJ_LARGE_LOGO_CLASSNAME.value});cfg.addProperty(defCfg.WSJ_SMALL_LOGO_CLASSNAME.key,{value:defCfg.WSJ_SMALL_LOGO_CLASSNAME.value});cfg.addProperty(defCfg.CURRENT_SUBSECTION_DISPLAY_CLASS.key,{value:defCfg.CURRENT_SUBSECTION_DISPLAY_CLASS.value});cfg.addProperty(defCfg.GLOBALNAV_SUBSECTION_ELEMENT_ID.key,{value:defCfg.GLOBALNAV_SUBSECTION_ELEMENT_ID.value});cfg.addProperty(defCfg.SUBSCRIBER_LOGIN_CLASS.key,{value:defCfg.SUBSCRIBER_LOGIN_CLASS.value});cfg.addProperty(defCfg.HEADER_PROMO_CLASS.key,{value:defCfg.HEADER_PROMO_CLASS.value});cfg.addProperty(defCfg.SUBSCRIBER_DETAILS_ELEMENT_ID.key,{value:defCfg.SUBSCRIBER_DETAILS_ELEMENT_ID.value});cfg.addProperty(defCfg.COMMUNITY_FORUMS_LINK_CLASS.key,{value:defCfg.COMMUNITY_FORUMS_LINK_CLASS.value});cfg.addProperty(defCfg.TODAYS_PAPER_LINK_CLASS.key,{value:defCfg.TODAYS_PAPER_LINK_CLASS.value});cfg.addProperty(defCfg.MOJ_LINK_CLASS.key,{value:defCfg.MOJ_LINK_CLASS.value});cfg.addProperty(defCfg.MESSAGE_CENTER_LINK_CLASS.key,{value:defCfg.MESSAGE_CENTER_LINK_CLASS.value});cfg.addProperty(defCfg.MESSAGE_COUNT_CLASS.key,{value:defCfg.MESSAGE_COUNT_CLASS.value});cfg.addProperty(defCfg.LOGIN_USERNAME_ELEMENT_ID.key,{value:defCfg.LOGIN_USERNAME_ELEMENT_ID.value});cfg.addProperty(defCfg.LOGIN_PASSWORD_ELEMENT_ID.key,{value:defCfg.LOGIN_PASSWORD_ELEMENT_ID.value});cfg.addProperty(defCfg.LOGIN_BUTTON_ELEMENT_ID.key,{value:defCfg.LOGIN_BUTTON_ELEMENT_ID.value});cfg.addProperty(defCfg.PAGE_URL_ELEMENT_ID.key,{value:defCfg.PAGE_URL_ELEMENT_ID.value});cfg.addProperty(defCfg.LOGOUT_LINK_ELEMENT_ID.key,{value:defCfg.LOGOUT_LINK_ELEMENT_ID.value});cfg.addProperty(defCfg.USER_NAME_ELEMENT_ID.key,{value:defCfg.USER_NAME_ELEMENT_ID.value});cfg.addProperty(defCfg.WSJ_LOGO_FADE_APPEAR_DURATION.key,{value:defCfg.WSJ_LOGO_FADE_APPEAR_DURATION.value});cfg.addProperty(defCfg.WSJ_LOGO_DELAY_DURATION.key,{value:defCfg.WSJ_LOGO_DELAY_DURATION.value});cfg.addProperty(defCfg.LOGGED_IN_COMMUNITY_URL.key,{value:defCfg.LOGGED_IN_COMMUNITY_URL.value});cfg.addProperty(defCfg.LOGGED_IN_TODAYS_PAPER_URL.key,{value:defCfg.LOGGED_IN_TODAYS_PAPER_URL.value});cfg.addProperty(defCfg.MESSAGE_CENTER_POST_URL.key,{value:defCfg.MESSAGE_CENTER_POST_URL.value});cfg.addProperty(defCfg.LOGOUT_URL.key,{value:defCfg.LOGOUT_URL.value});cfg.addProperty(defCfg.HOMEPAGE_SUBSCRIBER_URL.key,{value:defCfg.HOMEPAGE_SUBSCRIBER_URL.value});cfg.addProperty(defCfg.SEARCH_PAGE_SUBSCRIBER_URL.key,{value:defCfg.SEARCH_PAGE_SUBSCRIBER_URL.value});cfg.addProperty(defCfg.NONSUBSCRIBER_HOMEPAGE_PID.key,{value:defCfg.NONSUBSCRIBER_HOMEPAGE_PID.value});cfg.addProperty(defCfg.NONSUBSCRIBER_NEWSLETTERS_ALERTS_PAGE_PID.key,{value:defCfg.NONSUBSCRIBER_NEWSLETTERS_ALERTS_PAGE_PID.value});cfg.addProperty(defCfg.NONSUBSCRIBER_SEARCH_PAGE_PID.key,{value:defCfg.NONSUBSCRIBER_SEARCH_PAGE_PID.value});cfg.addProperty(defCfg.SUBSCRIBER_HOMEPAGE_PID.key,{value:defCfg.SUBSCRIBER_HOMEPAGE_PID.value});cfg.addProperty(defCfg.EUROPE_PAGE_PID.key,{value:defCfg.EUROPE_PAGE_PID.value});cfg.addProperty(defCfg.ASIA_PAGE_PID.key,{value:defCfg.ASIA_PAGE_PID.value});cfg.addProperty(defCfg.MOJ_LINK_URL.key,{value:defCfg.MOJ_LINK_URL.value});cfg.addProperty(defCfg.TODAYS_PAPER_LINK_CONTAINER_CLASS.key,{value:defCfg.TODAYS_PAPER_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.VIDEO_LINK_CONTAINER_CLASS.key,{value:defCfg.VIDEO_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.BLOGS_LINK_CONTAINER_CLASS.key,{value:defCfg.BLOGS_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.COLUMNS_LINK_CONTAINER_CLASS.key,{value:defCfg.COLUMNS_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.INTERACTIVE_GRAPHICS_LINK_CONTAINER_CLASS.key,{value:defCfg.INTERACTIVE_GRAPHICS_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.TOPICS_LINK_CONTAINER_CLASS.key,{value:defCfg.TOPICS_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.COMMUNITY_FORUMS_LINK_CONTAINER_CLASS.key,{value:defCfg.COMMUNITY_FORUMS_LINK_CONTAINER_CLASS.value});cfg.addProperty(defCfg.TODAYS_PAPER_US_NONSUB_PID.key,{value:defCfg.TODAYS_PAPER_US_NONSUB_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_EUROPE_NONSUB_PID.key,{value:defCfg.TODAYS_PAPER_EUROPE_NONSUB_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_ASIA_NONSUB_PID.key,{value:defCfg.TODAYS_PAPER_ASIA_NONSUB_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_US_PID.key,{value:defCfg.TODAYS_PAPER_US_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_EUROPE_PID.key,{value:defCfg.TODAYS_PAPER_EUROPE_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_ASIA_PID.key,{value:defCfg.TODAYS_PAPER_ASIA_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_PAST_EDITIONS_PID.key,{value:defCfg.TODAYS_PAPER_PAST_EDITIONS_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_INDEX_BIZ_PID.key,{value:defCfg.TODAYS_PAPER_INDEX_BIZ_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_INDEX_PEOPLE_PID.key,{value:defCfg.TODAYS_PAPER_INDEX_PEOPLE_PID.value});cfg.addProperty(defCfg.TODAYS_PAPER_CORRECTIONS_PID.key,{value:defCfg.TODAYS_PAPER_CORRECTIONS_PID.value});cfg.addProperty(defCfg.VIDEO_PID.key,{value:defCfg.VIDEO_PID.value});cfg.addProperty(defCfg.COLUMNS_PID.key,{value:defCfg.COLUMNS_PID.value});cfg.addProperty(defCfg.BLOGS_PID.key,{value:defCfg.BLOGS_PID.value});cfg.addProperty(defCfg.INTERACTIVE_GRAPHICS_PID.key,{value:defCfg.INTERACTIVE_GRAPHICS_PID.value});cfg.addProperty(defCfg.TOPICS_PID.key,{value:defCfg.TOPICS_PID.value});cfg.addProperty(defCfg.NEWSLETTERS_ALERTS_SUB_PID.key,{value:defCfg.NEWSLETTERS_ALERTS_SUB_PID.value});cfg.addProperty(defCfg.NEWSLETTERS_ALERTS_PUB_PID.key,{value:defCfg.NEWSLETTERS_ALERTS_PUB_PID.value});cfg.addProperty(defCfg.LOGIN_FORM_ID.key,{value:defCfg.LOGIN_FORM_ID.value});cfg.addProperty(defCfg.MDC_LINK_URL.key,{value:defCfg.MDC_LINK_URL.value});cfg.addProperty(defCfg.MDC_PAGE_PID.key,{value:defCfg.MDC_PAGE_PID.value});cfg.addProperty(defCfg.COMMUNITY_HIGHLIGHT_COMPARE_URL.key,{value:defCfg.COMMUNITY_HIGHLIGHT_COMPARE_URL.value});cfg.addProperty(defCfg.FORUMS_HIGHLIGHT_COMPARE_URL.key,{value:defCfg.FORUMS_HIGHLIGHT_COMPARE_URL.value});cfg.addProperty(defCfg.FREE_REG_CLASS.key,{value:defCfg.FREE_REG_CLASS.value});cfg.addProperty(defCfg.LOCATION_NAV_CLASS.key,{value:defCfg.LOCATION_NAV_CLASS.value});cfg.addProperty(defCfg.LOCATION_NAV_COLLAPSED_CLASSNAME.key,{value:defCfg.LOCATION_NAV_COLLAPSED_CLASSNAME.value});cfg.addProperty(defCfg.LOCATION_NAV_EXPANDED_CLASSNAME.key,{value:defCfg.LOCATION_NAV_EXPANDED_CLASSNAME.value});cfg.addProperty(defCfg.US_EDITION_LINK_CLASS.key,{value:defCfg.US_EDITION_LINK_CLASS.value});cfg.addProperty(defCfg.EU_EDITION_LINK_CLASS.key,{value:defCfg.EU_EDITION_LINK_CLASS.value});cfg.addProperty(defCfg.ASIA_EDITION_LINK_CLASS.key,{value:defCfg.ASIA_EDITION_LINK_CLASS.value});cfg.addProperty(defCfg.IN_EDITION_LINK_CLASS.key,{value:defCfg.IN_EDITION_LINK_CLASS.value});cfg.addProperty(defCfg.LOGGED_IN_TODAYS_PAPER_URL_ASIA.key,{value:defCfg.LOGGED_IN_TODAYS_PAPER_URL_ASIA.value});cfg.addProperty(defCfg.LOGGED_IN_TODAYS_PAPER_URL_EUROPE.key,{value:defCfg.LOGGED_IN_TODAYS_PAPER_URL_EUROPE.value});cfg.addProperty(defCfg.US_EDITION_MDC_URL.key,{value:defCfg.US_EDITION_MDC_URL.value});cfg.addProperty(defCfg.EU_EDITION_MDC_URL.key,{value:defCfg.EU_EDITION_MDC_URL.value});cfg.addProperty(defCfg.ASIA_EDITION_MDC_URL.key,{value:defCfg.ASIA_EDITION_MDC_URL.value});cfg.addProperty(defCfg.IN_EDITION_MDC_URL.key,{value:defCfg.IN_EDITION_MDC_URL.value});cfg.addProperty(defCfg.MDC_COMPARE_URL.key,{value:defCfg.MDC_COMPARE_URL.value});cfg.addProperty(defCfg.FOOTER_CONTAINER_CLASS.key,{value:defCfg.FOOTER_CONTAINER_CLASS.value});if(config){cfg.applyConfig(config,true);}
cfg.fireQueue();};return{initialize:function(config){setupConfig(config);var headerContainerClass=cfg.getProperty(DEFAULT_CONFIG.HEADER_CONTAINER_CLASS.key);this.oHeader=$(document.body).down(headerContainerClass);this.editionDropdownSetUp();this.displaySubSection();this.displayTimeStamp();var that=this;this.currRegion=dj.util.Region.getViewByRegion();this.concatURL='';if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){this.concatURL="http://"+gcDomain;}else{this.concatURL="http://"+document.domain;}
dj.util.User.isLoggedIn(function(isLoggedIn){if(isLoggedIn){that.displaySubscriberDetails();that.setupLogout();}else{that.setupLogin();var freeregClass=cfg.getProperty(DEFAULT_CONFIG.FREE_REG_CLASS.key);that.ofreereg=that.oHeader.down(freeregClass);that.ofreereg.setStyle({display:"block"});var subscriberLoginClass=cfg.getProperty(DEFAULT_CONFIG.SUBSCRIBER_LOGIN_CLASS.key);that.oSubscriberLogin=that.oHeader.down(subscriberLoginClass);that.oSubscriberLogin.setStyle({display:"block"});var headerPromoClass=cfg.getProperty(DEFAULT_CONFIG.HEADER_PROMO_CLASS.key);that.oHeaderPromo=that.oHeader.down(headerPromoClass);that.oHeaderPromo.setStyle({display:"block"});}});this.highlightFormFactorLinks();var todaysPaperLinkClass=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_LINK_CLASS.key);this.oTodaysPaperLink=this.oHeader.down(todaysPaperLinkClass);var loggedInTodaysPaperUrl=cfg.getProperty(DEFAULT_CONFIG.LOGGED_IN_TODAYS_PAPER_URL.key);var loggedInTodaysPaperUrlAsia=cfg.getProperty(DEFAULT_CONFIG.LOGGED_IN_TODAYS_PAPER_URL_ASIA.key);var loggedInTodaysPaperUrlEurope=cfg.getProperty(DEFAULT_CONFIG.LOGGED_IN_TODAYS_PAPER_URL_EUROPE.key);var currEdition="";if(this.currRegion=="asia"||this.currRegion=="asia,india"){loggedInTodaysPaperUrl=loggedInTodaysPaperUrlAsia;}else if(this.currRegion=="europe"){loggedInTodaysPaperUrl=loggedInTodaysPaperUrlEurope;}
if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){this.oTodaysPaperLink.href="http://"+gcDomain+loggedInTodaysPaperUrl;}else{this.oTodaysPaperLink.href=loggedInTodaysPaperUrl;}
var that=this;dj.util.User.isSubLoggedIn(function(subLoggedIn){if(!subLoggedIn&&openHouseMode!='undefined'&&!eval(openHouseMode)){if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){that.oTodaysPaperLink.href="http://"+gcDomain+"/public"+loggedInTodaysPaperUrl;}else{that.oTodaysPaperLink.href="/public"+loggedInTodaysPaperUrl;}}});},editionDropdownSetUp:function(){var locationNavClass=cfg.getProperty(DEFAULT_CONFIG.LOCATION_NAV_CLASS.key);this.oLocationNav=this.oHeader.down(locationNavClass);var selLocDrpdwnCollapsedClassName=cfg.getProperty(DEFAULT_CONFIG.LOCATION_NAV_COLLAPSED_CLASSNAME.key);var selLocDrpdwnExpandedClassName=cfg.getProperty(DEFAULT_CONFIG.LOCATION_NAV_EXPANDED_CLASSNAME.key);var usEditionLinkClassName=cfg.getProperty(DEFAULT_CONFIG.US_EDITION_LINK_CLASS.key);var euEditionLinkClassName=cfg.getProperty(DEFAULT_CONFIG.EU_EDITION_LINK_CLASS.key);var inEditionLinkClassName=cfg.getProperty(DEFAULT_CONFIG.IN_EDITION_LINK_CLASS.key);var asiaEditionLinkClassName=cfg.getProperty(DEFAULT_CONFIG.ASIA_EDITION_LINK_CLASS.key);this.usEditionMDCUrl=cfg.getProperty(DEFAULT_CONFIG.US_EDITION_MDC_URL.key);this.euEditionMDCUrl=cfg.getProperty(DEFAULT_CONFIG.EU_EDITION_MDC_URL.key);this.inEditionMDCUrl=cfg.getProperty(DEFAULT_CONFIG.IN_EDITION_MDC_URL.key);this.asiaEditionMDCUrl=cfg.getProperty(DEFAULT_CONFIG.ASIA_EDITION_MDC_URL.key);var mdcCompareUrl=cfg.getProperty(DEFAULT_CONFIG.MDC_COMPARE_URL.key);this.oCurrentEdition=$("currentEdition");this.oUsEdition=$("usEdition");this.oEuEdition=$("europeEdition");this.oInEdition=$("indiaEdition");this.oAsiaEdition=$("asiaEdition");this.oChiEdition=$("chiEdition");this.oJpnEdition=$("jpnEdition");this.oSpaEdition=$("spaEdition");this.oPorEdition=$("porEdition");this.osectionFooterSub=$("hrefNonSubId");this.osectionFooterNonSub=$("hrefSubId");this.oUsEditionFooter=$("usEditionFooter");this.currRegion=dj.util.Region.getViewByRegion();var currEdition="";if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){this.tempConcatURL="http://"+gcDomain;}else{this.tempConcatURL="http://"+document.domain;}
this.isMDCPageFlag=((document.location.href!==null)&&(document.location.href!=="")&&(document.location.href.indexOf(mdcCompareUrl)!==-1));var that=this;if(this.oUsEdition!==null){this.oUsEdition.observe("click",function(ev){Event.stop(ev);dj.util.Region.setViewByRegion('na,us');dj.util.Cookie.setGroupCookie("DJCOOKIE","HOMEPAGE","/home-page",365);window.location=(that.isMDCPageFlag)?that.tempConcatURL+that.usEditionMDCUrl:that.oUsEdition.href;}.bindAsEventListener(this.oUsEdition));}
if(this.oUsEditionFooter!==null){this.oUsEditionFooter.observe("click",function(ev){Event.stop(ev);dj.util.Region.setViewByRegion('na,us');dj.util.Cookie.setGroupCookie("DJCOOKIE","HOMEPAGE","/home-page",365);window.location=(that.isMDCPageFlag)?that.tempConcatURL+that.usEditionMDCUrl:that.oUsEditionFooter.href;}.bindAsEventListener(this.oUsEditionFooter));}
if(this.oEuEdition!==null){this.oEuEdition.observe("click",function(ev){Event.stop(ev);window.location=(that.isMDCPageFlag)?that.tempConcatURL+that.euEditionMDCUrl:that.oEuEdition.href;if(that.isMDCPageFlag){dj.util.Region.setViewByRegion('europe');dj.util.Cookie.setGroupCookie("DJCOOKIE","HOMEPAGE","/home/europe",365);}}.bindAsEventListener(this.oEuEdition));}
if(this.oInEdition!==null){this.oInEdition.observe("click",function(ev){Event.stop(ev);window.location=(that.isMDCPageFlag)?that.tempConcatURL+that.inEditionMDCUrl:that.oInEdition.href;if(that.isMDCPageFlag){dj.util.Region.setViewByRegion('asia,india');dj.util.Cookie.setGroupCookie("DJCOOKIE","HOMEPAGE","/home/india",365);}}.bindAsEventListener(this.oInEdition));}
if(this.oAsiaEdition!==null){this.oAsiaEdition.observe("click",function(ev){Event.stop(ev);window.location=(that.isMDCPageFlag)?that.tempConcatURL+that.asiaEditionMDCUrl:that.oAsiaEdition.href;if(that.isMDCPageFlag){dj.util.Region.setViewByRegion('asia');dj.util.Cookie.setGroupCookie("DJCOOKIE","HOMEPAGE","/home/asia",365);}}.bindAsEventListener(this.oAsiaEdition));}
if(this.oChiEdition!==null){this.oChiEdition.observe("click",function(ev){Event.stop(ev);window.open(that.oChiEdition.href);}.bindAsEventListener(this.oChiEdition));}
if(this.oJpnEdition!==null){this.oJpnEdition.observe("click",function(ev){Event.stop(ev);window.open(that.oJpnEdition.href);}.bindAsEventListener(this.oJpnEdition));}
if(this.oSpaEdition!==null){this.oSpaEdition.observe("click",function(ev){Event.stop(ev);window.location=that.oSpaEdition.href;}.bindAsEventListener(this.oSpaEdition));}
if(this.oPorEdition!==null){this.oPorEdition.observe("click",function(ev){Event.stop(ev);window.location=that.oPorEdition.href;}.bindAsEventListener(this.oPorEdition));}
if(this.osectionFooterSub!==null){this.osectionFooterSub.observe("click",function(ev){Event.stop(ev);window.location=that.osectionFooterSub.href;}.bindAsEventListener(this.osectionFooterSub));}
if(this.osectionFooterNonSub!==null){this.osectionFooterNonSub.observe("click",function(ev){Event.stop(ev);window.location=that.osectionFooterNonSub.href;}.bindAsEventListener(this.osectionFooterNonSub));}
if(this.currRegion=="asia"){currEdition="Asia Edition";this.oSelectedEdition=this.oHeader.down(asiaEditionLinkClassName);}
else
if(this.currRegion=="asia,india"){currEdition="Asia Edition";this.oSelectedEdition=this.oHeader.down(inEditionLinkClassName);}
else
if(this.currRegion=="europe"){currEdition="Europe Edition";this.oSelectedEdition=this.oHeader.down(euEditionLinkClassName);}
else{currEdition="U.S. Edition";this.oSelectedEdition=this.oHeader.down(usEditionLinkClassName);}
this.oSelectedEdition.addClassName("selected");this.oCurrentEdition.innerHTML=currEdition;this.oFormFactorContainer=$("formFactorContainer");this.oFormFactorContainer.show();this.oLocDropDownContainer=$("locNavContainer");this.oLocDropDownContainer.show();if(this.oLocDropDownContainer!==null){var toggleDropdownClass=function(){if(that.oLocDropDownContainer.hasClassName(selLocDrpdwnCollapsedClassName)){that.oLocDropDownContainer.removeClassName(selLocDrpdwnCollapsedClassName);that.oLocDropDownContainer.addClassName(selLocDrpdwnExpandedClassName);}
else if(that.oLocDropDownContainer.hasClassName(selLocDrpdwnExpandedClassName)){that.oLocDropDownContainer.removeClassName(selLocDrpdwnExpandedClassName);that.oLocDropDownContainer.addClassName(selLocDrpdwnCollapsedClassName);}};this.oLocationNav.observe("click",function(event){Event.stop(event);toggleDropdownClass();}.bindAsEventListener(this.oLocationNav));document.observe("click",function(event){var isMousePointerinModalContainer=dj.util.Element.contains(that.oLocDropDownContainer,event.clientX,event.clientY);if(isMousePointerinModalContainer==false){if(that.oLocDropDownContainer.hasClassName(selLocDrpdwnExpandedClassName)){that.oLocDropDownContainer.removeClassName(selLocDrpdwnExpandedClassName);that.oLocDropDownContainer.addClassName(selLocDrpdwnCollapsedClassName);}}});this.oSectionFooterNonSub=$("sectionFooterNonSub");this.oSectionFooterSub=$("sectionFooterSub");dj.util.User.isLoggedIn(function(isLoggedIn){if(isLoggedIn){that.oSectionFooterNonSub.hide();that.oSectionFooterSub.show();}
else{that.oSectionFooterNonSub.show();that.oSectionFooterSub.hide();}});}},displayTimeStamp:function(){var timestampClass=cfg.getProperty(DEFAULT_CONFIG.TIMESTAMP_CLASS.key);this.oTimestamp=this.oHeader.down(timestampClass);if((typeof pDate!=='undefined')&&(this.oTimestamp!==null)){if(window.pStl=="renovation"){var dateUtil=dj.util.Date;var pubDate=dateUtil.displayTime(pDate,pDateinGMT);this.oTimestamp.update(pubDate);}
else{this.oTimestamp.update(pDate);}}},displaySubSection:function(){var currentSubSectionClass=cfg.getProperty(DEFAULT_CONFIG.CURRENT_SUBSECTION_DISPLAY_CLASS.key);this.oCurrentSubSection=this.oHeader.down(currentSubSectionClass);var wsjLogoFadeAppearDuration=cfg.getProperty(DEFAULT_CONFIG.WSJ_LOGO_FADE_APPEAR_DURATION.key);var wsjLogoDelayDuration=cfg.getProperty(DEFAULT_CONFIG.WSJ_LOGO_DELAY_DURATION.key);if((typeof globalHeaderPageTitle!=='undefined')&&(globalHeaderPageTitle!==null)&&(globalHeaderPageTitle!=="")){this.oCurrentSubSection.innerHTML=globalHeaderPageTitle;var that=this;setTimeout(function(){that.oCurrentSubSection.appear({duration:wsjLogoFadeAppearDuration});},wsjLogoDelayDuration);}},displaySubscriberDetails:function(){var userNameElementId=cfg.getProperty(DEFAULT_CONFIG.USER_NAME_ELEMENT_ID.key);dj.util.User.renderCallsign(userNameElementId);this.setupSubscriberLinks();var messageCenterLinkClass=cfg.getProperty(DEFAULT_CONFIG.MESSAGE_CENTER_LINK_CLASS.key);this.oMessageCenterLink=this.oHeader.down(messageCenterLinkClass);var that=this;dj.util.User.isSubLoggedIn(function(subLoggedIn){if(subLoggedIn){that.setupMessageCenter();}
else{that.setUpMJLinksForReg();that.oMessageCenterLink.hide();}});var subscriberDetailsElementId=cfg.getProperty(DEFAULT_CONFIG.SUBSCRIBER_DETAILS_ELEMENT_ID.key);this.oSubscriberDetails=$(subscriberDetailsElementId);this.oSubscriberDetails.removeClassName("hidden");},setUpMJLinksForReg:function(){var that=this;var footerContainerClass=cfg.getProperty(DEFAULT_CONFIG.FOOTER_CONTAINER_CLASS.key);that.oFooter=$(document.body).down(footerContainerClass);var mojLinkUrl=cfg.getProperty(DEFAULT_CONFIG.MOJ_LINK_URL.key);var mojLinkClass=cfg.getProperty(DEFAULT_CONFIG.MOJ_LINK_CLASS.key);that.oMojLinkHeader=that.oHeader.down(mojLinkClass);that.oMojLinkFooter=that.oFooter.down(mojLinkClass);if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){that.oMojLinkHeader.href="http://"+gcDomain+mojLinkUrl;that.oMojLinkFooter.href="http://"+gcDomain+mojLinkUrl;}else{that.oMojLinkHeader.href=mojLinkUrl;that.oMojLinkFooter.href=mojLinkUrl;}},setupSubscriberLinks:function(){var todaysPaperLinkClass=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_LINK_CLASS.key);this.oTodaysPaperLink=this.oHeader.down(todaysPaperLinkClass);var loggedInTodaysPaperUrl=cfg.getProperty(DEFAULT_CONFIG.LOGGED_IN_TODAYS_PAPER_URL.key);var that=this;dj.util.User.isSubLoggedIn(function(subLoggedIn){if(subLoggedIn){if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){that.oTodaysPaperLink.href="http://"+gcDomain+loggedInTodaysPaperUrl;}else{that.oTodaysPaperLink.href=loggedInTodaysPaperUrl;}}});},setupMessageCenter:function(){var messageCenterLinkClass=cfg.getProperty(DEFAULT_CONFIG.MESSAGE_CENTER_LINK_CLASS.key);this.oMessageCenterLink=this.oHeader.down(messageCenterLinkClass);var messageCountClass=cfg.getProperty(DEFAULT_CONFIG.MESSAGE_COUNT_CLASS.key);this.oMessageCount=this.oHeader.down(messageCountClass);var that=this;var setupMsgCenterLink=function(noOfMessages){if(noOfMessages==='-1'){that.oMessageCenterLink.hide();}else{that.oMessageCount.innerHTML=noOfMessages;}};var noOfMessages=dj.util.Cookie.getCookie("msgCount");if(noOfMessages===null){var messageCenterPostUrl=cfg.getProperty(DEFAULT_CONFIG.MESSAGE_CENTER_POST_URL.key);var messageCountReq=new Ajax.Request(messageCenterPostUrl,{method:'post',onException:function(transport,exception){console.error('Exception occured while posting posting Ajax Request: %s',exception);},onSuccess:function(transport){noOfMessages=transport.responseText;dj.util.Cookie.setCookie("msgCount",noOfMessages,(5/24/60));setupMsgCenterLink(noOfMessages);}});}else{setupMsgCenterLink(noOfMessages);}},setupLogin:function(){var loginUserElementId=cfg.getProperty(DEFAULT_CONFIG.LOGIN_USERNAME_ELEMENT_ID.key);this.oUserName=$(loginUserElementId);var loginPasswordElementId=cfg.getProperty(DEFAULT_CONFIG.LOGIN_PASSWORD_ELEMENT_ID.key);this.oPassword=$(loginPasswordElementId);var loginButtonImageId=cfg.getProperty(DEFAULT_CONFIG.LOGIN_BUTTON_ELEMENT_ID.key);this.oLoginImg=$(loginButtonImageId);var loginFormId=cfg.getProperty(DEFAULT_CONFIG.LOGIN_FORM_ID.key);this.oLoginForm=$(loginFormId);this.oLoginForm.reset();var pageUrlId=cfg.getProperty(DEFAULT_CONFIG.PAGE_URL_ELEMENT_ID.key);this.oPageUrl=$(pageUrlId);var that=this;if(this.oPageUrl!==null){var nonSubscriberHomepagePid=cfg.getProperty(DEFAULT_CONFIG.NONSUBSCRIBER_HOMEPAGE_PID.key);var nonSubscriberSearchPagePid=cfg.getProperty(DEFAULT_CONFIG.NONSUBSCRIBER_SEARCH_PAGE_PID.key);var nonSubNewslettersAlertsPagePid=cfg.getProperty(DEFAULT_CONFIG.NONSUBSCRIBER_NEWSLETTERS_ALERTS_PAGE_PID.key);var mdcPagePid=cfg.getProperty(DEFAULT_CONFIG.MDC_PAGE_PID.key);var concatURL;if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){concatURL="http://"+gcDomain;}else{concatURL="http://"+document.domain;}
var oCurrentUrl;if(Prototype.Browser.IE){oCurrentUrl=window.location.href;}else{oCurrentUrl=document.location.href;}
var url_value=oCurrentUrl;if(typeof pID!=='undefined'){if(pID===nonSubscriberHomepagePid){url_value=concatURL+cfg.getProperty(DEFAULT_CONFIG.HOMEPAGE_SUBSCRIBER_URL.key);}
else
if(pID===nonSubNewslettersAlertsPagePid){url_value=concatURL+'/email';}
else
if(pID===nonSubscriberSearchPagePid){url_value=concatURL+cfg.getProperty(DEFAULT_CONFIG.SEARCH_PAGE_SUBSCRIBER_URL.key);}
else
if(pID===mdcPagePid){url_value=concatURL+cfg.getProperty(DEFAULT_CONFIG.MDC_LINK_URL.key);}
else{url_value=oCurrentUrl;}
if(Prototype.Browser.IE){document.login_form.url.value=url_value;}else{this.oPageUrl.value=url_value;}}
if(this.oUserName!==null){this.oUserName.observe("focus",function(event){dj.util.Form.clearValue(that.oUserName,'User Name');}.bindAsEventListener(this.oUserName));this.oUserName.observe("click",function(event){dj.util.Form.clearValue(that.oUserName,'User Name');}.bindAsEventListener(this.oUserName));}
if(this.oPassword!==null){this.oPassword.observe("focus",function(event){dj.util.Form.clearValue(that.oPassword,'Password');that.oPassword.type="password";}.bindAsEventListener(that.oPassword));this.oPassword.observe("click",function(event){dj.util.Form.clearValue(that.oPassword,'Password');}.bindAsEventListener(that.oPassword));this.oPassword.observe("change",function(event){dj.util.Form.clearValue(that.oPassword,'Password');}.bindAsEventListener(that.oPassword));}
if(Prototype.Browser.IE){this.oLoginImg.observe("click",function(e){document.login_form.url.value=oCurrentUrl;that.oLoginForm.submit();}.bindAsEventListener(this.oLoginImg));}
this.oPassword.observe("keypress",function(e){var cKeyCode=e.keyCode||e.which;if(Prototype.Browser.IE){if(cKeyCode==Event.KEY_RETURN){document.login_form.url.value=oCurrentUrl;that.oLoginForm.submit();}}}.bindAsEventListener(this.oPassword));}},setupLogout:function(){var logoutLinkElementId=cfg.getProperty(DEFAULT_CONFIG.LOGOUT_LINK_ELEMENT_ID.key);this.oLogout=$(logoutLinkElementId);if(this.oLogout!==null){this.oLogout.observe("click",function(ev){Event.stop(ev);dj.util.Cookie.deleteCookie("msgCount");dj.util.Cookie.deleteCookie("HOMEPAGE",true);document.cookie="HOMEPAGE"+"="+";path=/"+";domain=.wsj.com"+";expires=Thu, 01-Jan-1970 00:00:01 GMT";if((typeof gcDomain!=='undefined')&&(gcDomain!==null)&&(gcDomain!=="")){window.location="/logout?url=http://"+gcDomain;}else{window.location="/logout";}}.bindAsEventListener(this.oLogout));}},highlightFormFactorLinks:function(){var todaysPaperLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_LINK_CONTAINER_CLASS.key);this.oTodaysPaperLinkContainer=this.oHeader.down(todaysPaperLinkContainerClass);var videoLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.VIDEO_LINK_CONTAINER_CLASS.key);this.oVideoLinkContainer=this.oHeader.down(videoLinkContainerClass);var blogsLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.BLOGS_LINK_CONTAINER_CLASS.key);this.oBlogsLinkContainer=this.oHeader.down(blogsLinkContainerClass);var columnsLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.COLUMNS_LINK_CONTAINER_CLASS.key);this.oColumnsLinkContainer=this.oHeader.down(columnsLinkContainerClass);var interactiveGraphicsLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.INTERACTIVE_GRAPHICS_LINK_CONTAINER_CLASS.key);this.oInteractiveGraphicsLinkContainer=this.oHeader.down(interactiveGraphicsLinkContainerClass);var topicsLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.TOPICS_LINK_CONTAINER_CLASS.key);this.oTopicsLinkContainer=this.oHeader.down(topicsLinkContainerClass);var communityForumsLinkContainerClass=cfg.getProperty(DEFAULT_CONFIG.COMMUNITY_FORUMS_LINK_CONTAINER_CLASS.key);this.oCommunityForumsLinkContainer=this.oHeader.down(communityForumsLinkContainerClass);var todaysPaperUsNonSubPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_US_NONSUB_PID.key);var todaysPaperEuropeNonSubPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_EUROPE_NONSUB_PID.key);var todaysPaperAsiaNonSubPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_ASIA_NONSUB_PID.key);var todaysPaperUsPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_US_PID.key);var todaysPaperEuropePid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_EUROPE_PID.key);var todaysPaperAsiaPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_ASIA_PID.key);var todaysPaperPastEditionsPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_PAST_EDITIONS_PID.key);var todaysPaperIndexBizPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_INDEX_BIZ_PID.key);var todaysPaperIndexPeoplePid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_INDEX_PEOPLE_PID.key);var todaysPaperCorrectionsPid=cfg.getProperty(DEFAULT_CONFIG.TODAYS_PAPER_CORRECTIONS_PID.key);var videoPid=cfg.getProperty(DEFAULT_CONFIG.VIDEO_PID.key);var interactiveGraphicsPid=cfg.getProperty(DEFAULT_CONFIG.INTERACTIVE_GRAPHICS_PID.key);var topicsPid=cfg.getProperty(DEFAULT_CONFIG.TOPICS_PID.key);var newslettersAlertsPubPid=cfg.getProperty(DEFAULT_CONFIG.NEWSLETTERS_ALERTS_PUB_PID.key);var newslettersAlertsSubPid=cfg.getProperty(DEFAULT_CONFIG.NEWSLETTERS_ALERTS_SUB_PID.key);var columnsPid=cfg.getProperty(DEFAULT_CONFIG.COLUMNS_PID.key);var blogsPid=cfg.getProperty(DEFAULT_CONFIG.BLOGS_PID.key);var hostUrl=document.location.host;var communityUrl=hostUrl+cfg.getProperty(DEFAULT_CONFIG.COMMUNITY_HIGHLIGHT_COMPARE_URL.key);var compareForumsUrl=cfg.getProperty(DEFAULT_CONFIG.FORUMS_HIGHLIGHT_COMPARE_URL.key);if(typeof pID!=='undefined'){if((pID===todaysPaperUsNonSubPid)||(pID===todaysPaperEuropeNonSubPid)||(pID===todaysPaperAsiaNonSubPid)||(pID===todaysPaperUsPid)||(pID===todaysPaperEuropePid)||(pID===todaysPaperAsiaPid)||(pID===todaysPaperPastEditionsPid)||(pID===todaysPaperIndexBizPid)||(pID===todaysPaperIndexPeoplePid)||(pID===todaysPaperCorrectionsPid)){this.oTodaysPaperLinkContainer.addClassName("selected");}else
if(pID===videoPid){this.oVideoLinkContainer.addClassName("selected");}else
if(pID===interactiveGraphicsPid){this.oInteractiveGraphicsLinkContainer.addClassName("selected");}else
if(pID===columnsPid){this.oColumnsLinkContainer.addClassName("selected");}else
if(pID===blogsPid){this.oBlogsLinkContainer.addClassName("selected");}else
if(pID===topicsPid){this.oTopicsLinkContainer.addClassName("selected");}}
if((document.location.href!==null)&&(document.location.href!=="")&&(document.location.href.indexOf(communityUrl)!==-1)||(document.location.href.indexOf(compareForumsUrl)!==-1)){this.oCommunityForumsLinkContainer.addClassName("selected");}}};}();
dj.module.globalNav={setupQuicklinks:function(globalSubNavId,quicklinksContainerId){this.oHideQuickLinks=$(document.body).down('.hideQuickLinks');this.oGlobalSubNav=$(globalSubNavId);this.oQuicklinksContainer=$(quicklinksContainerId);if(typeof this.oHideQuickLinks==='undefined'){if(this.oGlobalSubNav===null){if(this.oQuicklinksContainer!=null){this.oQuicklinksContainer.removeClassName("subnav_hide");this.oQuicklinksContainer.addClassName("subnav_show");}}}}};
dj.module.showSectionAndTicker={init:function(){this.sectPan=dj.module.carouselSection.panels;this.newsPan=dj.module.newsTicker.ticker;if(!this.sectPan||!this.newsPan){console.warn("{showSectionAndTicker} either (or both) of the carousels is not found");return;}
this.bind();},bind:function(){var ctr=0,span=this.sectPan,npan=this.newsPan,tot=span.model.getNumberOfPanels();npan.model.setRotationState(0);span.model.addChangeListener("success",function(panel){if((panel.getPosition()==1)&&(ctr>0)){span.model.setRotationState(0);npan.model.setRotationState(1);}
ctr++;});span.model.addChangeListener("rotationStateSuccess",function(rstate){if(rstate==0){npan.model.setRotationState(1);}else{npan.model.setRotationState(0);}});}};
if(typeof dj=="undefined"){dj={};}
if(typeof dj.module=="undefined"){dj.module={};}
dj.module.metaWeb={init:function(){var djL=dj.lang,oEl=dj.lang.byId("suggest-input");oEl.value="Enter title, actor or director";djL.addEvent(oEl,"mouseover",this.addSuggest,this);var ev=djL.addLiveEvent("#suggest-input","click",function(){oEl.value="";djL.removeLiveEvent(ev);},this);},addSuggest:function(){if(this.isJsAdded){return;}
var uri="http://wfilm.freebaseapps.com/freebase_suggest_v2_min_js",d=document,oHd=d.getElementsByTagName("head")[0],el=d.createElement("script");el.src=uri;oHd.appendChild(el);var jsNode=d.createElement("link");jsNode.type="text/css";jsNode.rel="stylesheet";jsNode.href="http://wfilm.freebaseapps.com/freebase_suggest_css";if(d.getElementsByTagName("head").length===0){var headNode=d.createElement("head");d.getElementsByTagName("html")[0].appendChild(headNode);}
d.getElementsByTagName("head")[0].appendChild(jsNode);this.isJsAdded=true;}};
var BBSWSJ=(function()
{var bbsWSJ={};var currentSearchType='eb';var contentProviderUrl='http://www.bizbuysell.com/';var bbsWidgetContainer=document.getElementById('bbsWidgetContainer');bbsWSJ.SearchTypeToggle=function(searchType)
{if(typeof(searchType)=='undefined')
{searchType='eb';}
setSearchType(searchType);var hidCurrentSearchType=document.getElementById('hidCurrentSearchType');if(hidCurrentSearchType)
{hidCurrentSearchType.value=searchType;}};bbsWSJ.LoadCounties=function(ddlCountiesClientID,maintainSelectedCounty)
{if(!maintainSelectedCounty)
{var hidSelectedCountyCode=document.getElementById('hidSelectedCountyCode');if(hidSelectedCountyCode)
{hidSelectedCountyCode.value='0';}}
if((typeof(ddlCountiesClientID)!='undefined')&&(ddlCountiesClientID.length>0))
{var ddlCounties=document.getElementById(ddlCountiesClientID);if(ddlCounties)
{ddlCounties.disabled=true;if((bbsWidgetContainer)&&(typeof(this.selectedIndex)!='undefined')&&(this.selectedIndex>0)&&(typeof(this.value)!='undefined')&&(this.value.length>0)&&(this.value.toUpperCase()!='XX'))
{var callBackFunctionName=('loadCountiesCallBack_'+
Math.floor(Math.random()*1000));var webServiceScript=document.createElement('script');webServiceScript.type='text/javascript';webServiceScript.setAttribute('async','true');webServiceScript.src=(contentProviderUrl+'cobranding/Services/Geo.get.asmx/GetCountiesByRegionLegacyStateCode?selectedRegionLegacyStateCode="'+
this.value+'"&callback="BBSWSJ.'+
callBackFunctionName+'"');bbsWSJ[callBackFunctionName]=function(counties)
{if((typeof(counties)!='undefined')&&(typeof(counties.length)!='undefined')&&(counties.length>0))
{ddlCounties.length=0;ddlCounties.options.add(new Option('All Counties',''));var selectedCounty=0;var hidSelectedCountyCode=document.getElementById('hidSelectedCountyCode');if((hidSelectedCountyCode)&&(parseInt(hidSelectedCountyCode.value,10)>0))
{selectedCounty=parseInt(hidSelectedCountyCode.value,10);}
for(var index=0;index<counties.length;index++)
{ddlCounties.options.add(new Option(counties[index].CountyName,counties[index].CountyCode));}
if(selectedCounty>0)
{ddlCounties.value=selectedCounty;}
ddlCounties.disabled=false;}
if(webServiceScript)
{bbsWidgetContainer.removeChild(webServiceScript);}
delete bbsWSJ[callBackFunctionName];};bbsWidgetContainer.appendChild(webServiceScript);}
else
{ddlCounties.options[0]=new Option('County','');ddlCounties.options.length=1;}}}};bbsWSJ.SetSelectedCountyCode=function(countyCode)
{if((typeof(countyCode)!='undefined')&&(countyCode.length>0)&&(parseInt(countyCode,10)>0))
{var hidSelectedCountyCode=document.getElementById('hidSelectedCountyCode');if(hidSelectedCountyCode)
{hidSelectedCountyCode.value=countyCode;}}};bbsWSJ.OnKeywordFocus=function()
{this.className=this.className.replace(/\s+?default/,'');};bbsWSJ.OnKeywordBlur=function()
{if(this.value.length==0)
{this.className+=(((this.className.length>0)?' ':'')+'default');}};function setSearchType(searchType)
{if((typeof(searchType)=='undefined')||(typeof(searchType.length)=='undefined')||(searchType.length<=0))
{searchType='eb';}
currentSearchType=searchType;var searchTypeContainer=document.getElementById('searchTypeContainer');if(searchTypeContainer)
{searchTypeContainer.className=searchType;}}
function attachEvent(eventName,eventHandler)
{if(window.attachEvent)
{window.attachEvent(('on'+
eventName),eventHandler);}
else
{window.addEventListener(eventName,eventHandler,false);}}
attachEvent('load',function()
{var ddlBFSCategories=document.getElementById('ddlBFSCategories');if((ddlBFSCategories)&&(ddlBFSCategories.selectedIndex>0)&&(ddlBFSCategories.value.toUpperCase()=='XX'))
{ddlBFSCategories.selectedIndex=0;}
var ddlBizOpCategories=document.getElementById('ddlBizOpCategories');if((ddlBizOpCategories)&&(ddlBizOpCategories.selectedIndex>0)&&(ddlBizOpCategories.value.toUpperCase()=='XX'))
{ddlBizOpCategories.selectedIndex=0;}
var txtKeywords=document.getElementById('txtKeywords');if((txtKeywords)&&(txtKeywords.value.length>0))
{txtKeywords.className=txtKeywords.className.replace(/\s+?default/,'');}
var hidCurrentSearchType=document.getElementById('hidCurrentSearchType');if((hidCurrentSearchType)&&(hidCurrentSearchType.value.length>0))
{setSearchType(hidCurrentSearchType.value);}
var ddlBFSStates=document.getElementById('ddlBFSStates');if(ddlBFSStates)
{bbsWSJ.LoadCounties.call(ddlBFSStates,'ddlBFSCounties',true);}
var ddlBizOpStates=document.getElementById('ddlBizOpStates');if(ddlBizOpStates)
{bbsWSJ.LoadCounties.call(ddlBizOpStates,'ddlBizOpCounties',true);}});return bbsWSJ;})();
dj.module.onespot={initISM:function(moduleName,placeholder){try{onespot.display_ism=true;if(onespot.account==='onespot.wsj.com'){}
if(onespot.display_ism){onespot.use_console=false;onespot.logger=function(message){if(onespot.use_console){try{console.log(message);}catch(error){alert(message);}}};onespot.iframe=document.createElement('iframe');onespot.iframe.style.display='block';onespot.iframe.style.width='0';onespot.iframe.height='0';onespot.iframe.frameBorder='0';onespot.iframe.border='0';onespot.iframe.scrolling='no';if(typeof onespot==='object'){if(typeof onespot.placeholder==='string'){onespot.logger('! placeholder: '+onespot.placeholder);}else{onespot.placeholder='onespot';onespot.logger('! placeholder: using '+onespot.placeholder+' (default)');}
onespot.element=document.getElementById(onespot.placeholder);onespot.element.appendChild(onespot.iframe);onespot.page='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'+'<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">'+'  <head>'+'    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+'    <title>OneSpot Integrated Story Module</title>'+'  </head>'+'  <body>'+'    <scr'+'ipt type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></scr'+'ipt>'+'    <scr'+'ipt type="text/javascript" src="http://static.onespot.com/javascripts/ism_testing/builder.js"></scr'+'ipt>'+'  </body>'+'</html>';onespot.doc=onespot.iframe.contentWindow||onespot.iframe.contentDocument;if(onespot.doc.document){onespot.doc=onespot.doc.document;}
onespot.doc.open();onespot.doc.write(onespot.page);onespot.doc.close();}else{onespot.logger('Main settings object "onespot" is not defined. Please refer to the implementation instructions.');}}}catch(error){}}};dojo.provide("dj.widget.networkHat.hat");

dojo.require("dj.util.Region");

// TODO: refactor this in to nice JS, and not a global object.  Event handling would be much smoother with dojo

/* hat wsj js version 26 */
var hat = {

  search_keypress :function(e)
  {
    var key;
    if(window.event) key = window.event.keyCode;     //IE      
    else key = e.which;     //firefox

    if(key == 13) 
    {
      if (e.preventDefault)
      { //firefox
        e.preventDefault();
        e.stopPropagation();
      }
      else
      { //IE
        e.cancelBubble = true;
        e.returnValue = false;
      }
      this.search();                             
    }
  },

  search : function() 
  { 
      try
      {
          var hatinput= document.getElementById("hat_input");
        var query = hatinput.value;
        
        var site = this.thisSite();
        if(site == "MW")
      {
        // handled in global js
      }      
        else if(site == "MWC" || site == "VSE" || site == "BC")         
          {
              query = query.replace(/^\s+|\s+$/g,"").replace(/,$|\.,$/, ""); //Trim and remove trailing periods/commas
              query = query.replace("Enter Keyword\(s\)","");
              if(query)
          window.location = 'http://www.marketwatch.com/search/?value='+query;
        else
          window.location = 'http://www.marketwatch.com/search';
          }
          else
          {
              // wsj
              var baseDomain = 'http://'+document.domain;           
            query = query.replace(/^\s+|\s+$/g,"").replace(/,$|\.,$/, ""); //Trim and remove trailing periods/commas
            //var searchURL = baseDomain + ((loggedIn)?'/search':'/public/search/page/3_0466.html') + '?KEYWORDS='+escape(query);
            var searchURL = baseDomain + '/search/term.html?KEYWORDS='+escape(query);
            window.location = searchURL;
        }
    }
    catch(ex){}
  },
    
  search_form : function()
  {
    var hat_searchform = document.getElementById("hat_searchform");
    if(hat_searchform) hat_searchform.submit();
  },

    hideEl : function(id)
    {
        var el = document.getElementById(id);
        if(el && el.style) 
        {
            el.olddisplay = el.style.display;
            el.style.display = "none";
        }
    },

    showEl : function(id)
    {
        var el = document.getElementById(id);
        if(el && el.style) 
        {
            el.style.display = el.olddisplay || "block";
        }
    },
    
  moremenu : function()
  {
      try
      {
      if(this.moreTimeout)
      {
        clearTimeout(this.moreTimeout);
        this.moreTimeout = null;
        return;
      }
      
        this.showEl("hat_more_menu");   
        
        var moretab = document.getElementById("hat_tab5");
        moretab.className = "hat_tab hat_more_sel";
        
        if(document.all) 
        {
        var el = document.getElementById("wsjCRSelectDrpdwn");        
        if(el && el.style) 
        {       
          el.style.visibility = "hidden";
        }         
      }
    }
    catch(ex) {}
  },  

  moreTimeout : null,

  moremenuhide : function()
  {
    if(!this.moreTimeout)   
      this.moreTimeout = setTimeout(this.moremenuhidedelayed, 100);
  },
  
  moremenuhidedelayed : function()
  {
      try
      {     
      hat.moreTimeout = null;
        hat.hideEl("hat_more_menu");

        var moretab = document.getElementById("hat_tab5");
        moretab.className ="hat_tab";   
        
        if(document.all) 
        {
        var el = document.getElementById("wsjCRSelectDrpdwn");                  
            if(el && el.style) 
        {       
          el.style.visibility = "visible";
        } 
        }
    }
    catch(ex) {}  
  },
  
  tabover : function(el)
  { 
      try
      {
        if(el.className != "hat_tabsel")
      {
                if (el.srcElement) //IE
                {
                    if (el.srcElement.parentNode.tagName == "LI") {
                        el = el.srcElement.parentNode;
                    }
                }
                el.className = "hat_tab hat_tab_over";
            }
        }
    catch(ex) {}          
  },

  tabout : function(el)
  {
      try
      {
            if(el.className != "hat_tabsel")
          {
                if (el.srcElement) //IE
                {
                    if (el.srcElement.parentNode.tagName == "LI") {
                        el = el.srcElement.parentNode;
                    }
                }
                el.className = "hat_tab";
            }
    }
        catch(ex){}      
  },
    
  menuover : function(el)
  {
      if(el.srcElement)  // IE added element
      {     
      el = el.srcElement;
      if(el.tagName == "A") el = el.parentNode;
    }
        if(el) el.className = "hat_drop_item hat_drop_item_sel";
  },
  
  menuout : function(el)
  {
      if(el.srcElement)  
      {
      el = el.srcElement;
      if(el.tagName == "A") el = el.parentNode;
    }
    if(el) el.className = "hat_drop_item";
  },
  
  inputfocus : function(searchField)
  {
      try
      {
            var index = searchField.className.indexOf("hat_unused");
            if (index >= 0)
            {
                searchField.value = "";
                searchField.className = "hat_input";
            }
    }
        catch(ex){}                 
  },
  
  updateAnchorText : function(anchor, text)
  {
      if(anchor.innerHTML != text)
      {
        // needed for IE - innerHTML breaks things
        if(anchor.firstChild) 
        {
        anchor.removeChild(anchor.firstChild);
      }
        //anchor.appendChild(document.createTextNode(text));
        anchor.innerHTML = text;
        }
  },
  
  updateAnchorHref : function(anchor, href)
  {
      if(anchor.href != href) 
      {
          anchor.href = href;
      }
  },

  updateAnchorTitle : function(anchor, title)
  {
      if(anchor.title != title) 
      {
          anchor.title = title;
      }
  },
    
  updateChangeTab : function(tabnumber, text, url, linkTo, newId, popUp )
  {
      {
          var anchor = document.getElementById("hat_link"+tabnumber);
          if(anchor)
          {
              if (text != null) hat.updateAnchorText(anchor, text);
              if (url) hat.updateAnchorHref(anchor, url);
              if (linkTo) hat.updateAddTrackingOnclick(anchor, linkTo);
        if (popUp) hat.updateAnchorTitle(anchor, popUp);
          }
            else 
            {
                hat.updateAddChangeTab(tabnumber, text, url, linkTo);
            }
          
          if(newId)
          {
                var tab = document.getElementById("hat_tab" + tabnumber);
                tab.id = newId;
          }
        }   
  },

    updateAddChangeTab: function(tabnumber, text, url, linkTo, popUp) {

        var hat_div = document.getElementById("hat_div");
        var hat_tab5 = document.getElementById("hat_tab5"); // the "More" tab
        var hat_tabs;

        // get the tabs list element
        for (var i = 0; i < hat_div.childNodes.length; i++) {
            if (hat_div.childNodes[i].className == "hat_tabs") {
                hat_tabs = hat_div.childNodes[i];
            }
        }

        var newItem = document.createElement("li");
        var anchor = document.createElement("a");
        newItem.appendChild(anchor);

        newItem.className = "hat_tab";
        newItem.setAttribute("id", "hat_tab" + tabnumber);

        if (newItem.attachEvent) //IE
        {
            newItem.attachEvent("onmouseover", hat.tabover);
            newItem.attachEvent("onmouseout", hat.tabout);
        }
        else {
            newItem.setAttribute("onmouseover", "hat.tabover(this)");
            newItem.setAttribute("onmouseout", "hat.tabout(this)");
        }

        anchor.href = url;
        anchor.setAttribute("id", "hat_link" + tabnumber);

        if (text != null) hat.updateAnchorText(anchor, text);
        if (url) hat.updateAnchorHref(anchor, url);
        if (linkTo) hat.updateAddTrackingOnclick(anchor, linkTo);
        if (popUp) hat.updateAnchorTitle(anchor, popUp);
        
        if (hat_tabs) hat_tabs.insertBefore(newItem, hat_tab5);

    },
  
  updateChangeMoreItem : function(morenumber, text, url, linkTo)
  {
      var moreli = document.getElementById("hat_more"+morenumber);
      if(moreli && moreli.childNodes)
      {
          for(var i=0;i<moreli.childNodes.length;i++)
          {
              var node = moreli.childNodes[i];
              var tag = node.tagName;
              if(tag && tag.toLowerCase() == "a")
              {
          if (text != null) hat.updateAnchorText(node, text);
                  if (url) hat.updateAnchorHref(node, url);
                  if (linkTo) hat.updateAddTrackingOnclick(node, linkTo);
                  break;
              }
          }     
      }
      else
      {
      hat.updateAddMoreItem(morenumber, text, url, linkTo);
    }
  },
  
  updateRemoveMoreItem : function(morenumber)
  {
      var moreli = document.getElementById("hat_more"+morenumber);
      var hat_more_menu = document.getElementById("hat_more_menu");
      if(moreli && hat_more_menu)
      {
          hat_more_menu.removeChild(moreli);
      }
  },
  
  updateAddTrackingOnclick : function(anchor, linkTo)
  {
    if(anchor.attributes["onclick"])
    {
      if(anchor.attributes["onclick"].nodeValue == ("hat.track('" + linkTo + "')")) 
        return;
      anchor.removeAttribute("onclick");
    }
    
    if(anchor.attachEvent) // IE
      { 
      anchor.attachEvent("onclick", hat.track);
    }
    else
    {
      anchor.addEventListener("click", hat.track, false);
    }
    anchor.linkTo = linkTo;
  },
  
  updateAddMoreItem : function(morenumber, text, url, linkTo)
  {
      var hat_more_menu = document.getElementById("hat_more_menu");
      var newItem = document.createElement("li");
      var anchor = document.createElement("a");
      newItem.appendChild(anchor);  
      
      newItem.className = "hat_drop_item";
      newItem.setAttribute("id","hat_more" + morenumber);
            
      if(newItem.attachEvent) // IE
      {     
          newItem.attachEvent("onmouseover", hat.menuover);
          newItem.attachEvent("onmouseout", hat.menuout);
      }
      else      
      {
          newItem.setAttribute("onmouseout", "hat.menuout(this)");
          newItem.setAttribute("onmouseover", "hat.menuover(this)");  
      }
      
    
    anchor.href = url;
    anchor.appendChild(document.createTextNode(text));
    
    hat.updateAddTrackingOnclick(anchor,linkTo);      
      
      if(hat_more_menu) hat_more_menu.appendChild(newItem);
  },
  
  track : function(evt)
  {
    try   
    {
      var linkTo;
      if(evt["target"]) 
      {
        linkTo = evt["target"]["linkTo"];
      }
      else if(evt["srcElement"]) 
      {
        linkTo = evt["srcElement"]["linkTo"];
      }
      else
      {
        linkTo = evt;
      }
            
      var link = "dnh_" + hat.thisSite() +'2' + linkTo;
      link = link.toLowerCase();

      var s_ios=s.ios;
      s.ios=1;
      if(s) s.tl(true, 'o', link);
      s.ios=s_ios;
      
    }
    catch(ex){}
  },    
  
  updateSelectTab : function(tabnumber)
  {
      for(var i=1;i<=4;i++)
      {
          var tab = document.getElementById("hat_tab" + i);
          if(tab) tab.className = (i == tabnumber ? "hat_tabsel" : "hat_tab");
      }
  },  
  
  // get the current site
  thisSite : function()
  {
      var hat_div = document.getElementById("hat_div");
      if(hat_div)
      {
      var cl = hat_div.className;
      if(cl.match(/hat_eur/)) return "EUR";
      if(cl.match(/hat_spa/)) return "SPA";
      if(cl.match(/hat_por/)) return "POR";
      if(cl.match(/hat_chi/)) return "CHI";
      if(cl.match(/hat_jpn/)) return "JPN";
      if(cl.match(/hat_asia/)) return "ASIA";
      if(cl.match(/hat_wsj/)) return "WSJ";     
      if(cl.match(/hat_mwc/)) return "MWC";
      if(cl.match(/hat_mw/))  return "MW";      
      if(cl.match(/hat_bol/)) return "BOL";
      if(cl.match(/hat_atd/)) return "ATD";
      if(cl.match(/hat_vse/)) return "VSE";
      if(cl.match(/hat_bc/))  return "BC";
      if(cl.match(/hat_sm/))  return "SM";
      if(cl.match(/hat_wrad/))  return "WRAD";
      if(cl.match(/hat_fins/)) return "FINS";
      if(cl.match(/hat_wsd/)) return "WSD"; /* portal */
      }
      return "";
  },
  
  // make a link to a site  
  updateBuildLink : function(url)
  {
    var site = hat.thisSite();
    var query = "?reflink=";
    
    switch(site)
    {
      case "WSJ": 
        if(url.match(/wsj/i))  query = "?MOD=";
        break;
      case "BOL":
        if(url.match(/barrons/i)) query = "?MOD=";
        break;    
      case "ATD":
        if(url.match(/allthingsd/i)) query = "?link=";
        break;
      case "VSE":
        if(url.match(/vse/i)) query = "?dist=";     
        break;
      case "BC":  
        if(url.match(/bigcharts/i)) query = "?dist=";     
        break;
      case "MWC":
        if(url.match(/community/i)) query = "?dist=";     
        break;
      case "MW":
        if(url.match(/marketwatch/i) && !url.match(/vse/i) && !url.match(/bigcharts/i) && !url.match(/community/i)) 
          query = "?dist=";
        break;
    }
    return url + query + "DNH_" + site;
  },
  
  updateBuildMODLink : function(url)
  {
    return url + "?MOD=DNH_" + hat.thisSite();
  },
    
  updateShowHat : function()
  {
    var hat_div = document.getElementById("hat_div");
      if(hat_div)
      {
          hat_div.className += " hat_visible";
    }
  
  },
  
  
  // call this function after hat_div is rendered to execute any updates
  update : function()
  {
      try
      {
          var cookie = document.cookie; 
          var wsjregion;
          var regionindex = cookie.indexOf("wsjregion");
          var WSJRenoApp = true;
          if(regionindex != -1)
          {
        // For WSJ Renovated apps 
              if((typeof window.currentRegion)=='undefined') {    
                var regioncookie = dj.util.Region.getViewByRegion();
                if(regioncookie != "na,us" ) wsjregion = regioncookie;
              }else{
                WSJRenoApp = false;
                // For rest of WSJ apps
                  if(currentRegion != ''){
                  var regioncookie = currentRegion;
                  if(regioncookie != "na,us" ) wsjregion = regioncookie;
                  }else{
        var regioncookie = GetCookie("wsjregion");
        if (regioncookie.indexOf("reset") != -1) {
          currentRegion = regioncookie.substring(0,regioncookie.indexOf("reset") - 1);
        }else{
          currentRegion = regioncookie;
        }
        if(currentRegion != "na,us" ) wsjregion = currentRegion;
            }
              }
              
          }
          
          if((typeof window.overrideWSJRenoApp) !=='undefined'){
        WSJRenoApp = false;
      }
               
          if(!wsjregion)
          {
        
          if(!WSJRenoApp){
          // not used
          hat.updateChangeTab(1,"","http://online.wsj.com/home","WSJ");
          hat.updateChangeTab(2,"","http://www.marketwatch.com/","MW");
          hat.updateChangeTab(3,"","http://online.barrons.com/home","BOL");
          hat.updateChangeTab(4,"","http://allthingsd.com/","ATD");
          /* Tab with index 5 is reserved for the More tab.  Resulting tabs will be inserted before the More tab */
          hat.updateChangeTab(6, "", "http://www.fins.com/Finance-Jobs", "FINS", 0, "Finance & Accounting Jobs");
          hat.updateChangeTab(7, "", "http://www.smartmoney.com", "SM");      
            }
                            
        hat.updateChangeMoreItem(1,"BigCharts","http://bigcharts.marketwatch.com/","BC");
        hat.updateChangeMoreItem(2,"Virtual Stock Exchange","http://vse.marketwatch.com/Game/Homepage.aspx","VSE");                           
        hat.updateChangeMoreItem(3,"FiLife.com","http://www.filife.com","FLF");
        hat.updateChangeMoreItem(4,"WSJ Asia","http://asia.wsj.com/","ASIA");
        hat.updateChangeMoreItem(5,"WSJ Europe","http://europe.wsj.com/","EUR");
        hat.updateChangeMoreItem(6,"WSJ Portuguese","http://online.wsj.com/portuguese","POR");          
        hat.updateChangeMoreItem(7,"WSJ Spanish","http://online.wsj.com/americas","SPA");         
        hat.updateChangeMoreItem(8,"WSJ Chinese","http://cn.wsj.com/gb/index.asp","CHI");
        hat.updateChangeMoreItem(9,"WSJ Japanese","http://jp.wsj.com/","JPN");
        hat.updateChangeMoreItem(10,"WSJ Radio","http://www.wsjradio.com","WRAD");
        hat.updateChangeMoreItem(11,"Financial News","http://www.efinancialnews.com/","FNO");          
      } 
      else if(wsjregion == "asia" || wsjregion == "asia,india") 
          {
          if(!WSJRenoApp){          
            hat.updateChangeTab(1,"","http://online.wsj.com/home","WSJ");
            hat.updateChangeTab(2,"","http://cn.wsj.com/gb/index.asp","CHI","hat_tabchi");
            hat.updateChangeTab(3,"","http://jp.wsj.com/","JPN","hat_tabjp");
            hat.updateChangeTab(4,"","http://www.marketwatch.com/","MW","hat_tab2");
            /* Tab with index 5 is reserved for the More tab.  Resulting tabs will be inserted before the More tab */
            hat.updateChangeTab(6,"","http://allthingsd.com/","ATD","hat_tab4");
          } 
        
            hat.updateChangeMoreItem(1,"SmartMoney.com","http://www.smartmoney.com/","SM");
            hat.updateChangeMoreItem(2,"BigCharts","http://bigcharts.marketwatch.com/","BC");
            hat.updateChangeMoreItem(3,"Virtual Stock Exchange","http://vse.marketwatch.com/Game/Homepage.aspx","VSE");                           
            hat.updateChangeMoreItem(4,"Barron's","http://online.barrons.com/home","BOL");              
            hat.updateChangeMoreItem(5,"Financial News","http://www.efinancialnews.com/","FNO");         
            hat.updateChangeMoreItem(6,"FiLife.com","http://www.filife.com","FLF");
            hat.updateChangeMoreItem(7,"WSJ Portuguese","http://online.wsj.com/portuguese","POR");          
            hat.updateChangeMoreItem(8,"WSJ Spanish","http://online.wsj.com/americas","SPA");                       
          }
            else if(wsjregion == "europe")
          {
          if(!WSJRenoApp){
                hat.updateChangeTab(1,"","http://online.wsj.com/home","WSJ");
            hat.updateChangeTab(2,"","http://www.marketwatch.com/","MW");
                hat.updateChangeTab(3,"","http://online.barrons.com/home","BOL");
            hat.updateChangeTab(4,"","http://www.efinancialnews.com/","FNO","hat_tabfno");
          }         
          hat.updateChangeMoreItem(1,"SmartMoney.com","http://www.smartmoney.com/","SM");
          hat.updateChangeMoreItem(2,"BigCharts","http://bigcharts.marketwatch.com/","BC");
          hat.updateChangeMoreItem(3,"All Things D","http://allthingsd.com/","ATD");
              hat.updateChangeMoreItem(4,"Virtual Stock Exchange","http://vse.marketwatch.com/Game/Homepage.aspx","VSE");                           
              hat.updateChangeMoreItem(5,"WSJ India","http://india.wsj.com","IND");             
              hat.updateChangeMoreItem(6,"WSJ Portuguese","http://online.wsj.com/portuguese","POR");
              hat.updateChangeMoreItem(7,"WSJ Spanish","http://online.wsj.com/americas","SPA");
              hat.updateChangeMoreItem(8,"WSJ Chinese","http://cn.wsj.com/gb/index.asp","CHI");
              hat.updateChangeMoreItem(9,"WSJ Japanese","http://jp.wsj.com/","JPN");
              hat.updateChangeMoreItem(10,"FiLife.com","http://www.filife.com","FLF");
          }         
          
          hat.updateShowHat();
      }
      catch(ex)     
      {
      }
  },
  
  hatMaxInitPolling : 200,
  
  init : function()
    {
      try
      {
        var el = document.getElementById("hat_div");    
        if (el && hat && hat.update && typeof(hat.update) === "function")
        {
          hat.update();
        }
        else
        {
            hat.hatMaxInitPolling--;
          if (hat.hatMaxInitPolling > 0)
            setTimeout(hat.init, 50);
        }
      }
      catch(ex)
      {
      }
    } 
};

hat.init();
dojo.provide("dj.module.articleFreeRegScrim");
dojo.require("dj.util.Cookie");
dojo.require("dj.util.User");
dojo.require("dj.util.Element");
dojo.require("dj.util.Query");
dojo.require("dj.util.Url");



/**
 * Region utility
 *
 */
dj.module.articleFreeRegScrim = {
  init: function () {
     var that = this;
     
      //rule 1 check if user is logged in and sub who is not logged in
      dj.util.User.isLoggedIn(function(isLoggedIn) {
        if (!isLoggedIn) {
        	if(document.location.href.indexOf(".wsj.com/article")!==-1){
                that.checkReferrerSite();
              }
        }
      });
	},


checkReferrerSite : function(cfg){
  var that = this;

   this._cfg = dj.lang.cloneMixin(this.DEFAULT_CONFIG, cfg);

   var freeArticleCookie = dj.util.Cookie.getGroupCookie("DJSESSION", "FREEREGSCRIMCOUNT");
   //rule 2 if user is coming from google.co check isTrial=true - create a cookie "FREEREGSCRIMCOUNT" 
   var ref = document.referrer;


     if (window.location.href.indexOf('google')>0)
     {
      that.setupArticleFreeRegScrim();
      }

if(freeArticleCookie==null  && isTrial==="true" && ref.indexOf("google")>0)
    { 
    
      freeArticleCookie = 0; // do not show the scrim
      
   }

    if (((freeArticleCookie !== "" || freeArticleCookie !== null)
    		&& freeArticleCookie=="0" && isFree==="true" && (isTrial==="false" && ref.indexOf('wsj.com/article')>0))) {
      freeArticleCookie = 1;
      that.setupArticleFreeRegScrim(); // show the scrim only ones
    }
     
    dj.util.Cookie.setGroupCookie("DJSESSION", "FREEREGSCRIMCOUNT",freeArticleCookie);
},

  DEFAULT_CONFIG: {
  y: null,
  z: null
  },

setupArticleFreeRegScrim : function(){
  var that = this;
  
  var pos = dojo.position('article_story_body', true);
  var getArticleDim = "";

//  var getArticleDim = 'height:'+pos.h+'px;'+'width:'+pos.w+'px;'; 

//  var getConfirmContent =dojo.byId('fr_confirm').innerHTML.replace(/id=\"/g, 'id="artScrim_');
  var getConfirmContent = dojo.byId('fr_confirm').innerHTML;

  var newConfirmContent = "";

if(getConfirmContent.match(/id=\"/g)){
	newConfirmContent = getConfirmContent.replace(/id=\"/g, 'id=\"artScrim_');
}else{
	newConfirmContent = getConfirmContent.replace(/id=/g, 'id=artScrim_');
}
  
var divContentStart = '<div id="pmArticleFreereg" class="pmArticleFreereg" style="position:absolute;top:95px;left:0px;'+getArticleDim+'display:none;z-index: 1"><a id="close-btn" href="#" onclick="dj.module.articleFreeRegScrim.setupArticleCloseFreeReg(); return false">Close [x]</a><h2 id="regFormhTag">Sign up in seconds to gain <em>FREE access</em> to exclusive WSJ.com tools & features:</h2><ul id="pmArticleFreereg-bullets"  class="pmArticleFreereg-bullets"><li>Setup and manage your portfolio</li><li>Personalize your own news page</li><li>Receive and manage newsletters</li><li>Join the Journal Community</li></ul><div id="insetForm" class="inset inset-form"><div style="display: none;" name="fr_confirm" id="artScrim_fr_confirm" class="fr_content fr_confirm">'+newConfirmContent+'</div><div id="artScrim_fr_content" class="fr_content">';
  var divContentEnd = '</div></div></div>';

var articleText = dojo.byId('article_story_body').innerHTML;
//var registerFormHtml =  dojo.byId('fr_content').innerHTML;
var registerFormHtml =  dojo.query('.fr_formElements')[0].innerHTML;



//var newFormContent = registerFormHtml.replace(/id=\"/g, 'id=\"artScrim_'); - works only on FF
var newFormContent = "";

if(registerFormHtml.match(/id=\"/g)){
	newFormContent = registerFormHtml.replace(/id=\"/g, 'id=\"artScrim_');
}else{
	newFormContent = registerFormHtml.replace(/id=/g, 'id=artScrim_');
}

newFormContent = newFormContent.replace("<p>Please register to gain free access to WSJ tools.</p>","");
newFormContent = newFormContent.replace("connectLinks-note-collapsed","connectLinks-note-collapsed hidden");
//newFormContent = newFormContent.replace("fr_bottom","fr_bottom hidden");
dojo.byId('article_story_body').innerHTML = articleText + divContentStart +'<div class="fr_formElements">'+newFormContent+'</div>'+ divContentEnd;

//setFreeRegScrimOmnitureCall();

 var scrimType = "artScrim_";
    
      this.displayDiv('pmArticleFreereg');

      this.oRegisterScrim_module = dj.lang.byId('pmArticleFreereg');
  //initialize the config of article scrim
      this.oErrorScrimCount = 0;
      this.http_requestScrim = false;
      this.oRegFieldScrimErrorMsgsValue = "";
      this.oregFieldScrimErrorMsg = dj.lang.byId(scrimType+'oregFieldErrorMsg');
      this.oFr_text = dj.lang.byId('insetForm');
      this.oFr_confirm = dj.lang.byId(scrimType+'fr_confirm');
      this.oFr_content = dj.lang.byId(scrimType+'fr_content');
      this.oFreeRegistrationScrim_form = dj.lang.byId(scrimType+'freeRegistration_form');
      this.oFreeregScrimemailerrormsg = dj.lang.byId(scrimType+'freeregemailerrormsg');
      this.oFreeregScrimusererrormsg = dj.lang.byId(scrimType+'freeregusererrormsg');
      this.oFreeRegScrimServiceErrorMsg = dj.lang.byId(scrimType+'freeRegServiceErrorMsg');
      this.oFreeRegScrimSubButton = dj.lang.byId(scrimType+'freeRegSubButton');
      this.oFreeRegScrimEmail = dj.lang.byId(scrimType+'regemail');
      //this.oFreeRegScrimWhyReason = dj.lang.byId(scrimType+'whyreasons');
     // this.ofreewhyScrimregister = dj.lang.byId(scrimType+'ofreewhyregister');
      this.regScrimErrorCode = [ 'userName-exists', 'userName-required', 'userName-invalid', 'firstName-required',
          'firstName-invalid', 'lastName-required', 'lastName-invalid', 'emailAddress-exists', 'emailAddress-required',
          'emailAddress-invalid', 'password-required', 'password-invalid', 'passwordConfirmation-invalid',
          'userName-unique', 'emailAddress-unique', 'passwordConfirmation-required' ];
       this.regErrorScrimValue= ['Please enter your First Name.','Please enter your Last Name.','Please enter a valid email address.',
                           'Please create a Password.','Please confirm Password.','The email addresses do not match. Please re-enter both.',
                           'Passwords do not match.', 'Password must be 5-15 characters in length.', 
                           'Confirm Password must be 5-15 characters in length.','','','Please Confirm Email.',
                           'First name contains invalid characters.','Last name contains invalid characters.'];

      this.regFieldName = [scrimType+'firstNameReg', scrimType+'lastNameReg', scrimType+'emailAddressReg', scrimType+'passwordReg', scrimType+'passwordConfirmationReg',scrimType+'emailAddressConfirmationReg',scrimType+'passwordConfirmationReg',scrimType+'passwordReg', 'passwordConfirmationReg',scrimType+'sendEmailsReg',scrimType+'jcommunityReg',scrimType+'emailAddressConfirmationReg',scrimType+'firstNameReg',scrimType+'lastNameReg',scrimType+'companySizeReg'];
      this.attachScrimEvents();
      this.setFreeRegScrimOmnitureCall(1);
      this.freeRegScrimResetForm();

},

 

setupArticleCloseFreeReg: function(){
	dojo.addClass(dojo.byId("pmArticleFreereg"),"hidden");
//dojo.byId('pmArticleFreereg').setAttribute("class","pmArticleFreereg hidden");
},




  	  setFreeRegScrimOmnitureCall : function(numClicks){
		    if (numClicks === undefined)
		    {
		      numClicks = 1;
		    }

		    if (numClicks==1)
		    {
		    	setMetaData('pageName','WSJ_Reg_FreeRegScrimForm');//pageName
		    	 setMetaData('atype', 'WSJ_Customer Resources_Reg_FreeRegScrimForm');//c3
		    	
		    }else if(numClicks==2){
		    	setMetaData('pageName','WSJ_Reg_FreeRegScrimThankYou');//pageName
		    	setMetaData('atype', 'WSJ_Customer Resources_Reg_FreeRegScrimThankYou');//c3
		    }
		    setMetaData('primaryproduct', 'Online Journal');//channel
		    setMetaData('ctype', 'marketing and support');//c19
		    setMetaData('qsymbol', '');//c13
		    setMetaData('aheadline', '');//c4
		    
		    setMetaData('apage', 'WSJ_Customer Resources_Reg_FreeRegScrimForm');
		    setMetaData('section', 'Customer Resources');//c1
		    setMetaData('subsection', 'WSJ Registration');//c2
		    setMetaData('basesection', 'WSJ_Customer Resources_Registration_FreeRet');//c26
		    setMetaData('csource','Customer Resources');//c8
		    setMetaData('apage', 'WSJ_Customer Resources_Registration_FreeRet');//c22
   
		    //dj.util.Tracking.omniture.sendCustomEvent("event12");
		    dj.util.Tracking.omniture.firePixel(true);
	    
		  },

 attachScrimEvents : function() {

    var textFields = dojo.query("input[type=text]", this.oFreeRegistrationScrim_form);
    var passfields = dojo.query("input[type=password]", this.oFreeRegistrationScrim_form);
    textFields.forEach(function(ipt) {
      dojo.connect(ipt, "onfocus", this, function(ev) {
        this.checkFreeRegScrimFocus(ipt.name);
      });
    }, this);
    textFields.forEach(function(ipt) {
      dojo.connect(ipt, "onblur", this, function(ev) {
        this.checkFreeRegScrimFieldBlur(ipt.name);
      });
    }, this);
    passfields.forEach(function(ipt) {
      dojo.connect(ipt, "onfocus", this, function(ev) {
        this.checkFreeRegScrimFocus(ipt.name);
      });
    }, this);
    passfields.forEach(function(ipt) {
      dojo.connect(ipt, "onblur", this, function(ev) {
        this.checkFreeRegScrimFieldBlur(ipt.name);
      });
    }, this);

    this.oimagefields = dojo.query("input[type=image]", this.oFreeRegistrationScrim_form);
 
    this.oimagefields.forEach(function(ipt) {
      dojo.connect(ipt, "onclick", this, function(ev) {
  
        this.submitregScrimForm();
       });
    }, this);

   this.okButtonClicked = dojo.query("input[class=okButton]", this.oFreeRegConfirm);
    this.okButtonClicked.forEach(function(ipt) {
      dojo.connect(ipt, "onclick", this, function(ev) {
   
    	this.setupArticleCloseFreeReg();
        this.closeRegScrimSuccessBlock();
      });
    }, this);

 /*   this.oFreewhyReasons = dojo.query("a[class=ofreewhyReasons]", this.oRegisterScrim_module);
    this.oFreewhyReasons.forEach(function(ipt) {
      dojo.connect(ipt, "onclick", this, function(ev) {
        this.oFreeRegScrimWhyReason.style.display = (this.oFreeRegScrimWhyReason.style.display == 'block') ? 'none' : 'block';
        if (this.oFreeRegScrimWhyReason.style.display === 'block') {
          this.ofreewhyScrimregister.className = "why";
        } else {
          this.ofreewhyScrimregister.className = "whynot";
        }
      });
    });

    this.oFreeTermsConditions = dojo.query("a[class=ofreeTermsConditions]", this.oRegisterScrim_module);
    this.oFreeTermsConditions.forEach(function(ipt) {
      dojo.connect(ipt, "onclick", this, function(ev) {
        dj.util.Url.openWin('/public/page/subscriber_agreement.html', 'TermAndConditions', 800, 800, 'scrollbars', 1,
            300, 100);
      });
    }, this);

    this.oFreeEmailNewLetter = dojo.query("a[class=ofreeEmailNewLetter]", this.oRegisterScrim_module);
    this.oFreeEmailNewLetter.forEach(function(ipt) {
      dojo.connect(ipt, "onclick", this, function(ev) {
        dj.util.Url.openWin('/public/email', 'EmailNewLetterLink');
      });
    });

    this.oprivacyPolicy = dojo.query("a[class=oprivacyPolicy]", this.oRegisterScrim_module);
    this.oprivacyPolicy.forEach(function(ipt) {
      dojo.connect(ipt, "onclick", this, function(ev) {
        dj.util.Url.openWin('/public/page/privacy_policy.html', 'FreeRegPrivacyPolicy', 800, 800, 'scrollbars', 1, 300,
            100);
      });
    }, this);
    */
 },

 displayDiv: function(scrimDiv) {
  this.VarX = dojo.byId(scrimDiv);
  this.VarX.style.zIndex = 1000000000;
  this.VarX.style.display = 'block';
 // this.VarX.style.height = document.body.scrollHeight + 'px';
  //this.VarX.style.height = dojo.byId('article_story_body').style.height+'px';
 
  },

  freeRegScrimResetForm : function() {
	  
      this.closeRegScrimOtherBlock(1);
      this.oFreeRegistrationScrim_form.reset();
   
      dj.util.Element.hide(this.oFr_confirm);
      dj.util.Element.hide(this.oregFieldScrimErrorMsg);
      //this.ofreewhyScrimregister.className = "whynot";
      this.oRegFieldScrimErrorMsgsValue = "";
      // dj.util.Element.hide(this.oRegEmailErrorMsg);
        this.oFreeRegScrimSubButton.disabled = false;
        dj.util.Element.hide(this.oFreeregScrimemailerrormsg);
        dj.util.Element.hide(this.oFreeRegScrimServiceErrorMsg);
        dj.util.Element.hide(this.oFreeregScrimusererrormsg);
        this.oFreeRegistrationScrim_form[this.regFieldName[0]].style.backgroundColor = '#ffffff';
        this.oFreeRegistrationScrim_form[this.regFieldName[1]].style.backgroundColor = '#ffffff';
        this.oFreeRegistrationScrim_form[this.regFieldName[2]].style.backgroundColor = '#ffffff';
        this.oFreeRegistrationScrim_form[this.regFieldName[3]].style.backgroundColor = '#ffffff';
        this.oFreeRegistrationScrim_form[this.regFieldName[4]].style.backgroundColor = '#ffffff';
        this.oFreeRegistrationScrim_form[this.regFieldName[5]].style.backgroundColor = '#ffffff';
   
  },
  // Close success block
  closeRegScrimSuccessBlock: function() {
         dj.util.Element.hide('regFormhTag');
	  dj.util.Element.hide('pmArticleFreereg-bullets');
          this.setFreeRegScrimOmnitureCall(2);
  },

  // Close Login/Register div
  closeRegScrimOtherBlock: function(val) {
    if (val === 1) {
    	
    
     // this.ofreereg.className = "freereg";
    //  this.osublogin.className += " login_hidden";
     // dj.util.Element.hide(this.logindiv);
      dj.util.Element.show(this.oRegisterScrim_module);
      dj.util.Element.show(this.oFr_text);
      dj.util.Element.hide(this.oFr_confirm);
   //   this.oFreeRegScrimWhyReason.style.display = 'block';
   //   this.oFreeRegScrimWhyReason.style.display = 'none';
    }
    if (val === 2) {
     // this.osublogin.className = "login";
     // this.ofreereg.className += " freereg_hidden";
     // dj.util.Element.show(this.logindiv);
      dj.util.Element.hide(this.oRegisterScrim_module);
    }
  },

  // On Blur functionality
  checkFreeRegScrimFieldBlur : function(oregFieldname) {
    this.ofieldName = this.oFreeRegistrationScrim_form[oregFieldname];
    this.ofieldValue = this.ofieldName.value;
    if (/^\s*$/.test(this.ofieldValue)) {
      // this.ofieldName.style.color = '#ff0000';
      // this.ofieldName.style.backgroundColor='#fff28d';
      this.oErrorScrimCount = 1;
      this.oFreeRegScrimSubButton.disabled = false;
    } else {
      this.ofieldName.style.color = '#000000';
      this.ofieldName.style.backgroundColor = '#ffffff';
      this.ofieldName.value = dojo.trim(this.ofieldValue);
    }
  },

  checkFreeRegBlur : function(oregFieldnumber) {
    this.ofieldName = this.oFreeRegistrationScrim_form[this.regFieldName[oregFieldnumber]];
    this.ofieldValue = this.ofieldName.value;
    if (/^\s*$/.test(this.ofieldValue)) {
      this.changeFieldValue(oregFieldnumber);
      this.oErrorScrimCount = 1;
      this.oFreeRegScrimSubButton.disabled = false;
    } else {
      this.ofieldName.style.color = '#000000';
      this.ofieldName.style.backgroundColor = '#ffffff';
      this.ofieldName.value =dojo.trim(this.ofieldValue);
    }
  },

  // On Focus functionality
  checkFreeRegScrimFocus : function(oregFieldname) {
    this.ofieldName = this.oFreeRegistrationScrim_form[oregFieldname];
    this.ofieldName.style.color = "#000000";
    this.ofieldName.style.backgroundColor = "#ffffff";
  },

  // compare Free Reg Email and Confirm Email
  compareFreeRegEmail : function() {
    this.oEmailfieldValue = this.oFreeRegistrationScrim_form[this.regFieldName[2]].value;
    this.oEmailfieldConfValue = this.oFreeRegistrationScrim_form[this.regFieldName[5]].value;
    if ((this.oEmailfieldValue != '' && this.oEmailfieldConfValue != '') && (this.oEmailfieldValue !== this.oEmailfieldConfValue)) {
      this.changeFieldValue(5);
      this.oFreeRegScrimSubButton.disabled = false;
      this.oErrorScrimCount = 1;
    }
  },

  // compare Free Reg Password and Confirm Passwords
  compareFreeRegPassword : function() {
    this.oPassfieldValue = this.oFreeRegistrationScrim_form[this.regFieldName[3]].value;
    this.oCPassfieldValue = this.oFreeRegistrationScrim_form[this.regFieldName[4]].value;
    if (this.oPassfieldValue !== this.oCPassfieldValue) {
      this.changeFieldValue(6);
      this.oFreeRegScrimSubButton.disabled = false;
      this.oErrorScrimCount = 1;
    }
  },
  // this function chnages the field properties.
  changeFieldValue : function(oregFieldnumber) {
    dj.util.Element.show(this.oregFieldScrimErrorMsg);
    this.ofieldName = this.oFreeRegistrationScrim_form[this.regFieldName[oregFieldnumber]];
    this.oRegFieldScrimErrorMsgsValue += " " + this.regErrorScrimValue[oregFieldnumber];
    this.ofieldName.style.color = '#ff0000';
    this.ofieldName.style.backgroundColor = '#fff28d';

  },

  // Processing the response sent by the Ajax Hit.
  responseErrorData : function(responseData) {
    var that = this;
    var oshow = 0;
    var profileErrors = responseData.profile.errors;
    var emailAddressVal = profileErrors.emailAddress;
    var userNameVal = profileErrors.userName;
    var firstNameVal = profileErrors.firstName;
    var lastNameVal = profileErrors.lastName;
    var passwordVal = profileErrors.password;
    var compasswordVal = profileErrors.passwordConfirmation;

    if (emailAddressVal !== null && emailAddressVal !== undefined) {
      if (this.regScrimErrorCode[7] === emailAddressVal || this.regScrimErrorCode[14] === emailAddressVal) {
        dj.util.Element.show(this.oFreeregScrimemailerrormsg);
        this.ofieldName = this.oFreeRegistrationScrim_form[this.regFieldName[2]];
        this.ofieldName.style.backgroundColor = '#fff28d';
      } else {
        this.changeFieldValue(2);
        oshow = 1;
      }
    }
    if (userNameVal !== null && userNameVal !== undefined) {
      if (this.regScrimErrorCode[0] === userNameVal || this.regScrimErrorCode[13] === userNameVal) {
        dj.util.Element.show(this.oFreeregScrimusererrormsg);
        this.ofieldName = this.oFreeRegistrationScrim_form[this.regFieldName[5]];
        this.ofieldName.style.backgroundColor = '#fff28d';
      } else {
        this.changeFieldValue(5);
        oshow = 1;
      }
    }

    if (firstNameVal !== null && firstNameVal !== undefined) {
      this.changeFieldValue(0);
      oshow = 1;
    }
    if (lastNameVal !== null && lastNameVal !== undefined) {
      this.changeFieldValue(1);
      oshow = 1;
    }
    if (passwordVal !== null && passwordVal !== undefined) {
      if (passwordVal === this.regScrimErrorCode[11]) {
        this.changeFieldValue(7);
      } else {
        this.changeFieldValue(3);
      }
      oshow = 1;
    }
    if (compasswordVal !== null && compasswordVal !== undefined) {
      if (compasswordVal === this.regScrimErrorCode[12]) {
        this.changeFieldValue(8);
      } else {
        this.changeFieldValue(4);
      }
      oshow = 1;
    }
  
    if (oshow === 1) {
      dj.util.Element.show(this.oregFieldScrimErrorMsg);
      this.oregFieldScrimErrorMsg.innerHTML = "<p>" + this.oRegFieldScrimErrorMsgsValue + "</p>";
    
    }
  },

  freeRegScrimRequest : function() {
    this.ofirstName = this.oFreeRegistrationScrim_form[this.regFieldName[0]].value;
    this.olastName = this.oFreeRegistrationScrim_form[this.regFieldName[1]].value;
    this.oemailName = this.oFreeRegistrationScrim_form[this.regFieldName[2]].value;
    this.opassName = this.oFreeRegistrationScrim_form[this.regFieldName[3]].value;
    this.ocpassName = this.oFreeRegistrationScrim_form[this.regFieldName[4]].value;
    this.oemailConfName = this.oFreeRegistrationScrim_form[this.regFieldName[5]].value;
    // this.oFeatureEmail = this.oFreeRegistrationScrim_form[this.regFieldName[9]].checked;
  this.oFeatureEmail = true;
  this.oCommunityProfile = this.oFreeRegistrationScrim_form[this.regFieldName[10]].checked;
  this.ocompanySize = this.oFreeRegistrationScrim_form[this.regFieldName[14]].value;
 //this.data = {'profile.userName':this.ouserName,'profile.firstName':this.ofirstName,'profile.lastName':this.olastName,'profile.emailAddress':this.oemailName,'profile.password':this.opassName,'profile.passwordConfirmation':this.ocpassName,'profile.options.createCommunityProfile':this.oCommunityProfile,'profile.options.featureEmailOptIn':this.oFeatureEmail,'profile.options.returnLink':window.location.href};
  if(this.ocompanySize.length === 0|| this.ocompanySize === null){
    this.data = {
      'profile.firstName' : this.ofirstName,
      'profile.lastName' : this.olastName,
      'profile.emailAddress' : this.oemailName.toLowerCase(),
      'profile.password' : this.opassName,
      'profile.passwordConfirmation' : this.ocpassName,
      'service.templateCode' : 'WSJ',
      'service.registrationType' : 'FREE_REGISTRATION',
      'profile.options.returnLink' : window.location.href,
      'profile.options.featureEmailOptIn' : this.oFeatureEmail,
      'profile.trackingCode':'FREEREGSCRIM'
    };        
  }
  else{
    this.data = {
        'profile.firstName':this.ofirstName,
        'profile.lastName':this.olastName,
        'profile.emailAddress':this.oemailName.toLowerCase(),
        'profile.password':this.opassName,
        'profile.passwordConfirmation':this.ocpassName,
        'service.templateCode':'WSJ',
        'service.registrationType':'FREE_REGISTRATION',
        'profile.options.returnLink':window.location.href,
        'profile.options.featureEmailOptIn':this.oFeatureEmail,
        'profile.demographics.questionId1':this.opassQuestion ,
        'profile.demographics.answer1':this.ocompanySize,
        'profile.trackingCode':'FREEREGSCRIM'};
  }
  var that = this;
  var request = dojo.xhrPost( {
    url : "/epiton/registration/v2/profile",
    handleAs : "json",
    headers : {
      Accept : "application/json"
    },
    postData : dojo.objectToQuery(this.data),//dojo.toJson(this.data),
    handle : function(data, ioargs) {
    

      if (ioargs.xhr.status === 200) {
        that.oFreeRegScrimEmail.innerHTML = that.oemailName;
      dojo.addClass(dojo.byId("pmArticleFreereg"),"confirmation-page");
        dj.util.Element.hide('regFormhTag');
        dj.util.Element.hide('pmArticleFreereg-bullets');
        dj.util.Element.hide(that.oFr_content);
        dj.util.Element.show(that.oFr_confirm);

        //that.oFr_text.style.display = 'none';
       
        //that.oFreeRegistrationScrim_form.reset();
      // if registered then delete cookie
      
      } else if (ioargs.xhr.status === 412) {
  var responseData = eval('(' + ioargs.xhr.responseText + ')');
        that.oFreeRegScrimSubButton.disabled = false;
        that.responseErrorData(responseData);
      } else if (ioargs.xhr.status === 500 || ioargs.xhr.status === 404) {
        that.oFreeRegScrimSubButton.disabled = false;
        dj.util.Element.show(that.oFreeRegScrimServiceErrorMsg);
      } else {
        that.oFreeRegScrimSubButton.disabled = false;
        dj.util.Element.show(that.oFreeRegScrimServiceErrorMsg);
      }
    }
  });
},


  submitregScrimForm : function() {
  this.oErrorScrimCount = 0;
  this.oRegFieldScrimErrorMsgsValue = "";
  //dj.util.Element.hide(this.oFr_text);
  dj.util.Element.hide(this.oFreeregScrimemailerrormsg);
  dj.util.Element.hide(this.oFreeregScrimusererrormsg);
  // dj.util.Element.hide(this.oRegEmailErrorMsg);
  dj.util.Element.hide(this.oFreeRegScrimServiceErrorMsg);
  this.oFreeRegScrimSubButton.disabled = true;
  this.checkFreeRegBlur(0);
  this.checkFreeRegBlur(1);
  this.checkFreeRegBlur(2);
  this.checkFreeRegBlur(11);
  this.checkFreeRegBlur(3);
  this.checkFreeRegBlur(4);
  this.compareFreeRegEmail();
  this.compareFreeRegPassword();
  if (this.oErrorScrimCount === 0) {
    this.oRegFieldScrimErrorMsgsValue = "";
    // this.compareFreeRegEmail();
  // this.compareFreeRegPassword();
  // this.checkFreeRegEmail(this.oFreeRegistrationScrim_form[this.regFieldName[2]].value);
}
if (this.oErrorScrimCount > 0) {
  this.oregFieldScrimErrorMsg.innerHTML = "<p>" + this.oRegFieldScrimErrorMsgsValue + "</p>";
  dj.util.Element.show(this.oregFieldScrimErrorMsg);
  this.oFreeRegScrimSubButton.disabled = false;
  return false;
} else {
  this.oFreeRegScrimSubButton.disabled = true;
  dj.util.Element.hide(this.oregFieldScrimErrorMsg);
  this.oRegFieldScrimErrorMsgsValue = "";
  this.oregFieldScrimErrorMsg.innerHTML = "";
  this.freeRegScrimRequest();
 
  return false;
}
return false;
}

};
dojo.provide("dj.widget.networkHat.AutoComplete");

dojo.require("dj.lang");
dojo.require("dj.widget.networkHat.hat");

dojo.getObject("dj.context.networkHat", true);

/* global dj, dojo */

/**
 * @author cooksonl
 */

/*
 * networkHat object...loads scripts needed for autocomplete only when user interacts with the search box. Traps
 * mouseover and focus events, and then loads and initializes the infocomplete for the
 */

(function() {

  var _dwn = dj.widget.networkHat;

  (_dwn.AutoComplete = function() {

    this.d = document;

    if (typeof cdnDomain != 'undefined') {
      this.cdnDomain = cdnDomain;
    }
    this.uP = "";
    if (typeof uP != 'undefined') {
      this.uP = uP;
    }

    var dt = new Date();
    var dtStamp = "" + dt.getFullYear() + dt.getMonth() + dt.getDay();

    if (this.d.location.host.indexOf('s.dev') != -1 || this.d.location.host.indexOf('idev') != -1) {
      //  A hack until cdnDomain for SAT/IDEV actually wil serve up /djscript URLs
      this.jScript = this.uP + "/djscript/j_networkHat-" + dtStamp + ".js";
    } else {
      this.jScript = this.cdnDomain + "/djscript/j_networkHat-" + dtStamp + ".js";
    }

    // Set the required globals
    var fw = this.d.getElementsByTagName("div")[0];
    var loggedIn = (fw.className.indexOf("subType-subscribed") !== -1);

    //loggedIn = (typeof loggedIn !== "undefined") ? loggedIn : false;
    var searchBoxID = 'hat_input_auto';
    this.inputDefaultText="News, Quotes, Companies, Videos";

//    this.inputDefaultText = "";

    // Retrieve the needed dom-elements
    var oHat = dojo.byId("hat_div");
    this.oHatInput = dojo.byId("hat_input_auto");
    var oHatSelect = dojo.query(".hat_select", oHat);
    var oHatSelectItems = dojo.query(".hat_drop_item", oHat);
    var oHatTabs = dojo.query(".hat_tab", oHat);

    var oHatMenu = dojo.byId("hat_more_menu");

    // Set default style
    if (dojo.isIE && (this.d.domain.indexOf('ds.sat.wsj.com') != -1 || this.d.domain.indexOf('ds.wsj.com') != -1)) {
      dj.util.Url.addStylesheet("http://s.wsj.net/css/hatIEPortfolio.css");
    }
    dojo.style(oHat, {
      "width": "989px",
      "height": "35px",
      "position": "relative",
      "zIndex": 999999
    });

    dojo.style(oHatMenu, {
      width: "155px"
    });

    // attach event handlers to menu buttons/tabs at top
    oHatTabs.forEach(function(node, index, nodeList) {
      if (!dojo.hasClass(node, "hat_select")) {
        dojo.connect(node, "onmouseover", null, function(ev) {
          if (typeof hat!=="undefined") {hat.tabover(this);}
        });
        dojo.connect(node, "onmouseout", null, function(ev) {
          if(typeof hat!=="undefined"){hat.tabout(this);}
        });
      }
    });

    oHatSelect.connect("onmouseover", null, function(ev) {
      if(typeof hat!=="undefined"){hat.moremenu();}
    });
    oHatSelect.connect("onmouseout", null, function(ev) {
      if(typeof hat!=="undefined"){hat.moremenuhide();}
    });

    oHatSelectItems.connect("onmouseover", null, function(ev) {
      if(typeof hat!=="undefined"){hat.menuover(this);}
    });
    oHatSelectItems.connect("onmouseout", null, function(ev) {
      if(typeof hat!=="undefined"){hat.menuout(this);}
    });

    this.onfocusLoad = dojo.connect(this.oHatInput, "onfocus", this, this.onHatLoad);
    this.onmouseoverLoad = dojo.connect(this.oHatInput, "onmouseover", this, this.onHatLoad);
    this.onclickClear = dojo.connect(this.oHatInput, "onclick", this, this.clearField);
    this.onkeydownClear = dojo.connect(this.oHatInput, "onkeydown", this, this.clearField);

    if (this.oHatInput.value !== "" && this.oHatInput.value != this.inputDefaultText
        || dj.context.networkHat.jnetworkHatJsLoaded) {
      //if text already in field, initialize hat.  User got focus or clicked before the hanlder was attached
      this.onHatLoad();
    }
    this.setFieldDefault();

  }).prototype = {
    setFieldDefault: function() {
      /* Add "prompt" text to oHatInput if it's blank, if user has not typed */
      if (this.oHatInput.value === "") {
        //below line is commented out as we have a background img on search text bo

        this.oHatInput.value=this.inputDefaultText;

      /*
       * - test to see what is loaded - manjula this.oHatInput.setStyle({ "background-Image":
       * "url('/img/search_background.png')", "background-repeat": "no-repeat" });
       */
      dojo.addClass(this.oHatInput, "unUsed");
    }

  },

  clearField: function() {
    this.stopObservingClick();
    var unUsed = dojo.hasClass(this.oHatInput, "unUsed");
    if (unUsed) {
      this.oHatInput.value = "";
    }
    dojo.removeClass(this.oHatInput, "unUsed");
  },
  stopObservingClick: function() {
    // use dojo.disconnect?
    dojo.disconnect(this.onclickClear);
    dojo.disconnect(this.onkeydownClear);
  },
  onHatLoad: function() {

    dojo.disconnect(this.onfocusLoad);
    dojo.disconnect(this.onmouseoverLoad);

    // if j_networkHat.js already loaded, skip to init
    if (dj.context.networkHat.jnetworkHatJsLoaded) {
      this.initInfoComplete();
      return;
    }

    //load j_networkhat.js
    var hds = this.d.getElementsByTagName('head');
    var hd;
    if (!hds) {
      hd = new Element('head');
      this.d.getElementsByTagName('body')[0].appendChild(hd);
    } else {
      hd = hds[0];
    }
    this.jsNode = this.loadAutoCompleteScript(this.jScript);

  },
  loadAutoCompleteScript: function(jScript) {

    var jsNode = this.d.createElement("script");
    jsNode.type = "text/javascript";
    jsNode.src = jScript;

    if (this.d.getElementsByTagName("head").length === 0) {
      var headNode = this.d.createElement("head");
      this.d.getElementsByTagName("html")[0].appendChild(headNode);
    }

    this.d.getElementsByTagName("head")[0].appendChild(jsNode);
    return jsNode;
  },
  initInfoComplete: function() {

    // Set default style
    if (dojo.isIE && (this.d.domain.indexOf('ds.sat.wsj.com') != -1 || this.d.domain.indexOf('ds.wsj.com') != -1)) {
      dj.util.Url.addStylesheet("http://s.wsj.net/css/hatIEPortfolio.css");
    }

    initInfoComplete();
    this.stopObservingClick();

    // Set-up event listeners
    dojo.connect(this.oHatInput, "onfocus", null, function(ev) {

      this.style.backgroundImage = "url('http://s.wsj.net/img/b.gif')";

      searchFieldOnFocus(this);
      setFocused(this);
    });

    dojo.connect(this.oHatInput, "onkeypress", null, function() {
      showHideCRDrpdwn('hide');
    });
    dojo.connect(this.oHatInput, "onblur", null, function() {
      showHideCRDrpdwn('show');
    });

    var textValue = this.oHatInput.value;

    if (textValue && textValue != this.inputDefaultText) {
      InfoComplete.autoComplete.sendQuery(textValue);
    }
  }
  };

}());<!-- fastdynapage - sbkj2kapachep08 - Fri 03/19/10 - 17:15:27 EDT -->
