if (self.CavalryLogger) { CavalryLogger.start_js(["6c8C2"]); }

__d("ProfileTabConst",[],(function a(b,c,d,e,f,g){f.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RECIPES:"recipes",RESUME:"resume",REVIEWS:"reviews",SAVED_FOR_LATER:"saved",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TIMELINE:"timeline",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ENDORSEMENTS:"endorsements",ISSUES:"issues",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"};}),null);
__d("InstanceProxy",[],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$InstanceProxy1=i;}h.prototype.getInstance=function(){"use strict";return this.$InstanceProxy1;};h.prototype.setInstance=function(i){"use strict";this.$InstanceProxy1=i;};f.exports=h;}),null);
__d('rayInterceptsBox',['invariant'],(function a(b,c,d,e,f,g,h){function i(k,l){var m=Object.keys(k);l.forEach(function(n){m.indexOf(n)!==-1||h(0);typeof k[n]==='number'||h(0);});}var j={check:function k(l,m){i(l,['minX','maxX','minY','maxY']);i(m,['x','y','dx','dy']);l.maxX>l.minX&&l.maxY>l.minY||h(0);if(m.dx===0&&m.dy===0)return false;if(m.x>=l.minX&&m.x<=l.maxX&&m.y>=l.minY&&m.y<=l.maxY)return true;var n=(l.minX-m.x)/m.dx,o=(l.maxX-m.x)/m.dx,p=(l.minY-m.y)/m.dy,q=(l.maxY-m.y)/m.dy,r=Math.max(Math.min(n,o),Math.min(p,q)),s=Math.min(Math.max(n,o),Math.max(p,q));if(r<0)return false;if(r>s)return false;return true;}};f.exports=j;}),null);
__d('AdsMouseStateStore',['invariant','$','Arbiter','Event','EventEmitter','Run','SubscriptionsHandler','Vector','ge','keyMirrorRecursive','rayInterceptsBox','throttle'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=30,l=500,m='pagelet_ego_pane',n=c('keyMirrorRecursive')({STATIONARY:'',INTENT:'',HOVER:'',NO_INTENT:''});function o(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(q){var r=Math.random()*1000;return {x:r,y:r};}}i=babelHelpers.inherits(p,c('EventEmitter'));j=i&&i.prototype;function p(){var q=arguments.length<=0||arguments[0]===undefined?m:arguments[0],r=arguments.length<=1||arguments[1]===undefined?l:arguments[1];j.constructor.call(this);this.destroy=function(){if(this.$AdsMouseStateStore8)this.$AdsMouseStateStore8.release();this.removeAllListeners();}.bind(this);this.onPageTransition=function(event){this.$AdsMouseStateStore10();}.bind(this);this.onMouseMove=function(event){this.calculateState(o(event));}.bind(this);this.$AdsMouseStateStore7=q;this.$AdsMouseStateStore10();this.$AdsMouseStateStore8=new (c('SubscriptionsHandler'))().addSubscriptions(c('Event').listen(document,'mousemove',c('throttle')(this.onMouseMove,r)),c('Arbiter').subscribe('page_transition',this.onPageTransition));c('Run').onLeave(this.destroy);}p.prototype.$AdsMouseStateStore10=function(){this.$AdsMouseStateStore1=n.STATIONARY;this.$AdsMouseStateStore2=this.$AdsMouseStateStore3=0;this.$AdsMouseStateStore4=Date.now();this.$AdsMouseStateStore5=this.$AdsMouseStateStore7;this.$AdsMouseStateStore6=Infinity;};p.prototype.getState=function(){return this.$AdsMouseStateStore1;};p.prototype.updateRhcID=function(q){c('$')(q)||h(0);this.$AdsMouseStateStore5=q;};p.prototype.getRhcID=function(){return this.$AdsMouseStateStore5;};p.prototype.__updateMousePos=function(q){this.$AdsMouseStateStore2=q.x;this.$AdsMouseStateStore3=q.y;};p.prototype.isRhcPresent=function(){if(!c('ge')(this.$AdsMouseStateStore5))return false;var q=this.getRhcDimensions();return q.y>0&&q.x>0;};p.prototype.getRhc=function(){return c('$')(this.$AdsMouseStateStore5);};p.prototype.getRhcPosition=function(){return c('Vector').getElementPosition(this.getRhc());};p.prototype.getRhcScreenPos=function(){var q=c('Vector').getScrollPosition(),r=this.getRhcPosition();return {x:r.x-q.x,y:r.y-q.y};};p.prototype.getRhcDimensions=function(){return c('Vector').getElementDimensions(this.getRhc());};p.prototype.getPointToRectSquareDist=function(){return this.$AdsMouseStateStore6;};p.prototype.isPointWithinDist=function(q){var r=this.getPointToRectSquareDist();return r<=q*q;};p.prototype.getRhcBoundingBox=function(){var q=this.getRhcDimensions(),r=this.getRhcScreenPos();return {minX:r.x,maxX:r.x+q.x,minY:r.y,maxY:r.y+q.y};};p.prototype.$AdsMouseStateStore11=function(q){var r=this.getRhcBoundingBox(),s={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2},t=Math.abs(r.minX-r.maxX),u=Math.abs(r.minY-r.maxY),v=Math.max(Math.abs(q.x-s.x)-t/2,0),w=Math.max(Math.abs(q.y-s.y)-u/2,0);this.$AdsMouseStateStore6=v*v+w*w;};p.prototype.isPosContainedInRhc=function(q){var r=this.getRhcBoundingBox();return (q.x>=r.minX&&q.x<=r.maxX&&q.y>=r.minY&&q.y<=r.maxY);};p.prototype.hasMovedMinDistance=function(q){var r=q.x-this.$AdsMouseStateStore2,s=q.y-this.$AdsMouseStateStore3;return r*r+s*s>=k*k;};p.prototype.tooSoon=function(){return Date.now()-this.$AdsMouseStateStore4<l;};p.prototype.$AdsMouseStateStore12=function(){this.$AdsMouseStateStore4=Date.now();};p.prototype.calculateState=function(q){if(this.tooSoon())return;this.$AdsMouseStateStore12();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(q)){this.transitionToState(n.HOVER);this.$AdsMouseStateStore6=0;this.__updateMousePos(q);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(q)){this.transitionToState(n.STATIONARY);return;}this.$AdsMouseStateStore11(q);var r=this.isMovingTowardsRhc(q)?n.INTENT:n.NO_INTENT;this.transitionToState(r);this.__updateMousePos(q);this.scheduleCheckup();};p.prototype.isMovingTowardsRhc=function(q){var r={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};if(this.isPosContainedInRhc(r))return true;var s=this.getRhcBoundingBox(),t={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3,dx:q.x-this.$AdsMouseStateStore2,dy:q.y-this.$AdsMouseStateStore3};return c('rayInterceptsBox').check(s,t);};p.prototype.scheduleCheckup=function(){var q={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};setTimeout(function(){this.calculateState(q);}.bind(this),l*1.5);};p.prototype.transitionToState=function(q){if(q===this.$AdsMouseStateStore1)return;this.$AdsMouseStateStore1=q;this.emit('change');};p.get=function(){if(!p.$AdsMouseStateStore13)p.$AdsMouseStateStore13=new p();return p.$AdsMouseStateStore13;};p.STATES=n;p.MIN_MOVE_DISTANCE=k;p.THROTTLE_TIME=l;f.exports=p;}),null);
__d("ScriptPathState",["Arbiter"],(function a(b,c,d,e,f,g){var h,i,j,k,l=100,m={setIsUIPageletRequest:function n(o){j=o;},setUserURISampleRate:function n(o){k=o;},reset:function n(){h=null;i=false;j=false;},_shouldUpdateScriptPath:function n(){return i&&!j;},_shouldSendURI:function n(){return Math.random()<k;},getParams:function n(){var o={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)o.user_uri=h.substring(0,l);}else o.no_script_path=1;return o;}};c("Arbiter").subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString();});f.exports=b.ScriptPathState=m;}),null);
__d('AjaxPipeRequest',['Arbiter','AsyncRequest','BigPipe','CSS','DOM','Env','PageEvents','PageletSet','ScriptPathState','URI','containsNode','ge','goOrReplace','performance','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){var h,i=0;function j(m,n){var o=c('ge')(m);if(!o)return;if(!n)o.style.minHeight='100px';var p=c('PageletSet').getPageletIDs();for(var q=0;q<p.length;q++){var r=p[q];if(c('containsNode')(o,c('ge')(r)))c('PageletSet').removePagelet(r);}c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONBEFORECLEARCANVAS);c('DOM').empty(o);c('Arbiter').inform('pagelet/destroy',{id:null,root:o});}function k(m,n){var o=c('ge')(m);if(o&&!n)o.style.minHeight='100px';}function l(m,n){'use strict';this._uri=m;this._query_data=n;this._request=new (c('AsyncRequest'))();this._request.disableArtilleryTracing();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new (c('Arbiter'))();this._requestID=i++;}l.prototype.setCanvasId=function(m){'use strict';this._canvas_id=m;return this;};l.prototype.setURI=function(m){'use strict';this._uri=m;return this;};l.prototype.setData=function(m){'use strict';this._query_data=m;return this;};l.prototype.getData=function(m){'use strict';return this._query_data;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allow_cross_page_transition=m;return this;};l.prototype.setAppend=function(m){'use strict';this._append=m;return this;};l.prototype.send=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_PERSISTENT);var m={ajaxpipe:1,ajaxpipe_token:c('Env').ajaxpipe_token};Object.assign(m,c('ScriptPathState').getParams());c('ScriptPathState').reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(Object.assign(m,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=h;}else h=this._request;if(this._isQuickling){var n=c('performance').clearResourceTimings||c('performance').webkitClearResourceTimings;if(n)n.call(c('performance'));}this._request.send();return this;};l.prototype._preBootloadFirstResponse=function(m){'use strict';return false;};l.prototype._fireDomContentCallback=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_DOMREADY,true,c('Arbiter').BEHAVIOR_STATE);};l.prototype._fireOnloadCallback=function(){'use strict';if(window.console&&console.timeStamp)console.timeStamp('perf_trace {"name": "e2e",'+' "parent": "PageEvents.AJAXPIPE_ONLOAD"}');this._arbiter.inform(c('PageEvents').AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_STATE);};l.prototype._isRelevant=function(m){'use strict';return this._request==h||this._automatic&&this._relevantRequest==h||this._jsNonBlock||h&&h._allowIrrelevantRequests;};l.prototype._preBootloadHandler=function(m){'use strict';var n=m.getPayload();if(!n||n.redirect||!this._isRelevant(m))return false;var o=false;if(m.is_first){!this._append&&!this._displayCallback&&j(this._canvas_id,this._constHeight);o=this._preBootloadFirstResponse(m);this.pipe=new (c('BigPipe'))({__sf:m.__sf,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:c('PageEvents').AJAXPIPE_DOMREADY,onloadEvt:c('PageEvents').AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return o;};l.prototype._redirect=function(m){'use strict';if(m.redirect){if(m.force||!this.isPageActive(m.redirect)){var n=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());c('goOrReplace')(window.location,new (c('URI'))(m.redirect).removeQueryData(n),true);}else{var o=b.PageTransitions;o.go(m.redirect,true);}return true;}else return false;};l.prototype.isPageActive=function(m){'use strict';return true;};l.prototype.getSanitizedParameters=function(){'use strict';return [];};l.prototype._versionCheck=function(m){'use strict';return true;};l.prototype._onInitialResponse=function(m){'use strict';var n=m.getPayload();if(!this._isRelevant(m))return false;if(!n)return true;if(this._redirect(n)||!this._versionCheck(n))return false;return true;};l.prototype._processFirstResponse=function(m){'use strict';var n=m.getPayload();if(c('ge')(this._canvas_id)&&n.canvas_class!=null)c('CSS').setClass(this._canvas_id,n.canvas_class);};l.prototype.setFirstResponseCallback=function(m){'use strict';this._firstResponseCallback=m;return this;};l.prototype.setFirstResponseHandler=function(m){'use strict';this._processFirstResponse=m;return this;};l.prototype._onResponse=function(m){'use strict';var n=m.payload;if(!this._isRelevant(m))return c('AsyncRequest').suppressOnloadToken;if(m.is_first){this._processFirstResponse(m);this._firstResponseCallback&&this._firstResponseCallback();n.provides=n.provides||[];n.provides.push('uipage_onload');}if(n){if('content' in n.content&&this._canvas_id!==null){if(this._append)n.append=this._canvas_id;var o=n.content.content;delete n.content.content;n.content[this._canvas_id]=o;}if(n.secondFlushPayload){this.pipe.setSecondFlushPayload(n.secondFlushPayload);}else this.pipe.onPageletArrive(n);}if(m.is_last)k(this._canvas_id,this._constHeight);return c('AsyncRequest').suppressOnloadToken;};l.prototype.setNectarModuleDataSafe=function(m){'use strict';this._request.setNectarModuleDataSafe(m);return this;};l.prototype.setFinallyHandler=function(m){'use strict';this._request.setFinallyHandler(m);return this;};l.prototype.setErrorHandler=function(m){'use strict';this._request.setErrorHandler(m);return this;};l.prototype.setTransportErrorHandler=function(m){'use strict';this._request.setTransportErrorHandler(m);return this;};l.prototype.abort=function(){'use strict';this._request.abort();if(h==this._request)h=null;this._request=null;return this;};l.prototype.setJSNonBlock=function(m){'use strict';this._jsNonBlock=m;return this;};l.prototype.setAutomatic=function(m){'use strict';this._automatic=m;return this;};l.prototype.setDisplayCallback=function(m){'use strict';this._displayCallback=m;return this;};l.prototype.setConstHeight=function(m){'use strict';this._constHeight=m;return this;};l.prototype.setAllowIrrelevantRequests=function(m){'use strict';this._allowIrrelevantRequests=m;return this;};l.prototype.getAsyncRequest=function(){'use strict';return this._request;};l.getCurrentRequest=function(){'use strict';return h;};l.setCurrentRequest=function(m){'use strict';h=m;};f.exports=l;}),null);
__d("UIPageletContentCache",[],(function a(b,c,d,e,f,g){var h={cache:{},getContent:function i(j){if(j in this.cache)return this.cache[j];return null;},setContent:function i(j,k){this.cache[j]=k;}};f.exports=h;}),null);
__d('UIPagelet',['ActorURI','AjaxPipeRequest','AsyncRequest','DOM','HTML','ScriptPathState','UIPageletContentCache','URI','emptyFunction','ge','isElementNode'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';var l=i&&c('isElementNode')(i)?i.id:i;this._id=l||null;this._element=c('ge')(i||c('DOM').create('div'));this._src=j||null;this._context_data=k||{};this._data={};this._handler=c('emptyFunction');this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}h.prototype.getElement=function(){'use strict';return this._element;};h.prototype.setHandler=function(i){'use strict';this._handler=i;return this;};h.prototype.go=function(i,j){'use strict';if(arguments.length>=2||typeof i=='string'){this._src=i;this._data=j||{};}else if(arguments.length==1)this._data=i;this.refresh();return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this._allow_cross_page_transition=i;return this;};h.prototype.setBundleOption=function(i){'use strict';this._is_bundle=i;return this;};h.prototype.setErrorHandler=function(i){'use strict';this._errorHandler=i;return this;};h.prototype.setTransportErrorHandler=function(i){'use strict';this.transportErrorHandler=i;return this;};h.prototype.refresh=function(){'use strict';if(this._use_ajaxpipe){c('ScriptPathState').setIsUIPageletRequest(true);this._request=new (c('AjaxPipeRequest'))();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}else{if(this._cache_content){var i=c('UIPageletContentCache').getContent(this._content_cache_key);if(i!==null){this.handleContent(i);return this;}}var j=function(n){this._request=null;var o=c('HTML')(n.getPayload());this.handleContent(o);if(this._cache_content)c('UIPageletContentCache').setContent(this._content_cache_key,o);}.bind(this),k=this._displayCallback,l=this._finallyHandler;this._request=new (c('AsyncRequest'))().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(n){if(k){k(j.bind(null,n));}else j(n);l&&l();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var m=babelHelpers['extends']({},this._context_data,this._data);if(this._actorID)m[c('ActorURI').PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(m)}).send();return this;};h.prototype.handleContent=function(i){'use strict';if(this._append){c('DOM').appendContent(this._element,i);}else c('DOM').setContent(this._element,i);this._handler();};h.prototype.cancel=function(){'use strict';if(this._request)this._request.abort();};h.prototype.setUseAjaxPipe=function(i){'use strict';this._use_ajaxpipe=!!i;return this;};h.prototype.setUsePostRequest=function(i){'use strict';this._use_post_request=!!i;return this;};h.prototype.setAppend=function(i){'use strict';this._append=!!i;return this;};h.prototype.setJSNonBlock=function(i){'use strict';this._jsNonblock=!!i;return this;};h.prototype.setAutomatic=function(i){'use strict';this._automatic=!!i;return this;};h.prototype.setDisplayCallback=function(i){'use strict';this._displayCallback=i;return this;};h.prototype.setConstHeight=function(i){'use strict';this._constHeight=!!i;return this;};h.prototype.setFinallyHandler=function(i){'use strict';this._finallyHandler=i;return this;};h.prototype.setAllowIrrelevantRequests=function(i){'use strict';this._allowIrrelevantRequests=i;return this;};h.prototype.setActorID=function(i){'use strict';this._actorID=i;return this;};h.prototype.setCacheContent=function(i){'use strict';this._cache_content=i;return this;};h.prototype.setContentCacheKey=function(i){'use strict';this._content_cache_key=i;return this;};h.appendToInline=function(i,j){'use strict';var k=c('ge')(i),l=c('ge')(j);if(k&&l){while(l.firstChild)c('DOM').appendContent(k,l.firstChild);c('DOM').remove(l);}};h.loadFromEndpoint=function(i,j,k,l){'use strict';l=l||{};var m='/ajax/pagelet/generic.php/'+i;if(l.intern)m='/intern'+m;var n=new (c('URI'))(m.replace(/\/+/g,'/'));if(l.subdomain)n.setSubdomain(l.subdomain);var o=false,p='';if(l.contentCacheKey){o=true;p=i+','+String(l.contentCacheKey);}var q=new h(j,n,k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle!==false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler||c('emptyFunction')).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);l.handler&&q.setHandler(l.handler);q.go();return q;};h.loadFromEndpointBatched=function(i,j,k){'use strict';var l=i.slice(0,k),m=i.slice(k);if(m.length>0){var n=l[l.length-1],o=c('emptyFunction');if(n.options&&n.options.finallyHandler)o=n.options.finallyHandler;n.options=babelHelpers['extends']({},n.options,{finallyHandler:function p(){o();window.setTimeout(function(){h.loadFromEndpointBatched(m,j,k);},1);}});}l.forEach(function(p){h.loadFromEndpoint(p.controller,p.target_element,p.data,babelHelpers['extends']({},p.options,j,{bundle:true}));});};f.exports=h;}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s;},getActiveInstance:function r(){return n;},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null;},registerInstance:function r(s,t){s||h(0);p[s]=t;q.setActiveInstance(t);},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null;},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k;},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode);}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t);}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t();}c('Arbiter').inform('ticker/show',{node:s,callback:t});},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send();},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s);},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s);},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w);},m);t.setAttribute('data-timeout-token',x);},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s);}).go();},'TickerController');},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s);},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s);},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j;},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback();}}};f.exports=q;}),null);
__d('TickerRightColumnController',['csx','cx','Arbiter','CSS','DOM','Event','NavigationMessage','Parent','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g,h,i){var j;function k(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').show(p,m);}function l(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').hide(p);}function m(){var p=c('ge')('pagelet_rhc_ticker'),q=c('DOM').scry(p,'.ticker_container')[0],r=c('DOM').scry(p,'.ticker_stream')[0],s=c('ge')('rightCol');if(!p||!q||!r||!s)return;c('Style').set(q,'height','0');var t=75,u=c('Vector').getViewportDimensions().y,v=c('Vector').getElementDimensions(s).y,w=u-v-t,x=c('Vector').getElementDimensions(r).y,y=Math.max(Math.min(w,x,j.tickerMaxHeight||425),j.tickerMinHeight||225);c('Style').set(q,'height',y+'px');}function n(p){var q=c('ge')('pagelet_rhc_ticker'),r=q&&c('Parent').bySelector(q,"._5zcc");if(r){c('CSS').conditionClass(r,"_5zcb",p);}else{var s=c('ge')('pagelet_reminders'),t=s&&c('DOM').scry(s,'div.tickerToggleWrapper')[0],u=q&&c('DOM').scry(q,'div.tickerToggleWrapper')[0];t&&c('CSS').conditionClass(t,'displayedTickerToggleWrapper',!p);u&&c('CSS').conditionClass(u,'displayedTickerToggleWrapper',p);}q&&c('CSS').conditionClass(q,'hidden_rhc_ticker',!p);if(p){m();var v=c('ge')('fbTickerClosedEd');v&&c('CSS').hide(v);}}var o={init:function p(q){j=q;var r=new (c('SubscriptionsHandler'))();if(j.enableSidebar)r.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(t,u){if(u){l();}else k();}),c('Arbiter').subscribe('minisidebar/show',k),c('Arbiter').subscribe('LitestandClassicRHC/loaded',m),c('Event').listen(window,'scroll',c('throttle')(function(){var t=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],u=c('TickerController').getInstance(t);u&&u.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){k();}else if(j.enableSidebar)l();var s=function t(){r.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,s);c('Run').onLeave(s);},initRHCTickerHider:function p(q){c('Event').listen(q,'click',this.hideRHCTicker);},showRHCTicker:function p(){n(true);},hideRHCTicker:function p(){n(false);}};f.exports=o;}),null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],(function a(b,c,d,e,f,g){var h='CheckIsOpen',i={registerOpenChecker:function j(k){return i.subscribe(h,function(l,m){if(k())m.is_Open=true;});},checkIsOpen:function j(){var k={is_Open:false};i.inform(h,k);return k.is_Open;}};Object.assign(i,c('ArbiterMixin'));f.exports=i;}),null);
__d('ChatTabViewEvents',['Arbiter'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('Arbiter'))();}),null);
__d('DocumentTitle',['Arbiter'],(function a(b,c,d,e,f,g){var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function s(){return h;},set:function s(t,u){document.title=t;if(!u){h=t;i=null;c('Arbiter').inform('update_title',t);}else i=t;},blink:function s(t){var u={title:t};k.push(u);if(m===null)m=setInterval(o,j);return {stop:function v(){var w=k.indexOf(u);if(w>=0){k.splice(w,1);if(l>w){l--;}else if(l==w&&l==k.length)l=0;}}};}};f.exports=r;}),null);
__d('PopoverAsyncMenu',['Bootloader','Event','KeyStatus','PopoverMenu','VirtualCursorStatus','setImmediate'],(function a(b,c,d,e,f,g){var h,i,j={},k=0;h=babelHelpers.inherits(l,c('PopoverMenu'));i=h&&h.prototype;function l(m,n,o,p,q,r){'use strict';i.constructor.call(this,m,n,null,q);this._endpoint=p;this._endpointData=r||{};this._loadingMenu=o;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=c('Event').listen(n,'mouseover',this.fetchMenu.bind(this));}l.prototype._onLayerInit=function(){'use strict';if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:c('KeyStatus').isKeyDown(),isVirtualCursorTriggered:c('VirtualCursorStatus').isVirtualCursorTriggered()};c('setImmediate')(function(){return this.fetchMenu();}.bind(this));};l.prototype._onPopoverHide=function(){'use strict';i._onPopoverHide.call(this);this._triggerInfo=null;};l.prototype.fetchMenu=function(){'use strict';if(this._fetched)return;c('Bootloader').loadModules(["AsyncRequest"],function(m){new m().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}.bind(this),'PopoverAsyncMenu');this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};l.prototype._setFocus=function(m){'use strict';var n=this._triggerInfo||{},o=n.isKeyDown,p=n.isVirtualCursorTriggered;this.setInitialFocus(m,o||p);this._triggerInfo=null;};l.setMenu=function(m,n){'use strict';var o=j[m];o.setMenu(n);o._setFocus(n);};l.getInstance=function(m){'use strict';return j[m];};l.getInstanceByTriggerElem=function(m){'use strict';var n=null;Object.keys(j).forEach(function(o){if(j[o]._triggerElem==m)n=j[o];});return n;};f.exports=l;}),null);
__d('cxodecode',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';var i=36,j=2;function k(l){if(!l)return '';var m=l.cxononce;m||h(0);var n=m.substr(0,m.length-j),o=parseInt(m.substr(-j),i),p='';for(var q=0;q<n.length;q+=j)p+=String.fromCharCode(parseInt(n.substr(q,j),i)^o);return p;}f.exports=k;}),null);
__d('ProfileTabUtils',['ProfileTabConst'],(function a(b,c,d,e,f,g){var h={isActivityLogTab:function i(j){return (j===c('ProfileTabConst').ALL_ACTIVITY||j===c('ProfileTabConst').APPROVAL);},isOverviewTab:function i(j){return (j===c('ProfileTabConst').INFO||j===c('ProfileTabConst').OVERVIEW);},isTimelineTab:function i(j){return (!j||j===c('ProfileTabConst').TIMELINE||j===c('ProfileTabConst').WALL);},tabHasFixedAds:function i(j){return true;},tabHasScrubber:function i(j){return h.isActivityLogTab(j);}};h.tabHasStickyHeader=h.isTimelineTab;f.exports=h;}),null);
__d('PopoverLoadingMenu',['cx','BehaviorsMixin','DOM','PopoverMenuInterface','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('PopoverMenuInterface'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this._config=l||{};this._theme=l.theme||{};}k.prototype.getRoot=function(){'use strict';if(!this._root){this._root=c('DOM').create('div',{className:c('joinClasses')("_54nq",this._config.className,this._theme.className)},c('DOM').create('div',{className:"_54ng"},c('DOM').create('div',{className:"_54nf _54af"},c('DOM').create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};Object.assign(k.prototype,c('BehaviorsMixin'),{_root:null});f.exports=k;}),null);
__d('getLegacyContextualDialogInstance',['DataStore','Parent'],(function a(b,c,d,e,f,g){function h(i){var j=c('DataStore').get(i,'LegacyContextualDialog');if(!j){var k=c('Parent').byClass(i,'uiOverlay');if(k)j=c('DataStore').get(k,'overlay');}return j;}f.exports=h;}),null);
__d('randomShuffle',['randomInt'],(function a(b,c,d,e,f,g){function h(i){for(var j=i.length-1;j>0;j--){var k=c('randomInt').call(this,j+1);if(k!=j){var l=i[k];i[k]=i[j];i[j]=l;}}return i;}f.exports=h;}),null);