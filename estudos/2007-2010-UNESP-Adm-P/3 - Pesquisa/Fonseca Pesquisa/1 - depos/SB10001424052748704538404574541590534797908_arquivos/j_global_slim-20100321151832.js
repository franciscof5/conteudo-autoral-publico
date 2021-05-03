
if(typeof dj=="undefined"){dj={};}
if(typeof dj.context=="undefined"){dj.context={};}
if(typeof djConfig=="undefined"){this.djConfig={};}
(function(){var ctx=dj.context,djc=djConfig;ctx.core=(ctx.core||{});ctx.core.urlPrefix="http://online.wsj.com";ctx.core.professionalUrlPrefix="http://professional.wsj.com";ctx.core.cdnPrefix="http://s.wsj.net";var isJsDebugOn=((window.location.hash+"").indexOf("jsdebug=true")>-1);djc.isDebug=isJsDebugOn;djc.popup=isJsDebugOn;djc.afterOnLoad=true;djc.modulePaths={dj:"/javascript/package/dj",dojo:"/javascript/package/dojo",djscript:"/djscript"};ctx.videoCenter=(ctx.videoCenter||{});ctx.videoCenter.host="video.wsj.com";ctx.dashboard=(ctx.dashboard||{});ctx.mdc=(ctx.mdc||{});ctx.mdc.indexTickerUri="/public/resources/live/2_3001_JSON.js";ctx.disablePageRefresh=false;ctx.disableAjaxRefresh={};ctx.page=(ctx.page||{});ctx.page.disablePageRefresh=false;ctx.module=(ctx.module||{});ctx.module.disableModuleRefresh={};ctx.ads=(ctx.ads||{});ctx.facebook=(ctx.facebook||{});ctx.facebook.apiKey="67fc5e01d68cf35eba52297f5bf2ed3d";ctx.facebook.commerceLoginURL="https://commerce.wsj.com/auth/fbconnect";}());/*
  Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
  Available via Academic Free License >= 2.1 OR the modified BSD license.
  see: http://dojotoolkit.org/license for details
*/

/*
  This is a compiled version of Dojo, built for deployment and not for
  development. To get an editable version, please visit:

    http://dojotoolkit.org

  for documentation and information on getting the source.
*/

(function(){var _1=null;if((_1||(typeof djConfig!="undefined"&&djConfig.scopeMap))&&(typeof window!="undefined")){var _2="",_3="",_4="",_5={},_6={};_1=_1||djConfig.scopeMap;for(var i=0;i<_1.length;i++){var _7=_1[i];_2+="var "+_7[0]+" = {}; "+_7[1]+" = "+_7[0]+";"+_7[1]+"._scopeName = '"+_7[1]+"';";_3+=(i==0?"":",")+_7[0];_4+=(i==0?"":",")+_7[1];_5[_7[0]]=_7[1];_6[_7[1]]=_7[0];}eval(_2+"dojo._scopeArgs = ["+_4+"];");dojo._scopePrefixArgs=_3;dojo._scopePrefix="(function("+_3+"){";dojo._scopeSuffix="})("+_4+")";dojo._scopeMap=_5;dojo._scopeMapRev=_6;}(function(){if(typeof this["loadFirebugConsole"]=="function"){this["loadFirebugConsole"]();}else{this.console=this.console||{};var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];var i=0,tn;while((tn=cn[i++])){if(!console[tn]){(function(){var _8=tn+"";console[_8]=("log" in console)?function(){var a=Array.apply({},arguments);a.unshift(_8+":");console["log"](a.join(" "));}:function(){};console[_8]._fake=true;})();}}}if(typeof dojo=="undefined"){dojo={_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};}var d=dojo;if(typeof dijit=="undefined"){dijit={_scopeName:"dijit"};}if(typeof dojox=="undefined"){dojox={_scopeName:"dojox"};}if(!d._scopeArgs){d._scopeArgs=[dojo,dijit,dojox];}d.global=this;d.config={isDebug:false,debugAtAllCosts:false};if(typeof djConfig!="undefined"){for(var _9 in djConfig){d.config[_9]=djConfig[_9];}}dojo.locale=d.config.locale;var _a="$Rev: 20973 $".match(/\d+/);dojo.version={major:1,minor:4,patch:0,flag:"",revision:_a?+_a[0]:NaN,toString:function(){with(d.version){return major+"."+minor+"."+patch+flag+" ("+revision+")";}}};if(typeof OpenAjax!="undefined"){OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",d.version.toString());}var _b,_c,_d={};for(var i in {toString:1}){_b=[];break;}dojo._extraNames=_b=_b||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];_c=_b.length;dojo._mixin=function(_e,_f){var _10,s,i;for(_10 in _f){s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}if(_c&&_f){for(i=0;i<_c;++i){_10=_b[i];s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}}return _e;};dojo.mixin=function(obj,_11){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo._getProp=function(_12,_13,_14){var obj=_14||d.global;for(var i=0,p;obj&&(p=_12[i]);i++){if(i==0&&d._scopeMap[p]){p=d._scopeMap[p];}obj=(p in obj?obj[p]:(_13?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_15,_16,_17){var _18=_15.split("."),p=_18.pop(),obj=d._getProp(_18,true,_17);return obj&&p?(obj[p]=_16):undefined;};dojo.getObject=function(_19,_1a,_1b){return d._getProp(_19.split("."),_1a,_1b);};dojo.exists=function(_1c,obj){return !!d.getObject(_1c,false,obj);};dojo["eval"]=function(_1d){return d.global.eval?d.global.eval(_1d):eval(_1d);};d.deprecated=d.experimental=function(){};})();(function(){var d=dojo;d.mixin(d,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},_moduleHasPrefix:function(_1e){var mp=d._modulePrefixes;return !!(mp[_1e]&&mp[_1e].value);},_getModulePrefix:function(_1f){var mp=d._modulePrefixes;if(d._moduleHasPrefix(_1f)){return mp[_1f].value;}return _1f;},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});dojo._loadPath=function(_20,_21,cb){var uri=((_20.charAt(0)=="/"||_20.match(/^\w+:/))?"":d.baseUrl)+_20;try{return !_21?d._loadUri(uri,cb):d._loadUriAndCheck(uri,_21,cb);}catch(e){console.error(e);return false;}};dojo._loadUri=function(uri,cb){if(d._loadedUrls[uri]){return true;}d._inFlightCount++;var _22=d._getText(uri,true);if(_22){d._loadedUrls[uri]=true;d._loadedUrls.push(uri);if(cb){_22="("+_22+")";}else{_22=d._scopePrefix+_22+d._scopeSuffix;}if(!d.isIE){_22+="\r\n//@ sourceURL="+uri;}var _23=d["eval"](_22);if(cb){cb(_23);}}if(--d._inFlightCount==0&&d._postLoad&&d._loaders.length){setTimeout(function(){if(d._inFlightCount==0){d._callLoaded();}},0);}return !!_22;};dojo._loadUriAndCheck=function(uri,_24,cb){var ok=false;try{ok=d._loadUri(uri,cb);}catch(e){console.error("failed loading "+uri+" with error: "+e);}return !!(ok&&d._loadedModules[_24]);};dojo.loaded=function(){d._loadNotifying=true;d._postLoad=true;var mll=d._loaders;d._loaders=[];for(var x=0;x<mll.length;x++){mll[x]();}d._loadNotifying=false;if(d._postLoad&&d._inFlightCount==0&&mll.length){d._callLoaded();}};dojo.unloaded=function(){var mll=d._unloaders;while(mll.length){(mll.pop())();}};d._onto=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _25=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_25.call(obj);});}}};dojo.ready=dojo.addOnLoad=function(obj,_26){d._onto(d._loaders,obj,_26);if(d._postLoad&&d._inFlightCount==0&&!d._loadNotifying){d._callLoaded();}};var dca=d.config.addOnLoad;if(dca){d.addOnLoad[(dca instanceof Array?"apply":"call")](d,dca);}dojo._modulesLoaded=function(){if(d._postLoad){return;}if(d._inFlightCount>0){console.warn("files still in flight!");return;}d._callLoaded();};dojo._callLoaded=function(){if(typeof setTimeout=="object"||(d.config.useXDomain&&d.isOpera)){setTimeout(d.isAIR?function(){d.loaded();}:d._scopeName+".loaded();",0);}else{d.loaded();}};dojo._getModuleSymbols=function(_27){var _28=_27.split(".");for(var i=_28.length;i>0;i--){var _29=_28.slice(0,i).join(".");if(i==1&&!d._moduleHasPrefix(_29)){_28[0]="../"+_28[0];}else{var _2a=d._getModulePrefix(_29);if(_2a!=_29){_28.splice(0,i,_2a);break;}}}return _28;};dojo._global_omit_module_check=false;dojo.loadInit=function(_2b){_2b();};dojo._loadModule=dojo.require=function(_2c,_2d){_2d=d._global_omit_module_check||_2d;var _2e=d._loadedModules[_2c];if(_2e){return _2e;}var _2f=d._getModuleSymbols(_2c).join("/")+".js";var _30=!_2d?_2c:null;var ok=d._loadPath(_2f,_30);if(!ok&&!_2d){throw new Error("Could not load '"+_2c+"'; last tried '"+_2f+"'");}if(!_2d&&!d._isXDomain){_2e=d._loadedModules[_2c];if(!_2e){throw new Error("symbol '"+_2c+"' is not defined after loading '"+_2f+"'");}}return _2e;};dojo.provide=function(_31){_31=_31+"";return (d._loadedModules[_31]=d.getObject(_31,true));};dojo.platformRequire=function(_32){var _33=_32.common||[];var _34=_33.concat(_32[d._name]||_32["default"]||[]);for(var x=0;x<_34.length;x++){var _35=_34[x];if(_35.constructor==Array){d._loadModule.apply(d,_35);}else{d._loadModule(_35);}}};dojo.requireIf=function(_36,_37){if(_36===true){var _38=[];for(var i=1;i<arguments.length;i++){_38.push(arguments[i]);}d.require.apply(d,_38);}};dojo.requireAfterIf=d.requireIf;dojo.registerModulePath=function(_39,_3a){d._modulePrefixes[_39]={name:_39,value:_3a};};dojo.requireLocalization=function(_3b,_3c,_3d,_3e){d.require("dojo.i18n");d.i18n._requireLocalization.apply(d.hostenv,arguments);};var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");dojo._Url=function(){var n=null,_3f=arguments,uri=[_3f[0]];for(var i=1;i<_3f.length;i++){if(!_3f[i]){continue;}var _40=new d._Url(_3f[i]+""),_41=new d._Url(uri[0]+"");if(_40.path==""&&!_40.scheme&&!_40.authority&&!_40.query){if(_40.fragment!=n){_41.fragment=_40.fragment;}_40=_41;}else{if(!_40.scheme){_40.scheme=_41.scheme;if(!_40.authority){_40.authority=_41.authority;if(_40.path.charAt(0)!="/"){var _42=_41.path.substring(0,_41.path.lastIndexOf("/")+1)+_40.path;var _43=_42.split("/");for(var j=0;j<_43.length;j++){if(_43[j]=="."){if(j==_43.length-1){_43[j]="";}else{_43.splice(j,1);j--;}}else{if(j>0&&!(j==1&&_43[0]=="")&&_43[j]==".."&&_43[j-1]!=".."){if(j==(_43.length-1)){_43.splice(j,1);_43[j-1]="";}else{_43.splice(j-1,2);j-=2;}}}}_40.path=_43.join("/");}}}}uri=[];if(_40.scheme){uri.push(_40.scheme,":");}if(_40.authority){uri.push("//",_40.authority);}uri.push(_40.path);if(_40.query){uri.push("?",_40.query);}if(_40.fragment){uri.push("#",_40.fragment);}}this.uri=uri.join("");var r=this.uri.match(ore);this.scheme=r[2]||(r[1]?"":n);this.authority=r[4]||(r[3]?"":n);this.path=r[5];this.query=r[7]||(r[6]?"":n);this.fragment=r[9]||(r[8]?"":n);if(this.authority!=n){r=this.authority.match(ire);this.user=r[3]||n;this.password=r[4]||n;this.host=r[6]||r[7];this.port=r[9]||n;}};dojo._Url.prototype.toString=function(){return this.uri;};dojo.moduleUrl=function(_44,url){var loc=d._getModuleSymbols(_44).join("/");if(!loc){return null;}if(loc.lastIndexOf("/")!=loc.length-1){loc+="/";}var _45=loc.indexOf(":");if(loc.charAt(0)!="/"&&(_45==-1||_45>loc.indexOf("/"))){loc=d.baseUrl+loc;}return new d._Url(loc,url);};})();if(typeof window!="undefined"){dojo.isBrowser=true;dojo._name="browser";(function(){var d=dojo;if(document&&document.getElementsByTagName){var _46=document.getElementsByTagName("script");var _47=/dojo(\.xd)?\.js(\W|$)/i;for(var i=0;i<_46.length;i++){var src=_46[i].getAttribute("src");if(!src){continue;}var m=src.match(_47);if(m){if(!d.config.baseUrl){d.config.baseUrl=src.substring(0,m.index);}var cfg=_46[i].getAttribute("djConfig");if(cfg){var _48=eval("({ "+cfg+" })");for(var x in _48){dojo.config[x]=_48[x];}}break;}}}d.baseUrl=d.config.baseUrl;var n=navigator;var dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);if(dua.indexOf("Opera")>=0){d.isOpera=tv;}if(dua.indexOf("AdobeAIR")>=0){d.isAIR=1;}d.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:0;d.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;d.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;d.isMac=dav.indexOf("Macintosh")>=0;var _49=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_49&&!dojo.isChrome){d.isSafari=parseFloat(dav.split("Version/")[1]);if(!d.isSafari||parseFloat(dav.substr(_49+7))<=419.3){d.isSafari=2;}}if(dua.indexOf("Gecko")>=0&&!d.isKhtml&&!d.isWebKit){d.isMozilla=d.isMoz=tv;}if(d.isMoz){d.isFF=parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined;}if(document.all&&!d.isOpera){d.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;var _4a=document.documentMode;if(_4a&&_4a!=5&&Math.floor(d.isIE)!=_4a){d.isIE=_4a;}}if(dojo.isIE&&window.location.protocol==="file:"){dojo.config.ieForceActiveXXhr=true;}d.isQuirks=document.compatMode=="BackCompat";d.locale=dojo.config.locale||(d.isIE?n.userLanguage:n.language).toLowerCase();d._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];d._xhrObj=function(){var _4b,_4c;if(!dojo.isIE||!dojo.config.ieForceActiveXXhr){try{_4b=new XMLHttpRequest();}catch(e){}}if(!_4b){for(var i=0;i<3;++i){var _4d=d._XMLHTTP_PROGIDS[i];try{_4b=new ActiveXObject(_4d);}catch(e){_4c=e;}if(_4b){d._XMLHTTP_PROGIDS=[_4d];break;}}}if(!_4b){throw new Error("XMLHTTP not available: "+_4c);}return _4b;};d._isDocumentOk=function(_4e){var _4f=_4e.status||0,lp=location.protocol;return (_4f>=200&&_4f<300)||_4f==304||_4f==1223||(!_4f&&(lp=="file:"||lp=="chrome:"||lp=="app:"));};var _50=window.location+"";var _51=document.getElementsByTagName("base");var _52=(_51&&_51.length>0);d._getText=function(uri,_53){var _54=d._xhrObj();if(!_52&&dojo._Url){uri=(new dojo._Url(_50,uri)).toString();}if(d.config.cacheBust){uri+="";uri+=(uri.indexOf("?")==-1?"?":"&")+String(d.config.cacheBust).replace(/\W+/g,"");}_54.open("GET",uri,false);try{_54.send(null);if(!d._isDocumentOk(_54)){var err=Error("Unable to load "+uri+" status:"+_54.status);err.status=_54.status;err.responseText=_54.responseText;throw err;}}catch(e){if(_53){return null;}throw e;}return _54.responseText;};var _55=window;var _56=function(_57,fp){var _58=_55.attachEvent||_55.addEventListener;_57=_55.attachEvent?_57:_57.substring(2);_58(_57,function(){fp.apply(_55,arguments);},false);};d._windowUnloaders=[];d.windowUnloaded=function(){var mll=d._windowUnloaders;while(mll.length){(mll.pop())();}};var _59=0;d.addOnWindowUnload=function(obj,_5a){d._onto(d._windowUnloaders,obj,_5a);if(!_59){_59=1;_56("onunload",d.windowUnloaded);}};var _5b=0;d.addOnUnload=function(obj,_5c){d._onto(d._unloaders,obj,_5c);if(!_5b){_5b=1;_56("onbeforeunload",dojo.unloaded);}};})();dojo._initFired=false;dojo._loadInit=function(e){if(!dojo._initFired){dojo._initFired=true;if(!dojo.config.afterOnLoad&&window.detachEvent){window.detachEvent("onload",dojo._loadInit);}if(dojo._inFlightCount==0){dojo._modulesLoaded();}}};if(!dojo.config.afterOnLoad){if(document.addEventListener){document.addEventListener("DOMContentLoaded",dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false);}else{if(window.attachEvent){window.attachEvent("onload",dojo._loadInit);}}}if(dojo.isIE){if(!dojo.config.afterOnLoad&&!dojo.config.skipIeDomLoaded){document.write("<scr"+"ipt defer src=\"//:\" "+"onreadystatechange=\"if(this.readyState=='complete'){"+dojo._scopeName+"._loadInit();}\">"+"</scr"+"ipt>");}try{document.namespaces.add("v","urn:schemas-microsoft-com:vml");var _5d=["*","group","roundrect","oval","shape","rect","imagedata"],i=0,l=1,s=document.createStyleSheet();if(dojo.isIE>=8){i=1;l=_5d.length;}for(;i<l;++i){s.addRule("v\\:"+_5d[i],"behavior:url(#default#VML); display:inline-block");}}catch(e){}}}(function(){var mp=dojo.config["modulePaths"];if(mp){for(var _5e in mp){dojo.registerModulePath(_5e,mp[_5e]);}}})();if(dojo.config.isDebug){dojo.require("dojo._firebug.firebug");}if(dojo.config.debugAtAllCosts){dojo.config.useXDomain=true;dojo.require("dojo._base._loader.loader_xd");dojo.require("dojo._base._loader.loader_debug");dojo.require("dojo.i18n");}if(!dojo._hasResource["dojo._base.lang"]){dojo._hasResource["dojo._base.lang"]=true;dojo.provide("dojo._base.lang");(function(){var d=dojo,_5f=Object.prototype.toString;dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=function(it){return _5f.call(it)==="[object Function]";};dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||d.isArray(it)||d.isFunction(it));};dojo.isArrayLike=function(it){return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!d.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.extend=function(_60,_61){for(var i=1,l=arguments.length;i<l;i++){d._mixin(_60.prototype,arguments[i]);}return _60;};dojo._hitchArgs=function(_62,_63){var pre=d._toArray(arguments,2);var _64=d.isString(_63);return function(){var _65=d._toArray(arguments);var f=_64?(_62||d.global)[_63]:_63;return f&&f.apply(_62||this,pre.concat(_65));};};dojo.hitch=function(_66,_67){if(arguments.length>2){return d._hitchArgs.apply(d,arguments);}if(!_67){_67=_66;_66=null;}if(d.isString(_67)){_66=_66||d.global;if(!_66[_67]){throw (["dojo.hitch: scope[\"",_67,"\"] is null (scope=\"",_66,"\")"].join(""));}return function(){return _66[_67].apply(_66,arguments||[]);};}return !_66?_67:function(){return _67.apply(_66,arguments||[]);};};dojo.delegate=dojo._delegate=(function(){function TMP(){};return function(obj,_68){TMP.prototype=obj;var tmp=new TMP();TMP.prototype=null;if(_68){d._mixin(tmp,_68);}return tmp;};})();var _69=function(obj,_6a,_6b){return (_6b||[]).concat(Array.prototype.slice.call(obj,_6a||0));};var _6c=function(obj,_6d,_6e){var arr=_6e||[];for(var x=_6d||0;x<obj.length;x++){arr.push(obj[x]);}return arr;};dojo._toArray=d.isIE?function(obj){return ((obj.item)?_6c:_69).apply(this,arguments);}:_69;dojo.partial=function(_6f){var arr=[null];return d.hitch.apply(d,arr.concat(d._toArray(arguments)));};var _70=d._extraNames,_71=_70.length,_72={};dojo.clone=function(o){if(!o||typeof o!="object"||d.isFunction(o)){return o;}if(o.nodeType&&o.cloneNode){return o.cloneNode(true);}if(o instanceof Date){return new Date(o.getTime());}var r,i,l,s,_73;if(d.isArray(o)){r=[];for(i=0,l=o.length;i<l;++i){if(i in o){r.push(d.clone(o[i]));}}}else{r=o.constructor?new o.constructor():{};}for(_73 in o){s=o[_73];if(!(_73 in r)||(r[_73]!==s&&(!(_73 in _72)||_72[_73]!==s))){r[_73]=d.clone(s);}}if(_71){for(i=0;i<_71;++i){_73=_70[i];s=o[_73];if(!(_73 in r)||(r[_73]!==s&&(!(_73 in _72)||_72[_73]!==s))){r[_73]=s;}}}return r;};dojo.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};var _74=/\{([^\}]+)\}/g;dojo.replace=function(_75,map,_76){return _75.replace(_76||_74,d.isFunction(map)?map:function(_77,k){return d.getObject(k,false,map);});};})();}if(!dojo._hasResource["dojo._base.array"]){dojo._hasResource["dojo._base.array"]=true;dojo.provide("dojo._base.array");(function(){var _78=function(arr,obj,cb){return [(typeof arr=="string")?arr.split(""):arr,obj||dojo.global,(typeof cb=="string")?new Function("item","index","array",cb):cb];};var _79=function(_7a,arr,_7b,_7c){var _7d=_78(arr,_7c,_7b);arr=_7d[0];for(var i=0,l=arr.length;i<l;++i){var _7e=!!_7d[2].call(_7d[1],arr[i],i,arr);if(_7a^_7e){return _7e;}}return _7a;};dojo.mixin(dojo,{indexOf:function(_7f,_80,_81,_82){var _83=1,end=_7f.length||0,i=0;if(_82){i=end-1;_83=end=-1;}if(_81!=undefined){i=_81;}if((_82&&i>end)||i<end){for(;i!=end;i+=_83){if(_7f[i]==_80){return i;}}}return -1;},lastIndexOf:function(_84,_85,_86){return dojo.indexOf(_84,_85,_86,true);},forEach:function(arr,_87,_88){if(!arr||!arr.length){return;}var _89=_78(arr,_88,_87);arr=_89[0];for(var i=0,l=arr.length;i<l;++i){_89[2].call(_89[1],arr[i],i,arr);}},every:function(arr,_8a,_8b){return _79(true,arr,_8a,_8b);},some:function(arr,_8c,_8d){return _79(false,arr,_8c,_8d);},map:function(arr,_8e,_8f){var _90=_78(arr,_8f,_8e);arr=_90[0];var _91=(arguments[3]?(new arguments[3]()):[]);for(var i=0,l=arr.length;i<l;++i){_91.push(_90[2].call(_90[1],arr[i],i,arr));}return _91;},filter:function(arr,_92,_93){var _94=_78(arr,_93,_92);arr=_94[0];var _95=[];for(var i=0,l=arr.length;i<l;++i){if(_94[2].call(_94[1],arr[i],i,arr)){_95.push(arr[i]);}}return _95;}});})();}if(!dojo._hasResource["dojo._base.declare"]){dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");(function(){var d=dojo,mix=d._mixin,op=Object.prototype,_96=op.toString,_97=new Function,_98=0,_99="constructor";function err(msg){throw new Error("declare: "+msg);};function _9a(_9b){var _9c=[],_9d=[{cls:0,refs:[]}],_9e={},_9f=1,l=_9b.length,i=0,j,lin,_a0,top,_a1,rec,_a2,_a3;for(;i<l;++i){_a0=_9b[i];if(!_a0){err("mixin #"+i+" is null");}lin=_a0._meta?_a0._meta.bases:[_a0];top=0;for(j=lin.length-1;j>=0;--j){_a1=lin[j].prototype;if(!_a1.hasOwnProperty("declaredClass")){_a1.declaredClass="uniqName_"+(_98++);}_a2=_a1.declaredClass;if(!_9e.hasOwnProperty(_a2)){_9e[_a2]={count:0,refs:[],cls:lin[j]};++_9f;}rec=_9e[_a2];if(top&&top!==rec){rec.refs.push(top);++top.count;}top=rec;}++top.count;_9d[0].refs.push(top);}while(_9d.length){top=_9d.pop();_9c.push(top.cls);--_9f;while(_a3=top.refs,_a3.length==1){top=_a3[0];if(!top||--top.count){top=0;break;}_9c.push(top.cls);--_9f;}if(top){for(i=0,l=_a3.length;i<l;++i){top=_a3[i];if(!--top.count){_9d.push(top);}}}}if(_9f){err("can't build consistent linearization");}_a0=_9b[0];_9c[0]=_a0?_a0._meta&&_a0===_9c[_9c.length-_a0._meta.bases.length]?_a0._meta.bases.length:1:0;return _9c;};function _a4(_a5,a,f){var _a6,_a7,_a8,_a9,_aa,_ab,_ac,opf,pos,_ad=this._inherited=this._inherited||{};if(typeof _a5=="string"){_a6=_a5;_a5=a;a=f;}f=0;_a9=_a5.callee;_a6=_a6||_a9.nom;if(!_a6){err("can't deduce a name to call inherited()");}_aa=this.constructor._meta;_a8=_aa.bases;pos=_ad.p;if(_a6!=_99){if(_ad.c!==_a9){pos=0;_ab=_a8[0];_aa=_ab._meta;if(_aa.hidden[_a6]!==_a9){_a7=_aa.chains;if(_a7&&typeof _a7[_a6]=="string"){err("calling chained method with inherited: "+_a6);}do{_aa=_ab._meta;_ac=_ab.prototype;if(_aa&&(_ac[_a6]===_a9&&_ac.hasOwnProperty(_a6)||_aa.hidden[_a6]===_a9)){break;}}while(_ab=_a8[++pos]);pos=_ab?pos:-1;}}_ab=_a8[++pos];if(_ab){_ac=_ab.prototype;if(_ab._meta&&_ac.hasOwnProperty(_a6)){f=_ac[_a6];}else{opf=op[_a6];do{_ac=_ab.prototype;f=_ac[_a6];if(f&&(_ab._meta?_ac.hasOwnProperty(_a6):f!==opf)){break;}}while(_ab=_a8[++pos]);}}f=_ab&&f||op[_a6];}else{if(_ad.c!==_a9){pos=0;_aa=_a8[0]._meta;if(_aa&&_aa.ctor!==_a9){_a7=_aa.chains;if(!_a7||_a7.constructor!=="manual"){err("calling chained constructor with inherited");}while(_ab=_a8[++pos]){_aa=_ab._meta;if(_aa&&_aa.ctor===_a9){break;}}pos=_ab?pos:-1;}}while(_ab=_a8[++pos]){_aa=_ab._meta;f=_aa?_aa.ctor:_ab;if(f){break;}}f=_ab&&f;}_ad.c=f;_ad.p=pos;if(f){return a===true?f:f.apply(this,a||_a5);}};function _ae(_af,_b0){if(typeof _af=="string"){return this.inherited(_af,_b0,true);}return this.inherited(_af,true);};function _b1(cls){var _b2=this.constructor._meta.bases;for(var i=0,l=_b2.length;i<l;++i){if(_b2[i]===cls){return true;}}return this instanceof cls;};function _b3(_b4,_b5){var _b6,t,i=0,l=d._extraNames.length;for(_b6 in _b5){t=_b5[_b6];if((t!==op[_b6]||!(_b6 in op))&&_b6!=_99){if(_96.call(t)=="[object Function]"){t.nom=_b6;}_b4[_b6]=t;}}for(;i<l;++i){_b6=d._extraNames[i];t=_b5[_b6];if((t!==op[_b6]||!(_b6 in op))&&_b6!=_99){if(_96.call(t)=="[object Function]"){t.nom=_b6;}_b4[_b6]=t;}}return _b4;};function _b7(_b8){_b3(this.prototype,_b8);return this;};function _b9(_ba,_bb){return function(){var a=arguments,_bc=a,a0=a[0],f,i,m,l=_ba.length,_bd;if(_bb&&(a0&&a0.preamble||this.preamble)){_bd=new Array(_ba.length);_bd[0]=a;for(i=0;;){a0=a[0];if(a0){f=a0.preamble;if(f){a=f.apply(this,a)||a;}}f=_ba[i].prototype;f=f.hasOwnProperty("preamble")&&f.preamble;if(f){a=f.apply(this,a)||a;}if(++i==l){break;}_bd[i]=a;}}for(i=l-1;i>=0;--i){f=_ba[i];m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,_bd?_bd[i]:a);}}f=this.postscript;if(f){f.apply(this,_bc);}};};function _be(_bf,_c0){return function(){var a=arguments,t=a,a0=a[0],f;if(_c0){if(a0){f=a0.preamble;if(f){t=f.apply(this,t)||t;}}f=this.preamble;if(f){f.apply(this,t);}}if(_bf){_bf.apply(this,a);}f=this.postscript;if(f){f.apply(this,a);}};};function _c1(_c2){return function(){var a=arguments,i=0,f;for(;f=_c2[i];++i){m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,a);break;}}f=this.postscript;if(f){f.apply(this,a);}};};function _c3(_c4,_c5,_c6){return function(){var b,m,f,i=0,_c7=1;if(_c6){i=_c5.length-1;_c7=-1;}for(;b=_c5[i];i+=_c7){m=b._meta;f=(m?m.hidden:b.prototype)[_c4];if(f){f.apply(this,arguments);}}};};d.declare=function(_c8,_c9,_ca){var _cb,i,t,_cc,_cd,_ce,_cf,_d0=1,_d1=_c9;if(typeof _c8!="string"){_ca=_c9;_c9=_c8;_c8="";}_ca=_ca||{};if(_96.call(_c9)=="[object Array]"){_ce=_9a(_c9);t=_ce[0];_d0=_ce.length-t;_c9=_ce[_d0];}else{_ce=[0];if(_c9){t=_c9._meta;_ce=_ce.concat(t?t.bases:_c9);}}if(_c9){for(i=_d0-1;;--i){_97.prototype=_c9.prototype;_cb=new _97;if(!i){break;}t=_ce[i];mix(_cb,t._meta?t._meta.hidden:t.prototype);_cc=new Function;_cc.superclass=_c9;_cc.prototype=_cb;_c9=_cb.constructor=_cc;}}else{_cb={};}_b3(_cb,_ca);t=_ca.constructor;if(t!==op.constructor){t.nom=_99;_cb.constructor=t;}_97.prototype=0;for(i=_d0-1;i;--i){t=_ce[i]._meta;if(t&&t.chains){_cf=mix(_cf||{},t.chains);}}if(_cb["-chains-"]){_cf=mix(_cf||{},_cb["-chains-"]);}t=!_cf||!_cf.hasOwnProperty(_99);_ce[0]=_cc=(_cf&&_cf.constructor==="manual")?_c1(_ce):(_ce.length==1?_be(_ca.constructor,t):_b9(_ce,t));_cc._meta={bases:_ce,hidden:_ca,chains:_cf,parents:_d1,ctor:_ca.constructor};_cc.superclass=_c9&&_c9.prototype;_cc.extend=_b7;_cc.prototype=_cb;_cb.constructor=_cc;_cb.getInherited=_ae;_cb.inherited=_a4;_cb.isInstanceOf=_b1;if(_c8){_cb.declaredClass=_c8;d.setObject(_c8,_cc);}if(_cf){for(_cd in _cf){if(_cb[_cd]&&typeof _cf[_cd]=="string"&&_cd!=_99){t=_cb[_cd]=_c3(_cd,_ce,_cf[_cd]==="after");t.nom=_cd;}}}return _cc;};d.safeMixin=_b3;})();}if(!dojo._hasResource["dojo._base.connect"]){dojo._hasResource["dojo._base.connect"]=true;dojo.provide("dojo._base.connect");dojo._listener={getDispatcher:function(){return function(){var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target;var r=t&&t.apply(this,arguments);var lls;lls=[].concat(ls);for(var i in lls){if(!(i in ap)){lls[i].apply(this,arguments);}}return r;};},add:function(_d2,_d3,_d4){_d2=_d2||dojo.global;var f=_d2[_d3];if(!f||!f._listeners){var d=dojo._listener.getDispatcher();d.target=f;d._listeners=[];f=_d2[_d3]=d;}return f._listeners.push(_d4);},remove:function(_d5,_d6,_d7){var f=(_d5||dojo.global)[_d6];if(f&&f._listeners&&_d7--){delete f._listeners[_d7];}}};dojo.connect=function(obj,_d8,_d9,_da,_db){var a=arguments,_dc=[],i=0;_dc.push(dojo.isString(a[0])?null:a[i++],a[i++]);var a1=a[i+1];_dc.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);for(var l=a.length;i<l;i++){_dc.push(a[i]);}return dojo._connect.apply(this,_dc);};dojo._connect=function(obj,_dd,_de,_df){var l=dojo._listener,h=l.add(obj,_dd,dojo.hitch(_de,_df));return [obj,_dd,h,l];};dojo.disconnect=function(_e0){if(_e0&&_e0[0]!==undefined){dojo._disconnect.apply(this,_e0);delete _e0[0];}};dojo._disconnect=function(obj,_e1,_e2,_e3){_e3.remove(obj,_e1,_e2);};dojo._topics={};dojo.subscribe=function(_e4,_e5,_e6){return [_e4,dojo._listener.add(dojo._topics,_e4,dojo.hitch(_e5,_e6))];};dojo.unsubscribe=function(_e7){if(_e7){dojo._listener.remove(dojo._topics,_e7[0],_e7[1]);}};dojo.publish=function(_e8,_e9){var f=dojo._topics[_e8];if(f){f.apply(this,_e9||[]);}};dojo.connectPublisher=function(_ea,obj,_eb){var pf=function(){dojo.publish(_ea,arguments);};return (_eb)?dojo.connect(obj,_eb,pf):dojo.connect(obj,pf);};}if(!dojo._hasResource["dojo._base.Deferred"]){dojo._hasResource["dojo._base.Deferred"]=true;dojo.provide("dojo._base.Deferred");dojo.Deferred=function(_ec){this.chain=[];this.id=this._nextId();this.fired=-1;this.paused=0;this.results=[null,null];this.canceller=_ec;this.silentlyCancelled=false;this.isFiring=false;};dojo.extend(dojo.Deferred,{_nextId:(function(){var n=1;return function(){return n++;};})(),cancel:function(){var err;if(this.fired==-1){if(this.canceller){err=this.canceller(this);}else{this.silentlyCancelled=true;}if(this.fired==-1){if(!(err instanceof Error)){var res=err;var msg="Deferred Cancelled";if(err&&err.toString){msg+=": "+err.toString();}err=new Error(msg);err.dojoType="cancel";err.cancelResult=res;}this.errback(err);}}else{if((this.fired==0)&&(this.results[0] instanceof dojo.Deferred)){this.results[0].cancel();}}},_resback:function(res){this.fired=((res instanceof Error)?1:0);this.results[this.fired]=res;this._fire();},_check:function(){if(this.fired!=-1){if(!this.silentlyCancelled){throw new Error("already called!");}this.silentlyCancelled=false;return;}},callback:function(res){this._check();this._resback(res);},errback:function(res){this._check();if(!(res instanceof Error)){res=new Error(res);}this._resback(res);},addBoth:function(cb,_ed){var _ee=dojo.hitch.apply(dojo,arguments);return this.addCallbacks(_ee,_ee);},addCallback:function(cb,_ef){return this.addCallbacks(dojo.hitch.apply(dojo,arguments));},addErrback:function(cb,_f0){return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments));},addCallbacks:function(cb,eb){this.chain.push([cb,eb]);if(this.fired>=0&&!this.isFiring){this._fire();}return this;},_fire:function(){this.isFiring=true;var _f1=this.chain;var _f2=this.fired;var res=this.results[_f2];var _f3=this;var cb=null;while((_f1.length>0)&&(this.paused==0)){var f=_f1.shift()[_f2];if(!f){continue;}var _f4=function(){var ret=f(res);if(typeof ret!="undefined"){res=ret;}_f2=((res instanceof Error)?1:0);if(res instanceof dojo.Deferred){cb=function(res){_f3._resback(res);_f3.paused--;if((_f3.paused==0)&&(_f3.fired>=0)){_f3._fire();}};this.paused++;}};if(dojo.config.debugAtAllCosts){_f4.call(this);}else{try{_f4.call(this);}catch(err){_f2=1;res=err;}}}this.fired=_f2;this.results[_f2]=res;this.isFiring=false;if((cb)&&(this.paused)){res.addBoth(cb);}}});}if(!dojo._hasResource["dojo._base.json"]){dojo._hasResource["dojo._base.json"]=true;dojo.provide("dojo._base.json");dojo.fromJson=function(_f5){return eval("("+_f5+")");};dojo._escapeString=function(str){return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");};dojo.toJsonIndentStr="\t";dojo.toJson=function(it,_f6,_f7){if(it===undefined){return "undefined";}var _f8=typeof it;if(_f8=="number"||_f8=="boolean"){return it+"";}if(it===null){return "null";}if(dojo.isString(it)){return dojo._escapeString(it);}var _f9=arguments.callee;var _fa;_f7=_f7||"";var _fb=_f6?_f7+dojo.toJsonIndentStr:"";var tf=it.__json__||it.json;if(dojo.isFunction(tf)){_fa=tf.call(it);if(it!==_fa){return _f9(_fa,_f6,_fb);}}if(it.nodeType&&it.cloneNode){throw new Error("Can't serialize DOM nodes");}var sep=_f6?" ":"";var _fc=_f6?"\n":"";if(dojo.isArray(it)){var res=dojo.map(it,function(obj){var val=_f9(obj,_f6,_fb);if(typeof val!="string"){val="undefined";}return _fc+_fb+val;});return "["+res.join(","+sep)+_fc+_f7+"]";}if(_f8=="function"){return null;}var _fd=[],key;for(key in it){var _fe,val;if(typeof key=="number"){_fe="\""+key+"\"";}else{if(typeof key=="string"){_fe=dojo._escapeString(key);}else{continue;}}val=_f9(it[key],_f6,_fb);if(typeof val!="string"){continue;}_fd.push(_fc+_fb+_fe+":"+sep+val);}return "{"+_fd.join(","+sep)+_fc+_f7+"}";};}if(!dojo._hasResource["dojo._base.Color"]){dojo._hasResource["dojo._base.Color"]=true;dojo.provide("dojo._base.Color");(function(){var d=dojo;dojo.Color=function(_ff){if(_ff){this.setColor(_ff);}};dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:d.config.transparentColor||[255,255,255]};dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){var t=this;t.r=r;t.g=g;t.b=b;t.a=a;},setColor:function(_100){if(d.isString(_100)){d.colorFromString(_100,this);}else{if(d.isArray(_100)){d.colorFromArray(_100,this);}else{this._set(_100.r,_100.g,_100.b,_100.a);if(!(_100 instanceof d.Color)){this.sanitize();}}}return this;},sanitize:function(){return this;},toRgb:function(){var t=this;return [t.r,t.g,t.b];},toRgba:function(){var t=this;return [t.r,t.g,t.b,t.a];},toHex:function(){var arr=d.map(["r","g","b"],function(x){var s=this[x].toString(16);return s.length<2?"0"+s:s;},this);return "#"+arr.join("");},toCss:function(_101){var t=this,rgb=t.r+", "+t.g+", "+t.b;return (_101?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";},toString:function(){return this.toCss(true);}});dojo.blendColors=function(_102,end,_103,obj){var t=obj||new d.Color();d.forEach(["r","g","b","a"],function(x){t[x]=_102[x]+(end[x]-_102[x])*_103;if(x!="a"){t[x]=Math.round(t[x]);}});return t.sanitize();};dojo.colorFromRgb=function(_104,obj){var m=_104.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return m&&dojo.colorFromArray(m[1].split(/\s*,\s*/),obj);};dojo.colorFromHex=function(_105,obj){var t=obj||new d.Color(),bits=(_105.length==4)?4:8,mask=(1<<bits)-1;_105=Number("0x"+_105.substr(1));if(isNaN(_105)){return null;}d.forEach(["b","g","r"],function(x){var c=_105&mask;_105>>=bits;t[x]=bits==4?17*c:c;});t.a=1;return t;};dojo.colorFromArray=function(a,obj){var t=obj||new d.Color();t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));if(isNaN(t.a)){t.a=1;}return t.sanitize();};dojo.colorFromString=function(str,obj){var a=d.Color.named[str];return a&&d.colorFromArray(a,obj)||d.colorFromRgb(str,obj)||d.colorFromHex(str,obj);};})();}if(!dojo._hasResource["dojo._base"]){dojo._hasResource["dojo._base"]=true;dojo.provide("dojo._base");}if(!dojo._hasResource["dojo._base.window"]){dojo._hasResource["dojo._base.window"]=true;dojo.provide("dojo._base.window");dojo.doc=window["document"]||null;dojo.body=function(){return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0];};dojo.setContext=function(_106,_107){dojo.global=_106;dojo.doc=_107;};dojo.withGlobal=function(_108,_109,_10a,_10b){var _10c=dojo.global;try{dojo.global=_108;return dojo.withDoc.call(null,_108.document,_109,_10a,_10b);}finally{dojo.global=_10c;}};dojo.withDoc=function(_10d,_10e,_10f,_110){var _111=dojo.doc,_112=dojo._bodyLtr,oldQ=dojo.isQuirks;try{dojo.doc=_10d;delete dojo._bodyLtr;dojo.isQuirks=dojo.doc.compatMode=="BackCompat";if(_10f&&typeof _10e=="string"){_10e=_10f[_10e];}return _10e.apply(_10f,_110||[]);}finally{dojo.doc=_111;delete dojo._bodyLtr;if(_112!==undefined){dojo._bodyLtr=_112;}dojo.isQuirks=oldQ;}};}if(!dojo._hasResource["dojo._base.event"]){dojo._hasResource["dojo._base.event"]=true;dojo.provide("dojo._base.event");(function(){var del=(dojo._event_listener={add:function(node,name,fp){if(!node){return;}name=del._normalizeEventName(name);fp=del._fixCallback(name,fp);var _113=name;if(!dojo.isIE&&(name=="mouseenter"||name=="mouseleave")){var ofp=fp;name=(name=="mouseenter")?"mouseover":"mouseout";fp=function(e){if(!dojo.isDescendant(e.relatedTarget,node)){return ofp.call(this,e);}};}node.addEventListener(name,fp,false);return fp;},remove:function(node,_114,_115){if(node){_114=del._normalizeEventName(_114);if(!dojo.isIE&&(_114=="mouseenter"||_114=="mouseleave")){_114=(_114=="mouseenter")?"mouseover":"mouseout";}node.removeEventListener(_114,_115,false);}},_normalizeEventName:function(name){return name.slice(0,2)=="on"?name.slice(2):name;},_fixCallback:function(name,fp){return name!="keypress"?fp:function(e){return fp.call(this,del._fixEvent(e,this));};},_fixEvent:function(evt,_116){switch(evt.type){case "keypress":del._setKeyChar(evt);break;}return evt;},_setKeyChar:function(evt){evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";evt.charOrCode=evt.keyChar||evt.keyCode;},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39}});dojo.fixEvent=function(evt,_117){return del._fixEvent(evt,_117);};dojo.stopEvent=function(evt){evt.preventDefault();evt.stopPropagation();};var _118=dojo._listener;dojo._connect=function(obj,_119,_11a,_11b,_11c){var _11d=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);var lid=_11d?(_11c?2:1):0,l=[dojo._listener,del,_118][lid];var h=l.add(obj,_119,dojo.hitch(_11a,_11b));return [obj,_119,h,lid];};dojo._disconnect=function(obj,_11e,_11f,_120){([dojo._listener,del,_118][_120]).remove(obj,_11e,_11f);};dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:dojo.isSafari?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,copyKey:dojo.isMac&&!dojo.isAIR?(dojo.isSafari?91:224):17};var _121=dojo.isMac?"metaKey":"ctrlKey";dojo.isCopyKey=function(e){return e[_121];};if(dojo.isIE){dojo.mouseButtons={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_122){return e.button&_122;},isLeft:function(e){return e.button&1;},isMiddle:function(e){return e.button&4;},isRight:function(e){return e.button&2;}};}else{dojo.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_123){return e.button==_123;},isLeft:function(e){return e.button==0;},isMiddle:function(e){return e.button==1;},isRight:function(e){return e.button==2;}};}if(dojo.isIE){var _124=function(e,code){try{return (e.keyCode=code);}catch(e){return 0;}};var iel=dojo._listener;var _125=(dojo._ieListenersName="_"+dojo._scopeName+"_listeners");if(!dojo.config._allow_leaks){_118=iel=dojo._ie_listener={handlers:[],add:function(_126,_127,_128){_126=_126||dojo.global;var f=_126[_127];if(!f||!f[_125]){var d=dojo._getIeDispatcher();d.target=f&&(ieh.push(f)-1);d[_125]=[];f=_126[_127]=d;}return f[_125].push(ieh.push(_128)-1);},remove:function(_129,_12a,_12b){var f=(_129||dojo.global)[_12a],l=f&&f[_125];if(f&&l&&_12b--){delete ieh[l[_12b]];delete l[_12b];}}};var ieh=iel.handlers;}dojo.mixin(del,{add:function(node,_12c,fp){if(!node){return;}_12c=del._normalizeEventName(_12c);if(_12c=="onkeypress"){var kd=node.onkeydown;if(!kd||!kd[_125]||!kd._stealthKeydownHandle){var h=del.add(node,"onkeydown",del._stealthKeyDown);kd=node.onkeydown;kd._stealthKeydownHandle=h;kd._stealthKeydownRefs=1;}else{kd._stealthKeydownRefs++;}}return iel.add(node,_12c,del._fixCallback(fp));},remove:function(node,_12d,_12e){_12d=del._normalizeEventName(_12d);iel.remove(node,_12d,_12e);if(_12d=="onkeypress"){var kd=node.onkeydown;if(--kd._stealthKeydownRefs<=0){iel.remove(node,"onkeydown",kd._stealthKeydownHandle);delete kd._stealthKeydownHandle;}}},_normalizeEventName:function(_12f){return _12f.slice(0,2)!="on"?"on"+_12f:_12f;},_nop:function(){},_fixEvent:function(evt,_130){if(!evt){var w=_130&&(_130.ownerDocument||_130.document||_130).parentWindow||window;evt=w.event;}if(!evt){return (evt);}evt.target=evt.srcElement;evt.currentTarget=(_130||evt.srcElement);evt.layerX=evt.offsetX;evt.layerY=evt.offsetY;var se=evt.srcElement,doc=(se&&se.ownerDocument)||document;var _131=((dojo.isIE<6)||(doc["compatMode"]=="BackCompat"))?doc.body:doc.documentElement;var _132=dojo._getIeDocumentElementOffset();evt.pageX=evt.clientX+dojo._fixIeBiDiScrollLeft(_131.scrollLeft||0)-_132.x;evt.pageY=evt.clientY+(_131.scrollTop||0)-_132.y;if(evt.type=="mouseover"){evt.relatedTarget=evt.fromElement;}if(evt.type=="mouseout"){evt.relatedTarget=evt.toElement;}evt.stopPropagation=del._stopPropagation;evt.preventDefault=del._preventDefault;return del._fixKeys(evt);},_fixKeys:function(evt){switch(evt.type){case "keypress":var c=("charCode" in evt?evt.charCode:evt.keyCode);if(c==10){c=0;evt.keyCode=13;}else{if(c==13||c==27){c=0;}else{if(c==3){c=99;}}}evt.charCode=c;del._setKeyChar(evt);break;}return evt;},_stealthKeyDown:function(evt){var kp=evt.currentTarget.onkeypress;if(!kp||!kp[_125]){return;}var k=evt.keyCode;var _133=k!=13&&k!=32&&k!=27&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_133||evt.ctrlKey){var c=_133?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if((!evt.shiftKey)&&(c>=65&&c<=90)){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});kp.call(evt.currentTarget,faux);evt.cancelBubble=faux.cancelBubble;evt.returnValue=faux.returnValue;_124(evt,faux.keyCode);}},_stopPropagation:function(){this.cancelBubble=true;},_preventDefault:function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey){_124(this,0);}this.returnValue=false;}});dojo.stopEvent=function(evt){evt=evt||window.event;del._stopPropagation.call(evt);del._preventDefault.call(evt);};}del._synthesizeEvent=function(evt,_134){var faux=dojo.mixin({},evt,_134);del._setKeyChar(faux);faux.preventDefault=function(){evt.preventDefault();};faux.stopPropagation=function(){evt.stopPropagation();};return faux;};if(dojo.isOpera){dojo.mixin(del,{_fixEvent:function(evt,_135){switch(evt.type){case "keypress":var c=evt.which;if(c==3){c=99;}c=c<41&&!evt.shiftKey?0:c;if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){c+=32;}return del._synthesizeEvent(evt,{charCode:c});}return evt;}});}if(dojo.isWebKit){del._add=del.add;del._remove=del.remove;dojo.mixin(del,{add:function(node,_136,fp){if(!node){return;}var _137=del._add(node,_136,fp);if(del._normalizeEventName(_136)=="keypress"){_137._stealthKeyDownHandle=del._add(node,"keydown",function(evt){var k=evt.keyCode;var _138=k!=13&&k!=32&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_138||evt.ctrlKey){var c=_138?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if(!evt.shiftKey&&c>=65&&c<=90){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});fp.call(evt.currentTarget,faux);}});}return _137;},remove:function(node,_139,_13a){if(node){if(_13a._stealthKeyDownHandle){del._remove(node,"keydown",_13a._stealthKeyDownHandle);}del._remove(node,_139,_13a);}},_fixEvent:function(evt,_13b){switch(evt.type){case "keypress":if(evt.faux){return evt;}var c=evt.charCode;c=c>=32?c:0;return del._synthesizeEvent(evt,{charCode:c,faux:true});}return evt;}});}})();if(dojo.isIE){dojo._ieDispatcher=function(args,_13c){var ap=Array.prototype,h=dojo._ie_listener.handlers,c=args.callee,ls=c[dojo._ieListenersName],t=h[c.target];var r=t&&t.apply(_13c,args);var lls=[].concat(ls);for(var i in lls){var f=h[lls[i]];if(!(i in ap)&&f){f.apply(_13c,args);}}return r;};dojo._getIeDispatcher=function(){return new Function(dojo._scopeName+"._ieDispatcher(arguments, this)");};dojo._event_listener._fixCallback=function(fp){var f=dojo._event_listener._fixEvent;return function(e){return fp.call(this,f(e,this));};};}}if(!dojo._hasResource["dojo._base.html"]){dojo._hasResource["dojo._base.html"]=true;dojo.provide("dojo._base.html");try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}if(dojo.isIE||dojo.isOpera){dojo.byId=function(id,doc){if(typeof id!="string"){return id;}var _13d=doc||dojo.doc,te=_13d.getElementById(id);if(te&&(te.attributes.id.value==id||te.id==id)){return te;}else{var eles=_13d.all[id];if(!eles||eles.nodeName){eles=[eles];}var i=0;while((te=eles[i++])){if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){return te;}}}};}else{dojo.byId=function(id,doc){return (typeof id=="string")?(doc||dojo.doc).getElementById(id):id;};}(function(){var d=dojo;var byId=d.byId;var _13e=null,_13f;d.addOnWindowUnload(function(){_13e=null;});dojo._destroyElement=dojo.destroy=function(node){node=byId(node);try{var doc=node.ownerDocument;if(!_13e||_13f!=doc){_13e=doc.createElement("div");_13f=doc;}_13e.appendChild(node.parentNode?node.parentNode.removeChild(node):node);_13e.innerHTML="";}catch(e){}};dojo.isDescendant=function(node,_140){try{node=byId(node);_140=byId(_140);while(node){if(node==_140){return true;}node=node.parentNode;}}catch(e){}return false;};dojo.setSelectable=function(node,_141){node=byId(node);if(d.isMozilla){node.style.MozUserSelect=_141?"":"none";}else{if(d.isKhtml||d.isWebKit){node.style.KhtmlUserSelect=_141?"auto":"none";}else{if(d.isIE){var v=(node.unselectable=_141?"":"on");d.query("*",node).forEach("item.unselectable = '"+v+"'");}}}};var _142=function(node,ref){var _143=ref.parentNode;if(_143){_143.insertBefore(node,ref);}};var _144=function(node,ref){var _145=ref.parentNode;if(_145){if(_145.lastChild==ref){_145.appendChild(node);}else{_145.insertBefore(node,ref.nextSibling);}}};dojo.place=function(node,_146,_147){_146=byId(_146);if(typeof node=="string"){node=node.charAt(0)=="<"?d._toDom(node,_146.ownerDocument):byId(node);}if(typeof _147=="number"){var cn=_146.childNodes;if(!cn.length||cn.length<=_147){_146.appendChild(node);}else{_142(node,cn[_147<0?0:_147]);}}else{switch(_147){case "before":_142(node,_146);break;case "after":_144(node,_146);break;case "replace":_146.parentNode.replaceChild(node,_146);break;case "only":d.empty(_146);_146.appendChild(node);break;case "first":if(_146.firstChild){_142(node,_146.firstChild);break;}default:_146.appendChild(node);}}return node;};dojo.boxModel="content-box";if(d.isIE){d.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";}var gcs;if(d.isWebKit){gcs=function(node){var s;if(node.nodeType==1){var dv=node.ownerDocument.defaultView;s=dv.getComputedStyle(node,null);if(!s&&node.style){node.style.display="";s=dv.getComputedStyle(node,null);}}return s||{};};}else{if(d.isIE){gcs=function(node){return node.nodeType==1?node.currentStyle:{};};}else{gcs=function(node){return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};};}}dojo.getComputedStyle=gcs;if(!d.isIE){d._toPixelValue=function(_148,_149){return parseFloat(_149)||0;};}else{d._toPixelValue=function(_14a,_14b){if(!_14b){return 0;}if(_14b=="medium"){return 4;}if(_14b.slice&&_14b.slice(-2)=="px"){return parseFloat(_14b);}with(_14a){var _14c=style.left;var _14d=runtimeStyle.left;runtimeStyle.left=currentStyle.left;try{style.left=_14b;_14b=style.pixelLeft;}catch(e){_14b=0;}style.left=_14c;runtimeStyle.left=_14d;}return _14b;};}var px=d._toPixelValue;var astr="DXImageTransform.Microsoft.Alpha";var af=function(n,f){try{return n.filters.item(astr);}catch(e){return f?{}:null;}};dojo._getOpacity=d.isIE?function(node){try{return af(node).Opacity/100;}catch(e){return 1;}}:function(node){return gcs(node).opacity;};dojo._setOpacity=d.isIE?function(node,_14e){var ov=_14e*100;node.style.zoom=1;af(node,1).Enabled=!(_14e==1);if(!af(node)){node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";}else{af(node,1).Opacity=ov;}if(node.nodeName.toLowerCase()=="tr"){d.query("> td",node).forEach(function(i){d._setOpacity(i,_14e);});}return _14e;}:function(node,_14f){return node.style.opacity=_14f;};var _150={left:true,top:true};var _151=/margin|padding|width|height|max|min|offset/;var _152=function(node,type,_153){type=type.toLowerCase();if(d.isIE){if(_153=="auto"){if(type=="height"){return node.offsetHeight;}if(type=="width"){return node.offsetWidth;}}if(type=="fontweight"){switch(_153){case 700:return "bold";case 400:default:return "normal";}}}if(!(type in _150)){_150[type]=_151.test(type);}return _150[type]?px(node,_153):_153;};var _154=d.isIE?"styleFloat":"cssFloat",_155={"cssFloat":_154,"styleFloat":_154,"float":_154};dojo.style=function(node,_156,_157){var n=byId(node),args=arguments.length,op=(_156=="opacity");_156=_155[_156]||_156;if(args==3){return op?d._setOpacity(n,_157):n.style[_156]=_157;}if(args==2&&op){return d._getOpacity(n);}var s=gcs(n);if(args==2&&typeof _156!="string"){for(var x in _156){d.style(node,x,_156[x]);}return s;}return (args==1)?s:_152(n,_156,s[_156]||n.style[_156]);};dojo._getPadExtents=function(n,_158){var s=_158||gcs(n),l=px(n,s.paddingLeft),t=px(n,s.paddingTop);return {l:l,t:t,w:l+px(n,s.paddingRight),h:t+px(n,s.paddingBottom)};};dojo._getBorderExtents=function(n,_159){var ne="none",s=_159||gcs(n),bl=(s.borderLeftStyle!=ne?px(n,s.borderLeftWidth):0),bt=(s.borderTopStyle!=ne?px(n,s.borderTopWidth):0);return {l:bl,t:bt,w:bl+(s.borderRightStyle!=ne?px(n,s.borderRightWidth):0),h:bt+(s.borderBottomStyle!=ne?px(n,s.borderBottomWidth):0)};};dojo._getPadBorderExtents=function(n,_15a){var s=_15a||gcs(n),p=d._getPadExtents(n,s),b=d._getBorderExtents(n,s);return {l:p.l+b.l,t:p.t+b.t,w:p.w+b.w,h:p.h+b.h};};dojo._getMarginExtents=function(n,_15b){var s=_15b||gcs(n),l=px(n,s.marginLeft),t=px(n,s.marginTop),r=px(n,s.marginRight),b=px(n,s.marginBottom);if(d.isWebKit&&(s.position!="absolute")){r=l;}return {l:l,t:t,w:l+r,h:t+b};};dojo._getMarginBox=function(node,_15c){var s=_15c||gcs(node),me=d._getMarginExtents(node,s);var l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode;if(d.isMoz){var sl=parseFloat(s.left),st=parseFloat(s.top);if(!isNaN(sl)&&!isNaN(st)){l=sl,t=st;}else{if(p&&p.style){var pcs=gcs(p);if(pcs.overflow!="visible"){var be=d._getBorderExtents(p,pcs);l+=be.l,t+=be.t;}}}}else{if(d.isOpera||(d.isIE>7&&!d.isQuirks)){if(p){be=d._getBorderExtents(p);l-=be.l;t-=be.t;}}}return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};};dojo._getContentBox=function(node,_15d){var s=_15d||gcs(node),pe=d._getPadExtents(node,s),be=d._getBorderExtents(node,s),w=node.clientWidth,h;if(!w){w=node.offsetWidth,h=node.offsetHeight;}else{h=node.clientHeight,be.w=be.h=0;}if(d.isOpera){pe.l+=be.l;pe.t+=be.t;}return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};};dojo._getBorderBox=function(node,_15e){var s=_15e||gcs(node),pe=d._getPadExtents(node,s),cb=d._getContentBox(node,s);return {l:cb.l-pe.l,t:cb.t-pe.t,w:cb.w+pe.w,h:cb.h+pe.h};};dojo._setBox=function(node,l,t,w,h,u){u=u||"px";var s=node.style;if(!isNaN(l)){s.left=l+u;}if(!isNaN(t)){s.top=t+u;}if(w>=0){s.width=w+u;}if(h>=0){s.height=h+u;}};dojo._isButtonTag=function(node){return node.tagName=="BUTTON"||node.tagName=="INPUT"&&(node.getAttribute("type")||"").toUpperCase()=="BUTTON";};dojo._usesBorderBox=function(node){var n=node.tagName;return d.boxModel=="border-box"||n=="TABLE"||d._isButtonTag(node);};dojo._setContentSize=function(node,_15f,_160,_161){if(d._usesBorderBox(node)){var pb=d._getPadBorderExtents(node,_161);if(_15f>=0){_15f+=pb.w;}if(_160>=0){_160+=pb.h;}}d._setBox(node,NaN,NaN,_15f,_160);};dojo._setMarginBox=function(node,_162,_163,_164,_165,_166){var s=_166||gcs(node),bb=d._usesBorderBox(node),pb=bb?_167:d._getPadBorderExtents(node,s);if(d.isWebKit){if(d._isButtonTag(node)){var ns=node.style;if(_164>=0&&!ns.width){ns.width="4px";}if(_165>=0&&!ns.height){ns.height="4px";}}}var mb=d._getMarginExtents(node,s);if(_164>=0){_164=Math.max(_164-pb.w-mb.w,0);}if(_165>=0){_165=Math.max(_165-pb.h-mb.h,0);}d._setBox(node,_162,_163,_164,_165);};var _167={l:0,t:0,w:0,h:0};dojo.marginBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getMarginBox(n,s):d._setMarginBox(n,b.l,b.t,b.w,b.h,s);};dojo.contentBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getContentBox(n,s):d._setContentSize(n,b.w,b.h,s);};var _168=function(node,prop){if(!(node=(node||0).parentNode)){return 0;}var val,_169=0,_16a=d.body();while(node&&node.style){if(gcs(node).position=="fixed"){return 0;}val=node[prop];if(val){_169+=val-0;if(node==_16a){break;}}node=node.parentNode;}return _169;};dojo._docScroll=function(){var n=d.global;return "pageXOffset" in n?{x:n.pageXOffset,y:n.pageYOffset}:(n=d.doc.documentElement,n.clientHeight?{x:d._fixIeBiDiScrollLeft(n.scrollLeft),y:n.scrollTop}:(n=d.body(),{x:n.scrollLeft||0,y:n.scrollTop||0}));};dojo._isBodyLtr=function(){return "_bodyLtr" in d?d._bodyLtr:d._bodyLtr=(d.body().dir||d.doc.documentElement.dir||"ltr").toLowerCase()=="ltr";};dojo._getIeDocumentElementOffset=function(){var de=d.doc.documentElement;if(d.isIE<8){var r=de.getBoundingClientRect();var l=r.left,t=r.top;if(d.isIE<7){l+=de.clientLeft;t+=de.clientTop;}return {x:l<0?0:l,y:t<0?0:t};}else{return {x:0,y:0};}};dojo._fixIeBiDiScrollLeft=function(_16b){var dd=d.doc;if(d.isIE<8&&!d._isBodyLtr()){var de=d.isQuirks?dd.body:dd.documentElement;return _16b+de.clientWidth-de.scrollWidth;}return _16b;};dojo._abs=dojo.position=function(node,_16c){var db=d.body(),dh=db.parentNode,ret;node=byId(node);if(node["getBoundingClientRect"]){ret=node.getBoundingClientRect();ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};if(d.isIE){var _16d=d._getIeDocumentElementOffset();ret.x-=_16d.x+(d.isQuirks?db.clientLeft+db.offsetLeft:0);ret.y-=_16d.y+(d.isQuirks?db.clientTop+db.offsetTop:0);}else{if(d.isFF==3){var cs=gcs(dh);ret.x-=px(dh,cs.marginLeft)+px(dh,cs.borderLeftWidth);ret.y-=px(dh,cs.marginTop)+px(dh,cs.borderTopWidth);}}}else{ret={x:0,y:0,w:node.offsetWidth,h:node.offsetHeight};if(node["offsetParent"]){ret.x-=_168(node,"scrollLeft");ret.y-=_168(node,"scrollTop");var _16e=node;do{var n=_16e.offsetLeft,t=_16e.offsetTop;ret.x+=isNaN(n)?0:n;ret.y+=isNaN(t)?0:t;cs=gcs(_16e);if(_16e!=node){if(d.isMoz){ret.x+=2*px(_16e,cs.borderLeftWidth);ret.y+=2*px(_16e,cs.borderTopWidth);}else{ret.x+=px(_16e,cs.borderLeftWidth);ret.y+=px(_16e,cs.borderTopWidth);}}if(d.isMoz&&cs.position=="static"){var _16f=_16e.parentNode;while(_16f!=_16e.offsetParent){var pcs=gcs(_16f);if(pcs.position=="static"){ret.x+=px(_16e,pcs.borderLeftWidth);ret.y+=px(_16e,pcs.borderTopWidth);}_16f=_16f.parentNode;}}_16e=_16e.offsetParent;}while((_16e!=dh)&&_16e);}else{if(node.x&&node.y){ret.x+=isNaN(node.x)?0:node.x;ret.y+=isNaN(node.y)?0:node.y;}}}if(_16c){var _170=d._docScroll();ret.x+=_170.x;ret.y+=_170.y;}return ret;};dojo.coords=function(node,_171){var n=byId(node),s=gcs(n),mb=d._getMarginBox(n,s);var abs=d.position(n,_171);mb.x=abs.x;mb.y=abs.y;return mb;};var _172={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},_173={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},_174={innerHTML:1,className:1,htmlFor:d.isIE,value:1};var _175=function(name){return _173[name.toLowerCase()]||name;};var _176=function(node,name){var attr=node.getAttributeNode&&node.getAttributeNode(name);return attr&&attr.specified;};dojo.hasAttr=function(node,name){var lc=name.toLowerCase();return _174[_172[lc]||name]||_176(byId(node),_173[lc]||name);};var _177={},_178=0,_179=dojo._scopeName+"attrid",_17a={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};dojo.attr=function(node,name,_17b){node=byId(node);var args=arguments.length,prop;if(args==2&&typeof name!="string"){for(var x in name){d.attr(node,x,name[x]);}return node;}var lc=name.toLowerCase(),_17c=_172[lc]||name,_17d=_174[_17c],_17e=_173[lc]||name;if(args==3){do{if(_17c=="style"&&typeof _17b!="string"){d.style(node,_17b);break;}if(_17c=="innerHTML"){if(d.isIE&&node.tagName.toLowerCase() in _17a){d.empty(node);node.appendChild(d._toDom(_17b,node.ownerDocument));}else{node[_17c]=_17b;}break;}if(d.isFunction(_17b)){var _17f=d.attr(node,_179);if(!_17f){_17f=_178++;d.attr(node,_179,_17f);}if(!_177[_17f]){_177[_17f]={};}var h=_177[_17f][_17c];if(h){d.disconnect(h);}else{try{delete node[_17c];}catch(e){}}_177[_17f][_17c]=d.connect(node,_17c,_17b);break;}if(_17d||typeof _17b=="boolean"){node[_17c]=_17b;break;}node.setAttribute(_17e,_17b);}while(false);return node;}_17b=node[_17c];if(_17d&&typeof _17b!="undefined"){return _17b;}if(_17c!="href"&&(typeof _17b=="boolean"||d.isFunction(_17b))){return _17b;}return _176(node,_17e)?node.getAttribute(_17e):null;};dojo.removeAttr=function(node,name){byId(node).removeAttribute(_175(name));};dojo.getNodeProp=function(node,name){node=byId(node);var lc=name.toLowerCase(),_180=_172[lc]||name;if((_180 in node)&&_180!="href"){return node[_180];}var _181=_173[lc]||name;return _176(node,_181)?node.getAttribute(_181):null;};dojo.create=function(tag,_182,_183,pos){var doc=d.doc;if(_183){_183=byId(_183);doc=_183.ownerDocument;}if(typeof tag=="string"){tag=doc.createElement(tag);}if(_182){d.attr(tag,_182);}if(_183){d.place(tag,_183,pos);}return tag;};d.empty=d.isIE?function(node){node=byId(node);for(var c;c=node.lastChild;){d.destroy(c);}}:function(node){byId(node).innerHTML="";};var _184={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_185=/<\s*([\w\:]+)/,_186={},_187=0,_188="__"+d._scopeName+"ToDomId";for(var _189 in _184){var tw=_184[_189];tw.pre=_189=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";tw.post="</"+tw.reverse().join("></")+">";}d._toDom=function(frag,doc){doc=doc||d.doc;var _18a=doc[_188];if(!_18a){doc[_188]=_18a=++_187+"";_186[_18a]=doc.createElement("div");}frag+="";var _18b=frag.match(_185),tag=_18b?_18b[1].toLowerCase():"",_18c=_186[_18a],wrap,i,fc,df;if(_18b&&_184[tag]){wrap=_184[tag];_18c.innerHTML=wrap.pre+frag+wrap.post;for(i=wrap.length;i;--i){_18c=_18c.firstChild;}}else{_18c.innerHTML=frag;}if(_18c.childNodes.length==1){return _18c.removeChild(_18c.firstChild);}df=doc.createDocumentFragment();while(fc=_18c.firstChild){df.appendChild(fc);}return df;};var _18d="className";dojo.hasClass=function(node,_18e){return ((" "+byId(node)[_18d]+" ").indexOf(" "+_18e+" ")>=0);};var _18f=/\s+/,a1=[""],_190=function(s){if(typeof s=="string"||s instanceof String){if(s.indexOf(" ")<0){a1[0]=s;return a1;}else{return s.split(_18f);}}return s;};dojo.addClass=function(node,_191){node=byId(node);_191=_190(_191);var cls=" "+node[_18d]+" ";for(var i=0,len=_191.length,c;i<len;++i){c=_191[i];if(c&&cls.indexOf(" "+c+" ")<0){cls+=c+" ";}}node[_18d]=d.trim(cls);};dojo.removeClass=function(node,_192){node=byId(node);var cls;if(_192!==undefined){_192=_190(_192);cls=" "+node[_18d]+" ";for(var i=0,len=_192.length;i<len;++i){cls=cls.replace(" "+_192[i]+" "," ");}cls=d.trim(cls);}else{cls="";}if(node[_18d]!=cls){node[_18d]=cls;}};dojo.toggleClass=function(node,_193,_194){if(_194===undefined){_194=!d.hasClass(node,_193);}d[_194?"addClass":"removeClass"](node,_193);};})();}if(!dojo._hasResource["dojo._base.NodeList"]){dojo._hasResource["dojo._base.NodeList"]=true;dojo.provide("dojo._base.NodeList");(function(){var d=dojo;var ap=Array.prototype,aps=ap.slice,apc=ap.concat;var tnl=function(a,_195,_196){if(!a.sort){a=aps.call(a,0);}var ctor=_196||this._NodeListCtor||d._NodeListCtor;a.constructor=ctor;dojo._mixin(a,ctor.prototype);a._NodeListCtor=ctor;return _195?a._stash(_195):a;};var _197=function(f,a,o){a=[0].concat(aps.call(a,0));o=o||d.global;return function(node){a[0]=node;return f.apply(o,a);};};var _198=function(f,o){return function(){this.forEach(_197(f,arguments,o));return this;};};var _199=function(f,o){return function(){return this.map(_197(f,arguments,o));};};var _19a=function(f,o){return function(){return this.filter(_197(f,arguments,o));};};var _19b=function(f,g,o){return function(){var a=arguments,body=_197(f,a,o);if(g.call(o||d.global,a)){return this.map(body);}this.forEach(body);return this;};};var _19c=function(a){return a.length==1&&(typeof a[0]=="string");};var _19d=function(node){var p=node.parentNode;if(p){p.removeChild(node);}};dojo.NodeList=function(){return tnl(Array.apply(null,arguments));};d._NodeListCtor=d.NodeList;var nl=d.NodeList,nlp=nl.prototype;nl._wrap=nlp._wrap=tnl;nl._adaptAsMap=_199;nl._adaptAsForEach=_198;nl._adaptAsFilter=_19a;nl._adaptWithCondition=_19b;d.forEach(["slice","splice"],function(name){var f=ap[name];nlp[name]=function(){return this._wrap(f.apply(this,arguments),name=="slice"?this:null);};});d.forEach(["indexOf","lastIndexOf","every","some"],function(name){var f=d[name];nlp[name]=function(){return f.apply(d,[this].concat(aps.call(arguments,0)));};});d.forEach(["attr","style"],function(name){nlp[name]=_19b(d[name],_19c);});d.forEach(["connect","addClass","removeClass","toggleClass","empty","removeAttr"],function(name){nlp[name]=_198(d[name]);});dojo.extend(dojo.NodeList,{_normalize:function(_19e,_19f){var _1a0=_19e.parse===true?true:false;if(typeof _19e.template=="string"){var _1a1=_19e.templateFunc||(dojo.string&&dojo.string.substitute);_19e=_1a1?_1a1(_19e.template,_19e):_19e;}var type=(typeof _19e);if(type=="string"||type=="number"){_19e=dojo._toDom(_19e,(_19f&&_19f.ownerDocument));if(_19e.nodeType==11){_19e=dojo._toArray(_19e.childNodes);}else{_19e=[_19e];}}else{if(!dojo.isArrayLike(_19e)){_19e=[_19e];}else{if(!dojo.isArray(_19e)){_19e=dojo._toArray(_19e);}}}if(_1a0){_19e._runParse=true;}return _19e;},_cloneNode:function(node){return node.cloneNode(true);},_place:function(ary,_1a2,_1a3,_1a4){if(_1a2.nodeType!=1&&_1a3=="only"){return;}var _1a5=_1a2,_1a6;var _1a7=ary.length;for(var i=_1a7-1;i>=0;i--){var node=(_1a4?this._cloneNode(ary[i]):ary[i]);if(ary._runParse&&dojo.parser&&dojo.parser.parse){if(!_1a6){_1a6=_1a5.ownerDocument.createElement("div");}_1a6.appendChild(node);dojo.parser.parse(_1a6);node=_1a6.firstChild;while(_1a6.firstChild){_1a6.removeChild(_1a6.firstChild);}}if(i==_1a7-1){dojo.place(node,_1a5,_1a3);}else{_1a5.parentNode.insertBefore(node,_1a5);}_1a5=node;}},_stash:function(_1a8){this._parent=_1a8;return this;},end:function(){if(this._parent){return this._parent;}else{return new this._NodeListCtor();}},concat:function(item){var t=d.isArray(this)?this:aps.call(this,0),m=d.map(arguments,function(a){return a&&!d.isArray(a)&&(typeof NodeList!="undefined"&&a.constructor===NodeList||a.constructor===this._NodeListCtor)?aps.call(a,0):a;});return this._wrap(apc.apply(t,m),this);},map:function(func,obj){return this._wrap(d.map(this,func,obj),this);},forEach:function(_1a9,_1aa){d.forEach(this,_1a9,_1aa);return this;},coords:_199(d.coords),position:_199(d.position),place:function(_1ab,_1ac){var item=d.query(_1ab)[0];return this.forEach(function(node){d.place(node,item,_1ac);});},orphan:function(_1ad){return (_1ad?d._filterQueryResult(this,_1ad):this).forEach(_19d);},adopt:function(_1ae,_1af){return d.query(_1ae).place(this[0],_1af)._stash(this);},query:function(_1b0){if(!_1b0){return this;}var ret=this.map(function(node){return d.query(_1b0,node).filter(function(_1b1){return _1b1!==undefined;});});return this._wrap(apc.apply([],ret),this);},filter:function(_1b2){var a=arguments,_1b3=this,_1b4=0;if(typeof _1b2=="string"){_1b3=d._filterQueryResult(this,a[0]);if(a.length==1){return _1b3._stash(this);}_1b4=1;}return this._wrap(d.filter(_1b3,a[_1b4],a[_1b4+1]),this);},addContent:function(_1b5,_1b6){_1b5=this._normalize(_1b5,this[0]);for(var i=0,node;node=this[i];i++){this._place(_1b5,node,_1b6,i>0);}return this;},instantiate:function(_1b7,_1b8){var c=d.isFunction(_1b7)?_1b7:d.getObject(_1b7);_1b8=_1b8||{};return this.forEach(function(node){new c(_1b8,node);});},at:function(){var t=new this._NodeListCtor();d.forEach(arguments,function(i){if(this[i]){t.push(this[i]);}},this);return t._stash(this);}});nl.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];d.forEach(nl.events,function(evt){var _1b9="on"+evt;nlp[_1b9]=function(a,b){return this.connect(_1b9,a,b);};});})();}if(!dojo._hasResource["dojo._base.query"]){dojo._hasResource["dojo._base.query"]=true;if(typeof dojo!="undefined"){dojo.provide("dojo._base.query");dojo.query=function(_1ba,root,_1bb){_1bb=_1bb||dojo.NodeList;if(!_1ba){return new _1bb();}if(_1ba.constructor==_1bb){return _1ba;}if(!dojo.isString(_1ba)){return new _1bb(_1ba);}if(dojo.isString(root)){root=dojo.byId(root);if(!root){return new _1bb();}}return dojo.Sizzle(_1ba,root,new _1bb());};dojo._filterQueryResult=function(_1bc,_1bd){return dojo.Sizzle.filter(_1bd,_1bc);};}(function(ns){var _1be=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|[^[\]]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g,done=0,_1bf=Object.prototype.toString;var _1c0=function(_1c1,_1c2,_1c3,seed){_1c3=_1c3||[];_1c2=_1c2||document;if(_1c2.nodeType!==1&&_1c2.nodeType!==9){return [];}if(!_1c1||typeof _1c1!=="string"){return _1c3;}var _1c4=[],m,set,_1c5,_1c6,mode,_1c7,_1c8=true;_1be.lastIndex=0;while((m=_1be.exec(_1c1))!==null){_1c4.push(m[1]);if(m[2]){_1c7=RegExp.rightContext;break;}}if(_1c4.length>1&&Expr.match.POS.exec(_1c1)){if(_1c4.length===2&&Expr.relative[_1c4[0]]){var _1c9="",_1ca;while((_1ca=Expr.match.POS.exec(_1c1))){_1c9+=_1ca[0];_1c1=_1c1.replace(Expr.match.POS,"");}set=_1c0.filter(_1c9,_1c0(_1c1,_1c2));}else{set=Expr.relative[_1c4[0]]?[_1c2]:_1c0(_1c4.shift(),_1c2);while(_1c4.length){var _1cb=[];_1c1=_1c4.shift();if(Expr.relative[_1c1]){_1c1+=_1c4.shift();}for(var i=0,l=set.length;i<l;i++){_1c0(_1c1,set[i],_1cb);}set=_1cb;}}}else{var ret=seed?{expr:_1c4.pop(),set:_1cc(seed)}:_1c0.find(_1c4.pop(),_1c4.length===1&&_1c2.parentNode?_1c2.parentNode:_1c2);set=_1c0.filter(ret.expr,ret.set);if(_1c4.length>0){_1c5=_1cc(set);}else{_1c8=false;}while(_1c4.length){var cur=_1c4.pop(),pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=_1c4.pop();}if(pop==null){pop=_1c2;}Expr.relative[cur](_1c5,pop);}}if(!_1c5){_1c5=set;}if(!_1c5){throw "Syntax error, unrecognized expression: "+(cur||_1c1);}if(_1bf.call(_1c5)==="[object Array]"){if(!_1c8){_1c3.push.apply(_1c3,_1c5);}else{if(_1c2.nodeType===1){for(var i=0;_1c5[i]!=null;i++){if(_1c5[i]&&(_1c5[i]===true||_1c5[i].nodeType===1&&_1cd(_1c2,_1c5[i]))){_1c3.push(set[i]);}}}else{for(var i=0;_1c5[i]!=null;i++){if(_1c5[i]&&_1c5[i].nodeType===1){_1c3.push(set[i]);}}}}}else{_1cc(_1c5,_1c3);}if(_1c7){_1c0(_1c7,_1c2,_1c3,seed);}return _1c3;};_1c0.matches=function(expr,set){return _1c0(expr,null,null,set);};_1c0.find=function(expr,_1ce){var set,_1cf;if(!expr){return [];}for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],_1cf;if((_1cf=Expr.match[type].exec(expr))){var left=RegExp.leftContext;if(left.substr(left.length-1)!=="\\"){_1cf[1]=(_1cf[1]||"").replace(/\\/g,"");set=Expr.find[type](_1cf,_1ce);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}if(!set){set=_1ce.getElementsByTagName("*");}return {set:set,expr:expr};};_1c0.filter=function(expr,set,_1d0,not){var old=expr,_1d1=[],_1d2=set,_1d3,_1d4;while(expr&&set.length){for(var type in Expr.filter){if((_1d3=Expr.match[type].exec(expr))!=null){var _1d5=Expr.filter[type],_1d6=null,_1d7=0,_1d8,item;_1d4=false;if(_1d2==_1d1){_1d1=[];}if(Expr.preFilter[type]){_1d3=Expr.preFilter[type](_1d3,_1d2,_1d0,_1d1,not);if(!_1d3){_1d4=_1d8=true;}else{if(_1d3[0]===true){_1d6=[];var last=null,elem;for(var i=0;(elem=_1d2[i])!==undefined;i++){if(elem&&last!==elem){_1d6.push(elem);last=elem;}}}}}if(_1d3){for(var i=0;(item=_1d2[i])!==undefined;i++){if(item){if(_1d6&&item!=_1d6[_1d7]){_1d7++;}_1d8=_1d5(item,_1d3,_1d7,_1d6);var pass=not^!!_1d8;if(_1d0&&_1d8!=null){if(pass){_1d4=true;}else{_1d2[i]=false;}}else{if(pass){_1d1.push(item);_1d4=true;}}}}}if(_1d8!==undefined){if(!_1d0){_1d2=_1d1;}expr=expr.replace(Expr.match[type],"");if(!_1d4){return [];}break;}}}expr=expr.replace(/\s*,\s*/,"");if(expr==old){if(_1d4==null){throw "Syntax error, unrecognized expression: "+expr;}else{break;}}old=expr;}return _1d2;};var Expr=_1c0.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u0128-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u0128-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u0128-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[((?:[\w\u0128-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\]/,TAG:/^((?:[\w\u0128-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child\(?(even|odd|[\dn+-]*)\)?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)\(?(\d*)\)?(?:[^-]|$)/,PSEUDO:/:((?:[\w\u0128-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},relative:{"+":function(_1d9,part){for(var i=0,l=_1d9.length;i<l;i++){var elem=_1d9[i];if(elem){var cur=elem.previousSibling;while(cur&&cur.nodeType!==1){cur=cur.previousSibling;}_1d9[i]=typeof part==="string"?cur||false:cur===part;}}if(typeof part==="string"){_1c0.filter(part,_1d9,true);}},">":function(_1da,part){if(typeof part==="string"&&!/\W/.test(part)){part=part.toUpperCase();for(var i=0,l=_1da.length;i<l;i++){var elem=_1da[i];if(elem){var _1db=elem.parentNode;_1da[i]=_1db.nodeName===part?_1db:false;}}}else{for(var i=0,l=_1da.length;i<l;i++){var elem=_1da[i];if(elem){_1da[i]=typeof part==="string"?elem.parentNode:elem.parentNode===part;}}if(typeof part==="string"){_1c0.filter(part,_1da,true);}}},"":function(_1dc,part){var _1dd="done"+(done++),_1de=_1df;if(!part.match(/\W/)){var _1e0=part=part.toUpperCase();_1de=_1e1;}_1de("parentNode",part,_1dd,_1dc,_1e0);},"~":function(_1e2,part){var _1e3="done"+(done++),_1e4=_1df;if(typeof part==="string"&&!part.match(/\W/)){var _1e5=part=part.toUpperCase();_1e4=_1e1;}_1e4("previousSibling",part,_1e3,_1e2,_1e5);}},find:{ID:function(_1e6,_1e7){if(_1e7.getElementById){var m=_1e7.getElementById(_1e6[1]);return m?[m]:[];}},NAME:function(_1e8,_1e9){return _1e9.getElementsByName?_1e9.getElementsByName(_1e8[1]):null;},TAG:function(_1ea,_1eb){return _1eb.getElementsByTagName(_1ea[1]);}},preFilter:{CLASS:function(_1ec,_1ed,_1ee,_1ef,not){_1ec=" "+_1ec[1].replace(/\\/g,"")+" ";for(var i=0;_1ed[i];i++){if(not^(" "+_1ed[i].className+" ").indexOf(_1ec)>=0){if(!_1ee){_1ef.push(_1ed[i]);}}else{if(_1ee){_1ed[i]=false;}}}return false;},ID:function(_1f0){return _1f0[1];},TAG:function(_1f1){return _1f1[1].toUpperCase();},CHILD:function(_1f2){if(_1f2[1]=="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(_1f2[2]=="even"&&"2n"||_1f2[2]=="odd"&&"2n+1"||!/\D/.test(_1f2[2])&&"0n+"+_1f2[2]||_1f2[2]);_1f2[2]=(test[1]+(test[2]||1))-0;_1f2[3]=test[3]-0;}_1f2[0]="done"+(done++);return _1f2;},ATTR:function(_1f3){var name=_1f3[1];if(Expr.attrMap[name]){_1f3[1]=Expr.attrMap[name];}if(_1f3[2]==="~="){_1f3[4]=" "+_1f3[4]+" ";}return _1f3;},PSEUDO:function(_1f4,_1f5,_1f6,_1f7,not){if(_1f4[1]==="not"){if(_1f4[3].match(_1be).length>1){_1f4[3]=_1c0(_1f4[3],null,null,_1f5);}else{var ret=_1c0.filter(_1f4[3],_1f5,_1f6,true^not);if(!_1f6){_1f7.push.apply(_1f7,ret);}return false;}}return _1f4;},POS:function(_1f8){_1f8.unshift(true);return _1f8;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true;},parent:function(elem){return !!elem.firstChild;},empty:function(elem){return !elem.firstChild;},has:function(elem,i,_1f9){return !!_1c0(_1f9[3],elem).length;},header:function(elem){return /h\d/i.test(elem.nodeName);},text:function(elem){return "text"===elem.type;},radio:function(elem){return "radio"===elem.type;},checkbox:function(elem){return "checkbox"===elem.type;},file:function(elem){return "file"===elem.type;},password:function(elem){return "password"===elem.type;},submit:function(elem){return "submit"===elem.type;},image:function(elem){return "image"===elem.type;},reset:function(elem){return "reset"===elem.type;},button:function(elem){return "button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON";},input:function(elem){return /input|select|textarea|button/i.test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,_1fa,_1fb){return i===_1fb.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,_1fc){return i<_1fc[3]-0;},gt:function(elem,i,_1fd){return i>_1fd[3]-0;},nth:function(elem,i,_1fe){return _1fe[3]-0==i;},eq:function(elem,i,_1ff){return _1ff[3]-0==i;}},filter:{CHILD:function(elem,_200){var type=_200[1],_201=elem.parentNode;var _202=_200[0];if(_201&&!_201[_202]){var _203=1;for(var node=_201.firstChild;node;node=node.nextSibling){if(node.nodeType==1){node.nodeIndex=_203++;}}_201[_202]=_203-1;}if(type=="first"){return elem.nodeIndex==1;}else{if(type=="last"){return elem.nodeIndex==_201[_202];}else{if(type=="only"){return _201[_202]==1;}else{if(type=="nth"){var add=false,_204=_200[2],last=_200[3];if(_204==1&&last==0){return true;}if(_204==0){if(elem.nodeIndex==last){add=true;}}else{if((elem.nodeIndex-last)%_204==0&&(elem.nodeIndex-last)/_204>=0){add=true;}}return add;}}}}},PSEUDO:function(elem,_205,i,_206){var name=_205[1],_207=Expr.filters[name];if(_207){return _207(elem,i,_205,_206);}else{if(name==="contains"){return (elem.textContent||elem.innerText||"").indexOf(_205[3])>=0;}else{if(name==="not"){var not=_205[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false;}}return true;}}}},ID:function(elem,_208){return elem.nodeType===1&&elem.getAttribute("id")===_208;},TAG:function(elem,_209){return (_209==="*"&&elem.nodeType===1)||elem.nodeName===_209;},CLASS:function(elem,_20a){return _20a.test(elem.className);},ATTR:function(elem,_20b){var _20c=elem[_20b[1]]||elem.getAttribute(_20b[1]),_20d=_20c+"",type=_20b[2],_20e=_20b[4];return _20c==null?false:type==="="?_20d===_20e:type==="*="?_20d.indexOf(_20e)>=0:type==="~="?(" "+_20d+" ").indexOf(_20e)>=0:!_20b[4]?_20c:type==="!="?_20d!=_20e:type==="^="?_20d.indexOf(_20e)===0:type==="$="?_20d.substr(_20d.length-_20e.length)===_20e:type==="|="?_20d===_20e||_20d.substr(0,_20e.length+1)===_20e+"-":false;},POS:function(elem,_20f,i,_210){var name=_20f[2],_211=Expr.setFilters[name];if(_211){return _211(elem,i,_20f,_210);}}}};for(var type in Expr.match){Expr.match[type]=RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);}var _1cc=function(_212,_213){_212=Array.prototype.slice.call(_212);if(_213){_213.push.apply(_213,_212);return _213;}return _212;};try{Array.prototype.slice.call(document.documentElement.childNodes);}catch(e){_1cc=function(_214,_215){var ret=_215||[];if(_1bf.call(_214)==="[object Array]"){Array.prototype.push.apply(ret,_214);}else{if(typeof _214.length==="number"){for(var i=0,l=_214.length;i<l;i++){ret.push(_214[i]);}}else{for(var i=0;_214[i];i++){ret.push(_214[i]);}}}return ret;};}(function(){var form=document.createElement("form"),id="script"+(new Date).getTime();form.innerHTML="<input name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(!!document.getElementById(id)){Expr.find.ID=function(_216,_217){if(_217.getElementById){var m=_217.getElementById(_216[1]);return m?m.id===_216[1]||m.getAttributeNode&&m.getAttributeNode("id").nodeValue===_216[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,_218){var node=elem.getAttributeNode&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===_218;};}root.removeChild(form);})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(_219,_21a){var _21b=_21a.getElementsByTagName(_219[1]);if(_219[1]==="*"){var tmp=[];for(var i=0;_21b[i];i++){if(_21b[i].nodeType===1){tmp.push(_21b[i]);}}_21b=tmp;}return _21b;};}})();if(document.querySelectorAll){(function(){var _21c=_1c0;_1c0=function(_21d,_21e,_21f,seed){_21e=_21e||document;if(!seed&&_21e.nodeType===9){try{return _1cc(_21e.querySelectorAll(_21d),_21f);}catch(e){}}return _21c(_21d,_21e,_21f,seed);};_1c0.find=_21c.find;_1c0.filter=_21c.filter;_1c0.selectors=_21c.selectors;_1c0.matches=_21c.matches;})();}if(document.documentElement.getElementsByClassName){Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(_220,_221){return _221.getElementsByClassName(_220[1]);};}function _1e1(dir,cur,_222,_223,_224){for(var i=0,l=_223.length;i<l;i++){var elem=_223[i];if(elem){elem=elem[dir];var _225=false;while(elem&&elem.nodeType){var done=elem[_222];if(done){_225=_223[done];break;}if(elem.nodeType===1){elem[_222]=i;}if(elem.nodeName===cur){_225=elem;break;}elem=elem[dir];}_223[i]=_225;}}};function _1df(dir,cur,_226,_227,_228){for(var i=0,l=_227.length;i<l;i++){var elem=_227[i];if(elem){elem=elem[dir];var _229=false;while(elem&&elem.nodeType){if(elem[_226]){_229=_227[elem[_226]];break;}if(elem.nodeType===1){elem[_226]=i;if(typeof cur!=="string"){if(elem===cur){_229=true;break;}}else{if(_1c0.filter(cur,[elem]).length>0){_229=elem;break;}}}elem=elem[dir];}_227[i]=_229;}}};var _1cd=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16;}:function(a,b){return a!==b&&(a.contains?a.contains(b):true);};(ns||window).Sizzle=_1c0;})(typeof dojo=="undefined"?null:dojo);}if(!dojo._hasResource["dojo._base.xhr"]){dojo._hasResource["dojo._base.xhr"]=true;dojo.provide("dojo._base.xhr");(function(){var _22a=dojo,cfg=_22a.config;function _22b(obj,name,_22c){if(_22c===null){return;}var val=obj[name];if(typeof val=="string"){obj[name]=[val,_22c];}else{if(_22a.isArray(val)){val.push(_22c);}else{obj[name]=_22c;}}};dojo.fieldToObject=function(_22d){var ret=null;var item=_22a.byId(_22d);if(item){var _22e=item.name;var type=(item.type||"").toLowerCase();if(_22e&&type&&!item.disabled){if(type=="radio"||type=="checkbox"){if(item.checked){ret=item.value;}}else{if(item.multiple){ret=[];_22a.query("option",item).forEach(function(opt){if(opt.selected){ret.push(opt.value);}});}else{ret=item.value;}}}}return ret;};dojo.formToObject=function(_22f){var ret={};var _230="file|submit|image|reset|button|";_22a.forEach(dojo.byId(_22f).elements,function(item){var _231=item.name;var type=(item.type||"").toLowerCase();if(_231&&type&&_230.indexOf(type)==-1&&!item.disabled){_22b(ret,_231,_22a.fieldToObject(item));if(type=="image"){ret[_231+".x"]=ret[_231+".y"]=ret[_231].x=ret[_231].y=0;}}});return ret;};dojo.objectToQuery=function(map){var enc=encodeURIComponent;var _232=[];var _233={};for(var name in map){var _234=map[name];if(_234!=_233[name]){var _235=enc(name)+"=";if(_22a.isArray(_234)){for(var i=0;i<_234.length;i++){_232.push(_235+enc(_234[i]));}}else{_232.push(_235+enc(_234));}}}return _232.join("&");};dojo.formToQuery=function(_236){return _22a.objectToQuery(_22a.formToObject(_236));};dojo.formToJson=function(_237,_238){return _22a.toJson(_22a.formToObject(_237),_238);};dojo.queryToObject=function(str){var ret={};var qp=str.split("&");var dec=decodeURIComponent;_22a.forEach(qp,function(item){if(item.length){var _239=item.split("=");var name=dec(_239.shift());var val=dec(_239.join("="));if(typeof ret[name]=="string"){ret[name]=[ret[name]];}if(_22a.isArray(ret[name])){ret[name].push(val);}else{ret[name]=val;}}});return ret;};dojo._blockAsync=false;var _23a=_22a._contentHandlers=dojo.contentHandlers={text:function(xhr){return xhr.responseText;},json:function(xhr){return _22a.fromJson(xhr.responseText||null);},"json-comment-filtered":function(xhr){if(!dojo.config.useCommentedJson){console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");}var _23b=xhr.responseText;var _23c=_23b.indexOf("/*");var _23d=_23b.lastIndexOf("*/");if(_23c==-1||_23d==-1){throw new Error("JSON was not comment filtered");}return _22a.fromJson(_23b.substring(_23c+2,_23d));},javascript:function(xhr){return _22a.eval(xhr.responseText);},xml:function(xhr){var _23e=xhr.responseXML;if(_22a.isIE&&(!_23e||!_23e.documentElement)){var ms=function(n){return "MSXML"+n+".DOMDocument";};var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];_22a.some(dp,function(p){try{var dom=new ActiveXObject(p);dom.async=false;dom.loadXML(xhr.responseText);_23e=dom;}catch(e){return false;}return true;});}return _23e;},"json-comment-optional":function(xhr){if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){return _23a["json-comment-filtered"](xhr);}else{return _23a["json"](xhr);}}};dojo._ioSetArgs=function(args,_23f,_240,_241){var _242={args:args,url:args.url};var _243=null;if(args.form){var form=_22a.byId(args.form);var _244=form.getAttributeNode("action");_242.url=_242.url||(_244?_244.value:null);_243=_22a.formToObject(form);}var _245=[{}];if(_243){_245.push(_243);}if(args.content){_245.push(args.content);}if(args.preventCache){_245.push({"dojo.preventCache":new Date().valueOf()});}_242.query=_22a.objectToQuery(_22a.mixin.apply(null,_245));_242.handleAs=args.handleAs||"text";var d=new _22a.Deferred(_23f);d.addCallbacks(_240,function(_246){return _241(_246,d);});var ld=args.load;if(ld&&_22a.isFunction(ld)){d.addCallback(function(_247){return ld.call(args,_247,_242);});}var err=args.error;if(err&&_22a.isFunction(err)){d.addErrback(function(_248){return err.call(args,_248,_242);});}var _249=args.handle;if(_249&&_22a.isFunction(_249)){d.addBoth(function(_24a){return _249.call(args,_24a,_242);});}if(cfg.ioPublish&&_22a.publish&&_242.args.ioPublish!==false){d.addCallbacks(function(res){_22a.publish("/dojo/io/load",[d,res]);return res;},function(res){_22a.publish("/dojo/io/error",[d,res]);return res;});d.addBoth(function(res){_22a.publish("/dojo/io/done",[d,res]);return res;});}d.ioArgs=_242;return d;};var _24b=function(dfd){dfd.canceled=true;var xhr=dfd.ioArgs.xhr;var _24c=typeof xhr.abort;if(_24c=="function"||_24c=="object"||_24c=="unknown"){xhr.abort();}var err=dfd.ioArgs.error;if(!err){err=new Error("xhr cancelled");err.dojoType="cancel";}return err;};var _24d=function(dfd){var ret=_23a[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);return ret===undefined?null:ret;};var _24e=function(_24f,dfd){if(!dfd.ioArgs.args.failOk){console.error(_24f);}return _24f;};var _250=null;var _251=[];var _252=0;var _253=function(dfd){if(_252<=0){_252=0;if(cfg.ioPublish&&_22a.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){_22a.publish("/dojo/io/stop");}}};var _254=function(){var now=(new Date()).getTime();if(!_22a._blockAsync){for(var i=0,tif;i<_251.length&&(tif=_251[i]);i++){var dfd=tif.dfd;var func=function(){if(!dfd||dfd.canceled||!tif.validCheck(dfd)){_251.splice(i--,1);_252-=1;}else{if(tif.ioCheck(dfd)){_251.splice(i--,1);tif.resHandle(dfd);_252-=1;}else{if(dfd.startTime){if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){_251.splice(i--,1);var err=new Error("timeout exceeded");err.dojoType="timeout";dfd.errback(err);dfd.cancel();_252-=1;}}}}};if(dojo.config.debugAtAllCosts){func.call(this);}else{try{func.call(this);}catch(e){dfd.errback(e);}}}}_253(dfd);if(!_251.length){clearInterval(_250);_250=null;return;}};dojo._ioCancelAll=function(){try{_22a.forEach(_251,function(i){try{i.dfd.cancel();}catch(e){}});}catch(e){}};if(_22a.isIE){_22a.addOnWindowUnload(_22a._ioCancelAll);}_22a._ioNotifyStart=function(dfd){if(cfg.ioPublish&&_22a.publish&&dfd.ioArgs.args.ioPublish!==false){if(!_252){_22a.publish("/dojo/io/start");}_252+=1;_22a.publish("/dojo/io/send",[dfd]);}};_22a._ioWatch=function(dfd,_255,_256,_257){var args=dfd.ioArgs.args;if(args.timeout){dfd.startTime=(new Date()).getTime();}_251.push({dfd:dfd,validCheck:_255,ioCheck:_256,resHandle:_257});if(!_250){_250=setInterval(_254,50);}if(args.sync){_254();}};var _258="application/x-www-form-urlencoded";var _259=function(dfd){return dfd.ioArgs.xhr.readyState;};var _25a=function(dfd){return 4==dfd.ioArgs.xhr.readyState;};var _25b=function(dfd){var xhr=dfd.ioArgs.xhr;if(_22a._isDocumentOk(xhr)){dfd.callback(dfd);}else{var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);err.status=xhr.status;err.responseText=xhr.responseText;dfd.errback(err);}};dojo._ioAddQueryToUrl=function(_25c){if(_25c.query.length){_25c.url+=(_25c.url.indexOf("?")==-1?"?":"&")+_25c.query;_25c.query=null;}};dojo.xhr=function(_25d,args,_25e){var dfd=_22a._ioSetArgs(args,_24b,_24d,_24e);var _25f=dfd.ioArgs;var xhr=_25f.xhr=_22a._xhrObj(_25f.args);if(!xhr){dfd.cancel();return dfd;}if("postData" in args){_25f.query=args.postData;}else{if("putData" in args){_25f.query=args.putData;}else{if("rawBody" in args){_25f.query=args.rawBody;}else{if((arguments.length>2&&!_25e)||"POST|PUT".indexOf(_25d.toUpperCase())==-1){_22a._ioAddQueryToUrl(_25f);}}}}xhr.open(_25d,_25f.url,args.sync!==true,args.user||undefined,args.password||undefined);if(args.headers){for(var hdr in args.headers){if(hdr.toLowerCase()==="content-type"&&!args.contentType){args.contentType=args.headers[hdr];}else{if(args.headers[hdr]){xhr.setRequestHeader(hdr,args.headers[hdr]);}}}}xhr.setRequestHeader("Content-Type",args.contentType||_258);if(!args.headers||!("X-Requested-With" in args.headers)){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}_22a._ioNotifyStart(dfd);if(dojo.config.debugAtAllCosts){xhr.send(_25f.query);}else{try{xhr.send(_25f.query);}catch(e){_25f.error=e;dfd.cancel();}}_22a._ioWatch(dfd,_259,_25a,_25b);xhr=null;return dfd;};dojo.xhrGet=function(args){return _22a.xhr("GET",args);};dojo.rawXhrPost=dojo.xhrPost=function(args){return _22a.xhr("POST",args,true);};dojo.rawXhrPut=dojo.xhrPut=function(args){return _22a.xhr("PUT",args,true);};dojo.xhrDelete=function(args){return _22a.xhr("DELETE",args);};})();}if(!dojo._hasResource["dojo._base.fx"]){dojo._hasResource["dojo._base.fx"]=true;dojo.provide("dojo._base.fx");(function(){var d=dojo;var _260=d._mixin;dojo._Line=function(_261,end){this.start=_261;this.end=end;};dojo._Line.prototype.getValue=function(n){return ((this.end-this.start)*n)+this.start;};dojo.Animation=function(args){_260(this,args);if(d.isArray(this.curve)){this.curve=new d._Line(this.curve[0],this.curve[1]);}};d._Animation=d.Animation;d.extend(dojo.Animation,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var _262=this._percent,_263=this.easing;return _263?_263(_262):_262;},_fire:function(evt,args){var a=args||[];if(this[evt]){if(d.config.debugAtAllCosts){this[evt].apply(this,a);}else{try{this[evt].apply(this,a);}catch(e){console.error("exception in animation handler for:",evt);console.error(e);}}}return this;},play:function(_264,_265){var _266=this;if(_266._delayTimer){_266._clearTimer();}if(_265){_266._stopTimer();_266._active=_266._paused=false;_266._percent=0;}else{if(_266._active&&!_266._paused){return _266;}}_266._fire("beforeBegin",[_266.node]);var de=_264||_266.delay,_267=dojo.hitch(_266,"_play",_265);if(de>0){_266._delayTimer=setTimeout(_267,de);return _266;}_267();return _266;},_play:function(_268){var _269=this;if(_269._delayTimer){_269._clearTimer();}_269._startTime=new Date().valueOf();if(_269._paused){_269._startTime-=_269.duration*_269._percent;}_269._endTime=_269._startTime+_269.duration;_269._active=true;_269._paused=false;var _26a=_269.curve.getValue(_269._getStep());if(!_269._percent){if(!_269._startRepeatCount){_269._startRepeatCount=_269.repeat;}_269._fire("onBegin",[_26a]);}_269._fire("onPlay",[_26a]);_269._cycle();return _269;},pause:function(){var _26b=this;if(_26b._delayTimer){_26b._clearTimer();}_26b._stopTimer();if(!_26b._active){return _26b;}_26b._paused=true;_26b._fire("onPause",[_26b.curve.getValue(_26b._getStep())]);return _26b;},gotoPercent:function(_26c,_26d){var _26e=this;_26e._stopTimer();_26e._active=_26e._paused=true;_26e._percent=_26c;if(_26d){_26e.play();}return _26e;},stop:function(_26f){var _270=this;if(_270._delayTimer){_270._clearTimer();}if(!_270._timer){return _270;}_270._stopTimer();if(_26f){_270._percent=1;}_270._fire("onStop",[_270.curve.getValue(_270._getStep())]);_270._active=_270._paused=false;return _270;},status:function(){if(this._active){return this._paused?"paused":"playing";}return "stopped";},_cycle:function(){var _271=this;if(_271._active){var curr=new Date().valueOf();var step=(curr-_271._startTime)/(_271._endTime-_271._startTime);if(step>=1){step=1;}_271._percent=step;if(_271.easing){step=_271.easing(step);}_271._fire("onAnimate",[_271.curve.getValue(step)]);if(_271._percent<1){_271._startTimer();}else{_271._active=false;if(_271.repeat>0){_271.repeat--;_271.play(null,true);}else{if(_271.repeat==-1){_271.play(null,true);}else{if(_271._startRepeatCount){_271.repeat=_271._startRepeatCount;_271._startRepeatCount=0;}}}_271._percent=0;_271._fire("onEnd",[_271.node]);!_271.repeat&&_271._stopTimer();}}return _271;},_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer;}});var ctr=0,_272=[],_273=null,_274={run:function(){}};d.extend(d.Animation,{_startTimer:function(){if(!this._timer){this._timer=d.connect(_274,"run",this,"_cycle");ctr++;}if(!_273){_273=setInterval(d.hitch(_274,"run"),this.rate);}},_stopTimer:function(){if(this._timer){d.disconnect(this._timer);this._timer=null;ctr--;}if(ctr<=0){clearInterval(_273);_273=null;ctr=0;}}});var _275=d.isIE?function(node){var ns=node.style;if(!ns.width.length&&d.style(node,"width")=="auto"){ns.width="auto";}}:function(){};dojo._fade=function(args){args.node=d.byId(args.node);var _276=_260({properties:{}},args),_277=(_276.properties.opacity={});_277.start=!("start" in _276)?function(){return +d.style(_276.node,"opacity")||0;}:_276.start;_277.end=_276.end;var anim=d.animateProperty(_276);d.connect(anim,"beforeBegin",d.partial(_275,_276.node));return anim;};dojo.fadeIn=function(args){return d._fade(_260({end:1},args));};dojo.fadeOut=function(args){return d._fade(_260({end:0},args));};dojo._defaultEasing=function(n){return 0.5+((Math.sin((n+1.5)*Math.PI))/2);};var _278=function(_279){this._properties=_279;for(var p in _279){var prop=_279[p];if(prop.start instanceof d.Color){prop.tempColor=new d.Color();}}};_278.prototype.getValue=function(r){var ret={};for(var p in this._properties){var prop=this._properties[p],_27a=prop.start;if(_27a instanceof d.Color){ret[p]=d.blendColors(_27a,prop.end,r,prop.tempColor).toCss();}else{if(!d.isArray(_27a)){ret[p]=((prop.end-_27a)*r)+_27a+(p!="opacity"?prop.units||"px":0);}}}return ret;};dojo.animateProperty=function(args){var n=args.node=d.byId(args.node);if(!args.easing){args.easing=d._defaultEasing;}var anim=new d.Animation(args);d.connect(anim,"beforeBegin",anim,function(){var pm={};for(var p in this.properties){if(p=="width"||p=="height"){this.node.display="block";}var prop=this.properties[p];if(d.isFunction(prop)){prop=prop(n);}prop=pm[p]=_260({},(d.isObject(prop)?prop:{end:prop}));if(d.isFunction(prop.start)){prop.start=prop.start(n);}if(d.isFunction(prop.end)){prop.end=prop.end(n);}var _27b=(p.toLowerCase().indexOf("color")>=0);function _27c(node,p){var v={height:node.offsetHeight,width:node.offsetWidth}[p];if(v!==undefined){return v;}v=d.style(node,p);return (p=="opacity")?+v:(_27b?v:parseFloat(v));};if(!("end" in prop)){prop.end=_27c(n,p);}else{if(!("start" in prop)){prop.start=_27c(n,p);}}if(_27b){prop.start=new d.Color(prop.start);prop.end=new d.Color(prop.end);}else{prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);}}this.curve=new _278(pm);});d.connect(anim,"onAnimate",d.hitch(d,"style",anim.node));return anim;};dojo.anim=function(node,_27d,_27e,_27f,_280,_281){return d.animateProperty({node:node,duration:_27e||d.Animation.prototype.duration,properties:_27d,easing:_27f,onEnd:_280}).play(_281||0);};})();}if(!dojo._hasResource["dojo._base.browser"]){dojo._hasResource["dojo._base.browser"]=true;dojo.provide("dojo._base.browser");dojo.forEach(dojo.config.require,function(i){dojo["require"](i);});}if(!dojo._hasResource["dojo.back"]){dojo._hasResource["dojo.back"]=true;dojo.provide("dojo.back");(function(){var back=dojo.back;function _282(){var h=window.location.hash;if(h.charAt(0)=="#"){h=h.substring(1);}return dojo.isMozilla?h:decodeURIComponent(h);};function _283(h){if(!h){h="";}window.location.hash=encodeURIComponent(h);_284=history.length;};if(dojo.exists("tests.back-hash")){back.getHash=_282;back.setHash=_283;}var _285=(typeof (window)!=="undefined")?window.location.href:"";var _286=(typeof (window)!=="undefined")?_282():"";var _287=null;var _288=null;var _289=null;var _28a=null;var _28b=[];var _28c=[];var _28d=false;var _28e=false;var _284;function _28f(){var _290=_28c.pop();if(!_290){return;}var last=_28c[_28c.length-1];if(!last&&_28c.length==0){last=_287;}if(last){if(last.kwArgs["back"]){last.kwArgs["back"]();}else{if(last.kwArgs["backButton"]){last.kwArgs["backButton"]();}else{if(last.kwArgs["handle"]){last.kwArgs.handle("back");}}}}_28b.push(_290);};back.goBack=_28f;function _291(){var last=_28b.pop();if(!last){return;}if(last.kwArgs["forward"]){last.kwArgs.forward();}else{if(last.kwArgs["forwardButton"]){last.kwArgs.forwardButton();}else{if(last.kwArgs["handle"]){last.kwArgs.handle("forward");}}}_28c.push(last);};back.goForward=_291;function _292(url,args,hash){return {"url":url,"kwArgs":args,"urlHash":hash};};function _293(url){var _294=url.split("?");if(_294.length<2){return null;}else{return _294[1];}};function _295(){var url=(dojo.config["dojoIframeHistoryUrl"]||dojo.moduleUrl("dojo","resources/iframe_history.html"))+"?"+(new Date()).getTime();_28d=true;if(_28a){dojo.isWebKit?_28a.location=url:window.frames[_28a.name].location=url;}else{}return url;};function _296(){if(!_28e){var hsl=_28c.length;var hash=_282();if((hash===_286||window.location.href==_285)&&(hsl==1)){_28f();return;}if(_28b.length>0){if(_28b[_28b.length-1].urlHash===hash){_291();return;}}if((hsl>=2)&&(_28c[hsl-2])){if(_28c[hsl-2].urlHash===hash){_28f();return;}}if(dojo.isSafari&&dojo.isSafari<3){var _297=history.length;if(_297>_284){_291();}else{if(_297<_284){_28f();}}_284=_297;}}};back.init=function(){if(dojo.byId("dj_history")){return;}var src=dojo.config["dojoIframeHistoryUrl"]||dojo.moduleUrl("dojo","resources/iframe_history.html");if(dojo._postLoad){console.error("dojo.back.init() must be called before the DOM has loaded. "+"If using xdomain loading or djConfig.debugAtAllCosts, include dojo.back "+"in a build layer.");}else{document.write("<iframe style=\"border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;\" name=\"dj_history\" id=\"dj_history\" src=\""+src+"\"></iframe>");}};back.setInitialState=function(args){_287=_292(_285,args,_286);};back.addToHistory=function(args){_28b=[];var hash=null;var url=null;if(!_28a){if(dojo.config["useXDomain"]&&!dojo.config["dojoIframeHistoryUrl"]){console.warn("dojo.back: When using cross-domain Dojo builds,"+" please save iframe_history.html to your domain and set djConfig.dojoIframeHistoryUrl"+" to the path on your domain to iframe_history.html");}_28a=window.frames["dj_history"];}if(!_289){_289=dojo.create("a",{style:{display:"none"}},dojo.body());}if(args["changeUrl"]){hash=""+((args["changeUrl"]!==true)?args["changeUrl"]:(new Date()).getTime());if(_28c.length==0&&_287.urlHash==hash){_287=_292(url,args,hash);return;}else{if(_28c.length>0&&_28c[_28c.length-1].urlHash==hash){_28c[_28c.length-1]=_292(url,args,hash);return;}}_28e=true;setTimeout(function(){_283(hash);_28e=false;},1);_289.href=hash;if(dojo.isIE){url=_295();var _298=args["back"]||args["backButton"]||args["handle"];var tcb=function(_299){if(_282()!=""){setTimeout(function(){_283(hash);},1);}_298.apply(this,[_299]);};if(args["back"]){args.back=tcb;}else{if(args["backButton"]){args.backButton=tcb;}else{if(args["handle"]){args.handle=tcb;}}}var _29a=args["forward"]||args["forwardButton"]||args["handle"];var tfw=function(_29b){if(_282()!=""){_283(hash);}if(_29a){_29a.apply(this,[_29b]);}};if(args["forward"]){args.forward=tfw;}else{if(args["forwardButton"]){args.forwardButton=tfw;}else{if(args["handle"]){args.handle=tfw;}}}}else{if(!dojo.isIE){if(!_288){_288=setInterval(_296,200);}}}}else{url=_295();}_28c.push(_292(url,args,hash));};back._iframeLoaded=function(evt,_29c){var _29d=_293(_29c.href);if(_29d==null){if(_28c.length==1){_28f();}return;}if(_28d){_28d=false;return;}if(_28c.length>=2&&_29d==_293(_28c[_28c.length-2].url)){_28f();}else{if(_28b.length>0&&_29d==_293(_28b[_28b.length-1].url)){_291();}}};})();}if(!dojo._hasResource["dojo.NodeList-traverse"]){dojo._hasResource["dojo.NodeList-traverse"]=true;dojo.provide("dojo.NodeList-traverse");dojo.extend(dojo.NodeList,{_buildArrayFromCallback:function(_29e){var ary=[];for(var i=0;i<this.length;i++){var _29f=_29e.call(this[i],this[i],ary);if(_29f){ary=ary.concat(_29f);}}return ary;},_filterQueryResult:function(_2a0,_2a1){var _2a2=dojo.filter(_2a0,function(node){return dojo.query(_2a1,node.parentNode).indexOf(node)!=-1;});var _2a3=this._wrap(_2a2);return _2a3;},_getUniqueAsNodeList:function(_2a4){var ary=[];for(var i=0,node;node=_2a4[i];i++){if(node.nodeType==1&&dojo.indexOf(ary,node)==-1){ary.push(node);}}return this._wrap(ary,null,this._NodeListCtor);},_getUniqueNodeListWithParent:function(_2a5,_2a6){var ary=this._getUniqueAsNodeList(_2a5);ary=(_2a6?this._filterQueryResult(ary,_2a6):ary);return ary._stash(this);},_getRelatedUniqueNodes:function(_2a7,_2a8){return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(_2a8),_2a7);},children:function(_2a9){return this._getRelatedUniqueNodes(_2a9,function(node,ary){return dojo._toArray(node.childNodes);});},closest:function(_2aa){var self=this;return this._getRelatedUniqueNodes(_2aa,function(node,ary){do{if(self._filterQueryResult([node],_2aa).length){return node;}}while((node=node.parentNode)&&node.nodeType==1);return null;});},parent:function(_2ab){return this._getRelatedUniqueNodes(_2ab,function(node,ary){return node.parentNode;});},parents:function(_2ac){return this._getRelatedUniqueNodes(_2ac,function(node,ary){var pary=[];while(node.parentNode){node=node.parentNode;pary.push(node);}return pary;});},siblings:function(_2ad){return this._getRelatedUniqueNodes(_2ad,function(node,ary){var pary=[];var _2ae=(node.parentNode&&node.parentNode.childNodes);for(var i=0;i<_2ae.length;i++){if(_2ae[i]!=node){pary.push(_2ae[i]);}}return pary;});},next:function(_2af){return this._getRelatedUniqueNodes(_2af,function(node,ary){var next=node.nextSibling;while(next&&next.nodeType!=1){next=next.nextSibling;}return next;});},nextAll:function(_2b0){return this._getRelatedUniqueNodes(_2b0,function(node,ary){var pary=[];var next=node;while((next=next.nextSibling)){if(next.nodeType==1){pary.push(next);}}return pary;});},prev:function(_2b1){return this._getRelatedUniqueNodes(_2b1,function(node,ary){var prev=node.previousSibling;while(prev&&prev.nodeType!=1){prev=prev.previousSibling;}return prev;});},prevAll:function(_2b2){return this._getRelatedUniqueNodes(_2b2,function(node,ary){var pary=[];var prev=node;while((prev=prev.previousSibling)){if(prev.nodeType==1){pary.push(prev);}}return pary;});},andSelf:function(){return this.concat(this._parent);},first:function(){return this._wrap(((this[0]&&[this[0]])||[]),this);},last:function(){return this._wrap((this.length?[this[this.length-1]]:[]),this);},even:function(){return this.filter(function(item,i){return i%2!=0;});},odd:function(){return this.filter(function(item,i){return i%2==0;});}});}if(dojo.config.afterOnLoad&&dojo.isBrowser){window.setTimeout(dojo._loadInit,1000);}})();

dojo.provide("dj.lang._compat");dj.lang=dojo;
dojo.provide("dj.lang._dom");dojo.require("dojo._base.html");dojo.require("dojo._base.query");(function(){var lng=dj.lang,trim=dojo.trim,isOk=function(c){return((typeof c=="string")&&(c!==""));};var hasc=dojo.hasClass;lng.hasClass=function(el,cname){cname=trim(cname);return isOk(cname)?hasc(el,cname):false;};lng.hasClassName=lng.hasClass;var addc=dojo.addClass;lng.addClass=function(el,cname){cname=trim(cname);return(isOk(cname)&&!hasc(el,cname))?addc(el,cname):null;};lng.addClassName=lng.addClass;var remc=dojo.removeClass;lng.removeClass=function(el,cname){cname=trim(cname);return(isOk(cname)&&hasc(el,cname))?remc(el,cname):null;};lng.removeClassName=lng.removeClass;lng.getViewport=function(){var scrollRoot=(dojo.doc.compatMode=='BackCompat')?dojo.body():dojo.doc.documentElement;var scroll=dojo._docScroll();return{w:scrollRoot.clientWidth,h:scrollRoot.clientHeight,l:scroll.x,t:scroll.y};};}());
dojo.provide("dj.lang._event");dj.lang.addEvent=function(obj,type,fn,context){dojo.deprecated("dj.lang.addEvent","use dojo.connect instead","0.1.0");return dojo.connect(obj,type,(context||null),fn);};dj.lang.removeEvent=function(obj,type,fn){dojo.deprecated("dj.lang.removeEvent","use dojo.removeEvent instead","0.1.0");var evHndl=(dj.lang.isArray(obj))?obj:[obj,type,fn,1];return dojo.disconnect(evHndl);};
dojo.provide("dj.lang._liveEvents");(function(){var d=dojo,addEvent=d.connect,removeEvent=d.disconnect,queryMatches=function(selector,el){return(dojo.Sizzle.matches(selector,[el]).length>0);};if(window.Node&&Node.prototype&&!Node.prototype.contains){Node.prototype.contains=function(arg){return!!(this.compareDocumentPosition(arg)&16);};}
var cancelDefault=function(e){if(typeof e.preventDefault!='undefined'){e.preventDefault();return;}
e.returnValue=false;};var cancelBubble=function(e){if(typeof e.stopPropagation!='undefined'){e.stopPropagation();return;}
e.cancelBubble=true;};var getRelatedTarget=function(e){if(!e){e=window.event;}
var rTarg=e.relatedTarget;if(!rTarg){if('mouseover'==e.type){rTarg=e.fromElement;}
if('mouseout'==e.type){rTarg=e.toElement;}}
return rTarg;};var handlers={click:{},mousedown:{},mouseup:{},dblclick:{},keydown:{},keypress:{},keyup:{},focus:{},blur:{},mouseover:{},mouseout:{},submit:{},reset:{},change:{},select:{}};var getDepth=function(fargs){var result=null;for(var i=2;i<fargs.length;i++){if(!isNaN(parseInt(fargs[i],10))){result=fargs[i];break;}}
if(result===null){result=-1;}
if(result<-1){throw new Error("bad arg for depth, must be -1 or higher");}
return result;};var handlerId=0;var pushFunc=function(selStr,handlerFunc,depth,evName,hoverFlag){var handler=handlers[evName];handlerId++;if(!handlerFunc||(typeof handlerFunc!="function")){return null;}
if(!handler[selStr]){handler[selStr]=[];}
var selHandler={id:handlerId,evName:evName,selector:selStr,handle:handlerFunc,depth:depth,hoverFlag:hoverFlag};handler[selStr].push(selHandler);return selHandler;};var addLiveEvent=function(sel,evName,fn,funcContext){var oldFunc=fn,depth=getDepth(arguments),isHover=(evName==="mouseover"||evName==="mouseout");fn=(!funcContext)?fn:function(){oldFunc.apply(funcContext,arguments);};return pushFunc(sel,fn,depth,evName,isHover);};var removeLiveEvent=function(evl){if(!evl){return;}
var handler=handlers[evl.evName],evBucket=handler[evl.selector];if(!evBucket){return;}
for(var i=0,len=evBucket.length;i<len;i++){var bck=evBucket[i];if((typeof bck!=="undefined")&&(bck.id===evl.id)){delete evBucket[i];evl=null;}}};if(document.all&&!window.opera){var ieSubmitDelegate=function(e){delegate(handlers.submit,e);cancelBubble(e);},ieResetDelegate=function(e){delegate(handlers.reset,e);cancelBubble(e);},ieChangeDelegate=function(e){delegate(handlers.change,e);cancelBubble(e);},ieSelectDelegate=function(e){delegate(handlers.select,e);cancelBubble(e);};addLiveEvent("form","focus",function(){removeEvent(this._submit_prep);this._submit_prep=addEvent(this,'submit',ieSubmitDelegate,false,true);removeEvent(this._reset_prep);this._reset_prep=addEvent(this,'reset',ieResetDelegate,false,true);});addLiveEvent("form","blur",function(){removeEvent(this._submit_prep);removeEvent(this._reset_prep);});addLiveEvent("select,input,textarea","focus",function(){removeEvent(this._change_prep);this._change_prep=addEvent(this,'change',ieChangeDelegate,false,true);});addLiveEvent("select,input,textarea","blur",function(){removeEvent(this._change_prep);});addLiveEvent("input,textarea","focus",function(){removeEvent(this._select_prep);this._select_prep=addEvent(this,'select',ieSelectDelegate,false,true);});addLiveEvent("input,textarea","blur",function(){removeEvent(this._select_prep);});}
var ctr=0;var delegate=function(selectionHandlers,event){if(selectionHandlers){var targ=event.target;for(var sel in selectionHandlers){if(selectionHandlers.hasOwnProperty(sel)){for(var a=0;a<selectionHandlers[sel].length;a++){var selHandler=selectionHandlers[sel][a];if(!selHandler){continue;}
var depth=((selHandler.depth==-1)?100:selHandler.depth),el=targ;for(var b=-1;b<depth&&el&&el.nodeType==1;b++,el=el.parentNode){if(queryMatches(selHandler.selector,el)){if(selHandler.hoverFlag){var relTarg=getRelatedTarget(event);if(relTarg&&(el.contains(relTarg)||el==relTarg)){break;}}
var retVal=selHandler.handle.call(el,event);if(retVal!==undefined&&!retVal){cancelDefault(event);}
break;}}}}}}};var docEl=document.documentElement;addEvent(docEl,'onclick',function(e){delegate(handlers.click,e);});addEvent(docEl,'ondblclick',function(e){delegate(handlers.dblclick,e);});addEvent(docEl,'onmousedown',function(e){delegate(handlers.mousedown,e);});addEvent(docEl,'onmouseup',function(e){delegate(handlers.mouseup,e);});addEvent(docEl,'onmouseover',function(e){delegate(handlers.mouseover,e);});addEvent(docEl,'onmouseout',function(e){delegate(handlers.mouseout,e);});addEvent(docEl,'onfocus',function(e){delegate(handlers.focus,e);});addEvent(docEl,'onblur',function(e){delegate(handlers.blur,e);});addEvent(docEl,'onkeypress',function(e){delegate(handlers.keypress,e);});addEvent(docEl,'onkeydown',function(e){delegate(handlers.keydown,e);});addEvent(docEl,'onkeyup',function(e){delegate(handlers.keyup,e);});addEvent(docEl,'onsubmit',function(e){delegate(handlers.submit,e);});addEvent(docEl,'onreset',function(e){delegate(handlers.reset,e);});addEvent(docEl,'onselect',function(e){delegate(handlers.select,e);});addEvent(docEl,'onchange',function(e){delegate(handlers.change,e);});dj.lang.addLiveEvent=addLiveEvent;dj.lang.removeLiveEvent=removeLiveEvent;})();
dojo.provide("dj.lang._oop");(function(){var dojoExtend=dojo.extend,_extendClass=function(subClass,superClass){dojo.deprecated("dj.lang.extend","use dojo.declare instead","0.1.0");var F=function(){};F.prototype=superClass.prototype;subClass.prototype=new F();subClass.prototype.constructor=subClass;subClass.superclass=superClass.prototype;if(superClass.prototype.constructor==Object.prototype.constructor){superClass.prototype.constructor=superClass;}};dj.lang.extend=function(subClass,superClass){if((arguments.length==2)&&(typeof superClass.prototype=="object")){_extendClass.apply(dojo,arguments);}else{dojoExtend.apply(dojo,arguments);}};}());(function(){var tobj={};dj.lang._langMixin=function(rc,gc){if(!rc){throw new TypeError("dj.lang._langMixin: receiving object is undefined");}
if(!gc){return rc;}
for(var method in gc){if(gc.hasOwnProperty&&gc.hasOwnProperty(method)){var rcm=rc[method],gcm=gc[method];if((rcm!==null)&&(typeof rcm=="object")&&(typeof gcm=="object")){this._langMixin(rcm,gcm);}else if(typeof gcm!=="undefined"&&(rcm!==gcm)){rc[method]=gcm;}
var d=dj.lang;if(d.isIE&&gc){var p=gc.toString;if(typeof p=="function"&&p!=rc.toString&&p!=tobj.toString&&p!="\nfunction toString() {\n    [native code]\n}\n"){rc.toString=gc.toString;}}}}};dj.lang.deepMixin=function(obj,props){if(!obj){obj={};}
for(var i=1,l=arguments.length;i<l;i++){dj.lang._langMixin(obj,arguments[i]);}
return obj;};}());dj.lang.deepClone=function(obj){if(obj===null||typeof obj!='object'){return obj;}
var oClone=new obj.constructor();for(var key in obj){if(obj.hasOwnProperty&&obj.hasOwnProperty(key)){var objKey=obj[key];oClone[key]=this.deepClone(objKey);}}
return oClone;};dj.lang.cloneMixin=function(rc,gc){var cl=this.deepClone(rc);this.deepMixin(cl,gc);return cl;};dj.lang.objectToString=function(obj,isRecursive){if(typeof obj!=="object"){return obj.toString();}
var out=[];var val=null;if(typeof obj.length==='number'&&!obj.propertyIsEnumerable('length')&&typeof obj.splice==='function'){return'['+obj.toString()+']';}
if(!obj.hasOwnProperty&&obj.childNodes){return(obj.id!=="")?("[Element: '"+obj.id+"']"):"[Element]";}else if(!obj.hasOwnProperty){return"[undefined]";}
for(var o in obj){if(obj.hasOwnProperty&&obj.hasOwnProperty(o)){val=null;if(typeof obj[o]=="object"){val=((isRecursive)?this.objectToString(obj[o]):"[Object]");}else if(typeof obj[o]=="function"){val="[Function]";}else if(typeof obj[o]=="string"){val='"'+obj[o]+'"';}else{val=obj[o];}
out[out.length]=(o+": "+val);}}
return'{'+out.join(", ")+'}';};
dojo.provide("dj.lang");dojo.require("dj.lang._compat");dojo.require("dj.lang._dom");dojo.require("dj.lang._event");dojo.require("dj.lang._liveEvents");dojo.require("dj.lang._oop");dojo.provide("dj.util.Omniture");

dj.util.Omniture = { init: function() {
if(this._initd){ return;}else{this._initd=true;}
//-------------------

/* WSJ.com Omniture Metadata Definition*/
var lookup = {
  pagename: "pageName",
  primaryproduct: "channel",
  sitedomain: "server",
  section: "prop1",
  subsection: "prop2",
  atype: "prop3",
  aheadline: "prop4",
  baseurl: "prop5",
  fullurl: "prop6",
  refresh: "prop7",
  csource: "prop8",
  caccess: "prop9",
  link: "prop10",
  reflink: "prop11",
  qtype: "prop12",
  qsymbol: "prop13",
  qcompanyname: "prop14",
  qexchange: "prop15",
  qdatarange: "prop16",
  numads: "prop17",
  searchstatement: "prop18",
  ctype: "prop19",
  abasedocid: "prop20",
  author: "prop21",
  apage: "prop22",
  apublished: "prop23",
  edition: "prop24",
  userid: "prop25",
  basesection: "prop26",
  asub: "prop27",          
  targeturl: "prop38"
};

var elookup = {
  sourcecode: "eVar1",
  promocode: "eVar2",
  userID: "eVar3",
  pagename:"eVar4",
  link: "eVar5",
  reflink: "eVar6",
  abtesting: "eVar7",
  searchstatement: "eVar8",
  downloadtype: "eVar9",
  downloadname: "eVar10",
  primaryproduct: "eVar11",
  subsection: "eVar25"
};

var editionToNameMap = {
  "": "Edition_North_America_USA",
  "na,us": "Edition_North_America_USA",
  europe: "Edition_Europe",
  asia: "Edition_Asia",
  "asia,india": "Edition_Asia"
};

// Internalizing for functions
this.lookup = lookup;
this.elookup = elookup;
this.editionToNameMap = editionToNameMap;

function setMetaData(param_name, param_value) {
  var lookup = dj.util.Omniture.lookup;
  if(!param_name || !param_value || !lookup[param_name.toLowerCase()]){ return;}
  var cmd = "";
  if(param_value.indexOf('"') == -1){
    cmd='s.'+lookup[param_name.toLowerCase()]+'="'+param_value+'\"';
  }else{
    cmd='s.'+lookup[param_name.toLowerCase()]+'='+param_value;
  }
  eval(cmd);
}

function setEVar(param_name, param_value) {
  var elookup = dj.util.Omniture.elookup;
  if(!param_name || !param_value || !elookup[param_name.toLowerCase()]){ return;}
  var cmd = 
's.'+elookup[param_name.toLowerCase()]+'='+param_value;
  eval(cmd);
}

function setEdition(getRegion){
  var editionToNameMap = dj.util.Omniture.editionToNameMap;
////console.log("getRegion for editionToNameMap"+editionToNameMap[getRegion.toLowerCase()]);
return editionToNameMap[getRegion.toLowerCase()];
}

  /* SiteCatalyst code version: H.3.
  Copyright 1997-2005 Omniture, Inc. More info available at
  http://www.omniture.com */
  /* Specify the Report Suite ID(s) to track here */
  var s_account="djglobal,djwsj";

  var env = document.location.host;
  if (env.indexOf('qa') != -1 || env.indexOf('dev') != -1|| env.indexOf('reno') != -1) {
    s_account="dowjdev";
  }

  if(dojo.byId("__autocomplete_view_template")){
    s_account=s_account+"pro";
  }else if(dj.util.Cookie.getGroupCookie("DJCOOKIE","emgsessionid") !== null){
    s_account=s_account+"pro"; 		
  }

// DEFINE "S"
s=s_gi(s_account);

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* E-commerce Config */
s.currencyCode="USD";
/* Link Tracking Config */
s.trackDownloadLinks=true;
s.trackExternalLinks=false;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
s.linkInternalFilters="javascript:,wsj.com,wallstreetjournal.com,bankrate.com,smartmoney.com,barrons.com,marketgauge.com,marketwatch.com,bigcharts.com,virtualstockexchange.com,hulbertinteractive.com,collegejournal.com,careercast.com,careerjournal.com,careerjournalasia.com,realestatejournal.com,loopnet.com,opinionjournal.com,politicaldiary.com,startupjournal.com,homefair.com,myplan.com,contacts.zoominfo.com,secure.theladders.com,selectrecruiters.com,kennedyinfo.com,allisontaylor.com,wsj.careerdev.org,wsj.resumeedge.com,newhomesource.com,blacksguide.com,rej.informars.com,wsj.miniplan.com,wsj.knowledgestorm.com,entrepreneur.com,toolkit.prnewswire.com,tsnn.com,autos.wsj.com";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";

/* WARNING: Changing the visitor namespace will cause drastic changes
to how your visitor data is collected.  Changes should only be made
when instructed to do so by your account manager.*/
s.visitorNamespace="dowjones";
s.trackingServer="om.dowjoneson.com";
s.trackingServerSecure="oms.dowjoneson.com";
s.vmk="44BD02B1";

/* Plugin Config */
s.usePlugins=true;
function s_doPlugins(s) {
  /* Add calls to plugins here */
  s.campaign=s.getQueryParam('cid');
  s.prop49=s.getVisitNum();
}
s.doPlugins=s_doPlugins;
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
/*
 * Plugin: getPageName v2.0 - parse URL and return
 */
s.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p[p.length-1]=='/'?s.defaultP"
+"age:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=s.fl("
+"p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p.substri"
+"ng(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x;z=s.fl"
+"(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.substrin"
+"g(x+1)}return n");
/*                                                                  
 * Plugin: Visit Number By Month 2.0 - Return the user visit number 
 */
s.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}"
);

/*
 * Plugin: Days Before Event 1.0.H - capture time before first event
 */
s.getDaysBeforeEvent=new Function(""
+"var s=this,e=new Date(),cval,pve,ct=e.getTime(),c='s_dbfe',pv='s_pv"
+"',day=24*60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);pve=s.c_r"
+"(pv);if(!pve){if(!cval){s.c_w(c,ct,e);return '';}else{var d"
+"=ct-cval;if(s.events.indexOf('event6') != -1){s.c_w(pv,ct,e);if(d>90*day){s.c_w(c"
+",ct,e);return"
+"'More than 90 Days';}if(d<90*day+1 && d>61*day){s.c_w(c,ct,e);return"
+"'61 - 90 Days';}if(d<60*day+1 && d>31*day){s.c_w(c,ct,e);return"
+"'31 - 60 Days';}if(d<30*day+1 && d>15*day){s.c_w(c,ct,e);return"
+"'15 - 30 Days';}if(d<14*day+1 && d>8*day){s.c_w(c,ct,e);return"
+"'8 - 14 Days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return"
+"'2 - 7 Days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 D"
+"ay';}}else return '';}}"
);

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="=fun`o(~.substring(~){`Ps=^O~.indexOf(~#2 ~;$2~`b$2~=new Fun`o(~.length~.toLowerCase()~`Ps#8c_#k^an+'],~=new Object~};s.~`YMigrationServer~.toU"
+"pperCase~){$2~','~s.wd~);s.~')q='~=new Array~ookieDomainPeriods~.location~^LingServer~dynamicAccount~var ~link~s.m_~=='~s.apv~BufferedRequests~Element~)$2x^b!Object#WObject.prototype#WObject.protot"
+"ype[x])~etTime~visitor~$w@c(~referrer~else ~s.pt(~s.maxDelay~}c#E(e){~#i+~=''~.lastIndexOf(~^wc_i~}$2~.protocol~=new Date~^wobjectID=s.ppu=$I=$Iv1=$Iv2=$Iv3~for(i=~ction~javaEnabled~onclick~Name~te"
+"rnalFilters~javascript~s.dl~@6s.b.addBehavior(\"# default# ~=parseFloat(~typeof(v)==\"~window~cookie~while(~s.vl_g~Type~;i#U{~tfs~s.un~&&s.~o^woid~browser~.parent~document~colorDepth~String~.host~s"
+".fl(~s.rep(~s.eo~'+tm@S~s.sq~parseInt(~t=s.ot(o)~track~nload~j='1.~this~#PURL~}else{~s.vl_l~lugins~'){q='~dynamicVariablePrefix~');~;for(~Sampling~s.rc[un]~Event~._i~&&(~loadModule~resolution~s.c_r"
+"(~s.c_w(~s.eh~s.isie~\"m_\"+n~Secure~Height~tcf~isopera~ismac~escape(~'s_~.href~screen.~s#8gi(~Version~harCode~variableProvider~.s_~)s_sv(v,n[k],i)}~')>=~){s.~)?'Y':'N'~u=m[t+1](~i)clearTimeout(~e&"
+"&l$bSESSION'~name~home#P~;try{~,$m)~s.ssl~s.oun~s.rl[u~Width~o.type~s.vl_t~=s.sp(~Lifetime~s.gg('objectID~sEnabled~'+n+'~.mrq(@wun+'\"~ExternalLinks~charSet~lnk~onerror~http~currencyCode~.src~disab"
+"le~.get~MigrationKey~(''+~&&!~f',~){t=~r=s[f](~u=m[t](~Opera~Math.~s.ape~s.fsg~s.ns6~conne~InlineStats~&&l$bNONE'~Track~'0123456789~true~+\"_c\"]~s.epa(~t.m_nl~s.va_t~m._d~n=s.oid(o)~,'sqs',q);~Lea"
+"veQuery~?'&~'=')~n){~\"'+~){n=~'_'+~'+n;~\",''),~,255)}~if(~vo)~s.sampled~=s.oh(o);~+(y<1900?~n]=~1);~&&o~:'';h=h?h~;'+(n?'o.~sess~campaign~lif~ in ~s.co(~ffset~s.pe~m._l~s.c_d~s.brl~s.nrs~s[mn]~,'"
+"vo~s.pl~=(apn~space~\"s_gs(\")~vo._t~b.attach~2o7.net'~Listener~Year(~d.create~=s.n.app~)}}}~!='~'||t~)+'/~s()+'~){p=~():''~a['!'+t]~&&c){~://')i+=~){v=s.n.~channel~100~rs,~.target~o.value~s_si(t)~"
+"')dc='1~\".tl(\")~etscape~s_')t=t~omePage~='+~&&t~[b](e);~\"){n[k]~';s.va_~a+1,b):~return~mobile~height~events~random~code~=s_~=un~,pev~'MSIE ~'fun~floor(~atch~transa~s.num(~m._e~s.c_gd~,'lt~tm.g~."
+"inner~;s.gl(~,f1,f2~',s.bc~page~Group,~.fromC~sByTag~')<~++)~)){~||!~+';'~i);~y+=~l&&~''+x~[t]=~[i]=~[n];~' '+~'+v]~>=5)~:'')~+1))~il['+s~!a[t])~~s._c=^pc';`H=`y`5!`H`i@v`H`il`K;`H`in=0;}s^al=`H`il"
+";s^an=`H`in;s^al[s^a$7s;`H`in++;s.an#8an;s.cls`0x,c){`Pi,y`g`5!c)c=^O.an;`n0;i<x`8^3n=x`1i,i+1)`5c`3n)>=0)#Zn}`4y`Cfl`0x,l){`4x?@Ux)`10,l):x`Cco`0o`F!o)`4o;`Pn`B,x^Wx$Fo)$2x`3'select#T0&&x`3'filter"
+"#T0)n[x]=o[x];`4n`Cnum`0x){x`g+x^W`Pp=0;p<x`8;p#U$2(@j')`3x`1p,p#j<0)`40;`41`Crep#8rep;s.sp#8sp;s.jn#8jn;@c`0x`2,h=@jABCDEF',i,c=s.@L,n,l,e,y`g;c=c?c`E$g`5x){x`g+x`5c`SAUTO'^b'').c^uAt){`n0;i<x`8^3"
+"c=x`1i,i+$8n=x.c^uAt(i)`5n>127){l=0;e`g;^0n||l<4){e=h`1n%16,n%16+1)+e;n=(n-n%16)/16;l++}#Z'%u'+e}`6c`S+')#Z'%2B';`b#Z^oc)}x=y^Qx=x?^F^o#b),'+`G%2B'):x`5x&&c^6em==1&&x`3'%u#T0&&x`3'%U#T0){i=x`3'%^V^"
+"0i>=0){i++`5h`18)`3x`1i,i+1)`E())>=0)`4x`10,i)+'u00'+x`1#Yi=x`3'%',i$a}`4x`Cepa`0x`2;`4x?un^o^F#b,'+`G ')):x`Cpt`0x,d,f,a`2,t=x,z=0,y,r;^0t){y=t`3d);y=y<0?t`8:y;t=t`10,y);@Yt,a)`5r)`4r;z+=y+d`8;t=x"
+"`1z,x`8);t=z<x`8?t:''}`4''`Cisf`0t,a){`Pc=a`3':')`5c>=0)a=a`10,c)`5t`10,2)`S$u`12);`4(t!`g$x==a)`Cfsf`0t,a`2`5`ca,`G,'is@Wt))@d+=(@d!`g?`G`ft;`40`Cfs`0x,f`2;@d`g;`cx,`G,'fs@Wf);`4@d`Csi`0wd`2,c`g+s"
+"_gi,a=c`3\"{\"),b=c`h\"}\"),m;c#8fe(a>0&&b>0?c`1#10)`5wd&&wd.^A$iwd.s`Xout(#C`o s_sv(o,n,k){`Pv=o[k],i`5v`F`xstring\"||`xnumber\")n[k]=v;`bif (`xarray$z`K;`n0;i<v`8;i++^x`bif (`xobject$z`B^Wi$Fv^x}"
+"}fun`o $q{`Pwd=`y,s,i,j,c,a,b;wd^wgi`7\"un\",\"pg\",\"ss\",@wc+'\");wd.^s@w@9+'\");s=wd.s;s.sa(@w^5+'\"`I^4=wd;`c^1,\",\",\"vo1\",t`I@M=^G=s.`Q`r=s.`Q^2=`H`m=\\'\\'`5t.m_#a@n)`n0;i<@n`8^3n=@n[i]`5@"
+"vm=t#ec=t[^i]`5m$ic=\"\"+c`5c`3\"fun`o\")>=0){a=c`3\"{\");b=c`h\"}\");c=a>0&&b>0?c`1#10;s[^i@l=c`5#H)s.^c(n)`5s[n])for(j=0;j<$J`8;j#Us_sv(m,s[n],$J[j]$a}}`Pe,o,t@6o=`y.opener`5o$9^wgi@Xo^wgi(@w^5+'"
+"\")`5t)$q}`e}',1)}`Cc_d`g;#If`0t,a`2`5!#Gt))`41;`40`Cc_gd`0`2,d=`H`M^D@4,n=s.fpC`L,p`5!n)n=s.c`L`5d@V$K@xn?^Jn):2;n=n>2?n:2;p=d`h'.')`5p>=0){^0p>=0&&n>1$fd`h'.',p-$8n--}$K=p>0&&`cd,'.`Gc_gd@W0)?d`1"
+"p):d}}`4$K`Cc_r`0k`2;k=@c(k);`Pc=#fs.d.`z,i=c`3#fk+@u,e=i<0?i:c`3';',i),v=i<0?'':@mc`1i+2+k`8,e<0?c`8:e));`4v$b[[B]]'?v:''`Cc_w`0k,v,e`2,d=#I(),l=s.`z@F,t;v`g+v;l=l?@Ul)`E$g`5@3@h@X(v!`g?^Jl?l:0):-"
+"60)`5t){e`l;e.s`X(e.g`X()+(t*$m0))}`jk@h^zd.`z=k+'`Zv!`g?v:'[[B]]')+'; path=/;'+(@3?' expires$we.toGMT^C()#X`f(d?' domain$wd#X:'^V`4^ek)==v}`40`Ceh`0o,e,r,f`2,b=^p'+e+@ys^an,n=-1,l,i,x`5!^gl)^gl`K;"
+"l=^gl;`n0;i<l`8&&n<0;i++`Fl[i].o==o&&l[i].e==e)n=i`jn<0@xi;l[n]`B}x=l#ex.o=o;x.e=e;f=r?x.b:f`5r||f){x.b=r?0:o[e];x.o[e]=f`jx.b){x.o[b]=x.b;`4b}`40`Ccet`0f,a,t,o,b`2,r,^l`5`T>=5^b!s.^m||`T>=7#V^l`7'"
+"s`Gf`Ga`Gt`G`Pe,r@6@Ya)`er=s[t](e)}`4r^Vr=^l(s,f,a,t)^Q$2s.^n^6u`3#B4^y0)r=s[b](a);else{^g(`H,'@N',0,o);@Ya`Ieh(`H,'@N',1)}}`4r`Cg^4et`0e`2;`4s.^4`Cg^4oe`7'e`G`Ac;^g(`y,\"@N\",1`Ie^4=1;c=s.t()`5c)s"
+".d.write(c`Ie^4=0;`4@k'`Ig^4fb`0a){`4`y`Cg^4f`0w`2,p=w^9,l=w`M;s.^4=w`5p&&p`M!=#ap`M^D==l^D^z^4=p;`4s.g^4f(s.^4)}`4s.^4`Cg^4`0`2`5!s.^4^z^4=`H`5!s.e^4)s.^4=s.cet('g^4@Ws.^4,'g^4et',s.g^4oe,'g^4fb')"
+"}`4s.^4`Cmrq`0u`2,l=@A],n,r;@A]=0`5l)for(n=0;n<l`8;n#U{r=l#es.mr(0,0,r.r,0,r.t,r.u)}`Cbr`0id,rs`2`5s.@R`U#W^f^pbr',rs))$L=rs`Cflush`U`0){^O.fbr(0)`Cfbr`0id`2,br=^e^pbr')`5!br)br=$L`5br`F!s.@R`U)^f^"
+"pbr`G'`Imr(0,0,br)}$L=0`Cmr`0$C,q,$nid,ta,u`2,dc=s.dc,t1=s.`N,t2=s.`N^j,tb=s.`NBase,p='.sc',ns=s.`Y`r$R,un=s.cls(u?u:(ns?ns:s.fun)),r`B,l,imn=^pi_'+(un),im,b,e`5!rs`Ft1`Ft2^6ssl)t1=t2^Q$2!tb)tb='$V"
+"`5dc)dc=@Udc)`9;`bdc='d1'`5tb`S$V`Fdc`Sd1$r12';`6dc`Sd2$r22';p`g}t1#9+'.'+dc+'.'+p+tb}rs='@O'+(@8?'s'`f'://'+t1+'/b/ss/'+^5+'/'+(s.#3?'5.1':'1'$dH.20.3/'+$C+'?AQB=1&ndh=1'+(q?q`f'&AQE=1'`5^h@Vs.^n`"
+"F`T>5.5)rs=^E$n4095);`brs=^E$n2047)`jid^zbr(id,rs);#2}`js.d.images&&`T>=3^b!s.^m||`T>=7)^b@e<0||`T>=6.1)`F!s.rc)s.rc`B`5!^Y){^Y=1`5!s.rl)s.rl`B;@An]`K;s`Xout('$2`y`il)`y`il['+s^an+']@J)',750)^Ql=@A"
+"n]`5l){r.t=ta;r.u#9;r.r=rs;l[l`8]=r;`4''}imn+=@y^Y;^Y++}im=`H[imn]`5!im)im=`H[im$7new Image;im^wl=0;im.o^M`7'e`G^O^wl=1;`Pwd=`y,s`5wd`il){s=wd`il['+s^an+'];s@J`Inrs--`5!$M)`Rm(\"rr\")}')`5!$M^znrs="
+"1;`Rm('rs')}`b$M++;im@Q=rs`5rs`3'&pe=^y0^b!ta||ta`S_self$ca`S_top'||(`H.@4$xa==`H.@4)#Vb=e`l;^0!im^w#ae.g`X()-b.g`X()<500)e`l}`4''}`4'<im'+'g sr'+'c=@wrs+'\" width=1 #4=1 border=0 alt=\"\">'`Cgg`0v"
+"`2`5!`H[^p#g)`H[^p#g`g;`4`H[^p#g`Cglf`0t,a`Ft`10,2)`S$u`12);`Ps=^O,v=s.gg(t)`5v)s#cv`Cgl`0v`2`5s.pg)`cv,`G,'gl@W0)`Crf`0x`2,y,i,j,h,l,a,b`g,c`g,t`5x){y`g+x;i=y`3'?')`5i>0){a=y`1i+$8y=y`10,#Yh=y`9;i"
+"=0`5h`10,7)`S@O$j7;`6h`10,8)`S@Os$j8;h=h`1#Yi=h`3\"/\")`5i>0){h=h`10,i)`5h`3'google^y0){a@Ea,'&')`5a`8>1){l=',q,ie,start,search_key,word,kw,cd,'^Wj=0;j<a`8;j++@Xa[j];i=t`3@u`5i>0&&l`3`G+t`10,i)+`G)"
+">=0)b+=(b@t'`ft;`bc+=(c@t'`ft`jb$i#Z'?'+b+'&'+c`5#b!=y)x=y}}}}}}`4x`Chav`0`2,qs`g,fv=s.`Q@iVa$nfe=s.`Q@i^Zs,mn,i`5$I){mn=$I`10,1)`E()+$I`11)`5$N){fv=$N.^LVars;fe=$N.^L^Zs}}fv=fv?fv+`G+^R+`G+^R2:'';"
+"`n0;i<@o`8^3`Pk=@o[i],v=s[k],b=k`10,4),x=k`14),n=^Jx),q=k`5v&&k$b`Q`r'&&k$b`Q^2'`F$I||s.@M||^G`Ffv^b`G+fv+`G)`3`G+k+`G)<0)v`g`5k`S#5'&&fe)v=s.fs(v,fe)`jv`Fk`S^U`JD';`6k`S`YID`Jvid';`6k`S^P^Tg';v=^E"
+"v$1`6k`S`a^Tr';v=^Es.rf(v)$1`6k`Svmk'||k`S`Y@T`Jvmt';`6k`S`D^Tvmf'`5@8^6`D^j)v`g}`6k`S`D^j^Tvmf'`5!@8^6`D)v`g}`6k`S@L^Tce'`5v`E()`SAUTO')v='ISO8859-1';`6s.em==2)v='UTF-8'}`6k`S`Y`r$R`Jns';`6k`Sc`L`"
+"Jcdp';`6k`S`z@F`Jcl';`6k`S^v`Jvvp';`6k`S@P`Jcc';`6k`S$l`Jch';`6k`S#F`oID`Jxact';`6k`S$D`Jv0';`6k`S^d`Js';`6k`S^B`Jc';`6k`S`t^t`Jj';`6k`S`p`Jv';`6k`S`z@H`Jk';`6k`S^8@B`Jbw';`6k`S^8^k`Jbh';`6k`S@f`o^"
+"2`Jct';`6k`S@5`Jhp';`6k`Sp^S`Jp';`6#Gx)`Fb`Sprop`Jc@z`6b`SeVar`Jv@z`6b`Slist`Jl@z`6b`Shier^Th@zv=^Ev$1`jv)qs+='&'+q+'$w(k`10,3)$bpev'?@c(v):v$a`4qs`Cltdf`0t,h@Xt?t`9$A`9:'';`Pqi=h`3'?^Vh=qi>=0?h`10"
+",qi):h`5t&&h`1h`8-(t`8#j`S.'+t)`41;`40`Cltef`0t,h@Xt?t`9$A`9:''`5t&&h`3t)>=0)`41;`40`Clt`0h`2,lft=s.`QDow^MFile^2s,lef=s.`QEx`s,$E=s.`QIn`s;$E=$E?$E:`H`M^D@4;h=h`9`5s.^LDow^MLinks&&lft&&`clft,`G#Jd"
+"@Wh))`4'd'`5s.^L@K&&h`10,1)$b# '^blef||$E)^b!lef||`clef,`G#Je@Wh))^b!$E#W`c$E,`G#Je@Wh)))`4'e';`4''`Clc`7'e`G`Ab=^g(^O,\"`q\"`I@M=$G^O`It(`I@M=0`5b)`4^O$y`4@k'`Ibc`7'e`G`Af,^l`5s.d^6d.all^6d.all.cp"
+"pXYctnr)#2;^G=e@Q`V?e@Q`V:e$o;^l`7\"s\",\"`Pe@6$2^G^b^G.tag`r||^G^9`V||^G^9Node))s.t()`e}\");^l(s`Ieo=0'`Ioh`0o`2,l=`H`M,h=o^q?o^q:'',i,j,k,p;i=h`3':^Vj=h`3'?^Vk=h`3'/')`5h^bi<0||(j>=0&&i>j)||(k>=0"
+"&&i>k))$fo`k$9`k`8>1?o`k:(l`k?l`k:'^Vi=l.path@4`h'/^Vh=(p?p+'//'`f(o^D?o^D:(l^D?l^D#i)+(h`10,1)$b/'?l.path@4`10,i<0?0:i$d'`fh}`4h`Cot`0o){`Pt=o.tag`r;t=t$x`E?t`E$g`5t`SSHAPE')t`g`5t`Ft`SINPUT'&&@C&"
+"&@C`E)t=@C`E();`6!t$9^q)t='A';}`4t`Coid`0o`2,^K,p,c,n`g,x=0`5t@V^7$fo`k;c=o.`q`5o^q^bt`SA$c`SAREA')^b!c#Wp||p`9`3'`t#T0))n$5`6c@x^Fs.rep(^Fs.rep@Uc,\"\\r$0\"\\n$0\"\\t$0' `G^Vx=2}`6$p^bt`SINPUT$c`S"
+"SUBMIT')@x$p;x=3}`6o@Q$x`SIMAGE')n=o@Q`5@v^7=^En@7;^7t=x}}`4^7`Crqf`0t,un`2,e=t`3@u,u=e>=0?`G+t`10,e)+`G:'';`4u&&u`3`G+un+`G)>=0?@mt`1e#j:''`Crq`0un`2,c#9`3`G),v=^e^psq'),q`g`5c<0)`4`cv,'&`Grq@Wun)"
+";`4`cun,`G,'rq',0)`Csqp`0t,a`2,e=t`3@u,q=e<0?'':@mt`1e+1)`Isqq[q]`g`5e>=0)`ct`10,e),`G@r`40`Csqs`0un,q`2;^Iu[u$7q;`40`Csq`0q`2,k=^psq',v=^ek),x,c=0;^Iq`B;^Iu`B;^Iq[q]`g;`cv,'&`Gsqp',0`Ipt(^5,`G@rv`"
+"g^Wx$F^Iu`W)^Iq[^Iu[x]]+=(^Iq[^Iu[x]]?`G`fx^Wx$F^Iq`W^6sqq[x]^bx==q||c<2#Vv+=(v@t'`f^Iq[x]+'`Zx);c++}`4^fk,v,0)`Cwdl`7'e`G`Ar=@k,b=^g(`H,\"o^M\"),i,o,oc`5b)r=^O$y`n0;i<s.d.`Qs`8^3o=s.d.`Qs[i];oc=o."
+"`q?\"\"+o.`q:\"\"`5(oc`3$S<0||oc`3\"^woc(\")>=0)$9c`3$s<0)^g(o,\"`q\",0,s.lc);}`4r^V`Hs`0`2`5`T>3^b!^h#Ws.^n||`T#h`Fs.b^6$U^Z)s.$U^Z('`q#O);`6s.b^6b.add^Z$W)s.b.add^Z$W('click#O,false);`b^g(`H,'o^M"
+"',0,`Hl)}`Cvs`0x`2,v=s.`Y^X,g=s.`Y^X#Qk=^pvsn_'+^5+(g?@yg#i,n=^ek),e`l,y=e@S$X);e.set$Xy+10$61900:0))`5v){v*=$m`5!n`F!^fk,x,e))`40;n=x`jn%$m00>v)`40}`41`Cdyasmf`0t,m`Ft&&m&&m`3t)>=0)`41;`40`Cdyasf`"
+"0t,m`2,i=t?t`3@u:-1,n,x`5i>=0&&m){`Pn=t`10,i),x=t`1i+1)`5`cx,`G,'dyasm@Wm))`4n}`40`Cuns`0`2,x=s.`OSele`o,l=s.`OList,m=s.`OM#E,n,i;^5=^5`9`5x&&l`F!m)m=`H`M^D`5!m.toLowerCase)m`g+m;l=l`9;m=m`9;n=`cl,"
+"';`Gdyas@Wm)`5n)^5=n}i=^5`3`G`Ifun=i<0?^5:^5`10,i)`Csa`0un`2;^5#9`5!@9)@9#9;`6(`G+@9+`G)`3`G+un+`G)<0)@9+=`G+un;^5s()`Cm_i`0n,a`2,m,f=n`10,1),r,l,i`5!`Rl)`Rl`B`5!`Rnl)`Rnl`K;m=`Rl[n]`5!a&&m&&#H@Vm^"
+"a)`Ra(n)`5!m){m`B,m._c=^pm';m^an=`H`in;m^al=s^al;m^al[m^a$7m;`H`in++;m.s=s;m._n=n;$J`K('_c`G_in`G_il`G_i`G_e`G_d`G_dl`Gs`Gn`G_r`G_g`G_g1`G_t`G_t1`G_x`G_x1`G_rs`G_rr`G_l'`Im_l[$7m;`Rnl[`Rnl`8]=n}`6m"
+"._r@Vm._m){r=m._r;r._m=m;l=$J;`n0;i<l`8;i#U$2m[l[i]])r[l[i]]=m[l[i]];r^al[r^a$7r;m=`Rl[$7r`jf==f`E())s[$7m;`4m`Cm_a`7'n`Gg`Ge`G$2!g)g=^i;`Ac=s[g@l,m,x,f=0`5!c)c=`H[\"s_\"+g@l`5c&&s_d)s[g]`7\"s\",s_"
+"ft(s_d(c)));x=s[g]`5!x)x=`H[\\'s_\\'+g]`5!x)x=`H[g];m=`Ri(n,1)`5x^b!m^a||g!=^i#Vm^a=f=1`5(\"\"+x)`3\"fun`o\")>=0)x(s);`b`Rm(\"x\",n,x,e)}m=`Ri(n,1)`5@pl)@pl=@p=0;`ut();`4f'`Im_m`0t,n,d,e@X@yt;`Ps=^"
+"O,i,x,m,f=@yt,r=0,u`5`R#a`Rnl)`n0;i<`Rnl`8^3x=`Rnl[i]`5!n||x==@vm=`Ri(x);u=m[t]`5u`F@Uu)`3#C`o^y0`Fd&&e)@Zd,e);`6d)@Zd);`b@Z)}`ju)r=1;u=m[t+1]`5u@Vm[f]`F@Uu)`3#C`o^y0`Fd&&e)@1d,e);`6d)@1d);`b@1)}}m"
+"[f]=1`5u)r=1}}`4r`Cm_ll`0`2,g=`Rdl,i,o`5g)`n0;i<g`8^3o=g[i]`5o)s.^c(o.n,o.u,o.d,o.l,o.e,$8g#d0}`C^c`0n,u,d,l,e,ln`2,m=0,i,g,o=0#N,c=s.h?s.h:s.b,b,^l`5@vi=n`3':')`5i>=0){g=n`1i+$8n=n`10,i)}`bg=^i;m="
+"`Ri(n)`j(l||(n@V`Ra(n,g)))&&u^6d&&c^6$Y`V`Fd){@p=1;@pl=1`jln`F@8)u=^Fu,'@O:`G@Os:^Vi=^ps:'+s^an+':@I:'+g;b='`Ao=s.d@S`VById(@wi+'\")`5s$9`F!o.#a`H.'+g+'){o.l=1`5o.@2o.#Yo.i=0;`Ra(\"@I\",@wg+'@w(e?'"
+",@we+'\"'`f')}';f2=b+'o.c++`5!`d)`d=250`5!o.l$9.c<(`d*2)/$m)o.i=s`Xout(o.f2@7}';f1`7'e',b+'}^V^l`7's`Gc`Gi`Gu`Gf1`Gf2`G`Pe,o=0@6o=s.$Y`V(\"script\")`5o){@C=\"text/`t\"$Bid=i;o.defer=@k;o.o^M=o.onre"
+"adystatechange=f1;o.f2=f2;o.l=0;'`f'o@Q=u;c.appendChild(o)$Bc=0;o.i=s`Xout(f2@7'`f'}`eo=0}`4o^Vo=^l(s,c,i,u#N)^Qo`B;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=`Rdl`5!g)g=`Rdl`K;i=0;^0i<g`8&&g[i])i++;g#d"
+"o}}`6@vm=`Ri(n);#H=1}`4m`Cvo1`0t,a`Fa[t]||$h)^O#ca[t]`Cvo2`0t,a`F#l{a#c^O[t]`5#l$h=1}`Cdlt`7'`Ad`l,i,vo,f=0`5`ul)`n0;i<`ul`8^3vo=`ul[i]`5vo`F!`Rm(\"d\")||d.g`X()-$T>=`d){`ul#d0;s.t($3}`bf=1}`j`u@2`"
+"ui`Idli=0`5f`F!`ui)`ui=s`Xout(`ut,`d)}`b`ul=0'`Idl`0vo`2,d`l`5!$3vo`B;`c^1,`G$O2',$3;$T=d.g`X()`5!`ul)`ul`K;`ul[`ul`8]=vo`5!`d)`d=250;`ut()`Ct`0vo,id`2,trk=1,tm`l,sed=Math&&@b#6?@b#D@b#6()*$m000000"
+"00000):#K`X(),$C='s'+@b#D#K`X()/10800000)%10+sed,y=tm@S$X),vt=tm@SDate($d^HMonth($d'$6y+1900:y)+' ^HHour$e:^HMinute$e:^HSecond$e ^HDay()+#f#K`XzoneO$H(),^l,^4=s.g^4(),ta`g,q`g,qs`g,#7`g,vb`B#M^1`Iu"
+"ns(`Im_ll()`5!s.td){`Ptl=^4`M,a,o,i,x`g,c`g,v`g,p`g,bw`g,bh`g,^N0',k=^f^pcc`G@k',0@0,hp`g,ct`g,pn=0,ps`5^C&&^C.prototype){^N1'`5j.m#E){^N2'`5tm.setUTCDate){^N3'`5^h^6^n&&`T#h^N4'`5pn.toPrecisio@v^N"
+"5';a`K`5a.forEach){^N6';i=0;o`B;^l`7'o`G`Pe,i=0@6i=new Iterator(o)`e}`4i^Vi=^l(o)`5i&&i.next)^N7'}}}}`j`T>=4)x=^rwidth+'x'+^r#4`5s.isns||s.^m`F`T>=3$k`p(@0`5`T>=4){c=^rpixelDepth;bw=`H#L@B;bh=`H#L^"
+"k}}$P=s.n.p^S}`6^h`F`T>=4$k`p(@0;c=^r^B`5`T#h{bw=s.d.^A`V.o$H@B;bh=s.d.^A`V.o$H^k`5!s.^n^6b){^l`7's`Gtl`G`Pe,hp=0`vh$v\");hp=s.b.isH$v(tl)?\"Y\":\"N\"`e}`4hp^Vhp=^l(s,tl);^l`7's`G`Pe,ct=0`vclientCa"
+"ps\");ct=s.b.@f`o^2`e}`4ct^Vct=^l(s$a`br`g`j$P)^0pn<$P`8&&pn<30){ps=^E$P[pn].@4@7#X`5p`3ps)<0)p+=ps;pn++}s.^d=x;s.^B=c;s.`t^t=j;s.`p=v;s.`z@H=k;s.^8@B=bw;s.^8^k=bh;s.@f`o^2=ct;s.@5=hp;s.p^S=p;s.td="
+"1`j$3{`c^1,`G$O2',vb`Ipt(^1,`G$O1',$3`js.useP^S)s.doP^S(s);`Pl=`H`M,r=^4.^A.`a`5!s.^P)s.^P=l^q?l^q:l`5!s.`a@Vs._1_`a^z`a=r;s._1_`a=1`j(vo&&$T)#W`Rm('d'#V`Rm('g')`5s.@M||^G){`Po=^G?^G:s.@M`5!o)`4'';"
+"`Pp=s.#P`r,w=1,^K,@q,x=^7t,h,l,i,oc`5^G$9==^G){^0o@Vn$x$bBODY'){o=o^9`V?o^9`V:o^9Node`5!o)`4'';^K;@q;x=^7t}oc=o.`q?''+o.`q:''`5(oc`3$S>=0$9c`3\"^woc(\")<0)||oc`3$s>=0)`4''}ta=n?o$o:1;h$5i=h`3'?^Vh="
+"s.`Q@s^C||i<0?h:h`10,#Yl=s.`Q`r;t=s.`Q^2?s.`Q^2`9:s.lt(h)`5t^bh||l))q+='&pe=@M_'+(t`Sd$c`Se'?@c(t):'o')+(h@tpev1`Zh)`f(l@tpev2`Zl):'^V`btrk=0`5s.^L@g`F!p$fs.^P;w=0}^K;i=o.sourceIndex`5@G')@x@G^Vx=1"
+";i=1`jp&&n$x)qs='&pid`Z^Ep,255))+(w@tpidt$ww`f'&oid`Z^En@7)+(x@toidt$wx`f'&ot`Zt)+(i@toi$wi#i}`j!trk@Vqs)`4'';$4=s.vs(sed)`5trk`F$4)#7=s.mr($C,(vt@tt`Zvt)`fs.hav()+q+(qs?qs:s.rq(^5)),0,id,ta);qs`g;"
+"`Rm('t')`5s.p_r)s.p_r(`I`a`g}^I(qs);^Q`u($3;`j$3`c^1,`G$O1',vb`I@M=^G=s.`Q`r=s.`Q^2=`H`m`g`5s.pg)`H^w@M=`H^weo=`H^w`Q`r=`H^w`Q^2`g`5!id@Vs.tc^ztc=1;s.flush`U()}`4#7`Ctl`0o,t,n,vo`2;s.@M=$Go`I`Q^2=t"
+";s.`Q`r=n;s.t($3}`5pg){`H^wco`0o){`P^s\"_\",1,$8`4$Go)`Cwd^wgs`0u@v`P^sun,1,$8`4s.t()`Cwd^wdc`0u@v`P^sun,$8`4s.t()}}@8=(`H`M`k`9`3'@Os^y0`Id=^A;s.b=s.d.body`5s.d@S`V#S`r^zh=s.d@S`V#S`r('HEAD')`5s.h"
+")s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;@e=s.u`3'N$t6/^V`Papn$Z`r,v$Z^t,ie=v`3#B'),o=s.u`3'@a '),i`5v`3'@a^y0||o>0)apn='@a';^h$Q`SMicrosoft Internet Explorer'`Iisns$Q`SN$t'`I^m$Q`S@a'`I^n=(s.u`"
+"3'Mac^y0)`5o>0)`T`ws.u`1o+6));`6ie>0){`T=^Ji=v`1ie+5))`5`T>3)`T`wi)}`6@e>0)`T`ws.u`1@e+10));`b`T`wv`Iem=0`5^C#R^u){i=^o^C#R^u(256))`E(`Iem=(i`S%C4%80'?2:(i`S%U0$m'?1:0))}s.sa(un`Ivl_l='^U,`YID,vmk,"
+"`Y@T,`D,`D^j,ppu,@L,`Y`r$R,c`L,`z@F,#P`r,^P,`a,@P#0l@E^R,`G`Ivl_t=^R+',^v,$l,server,#P^2,#F`oID,purchaseID,$D,state,zip,#5,products,`Q`r,`Q^2'^W`Pn=1;n<51;n#U@D+=',prop@I,eVar@I,hier@I,list@z^R2=',"
+"tnt,pe#A1#A2#A3,^d,^B,`t^t,`p,`z@H,^8@B,^8^k,@f`o^2,@5,p^S';@D+=^R2;@o@E@D,`G`Ivl_g=@D+',`N,`N^j,`NBase,fpC`L,@R`U,#3,`Y^X,`Y^X#Q`OSele`o,`OList,`OM#E,^LDow^MLinks,^L@K,^L@g,`Q@s^C,`QDow^MFile^2s,`"
+"QEx`s,`QIn`s,`Q@iVa$n`Q@i^Zs,`Q`rs,@M,eo,_1_`a#0g@E^1,`G`Ipg=pg#M^1)`5!ss)`Hs()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(!s._c||s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s;}}}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i);}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss);}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss);}



//-------------------
// Local to Global
//-------------------
var _w = window;

_w.s = s;
_w.lookup = lookup; // for Tracking.js getMetaData
_w.setMetaData = setMetaData;
_w.setEVar = setEVar;
_w.setEdition= setEdition;

//-------------------
}}; // init & tracking obj
//prototype.js
var Prototype={Version:'1.6.0.2',Browser:{IE:!!(window.attachEvent&&!window.opera),Opera:!!window.opera,WebKit:navigator.userAgent.indexOf('AppleWebKit/')>-1,Gecko:navigator.userAgent.indexOf('Gecko')>-1&&navigator.userAgent.indexOf('KHTML')==-1,MobileSafari:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/)},BrowserFeatures:{XPath:!!document.evaluate,ElementExtensions:!!window.HTMLElement,SpecificElementExtensions:document.createElement('div').__proto__&&document.createElement('div').__proto__!==document.createElement('form').__proto__},ScriptFragment:'<script[^>]*>([\\S\\s]*?)<\/script>',JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(x){return x}};if(Prototype.Browser.MobileSafari)Prototype.BrowserFeatures.SpecificElementExtensions=false;var Class={create:function(){var a=null,properties=$A(arguments);if(Object.isFunction(properties[0]))a=properties.shift();function klass(){this.initialize.apply(this,arguments)}Object.extend(klass,Class.Methods);klass.superclass=a;klass.subclasses=[];if(a){var b=function(){};b.prototype=a.prototype;klass.prototype=new b;a.subclasses.push(klass)}for(var i=0;i<properties.length;i++)klass.addMethods(properties[i]);if(!klass.prototype.initialize)klass.prototype.initialize=Prototype.emptyFunction;klass.prototype.constructor=klass;return klass}};Class.Methods={addMethods:function(a){var b=this.superclass&&this.superclass.prototype;var c=Object.keys(a);if(!Object.keys({toString:true}).length)c.push("toString","valueOf");for(var i=0,length=c.length;i<length;i++){var d=c[i],value=a[d];if(b&&Object.isFunction(value)&&value.argumentNames().first()=="$super"){var e=value,value=Object.extend((function(m){return function(){return b[m].apply(this,arguments)}})(d).wrap(e),{valueOf:function(){return e},toString:function(){return e.toString()}})}this.prototype[d]=value}return this}};var Abstract={};Object.extend=function(a,b){for(var c in b)a[c]=b[c];return a};Object.extend(Object,{inspect:function(a){try{if(Object.isUndefined(a))return'undefined';if(a===null)return'null';return a.inspect?a.inspect():String(a)}catch(e){if(e instanceof RangeError)return'...';throw e;}},toJSON:function(a){var b=typeof a;switch(b){case'undefined':case'function':case'unknown':return;case'boolean':return a.toString()}if(a===null)return'null';if(a.toJSON)return a.toJSON();if(Object.isElement(a))return;var c=[];for(var d in a){var e=Object.toJSON(a[d]);if(!Object.isUndefined(e))c.push(d.toJSON()+': '+e)}return'{'+c.join(', ')+'}'},toQueryString:function(a){return $H(a).toQueryString()},toHTML:function(a){return a&&a.toHTML?a.toHTML():String.interpret(a)},keys:function(a){var b=[];for(var c in a)b.push(c);return b},values:function(a){var b=[];for(var c in a)b.push(a[c]);return b},clone:function(a){return Object.extend({},a)},isElement:function(a){return a&&a.nodeType==1},isArray:function(a){return a!=null&&typeof a=="object"&&'splice'in a&&'join'in a},isHash:function(a){return a instanceof Hash},isFunction:function(a){return typeof a=="function"},isString:function(a){return typeof a=="string"},isNumber:function(a){return typeof a=="number"},isUndefined:function(a){return typeof a=="undefined"}});Object.extend(Function.prototype,{argumentNames:function(){var a=this.toString().match(/^[\s\(]*function[^(]*\((.*?)\)/)[1].split(",").invoke("strip");return a.length==1&&!a[0]?[]:a},bind:function(){if(arguments.length<2&&Object.isUndefined(arguments[0]))return this;var a=this,args=$A(arguments),object=args.shift();return function(){return a.apply(object,args.concat($A(arguments)))}},bindAsEventListener:function(){var b=this,args=$A(arguments),object=args.shift();return function(a){return b.apply(object,[a||window.event].concat(args))}},curry:function(){if(!arguments.length)return this;var a=this,args=$A(arguments);return function(){return a.apply(this,args.concat($A(arguments)))}},delay:function(){var a=this,args=$A(arguments),timeout=args.shift()*1000;return window.setTimeout(function(){return a.apply(a,args)},timeout)},wrap:function(a){var b=this;return function(){return a.apply(this,[b.bind(this)].concat($A(arguments)))}},methodize:function(){if(this._methodized)return this._methodized;var a=this;return this._methodized=function(){return a.apply(null,[this].concat($A(arguments)))}}});Function.prototype.defer=Function.prototype.delay.curry(0.01);Date.prototype.toJSON=function(){return'"'+this.getUTCFullYear()+'-'+(this.getUTCMonth()+1).toPaddedString(2)+'-'+this.getUTCDate().toPaddedString(2)+'T'+this.getUTCHours().toPaddedString(2)+':'+this.getUTCMinutes().toPaddedString(2)+':'+this.getUTCSeconds().toPaddedString(2)+'Z"'};var Try={these:function(){var a;for(var i=0,length=arguments.length;i<length;i++){var b=arguments[i];try{a=b();break}catch(e){}}return a}};RegExp.prototype.match=RegExp.prototype.test;RegExp.escape=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1')};var PeriodicalExecuter=Class.create({initialize:function(a,b){this.callback=a;this.frequency=b;this.currentlyExecuting=false;this.registerCallback()},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000)},execute:function(){this.callback(this)},stop:function(){if(!this.timer)return;clearInterval(this.timer);this.timer=null},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.execute()}finally{this.currentlyExecuting=false}}}});Object.extend(String,{interpret:function(a){return a==null?'':String(a)},specialChar:{'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\'}});Object.extend(String.prototype,{gsub:function(a,b){var c='',source=this,match;b=arguments.callee.prepareReplacement(b);while(source.length>0){if(match=source.match(a)){c+=source.slice(0,match.index);c+=String.interpret(b(match));source=source.slice(match.index+match[0].length)}else{c+=source,source=''}}return c},sub:function(b,c,d){c=this.gsub.prepareReplacement(c);d=Object.isUndefined(d)?1:d;return this.gsub(b,function(a){if(--d<0)return a[0];return c(a)})},scan:function(a,b){this.gsub(a,b);return String(this)},truncate:function(a,b){a=a||30;b=Object.isUndefined(b)?'...':b;return this.length>a?this.slice(0,a-b.length)+b:String(this)},strip:function(){return this.replace(/^\s+/,'').replace(/\s+$/,'')},stripTags:function(){return this.replace(/<\/?[^>]+>/gi,'')},stripScripts:function(){return this.replace(new RegExp(Prototype.ScriptFragment,'img'),'')},extractScripts:function(){var b=new RegExp(Prototype.ScriptFragment,'img');var c=new RegExp(Prototype.ScriptFragment,'im');return(this.match(b)||[]).map(function(a){return(a.match(c)||['',''])[1]})},evalScripts:function(){return this.extractScripts().map(function(a){return eval(a)})},escapeHTML:function(){var a=arguments.callee;a.text.data=this;return a.div.innerHTML},unescapeHTML:function(){var c=new Element('div');c.innerHTML=this.stripTags();return c.childNodes[0]?(c.childNodes.length>1?$A(c.childNodes).inject('',function(a,b){return a+b.nodeValue}):c.childNodes[0].nodeValue):''},toQueryParams:function(e){var f=this.strip().match(/([^?#]*)(#.*)?$/);if(!f)return{};return f[1].split(e||'&').inject({},function(a,b){if((b=b.split('='))[0]){var c=decodeURIComponent(b.shift());var d=b.length>1?b.join('='):b[0];if(d!=undefined)d=decodeURIComponent(d);if(c in a){if(!Object.isArray(a[c]))a[c]=[a[c]];a[c].push(d)}else a[c]=d}return a})},toArray:function(){return this.split('')},succ:function(){return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1)},times:function(a){return a<1?'':new Array(a+1).join(this)},camelize:function(){var a=this.split('-'),len=a.length;if(len==1)return a[0];var b=this.charAt(0)=='-'?a[0].charAt(0).toUpperCase()+a[0].substring(1):a[0];for(var i=1;i<len;i++)b+=a[i].charAt(0).toUpperCase()+a[i].substring(1);return b},capitalize:function(){return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase()},underscore:function(){return this.gsub(/::/,'/').gsub(/([A-Z]+)([A-Z][a-z])/,'#{1}_#{2}').gsub(/([a-z\d])([A-Z])/,'#{1}_#{2}').gsub(/-/,'_').toLowerCase()},dasherize:function(){return this.gsub(/_/,'-')},inspect:function(c){var d=this.gsub(/[\x00-\x1f\\]/,function(a){var b=String.specialChar[a[0]];return b?b:'\\u00'+a[0].charCodeAt().toPaddedString(2,16)});if(c)return'"'+d.replace(/"/g,'\\"')+'"';return"'"+d.replace(/'/g,'\\\'')+"'"},toJSON:function(){return this.inspect(true)},unfilterJSON:function(a){return this.sub(a||Prototype.JSONFilter,'#{1}')},isJSON:function(){var a=this;if(a.blank())return false;a=this.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"/g,'');return(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(a)},evalJSON:function(a){var b=this.unfilterJSON();try{if(!a||b.isJSON())return eval('('+b+')')}catch(e){}throw new SyntaxError('Badly formed JSON string: '+this.inspect());},include:function(a){return this.indexOf(a)>-1},startsWith:function(a){return this.indexOf(a)===0},endsWith:function(a){var d=this.length-a.length;return d>=0&&this.lastIndexOf(a)===d},empty:function(){return this==''},blank:function(){return/^\s*$/.test(this)},interpolate:function(a,b){return new Template(this,b).evaluate(a)}});if(Prototype.Browser.WebKit||Prototype.Browser.IE)Object.extend(String.prototype,{escapeHTML:function(){return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')},unescapeHTML:function(){return this.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')}});String.prototype.gsub.prepareReplacement=function(b){if(Object.isFunction(b))return b;var c=new Template(b);return function(a){return c.evaluate(a)}};String.prototype.parseQuery=String.prototype.toQueryParams;Object.extend(String.prototype.escapeHTML,{div:document.createElement('div'),text:document.createTextNode('')});with(String.prototype.escapeHTML)div.appendChild(text);var Template=Class.create({initialize:function(a,b){this.template=a.toString();this.pattern=b||Template.Pattern},evaluate:function(f){if(Object.isFunction(f.toTemplateReplacements))f=f.toTemplateReplacements();return this.template.gsub(this.pattern,function(a){if(f==null)return'';var b=a[1]||'';if(b=='\\')return a[2];var c=f,expr=a[3];var d=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;a=d.exec(expr);if(a==null)return b;while(a!=null){var e=a[1].startsWith('[')?a[2].gsub('\\\\]',']'):a[1];c=c[e];if(null==c||''==a[3])break;expr=expr.substring('['==a[3]?a[1].length:a[0].length);a=d.exec(expr)}return b+String.interpret(c)})}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;var $break={};var Enumerable={each:function(b,c){var d=0;b=b.bind(c);try{this._each(function(a){b(a,d++)})}catch(e){if(e!=$break)throw e;}return this},eachSlice:function(a,b,c){b=b?b.bind(c):Prototype.K;var d=-a,slices=[],array=this.toArray();while((d+=a)<array.length)slices.push(array.slice(d,d+a));return slices.collect(b,c)},all:function(c,d){c=c?c.bind(d):Prototype.K;var e=true;this.each(function(a,b){e=e&&!!c(a,b);if(!e)throw $break;});return e},any:function(c,d){c=c?c.bind(d):Prototype.K;var e=false;this.each(function(a,b){if(e=!!c(a,b))throw $break;});return e},collect:function(c,d){c=c?c.bind(d):Prototype.K;var e=[];this.each(function(a,b){e.push(c(a,b))});return e},detect:function(c,d){c=c.bind(d);var e;this.each(function(a,b){if(c(a,b)){e=a;throw $break;}});return e},findAll:function(c,d){c=c.bind(d);var e=[];this.each(function(a,b){if(c(a,b))e.push(a)});return e},grep:function(c,d,e){d=d?d.bind(e):Prototype.K;var f=[];if(Object.isString(c))c=new RegExp(c);this.each(function(a,b){if(c.match(a))f.push(d(a,b))});return f},include:function(b){if(Object.isFunction(this.indexOf))if(this.indexOf(b)!=-1)return true;var c=false;this.each(function(a){if(a==b){c=true;throw $break;}});return c},inGroupsOf:function(b,c){c=Object.isUndefined(c)?null:c;return this.eachSlice(b,function(a){while(a.length<b)a.push(c);return a})},inject:function(c,d,e){d=d.bind(e);this.each(function(a,b){c=d(c,a,b)});return c},invoke:function(b){var c=$A(arguments).slice(1);return this.map(function(a){return a[b].apply(a,c)})},max:function(c,d){c=c?c.bind(d):Prototype.K;var e;this.each(function(a,b){a=c(a,b);if(e==null||a>=e)e=a});return e},min:function(c,d){c=c?c.bind(d):Prototype.K;var e;this.each(function(a,b){a=c(a,b);if(e==null||a<e)e=a});return e},partition:function(c,d){c=c?c.bind(d):Prototype.K;var e=[],falses=[];this.each(function(a,b){(c(a,b)?e:falses).push(a)});return[e,falses]},pluck:function(b){var c=[];this.each(function(a){c.push(a[b])});return c},reject:function(c,d){c=c.bind(d);var e=[];this.each(function(a,b){if(!c(a,b))e.push(a)});return e},sortBy:function(e,f){e=e.bind(f);return this.map(function(a,b){return{value:a,criteria:e(a,b)}}).sort(function(c,d){var a=c.criteria,b=d.criteria;return a<b?-1:a>b?1:0}).pluck('value')},toArray:function(){return this.map()},zip:function(){var c=Prototype.K,args=$A(arguments);if(Object.isFunction(args.last()))c=args.pop();var d=[this].concat(args).map($A);return this.map(function(a,b){return c(d.pluck(b))})},size:function(){return this.toArray().length},inspect:function(){return'#<Enumerable:'+this.toArray().inspect()+'>'}};Object.extend(Enumerable,{map:Enumerable.collect,find:Enumerable.detect,select:Enumerable.findAll,filter:Enumerable.findAll,member:Enumerable.include,entries:Enumerable.toArray,every:Enumerable.all,some:Enumerable.any});function $A(a){if(!a)return[];if(a.toArray)return a.toArray();var b=a.length||0,results=new Array(b);while(b--)results[b]=a[b];return results}if(Prototype.Browser.WebKit){$A=function(a){if(!a)return[];if(!(Object.isFunction(a)&&a=='[object NodeList]')&&a.toArray)return a.toArray();var b=a.length||0,results=new Array(b);while(b--)results[b]=a[b];return results}}Array.from=$A;Object.extend(Array.prototype,Enumerable);if(!Array.prototype._reverse)Array.prototype._reverse=Array.prototype.reverse;Object.extend(Array.prototype,{_each:function(a){for(var i=0,length=this.length;i<length;i++)a(this[i])},clear:function(){this.length=0;return this},first:function(){return this[0]},last:function(){return this[this.length-1]},compact:function(){return this.select(function(a){return a!=null})},flatten:function(){return this.inject([],function(a,b){return a.concat(Object.isArray(b)?b.flatten():[b])})},without:function(){var b=$A(arguments);return this.select(function(a){return!b.include(a)})},reverse:function(a){return(a!==false?this:this.toArray())._reverse()},reduce:function(){return this.length>1?this:this[0]},uniq:function(d){return this.inject([],function(a,b,c){if(0==c||(d?a.last()!=b:!a.include(b)))a.push(b);return a})},intersect:function(c){return this.uniq().findAll(function(b){return c.detect(function(a){return b===a})})},clone:function(){return[].concat(this)},size:function(){return this.length},inspect:function(){return'['+this.map(Object.inspect).join(', ')+']'},toJSON:function(){var c=[];this.each(function(a){var b=Object.toJSON(a);if(!Object.isUndefined(b))c.push(b)});return'['+c.join(', ')+']'}});if(Object.isFunction(Array.prototype.forEach))Array.prototype._each=Array.prototype.forEach;if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a,i){i||(i=0);var b=this.length;if(i<0)i=b+i;for(;i<b;i++)if(this[i]===a)return i;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a,i){i=isNaN(i)?this.length:(i<0?this.length+i:i)+1;var n=this.slice(0,i).reverse().indexOf(a);return(n<0)?n:i-n-1};Array.prototype.toArray=Array.prototype.clone;function $w(a){if(!Object.isString(a))return[];a=a.strip();return a?a.split(/\s+/):[]}if(Prototype.Browser.Opera){Array.prototype.concat=function(){var a=[];for(var i=0,length=this.length;i<length;i++)a.push(this[i]);for(var i=0,length=arguments.length;i<length;i++){if(Object.isArray(arguments[i])){for(var j=0,arrayLength=arguments[i].length;j<arrayLength;j++)a.push(arguments[i][j])}else{a.push(arguments[i])}}return a}}Object.extend(Number.prototype,{toColorPart:function(){return this.toPaddedString(2,16)},succ:function(){return this+1},times:function(a){$R(0,this,true).each(a);return this},toPaddedString:function(a,b){var c=this.toString(b||10);return'0'.times(a-c.length)+c},toJSON:function(){return isFinite(this)?this.toString():'null'}});$w('abs round ceil floor').each(function(a){Number.prototype[a]=Math[a].methodize()});function $H(a){return new Hash(a)};var Hash=Class.create(Enumerable,(function(){function toQueryPair(a,b){if(Object.isUndefined(b))return a;return a+'='+encodeURIComponent(String.interpret(b))}return{initialize:function(a){this._object=Object.isHash(a)?a.toObject():Object.clone(a)},_each:function(a){for(var b in this._object){var c=this._object[b],pair=[b,c];pair.key=b;pair.value=c;a(pair)}},set:function(a,b){return this._object[a]=b},get:function(a){return this._object[a]},unset:function(a){var b=this._object[a];delete this._object[a];return b},toObject:function(){return Object.clone(this._object)},keys:function(){return this.pluck('key')},values:function(){return this.pluck('value')},index:function(b){var c=this.detect(function(a){return a.value===b});return c&&c.key},merge:function(a){return this.clone().update(a)},update:function(c){return new Hash(c).inject(this,function(a,b){a.set(b.key,b.value);return a})},toQueryString:function(){return this.map(function(a){var b=encodeURIComponent(a.key),values=a.value;if(values&&typeof values=='object'){if(Object.isArray(values))return values.map(toQueryPair.curry(b)).join('&')}return toQueryPair(b,values)}).join('&')},inspect:function(){return'#<Hash:{'+this.map(function(a){return a.map(Object.inspect).join(': ')}).join(', ')+'}>'},toJSON:function(){return Object.toJSON(this.toObject())},clone:function(){return new Hash(this)}}})());Hash.prototype.toTemplateReplacements=Hash.prototype.toObject;Hash.from=$H;var ObjectRange=Class.create(Enumerable,{initialize:function(a,b,c){this.start=a;this.end=b;this.exclusive=c},_each:function(a){var b=this.start;while(this.include(b)){a(b);b=b.succ()}},include:function(a){if(a<this.start)return false;if(this.exclusive)return a<this.end;return a<=this.end}});var $R=function(a,b,c){return new ObjectRange(a,b,c)};var Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest()},function(){return new ActiveXObject('Msxml2.XMLHTTP')},function(){return new ActiveXObject('Microsoft.XMLHTTP')})||false},activeRequestCount:0};Ajax.Responders={responders:[],_each:function(a){this.responders._each(a)},register:function(a){if(!this.include(a))this.responders.push(a)},unregister:function(a){this.responders=this.responders.without(a)},dispatch:function(b,c,d,f){this.each(function(a){if(Object.isFunction(a[b])){try{a[b].apply(a,[c,d,f])}catch(e){}}})}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++},onComplete:function(){Ajax.activeRequestCount--}});Ajax.Base=Class.create({initialize:function(a){this.options={method:'post',asynchronous:true,contentType:'application/x-www-form-urlencoded',encoding:'UTF-8',parameters:'',evalJSON:true,evalJS:true};Object.extend(this.options,a||{});this.options.method=this.options.method.toLowerCase();if(Object.isString(this.options.parameters))this.options.parameters=this.options.parameters.toQueryParams();else if(Object.isHash(this.options.parameters))this.options.parameters=this.options.parameters.toObject()}});Ajax.Request=Class.create(Ajax.Base,{_complete:false,initialize:function($super,b,c){$super(c);this.transport=Ajax.getTransport();this.request(b)},request:function(a){this.url=a;this.method=this.options.method;var b=Object.clone(this.options.parameters);if(!['get','post'].include(this.method)){b['_method']=this.method;this.method='post'}this.parameters=b;if(b=Object.toQueryString(b)){if(this.method=='get')this.url+=(this.url.include('?')?'&':'?')+b;else if(/Konqueror|Safari|KHTML/.test(navigator.userAgent))b+='&_='}try{var c=new Ajax.Response(this);if(this.options.onCreate)this.options.onCreate(c);Ajax.Responders.dispatch('onCreate',this,c);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous)this.respondToReadyState.bind(this).defer(1);this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body=this.method=='post'?(this.options.postBody||b):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType)this.onStateChange()}catch(e){this.dispatchException(e)}},onStateChange:function(){var a=this.transport.readyState;if(a>1&&!((a==4)&&this._complete))this.respondToReadyState(this.transport.readyState)},setRequestHeaders:function(){var b={'X-Requested-With':'XMLHttpRequest','X-Prototype-Version':Prototype.Version,'Accept':'text/javascript, text/html, application/xml, text/xml, */*'};if(this.method=='post'){b['Content-type']=this.options.contentType+(this.options.encoding?'; charset='+this.options.encoding:'');if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005)b['Connection']='close'}if(typeof this.options.requestHeaders=='object'){var c=this.options.requestHeaders;if(Object.isFunction(c.push))for(var i=0,length=c.length;i<length;i+=2)b[c[i]]=c[i+1];else $H(c).each(function(a){b[a.key]=a.value})}for(var d in b)this.transport.setRequestHeader(d,b[d])},success:function(){var a=this.getStatus();return!a||(a>=200&&a<300)},getStatus:function(){try{return this.transport.status||0}catch(e){return 0}},respondToReadyState:function(a){var b=Ajax.Request.Events[a],response=new Ajax.Response(this);if(b=='Complete'){try{this._complete=true;(this.options['on'+response.status]||this.options['on'+(this.success()?'Success':'Failure')]||Prototype.emptyFunction)(response,response.headerJSON)}catch(e){this.dispatchException(e)}var c=response.getHeader('Content-type');if(this.options.evalJS=='force'||(this.options.evalJS&&this.isSameOrigin()&&c&&c.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))this.evalResponse()}try{(this.options['on'+b]||Prototype.emptyFunction)(response,response.headerJSON);Ajax.Responders.dispatch('on'+b,this,response,response.headerJSON)}catch(e){this.dispatchException(e)}if(b=='Complete'){this.transport.onreadystatechange=Prototype.emptyFunction}},isSameOrigin:function(){var m=this.url.match(/^\s*https?:\/\/[^\/]*/);return!m||(m[0]=='#{protocol}//#{domain}#{port}'.interpolate({protocol:location.protocol,domain:document.domain,port:location.port?':'+location.port:''}))},getHeader:function(a){try{return this.transport.getResponseHeader(a)||null}catch(e){return null}},evalResponse:function(){try{return eval((this.transport.responseText||'').unfilterJSON())}catch(e){this.dispatchException(e)}},dispatchException:function(a){(this.options.onException||Prototype.emptyFunction)(this,a);Ajax.Responders.dispatch('onException',this,a)}});Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];Ajax.Response=Class.create({initialize:function(a){this.request=a;var b=this.transport=a.transport,readyState=this.readyState=b.readyState;if((readyState>2&&!Prototype.Browser.IE)||readyState==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=String.interpret(b.responseText);this.headerJSON=this._getHeaderJSON()}if(readyState==4){var c=b.responseXML;this.responseXML=Object.isUndefined(c)?null:c;this.responseJSON=this._getResponseJSON()}},status:0,statusText:'',getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||''}catch(e){return''}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders()}catch(e){return null}},getResponseHeader:function(a){return this.transport.getResponseHeader(a)},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders()},_getHeaderJSON:function(){var a=this.getHeader('X-JSON');if(!a)return null;a=decodeURIComponent(escape(a));try{return a.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin())}catch(e){this.request.dispatchException(e)}},_getResponseJSON:function(){var a=this.request.options;if(!a.evalJSON||(a.evalJSON!='force'&&!(this.getHeader('Content-type')||'').include('application/json'))||this.responseText.blank())return null;try{return this.responseText.evalJSON(a.sanitizeJSON||!this.request.isSameOrigin())}catch(e){this.request.dispatchException(e)}}});Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,d,e,f){this.container={success:(d.success||d),failure:(d.failure||(d.success?null:d))};f=Object.clone(f);var g=f.onComplete;f.onComplete=(function(a,b){this.updateContent(a.responseText);if(Object.isFunction(g))g(a,b)}).bind(this);$super(e,f)},updateContent:function(a){var b=this.container[this.success()?'success':'failure'],options=this.options;if(!options.evalScripts)a=a.stripScripts();if(b=$(b)){if(options.insertion){if(Object.isString(options.insertion)){var c={};c[options.insertion]=a;b.insert(c)}else options.insertion(b,a)}else b.update(a)}}});Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,b,c,d){$super(d);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=b;this.url=c;this.start()},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent()},stop:function(){this.updater.options.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments)},updateComplete:function(a){if(this.options.decay){this.decay=(a.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=a.responseText}this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency)},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options)}});function $(a){if(arguments.length>1){for(var i=0,elements=[],length=arguments.length;i<length;i++)elements.push($(arguments[i]));return elements}if(Object.isString(a))a=document.getElementById(a);return Element.extend(a)}if(Prototype.BrowserFeatures.XPath){document._getElementsByXPath=function(a,b){var c=[];var d=document.evaluate(a,$(b)||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0,length=d.snapshotLength;i<length;i++)c.push(Element.extend(d.snapshotItem(i)));return c}}if(!window.Node)var Node={};if(!Node.ELEMENT_NODE){Object.extend(Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12})}(function(){var d=this.Element;this.Element=function(a,b){b=b||{};a=a.toLowerCase();var c=Element.cache;if(Prototype.Browser.IE&&b.name){a='<'+a+' name="'+b.name+'">';delete b.name;return Element.writeAttribute(document.createElement(a),b)}if(!c[a])c[a]=Element.extend(document.createElement(a));return Element.writeAttribute(c[a].cloneNode(false),b)};Object.extend(this.Element,d||{})}).call(window);Element.cache={};Element.Methods={visible:function(a){return $(a).style.display!='none'},toggle:function(a){a=$(a);Element[Element.visible(a)?'hide':'show'](a);return a},hide:function(a){$(a).style.display='none';return a},show:function(a){$(a).style.display='';return a},remove:function(a){a=$(a);a.parentNode.removeChild(a);return a},update:function(a,b){a=$(a);if(b&&b.toElement)b=b.toElement();if(Object.isElement(b))return a.update().insert(b);b=Object.toHTML(b);a.innerHTML=b.stripScripts();b.evalScripts.bind(b).defer();return a},replace:function(a,b){a=$(a);if(b&&b.toElement)b=b.toElement();else if(!Object.isElement(b)){b=Object.toHTML(b);var c=a.ownerDocument.createRange();c.selectNode(a);b.evalScripts.bind(b).defer();b=c.createContextualFragment(b.stripScripts())}a.parentNode.replaceChild(b,a);return a},insert:function(a,b){a=$(a);if(Object.isString(b)||Object.isNumber(b)||Object.isElement(b)||(b&&(b.toElement||b.toHTML)))b={bottom:b};var c,insert,tagName,childNodes;for(var d in b){c=b[d];d=d.toLowerCase();insert=Element._insertionTranslations[d];if(c&&c.toElement)c=c.toElement();if(Object.isElement(c)){insert(a,c);continue}c=Object.toHTML(c);tagName=((d=='before'||d=='after')?a.parentNode:a).tagName.toUpperCase();childNodes=Element._getContentFromAnonymousElement(tagName,c.stripScripts());if(d=='top'||d=='after')childNodes.reverse();childNodes.each(insert.curry(a));c.evalScripts.bind(c).defer()}return a},wrap:function(a,b,c){a=$(a);if(Object.isElement(b))$(b).writeAttribute(c||{});else if(Object.isString(b))b=new Element(b,c);else b=new Element('div',b);if(a.parentNode)a.parentNode.replaceChild(b,a);b.appendChild(a);return b},inspect:function(d){d=$(d);var e='<'+d.tagName.toLowerCase();$H({'id':'id','className':'class'}).each(function(a){var b=a.first(),attribute=a.last();var c=(d[b]||'').toString();if(c)e+=' '+attribute+'='+c.inspect(true)});return e+'>'},recursivelyCollect:function(a,b){a=$(a);var c=[];while(a=a[b])if(a.nodeType==1)c.push(Element.extend(a));return c},ancestors:function(a){return $(a).recursivelyCollect('parentNode')},descendants:function(a){return $(a).select("*")},firstDescendant:function(a){a=$(a).firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return $(a)},immediateDescendants:function(a){if(!(a=$(a).firstChild))return[];while(a&&a.nodeType!=1)a=a.nextSibling;if(a)return[a].concat($(a).nextSiblings());return[]},previousSiblings:function(a){return $(a).recursivelyCollect('previousSibling')},nextSiblings:function(a){return $(a).recursivelyCollect('nextSibling')},siblings:function(a){a=$(a);return a.previousSiblings().reverse().concat(a.nextSiblings())},match:function(a,b){if(Object.isString(b))b=new Selector(b);return b.match($(a))},up:function(a,b,c){a=$(a);if(arguments.length==1)return $(a.parentNode);var d=a.ancestors();return Object.isNumber(b)?d[b]:Selector.findElement(d,b,c)},down:function(a,b,c){a=$(a);if(arguments.length==1)return a.firstDescendant();return Object.isNumber(b)?a.descendants()[b]:a.select(b)[c||0]},previous:function(a,b,c){a=$(a);if(arguments.length==1)return $(Selector.handlers.previousElementSibling(a));var d=a.previousSiblings();return Object.isNumber(b)?d[b]:Selector.findElement(d,b,c)},next:function(a,b,c){a=$(a);if(arguments.length==1)return $(Selector.handlers.nextElementSibling(a));var d=a.nextSiblings();return Object.isNumber(b)?d[b]:Selector.findElement(d,b,c)},select:function(){var a=$A(arguments),element=$(a.shift());return Selector.findChildElements(element,a)},adjacent:function(){var a=$A(arguments),element=$(a.shift());return Selector.findChildElements(element.parentNode,a).without(element)},identify:function(a){a=$(a);var b=a.readAttribute('id'),self=arguments.callee;if(b)return b;do{b='anonymous_element_'+self.counter++}while($(b));a.writeAttribute('id',b);return b},readAttribute:function(a,b){a=$(a);if(Prototype.Browser.IE){var t=Element._attributeTranslations.read;if(t.values[b])return t.values[b](a,b);if(t.names[b])b=t.names[b];if(b.include(':')){return(!a.attributes||!a.attributes[b])?null:a.attributes[b].value}}return a.getAttribute(b)},writeAttribute:function(a,b,c){a=$(a);var d={},t=Element._attributeTranslations.write;if(typeof b=='object')d=b;else d[b]=Object.isUndefined(c)?true:c;for(var e in d){b=t.names[e]||e;c=d[e];if(t.values[e])b=t.values[e](a,c);if(c===false||c===null)a.removeAttribute(b);else if(c===true)a.setAttribute(b,b);else a.setAttribute(b,c)}return a},getHeight:function(a){return $(a).getDimensions().height},getWidth:function(a){return $(a).getDimensions().width},classNames:function(a){return new Element.ClassNames(a)},hasClassName:function(a,b){if(!(a=$(a)))return;var c=a.className;return(c.length>0&&(c==b||new RegExp("(^|\\s)"+b+"(\\s|$)").test(c)))},addClassName:function(a,b){if(!(a=$(a)))return;if(!a.hasClassName(b))a.className+=(a.className?' ':'')+b;return a},removeClassName:function(a,b){if(!(a=$(a)))return;a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)"),' ').strip();return a},toggleClassName:function(a,b){if(!(a=$(a)))return;return a[a.hasClassName(b)?'removeClassName':'addClassName'](b)},cleanWhitespace:function(a){a=$(a);var b=a.firstChild;while(b){var c=b.nextSibling;if(b.nodeType==3&&!/\S/.test(b.nodeValue))a.removeChild(b);b=c}return a},empty:function(a){return $(a).innerHTML.blank()},descendantOf:function(b,c){b=$(b),c=$(c);var d=c;if(b.compareDocumentPosition)return(b.compareDocumentPosition(c)&8)===8;if(b.sourceIndex&&!Prototype.Browser.Opera){var e=b.sourceIndex,a=c.sourceIndex,nextAncestor=c.nextSibling;if(!nextAncestor){do{c=c.parentNode}while(!(nextAncestor=c.nextSibling)&&c.parentNode)}if(nextAncestor&&nextAncestor.sourceIndex)return(e>a&&e<nextAncestor.sourceIndex)}while(b=b.parentNode)if(b==d)return true;return false},scrollTo:function(a){a=$(a);var b=a.cumulativeOffset();window.scrollTo(b[0],b[1]);return a},getStyle:function(a,b){a=$(a);b=b=='float'?'cssFloat':b.camelize();var c=a.style[b];if(!c){var d=document.defaultView.getComputedStyle(a,null);c=d?d[b]:null}if(b=='opacity')return c?parseFloat(c):1.0;return c=='auto'?null:c},getOpacity:function(a){return $(a).getStyle('opacity')},setStyle:function(a,b){a=$(a);var c=a.style,match;if(Object.isString(b)){a.style.cssText+=';'+b;return b.include('opacity')?a.setOpacity(b.match(/opacity:\s*(\d?\.?\d*)/)[1]):a}for(var d in b)if(d=='opacity')a.setOpacity(b[d]);else c[(d=='float'||d=='cssFloat')?(Object.isUndefined(c.styleFloat)?'cssFloat':'styleFloat'):d]=b[d];return a},setOpacity:function(a,b){a=$(a);a.style.opacity=(b==1||b==='')?'':(b<0.00001)?0:b;return a},getDimensions:function(a){a=$(a);var b=$(a).getStyle('display');if(b!='none'&&b!=null)return{width:a.offsetWidth,height:a.offsetHeight};var c=a.style;var d=c.visibility;var e=c.position;var f=c.display;c.visibility='hidden';c.position='absolute';c.display='block';var g=a.clientWidth;var h=a.clientHeight;c.display=f;c.position=e;c.visibility=d;return{width:g,height:h}},makePositioned:function(a){a=$(a);var b=Element.getStyle(a,'position');if(b=='static'||!b){a._madePositioned=true;a.style.position='relative';if(window.opera){a.style.top=0;a.style.left=0}}return a},undoPositioned:function(a){a=$(a);if(a._madePositioned){a._madePositioned=undefined;a.style.position=a.style.top=a.style.left=a.style.bottom=a.style.right=''}return a},makeClipping:function(a){a=$(a);if(a._overflow)return a;a._overflow=Element.getStyle(a,'overflow')||'auto';if(a._overflow!=='hidden')a.style.overflow='hidden';return a},undoClipping:function(a){a=$(a);if(!a._overflow)return a;a.style.overflow=a._overflow=='auto'?'':a._overflow;a._overflow=null;return a},cumulativeOffset:function(a){var b=0,valueL=0;do{b+=a.offsetTop||0;valueL+=a.offsetLeft||0;a=a.offsetParent}while(a);return Element._returnOffset(valueL,b)},positionedOffset:function(a){var b=0,valueL=0;do{b+=a.offsetTop||0;valueL+=a.offsetLeft||0;a=a.offsetParent;if(a){if(a.tagName=='BODY')break;var p=Element.getStyle(a,'position');if(p!=='static')break}}while(a);return Element._returnOffset(valueL,b)},absolutize:function(a){a=$(a);if(a.getStyle('position')=='absolute')return;var b=a.positionedOffset();var c=b[1];var d=b[0];var e=a.clientWidth;var f=a.clientHeight;a._originalLeft=d-parseFloat(a.style.left||0);a._originalTop=c-parseFloat(a.style.top||0);a._originalWidth=a.style.width;a._originalHeight=a.style.height;a.style.position='absolute';a.style.top=c+'px';a.style.left=d+'px';a.style.width=e+'px';a.style.height=f+'px';return a},relativize:function(a){a=$(a);if(a.getStyle('position')=='relative')return;a.style.position='relative';var b=parseFloat(a.style.top||0)-(a._originalTop||0);var c=parseFloat(a.style.left||0)-(a._originalLeft||0);a.style.top=b+'px';a.style.left=c+'px';a.style.height=a._originalHeight;a.style.width=a._originalWidth;return a},cumulativeScrollOffset:function(a){var b=0,valueL=0;do{b+=a.scrollTop||0;valueL+=a.scrollLeft||0;a=a.parentNode}while(a);return Element._returnOffset(valueL,b)},getOffsetParent:function(a){if(a.offsetParent)return $(a.offsetParent);if(a==document.body)return $(a);while((a=a.parentNode)&&a!=document.body)if(Element.getStyle(a,'position')!='static')return $(a);return $(document.body)},viewportOffset:function(a){var b=0,valueL=0;var c=a;do{b+=c.offsetTop||0;valueL+=c.offsetLeft||0;if(c.offsetParent==document.body&&Element.getStyle(c,'position')=='absolute')break}while(c=c.offsetParent);c=a;do{if(!Prototype.Browser.Opera||c.tagName=='BODY'){b-=c.scrollTop||0;valueL-=c.scrollLeft||0}}while(c=c.parentNode);return Element._returnOffset(valueL,b)},clonePosition:function(a,b){var c=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},arguments[2]||{});b=$(b);var p=b.viewportOffset();a=$(a);var d=[0,0];var e=null;if(Element.getStyle(a,'position')=='absolute'){e=a.getOffsetParent();d=e.viewportOffset()}if(e==document.body){d[0]-=document.body.offsetLeft;d[1]-=document.body.offsetTop}if(c.setLeft)a.style.left=(p[0]-d[0]+c.offsetLeft)+'px';if(c.setTop)a.style.top=(p[1]-d[1]+c.offsetTop)+'px';if(c.setWidth)a.style.width=b.offsetWidth+'px';if(c.setHeight)a.style.height=b.offsetHeight+'px';return a}};Element.Methods.identify.counter=1;Object.extend(Element.Methods,{getElementsBySelector:Element.Methods.select,childElements:Element.Methods.immediateDescendants});Element._attributeTranslations={write:{names:{className:'class',htmlFor:'for'},values:{}}};if(Prototype.Browser.Opera){Element.Methods.getStyle=Element.Methods.getStyle.wrap(function(d,e,f){switch(f){case'left':case'top':case'right':case'bottom':if(d(e,'position')==='static')return null;case'height':case'width':if(!Element.visible(e))return null;var g=parseInt(d(e,f),10);if(g!==e['offset'+f.capitalize()])return g+'px';var h;if(f==='height'){h=['border-top-width','padding-top','padding-bottom','border-bottom-width']}else{h=['border-left-width','padding-left','padding-right','border-right-width']}return h.inject(g,function(a,b){var c=d(e,b);return c===null?a:a-parseInt(c,10)})+'px';default:return d(e,f)}});Element.Methods.readAttribute=Element.Methods.readAttribute.wrap(function(a,b,c){if(c==='title')return b.title;return a(b,c)})}else if(Prototype.Browser.IE){Element.Methods.getOffsetParent=Element.Methods.getOffsetParent.wrap(function(a,b){b=$(b);var c=b.getStyle('position');if(c!=='static')return a(b);b.setStyle({position:'relative'});var d=a(b);b.setStyle({position:c});return d});$w('positionedOffset viewportOffset').each(function(f){Element.Methods[f]=Element.Methods[f].wrap(function(a,b){b=$(b);var c=b.getStyle('position');if(c!=='static')return a(b);var d=b.getOffsetParent();if(d&&d.getStyle('position')==='fixed')d.setStyle({zoom:1});b.setStyle({position:'relative'});var e=a(b);b.setStyle({position:c});return e})});Element.Methods.getStyle=function(a,b){a=$(a);b=(b=='float'||b=='cssFloat')?'styleFloat':b.camelize();var c=a.style[b];if(!c&&a.currentStyle)c=a.currentStyle[b];if(b=='opacity'){if(c=(a.getStyle('filter')||'').match(/alpha\(opacity=(.*)\)/))if(c[1])return parseFloat(c[1])/100;return 1.0}if(c=='auto'){if((b=='width'||b=='height')&&(a.getStyle('display')!='none'))return a['offset'+b.capitalize()]+'px';return null}return c};Element.Methods.setOpacity=function(b,c){function stripAlpha(a){return a.replace(/alpha\([^\)]*\)/gi,'')}b=$(b);var d=b.currentStyle;if((d&&!d.hasLayout)||(!d&&b.style.zoom=='normal'))b.style.zoom=1;var e=b.getStyle('filter'),style=b.style;if(c==1||c===''){(e=stripAlpha(e))?style.filter=e:style.removeAttribute('filter');return b}else if(c<0.00001)c=0;style.filter=stripAlpha(e)+'alpha(opacity='+(c*100)+')';return b};Element._attributeTranslations={read:{names:{'class':'className','for':'htmlFor'},values:{_getAttr:function(a,b){return a.getAttribute(b,2)},_getAttrNode:function(a,b){var c=a.getAttributeNode(b);return c?c.value:""},_getEv:function(a,b){b=a.getAttribute(b);return b?b.toString().slice(23,-2):null},_flag:function(a,b){return $(a).hasAttribute(b)?b:null},style:function(a){return a.style.cssText.toLowerCase()},title:function(a){return a.title}}}};Element._attributeTranslations.write={names:Object.extend({cellpadding:'cellPadding',cellspacing:'cellSpacing'},Element._attributeTranslations.read.names),values:{checked:function(a,b){a.checked=!!b},style:function(a,b){a.style.cssText=b?b:''}}};Element._attributeTranslations.has={};$w('colSpan rowSpan vAlign dateTime accessKey tabIndex '+'encType maxLength readOnly longDesc').each(function(a){Element._attributeTranslations.write.names[a.toLowerCase()]=a;Element._attributeTranslations.has[a.toLowerCase()]=a});(function(v){Object.extend(v,{href:v._getAttr,src:v._getAttr,type:v._getAttr,action:v._getAttrNode,disabled:v._flag,checked:v._flag,readonly:v._flag,multiple:v._flag,onload:v._getEv,onunload:v._getEv,onclick:v._getEv,ondblclick:v._getEv,onmousedown:v._getEv,onmouseup:v._getEv,onmouseover:v._getEv,onmousemove:v._getEv,onmouseout:v._getEv,onfocus:v._getEv,onblur:v._getEv,onkeypress:v._getEv,onkeydown:v._getEv,onkeyup:v._getEv,onsubmit:v._getEv,onreset:v._getEv,onselect:v._getEv,onchange:v._getEv})})(Element._attributeTranslations.read.values)}else if(Prototype.Browser.Gecko&&/rv:1\.8\.0/.test(navigator.userAgent)){Element.Methods.setOpacity=function(a,b){a=$(a);a.style.opacity=(b==1)?0.999999:(b==='')?'':(b<0.00001)?0:b;return a}}else if(Prototype.Browser.WebKit){Element.Methods.setOpacity=function(a,b){a=$(a);a.style.opacity=(b==1||b==='')?'':(b<0.00001)?0:b;if(b==1)if(a.tagName=='IMG'&&a.width){a.width++;a.width--}else try{var n=document.createTextNode(' ');a.appendChild(n);a.removeChild(n)}catch(e){}return a};Element.Methods.cumulativeOffset=function(a){var b=0,valueL=0;do{b+=a.offsetTop||0;valueL+=a.offsetLeft||0;if(a.offsetParent==document.body)if(Element.getStyle(a,'position')=='absolute')break;a=a.offsetParent}while(a);return Element._returnOffset(valueL,b)}}if(Prototype.Browser.IE||Prototype.Browser.Opera){Element.Methods.update=function(b,c){b=$(b);if(c&&c.toElement)c=c.toElement();if(Object.isElement(c))return b.update().insert(c);c=Object.toHTML(c);var d=b.tagName.toUpperCase();if(d in Element._insertionTranslations.tags){$A(b.childNodes).each(function(a){b.removeChild(a)});Element._getContentFromAnonymousElement(d,c.stripScripts()).each(function(a){b.appendChild(a)})}else b.innerHTML=c.stripScripts();c.evalScripts.bind(c).defer();return b}}if('outerHTML'in document.createElement('div')){Element.Methods.replace=function(b,c){b=$(b);if(c&&c.toElement)c=c.toElement();if(Object.isElement(c)){b.parentNode.replaceChild(c,b);return b}c=Object.toHTML(c);var d=b.parentNode,tagName=d.tagName.toUpperCase();if(Element._insertionTranslations.tags[tagName]){var e=b.next();var f=Element._getContentFromAnonymousElement(tagName,c.stripScripts());d.removeChild(b);if(e)f.each(function(a){d.insertBefore(a,e)});else f.each(function(a){d.appendChild(a)})}else b.outerHTML=c.stripScripts();c.evalScripts.bind(c).defer();return b}}Element._returnOffset=function(l,t){var a=[l,t];a.left=l;a.top=t;return a};Element._getContentFromAnonymousElement=function(a,b){var c=new Element('div'),t=Element._insertionTranslations.tags[a];if(t){c.innerHTML=t[0]+b+t[1];t[2].times(function(){c=c.firstChild})}else c.innerHTML=b;return $A(c.childNodes)};Element._insertionTranslations={before:function(a,b){a.parentNode.insertBefore(b,a)},top:function(a,b){a.insertBefore(b,a.firstChild)},bottom:function(a,b){a.appendChild(b)},after:function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},tags:{TABLE:['<table>','</table>',1],TBODY:['<table><tbody>','</tbody></table>',2],TR:['<table><tbody><tr>','</tr></tbody></table>',3],TD:['<table><tbody><tr><td>','</td></tr></tbody></table>',4],SELECT:['<select>','</select>',1]}};(function(){Object.extend(this.tags,{THEAD:this.tags.TBODY,TFOOT:this.tags.TBODY,TH:this.tags.TD})}).call(Element._insertionTranslations);Element.Methods.Simulated={hasAttribute:function(a,b){b=Element._attributeTranslations.has[b]||b;var c=$(a).getAttributeNode(b);return c&&c.specified}};Element.Methods.ByTag={};Object.extend(Element,Element.Methods);if(!Prototype.BrowserFeatures.ElementExtensions&&document.createElement('div').__proto__){window.HTMLElement={};window.HTMLElement.prototype=document.createElement('div').__proto__;Prototype.BrowserFeatures.ElementExtensions=true}Element.extend=(function(){if(Prototype.BrowserFeatures.SpecificElementExtensions)return Prototype.K;var c={},ByTag=Element.Methods.ByTag;var d=Object.extend(function(a){if(!a||a._extendedByPrototype||a.nodeType!=1||a==window)return a;var b=Object.clone(c),tagName=a.tagName,property,value;if(ByTag[tagName])Object.extend(b,ByTag[tagName]);for(property in b){value=b[property];if(Object.isFunction(value)&&!(property in a))a[property]=value.methodize()}a._extendedByPrototype=Prototype.emptyFunction;return a},{refresh:function(){if(!Prototype.BrowserFeatures.ElementExtensions){Object.extend(c,Element.Methods);Object.extend(c,Element.Methods.Simulated)}}});d.refresh();return d})();Element.hasAttribute=function(a,b){if(a.hasAttribute)return a.hasAttribute(b);return Element.Methods.Simulated.hasAttribute(a,b)};Element.addMethods=function(f){var F=Prototype.BrowserFeatures,T=Element.Methods.ByTag;if(!f){Object.extend(Form,Form.Methods);Object.extend(Form.Element,Form.Element.Methods);Object.extend(Element.Methods.ByTag,{"FORM":Object.clone(Form.Methods),"INPUT":Object.clone(Form.Element.Methods),"SELECT":Object.clone(Form.Element.Methods),"TEXTAREA":Object.clone(Form.Element.Methods)})}if(arguments.length==2){var g=f;f=arguments[1]}if(!g)Object.extend(Element.Methods,f||{});else{if(Object.isArray(g))g.each(extend);else extend(g)}function extend(a){a=a.toUpperCase();if(!Element.Methods.ByTag[a])Element.Methods.ByTag[a]={};Object.extend(Element.Methods.ByTag[a],f)}function copy(a,b,c){c=c||false;for(var d in a){var e=a[d];if(!Object.isFunction(e))continue;if(!c||!(d in b))b[d]=e.methodize()}}function findDOMClass(a){var b;var c={"OPTGROUP":"OptGroup","TEXTAREA":"TextArea","P":"Paragraph","FIELDSET":"FieldSet","UL":"UList","OL":"OList","DL":"DList","DIR":"Directory","H1":"Heading","H2":"Heading","H3":"Heading","H4":"Heading","H5":"Heading","H6":"Heading","Q":"Quote","INS":"Mod","DEL":"Mod","A":"Anchor","IMG":"Image","CAPTION":"TableCaption","COL":"TableCol","COLGROUP":"TableCol","THEAD":"TableSection","TFOOT":"TableSection","TBODY":"TableSection","TR":"TableRow","TH":"TableCell","TD":"TableCell","FRAMESET":"FrameSet","IFRAME":"IFrame"};if(c[a])b='HTML'+c[a]+'Element';if(window[b])return window[b];b='HTML'+a+'Element';if(window[b])return window[b];b='HTML'+a.capitalize()+'Element';if(window[b])return window[b];window[b]={};window[b].prototype=document.createElement(a).__proto__;return window[b]}if(F.ElementExtensions){copy(Element.Methods,HTMLElement.prototype);copy(Element.Methods.Simulated,HTMLElement.prototype,true)}if(F.SpecificElementExtensions){for(var h in Element.Methods.ByTag){var i=findDOMClass(h);if(Object.isUndefined(i))continue;copy(T[h],i.prototype)}}Object.extend(Element,Element.Methods);delete Element.ByTag;if(Element.extend.refresh)Element.extend.refresh();Element.cache={}};document.viewport={getDimensions:function(){var a={};var B=Prototype.Browser;$w('width height').each(function(d){var D=d.capitalize();a[d]=(B.WebKit&&!document.evaluate)?self['inner'+D]:(B.Opera)?document.body['client'+D]:document.documentElement['client'+D]});return a},getWidth:function(){return this.getDimensions().width},getHeight:function(){return this.getDimensions().height},getScrollOffsets:function(){return Element._returnOffset(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)}};var Selector=Class.create({initialize:function(a){this.expression=a.strip();this.compileMatcher()},shouldUseXPath:function(){if(!Prototype.BrowserFeatures.XPath)return false;var e=this.expression;if(Prototype.Browser.WebKit&&(e.include("-of-type")||e.include(":empty")))return false;if((/(\[[\w-]*?:|:checked)/).test(this.expression))return false;return true},compileMatcher:function(){if(this.shouldUseXPath())return this.compileXPathMatcher();var e=this.expression,ps=Selector.patterns,h=Selector.handlers,c=Selector.criteria,le,p,m;if(Selector._cache[e]){this.matcher=Selector._cache[e];return}this.matcher=["this.matcher = function(root) {","var r = root, h = Selector.handlers, c = false, n;"];while(e&&le!=e&&(/\S/).test(e)){le=e;for(var i in ps){p=ps[i];if(m=e.match(p)){this.matcher.push(Object.isFunction(c[i])?c[i](m):new Template(c[i]).evaluate(m));e=e.replace(m[0],'');break}}}this.matcher.push("return h.unique(n);\n}");eval(this.matcher.join('\n'));Selector._cache[this.expression]=this.matcher},compileXPathMatcher:function(){var e=this.expression,ps=Selector.patterns,x=Selector.xpath,le,m;if(Selector._cache[e]){this.xpath=Selector._cache[e];return}this.matcher=['.//*'];while(e&&le!=e&&(/\S/).test(e)){le=e;for(var i in ps){if(m=e.match(ps[i])){this.matcher.push(Object.isFunction(x[i])?x[i](m):new Template(x[i]).evaluate(m));e=e.replace(m[0],'');break}}}this.xpath=this.matcher.join('');Selector._cache[this.expression]=this.xpath},findElements:function(a){a=a||document;if(this.xpath)return document._getElementsByXPath(this.xpath,a);return this.matcher(a)},match:function(a){this.tokens=[];var e=this.expression,ps=Selector.patterns,as=Selector.assertions;var b,p,m;while(e&&b!==e&&(/\S/).test(e)){b=e;for(var i in ps){p=ps[i];if(m=e.match(p)){if(as[i]){this.tokens.push([i,Object.clone(m)]);e=e.replace(m[0],'')}else{return this.findElements(document).include(a)}}}}var c=true,name,matches;for(var i=0,token;token=this.tokens[i];i++){name=token[0],matches=token[1];if(!Selector.assertions[name](a,matches)){c=false;break}}return c},toString:function(){return this.expression},inspect:function(){return"#<Selector:"+this.expression.inspect()+">"}});Object.extend(Selector,{_cache:{},xpath:{descendant:"//*",child:"/*",adjacent:"/following-sibling::*[1]",laterSibling:'/following-sibling::*',tagName:function(m){if(m[1]=='*')return'';return"[local-name()='"+m[1].toLowerCase()+"' or local-name()='"+m[1].toUpperCase()+"']"},className:"[contains(concat(' ', @class, ' '), ' #{1} ')]",id:"[@id='#{1}']",attrPresence:function(m){m[1]=m[1].toLowerCase();return new Template("[@#{1}]").evaluate(m)},attr:function(m){m[1]=m[1].toLowerCase();m[3]=m[5]||m[6];return new Template(Selector.xpath.operators[m[2]]).evaluate(m)},pseudo:function(m){var h=Selector.xpath.pseudos[m[1]];if(!h)return'';if(Object.isFunction(h))return h(m);return new Template(Selector.xpath.pseudos[m[1]]).evaluate(m)},operators:{'=':"[@#{1}='#{3}']",'!=':"[@#{1}!='#{3}']",'^=':"[starts-with(@#{1}, '#{3}')]",'$=':"[substring(@#{1}, (string-length(@#{1}) - string-length('#{3}') + 1))='#{3}']",'*=':"[contains(@#{1}, '#{3}')]",'~=':"[contains(concat(' ', @#{1}, ' '), ' #{3} ')]",'|=':"[contains(concat('-', @#{1}, '-'), '-#{3}-')]"},pseudos:{'first-child':'[not(preceding-sibling::*)]','last-child':'[not(following-sibling::*)]','only-child':'[not(preceding-sibling::* or following-sibling::*)]','empty':"[count(*) = 0 and (count(text()) = 0 or translate(text(), ' \t\r\n', '') = '')]",'checked':"[@checked]",'disabled':"[@disabled]",'enabled':"[not(@disabled)]",'not':function(m){var e=m[6],p=Selector.patterns,x=Selector.xpath,le,v;var a=[];while(e&&le!=e&&(/\S/).test(e)){le=e;for(var i in p){if(m=e.match(p[i])){v=Object.isFunction(x[i])?x[i](m):new Template(x[i]).evaluate(m);a.push("("+v.substring(1,v.length-1)+")");e=e.replace(m[0],'');break}}}return"[not("+a.join(" and ")+")]"},'nth-child':function(m){return Selector.xpath.pseudos.nth("(count(./preceding-sibling::*) + 1) ",m)},'nth-last-child':function(m){return Selector.xpath.pseudos.nth("(count(./following-sibling::*) + 1) ",m)},'nth-of-type':function(m){return Selector.xpath.pseudos.nth("position() ",m)},'nth-last-of-type':function(m){return Selector.xpath.pseudos.nth("(last() + 1 - position()) ",m)},'first-of-type':function(m){m[6]="1";return Selector.xpath.pseudos['nth-of-type'](m)},'last-of-type':function(m){m[6]="1";return Selector.xpath.pseudos['nth-last-of-type'](m)},'only-of-type':function(m){var p=Selector.xpath.pseudos;return p['first-of-type'](m)+p['last-of-type'](m)},nth:function(c,m){var d,formula=m[6],predicate;if(formula=='even')formula='2n+0';if(formula=='odd')formula='2n+1';if(d=formula.match(/^(\d+)$/))return'['+c+"= "+d[1]+']';if(d=formula.match(/^(-?\d*)?n(([+-])(\d+))?/)){if(d[1]=="-")d[1]=-1;var a=d[1]?Number(d[1]):1;var b=d[2]?Number(d[2]):0;predicate="[((#{fragment} - #{b}) mod #{a} = 0) and "+"((#{fragment} - #{b}) div #{a} >= 0)]";return new Template(predicate).evaluate({fragment:c,a:a,b:b})}}}},criteria:{tagName:'n = h.tagName(n, r, "#{1}", c);      c = false;',className:'n = h.className(n, r, "#{1}", c);    c = false;',id:'n = h.id(n, r, "#{1}", c);           c = false;',attrPresence:'n = h.attrPresence(n, r, "#{1}", c); c = false;',attr:function(m){m[3]=(m[5]||m[6]);return new Template('n = h.attr(n, r, "#{1}", "#{3}", "#{2}", c); c = false;').evaluate(m)},pseudo:function(m){if(m[6])m[6]=m[6].replace(/"/g,'\\"');return new Template('n = h.pseudo(n, "#{1}", "#{6}", r, c); c = false;').evaluate(m)},descendant:'c = "descendant";',child:'c = "child";',adjacent:'c = "adjacent";',laterSibling:'c = "laterSibling";'},patterns:{laterSibling:/^\s*~\s*/,child:/^\s*>\s*/,adjacent:/^\s*\+\s*/,descendant:/^\s/,tagName:/^\s*(\*|[\w\-]+)(\b|$)?/,id:/^#([\w\-\*]+)(\b|$)/,className:/^\.([\w\-\*]+)(\b|$)/,pseudo:/^:((first|last|nth|nth-last|only)(-child|-of-type)|empty|checked|(en|dis)abled|not)(\((.*?)\))?(\b|$|(?=\s|[:+~>]))/,attrPresence:/^\[([\w]+)\]/,attr:/\[((?:[\w-]*:)?[\w-]+)\s*(?:([!^$*~|]?=)\s*((['"])([^\4]*?)\4|([^'"][^\]]*?)))?\]/},assertions:{tagName:function(a,b){return b[1].toUpperCase()==a.tagName.toUpperCase()},className:function(a,b){return Element.hasClassName(a,b[1])},id:function(a,b){return a.id===b[1]},attrPresence:function(a,b){return Element.hasAttribute(a,b[1])},attr:function(a,b){var c=Element.readAttribute(a,b[1]);return c&&Selector.operators[b[2]](c,b[5]||b[6])}},handlers:{concat:function(a,b){for(var i=0,node;node=b[i];i++)a.push(node);return a},mark:function(a){var b=Prototype.emptyFunction;for(var i=0,node;node=a[i];i++)node._countedByPrototype=b;return a},unmark:function(a){for(var i=0,node;node=a[i];i++)node._countedByPrototype=undefined;return a},index:function(a,b,c){a._countedByPrototype=Prototype.emptyFunction;if(b){for(var d=a.childNodes,i=d.length-1,j=1;i>=0;i--){var e=d[i];if(e.nodeType==1&&(!c||e._countedByPrototype))e.nodeIndex=j++}}else{for(var i=0,j=1,d=a.childNodes;e=d[i];i++)if(e.nodeType==1&&(!c||e._countedByPrototype))e.nodeIndex=j++}},unique:function(a){if(a.length==0)return a;var b=[],n;for(var i=0,l=a.length;i<l;i++)if(!(n=a[i])._countedByPrototype){n._countedByPrototype=Prototype.emptyFunction;b.push(Element.extend(n))}return Selector.handlers.unmark(b)},descendant:function(a){var h=Selector.handlers;for(var i=0,results=[],node;node=a[i];i++)h.concat(results,node.getElementsByTagName('*'));return results},child:function(a){var h=Selector.handlers;for(var i=0,results=[],node;node=a[i];i++){for(var j=0,child;child=node.childNodes[j];j++)if(child.nodeType==1&&child.tagName!='!')results.push(child)}return results},adjacent:function(a){for(var i=0,results=[],node;node=a[i];i++){var b=this.nextElementSibling(node);if(b)results.push(b)}return results},laterSibling:function(a){var h=Selector.handlers;for(var i=0,results=[],node;node=a[i];i++)h.concat(results,Element.nextSiblings(node));return results},nextElementSibling:function(a){while(a=a.nextSibling)if(a.nodeType==1)return a;return null},previousElementSibling:function(a){while(a=a.previousSibling)if(a.nodeType==1)return a;return null},tagName:function(a,b,c,d){var e=c.toUpperCase();var f=[],h=Selector.handlers;if(a){if(d){if(d=="descendant"){for(var i=0,node;node=a[i];i++)h.concat(f,node.getElementsByTagName(c));return f}else a=this[d](a);if(c=="*")return a}for(var i=0,node;node=a[i];i++)if(node.tagName.toUpperCase()===e)f.push(node);return f}else return b.getElementsByTagName(c)},id:function(a,b,c,d){var e=$(c),h=Selector.handlers;if(!e)return[];if(!a&&b==document)return[e];if(a){if(d){if(d=='child'){for(var i=0,node;node=a[i];i++)if(e.parentNode==node)return[e]}else if(d=='descendant'){for(var i=0,node;node=a[i];i++)if(Element.descendantOf(e,node))return[e]}else if(d=='adjacent'){for(var i=0,node;node=a[i];i++)if(Selector.handlers.previousElementSibling(e)==node)return[e]}else a=h[d](a)}for(var i=0,node;node=a[i];i++)if(node==e)return[e];return[]}return(e&&Element.descendantOf(e,b))?[e]:[]},className:function(a,b,c,d){if(a&&d)a=this[d](a);return Selector.handlers.byClassName(a,b,c)},byClassName:function(a,b,c){if(!a)a=Selector.handlers.descendant([b]);var d=' '+c+' ';for(var i=0,results=[],node,nodeClassName;node=a[i];i++){nodeClassName=node.className;if(nodeClassName.length==0)continue;if(nodeClassName==c||(' '+nodeClassName+' ').include(d))results.push(node)}return results},attrPresence:function(a,b,c,d){if(!a)a=b.getElementsByTagName("*");if(a&&d)a=this[d](a);var e=[];for(var i=0,node;node=a[i];i++)if(Element.hasAttribute(node,c))e.push(node);return e},attr:function(a,b,c,d,e,f){if(!a)a=b.getElementsByTagName("*");if(a&&f)a=this[f](a);var g=Selector.operators[e],results=[];for(var i=0,node;node=a[i];i++){var h=Element.readAttribute(node,c);if(h===null)continue;if(g(h,d))results.push(node)}return results},pseudo:function(a,b,c,d,e){if(a&&e)a=this[e](a);if(!a)a=d.getElementsByTagName("*");return Selector.pseudos[b](a,c,d)}},pseudos:{'first-child':function(a,b,c){for(var i=0,results=[],node;node=a[i];i++){if(Selector.handlers.previousElementSibling(node))continue;results.push(node)}return results},'last-child':function(a,b,c){for(var i=0,results=[],node;node=a[i];i++){if(Selector.handlers.nextElementSibling(node))continue;results.push(node)}return results},'only-child':function(a,b,c){var h=Selector.handlers;for(var i=0,results=[],node;node=a[i];i++)if(!h.previousElementSibling(node)&&!h.nextElementSibling(node))results.push(node);return results},'nth-child':function(a,b,c){return Selector.pseudos.nth(a,b,c)},'nth-last-child':function(a,b,c){return Selector.pseudos.nth(a,b,c,true)},'nth-of-type':function(a,b,c){return Selector.pseudos.nth(a,b,c,false,true)},'nth-last-of-type':function(a,b,c){return Selector.pseudos.nth(a,b,c,true,true)},'first-of-type':function(a,b,c){return Selector.pseudos.nth(a,"1",c,false,true)},'last-of-type':function(a,b,c){return Selector.pseudos.nth(a,"1",c,true,true)},'only-of-type':function(a,b,c){var p=Selector.pseudos;return p['last-of-type'](p['first-of-type'](a,b,c),b,c)},getIndices:function(a,b,d){if(a==0)return b>0?[b]:[];return $R(1,d).inject([],function(c,i){if(0==(i-b)%a&&(i-b)/a>=0)c.push(i);return c})},nth:function(c,d,e,f,g){if(c.length==0)return[];if(d=='even')d='2n+0';if(d=='odd')d='2n+1';var h=Selector.handlers,results=[],indexed=[],m;h.mark(c);for(var i=0,node;node=c[i];i++){if(!node.parentNode._countedByPrototype){h.index(node.parentNode,f,g);indexed.push(node.parentNode)}}if(d.match(/^\d+$/)){d=Number(d);for(var i=0,node;node=c[i];i++)if(node.nodeIndex==d)results.push(node)}else if(m=d.match(/^(-?\d*)?n(([+-])(\d+))?/)){if(m[1]=="-")m[1]=-1;var a=m[1]?Number(m[1]):1;var b=m[2]?Number(m[2]):0;var k=Selector.pseudos.getIndices(a,b,c.length);for(var i=0,node,l=k.length;node=c[i];i++){for(var j=0;j<l;j++)if(node.nodeIndex==k[j])results.push(node)}}h.unmark(c);h.unmark(indexed);return results},'empty':function(a,b,c){for(var i=0,results=[],node;node=a[i];i++){if(node.tagName=='!'||(node.firstChild&&!node.innerHTML.match(/^\s*$/)))continue;results.push(node)}return results},'not':function(a,b,c){var h=Selector.handlers,selectorType,m;var d=new Selector(b).findElements(c);h.mark(d);for(var i=0,results=[],node;node=a[i];i++)if(!node._countedByPrototype)results.push(node);h.unmark(d);return results},'enabled':function(a,b,c){for(var i=0,results=[],node;node=a[i];i++)if(!node.disabled)results.push(node);return results},'disabled':function(a,b,c){for(var i=0,results=[],node;node=a[i];i++)if(node.disabled)results.push(node);return results},'checked':function(a,b,c){for(var i=0,results=[],node;node=a[i];i++)if(node.checked)results.push(node);return results}},operators:{'=':function(a,v){return a==v},'!=':function(a,v){return a!=v},'^=':function(a,v){return a.startsWith(v)},'$=':function(a,v){return a.endsWith(v)},'*=':function(a,v){return a.include(v)},'~=':function(a,v){return(' '+a+' ').include(' '+v+' ')},'|=':function(a,v){return('-'+a.toUpperCase()+'-').include('-'+v.toUpperCase()+'-')}},split:function(a){var b=[];a.scan(/(([\w#:.~>+()\s-]+|\*|\[.*?\])+)\s*(,|$)/,function(m){b.push(m[1].strip())});return b},matchElements:function(a,b){var c=$$(b),h=Selector.handlers;h.mark(c);for(var i=0,results=[],element;element=a[i];i++)if(element._countedByPrototype)results.push(element);h.unmark(c);return results},findElement:function(a,b,c){if(Object.isNumber(b)){c=b;b=false}return Selector.matchElements(a,b||'*')[c||0]},findChildElements:function(a,b){b=Selector.split(b.join(','));var c=[],h=Selector.handlers;for(var i=0,l=b.length,selector;i<l;i++){selector=new Selector(b[i].strip());h.concat(c,selector.findElements(a))}return(l>1)?h.unique(c):c}});if(Prototype.Browser.IE){Object.extend(Selector.handlers,{concat:function(a,b){for(var i=0,node;node=b[i];i++)if(node.tagName!=="!")a.push(node);return a},unmark:function(a){for(var i=0,node;node=a[i];i++)node.removeAttribute('_countedByPrototype');return a}})}function $$(){return Selector.findChildElements(document,$A(arguments))}var Form={reset:function(a){$(a).reset();return a},serializeElements:function(c,d){if(typeof d!='object')d={hash:!!d};else if(Object.isUndefined(d.hash))d.hash=true;var e,value,submitted=false,submit=d.submit;var f=c.inject({},function(a,b){if(!b.disabled&&b.name){e=b.name;value=$(b).getValue();if(value!=null&&(b.type!='submit'||(!submitted&&submit!==false&&(!submit||e==submit)&&(submitted=true)))){if(e in a){if(!Object.isArray(a[e]))a[e]=[a[e]];a[e].push(value)}else a[e]=value}}return a});return d.hash?f:Object.toQueryString(f)}};Form.Methods={serialize:function(a,b){return Form.serializeElements(Form.getElements(a),b)},getElements:function(c){return $A($(c).getElementsByTagName('*')).inject([],function(a,b){if(Form.Element.Serializers[b.tagName.toLowerCase()])a.push(Element.extend(b));return a})},getInputs:function(a,b,c){a=$(a);var d=a.getElementsByTagName('input');if(!b&&!c)return $A(d).map(Element.extend);for(var i=0,matchingInputs=[],length=d.length;i<length;i++){var e=d[i];if((b&&e.type!=b)||(c&&e.name!=c))continue;matchingInputs.push(Element.extend(e))}return matchingInputs},disable:function(a){a=$(a);Form.getElements(a).invoke('disable');return a},enable:function(a){a=$(a);Form.getElements(a).invoke('enable');return a},findFirstElement:function(b){var c=$(b).getElements().findAll(function(a){return'hidden'!=a.type&&!a.disabled});var d=c.findAll(function(a){return a.hasAttribute('tabIndex')&&a.tabIndex>=0}).sortBy(function(a){return a.tabIndex}).first();return d?d:c.find(function(a){return['input','select','textarea'].include(a.tagName.toLowerCase())})},focusFirstElement:function(a){a=$(a);a.findFirstElement().activate();return a},request:function(a,b){a=$(a),b=Object.clone(b||{});var c=b.parameters,action=a.readAttribute('action')||'';if(action.blank())action=window.location.href;b.parameters=a.serialize(true);if(c){if(Object.isString(c))c=c.toQueryParams();Object.extend(b.parameters,c)}if(a.hasAttribute('method')&&!b.method)b.method=a.method;return new Ajax.Request(action,b)}};Form.Element={focus:function(a){$(a).focus();return a},select:function(a){$(a).select();return a}};Form.Element.Methods={serialize:function(a){a=$(a);if(!a.disabled&&a.name){var b=a.getValue();if(b!=undefined){var c={};c[a.name]=b;return Object.toQueryString(c)}}return''},getValue:function(a){a=$(a);var b=a.tagName.toLowerCase();return Form.Element.Serializers[b](a)},setValue:function(a,b){a=$(a);var c=a.tagName.toLowerCase();Form.Element.Serializers[c](a,b);return a},clear:function(a){$(a).value='';return a},present:function(a){return $(a).value!=''},activate:function(a){a=$(a);try{a.focus();if(a.select&&(a.tagName.toLowerCase()!='input'||!['button','reset','submit'].include(a.type)))a.select()}catch(e){}return a},disable:function(a){a=$(a);a.blur();a.disabled=true;return a},enable:function(a){a=$(a);a.disabled=false;return a}};var Field=Form.Element;var $F=Form.Element.Methods.getValue;Form.Element.Serializers={input:function(a,b){switch(a.type.toLowerCase()){case'checkbox':case'radio':return Form.Element.Serializers.inputSelector(a,b);default:return Form.Element.Serializers.textarea(a,b)}},inputSelector:function(a,b){if(Object.isUndefined(b))return a.checked?a.value:null;else a.checked=!!b},textarea:function(a,b){if(Object.isUndefined(b))return a.value;else a.value=b},select:function(a,b){if(Object.isUndefined(b))return this[a.type=='select-one'?'selectOne':'selectMany'](a);else{var c,value,single=!Object.isArray(b);for(var i=0,length=a.length;i<length;i++){c=a.options[i];value=this.optionValue(c);if(single){if(value==b){c.selected=true;return}}else c.selected=b.include(value)}}},selectOne:function(a){var b=a.selectedIndex;return b>=0?this.optionValue(a.options[b]):null},selectMany:function(a){var b,length=a.length;if(!length)return null;for(var i=0,b=[];i<length;i++){var c=a.options[i];if(c.selected)b.push(this.optionValue(c))}return b},optionValue:function(a){return Element.extend(a).hasAttribute('value')?a.value:a.text}};Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,b,c,d){$super(d,c);this.element=$(b);this.lastValue=this.getValue()},execute:function(){var a=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(a)?this.lastValue!=a:String(this.lastValue)!=String(a)){this.callback(this.element,a);this.lastValue=a}}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element)}});Abstract.EventObserver=Class.create({initialize:function(a,b){this.element=$(a);this.callback=b;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=='form')this.registerFormCallbacks();else this.registerCallback(this.element)},onElementEvent:function(){var a=this.getValue();if(this.lastValue!=a){this.callback(this.element,a);this.lastValue=a}},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this)},registerCallback:function(a){if(a.type){switch(a.type.toLowerCase()){case'checkbox':case'radio':Event.observe(a,'click',this.onElementEvent.bind(this));break;default:Event.observe(a,'change',this.onElementEvent.bind(this));break}}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element)}});if(!window.Event)var Event={};Object.extend(Event,{KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,cache:{},relatedTarget:function(a){var b;switch(a.type){case'mouseover':b=a.fromElement;break;case'mouseout':b=a.toElement;break;default:return null}return Element.extend(b)}});Event.Methods=(function(){var e;if(Prototype.Browser.IE){var f={0:1,1:4,2:2};e=function(a,b){return a.button==f[b]}}else if(Prototype.Browser.WebKit){e=function(a,b){switch(b){case 0:return a.which==1&&!a.metaKey;case 1:return a.which==1&&a.metaKey;default:return false}}}else{e=function(a,b){return a.which?(a.which===b+1):(a.button===b)}}return{isLeftClick:function(a){return e(a,0)},isMiddleClick:function(a){return e(a,1)},isRightClick:function(a){return e(a,2)},element:function(a){var b=Event.extend(a).target;return Element.extend(b.nodeType==Node.TEXT_NODE?b.parentNode:b)},findElement:function(a,b){var c=Event.element(a);if(!b)return c;var d=[c].concat(c.ancestors());return Selector.findElement(d,b,0)},pointer:function(a){return{x:a.pageX||(a.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),y:a.pageY||(a.clientY+(document.documentElement.scrollTop||document.body.scrollTop))}},pointerX:function(a){return Event.pointer(a).x},pointerY:function(a){return Event.pointer(a).y},stop:function(a){Event.extend(a);a.preventDefault();a.stopPropagation();a.stopped=true}}})();Event.extend=(function(){var c=Object.keys(Event.Methods).inject({},function(m,a){m[a]=Event.Methods[a].methodize();return m});if(Prototype.Browser.IE){Object.extend(c,{stopPropagation:function(){this.cancelBubble=true},preventDefault:function(){this.returnValue=false},inspect:function(){return"[object Event]"}});return function(a){if(!a)return false;if(a._extendedByPrototype)return a;a._extendedByPrototype=Prototype.emptyFunction;var b=Event.pointer(a);Object.extend(a,{target:a.srcElement,relatedTarget:Event.relatedTarget(a),pageX:b.x,pageY:b.y});return Object.extend(a,c)}}else{Event.prototype=Event.prototype||document.createEvent("HTMLEvents").__proto__;Object.extend(Event.prototype,c);return Prototype.K}})();Object.extend(Event,(function(){var h=Event.cache;function getEventID(a){if(a._prototypeEventID)return a._prototypeEventID[0];arguments.callee.id=arguments.callee.id||1;return a._prototypeEventID=[++arguments.callee.id]}function getDOMEventName(a){if(a&&a.include(':'))return"dataavailable";return a}function getCacheForID(a){return h[a]=h[a]||{}}function getWrappersForEventName(a,b){var c=getCacheForID(a);return c[b]=c[b]||[]}function createWrapper(b,d,e){var f=getEventID(b);var c=getWrappersForEventName(f,d);if(c.pluck("handler").include(e))return false;var g=function(a){if(!Event||!Event.extend||(a.eventName&&a.eventName!=d))return false;Event.extend(a);e.call(b,a)};g.handler=e;c.push(g);return g}function findWrapper(b,d,e){var c=getWrappersForEventName(b,d);return c.find(function(a){return a.handler==e})}function destroyWrapper(a,b,d){var c=getCacheForID(a);if(!c[b])return false;c[b]=c[b].without(findWrapper(a,b,d))}function destroyCache(){for(var a in h)for(var b in h[a])h[a][b]=null}if(window.attachEvent){window.attachEvent("onunload",destroyCache)}return{observe:function(a,b,c){a=$(a);var d=getDOMEventName(b);var e=createWrapper(a,b,c);if(!e)return a;if(a.addEventListener){a.addEventListener(d,e,false)}else{a.attachEvent("on"+d,e)}return a},stopObserving:function(b,c,d){b=$(b);var e=getEventID(b),name=getDOMEventName(c);if(!d&&c){getWrappersForEventName(e,c).each(function(a){b.stopObserving(c,a.handler)});return b}else if(!c){Object.keys(getCacheForID(e)).each(function(a){b.stopObserving(a)});return b}var f=findWrapper(e,c,d);if(!f)return b;if(b.removeEventListener){b.removeEventListener(name,f,false)}else{b.detachEvent("on"+name,f)}destroyWrapper(e,c,d);return b},fire:function(a,b,c){a=$(a);if(a==document&&document.createEvent&&!a.dispatchEvent)a=document.documentElement;var d;if(document.createEvent){d=document.createEvent("HTMLEvents");d.initEvent("dataavailable",true,true)}else{d=document.createEventObject();d.eventType="ondataavailable"}d.eventName=b;d.memo=c||{};if(document.createEvent){a.dispatchEvent(d)}else{a.fireEvent(d.eventType,d)}return Event.extend(d)}}})());Object.extend(Event,Event.Methods);Element.addMethods({fire:Event.fire,observe:Event.observe,stopObserving:Event.stopObserving});Object.extend(document,{fire:Element.Methods.fire.methodize(),observe:Element.Methods.observe.methodize(),stopObserving:Element.Methods.stopObserving.methodize(),loaded:false});(function(){var a;function fireContentLoadedEvent(){if(document.loaded)return;if(a)window.clearInterval(a);document.fire("dom:loaded");document.loaded=true}if(document.addEventListener){if(Prototype.Browser.WebKit){a=window.setInterval(function(){if(/loaded|complete/.test(document.readyState))fireContentLoadedEvent()},0);Event.observe(window,"load",fireContentLoadedEvent)}else{document.addEventListener("DOMContentLoaded",fireContentLoadedEvent,false)}}else{document.write("<script id=__onDOMContentLoaded defer src=//:><\/script>");$("__onDOMContentLoaded").onreadystatechange=function(){if(this.readyState=="complete"){this.onreadystatechange=null;fireContentLoadedEvent()}}}})();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};Element.Methods.childOf=Element.Methods.descendantOf;var Insertion={Before:function(a,b){return Element.insert(a,{before:b})},Top:function(a,b){return Element.insert(a,{top:b})},Bottom:function(a,b){return Element.insert(a,{bottom:b})},After:function(a,b){return Element.insert(a,{after:b})}};var $continue=new Error('"throw $continue" is deprecated, use "return" instead');var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},within:function(a,x,y){if(this.includeScrollOffsets)return this.withinIncludingScrolloffsets(a,x,y);this.xcomp=x;this.ycomp=y;this.offset=Element.cumulativeOffset(a);return(y>=this.offset[1]&&y<this.offset[1]+a.offsetHeight&&x>=this.offset[0]&&x<this.offset[0]+a.offsetWidth)},withinIncludingScrolloffsets:function(a,x,y){var b=Element.cumulativeScrollOffset(a);this.xcomp=x+b[0]-this.deltaX;this.ycomp=y+b[1]-this.deltaY;this.offset=Element.cumulativeOffset(a);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+a.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+a.offsetWidth)},overlap:function(a,b){if(!a)return 0;if(a=='vertical')return((this.offset[1]+b.offsetHeight)-this.ycomp)/b.offsetHeight;if(a=='horizontal')return((this.offset[0]+b.offsetWidth)-this.xcomp)/b.offsetWidth},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(a){Position.prepare();return Element.absolutize(a)},relativize:function(a){Position.prepare();return Element.relativize(a)},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(a,b,c){c=c||{};return Element.clonePosition(b,a,c)}};if(!document.getElementsByClassName)document.getElementsByClassName=function(f){function iter(a){return a.blank()?null:"[contains(concat(' ', @class, ' '), ' "+a+" ')]"}f.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(a,b){b=b.toString().strip();var c=/\s/.test(b)?$w(b).map(iter).join(''):iter(b);return c?document._getElementsByXPath('.//*'+c,a):[]}:function(b,c){c=c.toString().strip();var d=[],classNames=(/\s/.test(c)?$w(c):null);if(!classNames&&!c)return d;var e=$(b).getElementsByTagName('*');c=' '+c+' ';for(var i=0,child,cn;child=e[i];i++){if(child.className&&(cn=' '+child.className+' ')&&(cn.include(c)||(classNames&&classNames.all(function(a){return!a.toString().blank()&&cn.include(' '+a+' ')}))))d.push(Element.extend(child))}return d};return function(a,b){return $(b||document.body).getElementsByClassName(a)}}(Element.Methods);Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(a){this.element=$(a)},_each:function(b){this.element.className.split(/\s+/).select(function(a){return a.length>0})._each(b)},set:function(a){this.element.className=a},add:function(a){if(this.include(a))return;this.set($A(this).concat(a).join(' '))},remove:function(a){if(!this.include(a))return;this.set($A(this).without(a).join(' '))},toString:function(){return $A(this).join(' ')}};Object.extend(Element.ClassNames.prototype,Enumerable);Element.addMethods();
//scriptaculous.js
var Scriptaculous={Version:'1.8.1',require:function(a){document.write('<script type="text/javascript" src="'+a+'"><\/script>')},REQUIRED_PROTOTYPE:'1.6.0',load:function(){function convertVersionString(a){var r=a.split('.');return parseInt(r[0])*100000+parseInt(r[1])*1000+parseInt(r[2])}if((typeof Prototype=='undefined')||(typeof Element=='undefined')||(typeof Element.Methods=='undefined')||(convertVersionString(Prototype.Version)<convertVersionString(Scriptaculous.REQUIRED_PROTOTYPE)))throw("script.aculo.us requires the Prototype JavaScript framework >= "+Scriptaculous.REQUIRED_PROTOTYPE);var d=/(proto|scripta)culous[a-z0-9._-]*\.js(\?.*)?$/;$A(document.getElementsByTagName("script")).findAll(function(s){return(s.src&&s.src.match(d))}).each(function(s){var b=s.src.replace(d,'');var c=(s.src.match(/\?.*load=([a-z,]*)/)||['',''])[1];c.split(',').without('').each(function(a){Scriptaculous.require(b+a+'.js')})})}};
//effects.js
String.prototype.parseColor=function(){var a='#';if(this.slice(0,4)=='rgb('){var b=this.slice(4,this.length-1).split(',');var i=0;do{a+=parseInt(b[i]).toColorPart()}while(++i<3)}else{if(this.slice(0,1)=='#'){if(this.length==4)for(var i=1;i<4;i++)a+=(this.charAt(i)+this.charAt(i)).toLowerCase();if(this.length==7)a=this.toLowerCase()}}return(a.length==7?a:(arguments[0]||this))};Element.collectTextNodes=function(b){return $A($(b).childNodes).collect(function(a){return(a.nodeType==3?a.nodeValue:(a.hasChildNodes()?Element.collectTextNodes(a):''))}).flatten().join('')};Element.collectTextNodesIgnoreClass=function(b,c){return $A($(b).childNodes).collect(function(a){return(a.nodeType==3?a.nodeValue:((a.hasChildNodes()&&!Element.hasClassName(a,c))?Element.collectTextNodesIgnoreClass(a,c):''))}).flatten().join('')};Element.setContentZoom=function(a,b){a=$(a);a.setStyle({fontSize:(b/100)+'em'});if(Prototype.Browser.WebKit)window.scrollBy(0,0);return a};Element.getInlineOpacity=function(a){return $(a).style.opacity||''};Element.forceRerendering=function(a){try{a=$(a);var n=document.createTextNode(' ');a.appendChild(n);a.removeChild(n)}catch(e){}};var Effect={_elementDoesNotExistError:{name:'ElementDoesNotExistError',message:'The specified DOM element does not exist, but is required for this effect to operate'},Transitions:{linear:Prototype.K,sinoidal:function(a){return(-Math.cos(a*Math.PI)/2)+0.5},reverse:function(a){return 1-a},flicker:function(a){var a=((-Math.cos(a*Math.PI)/4)+0.75)+Math.random()/4;return a>1?1:a},wobble:function(a){return(-Math.cos(a*Math.PI*(9*a))/2)+0.5},pulse:function(a,b){b=b||5;return(((a%(1/b))*b).round()==0?((a*b*2)-(a*b*2).floor()):1-((a*b*2)-(a*b*2).floor()))},spring:function(a){return 1-(Math.cos(a*4.5*Math.PI)*Math.exp(-a*6))},none:function(a){return 0},full:function(a){return 1}},DefaultOptions:{duration:1.0,fps:100,sync:false,from:0.0,to:1.0,delay:0.0,queue:'parallel'},tagifyText:function(c){var d='position:relative';if(Prototype.Browser.IE)d+=';zoom:1';c=$(c);$A(c.childNodes).each(function(b){if(b.nodeType==3){b.nodeValue.toArray().each(function(a){c.insertBefore(new Element('span',{style:d}).update(a==' '?String.fromCharCode(160):a),b)});Element.remove(b)}})},multiple:function(c,d){var e;if(((typeof c=='object')||Object.isFunction(c))&&(c.length))e=c;else e=$(c).childNodes;var f=Object.extend({speed:0.1,delay:0.0},arguments[2]||{});var g=f.delay;$A(e).each(function(a,b){new d(a,Object.extend(f,{delay:b*f.speed+g}))})},PAIRS:{'slide':['SlideDown','SlideUp'],'blind':['BlindDown','BlindUp'],'appear':['Appear','Fade']},toggle:function(a,b){a=$(a);b=(b||'appear').toLowerCase();var c=Object.extend({queue:{position:'end',scope:(a.id||'global'),limit:1}},arguments[2]||{});Effect[a.visible()?Effect.PAIRS[b][1]:Effect.PAIRS[b][0]](a,c)}};Effect.DefaultOptions.transition=Effect.Transitions.sinoidal;Effect.ScopedQueue=Class.create(Enumerable,{initialize:function(){this.effects=[];this.interval=null},_each:function(a){this.effects._each(a)},add:function(a){var b=new Date().getTime();var c=Object.isString(a.options.queue)?a.options.queue:a.options.queue.position;switch(c){case'front':this.effects.findAll(function(e){return e.state=='idle'}).each(function(e){e.startOn+=a.finishOn;e.finishOn+=a.finishOn});break;case'with-last':b=this.effects.pluck('startOn').max()||b;break;case'end':b=this.effects.pluck('finishOn').max()||b;break}a.startOn+=b;a.finishOn+=b;if(!a.options.queue.limit||(this.effects.length<a.options.queue.limit))this.effects.push(a);if(!this.interval)this.interval=setInterval(this.loop.bind(this),15)},remove:function(a){this.effects=this.effects.reject(function(e){return e==a});if(this.effects.length==0){clearInterval(this.interval);this.interval=null}},loop:function(){var a=new Date().getTime();for(var i=0,len=this.effects.length;i<len;i++)this.effects[i]&&this.effects[i].loop(a)}});Effect.Queues={instances:$H(),get:function(a){if(!Object.isString(a))return a;return this.instances.get(a)||this.instances.set(a,new Effect.ScopedQueue())}};Effect.Queue=Effect.Queues.get('global');Effect.Base=Class.create({position:null,start:function(c){function codeForEvent(a,b){return((a[b+'Internal']?'this.options.'+b+'Internal(this);':'')+(a[b]?'this.options.'+b+'(this);':''))}if(c&&c.transition===false)c.transition=Effect.Transitions.linear;this.options=Object.extend(Object.extend({},Effect.DefaultOptions),c||{});this.currentFrame=0;this.state='idle';this.startOn=this.options.delay*1000;this.finishOn=this.startOn+(this.options.duration*1000);this.fromToDelta=this.options.to-this.options.from;this.totalTime=this.finishOn-this.startOn;this.totalFrames=this.options.fps*this.options.duration;eval('this.render = function(pos){ '+'if (this.state=="idle"){this.state="running";'+codeForEvent(this.options,'beforeSetup')+(this.setup?'this.setup();':'')+codeForEvent(this.options,'afterSetup')+'};if (this.state=="running"){'+'pos=this.options.transition(pos)*'+this.fromToDelta+'+'+this.options.from+';'+'this.position=pos;'+codeForEvent(this.options,'beforeUpdate')+(this.update?'this.update(pos);':'')+codeForEvent(this.options,'afterUpdate')+'}}');this.event('beforeStart');if(!this.options.sync)Effect.Queues.get(Object.isString(this.options.queue)?'global':this.options.queue.scope).add(this)},loop:function(a){if(a>=this.startOn){if(a>=this.finishOn){this.render(1.0);this.cancel();this.event('beforeFinish');if(this.finish)this.finish();this.event('afterFinish');return}var b=(a-this.startOn)/this.totalTime,frame=(b*this.totalFrames).round();if(frame>this.currentFrame){this.render(b);this.currentFrame=frame}}},cancel:function(){if(!this.options.sync)Effect.Queues.get(Object.isString(this.options.queue)?'global':this.options.queue.scope).remove(this);this.state='finished'},event:function(a){if(this.options[a+'Internal'])this.options[a+'Internal'](this);if(this.options[a])this.options[a](this)},inspect:function(){var a=$H();for(property in this)if(!Object.isFunction(this[property]))a.set(property,this[property]);return'#<Effect:'+a.inspect()+',options:'+$H(this.options).inspect()+'>'}});Effect.Parallel=Class.create(Effect.Base,{initialize:function(a){this.effects=a||[];this.start(arguments[1])},update:function(a){this.effects.invoke('render',a)},finish:function(b){this.effects.each(function(a){a.render(1.0);a.cancel();a.event('beforeFinish');if(a.finish)a.finish(b);a.event('afterFinish')})}});Effect.Tween=Class.create(Effect.Base,{initialize:function(b,c,d){b=Object.isString(b)?$(b):b;var e=$A(arguments),method=e.last(),options=e.length==5?e[3]:null;this.method=Object.isFunction(method)?method.bind(b):Object.isFunction(b[method])?b[method].bind(b):function(a){b[method]=a};this.start(Object.extend({from:c,to:d},options||{}))},update:function(a){this.method(a)}});Effect.Event=Class.create(Effect.Base,{initialize:function(){this.start(Object.extend({duration:0},arguments[0]||{}))},update:Prototype.emptyFunction});Effect.Opacity=Class.create(Effect.Base,{initialize:function(a){this.element=$(a);if(!this.element)throw(Effect._elementDoesNotExistError);if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout))this.element.setStyle({zoom:1});var b=Object.extend({from:this.element.getOpacity()||0.0,to:1.0},arguments[1]||{});this.start(b)},update:function(a){this.element.setOpacity(a)}});Effect.Move=Class.create(Effect.Base,{initialize:function(a){this.element=$(a);if(!this.element)throw(Effect._elementDoesNotExistError);var b=Object.extend({x:0,y:0,mode:'relative'},arguments[1]||{});this.start(b)},setup:function(){this.element.makePositioned();this.originalLeft=parseFloat(this.element.getStyle('left')||'0');this.originalTop=parseFloat(this.element.getStyle('top')||'0');if(this.options.mode=='absolute'){this.options.x=this.options.x-this.originalLeft;this.options.y=this.options.y-this.originalTop}},update:function(a){this.element.setStyle({left:(this.options.x*a+this.originalLeft).round()+'px',top:(this.options.y*a+this.originalTop).round()+'px'})}});Effect.MoveBy=function(a,b,c){return new Effect.Move(a,Object.extend({x:c,y:b},arguments[3]||{}))};Effect.Scale=Class.create(Effect.Base,{initialize:function(a,b){this.element=$(a);if(!this.element)throw(Effect._elementDoesNotExistError);var c=Object.extend({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:'box',scaleFrom:100.0,scaleTo:b},arguments[2]||{});this.start(c)},setup:function(){this.restoreAfterFinish=this.options.restoreAfterFinish||false;this.elementPositioning=this.element.getStyle('position');this.originalStyle={};['top','left','width','height','fontSize'].each(function(k){this.originalStyle[k]=this.element.style[k]}.bind(this));this.originalTop=this.element.offsetTop;this.originalLeft=this.element.offsetLeft;var b=this.element.getStyle('font-size')||'100%';['em','px','%','pt'].each(function(a){if(b.indexOf(a)>0){this.fontSize=parseFloat(b);this.fontSizeType=a}}.bind(this));this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;this.dims=null;if(this.options.scaleMode=='box')this.dims=[this.element.offsetHeight,this.element.offsetWidth];if(/^content/.test(this.options.scaleMode))this.dims=[this.element.scrollHeight,this.element.scrollWidth];if(!this.dims)this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth]},update:function(a){var b=(this.options.scaleFrom/100.0)+(this.factor*a);if(this.options.scaleContent&&this.fontSize)this.element.setStyle({fontSize:this.fontSize*b+this.fontSizeType});this.setDimensions(this.dims[0]*b,this.dims[1]*b)},finish:function(a){if(this.restoreAfterFinish)this.element.setStyle(this.originalStyle)},setDimensions:function(a,b){var d={};if(this.options.scaleX)d.width=b.round()+'px';if(this.options.scaleY)d.height=a.round()+'px';if(this.options.scaleFromCenter){var c=(a-this.dims[0])/2;var e=(b-this.dims[1])/2;if(this.elementPositioning=='absolute'){if(this.options.scaleY)d.top=this.originalTop-c+'px';if(this.options.scaleX)d.left=this.originalLeft-e+'px'}else{if(this.options.scaleY)d.top=-c+'px';if(this.options.scaleX)d.left=-e+'px'}}this.element.setStyle(d)}});Effect.Highlight=Class.create(Effect.Base,{initialize:function(a){this.element=$(a);if(!this.element)throw(Effect._elementDoesNotExistError);var b=Object.extend({startcolor:'#ffff99'},arguments[1]||{});this.start(b)},setup:function(){if(this.element.getStyle('display')=='none'){this.cancel();return}this.oldStyle={};if(!this.options.keepBackgroundImage){this.oldStyle.backgroundImage=this.element.getStyle('background-image');this.element.setStyle({backgroundImage:'none'})}if(!this.options.endcolor)this.options.endcolor=this.element.getStyle('background-color').parseColor('#ffffff');if(!this.options.restorecolor)this.options.restorecolor=this.element.getStyle('background-color');this._base=$R(0,2).map(function(i){return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16)}.bind(this));this._delta=$R(0,2).map(function(i){return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i]}.bind(this))},update:function(a){this.element.setStyle({backgroundColor:$R(0,2).inject('#',function(m,v,i){return m+((this._base[i]+(this._delta[i]*a)).round().toColorPart())}.bind(this))})},finish:function(){this.element.setStyle(Object.extend(this.oldStyle,{backgroundColor:this.options.restorecolor}))}});Effect.ScrollTo=function(a){var b=arguments[1]||{},scrollOffsets=document.viewport.getScrollOffsets(),elementOffsets=$(a).cumulativeOffset(),max=document.viewport.getScrollOffsets[0]-document.viewport.getHeight();if(b.offset)elementOffsets[1]+=b.offset;return new Effect.Tween(null,scrollOffsets.top,elementOffsets[1]>max?max:elementOffsets[1],b,function(p){scrollTo(scrollOffsets.left,p.round())})};Effect.Fade=function(b){b=$(b);var c=b.getInlineOpacity();var d=Object.extend({from:b.getOpacity()||1.0,to:0.0,afterFinishInternal:function(a){if(a.options.to!=0)return;a.element.hide().setStyle({opacity:c})}},arguments[1]||{});return new Effect.Opacity(b,d)};Effect.Appear=function(b){b=$(b);var c=Object.extend({from:(b.getStyle('display')=='none'?0.0:b.getOpacity()||0.0),to:1.0,afterFinishInternal:function(a){a.element.forceRerendering()},beforeSetup:function(a){a.element.setOpacity(a.options.from).show()}},arguments[1]||{});return new Effect.Opacity(b,c)};Effect.Puff=function(b){b=$(b);var c={opacity:b.getInlineOpacity(),position:b.getStyle('position'),top:b.style.top,left:b.style.left,width:b.style.width,height:b.style.height};return new Effect.Parallel([new Effect.Scale(b,200,{sync:true,scaleFromCenter:true,scaleContent:true,restoreAfterFinish:true}),new Effect.Opacity(b,{sync:true,to:0.0})],Object.extend({duration:1.0,beforeSetupInternal:function(a){Position.absolutize(a.effects[0].element)},afterFinishInternal:function(a){a.effects[0].element.hide().setStyle(c)}},arguments[1]||{}))};Effect.BlindUp=function(b){b=$(b);b.makeClipping();return new Effect.Scale(b,0,Object.extend({scaleContent:false,scaleX:false,restoreAfterFinish:true,afterFinishInternal:function(a){a.element.hide().undoClipping()}},arguments[1]||{}))};Effect.BlindDown=function(b){b=$(b);var c=b.getDimensions();return new Effect.Scale(b,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:c.height,originalWidth:c.width},restoreAfterFinish:true,afterSetup:function(a){a.element.makeClipping().setStyle({height:'0px'}).show()},afterFinishInternal:function(a){a.element.undoClipping()}},arguments[1]||{}))};Effect.SwitchOff=function(c){c=$(c);var d=c.getInlineOpacity();return new Effect.Appear(c,Object.extend({duration:0.4,from:0,transition:Effect.Transitions.flicker,afterFinishInternal:function(b){new Effect.Scale(b.element,1,{duration:0.3,scaleFromCenter:true,scaleX:false,scaleContent:false,restoreAfterFinish:true,beforeSetup:function(a){a.element.makePositioned().makeClipping()},afterFinishInternal:function(a){a.element.hide().undoClipping().undoPositioned().setStyle({opacity:d})}})}},arguments[1]||{}))};Effect.DropOut=function(b){b=$(b);var c={top:b.getStyle('top'),left:b.getStyle('left'),opacity:b.getInlineOpacity()};return new Effect.Parallel([new Effect.Move(b,{x:0,y:100,sync:true}),new Effect.Opacity(b,{sync:true,to:0.0})],Object.extend({duration:0.5,beforeSetup:function(a){a.effects[0].element.makePositioned()},afterFinishInternal:function(a){a.effects[0].element.hide().undoPositioned().setStyle(c)}},arguments[1]||{}))};Effect.Shake=function(g){g=$(g);var h=Object.extend({distance:20,duration:0.5},arguments[1]||{});var i=parseFloat(h.distance);var j=parseFloat(h.duration)/10.0;var k={top:g.getStyle('top'),left:g.getStyle('left')};return new Effect.Move(g,{x:i,y:0,duration:j,afterFinishInternal:function(f){new Effect.Move(f.element,{x:-i*2,y:0,duration:j*2,afterFinishInternal:function(e){new Effect.Move(e.element,{x:i*2,y:0,duration:j*2,afterFinishInternal:function(d){new Effect.Move(d.element,{x:-i*2,y:0,duration:j*2,afterFinishInternal:function(c){new Effect.Move(c.element,{x:i*2,y:0,duration:j*2,afterFinishInternal:function(b){new Effect.Move(b.element,{x:-i,y:0,duration:j,afterFinishInternal:function(a){a.element.undoPositioned().setStyle(k)}})}})}})}})}})}})};Effect.SlideDown=function(b){b=$(b).cleanWhitespace();var c=b.down().getStyle('bottom');var d=b.getDimensions();return new Effect.Scale(b,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:window.opera?0:1,scaleMode:{originalHeight:d.height,originalWidth:d.width},restoreAfterFinish:true,afterSetup:function(a){a.element.makePositioned();a.element.down().makePositioned();if(window.opera)a.element.setStyle({top:''});a.element.makeClipping().setStyle({height:'0px'}).show()},afterUpdateInternal:function(a){a.element.down().setStyle({bottom:(a.dims[0]-a.element.clientHeight)+'px'})},afterFinishInternal:function(a){a.element.undoClipping().undoPositioned();a.element.down().undoPositioned().setStyle({bottom:c})}},arguments[1]||{}))};Effect.SlideUp=function(b){b=$(b).cleanWhitespace();var c=b.down().getStyle('bottom');var d=b.getDimensions();return new Effect.Scale(b,window.opera?0:1,Object.extend({scaleContent:false,scaleX:false,scaleMode:'box',scaleFrom:100,scaleMode:{originalHeight:d.height,originalWidth:d.width},restoreAfterFinish:true,afterSetup:function(a){a.element.makePositioned();a.element.down().makePositioned();if(window.opera)a.element.setStyle({top:''});a.element.makeClipping().show()},afterUpdateInternal:function(a){a.element.down().setStyle({bottom:(a.dims[0]-a.element.clientHeight)+'px'})},afterFinishInternal:function(a){a.element.hide().undoClipping().undoPositioned();a.element.down().undoPositioned().setStyle({bottom:c})}},arguments[1]||{}))};Effect.Squish=function(b){return new Effect.Scale(b,window.opera?1:0,{restoreAfterFinish:true,beforeSetup:function(a){a.element.makeClipping()},afterFinishInternal:function(a){a.element.hide().undoClipping()}})};Effect.Grow=function(c){c=$(c);var d=Object.extend({direction:'center',moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.full},arguments[1]||{});var e={top:c.style.top,left:c.style.left,height:c.style.height,width:c.style.width,opacity:c.getInlineOpacity()};var f=c.getDimensions();var g,initialMoveY;var h,moveY;switch(d.direction){case'top-left':g=initialMoveY=h=moveY=0;break;case'top-right':g=f.width;initialMoveY=moveY=0;h=-f.width;break;case'bottom-left':g=h=0;initialMoveY=f.height;moveY=-f.height;break;case'bottom-right':g=f.width;initialMoveY=f.height;h=-f.width;moveY=-f.height;break;case'center':g=f.width/2;initialMoveY=f.height/2;h=-f.width/2;moveY=-f.height/2;break}return new Effect.Move(c,{x:g,y:initialMoveY,duration:0.01,beforeSetup:function(a){a.element.hide().makeClipping().makePositioned()},afterFinishInternal:function(b){new Effect.Parallel([new Effect.Opacity(b.element,{sync:true,to:1.0,from:0.0,transition:d.opacityTransition}),new Effect.Move(b.element,{x:h,y:moveY,sync:true,transition:d.moveTransition}),new Effect.Scale(b.element,100,{scaleMode:{originalHeight:f.height,originalWidth:f.width},sync:true,scaleFrom:window.opera?1:0,transition:d.scaleTransition,restoreAfterFinish:true})],Object.extend({beforeSetup:function(a){a.effects[0].element.setStyle({height:'0px'}).show()},afterFinishInternal:function(a){a.effects[0].element.undoClipping().undoPositioned().setStyle(e)}},d))}})};Effect.Shrink=function(b){b=$(b);var c=Object.extend({direction:'center',moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.none},arguments[1]||{});var d={top:b.style.top,left:b.style.left,height:b.style.height,width:b.style.width,opacity:b.getInlineOpacity()};var e=b.getDimensions();var f,moveY;switch(c.direction){case'top-left':f=moveY=0;break;case'top-right':f=e.width;moveY=0;break;case'bottom-left':f=0;moveY=e.height;break;case'bottom-right':f=e.width;moveY=e.height;break;case'center':f=e.width/2;moveY=e.height/2;break}return new Effect.Parallel([new Effect.Opacity(b,{sync:true,to:0.0,from:1.0,transition:c.opacityTransition}),new Effect.Scale(b,window.opera?1:0,{sync:true,transition:c.scaleTransition,restoreAfterFinish:true}),new Effect.Move(b,{x:f,y:moveY,sync:true,transition:c.moveTransition})],Object.extend({beforeStartInternal:function(a){a.effects[0].element.makePositioned().makeClipping()},afterFinishInternal:function(a){a.effects[0].element.hide().undoClipping().undoPositioned().setStyle(d)}},c))};Effect.Pulsate=function(b){b=$(b);var c=arguments[1]||{};var d=b.getInlineOpacity();var e=c.transition||Effect.Transitions.sinoidal;var f=function(a){return e(1-Effect.Transitions.pulse(a,c.pulses))};f.bind(e);return new Effect.Opacity(b,Object.extend(Object.extend({duration:2.0,from:0,afterFinishInternal:function(a){a.element.setStyle({opacity:d})}},c),{transition:f}))};Effect.Fold=function(c){c=$(c);var d={top:c.style.top,left:c.style.left,width:c.style.width,height:c.style.height};c.makeClipping();return new Effect.Scale(c,5,Object.extend({scaleContent:false,scaleX:false,afterFinishInternal:function(b){new Effect.Scale(c,1,{scaleContent:false,scaleY:false,afterFinishInternal:function(a){a.element.hide().undoClipping().setStyle(d)}})}},arguments[1]||{}))};Effect.Morph=Class.create(Effect.Base,{initialize:function(c){this.element=$(c);if(!this.element)throw(Effect._elementDoesNotExistError);var d=Object.extend({style:{}},arguments[1]||{});if(!Object.isString(d.style))this.style=$H(d.style);else{if(d.style.include(':'))this.style=d.style.parseStyle();else{this.element.addClassName(d.style);this.style=$H(this.element.getStyles());this.element.removeClassName(d.style);var e=this.element.getStyles();this.style=this.style.reject(function(a){return a.value==e[a.key]});d.afterFinishInternal=function(b){b.element.addClassName(b.options.style);b.transforms.each(function(a){b.element.style[a.style]=''})}}}this.start(d)},setup:function(){function parseColor(a){if(!a||['rgba(0, 0, 0, 0)','transparent'].include(a))a='#ffffff';a=a.parseColor();return $R(0,2).map(function(i){return parseInt(a.slice(i*2+1,i*2+3),16)})}this.transforms=this.style.map(function(a){var b=a[0],value=a[1],unit=null;if(value.parseColor('#zzzzzz')!='#zzzzzz'){value=value.parseColor();unit='color'}else if(b=='opacity'){value=parseFloat(value);if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout))this.element.setStyle({zoom:1})}else if(Element.CSS_LENGTH.test(value)){var c=value.match(/^([\+\-]?[0-9\.]+)(.*)$/);value=parseFloat(c[1]);unit=(c.length==3)?c[2]:null}var d=this.element.getStyle(b);return{style:b.camelize(),originalValue:unit=='color'?parseColor(d):parseFloat(d||0),targetValue:unit=='color'?parseColor(value):value,unit:unit}}.bind(this)).reject(function(a){return((a.originalValue==a.targetValue)||(a.unit!='color'&&(isNaN(a.originalValue)||isNaN(a.targetValue))))})},update:function(a){var b={},transform,i=this.transforms.length;while(i--)b[(transform=this.transforms[i]).style]=transform.unit=='color'?'#'+(Math.round(transform.originalValue[0]+(transform.targetValue[0]-transform.originalValue[0])*a)).toColorPart()+(Math.round(transform.originalValue[1]+(transform.targetValue[1]-transform.originalValue[1])*a)).toColorPart()+(Math.round(transform.originalValue[2]+(transform.targetValue[2]-transform.originalValue[2])*a)).toColorPart():(transform.originalValue+(transform.targetValue-transform.originalValue)*a).toFixed(3)+(transform.unit===null?'':transform.unit);this.element.setStyle(b,true)}});Effect.Transform=Class.create({initialize:function(a){this.tracks=[];this.options=arguments[1]||{};this.addTracks(a)},addTracks:function(c){c.each(function(a){a=$H(a);var b=a.values().first();this.tracks.push($H({ids:a.keys().first(),effect:Effect.Morph,options:{style:b}}))}.bind(this));return this},play:function(){return new Effect.Parallel(this.tracks.map(function(a){var b=a.get('ids'),effect=a.get('effect'),options=a.get('options');var c=[$(b)||$$(b)].flatten();return c.map(function(e){return new effect(e,Object.extend({sync:true},options))})}).flatten(),this.options)}});Element.CSS_PROPERTIES=$w('backgroundColor backgroundPosition borderBottomColor borderBottomStyle '+'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth '+'borderRightColor borderRightStyle borderRightWidth borderSpacing '+'borderTopColor borderTopStyle borderTopWidth bottom clip color '+'fontSize fontWeight height left letterSpacing lineHeight '+'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+'maxWidth minHeight minWidth opacity outlineColor outlineOffset '+'outlineWidth paddingBottom paddingLeft paddingRight paddingTop '+'right textIndent top width wordSpacing zIndex');Element.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;String.__parseStyleElement=document.createElement('div');String.prototype.parseStyle=function(){var b,styleRules=$H();if(Prototype.Browser.WebKit)b=new Element('div',{style:this}).style;else{String.__parseStyleElement.innerHTML='<div style="'+this+'"></div>';b=String.__parseStyleElement.childNodes[0].style}Element.CSS_PROPERTIES.each(function(a){if(b[a])styleRules.set(a,b[a])});if(Prototype.Browser.IE&&this.include('opacity'))styleRules.set('opacity',this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);return styleRules};if(document.defaultView&&document.defaultView.getComputedStyle){Element.getStyles=function(c){var d=document.defaultView.getComputedStyle($(c),null);return Element.CSS_PROPERTIES.inject({},function(a,b){a[b]=d[b];return a})}}else{Element.getStyles=function(c){c=$(c);var d=c.currentStyle,styles;styles=Element.CSS_PROPERTIES.inject({},function(a,b){a[b]=d[b];return a});if(!styles.opacity)styles.opacity=c.getOpacity();return styles}}Effect.Methods={morph:function(a,b){a=$(a);new Effect.Morph(a,Object.extend({style:b},arguments[2]||{}));return a},visualEffect:function(a,b,c){a=$(a);var s=b.dasherize().camelize(),klass=s.charAt(0).toUpperCase()+s.substring(1);new Effect[klass](a,c);return a},highlight:function(a,b){a=$(a);new Effect.Highlight(a,b);return a}};$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+'pulsate shake puff squish switchOff dropOut').each(function(c){Effect.Methods[c]=function(a,b){a=$(a);Effect[c.charAt(0).toUpperCase()+c.substring(1)](a,b);return a}});$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(function(f){Effect.Methods[f]=Element[f]});Element.addMethods(Effect.Methods);
//load additional files
Scriptaculous.load();
if(typeof dj=="undefined"){dj={};}
if(typeof dj.widget=="undefined"){dj.widget={};}
if(typeof dj.widget.tree=="undefined"){dj.widget.tree={};}
dj.widget.ProgressBar=Class.create({TYPES:["horizontal"],initialize:function(container,config){var that=this;this.cfg={indicator:"div",fps:100,timer:4,type:"horizontal"};Object.extend(this.cfg,(config||{}));this.oCnt=$(container);this.oInd=new Element(this.cfg.indicator);this.oCnt.update(this.oInd);this._pcToPixCache={};this._pba=null;},play:function(){if(this._pba!==null){this._pba.start(this._pba.options);return;}
var that=this;var len=this._pcToPix(100);this._pba=new Effect.Move(this.oInd,{x:len,y:0,fps:1,transition:Effect.Transitions.linear,duration:that.cfg.timer,beforeStart:that.cfg.beforeStart,beforeUpdate:that.cfg.beforeUpdate,afterUpdate:that.cfg.afterUpdate,afterFinish:that.cfg.afterFinish});},pause:function(){if(this._pba===null){return;}
this._pba.cancel();},stop:function(){if(this._pba===null){return;}
this.pause();this._pba.originalLeft=0;this._pba.update(0);},_pcToPix:function(pc,noCache){var cached=this._pcToPixCache[pc];if(!noCache&&typeof cached!=="undefined"){return cached;}
var max=this.oCnt.getWidth();pc=(pc<=100)?pc:100;pc=(pc>=0)?pc:0;var px=(max/100*pc);px=(px>=0)?px:0;this._pcToPixCache[pc]=px;return px;}});
if(typeof dj=="undefined"){dj={};}
if(typeof dj.context=="undefined"){dj.context={};}
if(typeof dj.context.ads=="undefined"){dj.context.ads={};}
if(typeof dj.util=="undefined"){dj.util={};}
if(typeof dj.widget=="undefined"){dj.widget={};}
if(typeof dj.module=="undefined"){dj.module={};}
if(typeof dj.service=="undefined"){dj.service={};}
dojo.provide("dj.util.JSExec");dojo.getObject("dj.context.jsexec",true);(function(){var jsExecCtr=0,markGroup=undefined;dj.util.JSExec=function(ctx){var dju=dj.util,con=window.console,emptyFunc=function(){},isPerf=(typeof dju.Perf=="object"),isTwoMark=(isPerf&&((dju.Perf.type=="console")||(dju.Perf.type=="jiffy"))),djmark=(isPerf&&(typeof dju.Perf.mark=="function"))?dju.Perf.mark:emptyFunc,djmeasure=(isPerf&&(typeof dju.Perf.measure=="function"))?dju.Perf.measure:emptyFunc,isWarnOk=(con&&typeof con.warn=="function"),warn=function(a,b,c){if(isWarnOk){console.warn(a,b,c);}};if(isTwoMark){markGroup=("JSEXEC: "+jsExecCtr++);djmark(markGroup);djmark=emptyFunc;}
return function(execIndex,djexecname,func){try{var markId=execIndex+"-"+djexecname;djmark(markId);func.apply(ctx);djmeasure(markId,markGroup);}catch(e){warn("JSExec %d: %o",execIndex,e);}};};}());if(typeof djcs=="undefined"){this.djcs={}}djcs.Util={getCookie:function(a){if(a===null){return null}var b=document.cookie.split(';'),a_temp_cookie='',cookie_name='',cookie_value='',b_cookie_found=false;for(var i=0,len=b.length;i<len;i++){a_temp_cookie=b[i].split('=');cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g,'');if(cookie_name==a){b_cookie_found=true;if(a_temp_cookie.length>1){cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,''))}return cookie_value}a_temp_cookie=null;cookie_name=''}if(!b_cookie_found){return null}},replaceAll:function(a,b,c){var d=a.indexOf(b);while(d!=-1){a=a.replace(b,c);d=a.indexOf(b)}return a},UTF8Decode:function(a){if(a===null){return null}var b="",i=0,c=0,c2=0,c3=0,utftext=a;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){b+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);b+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);b+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return this.replaceAll(b,"+"," ")},base64Decode:function(a){if(a===null){return null}var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",output="",chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<a.length){enc1=b.indexOf(a.charAt(i++));enc2=b.indexOf(a.charAt(i++));enc3=b.indexOf(a.charAt(i++));enc4=b.indexOf(a.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=this.UTF8Decode(output);return output}};djcs.UserInfo=function(){var U=djcs.Util,priv={cookieName:"djcs_info",initialized:false,map:null,roleList:null,checkInfo:function(){if(!this.initialized){var a=U.getCookie(this.cookieName);if(a!==null){var b=U.base64Decode(U.UTF8Decode(unescape(a)));if(b!==null){var c=null;try{c=eval("("+b+")");if((c!==null)&&(c.uuid!==null)){for(var p in c){if(c.hasOwnProperty(p)){c[p]=U.UTF8Decode(unescape(c[p]))}}var d=c.roles;if(d){this.roleList=d.split(',')}this.map=c;this.initialized=true}}catch(err){}}}}return(this.map!==null)},getMapElement:function(a){return(this.checkInfo())?this.map[a]:null}};priv.checkInfo();return{isLoggedIn:function(){return priv.getMapElement("uuid")!==null},getRolesListStr:function(){return priv.getMapElement("roles")},hasRole:function(a){return(priv.roleList)&&(priv.roleList.indexOf(a)>=0)},getSessionId:function(){return priv.getMapElement("session")},getUuid:function(){return priv.getMapElement("uuid")},getFirstName:function(){return priv.getMapElement("first_name")},getLastName:function(){return priv.getMapElement("last_name")},getUserName:function(){return priv.getMapElement("user")},getEmailAddress:function(){return priv.getMapElement("email")},getCallsign:function(){var a=this.getFirstName(),LN=this.getLastName();return(a&&LN&&(a!="null")&&(LN!="null"))?(a+" "+LN):this.getUserName()}}}();djcs.EpitonCompat=function(){var i=djcs.UserInfo,render=function(b){return function(a){((typeof a=="string")?document.getElementById(a):a).innerHTML=b}};this.epiton={runOnReady:function(a){a.apply()},gui:{Credentials:{getUuid:i.getUuid,hasRole:i.hasRole,isLoggedIn:i.isLoggedIn},Callsign:{renderIntoDiv:render(i.getCallsign())},EmailAddress:{renderIntoDiv:render(i.getEmailAddress())},FirstName:{renderIntoDiv:render(i.getFirstName())},LastName:{renderIntoDiv:render(i.getLastName())}}}}();
dojo.provide("dj.util.User");dj.util.User={STATUS:{LOGGED_IN:1,LOGGED_OUT:0,NON_SUB:2},_currentStatus:null,getStatus:function(doClearCache){try{throw new Error("{User.getStatus} deprecated method");}
catch(e){console.dir(e);}
return this.STATUS.LOGGED_IN;},hasRole:function(roleName,callback){epiton.runOnReady(function(){var hr=epiton.gui.Credentials.hasRole(roleName.toUpperCase());callback(hr);});},isLoggedIn:function(callback){epiton.runOnReady(function(){var isLoggedIn=epiton.gui.Credentials.isLoggedIn();callback(isLoggedIn);});},isSubLoggedIn:function(callback,roleName){roleName=(typeof roleName==="string")?roleName.toUpperCase():"WSJ";epiton.runOnReady(function(){var isLoggedIn=epiton.gui.Credentials.isLoggedIn();if(roleName!=="WSJ"){var hr=epiton.gui.Credentials.hasRole(roleName);callback(isLoggedIn&&hr);}else{var hr1=epiton.gui.Credentials.hasRole("WSJ");var hr2=epiton.gui.Credentials.hasRole("WSJ-TRANSIENT");callback(isLoggedIn&&(hr1||hr2));}});},isRegLoggedIn:function(callback,roleName){roleName=(typeof roleName==="string")?roleName.toUpperCase():"WSJ";epiton.runOnReady(function(){var isLoggedIn=epiton.gui.Credentials.isLoggedIn();if(roleName!=="WSJ"){var hr=epiton.gui.Credentials.hasRole(roleName);callback(isLoggedIn&&!hr);}else{var hr1=epiton.gui.Credentials.hasRole("WSJ");var hr2=epiton.gui.Credentials.hasRole("WSJ-TRANSIENT");callback(isLoggedIn&&(!hr1&&!hr2));}});},renderCallsign:function(idOrElement){epiton.runOnReady(function(){epiton.gui.Callsign.renderIntoDiv(idOrElement);});},renderEmailAddress:function(idOrElement){epiton.runOnReady(function(){epiton.gui.EmailAddress.renderIntoDiv(idOrElement);});},renderFirstName:function(idOrElement){epiton.runOnReady(function(){epiton.gui.FirstName.renderIntoDiv(idOrElement);});},renderLastName:function(idOrElement){epiton.runOnReady(function(){epiton.gui.LastName.renderIntoDiv(idOrElement);});},getUserId:function(callback){epiton.runOnReady(function(){var isLoggedIn=epiton.gui.Credentials.isLoggedIn();var userId="";if(isLoggedIn){userId=epiton.gui.Credentials.getUuid().toString();}
callback(userId);});}};
dojo.provide("dj.util.Cookie");dj.util.Cookie=function(){var defSeparator="||",defaultGroup="DJCOOKIE",groups={},_cookieDomain,_doEncode=true;var _getDomain=function(){if(typeof this._cookieDomain=="string"){return this._cookieDomain;}
var aDomain=location.hostname.split('.');var aDomainLen=aDomain.length;this._cookieDomain=(aDomainLen>2)?'.'+aDomain[aDomainLen-2]+'.'+aDomain[aDomainLen-1]:location.hostname;return this._cookieDomain;};var cookieObjToStr=function(obj){if(typeof obj!=="object"){return;}
var out=[];for(var o in obj){if(obj.hasOwnProperty(o)){out[out.length]=(o+"="+obj[o]);}}
out=out.join(defSeparator);return out;};var cookieStrToObj=function(str){if(typeof str!=="string"){return;}
var obj={};var aStr=str.split(defSeparator);for(var i=0,len=aStr.length;i<len;i++){var spl=aStr[i].split("=");var name=spl.shift();obj[name]=spl.join("=");}
return(obj!=={})?obj:null;};var _createCookieString=function(name,value,encodeValue,options){var text=encodeURIComponent(name)+"="+(encodeValue?encodeURIComponent(value):value);if(typeof options!=="object"){return text;}
if(options.expires instanceof Date){text+="; expires="+options.expires.toGMTString();}
if((typeof options.path==="string")&&options.path!==""){text+="; path="+options.path;}
if((typeof options.domain==="string")&&options.domain!==""){text+="; domain="+options.domain;}
if(options.secure===true){text+="; secure";}
return text;};return{setCookie:function(name,value,days,group,doEncode){if((arguments.length>3)&&((typeof group==="string")||(typeof group==="boolean")&&(group!==false))){return this.setGroupCookie(group,name,value,days);}
var exp=null;if(days){exp=new Date();exp.setTime(exp.getTime()+(days*24*60*60*1000));}
doEncode=((typeof doEncode=="boolean")?doEncode:_doEncode);document.cookie=_createCookieString(name,value,doEncode,{expires:exp,path:'/',domain:_getDomain()});},getCookie:function(name,group,doDecode){if(arguments.length>1){return this.getGroupCookie(group,name);}
doDecode=((typeof doDecode=="boolean")?doDecode:_doEncode);var nameEQ=(doDecode?encodeURIComponent(name):name)+"=";var ca=document.cookie.split(';');for(var i=0,len=ca.length;i<len;i++){var c=ca[i].replace(/^\s+|\s+$/g,"");if(c.indexOf(nameEQ)===0){var val=c.substring(nameEQ.length,c.length);return(doDecode?decodeURIComponent(val):val);}}
return null;},deleteCookie:function(name,group){if(arguments.length>1){return this.deleteGroupCookie(group,name);}
this.setCookie(name,'',-1);},setGroupCookie:function(group,name,value,days){var isSession=(typeof days)=="undefined"||(!days);var isDelete=(days===-1);var isGroupDelete=false;var date=new Date();if(days&&!isSession){date.setTime(date.getTime()+(days*24*60*60*1000));}
var grp=(typeof group!=="boolean")?group:defaultGroup;groups[grp]=groups[grp]||cookieStrToObj(this.getCookie(grp))||{};groups[grp][name]=value;if(isDelete){delete groups[grp][name];var vcntr=0;for(var val in groups[grp]){if(groups[grp].hasOwnProperty(val)){vcntr++;}}
if(vcntr>0){if(!isSession){date.setTime(date.getTime()+(365*24*60*60*1000));}}else{groups[grp]={};isGroupDelete=true;}}
name=grp;value=cookieObjToStr(groups[grp]);var cookieInfo={path:'/',domain:_getDomain()};if(!isSession){cookieInfo.expires=((isGroupDelete)?(new Date(-1)):date);}
document.cookie=_createCookieString(name,value,_doEncode,cookieInfo);},getGroupCookie:function(group,name){var grp=(typeof group!=="boolean")?group:defaultGroup;var grpEq=(encodeURIComponent(grp)+"=");var nameEq=(name+"=");var ca=document.cookie.split(";");var cookie=null;var oCookie=null;var cookieValue=null;var cookieName=null;for(var i=0,len=ca.length;i<len;i++){cookie=ca[i].replace(/^\s+|\s+$/g,"");if(cookie.indexOf(grpEq)===0){cookieValue=cookie.split(grpEq)[1];oCookie=cookieStrToObj(decodeURIComponent(cookieValue));cookieName=oCookie[name];return(typeof cookieName!=="undefined")?cookieName:null;}}
return null;},deleteGroupCookie:function(group,name){this.setGroupCookie(group,name," ",-1);}};}();
dojo.provide("dj.util.Region");dojo.require("dj.util.Cookie");dj.util.Region={getViewByRegion:function(){var cookie=document.cookie,wsjregion="",regionindex=cookie.indexOf("wsjregion");if(regionindex!=-1){var regioncookie=dj.util.Cookie.getCookie("wsjregion");if(regioncookie.indexOf("reset")!=-1){wsjregion=regioncookie.substring(0,regioncookie.indexOf("reset")-1);}else{wsjregion=regioncookie;}}
return wsjregion;},setViewByRegion:function(wsjregion){var cookie=document.cookie,currentRegion=this.getViewByRegion();if(wsjregion!==""&&wsjregion!==currentRegion){dj.util.Cookie.setCookie("wsjregion",wsjregion+",reset,"+currentRegion,"",false,true);}}};
dojo.provide("dj.util.Query");dj.util.Query={matches:function(selector,el){return(dojo.Sizzle.matches(selector,[el]).length>0);},up:function(el,selector){el=dojo.byId(el);for(var i=0;el&&el.nodeType==1;el=el.parentNode){if(this.matches(selector,el)){break;}}
return el;},down:function(el,selector){return dojo.query(selector,el)[0];},next:function(el,selector){el=dojo.byId(el);var matchFirst=false;if(typeof selector=="undefined"){matchFirst=true;}
el=el.nextSibling;for(var i=0;el;el=el.nextSibling){if(el.nodeType==1&&(matchFirst||this.matches(selector,el))){break;}}
return el;},previous:function(el,selector){el=dojo.byId(el);var matchFirst=false;if(typeof selector=="undefined"){matchFirst=true;}
el=el.previousSibling;for(var i=0;el;el=el.previousSibling){if(el.nodeType==1&&(matchFirst||this.matches(selector,el))){break;}}
return el;}};
dojo.provide("dj.util.Element");dojo.require("dj.util.Query");dj.util.Element={contains:function(element,clientX,clientY){var position=dojo.position(element),lx=position.x,ly=position.y,rx=(lx+position.w),ry=(ly+position.h),mx=clientX,my=clientY;return(((mx>=lx)&&(mx<=rx))&&((my>=ly)&&(my<=ry)));},adjustToLargest:function(container,domObj,onLoadCallback){var containerEls=container.getElementsByTagName("*");var resWidth=0;var resHeight=0;for(var i=0,elen=containerEls.length;i<elen;i++){var el=containerEls[i];if((el.tagName=="SCRIPT")||(el.tagName=="NOSCRIPT")){continue;}
var dim=dj.util.Element.getDimensions(el);var width=dim[0];var height=dim[1];resWidth=(width>=resWidth)?width:resWidth;resHeight=(height>=resHeight)?height:resHeight;}
domObj.width=resWidth;domObj.height=resHeight;if(typeof onLoadCallback!="undefined"){onLoadCallback(domObj);}},getDimensions:function(el){var width=0;var height=0;width=el.offsetWidth;height=el.offsetHeight;if(el.style.width!==""){var tmpW=parseInt(el.style.width.split('px')[0],10);width=(width>tmpW)?width:tmpW;}
if(el.style.height!==""){var tmpH=parseInt(el.style.height.split('px')[0],10);height=(height>tmpH)?height:tmpH;}
return[width,height];},closeElement:function(button,closeMe,event){dojo.query(button).forEach(function(node){dojo.connect(node,("on"+event),function(ev){var hideMe=dj.util.Query.up(node,closeMe);dojo.style(hideMe,{display:"none"});});});},hide:function(el){dojo.style(dojo.byId(el),{"display":"none"});},show:function(el){dojo.style(dojo.byId(el),{"display":""});},toggleHiddenClass:function(el){if(!el){return;}
var element=dojo.byId(el);if(element){dojo.toggleClass(element,"hidden");}},identify:function(element){element=dojo.byId(element);var id=dojo.attr(element,'id');if(id){return id;}
do{id='anonymous_element_'+dj.util.Element.idCounter++;}while($(id));dojo.attr(element,'id',id);return id;},idCounter:1,cleanWhitespace:function(element){element=dojo.byId(element);var node=element.firstChild;while(node){var nextNode=node.nextSibling;if(node.nodeType==3&&!/\S/.test(node.nodeValue)){element.removeChild(node);}
node=nextNode;}
return element;}};
dojo.provide("dj.util.Url");dojo.require("dj.util.Element");dj.util.Url={jsFrame:function(container,url,options){var oCnt=dojo.byId(container);if(oCnt===null){throw new Error("{dj.util.jsFrame} container \""+container+"\" not found");}else if(typeof url!=="string"){throw new TypeError("{dj.util.jsFrame} URL not found");}
var cfg={prefix:"/static_html_files/jsframe.html?jsuri=",doPrefix:true,style:"",doContainer:false,containerStyle:"",check404:false};var compat={};if(typeof options!=="object"){compat.doPrefix=(typeof options==="boolean")?options:cfg.doPrefix;compat.prefix=arguments[3]||cfg.prefix;compat.style=arguments[4]||cfg.style;options=compat;}
dojo.mixin(cfg,options);var oIframe=dojo.create('iframe',{src:((cfg.doPrefix)?cfg.prefix+url:url),id:container+'iframe',scrolling:"no",frameBorder:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,style:cfg.style},oCnt);var _eventPush=function(obj,event,handler){if(obj.addEventListener){obj.addEventListener(event,handler,false);}else if(obj.attachEvent){obj.attachEvent('on'+event,handler);}};_eventPush(oIframe,'load',function(){try{var bd=oIframe.contentWindow.document.body;if(cfg.check404&&(bd.innerHTML.indexOf("PAGE UNAVAILABLE")>-1)){console.warn("jsFrame: page '%s' is unavailable.",oIframe.contentWindow.document.location);dojo.destroy(oIframe);return;}
if(!cfg.doPrefix||cfg.doContainer){bd.innerHTML="<div style=\""+cfg.containerStyle+"\">"+bd.innerHTML+"<\/div>";}
dj.util.Element.adjustToLargest(bd,oIframe);}catch(e){console.error("Unable to access iframe body for url: %s",oIframe.src);}});return oIframe;},addStylesheet:function(stylesheet,callback){console.warn("{Url} addStylesheet has been moved to Page.addStylesheet");},openWin:function(U,N,W,H,A,F,L,T,C){var WA=[];var a=["directories","location","menubar","resizable","scrollbars","status","titlebar","toolbar"];A=(A)?("".concat(A)):"on";for(i=0,len=a.length;i<len;i++){if(a[i]=="resizable"){WA[WA.length]=a[i]+"="+"yes";}else{WA[WA.length]=a[i]+"="+((A.indexOf(a[i].substring(0,2))>-1||A=="on")?"yes":"no");}}
if(W){WA[WA.length]="width="+W;}
if(H){WA[WA.length]="height="+H;}
if(C&&W&&H){T=(screen.height-H)/2;L=(screen.width-W)/2;}
if(L){WA[WA.length]="left="+L;WA[WA.length]="screenX="+L;}
if(T){WA[WA.length]="top="+T;WA[WA.length]="screenY="+T;}
A=(WA.length)?WA.join(","):"";var openedWindow=window.open(U,N,A);if(F&&openedWindow){openedWindow.focus();}},changeRoot:function(selector,newRoot,container){var urls=(typeof container!="undefined")?dojo.query(selector,container):dojo.query(selector);var href=window.location.href;var base=href.substring(0,href.lastIndexOf('/')+1);for(var i=0,url,len=urls.length;i<len;i++){url=urls[i];if(url.href.lastIndexOf(base)===0){url.href=newRoot+url.href.substring(base.length);}}}};/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.string"]){dojo._hasResource["dojo.string"]=true;dojo.provide("dojo.string");dojo.string.rep=function(_1,_2){if(_2<=0||!_1){return "";}var _3=[];for(;;){if(_2&1){_3.push(_1);}if(!(_2>>=1)){break;}_1+=_1;}return _3.join("");};dojo.string.pad=function(_4,_5,ch,_6){if(!ch){ch="0";}var _7=String(_4),_8=dojo.string.rep(ch,Math.ceil((_5-_7.length)/ch.length));return _6?_7+_8:_8+_7;};dojo.string.substitute=function(_9,_a,_b,_c){_c=_c||dojo.global;_b=_b?dojo.hitch(_c,_b):function(v){return v;};return _9.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(_d,_e,_f){var _10=dojo.getObject(_e,false,_a);if(_f){_10=dojo.getObject(_f,false,_c).call(_c,_10,_e);}return _b(_10,_e).toString();});};dojo.string.trim=String.prototype.trim?dojo.trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}return str;};}/*global dj,dojo document, unescape*/
dojo.provide("dj.util.ads.Demographics");


/**
 * Demographics (Singleton)
 * @dependencies: dj.util.Cookie
 */
dj.util.ads.Demographics = function(){
  var DEMO_COOKIE = "djcs_demo";
  var END_OF_INPUT = -1;
  var base64Count = 0;
  var base64Str = null;
  var base64Chars = [];
  var reverseBase64Chars = [];
  var cachedUserDemographics = null;
    
  function initBase64Chars(){
    base64Chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
                   'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
                   'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 
                   'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                   't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', 
                   '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
    
    for (var i = 0, len = base64Chars.length; i < len; i++) {
        reverseBase64Chars[base64Chars[i]] = i;
    }
  }
    
  function readReverseBase64() {
    if (!base64Str) {
      return END_OF_INPUT;
    }

    while (true) {
      if (base64Count >= base64Str.length) {
        return END_OF_INPUT;
      }

      var nextCharacter = base64Str.charAt(base64Count);
      base64Count++;

      if (reverseBase64Chars[nextCharacter]) {
        return reverseBase64Chars[nextCharacter];
      }

      if (nextCharacter == 'A') {
        return 0;
      }
    }
    return END_OF_INPUT;
  }

  function ntos(n) {
    n = n.toString(16);
    n = (n.length == 1) ? ("0" + n) : n;
    n = "%" + n;
    return unescape(n);
  }
    
  function parseDemoCookie(cv) {
    if (cv.search(/^V1:/) == -1 || cv.length < 4) {
      return null;
    }
    return cv.substring(3);
  }
    

  function demoReadCookie(cookieName) {
    var theCookie = "" + document.cookie;
    var ind = theCookie.indexOf(cookieName);
    if (ind === -1 || cookieName === "") {
      return "";
    }

    var ind1 = theCookie.indexOf(';', ind);
    if (ind1 === -1) {
      ind1 = theCookie.length;
    }
    return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
  }
    
    function demoDeleteCookie(name, path, domain){
        if (demoReadCookie(name)) {
            document.cookie = name + "=" + ((path) ? ";path=" + path : "") +
                              ((domain) ? ";domain=" + domain : "") +
                              ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
        }
    }
    
  function demoTrimString(sInString) {
    sInString = sInString.replace(/^\s+/g, "");// strip leading
    return sInString.replace(/\s+$/g, "");// strip trailing
  }
    

  function base64Decode(str) {
    base64Str = str;
    base64Count = 0;

    var result = "";
    var inBuffer = [];
    var done = false;

    while (!done && (inBuffer[0] = readReverseBase64()) != END_OF_INPUT &&
        (inBuffer[1] = readReverseBase64()) != END_OF_INPUT) {
      inBuffer[2] = readReverseBase64();
      inBuffer[3] = readReverseBase64();
      result += ntos((((inBuffer[0] << 2) & 0xff) | inBuffer[1] >> 4));
      if (inBuffer[2] != END_OF_INPUT) {
        result += ntos((((inBuffer[1] << 4) & 0xff) | inBuffer[2] >> 2));
        if (inBuffer[3] != END_OF_INPUT) {
          result += ntos((((inBuffer[2] << 6) & 0xff) | inBuffer[3]));
        } else {
          done = true;
        }
      } else {
        done = true;
      }
    }

    return result;
  }

  return {
    getUserDemographics : function(noCache) {
      noCache = (typeof noCache !== "boolean") ? false : noCache;
      if (noCache === false && cachedUserDemographics !== null) {
        return cachedUserDemographics;
      }

      var val = demoReadCookie(DEMO_COOKIE);
      initBase64Chars();

      if (!val) {
        return;
      }
      val = demoTrimString(val);
      if (val.length < 0) {
        return null;
      }

      val = base64Decode(val);
      val = parseDemoCookie(val);

      if (!val) {
        demoDeleteCookie(DEMO_COOKIE);
      }

      if (val != '!') {
        cachedUserDemographics = val;
        return val;
      }

      return null;
    }
  };
}
();
/*global dojo dj document mpsection isDenial isFree isTrial*/
dojo.provide("dj.util.MarketingZone");

dojo.require("dj.util.User");
/* dojo.require("dj.util.Ads"); cyclic dependency*/

dojo.getObject("dj.context.article", true);

dojo.declare("dj.util.MarketingZone", null, {
    mktg_zone: '',
    partners: ['yahoo', 'google', 'msn', 'other'],
    mktgZone: '',

    init : function() {
      // full denial BOL
      this.mktg_zone = {
        "full_other" : "wsjfreezone",
        "full_yahoo" : "yahoo_fullfree",
        "full_google" : "google_fullfree",
        "full_msn" : "msn_fullfree",
    
        "full_denial_other" : "wsjexp_fullfree",
        "full_denial_yahoo" : "yahoo_wsjexpfullfree",
        "full_denial_google" : "google_wsjexpfullfree",
        "full_denial_msn" : "msn_wsjexpfullfree",
    
        "full_other_reg" : "wsjfreezone_reg",
        "full_yahoo_reg" : "yahoo_fullfree_reg",
        "full_google_reg" : "google_fullfree_reg",
        "full_msn_reg" : "msn_fullfree_reg",
    
        "full_denial_other_reg" : "wsjfreezone_reg",
        "full_denial_yahoo_reg" : "yahoo_fullfree_reg",
        "full_denial_google_reg" : "google_fullfree_reg",
        "full_denial_msn_reg" : "msn_fullfree_reg",
    
        "denial_other" : "wsjexp_prev",
        "denial_yahoo" : "yahoo_wsjexpprev",
        "denial_google" : "google_wsjexpprev",
        "denial_msn" : "msn_wsjexpprev",
    
        "denial_other_reg" : "b2pfreezone_reg",
        "denial_yahoo_reg" : "yahoo_reg",
        "denial_google_reg" : "google_reg",
        "denial_msn_reg" : "msn_reg",
    
        "other" : "b2pfreezone",
        "yahoo" : "yahoo",
        "google" : "google",
        "msn" : "msn",
    
        "other_reg" : "b2pfreezone_reg",
        "yahoo_reg" : "yahoo_reg",
        "google_reg" : "google_reg",
        "msn_reg" : "msn_reg",
    
        "other_super" : "b2pfreezone_super",
        "yahoo_super" : "yahoo_super",
        "google_super" : "google_super",
        "msn_super" : "msn_super",
    
        "other_super_reg" : "b2pfreezone_super_reg",
        "yahoo_super_reg" : "yahoo_super_reg",
        "google_super_reg" : "google_super_reg",
        "msn_super_reg" : "msn_supe_regr",
    
        "denial_other_super" : "wsjexp_prev_super",
        "denial_yahoo_super" : "yahoo_wsjexpprev_super",
        "denial_google_super" : "google_wsjexpprev_super",
        "denial_msn_super" : "msn_wsjexpprev_super",
    
        "denial_other_super_reg" : "b2pfreezone_super_reg",
        "denial_yahoo_super_reg" : "yahoo_b2pfreezone_super_reg",
        "denial_google_super_reg" : "google_b2pfreezone_super_reg",
        "denial_msn_super_reg" : "msn_b2pfreezone_super_reg",
    
        "denial_bol" : "bol_prev",
        "denial_other_bol" : "bol_prev",
        "denial_yahoo_bol" : "yahoo_bolprev",
        "denial_google_bol" : "google_bolprev",
        "full_denial_bol" : "bol_fullfree",
        "full_denial_other_bol" : "bol_fullfree",
        "full_denial_yahoo_bol" : "yahoo_bolfullfree",
        "full_denial_google_bol" : "google_bolfullfree",
        "full_denial_msn_bol" : "msn_bolfullfree",
        "denial_google_bol_super" : "google_bolprev_super",
        "denial_bol_super" : "bol_prev_super",
        "denial_yahoo_bol_super" : "yahoo_bolprev_super",
        "denial_msn_bol" : "msn_bolprev_super"
      };
    },
    
    getPartner: function(modparam){
        var localMod = "";
        // see if the mod is one of the partners (google, yahoo, msn) 
        if (modparam !== null && modparam.length > 0) {
            for (var i = 0; i < this.partners.length; i++) {
                if (modparam.indexOf(this.partners[i]) > -1) {
                    localMod = this.partners[i];
                    break;
                }
            }
        }
        return ((localMod === null || localMod.length < 1) ? "other" : localMod);
    },
    
    setZone: function(mod){
        if(this.mktg_zone.hasOwnProperty(mod)){
          this.mktgZone = this.mktg_zone[mod];
        }else{
          this.mktgZone = undefined;
        }
    },
    
    getZone: function(){
        this.setMktgZone();
        return this.mktgZone;
    },
    
    setMktgZone: function(){
      this.init();    
      var that = this;    
      var localMpsection = (typeof mpsection) === 'undefined' ? false : mpsection;
      //  console.log("localMpsection..." + localMpsection);
      
      var localDenial = (typeof isDenial) === 'undefined' ? false : isDenial;
      var localFree = (typeof isFree) === 'undefined' ? false : isFree;
      var localTrial = (typeof isTrial) === 'undefined' ? false : isTrial;
      var localSuperSnippet = ((typeof dj.context.article.isSuperSnippet) === 'undefined' || (typeof dj.context.article.isSuperSnippet) === 'string') ? false : dj.context.article.isSuperSnippet;
          
      var modParam = new dj.util.Ads().getArg("mod");
      // check if the mod is one of the partners (google, yahoo, msn) 
      var whichMod = this.getPartner(modParam);

      var mod = "";
      var localLaserBOL = false;
      var localLaserWSJ = false;
      var reguser = false;
      
      if (localDenial === true || localDenial === "true") {
          mod += "denial_";
          mod += whichMod; // denial_yahoo, denial_other
          if (localLaserBOL) {
              mod += "_bol"; //denial_yahoo_bol, denial_other_bol    
          }
      } else {
              if (document.cookie.indexOf("reactivation=/myaccount/do/reactivate") !== -1) {                  
                  mod += "denial_";
                  mod += whichMod;
              }   else {                  
                  mod += whichMod; //yahoo, other
              }       
      }           
      if (localFree === true || localFree === 'true' || localTrial === true || localTrial === 'true') {
          if ( localSuperSnippet === true || localSuperSnippet === 'true' ) {
              mod += '_super';
          }   else {
              mod = "full_" + mod; //full_denial_yahoo, full_denial_yahoo_bol, full_yahoo
          }
      }
      
      dj.util.User.isLoggedIn(function(isLoggedIn) {
          if (isLoggedIn) {                       
                  reguser = true;
                  mod += '_reg';  
          }   
      }); 
//    console.log("Ad for reguser:"+reguser+""+"SuperSnippet:"+localSuperSnippet+""+":mod:"+mod+""+"Free:"+localFree+""+":Denial:"+localDenial);
      that.setZone(mod);
  }
});dojo.provide("dj.util.Ads");
/* ~ MOVED :/dj/widget/AdUtils.js */

dojo.require("dj.util.MarketingZone");
dojo.require("dj.util.Cookie");
dojo.require("dj.util.Region");
dojo.require("dj.util.User");

dojo.getObject("dj.context.ads", true);

/**
 * JsonRenderer (class)
 *
 * Renders JSON for indices modules.
 */

// global Javascript Turn on/off
dj.context.ads.JSAdSwitch = true;
dj.context.ads.rsinetsegs = ""; // init in case RSI doesn't set this
dj.context.ads.segQS = "";
dj.context.ads.isFirstDoubleClickAd = 0;
dj.context.ads.refCookieVal = "";
dj.context.ads.adZone = '';
dj.context.ads.iframe = 'iframe';
dj.context.ads.isSafariRefreshEnabled = dojo.isWebKit;
dj.context.ads.randomId4RollAd = Math.random();

dojo.declare("dj.util.Ads", null, {
    classAdOrd : {},
    registeredAd : {},
    adTile : {},
    adTracking : {},
    zone : '',
    storedAd : {},
    constructor : function() {
    },

    /***
     * Returns the ord for the clasType
     * @param {Object} classType
     */
    getAdOrd: function(classType){
        if (this.classAdOrd[classType] === undefined) {
            var adOrd = this.calculateOrd();
            this.classAdOrd[classType] = this.appendOrd(adOrd);
        }
        return this.classAdOrd[classType];
    },

    /****
     * Removes cached Ad from the
     * js variables
     *
     * Used only for testing...
     */
    removeCachedAd:function(){
      this.storedAd = {};
    },

    /****
     * calcualtes ord
     */
    calculateOrd: function(){
      var intOrd = Math.ceil(32768 * Math.random());
      var adOrd = intOrd.toString();
      if (adOrd.length !== 4) {
          return this.calculateOrd();
      } else {
          return adOrd;
      }
    },

    /****
     * Appends 4 times the gives
     * @param {Object} adOrd
     */
    appendOrd: function(adOrd){
      if (typeof adOrd == "string") {
        var repeatCount = 4;
        var result = "";
        for(var count=0;count < repeatCount;count++){
          result = result+adOrd;
        }
        return result;
      }
      /*TODO: Remove next line after first release , when we know argument is always string */
      throw new Error("Unsupported argument type. I thought argument is always string");
    },

    /***
     * It finds for the N's value in current url and returns the value
     * @param {Object} N
     */
    getArg: function(N){
        var i = 0;
        var u = "";
        u = this.getWindowLocation();
        u = (u.indexOf("?") > -1) ? u.split("?")[1] : "";
        u = (u.indexOf("#") > -1) ? u.split("#")[0] : u;
        u = (u.charAt(u.length - 1) === "&") ? u.substring(0, u.length - 1) : u;
        N += "=";
        while (i < u.length) {
            var j = i + N.length;
            if (u.substring(i, j) === N) {
                return unescape(u.substring(j, (u.indexOf("&", j) == -1) ? u.length : u.indexOf("&", j)));
            }
            i = u.indexOf("&", i) + 1;
            if (i === 0) {
                break;
            }
        }
        return null;
    },

    getRandomId: function(){
        return dj.context.ads.randomId4RollAd;
    },

    /***
     * Returns adTile +1 for the class type
     * @param {Object} classType
     */
    getAdTile: function(classType){
        if (this.adTile[classType] === undefined) {
            this.adTile[classType] = 1;
        } else {
            var intTile = this.adTile[classType];
            this.adTile[classType] = ++intTile;
        }
        return this.adTile[classType];
    },

    /***
     *
     * @param {Object} classType
     */
    getCurrentTile: function(classType){
        return this.adTile[classType];
    },

    /***
    *
    * @param {Object} classType
    */
    getPeer39Params : function(adClass){
      if(typeof p39_resultsKVP!='function' || typeof adClass=='undefined' ||  adClass!='G') { return "";}
        try{
             this.adTracking.peer39KVP = (typeof this.adTracking.peer39KVP=='undefined') ?  p39_resultsKVP('','id',';','p39',false) : this.adTracking.peer39KVP;
             return ';'+this.adTracking.peer39KVP;
         }catch(err) { }
         return '';
     },
    getWindowLocation : function(){
       return "".concat(window.location);
     },
    getAdMsrc: function(classType){
        if (!this.isEmpty(this.adTracking.msrc)) {
            return this.adTracking.msrc;
        }
        var locationUrl = this.getWindowLocation();
        var keywords = '';
        //if((locationUrl.indexOf("/search/term") > -1) || (locationUrl.indexOf("/search/web") > -1)){
          keywords = this.getArg('KEYWORDS');
          if(keywords !== null && keywords !== ''){
            keywords = keywords.toLowerCase();
            keywords = keywords.replace(/ /g, "+");
            keywords = keywords.replace(/'/g, "_");
            if(keywords.length > 100){
             keywords = keywords.substring(0,100);          
            }
             var notAllowed  = ".?!@#$%^&;<>,/{}[]~";      
             var j = 0;
             var k = 0;
             var keywordArrayAfter = "";
            while(k < keywords.length) {
              if (notAllowed.indexOf(keywords.substring(k, k+1)) == -1){
                keywordArrayAfter += keywords.substring(k, k+1);
              }
              k++;
            }
            var keywordAfterFiltering = keywordArrayAfter;
            keywords = keywordAfterFiltering;
            this.adTracking.msrc = ';msrc=' + keywords;
          }
          //this.adTracking.msrc = ';msrc=' + keywords;
        //}
        else{
          this.adTracking.msrc = ';msrc=' + (dj.util.Cookie.getCookie('etsFlag') ? dj.util.Cookie.getCookie('etsFlag') : this.getArg('mod'));
        }
        var msrc = (this.adTracking.msrc === ';msrc=null' ? '' : this.adTracking.msrc);
        this.adTracking.msrc = msrc;
        return msrc;
    },

    getUserCookie: function(classType){
        //If first instance of Doubleclick Ad and User is a subscriber
        var userCookie = dj.util.Cookie.getCookie('TR'); ///  ?? should I do it global too
        var userRsiCookieVal = dj.util.Cookie.getCookie('rsi_csl');

        var userValue = ';u=';
        if (this.getCurrentTile('oneForAll') === 1) {
            if (userCookie !== null) {
                userValue += userCookie;
            }
            if (userRsiCookieVal !== null) {
                userValue += '^^' + userRsiCookieVal;
            }
            return userValue;
        }
        return '';
    },

    getMC: function(classType){
      var that = this;
      if (!that.isEmpty(that.adTracking.mc)) {
          return that.adTracking.mc;
      } else {
          var mc ='';
          dj.util.User.isSubLoggedIn(function(subLoggedIn){
          if (!subLoggedIn) {
              mc = that.adTracking.mc;
              if (that.isEmpty(mc)) {
                  var mcObj = new dj.util.MarketingZone();
                  var mcCode = mcObj.getZone();
                  mc = ';mc=' + mcCode;
              }
          }
      });
       that.adTracking.mc = mc;
      return mc;
  }
},

  /*****
   * Adds international domain to the site
   * @param {Object} adId
   * @param {Object} site
   */
  getAdInternationalSite: function(adId, site){
        var adsite = site;
    var brokerButtons = "brokerbuttons.international.wsj.com";
    var wsjRegion = dj.util.Region.getViewByRegion();
    var intDomain ="";

    intDomain=((wsjRegion.indexOf('europe') >= 0))?"europe": intDomain;
    intDomain=((wsjRegion.indexOf('asia') >= 0))?"asia": intDomain;
    if ("" === intDomain){
      return adsite;
    }


    adsite = adsite.replace("interactive", intDomain);
    if (site === "brokerbuttons.wsj.com"){
      adsite = brokerButtons.replace("international", intDomain);
    }
        return adsite;
    },

    getAdSite: function(adId, site, classType){
      var etsFlag = dj.util.Cookie.getCookie('etsFlag');
      var siteVal = "";
      siteVal = (etsFlag) ? "ets.wsj.com" : this.getAdDomainOverride(adId, site, classType);
      return siteVal;
  },


    getAdDomainOverride : function(adId, site, classType) {
      var adsite = site;
      if (adId === 'headerPromoContainer' || 
          adId === 'footerPromoContainer' || classType === 'G') {
        if (dj.context.ads.refCookieVal === "") {
          dj.context.ads.refCookieVal = this.getRefCookieVal();
        }
        if ((site.indexOf('.wsj.com') >= 0) && 
            !this.isEmpty(dj.context.ads.refCookieVal)) {
          adsite = dj.context.ads.refCookieVal;
          if (adId === 'footerPromoContainer') {
            adsite = 'bottom.' + adsite;
          }
        }
      }
      if (site.indexOf('barrons.com') != -1 && 
          !(adId === 'abt.at.sponsor' || 
          adId === 'bottomSubscribePromoFree')) {
        // change ref site for all ads/promos on barrons except in this condition
        if (dj.context.ads.refCookieVal === "") {
          dj.context.ads.refCookieVal = this.getRefCookieVal();
        }
        if (!this.isEmpty(dj.context.ads.refCookieVal)) {
          adsite = dj.context.ads.refCookieVal;
          if (site === 'bottom.barrons.com') {
            adsite = 'bottom.' + adsite;
          }
        }
      }

      return adsite;
    },

    getRefCookieVal: function(){
        var adDomain = dj.util.Cookie.getCookie('adDomain');
        if (adDomain === null || this.isEmpty(adDomain)) {
            var d = document;
            var r = d.referrer;
            if (r && r !== null && r !== "") { //r &&
                adDomain = '';
        var adDomains;
        if(document.domain.indexOf('barrons.com')!=-1){//barrons domain
          adDomains = {
            'www.yahoo.com': 'yahoo.barrons.com',
            'finance.yahoo.com': 'yahoofi.barrons.com',
            'cm.my.yahoo.com': 'myyahoo.barrons.com',
            'biz.yahoo.com': 'yahoobiz.barrons.com',
            'buzz.yahoo.com': 'yahoobuzz.barrons.com',
            'news.yahoo.com': 'yahoonews.barrons.com',
            'moneycentral.msn.com': 'msn.barrons.com',
            'msnmoney.com': 'msn.barrons.com',
            'news.moneycentral.msn.com': 'msn.barrons.com',
            'news.google.com': 'google.barrons.com',
            'twitter.com': 'twitter.barrons.com',
            'facebook.com': 'facebook.barrons.com',
            'www.twitter.com': 'twitter.barrons.com',
            'www.facebook.com': 'facebook.barrons.com'
          };
        }else{   //WSJ domain
          adDomains = {
            'www.yahoo.com': 'yahoo.wsj.com',
            'finance.yahoo.com': 'yahoofi.wsj.com',
            'cm.my.yahoo.com': 'myyahoo.wsj.com',
            'biz.yahoo.com': 'yahoobiz.wsj.com',
            'news.yahoo.com': 'yahoonews.wsj.com',
            'buzz.yahoo.com': 'yahoobuzz.wsj.com',
            'moneycentral.msn.com': 'msn.wsj.com',
            'msnmoney.com': 'msn.wsj.com',
            'news.moneycentral.msn.com': 'msn.wsj.com',
            'news.google.com': 'google.wsj.com',
            'twitter.com': 'twitter.wsj.com',
            'facebook.com': 'facebook.wsj.com',
            'www.twitter.com': 'twitter.wsj.com',
            'www.facebook.com': 'facebook.wsj.com'
          };
        }


                // Parse the domain out of the referring URL
                var domainSt = r.indexOf('//') + 2;
                var refdom = r.substring(domainSt);
                var domainEnd = refdom.indexOf('/');
                refdom = refdom.substring(0, domainEnd);
                // if the domain is in our lookup table, get the new ad domain
                if (adDomains[refdom]) {
                    adDomain = adDomains[refdom];
                }
                if (adDomain) {
                    dj.util.Cookie.setCookie('adDomain', adDomain);
                }
            }
        }
        return adDomain;
    },

    saveSegQS: function(){
        if (!("" === dj.context.ads.segQS)) {
            return;
        }
        var rsiSegment = dj.util.Cookie.getCookie('rsi_segs');
        var rsiSeg = (rsiSegment) ? rsiSegment.split("|") : "";
        rsiSeg.length = rsiSeg.length < 20 ? rsiSeg.length : 20;
        var segQS = rsiSeg.length > 0 ? "s=" + rsiSeg[0] : "";
        for (var i = 1; i < rsiSeg.length; i++) {
            segQS += (";s" + "=" + (rsiSeg[i] ? rsiSeg[i] : ""));
        }
        segQS = segQS.replace(/G07608/ig, '8');
        dj.context.ads.segQS = segQS;
    },

    getSegQS: function(){
        var lenSegQS = 0;
        var that = this;
        var segQS = dj.context.ads.segQS;
        dj.util.User.isSubLoggedIn(function(subLoggedIn){
            var demoQS = null;
            if (subLoggedIn) {
                try {
                    demoQS = dj.util.ads.Demographics.getUserDemographics();
  //                 console.log("Loggged IN:" + loggedIn + ":DemoQS value:" + demoQS);
                    if (demoQS !== null) {
                        lenSegQS = (segQS ? segQS.length : 0);
                        if (lenSegQS > 0) {
                            segQS = segQS + ";" + (that.isEmpty(demoQS) ? '' : demoQS);
                        } else {
                            segQS = demoQS + ";";
                        }
                        that.adTracking.segQS = segQS;
                    }
                }
                catch (errMsg) {
                    //console.info('DemoQS caught:', errMsg);
                }
            } else {
 //               console.log("Not logged in ");
            }
        });
        that.adTracking.segQS = segQS;
        return this.adTracking.segQS;
    },

    /***
     * Registers the ad with the given key and value
     * @param {Object} key
     * @param {Object} value
     */
    registerAd: function(key, value){
        if (this.registeredAd[key] === undefined) {
            this.registeredAd[key] = value;
        } else {
            var fromRegistry = this.registeredAd[key];
            fromRegistry = fromRegistry + "*" + value;
            this.registeredAd[key] = fromRegistry;
        }

    },

    loadAds: function(key, options) {
      dojo.deprecated("dj.util.Ads.loadAds", "use dj.widget.ad.AdManager.loadAds instead", "0.1.0");

      dojo.require("dj.widget.ad.AdManager");
      dojo.ready(function() {
        dj.widget.ad.AdManager.loadAds(key, options);
      });
    },

    /****
     * retruns the zone value for the given key
     * @param {Object} key
     */
    getRegisteredAdsZone : function(key) {
      if (this.isEmpty(key) || this.isEmpty(this.registeredAd[key])) {
        return dj.context.ads.adZone;
      } else {
        var fromRegistry = this.registeredAd[key];
        var adURL = fromRegistry.split("*");
        var zone;
        for ( var adIndex = 0, len = adURL.length; adIndex < len; adIndex++) {
          var item = adURL[adIndex];
          var adParamsObj = this.getAdParametersAsObject(item);
          if (adParamsObj.zone) {
            zone = adParamsObj.zone;
          }
        }
        return zone;
      }
    },

     /****
     * retruns the zone value for the given key
     * @param {Object} key
     */
    getRegisteredAdKey : function(key) {
      if (this.isEmpty(key) || this.isEmpty(this.registeredAd[key])) {
        return '';
      } else {
        var fromRegistry = this.registeredAd[key];
        var adURL = fromRegistry.split("*");
        // console.info('fromRegistry :' + fromRegistry);
        return fromRegistry;
      }
    },

    /****
     * modifys the url with new ord value
     * @param {Object} url
     */
    modifyAdUrlWithOrd: function(url){
        var subUrl = url.substring(0, url.indexOf('ord='));
        var adObj = new dj.util.Ads();
        var ord = adObj.appendOrd(adObj.calculateOrd());
        return (subUrl + 'ord=' + ord);
    },

    getAdParametersAsObject: function(almostUrl){
      var adParamsObj = {};
      var item =(almostUrl)?almostUrl:"";
      var urlFragments = item.split("?");
      urlFragments[1] = (urlFragments[1])?urlFragments[1]:"";
      var pairs = urlFragments[1].split(";");

      for(var pairCount=0,maxCount=pairs.length;pairCount < maxCount;pairCount++){
        var pair = pairs[pairCount].split("=");
        if(pair[1]){
          adParamsObj[pair[0]] = pair[1];
        }
        else{
          adParamsObj[pair[0]] = "";
        }
      }
      return adParamsObj;
    },

    isEmpty: function(value){
      if (value === undefined) {
        return true;
      }
      if (value === null) {
        return true;
      }
      if (typeof value == "string") {
        if ("" === dojo.trim(value)) {
          return true;
        }
      }
      return false;
    }
});dojo.provide("dj.util.string");

dj.util.string = {
  RTrim: function(str) {
    var re = /\s*((\S+\s*)*)/;
    return str.replace(re, "$1");
  },

  LTrim: function(str) {
    var re = /((\s*\S+)*)\s*/;
    return str.replace(re, "$1");
  },
  
  trim: function(str) {
    return this.LTrim(this.RTrim(str));
  },
  
  /*
   * This function checks if the given string(str) ends with a particular substring (end)
   * Use ignoreCase true to do a case insensitive comparison
   * Copied from an old dojo source
   */
  endsWith: function(str, end, ignoreCase){
    if(ignoreCase) {
      str = str.toLowerCase();
      end = end.toLowerCase();
    }
    if((str.length - end.length) < 0){
      return false;
    }
    return str.lastIndexOf(end) == str.length - end.length;
  },
  
  _scriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',

  stripScripts: function(content) {
    return content.replace(new RegExp(dj.util.string._scriptFragment, 'img'), '');
  },
  
  extractScripts: function(content) {
    var fragment = dj.util.string._scriptFragment,
        matchAll = new RegExp(fragment, 'img'),
        matchOne = new RegExp(fragment, 'im'),
        extractedGroup = [], 
        allScriptsGroup = (content.match(matchAll) || []),
        extractOneScript = function(scriptTag) {
          return (scriptTag.match(matchOne) || ['', ''])[1];
        };
    
    for (var i=0, len=allScriptsGroup.length; i<len; i++) {
      extractedGroup.push(extractOneScript(allScriptsGroup[i]));
    }
      
    return extractedGroup;
  },
  
  evalScripts: function(responseText, url) {
    var scripts = dj.util.string.extractScripts(responseText);
    for (var i = 0; i < scripts.length; i++) {
      try {
        dojo.eval(scripts[i]);
      } catch(e) {
        console.error("Error in script #%d of '%s': %o", (i+1), (url || ""), e);
      }
    }
  }
};
/*global dojo dj*/
dojo.provide("dj.widget.ad.Ad");

dojo.require("dj.util.Region");
dojo.require("dj.util.Ads");
dojo.require("dj.util.Cookie");
dojo.require("dj.util.Url");
dojo.require("dj.util.string");
/**
 *
 * Initiates the ad call to DC system
 */

dj.widget.ad.isRemoved = false;
dj.widget.ad.adPageZone = undefined;
dj.widget.ad.adPageSite='interactive.wsj.com';

dojo.declare("dj.widget.ad.Ad", null, {
  adUriPrefix: 'http://ad.doubleclick.net/',
  adIframeClass: 'advIframe', // replace with ad-iframe class
  adImgClass: 'advImg', // replace with ad-image class
  adType: 'iframe', //replaces with the value passed by
  adUrl: {},
  constructor : function(id, adType, options) {
    this.adId = id;
    this.adType = adType;
    this.gAdClass = this.adId;
    this.width = options.width;
    this.height = options.height;
    this.size = options.size;
    this.style = options.style;
    this.zone = options.zone;
    this.site = options.site;
    this.adClass = options.adClass;
    this.meta = options.meta;
    this.tile = options.tile;
    this.pos = options.pos;
    this.category = options.category;
    this.ordRecalculate = options.ordRecalculate;
    this.refreshInterval = options.refreshInterval;
    this.classEnabled = options.classEnabled;
    this.classValue = options.classValue;
    this.styleValue = options.styleValue;
    this.conditionType = options.conditionType;
    this.conditionValue = options.conditionValue;
    this.conditionalString = options.conditionalString;
    this.registerKey = options.registerKey;

    var utilObj = new dj.util.Ads();

    var wsjRegion = dj.util.Region.getViewByRegion();
    switch (wsjRegion) {
    case "europe":
      this.adUriPrefix = "http://ad.uk.doubleclick.net/";
      break;
    case "asia":
      this.adUriPrefix = "http://ad.hk.doubleclick.net/";
      break;
    case "asia,india":
      this.adUriPrefix = "http://ad.in.doubleclick.net/";
      break;
    default:
      this.adUriPrefix = "http://ad.doubleclick.net/";
    }

    if (this.site == 'bottom.wsj.com') {
      this.site = 'bottom.interactive.wsj.com';
    }

    if (utilObj.isEmpty(this.site)) {
      this.site = 'interactive.wsj.com';
    }

    if (utilObj.isEmpty(this.zone)) {
      this.zone = 'default';
    }

    // Added by bhupendra for intromessage
    if (utilObj.getArg('zone') === 'intromessage' && 
        this.conditionType === 'intromessage') {
      this.zone = 'intromessage';
    }
    var _djus = dj.util.string;
    if (_djus.endsWith(this.adId, 'G') || 
        _djus.endsWith(this.adId, 'A') || 
        _djus.endsWith(this.adId, 'R') || 
        _djus.endsWith(this.adId, 'T') || 
        _djus.endsWith(this.adId, 'U') || 
        _djus.endsWith(this.adId, '728x90')) {
      dj.widget.ad.adPageSite = this.site;
      dj.widget.ad.adPageZone = this.zone;
    }

    /**
     * This determines how the ad is rendered iframe/JS In JS, based on the js
     * switch it calls iframe/JS
     */
    if (this.adType == 'iframe') {
      this.iframeAd();
    } else {
      if (dj.context.ads.JSAdSwitch) {
        this.jsAd();
      } else {
        this.iframeAd();
      }
    }

    if (this.classEnabled === "false") {
      dojo.removeClass(dojo.byId(this.adId), this.classValue);
    }
  },
    
  iframeAd : function() {
    var adUriSuffix = this.calculateAdUrl(this.adType);
    var oAdCnt = dojo.byId(this.adId);
    var oIframe = dojo.create('iframe', {
      src : this.adUriPrefix + 'adi' + adUriSuffix,
      id : this.adId + dj.context.ads.iframe,
      width : this.width,
      height : this.height,
      scrolling : "no",
      frameBorder : "0",
      marginWidth : "0",
      marginHeight : "0",
      hspace : "0",
      vspace : "0",
      border : "0",
      style : "margin:0px; padding:0px"
    });
    // this.pushAdUrl(this.adId + dj.context.ads.iframe, this.adUriPrefix +
    // 'adi' + adUriSuffix);
    oAdCnt.appendChild(oIframe);
  },
    
  jsAd : function() {
    var etsFlag = dj.util.Cookie.getCookie('etsFlag');
    var adUriSuffix = this.calculateAdUrl(this.adType);
    var url = this.adUriPrefix + "adj" + adUriSuffix;
    var jsa = new dj.util.Url.jsFrame(this.adId, url);
    // this.pushAdUrl(this.adId + dj.context.ads.iframe, '');
  },
    
  pullAdUrl : function(iframeId) {
    return this.adUrl[iframeId];
  },
  
  /**
   * Ad url is pushed into the array for the iframeId. If url is not provided,
   * calculateAdUrl method is called.
   * 
   * @param {Object}
   *          iframeId
   * @param {Object}
   *          url
   */
  pushAdUrl : function(iframeId, url) {
    var urlSrc = this.adUriPrefix + "adi";
    if (this.adUrl[iframeId] === undefined && url !== '') {
      urlSrc += this.calculateAdUrl(dj.context.ads.iframe);
      this.adUrl[iframeId] = urlSrc;
    } else {
      this.adUrl[iframeId] = url;
    }
  },
  
  /**
   * Calculates only the URLSuffix for the ad
   * 
   * @param {Object}
   *          adType
   */
  calculateAdUrl : function(adType) {
    var adObj = new dj.util.Ads(),
        partnerCenterPos = '',
        ordCalculated = '';

    adObj.saveSegQS();
    this.tile = (this.tile > 0) ? this.tile : adObj.getAdTile('oneForAll');
    if ((this.adClass === 'A' || this.adClass === 'G') && dj.context.ads.adZone === '') {
      dj.context.ads.adZone = this.zone;
    } else if (this.adClass === 'P') {
      this.pos = (this.pos > 0) ? this.pos : adObj.getAdTile('P');
      partnerCenterPos = ';pos=' + this.pos;
    }
    if (this.ordRecalculate == 'true') {
      ordCalculated = adObj.appendOrd(adObj.calculateOrd());
    } else {
      ordCalculated = adObj.getAdOrd('oneForAll');
    }
    var categ = (this.category === undefined) ? '' : this.category;
    var userCookie = adObj.getUserCookie(this.adClass);
    var lMsrc = adObj.getAdMsrc(this.adClass);
    var lMC = adObj.getMC(this.adClass);
    var lregistererKey = (this.registerKey === undefined) ? ''
        : ';page=' + this.registerKey;
    var lSegQS = adObj.getSegQS();
    var adUriSuffix = '/'+ 
        adObj.getAdInternationalSite(this.adId, adObj.getAdSite(this.adId, this.site, this.adClass)) + 
        '/' + this.zone + userCookie + 
        ';!category=' + categ + lregistererKey + lMsrc +
        adObj.getPeer39Params(this.adClass) + ';' + lSegQS + lMC +
        partnerCenterPos + ';tile=' + this.tile;

    if (adType == dj.context.ads.iframe) {
      adUriSuffix = adUriSuffix + ';sz=' + this.width + 'x' + this.height;
    } else {
      adUriSuffix = adUriSuffix + ';sz=' + this.size;
    }
    adUriSuffix += ';ord=' + ordCalculated + ';';
    
    return adUriSuffix;
  }
});

/*global dojo dj document console setInterval*/
dojo.provide("dj.widget.ad.AdManager");

dojo.require("dj.widget.ad.Ad");
dojo.require("dj.util.Ads");

/**
 *
 * Initiates the ad call, dj.widget.ad.Ad class
 */
dj.widget.ad.AdManager = {
  createAd : function(id, adType, options) {
    try {
      if ( !dojo.byId(id) ) {
        console.warn("{AdManager} ad container id '%s' not found", id);
        return;
      }
      var validated = dj.widget.ad.AdManager.validateConditons(id, adType,
          options);
      if (validated === true) {
        return;
      }
      var adOb = new dj.widget.ad.Ad(id, adType, options);
      if (!dj.context.ads.isSafariRefreshEnabled) {
        if (options.frequency !== undefined && !("" === dojo.trim(options.frequency)) && options.frequency > 0) {
          options.ordRecalculate = 'true';
          dj.widget.ad.AdManager.updateAd(id, adType, options, id + dj.context.ads.iframe);
        }
      }
      if (options.cacheId !== undefined && !("" === dojo.trim(options.cacheId))) {
        dj.widget.ad.AdManager.storeAd(options.cacheId, {
          container : id,
          elementId : id + dj.context.ads.iframe,
          element : dojo.byId(id + dj.context.ads.iframe),
          check : 'saving'
        });
      }
    } catch (e) {
      console.error("{AdManager} ad call caught:", e);
    }
  },
  
	/***************************************************************************
   * Uses ValidateConditions to differ ad loading on basis of defined key as
   * in conditionValue
   * 
   * @param {Object}
   *          id
   */
  differAdMap : {
    _object : {},
    get : function(key) {
      if (this._object[key] !== Object.prototype[key]) {
        return this._object[key];
      }
      return;
    },
    set : function(key, value) {
      this._object[key] = value;
    }
    /*
     * TODO: remove the half implementation of Hash once its clear this object
     * is not used externally apart from the ones in SVN
     */
  },
  
  loadDifferedAd : function(id) {
    var adObj = dj.widget.ad.AdManager.differAdMap.get(id);
    dj.widget.ad.AdManager.deleteAllElementsInContainer(adObj.objId);
    dj.widget.ad.AdManager.createAd(adObj.objId, adObj.objAdType,
        adObj.objOptions);
  },
	
	/***************************************************************************
   * Validates the ad, based on the conditions passed Ad will be executed
   * based on the conditions met. If assasination, the ad will not be called.
   * 
   * @param {Object}
   *          id
   * @param {Object}
   *          adType
   * @param {Object}
   *          options
   */
	validateConditons : function(id, adType, options) {
    var conditionType = options.conditionType,
        conditionValue = options.conditionValue,
        status = false,
        existingObject = "";

    if (conditionType !== undefined && 
        !("" === dojo.trim(conditionType)) && 
        conditionValue !== undefined && 
        !("" === dojo.trim(conditionValue))) {
      if (conditionType === "excludeids") {
        (function() {
          var matches = conditionValue.split(/\W+/);
          for ( var count = 0, len = matches.length; count < len; count++) {
            existingObject = dojo.byId(matches[count]);

            if (existingObject) {
              status = true;
              return;
            }
          }
        })();
      }

      if (conditionType === "differloading") {
        // Storing the ad so that it can
        // be retrived for loading
        var adObj = {
          "objId" : id,
          "objAdType" : adType,
          "objOptions" : options
        };
        dj.widget.ad.AdManager.differAdMap.set(conditionValue, adObj);
        options.conditionType = '';
        options.conditionValue = '';
        status = true;
      }
    }
    return status;
  },
  
  updateAd : function(containerId, adType, options, iframeId) {
    var adRefresher = function() {
      dj.widget.ad.AdManager.deleteAllElementsInContainer(containerId);
      var adobj = new dj.widget.ad.Ad(containerId, adType, options);
    };
    setInterval(adRefresher, options.frequency * 1000);
  },
  
	deleteAllElementsInContainer : function(containerId) {
    try {
      dojo.empty(containerId);
    } catch (e) {
      console.error("{AdManager} error caught while deleting all elements: ", e);
    }
  },
  
  deleteAd : function(iframeId) {
    try {
      dojo.destroy(iframeId);
    } catch (e) {
      console.error("{AdManager} error caught while deleting ad: '%s'", iframeId);
    }
  },
  
	/***************************************************************************
   * idRefresh - containerID id - cacheId
   * 
   * @param {Object}
   *          idRefresh
   * @param {Object}
   *          id
   * 
   * Used only for testing...
   * 
   */
	testRefreshAd : function(idRefresh, id) {
    dj.widget.ad.AdManager.deleteAllElementsInContainer(idRefresh);
    dj.widget.ad.AdManager.refreshAd(id);
  },
  
  /***
   * Inserts the iframe element in the stored container
   * for a given Id, retrieve the container and the stored element.
   * stored element is added in the container
   * @param {Object} id
   */
  refreshAd : function(id) {
    var adUtil = new dj.util.Ads(),
        ad = adUtil.storedAd[id];
      
    if (!ad) {
      console.log("{AdManager} ad container '%s' can not be refreshed", id);
      return;
    }
      
    for ( var adIndex = 0, len = ad.length; adIndex < len; adIndex++) {
      var obj = ad[adIndex];
      dojo.place(obj.element, obj.container);
    }
  },
  
  /*****
   * Stores all the values in hash
   * @param {Object} id
   * @param {Object} options
   */
  storeAd : function(id, options) {
    try {
      var adUtil = new dj.util.Ads();
      var adCache = adUtil.storedAd[id];
      var adNodeDetails = {
        container : options.container,
        elementId : options.elementId,
        element : options.element,
        check : options.check
      };
      
      if (typeof adCache === "undefined") {
        var one = [];
        one.push(adNodeDetails);
        adUtil.storedAd[id] = one;
        one = null;
      } else {
        adCache.push(adNodeDetails);
        adUtil.storedAd[id] = adCache;
      }
      
      adNodeDetails = null;
      adCache = null;
    } catch (storeEx) {
      console.error('{AdManager} error caught while storing:', storeEx);
    }
  },
  
  /****
   * calls the widget's ad class
   * @param {Object} key
   */
  loadAds: function(key,options){
    var utilAds = new dj.util.Ads();
    if (utilAds.registeredAd[key] === undefined) {
      return;
    }
    
    var fromRegistry = utilAds.registeredAd[key];
    var adURL = fromRegistry.split("*");
            
    for (var adIndex=0, len=adURL.length; adIndex < len ; adIndex++) {
      var item = adURL[adIndex];
      //this splits the single string to form a adURL
      var newVal = item.split(";");
      var separated = utilAds.getAdParametersAsObject(item);
      var i = 0;

      try {
//        dj.widget.ad.AdManager.deleteAd(newVal[i] + dj.context.ads.iframe);
    	  dj.widget.ad.AdManager.deleteAllElementsInContainer(newVal[i]); 
      } catch (e) {
      }

      dojo.mixin(separated, options);
      var idUsed = newVal[i];
      if (separated.id !== undefined) {
        idUsed = separated.id;
      }

      var adObj = dj.widget.ad.AdManager.createAd(idUsed, newVal[++i], {
        width: separated.width,
        height: separated.height,
        size: separated.size,
        site: separated.site,
        zone: separated.zone,
        adClass: separated.adclass,
        meta: separated.meta,
        frequency: separated.frequency,
        cacheId: separated.cacheId,
        classEnabled: separated.classEnabled,
        classValue: separated.classValue,
        styleValue: separated.styleValue,
        conditionType: separated.conditionType,
        conditionValue : separated.conditionValue,
        conditionalString: separated.conditionalString,
        ordRecalculate: 'true',
        registerKey:key
      });
    }
  },
  
	iframeRefreshOnLoad : function() {
    var f = document.getElementsByTagName('iframe');
    for (var i = 0; i < f.length; i++) {
      f[i].src = f[i].src;
    }
  }
};

dojo.provide("dj.util.Page");dj.util.Page=function(){var hQuery=null;var aChips=null;dojo.getObject("dj.context.module",true);return{isReferrer:function(uri){return(document.referrer.indexOf(uri)>-1);},getQuery:function(){hQuery=(hQuery===null)?dojo.queryToObject(location.search.replace(/^\?/,"")):hQuery;return hQuery;},hasQueryParam:function(paramName){if(hQuery===null){this.getQuery();}
return(typeof hQuery[paramName]!=="undefined");},getQueryParam:function(paramName){if(hQuery===null){this.getQuery();}
return this.hasQueryParam(paramName)?hQuery[paramName]:"";},getHash:function(){return dojo.queryToObject(location.hash.replace(/^#/,""));},hasHashParam:function(paramName){var hHash=this.getHash();return(typeof hHash[paramName]!=="undefined");},getHashParam:function(paramName){var hHash=this.getHash();return this.hasHashParam(paramName)?hHash[paramName]:"";},getChips:function(){if(null===aChips){var loc=document.location.toString();loc=loc.replace(/\.html$/,"");loc=loc.replace(/\.js$/,"");aChips=loc.split("-");aChips.shift();}
return aChips;},addStylesheet:function(stylesheet,callback){if(typeof stylesheet=="undefined"){return;}
var cssNode=document.createElement('link');cssNode.type='text/css';cssNode.rel='stylesheet';cssNode.href=stylesheet;cssNode.onLoad=(callback)?callback:'';cssNode.media='screen';if(document.getElementsByTagName("head").length===0){var headNode=document.createElement("head");document.getElementsByTagName("html")[0].appendChild(headNode);}
document.getElementsByTagName("head")[0].appendChild(cssNode);},addScript:function(uri){if(typeof uri=="undefined"){return;}
var node=document.createElement('script');node.type='text/javascript';node.src=uri;if(document.getElementsByTagName("head").length===0){var headNode=document.createElement("head");document.getElementsByTagName("html")[0].appendChild(headNode);}
document.getElementsByTagName("head")[0].appendChild(node);},disableModuleRefresh:function(moduleName){if(dj.context.module.disableModuleRefresh){dj.context.module.disableModuleRefresh[moduleName]=true;}},enableModuleRefresh:function(moduleName){if(dj.context.module.disableModuleRefresh){dj.context.module.disableModuleRefresh[moduleName]=false;}},isModuleRefreshEnabled:function(moduleName){return!dj.context.module.disableModuleRefresh[moduleName];},enableRefresh:function(){dj.context.page.disablePageRefresh=false;},disableRefresh:function(){dj.context.page.disablePageRefresh=true;},isRefreshEnabled:function(){return!dj.context.page.disablePageRefresh;}};}();
dojo.provide("dj.util.Date");dj.util.Date={simpleDateFormat:{nibbles:{},character:"",output:"",index:0,labels:{month:['January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],day:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat']},doubleDigit:function(x){return(x<0||x>9?"":"0")+x;},format:function(date,f){f=f+"";this.output="";this.index=0;var token="";var y=date.getYear()+"";var M=date.getMonth()+1;var E=date.getDay();var H=date.getHours();var m=date.getMinutes();var s=date.getSeconds();y="".concat((y.length<4)?(y-0+1900):y);this.nibbles.y=y;this.nibbles.yyyy=y;this.nibbles.yy=y.substring(2,4);this.nibbles.M=M;this.nibbles.MM=this.doubleDigit(M);this.nibbles.MMM=this.labels.month[M-1];this.nibbles.NNN=this.labels.month[M+11];this.nibbles.d=date.getDate();this.nibbles.dd=this.doubleDigit(date.getDate());this.nibbles.E=this.labels.day[E+7];this.nibbles.EE=this.labels.day[E];this.nibbles.H=H;this.nibbles.HH=this.doubleDigit(H);this.nibbles.h=(H===0)?12:((H>12)?H-12:H);this.nibbles.hh=this.doubleDigit(this.nibbles.h);this.nibbles.K=(H>11)?(H-12):H;this.nibbles.k=H+1;this.nibbles.KK=this.doubleDigit(this.nibbles.K);this.nibbles.kk=this.doubleDigit(this.nibbles.k);this.nibbles.a=(H>11)?"PM":"AM";this.nibbles.aa=(H>11)?"p.m.":"a.m.";this.nibbles.m=m;this.nibbles.mm=this.doubleDigit(m);this.nibbles.s=s;this.nibbles.ss=this.doubleDigit(s);while(this.index<f.length){this.character=f.charAt(this.index);token="";while((f.charAt(this.index)==this.character)&&(this.index<f.length)){token+=f.charAt(this.index++);}
this.output+=(typeof this.nibbles[token]!=="undefined")?this.nibbles[token]:token;}
return this.output;}},timezones:{'Australian Central Daylight Time':'ACDT','Australian Central Standard Time':'ACST','Atlantic Daylight Time':'ADT','Australian Eastern Daylight Time':'AEDT','Australian Eastern Standard Time':'AEST','Alaska Daylight Time':'AKDT','Alaska Standard Time':'AKST','Atlantic Standard Time':'AST','Australian Western Daylight Time':'AWDT','Australian Western Standard Time':'AWST','British Summer Time':'BST','Central Daylight Time':'CDT','Central European Daylight Time':'CEDT','Central European Summer Time':'CEST','Central European Time':'CET','Central Summer(Daylight) Time':'CST','Central Standard Time':'CST','Christmas Island Time':'CXT','Eastern Daylight Time':'EDT','Eastern European Daylight Time':'EEDT','Eastern European Summer Time':'EEST','Eastern European Time':'EET','Eastern Summer(Daylight) Time':'EST','Eastern Standard Time':'EST','Greenwich Mean Time':'GMT','Heure Avanc?e de l\',Atlantique':'HAA','Heure Avanc?e du Centre':'HAC','Hawaii-Aleutian Daylight Time':'HADT','Heure Avanc?e de l\',Est':'HAE','Heure Avanc?e du Pacifique':'HAP','Heure Avanc?e des Rocheuses':'HAR','Hawaii-Aleutian Standard Time':'HAST','Heure Avanc?e de Terre-Neuve':'HAT','Heure Avanc?e du Yukon':'HAY','Heure Normale de l\',Atlantique':'HNA','Heure Normale du Centre':'HNC','Heure Normale de l\',Est':'HNE','Heure Normale du Pacifique':'HNP','Heure Normale des Rocheuses':'HNR','Heure Normale de Terre-Neuve':'HNT','Heure Normale du Yukon':'HNY','Irish Summer Time':'IST','Mountain Daylight Time':'MDT','Mitteleurop?ische Sommerzeit':'MESZ','Mitteleurop?ische Zeit':'MEZ','Mountain Standard Time':'MST','Newfoundland Daylight Time':'NDT','Norfolk (Island) Time':'NFT','Newfoundland Standard Time':'NST','Pacific Daylight Time':'PDT','Pacific Standard Time':'PST','Coordinated Universal Time':'UTC','Western European Daylight Time':'WEDT','Western European Summer Time':'WEST','Western European Time':'WET','Western Summer(Daylight) Time':'WST','Western Standard Time':'WST'},getTimeZone:function(time){var tzs=time.toString().replace(/^.*\(|\)$/g,"");var tz=this.timezones[tzs];if(typeof tz!=="string"&&(tzs.length>=2)){for(var z in this.timezones){if(this.timezones[z]===tzs){return tzs;}}}
if(typeof(tz)=="undefined"||!tz){var d=time.toString();tz=d.substr(d.length-8,3);}
if(typeof(tz)=="undefined"){tz="";}
return tz;},displayTime:function(time,dtGMT){var tzs=((new Date().getTimezoneOffset()/60)*(-1)).toString();if(tzs.indexOf('.')!==-1)
{var hr=tzs.substring(0,tzs.indexOf('.'));var min=(tzs.substring(tzs.indexOf('.'),tzs.length)==".75")?":45":":30";tzs=hr+min;}
if(time!==""&&dtGMT!==""){if(tzs=="-4"||tzs=="-5"||tzs=="-6"||tzs=="-7"||tzs=="-8"||tzs=="-9"||tzs=="-10"||tzs=="-11"){return time;}
else if(dtGMT.indexOf('GMT')!==-1){pgDate=dtGMT.substring(dtGMT.indexOf(',')+1,dtGMT.length);var dtt=new Date(pgDate);var p1=this.simpleDateFormat.format(dtt,"EE, MMM d, y ");var p2="As of "+this.simpleDateFormat.format(dtt,"h:mm a ");var p3="(GMT "+(tzs.indexOf('-')!==-1?tzs:"+"+tzs)+" hours)";return p1+p2+p3;}
else{return dtGMT;}}},getOffset:function(){var now=new Date();var sDate=new Date();var eDate=new Date();switch(now.getFullYear()){case 2009:sDate.setFullYear(2009,2,8);sDate.setHours(3,0,0,0);eDate.setFullYear(2009,10,1);eDate.setHours(3,0,0,0);break;case 2010:sDate.setFullYear(2010,2,14);sDate.setHours(3,0,0,0);eDate.setFullYear(2010,10,7);eDate.setHours(3,0,0,0);break;case 2011:sDate.setFullYear(2011,2,13);sDate.setHours(3,0,0,0);eDate.setFullYear(2011,10,6);eDate.setHours(3,0,0,0);break;case 2012:sDate.setFullYear(2012,2,11);sDate.setHours(3,0,0,0);eDate.setFullYear(2012,10,4);eDate.setHours(3,0,0,0);break;case 2013:sDate.setFullYear(2013,2,10);sDate.setHours(3,0,0,0);eDate.setFullYear(2013,10,3);eDate.setHours(3,0,0,0);break;case 2014:sDate.setFullYear(2014,2,9);sDate.setHours(3,0,0,0);eDate.setFullYear(2014,10,2);eDate.setHours(3,0,0,0);break;case 2015:sDate.setFullYear(2015,2,8);sDate.setHours(3,0,0,0);eDate.setFullYear(2015,10,1);eDate.setHours(3,0,0,0);break;}
var offset=-5;if(now>=sDate&&now<=eDate){offset=-4;}
return offset;},getESTDate:function(){d=new Date();utc=d.getTime()+(d.getTimezoneOffset()*60000);nd=new Date(utc+(3600000*this.getOffset()));var currentTime=nd;var hours=currentTime.getHours();var minutes=currentTime.getMinutes();var suffix="AM EDT";if(hours>=12){suffix="PM EDT";hours=hours-12;}
if(hours===0){hours=12;}
if(minutes<10){minutes="0"+minutes;}
var cTime=(hours+":"+minutes+" "+suffix);var m_names=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];var curr_date=d.getDate();var curr_month=d.getMonth();var curr_year=d.getFullYear();return m_names[curr_month]+" "+curr_date+", "+curr_year+" "+cTime;}};
dojo.provide("dj.util.Observer");(dj.util.Observer=function(parent){this.parent=parent||null;this._subs=[];}).prototype={subscribe:function(callback,context){if(typeof callback!=="function"){throw new TypeError("Callback must be a function.");}
context=(context||this.parent);this._subs.push({name:null,cb:callback,ctx:context});},subscribeByName:function(name,callback,context){if(typeof name!=="string"){throw new TypeError("Name must be a string.");}
if(typeof callback!=="function"){throw new TypeError("Callback must be a function.");}
context=(context||this.parent);this._subs.push({name:name,cb:callback,ctx:context});},unsubscribe:function(cb){var newSubs=[];for(var i=0,len=this._subs.length,sub=null;i<len;i++){sub=this._subs[i];if(sub.cb!==cb){newSubs.push(sub);}}
this._subs=newSubs;},fire:function(){for(var i=0,sub,len=this._subs.length;i<len;i++){sub=this._subs[i];sub.cb.apply(sub.ctx,arguments);}},fireByName:function(name){if(typeof name!=="string"){throw new TypeError("Name must be a string.");}
var args=[];for(var i=1,arg,len=arguments.length;i<len;i++){args.push(arguments[i]);}
for(var j=0,sub,slen=this._subs.length;j<slen;j++){sub=this._subs[j];if((sub.name===null)||(sub.name!==name)){continue;}
sub.cb.apply(sub.ctx,args);}}};
dojo.provide("dj.util.PeriodicalUpdater");dojo.require("dj.lang._oop");dojo.require("dj.util.string");dojo.declare("dj.util.PeriodicalUpdater",null,{constructor:function(container,url,options){this.container=container;this.url=url;this.options=dj.lang.cloneMixin(this.DEFAULT_OPTIONS,options);this.options.method=this.options.method.toUpperCase();this.updater={};this.start();},DEFAULT_OPTIONS:{method:"POST",frequency:2,decay:1,maxDecay:10},start:function(){this.oCntSuccess=dojo.byId(this.container.success);this.decay=this.options.decay;this.onTimerEvent();},stop:function(){clearTimeout(this.timer);},updateComplete:function(responseText){if(this.options.onUpdate){this.options.onUpdate.apply(this,arguments);}
if(this.decay){this.decay=(responseText==this.lastText?(this.decay*this.options.decay):1);this.decay=(this.decay>this.options.maxDecay)?this.options.maxDecay:this.decay;this.lastText=responseText;}
this.timer=this._delay(dojo.hitch(this,this.onTimerEvent),(this.decay*this.options.frequency),"one","two");},onTimerEvent:function(){if(dj.context.module.disableModuleRefresh[this.container.success]){return;}
dojo.xhr(this.options.method,{url:this.url,preventCache:true,load:dojo.hitch(this,function(responseText){this.oCntSuccess.innerHTML=dj.util.string.stripScripts(responseText);dj.util.string.evalScripts(responseText,this.url);this.updateComplete(responseText);}),error:dojo.hitch(this,function(e){console.error("{PeriodicalUpdater} error in file: '%s': %o",this.url,e);})},true);},_delay:function(met,timeout){var __method=met,args=Array.prototype.slice.call(arguments,2);timeout=timeout*1000;return window.setTimeout(function(){return __method.apply(__method,args);},timeout);}});
dojo.provide("dj.module.freeReg");dj.module.freeReg={init:function(){this.oAnyUserLoggedIn=false;var that=this;dj.util.User.isLoggedIn(function(isLoggedIn){if(isLoggedIn){that.oAnyUserLoggedIn=true;}});if(!that.oAnyUserLoggedIn){this.inlineReg=new dj.widget.panel.ModalPanel('register','register_module',{openModalPanelEvent:"click",closeModalPanelEvent:"blur",closeModalPanelButtonSelector:".closeFreereg",closeModalPanelEventForButtonSelector:"click"});this.oRegister_module=this.inlineReg.oModalContainer;this.inlineLogin=new dj.widget.panel.ModalPanel('login','login_module',{openModalPanelEvent:"click",closeModalPanelEvent:"blur",closeModalPanelButtonSelector:".closeLogin",closeModalPanelEventForButtonSelector:"click"});this.logindiv=this.inlineLogin.oModalContainer;this.ologin_form=dj.lang.byId('login_form');this.ologinMod=this.inlineLogin.oModalId;this.osublogin=dj.lang.byId('subscriberLogin');this.ofreereg=dj.lang.byId('freereg');this.oFree_reg=this.inlineReg.oModalId;this.oErrorCount=0;this.http_request=false;this.oRegFieldErrorMsgsValue="";this.oregFieldErrorMsg=dj.lang.byId('oregFieldErrorMsg');this.oFr_confirm=dj.lang.byId('fr_confirm');this.oFr_content=dj.lang.byId('fr_content');this.oFreeRegistration_form=dj.lang.byId('freeRegistration_form');this.oFreeregemailerrormsg=dj.lang.byId('freeregemailerrormsg');this.oFreeregusererrormsg=dj.lang.byId('freeregusererrormsg');this.oFreeRegServiceErrorMsg=dj.lang.byId('freeRegServiceErrorMsg');this.oFreeRegSubButton=dj.lang.byId('freeRegSubButton');this.oFreeRegEmail=dj.lang.byId('regemail');this.oFreeRegWhyReason=dj.lang.byId('whyreasons');this.ofreewhyregister=dj.lang.byId('ofreewhyregister');this.regErrorCode=['userName-exists','userName-required','userName-invalid','firstName-required','firstName-invalid','lastName-required','lastName-invalid','emailAddress-exists','emailAddress-required','emailAddress-invalid','password-required','password-invalid','passwordConfirmation-invalid','userName-unique','emailAddress-unique','passwordConfirmation-required'];this.regErrorValue=['Please enter your First Name.','Please enter your Last Name.','Please enter a valid email address.','Please create a Password.','Please confirm Password.','The email addresses do not match. Please re-enter both.','Passwords do not match.','Password must be 5-15 characters in length.','Confirm Password must be 5-15 characters in length.','','','Please Confirm Email.','First name contains invalid characters.','Last name contains invalid characters.'];this.regFieldName=['firstNameReg','lastNameReg','emailAddressReg','passwordReg','passwordConfirmationReg','emailAddressConfirmationReg','passwordConfirmationReg','passwordReg','passwordConfirmationReg','sendEmailsReg','jcommunityReg','emailAddressConfirmationReg','firstNameReg','lastNameReg','companySizeReg'];this.attachEvents();this.freeRegResetForm();}},attachEvents:function(){var textFields=dojo.query("input[type=text]",this.oFreeRegistration_form);var passfields=dojo.query("input[type=password]",this.oFreeRegistration_form);textFields.forEach(function(ipt){dojo.connect(ipt,"onfocus",this,function(ev){this.checkFreeRegFocus(ipt.name);});},this);textFields.forEach(function(ipt){dojo.connect(ipt,"onblur",this,function(ev){this.checkFreeRegFieldBlur(ipt.name);});},this);passfields.forEach(function(ipt){dojo.connect(ipt,"onfocus",this,function(ev){this.checkFreeRegFocus(ipt.name);});},this);passfields.forEach(function(ipt){dojo.connect(ipt,"onblur",this,function(ev){this.checkFreeRegFieldBlur(ipt.name);});},this);this.oimagefields=dojo.query("input[type=image]",this.oFreeRegistration_form);this.oimagefields.forEach(function(ipt){dojo.connect(ipt,"onclick",this,function(ev){this.submitregForm();});},this);this.okButtonClicked=dojo.query("input[class=okButton]",this.oFreeRegConfirm);this.okButtonClicked.forEach(function(ipt){dojo.connect(ipt,"onclick",this,function(ev){this.closeRegSuccessBlock();});},this);this.oFreewhyReasons=dojo.query("a[class=ofreewhyReasons]",this.oRegister_module);this.oFreewhyReasons.forEach(function(ipt){dojo.connect(ipt,"onclick",this,function(ev){this.oFreeRegWhyReason.style.display=(this.oFreeRegWhyReason.style.display=='block')?'none':'block';if(this.oFreeRegWhyReason.style.display==='block'){this.ofreewhyregister.className="why";}else{this.ofreewhyregister.className="whynot";}});},this);this.oFreeTermsConditions=dojo.query("a[class=ofreeTermsConditions]",this.oRegister_module);this.oFreeTermsConditions.forEach(function(ipt){dojo.connect(ipt,"onclick",this,function(ev){dj.util.Url.openWin('/public/page/subscriber_agreement.html','TermAndConditions',800,800,'scrollbars',1,300,100);});},this);this.oFreeEmailNewLetter=dojo.query("a[class=ofreeEmailNewLetter]",this.oRegister_module);this.oFreeEmailNewLetter.forEach(function(ipt){dojo.connect(ipt,"onclick",this,function(ev){dj.util.Url.openWin('/public/email','EmailNewLetterLink');});});this.oprivacyPolicy=dojo.query("a[class=oprivacyPolicy]",this.oRegister_module);this.oprivacyPolicy.forEach(function(ipt){dojo.connect(ipt,"onclick",this,function(ev){dj.util.Url.openWin('/public/page/privacy_policy.html','FreeRegPrivacyPolicy',800,800,'scrollbars',1,300,100);});},this);dojo.connect(this.ologinMod,'click',this,function(ev){dojo.stopEvent(ev);this.closeRegOtherBlock(2);this.ologin_form.reset();});},freeRegResetForm:function(){dojo.connect(this.oFree_reg,"onclick",this,function(ev){dojo.stopEvent(ev);this.closeRegOtherBlock(1);this.oFreeRegistration_form.reset();dj.util.Element.hide(this.oregFieldErrorMsg);this.ofreewhyregister.className="whynot";this.oRegFieldErrorMsgsValue="";this.oFreeRegSubButton.disabled=false;dj.util.Element.hide(this.oFreeregemailerrormsg);dj.util.Element.hide(this.oFreeRegServiceErrorMsg);dj.util.Element.hide(this.oFreeregusererrormsg);this.oFreeRegistration_form[this.regFieldName[0]].style.backgroundColor='#ffffff';this.oFreeRegistration_form[this.regFieldName[1]].style.backgroundColor='#ffffff';this.oFreeRegistration_form[this.regFieldName[2]].style.backgroundColor='#ffffff';this.oFreeRegistration_form[this.regFieldName[3]].style.backgroundColor='#ffffff';this.oFreeRegistration_form[this.regFieldName[4]].style.backgroundColor='#ffffff';this.oFreeRegistration_form[this.regFieldName[5]].style.backgroundColor='#ffffff';});},closeRegSuccessBlock:function(){this.oFreeRegEmail.innerHTML="";dj.util.Element.hide(this.oFr_confirm);dj.util.Element.show(this.oFr_content);dj.util.Element.hide(this.oRegister_module);this.oFreeRegSubButton.disabled=false;this.oFreeRegistration_form.reset();},closeRegOtherBlock:function(val){if(val===1){this.ofreereg.className="freereg";this.osublogin.className+=" login_hidden";dj.util.Element.hide(this.logindiv);dj.util.Element.show(this.oRegister_module);this.oFreeRegWhyReason.style.display='block';this.oFreeRegWhyReason.style.display='none';}
if(val===2){this.osublogin.className="login";this.ofreereg.className+=" freereg_hidden";dj.util.Element.show(this.logindiv);dj.util.Element.hide(this.oRegister_module);}},checkFreeRegFieldBlur:function(oregFieldname){this.ofieldName=this.oFreeRegistration_form[oregFieldname];this.ofieldValue=this.ofieldName.value;if(/^\s*$/.test(this.ofieldValue)){this.oErrorCount=1;this.oFreeRegSubButton.disabled=false;}else{this.ofieldName.style.color='#000000';this.ofieldName.style.backgroundColor='#ffffff';this.ofieldName.value=this.ofieldValue.strip();}},checkFreeRegBlur:function(oregFieldnumber){this.ofieldName=this.oFreeRegistration_form[this.regFieldName[oregFieldnumber]];this.ofieldValue=this.ofieldName.value;if(/^\s*$/.test(this.ofieldValue)){this.changeFieldValue(oregFieldnumber);this.oErrorCount=1;this.oFreeRegSubButton.disabled=false;}else{this.ofieldName.style.color='#000000';this.ofieldName.style.backgroundColor='#ffffff';this.ofieldName.value=this.ofieldValue.strip();}},checkFreeRegFocus:function(oregFieldname){this.ofieldName=this.oFreeRegistration_form[oregFieldname];this.ofieldName.style.color="#000000";this.ofieldName.style.backgroundColor="#ffffff";},checkFreeRegEmail:function(email){var invalidEmailChars=" ?!#$%&*()\"||<>=+;:][{}/\\";for(var count=0,len=invalidEmailChars.length;count<len;count++){var badChar=invalidEmailChars.charAt(count);if(email.indexOf(badChar,0)>-1){this.oErrorCount=1;this.changeFieldValue(2);this.oFreeRegSubButton.disabled=false;return;}}
this.lastAtSign=email.lastIndexOf("@");this.firstAtSign=email.indexOf("@");this.lastPeriod=email.lastIndexOf(".");if(!(this.firstAtSign>0&&email.length>=5&&email.length<=100&&this.firstAtSign===this.lastAtSign&&email.lastIndexOf("..")<0&&this.lastPeriod>=(this.firstAtSign+2)&&this.lastPeriod<=(email.length-3)&&email.charAt(this.firstAtSign+1)!==".")){this.changeFieldValue(2);this.oFreeRegSubButton.disabled=false;this.oErrorCount=1;return;}},compareFreeRegEmail:function(){this.oEmailfieldValue=this.oFreeRegistration_form[this.regFieldName[2]].value;this.oEmailfieldConfValue=this.oFreeRegistration_form[this.regFieldName[5]].value;if((this.oEmailfieldValue!=''&&this.oEmailfieldConfValue!='')&&(this.oEmailfieldValue!==this.oEmailfieldConfValue)){this.changeFieldValue(5);this.oFreeRegSubButton.disabled=false;this.oErrorCount=1;}},compareFreeRegPassword:function(){this.oPassfieldValue=this.oFreeRegistration_form[this.regFieldName[3]].value;this.oCPassfieldValue=this.oFreeRegistration_form[this.regFieldName[4]].value;if(this.oPassfieldValue!==this.oCPassfieldValue){this.changeFieldValue(6);this.oFreeRegSubButton.disabled=false;this.oErrorCount=1;}},changeFieldValue:function(oregFieldnumber){dj.util.Element.show(this.oregFieldErrorMsg);this.ofieldName=this.oFreeRegistration_form[this.regFieldName[oregFieldnumber]];this.oRegFieldErrorMsgsValue+=" "+this.regErrorValue[oregFieldnumber];this.ofieldName.style.color='#ff0000';this.ofieldName.style.backgroundColor='#fff28d';},responseErrorData:function(responseData){var that=this;var oshow=0;var profileErrors=responseData.profile.errors;var emailAddressVal=profileErrors.emailAddress;var userNameVal=profileErrors.userName;var firstNameVal=profileErrors.firstName;var lastNameVal=profileErrors.lastName;var passwordVal=profileErrors.password;var compasswordVal=profileErrors.passwordConfirmation;if(emailAddressVal!==null&&emailAddressVal!==undefined){if(this.regErrorCode[7]===emailAddressVal||this.regErrorCode[14]===emailAddressVal){dj.util.Element.show(this.oFreeregemailerrormsg);this.ofieldName=this.oFreeRegistration_form[this.regFieldName[2]];this.ofieldName.style.backgroundColor='#fff28d';}else{this.changeFieldValue(2);oshow=1;}}
if(userNameVal!==null&&userNameVal!==undefined){if(this.regErrorCode[0]===userNameVal||this.regErrorCode[13]===userNameVal){dj.util.Element.show(this.oFreeregusererrormsg);this.ofieldName=this.oFreeRegistration_form[this.regFieldName[5]];this.ofieldName.style.backgroundColor='#fff28d';}else{this.changeFieldValue(5);oshow=1;}}
if(firstNameVal!==null&&firstNameVal!==undefined){this.changeFieldValue(0);oshow=1;}
if(lastNameVal!==null&&lastNameVal!==undefined){this.changeFieldValue(1);oshow=1;}
if(passwordVal!==null&&passwordVal!==undefined){if(passwordVal===this.regErrorCode[11]){this.changeFieldValue(7);}else{this.changeFieldValue(3);}
oshow=1;}
if(compasswordVal!==null&&compasswordVal!==undefined){if(compasswordVal===this.regErrorCode[12]){this.changeFieldValue(8);}else{this.changeFieldValue(4);}
oshow=1;}
console.log("inside responseError data"+this.oRegFieldErrorMsgsValue);if(oshow===1){dj.util.Element.show(this.oregFieldErrorMsg);this.oregFieldErrorMsg.innerHTML="<p>"+this.oRegFieldErrorMsgsValue+"</p>";console.log("inside responseError show data"+this.oRegFieldErrorMsgsValue);}},freeRegRequest:function(){this.ofirstName=this.oFreeRegistration_form[this.regFieldName[0]].value;this.olastName=this.oFreeRegistration_form[this.regFieldName[1]].value;this.oemailName=this.oFreeRegistration_form[this.regFieldName[2]].value;this.opassName=this.oFreeRegistration_form[this.regFieldName[3]].value;this.ocpassName=this.oFreeRegistration_form[this.regFieldName[4]].value;this.oemailConfName=this.oFreeRegistration_form[this.regFieldName[5]].value;this.oFeatureEmail=true;this.oCommunityProfile=this.oFreeRegistration_form[this.regFieldName[10]].checked;this.ocompanySize=this.oFreeRegistration_form[this.regFieldName[14]].value;this.opassQuestion='dt_no_of_people';if(this.ocompanySize.length==0||this.ocompanySize==null){this.data={'profile.firstName':this.ofirstName,'profile.lastName':this.olastName,'profile.emailAddress':this.oemailName.toLowerCase(),'profile.password':this.opassName,'profile.passwordConfirmation':this.ocpassName,'service.templateCode':'WSJ','service.registrationType':'FREE_REGISTRATION','profile.options.returnLink':window.location.href,'profile.options.featureEmailOptIn':this.oFeatureEmail,'profile.trackingCode':'INLINEFREEREG'};}
else{this.data={'profile.firstName':this.ofirstName,'profile.lastName':this.olastName,'profile.emailAddress':this.oemailName.toLowerCase(),'profile.password':this.opassName,'profile.passwordConfirmation':this.ocpassName,'service.templateCode':'WSJ','service.registrationType':'FREE_REGISTRATION','profile.options.returnLink':window.location.href,'profile.options.featureEmailOptIn':this.oFeatureEmail,'profile.demographics.questionId1':this.opassQuestion,'profile.demographics.answer1':this.ocompanySize,'profile.trackingCode':'INLINEFREEREG'};}
var that=this;var request=dojo.xhrPost({url:"/epiton/registration/v2/profile",handleAs:"json",headers:{Accept:"application/json"},postData:dojo.objectToQuery(this.data),handle:function(data,ioargs){if(ioargs.xhr.status===200){that.oFreeRegEmail.innerHTML=that.oemailName;dojo.style(that.oFr_content);dj.util.Element.hide(that.oFr_content);dj.util.Element.show(that.oFr_confirm);that.oFreeRegistration_form.reset();}else if(ioargs.xhr.status===412){var responseData=eval('('+ioargs.xhr.responseText+')');that.oFreeRegSubButton.disabled=false;that.responseErrorData(responseData);}else if(ioargs.xhr.status===500||ioargs.xhr.status===503||ioargs.xhr.status===404){that.oFreeRegSubButton.disabled=false;dj.util.Element.show(that.oFreeRegServiceErrorMsg);}else{that.oFreeRegSubButton.disabled=false;dj.util.Element.show(that.oFreeRegServiceErrorMsg);}}});},checkEmailInEmailCenter:function(){this.oemailName=this.oFreeRegistration_form[this.regFieldName[2]].value;var that=this;this.request=dojo.xhrGet({url:'/emailcheck/'+this.oemailName,load:function(data){if(data){if('false'===dojo.strip(data)){that.freeRegRequest();}else if('true'===dojo.strip(data)){that.oFreeRegSubButton.disabled=false;}else{that.oFreeRegSubButton.disabled=false;dj.util.Element.show(that.oFreeRegServiceErrorMsg);}}else{that.oFreeRegSubButton.disabled=false;dj.util.Element.show(that.oFreeRegServiceErrorMsg);}},error:function(error){that.oFreeRegSubButton.disabled=false;dj.util.Element.show(that.oFreeRegServiceErrorMsg);}});},submitregForm:function(){this.oErrorCount=0;this.oRegFieldErrorMsgsValue="";dj.util.Element.hide(this.oFreeregemailerrormsg);dj.util.Element.hide(this.oFreeregusererrormsg);dj.util.Element.hide(this.oFreeRegServiceErrorMsg);this.oFreeRegSubButton.disabled=true;this.checkFreeRegBlur(0);this.checkFreeRegBlur(1);this.checkFreeRegBlur(2);this.checkFreeRegBlur(11);this.checkFreeRegBlur(3);this.checkFreeRegBlur(4);this.compareFreeRegEmail();this.compareFreeRegPassword();if(this.oErrorCount===0){this.oRegFieldErrorMsgsValue="";}
if(this.oErrorCount>0){this.oregFieldErrorMsg.innerHTML="<p>"+this.oRegFieldErrorMsgsValue+"</p>";console.log(this.oRegFieldErrorMsgsValue);dj.util.Element.show(this.oregFieldErrorMsg);this.oFreeRegSubButton.disabled=false;return false;}else{this.oFreeRegSubButton.disabled=true;dj.util.Element.hide(this.oregFieldErrorMsg);this.oRegFieldErrorMsgsValue="";this.oregFieldErrorMsg.innerHTML="";this.freeRegRequest();return false;}
return false;}};
dojo.provide("dj.widget.uberhat.UberHat");dojo.require("dj.lang");dojo.require("dj.util.User");dojo.getObject("dj.widget.uberHat",true);(function(){var _dwu=dj.widget.uberHat;(_dwu.UberHat=function(cfg){this._cfg=dj.lang.deepClone(this.DEFAULT_CONFIG);dj.lang.deepMixin(this._cfg,cfg);this.matchingHat="";if(this._cfg.divExists){this.loadPartnerDiv();}else{this.getUserInfo();}}).prototype={DEFAULT_CONFIG:{partnerDivExists:false,partnerDivId:"partnerHat",partnerClassPrefix:"uberHatPartner-",hatInfo:{"HILTON":{"id":"hiltonHat","className":"wsj_partnerhat","CSSFILE":"hilton.css","content":'<div class="partnerhat_container"><div class="partnerhat_content">'+'<div class="partnerhat_col1"></div><div class="partnerhat_col2">'+'<ul class="inlineNav"><li class="listFirst"><a href="http://www.hilton.com/">Hilton.com</a></li><li><a href="http://www.weather.com/">Weather</a></li>'+'<li class="listLast"><a href="http://www.foxsports.com/">Fox Sports</a></li></ul>'+'<span class="partnerhat_subscribe"><a href="https://order.wsj.com/sub/xdef/027/6BCWNM_OOT">Subscribe to The Wall Street Journal</a></span>'+'</div></div></div><div class="partnerhat_shadow"> </div>'},"EXP-LEXISNEXIS":{"id":"lexisnexisHat","className":"wsj_partnerhat","CSSFILE":"lexisnexis.css","content":'<div class="partnerhat_container">'+'<div class="partnerhat_content">'+'<div class="partnerhat_col1">'+'</div>'+'<div class="partnerhat_col2">'+'<ul class="inlineNav">'+'<li class="listFirst"><a href="/law">WSJ.com Law Page</a></li>'+'<li><a href="http://www.lexis.com/research">lexis.com&#174</a></li>'+'<li><a href="https://litigator.lexisnexis.com">LexisNexis&#174 Total Litigator</a></li>'+'<li><a href="http://www.lexis.com/research/xlink?source=292689">Historical Quotes</a></li>'+'<li><a href="http://www.mealeys.com">LexisNexis&#174 Legal News</a></li>'+'<li class="listLast"><a href="http://www.martindale.com/">martindale.com&#174</a></li>'+'</ul>'+'<span class="partnerhat_subscribe">'+'<a href="https://order.wsj.com/sub/xdef/027/6BCWNM_OOT">Subscribe to The Wall Street Journal</a>'+'</span>'+'</div>'+'</div>'+'</div>'+'<div class="partnerhat_shadow"> </div>'},"EXP-GAYLORD":{"id":"gaylordHat","className":"wsj_partnerhat","CSSFILE":"gaylord.css","content":'<div class="partnerhat_container">'+'<div class="partnerhat_content">'+'<a class="logo" href="http://www.gaylordhotels.com/">Free access compliments of Gaylord Hotels</a>'+'<div class="partnerhat_col1">'+'</div>'+'<div class="partnerhat_col2">'+'<ul class="inlineNav">'+'<li class="listFirst"><a href="http://www.gaylordhotels.com/">gaylordhotels.com</a></li>'+'<li><a href="http://www.weather.com/">Weather</a></li>'+'<li class="listLast"><a href="http://www.foxsports.com/">Fox Sports</a></li>'+'</ul>'+'<span class="partnerhat_subscribe">'+'<a href="https://order.wsj.com/sub/xdef/027/6BCWNM_OOT">Subscribe to The Journal</a>'+'</span>'+'</div>'+'</div>'+'</div>'+'<div class="partnerhat_shadow"> </div>'}}},getUserInfo:function(){var hatInfo=this._cfg.hatInfo;for(var key in hatInfo){if(hatInfo.hasOwnProperty(key)){this.localCallbackWrapper(key);}}},localCallbackWrapper:function(roleName){var that=this;var role=roleName;dj.util.User.hasRole(roleName,function(userHasRole){that.userCallback(userHasRole,role);});},userCallback:function(userHasRole,role){if(userHasRole){this.renderHat(this._cfg.hatInfo[role]);}},renderHat:function(hatInfo){var reallywide=dojo.query("div.fullwide")[0];var hat=dojo.create('div');hat.className=(hatInfo.className)||"uberHat";hat.id=(hatInfo.id)||"uberHat";reallywide.insertBefore(hat,reallywide.firstChild);hat.innerHTML=hatInfo.content;},loadPartnerDiv:function(){var div=dojo.byId(this._cfg.partnerDivId);if(div){var divClasses=div.className;var classArray=divClasses.split(' ');var pcPrefix=this._cfg.partnerClassPrefix;var partner="";for(var i=0,caLength=classArray.length;i<caLength;i++){var className=classArray[i];if(className.indexOf(pcPrefix)===0){partner=className.substring(pcPrefix.length);}}
if(partner){var hatInfo=this._cfg.hatInfo[partner];this.insertHat(div,hatInfo);}
var isIE6=(dojo.isIE==6);if(isIE6){var iframe=dojo.create('iframe',{"className":"wsj_partnerhat_iframe","id":"partnerhat_iframe","src":"javascript:'';","marginHeight":"0","marginWidth":"0","scrolling":"no","frameBorder":"0"},div.parentNode);var thehat=dojo.byId("partnerHat");var thehat_iframe=dojo.byId("partnerhat_iframe");var d=document;window.onscroll=function(){var iebody=(d.compatMode&&d.compatMode!="BackCompat")?d.documentElement:d.body;var thisy=iebody.scrollTop;thehat.style.top=thisy+"px";thehat_iframe.style.top=thisy+"px";};}}},insertHat:function(div,hatInfo){if(hatInfo){div.innerHTML=hatInfo.content;}}};}());
dojo.provide("dj.widget.survey.Survey");dojo.require("dj.util.Cookie");dojo.require("dj.util.Url");dojo.require("dj.util.User");if(typeof dj=="undefined"){dj={};}
if(typeof dj.widget=="undefined"){dj.widget={};}
if(typeof dj.widget.survey=="undefined"){dj.widget.survey={};}
(function(){var _du=dj.util;var _dws=dj.widget.survey;(_dws.SurveyPopup=function(cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._duu=dj.util.Url;this._duc=dj.util.Cookie;try{if(this._cfg.userHasRole){var that=this;dj.util.User.hasRole(this._cfg.userHasRole,function(userHasRole){if(userHasRole){that.popup();}});}else{this.popup();}}catch(e){throw e;}}).prototype={DEFAULT_CONFIG:{"url":"","width":740,"height":425,"bottom":"15px","left":"10%","cookieName":"survey","windowName":"survey","userHasRole":"","enableInterval":"","noRepeatInterval":"7d+","frequencyPercent":100,"cookieGroupExpirationDays":90,"divId":"sd1Scrim","iframeId":"sw1","closeUrlSuffix":"?closeDomain="+window.location.host,"newsReelMatch":"NewsReel"},popup:function(){var Cookie=this._duc;var Url=this._duu;if(this._canShowPopup()){this._setNoRepeatCookie(this._cfg.noRepeatInterval);this.insertIframe();this.showIframe();dj.module.survey=this;}},insertIframe:function(){this.body=document.body;var body=this.body;if(body){var surveyDiv=dojo.create('div',{"id":this._cfg.divId,"name":this._cfg.divId,"style":{"zIndex":"9999"},"innerHTML":['<div id="sd1Frame">','<div id="sd1">','<iframe name="',this._cfg.iframeId,'" id="',this._cfg.iframeId,'" src="about:blank" height="',this._cfg.height,'" width="',this._cfg.width,'">','</div>','</div>'].join('')});this.surveyDiv=surveyDiv;body.appendChild(surveyDiv);this.surveyIframe=dojo.byId(this._cfg.iframeId);}},showIframe:function(){this.surveyIframe.src=this._cfg.url+this._cfg.closeUrlSuffix;this.surveyDiv.style.display="";var that=this;window.CloseSurvey=function(){that.hideIframe();};},hideIframe:function(){this.surveyDiv.style.display="none";},showIframeDelay:function(){var that=this;setTimeout(function(){that.showIframe();},this._calcMilliseconds(this._cfg.enableInterval));},_canShowPopup:function(){if(document.location.href.indexOf(this._cfg.newsReelMatch)>-1){return false;}
var showPopup=true;var noRepeatCookie=this._duc.getGroupCookie("DJCOOKIE",this._cfg.cookieName+"NoRepeat");var now=new Date();if(noRepeatCookie){var noRepeatDate=new Date(noRepeatCookie);if((noRepeatDate-now)>0){showPopup=false;}else{this._setEnableIntervalCookie(this._cfg.enableInterval);this._duc.deleteGroupCookie("DJCOOKIE",this._cfg.cookieName+"NoRepeat");}}
if(this._cfg.enableInterval){var enableCookie=this._duc.getGroupCookie("DJCOOKIE",this._cfg.cookieName+"Enable");if(enableCookie){var enableDate=new Date(enableCookie);if((enableDate-now)>0){showPopup=false;}}else{this._setEnableIntervalCookie(this._cfg.enableInterval);showPopup=false;var that=this;setTimeout(function(){that.popup();},this._calcMilliseconds(this._cfg.enableInterval));}}
if(showPopup&&this._cfg.frequencyPercent){var dice=Math.floor(Math.random()*100);if(dice>=this._cfg.frequencyPercent){showPopup=false;}}
return showPopup;},_setNoRepeatCookie:function(interval){var noRepeatDate=this._calcDate(interval);this._duc.setGroupCookie("DJCOOKIE",this._cfg.cookieName+"NoRepeat",noRepeatDate,this._cfg.cookieGroupExpirationDays);},_setEnableIntervalCookie:function(interval){var enableDate=this._calcDate(interval);this._duc.setGroupCookie("DJCOOKIE",this._cfg.cookieName+"Enable",enableDate,this._cfg.cookieGroupExpirationDays);},_calcDate:function(D){var MS=this._calcMilliseconds(D),dO=new Date();dO.setTime((D.substring(D.length-1,D.length)=="+")?dO.getTime()+MS:dO.getTime()-MS);return dO.toGMTString();},_calcMilliseconds:function(D){var TD=D.substring(0,D.length-2),TC=D.substring(D.length-2,D.length-1).toLowerCase(),MS=0;MS=(TC=="m")?TD*((24*60*60*1000)*30):MS;MS=(TC=="d")?TD*(24*60*60*1000):MS;MS=(TC=="s")?TD*1000:MS;return MS;},openWSJDNPopUnder:function(){dj.util.User.isLoggedIn(function(loggedIn){if(!loggedIn){var wsjdnPopUnder=dj.util.Cookie.getGroupCookie("DJCOOKIE","wsjdnpopunder");if(!wsjdnPopUnder)
{var popunder=window.open('http://wsjdn.wsj.com/','wsjdnpopunder','menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,personalbar=yes,scrollbars=yes');popunder.blur();window.focus();dj.util.Cookie.setGroupCookie("DJCOOKIE","wsjdnpopunder","seen",1);}}});}};}());
dojo.provide("dj.util.Tracking");dojo.require("dj.util.Cookie");dojo.require("dj.util.Omniture");dojo.require("dj.util.Page");dojo.require("dj.util.Region");dojo.require("dj.util.User");dj.util.Tracking={omniture:{_initd:false,init:function(){var localSuppressOmniture=false;this._delayFirePixel=false;this._firePixelCount=0;try{if(typeof s==='undefined'){return;}
this._s=s;if(typeof setMetaData!=='undefined'){this.setMetaData=setMetaData;}
if(typeof setSuppressOmniture!=='undefined'){localSuppressOmniture=setSuppressOmniture();}}
catch(e){console.info("{Tracking} could not suppress omniture. Throws: %o",e);}
if(localSuppressOmniture){console.info("{Tracking} localSuppressOmniture = %s",localSuppressOmniture);return;}
this._s.channel="Online Journal";var refresh=(dj.util.Page.getQueryParam('refresh')||dj.util.Page.getHashParam('refresh'));var refdom=this._s.getQueryParam('refdom');this.reflink=(dj.util.Page.getQueryParam('reflink')||dj.util.Page.getHashParam('reflink'));this.link=(dj.util.Page.getQueryParam('mod')||dj.util.Page.getHashParam('mod'));var targeturl=this._s.getQueryParam('url');if(!refresh){refresh='off';}
if(refdom){this._s.referrer=refdom;}
if(this.reflink){this.link="";}
else
if(this.link){this.reflink="";}
var fullurl=document.location.href;var baseurl=document.location.protocol+'//'+document.location.host+document.location.pathname;var caccess=((typeof loggedIn!=="undefined")&&(loggedIn===true))?"subscriber":"open";caccess=(fullurl.indexOf('/PA2VJBNA4R')!=-1)?"ppv":caccess;caccess=(fullurl.indexOf('/services/')!=-1)?"print":caccess;setMetaData('baseurl',baseurl);setMetaData('fullurl',fullurl);setMetaData('refresh',refresh);setMetaData('caccess',caccess);if(typeof dj.util.Region=="object"){setMetaData('edition',setEdition(dj.util.Region.getViewByRegion()));}
if(this.link){setMetaData('link',this.link);}
if(this.reflink){setMetaData('reflink',this.reflink);}
if(targeturl){setMetaData('targeturl',targeturl);}
this.cookieTracking=dj.util.Cookie.getCookie("TR");this.cookieUserType=dj.util.Cookie.getCookie("user_type");this.cookieSpotlightSet=dj.util.Cookie.getCookie("spotlightSet");if(typeof numads!=="undefined"){setMetaData('numads',numads.toString());}
if(this.cookieTracking!==null){setMetaData('userid',this.cookieTracking);}
this._initd=true;},delayFirePixel:function(){this._delayFirePixel=true;},resetPixel:function(){this._s.ios=0;},getSObject:function(){return this._s;},getMetaData:function(param_name){var prop=lookup[param_name];if(!prop){prop=param_name;}
return this._s[prop];},firePixel:function(delayOverride){var wsjPrefix='';var that=this;dj.util.User.isLoggedIn(function(isLoggedIn){wsjPrefix='WSJ_';if(isLoggedIn){dj.util.User.isSubLoggedIn(function(subLoggedIn){if(subLoggedIn){dj.util.User.hasRole('WSJ-PRO',function(hasRole){if(hasRole){wsjPrefix='WSJPRO_';setMetaData('primaryproduct','Online Journal ProE');setMetaData('asub','WSJ_proc_sub_yes');setMetaData('csource','WSJ Professional Enterprise');setMetaData('caccess','premium');setMetaData('edition','Edition_US_Professional_Consumer');}else{dj.util.User.hasRole('WSJ-ENT',function(hasRole){if(hasRole){wsjPrefix='WSJPRO_';setMetaData('primaryproduct','Online Journal ProE');setMetaData('asub','WSJ_proe_sub_yes');setMetaData('csource','WSJ Professional Enterprise');setMetaData('caccess','premium');setMetaData('edition','Edition_US_Professional');}else{setMetaData('asub','WSJ_sub_yes');}});}});}else{setMetaData('asub','WSJ_mem_yes');}
return that.realFirePixel(delayOverride,wsjPrefix);});}else{if(that.cookieUserType===null||that.cookieUserType!=="subscribed"){setMetaData('asub','WSJ_free');}else{setMetaData('asub','WSJ_reg_yes');}
return that.realFirePixel(delayOverride,wsjPrefix);}});},setSearchOmnitureData:function(pageName,keyword,cannedSearch){var setPagename="WSJPRO_searchresults_"+pageName;var setKeyword=keyword;var setsubsection="WSJPRO_Search_"+pageName;var setCtype='searchresults';setMetaData('section','Search');setMetaData('subsection','WSJPRO_Search Results');setMetaData('atype',setsubsection);if(cannedSearch){this.cannedSearch=true;if(setKeyword!=='')setKeyword='AUTO_'+setKeyword;setCtype=setCtype+'_AUTO';}
if(setKeyword!==''){setMetaData('searchstatement',setKeyword);}
setMetaData('ctype',setCtype);setMetaData('apage',setsubsection);setMetaData('pagename',setPagename);setMetaData('basesection','WSJPRO_Search Results_'+pageName);dj.util.Tracking.omniture.firePixel(true);},setNewsFinderOmnitureData:function(pageName,baseSection){if(typeof pageName==='undefined'||pageName===''){pageName='News Finder';}
if(typeof baseSection==='undefined'||baseSection===''){baseSection='News Finder_Quick Search';}
setMetaData('pagename',pageName);setMetaData('basesection',baseSection);dj.util.Tracking.omniture.firePixel(true);},setInteractivesOmnitureData:function(infographicMetadata){console.log("INTERACTIVE OMNITURE METHOD CALL -- : "+infographicMetadata);var infoMetadata=infographicMetadata.split('~');var contentType=infoMetadata[0];var dataId=infoMetadata[1];var headline=infoMetadata[2];var counter=infoMetadata[3]?infoMetadata[3]:"";var wsjprefix='WSJ_';if(dojo.byId("__autocomplete_view_template")||dj.util.Cookie.getGroupCookie("DJCOOKIE","emgsessionid")!==null){wsjprefix='WSJPRO_';}
var intPageName='';var preAtype=this.getMetaData('atype');if(typeof preAtype!==undefined){preAtype=preAtype.replace('WSJPRO_','');preAtype=preAtype.replace('WSJ_','');preAtype=preAtype.replace('WSJ ','');}
var preSubSection=this.getMetaData('subsection');if(typeof preSubSection!==undefined){preSubSection=preSubSection.replace('WSJPRO_','');preSubSection=preSubSection.replace('WSJ_','');preSubSection=preSubSection.replace('WSJ ','');}
if(contentType==='photos'){intPageName=wsjprefix+preAtype+'_'+headline+'_slideshow_'+counter;setMetaData('pagename',intPageName);setMetaData('section','Multimedia');setMetaData('subsection',wsjprefix+'Infographic');setMetaData('atype',wsjprefix+'Multimedia_Photos');setMetaData('aheadline',wsjprefix+'slideshow_'+headline);setMetaData('csource','DJ Infographics');setMetaData('caccess','free');setMetaData('ctype',contentType);setMetaData('apage',wsjprefix+'Multimedia_Photos');setMetaData('basesection',wsjprefix+'Slideshow');}else if(contentType==='photos_tab'){intPageName=wsjprefix+preAtype+'_'+headline+'_slideshow_'+counter;setMetaData('pagename',intPageName);setMetaData('basesection',wsjprefix+preSubSection);setMetaData('atype',wsjprefix+'Multimedia_Photos_'+preSubSection);setMetaData('subsection',wsjprefix+this.getMetaData('section'));setMetaData('section','Multimedia');setMetaData('aheadline',wsjprefix+'slideshow_'+headline);setMetaData('csource','DJ Infographics');setMetaData('caccess','free');setMetaData('ctype',contentType);setMetaData('apage',wsjprefix+'Multimedia_Photos');}else if(contentType==='interactives'){intPageName=wsjprefix+preAtype+'_'+headline;setMetaData('pagename',intPageName);setMetaData('basesection',wsjprefix+'Interactives');setMetaData('subsection',wsjprefix+'Infographic');setMetaData('atype',wsjprefix+'Multimedia_Interactives');setMetaData('apage',wsjprefix+'Multimedia_Interactives');setMetaData('section','Multimedia');setMetaData('aheadline',wsjprefix+'interactive_'+headline);setMetaData('csource','DJ Infographics');setMetaData('caccess','free');setMetaData('ctype',contentType);}else if(contentType==='interactives_tab'){intPageName=wsjprefix+preAtype+'_'+headline;setMetaData('pagename',intPageName);setMetaData('basesection',wsjprefix+preSubSection);setMetaData('subsection',wsjprefix+this.getMetaData('section'));setMetaData('atype',wsjprefix+'Multimedia_Interactives_'+this.getMetaData('basesection'));setMetaData('apage',wsjprefix+'Multimedia_Interactives_'+this.getMetaData('basesection'));setMetaData('section','Multimedia');setMetaData('aheadline',wsjprefix+'interactive_'+headline);setMetaData('csource','DJ Infographics');setMetaData('caccess','free');setMetaData('ctype',contentType);}else if(contentType==='video_interactives'){intPageName=wsjprefix+'Video_'+headline;setMetaData('pagename',intPageName);setMetaData('basesection',wsjprefix+preSubSection);setMetaData('subsection',wsjprefix+this.getMetaData('section'));setMetaData('atype',wsjprefix+'Video_Video_'+this.getMetaData('basesection'));setMetaData('apage',wsjprefix+'Video_Video_'+this.getMetaData('basesection'));setMetaData('section','Video');setMetaData('aheadline',wsjprefix+'video_'+headline);setMetaData('caccess','free');setMetaData('ctype',contentType);}else{intPageName=wsjprefix+'Interactives_'+headline;setMetaData('pagename',intPageName);setMetaData('section','Multimedia');setMetaData('subsection',wsjprefix+'Infographic');setMetaData('atype',wsjprefix+'_Multimedia_Interactives');setMetaData('aheadline',wsjprefix+'interactive_'+headline);setMetaData('csource','DJ Infographics');setMetaData('caccess','free');setMetaData('ctype',contentType);setMetaData('apage',wsjprefix+'_Multimedia_Interactives');setMetaData('basesection',wsjprefix+'Interactives');}
dj.util.Tracking.omniture.firePixel(true);},setOmnitureData:function(pageName,keyword){console.log("WRONG OMNITURE METHOD CALL");},realFirePixel:function(delayOverride,wsjPrefix){if(this._initd!==true){console.info("{Tracking} tracking not initd.");return;}
if((typeof delayOverride==="undefined"||delayOverride===false)&&this._delayFirePixel===true){return;}
this._s.ios=0;if(this._s.prop1=='Home'){this._s.prop3=wsjPrefix+this._s.prop1+'_'+this._s.pageName;this._s.prop22=wsjPrefix+this._s.prop1+'_'+this._s.pageName;}
if(this._s.prop1=='Search'){this._s.prop3=wsjPrefix+this._s.prop1+'_'+this._s.pageName;if(!this.cannedSearch)this._s.prop22=wsjPrefix+this._s.prop1+'_'+'Search Results';}
if(this._s.prop1==="Multimedia"&&wsjPrefix==='WSJPRO_'){this._s.prop8='DJ Infographics';}
if(this._s.prop1=='Customer Resources'){if(this._s.pageName.indexOf('WSJPRO_')!==0){this._s.prop3=wsjPrefix+this._s.prop1+'_'+this._s.pageName;this._s.prop22=wsjPrefix+this._s.prop1+'_'+this._s.pageName;}else{this._s.prop3='WSJPRO_'+this._s.prop1+'_'+this._s.pageName;this._s.prop22='WSJPRO_'+this._s.prop1+'_'+this._s.pageName;}
this._s.prop19='marketing and support';}
try{if(dj.context.ads&&dj.context.ads.adZone){this._s.prop13=dj.context.ads.adZone;if(typeof this._s.prop13==='undefined'||this._s.prop13===""){if(this._s.prop1=='Home'&&wsjPrefix==='WSJPRO_'){setMetaData('qsymbol','front');}else{setMetaData('qsymbol',dj.context.ads.adZone);}}}}catch(e){}
this.setProductProperties(wsjPrefix);if(this._s.prop1=='Article'||this._s.prop1=='Community')
{var articleType="";this._s.prop3=this._s.prop3.replace('Community','Article');if(this._s.prop1=='Community'){this._s.prop3=this._s.prop3.replace('Article','Community');}
if(this._s.prop3&&this._s.prop3.indexOf(wsjPrefix)!==0){articleType=this._s.prop3+'_';this._s.prop3=wsjPrefix+this._s.prop1+'_'+this._s.prop3;}
if(this._s.prop22&&this._s.prop22.indexOf(wsjPrefix)!==0&&this._s.prop2!=='WSJPRO_Factiva Article'){this._s.prop26=wsjPrefix+this._s.prop22;}
this._s.prop22=this._s.prop22.replace('Community','Article');if(this._s.prop1=='Community'){this._s.prop22=this._s.prop22.replace('Article','Community');}
if(this._s.prop22&&this._s.prop22.indexOf(wsjPrefix)!==0&&this._s.prop2!=='WSJPRO_Factiva Article'){this._s.prop22=wsjPrefix+this._s.prop1+'_'+this._s.prop22;}
if(this._s.prop4&&this._s.prop4.indexOf('WSJ_')!==0){if(this._s.prop20.indexOf('BT-')==0){this._s.prop4=wsjPrefix+'article_TWire_'+articleType+this._s.prop4;}
else if(this._s.prop20.indexOf('PR-')==0){this._s.prop4=wsjPrefix+'article_PRWire_'+articleType+this._s.prop4;}
else{this._s.prop4=wsjPrefix+"article_"+articleType+this._s.prop4;if(this._s.prop2==='WSJPRO_Factiva Article'){this._s.prop4=wsjPrefix+"article_"+this._s.prop8+":"+this._s.prop4.substr(16);}}}}
if(this._s.prop20.indexOf('BT-')===0){this._s.prop8='T Newswires';}else if(this._s.prop20==='0_0_WC_samplePlan'||this._s.prop20==='0_0_WC_businessPlan'||this._s.prop20==='0_0_WC_startupCalculator'){this._s.prop8='Palo Alto';}
if(this._s.prop1=='Summaries'||this._s.prop1=='Topics')
{if(wsjPrefix==='WSJPRO_'){if(this._s.prop2.indexOf('WSJ_')!==-1){this.wsjLandingPage=true;this._s.prop8='WSJ Online';}else{this.wsjLandingPage=false;}
this._s.pageName=this._s.pageName.replace('WSJ_','');if(this._s.prop2.indexOf(wsjPrefix)!==0){this._s.prop2=wsjPrefix+this._s.prop2.replace('WSJ_','');}
if(this._s.prop26.indexOf(wsjPrefix)!==0){this._s.prop26=wsjPrefix+this._s.prop26.replace('WSJ_','');}
this._s.prop22=wsjPrefix+this._s.prop1+'_'+this._s.pageName.replace('WSJPRO_','');this._s.prop3=wsjPrefix+this._s.prop1+'_'+this._s.pageName.replace('WSJPRO_','');}else{this._s.prop3=wsjPrefix+this._s.prop1+'_'+this._s.pageName;this._s.prop22=wsjPrefix+this._s.prop1+'_'+this._s.pageName;}}
if(this._s.prop3=='Video')
{if(this._s.prop3.indexOf(wsjPrefix)!==0){this._s.prop3=wsjPrefix+this._s.prop1+'_'+'Video'+'_'+this._s.prop24;}}
if(this._s.pageName.indexOf('WSJ_')!==0&&this._s.pageName.indexOf('WSJPRO_')!==0){this._s.pageName=wsjPrefix+this._s.pageName;}
if(this._s.prop2.indexOf('WSJ_')!==0&&this._s.prop2.indexOf('WSJPRO_')!==0){if((this._s.prop20.indexOf('BT-')===0)||(this._s.prop20.indexOf('PR-')===0)){this._s.prop2=wsjPrefix+'Business';}
else{this._s.prop2=wsjPrefix+this._s.prop2;}}
if(this._s.prop19=='article'){this._s.hier1=[this._s.channel,this._s.prop1,this._s.prop2,this._s.prop22,this._s.prop3,this._s.prop20,this._s.prop4,this._s.prop6].join(",");}else{this._s.hier1=[this._s.channel,this._s.prop1,this._s.prop2,this._s.pageName,this._s.prop6].join(",");if(this._s.prop2==='Email'){this._s.prop2="WSJ_"+this._s.prop2;this._s.prop3="WSJ_"+this._s.prop1+this._s.pageName;this._s.prop22=this._s.prop3;this._s.hier1=[this._s.channel,this._s.prop24,this._s.prop1,this._s.prop2,this._s.pageName].join(",");}}
this._s.hier2=[this._s.channel,this._s.prop19,this._s.prop2,this._s.prop3].join(",");this._s.hier3=[this._s.channel,this._s.prop2,this._s.prop26,this._s.pageName].join(",");this._s.hier4=[this._s.channel,this._s.prop2,this._s.prop1].join(",");this._s.hier5=[this._s.channel,this._s.prop24,this._s.prop1,this._s.prop2,this._s.prop26].join(",");this._s.events="";if(!this._s.events){this._s.events="event12";}else{if(this._s.events.indexOf("event12")==-1){this._s.events=this._s.events?(this._s.events+",event12"):"event12";}}
if(this._s.prop19=='article'){if(this._s.events.indexOf("event18")==-1){this._s.events=this._s.events?(this._s.events+",event18"):"event18";}}
else if(this._s.prop19=='comments_tab'){if(this._s.events.indexOf("event32")==-1){this._s.events=this._s.events?(this._s.events+",event32"):"event32";}}
else if(this._s.prop19=='home page'){if(this._s.events.indexOf("event17")==-1){this._s.events=this._s.events?(this._s.events+",event17"):"event17";}}
else if(this._s.prop19=='marketing and support'){if(this._s.prop6.indexOf('reader-error')!=-1){this._s.events="event12,"+"event50";}
else if(this._s.prop6.indexOf('reader-confirm')!=-1){this._s.events="event12,"+"event49";}else{this._s.events="event12,"+"event48";if(this._s.prop1==='Customer Resources'&&this._s.pageName==='WSJ_FreeReg_ThankYou_PreVerification'){this._s.events="event42";}else if(this._s.prop1==='Customer Resources'&&this._s.pageName!=='WSJ_FreeReg_ThankYou_PreVerification'){this._s.events="event41";}}}
else if(this._s.prop1=='Research and Tools'){if(this._s.events.indexOf("event19")==-1){this._s.events=this._s.events?(this._s.events+",event19"):"event19";}}else if(this._s.prop1==="Multimedia"){this._s.events="event12,event54";}else if(this._s.prop1==="Video"&&this._s.prop19==='video_interactives'){this._s.events="event12,event54,event36";}else{if(this._s.events.indexOf("event16")==-1){this._s.events=this._s.events?(this._s.events+",event16"):"event16";}}
if(s.prop9==='preview'&&s.prop19==='article'){this._s.prop19=s.prop19+'_'+s.prop9;}if(this._s.prop20==='0_0_WC_samplePlan'||this._s.prop20==='0_0_WC_businessPlan'||s.prop20==='0_0_WC_startupCalculator'){this._s.prop19='tools_smb';}
this._s.prop49=this._s.getVisitNum();this._s.prop23=this._s.getDaysBeforeEvent();this._s.eVar3="";if(this.cookieUserType!==null){this._s.eVar3=this.cookieTracking;}
if(this._s.eVar3===null){console.info("{Tracking} could not get cookie 'TR'.");}
this._s.eVar4=this._s.pageName;this._s.eVar5="";this._s.eVar6="";if(this.link){this._s.eVar5=this.link;}
if(this.reflink){this._s.eVar6=this.reflink;}
this._s.eVar8="";if(this._s.prop18){this._s.eVar8=this._s.prop18;}
this._s.eVar11=this._s.channel;this._s.eVar25=this._s.prop2;if(this._s.pageName==='WSJPRO_Marketing Sell Page'){this._s.eVar25=wsjPrefix+this._s.prop2.substr(this._s.prop2.indexOf("_")+1)+this._s.prop26.substr(this._s.prop2.indexOf("_"));}
if(this._s.pageName==='WSJ_FreeReg_ThankYou_PreVerification'){this._s.hier1=[this._s.channel,this._s.prop1,this._s.prop2,this._s.prop26,this._s.pageName,this._s.prop5].join(",");this._s.prop9='open';this._s.prop10=this.link;this._s.prop11=this.reflink;this._s.eVar5=this._s.prop10;this._s.eVar6=this._s.prop11;}
if(wsjPrefix==='WSJPRO_'&&this._s.prop1!=='Customer Resources')
{this._s.events=this.setProductEvents(wsjPrefix);}
var dt=new Date();if(!this.weekday){this.weekday=[];this.weekday[0]="Sunday";this.weekday[1]="Monday";this.weekday[2]="Tuesday";this.weekday[3]="Wednesday";this.weekday[4]="Thursday";this.weekday[5]="Friday";this.weekday[6]="Saturday";}
this._s.eVar31=this.weekday[dt.getDay()];this._s.eVar32=dt.getHours()+":00";this._firePixelCount=this._firePixelCount+1;var s_code=this._s.t();if(s_code){this.generatePixel(s_code);}
this.generateSpotlightPixel();},setProductProperties:function(getWsjPrefix){if(getWsjPrefix==="WSJPRO_"){if(this._s.prop2==='WSJPRO_Industries'){var realPageName="";if(this._s.prop1!=='Summaries'){realPageName=getWsjPrefix+"industry_"+this._s.prop1+this._s.prop26.substr(7);}else{realPageName=getWsjPrefix+"industry_"+this._s.prop1+this._s.prop26.substr(7);}
var getIndustryBaseSection=this._s.prop26.replace('WSJPRO_','WSJPRO_Industry_');realPageName=realPageName.replace('Summaries_','');setMetaData('pagename',realPageName);setMetaData('section','Summaries');setMetaData('basesection',getIndustryBaseSection);}
if(this._s.prop19!=='article'){this._s.prop20="";}
if(this._s.prop1==='Article'){this._s.prop21="WSJ_"+this._s.prop21;}
if(this._s.prop2==='WSJPRO_Factiva Article'){if(typeof AT_VARS!='undefined'){getArticleHdln=AT_VARS.articleHeadline;getArticleBaseDocId="TP"+AT_VARS.baseDocId;getArticleType=AT_VARS.articleType;getArticleAuthors=AT_VARS.authors;getArticlePublicationName="Factiva_"+AT_VARS.publicationName;if(getArticleAuthors!==""&&getArticleAuthors!=="undefined"){getArticleAuthors=getArticleAuthors.replace('By','');getArticleAuthors=getArticlePublicationName+"_"+getArticleAuthors;}
var setPageName=getWsjPrefix+getArticlePublicationName+"_"+getArticleBaseDocId;var setaPage=getWsjPrefix+"Article_Factiva Article";if(this._s.prop19=='comments_tab'){setPageName=setPageName+'_comments';setaPage='WSJPRO_Community_Factiva Article';setMetaData('atype','WSJPRO_Community_Factiva Article');}else{setMetaData('ctype','article_factiva');setMetaData('section','Article');setMetaData('atype','WSJPRO_Article_Factiva Article');}
setMetaData('aheadline',getArticleHdln);setMetaData('author',getArticleAuthors);setMetaData('abasedocid',getArticleBaseDocId);setMetaData('csource',getArticlePublicationName);setMetaData('basesection','WSJPRO_Factiva Article_'+AT_VARS.publicationName);setMetaData('pagename',setPageName);setMetaData('apage',setaPage);}}else if(this._s.prop1==='Article'){this._s.prop8='WSJ Online';}
var pageIdIndex=this._s.pageName.indexOf(pID);if(pageIdIndex!==-1){var pageNameMinusPageId=this._s.pageName.substring(0,pageIdIndex-1);}else{var pageNameMinusPageId=this._s.pageName;}
if(this._s.prop2==='WSJPRO_Industries'){var getPagename=pageNameMinusPageId;var getNumoccurences=getPagename.match(/\_/g);var setPagenameSuffix="";var setPrefix="";if(getNumoccurences.length===2){setPrefix="_Main";}
if(pID.indexOf('View')!==-1){setPagenameSuffix="_WSJ View";}else if(pID.indexOf('Background')!==-1){setPagenameSuffix="_Background";}else if(pID.indexOf('Background')===-1&&pID.indexOf('View')===-1){setPagenameSuffix="_News";}
this._s.pageName=pageNameMinusPageId+setPrefix+setPagenameSuffix;}
this._s.server=document.location.host;}
else{this._s.prop21="WSJ_"+this._s.prop21;}},setProductEvents:function(getWsjPrefix){var setEvents="";if(this._s.prop2==='WSJPRO_Enterprise Home Page'){setEvents="event12,event17";}else if(this._s.prop2==='WSJPRO_Factiva Article'){setEvents="event12,event18";}else if(this._s.prop2==='WSJPRO_Search Results'){setEvents="event12,event20";}else if(this._s.prop2==='WSJPRO_Smart Search Module'||this._s.prop2==='WSJPRO_Dock'||this._s.prop2==='WSJPRO_Industries'||this._s.prop2==='WSJPRO_News Finder'||this._s.prop2==='WSJPRO_Today in WSJ'||this.wsjLandingPage){setEvents="event12,event16";}else if(this._s.prop1==="Multimedia"){setEvents="event12,event54";}else if(this._s.prop1==="Video"&&this._s.prop19==='video_interactives'){setEvents="event12,event54,event36";}else{if(this._s.prop19!=='comments_tab'){setEvents="event12,event18";}}
if(this._s.prop1!=='Article'||this._s.prop1!=='Search'){this._s.eVar25=getWsjPrefix+this._s.prop2.substr(this._s.prop2.indexOf("_")+1)+this._s.prop26.substr(this._s.prop2.indexOf("_"));}
return setEvents;},generateSpotlightPixel:function(){if((this.cookieSpotlightSet===null)&&(this.cookieTracking!==null)){var cookieVal=this.cookieTracking;var randomNumber=Math.floor(Math.random()*1000000);var pixelSrc='http://ad.doubleclick.net/activity;src=1373310;type=rapta615;cat=track812;u='+cookieVal+';ord='+randomNumber+'?';var pixel=dojo.create("img",{"src":pixelSrc,"width":"2","height":"2","alt":"","border":"0"});document.getElementsByTagName("body")[0].appendChild(pixel);dj.util.Cookie.setCookie('spotlightSet','true','90d+');}},generatePixel:function(pixelImg){if(!pixelImg){return;}
pixelImg=''+pixelImg;var srcBegin=pixelImg.indexOf("src=")+5;var pixelSrc=pixelImg.substring(srcBegin);var srcEnd=pixelSrc.indexOf('"');this.pixelSrc=pixelSrc.substring(0,srcEnd);var piximg=document.getElementById('s_i_'+s.fun);if(piximg){piximg.src=this.pixelSrc;}},debugPixel:function(){window.open("","stats_debugger","width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1").document.write("<script type=\"text/javascript\" src=\"/static_html_files/omniture/pixelDebug.html\"></"+"script>");}},rsi:{delayRsi:function(){this._delayRsi=true;},init:function(delayOverride){if((typeof delayOverride==="undefined"||delayOverride===false)&&this._delayRsi===true){return;}
if(typeof this._rsiInitted!=="undefined"){return;}else{this._rsiInitted=true;}
try{this.doRsi();}
catch(err){console.info("{Tracking} could not find 'DM_tab' and/or 'saveSegment'.");}},doRsi:function(){var that=this;dojo.addOnLoad(function(){that.saversicookie();});},saversicookie:function(){if(typeof DM_cat!=="undefined"){try{if(s.prop19==='article'||s.prop19==='article_preview'){DM_cat(s.channel+' > '+s.prop1+' > '+s.prop2+' > '+s.prop3);}
else{DM_cat(s.channel+' > '+s.prop1+' > '+s.prop2+' > '+s.pageName);}}catch(e){console.info("DM_CAT throws",e);}}
if(typeof DM_tag!=="undefined"){try{DM_tag();}
catch(err){console.info("{Tracking} could not find 'DM_tab' and/or 'saveSegment'.");}}}},articleCountNewWindow:function(){dj.lang.addLiveEvent(".mjLinkItemExternal","click",function(ev){dj.lang.stopEvent(ev);var targetID=(ev.target||ev.srcElement);if(targetID.getAttribute("articleid")){var id=targetID.getAttribute("articleid");dj.lang.xhrGet({url:"/epsvcs/view/content/article/articleId/{"+id+"}/articleparts/{body}",sync:false});}
if(targetID.href){window.open(targetID.href);}});},addTrackingIFrame:function(){if(this._isTIFR){return;}else{this._isTIFR=true;}
var site=(typeof dj.widget.ad.adPageSite==='undefined')?"interactive.wsj.com":dj.widget.ad.adPageSite,zone=(typeof dj.widget.ad.adPageZone==='undefined')?"default":dj.widget.ad.adPageZone,pageId=pID,d=document,e=d.createElement('iframe');e.width=0;e.height=0;e.border=0;e.alt="";e.style.visibility="hidden";e.src="/public/resources/documents/PixelTracking.html?site="+site+"&zone="+zone+"&pageId="+pageId+"&cb="+Math.floor(Math.random()*1000000);d.getElementsByTagName("body")[0].appendChild(e);},interstitial:{init:function(){console.info("{Tracking} executing interstitial.");}},googleAnalytics:{init:function(){window._gaq=(window._gaq||[]);_gaq.push(['_setAccount','UA-12114213-1']);_gaq.push(['_trackPageview']);var ga=document.createElement('script');ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';ga.setAttribute('async','true');document.documentElement.firstChild.appendChild(ga);}}};
dojo.provide("dj.util.io");(function(){var d=dojo,dju=dj.util;dju.io={lazyLoad:function(sel,evt,req,cb,ctx){dju.io.lazyInit(sel,evt,function(){d.require(req);d.addOnLoad(ctx,cb);});},lazyInit:function(sel,evt,cb,ctx){window["lazld_"+sel+evt]=d.addLiveEvent(sel,evt,function(){d.removeLiveEvent(window["lazld_"+sel+evt]);cb.apply(ctx);});}};}());<!-- fastdynapage - sbkj2kapachep05 - Sun 03/21/10 - 15:18:44 EDT -->
