if (self.CavalryLogger) { CavalryLogger.start_js(["JACWY"]); }

__d("FunnelRegistry",[],(function a(b,c,d,e,f,g){f.exports={WWW_EXAMPLE_FUNNEL:true,MSITE_EXAMPLE_FUNNEL:true,WWW_FEED_SHARE_DIALOG_FUNNEL:true,MSITE_FEED_SHARE_DIALOG_FUNNEL:true,PLATFORM_SHARE_DIALOG_FUNNEL:true,WWW_RECRUITING_SEARCH_FUNNEL:true,WWW_CANVAS_EDITOR_FUNNEL:true,MSITE_COMMENT_TYPING_FUNNEL:true,MSITE_NOTE_READING_FUNNEL:true,WWW_CAMPFIRE_COMPOSER_UPSELL_FUNNEL:true,WWW_REACTIONS_LIKE_BUTTON_HOVER_FUNNEL:true,WWW_REACTIONS_NUX_FUNNEL:true,WWW_COMMENT_REACTIONS_NUX_FUNNEL:true,MSITE_INLINE_REPLY_COMPOSER_FUNNEL:true,WWW_LEAD_GEN_FORM_CREATION_FUNNEL:true,WWW_LEAD_GEN_DESKTOP_AD_UNIT_FUNNEL:true,WWW_LEAD_GEN_MSITE_AD_UNIT_FUNNEL:true,WWW_LINK_PICKER_DIALOG_FUNNEL:true,WWW_MEME_PICKER_DIALOG_FUNNEL:true,WWW_SNOWLIFT_ACTIONS_FUNNEL:true,WWW_CANVAS_AD_CREATION_FUNNEL:true,WWW_SEARCH_AWARENESS_LEARNING_NUX_FUNNEL:true,WWW_CONSTITUENT_TITLE_UPSELL_FUNNEL:true,WWW_PAGE_CREATION_FUNNEL:true,WWW_VIDEOS_CASTING_FUNNEL:true,MSITE_PPD_FUNNEL:true,WWW_CMS_SEARCH_FUNNEL:true,SOCIAL_SEARCH_CONVERSION_WWW_FUNNEL:true,SOCIAL_SEARCH_DASHBOARD_WWW_FUNNEL:true,GAMES_QUICKSILVER_FUNNEL:true,SRT_USER_FLOW_FUNNEL:true,WWW_MEME_PIVOT_FUNNEL:true,WWW_NOTIFICATION_FUNNEL:true,MSITE_HASHTAG_PROMPT_FUNNEL:true,MSITE_FEED_ALBUM_CTA_FUNNEL:true,MTOUCH_COMMENT_STORIES_FUNNEL:true,WWW_MESSENGER_SHARE_TO_FB_FUNNEL:true,MISINFORMATION_RESHARE_ALERT_FUNNEL:true,FACECAST_BROADCASTER_FUNNEL:true,WWW_MISINFO_WARNING_FOOTER_FUNNEL:true,MTOUCH_MISINFO_WARNING_FOOTER_FUNNEL:true,COLLEGE_COMMUNITY_NUX_ONBOARDING_FUNNEL:true,WWW_ACCESSIBILITY_NOTIFICATIONS_JEWEL_TABBING_FUNNEL:true,MTOUCH_FEED_MISSED_STORIES_FUNNEL:true,WWW_STORYSET_FUNNEL:true,POLYGLOT_MAIN_FUNNEL:true,CREATIVE_STUDIO_CREATION_FUNNEL:true,WWW_LIVE_VIEWER_TIPJAR_FUNNEL:true};}),null);
__d('Spotlight',['csx','cx','Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','joinClasses','mixin'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('classWithMixins')(c('Layer'),c('mixin')(c('ArbiterMixin'))));k=j&&j.prototype;function l(n,o){'use strict';k.constructor.call(this,n,o);this.stageMinSize=new (c('Vector'))(0,0);this.stagePadding=new (c('Vector'))(0,0);}l.prototype._buildWrapper=function(n,o){'use strict';var p=c('joinClasses')("_n8 _3qx",n.rootClassName);return (c('JSXDOM').div({className:p},c('JSXDOM').div({className:"_n9"},o)));};l.prototype._getDefaultBehaviors=function(){'use strict';return k._getDefaultBehaviors.call(this).concat([m,c('LayerAutoFocus'),c('LayerTabIsolation'),c('ModalLayer')]);};l.prototype.getContentRoot=function(){'use strict';if(!this._content)this._content=c('DOM').find(this.getRoot(),"div._n3");return this._content;};l.prototype.configure=function(n){'use strict';if(n.stageMinSize)this.stageMinSize=n.stageMinSize;if(n.stagePadding)this.stagePadding=n.stagePadding;};l.prototype.onContentLoaded=function(){'use strict';this.inform('content-load');};l.prototype.updatePermalink=function(n){'use strict';this.inform('permalinkchange',n);};Object.assign(l.prototype,{stageMinSize:null,stagePadding:null});function m(n){'use strict';this._layer=n;}m.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(n,o){if(n==='show'){c('Arbiter').inform('layer_shown',{type:'Spotlight'});}else c('Arbiter').inform('layer_hidden',{type:'Spotlight'});});};m.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};Object.assign(m.prototype,{_subscription:null});f.exports=l;}),null);
__d('Spotlight.react',['LayerAutoFocusReact','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','ReactLayer','Spotlight','React'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=c('ReactLayer').createClass({propTypes:{causalElement:h.instanceOf(HTMLElement),onHide:h.func,rootClassName:h.string,shown:h.bool},getDefaultEnabledBehaviors:function j(){return {hideOnBlur:c('LayerHideOnBlur'),hideOnEscape:c('LayerHideOnEscape'),refocusOnHide:c('LayerRefocusOnHide'),autoFocus:c('LayerAutoFocusReact')};},createLayer:function j(k){var l=this.enumerateBehaviors(this.props.behaviors),m={addedBehaviors:l,rootClassName:this.props.rootClassName},n=new (c('Spotlight'))(m,k);n.setCausalElement(this.props.causalElement);n.conditionShow(this.props.shown);if(this.props.onBeforeHide)n.subscribe('beforehide',this.props.onBeforeHide);if(this.props.onHide)n.subscribe('hide',this.props.onHide);return n;},receiveProps:function j(k){if(this.layer){this.layer.setCausalElement(k.causalElement);this.layer.conditionShow(k.shown);}}});f.exports=i;}),null);
__d("isEmail",[],(function a(b,c,d,e,f,g){var h=/^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function i(j){return h.test(j);}f.exports=i;}),null);
__d('FunnelAction',[],(function a(b,c,d,e,f,g){'use strict';var h='name',i='payload',j='relative_time',k='tag';function l(m,n,o,p){this.$FunnelAction1={};this.$FunnelAction1[h]=m;this.$FunnelAction1[j]=n;if(o!==undefined)this.$FunnelAction1[k]=o;if(p!==undefined)this.$FunnelAction1[i]=JSON.stringify(p);}l.prototype.getData=function(){return this.$FunnelAction1;};f.exports=l;}),null);
__d('Funnel',['invariant','FunnelAction','FunnelRegistry','sprintf'],(function a(b,c,d,e,f,g,h){'use strict';var i='name',j='instance_id',k='start_time',l='tags',m='actions',n='sampling_rate',o='timeout_sec',p={EXPLICIT:'explicit',TIMEOUT:'timeout',SESSION_END:'session_end',RESTART:'restart',ACTIONS_FULL:'actions_full'},q={ACTION_END:'funnel_end',ACTION_WINDOW_BLUR:'window_blur',ACTION_WINDOW_FOCUS:'window_focus'},r=600;function s(t,u,v,w){c('FunnelRegistry')[t]===true||h(0);this.$Funnel1=t;this.$Funnel2=u;this.$Funnel3=[];this.$Funnel4={};this.$Funnel5=v;this.$Funnel6=Date.now();this.timeout_sec=r;this.shouldTrackFocus=false;this.$Funnel7=w;this.devModeLogger('Started funnel');}s.prototype.addTag=function(t){typeof t==='string'||h(0);this.$Funnel4[t]=true;this.devModeLogger('Added funnel tag %s',t);return this;};s.prototype.appendAction=function(t,u,v){this.$Funnel3.push(new (c('FunnelAction'))(t,Date.now()-this.$Funnel6,u,v));if(u){this.devModeLogger('Appended action %s with tag %s',t,u);}else this.devModeLogger('Appended action %s',t);this.$Funnel8=t;return this;};s.prototype.appendActionIfNew=function(t,u,v){if(t!==this.$Funnel8)this.appendAction(t,u,v);return this;};s.prototype.getLogData=function(){var t={};t[i]=this.$Funnel1;if(this.$Funnel2!==undefined){t[j]=this.$Funnel2;}else t[j]=Math.floor(Math.random()*65536);t[k]=this.$Funnel6;t[n]=this.$Funnel5;t[o]=this.timeout_sec;t[l]=[];for(var u in this.$Funnel4)if(this.$Funnel4[u]===true)t[l].push(u);if(this.$Funnel3.length>0){t[m]=[];for(var v=0;v<this.$Funnel3.length;v++)t[m].push(this.$Funnel3[v].getData());}return t;};s.prototype.devModeLogger=function(){};s.prototype.getTags=function(){return this.$Funnel4;};f.exports={Funnel:s,EndType:p,ActionType:q};}),null);
__d('FunnelLoggerSampler',['FunnelLoggerConfig'],(function a(b,c,d,e,f,g){'use strict';function h(j){var k=i(j);if(k===0)return false;return Math.random()*k<1;}function i(j){var k=c('FunnelLoggerConfig').freq[j];if(k===undefined)k=c('FunnelLoggerConfig').freq['default'];return k;}f.exports={shouldLog:h,getSamplingRate:i};}),null);
__d('FunnelLogger',['invariant','Banzai','Funnel','FunnelRegistry','FunnelLoggerSampler','MarauderLogger'],(function a(b,c,d,e,f,g,h){'use strict';var i={},j=false,k=true;function l(qa,ra){var sa=ba(qa,ra);pa();ka(sa);if(c('FunnelLoggerSampler').shouldLog(qa)){i[sa]=new (c('Funnel').Funnel)(qa,ra,c('FunnelLoggerSampler').getSamplingRate(qa),false);ea(sa);}}function m(qa,ra){var sa=ba(qa,ra);if(!ca(sa))return null;return i[sa];}function n(qa,ra){}function o(qa,ra,sa){if(sa===undefined){da(qa,undefined,ra);}else if(sa)da(qa,ra,sa);}function p(qa,ra){var sa=ba(qa,ra);if(ca(sa)){i[sa].devModeLogger('Cancelled funnel');fa(sa);i[sa]=undefined;}}function q(qa,ra){var sa=ba(qa,ra);if(ca(sa)){i[sa].appendAction(c('Funnel').ActionType.ACTION_END,c('Funnel').EndType.EXPLICIT);la(sa);}}function r(qa,ra,sa){if(sa===undefined){ga(qa,undefined,String(ra));}else ga(qa,Number(ra),sa);}function s(qa,ra,sa){if(sa===undefined){ha(qa,undefined,Boolean(ra));}else ha(qa,Number(ra),sa);}function t(qa,ra,sa){if(sa===undefined){ia(qa,undefined,String(ra),undefined);}else ia(qa,Number(ra),sa,undefined);}function u(qa,ra,sa){if(sa===undefined){ja(qa,undefined,String(ra),undefined);}else ja(qa,Number(ra),sa,undefined);}function v(qa,ra,sa,ta){if(ta===undefined){ia(qa,undefined,String(ra),sa);}else ia(qa,Number(ra),sa,ta);}function w(qa,ra,sa,ta){if(ta===undefined){ja(qa,undefined,String(ra),sa);}else ja(qa,Number(ra),sa,ta);}function x(qa,ra,sa,ta){if(ta===undefined){ia(qa,undefined,String(ra),undefined,sa);}else ia(qa,Number(ra),String(sa),undefined,ta);}function y(qa,ra,sa,ta){if(ta===undefined){ja(qa,undefined,String(ra),undefined,sa);}else ja(qa,Number(ra),String(sa),undefined,ta);}function z(qa,ra,sa,ta,ua){if(ua===undefined){ia(qa,undefined,String(ra),sa,ta);}else ia(qa,Number(ra),String(sa),String(ta),ua);}function aa(qa,ra,sa,ta,ua){if(ua===undefined){ja(qa,undefined,String(ra),sa,ta);}else ja(qa,Number(ra),String(sa),String(ta),ua);}function ba(qa,ra){c('FunnelRegistry')[qa]===true||h(0);if(ra===undefined||ra===null){return qa;}else return qa+ra.toString();}function ca(qa){return i[qa]!==undefined;}function da(qa,ra,sa){var ta=ba(qa,ra);if(ca(ta)){i[ta].timeout_sec=sa;i[ta].devModeLogger('Timeout set to %d sec',sa);ea(ta);}}function ea(qa){fa(qa);i[qa].timeout_handle=setTimeout(function(){i[qa].appendAction(c('Funnel').ActionType.ACTION_END,c('Funnel').EndType.TIMEOUT);la(qa);},1000*i[qa].timeout_sec);}function fa(qa){if(i[qa].timeout_handle)clearTimeout(i[qa].timeout_handle);}function ga(qa,ra,sa){var ta=ba(qa,ra);if(ca(ta)){i[ta].addTag(sa);ea(ta);}}function ha(qa,ra,sa){var ta=ba(qa,ra);if(ca(ta)){i[ta].shouldTrackFocus=sa;i[ta].devModeLogger('Focus tracking %s',sa?'on':'off');}}function ia(qa,ra,sa,ta,ua){var va=ba(qa,ra);if(ca(va)){i[va].appendAction(sa,ta,ua);ea(va);}}function ja(qa,ra,sa,ta,ua){var va=ba(qa,ra);if(ca(va))i[va].appendActionIfNew(sa,ta,ua);}function ka(qa){if(ca(qa)){i[qa].appendAction(c('Funnel').ActionType.ACTION_END,c('Funnel').EndType.RESTART);la(qa);}}function la(qa){if(ca(qa)){var ra=i[qa].getLogData();c('MarauderLogger').log('funnel_analytics',null,ra);i[qa].devModeLogger('Logged: %s',JSON.stringify(ra));fa(qa);i[qa]=undefined;}}function ma(){for(var qa in i)if(i.hasOwnProperty(qa)&&ca(qa)){i[qa].appendAction(c('Funnel').ActionType.ACTION_END,c('Funnel').EndType.SESSION_END);la(qa);}}function na(){if(k){k=false;for(var qa in i)if(i.hasOwnProperty(qa)&&ca(qa)&&i[qa].shouldTrackFocus){i[qa].appendAction(c('Funnel').ActionType.ACTION_WINDOW_BLUR);fa(qa);}}}function oa(){if(!k){k=true;for(var qa in i)if(i.hasOwnProperty(qa)&&ca(qa)&&i[qa].shouldTrackFocus){i[qa].appendAction(c('Funnel').ActionType.ACTION_WINDOW_FOCUS);fa(qa);}}}function pa(){if(!j){j=true;if(window.addEventListener){c('Banzai').subscribe(c('Banzai').SHUTDOWN,ma);window.addEventListener('blur',na);window.addEventListener('focus',oa);}}}f.exports={startFunnel:l,startFunnel_DEV_MODE:n,setFunnelTimeout:o,setFunnelTrackFocus:s,addFunnelTag:r,appendAction:t,appendActionIfNew:u,appendActionWithTag:v,appendActionWithTagIfNew:w,appendActionWithPayload:x,appendActionWithPayloadIfNew:y,appendActionWithTagAndPayload:z,appendActionWithTagAndPayloadIfNew:aa,cancelFunnel:p,endFunnel:q,getFunnelInstance:m};}),null);
__d('StaticContainer.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.shouldComponentUpdate=function(k){'use strict';return !!k.shouldUpdate;};j.prototype.render=function(){'use strict';var k=this.props.children;if(k===null||k===false)return null;return c('React').Children.only(k);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);