
if(typeof dj=="undefined"){dj={};}
if(typeof dj.widget=="undefined"){dj.widget={};}
if(typeof dj.widget.panels=="undefined"){dj.widget.panels={};}
if(typeof dj.widget.panels.view=="undefined"){dj.widget.panels.view={};}
if(typeof dj.widget.panels.controller=="undefined"){dj.widget.panels.controller={};}
(function(){var _djlMixin=(typeof dj.lang.deepMixin=="function")?dj.lang.deepMixin:dj.lang.mixin;dj.widget.panels.PanelsFactory={_CONFIG:{core:{panelGroup:".newsItem",panel:"> li",panelPrefix:"panelsPanel_",panels:undefined,panelToggleStyle:"hidden",activePanel:1,disabledPanels:undefined,panelIncrement:1,viewArea:undefined,paginationContainer:".pagination",controller:undefined,enableBrowserHistory:false,animationDuration:0.3},tabs:{tabPrefix:"panelsTab_",tabGroup:".newsItem",tab:"> li",navContainer:".nav-inline",prevButton:".prev",nextButton:".next",navButtonEnabledStyle:"enabled",tabOnEvent:"click",tabOnStyle:"active",tabOffStyle:"deselected"},carousel:{orientation:"horizontal",navContainer:".nav-inline",prevButton:".prev",nextButton:".next",prevButtonEnabledStyle:"enabledPrev",nextButtonEnabledStyle:"enabledNext"},rotator:{rotateTime:8,rotateIterations:3,pauseOnMouseOver:false,pauseButton:".nav-inline .pause",pauseButtonEnabledStyle:"enabledPause",progressBar:".progressbarBox"}},_panelsType:{NONE:0,SLIDE:1,SWITCH:2},_paginationType:{SIMPLE:0,RANGE:1},_lookupType:{NONE:0,SELECTOR:1,PREFIX:2},create:function(container,cfg,doIgnoreOptCache){if(!container||(typeof cfg!=="object")){console.warn("{Panels} no container or config specified.");return;}
container=dj.lang.byId(container);if(container&&!doIgnoreOptCache){var optCache=['{',container.id,': ',dj.lang.objectToString(cfg,true),'}'].join('');var cntOpt=container.getAttribute("djw_optcache");if(cntOpt){var opts=cntOpt.split("_");for(var i=0,len=opts.length;i<len;i++){if(opts[i]==optCache){console.warn("{Panels} prevented attempt to reinitialize \""+container.id+"\".");return;}}}
if(cntOpt){container.setAttribute("djw_optcache",[optCache,cntOpt].join("_"));}else{container.setAttribute("djw_optcache",optCache);}}
var mvc=this._setupMvc(container,cfg);this._addCompatibilityMethods(mvc,container,cfg);return mvc.model;},createPanels:function(userCfg){var djwp=dj.widget.panels;var _lookupType=this._lookupType;var _panType=this._panelsType;var model=null,views={},controllers={};var config=dj.lang.clone(this._CONFIG.core);config.container="";config.doAddChangeListeners=true;config.panelsType=_panType.SWITCH;config.panelsLookupType=_lookupType.SELECTOR;_djlMixin(config,userCfg);var panels=null;switch(config.panelsLookupType){case _lookupType.PREFIX:panels=this.lookupByPrefix(config.panelPrefix,config.panels);break;case _lookupType.SELECTOR:panels=this.lookupBySelector(config.container,config.panelGroup,config.panel);break;default:return;}
var rotType=(((config.type==djwp.PanelModel.prototype.ROTATION_TYPE.CIRCULAR)||(config.type=="circular"))?djwp.PanelModel.prototype.ROTATION_TYPE.CIRCULAR:djwp.PanelModel.prototype.ROTATION_TYPE.LINEAR);model=new djwp.PanelModel(this.panelsToPanelsDTO(panels),{rotationType:rotType});model.setActiveByPosition(config.activePanel);var view=null;switch(config.panelsType){case _panType.SLIDE:view=new djwp.view.SlidePanel(model,panels,{animationDuration:config.animationDuration,viewArea:config.viewArea,orientation:config.orientation});break;case _panType.SWITCH:view=new djwp.view.Panel(model,panels,{selectedClass:config.selectedPanelClass,deselectedClass:config.deselectedPanelClass});break;}
views.panels=view;if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}
return{"model":model,"views":views,"controllers":controllers};},addModuleNavArrows:function(mvc,userCfg){var _lookupType=this._lookupType;var model=mvc.model;var views=mvc.views;var controllers=mvc.controllers;var config=dj.lang.clone(this._CONFIG.carousel);config.container="";config.doAddEvents=true;config.doAddChangeListeners=true;config.doHide=false;_djlMixin(config,userCfg);if(!config.container&&views.panels&&views.panels.getContainer){config.container=views.panels.getContainer();}
var navArrowsLookupType=_lookupType.NONE;if(!config.lookupType){navArrowsLookupType=(config)?_lookupType.SELECTOR:navArrowsLookupType;}else{navArrowsLookupType=config.lookupType;}
var navArrows={},lng=dj.lang;if(navArrowsLookupType==_lookupType.SELECTOR){navArrows.navContainer=lng.query(config.navContainer,config.container)[0];if(navArrows.navContainer){navArrows.prevButton=lng.query(config.prevButton,navArrows.navContainer)[0];navArrows.nextButton=lng.query(config.nextButton,navArrows.navContainer)[0];navArrows.lastButton=(config.lastButton)?lng.query(config.lastButton,navArrows.navContainer)[0]:null;navArrows.firstButton=(config.firstButton)?lng.query(config.firstButton,navArrows.navContainer)[0]:null;}else{return;}}else{return;}
if(config.doHide){navArrows.navContainer.style.visibility="hidden";return;}
var controller=new dj.widget.panels.controller.NavArrows(model,navArrows);controllers.navArrows=controller;var view=new dj.widget.panels.view.NavArrows(model,navArrows,config);view.displayActiveSuccess();views.navArrows=view;if(config.doAddEvents){controller.addEvents();}
if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}},addModuleNavTabs:function(mvc,userCfg){var _lookupType=this._lookupType;var model=mvc.model;var views=mvc.views;var controllers=mvc.controllers;var config=dj.lang.clone(this._CONFIG.tabs);config.container="";config.panels=this._CONFIG.core.panels;config.doAddEvents=true;config.doAddChangeListeners=true;_djlMixin(config,userCfg);if(!config.container&&views.panels&&views.panels.getContainer){config.container=views.panels.getContainer();}
var navTabsLookupType=_lookupType.NONE;if(!config.lookupType){navTabsLookupType=(userCfg)?_lookupType.SELECTOR:navTabsLookupType;navTabsLookupType=(userCfg&&userCfg.tabPrefix)?_lookupType.PREFIX:navTabsLookupType;}else{navTabsLookupType=config.lookupType;}
var navTabs=null;switch(navTabsLookupType){case _lookupType.PREFIX:navTabs=this.lookupByPrefix(config.tabPrefix,config.panels);break;case _lookupType.SELECTOR:navTabs=this.lookupBySelector(config.container,config.tabGroup,config.tab);break;default:return;}
var view=new dj.widget.panels.view.Panel(model,navTabs,{selectedClass:config.tabOnStyle,deselectedClass:config.tabOffStyle});var controller=new dj.widget.panels.controller.NavTabs(model,navTabs,{activeEvent:config.tabOnEvent});views.navTabs=view;controllers.navTabs=controller;if(config.doAddEvents){controller.addEvents();}
if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}},addModulePagination:function(mvc,userCfg){var config={},djLang=dj.lang;var model=mvc.model,views=mvc.views;_djlMixin((config={container:"",doAddChangeListeners:true,paginationContainer:this._CONFIG.core.paginationContainer,doHide:false}),userCfg);if(!config.container&&views.panels&&views.panels.getContainer){config.container=views.panels.getContainer();}
var oPaginationCnt=djLang.query(config.paginationContainer,config.container)[0];if(!oPaginationCnt){return;}
if(config.doHide){oPaginationCnt.style.visibility="hidden";return;}
var view;if(config.type&&config.type==this._paginationType.RANGE){var ototalResultsCnt=djLang.query(config.totalResultsContainer,config.container)[0];var totalCnt=ototalResultsCnt.innerHTML;view=new dj.widget.panels.view.RangePagination(model,oPaginationCnt,totalCnt,ototalResultsCnt,config.pageSize);model.setViewArea(1);model.setActiveByPosition(1);}else{view=new dj.widget.panels.view.Pagination(model,oPaginationCnt);}
view.displayActiveSuccess();views.pagination=view;if(config.doAddChangeListeners){model.addChangeListener("success",view.displayActiveSuccess,view);}},addModuleTimer:function(mvc,userCfg){var config=dj.lang.clone(this._CONFIG.rotator);config.container="";config.doAddEvents=true;config.doAddChangeListeners=true;_djlMixin(config,userCfg);var controllers=mvc.controllers;controllers.timer=new dj.widget.panels.controller.Timer(mvc.model,config);var oPause=dj.lang.query(config.pauseButton,config.container)[0];if(oPause){var view=new dj.widget.panels.view.Timer(mvc.model,{pauseButton:oPause},userCfg);if(config.doAddChangeListeners){mvc.model.addChangeListener("rotationStateSuccess",view.rotationStateSuccess,view);}}
if(config.doAddEvents){controllers.timer.addEvents();}},addModuleBrowserHistory:function(mvc,userCfg){var config={};_djlMixin((config={doAddEvents:true}),userCfg);var controllers=mvc.controllers;controllers.browserHistory=new dj.widget.panels.controller.History(mvc.model,config);if(config.doAddEvents){controllers.browserHistory.addEvents();}},addController:function(mvc,cMvc){if(!cMvc||!cMvc.model||!cMvc.model.addChangeListener||!mvc||!mvc.model){throw new Error("{Panels.addController} mvc and/or controller is invalid.");}
var model=mvc.model;var controller=cMvc.model;controller.addChangeListener("success",function(panel){model.setActive(panel);});},_setupMvc:function(container,userConfig){var oCnt=dj.lang.byId(container);container=(oCnt.id||container);var config=dj.lang.clone(this._CONFIG);_djlMixin(config,userConfig);var _panType=this._panelsType;var _lookType=this._lookupType;var typeCfg={};typeCfg.panelsType=_panType.NONE;typeCfg.panelsType=(userConfig.core)?_panType.SWITCH:typeCfg.panelsType;typeCfg.panelsType=(userConfig.carousel)?_panType.SLIDE:typeCfg.panelsType;typeCfg.panelsLookupType=_lookType.SELECTOR;typeCfg.panelsLookupType=(userConfig.core&&userConfig.core.panelPrefix)?_lookType.PREFIX:typeCfg.panelsLookupType;typeCfg.navTabsLookupType=_lookType.NONE;typeCfg.navTabsLookupType=(userConfig.tabs)?_lookType.SELECTOR:typeCfg.navTabsLookupType;typeCfg.navTabsLookupType=(userConfig.tabs&&userConfig.tabs.tabPrefix)?_lookType.PREFIX:typeCfg.navTabsLookupType;typeCfg.navArrowsLookupType=_lookType.NONE;typeCfg.navArrowsLookupType=(userConfig.carousel)?_lookType.SELECTOR:typeCfg.navArrowsLookupType;typeCfg.navArrowsLookupType=(userConfig.tab&&userConfig.tab.navContainer)?_lookType.SELECTOR:typeCfg.navArrowsLookupType;typeCfg.hasController=(userConfig.core&&(typeof userConfig.core.controller=="object"));typeCfg.hasNavArrows=(typeCfg.navArrowsLookupType!==_lookType.NONE);typeCfg.hasNavTabs=(typeCfg.navTabsLookupType!==_lookType.NONE);typeCfg.hasTimer=(typeof userConfig.rotator=="object"&&userConfig.rotator.rotateTime>0);typeCfg.hasBrowserHistory=(config.core.enableBrowserHistory);var panelsCfg={container:oCnt,doAddChangeListeners:false,panelsType:typeCfg.panelsType,panelsLookupType:typeCfg.panelsLookupType};_djlMixin(panelsCfg,config.core);if(typeCfg.panelsType==_panType.SWITCH){_djlMixin(panelsCfg,config.tabs);}else if(typeCfg.panelsType==_panType.SLIDE){_djlMixin(panelsCfg,config.carousel);}
var mvc=this.createPanels(panelsCfg);var model=mvc.model;var views=mvc.views;var controllers=mvc.controllers;if(model.getNumberOfPanels()==-1){throw new Error("{Panels} container \""+container+"\" has no panels.");}
if(typeCfg.hasNavTabs){var navTabCfg=config.tabs;navTabCfg.container=oCnt;navTabCfg.panels=config.core.panels;navTabCfg.doAddEvents=false;navTabCfg.doAddChangeListeners=false;navTabCfg.lookupType=typeCfg.navTabsLookupType;this.addModuleNavTabs(mvc,navTabCfg);}
if(typeCfg.hasNavArrows){var navArrCfg=config.carousel;navArrCfg.container=oCnt;navArrCfg.doAddEvents=false;navArrCfg.doAddChangeListeners=false;navArrCfg.lookupType=typeCfg.navArrowsLookupType;navArrCfg.doHide=((typeCfg.panelsType==_panType.SLIDE)&&(views.panels.getViewArea()>=model.getNumberOfPanels()));this.addModuleNavArrows(mvc,navArrCfg);}
if(typeCfg.panelsType==_panType.SLIDE&&(views.panels.getViewArea()==1)){var paginCfg={container:oCnt,paginationContainer:config.core.paginationContainer,doAddEvents:false,doAddChangeListeners:false,doHide:(views.panels.getViewArea()!==1)};this.addModulePagination(mvc,paginCfg);}
if(typeCfg.hasTimer){var timerCfg=config.rotator;timerCfg.container=oCnt;timerCfg.doAddEvents=false;this.addModuleTimer(mvc,timerCfg);}
if(typeCfg.hasBrowserHistory){var histConf={container:(typeCfg.panelsLookupType==_lookType.SELECTOR)?oCnt.id:container,doAddEvents:false};this.addModuleBrowserHistory(mvc,histConf);}
if(typeCfg.hasController){this.addController(mvc,config.core.controller);}
var view=null;for(var viewName in views){if(views.hasOwnProperty(viewName)){view=views[viewName];if(view.displayActiveSuccess){model.addChangeListener("success",view.displayActiveSuccess,view);}
if(view.displayActiveFailure){model.addChangeListener("failure",view.displayActiveFailure,view);}}}
var controller=null;for(var controllerName in controllers){if(controllers.hasOwnProperty(controllerName)){controller=controllers[controllerName];controller.addEvents();}}
if(!typeCfg.hasBrowserHistory&&typeCfg.panelsType==_panType.SWITCH){model.setActiveByPosition(panelsCfg.activePanel);}
return mvc;},_addCompatibilityMethods:function(mvc,container,config){if(typeof mvc.model.update==="undefined"){var that=this;mvc.model.update=function(){that.destroy(mvc);return that.create((container.id||container),config,true);};}
if(mvc.controllers&&mvc.controllers.navTabs){var tabs=mvc.controllers.navTabs._tabs,djLang=dj.lang;mvc.model.observeTabs=function(callback,eventType){var cbBridge=function(ev){var tid=(ev.srcElement||ev.target).getAttribute("djw_tabId");if(mvc.controllers.navTabs._cfg.doStopEvent===true){djLang.stopEvent(ev);}
tid=(isNaN(parseInt(tid,10)))?tid:(mvc.model.getById(tid).getPosition()+"");callback.call(null,tid,mvc.model);};for(var tid in tabs){if(tabs.hasOwnProperty(tid)){djLang.addEvent((tabs[tid]).getElement(),eventType,cbBridge);}}};}
mvc.model.model=mvc.model;mvc.model.views=mvc.views;mvc.model.controllers=mvc.controllers;},destroy:function(mvc){for(var i=0,len=mvc.controllers.length;i<len;i++){mvc.controllers[i].removeEvents();}},panelsToPanelsDTO:function(panels){var elms={};for(var panId in panels){if(panels.hasOwnProperty(panId)){var pan=panels[panId];elms[panId]=new dj.widget.panels.PanelDTO(pan.getId(),pan.getPosition());}}
return elms;},lookupByPrefix:function(prefix,names){var elms={};for(var i=0,len=names.length,id=null,el=null,pos=1;i<len;i++){id=names[i];el=dj.lang.byId(prefix+id);if((typeof el==="undefined")||el===null||el.firstChild===null){continue;}
elms[id]=new dj.widget.panels.Panel(id,pos++,el);}
return elms;},lookupBySelector:function(container,group,node){if(!container||container===null){throw new Error('{dj.util.Panels} container for group: "'+group+'" is undefined.');}
var oCnt=dj.lang.byId(container);var oPanels=dj.lang.query((group+' '+node),oCnt);var elms={};for(var i=0,len=oPanels.length,el=null,pos=1;i<len;i++){el=oPanels[i];if(el===null||(el.tagName!=="IMG"&&el.firstChild===null)){continue;}
elms[pos-1]=new dj.widget.panels.Panel(pos-1,pos++,el);}
return elms;}};}());
(dj.widget.panels.controller.NavArrows=function(model,nav,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._model=model;this._nav=nav;this._procs=[];}).prototype={DEFAULT_CONFIG:{prevButtonEnabledStyle:"enabledPrev",nextButtonEnabledStyle:"enabledNext",firstButtonEnabledStyle:"enabledFirst",lastButtonEnabledStyle:"enabledLast",doStopEvent:true,panelIncrement:1},setLastActive:function(){var mdl=this._model;if(mdl.isLocked()){this._enqueueProc(this.setNextActive);return;}
mdl.setActiveByPosition(mdl.getNumberOfPanels());},setFirstActive:function(){if(this._model.isLocked()){this._enqueueProc(this.setPreviousActive);return;}
this._model.setDirection(this._model.DIRECTION.PREVIOUS);this._model.setActiveByPosition(1);},setPreviousActive:function(){if(this._model.isLocked()){this._enqueueProc(this.setPreviousActive);return;}
this._model.setDirection(this._model.DIRECTION.PREVIOUS);this._model.setActiveByPosition(this._model.getActive().getPosition()-this._cfg.panelIncrement);},setNextActive:function(){var mdl=this._model;if(mdl.isLocked()){this._enqueueProc(this.setNextActive);return;}
var nxt=mdl.getByPosition(this._model.getActive().getPosition()+this._cfg.panelIncrement);if(mdl.getRotationType()==mdl.ROTATION_TYPE.LINEAR){var hasMore=(((mdl.getNumberOfPanels()-mdl.getViewArea())-mdl.getActive().getPosition())>=0);if(hasMore===false){return;}}
mdl.setDirection(mdl.DIRECTION.NEXT);mdl.setActiveByPosition(nxt.getPosition());},addEvents:function(){if(this._nav.prevButton){this._addEvent(this._nav.prevButton,"prev");}
if(this._nav.nextButton){this._addEvent(this._nav.nextButton,"next");}
if(this._nav.firstButton){this._addEvent(this._nav.firstButton,"first");}
if(this._nav.lastButton){this._addEvent(this._nav.lastButton,"last");}},removeEvents:function(){if(this._nav.prevButton){this._removeEvent(this._nav.prevButton,"prev");}
if(this._nav.nextButton){this._removeEvent(this._nav.nextButton,"next");}
if(this._nav.firstButton){this._removeEvent(this._nav.firstButton,"first");}
if(this._nav.lastButton){this._removeEvent(this._nav.lastButton,"last");}},_enqueueProc:function(proc){this._procs.push(proc);this._model.addLockListener(function(){var pr=this._procs.shift();if(pr){pr.call(this);}},this);},_setActiveByType:function(type){var proc;switch(type){case"prev":proc=this.setPreviousActive;break;case"first":proc=this.setFirstActive;break;case"last":proc=this.setLastActive;break;default:proc=this.setNextActive;break;}
proc.call(this);},_removeEvent:function(oBtn,btnType){this._addEvent(oBtn,btnType,true);},_addEvent:function(oBtn,btnType,doRemoveEvent){var btnTypeAttName="djw_btnType";var evm=(doRemoveEvent)?dj.lang.removeEvent:dj.lang.addEvent;var that=this;this._beginEventBridge=this._eventBridge||function(ev){var type=(ev.srcElement||ev.target).getAttribute(btnTypeAttName);if(that._cfg.doStopEvent===true){dj.lang.stopEvent(ev);}
if(!that._nextInterval||that._nextInterval===null){that._setActiveByType(type);}
that._nextInterval=setInterval(function(){that._setActiveByType(type);},400);};this._endEventBridge=this._endEventBridge||function(ev){clearInterval(that._nextInterval);that._nextInterval=null;};this._stopEventBridge=this._stopEventBridge||function(ev){if(that._cfg.doStopEvent===true){dj.lang.stopEvent(ev);}};oBtn.setAttribute(btnTypeAttName,btnType);for(var i=0,len=oBtn.childNodes.length,node=null;i<len;i++){node=oBtn.childNodes[i];if(node.nodeType!=1){continue;}
node.setAttribute(btnTypeAttName,btnType);}
evm(oBtn,"click",this._stopEventBridge);evm(oBtn,'mousedown',this._beginEventBridge);evm(oBtn,'mouseup',this._endEventBridge);evm(oBtn,'mouseout',this._endEventBridge);}};
(dj.widget.panels.view.NavArrows=function(model,nav,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._model=model;this._nav=nav;}).prototype={DEFAULT_CONFIG:{prevButtonEnabledStyle:"enabledPrev",nextButtonEnabledStyle:"enabledNext",firstButtonEnabledStyle:"enabledFirst",lastButtonEnabledStyle:"enabledLast"},displayActiveSuccess:function(panel){var mod=this._model,lng=dj.lang;var pp=mod.getByPosition(mod.getActive().getPosition()-1);if(!pp){lng.removeClassName(this._nav.prevButton,this._cfg.prevButtonEnabledStyle);if(this._nav.firstButton){lng.removeClassName(this._nav.firstButton,this._cfg.firstButtonEnabledStyle);}}else{lng.addClassName(this._nav.prevButton,this._cfg.prevButtonEnabledStyle);if(this._nav.firstButton){lng.addClassName(this._nav.firstButton,this._cfg.firstButtonEnabledStyle);}}
var np=mod.getByPosition(mod.getActive().getPosition()+mod.getViewArea());if(!np){lng.removeClassName(this._nav.nextButton,this._cfg.nextButtonEnabledStyle);if(this._nav.lastButton){lng.removeClassName(this._nav.lastButton,this._cfg.lastButtonEnabledStyle);}}else{lng.addClassName(this._nav.nextButton,this._cfg.nextButtonEnabledStyle);if(this._nav.lastButton){lng.addClassName(this._nav.lastButton,this._cfg.lastButtonEnabledStyle);}}}};/*global dj, Effect */

(dj.widget.panels.view.SlidePanel = function(model, panels, cfg) {
    this._cfg = dj.lang.cloneMixin(this.DEFAULT_CONFIG, cfg);
    this._isOrientVert = (this._cfg.orientation == "vertical");
    this._isOrientHoriz = (this._cfg.orientation == "horizontal");
    this._model = model;
    this._panels = panels;
    this._isSetupDone = false;
    this._animation = null;
    this._deltaMap = [];
}).prototype = {

    DEFAULT_CONFIG: {
        animationDuration: 0.3,
        animationType: "slide",
        orientation: "horizontal"
    },

    _getDelta: function(prevPanel, currPanel) {
        // retreive from map if it's there
        var delta = this._deltaMap[prevPanel.getPosition()];
        var that = this;
        if (delta) {
            var x = delta[currPanel.getPosition()];
            if (x) { return x; }
        }

        // get positions
        var pp = prevPanel.getPosition();
        var cp = currPanel.getPosition();
        var isInc = ((cp - pp) > 0);

        // get offsets
        var ppl, cpl;
        var el = this._panels[prevPanel.getId()].getElement();

        var offsetType = (that._isOrientVert) ? "offsetTop" : "offsetLeft";
        ppl = el[offsetType];
        cpl = (this._panels[currPanel.getId()].getElement()[offsetType]);

        // calculate delta
        delta = isInc ? (cpl - ppl) : (ppl - cpl);
        delta *= ((isInc) ? -1 : 1);

        // save to map
        this._deltaMap[pp] = (this._deltaMap[pp] || []);
        this._deltaMap[pp][cp] = delta;

        return delta;
    },



    displayActiveSuccess: function(activePanel) {
        var model = this._model; model.doLock();
        this._isRotationCircular = (model.getRotationType() == model.ROTATION_TYPE.CIRCULAR);

        if (!this._isSetupDone) {
            this._setCoreValues();
            if (this._isRotationCircular) { this._circularLoopSetup(); }
            this._isSetupDone = true;
        }

        var prevPanel = model.getPrevInHistory();
        var prvPos = prevPanel.getPosition(), avePos = activePanel.getPosition();
        var afterFin = function() { model.releaseLock(); }, beforeStr = function() { };

        var isIncreasing = (model.getDirection() == model.DIRECTION.NEXT);
        var delta = 0;

        // Set flip case when going from last to first and from first to last
        var that = this;
        if (this._isRotationCircular) {
            var isIncFlip = false;
            var isDecrFlip = false;

            if (isIncreasing && (prvPos == this._numberOfPanels) && (avePos == 1)) {
                isIncFlip = true;
                delta = (that._isOrientVert) ? -this._panelHeight : -this._panelWidth;
            } else if (!isIncreasing && (prvPos == 1) && (avePos == this._numberOfPanels)) {
                isDecrFlip = true;
                delta = (that._isOrientVert) ? this._panelHeight : this._panelWidth;
            } else {
                delta = this._getDelta(prevPanel, activePanel);
            }

            afterFin = function() {
                if (isIncFlip) {
                    var offsetType = (that._isOrientVert) ? "top" : "left";
                    that._oPanelGroup.style[offsetType] = "0px";
                }
                model.releaseLock();
            };

            beforeStr = function() {
                if (isDecrFlip) {
                    var mv, offsetTopOrLeft, offsetHeightOrWidth;
                    if (that._isOrientVert) {
                        offsetTopOrLeft = "top";
                        offsetHeightOrWidth = "_panelHeight";
                    }
                    else if (that._isOrientHoriz) {
                        offsetTopOrLeft = "left";
                        offsetHeightOrWidth = "_panelWidth";
                    }
                    mv = -that._getDelta(activePanel, prevPanel) - that[offsetHeightOrWidth];
                    that._oPanelGroup.style[offsetTopOrLeft] = mv + "px";
                }
            };
        } else {
            delta = this._getDelta(prevPanel, activePanel);
        }

        // Update the animation config
        var xD, yD;
        if (that._isOrientVert) {
            xD = 0; yD = delta;
        }
        else if (that._isOrientHoriz) {
            xD = delta; yD = 0;
        }

        var animCfg = {
            x: xD, y: yD,
            duration: that._cfg.animationDuration,
            afterFinish: afterFin,
            beforeStart: beforeStr
        };

        // Create a new animation or use existing
        if (this._animation === null) { this._animation = new Effect.Move(this._oPanelGroup, animCfg); }
        else { this._animation.start(animCfg); }
    },

    getContainer: function() {
        if (this._oCnt) { return this._oCnt; }

        if (this._cfg.container && this._cfg.container !== "") {
            this._oCnt = dj.lang.byId(this._cfg.container);
            return this._oCnt;
        }

        if (this._oPanelGroup) {
            this._oCnt = this._oPanelGroup.parentNode;
            return this._oCnt;
        }

        var ap = this._model.getByPosition(1);
        var el = ap.getElement();
        if (!el.parentNode || !el.parentNode.parentNode) { return null; }
        var grp = el.parentNode;
        this._oCnt = grp.parentNode;

        return this._oCnt;
    },

    getViewArea: function() {
        var that = this;
        if (!this._viewArea) {
            if (typeof this._cfg.viewArea == "number") {
                this._viewArea = this._cfg.viewArea;
            } else {
                var djL = dj.lang;
                var el = (this._panels[this._model.getByPosition(1).getId()]).getElement();
                var cnt = el.parentNode.parentNode; // top container node

                if (that._isOrientVert) {
                    this._viewArea = Math.round(djL.coords(cnt).h / djL.coords(el).h);
                }
                else if (that._isOrientHoriz) {
                    this._viewArea = Math.round(djL.coords(cnt).w / djL.coords(el).w);
                }
                this._model.setViewArea(this._viewArea);
            }
        }

        return this._viewArea;
    },

    _setCoreValues: function() {
        if (this._isCoreValuesSet) { return; }
        var model = this._model, ap = this._panels[model.getByPosition(1).getId()];

        this._oPanelGroup = ap.getElement().parentNode;
        this._numberOfPanels = model.getNumberOfPanels();
        this._isRotationCircular = (model.getRotationType() == model.ROTATION_TYPE.CIRCULAR);
        if (this._isOrientVert) {
            this._panelHeight = dj.lang.coords(ap.getElement()).h;
        }
        else if (this._isOrientHoriz) {
            this._panelWidth = dj.lang.coords(ap.getElement()).w;
        }
        this._isCoreValuesSet = true;
    },

    /**
    *  Method: _circularLoopSetup
    *    Adds a number of panels to the end of the carousel
    *    to simulate circular loop. The number of panels is
    *    equivalent to the view-area
    */
    _circularLoopSetup: function() {
        for (var i = 1, element = null, clone = null, len = this.getViewArea(); i <= len; i++) {
            element = this._panels[this._model.getByPosition(i).getId()].getElement();
            clone = element.cloneNode(true);
            this._oPanelGroup.appendChild(clone);
        }
    }
};

(function(){var _dwp=dj.widget.panels;(_dwp.PanelDTO=function(id,position){this._id=null;this._position=null;if(typeof id!=="undefined"){this.setId(id);}
if(typeof position!=="undefined"){this.setPosition(position);}}).prototype={getId:function(){return this._id;},setId:function(id){if(typeof id==="undefined"){throw new Error("ID must be defined.");}
this._id=id;},getPosition:function(){return this._position;},setPosition:function(position){if(typeof position!=="number"){throw new TypeError("Position must be a number.");}
this._position=position;}};_dwp.Panel=function(id,position,element){dj.widget.panels.PanelDTO.call(this,id,position);this._element=null;if(typeof element!=="undefined"){this.setElement(element);}};dj.lang.extend(_dwp.Panel,_dwp.PanelDTO);dj.lang.mixin(_dwp.Panel.prototype,{getElement:function(){return this._element;},setElement:function(element){if(typeof element!=="object"){throw new TypeError("Element must be an object.");}
this._element=element;}});}());
(dj.widget.panels.PanelModel=function(panels,cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._hPanels={};this._panelIds=[];this._prevInHistory=null;this._lastPosition=1;this._activePanel=null;this._activePanelObserver=new dj.util.Observer();this._direction=this.DIRECTION.NEXT;this._isLocked=false;this._lockObserver=0;this._rotationState=1;if(panels){this.addPanels(panels);}}).prototype={ROTATION_TYPE:{LINEAR:0,CIRCULAR:1},DIRECTION:{PREVIOUS:0,NEXT:1},DEFAULT_CONFIG:{rotationType:0},addPanel:function(panelId){var panel=new dj.widget.panels.Panel(panelId,this._lastPosition);this._panelIds[this._lastPosition]=panel.getId();this._hPanels[panelId]=panel;this._lastPosition++;},addPanels:function(panels){var that=this;for(var pid in panels){if(panels.hasOwnProperty(pid)){var panel=panels[pid];var panelId=panel.getId();that._panelIds[that._lastPosition]=panelId;that._hPanels[panelId]=panel;that._lastPosition++;}}},hasId:function(panelId){return(typeof this._hPanels[panelId]!=="undefined");},hasPosition:function(panelPosition){return((panelPosition>0)&&(panelPosition<this._panelIds.length));},getById:function(panelId){if(!this.hasId(panelId)){throw new Error("NoSuchElementException");}
return this._hPanels[panelId];},getByPosition:function(panelPosition){if(!this.hasPosition(panelPosition)){if(this._cfg.rotationType===this.ROTATION_TYPE.CIRCULAR){var numOfPan=this.getNumberOfPanels();panelPosition=(panelPosition%numOfPan);panelPosition=(panelPosition===0)?numOfPan:panelPosition;}else{return;}}
var pid=this._panelIds[panelPosition];return this._hPanels[pid];},getActive:function(){return this._activePanel;},getPrevInHistory:function(){return this._prevInHistory;},getAll:function(){var values=[];for(var value in this._hPanels){if(this._hPanels.hasOwnProperty(value)){values.push(this._hPanels[value]);}}
return values;},getNumberOfPanels:function(){return(this._panelIds.length-1);},getRotationState:function(){return this._rotationState;},setRotationState:function(state){if(state<0||state>1){this._activePanelObserver.fireByName("rotationStateFailure",state);}
this._rotationState=state;this._activePanelObserver.fireByName("rotationStateSuccess",state);},getDirection:function(){return this._direction;},setDirection:function(dir){if(dir<0||dir>1){throw new Error("IndexOutOfBoundsException");}
this._direction=dir;},getRotationType:function(){return this._cfg.rotationType;},setActive:function(panel){if(panel&&panel.getId){this.setActiveById(panel.getId());}},setActiveById:function(panelId){if(!this.hasId(panelId)){this._activePanelObserver.fireByName("failure",panelId);return;}
var panel=this.getById(panelId);this._prevInHistory=this._activePanel;this._activePanel=panel;this._activePanelObserver.fireByName("success",panel);},setActiveByPosition:function(panelPosition){if(!this.hasPosition(panelPosition)){if(this._cfg.rotationType===this.ROTATION_TYPE.CIRCULAR){var numOfPan=this.getNumberOfPanels();panelPosition=(panelPosition%numOfPan);panelPosition=(panelPosition===0)?numOfPan:panelPosition;}else{this._activePanelObserver.fireByName("failure",panelPosition);return;}}
var pid=this._panelIds[panelPosition];this.setActiveById(pid);},addChangeListener:function(event,listener,context){if(arguments.length<3&&(typeof event==="function")){context=listener;listener=event;event="success";}
context=(typeof context!=="undefined")?context:this;this._activePanelObserver.subscribeByName(event,listener,context);},isLocked:function(){return this._isLocked;},addLockListener:function(obs,context){this._lockObserver={cb:obs,ctx:context};},doLock:function(){this._isLocked=true;},releaseLock:function(){this._isLocked=false;if(this._lockObserver&&typeof this._lockObserver.cb=="function"){this._lockObserver.cb.call(this._lockObserver.ctx);}},getViewArea:function(){return this._viewArea;},setViewArea:function(va){this._viewArea=va;},getActivePanel:function(){return this.getActive().getId();},setActivePanel:function(pid){var meth=(typeof pid=="string")?this.setActiveById:this.setActiveByPosition;return meth.call(this,pid);},hasPanel:function(panel){var pid=(panel.getId)?panel.getId():panel;return this.hasId(pid);},observePanels:function(callback){this.addChangeListener(function(panel){callback.apply(this,[panel.getId(),panel.getId()]);},this);}};
dj.module.newsReel={REEL_STATE:{FULL:0,COLLAPSED:1,SMALL:2},reelState:0,reelHeight:0,isAnimation:false,cfg:{reelOpenClass:"reelState-open",reelClosedClass:"reelState-closed",btnSelectedClass:"selected",stateCookieName:"newsReel_state",currentArticleClass:"currentArticle",currentPointerClass:"current",newsReelPointerClass:".newsreelPointer",reelLoadedClass:"reelState-loaded"},oCnt:null,cntId:null,init:function(newsreelContainer,adRegisterKey){this.oCnt=$(newsreelContainer);if(this.oCnt===null){throw new Error("{NewsReel} container is not located.");}
this.oCnt.addClassName(this.cfg.reelLoadedClass);this.currentArticle=null;var defState=this.REEL_STATE;this.reelState=defState.FULL;this.reel=this.initReel(this.oCnt);if(typeof adRegisterKey==='undefined'||adRegisterKey===null||adRegisterKey==='')return;this.initNewsReelAds(adRegisterKey,this.oCnt);},setId:function(newsreelContainer){this.cntId=newsreelContainer;},update:function(){this.init(this.cntId);return this;},initReel:function(cnt){var vid=this._setCurrentPanelActive(cnt);var reel=dj.widget.panels.PanelsFactory.create(cnt,{core:{panelGroup:"#newsReelContent > .reelContentTree .unitList",panel:"li",viewArea:4},carousel:{navContainer:".reelNav",prevButton:".newsreel_prev",nextButton:".newsreel_next",type:"circular"}});if(vid===null){return reel;}
this.reelPtrCnt=cnt.down(this.cfg.newsReelPointerClass);var pans=this.reelPtrCnt.select(".newsreel_pointer_container li");if(cnt.down(".unit.sponsor")){var element=pans[0];var grp=element.parentNode;var clone=new Element(element.tagName);element.classNames().each(function(cn){clone.addClassName(cn);});clone.update(element.innerHTML);grp.appendChild(clone);}
pans[vid].addClassName(this.cfg.currentPointerClass);var reelPtr=dj.widget.panels.PanelsFactory.create(this.reelPtrCnt,{core:{panelGroup:".newsreel_pointer_container",panel:"li",viewArea:4,controller:reel},carousel:{type:"circular"}});if(reel.getNumberOfPanels()>3){reel.setActiveById(vid);}
return reel;},_setCurrentPanelActive:function(cnt){var artCurrent=((typeof AT_VARS==="object"&&AT_VARS.baseDocId)?AT_VARS.baseDocId:dj.util.Page.getQueryParam('baseDocId'));var vid=null;var that=this;cnt.select("#newsReelContent > .reelContentTree .unitList li h2").each(function(el,pos){var anch=el.down("a");if((typeof anch!=='undefined')&&(anch.href!==null)&&(anch.href.indexOf(artCurrent)!==-1)){vid=pos;$(el.parentNode).addClassName(that.cfg.currentPointerClass);}});return vid;},initNewsReelAds:function(adRegisterKey,newsReelContainer){var adId="";newsReelContainer.select("#newsReelContent .newsReelAd").each(function(el){new dj.util.Ads().loadAds(adRegisterKey,{id:el.getAttribute("id")});});}};<!-- fastdynapage - sbkj2kapachep02 - Tue 02/09/10 - 14:24:11 EST -->
