if (self.CavalryLogger) { CavalryLogger.start_js(["r0k8L"]); }

__d('legacy:async-signal',['AsyncSignal'],(function a(b,c,d,e,f,g){b.AsyncSignal=c('AsyncSignal');}),3);
__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],(function a(b,c,d,e,f,g){var h='menu:mouseover',i=null;function j(t){if(c('CSS').hasClass(t,'uiMenuContainer'))return t;return c('Parent').byClass(t,'uiMenu');}function k(t){return c('Parent').byClass(t,'uiMenuItem');}function l(t){if(document.activeElement){var u=k(document.activeElement);return t.indexOf(u);}return -1;}function m(t){return c('DOM').find(t,'a.itemAnchor');}function n(t){return c('CSS').hasClass(t,'checked');}function o(t){return !c('CSS').hasClass(t,'disabled')&&c('Style').get(t,'display')!=='none';}function p(event){var t=document.activeElement;if(!t||!c('Parent').byClass(t,'uiMenu')||!c('DOM').isInputNode(t)){var u=k(event.getTarget());u&&s.focusItem(u);}}function q(t){c('UserAgent_DEPRECATED').firefox()&&m(t).blur();s.inform('select',{menu:j(t),item:t});}var r=function t(){r=c('emptyFunction');var u={};u.click=function(event){var v=k(event.getTarget());if(v&&o(v)){q(v);var w=m(v),x=w.href,y=w.getAttribute('rel');return y&&y!=='ignore'||x&&x.charAt(x.length-1)!=='#';}};u.keydown=function(event){var v=event.getTarget();if(event.getModifiers().any)return;if(!i||c('DOM').isInputNode(v))return;var w=c('Event').getKeyCode(event),x;switch(w){case c('Keys').UP:case c('Keys').DOWN:var y=s.getEnabledItems(i);x=l(y);s.focusItem(y[x+(w===c('Keys').UP?-1:1)]);return false;case c('Keys').SPACE:var z=k(v);if(z){q(z);event.prevent();}break;default:var aa=String.fromCharCode(w).toLowerCase(),ba=s.getEnabledItems(i);x=l(ba);var ca=x,da=ba.length;while(~x&&(ca=++ca%da)!==x||!~x&&++ca<da){var ea=s.getItemLabel(ba[ca]);if(ea&&ea.charAt(0).toLowerCase()===aa){s.focusItem(ba[ca]);return false;}}}};c('Event').listen(document.body,u);},s=Object.assign(new (c('Arbiter'))(),{focusItem:function t(u){if(u&&o(u)){this._removeSelected(j(u));c('CSS').addClass(u,'selected');m(u).focus();}},getEnabledItems:function t(u){return s.getItems(u).filter(o);},getCheckedItems:function t(u){return s.getItems(u).filter(n);},getItems:function t(u){return c('DOM').scry(u,'li.uiMenuItem');},getItemLabel:function t(u){return u.getAttribute('data-label',2)||'';},isItemChecked:function t(u){return c('CSS').hasClass(u,'checked');},autoregister:function t(u,v,w){u.subscribe('show',function(){s.register(v,w);});u.subscribe('hide',function(){s.unregister(v);});},register:function t(u,v){u=j(u);r();if(!c('DataStore').get(u,h))c('DataStore').set(u,h,c('Event').listen(u,'mouseover',p));if(v!==false)i=u;},setItemEnabled:function t(u,v){if(!v&&!c('DOM').scry(u,'span.disabledAnchor')[0])c('DOM').appendContent(u,c('DOM').create('span',{className:c('DOM').find(u,'a').className+' disabledAnchor'},c('HTML')(m(u).innerHTML)));c('CSS').conditionClass(u,'disabled',!v);},toggleItem:function t(u){var v=!s.isItemChecked(u);s.setItemChecked(u,v);},setItemChecked:function t(u,v){c('CSS').conditionClass(u,'checked',v);m(u).setAttribute('aria-checked',v);},unregister:function t(u){u=j(u);var v=c('DataStore').remove(u,h);v&&v.remove();i=null;this._removeSelected(u);},_removeSelected:function t(u){s.getItems(u).filter(function(v){return c('CSS').hasClass(v,'selected');}).forEach(function(v){c('CSS').removeClass(v,'selected');});}});f.exports=s;}),null);
__d('EgoUnitSlideInsert',['csx','cx','Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j='sliding',k="EgoSlider/End",l=babelHelpers['extends']({isSliding:function m(n){return c('DataStore').get(n,j);},runAfterSlide:function m(n,o){var p=c('tidyEvent')(l.subscribe(k,function(q,r){if(r===n){p&&p.unsubscribe();o();}}));},registerSlide:function m(n,o){c('Event').listen(n,'click',function(p){var q=c('Parent').bySelector(p.getTarget(),"._5cl_");if(!q)return;var r=c('Parent').byClass(n,'ego_unit'),s=0,t=c('Parent').byClass(r,'ego_unit_container'),u=c('DOM').scry(t,'.ego_unit')[0];if(u===r)if(r.nextSibling){r.nextSibling.style.paddingTop='0px';r.nextSibling.style.borderTop='0px';}c('CSS').addClass(r,"_5cl-");c('DataStore').set(r,j,true);new (c('Animation'))(r).to('height',0).to('padding-top',s).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(c('Ease').circOut).duration(300).checkpoint(1,function(){c('DOM').appendContent(t,r);c('DOM').prependContent(r,o);c('DataStore').remove(r,j);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){l.inform(k,r);}).go();});}},c('TidyArbiterMixin'));f.exports=l;}),null);
__d('NetEgo',['csx','Animation','Arbiter','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],(function a(b,c,d,e,f,g,h){var i={setup:function j(k){c('Arbiter').subscribe([c('PageLikeConstants').LIKED,'FriendRequest/sending'],function(l,m){if(k==m.profile_id&&m.origin=='hovercard'||k==m.uid){var n=c('ge')(document.body,'.ego_unit_container');if(n){var o=c('DOM').scry(n,'.ego_unit'),p=o.length;for(var q=0;q<p;q++){var r=o[q].getAttribute('data-ego-fbid');if(r==k){var s=c('DOM').scry(o[q],'.ego_action a')[0];if(s)s.click();break;}}}}});},updateXids:function j(k,l){if(k.length==0&&l.length==0)return;var m=function w(x){return function(y){var z=y.getAttribute(x);if(!z)return false;var aa=new (c('URI'))(z).getQueryData();return !!aa.xids;};},n=c('DOM').scry(document.body,'.ego_section a');n=n.filter(m('ajaxify'));if(n.length==0)return;var o=new (c('URI'))(n[0].getAttribute('ajaxify')),p=o.getQueryData();if(!p.xids)return;var q=null;try{q=JSON.parse(p.xids);}catch(r){return;}for(var s=0;s<l.length;++s)q[l[s]]=1;var t=JSON.stringify(q),u=function w(x,y){o=new (c('URI'))(x.getAttribute(y));p=o.getQueryData();p.xids=t;o.setQueryData(p);x.setAttribute(y,o.toString());};for(s=0;s<n.length;++s)u(n[s],'ajaxify');var v=c('DOM').scry(document.body,'.ego_unit form');v=v.filter(m('action'));for(s=0;s<v.length;++s)u(v[s],'action');},replaceUnit:function j(k,l,m,n){i.replaceUnitCheckParent(k,l,m,n,'');},replaceUnitCheckParent:function j(k,l,m,n,o){var p=c('Parent').byClass(k,'ego_unit_container');if(p&&c('EgoUnitSlideInsert').isSliding(k)){var q=c('DOM').appendContent(p,l);q.forEach(c('CSS').hide);c('EgoUnitSlideInsert').runAfterSlide(k,i._replaceUnitElement.bind(null,k,q,o));}else i._replaceUnit(k,l,m,n,o);},_replaceUnit:function j(k,l,m,n,o){var p=c('DOM').insertAfter(k,l);p.forEach(c('CSS').hide);if(n!==undefined&&n!==null){setTimeout(function(){i._replaceUnitFadeout(k,p,m,o);},n);}else i._replaceUnitFadeout(k,p,m,o);},_replaceUnitFadeout:function j(k,l,m,n){if(m){new (c('Animation'))(k).from('opacity',1).to('opacity',0).duration(m).checkpoint(1,function(){i._replaceUnitElement(k,l,n);}).go();}else i._replaceUnitElement(k,l,n);},_replaceUnitElement:function j(k,l,m){var n=c('CSS').hasClass(k,'ego_unit')?k.parentNode:null;if(n&&n.tagName==='LI')n=c('DOM').scry(k.parentNode,'^ul')[0];c('DOM').remove(k);if(l.length)l.forEach(c('CSS').show);c('Arbiter').inform('netego_replacedUnit',{serializedData:m,numUnitsRemained:n.childNodes.length});i.clearHeader();},clearHeader:function j(){var k=c('DOM').scry(document.body,'.ego_column'),l=[];for(var m=0;m<k.length;++m)l=l.concat(c('DOM').scry(k[m],'.uiHeader'));for(m=0;m<l.length;++m){var n=l[m].nextSibling,o=c('DOM').find(n,"._2xq");if(!o)o=n;if(!o||o.childNodes.length===0){c('DOM').remove(l[m]);}else if(o.childNodes.length===1){var p=o.childNodes[0];if(c('CSS').hasClass(p,'ego_appended_units')&&p.childNodes.length===0)c('DOM').remove(l[m]);}}}};f.exports=i;}),null);
__d('ContextualLayerAsyncRelative',['Event','Parent'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._layerSubscription=this._layer.subscribe('show',this._attachListener.bind(this));if(this._layer.isShown())this._attachListener();};h.prototype.disable=function(){'use strict';this._layerSubscription.unsubscribe();this._layerSubscription=null;if(this._listener){this._listener.remove();this._listener=null;}};h.prototype._attachListener=function(){'use strict';this._listener=c('Event').listen(this._layer.getRoot(),'click',this._onclick.bind(this));};h.prototype._onclick=function(i){'use strict';var j=c('Parent').byTag(i.getTarget(),'A');if(!j)return;var k=j.getAttribute('ajaxify'),l=j.href,m=k||l;if(j.rel==='async'||j.rel==='async-post'){e(['AsyncRequest'],function(n){n.bootstrap(m,this._layer.getContext(),j.rel==='async-post');}.bind(this));return false;}};Object.assign(h.prototype,{_layerSubscription:null,_listener:null});f.exports=h;}),null);
__d("XFeedEgoImpressionLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ego\/feed\/logging\/impression\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true},uid:{type:"Int"}});}),null);