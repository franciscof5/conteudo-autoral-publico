
LOOMIA_C=new function(){var _1="16569";var _2="static-cache.loomia.com";var _3="static-assets.loomia.com";var _4="recs-onewidget-cache.loomia.com";var _5="recs-social.loomia.com";var _6="recs-simitems-cache.loomia.com";var _7="clickstream.loomia.com";var _8="metrics.loomia.com";var _9="recs-personal.loomia.com";var _10="recs-checkout.loomia.com";var _11="recs-onewidget.loomia.com";var _12="recs-social.loomia.com";var _13="recs-simitems.loomia.com";var _14="clickstream.loomia.com";var _15="metrics.loomia.com";var _16="recs-personal.loomia.com";var _17="recs-checkout.loomia.com";if(document.location.href.substr(0,5)=="https"){var _18="https://";var _19=_18+_3+"/";var _20=_18+_11;var _21=_18+_12;var _22=_18+_13;var _23=_18+_14;var _24=_18+_15;var _25=_18+_16;var _26=_18+_17;}else{var _18="http://";var _19=_18+_2+"/";var _20=_18+_4;var _21=_18+_5;var _22=_18+_6;var _23=_18+_7;var _24=_18+_8;var _25=_18+_9;var _26=_18+_10;}
_20=_20+"/onewidget";ONEWIDGET_SOCIAL_SERVER=_21+"/onewidget";_21=_21+"/jsapi";_22=_22+"/jsapi";_23=_23+"/jsapi";_24=_24+"/jsapi";_25=_25+"/jsapi";_26=_26+"/jsapi";PURCHASE_SERVER="https://"+_13+"/jsapi";var _27="loomia.com";var _28="";var _29=new Array(6563391702,1552386631,4054209077,1552378413,4134778195,9417631467,9057873063,1563102314,4134684359,1566934074,8273817175,1552285695,9065194741,1552378618,1552314287,1552388888,6556060014,193089694,5345243108,-6563283990,1552328218);var _30=_19+_28+"images/";var _31=_19+_28+"js/";var _22=_22;var _32=_23;var _33=_32;var _34=false;var _35=1;var _36=1;var _37=0.01;return{VERSION:_1,PROTOCOL:_18,APACHE_SERVER:_19,SOCIAL_SERVER:_21,SIMITEM_SERVER:_22,ONEWIDGET_SERVER:_20,ONEWIDGET_SOCIAL_SERVER:ONEWIDGET_SOCIAL_SERVER,CLICKSTREAM_SERVER:_23,METRICS_SERVER:_24,PERSONALIZED_SERVER:_25,CHECKOUT_SERVER:_26,RATINGS_SERVER:_32,SOCIAL_PUBKEYS:_29,TRACKING_COOKIE_DOMAIN:_27,TOP_LEVEL_PATH:_28,ZOPE_BASE_URL:_33,DEBUGGING:_34,JS_PATH:_31,METERING_VALUE:_35,PAIR_RECS_METERING_VALUE:_36,TIMING_DATA_METERING_VALUE:_37,PUID_COOKIE:"_loomiaPUID",LOOMIA_TRACKING_COOKIE:"_loomiaUTrack",LOOMIA_SESSION_COOKIE:"_loomiasession",CLIENT_TRACKING_COOKIE:"_loomiaUTrack_client",SNID_COOKIE:"_loomiasnid",OPTOUT_COOKIE:"_loomiaOO",PUB_LIST_COOKIE:"_loomiaPubs",AUTH_COOKIE:"loomiaws",PUB_LIST_DELIMITER:"@@",LOOMIA_DEMUX:"loomia_demux",COOKIE_LIST:[this.LOOMIA_TRACKING_COOKIE,this.LOOMIA_SESSION_COOKIE,this.CLIENT_TRACKING_COOKIE,this.PUID_COOKIE,this.SNID_COOKIE,this.OPTOUT_COOKIE,this.PUB_LIST_COOKIE,this.LOOMIA_DEMUX],WIDGET_PAGE:_31+"widget.html",MASTER_PAGE:_31+"master.html",DIV_ID_IN_WIDGET_PAGE:"__loomia_div__",DISPLAY_DIV:"loomia_display",CSS_TEMPLATE:_19+_28+"style/style.css",CSS_PATH:_19+_28+"style/",SKIN_PATH:_19+_28+"skins/",IMAGE_PATH:_19+_28+"images/",RATE_CONTENT_METHOD:_32+"?methodName=setRating",PURCHASE_RECORDER_METHOD:PURCHASE_SERVER+"?methodName=recordPurchase",METRICS_METHOD:_24+"?methodName=addMetrics",PERSISTENCE_MARKER:"[@@]",SEARCH_KEYWORDS_LIMIT:2};};var LOOMIA_DEBUG=new function(){var _38=LOOMIA_C.DEBUGGING;var _39=navigator.userAgent.toLowerCase();var _40={version:(_39.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(_39),opera:/opera/.test(_39),msie:(/msie/.test(_39))&&(!/opera/.test(_39)),mozilla:(/mozilla/.test(_39))&&(!/(compatible|webkit)/.test(_39))};function timestamp(){var d=new Date();var _42=d.getHours().toString();var _43=addZero(d.getMinutes());var _44=addZero(d.getSeconds());var ms=d.getMilliseconds().toString();return _42+":"+_43+":"+_44+"."+ms;}
function addZero(t){if(t<10){return"0"+t.toString();}else{return t.toString();}}
return{browser:_40,d_alert:function(s){if(_38){alert(s);}},debugPrint:function(msg){if(_38){try{window.loadFirebugConsole();}
catch(e){}
if(window.console){window.console.log(msg);}else{alert(msg);}}else{return;}},debug:function(msg){if(!_38){return;}
var d=(new Date());var ts=""+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"."+d.getMilliseconds();msg=ts+" "+msg;try{window.loadFirebugConsole();}
catch(e){}
if(!(_40.msie&&_40.version<=7)&&window.console){console.log(msg);}else{try{debug_box=document.getElementById("debug_box");}
catch(e){return;}
if(!debug_box){return;}
var p=document.createElement("p");p.appendChild(document.createTextNode(timestamp()+": "+msg));debug_box.appendChild(p);}}};};var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(_51){var _52="";var _53,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;_51=Base64._utf8_encode(_51);while(i<_51.length){_53=_51.charCodeAt(i++);chr2=_51.charCodeAt(i++);chr3=_51.charCodeAt(i++);enc1=_53>>2;enc2=((_53&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else{if(isNaN(chr3)){enc4=64;}}
_52=_52+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return _52;},decode:function(_55){var _56="";var _57,chr2,chr3;var _58,enc2,enc3,enc4;var i=0;_55=_55.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<_55.length){_58=this._keyStr.indexOf(_55.charAt(i++));enc2=this._keyStr.indexOf(_55.charAt(i++));enc3=this._keyStr.indexOf(_55.charAt(i++));enc4=this._keyStr.indexOf(_55.charAt(i++));_57=(_58<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;_56=_56+String.fromCharCode(_57);if(enc3!=64){_56=_56+String.fromCharCode(chr2);}
if(enc4!=64){_56=_56+String.fromCharCode(chr3);}}
_56=Base64._utf8_decode(_56);return _56;},_utf8_encode:function(_59){_59=_59.replace(/\r\n/g,"\n");var _60="";for(var n=0;n<_59.length;n++){var c=_59.charCodeAt(n);if(c<128){_60+=String.fromCharCode(c);}else{if((c>127)&&(c<2048)){_60+=String.fromCharCode((c>>6)|192);_60+=String.fromCharCode((c&63)|128);}else{_60+=String.fromCharCode((c>>12)|224);_60+=String.fromCharCode(((c>>6)&63)|128);_60+=String.fromCharCode((c&63)|128);}}}
return _60;},_utf8_decode:function(_63){var _64="";var i=0;var c=c1=c2=0;while(i<_63.length){c=_63.charCodeAt(i);if(c<128){_64+=String.fromCharCode(c);i++;}else{if((c>191)&&(c<224)){c2=_63.charCodeAt(i+1);_64+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=_63.charCodeAt(i+1);c3=_63.charCodeAt(i+2);_64+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}}
return _64;}};var LOOMIA_UTILS=new function(){var _65="16569";var _66="static-cache.loomia.com";var _67="static-assets.loomia.com";var _68="recs-onewidget-cache.loomia.com";var _69="recs-social.loomia.com";var _70="recs-simitems-cache.loomia.com";var _71="clickstream.loomia.com";var _72="metrics.loomia.com";var _73="recs-personal.loomia.com";var _74="recs-checkout.loomia.com";var _75="recs-onewidget.loomia.com";var _76="recs-social.loomia.com";var _77="recs-simitems.loomia.com";var _78="clickstream.loomia.com";var _79="metrics.loomia.com";var _80="recs-personal.loomia.com";var _81="recs-checkout.loomia.com";if(document.location.href.substr(0,5)=="https"){var _82="https://";var _83=_82+_67+"/";var _84=_82+_75;var _85=_82+_76;var _86=_82+_77;var _87=_82+_78;var _88=_82+_79;var _89=_82+_80;var _90=_82+_81;}else{var _82="http://";var _83=_82+_66+"/";var _84=_82+_68;var _85=_82+_69;var _86=_82+_70;var _87=_82+_71;var _88=_82+_72;var _89=_82+_73;var _90=_82+_74;}
_84=_84+"/onewidget";ONEWIDGET_SOCIAL_SERVER=_85+"/onewidget";_85=_85+"/jsapi";_86=_86+"/jsapi";_87=_87+"/jsapi";_88=_88+"/jsapi";_89=_89+"/jsapi";_90=_90+"/jsapi";PURCHASE_SERVER="https://"+_77+"/jsapi";var _91="loomia.com";var _92="";var _93=new Array(6563391702,1552386631,4054209077,1552378413,4134778195,9417631467,9057873063,1563102314,4134684359,1566934074,8273817175,1552285695,9065194741,1552378618,1552314287,1552388888,6556060014,193089694,5345243108,-6563283990,1552328218);var _94=_83+_92+"images/";var _95=_83+_92+"js/";var _86=_86;var _96=_87;var _97=_96;var _98=false;var _99=1;var _100=1;var _101=0.01;var _102=800;var _103=525;var _104,loomia_CheckInterval;var _105="_x_";var _106="||";var _107=2;return{name:"Loomia JS Utilities",stacktrace:function(){var s="";for(var a=arguments.caller;a!=null;a=a.caller){s+="->"+funcname(a.callee)+"\n";if(a.caller==a){s+="*";break;}}
return s;},contains:function(a,obj){if(typeof(a)!="undefined"&&a.length>0){var i=a.length;while(i--){if(a[i]===obj){return true;}}
return false;}else{return false;}},timestamp:function(){var d=(new Date());var ts=""+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"."+d.getMilliseconds();return ts;},debugout:function(s){LOOMIA_DEBUG.debug(s);},setCookie:function(name,_111,_112,path,_114,_115){document.cookie=name+"="+escape(_111)+((_112)?"; expires="+_112:"")+((path)?"; path="+path:"")+((_114)?"; domain="+_114:"")+((_115)?"; secure="+_115:"");},setCookieIfAbsent:function(name,_116,_117,path,_118,_119){var _120=this.getCookie(name);if(_120!=null&&_120!=""){return _120;}else{this.setCookie(name,_116,_117,path,_118,_119);return _116;}},getCookie:function(name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg){return this.getCookieVal(j);}
var i=document.cookie.indexOf(" ",i)+1;if(i==0){break;}}
return"";},getCookieVal:function(_125){var _126=document.cookie.indexOf(";",_125);if(_126==-1){_126=document.cookie.length;}
return unescape(document.cookie.substring(_125,_126));},deleteCookie:function(name,path,_127){if(this.getCookie(name)){document.cookie=name+"="+((path)?"; path="+path:"")+((_127)?"; domain="+_127:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";}},expDate:function(_128){var _129=new Date();var _130=new Date();_130.setTime(_129.getTime()+3600000*24*_128);var _131=_130.toGMTString();return _131;},useLoadingImage:function(){var _132=navigator.userAgent.toLowerCase();if(this.loomia_check("safari",_132)){return false;}else{return true;}},loomia_check:function(sub,_134){place=_134.indexOf(sub)+1;return place;},trackingCookie:function(tag){return(this.randomUsername());},randomSessionCookie:function(N){if(N==null){N=4;}
var r1=Math.random().toString().substring(2,7);var r2=Math.random().toString().substring(2,7);var _139=""+r1+r2+"_"+this.randNString(N);return _139;},randNString:function(N){var s="";for(var i=0;i<N;i++){s=s+Math.floor(Math.random()*10);}
return s;},randomUsername:function(tag){var d=new Date();var x=10000*d.getSeconds()+1000*(d.getHours()/10)+d.getMilliseconds();var r=Math.ceil(100000*Math.random());var _142=r.toString()+"_"+x.toString();if(typeof tag!="undefined"&&tag!=null){_142=_142+"_"+tag;}
return _142;},splitArray:function(_143,N){if(_143.length<=N){return _143;}
var _144=0;var _145=0;var _146=[];var _147=[];for(var i=0;i<_143.length;i++){_147[_144]=_143[i];_144++;if(_144==N){_146[_145]=_147;_145++;_144=0;var _147=[];}}
if(_144>0){_146[_145]=_147;}
return _146;},getQueryVariables:function(_148){if(!_148){_148=window.location.search.substring(1);}
var vars=_148.split("&");var _150={};for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");_150[pair[0]]=pair[1];}
return _150;},csvToArray:function(_152){if(!_152){return null;}
var _153=_152.split(",");var _154=new Array();counter=0;for(var i=0;i<_153.length;i++){str=_153[i];str=str.replace(/^\s*/,"").replace(/\s*$/,"");if(str.length>0){_154[counter++]=str;}}
return _154;},fbs_share:function(){var link=location.href;var _156=document.title;var url="http://"+_69+"/fb?methodName=sswshare_dialog&link="+encodeURIComponent(link)+"&title="+encodeURIComponent(_156)+"&publisher_key="+L_VARS.publisher_key;if(L_VARS.guid&&L_VARS.guid!=""){url+="&guid="+encodeURIComponent(L_VARS.guid);}
window.open(url,"sharer","toolbar=0,status=0,width=626,height=510,resizable=1");return false;},encodeURIForFB:function(url){var _158="@@EQ@@";var benc=Base64.encode(decodeURIComponent(url));return benc.replace(/=/g,_158);},fbs_login:function(_160,_161,_162){var d=document;var _163="";if(_161){_163=_106+"publisher_key"+_105+_161;}
if(_162!=""){var f=_162;}else{var f="http://www.facebook.com/login.php?api_key="+_160+"&v=1.0&popup=true&next=?params=methodName"+_105+"sswlogin"+_163+_106+"url"+_105;}
var p="";_104=window.open(f+p,"login","toolbar=0,status=0,resizable=1,width="+_102+",height="+_103);loomia_CheckInterval=setInterval("LOOMIA_UTILS.checkPopupStatus()",200);return false;},checkPopupStatus:function(){if(_104&&_104.closed){clearInterval(loomia_CheckInterval);if(_107>0){document.location.reload();_107-=1;}}},get:function(el){return document.getElementById(el);},toggle:function(){for(var i=0,el;el=this.get(arguments[i]);i++){el.style.display=(el.style.display!="none"?"none":"");}},switchTab:function(id,_167){if(id!=_167){this.get("tab_"+id).className="selected";this.get("loomia_"+id).style.display="block";this.get("tab_"+_167).className="";this.get("loomia_"+_167).style.display="none";}
return false;},onclick_handler:function(_168){try{if(L_VARS.onclick_args){params=L_VARS.onclick_args;}else{params=_168;}
if(L_VARS.onclick_handler){L_VARS.onclick_handler(params);}
return true;}
catch(e){return true;}},obj2query:function(obj,_169,_170){if(typeof obj!="object"){return"";}
if(arguments.length==1){_169=/\.php$/.test(document.location.href);}
var rv="";for(var prop in obj){if(obj.hasOwnProperty(prop)){var _173=_170?_170+"."+prop:prop;if(obj[prop]instanceof Array){for(var i=0;i<obj[prop].length;i++){if(typeof obj[prop][i]=="object"){rv+="&"+LOOMIA_UTILS.obj2query(obj[prop][i],_169,_173);}else{rv+="&"+encodeURIComponent(_173)+(_169?"[]":"")+"="+encodeURIComponent(obj[prop][i]);}}}else{if(obj[prop]instanceof Date){rv+="&"+encodeURIComponent(_173)+"="+obj[prop].getTime();}else{if(obj[prop]instanceof Object){if(obj.toString&&obj.toString!==Object.prototype.toString){rv+="&"+encodeURIComponent(_173)+"="+encodeURIComponent(obj[prop].toString());}else{rv+="&"+LOOMIA_UTILS.obj2query(obj[prop],_169,_173);}}else{rv+="&"+encodeURIComponent(_173)+"="+encodeURIComponent(obj[prop]);}}}}}
return rv.replace(/^&/,"");},_checkForObject:function(str){if(!str){return false;}
try{myval=typeof(eval(str));if(myval!="undefined"){return true;}}
catch(e){}
return false;},_encode:function(s){for(var c,i=-1,l=(s=s.split("")).length,o=String.fromCharCode;++i<l;s[i]=(c=s[i].charCodeAt(0))>=127?o(192|(c>>>6))+o(128|(c&63)):s[i]){}
return s.join("");},_decode:function(s){for(var a,b,i=-1,l=(s=s.split("")).length,o=String.fromCharCode,c="charCodeAt";++i<l;((a=s[i][c](0))&128)&&(s[i]=(a&252)==192&&((b=s[i+1][c](0))&192)==128?o(((a&3)<<6)+(b&63)):o(128),s[++i]="")){}
return s.join("");},utf8_decode:function(s){if(document.characterSet){dcs=document.characterSet;}else{if(document.charset){dcs=document.charset;}}
if(dcs&&dcs.indexOf("8859")>-1){return Base64._utf8_decode(s);}else{return s;}},execute_when_loaded:function(func){var _176;var _177=arguments;var _178=_177[1];var _179=0;var _180;if(_177.length==3){_180=_177[2];}
function executeCheck(){LOOMIA_DEBUG.debug("Execute when loaded: Checking for "+_178);_179+=1;if(!(LOOMIA_UTILS._checkForObject(_178)||_179==_180)){if(!_176){_176=setInterval(executeCheck,50);}
return;}
clearInterval(_176);func();return;}
return executeCheck();},execute_until_loaded:function(func){var _181;var _182=arguments;var _183=_182[1];var _184=0;var _185;if(_182.length==3){_185=_182[2];}
function executeCheck(){if(LOOMIA_UTILS._checkForObject(_183)){clearInterval(_181);return;}else{if(_184==_185){clearInterval(_181);return;}else{func();}
if(!_181){_181=setInterval(executeCheck,50);}}
_184+=1;return;}
return executeCheck();},execute_when_present:function(func,_186){var temp=_186;var _188;function executeCheck(_186){var _189=document.getElementById(_186);LOOMIA_UTILS.debugout("checking for "+_186);function _ec(){executeCheck(_186);}
if(!_189){if(!_188){_188=setInterval(_ec,50);}
return;}
clearInterval(_188);func();}
executeCheck(temp);}};};function loomia_setCookie(name,_190,_191,path,_192,_193){LOOMIA_UTILS.setCookie(name,_190,_191,path,_192,_193);}
function loomia_deleteCookie(name,path,_194){LOOMIA_UTILS.deleteCookie(name,path,_194);}
function loomiaShowTab(id,_195){LOOMIA_UTILS.switchTab(id,_195);}
function loomia_toggle(id){LOOMIA_UTILS.toggle(id);}
function fbs_share(){LOOMIA_UTILS.fbs_share();}
function fbs_login(_196,_197,_198){LOOMIA_UTILS.fbs_login(_196,_197,_198);}
function _objToJSON(o){this.object=o;}
function _arrayToJSON(o){this.array=o;}
(function(){var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},s={array:function(x){var a=["["],b,f,i,l=x.length,v;for(i=0;i<l;i+=1){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=="string"){if(b){a[a.length]=",";}
a[a.length]=v;b=true;}}}
a[a.length]="]";return a.join("");},"boolean":function(x){return String(x);},"null":function(x){return"null";},number:function(x){return isFinite(x)?String(x):"null";},object:function(x){if(x){if(x instanceof Array){return s.array(x);}
var a=["{"],b,f,i,v;for(i in x){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=="string"){if(b){a[a.length]=",";}
a.push(s.string(i),":",v);b=true;}}}
a[a.length]="}";return a.join("");}
return"null";},string:function(x){if(/["\\\x00-\x1f]/.test(x)){x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16);});}
return"\""+x+"\"";}};_objToJSON.prototype.toJSONString=function(){return s.object(this.object);};_arrayToJSON.prototype.toJSONString=function(){return s.array(this.array);};})();function toJSONString(obj){if(obj instanceof Array){return(new _arrayToJSON(obj)).toJSONString();}
return(new _objToJSON(obj)).toJSONString();}
var LOOMIA_W=new function(){var _202=LOOMIA_C.PERSONALIZED_SERVER+"?methodName=getRatingRecommendations&protocol="+LOOMIA_C.PROTOCOL;var _203=LOOMIA_C.CHECKOUT_SERVER+"?methodName=getCheckoutRecommendations&protocol="+LOOMIA_C.PROTOCOL;var _204=LOOMIA_C.SIMITEM_SERVER+"?methodName=getSimilarItems&protocol="+LOOMIA_C.PROTOCOL;var _205=LOOMIA_C.SOCIAL_SERVER+"?methodName=getSimilarItems&protocol="+LOOMIA_C.PROTOCOL;var _206=LOOMIA_C.ONEWIDGET_SERVER+"?methodName=getRecs&protocol="+LOOMIA_C.PROTOCOL;var _207=LOOMIA_C.ONEWIDGET_SOCIAL_SERVER+"?methodName=getRecs&protocol="+LOOMIA_C.PROTOCOL;var _208="user";var _209;function styleIFrame(){style="<style type=\"text/css\">\n .recsContainer { position:relative; }\n #loadingImage { position:absolute; top:10%; left:40%; }\n </style>";document.write(style);}
function handleIframe(){var limg=document.getElementById("loadingImage");limg.style.visibility="hidden";}
function getNumber(_211,_212){if(_211&&_211>0){if(_212){return"&limit="+_211;}else{return"&number="+_211;}}else{return"";}}
function getAudit(_213){if(_213==1){return"&audit=1";}else{return"";}}
function getIncludeList(_214,_215){var il="";if(_214){if(_214.length>0){for(i=0;i<_214.length;i++){il=il+"&include_list="+_214[i];}
if(_215){il+="&operator="+getMatchType(_215);}}else{il=il+"&includes="+encodeURIComponent(toJSONString(_214));if(_215){il+="&include_match="+encodeURIComponent(toJSONString(_215));}}}
return il;}
function getExcludeList(_217){var el="";if(_217){if(_217.length>0){for(i=0;i<_217.length;i++){el=el+"&exclude_list="+_217[i];}}else{el=el+"&excludes="+encodeURIComponent(toJSONString(_217));}}
return el;}
function getGlobalMatch(_218){if(_218){return"&global_match="+_218;}else{return"";}}
function getMatchType(_219){try{if(_219.toLowerCase()=="all"){return"and";}else{if(_219.toLowerCase()=="any"){return"or";}else{return"";}}}
catch(e){return"";}}
function getQueryParams(_220){var _221="";if(_220&&typeof(_220)=="object"){for(qp in _220){_221=_221+"&qp_"+encodeURIComponent(qp)+"="+encodeURIComponent(_220[qp]);}}
return _221;}
function getMostViewed(_222){if(_222==="1"||_222===1){return"&usemostviewed=1";}else{if(_222==="0"||_222===0){return"&usemostviewed=0";}else{return"";}}}
function getUseRandom(_223){if(_223==="1"||_223===1){return"&random_recs=1";}else{if(_223==="0"||_223===0){return"&random_recs=0";}else{return"";}}}
function getZone(zone){if(typeof(zone)!="undefined"&&zone&&!isNaN(parseInt(zone))){return"&zone="+zone;}else{return"";}}
function _getSearchKeywords(_225,_226,_227){var _228=_225.split("?");var _229=_228[1];var _230=[];var sep="+";LOOMIA_DEBUG.debug("Getting search keywords for "+_226+" from query string "+_229);if(_229){var kv=LOOMIA_UTILS.getQueryVariables(_229);var _233=decodeURIComponent(kv[_226]);var _234=_233.split(sep);var _235="";for(var i=0;i<_234.length;i++){_235=_235+_234[i]+" ";}
_235=_235.substr(0,(_235.length-1));LOOMIA.display_keywords=_235;if(_233.indexOf("\"")!=-1){var _236=_233.split("\"");for(i=0;i<_236.length;i++){var t1=_236[i];if(t1.length>0&&(t1.indexOf(sep)==0||t1.lastIndexOf(sep)==(t1.length-1))){second_cut=t1.split(sep);for(j=0;j<second_cut.length;j++){t2=second_cut[j];if(t2.length>0){_230.push(t2);}}}else{if(t1.length>0){_230.push(t1.replace(sep," ","g"));}}}}else{_230=_233.split(sep);}
function cmp_len(a,b){return b.length-a.length;}
_230=_230.sort(cmp_len);if(_227&&parseInt(_227)>0){_230=_230.slice(0,_227);}}
LOOMIA_DEBUG.debug("Got search keywords: "+_230);return _230;}
function _getReferrer(_238,_239){LOOMIA_DEBUG.debug("Checking if referrer is in pub config");if(_239&&_239.referrers){for(var i=0;i<_239.referrers.length;i++){r=_239.referrers[i];if(_238.indexOf(r.domain)>-1){LOOMIA_DEBUG.debug("referrer match!");return r;}}}
return false;}
function getMapset(_240){if(typeof(_240)=="string"&&_240.length<=64){return"&mapset="+encodeURIComponent(_240);}else{return"";}}
function deloomify_qs(url){if(typeof(url)=="string"){re=/&?loomia_([a-z]+)=([a-z][0-9\.]+:?)+&?/;url=url.replace(re,"");re2=/[&|\?]$/;url=url.replace(re2,"");return url;}else{return url;}}
function _loomia_addScript(url,_241){var _242;if(_241!=null){_242=LOOMIA_UTILS.get(_241);}else{_242=document.getElementsByTagName("HEAD")[0];}
if(!_242){return;}
var _243=document.createElement("SCRIPT");if(!_243){return;}
_243.src=url;LOOMIA_DEBUG.debug("Adding script to "+url);_242.appendChild(_243);}
function validateLVARS(obj,_244){if(obj==null){return null;}
if(!_244){_244=deloomify_qs(window.location.href);}
if(obj.publisher_key==null){return;}
if(obj.guid==null||obj.guid==""){obj.guid=_244;}
if(obj.number==null){obj.number=false;}
if(obj.include_list==null){obj.include_list=false;}
if(obj.exclude_list==null){obj.exclude_list=false;}
if(obj.include_match==null){obj.include_match=false;}
if(obj.global_match==null){obj.global_match=false;}
if(obj.query_params==null){obj.query_params=false;}
if(obj.audit==null){obj.audit=false;}
if(obj.zone==null){obj.zone=false;}
return obj;}
function _onewidget(_245,guid,_247,_248,_249,_250,_251,_252,_253,_254,_255,_256,zone,_257){is_abtest_preview=(zone<0);limit=getNumber(_247,true);guid=deloomify_qs(guid);guid=encodeURIComponent(guid);il=getIncludeList(_248,_250);el=getExcludeList(_249,_251);glob=getGlobalMatch(_251);mv=getMostViewed(_252);rr=getUseRandom(_254);param_list=getQueryParams(_255);_256=getAudit(_256);zone_qs=getZone(zone);_257=getMapset(_257);var _258="";var _259=LOOMIA.getPubConfig(_245);var _260=_getReferrer(document.referrer,_259);if(_260){var _261=_getSearchKeywords(document.referrer,_260.keyword_param);LOOMIA.search_keywords=_261;if((_260.keyword_param!=""&&_261=="")||(LOOMIA.search_keywords=="undefined")){}else{var w=LOOMIA.getWidgetByZone(zone);if(w){w.zone=_260.zone;}
zone_qs="&zone="+_260.zone;if(_261!=""){LOOMIA_DEBUG.debug("LOOMIA.search keywords="+LOOMIA.search_keywords);var _263=_261.slice(0,LOOMIA_C.SEARCH_KEYWORDS_LIMIT);_258="&keywords="+encodeURIComponent(toJSONString(_263));}}}
if(_253==null){_253="loomia_display";}
var nc="&nc="+String(Math.random()).substr(2,6);var _265=_206;if(LOOMIA_UTILS.contains(LOOMIA_C.SOCIAL_PUBKEYS,_245)){_265=_207;}
var url=_265+"&guid="+guid+"&publisher_key="+_245+limit+il+el+glob+mv+rr+param_list+_256+zone_qs+_257+_258+nc;url+="&anchorid="+_253;if(is_abtest_preview){url+="&_excache=1";}
if(LOOMIA_UTILS.get(_253)){_loomia_addScript(url);}
return url;}
return{HTMLRECS_URL:_202,CHECKOUTRECS_URL:_203,SIMITEMS_URL:_204,SOCIALRECS_URL:_205,ONEWIDGET_URL:_206,request_url:_209,deloomify_qs:deloomify_qs,addScript:_loomia_addScript,getReferrer:_getReferrer,getSearchKeywords:_getSearchKeywords,_similarItems:function(obj){obj=validateLVARS(obj);if(obj==null){return;}
guid=encodeURIComponent(obj.guid);var _266=getNumber(obj.number,true);var il=getIncludeList(obj.include_list,obj.include_match);var el=getExcludeList(obj.exclude_list,obj.global_match);var glob=getGlobalMatch(obj.global_match);var mv=getMostViewed(obj.most_viewed);var rr=getUseRandom(obj.use_random);var _270=getQueryParams(obj.query_params);var _271=getAudit(obj.audit);var zone=getZone(obj.zone);var nc="&nc="+String(Math.random()).substr(2,6);var _272=obj.publisher_key;var _273=_204;if(LOOMIA_UTILS.contains(LOOMIA_C.SOCIAL_PUBKEYS,_272)){_273=_205;}
var url=_273+"&publisher_key="+obj.publisher_key+"&guid="+guid+_266+il+el+glob+mv+rr+_270+_271+zone+nc;var _274;if(obj.anchor){_274=obj.anchor;}
if(_274){url=url+"&anchorid="+_274;_loomia_addScript(url,_274);}else{document.write("<script type=\"text/javascript\" src=\""+url+"\"></"+"script>");}
_209=url;return url;},_widget:function(obj){obj=validateLVARS(obj);if(obj==null){return;}
_209=_onewidget(obj.publisher_key,obj.guid,obj.number,obj.include_list,obj.exclude_list,obj.include_match,obj.global_match,obj.most_viewed,obj.anchor,obj.use_random,obj.query_params,obj.audit,obj.zone,obj.mapset);return _209;},_recommendations:function(obj,_275){if(_275==LOOMIA_W.HTMLRECS_URL){obj=validateLVARS(obj);}else{obj=validateLVARS(obj,"");}
if(obj==null){return;}
var _276=getNumber(obj.number,false);var guid=encodeURIComponent(obj.guid);var il=getIncludeList(obj.include_list,obj.include_match);var el=getExcludeList(obj.exclude_list);var glob=getGlobalMatch(obj.global_match);var mv=getMostViewed(obj.most_viewed);var rr=getUseRandom(obj.use_random);var _277=getQueryParams(obj.query_params);var _278=getAudit(obj.audit);var zone=getZone(obj.zone);var _279=getMapset(obj.mapset);var _280=null;var _281="";var puid="";var _283="";var _284="";var _285="";var _286=LOOMIA_C.AUTH_COOKIE;var hash=LOOMIA_UTILS.getCookie(_286);try{var qs=LOOMIA_UTILS.getQueryVariables();}
catch(e){var qs=false;}
if(obj.userid){puid="&puid="+obj.userid;}
if(_275==_202){if(obj.recommendations_only==1||obj.recommendations_only=="1"){_281="&include_popular=0";}else{_281="&include_popular=1";}}
if(_275==_202&&obj.version==1){_283="&version=1";}
if(hash&&hash.length>0){if(hash.substring(0,1)=="\""){hash=hash.substring(1);}
l=hash.length;if(hash.slice(l-1)=="\""){hash=hash.slice(0,-1);}}
if(qs&&(typeof(qs["asegment"])!="undefined")){if(qs["asegment"]==0){obj.ab_type="internal";obj.ab_div="epiphany_recs";}else{if(qs["asegment"]==100){obj.ab_type="debug";obj.ab_div="epiphany_recs";}}}
if((obj.ab_type=="internal"||obj.ab_type=="external"||obj.ab_type=="debug")&&obj.ab_div){_284="&ab_type="+obj.ab_type+"&ab_div="+encodeURIComponent(obj.ab_div);}
var _289=obj.guids;if(_289){if(typeof _289=="string"){_285="&cart_items="+encodeURIComponent(_289);}else{if(typeof _289=="object"&&typeof _289.length=="number"){for(g=0;g<_289.length;g++){_285+="&cart_items="+encodeURIComponent(_289[g]);}}}}
if(guid){guid="&guid="+guid;}else{guid="";}
var nc="&nc="+String(Math.random()).substr(2,6);var url=_275+"&publisher_key="+obj.publisher_key+_276+_281+mv+guid+"&auth_token="+hash.toString()+puid+il+el+glob+_285+_283+rr+_284+_277+_278+zone+nc+_279;if(obj.anchor){_280=obj.anchor;}
if(_280){url=url+"&anchorid="+_280;_loomia_addScript(url,_280);}else{document.write("<script type=\"text/javascript\" src=\""+url+"\"></"+"script>");}
this.request_url=url;return url;}};};function loomia_similarItems(obj){return LOOMIA_W._similarItems(obj);}
function loomia_widget(obj){return LOOMIA.create(obj);}
function loomia_recommendations(obj){return LOOMIA_W._recommendations(obj,LOOMIA_W.HTMLRECS_URL);}
function loomia_checkoutRecommendations(obj){return LOOMIA_W._recommendations(obj,LOOMIA_W.CHECKOUTRECS_URL);}
function loomia_socialRecommendations(obj){return LOOMIA_W._recommendations(obj,LOOMIA_W.SOCIALRECS_URL);}
loomia_similarItems(L_VARS);