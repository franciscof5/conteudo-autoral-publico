/*    HTTP Host:  static.ak.connect.facebook.com                               */
/*    Generated:  December 9th 2009 8:00:08 PM PST                             */
/*      Machine:  10.17.56.163                                                 */
/*       Source:  Local/Global Cache                                           */
/*     Location:  JIT Construction: v206026                                    */
/*       Locale:  pt_BR                                                        */
/*   Components:  js/connect/core/FB/monitorWrapper.js:r205668,js/connect/core/FB/prelude.js:r205053,js/connect/core/FB/log.js:r205053,js/connect/core/FB/class.js:r205053,js/connect/core/FB/Type.js:r205053,js/connect/core/FB/HiddenContainer.js:r205053,js/connect/core/FB/HiddenContainerLoad.js:r205053,js/connect/core/FB/Delegate.js:r205053,js/connect/core/FB/Loader.js:r205053,js/connect/core/FB/Bootstrap.js:r205053,js/api_lib/v0.4/XdCommReceiver.js:r205053 */

if (window.CavalryLogger) { CavalryLogger.start_js(["FB.monitor-wrapper","FB.Prelude","FB.Log","FB.Class","FB.Type","FB.HiddenContainer","FB.HiddenContainerLoader","FB.Delegate","FB.Loader","FB.Bootstrap","XdCommReceiver"]); }

if (!window.FB) {FB = {};} if(!FB.dynData) { FB.dynData = {"site_vars":{"canvas_client_compute_content_size_method":1,"use_postMessage":1,"use_xdProxy":0,"monitor_usage_regex":"somethingtoputhere.com","monitor_usage_rate":1,"enable_custom_href":0},"resources":{"base_url_format":"http:\/\/{0}.connect.facebook.com\/","base_cdn_url":"http:\/\/static.ak.fbcdn.net\/","api_channel":203625,"api_server":203625,"www_channel":203625,"xd_proxy":205603,"xd_comm_swf_url":"http:\/\/static.ak.fbcdn.net\/swf\/XdComm.swf","share_button":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zAB5S\/hash\/4273uaqa.gif","login_img_dark_small_short":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zF1W2\/hash\/a969rwcd.gif","login_img_dark_medium_short":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zEF9L\/hash\/156b4b3s.gif","login_img_dark_medium_long":"http:\/\/c.static.ak.fbcdn.net\/rsrc.php\/zBIU2\/hash\/85b5jlja.gif","login_img_dark_large_short":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/z1UX3\/hash\/a22m3ibb.gif","login_img_dark_large_long":"http:\/\/c.static.ak.fbcdn.net\/rsrc.php\/z7SXD\/hash\/8mzymam2.gif","login_img_light_small_short":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zDGBW\/hash\/8t35mjql.gif","login_img_light_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z38X1\/hash\/6ad3z8m6.gif","login_img_light_medium_long":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zB6N8\/hash\/4li2k73z.gif","login_img_light_large_short":"http:\/\/c.static.ak.fbcdn.net\/rsrc.php\/zA114\/hash\/7e3mp7ee.gif","login_img_light_large_long":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/z4Z4Q\/hash\/8rc0izvz.gif","login_img_white_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z900E\/hash\/di0gkqrt.gif","login_img_white_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z10GM\/hash\/cdozw38w.gif","login_img_white_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zBT3E\/hash\/338d3m67.gif","login_img_white_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zCOUP\/hash\/8yzn0wu3.gif","login_img_white_large_long":"http:\/\/c.static.ak.fbcdn.net\/rsrc.php\/zC6AR\/hash\/5pwowlag.gif","logout_img_small":"http:\/\/c.static.ak.fbcdn.net\/rsrc.php\/z2Y31\/hash\/cxrz4k7j.gif","logout_img_medium":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zAD8D\/hash\/4lsqsd7l.gif","logout_img_large":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zB36N\/hash\/4515xk7j.gif"}};} if (!FB.locale) {FB.locale = "pt_BR";} if (!FB.localeIsRTL) {FB.localeIsRTL = false;}
if(!window.FB)FB={};if(!FB.Monitor)FB.Monitor={wrapObject:function(_L0,_L1,_L2){if(typeof(_L0)!="object")return _L0;if(!FB.Monitor.loggingEnabled())return _L0;if(_L1=='FB.Debug'||_L1=='FB.HiddenContainer'||_L1=='FB.XdComm.Server'||_L1.indexOf('FBIntern')==0)return _L0;for(var key in _L0){var fcn=_L0[key];if(!_L0.hasOwnProperty(key)||typeof(fcn)!='function'||fcn.wrapped)continue;var _L5={containerName:_L1,functionName:key};_L0[key]=FB.Monitor._monitorWrapper(fcn,_L0,_L2,_L5);_L0[key].wrapped=true;}return _L0;},loggingEnabled:function(){if(FB.Monitor.loggingEnabledCache===null){var _L0=FB.dynData&&FB.dynData['site_vars']&&FB.dynData['site_vars']['monitor_usage_regex'];if(!_L0){FB.Monitor.loggingEnabledCache=false;}else{var _L1=new RegExp(_L0);var _L2=FB.dynData['site_vars']['monitor_usage_rate'];FB.Monitor.loggingEnabledCache=_L1.test(document.domain)?(Math.random()/_L2)<1:false;}}return FB.Monitor.loggingEnabledCache;},externalCallback:function(_L0){if(typeof(_L0)!='function')return _L0;return function(){var _L1=FB.Monitor.internalCallStackDepth;FB.Monitor.internalCallStackDepth=0;var _L2=Array.prototype.slice.call(arguments);var ret=_L0.apply(this,_L2);FB.Monitor.internalCallStackDepth=_L1;return ret;};},_monitorWrapper:function(fn,_L1,_L2,_L3){return function(){var _L4=Array.prototype.slice.call(arguments);context=_L2?this:(_L1||window);_L3=_L3||{containerName:'unknown',functionName:'unknown'};if(FB.Monitor.internalCallStackDepth==0)if(_L3.functionName.substr(0,1)!='_')FB.Monitor.logFunction(_L3,_L4);++FB.Monitor.internalCallStackDepth;var _L5=fn.apply(context,_L4);--FB.Monitor.internalCallStackDepth;return _L5;};},logFunction:function(_L0,_L1){var _L2=[];for(var i=0;i<_L1.length;i++){var arg=_L1[i];_L2[i]=arg?arg.toString():arg;}FB.Monitor.log("functions",_L0.containerName+"."+_L0.functionName,_L2);},logXFBML:function(_L0){var _L1={};for(var i=0;i<_L0.attributes.length;++i){var _L3=_L0.attributes[i];if(_L3.specified!==false&&_L3.nodeName&&_L3.nodeValue&&_L3.nodeName!="class")_L1[_L3.nodeName]=_L3.nodeValue.toString();}var _L4=_L0.nodeName.toLowerCase();FB.Monitor.log("tags",_L4,_L1);},log:function(_L0,_L1,_L2){var _L3={name:_L1,args:_L2};FB.Monitor.loggingQueue[_L0].push(_L3);if(!FB.Monitor.pendingTimer){setTimeout(FB.Monitor.send,FB.Monitor.TIMER_INTERVAL);FB.Monitor.pendingTimer=true;}},clearQueues:function(){var _L0=FB.Monitor.loggingQueue;FB.Monitor.pendingTimer=false;FB.Monitor.loggingQueue={tags:[],functions:[]};return _L0;},send:function(){if(FB.MonitorSender){FB.bind(FB.MonitorSender.send)();}else{FB.Monitor.TIMER_INTERVAL=FB.Monitor.TIMER_INTERVAL*1.5;setTimeout(FB.Monitor.send,FB.Monitor.TIMER_INTERVAL);}},TIMER_INTERVAL:6*1000,internalCallStackDepth:0,loggingQueue:{tags:[],functions:[]},pendingTimer:false,loggingEnabledCache:null};
if(!window.FB)FB={};FB.forEach=function(_L0,fn,_L2){if(Object.prototype.toString.apply(_L0)==='[object Array]'){if(_L0.forEach){_L0.forEach(fn);}else for(var i=0,l=_L0.length;i<l;i++)fn(_L0[i],i,_L0);}else for(var key in _L0)if(_L2||_L0.hasOwnProperty(key))fn(_L0[key],key,_L0);};FB.copy=function(_L0,_L1,_L2){FB.forEach(_L1,function(_L3,key){if(_L2||typeof _L0[key]==='undefined')_L0[key]=_L3;});};FB.copy(FB,{$:function(id){return document.getElementById(id);},TypeLoader:{NOTIFY:{},LOADED_MODULES:{},LOADED_CLASSES:{},resolve:function(_L0,_L1,_L2){for(var i=0,l=_L1.length;i<l;i++){var _L5=_L1[i];if(_L5==='')continue;if(typeof _L0[_L5]==='undefined')if(_L2){_L0[_L5]={};}else return false;_L0=_L0[_L5];}return _L0;},provide:function(_L0,_L1,_L2){FB.Monitor.wrapObject(_L1,_L0,false);var _L3=this.resolve(window,_L0.split('.'),true);if(_L2||!this.LOADED_MODULES[_L0])FB.copy(_L3,_L1,true);if(_L3._onLoad)_L3._onLoad();this.LOADED_MODULES[_L0]=true;},subclass:function(_L0,_L1,_L2){if(this.LOADED_CLASSES[_L0])return;if(_L1!=='FB.Class'&&!this.LOADED_CLASSES[_L1]){FB.Log.debug('"'+_L0+'" needs to wait for "'+_L1+'"');var _L3=FB.redo(arguments,this);this.NOTIFY[_L1]?this.NOTIFY[_L1].push(_L3):this.NOTIFY[_L1]=[_L3];return;}var _L4=this.resolve(window,_L1.split('.')),_L5=_L4.extend(_L2),_L6=this.NOTIFY[_L0],_L7=_L0.split('.'),_L8=this.resolve(window,_L7,true),_L9=_L7.pop();FB.Monitor.wrapObject(_L5.prototype,_L0,true);FB.Monitor.wrapObject(_L5,_L0,false);FB.copy(_L5,_L8);this.resolve(window,_L7)[_L9]=_L5;this.LOADED_CLASSES[_L0]=true;if(_L6){FB.forEach(_L6,function(cb){cb();});delete this.NOTIFY[_L0];}}},bind:function(){var _L0=Array.prototype.slice.call(arguments),fn=_L0.shift(),_L2=_L0.shift();var _L3=function(){++FB.Monitor.internalCallStackDepth;var _L4=fn.apply(_L2,_L0.concat(Array.prototype.slice.call(arguments)));--FB.Monitor.internalCallStackDepth;return _L4;};_L3._targets=[_L2,fn];return _L3;},redo:function(_L0,_L1){var f=Array.prototype.slice.call(_L0);f.unshift(_L1);f.unshift(_L0.callee);return FB.bind.apply(FB,f);}});FB.provide=FB.bind(FB.TypeLoader.provide,FB.TypeLoader);FB.subclass=FB.bind(FB.TypeLoader.subclass,FB.TypeLoader);
FB.provide('FB.Log',{level:3,Level:{DEBUG:3,INFO:2,WARNING:1,ERROR:0},_helper:function(){var _L0=Array.prototype.slice.call(arguments),_L1=_L0.shift(),_L2=_L0.shift();if(this.level>=_L2&&window.console)(console[_L1]||console.log).apply(console,_L0);}});FB.provide('FB.Log',{debug:FB.bind(FB.Log._helper,FB.Log,'debug',FB.Log.Level.DEBUG),info:FB.bind(FB.Log._helper,FB.Log,'info',FB.Log.Level.INFO),warn:FB.bind(FB.Log._helper,FB.Log,'warn',FB.Log.Level.WARNING),error:FB.bind(FB.Log._helper,FB.Log,'error',FB.Log.Level.ERROR)},true);
(function(){var _L0=false,_L1=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;FB.Class=function(){};FB.Class.extend=function(_L2){var _L3=this.prototype;_L0=true;var _L4=new this();_L0=false;FB.forEach(_L2,function(_L6,_L7){_L4[_L7]=typeof _L6==="function"&&typeof _L3[_L7]==="function"&&_L1.test(_L6)?(function(_L7,fn){return function(){var tmp=this._super;this._super=_L3[_L7];var ret=fn.apply(this,arguments);this._super=tmp;return ret;};})(_L7,_L6):_L6;});var _L5=function(){if(!_L0){var _L6;if(this instanceof _L5){_L6=this;}else{_L0=true;_L6=new _L5();_L0=false;}if(_L6.init)_L6.init.apply(_L6,arguments);return _L6;}};_L5.prototype=_L4;_L5.constructor=_L5;_L5.extend=FB.Class.extend;return _L5;};})();
if(!window.FB)FB={};if(!FB.Type){FB.Type={createNamespace:function(_L0){var ns=window;var _L2=_L0.split('.');for(var i=0;i<_L2.length;i++){var _L4=_L2[i];var nso=ns[_L4];if(!nso)ns[_L4]=nso={};ns=nso;}return ns;},createEnum:function(_L0,_L1,_L2){if(this.getObj(_L0))return;var cls=function(){};cls.prototype=_L1;for(var _L4 in _L1)cls[_L4]=_L1[_L4];if(_L2)cls.__flags=true;this.setObj(_L0,cls);},createClass2:function(cls,baseType){if(baseType&&typeof(baseType)=="string")baseType=eval(baseType);cls.prototype.constructor=cls;this.extend(cls,FB.Type.Methods);cls.__baseType=baseType||Object;if(baseType)cls.__basePrototypePending=true;},setObj:function(fullName,value){var i=fullName.lastIndexOf('.');var objName;var scope=window;if(i>0){var ns=fullName.substring(0,i);this.createNamespace(ns);objName=fullName.substring(i+1);scope=eval(ns);}else objName=fullName;scope[objName]=value;},getObj:function(_L0){var ns=window;var _L2=_L0.split('.');for(var i=0;i<_L2.length;i++){var _L4=_L2[i];ns=ns[_L4];if(!ns)break;}return ns;},createClass:function(_L0,_L1){if(this.getObj(_L0))return;if(arguments.length==1&&typeof(_L0)!="string"){return this._createClass(_L0);}else this.setObj(_L0,this._createClass(_L1));},_createClass:function(_L0){var cls=_L0['ctor']||function(){};if(_L0['static_ctor'])this.addStaticInit(_L0['static_ctor']);if(_L0['instance'])cls.prototype=_L0['instance'];if(_L0['static'])this.extend(cls,_L0['static']);this.createClass2(cls,_L0['base']);return cls;},addStaticInit:function(_L0){if(!FB.Type._pendingInits)FB.Type._pendingInits=[];FB.Type._pendingInits[FB.Type._pendingInits.length]=_L0;window.setTimeout(FB.Type.runPendingInits,0);},runPendingInits:function(){if(FB.Type._pendingInits){var _L0=FB.Type._pendingInits;FB.Type._pendingInits=null;var c=_L0.length;for(var i=0;i<c;i++)_L0[i]();}},extend:function(_L0,_L1){for(var _L2 in _L1)_L0[_L2]=_L1[_L2];return _L0;},getInstanceType:function(_L0){return _L0.constructor;}};FB.Type.Methods={setupBase:function(){if(this.__basePrototypePending){var _L0=this.__baseType;if(_L0.__basePrototypePending)_L0.setupBase();for(var _L1 in _L0.prototype){var _L2=_L0.prototype[_L1];if(!this.prototype[_L1])this.prototype[_L1]=_L2;}delete this.__basePrototypePending;}},constructBase:function(_L0,_L1){if(this.__basePrototypePending)this.setupBase();if(!_L1){this.__baseType.apply(_L0);}else this.__baseType.apply(_L0,_L1);},callBase:function(_L0,_L1,_L2){var _L3=this.__baseType.prototype[_L1];if(!_L2){return _L3.apply(_L0);}else return _L3.apply(_L0,_L2);},get_baseType:function(){return this.__baseType||null;}};}
FB.provide('FB.HiddenContainer',{_onLoad:function(){if(document.getElementById('FB_HiddenContainer')==null){var _L0;try{if((!document.readyState||document.readyState=="complete")&&document.body){_L0=document.createElement('div');_L0.id="FB_HiddenContainer";_L0.style.position="absolute";_L0.style.top="-10000px";_L0.style.width="0px";_L0.style.height="0px";document.body.appendChild(_L0);}}catch(e){_L0=null;}if(!_L0)document.write('<div id="FB_HiddenContainer" '+'style="position:absolute; top:-10000px; left:-10000px; width:0px; height:0px;" >'+'</div>');}},get:function(){return FB.$('FB_HiddenContainer');}});
FB.provide('FB.HiddenContainerLoader',{_onLoad:function(){FB.HiddenContainer.get();}});
FB.subclass('FB.Delegate','FB.Class',{});FB.provide('FB.Delegate',{Null:function(){},_create:function(_L0){var _L1=function(){if(_L0.length==2){return _L0[1].apply(_L0[0],arguments);}else{var _L2=_L0.slice();for(var i=0;i<_L2.length;i+=2)_L2[i+1].apply(_L2[i],arguments);return null;}};_L1._targets=_L0;return _L1;},create:function(_L0,_L1){if(!_L0)return _L1;return FB.Delegate._create([_L0,_L1]);},combine:function(_L0,_L1){if(!_L0){if(!_L1._targets)return FB.Delegate.create(null,_L1);return _L1;}if(!_L1){if(!_L0._targets)return FB.Delegate.create(null,_L0);return _L0;}var _L2=_L0._targets?_L0._targets:[null,_L0];var _L3=_L1._targets?_L1._targets:[null,_L1];return FB.Delegate._create(_L2.concat(_L3));},remove:function(_L0,_L1){if(!_L0||(_L0===_L1))return null;if(!_L1)return _L0;var _L2=_L0._targets;var _L3=null;var _L4;if(_L1._targets){_L3=_L1._targets[0];_L4=_L1._targets[1];}else _L4=_L1;for(var i=0;i<_L2.length;i+=2)if((_L2[i]===_L3)&&(_L2[i+1]===_L4)){if(_L2.length==2)return null;_L2.splice(i,2);return FB.Delegate._create(_L2);}return _L0;}});if(!window.Delegate)window.Delegate=FB.Delegate;
if(!window.FB)FB={};if(!FB.Loader)FB.Loader={loaded:{},loading:{},loadedCss:{},loadedCallback:null,onScriptLoaded:function(_L0){var c=_L0.length;for(var i=0;i<c;i++){var _L3=_L0[i];FB.Loader.loaded[_L3]=true;}if(FB.Loader.loadedCallback)window.setTimeout(function(){FB.Loader.loadedCallback(_L0);},0);},loadCssComps:function(_L0){var _L1=FB.Loader.getStaticResourceUrl('connect.php/'+FB.locale+'/css/'+_L0.join('/'));if(!this.loadedCss[_L1]){var _L2=document.createElement('link');_L2.setAttribute('rel','stylesheet');_L2.setAttribute('type','text/css');_L2.setAttribute('href',_L1);document.getElementsByTagName('head')[0].appendChild(_L2);this.loadedCss[_L1]=true;}},getStaticResourceUrl:function(_L0){var _L1=FB.dynData.resources.base_url_format;var _L2=(_L1.indexOf('https')===0)?'ssl':'static.ak';return _L1.replace('{0}',_L2)+_L0;}};
if(!FB.Bootstrap){FB.Bootstrap={requireFeatures:function(_L0,_L1){if(FB.Bootstrap.isXdChannel)return;var _L2={features:_L0,callback:FB.Monitor.externalCallback(_L1),completed:false};if(FB.Bootstrap._checkRequest(_L2))return;FB.Bootstrap._featureReqQueue.push(_L2);FB.Loader.loadedCallback=FB.Delegate.combine(FB.Loader.loadedCallback,FB.Bootstrap._onCompLoaded);FB.Bootstrap._transformFeatureList(_L0);var map={};var arr=[];var i;var c=_L0.length;var _L7=0;for(i=0;i<c;i++){var _L8=_L0[i];if(FB.Loader.loaded[_L8]){}else if(!(FB.Loader.loaded[_L8]||FB.Loader.loading[_L8])){map[_L8]=true;arr[arr.length]=_L8;}}arr.sort();var url=FB.Loader.getStaticResourceUrl('connect.php/'+FB.locale+'/js/'+arr.join('/'));FB.Bootstrap.addScript(url);},_requireFeatures:function(_L0,_L1){this.requireFeatures(_L0,FB.bind(_L1));},_checkRequest:function(req){if(!req.completed){var i=0;var _L2=req.features.length;var _L3=0;for(i=0;i<_L2;i++){var _L4=req.features[i];if(FB.Loader.loaded[_L4])_L3++;}if(_L3==_L2){req.completed=true;if(req.callback)req.callback(true);}}return req.completed;},_transformFeatureList:function(_L0){var _L1={Api:true,CanvasUtil:true,Connect:true,XFBML:true};var c=_L0.length;var _L3=false;var map={};for(var i=0;i<c;i++){map[_L0[i]]=true;if(_L1[_L0[i]])_L3=true;}if(_L3)for(var key in _L1)if(!map[key])_L0[_L0.length]=key;},ensureInit:function(_L0){if(!_L0)throw ("FB.ensureInit called without a valid callback");_L0=FB.Monitor.externalCallback(_L0);if(FB.Facebook&&FB.Facebook.get_initialized&&FB.Facebook.get_initialized().get_isReady()&&FB.Facebook.get_initialized().result)return _L0();FB.Bootstrap._requireFeatures(FB.Bootstrap.features,function(){FB.Facebook.get_initialized().waitForValue(true,_L0);});},init:function(_L0,_L1,_L2){FB.Bootstrap._requireFeatures(FB.Bootstrap.features,function(){if(FB.Facebook)FB.Facebook.init(_L0,_L1,_L2);});},addScript:function(src){var _L1;var _L2=document.getElementsByTagName('script');if(_L2){var c=_L2.length;for(var i=0;i<c;i++){_L1=_L2[i];if(_L1.src==src)return;}}_L1=document.createElement("script");_L1.type="text/javascript";_L1.src=src;var _L5=document.getElementsByTagName('HEAD')[0]||document.body;_L5.appendChild(_L1);},setLocale:function(_L0,_L1){window.FB.locale=_L0;window.FB.localeIsRTL=_L1;},_initializeXdChannel:function(){FB.Bootstrap.isXdChannel=window.location.search.indexOf(FB.Bootstrap.fbc_channel_token)>=0;},_detectDocumentNamespaces:function(){if(document.namespaces&&!document.namespaces.item['fb'])document.namespaces.add('fb');},createDefaultXdChannelUrl:function(){var _L0=location.protocol+'//'+location.hostname+location.pathname+location.search;if(location.search||location.search.length>0){_L0+='&';}else _L0+='?';_L0+='fbc_channel=1';return _L0;},_onCompLoaded:function(){var i=0;var c=FB.Bootstrap._featureReqQueue.length;for(i=0;i<c;i++)FB.Bootstrap._checkRequest(FB.Bootstrap._featureReqQueue[i]);},_onLoad:function(){this._initializeXdChannel();this._detectDocumentNamespaces();},features:["XFBML","CanvasUtil"],fbc_channel_token:'fbc_channel=1',_featureReqQueue:[]};FB.Monitor.wrapObject(FB.Bootstrap,'FB.Bootstrap');window.FB_RequireFeatures=FB.Bootstrap.requireFeatures;window.FB.init=FB.Bootstrap.init;window.FB.ensureInit=FB.Bootstrap.ensureInit;FB.Bootstrap._onLoad();}
if(!window.FBIntern)FBIntern={};if(!FBIntern.XdReceiver){FBIntern.XdReceiver={delay:100,timerId:-1,dispatchMessage:function(){var _L0=document.URL;var _L1=_L0.indexOf('#');var _L2;if(_L1>0){_L2=_L0.substring(_L1+1);}else{_L1=_L0.indexOf('fb_login&');if(_L1>0){_L2=_L0.substring(_L1+9);}else return;}var _L3='debug=1&';if(_L2.indexOf(_L3)==0)_L2=_L2.substring(_L3.length);var _L4;var _L5=null;try{var _L6=window.parent;if(_L2.indexOf('fname=')==0){var _L7=_L2.indexOf('&');var _L8=_L2.substr(6,_L7-6);if(_L8=="_opener"){_L6=_L6.opener;}else if(_L8=="_oparen"){_L6=_L6.opener.parent;}else if(_L8!="_parent")_L6=_L6.frames[_L8];_L4=_L2.substr(_L7+1);}else{_L6=_L6.parent;_L4=_L2;}_L5=_L6.FB.XdComm.Server.singleton.onReceiverLoaded;}catch(e){if(e.number==-2146828218)return;}if(_L5){_L6.FB.XdComm.Server.singleton.onReceiverLoaded(_L4);if(FBIntern.XdReceiver.timerId!=-1){window.clearInterval(FBIntern.XdReceiver.timerId);FBIntern.XdReceiver.timerId=-1;}}else if(FBIntern.XdReceiver.timerId==-1)try{FBIntern.XdReceiver.timerId=window.setInterval(FBIntern.XdReceiver.dispatchMessage,FBIntern.XdReceiver.delay);}catch(e){}}};if(!(window.FB&&FB.Bootstrap&&!FB.Bootstrap.isXdChannel))try{FBIntern.XdReceiver.dispatchMessage();}catch(e){}}(function(){var _L0=document.getElementsByTagName('script');var _L1=_L0[_L0.length-1];if(_L1!=undefined){var _L2=_L1.getAttribute('fb-api-key');var _L3=_L1.getAttribute('fb-xd-receiver');if(_L2!=null)window.setTimeout(function(){FB.init(_L2,_L3);},0);}})();

FB.Loader.onScriptLoaded(["FB.monitor-wrapper","FB.Prelude","FB.Log","FB.Class","FB.Type","FB.HiddenContainer","FB.HiddenContainerLoader","FB.Delegate","FB.Loader","FB.Bootstrap","XdCommReceiver"]);