if (self.CavalryLogger) { CavalryLogger.start_js(["sAhZ+"]); }

__d("XGamesNavigationSliderAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/async\/navigationslider\/",{id:{type:"String",required:true},referral_objects:{type:"StringVector",defaultValue:[]},num_items_per_page:{type:"Int",required:true},num_rows:{type:"Int",defaultValue:1},width:{type:"Int",required:true},height:{type:"Int",required:true}});}),null);
__d('CanvasNavigationSlider',['Event','XGamesNavigationSliderAsyncController','AsyncRequest','DataStore'],(function a(b,c,d,e,f,g){var h='GamesNavigationSlider';i.init=function(j,k){'use strict';return new i(j,k);};function i(j,k){'use strict';this.$CanvasNavigationSlider1=k.autoscroll;this.$CanvasNavigationSlider2=j;this.$CanvasNavigationSlider3=k.referral_objects;this.$CanvasNavigationSlider4=j.getNode().id;this.$CanvasNavigationSlider5=k.height;this.$CanvasNavigationSlider6=k.width;this.$CanvasNavigationSlider7=k.num_items_per_page;this.$CanvasNavigationSlider8=k.num_rows;this.$CanvasNavigationSlider9=false;c('DataStore').set(h,this.$CanvasNavigationSlider4,this);if(j.getIndex()>0||this.$CanvasNavigationSlider1)this.$CanvasNavigationSlider10();var l=c('Event').listen(j.getNextArrow(),'click',function(){l.remove();this.$CanvasNavigationSlider10();}.bind(this).bind(this));}i.prototype.$CanvasNavigationSlider10=function(){'use strict';if(this.$CanvasNavigationSlider9)return;this.$CanvasNavigationSlider9=true;var j=c('XGamesNavigationSliderAsyncController').getURIBuilder().setString('id',this.$CanvasNavigationSlider4).setInt('num_items_per_page',this.$CanvasNavigationSlider7).setInt('num_rows',this.$CanvasNavigationSlider8).setInt('width',this.$CanvasNavigationSlider6).setInt('height',this.$CanvasNavigationSlider5).getURI();new (c('AsyncRequest'))(j).setData({referral_objects:this.$CanvasNavigationSlider3}).send();};i.prototype.$CanvasNavigationSlider11=function(j){'use strict';j.forEach(function(k){this.$CanvasNavigationSlider2.push(k);}.bind(this));};i.update=function(j,k){'use strict';var l=c('DataStore').get(h,j);l.$CanvasNavigationSlider11(k);};f.exports=i;}),null);
__d("XGamesRecGridSeeMoreController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/recgrid\/see_more\/",{query_type:{type:"String"},query_params:{type:"String"},fbs:{type:"Int",required:true},num_apps:{type:"Int",required:true}});}),null);
__d('GamesRecGrid',['Arbiter','AsyncRequest','BanzaiODS','CSS','Event','Run','XGamesRecGridSeeMoreController'],(function a(b,c,d,e,f,g){function h(j,k,l){var m=function p(){n.remove();n=null;c('Arbiter').unsubscribe(o);o=0;c('CSS').hide(j);c('Arbiter').inform('recGrid/seeMoreClicked');if(l.loading_bar)c('CSS').show(l.loading_bar);var q=c('XGamesRecGridSeeMoreController').getURIBuilder().setString('query_type',l.query_type).setString('query_params',l.query_params).setInt('fbs',l.fbs).setInt('num_apps',l.num_apps).getURI();new (c('AsyncRequest'))(q).setMethod('POST').setRelativeTo(k).setHandler(function(){if(l.loading_bar)c('CSS').hide(l.loading_bar);c('Arbiter').inform('recGrid/seeMoreLoaded');}).send();c('BanzaiODS').bumpEntityKey('platform_www','games_homepage_rhc_unit.expand');},n=c('Event').listen(j,'click',m),o=c('Arbiter').subscribe('recGrid/seeMoreRequest',m);c('Run').onLeave(function(){n&&n.remove();o&&c('Arbiter').unsubscribe(o);});}var i={handleSeeMore:h};f.exports=i;}),null);
__d("XGamesReplaceableXOutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/async\/xout\/replace\/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"},query_type:{type:"String"},query_params:{type:"String"},excluded_app_ids:{type:"StringVector",defaultValue:[]},attributes:{type:"String"}});}),null);
__d('GamesReplaceableXOutHelper',['invariant','Parent','XGamesReplaceableXOutAsyncController'],(function a(b,c,d,e,f,g,h){var i='data-games-xout-container',j=0,k={},l={};function m(w){var x=c('Parent').byAttribute(w,i);if(x){var y=parseInt(x.getAttribute(i),10);if(y===0){j+=1;y=j.toString();x.setAttribute(i,y);}return y;}}function n(w){var x=m(w);x||h(0);return x;}function o(w){var x=k[n(w)];return x?Object.keys(x):[];}function p(w,x){return q(w,[x]);}function q(w,x){var y=m(w);if(y){var z=k[y]=k[y]||{};for(var aa=0;aa<x.length;aa+=1)z[x[aa]]=true;}}function r(w){var x=n(w);if(x){delete k[x];delete l[x];}}function s(w,x){return c('XGamesReplaceableXOutAsyncController').getURIBuilder().setInt('app_id',x.appID).setString('extra_data',x.extraData).setString('attributes',x.attributes).setString('query_type',w.getAttribute('data-games-xout-query-type')).setString('query_params',w.getAttribute('data-games-xout-query-params')).setString('unit_type',x.unitType).setInt('fbs',w.getAttribute('data-games-xout-fbs')).setStringVector('excluded_app_ids',o(w)).getURI();}function t(w,x){var y=m(w);if(!y)return;var z=l[y]=l[y]||[];if(z.length===0)x();z.push(x);}function u(w){var x=n(w),y=l[x];if(y){y.shift();if(y.length>0)y[0]();}}var v={getBoundAppIDs:o,registerAppID:p,registerAppIDs:q,deleteContainer:r,queueRequest:t,processQueuedRequests:u,createURI:s};f.exports=v;}),null);
__d('GamesReplaceableXOutListener',['csx','cx','AsyncRequest','CSS','DOM','Event','GamesReplaceableXOutHelper','Parent'],(function a(b,c,d,e,f,g,h,i){var j={};function k(n,o,p){var q=p.payload;if(!q)return;c('GamesReplaceableXOutHelper').registerAppID(n,q.app_id);c('GamesReplaceableXOutHelper').processQueuedRequests(o);j[q.app_id]=q.item_data;c('DOM').replace(o,q.el);}function l(n){return c('Event').listen(n,'click',function(o){var p=o.target;if(!c('CSS').matchesSelector(p,"._1m6e"))return;var q=c('Parent').bySelector(p,"._2b2u"),r=p.getAttribute('data-appid'),s=j[r];c('CSS').addClass(q,"_4ksu");c('GamesReplaceableXOutHelper').queueRequest(q,function(){new (c('AsyncRequest'))(c('GamesReplaceableXOutHelper').createURI(n,s)).setHandler(function(t){return k(n,q,t);}).setMethod('POST').send();delete j[r];});});}var m={registerContainerItems:function n(o,p,q){c('GamesReplaceableXOutHelper').registerAppIDs(o,p);q.forEach(function(r){var s=r.appID;j[s]=r;c('GamesReplaceableXOutHelper').registerAppID(o,s);});l(o,p);}};f.exports=m;}),null);
__d("XGamesHideableXOutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/async\/xout\/hide\/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"}});}),null);
__d('GamesUninstallXOut.react',['cx','AsyncRequest','CSS','DOMContainer.react','Dialog','GamesXOut.react','React','ReactDOM','URI','XGamesHideableXOutAsyncController'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={pending:false},this.$GamesUninstallXOut1=function(){var r=c('XGamesHideableXOutAsyncController').getURIBuilder().setInt('app_id',this.props.appID).setString('extra_data',this.props.extraData).setString('unit_type',this.props.unitType).setInt('fbs',this.props.fbs).getURI();this.$GamesUninstallXOut2=new (c('AsyncRequest'))(r).setMethod('POST');this.$GamesUninstallXOut2.send();}.bind(this),this.$GamesUninstallXOut3=function(){var r=new (c('URI'))('/ajax/settings/apps/delete_app.php').setQueryData({app_id:this.props.appID,legacy:false,dialog:true,xout:true});new (c('Dialog'))().setAsync(new (c('AsyncRequest'))(r).setRelativeTo(c('ReactDOM').findDOMNode(this))).setCausalElement(c('ReactDOM').findDOMNode(this)).show();}.bind(this),n;}l.appUninstalled=function(m){'use strict';c('CSS').addClass(m,"_4ksu");};l.prototype.render=function(){'use strict';return (c('React').createElement(c('GamesXOut.react'),{onClick:this.$GamesUninstallXOut3},c('React').createElement(c('DOMContainer.react'),null,this.props.domChild)));};l.propTypes={unitType:k.string.isRequired,appID:k.string.isRequired,domChild:k.any.isRequired,extraData:k.string.isRequired,fbs:k.number.isRequired};f.exports=l;}),null);
__d('GamesTab',['cx','CSS'],(function a(b,c,d,e,f,g,h){function i(j,k){'use strict';this.$GamesTab1=k.category;this.$GamesTab2=k.nub;this.$GamesTab3=j;}i.prototype.getCategory=function(){'use strict';return this.$GamesTab1;};i.prototype.getRoot=function(){'use strict';return this.$GamesTab3;};i.prototype.select=function(){'use strict';c('CSS').addClass(this.$GamesTab3,"_1yiw");c('CSS').show(this.$GamesTab2);};i.prototype.unselect=function(){'use strict';c('CSS').removeClass(this.$GamesTab3,"_1yiw");c('CSS').hide(this.$GamesTab2);};f.exports=i;}),null);
__d("GamesTabContentUpdateManager",[],(function a(b,c,d,e,f,g){var h=null,i={register:function j(k){h=k;},setTabContent:function j(k,l){if(h)h.setTabContent(k,l);}};f.exports=i;}),null);
__d('GamesTabMenu',['AsyncRequest','XPlatformXOutableElementController'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this.$GamesTabMenu2=j.xoutType;this.$GamesTabMenu3=j.fbid;this.$GamesTabMenu4=j.closeid;i.subscribe('itemclick',function(k,l){switch(l.item.getValue()){case 'xout':this.$GamesTabMenu5();break;}}.bind(this));}h.prototype.setContainer=function(i){'use strict';this.$GamesTabMenu1=i;};h.prototype.$GamesTabMenu5=function(){'use strict';if(this.$GamesTabMenu1){this.$GamesTabMenu1.getRoot().remove();}else document.getElementById(this.$GamesTabMenu4).remove();var i=c('XPlatformXOutableElementController').getURIBuilder().setEnum('type',this.$GamesTabMenu2).setInt('fbid',this.$GamesTabMenu3).getURI();new (c('AsyncRequest'))(i).setMethod('POST').send();};f.exports=h;}),null);
__d('GamesTabPanel',['CSS','getStyleProperty'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this.$GamesTabPanel1=i;}h.prototype.showPanel=function(){'use strict';c('CSS').show(this.$GamesTabPanel1);};h.prototype.hidePanel=function(){'use strict';c('CSS').hide(this.$GamesTabPanel1);};h.prototype.getHeight=function(){'use strict';return c('getStyleProperty')(this.$GamesTabPanel1,'height');};f.exports=h;}),null);
__d("XGamesTabUnitAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/tabs\/content\/",{panel_type:{type:"Enum",required:true,enumType:0},tab_category:{type:"Enum",required:true,enumType:0},fbsource:{type:"Int",required:true},collapsed:{type:"Bool",defaultValue:true}});}),null);
__d('GamesTabUnit',['Arbiter','AsyncRequest','CSS','Event','GamesTabContentUpdateManager','XGamesTabUnitAsyncController','tidyEvent'],(function a(b,c,d,e,f,g){var h=c('Arbiter').ArbiterToken;function i(j,k){'use strict';this.$GamesTabUnit12=j;this.$GamesTabUnit6=k.fbsource;this.$GamesTabUnit8=k.initialCategory;this.$GamesTabUnit3=k.loadingBar;this.$GamesTabUnit11=k.panelType;this.$GamesTabUnit1=k.tabIcons;this.$GamesTabUnit2=k.tabPanels;this.$GamesTabUnit10=k.arbiterEvent;this.$GamesTabUnit5=k.tabMenu;this.$GamesTabUnit15=k.autoscroll;this.$GamesTabUnit16=k.autoscrollInterval;this.$GamesTabUnit7=this.$GamesTabUnit8;this.$GamesTabUnit4={};this.$GamesTabUnit4[this.$GamesTabUnit8]=true;this.$GamesTabUnit9=this.$GamesTabUnit2[this.$GamesTabUnit8].getHeight();this.$GamesTabUnit13=false;c('GamesTabContentUpdateManager').register(this);if(this.$GamesTabUnit5)this.$GamesTabUnit5.setContainer(this);Object.keys(this.$GamesTabUnit1).forEach(function(l){this.$GamesTabUnit18(this.$GamesTabUnit1[l]);}.bind(this));this.$GamesTabUnit17=c('Arbiter').subscribe('recGrid/seeMoreClicked',function(){this.$GamesTabUnit13=true;c('Arbiter').unsubscribe(this.$GamesTabUnit17);}.bind(this));if(this.$GamesTabUnit15)this.$GamesTabUnit19();this.$GamesTabUnit20();}i.prototype.getRoot=function(){'use strict';return this.$GamesTabUnit12;};i.prototype.setTabContent=function(j,k){'use strict';this.$GamesTabUnit2[k]=j;if(k===this.$GamesTabUnit7){c('CSS').hide(this.$GamesTabUnit3);this.$GamesTabUnit2[k].showPanel();this.$GamesTabUnit9=this.$GamesTabUnit2[k].getHeight();}};i.prototype.$GamesTabUnit21=function(j){'use strict';var k=j.getCategory();if(k===this.$GamesTabUnit7)return;this.$GamesTabUnit1[this.$GamesTabUnit7].unselect();if(this.$GamesTabUnit2[this.$GamesTabUnit7]){this.$GamesTabUnit9=this.$GamesTabUnit2[this.$GamesTabUnit7].getHeight();this.$GamesTabUnit2[this.$GamesTabUnit7].hidePanel();}this.$GamesTabUnit1[k].select();this.$GamesTabUnit7=k;if(this.$GamesTabUnit2[k]){c('CSS').hide(this.$GamesTabUnit3);this.$GamesTabUnit2[k].showPanel();this.$GamesTabUnit9=this.$GamesTabUnit2[k].getHeight();if(k===this.$GamesTabUnit8&&this.$GamesTabUnit10&&this.$GamesTabUnit13){c('Arbiter').inform(this.$GamesTabUnit10);this.$GamesTabUnit10=null;}return;}this.$GamesTabUnit3.style.height=this.$GamesTabUnit9;c('CSS').show(this.$GamesTabUnit3);if(this.$GamesTabUnit4[k])return;this.$GamesTabUnit4[k]=true;var l=c('XGamesTabUnitAsyncController').getURIBuilder().setEnum('panel_type',this.$GamesTabUnit11).setEnum('tab_category',k).setInt('fbsource',this.$GamesTabUnit6).setBool('collapsed',!this.$GamesTabUnit13).getURI();new (c('AsyncRequest'))().setURI(l).send();};i.prototype.$GamesTabUnit19=function(){'use strict';this.$GamesTabUnit14=setInterval(function(){var j=this.$GamesTabUnit1[this.$GamesTabUnit7+1];if(!j)j=this.$GamesTabUnit1[0];this.$GamesTabUnit21(j);}.bind(this),this.$GamesTabUnit16);};i.prototype.$GamesTabUnit18=function(j){'use strict';c('tidyEvent')(c('Event').listen(j.getRoot(),'click',function(){this.$GamesTabUnit13=true;this.$GamesTabUnit21(j);}.bind(this)));};i.prototype.$GamesTabUnit20=function(){'use strict';if(this.$GamesTabUnit15){c('tidyEvent')(c('Event').listen(this.$GamesTabUnit12,'mouseover',function(){return clearInterval(this.$GamesTabUnit14);}.bind(this)));c('tidyEvent')(c('Event').listen(this.$GamesTabUnit12,'mouseout',function(){return this.$GamesTabUnit19();}.bind(this)));}};f.exports=i;}),null);
__d("GamesGogglesSwitch",[],(function a(b,c,d,e,f,g){var h=false,i={enable:function j(){h=true;},isEnabled:function j(){return h;}};f.exports=i;}),null);
__d('GamesImpressionTracker',['cx','Arbiter','Banzai','Event','GamesGogglesSwitch','VisibilityTracking','throttle'],(function a(b,c,d,e,f,g,h){var i,j,k='data-gamesegoimp',l='data-gamesrankedimp',m=1000;function n(s){if(c('GamesGogglesSwitch').isEnabled())s.className=s.className+' '+"_1z5y";}function o(s){return function(){if(s){s();s=null;}};}i=babelHelpers.inherits(p,c('VisibilityTracking'));j=i&&i.prototype;p.prototype.handleEvent=function(s,event){'use strict';if(event.name===c('VisibilityTracking').EVENT.VISIBLE){var t=s.getAttribute(l);s.removeAttribute(l);if(t){n(s);t&&c('Banzai').post('games_ranked_imp',{data:t});}c('Event').listen(s,'mouseover',o(function(){c('Banzai').post('games_mouseover',{data:t});c('Event').listen(s,'mouseout',o(function(){c('Banzai').post('games_mouseout',{data:t});}));}));}};function p(){'use strict';i.apply(this,arguments);}var q=new p({selector:'[data-gamesrankedimp]',handleAllVisibleEvents:true,cacheTrackedElements:true}),r=c('throttle').acrossTransitions(function(){return q.fireEventCallback();},m,null);q.listeners.addSubscriptions(c('Event').listen(document,'mousemove',r),c('Event').listen(document,'click',r),c('Arbiter').subscribe('games_unit_loaded',function(){return q.refreshAllTrackedElements();}));}),null);
__d('Barrier',[],(function a(b,c,d,e,f,g){function h(i,j){'use strict';if(i===undefined||i<0||j===undefined)return null;if(i==0){j();return;}this.ops_num=i;this.callback=j;}h.prototype.notify=function(){'use strict';if(this.ops_num<=0)return;this.ops_num--;if(this.ops_num==0)this.callback();};f.exports=h;}),null);
__d("XEgoExpandAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ego\/expand\/",{scroll_area_id:{type:"String"},service_id:{type:"String"},filter_ids:{type:"String",defaultValue:""},num_requested:{type:"Int"},pagination_offset:{type:"Int",defaultValue:0}});}),null);
__d("XPubcontentImpressionLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/suggestions\/impression_logging\/",{});}),null);
__d('NetEgoShowcase',['csx','cx','Arbiter','AsyncRequest','AsyncResponse','CSS','DOM','Event','Parent','TidyArbiterMixin','XEgoExpandAsyncController','XPubcontentImpressionLoggingController','mixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j,k,l={UPDATED:0,UPDATING:1};j=babelHelpers.inherits(m,c('mixin')(c('TidyArbiterMixin')));k=j&&j.prototype;function m(n,o){'use strict';k.constructor.call(this);this.$NetEgoShowcase1=n;this.$NetEgoShowcase2=[];this.$NetEgoShowcase3=o.serializedData;this.$NetEgoShowcase4=o.autoExpandLimit;this.$NetEgoShowcase5=o.serviceId;this.$NetEgoShowcase6=o.requestSize;this.$NetEgoShowcase7=l.UPDATED;this.$NetEgoShowcase8=0;c('tidyEvent')(this.$NetEgoShowcase1.subscribe('page_end',this.$NetEgoShowcase9.bind(this)),c('Arbiter').subscribe('netego_replacedUnit',this.$NetEgoShowcase10.bind(this)),c('Event').listen(this.$NetEgoShowcase1.getNode(),'click',this.$NetEgoShowcase11.bind(this)));this.$NetEgoShowcase12(o.firstItemId);}m.prototype.$NetEgoShowcase13=function(){'use strict';if(!this.$NetEgoShowcase4||this.$NetEgoShowcase7===l.UPDATING)return;this.$NetEgoShowcase7=l.UPDATING;var n=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'.ego_unit');if(n.length<this.$NetEgoShowcase4&&n.length-this.$NetEgoShowcase1.getIndex()<=3){var o=this.$NetEgoShowcase4-n.length;this.$NetEgoShowcase14(o>this.$NetEgoShowcase6?o%this.$NetEgoShowcase6+this.$NetEgoShowcase6:o);return;}this.$NetEgoShowcase7=l.UPDATED;};m.prototype.$NetEgoShowcase14=function(n){'use strict';var o=Object.keys(this.$NetEgoShowcase3),p=c('XEgoExpandAsyncController').getURIBuilder().setString('service_id',this.$NetEgoShowcase5).setString('filter_ids',JSON.stringify(o)).setInt('num_requested',n).setInt('pagination_offset',this.$NetEgoShowcase8).getURI();new (c('AsyncRequest'))(p).setHandler(this.$NetEgoShowcase15.bind(this)).setErrorHandler(this.$NetEgoShowcase15.bind(this)).setRelativeTo(this.$NetEgoShowcase1.getNode()).send();};m.prototype.$NetEgoShowcase15=function(n){'use strict';if(!n.getError()){var o=n.getPayload().suggestions;this.$NetEgoShowcase8+=o.length;for(var p=0;p<o.length;p++){var q=c('DOM').create('li',{className:"_2xr"},o[p]);this.$NetEgoShowcase1.push(q);}var r=n.getPayload().serializedData;r&&Object.keys(r).forEach(function(s){this.$NetEgoShowcase3[s]=r[s];},this);}this.$NetEgoShowcase7=l.UPDATED;};m.prototype.$NetEgoShowcase11=function(event){'use strict';var n=event.getTarget(),o=this.$NetEgoShowcase16(n,'ego_x');if(!o){o=this.$NetEgoShowcase16(n,'ego_like');if(!o)return;}var p=c('DOM').scry(o,'^.ego_unit');if(!p.length)return;var q=this.$NetEgoShowcase1.getIndex(),r=p[q]&&c('CSS').hasClass(p[q],'egoKeepUnitContainerForReplace');if(!r){this.$NetEgoShowcase1.remove(q);if(this.$NetEgoShowcase1.getNumItems()===0)this.$NetEgoShowcase17();}};m.prototype.$NetEgoShowcase16=function(n,o){'use strict';if(c('CSS').hasClass(n,o))return n;var p=c('DOM').scry(n,'^.'+o);if(p.length)return p[0];return null;};m.prototype.$NetEgoShowcase10=function(n,o){'use strict';var p=c('DOM').scry(this.$NetEgoShowcase1.getNode(),"li._2xr");for(var q=0;q<p.length;q++)if(!p[q].childNodes.length)this.$NetEgoShowcase1.remove(q);var r=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'.ego_unit');if(!r.length){var s=c('Parent').byClass(this.$NetEgoShowcase1.getNode(),'ego_section');if(s)c('CSS').hide(s);return;}if(!o.serializedData)return;var t=r[this.$NetEgoShowcase1.getIndex()].getAttribute('data-ego-fbid'),u=JSON.parse(o.serializedData);for(var v in u)if(t===v){this.$NetEgoShowcase3[v]=u[v];this.$NetEgoShowcase12(v);}};m.prototype.$NetEgoShowcase9=function(event){'use strict';var n=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'.ego_unit'),o=n[this.$NetEgoShowcase1.getIndex()].getAttribute('data-ego-fbid');this.$NetEgoShowcase12(o);this.$NetEgoShowcase13();};m.prototype.$NetEgoShowcase12=function(n){'use strict';var o=this.$NetEgoShowcase2.indexOf(n)>-1;if(!o&&this.$NetEgoShowcase3[n]){this.$NetEgoShowcase2.push(n);var p=c('XPubcontentImpressionLoggingController').getURIBuilder();new (c('AsyncRequest'))().setMethod('POST').setURI(p.getURI()).setData({q:this.$NetEgoShowcase3[n]}).send();}};m.prototype.$NetEgoShowcase17=function(){'use strict';var n=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'^.ego_column');if(n.length)c('DOM').remove(n[0]);};f.exports=m;}),null);
__d('PubcontentSuggestionsUtil',['csx','cx','DOM','DOMDimensions','LitestandEllipsis','Parent','Style'],(function a(b,c,d,e,f,g,h,i){var j={truncateName:function k(l,m){var n=c('DOM').scry(l,'.nameText')[0];if(n){var o=c('Style').getFloat(l,'lineHeight')*m;c('LitestandEllipsis').add(n,o,l);var p=c('DOM').scry(l.parentNode,'.socialContext')[0];if(p){o=c('Style').getFloat(l,'lineHeight')*m*2-c('DOMDimensions').getElementDimensions(l).height;c('LitestandEllipsis').add(p,o,p);}}},truncateText:function k(l,m){if(l){var n=c('Style').getFloat(l,'lineHeight')*m;c('LitestandEllipsis').add(l,n,l);}},truncateAllText:function k(l,m){var n,o=c('DOM').scry(l,'.ego_title');for(n=0;n<o.length;n++)j.truncateName(o[n],2);var p=c('DOM').scry(l,'.descriptionText');for(n=0;n<p.length;n++)j.truncateText(p[n],3);var q=c('DOM').scry(l,'.ego_like');for(n=0;n<q.length;n++)j.cutLikeButtonText(q[n],m);},cutButtonText:function k(l){var m=c('Parent').bySelector(l,"._5ry0");if(m&&c('DOMDimensions').getElementDimensions(l).width>c('DOMDimensions').getElementDimensions(m).width){var n=c('DOM').scry(l,'input')[0];n.value='';}},cutLikeButtonText:function k(l,m){var n=m?c('Parent').byClass(l,'ego_unit'):c('Parent').byClass(l,'likeButton');if(n&&c('DOMDimensions').getElementDimensions(l).width>c('DOMDimensions').getElementDimensions(n).width){var o=c('DOM').scry(l,'img');if(o.length){o[0].parentNode.removeChild(o[0].nextSibling);}else{o=c('DOM').scry(l,'i');if(o.length)o[0].parentNode.removeChild(o[0].nextSibling);}}}};f.exports=j;}),null);
__d('Slideshow',['csx','cx','ArbiterMixin','CSS','DOM','Event','Locale','Parent','getActiveElement','mixin','shield'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin')));k=j&&j.prototype;function l(m,n){'use strict';k.constructor.call(this);this._root=m;this._config=n;this._currentIndex=0;this._animating=false;this._autoplayTimer=null;this._autoplayTimeout=n.autoplayTimeout;this._init();}l.prototype.getNode=function(){'use strict';return this._root;};l.prototype.getIndex=function(){'use strict';return this._currentIndex;};l.prototype.getNumItems=function(){'use strict';return this._items.length;};l.prototype.getNextArrow=function(){'use strict';if(this._config.arrows)return c('DOM').find(this._root,"a._2xw");return null;};l.prototype.getPrevArrow=function(){'use strict';if(this._config.arrows)return c('DOM').find(this._root,"a._2xx");return null;};l.prototype.page=function(m){'use strict';if(typeof m==='undefined')m='next';if(m==='next'){if(this._config.wrap||this.getIndex()<this.getNumItems()-1)this._animateTo((this.getIndex()+1)%this.getNumItems());}else if(m==='prev')if(this._config.wrap||this.getIndex()>0){var n=(this.getNumItems()+this.getIndex()-1)%this.getNumItems();this._animateTo(n);}};l.prototype.pageTo=function(m){'use strict';this._animateTo(m,c('shield')(this._setCurrent,this,m));};l.prototype.insert=function(m,n){'use strict';if(m>this._currentIndex){c('DOM').insertAfter(this._items[m-1],n);}else{c('DOM').insertBefore(this._items[m],n);this._currentIndex++;}this._items.splice(m,0,n);this._updateArrowState();this.inform('items_updated');};l.prototype.push=function(m){'use strict';this.insert(this._items.length,m);};l.prototype.remove=function(m){'use strict';if(m<0||m>=this._items.length)return;c('DOM').remove(this._items[m]);this._items=c('DOM').scry(this._container,"li._2xr");if(m===this._currentIndex&&this._items.length){var n=m%this._items.length;this._conditionFade(this._items[n],true,null);this._setCurrent(n);}this.inform('items_updated');};l.prototype._init=function(){'use strict';this._container=c('DOM').find(this._root,"ul._2xq");this._items=c('DOM').scry(this._container,"li._2xr");if(this._config.arrows){c('Event').listen(this._root,'click',this._clickListener.bind(this));this._arrowNext=c('DOM').find(this._root,"a._2xw");this._arrowPrev=c('DOM').find(this._root,"a._2xx");}if(this._config.autoplay){if(this._config.autoplaycontrol){c('Event').listen(this._root,'mouseenter',this.stopAutoplay.bind(this));c('Event').listen(this._root,'mouseleave',this.resetAutoplay.bind(this));}this.resetAutoplay();}this.subscribe(['page_start','page_end'],function(m,n){c('CSS').conditionClass(this._root,"_2xm",m==='page_start');}.bind(this));};l.prototype._clickListener=function(event){'use strict';var m=event.getTarget(),n=c('Parent').byTag(m,'a');if(n&&!c('CSS').matchesSelector(n,"._2xo"))if(c('CSS').matchesSelector(n,"._2xw")){this.page('next');event.preventDefault();}else if(c('CSS').matchesSelector(n,"._2xx")){this.page('prev');event.preventDefault();}};l.prototype._updateArrowState=function(){'use strict';if(!this._config.arrows)return;c('CSS').conditionClass(this._arrowNext,"_2xo",this._items.length===1);c('CSS').conditionClass(this._arrowPrev,"_2xo",this._items.length===1);};l.prototype._animateTo=function(m){'use strict';};l.prototype._setCurrent=function(m){'use strict';var n=this._items[this._currentIndex];n&&c('CSS').removeClass(n,"_2xn");c('CSS').addClass(this._items[m],"_2xn");c('CSS').removeClass(this._root,"_2xm");var o=n&&c('DOM').scry(n,'a').some(function(q){return q==c('getActiveElement')();});if(o){var p=c('DOM').scry(this._items[m],'a');if(p[0])p[0].focus();}this._currentIndex=m;this._animating=false;this.inform('page_end',m);};l.prototype.startAutoplay=function(m){'use strict';this._config.autoplay=true;this._autoplayTimeout=m;this.resetAutoplay();};l.prototype.resetAutoplay=function(){'use strict';if(this._config.autoplay){clearTimeout(this._autoplayTimer);this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._autoplayTimeout);}};l.prototype.stopAutoplay=function(){'use strict';clearTimeout(this._autoplayTimer);this._autoplayTimer=null;};l.prototype._autoplay=function(){'use strict';this.resetAutoplay();if(this._items.length>1)this.page();};l.prototype.setAutoplayTimeout=function(m){'use strict';this._autoplayTimeout=m;};f.exports=l;}),null);
__d('Carousel',['cx','Animation','CSS','Ease','Locale','Slideshow','Style','shield'],(function a(b,c,d,e,f,g,h){var i,j,k=c('Locale').isRTL()?'right':'left',l=c('Ease').sineInOut;i=babelHelpers.inherits(m,c('Slideshow'));j=i&&i.prototype;function m(n,o){'use strict';j.constructor.call(this,n,o);this.subscribe('items_updated',this._updateItemState.bind(this));}m.prototype._updateItemState=function(n,o){'use strict';this._setContainerPos(n);c('Style').set(this._container,'width',this._items.length*this._config.width+'px');};m.prototype._updateArrowState=function(n){'use strict';if(!this._config.arrows)return;var o=this._config.wrap,p=this._items.length,q=Math.floor(p/this._config.photosperframe);c('CSS').conditionClass(this._arrowNext,"_2xo",q===1||!o&&n===q-1);c('CSS').conditionClass(this._arrowPrev,"_2xo",q===1||!o&&n===0);};m.prototype._animate=function(n,o){'use strict';var p=n===-1?this._items.length-1:n,q=0;if(this._config.peek_with_offset){q=-n*(this._config.width-this._config.peek*2);if(n>0)q=q+this._config.peek-n*(this._config.item_margin/2);if(n===this._items.length-1)q+=this._config.peek;}else q=-n*this._config.width;this._animating=true;this.inform('page_start',p);new (c('Animation'))(this._container).to(k,q).duration(this._config.animationDuration).ease(l).ondone(o).go();};m.prototype._setContainerPos=function(n){'use strict';c('Style').set(this._container,k,-n*this._config.width+'px');};m.prototype._animateTo=function(n){'use strict';if(this._animating)return;var o=this._items.length;if(0<=n&&n<o||!this._config.wrap){var p=(n+o)%o;this._updateArrowState(p);return this._animate(p,c('shield')(this._setCurrent,this,p));}var q=n%o,r=q?o-1:0,s=this._items[o-1];c('Style').set(s,'position','absolute');c('Style').set(s,k,-this._config.width+'px');if(r===0)this._setContainerPos(-1);this._animate(q,function(){c('Style').set(s,'position','static');c('Style').set(s,k,'auto');this._setContainerPos(r);this._setCurrent(r);}.bind(this));};f.exports=m;}),null);
__d('Showcase',['Animation','Barrier','Ease','Slideshow','Style','shield'],(function a(b,c,d,e,f,g){var h,i,j=c('Ease').sineInOut;h=babelHelpers.inherits(k,c('Slideshow'));i=h&&h.prototype;k.prototype._animateTo=function(l){'use strict';if(this._animating)return;var m=this._items.length,n=(l+m)%m;if(n==this._currentIndex)return;var o=new (c('Barrier'))(2,c('shield')(this._setCurrent,this,n)),p=o.notify.bind(o);this._animating=true;this.inform('page_start',n);this._conditionFade(this._items[this._currentIndex],false,p);this._conditionFade(this._items[n],true,p);};k.prototype._conditionFade=function(l,m,n){'use strict';c('Style').set(l,'visibility','visible');new (c('Animation'))(l).from('opacity',m?0:1).to('opacity',m?1:0).duration(this._config.animationDuration).ease(j).ondone(function(){if(!m)c('Style').set(l,'visibility','hidden');n();}).go();};function k(){'use strict';h.apply(this,arguments);}f.exports=k;}),null);