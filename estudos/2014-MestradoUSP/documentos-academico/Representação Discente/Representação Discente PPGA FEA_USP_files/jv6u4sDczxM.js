if (self.CavalryLogger) { CavalryLogger.start_js(["fpn2F"]); }

__d('TimelineMapScrollableArea',['Animation','ArbiterMixin','CSS','DOM','Event','Run','Scroll','SimpleDrag','Style','Vector','$','shield'],(function a(b,c,d,e,f,g){function h(i,j){i&&this.init(c('$')(i),j);}Object.assign(h.prototype,c('ArbiterMixin'),{init:function i(j,k){k=k||{};this._elem=j;this._wrap=c('DOM').find(j,'div.fbScrollableAreaWrap');this._body=c('DOM').find(this._wrap,'div.fbScrollableAreaBody');this._track=c('DOM').find(j,'div.fbScrollableAreaTrack');this._gripper=c('DOM').find(this._track,'div.fbScrollableAreaGripper');this._options=k;this.adjustGripper();this._listeners=[c('Event').listen(this._wrap,'scroll',this._handleScroll.bind(this))];if(k.fade!==false)this._listeners.push(c('Event').listen(j,'mouseenter',c('shield')(this.adjustGripper,this)),c('Event').listen(j,'mouseenter',c('shield')(this.showScrollbar,this)),c('Event').listen(j,'mousemove',this._handleMousemove.bind(this)),c('Event').listen(j,'mouseout',c('shield')(this.hideScrollbar,this)));if(k.fade!==undefined)this._listeners.push(c('Event').listen(this._track,'click',this.clickToScroll.bind(this)));if(k.verticalscroll)this._listeners.push(c('Event').listen(this._wrap,'mousewheel',this.mouseWheel.bind(this)),c('Event').listen(this._wrap,'DOMMouseScroll',this.mouseWheel.bind(this)));this.initDrag();if(!k.persistent)c('Run').onLeave(this.destroy.bind(this));},getRoot:function i(){return this._elem;},initDrag:function i(){var j=new (c('SimpleDrag'))(this._gripper);j.subscribe('start',function(k,event){if(!(event.which&&event.which===1||event.button&&event.button===1))return;this.inform('dragstart');var l=c('Vector').getEventPosition(event).x,m=this._gripper.offsetLeft,n=j.subscribe('update',function(p,q){var r=c('Vector').getEventPosition(q).x-l,s=this._elem.clientWidth,t=this._body.offsetWidth,u=this._track.offsetWidth,v=s/t*u,w=t-this._wrap.offsetWidth,x=m+r,y=u-v;x=Math.max(Math.min(x,y),0);var z=x/y*w;c('Scroll').setLeft(this._wrap,z);}.bind(this)),o=j.subscribe('end',function(){j.unsubscribe(n);j.unsubscribe(o);this.inform('dragend');}.bind(this));}.bind(this));},adjustGripper:function i(){var j=this._elem.clientWidth,k=this._body.offsetWidth,l=this._track.offsetWidth,m=j/k*l;if(m<l){c('Style').set(this._gripper,'width',m+'px');var n=c('Scroll').getLeft(this._wrap)/k*l;c('Style').set(this._gripper,'left',n+'px');c('CSS').show(this._gripper);}else c('CSS').hide(this._gripper);this._checkContentBoundaries();return this;},_checkContentBoundaries:function i(){var j=c('Scroll').getLeft(this._wrap),k=this._wrap.scrollWidth-this._wrap.clientWidth;c('CSS').conditionClass(this._elem,'contentBefore',j>0);c('CSS').conditionClass(this._elem,'contentAfter',j<k);},destroy:function i(){this._listeners.forEach(function(j){j.remove();});this._listeners.length=0;},_handleMousemove:function i(event){var j=c('Vector').getElementPosition(this._track).y,k=c('Vector').getElementDimensions(this._track).y;if(Math.abs(j+k/2-c('Vector').getEventPosition(event).y)<25){this.showScrollbar(false);}else this.hideScrollbar();},_handleScroll:function i(event){this.adjustGripper();if(this._options.fade!==false)this.showScrollbar();},hideScrollbar:function i(){if(!this._scrollbarVisible)return this;this._scrollbarVisible=false;if(this._hideTimeout){clearTimeout(this._hideTimeout);this._hideTimeout=null;}this._hideTimeout=setTimeout(function(){if(this._scrollbarAnimation){this._scrollbarAnimation.stop();this._scrollbarAnimation=null;}this._scrollbarAnimation=new (c('Animation'))(this._track).from('opacity',1).to('opacity',0).duration(250).ondone(c('CSS').addClass.bind(null,this._track,'invisible_elem')).go();}.bind(this),750);return this;},showScrollbar:function i(j){if(this._scrollbarVisible)return this;this._scrollbarVisible=true;if(this._hideTimeout){clearTimeout(this._hideTimeout);this._hideTimeout=null;}if(this._scrollbarAnimation){this._scrollbarAnimation.stop();this._scrollbarAnimation=null;}this.adjustGripper();c('Style').set(this._track,'opacity',1);c('CSS').removeClass(this._track,'invisible_elem');if(j!==false)this.hideScrollbar();return this;},clickToScroll:function i(event){var j=c('Vector').getEventPosition(event).x,k=this._elem.clientWidth,l=this._body.offsetWidth,m=this._track.offsetWidth,n=k/l*m,o=c('Vector').getElementPosition(this._gripper);if(j>=o.x&&j<=o.x+n)return;var p=j<o.x?-1:1,q=this._wrap.offsetWidth*.8*p;this.scrollBy(q);},scrollBy:function i(j){this.setScroll(c('Scroll').getLeft(this._wrap)+j);},getMaxBodyOffset:function i(){return this._body.offsetWidth-this._wrap.offsetWidth;},setScroll:function i(j){var k=j;k=Math.max(Math.min(k,this.getMaxBodyOffset()),0);c('Scroll').setLeft(this._wrap,k);},scrollIntoView:function i(j){var k=this._wrap.clientWidth,l=j.offsetWidth,m=c('Scroll').getLeft(this._wrap),n=m+k,o=j.offsetLeft,p=o+l;if(o<m||k<l){this.setScroll(o);}else if(p>n)this.setScroll(m+(p-n));},mouseWheel:function i(event){if(this.getMaxBodyOffset()<=0)return;var j=0;if(event.wheelDelta){var k=event.wheelDelta;if(event.wheelDeltaX&&event.wheelDeltaY)k=Math.abs(event.wheelDeltaX)>Math.abs(event.wheelDeltaY)?event.wheelDeltaX:event.wheelDeltaY;j=-k*10/40;}else if(event.detail)j=event.detail*10;this.scrollBy(j);event.prevent();}});f.exports=b.TimelineMapScrollableArea||h;}),null);
__d('ReactComposerMediaAttachmentActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){f.exports=c('keyMirrorRecursive')({SET_MEDIA_CONFIG:null},'ReactComposerMediaAttachmentActionType');}),null);
__d('ReactComposerMediaAttachmentStore',['ReactComposerMediaAttachmentActionType','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){'use strict';var k;i.constructor.call(this,function(){return {createAlbumLink:null,taggingDataSource:null,videoUploader:null,videoProgressBar:null,videoProgressBarInstance:null};},function(l){switch(l.type){case c('ReactComposerMediaAttachmentActionType').SET_MEDIA_CONFIG:k&&k.$ReactComposerMediaAttachmentStore1(l);break;}});k=this;}j.prototype.getCreateAlbumLink=function(k){'use strict';return this.getComposerData(k).createAlbumLink;};j.prototype.getTaggingDataSource=function(k){'use strict';return this.getComposerData(k).taggingDataSource;};j.prototype.getVideoUploader=function(k){'use strict';return this.getComposerData(k).videoUploader;};j.prototype.getVideoProgressBarInstance=function(k){'use strict';return this.getComposerData(k).videoProgressBarInstance;};j.prototype.getVideoProgressBar=function(k){'use strict';return this.getComposerData(k).videoProgressBar;};j.prototype.$ReactComposerMediaAttachmentStore1=function(k){'use strict';var l=this.getComposerData(k.composerID);l.createAlbumLink=k.config.createAlbumLink;l.taggingDataSource=k.config.taggingDataSource;l.videoUploader=k.config.videoUploader;l.videoProgressBar=k.config.videoProgressBar;l.videoProgressBarInstance=k.config.videoProgressBarInstance;this.emitChange(k.composerID);};f.exports=new j();}),null);
__d('ReactComposerMediaAttachmentActions',['ReactComposerMediaAttachmentActionType','ReactComposerDispatcher','ReactComposerMediaAttachmentStore'],(function a(b,c,d,e,f,g){c('ReactComposerMediaAttachmentStore');h.prototype.setConfig=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerMediaAttachmentActionType').SET_MEDIA_CONFIG,config:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.createAlbumSelectorClicked=function(i){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMediaAttachmentActionType').CREATE_ALBUM_SELECTOR_CLICKED});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerStatusActions',['ReactComposerStatusActionType','ReactComposerDispatcher','ReactComposerStatusStore'],(function a(b,c,d,e,f,g){c('ReactComposerStatusStore');h.prototype.setMentionsSource=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS_SOURCE,mentionsSource:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTypeaheadReporter=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_TYPEAHEAD_REPORTER,typeaheadReporter:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_EDITOR_STATE,editorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setOriginalEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_ORIGINAL_EDITOR_STATE,originalEditorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setMentions=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS,mentions:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTextLength=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerStatusActionType').SET_TEXT_LENGTH,textLength:j});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerMultilingualStatusActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){f.exports=c('keyMirrorRecursive')({MOUNTED_MULTILINGUAL_STATUS:null,MULTILINGUAL_PROMPT_CLICK:null,MULTILINGUAL_PROMPT_CLOSE:null,LANGUAGE_CREATED:null,LANGUAGE_CHANGED:null,LANGUAGE_REMOVED:null,SET_LANGUAGE_EDITOR_STATE:null,SET_SPECIFIED_POST_LANGUAGE:null,PREFILL_MULTILINGUAL_DATA:null},'ReactComposerMultilingualStatusActionType');}),null);
__d('MentionsInputUtility',['DraftEntity','UnicodeUtils','createEditorStateWithEntities','sanitizeDraftText'],(function a(b,c,d,e,f,g){var h=new RegExp(/@\[(\d+):((\\\]|[^\]])+)\]/g),i=new RegExp(/@\[(\d+):(\d+):((\\\]|[^\]])+)\]/g),j=function l(m){var n=c('sanitizeDraftText')(m),o=n.replace(i,'@[$1:$3]'),p=[],q;while(q=h.exec(o)){var r=q[2].replace(/\\:/g,':').replace(/\\]/g,']').replace(/\n/g,''),s={uid:q[1],text:r,offset:q.index,length:r.length,weakreference:false,entity:{uid:q[1],weakreference:false}};p.push(s);o=o.substr(0,s.offset)+s.text+o.substr(s.offset+q[0].length);h.lastIndex=s.offset+s.length;}return {text:o,ranges:p};},k=function l(m,n){var o=this.parseTextWithMentions(m),p=o.text,q=o.ranges;q.forEach(function(r){var s=c('UnicodeUtils').substring(p,0,r.offset).length-p.substring(0,r.offset).length;r.offset-=s;});return c('createEditorStateWithEntities')({text:p,ranges:q,decorator:n,entityCreationFn:function r(s){return c('DraftEntity').create('MENTION','IMMUTABLE',{id:s.uid,isWeak:s.weakreference});},splitIntoBlocks:true,allowUndo:true});};f.exports={createFromTextWithMentions:k,parseTextWithMentions:j};}),null);
__d('ReactComposerMultilingualStatusStore',['ReactComposerMultilingualStatusActionType','ReactComposerStoreBase','MentionsInputUtility','getMentionsInputDecorator','getMentionsTextForContentState','immutable'],(function a(b,c,d,e,f,g){var h,i,j=c('immutable').Record({languageDialect:null,editorState:null});h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return {statuses:c('immutable').List(),specifiedPostLanguage:''};},function(m){switch(m.type){case c('ReactComposerMultilingualStatusActionType').MOUNTED_MULTILINGUAL_STATUS:l&&l.$ReactComposerMultilingualStatusStore1(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CREATED:l&&l.$ReactComposerMultilingualStatusStore2(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_REMOVED:l&&l.$ReactComposerMultilingualStatusStore3(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CHANGED:l&&l.$ReactComposerMultilingualStatusStore4(m);break;case c('ReactComposerMultilingualStatusActionType').SET_LANGUAGE_EDITOR_STATE:l&&l.$ReactComposerMultilingualStatusStore5(m);break;case c('ReactComposerMultilingualStatusActionType').SET_SPECIFIED_POST_LANGUAGE:l&&l.$ReactComposerMultilingualStatusStore6(m);break;case c('ReactComposerMultilingualStatusActionType').PREFILL_MULTILINGUAL_DATA:l&&l.$ReactComposerMultilingualStatusStore7(m);break;}});l=this;}k.prototype.getAllPostDialects=function(l){'use strict';var m=this.getLanguageDialects(l);m.push(this.getSpecifiedPostLanguage(l));return m;};k.prototype.getSpecifiedPostLanguage=function(l){'use strict';return this.getComposerData(l).specifiedPostLanguage;};k.prototype.getLanguageDialects=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.languageDialect;}).toArray();};k.prototype.getEditorStates=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.editorState;}).toArray();};k.prototype.getMessages=function(l){'use strict';return this.getStatuses(l).map(function(m){return this.$ReactComposerMultilingualStatusStore8(m);}.bind(this)).toArray();};k.prototype.getMessage=function(l,m){'use strict';var n=this.getStatus(l,m);return this.$ReactComposerMultilingualStatusStore8(n);};k.prototype.getStatuses=function(l){'use strict';return this.getComposerData(l).statuses;};k.prototype.getStatus=function(l,m){'use strict';var n=this.getComposerData(l),o=this.$ReactComposerMultilingualStatusStore9(n.statuses,m);return n.statuses.get(o);};k.prototype.getPostData=function(l){'use strict';var m=this.getMessages(l);if(m.length===0)return {};return {multilingual_specified_lang:this.getSpecifiedPostLanguage(l),multilingual_status_langs:this.getLanguageDialects(l),multilingual_statuses:m};};k.prototype.$ReactComposerMultilingualStatusStore9=function(l,m){'use strict';var n=l.findIndex(function(o){return (o.languageDialect===m);});if(n===-1)throw new Error('Undefined status language dialect: '+m);return n;};k.prototype.$ReactComposerMultilingualStatusStore8=function(l){'use strict';var m=l.editorState.getCurrentContent();return c('getMentionsTextForContentState')(m);};k.prototype.$ReactComposerMultilingualStatusStore2=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','languageConfig']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=new j({languageDialect:o,editorState:p.editorState});q.statuses=q.statuses.push(r);this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore3=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n),q=this.$ReactComposerMultilingualStatusStore9(p.statuses,o);p.statuses=p.statuses.splice(q,1);this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore4=function(l){'use strict';var m=this.validateAction(l,['composerID','oldLanguageDialect','newLanguageDialect']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:p,editorState:q.statuses.get(r).editorState}));this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore5=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','editorState']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:o,editorState:p}));this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore1=function(l){'use strict';this.$ReactComposerMultilingualStatusStore6(l);};k.prototype.$ReactComposerMultilingualStatusStore6=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o;this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore7=function(l){'use strict';var m=this.validateAction(l,['composerID','multilingualData']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o.specifiedDialect;o.multilingualStatuses.forEach(function(q){p.statuses=p.statuses.push(new j({languageDialect:q.dialect,editorState:c('MentionsInputUtility').createFromTextWithMentions(q.message,c('getMentionsInputDecorator')())}));});this.emitChange(n);};f.exports=new k();}),null);
__d('WebAsyncPlusRegexSearchSource',['invariant','AbstractSearchSource'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('AbstractSearchSource'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this.$WebAsyncPlusRegexSearchSource1=l.asyncSource;this.$WebAsyncPlusRegexSearchSource2=l.regexSource;this.$WebAsyncPlusRegexSearchSource3=!!l.appendRegexEntries;this.$WebAsyncPlusRegexSearchSource4=!!l.preferRegexEntries;!!this.$WebAsyncPlusRegexSearchSource1||h(0);!!this.$WebAsyncPlusRegexSearchSource2||h(0);}k.prototype.bootstrapImpl=function(l){'use strict';this.$WebAsyncPlusRegexSearchSource1.bootstrap(l);};k.prototype.$WebAsyncPlusRegexSearchSource5=function(l,m){'use strict';var n=[],o=false,p;for(var q=0;q<l.length;q++){p=l[q].getTitle();for(var r=0;r<m.length;r++)if(p===m[r].getTitle()){o=true;break;}if(!o){n.push(l[q]);}else o=false;}return n;};k.prototype.searchImpl=function(l,m,n){'use strict';var o=this.$WebAsyncPlusRegexSearchSource1,p=this.$WebAsyncPlusRegexSearchSource3,q=this.$WebAsyncPlusRegexSearchSource4,r=this.$WebAsyncPlusRegexSearchSource5;this.$WebAsyncPlusRegexSearchSource2.search(l,function(s){m(s,l);o.search(l,function(t){var u=[],v=[];if(q){u=s;v=r(t,s);}else{v=t;u=r(s,t);}var w=p?v.concat(u):u.concat(v);m(w,l);},n);},n);};f.exports=k;}),null);
__d('VideoPermalinkText.react',['cx','React','URI','XVideoPermalinkController'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.$VideoPermalinkText1=function(){'use strict';return (c('XVideoPermalinkController').getURIBuilder().setInt('video_id',this.props.videoID).setString('vanity',this.props.targetID).getURI().getQualifiedURI().toString());};k.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:"_9_1"},this.$VideoPermalinkText1()));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('VideoUploadProcessingDialog.react',['fbt','ActorURI','PublishingToolsSource','React','VideoEditSource','VideoLibraryButton.react','VideoLibrarySource','VideoPermalinkText.react','XUIDialog.react','XUIDialogTitle.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogCloseButton.react','XUIDialogButton.react','XVideoEditController','XVideoEditDialogController'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={dialogShown:true},this.$VideoUploadProcessingDialog1=function(r){this.setState({dialogShown:r});if(!r&&this.props.onClose)this.props.onClose();}.bind(this),this.$VideoUploadProcessingDialog2=function(){this.setState({dialogShown:false});}.bind(this),this.$VideoUploadProcessingDialog3=function(){if(this.props.isReferenceVideo){return h._("Seu arquivo de refer\u00eancia est\u00e1 sendo processado no momento. Voc\u00ea receber\u00e1 uma notifica\u00e7\u00e3o quando ele estiver pronto e monitorado.");}else if(this.props.isSecretVideo){return (c('React').createElement('div',null,h._("Seu v\u00eddeo secreto est\u00e1 sendo processado agora. Notificaremos voc\u00ea quando ele estiver pronto para ser visualizado no seguinte local:"),c('React').createElement(c('VideoPermalinkText.react'),{targetID:this.context.targetID,videoID:this.props.videoID})));}else return h._("Seu v\u00eddeo est\u00e1 sendo processado. Voc\u00ea receber\u00e1 uma notifica\u00e7\u00e3o quando ele estiver pronto para ser visualizado.");}.bind(this),this.$VideoUploadProcessingDialog4=function(){return this.props.isSecretVideo?h._("Processando v\u00eddeo secreto"):h._("Processando v\u00eddeo");}.bind(this),n;}l.prototype.componentWillReceiveProps=function(m){'use strict';if(m.show)this.setState({dialogShown:true});};l.prototype.render=function(){'use strict';var m,n=h._("Editar v\u00eddeo"),o;if(this.props.isReferenceVideo){o=null;}else if(this.props.shouldShowNewEditDialog&&this.props.pageID){m=c('XVideoEditDialogController').getURIBuilder().setInt('video_id',this.props.videoID).setEnum('source',c('VideoEditSource').PROCESSING_DIALOG).getURI();m=c('ActorURI').create(m,this.props.pageID);o=c('React').createElement(c('XUIDialogButton.react'),{action:'confirm',label:n,href:m,onClick:this.$VideoUploadProcessingDialog2,rel:'dialog'});}else{m=c('XVideoEditController').getURIBuilder().setInt('v',this.props.videoID).setEnum('source',c('VideoEditSource').PROCESSING_DIALOG).getURI();o=c('React').createElement(c('XUIDialogButton.react'),{action:'confirm',label:n,href:m,onClick:this.$VideoUploadProcessingDialog2,target:'_blank'});}var p=null;if(this.props.shouldShowVideoLibrary)p=c('React').createElement(c('VideoLibraryButton.react'),{pageID:this.props.pageID,size:'medium',source:c('VideoLibrarySource').VIDEO_UPLOAD_CONFIRMATION_DIALOG,refSource:c('PublishingToolsSource').VIDEO_UPLOAD_CONFIRMATION_DIALOG});return (c('React').createElement(c('XUIDialog.react'),{shown:this.state.dialogShown,width:400,onToggle:this.$VideoUploadProcessingDialog1,key:'dialog'},c('React').createElement(c('XUIDialogTitle.react'),null,this.$VideoUploadProcessingDialog4()),c('React').createElement(c('XUIDialogBody.react'),null,this.$VideoUploadProcessingDialog3()),c('React').createElement(c('XUIDialogFooter.react'),{leftContent:p},c('React').createElement(c('XUIDialogCloseButton.react'),null),o)));};l.propTypes={onClose:k.func,shouldShowNewEditDialog:k.bool,isReferenceVideo:k.bool,shouldShowVideoLibrary:k.bool};f.exports=l;}),null);