function FDCPBridge(_1){
this.count=0;
this.ifc=null;
this.oform;
this.tid=0;
this.fdcp=_1.fdcp;
this.pcallback=null;
this.fd_div_id="fd_page_main";
this.rmEl=new Array();
this.st=new Array();
this.nonescnames=["d","p","r","q","bn","bv"];
this.doesc=function(_2){
oloop:
for(var x in _2){
for(var n=0;n<this.nonescnames.length;n++){
if(x==this.nonescnames[n]){
continue oloop;
}
}
_2[x]=escape(_2[x]);
}
};
this.cleanPrint=function(_5,_6,_7){
if(this.fdcp.clt.getFDDebug()){
alert("DocDomain : ["+document.domain+"]");
}
this.pcallback=_7;
if(this.fdcp.browserDetect.browser=="Explorer"&&!fdcp.clt.templateTest){
if(this.fdcp.clt.getFDDebug()){
alert("IE Printing");
}
window.print();
this.pcallback(true);
return;
}
if(typeof this.ifc!="undefined"&&this.ifc!=null){
document.body.removeChild(this.ifc);
document.body.removeChild(this.oform);
}
var _8=this.fdcp.getCpUrl();
var _9="fDContentFrame";
this.ifc=document.createElement("iframe");
this.ifc.setAttribute("src","about:blank");
this.ifc.setAttribute("id",_9);
this.ifc.setAttribute("NAME",_9);
this.ifc.setAttribute("loaded",false);
this.ifc.onload=function(){
loaded=true;
};
this.ifc.style.width="0px";
this.ifc.style.height="0px";
this.ifc.style.border="0px";
document.body.appendChild(this.ifc);
if(self.frames[_9].name!=_9){
self.frames[_9].name=_9;
}
this.oform=document.createElement("form");
document.body.appendChild(this.oform);
this.oform.action=_8;
this.oform.name="FDForm";
this.oform.method="post";
this.oform.target=_9;
for(var k in _5){
var pc=document.createElement("input");
pc.type="hidden";
pc.name=k;
pc.value=_5[k];
this.oform.appendChild(pc);
}
this.count=0;
if(this.fdcp.clt.getFDDebug()){
alert("CP Submit");
}
this.oform.submit();
this.tid=setInterval(function(){
this.fdcp.bridge.checkcontent();
},1000);
};
this.log=function(_c,_d,_e,_f){
if(_e==null){
return;
}
try{
var _10="rtype=log&";
_10+="LOG_LEVEL="+_c+"&";
_10+="LOG_MSG="+_d+"&";
if(typeof _f!="undefined"&&_f!=null){
for(var p in _f){
_10+="&"+p+"="+_f[p];
}
}
var _12=fdGetAjaxObj();
if(typeof _12=="undefined"||_12==null){
return;
}
_12.open("POST",_e,true);
_12.setRequestHeader("Content-type","application/x-www-form-urlencoded");
_12.send(_10);
}
catch(e){
}
};
this.checkcontent=function(){
try{
if(this.count<10){
if(this.ifc!=null&&typeof this.ifc.contentDocument!="undefined"){
if(typeof this.ifc.contentDocument.forms["EOC"]!="undefined"){
clearInterval(this.tid);
this.fdcp.enPt(false);
if(this.fdcp.clt.getFDDebug()){
alert("CP Content Pass - Print");
}
this.ifc.contentWindow.print();
this.fdcp.enPt(true);
this.pcallback(true);
return true;
}else{
this.count=this.count+1;
}
}else{
this.count=this.count+1;
}
}else{
clearInterval(this.tid);
this.pcallback(false);
return false;
}
}
catch(e){
if(this.fdcp.clt.getFDDebug()){
alert("CP Content Fail : ["+e.message+"]");
}
this.count=10;
clearInterval(this.tid);
this.pcallback(false);
}
};
this.removeelements=function(){
var _13=new RegExp("^(?:(http[s]?)://([^/:]+)(:[0-9]+)?)?(.*)");
var _14=this.fdcp.getCpUrl();
var _15=_13.exec(_14);
if(_15==null){
return false;
}
var _16=this.fdcp.getCpPostData();
if(_16==null){
if(this.fdcp.clt.getFDDebug()){
alert("CP Content Fail");
}
return false;
}else{
if(this.fdcp.clt.getFDDebug()){
alert("CP Content Pass");
}
}
var _17=fdcp.clt.onPrint(_16);
if(typeof _17!="undefined"&&_17!=null&&_17==false){
return false;
}
if(_15[2]!=""){
var d=_13.exec(window.location);
if(_15[1]+_15[2]+_15[3]!=d[1]+d[2]+d[3]){
return false;
}
}
var _19="";
this.doesc(_16);
for(var x in _16){
_19+=x+"="+_16[x]+"&";
}
var _1b=fdGetAjaxObj();
if(typeof _1b=="undefined"||_1b==null){
return false;
}
_1b.open("POST",this.fdcp.getCpUrl(),false);
_1b.setRequestHeader("Content-type","application/x-www-form-urlencoded");
_1b.send(_19);
if(_1b.status==200){
var _1c=_1b.responseText;
if(_1c.indexOf("<FORM id=\"EOC\" />")!=-1){
var _1d=document.getElementById(this.fd_div_id);
if(_1d!=null){
if(this.togEl(true)){
_1d.style.display="block";
_1d.innerHTML=_1c;
}
}
}
}
};
this.revertback=function(){
var _1e=document.getElementById(this.fd_div_id);
if(_1e!=null){
_1e.innerHTML="";
_1e.style.display="none";
}
this.togEl(false);
};
this.togEl=function(bp){
var d=document;
var _21=d.body;
var _22=new Array();
if(bp){
var i=0;
this.st=[];
for(i=0;i<_21.childNodes.length;i++){
if(typeof _21.childNodes[i].id!="undefined"&&_21.childNodes[i].id==this.fd_div_id){
continue;
}else{
if(_21.childNodes[i].nodeName=="STYLE"||_21.childNodes[i].nodeName=="LINK"){
if(_21.childNodes[i].disabled){
continue;
}else{
_21.childNodes[i].disabled=true;
this.st.push(_21.childNodes[i]);
}
}else{
this.rmEl.push(_21.childNodes[i]);
}
}
}
try{
for(i=0;i<this.rmEl.length;i++){
_21.removeChild(this.rmEl[i]);
_22.push(this.rmEl[i]);
}
}
catch(err){
if(_21.childNodes.length>0){
var e=_21.childNodes[0];
for(i=0;i<_22.length;i++){
_21.insertBefore(_22[i],e);
}
}else{
for(i=0;i<_22.length;i++){
_21.appendChild(_22[i]);
}
}
this.rmEl.length=0;
return false;
}
if(d.styleSheets){
var ss;
for(var i=0;i<d.styleSheets.length;i++){
ss=d.styleSheets[i];
if(this.fdcp.clt.cpc.stylesheets!=undefined){
var _26=false;
for(var cps=0;cps<this.fdcp.clt.cpc.stylesheets.length;cps++){
if(ss.href==this.fdcp.clt.cpc.stylesheets[cps]){
_26=true;
break;
}
}
if(!_26){
if(ss.disabled==false){
ss.disabled=true;
this.st.push(ss);
}
}
}else{
if(ss.disabled==false){
ss.disabled=true;
this.st.push(ss);
}
}
}
}
}else{
for(var i=0;i<this.rmEl.length;i++){
_21.appendChild(this.rmEl[i]);
}
this.rmEl.length=0;
for(var i=0;i<this.st.length;i++){
this.st[i].disabled=false;
}
}
return true;
};
this.loadHandler=function(_28){
if(navigator.appName.indexOf("Microsoft")!=-1&&parseInt(navigator.appVersion)>=4&&navigator.userAgent.indexOf("Windows")!=-1){
if(document.body!=null){
var div=document.createElement("div");
div.setAttribute("id",this.fd_div_id);
div.style["display"]="none";
document.body.appendChild(div);
div.innerHTML="FD HIDDEN DIV";
}
if(_28.clt.cpc!=null&&_28.clt.getcpStat()=="y"){
window.attachEvent("onbeforeprint",function(){
_28.bridge.removeelements();
});
window.attachEvent("onafterprint",function(){
_28.bridge.revertback();
});
}
}
if(typeof Ajax=="undefined"){
var _2a=this.fdcp.clt.getCfg("ajaxlib");
if(typeof _2a=="undefined"||_2a==null){
return;
}
var e=document.createElement("script");
e.src=_2a;
e.type="text/javascript";
document.getElementsByTagName("head")[0].appendChild(e);
}
};
}
function FDCPUrl(_2c){
return fdcp.linkPrintHandler(_2c);
}
function FDCP(){
this.clt=FDCPLoader.FDCPClient;
this.bridge=new FDCPBridge({fdcp:this});
this.fdser=new FDSerializer(this.clt);
this.tstr=this.clt.getTPath();
this.logUrl=this.clt.getLPath();
this.pfLink=null;
this.linkClicked=false;
this.fdpt=null;
if(this.clt.getFDDebug()){
alert("TPath : ["+this.clt.getTPath()+"] Tmpl : ["+this.clt.getTmpl()+"] Div : ["+this.clt.getDiv()+"]");
}
if(this.clt.insType=="c"){
this.fdpt=new FormatDynamicsPT(this.clt);
}
this.cpEn=function(){
return fdcp.clt.cpc!=null&&fdcp.clt.getcpStat()=="y";
};
this.browserSupported=function(){
if(this.browserDetect.browser=="Opera"){
return false;
}else{
if((this.browserDetect.browser=="Safari")&&(this.browserDetect.OS=="Windows")){
return false;
}else{
return true;
}
}
};
this.getCpUrl=function(){
return this.tstr+"?"+(new Date()).getTime();
};
this.linkPrintHandler=function(_2d){
if(_2d!=undefined){
this.pfLink=_2d;
}
if(this.cpEn()==false||!this.browserSupported()){
this.CPFailover(false);
return true;
}
try{
if(fdcp.linkClicked!=true){
fdcp.linkClicked=true;
var _2e=this.getCpPostData();
this.clt.blkwidth=this.fdser.getWidestBlkWidth();
var _2f=this.clt.onPrint(_2e);
if(typeof _2f!="undefined"&&_2f!=null&&_2f==false){
if(this.clt.getFDDebug()){
alert("onPrint() returned "+_2f+", failing over");
}
this.CPFailover(false);
return false;
}
if(_2e!=null){
if(this.clt.getFDDebug()){
alert("CPPostData - Pass");
}
this.bridge.cleanPrint(_2e,this.clt.getTO(),function(_30){
fdcp.CPFailover(_30);
});
}else{
if(this.clt.getFDDebug()){
alert("CPPostData - Fail (cpdata is null)");
}
this.CPFailover(false);
}
}
}
catch(e){
if(this.clt.getFDDebug()){
alert("CPPostData - Fail (error): "+e.message);
}
fdcp.CPFailover(false);
}
return true;
};
this.getCpPostData=function(){
if(typeof this.clt.getDiv()=="undefined"||this.clt.getDiv()==null||this.clt.getDiv().length==0){
this.bridge.log("ERROR","No division defined",this.logUrl);
return null;
}
if(typeof this.clt.getSegment()=="undefined"||this.clt.getSegment()==null){
this.bridge.log("ERROR","No segment defined",this.logUrl);
return null;
}
var pc=null;
if(typeof fdcp.clt.onBeforeContentSerialization=="function"){
fdcp.clt.onBeforeContentSerialization();
}
try{
pc=this.getPCXPath();
}
catch(e){
this.bridge.log("ERROR","Error parsing primary content.",this.logUrl);
return null;
}
finally{
if(typeof fdcp.clt.onAfterContentSerialization=="function"){
fdcp.clt.onAfterContentSerialization();
}
}
if(pc!=null&&pc.length==0){
pc=null;
}
var _32=null;
try{
_32=this.getImages();
}
catch(e){
this.bridge.log("ERROR","Error parsing for image data.",this.logUrl);
return null;
}
var _33=this.clt.getTmpl();
if(typeof _33=="undefined"||_33==null||_33.length==0){
pc="";
this.tmpl="";
}
var _34={d:this.clt.getDiv(),a:navigator.appName+" "+navigator.userAgent,s:this.clt.getSegment(),u:window.location.href,p:this.clt.getPFF(),r:this.clt.getRfmt(),q:"1.0",bn:this.browserDetect.browser,bv:this.browserDetect.version,template:_33,ci:_32};
if(pc!=null){
_34.pc=pc;
}
var qp=this.clt.getVR();
if(typeof qp!="undefined"&&qp!=null){
for(var ki in qp){
_34[ki]=qp[ki];
}
}
if(this.clt.getTemplateTest()){
_34.tt=this.clt.getTemplateTest();
}
return _34;
};
this.getPCXPath=function(){
var _37=new Array();
for(var i=0;i<this.xpathDefs.length;i++){
var _39=this.xpathDefs[i];
if(_39.selection=="exclude"){
var _3a=this.getXPathNodes(_39);
if(_3a==null){
return null;
}
for(var j=0;j<_3a.length;j++){
_37.push(_3a[j]);
}
}
}
this.fdser.setExcludes(_37);
var pc=new Object();
var _3d=new Object();
var _3e="";
for(var i=0;i<this.xpathDefs.length;i++){
var _39=this.xpathDefs[i];
if(_39.selection=="include"){
if(typeof _39.target=="undefined"||_39.target==null||_39.target==""){
_39.target="default";
}
var _3f=this.getXPathNodes(_39);
if(_3f==null){
return null;
}
if((typeof pc[_39.target]=="undefined"||pc[_39.target]==null)&&_3f.length>0){
pc[_39.target]=new Array();
_3d[_39.target]=_39.mode;
}
for(var j=0;j<_3f.length;j++){
if((_3e=="P"&&_3f[j].nodeType==3)||(i!=0&&j==0)){
this.fdser.newpg(pc[_39.target]);
}
this.fdser.serializeNode(_3f[j],pc[_39.target],null,_39.inlineDiv?"false":"true",_39.mode);
if(_39.pagebreak=="all"){
pc[_39.target].push("<pagebreak />");
}
_3e=_3f[j].nodeName;
}
if(_39.pagebreak=="last"){
pc[_39.target].push("<pagebreak />");
}
}
}
var _40=0;
var _41=new String("");
for(var key in pc){
_41+="<subcontent content_id=\""+key+"\" mode=\""+(typeof _3d[key]=="undefined"?"normal":_3d[key])+"\"><paragraph>";
for(var i=0;i<pc[key].length;i++){
_41+=pc[key][i];
_40++;
}
_41+="</paragraph></subcontent>";
}
if(_40==0){
return null;
}else{
if(this.clt.getFDDebug()){
alert("ContentCount : ["+_40+"]");
}
}
return "<content>"+_41+"</content>";
};
this.getXPathNodes=function(_43){
var _44=document;
var _45=document;
if(typeof this.contextXpath!="undefined"){
if(this.browserDetect.browser=="Explorer"){
_44=document;
_45=frames["contextFrame"].document;
}else{
_44=this.contextXpath;
_45=_44.documentElement;
}
}
var rv=new Array();
try{
var _47=_44.evaluate(_43.query,_45,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null);
var _48=_47.iterateNext();
if(_43.occurrence=="once"){
if(_48){
if(_43.include=="outer"){
rv.push(_48);
}else{
if(_43.include=="inner"){
var _49=_48.childNodes;
var _4a="";
for(var j=0;j<_49.length;j++){
rv.push(_49[j]);
}
}
}
}else{
}
}else{
if(_43.occurrence=="all"){
while(_48){
if(_43.include=="outer"){
rv.push(_48);
}else{
if(_43.include=="inner"){
var _49=_48.childNodes;
var _4a="";
for(var j=0;j<_49.length;j++){
rv.push(_49[j]);
}
}
}
_48=_47.iterateNext();
}
}
}
}
catch(e){
return null;
}
if(rv.length<_43.required){
if(this.clt.getFDDebug()){
alert("No content found for required xpath: "+_43.query);
}
return null;
}
return rv;
};
this.sortXPathDefs=function(_4c){
var _4d=new Array();
var _4e=new Array();
var _4f=new Array();
var _50=new Array();
for(var i=0;i<_4c.length;i++){
var _52=_4c[i];
if(_52.selection=="exclude"){
_4d.push(_52);
}else{
if(_52.location=="front"){
_4e.push(_52);
}else{
if(_52.location=="domOrder"){
_4f.push(_52);
}else{
if(_52.location=="back"){
_50.push(_52);
}
}
}
}
}
return _4d.concat(_4e.concat(_4f.concat(_50)));
};
this.replacePrintLinks=function(){
this.xpathDefs=FDCPLoader.cpDef.xpathDefs;
var _53=new Array();
var _54=false;
for(var i=0;i<this.xpathDefs.length;i++){
var _56=this.xpathDefs[i];
if(typeof _56.context!="undefined"&&_56.context!="self"){
_54=true;
}
if(_56.selection=="printlink"){
var _57=this.getXPathNodes(_56);
if(_57==null){
return null;
}
for(var j=0;j<_57.length;j++){
_53.push(_57[j]);
}
}
}
if(!_54&&FDCPLoader.FDCPClient.cpc.preloadPF){
FDCPLoader.FDCPClient.cpc.preloadPF=false;
}
var _59=typeof FDCPLoader.FDCPClient.getIframeUrls=="undefined"||typeof FDCPLoader.FDCPClient.getIframeUrls()=="undefined"?[]:FDCPLoader.FDCPClient.getIframeUrls();
if(_54&&_59.length==1&&_59[0]==window.location.href){
for(var i=0;i<this.xpathDefs.length;i++){
var _56=this.xpathDefs[i];
_54.context="self";
}
}else{
if(_54&&_59.length==1&&FDCPLoader.FDCPClient.cpc.preloadPF){
this.createContextFrame(_59[0]);
}
}
for(var i=0;i<_53.length;i++){
var _5a=_53[i];
if(_5a.nodeName=="A"){
_5a.href="#";
_5a.onclick=function(){
FDCPUrl();
return false;
};
}else{
if(_5a.nodeName=="BUTTON"){
_5a.onclick=function(){
FDCPUrl();
return false;
};
}
}
}
};
this.contextFrameLoaded=false;
this.contextFrame;
this.contextXpath;
this.createContextFrame=function(url){
this.contextFrame=document.createElement("iframe");
this.contextFrame.setAttribute("src",url);
this.contextFrame.setAttribute("id","contextFrame");
this.contextFrame.setAttribute("NAME","contextFrame");
if(this.browserDetect.browser=="Explorer"){
this.contextFrame.onreadystatechange=function(){
if(fdcp.contextFrame.readyState=="complete"){
fdcp.contextFrameLoaded=true;
fdcp.contextXpath=frames[fdcp.contextFrame.NAME].document;
}
};
}else{
this.contextFrame.onload=function(){
fdcp.contextFrameLoaded=true;
if(fdcp.browserDetect.browser=="Firefox"&&fdcp.browserDetect.version==3){
fdcp.contextXpath=fdcp.contextFrame.contentDocument;
}else{
fdcp.contextXpath=frames[fdcp.contextFrame.NAME].document;
}
};
}
this.contextFrame.style.width="2000px";
this.contextFrame.style.height="2000px";
this.contextFrame.style.position="absolute";
this.contextFrame.style.top="-3000px";
this.contextFrame.style.border="0px";
document.body.appendChild(this.contextFrame);
};
this.getImages=function(){
var _5c=new Array();
var _5d="<images>";
if(typeof fdImages!="undefined"){
for(var n=0;n<fdImages.length;n++){
var img=document.getElementById(fdImages[n]);
if(img!=null){
this.fdser.serializeNode(img,_5c,false);
}
}
for(var i=0;i<_5c.length;i++){
_5d+=_5c[i];
}
}
_5d+="</images>";
return _5d;
};
this.enPt=function(_61){
if(typeof formatDynamicsPT!="undefined"){
for(i=0;i<document.styleSheets.length;i++){
try{
var _62=document.styleSheets[i];
if(navigator.appName.indexOf("Netscape")!=-1&&formatDynamicsPT.isPtCss(_62.cssRules[0].style.content)){
_62.disabled=!_61;
break;
}
}
catch(e){
}
}
}
};
this.CPFailover=function(_63){
this.linkClicked=false;
if(_63==false){
if(this.pfLink!=null){
var _64=this.clt.getCfg("pfType",null);
if(_64==null||_64.toLowerCase()=="replace"){
window.open(this.pfLink,"_self");
return false;
}else{
window.open(this.pfLink);
return false;
}
}
window.print();
}
};
this.browserDetect={init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(_65){
for(var i=0;i<_65.length;i++){
var _67=_65[i].string;
var _68=_65[i].prop;
this.versionSearchString=_65[i].versionSearch||_65[i].identity;
if(_67){
if(_67.indexOf(_65[i].subString)!=-1){
return _65[i].identity;
}
}else{
if(_68){
return _65[i].identity;
}
}
}
},searchVersion:function(_69){
var _6a=_69.indexOf(this.versionSearchString);
if(_6a==-1){
return;
}
return parseFloat(_69.substring(_6a+this.versionSearchString.length+1));
},dataBrowser:[{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
this.loadHandler=function(){
var _6b=this.browserDetect.browser=="Explorer"&&this.browserDetect.OS=="Windows";
if(!this.cpEn()){
if(_6b&&this.browserDetect.version>=4&&this.clt.insType=="c"){
window.attachEvent("onbeforeprint",function(){
fdcp.fdpt.getFDImage();
});
}
}else{
fdcp.bridge.loadHandler(this);
}
if(!_6b&&this.clt.insType=="c"){
fdcp.fdpt.changePrintStyleSheet();
}
};
this.browserDetect.init();
}
var fdcp=new FDCP();
if(typeof FDCPLoader!="undefined"){
fdcp.loadHandler();
}else{
if(window.addEventListener){
window.addEventListener("load",function(){
fdcp.loadHandler();
},false);
}else{
if(window.attachEvent){
window.attachEvent("onload",function(){
fdcp.loadHandler();
});
}
}
}
FDCPLoader.registerModuleLoaded("cp.js");
if(typeof FDCPLoader.FDCPClient.onCpLoad=="function"){
FDCPLoader.FDCPClient.onCpLoad();
}
function FDSerializer(_6c){
this.fdclient=_6c;
this._bxs="border-style";
this._bbs="border-bottom-style";
this._bts="border-top-style";
this._bls="border-left-style";
this._brs="border-right-style";
this._bxw="border-width";
this._bbw="border-bottom-width";
this._btw="border-top-width";
this._blw="border-left-width";
this._brw="border-right-width";
this._bxc="border-color";
this._bbc="border-bottom-color";
this._btc="border-top-color";
this._blc="border-left-color";
this._brc="border-right-color";
this._ffam="font-family";
this._fsiz="font-size";
this._fwei="font-weight";
this._fsty="font-style";
this._fcol="color";
this._tdec="text-decoration";
this._bgc="background-color";
this._bgi="background-image";
this._bgr="background-repeat";
this._mta="text-align";
this._brcl="border-collapse";
this._brsp="border-spacing";
this._px="padding";
this._pb="padding-bottom";
this._pt="padding-top";
this._pl="padding-left";
this._pr="padding-right";
this._clear="clear";
this._float="float";
this._mb="margin-bottom";
this._mt="margin-top";
this.sm=new Array();
this.sm[this._bxs]="borderStyle";
this.sm[this._bbs]="borderBottomStyle";
this.sm[this._bts]="borderTopStyle";
this.sm[this._bls]="borderLeftStyle";
this.sm[this._brs]="borderRightStyle";
this.sm[this._bxw]="borderWidth";
this.sm[this._bbw]="borderBottomWidth";
this.sm[this._btw]="borderTopWidth";
this.sm[this._blw]="borderLeftWidth";
this.sm[this._brw]="borderRightWidth";
this.sm[this._bxc]="borderColor";
this.sm[this._bbc]="borderBottomColor";
this.sm[this._btc]="borderTopColor";
this.sm[this._blc]="borderLeftColor";
this.sm[this._brc]="borderRightColor";
this.sm[this._ffam]="fontFamily";
this.sm[this._fsiz]="fontSize";
this.sm[this._fwei]="fontWeight";
this.sm[this._fsty]="fontStyle";
this.sm[this._fcol]="color";
this.sm[this._tdec]="textDecoration";
this.sm[this._clear]="clear";
this.sm[this._float]="float";
this.sm[this._bgc]="backgroundColor";
this.sm[this._bgi]="backgroundImage";
this.sm[this._bgr]="backgroundRepeat";
this.sm[this._mta]="textAlign";
this.sm[this._brcl]="borderCollapse";
this.sm[this._brsp]="borderSpacing";
this.sm[this._px]="padding";
this.sm[this._pb]="paddingBottom";
this.sm[this._pt]="paddingTop";
this.sm[this._pl]="paddingLeft";
this.sm[this._pr]="paddingRight";
this.sm[this._mb]="marginBottom";
this.sm[this._mt]="marginTop";
this.sz=new Array();
this.sz["xx-small"]="8pt";
this.sz["x-small"]="10pt";
this.sz["small"]="12pt";
this.sz["medium"]="14pt";
this.sz["large"]="18pt";
this.sz["x-large"]="24pt";
this.sz["xx-large"]="35pt";
this.sz["auto"]="10pt";
this.ftsz=new Array();
this.ftsz[1]="10px";
this.ftsz[2]="12px";
this.ftsz[3]="14px";
this.ftsz[4]="18px";
this.ftsz[5]="24px";
this.ftsz[6]="30px";
this.ftsz[7]="48px";
this._widestblkwidth=0;
this.excludesXpath=new Array();
this.text_only_state={off:0,on:1,once:2};
this.getHeadingLevel=function(_6d){
if(_6d=="H1"){
return "24pt";
}else{
if(_6d=="H2"){
return "18pt";
}else{
if(_6d=="H3"){
return "14pt";
}else{
if(_6d=="H4"){
return "12pt";
}else{
if(_6d=="H5"){
return "10pt";
}else{
if(_6d=="H6"){
return "8pt";
}else{
return "12pt";
}
}
}
}
}
}
};
this.translateStyle=function(_6e){
if(_6e=="float"){
if(fdcp.browserDetect.browser=="Explorer"){
return "styleFloat";
}else{
return "cssFloat";
}
}
var v=this.sm[_6e];
if(v){
return v;
}
return _6e;
};
this.isMT=function(val){
return val==null||typeof val=="undefined"||val=="";
};
this.isRelFont=function(sz){
return sz.indexOf("%")>0||sz.indexOf("em")>0||sz.indexOf("ex")>0;
};
this.getStyleValue=function(_72,_73,_74){
var _75=this.translateStyle(_73);
if(typeof _74!="undefined"&&_74==true){
if(_72.style[_75].length>0){
return _72.style[_75];
}else{
return null;
}
}
if(_73=="width"&&_72.offsetWidth){
return _72.offsetWidth;
}
if(_73=="height"&&(typeof _72.offsetHeight!="undefined"&&_72.offsetHeight!=null)){
if(fdcp.browserDetect.browser=="Firefox"&&fdcp.browserDetect.version==2&&_72.nodeName=="SPAN"){
var _76=typeof _72.offsetHeight!="undefined"&&_72.offsetHeight!=null?_72.offsetHeight:0;
for(var i=0;i<_72.childNodes.length;i++){
if(_72.childNodes[i].nodeType!=3){
_76+=this.getStyleValue(_72.childNodes[i],"height");
}
}
return _76;
}else{
if(_72.offsetHeight==0){
if(_72.childNodes.length==1){
if(typeof this.getStyleValue(_72.childNodes[0],"float")!="undefined"&&this.getStyleValue(_72.childNodes[0],"float")!=null){
var _78=this.getStyleValue(_72.childNodes[0],"float");
var _79=0;
if(_78=="left"){
_79=this.getStyleValue(_72.childNodes[0],"height");
return _79;
}
}
}
return _72.offsetHeight;
}else{
var _7a=_72.offsetHeight;
if(_72.nodeName=="DIV"||_72.nodeName=="TD"||_72.nodeName=="TH"){
var _7b=this.getStyleValue(_72,this._pt);
var _7c=this.getStyleValue(_72,this._pb);
if(_7b.indexOf("px")!=-1){
_7a-=_7b.substring(0,_7b.length-2);
}
if(_7c.indexOf("px")!=-1){
_7a-=_7c.substring(0,_7c.length-2);
}
}
return _7a;
}
}
return _72.offsetHeight;
}
if(_72.currentStyle&&fdcp.browserDetect.browser=="Explorer"){
var _7d=_72.currentStyle[_75];
if(_73==this._fsiz&&_7d.match(/^\d+$/)!=null){
if(_7d<1){
_7d=1;
}else{
if(_7d>7){
_7d=7;
}
}
_7d=this.ftsz[_7d];
}
return _7d;
}else{
try{
var _7e=document.defaultView.getComputedStyle(_72,"");
var ret=_7e[_75];
return ret;
}
catch(e){
if(_73!=this._float){
try{
var _7e=document.defaultView.getComputedStyle(_72.parentNode,"");
var ret=_7e[_75];
return ret;
}
catch(e2){
var _80=_72.parentNode.currentStyle[_75];
if(fdcp.browserDetect.browser=="Explorer"&&_73==this._fsiz&&_80.match(/^\d+$/)!=null){
_80=this.getIeFtSz(_80);
}
return _80;
}
}else{
return null;
}
}
}
};
this.getIeFtSz=function(_81){
if(_81<1){
_81=1;
}else{
if(_81>7){
_81=7;
}
}
return this.ftsz[_81];
};
this.getBorderStyles=function(_82){
var bxs,bbs,bts,bls,brs;
var bxw,bbw,btw,blw,brw;
var bxc,bbc,btc,blc,brc;
bxs=this.getStyleValue(_82,this._bxs);
bbs=this.getStyleValue(_82,this._bbs);
bts=this.getStyleValue(_82,this._bts);
bls=this.getStyleValue(_82,this._bls);
brs=this.getStyleValue(_82,this._brs);
var _92=bbs||bts||bls||brs;
if(!bxs&&!_92){
return "";
}
var _93="";
if(_92&&!(bbs==bts&&bts==bls&&bls==brs)){
if(bbs&&bbs!=null&&bbs.length>0){
_93+=this._bbs+":"+bbs+";";
}
if(bts&&bts!=null&&bts.length>0){
_93+=this._bts+":"+bts+";";
}
if(bls&&bls!=null&&bls.length>0){
_93+=this._bls+":"+bls+";";
}
if(brs&&brs!=null&&brs.length>0){
_93+=this._brs+":"+brs+";";
}
}else{
if(_92=="none"){
return "";
}else{
if(_92&&(bbs==bts&&bts==bls&&bls==brs)){
_93+=this._bxs+":"+bbs+";";
}else{
if(bxs&&bxs!=null&&bxs.length>0){
_93+=this._bxs+":"+bxs+";";
}
}
}
}
bxw=this.getStyleValue(_82,this._bxw);
bbw=this.getStyleValue(_82,this._bbw);
btw=this.getStyleValue(_82,this._btw);
blw=this.getStyleValue(_82,this._blw);
brw=this.getStyleValue(_82,this._brw);
var _94=bbw||btw||blw||brw;
bxc=this.getStyleValue(_82,this._bxc);
bbc=this.getStyleValue(_82,this._bbc);
btc=this.getStyleValue(_82,this._btc);
blc=this.getStyleValue(_82,this._blc);
brc=this.getStyleValue(_82,this._brc);
var _95=bbc||btc||blc||brc;
if(_94&&!(bbw==btw&&btw==blw&&blw==brw)){
if(bbw&&bbw!=null&&bbw.length>0){
_93+=this._bbw+":"+bbw+";";
}
if(btw&&btw!=null&&btw.length>0){
_93+=this._btw+":"+btw+";";
}
if(blw&&blw!=null&&blw.length>0){
_93+=this._blw+":"+blw+";";
}
if(brw&&brw!=null&&brw.length>0){
_93+=this._brw+":"+brw+";";
}
}else{
if(_94&&(bbw==btw&&btw==blw&&blw==brw)){
_93+=this._bxw+":"+bbw+";";
}else{
if(bxw&&bxw!=null&&bxw.length>0){
_93+=this._bxw+":"+bxw+";";
}
}
}
if(_95&&!(bbc==btc&&btc==blc&&blc==brc)){
if(bbc&&bbc!=null&&bbc.length>0){
_93+=this._bbc+":"+bbc+";";
}
if(btc&&btc!=null&&btc.length>0){
_93+=this._btc+":"+btc+";";
}
if(blc&&blc!=null&&blc.length>0){
_93+=this._blc+":"+blc+";";
}
if(brc&&brc!=null&&brc.length>0){
_93+=this._brc+":"+brc+";";
}
}else{
if(_95&&(bbc==btc&&btc==blc&&blc==brc)){
_93+=this._bxc+":"+bbc+";";
}else{
if(bxc&&bxc!=null&&bxc.length>0){
_93+=this._bxc+":"+bxc+";";
}
}
}
return _93;
};
this.getPaddingStyle=function(_96){
var px,pb,pt,pl,pr;
px=this.getStyleValue(_96,this._px);
pb=this.getStyleValue(_96,this._pb);
pt=this.getStyleValue(_96,this._pt);
pl=this.getStyleValue(_96,this._pl);
pr=this.getStyleValue(_96,this._pr);
var _9c=pb||pt||pl||pr;
if(!px&&!_9c){
return "";
}
var _9d="";
if(_9c&&!(pb==pt&&pt==pl&&pl==pr)){
if(pb&&pb!=null&&pb.length>0){
_9d+=this._pb+":"+pb+";";
}
if(pt&&pt!=null&&pt.length>0){
_9d+=this._pt+":"+pt+";";
}
if(pl&&pl!=null&&pl.length>0){
_9d+=this._pl+":"+pl+";";
}
if(pr&&pr!=null&&pr.length>0){
_9d+=this._pr+":"+pr+";";
}
}else{
if(_9c=="none"){
return "";
}else{
if(_9c&&(pb==pt&&pt==pl&&pl==pr)){
_9d+=this._px+":"+pb+";";
}else{
if(px&&px!=null&&px.length>0){
_9d+=this._px+":"+px+";";
}
}
}
}
return _9d;
};
this.getMultiplier=function(str){
if(str.indexOf("%")>0){
var num=str.substring(0,str.indexOf("%"));
return num/100;
}
if(str.indexOf("em")>0){
var num=str.substring(0,str.indexOf("em"));
return num;
}
if(str.indexOf("ex")>0){
var num=str.substring(0,str.indexOf("ex"));
return num*0.4;
}
};
this.calculateFontSize=function(_a0){
var _a1=new Array();
var _a2;
var _a3;
_a1.push(this.getStyleValue(_a0,"font-size"));
_a0=_a0.parentNode;
while(_a0!=null){
if(_a0.nodeType==3){
_a0=_a0.parentNode;
continue;
}
_a3=this.getStyleValue(_a0,"font-size",true);
if(_a3!=null){
if(this.isRelFont(_a3)){
_a1.push(_a3);
}else{
break;
}
}else{
_a3=this.getStyleValue(_a0,"font-size");
if(this.isRelFont(_a3)==false){
break;
}else{
if(_a3!=_a1[_a1.length-1]){
_a1.push(_a3);
}
}
}
_a0=_a0.parentNode;
}
if(this.sz[_a3]!=null){
_a3=this.sz[_a3];
}
_a2=_a3.substring(_a3.length-2);
_a3=_a3.substring(0,_a3.length-2);
for(var i=0;i<_a1.length;i++){
_a3=_a3*this.getMultiplier(_a1[i]);
}
return Math.round(_a3)+_a2;
};
this.getImageStyle=function(_a5){
var _a6=_a5.width;
var _a7=_a5.height;
var _a8=this.getBorderStyles(_a5);
var _a9;
if(!_a6){
_a6=this.getStyleValue(_a5,"width");
}
if(!_a7){
_a7=this.getStyleValue(_a5,"height");
}
_a9="style=\""+"width:"+_a6+";height:"+_a7+";";
if(typeof this.getStyleValue(_a5,"float")!="undefined"&&this.getStyleValue(_a5,"float")!=null){
_a9+="float:"+this.getStyleValue(_a5,"float")+";";
}
if(_a8){
_a9+=_a8;
}
_a9+="\"";
return _a9;
};
this.getNodeStyle=function(_aa,blk,_ac){
var _ad="style=\"";
var _ae=this.getStyleValue(_aa,this._ffam);
var _af=this.getStyleValue(_aa,this._fsiz);
var _b0=this.getStyleValue(_aa,this._fwei);
var _b1=this.getStyleValue(_aa,this._tdec);
if(fdcp.browserDetect.browser=="Firefox"){
var _b2=parseInt(_b0);
if(typeof _b2!="undefined"&&!isNaN(_b2)&&_b2==401){
_b0=700;
}
}
var _b3=this.getStyleValue(_aa,this._fsty);
var _b4=this.getStyleValue(_aa,this._fcol);
var reg=new RegExp("MS Sans Serif","i");
_ae=_ae.replace(reg,"sans-serif");
if(_ae.indexOf("\"")>=0){
_ae=_ae.replace(/\"/g,"");
}
if(this.isRelFont(_af)){
_af=this.calculateFontSize(_aa);
}
_ad+=this._ffam+":"+_ae+";"+this._fsiz+":"+_af+";"+this._fwei+":"+_b0+";"+this._fsty+":"+_b3+";"+this._fcol+":"+_b4+";"+(_b1=="none"?"":this._tdec+":"+_b1+";");
if(blk){
var _b6=false;
if(_aa.nodeName=="SPAN"){
var f=this.getStyleValue(_aa,"float");
if(typeof f=="undefined"||f==null&&(f!="right"&&f!="left")){
_b6=true;
}
}
var _b8=this.getStyleValue(_aa,"width",_b6);
var _b9=this.getStyleValue(_aa,"height",_b6);
var _ba=this.getBorderStyles(_aa);
var _bb=this.getPaddingStyle(_aa);
var _bc=this.getStyleValue(_aa,this._mta);
var _bd=this.getStyleValue(_aa,this._bgc);
var _be=this.getStyleValue(_aa,this._bgi).replace(/\"/g,"'");
var _bf=this.getStyleValue(_aa,this._bgr);
var _c0=this.getStyleValue(_aa,this._clear);
var _c1=this.getStyleValue(_aa,this._float);
var _c2=this.getStyleValue(_aa,this._bbw);
var _c3=this.getStyleValue(_aa,this._btw);
var _c4=this.getStyleValue(_aa,this._blw);
var _c5=this.getStyleValue(_aa,this._brw);
var cf=_af.substring(0,_af.length-2);
if(this.isRelFont(_c2)){
_c2=_c2.substring(0,_c2.length-2);
_c2=_c2*cf;
_c2=_c2+"px";
}
if(this.isRelFont(_c3)){
_c3=_c3.substring(0,_c3.length-2);
_c3=_c3*cf;
_c3=_c3+"px";
}
if(this.isRelFont(_c4)){
_c4=_c4.substring(0,_c4.length-2);
_c4=_c4*cf;
_c4=_c4+"px";
}
if(this.isRelFont(_c5)){
_c5=_c5.substring(0,_c5.length-2);
_c5=_c5*cf;
_c5=_c5+"px";
}
if(_c2!=null){
_ad+=this._bbw+":"+_c2+";";
}
if(_c3!=null){
_ad+=this._btw+":"+_c3+";";
}
if(_c4!=null){
_ad+=this._blw+":"+_c4+";";
}
if(_c5!=null){
_ad+=this._brw+":"+_c5+";";
}
_ad+=this._clear+":"+_c0+";"+(_c1=="left"||_c1=="right"?(this._float+":"+_c1+";"):"");
_ad+=_ba+_bb;
if(_b8!=null&&_b8!="auto"&&_b8!="0auto"){
_ad+="width: "+_b8+";";
}
if(_b9!=null&&_b9!="auto"&&_b9!="0auto"){
if(_ac&&_ac>0&&(_aa.nodeName=="TD"||_aa.nodeName=="TH")){
_b9-=_ac;
}
_ad+="height: "+_b9+";";
}
var mt=this.getStyleValue(_aa,this._mt);
var mb=this.getStyleValue(_aa,this._mb);
if(mt!="auto"&&(mt.charAt(0)=="0"||mt.charAt(0)=="-")){
_ad+=this._mt+":"+mt+";";
}
if(mb!="auto"&&(mb.charAt(0)=="0"||mb.charAt(0)=="-")){
_ad+=this._mb+":"+mb+";";
}
if(_aa.nodeName=="UL"||_aa.nodeName=="LI"){
_ad+="line-height: 1.2;";
if(_aa.nodeName=="UL"){
var _c9="";
if(_aa.currentStyle){
_c9=_aa.currentStyle["listStyleType"];
_ad+="list-style-type:"+_c9+";";
}else{
if(window.getComputedStyle){
_c9=document.defaultView.getComputedStyle(_aa,null).getPropertyValue("list-style-type");
_ad+="list-style-type:"+_c9+";";
}
}
}
}else{
var _ca=this.getStyleValue(_aa,"lineHeight");
if(_ca!="auto"){
_ad+="line-height:"+_ca+";";
}
}
if(_bd!="transparent"){
_ad+=this._bgc+":"+_bd+";";
}
if(_be!="none"){
if(fdcp.browserDetect.browser=="Firefox"){
var _cb=_be.replace("url(","url('");
var _cc=_cb.replace(")","')");
_be=_cc;
_ad+=this._bgi+":"+_be+";";
}else{
_ad+=this._bgi+":"+_be+";";
}
}
if(_bf!="repeat"){
_ad+=this._bgr+":"+_bf+";";
}
_ad+=this._mta+":"+_bc+";";
if(_aa.nodeName=="TABLE"){
var v=this.getStyleValue(_aa,this._brcl);
if(!this.isMT(v)){
_ad+=this._brcl+":"+v+";";
}
v=this.getStyleValue(_aa,this._brsp);
if(!this.isMT(v)){
_ad+=this._brsp+":"+v+";";
}
}
}
return _ad+"\"";
};
this.serializeText=function(_ce,_cf){
var st=_ce.nodeValue;
if(st&&st.replace(/[\r\n]/g,"").match(/^\s*$/)==null){
st="";
if(_cf!="data"){
var st=" "+this.getNodeStyle(_ce,false);
if(_ce.nodeValue=="<"){
_ce.nodeValue="&lt;";
}
if(_ce.nodeValue==">"){
_ce.nodeValue="&gt;";
}
}
return "<text"+st+">"+C2E(_ce.nodeValue)+"</text>";
}
return "";
};
function C2E(str){
var acc="";
for(var i=0;i<str.length;i++){
if(str.charCodeAt(i)>31&&str.charCodeAt(i)<127){
acc+=str.charAt(i);
}else{
acc+="&#"+str.charCodeAt(i)+";";
}
}
acc=acc.replace(/&/g,"&#38;");
acc=acc.replace(/'/g,"&#39;");
acc=acc.replace(/"/g,"&#34;");
acc=acc.replace(/\\/g,"&#92;");
acc=acc.replace(/\+/g,"&#43;");
acc=acc.replace(/</g,"&#60;");
acc=acc.replace(/>/g,"&#62;");
return acc;
}
this.serializeCDATA=function(_d4){
return "<![CDATA["+_d4.nodeValue+"]]>";
};
this.serializeBR=function(_d5,_d6){
return "<text"+(_d6=="data"?"":" "+this.getNodeStyle(_d5,false))+"><"+_d5.nodeName+" /></text>";
};
this.serializeImage=function(_d7,_d8){
var _d9;
var st="";
if(_d8!="data"){
st=this.getImageStyle(_d7,true);
}
var src=_d7.getAttribute("src");
var alt=_d7.getAttribute("alt");
var _dd=_d7.getAttribute("align");
var _de=_d7.ownerDocument;
if(src.indexOf("http")==0){
}else{
if(src.charAt(0)=="/"){
var url=_de.URL;
var _e0=new RegExp("^http(?:s)?://[^/]*");
var res=_e0.exec(url);
var _e2=res[0];
src=_e2+src;
}else{
var url=_de.URL;
var _e0=new RegExp("^http(?:s)?://[^?]*");
var res=_e0.exec(url);
var _e2=res[0];
_e2=_e2.substring(0,_e2.lastIndexOf("/"));
src=_e2+"/"+src;
}
}
_d9="<image ";
if(_d7.id){
_d9+="id='"+_d7.id+"' ";
}
if(typeof _dd!="undefined"&&_dd!=null){
_d9+="align='"+_dd+"' ";
}
_d9+=st+" src='"+C2E(src)+"' ";
if(typeof alt!="undefined"&&alt!=null&&alt.length>0){
_d9+="alt='"+C2E(alt)+"' ";
}
_d9+="/>";
return _d9;
};
this.serializeParagraph=function(_e3){
return this.serializeBR(_e3);
};
this.serializeGoogleImage=function(_e4){
var _e5;
_e5="<image ";
if(_e4.id){
_e5+="id='"+_e4.id+"' ";
}
var i=new Image();
i.src=_e4.getAttribute("src");
var st=_e4.style.cssText;
var _e8="";
if(fdcp.browserDetect.browser=="Explorer"){
_e8=_e4.currentStyle["top"];
}else{
_e8=_e4.style.top;
}
if(_e8!="auto"&&_e8!=null){
return _e5+" style=' "+"top:"+_e8+";"+st+" ' "+" src=' "+C2E(i.src)+" ' />";
}else{
return _e5+" style=' "+st+" ' "+" src=' "+C2E(i.src)+" ' />";
}
};
this.serializeGoogleMapElement=function(_e9,_ea){
var _eb="";
if(_e9.nodeName=="SCRIPT"){
return _eb;
}
var to=_ea;
if(_ea==this.text_only_state.once){
to=this.text_only_state.off;
}
if(_e9.nodeName.charAt(0)=="/"){
return _eb;
}
if(_ea==this.text_only_state.off&&_e9.nodeName!=""){
_eb="<"+_e9.nodeName+" ";
if(_e9.id){
_eb+="id=\""+_e9.id+"\" ";
}
if(_e9.className){
_eb+="class=\""+_e9.className+"\" ";
}
if(_e9.nodeName=="TABLE"){
if(!this.isMT(_e9.border)){
_eb+="border=\""+_e9.border+"\" ";
}
if(!this.isMT(_e9.cellPadding)){
_eb+="cellpadding=\""+_e9.cellPadding+"\" ";
}
if(!this.isMT(_e9.cellSpacing)){
_eb+="cellspacing=\""+_e9.cellSpacing+"\" ";
}
}else{
if(_e9.nodeName=="TD"){
if(!this.isMT(_e9.colSpan)){
_eb+="colspan=\""+_e9.colSpan+"\" ";
}
if(!this.isMT(_e9.rowSpan)){
_eb+="rowspan=\""+_e9.rowSpan+"\" ";
}
if(!this.isMT(_e9.noWrap)){
_eb+="nowrap=\""+_e9.noWrap+"\" ";
}
if(!this.isMT(_e9.vAlign)){
_eb+="valign=\""+_e9.vAlign+"\" ";
}
}
}
var _ed=this.getStyleValue(_e9,"width");
var _ee=this.getStyleValue(_e9,"height");
var _ef="";
if(_ed!=null&&_ed!="auto"&&_ed!="0auto"){
_ef+="width: "+_ed+";";
}
if(_ee!=null&&_ee!="auto"&&_ee!="0auto"){
_ef+="height: "+_ee+";";
}
if(_e9.style.cssText!=null){
if(_e9.nodeName=="SPAN"){
if(_e9.className=="gmnoprint"){
_eb+="style=\""+"position:absolute;height:30px;width:62px;-moz-user-select: none; position: absolute; left: 2px; bottom: 2px;"+"\" >";
}else{
_eb+=this.getNodeStyle(_e9,true)+">";
}
}else{
if(_e9.id=="mapcontainer"){
_eb+="style=\""+"position:relative;"+_ef;
var f=this.getStyleValue(_e9,"float");
if(f=="left"||f=="right"){
_eb+="float:"+f+";\">";
}
}else{
if(fdcp.browserDetect.browser=="Explorer"){
var _ed=_e9.currentStyle["width"];
if(_ed=="100%"){
var _f1=_e9.parentNode.currentStyle["width"];
_e9.style.width=_f1;
}
var _ee=_e9.currentStyle["height"];
if(_ee=="100%"){
var _f2=_e9.parentNode.currentStyle["height"];
_e9.style.height=_f2;
}
var _f3="";
if(_e9.currentStyle["top"]!="auto"){
_e9.style.top=_e9.currentStyle["top"];
}
if(_e9.currentStyle["left"]!="auto"){
_e9.style.left=_e9.currentStyle["left"];
}
if(_e9.currentStyle["position"]!="auto"){
_e9.style.position=_e9.currentStyle["position"];
}
if(_e9.currentStyle["z-index"]!="auto"){
_e9.style.zindex=_e9.currentStyle["zindex"];
}
_eb+="style=\""+_ef+_e9.style.cssText+"; "+"\" >";
}else{
if(document.defaultView.getComputedStyle(_e9,null).getPropertyValue("z-index")!="auto"){
_e9.style.zindex=document.defaultView.getComputedStyle(_e9,null).getPropertyValue("z-index");
}
if(document.defaultView.getComputedStyle(_e9,null).getPropertyValue("position")!="auto"){
_e9.style.position=document.defaultView.getComputedStyle(_e9,null).getPropertyValue("position");
}
if(document.defaultView.getComputedStyle(_e9,null).getPropertyValue("top")!="auto"){
_e9.style.top=document.defaultView.getComputedStyle(_e9,null).getPropertyValue("top");
}
if(document.defaultView.getComputedStyle(_e9,null).getPropertyValue("left")!="auto"){
_e9.style.left=document.defaultView.getComputedStyle(_e9,null).getPropertyValue("left");
}
if(_e9.getAttribute("style")!=null){
_eb+="style=\""+_e9.getAttribute("style")+_ef+_e9.style.cssText+"; "+"\" >";
}else{
_eb+="style=\""+_ef+_e9.style.cssText+"; "+"\" >";
}
}
}
}
}else{
_eb+=this.getNodeStyle(_e9,true)+">";
}
}
for(var i=0;i<_e9.childNodes.length;i++){
var _f5=_e9.childNodes[i];
if(this.isExcluded(_f5)){
continue;
}
if(_f5.nodeType==3){
_eb+=this.serializeText(_f5);
}else{
if(_f5.nodeType==4){
_eb+=this.serializeCDATA(_f5);
}else{
if(_f5.nodeType==1){
if(_f5.nodeName=="BR"){
_eb+=this.serializeBR(_f5);
}else{
if(_f5.nodeName=="P"){
_eb+=this.serializeInlineElement(_f5,this.text_only_state.off);
}else{
if(_f5.nodeName=="IMG"||_e9.nodeName=="IMAGE"){
_eb+=this.serializeGoogleImage(_f5);
}else{
_eb+=this.serializeGoogleMapElement(_f5,this.text_only_state.off);
}
}
}
}
}
}
}
if(_ea==this.text_only_state.off&&_e9.nodeName!=""){
_eb+="</"+_e9.nodeName+">";
}
return _eb;
};
this.serializeInlineElement=function(_f6,_f7,_f8,_f9){
if(typeof _f8=="undefined"){
_f8=null;
}
var _fa="";
if(_f6.nodeName=="SCRIPT"){
return _fa;
}
var _fb=this.getStyleValue(_f6,"height");
var to=_f7;
if(_f7==this.text_only_state.once){
to=this.text_only_state.off;
}
if(_f6.nodeName.charAt(0)=="/"){
return _fa;
}
if(parseInt(this.getStyleValue(_f6,"width"))>=500){
var _fd=this.getStyleValue(_f6,"width");
if(parseInt(_fd)>this.getWidestBlkWidth()){
this.setWidestBlkWidth(_fd);
}
}
if(_f7==this.text_only_state.off&&_f6.nodeName!=""){
if(_f6.nodeName=="LI"){
if(_f6.parentNode!=null&&_f6.parentNode.nodeName!="UL"&&_f6.parentNode.nodeName!="OL"){
_fa+="<UL style=\"margin-top:0px;margin-bottom:0px;\">";
}
}
_fa+="<"+_f6.nodeName;
if(_f6.id){
_fa+=" id=\""+_f6.id+"\"";
}
if(_f6.type){
_fa+=" type=\""+_f6.type+"\"";
}
if(_f6.className){
_fa+=" class=\""+_f6.className+"\"";
}
if(_f6.checked){
_fa+=" checked=\""+_f6.checked+"\"";
}
if(_f9!="data"){
if(_f6.nodeName=="TABLE"){
if(!this.isMT(_f6.border)){
_fa+=" border=\""+_f6.border+"\"";
}
if(!this.isMT(_f6.cellPadding)){
_fa+=" cellpadding=\""+_f6.cellPadding+"\"";
_f8=_f6.cellPadding;
}
if(!this.isMT(_f6.cellSpacing)){
_fa+=" cellspacing=\""+_f6.cellSpacing+"\"";
}
}else{
if(_f6.nodeName=="TD"){
if(!this.isMT(_f6.colSpan)){
_fa+=" colspan=\""+_f6.colSpan+"\"";
}
if(!this.isMT(_f6.rowSpan)){
_fa+=" rowspan=\""+_f6.rowSpan+"\"";
}
if(!this.isMT(_f6.noWrap)){
_fa+=" nowrap=\""+_f6.noWrap+"\"";
}
if(!this.isMT(_f6.vAlign)){
_fa+=" valign=\""+_f6.vAlign+"\"";
}
}
}
_fa+=" "+this.getNodeStyle(_f6,true,_f8);
}
_fa+=">";
}
for(var i=0;i<_f6.childNodes.length;i++){
var _ff=_f6.childNodes[i];
if(this.isExcluded(_ff)){
continue;
}
if(_ff.nodeName=="DIV"&&(_ff.id=="mapcontainer"||_ff.id=="nearby_map")){
_fa+=this.serializeGoogleMapElement(_ff,to);
}else{
if(this.getStyleValue(_ff,"display")=="none"){
continue;
}
if(_ff.nodeType==3){
_fa+=this.serializeText(_ff,_f9);
}else{
if(_ff.nodeType==4){
_fa+=this.serializeCDATA(_ff);
}else{
if(_ff.nodeType==1){
if(_ff.nodeName=="BR"){
_fa+=this.serializeBR(_ff,_f9);
}else{
if(_ff.nodeName=="P"){
_fa+=this.serializeInlineElement(_ff,to,undefined,_f9);
}else{
if(_ff.nodeName.match(/^H\d$/)!=null){
_fa+=this.serializeInlineElement(_ff,to,undefined,_f9);
}else{
if(_ff.nodeName=="IMG"||_f6.nodeName=="IMAGE"||(_ff.nodeName=="INPUT"&&_ff.type=="image")){
_fa+=this.serializeImage(_ff,_f9);
}else{
_fa+=this.serializeInlineElement(_ff,to,_f8,_f9);
}
}
}
}
}
}
}
}
}
if(_f7==this.text_only_state.off&&_f6.nodeName!=""){
_fa+="</"+_f6.nodeName+">";
if(_f6.nodeName=="LI"){
if(_f6.parentNode!=null&&_f6.parentNode.nodeName!="UL"&&_f6.parentNode.nodeName!="OL"){
_fa+="</UL>";
}
}
}
return _fa;
};
this.newpg=function(_100){
_100.push("</paragraph><paragraph>");
};
this._serNode=function(node,_102,_103,mode){
var v;
var is_h=false;
if(this.isExcluded(node)){
return;
}
if(this.getStyleValue(node,"display")=="none"){
return;
}
var _107=this.getStyleValue(node,"height");
if((typeof _107=="undefined"||_107==null||_107==0)&&!(node.nodeName=="BR")){
return;
}
if(typeof _103=="undefined"||_103==null){
_103=this.text_only_state.off;
}
if(node.nodeType==3){
v=this.serializeText(node,mode);
if(v!=null&&v.length>0){
_102.push(v);
}
}else{
if(node.nodeType==4){
_102.push(this.serializeCDATA(node));
}else{
if(node.nodeType==1){
if(node.nodeName=="SCRIPT"){
return;
}
if(node.nodeName=="BR"){
_102.push(this.serializeBR(node,mode));
}else{
if(node.nodeName=="IMG"||node.nodeName=="IMAGE"||(node.nodeName=="INPUT"&&node.type=="image")){
_102.push(this.serializeImage(node,mode));
}else{
if(node.nodeName=="P"){
if(_102.length>0){
this.newpg(_102);
}
}else{
if(node.nodeName=="TR"){
this.newpg(_102);
}else{
if(node.nodeName.match(/^H\d$/)!=null){
is_h=true;
this.newpg(_102);
}
}
}
var _108=node.offsetWidth;
var _109=new Boolean(true);
var _10a=this.fdclient.getBlockThreshold();
if((typeof _108!="undefined"&&_108!=null&&_108>_10a)||_103>0){
_109=false;
}
if(((node.nodeName=="DIV"&&_109)||node.nodeName=="TABLE"&&_103!=this.text_only_state.on)||node.nodeName=="UL"||node.nodeName=="OL"||node.nodeName=="LI"){
if(node.nodeName=="UL"||node.nodeName=="LI"||node.nodeName=="OL"){
_103=0;
}
if(node.nodeName=="DIV"&&(node.id=="mapcontainer"||node.id=="nearby_map")){
_102.push(this.serializeGoogleMapElement(node,_103));
}else{
_102.push(this.serializeInlineElement(node,_103,undefined,mode));
}
}else{
try{
if(node.nodeName=="SPAN"){
if(node.getAttribute("inlineDiv")=="true"){
var _10b=node.firstChild;
_102.push(this.serializeInlineElement(_10b,_103,undefined,mode));
}else{
if(node.getAttribute("inlineDiv")=="false"){
this.newpg(_102);
this._serNode(node.nextSibling,_102,this.text_only_state.on,mode);
}else{
if(node.getAttribute("formatdynamics")=="content"){
for(var m=node.firstChild;m!=null;m=m.nextSibling){
this._serNode(m,_102,this.text_only_state.off,mode);
}
}else{
for(var m=node.firstChild;m!=null;m=m.nextSibling){
this._serNode(m,_102,this.text_only_state.off,mode);
}
}
}
}
}else{
if(node.nodeName=="DIV"){
if(_102.length>0){
this.newpg(_102);
}
}
for(var m=node.firstChild;m!=null;m=m.nextSibling){
this._serNode(m,_102,_103,mode);
}
}
}
catch(e){
for(var m=node.firstChild;m!=null;m=m.nextSibling){
this._serNode(m,_102,this.text_only_state.once,mode);
}
}
}
if(is_h){
this.newpg(_102);
}
}
}
}
}
}
};
this.serializeNode=function(node,_10e,_10f,_110,mode){
var _112=this.text_only_state.off;
if(_110=="true"){
_112=this.text_only_state.on;
}
this._serNode(node,_10e,_112,mode);
};
this.isExcluded=function(node){
for(var i=0;i<this.excludesXpath.length;i++){
if(node==this.excludesXpath[i]){
return true;
}
}
var _115=this.fdclient.getCfg("excludes");
if(typeof _115=="undefined"||_115==null){
return false;
}
var _116="";
var _117="";
var id="";
if(typeof node.nodeName!="undefined"&&node.nodeName!=null){
_116=node.nodeName.toLowerCase();
}
if(typeof node.className!="undefined"&&node.className!=null){
_117=node.className.toLowerCase();
}
if(typeof node.id!="undefined"&&node.id!=null){
id=node.id.toLowerCase();
}
for(var i=0;i<_115.length;i++){
var e=_115[i].toLowerCase();
var _11a=_117.split(/\s+/);
for(var cl in _11a){
if(_11a[cl]==e||("."+_11a[cl])==e){
return true;
}
if((_116+"."+_11a[cl])==e){
return true;
}
if(id==e||("#"+id)==e){
return true;
}
if((_116+"."+id)==e||(_116+"#"+id)==e){
return true;
}
}
}
return false;
};
this.setExcludes=function(_11c){
this.excludesXpath=_11c;
};
this.getWidestBlkWidth=function(){
return this._widestblkwidth;
};
this.setWidestBlkWidth=function(_11d){
this._widestblkwidth=_11d;
};
}
function FormatDynamicsPT(_11e){
this.clnt=_11e;
this.pcol=document.location.protocol+"//";
this.cstr=_11e.getTHost()+"/pt/t/";
this.dtstr=(new Date()).getTime();
this.div="d="+this.clnt.getDiv();
this.ua="&a="+escape(navigator.appName+" "+navigator.userAgent);
this.seg="&s="+escape(this.clnt.getSegment());
this.ustr="&u="+escape(window.location.href);
this.pf="&p="+this.clnt.getPFF();
this.version="&q=1.1";
this.rtype="&rt="+this.clnt.getRType();
this.qstr=this.div+this.ua+this.seg+this.ustr+this.pf+this.version;
this.turl=this.pcol+this.cstr+this.dtstr+"?"+this.qstr;
this.pthosts=this.clnt.getPtHosts();
this.autoRefreshCSS=this.clnt.getAutoRefreshCSS();
this.autoRefreshTime=this.clnt.getAutoRefreshTime();
this.isPtCss=function(_11f){
var _120=this.pthosts.split(",");
for(var i=0;i<_120.length;i++){
if(_11f.indexOf(_120[i])!=-1){
return true;
}
}
return false;
};
this.changePrintStyleSheet=function(){
var _122=this.pcol+this.cstr+new Date().getTime()+"?"+this.qstr;
for(i=0;i<document.styleSheets.length;i++){
try{
var _123=document.styleSheets[i];
var _124=navigator.userAgent.toLowerCase();
if((navigator.appName.indexOf("Netscape")!=-1||_124.indexOf("firefox")!=-1||_124.indexOf("safari")!=-1)&&this.isPtCss(_123.cssRules[0].style.content)){
_123.cssRules[0].style.content="url("+_122+");";
return;
}else{
if(this.isPtCss(_123.cssRules[0].style.getPropertyValue("content"))){
if(navigator.appName.indexOf("Opera")!=-1){
_123.deleteRule(0);
}else{
if(navigator.appName.indexOf("Konqueror")==-1){
_123.cssRules[0].style.setProperty("content","url("+tUrl+")",null);
}
}
return;
}
}
}
catch(err){
}
}
try{
var _124=navigator.userAgent.toLowerCase();
if((navigator.appName.indexOf("Netscape")!=-1||_124.indexOf("firefox")!=-1||_124.indexOf("safari")!=-1)){
var s=document.createElement("style");
s.type="text/css";
s.rel="stylesheet";
s.media="print";
s.appendChild(document.createTextNode("body:before {content: url("+this.turl+")};"));
document.getElementsByTagName("head")[0].appendChild(s);
}
}
catch(err){
}
};
this.getFDImage=function(){
if(this.clnt.getRType()=="s"){
var hs=document.documentElement.getElementsByTagName("head");
var h=null;
if(hs&&hs.length>0){
h=hs[0];
var _128=document.createElement("script");
_128.type="text/javascript";
_128.src=this.turl+"&rnd="+Math.random();
}
}else{
var _129=new Image();
_129.src=this.turl;
}
};
}

