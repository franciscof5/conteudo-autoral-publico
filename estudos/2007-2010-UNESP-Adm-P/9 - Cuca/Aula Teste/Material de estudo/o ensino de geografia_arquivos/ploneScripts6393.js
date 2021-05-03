
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - event-registration.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/event-registration.js?original=1
window.onDOMLoadEvents=new Array();window.DOMContentLoadedInitDone=false;
function addDOMLoadEvent(listener){window.onDOMLoadEvents[window.onDOMLoadEvents.length]=listener}
function DOMContentLoadedInit(){if(window.DOMContentLoadedInitDone) return;window.DOMContentLoadedInitDone=true;var exceptions=new Array();for(var i=0;i<window.onDOMLoadEvents.length;i++){var func=window.onDOMLoadEvents[i];try{func()} catch(e){exceptions[exceptions.length]=e}}
for(var i=0;i<exceptions.length;i++){throw exceptions[i]}}
function DOMContentLoadedScheduler(){if(window.DOMContentLoadedInitDone) return true;if(/KHTML|WebKit/i.test(navigator.userAgent)){if(/loaded|complete/.test(document.readyState)){DOMContentLoadedInit()} else{setTimeout("DOMContentLoadedScheduler()",250)}} else{setTimeout("DOMContentLoadedScheduler()",250)}
return true}
setTimeout("DOMContentLoadedScheduler()",250);if(window.addEventListener){window.addEventListener("load",DOMContentLoadedInit,false);document.addEventListener("DOMContentLoaded",DOMContentLoadedInit,false)} else if(window.attachEvent){window.attachEvent("onload",DOMContentLoadedInit)} else{var _dummy=function(){var $old_onload=window.onload;window.onload=function(e){DOMContentLoadedInit();$old_onload()}}}
/*@cc_on @*/
/*@if (@_win32)
{var proto="src='javascript:void(0)'";if(location.protocol=="https:") proto="src=//0";document.write("<scr"+"ipt id=__ie_onload defer "+proto+"><\/scr"+"ipt>");var script=document.getElementById("__ie_onload");script.onreadystatechange=function(){if(this.readyState=="complete"){DOMContentLoadedInit()}}};/*@end @*/


/* - register_function.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!=-1&&navigator.userAgent.indexOf('Mac')!=-1)
var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!='undefined'&&typeof document.createElement!='undefined');var registerEventListener=null;if(typeof addEvent!='undefined'){registerEventListener=function(elem,event,func){addEvent(elem,event,func);return true}} else if(window.addEventListener){registerEventListener=function(elem,event,func){elem.addEventListener(event,func,false);return true}} else if(window.attachEvent){registerEventListener=function(elem,event,func){var result=elem.attachEvent("on"+event,func);return result}} else{registerEventListener=function(elem,event,func){return false}}
var unRegisterEventListener=null;if(typeof removeEvent!='undefined'){unRegisterEventListener=function(elem,event,func){removeEvent(element,event,func);return true}} else if(window.removeEventListener){unRegisterEventListener=function(elem,event,func){elem.removeEventListener(event,func,false);return true}} else if(window.detachEvent){unRegisterEventListener=function(elem,event,func){var result=elem.detachEvent("on"+event,func);return result}} else{unRegisterEventListener=function(elem,event,func){return false}}
var registerPloneFunction=null;if(typeof addDOMLoadEvent!='undefined'){registerPloneFunction=function(func){addDOMLoadEvent(func)}} else{registerPloneFunction=function(func){registerEventListener(window,"load",func)}}
function getContentArea(){if(W3CDOM){var node=document.getElementById('region-content');if(!node){node=document.getElementById('content')}
return node}}


/* - cssQuery.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/cssQuery.js?original=1
var cssQuery=function(){var version="2.0.2";var $COMMA=/\s*,\s*/;var cssQuery=function($selector,$$from){try{var $match=[];var $useCache=arguments.callee.caching&&!$$from;var $base=($$from)?($$from.constructor==Array)?$$from:[$$from]:[document];var $$selectors=parseSelector($selector).split($COMMA),i;for(i=0;i<$$selectors.length;i++){$selector=_toStream($$selectors[i]);if(isMSIE&&$selector.slice(0,3).join("")==" *#"){$selector=$selector.slice(2);$$from=_msie_selectById([],$base,$selector[1])} else $$from=$base;var j=0,$token,$filter,$arguments,$cacheSelector="";while(j<$selector.length){$token=$selector[j++];$filter=$selector[j++];$cacheSelector+=$token+$filter;$arguments="";if($selector[j]=="("){while($selector[j++]!=")"&&j<$selector.length){$arguments+=$selector[j]}
$arguments=$arguments.slice(0,-1);$cacheSelector+="("+$arguments+")"}
$$from=($useCache&&cache[$cacheSelector])?cache[$cacheSelector]:select($$from,$token,$filter,$arguments);if($useCache) cache[$cacheSelector]=$$from}
$match=$match.concat($$from)}
delete cssQuery.error;return $match} catch($error){cssQuery.error=$error;return []}};cssQuery.toString=function(){return "function cssQuery() {\n  [version "+version+"]\n}"};var cache={};cssQuery.caching=false;cssQuery.clearCache=function($selector){if($selector){$selector=_toStream($selector).join("");delete cache[$selector]} else cache={}};var modules={};var loaded=false;cssQuery.addModule=function($name,$script){if(loaded) eval("$script="+String($script));modules[$name]=new $script()};cssQuery.valueOf=function($code){return $code?eval($code):this};var selectors={};var pseudoClasses={};var AttributeSelector={match:/\[([\w-]+(\|[\w-]+)?)\s*(\W?=)?\s*([^\]]*)\]/};var attributeSelectors=[];selectors[" "]=function($results,$from,$tagName,$namespace){var $element,i,j;for(i=0;i<$from.length;i++){var $subset=getElementsByTagName($from[i],$tagName,$namespace);for(j=0;($element=$subset[j]);j++){if(thisElement($element)&&compareNamespace($element,$namespace))
$results.push($element)}}};selectors["#"]=function($results,$from,$id){var $element,j;for(j=0;($element=$from[j]);j++) if($element.id==$id) $results.push($element)};selectors["."]=function($results,$from,$className){$className=new RegExp("(^|\\s)"+$className+"(\\s|$)");var $element,i;for(i=0;($element=$from[i]);i++)
if($className.test($element.className)) $results.push($element)};selectors[":"]=function($results,$from,$pseudoClass,$arguments){var $test=pseudoClasses[$pseudoClass],$element,i;if($test) for(i=0;($element=$from[i]);i++)
if($test($element,$arguments)) $results.push($element)};pseudoClasses["link"]=function($element){var $document=getDocument($element);if($document.links) for(var i=0;i<$document.links.length;i++){if($document.links[i]==$element) return true}};pseudoClasses["visited"]=function($element){};var thisElement=function($element){return($element&&$element.nodeType==1&&$element.tagName!="!")?$element:null};var previousElementSibling=function($element){while($element&&($element=$element.previousSibling)&&!thisElement($element)) continue;return $element};var nextElementSibling=function($element){while($element&&($element=$element.nextSibling)&&!thisElement($element)) continue;return $element};var firstElementChild=function($element){return thisElement($element.firstChild)||nextElementSibling($element.firstChild)};var lastElementChild=function($element){return thisElement($element.lastChild)||previousElementSibling($element.lastChild)};var childElements=function($element){var $childElements=[];$element=firstElementChild($element);while($element){$childElements.push($element);$element=nextElementSibling($element)}
return $childElements};var isMSIE=true;var isXML=function($element){var $document=getDocument($element);return(typeof $document.mimeType=="unknown")?/\.xml$/i.test($document.URL):Boolean($document.mimeType=="XML Document")};var getDocument=function($element){return $element.ownerDocument||$element.document};var getElementsByTagName=function($element,$tagName){return($tagName=="*"&&$element.all)?$element.all:$element.getElementsByTagName($tagName)};var compareTagName=function($element,$tagName,$namespace){if($tagName=="*") return thisElement($element);if(!compareNamespace($element,$namespace)) return false;if(!isXML($element)) $tagName=$tagName.toUpperCase();return $element.tagName==$tagName};var compareNamespace=function($element,$namespace){return!$namespace||($namespace=="*")||($element.scopeName==$namespace)};var getTextContent=function($element){return $element.innerText};
function _msie_selectById($results,$from,id){var $match,i,j;for(i=0;i<$from.length;i++){if($match=$from[i].all.item(id)){if($match.id==id) $results.push($match);else if($match.length!=null){for(j=0;j<$match.length;j++){if($match[j].id==id) $results.push($match[j])}}}}
return $results};if(![].push) Array.prototype.push=function(){for(var i=0;i<arguments.length;i++){this[this.length]=arguments[i]}
return this.length};var $NAMESPACE=/\|/;
function select($$from,$token,$filter,$arguments){if($NAMESPACE.test($filter)){$filter=$filter.split($NAMESPACE);$arguments=$filter[0];$filter=$filter[1]}
var $results=[];if(selectors[$token]){selectors[$token]($results,$$from,$filter,$arguments)}
return $results};var $STANDARD_SELECT=/^[^\s>+~]/;var $$STREAM=/[\s#.:>+~()@]|[^\s#.:>+~()@]+/g;
function _toStream($selector){if($STANDARD_SELECT.test($selector)) $selector=" "+$selector;return $selector.match($$STREAM)||[]};var $WHITESPACE=/\s*([\s>+~(),]|^|$)\s*/g;var $IMPLIED_ALL=/([\s>+~,]|[^(]\+|^)([#.:@])/g;var parseSelector=function($selector){return $selector.replace($WHITESPACE,"$1").replace($IMPLIED_ALL,"$1*$2")};var Quote={toString: function(){return "'"},match:/^('[^']*')|("[^"]*")$/,test: function($string){return this.match.test($string)},add: function($string){return this.test($string)?$string:this+$string+this},remove: function($string){return this.test($string)?$string.slice(1,-1):$string}};var getText=function($text){return Quote.remove($text)};var $ESCAPE=/([\/()[\]?{}|*+-])/g;
function regEscape($string){return $string.replace($ESCAPE,"\\$1")};cssQuery.addModule("css-standard", function(){isMSIE=eval("false;/*@cc_on@if(@\x5fwin32)isMSIE=true@end@*/");if(!isMSIE){getElementsByTagName=function($element,$tagName,$namespace){return $namespace?$element.getElementsByTagNameNS("*",$tagName):$element.getElementsByTagName($tagName)};compareNamespace=function($element,$namespace){return!$namespace||($namespace=="*")||($element.prefix==$namespace)};isXML=document.contentType? function($element){return/xml/i.test(getDocument($element).contentType)}: function($element){return getDocument($element).documentElement.tagName!="HTML"};getTextContent=function($element){return $element.textContent||$element.innerText||_getTextContent($element)};
function _getTextContent($element){var $textContent="",$node,i;for(i=0;($node=$element.childNodes[i]);i++){switch($node.nodeType){case 11:case 1:$textContent+=_getTextContent($node);break;case 3:$textContent+=$node.nodeValue;break}}
return $textContent}}});cssQuery.addModule("css-level2", function(){selectors[">"]=function($results,$from,$tagName,$namespace){var $element,i,j;for(i=0;i<$from.length;i++){var $subset=childElements($from[i]);for(j=0;($element=$subset[j]);j++)
if(compareTagName($element,$tagName,$namespace))
$results.push($element)}};selectors["+"]=function($results,$from,$tagName,$namespace){for(var i=0;i<$from.length;i++){var $element=nextElementSibling($from[i]);if($element&&compareTagName($element,$tagName,$namespace))
$results.push($element)}};selectors["@"]=function($results,$from,$attributeSelectorID){var $test=attributeSelectors[$attributeSelectorID].test;var $element,i;for(i=0;($element=$from[i]);i++)
if($test($element)) $results.push($element)};pseudoClasses["first-child"]=function($element){return!previousElementSibling($element)};pseudoClasses["lang"]=function($element,$code){$code=new RegExp("^"+$code,"i");while($element&&!$element.getAttribute("lang")) $element=$element.parentNode;return $element&&$code.test($element.getAttribute("lang"))};AttributeSelector.NS_IE=/\\:/g;AttributeSelector.PREFIX="@";AttributeSelector.tests={};AttributeSelector.replace=function($match,$attribute,$namespace,$compare,$value){var $key=this.PREFIX+$match;if(!attributeSelectors[$key]){$attribute=this.create($attribute,$compare||"",$value||"");attributeSelectors[$key]=$attribute;attributeSelectors.push($attribute)}
return attributeSelectors[$key].id};AttributeSelector.parse=function($selector){$selector=$selector.replace(this.NS_IE,"|");var $match;while($match=$selector.match(this.match)){var $replace=this.replace($match[0],$match[1],$match[2],$match[3],$match[4]);$selector=$selector.replace(this.match,$replace)}
return $selector};AttributeSelector.create=function($propertyName,$test,$value){var $attributeSelector={};$attributeSelector.id=this.PREFIX+attributeSelectors.length;$attributeSelector.name=$propertyName;$test=this.tests[$test];$test=$test?$test(this.getAttribute($propertyName),getText($value)):false;$attributeSelector.test=new Function("e","return "+$test);return $attributeSelector};AttributeSelector.getAttribute=function($name){switch($name.toLowerCase()){case "id":return "e.id";case "class":return "e.className";case "for":return "e.htmlFor";case "href":if(isMSIE){return "String((e.outerHTML.match(/href=\\x22?([^\\s\\x22]*)\\x22?/)||[])[1]||'')"}}
return "e.getAttribute('"+$name.replace($NAMESPACE,":")+"')"};AttributeSelector.tests[""]=function($attribute){return $attribute};AttributeSelector.tests["="]=function($attribute,$value){return $attribute+"=="+Quote.add($value)};AttributeSelector.tests["~="]=function($attribute,$value){return "/(^| )"+regEscape($value)+"( |$)/.test("+$attribute+")"};AttributeSelector.tests["|="]=function($attribute,$value){return "/^"+regEscape($value)+"(-|$)/.test("+$attribute+")"};var _parseSelector=parseSelector;parseSelector=function($selector){return _parseSelector(AttributeSelector.parse($selector))}});cssQuery.addModule("css-level3", function(){selectors["~"]=function($results,$from,$tagName,$namespace){var $element,i;for(i=0;($element=$from[i]);i++){while($element=nextElementSibling($element)){if(compareTagName($element,$tagName,$namespace))
$results.push($element)}}};pseudoClasses["contains"]=function($element,$text){$text=new RegExp(regEscape(getText($text)));return $text.test(getTextContent($element))};pseudoClasses["root"]=function($element){return $element==getDocument($element).documentElement};pseudoClasses["empty"]=function($element){var $node,i;for(i=0;($node=$element.childNodes[i]);i++){if(thisElement($node)||$node.nodeType==3) return false}
return true};pseudoClasses["last-child"]=function($element){return!nextElementSibling($element)};pseudoClasses["only-child"]=function($element){$element=$element.parentNode;return firstElementChild($element)==lastElementChild($element)};pseudoClasses["not"]=function($element,$selector){var $negated=cssQuery($selector,getDocument($element));for(var i=0;i<$negated.length;i++){if($negated[i]==$element) return false}
return true};pseudoClasses["nth-child"]=function($element,$arguments){return nthChild($element,$arguments,previousElementSibling)};pseudoClasses["nth-last-child"]=function($element,$arguments){return nthChild($element,$arguments,nextElementSibling)};pseudoClasses["target"]=function($element){return $element.id==location.hash.slice(1)};pseudoClasses["checked"]=function($element){return $element.checked};pseudoClasses["enabled"]=function($element){return $element.disabled===false};pseudoClasses["disabled"]=function($element){return $element.disabled};pseudoClasses["indeterminate"]=function($element){return $element.indeterminate};AttributeSelector.tests["^="]=function($attribute,$value){return "/^"+regEscape($value)+"/.test("+$attribute+")"};AttributeSelector.tests["$="]=function($attribute,$value){return "/"+regEscape($value)+"$/.test("+$attribute+")"};AttributeSelector.tests["*="]=function($attribute,$value){return "/"+regEscape($value)+"/.test("+$attribute+")"};
function nthChild($element,$arguments,$traverse){switch($arguments){case "n":return true;case "even":$arguments="2n";break;case "odd":$arguments="2n+1"}
var $$children=childElements($element.parentNode);
function _checkIndex($index){var $index=($traverse==nextElementSibling)?$$children.length-$index:$index-1;return $$children[$index]==$element};if(!isNaN($arguments)) return _checkIndex($arguments);$arguments=$arguments.split("n");var $multiplier=parseInt($arguments[0]);var $step=parseInt($arguments[1]);if((isNaN($multiplier)||$multiplier==1)&&$step==0) return true;if($multiplier==0&&!isNaN($step)) return _checkIndex($step);if(isNaN($step)) $step=0;var $count=1;while($element=$traverse($element)) $count++;if(isNaN($multiplier)||$multiplier==1)
return($traverse==nextElementSibling)?($count<=$step):($step>=$count);return($count%$multiplier)==$step}});loaded=true;return cssQuery}();

/* - plone_javascript_variables.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='http://www.moderna.com.br/moderna';var form_modified_message='O seu formulário não foi salvo. Todas as alterações efetuadas serão perdidas';var form_resubmit_message='Você já clicou no botão de envio. Você realmente quer enviar este formulário novamente?';var external_links_open_new_window=false;var external_links_in_content_only=true;

/* - nodeutilities.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){var wrapper=document.createElement(wrappertype)
wrapper.className=wrapperclass;var innerNode=node.parentNode.replaceChild(wrapper,node);wrapper.appendChild(innerNode)};
function nodeContained(innernode,outernode){var node=innernode.parentNode;while(node!=document){if(node==outernode){return true}
node=node.parentNode}
return false};
function findContainer(node,func){while(node!=null){if(func(node)){return node}
node=node.parentNode}
return false};
function hasClassName(node,class_name){return new RegExp('\\b'+class_name+'\\b').test(node.className)};
function addClassName(node,class_name){if(!node.className){node.className=class_name} else if(!hasClassName(node,class_name)){var className=node.className+" "+class_name;node.className=className.split(/\s+/).join(' ')}};
function removeClassName(node,class_name){var className=node.className;if(className){className=className.replace(new RegExp('\\b'+class_name+'\\b'),'');className=className.replace(/\s+/g,' ');node.className=className.replace(/\s+$/g,'')}};
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing&&!hasClassName(node,old_class)){addClassName(node,new_class)} else{var className=node.className;if(className){className=className.replace(new RegExp('\\b'+old_class+'\\b'),new_class);className=className.replace(/\s+/g,' ');node.className=className.replace(/\s+$/g,'')}}};
function walkTextNodes(node,func,data){if(!node){return false}
if(node.hasChildNodes){for(var i=0;i<node.childNodes.length;i++){walkTextNodes(node.childNodes[i],func,data)}
if(node.nodeType==3){func(node,data)}}};
function getInnerTextCompatible(node){var result=new Array();walkTextNodes(node,
function(n,d){d.push(n.nodeValue)},result);return result.join("")};
function getInnerTextFast(node){if(node.innerText){return node.innerText} else{return getInnerTextCompatible(node)}};
function sortNodes(nodes,fetch_func,cmp_func){if(!W3CDOM){return false};var SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true);this.toString=function(){if(this.value.toString){return this.value.toString()} else{return this.value}}}
var items=new Array();for(var i=0;i<nodes.length;i++){items.push(new SortNodeWrapper(nodes[i]))}
if(cmp_func){items.sort(cmp_func)} else{items.sort()}
for(var i=0;i<items.length;i++){var dest=nodes[i];dest.parentNode.replaceChild(items[i].cloned_node,dest)}};

/* - cookie_functions.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"};
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)==0){return unescape(c.substring(nameEQ.length,c.length))}}
return null};

/* - livesearch_open.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/livesearch_open.js?original=1
var liveSearchReq=false;var t=null;var liveSearchLast="";var queryTarget="livesearch_reply?review_state=published&q=";var searchForm=null;var searchInput=null;var isIE=false;var _cache=new Object();var widthOffset=1;
function calculateWidth(){}
function getElementDimensions(elemID){var base=document.getElementById(elemID);var offsetTrail=base;var offsetLeft=0;var offsetTop=0;var width=0;while(offsetTrail){offsetLeft+=offsetTrail.offsetLeft;offsetTop+=offsetTrail.offsetTop;offsetTrail=offsetTrail.offsetParent}
if(navigator.userAgent.indexOf("Mac")!=-1&&typeof document.body.leftMargin!="undefined"){offsetLeft+=document.body.leftMargin;offsetTop+=document.body.topMargin}
if(!isIE){width=searchInput.offsetWidth-widthOffset*2}
else{width=searchInput.offsetWidth}
return{left:offsetLeft,top:offsetTop,width:width,height:base.offsetHeight,bottom:offsetTop+base.offsetHeight,right:offsetLeft+width}}
function liveSearchInit(){searchInput=document.getElementById('searchGadget');if(searchInput==null||searchInput==undefined) return
if(navigator.userAgent.indexOf("KHTML")>0){searchInput.addEventListener("keydown",liveSearchKeyPress,false);searchInput.addEventListener("focus",liveSearchDoSearch,false);searchInput.addEventListener("keydown",liveSearchStart,false);searchInput.addEventListener("blur",liveSearchHideDelayed,false)} else if(searchInput.addEventListener){searchInput.addEventListener("keypress",liveSearchKeyPress,false);searchInput.addEventListener("blur",liveSearchHideDelayed,false);searchInput.addEventListener("keypress",liveSearchStart,false)} else{searchInput.attachEvent("onkeydown",liveSearchKeyPress);searchInput.attachEvent("onkeydown",liveSearchStart);searchInput.attachEvent("onblur",liveSearchHide);isIE=true}
searchInput.setAttribute("autocomplete","off");var pos=getElementDimensions('searchGadget');result=document.getElementById('LSResult');pos.left=pos.left-result.offsetParent.offsetLeft+pos.width;result.style.display='none'}
function liveSearchHideDelayed(){window.setTimeout("liveSearchHide()",400)}
function liveSearchHide(){document.getElementById("LSResult").style.display="none";var highlight=document.getElementById("LSHighlight");if(highlight){highlight.removeAttribute("id")}}
function getFirstHighlight(){var set=getHits();return set[0]}
function getLastHighlight(){var set=getHits();return set[set.length-1]}
function getHits(){var res=document.getElementById("LSShadow");var set=res.getElementsByTagName('li');return set}
function findChild(object,specifier){var cur=object.firstChild;try{while(cur!=undefined){cur=cur.nextSibling;if(specifier(cur)==true) return cur}} catch(e){};return null}
function findNext(object,specifier){var cur=object;try{while(cur!=undefined){cur=cur.nextSibling;if(cur.nodeType==3) cur=cur.nextSibling;if(cur!=undefined){if(specifier(cur)==true) return cur} else{break}}} catch(e){};return null}
function findPrev(object,specifier){var cur=object;try{cur=cur.previousSibling;if(cur.nodeType==3) cur=cur.previousSibling;if(cur!=undefined){if(specifier(cur)==true)
return cur}} catch(e){};return null}
function liveSearchKeyPress(event){if(event.keyCode==40){highlight=document.getElementById("LSHighlight");if(!highlight){highlight=getFirstHighlight()} else{highlight.removeAttribute("id");highlight=findNext(highlight, function(o){return o.className=="LSRow"})}
if(highlight){highlight.setAttribute("id","LSHighlight")}
if(!isIE){event.preventDefault()}}
else if(event.keyCode==38){highlight=document.getElementById("LSHighlight");if(!highlight){highlight=getLastHighlight()}
else{highlight.removeAttribute("id");highlight=findPrev(highlight, function(o){return o.className=='LSRow'})}
if(highlight){highlight.setAttribute("id","LSHighlight")}
if(!isIE){event.preventDefault()}}
else if(event.keyCode==27){highlight=document.getElementById("LSHighlight");if(highlight){highlight.removeAttribute("id")}
document.getElementById("LSResult").style.display="none"}}
function liveSearchStart(event){if(t){window.clearTimeout(t)}
code=event.keyCode;if(code!=40&&code!=38&&code!=27&&code!=37&&code!=39){t=window.setTimeout("liveSearchDoSearch()",200)}}
function liveSearchDoSearch(){if(typeof liveSearchRoot=="undefined"){liveSearchRoot=""}
if(typeof liveSearchRootSubDir=="undefined"){liveSearchRootSubDir=""}
if(liveSearchLast!=searchInput.value){if(liveSearchReq&&liveSearchReq.readyState<4){liveSearchReq.abort()}
if(searchInput.value==""){liveSearchHide();return false}
if(searchInput.value.length<4){liveSearchHide();return false}
var result=_cache[searchInput.value];if(result){showResult(result);return}
liveSearchReq=new XMLHttpRequest();liveSearchReq.onreadystatechange=liveSearchProcessReqChange;liveSearchReq.open("GET",liveSearchRoot+queryTarget+encodeURIComponent(searchInput.value));liveSearchLast=searchInput.value;liveSearchReq.send(null)}}
function showResult(result){var res=document.getElementById("LSResult");res.style.display="block";var sh=document.getElementById("LSShadow");sh.innerHTML=result}
function liveSearchProcessReqChange(){if(liveSearchReq.readyState==4){if(liveSearchReq.status>299||liveSearchReq.status<200||liveSearchReq.responseText.length<10) return;showResult(liveSearchReq.responseText);_cache[liveSearchLast]=liveSearchReq.responseText}}
function liveSearchSubmit(){var highlight=document.getElementById("LSHighlight");if(highlight){target=highlight.getElementsByTagName('a')[0];window.location=liveSearchRoot+liveSearchRootSubDir+target;return false}
else{return true}}
if(window.addEventListener) window.addEventListener("load",liveSearchInit,false);else if(window.attachEvent) window.attachEvent("onload",liveSearchInit);

/* - fullscreenmode.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/fullscreenmode.js?original=1
function toggleFullScreenMode(){var body=cssQuery('body')[0];if(document.getElementById('icon-full_screen')){var fsicon=document.getElementById('icon-full_screen')}
if(hasClassName(body,'fullscreen')){removeClassName(body,'fullscreen');createCookie('fullscreenMode','');if(fsicon){fsicon.src='fullscreenexpand_icon.gif'}} else{addClassName(body,'fullscreen');createCookie('fullscreenMode','1');if(fsicon){fsicon.src='fullscreencollapse_icon.gif'}}};
function fullscreenModeLoad(){if(document.getElementById('icon-full_screen')){var fsicon=document.getElementById('icon-full_screen')}
if(readCookie('fullscreenMode')=='1'){var body=cssQuery('body')[0];addClassName(body,'fullscreen');if(fsicon){fsicon.src='fullscreencollapse_icon.gif'}}};registerPloneFunction(fullscreenModeLoad)


/* - select_all.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/select_all.js?original=1
function selectAll(id,formName){if(formName==null){checkboxes=document.getElementsByName(id)
for(i=0;i<checkboxes.length;i++){checkboxes[i].checked=true }} else{for(i=0;i<document.forms[formName].elements.length;i++){if(document.forms[formName].elements[i].name==id){document.forms[formName].elements[i].checked=true}}}}
function deselectAll(id,formName){if(formName==null){checkboxes=document.getElementsByName(id)
for(i=0;i<checkboxes.length;i++){checkboxes[i].checked=false }} else{for(i=0;i<document.forms[formName].elements.length;i++){if(document.forms[formName].elements[i].name==id){document.forms[formName].elements[i].checked=false}}}}
function toggleSelect(selectbutton,id,initialState,formName){id=id||'ids:list'
if(selectbutton.isSelected==null){initialState=initialState||false;selectbutton.isSelected=initialState}
if(selectbutton.isSelected==false){selectbutton.setAttribute('src',portal_url+'/select_none_icon.gif');selectbutton.isSelected=true;return selectAll(id,formName)} else{selectbutton.setAttribute('src',portal_url+'/select_all_icon.gif');selectbutton.isSelected=false;return deselectAll(id,formName)}}


/* - dropdown.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/dropdown.js?original=1
function isActionMenu(node){if(hasClassName(node,'actionMenu')){return true}
return false};
function hideAllMenus(){var menus=cssQuery('dl.actionMenu');for(var i=0;i<menus.length;i++){replaceClassName(menus[i],'activated','deactivated',true)}};
function toggleMenuHandler(event){if(!event) var event=window.event;if(!W3CDOM){return true}
var container=findContainer(this,isActionMenu);if(!container){return true}
if(hasClassName(container,'activated')){replaceClassName(container,'activated','deactivated',true)} else{replaceClassName(container,'deactivated','activated',true)}
return false};
function hideMenusHandler(event){if(!event) var event=window.event;hideAllMenus();return true};
function actionMenuDocumentMouseDown(event){if(!event) var event=window.event;if(event.target)
targ=event.target;else if(event.srcElement)
targ=event.srcElement;var container=findContainer(targ,isActionMenu);if(container){return true}
hideAllMenus();return true};
function actionMenuMouseOver(event){if(!event) var event=window.event;if(!this.tagName&&(this.tagName=='A'||this.tagName=='a')){return true}
var container=findContainer(this,isActionMenu);if(!container){return true}
var menu_id=container.id;var switch_menu=false;var menus=cssQuery('dl.actionMenu');for(var i=0;i<menus.length;i++){var menu=menus[i]
if(hasClassName(menu,'activated')){switch_menu=true}
if(menu.id!=menu_id){replaceClassName(menu,'activated','deactivated',true)}}
if(switch_menu){var menu=cssQuery('#'+menu_id)[0];if(menu){replaceClassName(menu,'deactivated','activated',true)}}
return true};
function initializeMenus(){if(!W3CDOM){return false}
document.onmousedown=actionMenuDocumentMouseDown;hideAllMenus();var menu_headers=cssQuery('dl.actionMenu > dt.actionMenuHeader > a');for(var i=0;i<menu_headers.length;i++){var menu_header=menu_headers[i];menu_header.onclick=toggleMenuHandler;menu_header.onmouseover=actionMenuMouseOver}
var menu_contents=cssQuery('dl.actionMenu > dd.actionMenuContent');for(var i=0;i<menu_contents.length;i++){menu_contents[i].onclick=hideMenusHandler}};registerPloneFunction(initializeMenus);

/* - dragdropreorder.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/dragdropreorder.js?original=1
var ploneDnDReorder={}
ploneDnDReorder.dragging=null;ploneDnDReorder.table=null;ploneDnDReorder.rows=null;ploneDnDReorder.isDraggable=function(node){return hasClassName(node,'draggable')};ploneDnDReorder.doDown=function(e){if(!e) var e=window.event;var target=findContainer(this,ploneDnDReorder.isDraggable);if(target==null)
return;for(var i=0;i<ploneDnDReorder.rows.length;i++)
ploneDnDReorder.rows[i].onmousemove=ploneDnDReorder.doDrag;ploneDnDReorder.dragging=target;ploneDnDReorder.dragging._position=ploneDnDReorder.getPos(ploneDnDReorder.dragging);addClassName(ploneDnDReorder.dragging,"dragging");return false}
ploneDnDReorder.getPos=function(node){var children=node.parentNode.childNodes;var pos=0;for(var i=0;i<children.length;i++){if(node==children[i])
return pos;if(hasClassName(children[i],"draggable"))
pos++}
return null}
ploneDnDReorder.doDrag=function(e){if(!e) var e=window.event;if(!ploneDnDReorder.dragging)
return;var target=this;if(!target)
return;if(target.id!=ploneDnDReorder.dragging.id){ploneDnDReorder.swapElements(target,ploneDnDReorder.dragging)}
return false}
ploneDnDReorder.swapElements=function(child1,child2){var parent=child1.parentNode;var children=parent.childNodes;var items=new Array();for(var i=0;i<children.length;i++){var node=children[i];items[i]=node;if(node.id){removeClassName(node,"even");removeClassName(node,"odd");if(node.id==child1.id)
items[i]=child2;if(node.id==child2.id)
items[i]=child1}}
Sarissa.clearChildNodes(parent);var pos=0;for(var i=0;i<items.length;i++){var node=parent.appendChild(items[i]);if(node.id){if(pos%2)
addClassName(node,"even");else
addClassName(node,"odd");pos++}}}
ploneDnDReorder.doUp=function(e){if(!e) var e=window.event;if(!ploneDnDReorder.dragging)
return;removeClassName(ploneDnDReorder.dragging,"dragging");ploneDnDReorder.updatePositionOnServer();ploneDnDReorder.dragging._position=null;try{delete ploneDnDReorder.dragging._position} catch(e){}
ploneDnDReorder.dragging=null;for(var i=0;i<ploneDnDReorder.rows.length;i++)
ploneDnDReorder.rows[i].onmousemove=null;return false}
ploneDnDReorder.updatePositionOnServer=function(){var delta=ploneDnDReorder.getPos(ploneDnDReorder.dragging)-ploneDnDReorder.dragging._position;if(delta==0)
return;var req=new XMLHttpRequest();req.open("POST","folder_moveitem",true);req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var item_id=ploneDnDReorder.dragging.id.substr('folder-contents-item-'.length);req.send("item_id="+item_id+"&delta:int="+delta)}
ploneDnDReorder.initializeDragDrop=function(){ploneDnDReorder.table=cssQuery("table#sortable")[0];if(!ploneDnDReorder.table)
return;ploneDnDReorder.rows=cssQuery("table#sortable > tr,"+"table#sortable > tbody > tr");var targets=cssQuery("table#sortable > tr > td,"+"table#sortable > tbody > tr > td");for(var i=0;i<targets.length;i++){if(hasClassName(targets[i],'notDraggable'))
continue;targets[i].onmousedown=ploneDnDReorder.doDown;targets[i].onmouseup=ploneDnDReorder.doUp;addClassName(targets[i],"draggingHook")}}
registerPloneFunction(ploneDnDReorder.initializeDragDrop);

/* - collapsiblesections.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/collapsiblesections.js?original=1
function isCollapsible(node){if(hasClassName(node,'collapsible')){return true}
return false};
function toggleCollapsible(event){if(!event) var event=window.event;if(!this.tagName&&(this.tagName=='DT'||this.tagName=='dt')){return true}
var container=findContainer(this,isCollapsible);if(!container){return true}
if(hasClassName(container,'collapsedBlockCollapsible')){replaceClassName(container,'collapsedBlockCollapsible','expandedBlockCollapsible')} else if(hasClassName(container,'expandedBlockCollapsible')){replaceClassName(container,'expandedBlockCollapsible','collapsedBlockCollapsible')} else if(hasClassName(container,'collapsedInlineCollapsible')){replaceClassName(container,'collapsedInlineCollapsible','expandedInlineCollapsible')} else if(hasClassName(container,'expandedInlineCollapsible')){replaceClassName(container,'expandedInlineCollapsible','collapsedInlineCollapsible')}};
function activateCollapsibles(){if(!W3CDOM){return false}
var collapsibles=cssQuery('dl.collapsible');for(var i=0;i<collapsibles.length;i++){var collapsible=collapsibles[i];var collapsible_header=cssQuery('dt.collapsibleHeader',collapsible)[0];collapsible_header.onclick=toggleCollapsible;if(hasClassName(collapsible,'inline')){if(hasClassName(collapsible,'collapsedOnLoad')){replaceClassName(collapsible,'collapsedOnLoad','collapsedInlineCollapsible')} else{addClassName(collapsible,'expandedInlineCollapsible')}} else{if(hasClassName(collapsible,'collapsedOnLoad')){replaceClassName(collapsible,'collapsedOnLoad','collapsedBlockCollapsible')} else{addClassName(collapsible,'expandedBlockCollapsible')}}}};registerPloneFunction(activateCollapsibles);

/* - highlightsearchterms.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/highlightsearchterms.js?original=1
function highlightTermInNode(node,word){var contents=node.nodeValue;var index=contents.toLowerCase().indexOf(word.toLowerCase());if(index<0){return false};var parent=node.parentNode;if(parent.className!="highlightedSearchTerm"){var hiword=document.createElement("span");hiword.className="highlightedSearchTerm";hiword.appendChild(document.createTextNode(contents.substr(index,word.length)));parent.insertBefore(document.createTextNode(contents.substr(0,index)),node);parent.insertBefore(hiword,node);parent.insertBefore(document.createTextNode(contents.substr(index+word.length)),node);parent.removeChild(node)}}
function highlightSearchTerms(terms,startnode){if(!W3CDOM){return false};if(!terms){return false};if(!startnode){return false};for(var term_index=0;term_index<terms.length;term_index++){var term=terms[term_index];if(term.length<1)
continue;var term_lower=term.toLowerCase();if(term_lower!='not'&&term_lower!='and'&&term_lower!='or'){walkTextNodes(startnode,highlightTermInNode,term)}}}
function getSearchTermsFromURI(uri){var query;if(typeof decodeURI!='undefined'){query=decodeURI(uri)} else if(typeof unescape!='undefined'){query=unescape(uri)} else{}
var result=new Array();if(window.decodeReferrer){var referrerSearch=decodeReferrer();if(null!=referrerSearch&&referrerSearch.length>0){result=referrerSearch}}
var qfinder=new RegExp("searchterm=([^&]*)","gi");var qq=qfinder.exec(query);if(qq&&qq[1]){var terms=qq[1].replace(/\+/g,' ').split(/\s+/);for(var i=0;i<terms.length;i++){if(terms[i]!=''){result.push(terms[i])}}
return result}
return result.length==0?false:result}
function highlightSearchTermsFromURI(){if(!W3CDOM){return false};var terms=getSearchTermsFromURI(window.location.search);var contentarea=getContentArea();highlightSearchTerms(terms,contentarea)}
registerPloneFunction(highlightSearchTermsFromURI);

/* - se-highlight.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/se-highlight.js?original=1
var searchEngines=[['^http://([^.]+\\.)?google.*','q='],['^http://search\\.yahoo.*','p='],['^http://search\\.msn.*','q='],['^http://search\\.aol.*','userQuery='],['^http://(www\\.)?altavista.*','q='],['^http://(www\\.)?feedster.*','q='],['^http://search\\.lycos.*','query='],['^http://(www\\.)?alltheweb.*','q='],['^http://(www\\.)?ask\\.com.*','q=']]
function decodeReferrer(ref){if(null==ref&&document.referrer){ref=document.referrer}
if(!ref) return null;var match=new RegExp('');var seQuery='';for(var i=0;i<searchEngines.length;i++){if(!match.compile){match=new RegExp(searchEngines[i][0],'i')} else{match.compile(searchEngines[i][0],'i')}
if(ref.match(match)){if(!match.compile){match=new RegExp('^.*[?&]'+searchEngines[i][1]+'([^&]+)&?.*$','i')} else{match.compile('^.*[?&]'+searchEngines[i][1]+'([^&]+)&?.*$')}
seQuery=ref.replace(match,'$1');if(seQuery){seQuery=decodeURIComponent(seQuery);seQuery=seQuery.replace(/\'|"/, '');return seQuery.split(/[\s,\+\.]+/)}}}
return null}


/* - first_input_focus.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/first_input_focus.js?original=1
function setFocus(){if(!W3CDOM){return false};var xre=new RegExp(/\berror\b/);for(var f=0;(formnode=document.getElementsByTagName('form').item(f));f++){for(var i=0;(node=formnode.getElementsByTagName('div').item(i));i++){if(xre.exec(node.className)){for(var j=0;(inputnode=node.getElementsByTagName('input').item(j));j++){try{if(inputnode.focus){inputnode.focus();return}} catch(e){}}}}}}
registerPloneFunction(setFocus)


/* - folder_contents_filter.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/folder_contents_filter.js?original=1
function submitFolderAction(folderAction){document.folderContentsForm.action=document.folderContentsForm.action+'/'+folderAction;document.folderContentsForm.submit()}
function submitFilterAction(){document.folderContentsForm.action=document.folderContentsForm.action+'/folder_contents';filter_selection=document.getElementById('filter_selection');for(var i=0;i<filter_selection.length;i++){if(filter_selection.options[i].selected){if(filter_selection.options[i].value=='#'){document.folderContentsForm.filter_state.value='clear_view_filter'}
else{document.folderContentsForm.filter_state.value='set_view_filter'}}}
document.folderContentsForm.submit()}


/* - folder_contents_hideAddItems.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/folder_contents_hideAddItems.js?original=1
function hideTraditionalAddItemPullDown(){pullDown=document.getElementById('traditional-add-item-pulldown');if(pullDown){pullDown.style.display='none'}}
registerPloneFunction(hideTraditionalAddItemPullDown)


/* - table_sorter.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/table_sorter.js?original=1
function compare(a,b){au=new String(a);bu=new String(b);if(au.charAt(4)!='-'&&au.charAt(7)!='-'){var an=parseFloat(au)
var bn=parseFloat(bu)}
if(isNaN(an)||isNaN(bn)){as=au.toLowerCase()
bs=bu.toLowerCase()
if(as>bs){return 1}
else{return-1}}
else{return an-bn}}
function getConcatenedTextContent(node){var _result="";if(node==null){return _result}
var childrens=node.childNodes;var i=0;while(i<childrens.length){var child=childrens.item(i);switch(child.nodeType){case 1:case 5:_result+=getConcatenedTextContent(child);break;case 3:case 2:case 4:_result+=child.nodeValue;break;case 6:case 7:case 8:case 9:case 10:case 11:case 12:break}
i++}
return _result}
function sort(e){var el=window.event?window.event.srcElement:e.currentTarget;var a=new Array();if(el.nodeName=='IMG') el=el.parentNode;var name=el.childNodes.item(1).nodeValue;var dad=el.parentNode;var node;for(var im=0;(node=dad.getElementsByTagName("th").item(im));im++){if(node.lastChild.nodeName=='IMG'){lastindex=node.getElementsByTagName('img').length-1;node.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url+'/arrowBlank.gif')}}
for(var i=0;(node=dad.getElementsByTagName("th").item(i));i++){var xre=new RegExp(/\bnosort\b/);if(!xre.exec(node.className)&&node.childNodes.item(1).nodeValue==name){lastindex=node.getElementsByTagName('img').length-1;node.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url+'/arrowUp.gif');break}}
var tbody=dad.parentNode.parentNode.getElementsByTagName("tbody").item(0);for(var j=0;(node=tbody.getElementsByTagName("tr").item(j));j++){a[j]=new Array();a[j][0]=getConcatenedTextContent(node.getElementsByTagName("td").item(i));a[j][1]=getConcatenedTextContent(node.getElementsByTagName("td").item(1));a[j][2]=getConcatenedTextContent(node.getElementsByTagName("td").item(0));a[j][3]=node}
if(a.length>1){a.sort(compare);if(a[0][0]==getConcatenedTextContent(tbody.getElementsByTagName("tr").item(0).getElementsByTagName("td").item(i))&&a[1][0]==getConcatenedTextContent(tbody.getElementsByTagName("tr").item(1).getElementsByTagName("td").item(i))){a.reverse();lastindex=el.getElementsByTagName('img').length-1;el.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url+'/arrowDown.gif')}}
for(var j=0;j<a.length;j++){a[j][3].className=((j%2)==0)?'odd':'even';tbody.appendChild(a[j][3])}}
function initalizeTableSort(e){if(!W3CDOM){return false};var tbls=document.getElementsByTagName('table');for(var t=0;t<tbls.length;t++){var re=new RegExp(/\blisting\b/)
var xre=new RegExp(/\bnosort\b/)
if(re.exec(tbls[t].className)&&!xre.exec(tbls[t].className)){try{var thead=tbls[t].getElementsByTagName("thead").item(0);var node;blankarrow=document.createElement('img');blankarrow.setAttribute('src',portal_url+'/arrowBlank.gif');blankarrow.setAttribute('height',6);blankarrow.setAttribute('width',9);initialsort=false;for(var i=0;(node=thead.getElementsByTagName("th").item(i));i++){if(!xre.exec(node.className)){node.insertBefore(blankarrow.cloneNode(1),node.firstChild);node.style.cursor='pointer';if(!initialsort){initialsort=true;uparrow=document.createElement('img');uparrow.setAttribute('src',portal_url+'/arrowUp.gif');uparrow.setAttribute('height',6);uparrow.setAttribute('width',9);node.appendChild(uparrow)} else{node.appendChild(blankarrow.cloneNode(1))}
if(node.addEventListener) node.addEventListener("click",sort,false);else if(node.attachEvent) node.attachEvent("onclick",sort)}}} catch(er){}}}}
registerPloneFunction(initalizeTableSort)


/* - calendar_formfield.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/calendar_formfield.js?original=1
function onJsCalendarDateUpdate(cal){var year=cal.params.input_id_year;var month=cal.params.input_id_month;var day=cal.params.input_id_day;var daystr=''+cal.date.getDate();if(daystr.length==1)
daystr='0'+daystr;var monthstr=''+(cal.date.getMonth()+1);if(monthstr.length==1)
monthstr='0'+monthstr;cal.params.inputField.value=''+cal.date.getFullYear()+'-'+monthstr+'-'+daystr
year.value=cal.params.inputField.value.substring(0,4);month.value=cal.params.inputField.value.substring(5,7);day.value=cal.params.inputField.value.substring(8,10)}
function showJsCalendar(input_id_anchor,input_id,input_id_year,input_id_month,input_id_day,input_id_hour,input_id_minute,yearStart,yearEnd){var input_id_anchor=document.getElementById(input_id_anchor);var input_id=document.getElementById(input_id);var input_id_year=document.getElementById(input_id_year);var input_id_month=document.getElementById(input_id_month);var input_id_day=document.getElementById(input_id_day);var format='%Y-%m-%d';var dateEl=input_id;var mustCreate=false;var cal=window.calendar;var params={'range':[yearStart,yearEnd],inputField:input_id,input_id_year:input_id_year,input_id_month:input_id_month,input_id_day:input_id_day};
function param_default(pname,def){if(typeof params[pname]=="undefined"){params[pname]=def}};param_default("inputField",null);param_default("displayArea",null);param_default("button",null);param_default("eventName","click");param_default("ifFormat","%Y-%m-%d");param_default("daFormat","%Y-%m-%d");param_default("singleClick",true);param_default("disableFunc",null);param_default("dateStatusFunc",params["disableFunc"]);param_default("dateText",null);param_default("firstDay",1);param_default("align","Bl");param_default("range",[1900,2999]);param_default("weekNumbers",true);param_default("flat",null);param_default("flatCallback",null);param_default("onSelect",null);param_default("onClose",null);param_default("onUpdate",null);param_default("date",null);param_default("showsTime",false);param_default("timeFormat","24");param_default("electric",true);param_default("step",1);param_default("position",null);param_default("cache",false);param_default("showOthers",false);param_default("multiple",null);if(!(cal&&params.cache)){window.calendar=cal=new Calendar(params.firstDay,null,onJsCalendarDateUpdate,
function(cal){cal.hide()});cal.time24=true;cal.weekNumbers=true;mustCreate=true} else{cal.hide()}
cal.showsOtherMonths=false;cal.yearStep=1;cal.setRange(yearStart,yearEnd);cal.params=params;cal.setDateStatusHandler(null);cal.getDateText=null;cal.setDateFormat(format);if(mustCreate)
cal.create();cal.parseDate(input_id.value);cal.refresh();if(!params.position)
cal.showAtElement(input_id_anchor,null);else
cal.showAt(params.position[0],params.position[1]);return false}
function update_date_field(field,year,month,day,hour,minute,ampm){var field=document.getElementById(field)
var date=document.getElementById(date)
var year=document.getElementById(year)
var month=document.getElementById(month)
var day=document.getElementById(day)
var hour=document.getElementById(hour)
var minute=document.getElementById(minute)
var ampm=document.getElementById(ampm)
if(0<year.value){field.value=year.value+"-"+month.value+"-"+day.value
if(ampm&&ampm.value)
field.value=field.value+" "+ampm.value}
else{field.value=''
month.options[0].selected=1
day.options[0].selected=1
hour.options[0].selected=1
minute.options[0].selected=1
if(ampm&&ampm.options)
ampm.options[0].selected=1}}


/* - calendarpopup.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/calendarpopup.js?original=1
function showDay(date){document.getElementById('day'+date).style.visibility='visible';return true}
function hideDay(date){document.getElementById('day'+date).style.visibility='hidden';return true}


/* - ie5fixes.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/ie5fixes.js?original=1
function hackPush(el){this[this.length]=el}
function hackPop(){var N=this.length-1,el=this[N];this.length=N
return el}
function hackShift(){var one=this[0],N=this.length;for(var i=1;i<N;i++){this[i-1]=this[i]}
this.length=N-1
return one}
var testPushPop=new Array();if(testPushPop.push){}else{Array.prototype.push=hackPush
Array.prototype.pop=hackPop
Array.prototype.shift=hackShift}


/* - login.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/login.js?original=1
function cookiesEnabled(){var c="areYourCookiesEnabled=0";document.cookie=c;var dc=document.cookie;if(dc.indexOf(c)==-1) return 0;c="areYourCookiesEnabled=1";document.cookie=c;dc=document.cookie;if(dc.indexOf(c)==-1) return 0;document.cookie="areYourCookiesEnabled=; expires=Thu, 01-Jan-70 00:00:01 GMT";return 1}
function setLoginVars(user_name_id,alt_user_name_id,password_id,empty_password_id,js_enabled_id,cookies_enabled_id){if(js_enabled_id){el=document.getElementById(js_enabled_id);if(el){el.value=1}}
if(cookies_enabled_id){el=document.getElementById(cookies_enabled_id);if(el){el.value=cookiesEnabled()}}
if(user_name_id&&alt_user_name_id){user_name=document.getElementById(user_name_id)
alt_user_name=document.getElementById(alt_user_name_id)
if(user_name&&alt_user_name){alt_user_name.value=user_name.value}}
if(password_id&&empty_password_id){password=document.getElementById(password_id)
empty_password=document.getElementById(empty_password_id)
if(password&&empty_password){if(password.value.length==0){empty_password.value='1'} else{empty_password.value='0'}}}
return 1}
function showCookieMessage(msg_id){msg=document.getElementById(msg_id)
if(msg){if(cookiesEnabled()){msg.style.display='none'} else{msg.style.display='block'}}}
function showEnableCookiesMessage(){showCookieMessage('enable_cookies_message')}
registerPloneFunction(showEnableCookiesMessage);

/* - formsubmithelpers.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/formsubmithelpers.js?original=1
function inputSubmitOnClick(event){if(!event) var event=window.event;if(hasClassName(this,'submitting')){return confirm(window.form_resubmit_message)} else{addClassName(this,'submitting')}
return true}
function registerSubmitHandler(){var nodes=cssQuery('input[type=submit]');for(var i=0;i<nodes.length;i++){var node=nodes[i];if(!node.onclick){node.onclick=inputSubmitOnClick}}}
registerPloneFunction(registerSubmitHandler);

/* - overlib/overlib.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/overlib/overlib.js?original=1
var olLoaded=0;var pmStart=10000000;var pmUpper=10001000;var pmCount=pmStart+1;var pmt='';var pms=new Array();var olInfo=new Info('4.21',1);var FREPLACE=0;var FBEFORE=1;var FAFTER=2;var FALTERNATE=3;var FCHAIN=4;var olHideForm=0;var olHautoFlag=0;var olVautoFlag=0;var hookPts=new Array(),postParse=new Array(),cmdLine=new Array(),runTime=new Array();registerCommands('donothing,inarray,caparray,sticky,background,noclose,caption,left,right,center,offsetx,offsety,fgcolor,bgcolor,textcolor,capcolor,closecolor,width,border,cellpad,status,autostatus,autostatuscap,height,closetext,snapx,snapy,fixx,fixy,relx,rely,fgbackground,bgbackground,padx,pady,fullhtml,above,below,capicon,textfont,captionfont,closefont,textsize,captionsize,closesize,timeout,function,delay,hauto,vauto,closeclick,wrap,followmouse,mouseoff,closetitle,cssoff,compatmode,cssclass,fgclass,bgclass,textfontclass,captionfontclass,closefontclass');if(typeof ol_fgcolor=='undefined') var ol_fgcolor="#FEEBD8";if(typeof ol_bgcolor=='undefined') var ol_bgcolor="#cc3300";if(typeof ol_textcolor=='undefined') var ol_textcolor="#000000";if(typeof ol_capcolor=='undefined') var ol_capcolor="#FFFFFF";if(typeof ol_closecolor=='undefined') var ol_closecolor="#9999FF";if(typeof ol_textfont=='undefined') var ol_textfont="Verdana,Arial,Helvetica";if(typeof ol_captionfont=='undefined') var ol_captionfont="Verdana,Arial,Helvetica";if(typeof ol_closefont=='undefined') var ol_closefont="Verdana,Arial,Helvetica";if(typeof ol_textsize=='undefined') var ol_textsize="1";if(typeof ol_captionsize=='undefined') var ol_captionsize="1";if(typeof ol_closesize=='undefined') var ol_closesize="1";if(typeof ol_width=='undefined') var ol_width="200";if(typeof ol_border=='undefined') var ol_border="1";if(typeof ol_cellpad=='undefined') var ol_cellpad=2;if(typeof ol_offsetx=='undefined') var ol_offsetx=10;if(typeof ol_offsety=='undefined') var ol_offsety=10;if(typeof ol_text=='undefined') var ol_text="Default Text";if(typeof ol_cap=='undefined') var ol_cap="";if(typeof ol_sticky=='undefined') var ol_sticky=0;if(typeof ol_background=='undefined') var ol_background="";if(typeof ol_close=='undefined') var ol_close="Close";if(typeof ol_hpos=='undefined') var ol_hpos=RIGHT;if(typeof ol_status=='undefined') var ol_status="";if(typeof ol_autostatus=='undefined') var ol_autostatus=0;if(typeof ol_height=='undefined') var ol_height=-1;if(typeof ol_snapx=='undefined') var ol_snapx=0;if(typeof ol_snapy=='undefined') var ol_snapy=0;if(typeof ol_fixx=='undefined') var ol_fixx=-1;if(typeof ol_fixy=='undefined') var ol_fixy=-1;if(typeof ol_relx=='undefined') var ol_relx=null;if(typeof ol_rely=='undefined') var ol_rely=null;if(typeof ol_fgbackground=='undefined') var ol_fgbackground="";if(typeof ol_bgbackground=='undefined') var ol_bgbackground="";if(typeof ol_padxl=='undefined') var ol_padxl=1;if(typeof ol_padxr=='undefined') var ol_padxr=1;if(typeof ol_padyt=='undefined') var ol_padyt=1;if(typeof ol_padyb=='undefined') var ol_padyb=1;if(typeof ol_fullhtml=='undefined') var ol_fullhtml=0;if(typeof ol_vpos=='undefined') var ol_vpos=BELOW;if(typeof ol_aboveheight=='undefined') var ol_aboveheight=0;if(typeof ol_capicon=='undefined') var ol_capicon="";if(typeof ol_frame=='undefined') var ol_frame=self;if(typeof ol_timeout=='undefined') var ol_timeout=0;if(typeof ol_function=='undefined') var ol_function=null;if(typeof ol_delay=='undefined') var ol_delay=0;if(typeof ol_hauto=='undefined') var ol_hauto=0;if(typeof ol_vauto=='undefined') var ol_vauto=1;if(typeof ol_closeclick=='undefined') var ol_closeclick=0;if(typeof ol_wrap=='undefined') var ol_wrap=0;if(typeof ol_followmouse=='undefined') var ol_followmouse=1;if(typeof ol_mouseoff=='undefined') var ol_mouseoff=0;if(typeof ol_closetitle=='undefined') var ol_closetitle='Close';if(typeof ol_compatmode=='undefined') var ol_compatmode=0;if(typeof ol_css=='undefined') var ol_css=CSSOFF;if(typeof ol_fgclass=='undefined') var ol_fgclass="";if(typeof ol_bgclass=='undefined') var ol_bgclass="";if(typeof ol_textfontclass=='undefined') var ol_textfontclass="";if(typeof ol_captionfontclass=='undefined') var ol_captionfontclass="";if(typeof ol_closefontclass=='undefined') var ol_closefontclass="";if(typeof ol_texts=='undefined') var ol_texts=new Array("Text 0","Text 1");if(typeof ol_caps=='undefined') var ol_caps=new Array("Caption 0","Caption 1");var o3_text="";var o3_cap="";var o3_sticky=0;var o3_background="";var o3_close="Close";var o3_hpos=RIGHT;var o3_offsetx=2;var o3_offsety=2;var o3_fgcolor="";var o3_bgcolor="";var o3_textcolor="";var o3_capcolor="";var o3_closecolor="";var o3_width=100;var o3_border=1;var o3_cellpad=2;var o3_status="";var o3_autostatus=0;var o3_height=-1;var o3_snapx=0;var o3_snapy=0;var o3_fixx=-1;var o3_fixy=-1;var o3_relx=null;var o3_rely=null;var o3_fgbackground="";var o3_bgbackground="";var o3_padxl=0;var o3_padxr=0;var o3_padyt=0;var o3_padyb=0;var o3_fullhtml=0;var o3_vpos=BELOW;var o3_aboveheight=0;var o3_capicon="";var o3_textfont="Verdana,Arial,Helvetica";var o3_captionfont="Verdana,Arial,Helvetica";var o3_closefont="Verdana,Arial,Helvetica";var o3_textsize="1";var o3_captionsize="1";var o3_closesize="1";var o3_frame=self;var o3_timeout=0;var o3_timerid=0;var o3_allowmove=0;var o3_function=null;var o3_delay=0;var o3_delayid=0;var o3_hauto=0;var o3_vauto=0;var o3_closeclick=0;var o3_wrap=0;var o3_followmouse=1;var o3_mouseoff=0;var o3_closetitle='';var o3_compatmode=0;var o3_css=CSSOFF;var o3_fgclass="";var o3_bgclass="";var o3_textfontclass="";var o3_captionfontclass="";var o3_closefontclass="";var o3_x=0;var o3_y=0;var o3_showingsticky=0;var o3_removecounter=0;var over=null;var fnRef,hoveringSwitch=false;var olHideDelay;var isMac=(navigator.userAgent.indexOf("Mac")!=-1);var olOp=(navigator.userAgent.toLowerCase().indexOf('opera')>-1&&document.createTextNode);var olNs4=(navigator.appName=='Netscape'&&parseInt(navigator.appVersion)==4);var olNs6=(document.getElementById)?true:false;var olKq=(olNs6&&/konqueror/i.test(navigator.userAgent));var olIe4=(document.all)?true:false;var olIe5=false;var olIe55=false;var docRoot='document.body';if(olNs4){var oW=window.innerWidth;var oH=window.innerHeight;window.onresize=function(){if(oW!=window.innerWidth||oH!=window.innerHeight) location.reload()}}
if(olIe4){var agent=navigator.userAgent;if (/MSIE/.test(agent)){var versNum=parseFloat(agent.match(/MSIE[ ](\d\.\d+)\.*/i)[1]);if(versNum>=5){olIe5=true;olIe55=(versNum>=5.5&&!olOp)?true:false;if(olNs6) olNs6=false}}
if(olNs6) olIe4=false}
if(document.compatMode&&document.compatMode=='CSS1Compat'){docRoot=((olIe4&&!olOp)?'document.documentElement':docRoot)}
if(window.addEventListener) window.addEventListener("load",OLonLoad_handler,false);else if(window.attachEvent) window.attachEvent("onload",OLonLoad_handler);var capExtent;
function overlib(){if(!olLoaded||isExclusive(overlib.arguments)) return true;if(olCheckMouseCapture) olMouseCapture();if(over){over=(typeof over.id!='string')?o3_frame.document.all['overDiv']:over;cClick()}
olHideDelay=0;o3_text=ol_text;o3_cap=ol_cap;o3_sticky=ol_sticky;o3_background=ol_background;o3_close=ol_close;o3_hpos=ol_hpos;o3_offsetx=ol_offsetx;o3_offsety=ol_offsety;o3_fgcolor=ol_fgcolor;o3_bgcolor=ol_bgcolor;o3_textcolor=ol_textcolor;o3_capcolor=ol_capcolor;o3_closecolor=ol_closecolor;o3_width=ol_width;o3_border=ol_border;o3_cellpad=ol_cellpad;o3_status=ol_status;o3_autostatus=ol_autostatus;o3_height=ol_height;o3_snapx=ol_snapx;o3_snapy=ol_snapy;o3_fixx=ol_fixx;o3_fixy=ol_fixy;o3_relx=ol_relx;o3_rely=ol_rely;o3_fgbackground=ol_fgbackground;o3_bgbackground=ol_bgbackground;o3_padxl=ol_padxl;o3_padxr=ol_padxr;o3_padyt=ol_padyt;o3_padyb=ol_padyb;o3_fullhtml=ol_fullhtml;o3_vpos=ol_vpos;o3_aboveheight=ol_aboveheight;o3_capicon=ol_capicon;o3_textfont=ol_textfont;o3_captionfont=ol_captionfont;o3_closefont=ol_closefont;o3_textsize=ol_textsize;o3_captionsize=ol_captionsize;o3_closesize=ol_closesize;o3_timeout=ol_timeout;o3_function=ol_function;o3_delay=ol_delay;o3_hauto=ol_hauto;o3_vauto=ol_vauto;o3_closeclick=ol_closeclick;o3_wrap=ol_wrap;o3_followmouse=ol_followmouse;o3_mouseoff=ol_mouseoff;o3_closetitle=ol_closetitle;o3_css=ol_css;o3_compatmode=ol_compatmode;o3_fgclass=ol_fgclass;o3_bgclass=ol_bgclass;o3_textfontclass=ol_textfontclass;o3_captionfontclass=ol_captionfontclass;o3_closefontclass=ol_closefontclass;setRunTimeVariables();fnRef='';o3_frame=ol_frame;if(!(over=createDivContainer())) return false;parseTokens('o3_',overlib.arguments);if(!postParseChecks()) return false;if(o3_delay==0){return runHook("olMain",FREPLACE)} else{o3_delayid=setTimeout("runHook('olMain', FREPLACE)",o3_delay);return false}}
function nd(time){if(olLoaded&&!isExclusive()){hideDelay(time);if(o3_removecounter>=1){o3_showingsticky=0};if(o3_showingsticky==0){o3_allowmove=0;if(over!=null&&o3_timerid==0) runHook("hideObject",FREPLACE,over)} else{o3_removecounter++}}
return true}
function cClick(){if(olLoaded){runHook("hideObject",FREPLACE,over);o3_showingsticky=0}
return false}
function overlib_pagedefaults(){parseTokens('ol_',overlib_pagedefaults.arguments)}
function olMain(){var layerhtml,styleType;runHook("olMain",FBEFORE);if(o3_background!=""||o3_fullhtml){layerhtml=runHook('ol_content_background',FALTERNATE,o3_css,o3_text,o3_background,o3_fullhtml)} else{styleType=(pms[o3_css-1-pmStart]=="cssoff"||pms[o3_css-1-pmStart]=="cssclass");if(o3_fgbackground!="") o3_fgbackground="background=\""+o3_fgbackground+"\"";if(o3_bgbackground!="") o3_bgbackground=(styleType?"background=\""+o3_bgbackground+"\"":o3_bgbackground);if(o3_fgcolor!="") o3_fgcolor=(styleType?"bgcolor=\""+o3_fgcolor+"\"":o3_fgcolor);if(o3_bgcolor!="") o3_bgcolor=(styleType?"bgcolor=\""+o3_bgcolor+"\"":o3_bgcolor);if(o3_height>0) o3_height=(styleType?"height=\""+o3_height+"\"":o3_height);else o3_height="";if(o3_cap==""){layerhtml=runHook('ol_content_simple',FALTERNATE,o3_css,o3_text)} else{if(o3_sticky){layerhtml=runHook('ol_content_caption',FALTERNATE,o3_css,o3_text,o3_cap,o3_close)} else{layerhtml=runHook('ol_content_caption',FALTERNATE,o3_css,o3_text,o3_cap,"")}}}
if(o3_sticky){if(o3_timerid>0){clearTimeout(o3_timerid);o3_timerid=0}
o3_showingsticky=1;o3_removecounter=0}
if(!runHook("createPopup",FREPLACE,layerhtml)) return false;if(o3_autostatus>0){o3_status=o3_text;if(o3_autostatus>1) o3_status=o3_cap}
o3_allowmove=0;if(o3_timeout>0){if(o3_timerid>0) clearTimeout(o3_timerid);o3_timerid=setTimeout("cClick()",o3_timeout)}
runHook("disp",FREPLACE,o3_status);runHook("olMain",FAFTER);return(olOp&&event&&event.type=='mouseover'&&!o3_status)?'':(o3_status!='')}
function ol_content_simple(text){var cpIsMultiple=/,/.test(o3_cellpad);var txt='<table width="'+o3_width+'" border="0" cellpadding="'+o3_border+'" cellspacing="0" '+(o3_bgclass?'class="'+o3_bgclass+'"':o3_bgcolor+' '+o3_height)+'><tr><td><table width="100%" border="0" '+((olNs4||!cpIsMultiple)?'cellpadding="'+o3_cellpad+'" ':'')+'cellspacing="0" '+(o3_fgclass?'class="'+o3_fgclass+'"':o3_fgcolor+' '+o3_fgbackground+' '+o3_height)+'><tr><td valign="TOP"'+(o3_textfontclass?' class="'+o3_textfontclass+'">':((!olNs4&&cpIsMultiple)?' style="'+setCellPadStr(o3_cellpad)+'">':'>'))+(o3_textfontclass?'':wrapStr(0,o3_textsize,'text'))+text+(o3_textfontclass?'':wrapStr(1,o3_textsize))+'</td></tr></table></td></tr></table>';set_background("");return txt}
function ol_content_caption(text,title,close){var nameId,txt,cpIsMultiple=/,/.test(o3_cellpad);var closing,closeevent;closing="";closeevent="onmouseover";if(o3_closeclick==1) closeevent=(o3_closetitle?"title='"+o3_closetitle+"'":"")+" onclick";if(o3_capicon!=""){nameId=' hspace = \"5\"'+' align = \"middle\" alt = \"\"';if(typeof o3_dragimg!='undefined'&&o3_dragimg) nameId=' hspace=\"5\"'+' name=\"'+o3_dragimg+'\" id=\"'+o3_dragimg+'\" align=\"middle\" alt=\"Drag Enabled\" title=\"Drag Enabled\"';o3_capicon='<img src=\"'+o3_capicon+'\"'+nameId+' />'}
if(close!="")
closing='<td '+(!o3_compatmode&&o3_closefontclass?'class="'+o3_closefontclass:'align="RIGHT')+'"><a href="javascript:return '+fnRef+'cClick();"'+((o3_compatmode&&o3_closefontclass)?' class="'+o3_closefontclass+'" ':' ')+closeevent+'="return '+fnRef+'cClick();">'+(o3_closefontclass?'':wrapStr(0,o3_closesize,'close'))+close+(o3_closefontclass?'':wrapStr(1,o3_closesize,'close'))+'</a></td>';txt='<table width="'+o3_width+'" border="0" cellpadding="'+o3_border+'" cellspacing="0" '+(o3_bgclass?'class="'+o3_bgclass+'"':o3_bgcolor+' '+o3_bgbackground+' '+o3_height)+'><tr><td><table width="100%" border="0" cellpadding="2" cellspacing="0"><tr><td'+(o3_captionfontclass?' class="'+o3_captionfontclass+'">':'>')+(o3_captionfontclass?'':'<b>'+wrapStr(0,o3_captionsize,'caption'))+o3_capicon+title+(o3_captionfontclass?'':wrapStr(1,o3_captionsize)+'</b>')+'</td>'+closing+'</tr></table><table width="100%" border="0" '+((olNs4||!cpIsMultiple)?'cellpadding="'+o3_cellpad+'" ':'')+'cellspacing="0" '+(o3_fgclass?'class="'+o3_fgclass+'"':o3_fgcolor+' '+o3_fgbackground+' '+o3_height)+'><tr><td valign="TOP"'+(o3_textfontclass?' class="'+o3_textfontclass+'">':((!olNs4&&cpIsMultiple)?' style="'+setCellPadStr(o3_cellpad)+'">':'>'))+(o3_textfontclass?'':wrapStr(0,o3_textsize,'text'))+text+(o3_textfontclass?'':wrapStr(1,o3_textsize))+'</td></tr></table></td></tr></table>';set_background("");return txt}
function ol_content_background(text,picture,hasfullhtml){if(hasfullhtml){txt=text} else{txt='<table width="'+o3_width+'" border="0" cellpadding="0" cellspacing="0" height="'+o3_height+'"><tr><td colspan="3" height="'+o3_padyt+'"></td></tr><tr><td width="'+o3_padxl+'"></td><td valign="TOP" width="'+(o3_width-o3_padxl-o3_padxr)+(o3_textfontclass?'" class="'+o3_textfontclass:'')+'">'+(o3_textfontclass?'':wrapStr(0,o3_textsize,'text'))+text+(o3_textfontclass?'':wrapStr(1,o3_textsize))+'</td><td width="'+o3_padxr+'"></td></tr><tr><td colspan="3" height="'+o3_padyb+'"></td></tr></table>'}
set_background(picture);return txt}
function set_background(pic){if(pic==""){if(olNs4){over.background.src=null} else if(over.style){over.style.backgroundImage="none"}} else{if(olNs4){over.background.src=pic} else if(over.style){over.style.width=o3_width+'px';over.style.backgroundImage="url("+pic+")"}}}
var olShowId=-1;
function disp(statustext){runHook("disp",FBEFORE);if(o3_allowmove==0){runHook("placeLayer",FREPLACE);(olNs6&&olShowId<0)?olShowId=setTimeout("runHook('showObject', FREPLACE, over)",1):runHook("showObject",FREPLACE,over);o3_allowmove=(o3_sticky||o3_followmouse==0)?0:1}
runHook("disp",FAFTER);if(statustext!="") self.status=statustext}
function createPopup(lyrContent){runHook("createPopup",FBEFORE);if(o3_wrap){var wd,ww,theObj=(olNs4?over:over.style);theObj.top=theObj.left=((olIe4&&!olOp)?0:-10000)+(!olNs4?'px':0);layerWrite(lyrContent);wd=(olNs4?over.clip.width:over.offsetWidth);if(wd>(ww=windowWidth())){lyrContent=lyrContent.replace(/\&nbsp;/g,' ');o3_width=ww;o3_wrap=0}}
layerWrite(lyrContent);if(o3_wrap) o3_width=(olNs4?over.clip.width:over.offsetWidth);runHook("createPopup",FAFTER,lyrContent);return true}
function placeLayer(){var placeX,placeY,widthFix=0;if(o3_frame.innerWidth) widthFix=18;iwidth=windowWidth();winoffset=(olIe4)?eval('o3_frame.'+docRoot+'.scrollLeft'):o3_frame.pageXOffset;placeX=runHook('horizontalPlacement',FCHAIN,iwidth,winoffset,widthFix);if(o3_frame.innerHeight){iheight=o3_frame.innerHeight} else if(eval('o3_frame.'+docRoot)&&eval("typeof o3_frame."+docRoot+".clientHeight=='number'")&&eval('o3_frame.'+docRoot+'.clientHeight')){iheight=eval('o3_frame.'+docRoot+'.clientHeight')}
scrolloffset=(olIe4)?eval('o3_frame.'+docRoot+'.scrollTop'):o3_frame.pageYOffset;placeY=runHook('verticalPlacement',FCHAIN,iheight,scrolloffset);repositionTo(over,placeX,placeY)}
function olMouseMove(e){var e=(e)?e:event;if(e.pageX){o3_x=e.pageX;o3_y=e.pageY} else if(e.clientX){o3_x=eval('e.clientX+o3_frame.'+docRoot+'.scrollLeft');o3_y=eval('e.clientY+o3_frame.'+docRoot+'.scrollTop')}
if(o3_allowmove==1) runHook("placeLayer",FREPLACE);if(hoveringSwitch&&!olNs4&&runHook("cursorOff",FREPLACE)){(olHideDelay?hideDelay(olHideDelay):cClick());hoveringSwitch=!hoveringSwitch}}
function no_overlib(){return ver3fix}
function olMouseCapture(){capExtent=document;var fN,str='',l,k,f,wMv,sS,mseHandler=olMouseMove;var re=/function[ ]*(\w*)\(/;wMv=(!olIe4&&window.onmousemove);if(document.onmousemove||wMv){if(wMv) capExtent=window;f=capExtent.onmousemove.toString();fN=f.match(re);if(fN==null){str=f+'(e); '} else if(fN[1]=='anonymous'||fN[1]=='olMouseMove'||(wMv&&fN[1]=='onmousemove')){if(!olOp&&wMv){l=f.indexOf('{')+1;k=f.lastIndexOf('}');sS=f.substring(l,k);if((l=sS.indexOf('('))!=-1){sS=sS.substring(0,l).replace(/^\s+/,'').replace(/\s+$/,'');if(eval("typeof "+sS+" == 'undefined'")) window.onmousemove=null;else str=sS+'(e);'}}
if(!str){olCheckMouseCapture=false;return}} else{if(fN[1]) str=fN[1]+'(e); ';else{l=f.indexOf('{')+1;k=f.lastIndexOf('}');str=f.substring(l,k)+'\n'}}
str+='olMouseMove(e); ';mseHandler=new Function('e',str)}
capExtent.onmousemove=mseHandler;if(olNs4) capExtent.captureEvents(Event.MOUSEMOVE)}
function parseTokens(pf,ar){var v,i,mode=-1,par=(pf!='ol_');var fnMark=(par&&!ar.length?1:0);for(i=0;i<ar.length;i++){if(mode<0){if(typeof ar[i]=='number'&&ar[i]>pmStart&&ar[i]<pmUpper){fnMark=(par?1:0);i--} else{switch(pf){case 'ol_':ol_text=ar[i].toString();break;default:o3_text=ar[i].toString()}}
mode=0} else{if(ar[i]>=pmCount||ar[i]==DONOTHING){continue}
if(ar[i]==INARRAY){fnMark=0;eval(pf+'text=ol_texts['+ar[++i]+'].toString()');continue}
if(ar[i]==CAPARRAY){eval(pf+'cap=ol_caps['+ar[++i]+'].toString()');continue}
if(ar[i]==STICKY){if(pf!='ol_') eval(pf+'sticky=1');continue}
if(ar[i]==BACKGROUND){eval(pf+'background="'+ar[++i]+'"');continue}
if(ar[i]==NOCLOSE){if(pf!='ol_') opt_NOCLOSE();continue}
if(ar[i]==CAPTION){eval(pf+"cap='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==CENTER||ar[i]==LEFT||ar[i]==RIGHT){eval(pf+'hpos='+ar[i]);if(pf!='ol_') olHautoFlag=1;continue}
if(ar[i]==OFFSETX){eval(pf+'offsetx='+ar[++i]);continue}
if(ar[i]==OFFSETY){eval(pf+'offsety='+ar[++i]);continue}
if(ar[i]==FGCOLOR){eval(pf+'fgcolor="'+ar[++i]+'"');continue}
if(ar[i]==BGCOLOR){eval(pf+'bgcolor="'+ar[++i]+'"');continue}
if(ar[i]==TEXTCOLOR){eval(pf+'textcolor="'+ar[++i]+'"');continue}
if(ar[i]==CAPCOLOR){eval(pf+'capcolor="'+ar[++i]+'"');continue}
if(ar[i]==CLOSECOLOR){eval(pf+'closecolor="'+ar[++i]+'"');continue}
if(ar[i]==WIDTH){eval(pf+'width='+ar[++i]);continue}
if(ar[i]==BORDER){eval(pf+'border='+ar[++i]);continue}
if(ar[i]==CELLPAD){i=opt_MULTIPLEARGS(++i,ar,(pf+'cellpad'));continue}
if(ar[i]==STATUS){eval(pf+"status='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==AUTOSTATUS){eval(pf+'autostatus=('+pf+'autostatus == 1) ? 0 : 1');continue}
if(ar[i]==AUTOSTATUSCAP){eval(pf+'autostatus=('+pf+'autostatus == 2) ? 0 : 2');continue}
if(ar[i]==HEIGHT){eval(pf+'height='+pf+'aboveheight='+ar[++i]);continue}
if(ar[i]==CLOSETEXT){eval(pf+"close='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==SNAPX){eval(pf+'snapx='+ar[++i]);continue}
if(ar[i]==SNAPY){eval(pf+'snapy='+ar[++i]);continue}
if(ar[i]==FIXX){eval(pf+'fixx='+ar[++i]);continue}
if(ar[i]==FIXY){eval(pf+'fixy='+ar[++i]);continue}
if(ar[i]==RELX){eval(pf+'relx='+ar[++i]);continue}
if(ar[i]==RELY){eval(pf+'rely='+ar[++i]);continue}
if(ar[i]==FGBACKGROUND){eval(pf+'fgbackground="'+ar[++i]+'"');continue}
if(ar[i]==BGBACKGROUND){eval(pf+'bgbackground="'+ar[++i]+'"');continue}
if(ar[i]==PADX){eval(pf+'padxl='+ar[++i]);eval(pf+'padxr='+ar[++i]);continue}
if(ar[i]==PADY){eval(pf+'padyt='+ar[++i]);eval(pf+'padyb='+ar[++i]);continue}
if(ar[i]==FULLHTML){if(pf!='ol_') eval(pf+'fullhtml=1');continue}
if(ar[i]==BELOW||ar[i]==ABOVE){eval(pf+'vpos='+ar[i]);if(pf!='ol_') olVautoFlag=1;continue}
if(ar[i]==CAPICON){eval(pf+'capicon="'+ar[++i]+'"');continue}
if(ar[i]==TEXTFONT){eval(pf+"textfont='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==CAPTIONFONT){eval(pf+"captionfont='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==CLOSEFONT){eval(pf+"closefont='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==TEXTSIZE){eval(pf+'textsize="'+ar[++i]+'"');continue}
if(ar[i]==CAPTIONSIZE){eval(pf+'captionsize="'+ar[++i]+'"');continue}
if(ar[i]==CLOSESIZE){eval(pf+'closesize="'+ar[++i]+'"');continue}
if(ar[i]==TIMEOUT){eval(pf+'timeout='+ar[++i]);continue}
if(ar[i]==FUNCTION){if(pf=='ol_'){if(typeof ar[i+1]!='number'){v=ar[++i];ol_function=(typeof v=='function'?v:null)}} else{fnMark=0;v=null;if(typeof ar[i+1]!='number') v=ar[++i];opt_FUNCTION(v)} continue}
if(ar[i]==DELAY){eval(pf+'delay='+ar[++i]);continue}
if(ar[i]==HAUTO){eval(pf+'hauto=('+pf+'hauto == 0) ? 1 : 0');continue}
if(ar[i]==VAUTO){eval(pf+'vauto=('+pf+'vauto == 0) ? 1 : 0');continue}
if(ar[i]==CLOSECLICK){eval(pf+'closeclick=('+pf+'closeclick == 0) ? 1 : 0');continue}
if(ar[i]==WRAP){eval(pf+'wrap=('+pf+'wrap == 0) ? 1 : 0');continue}
if(ar[i]==FOLLOWMOUSE){eval(pf+'followmouse=('+pf+'followmouse == 1) ? 0 : 1');continue}
if(ar[i]==MOUSEOFF){eval(pf+'mouseoff=('+pf+'mouseoff==0) ? 1 : 0');v=ar[i+1];if(pf!='ol_'&&eval(pf+'mouseoff')&&typeof v=='number'&&(v<pmStart||v>pmUpper)) olHideDelay=ar[++i];continue}
if(ar[i]==CLOSETITLE){eval(pf+"closetitle='"+escSglQuote(ar[++i])+"'");continue}
if(ar[i]==CSSOFF||ar[i]==CSSCLASS){eval(pf+'css='+ar[i]);continue}
if(ar[i]==COMPATMODE){eval(pf+'compatmode=('+pf+'compatmode==0) ? 1 : 0');continue}
if(ar[i]==FGCLASS){eval(pf+'fgclass="'+ar[++i]+'"');continue}
if(ar[i]==BGCLASS){eval(pf+'bgclass="'+ar[++i]+'"');continue}
if(ar[i]==TEXTFONTCLASS){eval(pf+'textfontclass="'+ar[++i]+'"');continue}
if(ar[i]==CAPTIONFONTCLASS){eval(pf+'captionfontclass="'+ar[++i]+'"');continue}
if(ar[i]==CLOSEFONTCLASS){eval(pf+'closefontclass="'+ar[++i]+'"');continue}
i=parseCmdLine(pf,i,ar)}}
if(fnMark&&o3_function) o3_text=o3_function();if((pf=='o3_')&&o3_wrap){o3_width=0;var tReg=/<.*\n*>/ig;if(!tReg.test(o3_text)) o3_text=o3_text.replace(/[ ]+/g,'&nbsp;');if(!tReg.test(o3_cap))o3_cap=o3_cap.replace(/[ ]+/g,'&nbsp;')}
if((pf=='o3_')&&o3_sticky){if(!o3_close&&(o3_frame!=ol_frame)) o3_close=ol_close;if(o3_mouseoff&&(o3_frame==ol_frame)) opt_NOCLOSE(' ')}}
function layerWrite(txt){txt+="\n";if(olNs4){var lyr=o3_frame.document.layers['overDiv'].document
lyr.write(txt)
lyr.close()} else if(typeof over.innerHTML!='undefined'){if(olIe5&&isMac) over.innerHTML='';over.innerHTML=txt} else{range=o3_frame.document.createRange();range.setStartAfter(over);domfrag=range.createContextualFragment(txt);while(over.hasChildNodes()){over.removeChild(over.lastChild)}
over.appendChild(domfrag)}}
function showObject(obj){runHook("showObject",FBEFORE);var theObj=(olNs4?obj:obj.style);theObj.visibility='visible';runHook("showObject",FAFTER)}
function hideObject(obj){runHook("hideObject",FBEFORE);var theObj=(olNs4?obj:obj.style);if(olNs6&&olShowId>0){clearTimeout(olShowId);olShowId=0}
theObj.visibility='hidden';theObj.top=theObj.left=((olIe4&&!olOp)?0:-10000)+(!olNs4?'px':0);if(o3_timerid>0) clearTimeout(o3_timerid);if(o3_delayid>0) clearTimeout(o3_delayid);o3_timerid=0;o3_delayid=0;self.status="";if(obj.onmouseout||obj.onmouseover){if(olNs4) obj.releaseEvents(Event.MOUSEOUT||Event.MOUSEOVER);obj.onmouseout=obj.onmouseover=null}
runHook("hideObject",FAFTER)}
function repositionTo(obj,xL,yL){var theObj=(olNs4?obj:obj.style);theObj.left=xL+(!olNs4?'px':0);theObj.top=yL+(!olNs4?'px':0)}
function cursorOff(){var left=parseInt(over.style.left);var top=parseInt(over.style.top);var right=left+(over.offsetWidth>=parseInt(o3_width)?over.offsetWidth:parseInt(o3_width));var bottom=top+(over.offsetHeight>=o3_aboveheight?over.offsetHeight:o3_aboveheight);if(o3_x<left||o3_x>right||o3_y<top||o3_y>bottom) return true;return false}
function opt_FUNCTION(callme){o3_text=(callme?(typeof callme=='string'?(/.+\(.*\)/.test(callme)?eval(callme):callme):callme()):(o3_function?o3_function():'No Function'));return 0}
function opt_NOCLOSE(unused){if(!unused) o3_close="";if(olNs4){over.captureEvents(Event.MOUSEOUT||Event.MOUSEOVER);over.onmouseover=function(){if(o3_timerid>0){clearTimeout(o3_timerid);o3_timerid=0}}
over.onmouseout=function(e){if(olHideDelay) hideDelay(olHideDelay);else cClick(e)}} else{over.onmouseover=function(){hoveringSwitch=true;if(o3_timerid>0){clearTimeout(o3_timerid);o3_timerid=0}}}
return 0}
function opt_MULTIPLEARGS(i,args,parameter){var k=i,re,pV,str='';for(k=i;k<args.length;k++){if(typeof args[k]=='number'&&args[k]>pmStart) break;str+=args[k]+','}
if(str) str=str.substring(0,--str.length);k--;pV=(olNs4&&/cellpad/i.test(parameter))?str.split(',')[0]:str;eval(parameter+'="'+pV+'"');return k}
function nbspCleanup(){if(o3_wrap){o3_text=o3_text.replace(/\&nbsp;/g,' ');o3_cap=o3_cap.replace(/\&nbsp;/g,' ')}}
function escSglQuote(str){return str.toString().replace(/'/g,"\\'")}
function OLonLoad_handler(e){var re=/\w+\(.*\)[;\s]+/g, olre = /overlib\(|nd\(|cClick\(/,fn,l,i;if(!olLoaded) olLoaded=1;if(window.removeEventListener&&e.eventPhase==3) window.removeEventListener("load",OLonLoad_handler,false);else if(window.detachEvent){window.detachEvent("onload",OLonLoad_handler);var fN=document.body.getAttribute('onload');if(fN){fN=fN.toString().match(re);if(fN&&fN.length){for(i=0;i<fN.length;i++){if (/anonymous/.test(fN[i])) continue;while((l=fN[i].search(/\)[;\s]+/))!=-1){fn=fN[i].substring(0,l+1);fN[i]=fN[i].substring(l+2);if(olre.test(fn)) eval(fn)}}}}}}
function wrapStr(endWrap,fontSizeStr,whichString){var fontStr,fontColor,isClose=((whichString=='close')?1:0),hasDims=/[%\-a-z]+$/.test(fontSizeStr);fontSizeStr=(olNs4)?(!hasDims?fontSizeStr:'1'):fontSizeStr;if(endWrap) return(hasDims&&!olNs4)?(isClose?'</span>':'</div>'):'</font>';else{fontStr='o3_'+whichString+'font';fontColor='o3_'+((whichString=='caption')?'cap':whichString)+'color';return(hasDims&&!olNs4)?(isClose?'<span style="font-family: '+quoteMultiNameFonts(eval(fontStr))+'; color: '+eval(fontColor)+'; font-size: '+fontSizeStr+';">':'<div style="font-family: '+quoteMultiNameFonts(eval(fontStr))+'; color: '+eval(fontColor)+'; font-size: '+fontSizeStr+';">'):'<font face="'+eval(fontStr)+'" color="'+eval(fontColor)+'" size="'+(parseInt(fontSizeStr)>7?'7':fontSizeStr)+'">'}}
function quoteMultiNameFonts(theFont){var v,pM=theFont.split(',');for(var i=0;i<pM.length;i++){v=pM[i];v=v.replace(/^\s+/,'').replace(/\s+$/,'');if(/\s/.test(v) && !/['"]/.test(v)){v="\'"+v+"\'";pM[i]=v}}
return pM.join()}
function isExclusive(args){return false}
function setCellPadStr(parameter){var Str='',j=0,ary=new Array(),top,bottom,left,right;Str+='padding: ';ary=parameter.replace(/\s+/g,'').split(',');switch(ary.length){case 2:top=bottom=ary[j];left=right=ary[++j];break;case 3:top=ary[j];left=right=ary[++j];bottom=ary[++j];break;case 4:top=ary[j];right=ary[++j];bottom=ary[++j];left=ary[++j];break}
Str+=((ary.length==1)?ary[0]+'px;':top+'px '+right+'px '+bottom+'px '+left+'px;');return Str}
function hideDelay(time){if(time&&!o3_delay){if(o3_timerid>0) clearTimeout(o3_timerid);o3_timerid=setTimeout("cClick()",(o3_timeout=time))}}
function horizontalPlacement(browserWidth,horizontalScrollAmount,widthFix){var placeX,iwidth=browserWidth,winoffset=horizontalScrollAmount;var parsedWidth=parseInt(o3_width);if(o3_fixx>-1||o3_relx!=null){placeX=(o3_relx!=null?(o3_relx<0?winoffset+o3_relx+iwidth-parsedWidth-widthFix:winoffset+o3_relx):o3_fixx)} else{if(o3_hauto==1){if((o3_x-winoffset)>(iwidth/2)){o3_hpos=LEFT} else{o3_hpos=RIGHT}}
if(o3_hpos==CENTER){placeX=o3_x+o3_offsetx-(parsedWidth/2);if(placeX<winoffset) placeX=winoffset}
if(o3_hpos==RIGHT){placeX=o3_x+o3_offsetx;if((placeX+parsedWidth)>(winoffset+iwidth-widthFix)){placeX=iwidth+winoffset-parsedWidth-widthFix;if(placeX<0) placeX=0}}
if(o3_hpos==LEFT){placeX=o3_x-o3_offsetx-parsedWidth;if(placeX<winoffset) placeX=winoffset}
if(o3_snapx>1){var snapping=placeX%o3_snapx;if(o3_hpos==LEFT){placeX=placeX-(o3_snapx+snapping)} else{placeX=placeX+(o3_snapx-snapping)}
if(placeX<winoffset) placeX=winoffset}}
return placeX}
function verticalPlacement(browserHeight,verticalScrollAmount){var placeY,iheight=browserHeight,scrolloffset=verticalScrollAmount;var parsedHeight=(o3_aboveheight?parseInt(o3_aboveheight):(olNs4?over.clip.height:over.offsetHeight));if(o3_fixy>-1||o3_rely!=null){placeY=(o3_rely!=null?(o3_rely<0?scrolloffset+o3_rely+iheight-parsedHeight:scrolloffset+o3_rely):o3_fixy)} else{if(o3_vauto==1){if((o3_y-scrolloffset)>(iheight/2)&&o3_vpos==BELOW&&(o3_y+parsedHeight+o3_offsety-(scrolloffset+iheight)>0)){o3_vpos=ABOVE} else if(o3_vpos==ABOVE&&(o3_y-(parsedHeight+o3_offsety)-scrolloffset<0)){o3_vpos=BELOW}}
if(o3_vpos==ABOVE){if(o3_aboveheight==0) o3_aboveheight=parsedHeight;placeY=o3_y-(o3_aboveheight+o3_offsety);if(placeY<scrolloffset) placeY=scrolloffset} else{placeY=o3_y+o3_offsety}
if(o3_snapy>1){var snapping=placeY%o3_snapy;if(o3_aboveheight>0&&o3_vpos==ABOVE){placeY=placeY-(o3_snapy+snapping)} else{placeY=placeY+(o3_snapy-snapping)}
if(placeY<scrolloffset) placeY=scrolloffset}}
return placeY}
function checkPositionFlags(){if(olHautoFlag) olHautoFlag=o3_hauto=0;if(olVautoFlag) olVautoFlag=o3_vauto=0;return true}
function windowWidth(){var w;if(o3_frame.innerWidth) w=o3_frame.innerWidth;else if(eval('o3_frame.'+docRoot)&&eval("typeof o3_frame."+docRoot+".clientWidth=='number'")&&eval('o3_frame.'+docRoot+'.clientWidth'))
w=eval('o3_frame.'+docRoot+'.clientWidth');return w}
function createDivContainer(id,frm,zValue){id=(id||'overDiv'),frm=(frm||o3_frame),zValue=(zValue||1000);var objRef,divContainer=layerReference(id);if(divContainer==null){if(olNs4){divContainer=frm.document.layers[id]=new Layer(window.innerWidth,frm);objRef=divContainer} else{var body=(olIe4?frm.document.all.tags('BODY')[0]:frm.document.getElementsByTagName("BODY")[0]);if(olIe4&&!document.getElementById){body.insertAdjacentHTML("beforeEnd",'<div id="'+id+'"></div>');divContainer=layerReference(id)} else{divContainer=frm.document.createElement("DIV");divContainer.id=id;body.appendChild(divContainer)}
objRef=divContainer.style}
objRef.position='absolute';objRef.visibility='hidden';objRef.zIndex=zValue;if(olIe4&&!olOp) objRef.left=objRef.top='0px';else objRef.left=objRef.top=-10000+(!olNs4?'px':0)}
return divContainer}
function layerReference(id){return(olNs4?o3_frame.document.layers[id]:(document.all?o3_frame.document.all[id]:o3_frame.document.getElementById(id)))}
function isFunction(fnRef){var rtn=true;if(typeof fnRef=='object'){for(var i=0;i<fnRef.length;i++){if(typeof fnRef[i]=='function') continue;rtn=false;break}} else if(typeof fnRef!='function'){rtn=false}
return rtn}
function argToString(array,strtInd,argName){var jS=strtInd,aS='',ar=array;argName=(argName?argName:'ar');if(ar.length>jS){for(var k=jS;k<ar.length;k++) aS+=argName+'['+k+'], ';aS=aS.substring(0,aS.length-2)}
return aS}
function reOrder(hookPt,fnRef,order){var newPt=new Array(),match,i,j;if(!order||typeof order=='undefined'||typeof order=='number') return hookPt;if(typeof order=='function'){if(typeof fnRef=='object'){newPt=newPt.concat(fnRef)} else{newPt[newPt.length++]=fnRef}
for(i=0;i<hookPt.length;i++){match=false;if(typeof fnRef=='function'&&hookPt[i]==fnRef){continue} else{for(j=0;j<fnRef.length;j++) if(hookPt[i]==fnRef[j]){match=true;break}}
if(!match) newPt[newPt.length++]=hookPt[i]}
newPt[newPt.length++]=order} else if(typeof order=='object'){if(typeof fnRef=='object'){newPt=newPt.concat(fnRef)} else{newPt[newPt.length++]=fnRef}
for(j=0;j<hookPt.length;j++){match=false;if(typeof fnRef=='function'&&hookPt[j]==fnRef){continue} else{for(i=0;i<fnRef.length;i++) if(hookPt[j]==fnRef[i]){match=true;break}}
if(!match) newPt[newPt.length++]=hookPt[j]}
for(i=0;i<newPt.length;i++) hookPt[i]=newPt[i];newPt.length=0;for(j=0;j<hookPt.length;j++){match=false;for(i=0;i<order.length;i++){if(hookPt[j]==order[i]){match=true;break}}
if(!match) newPt[newPt.length++]=hookPt[j]}
newPt=newPt.concat(order)}
hookPt=newPt;return hookPt}
function setRunTimeVariables(){if(typeof runTime!='undefined'&&runTime.length){for(var k=0;k<runTime.length;k++){runTime[k]()}}}
function parseCmdLine(pf,i,args){if(typeof cmdLine!='undefined'&&cmdLine.length){for(var k=0;k<cmdLine.length;k++){var j=cmdLine[k](pf,i,args);if(j>-1){i=j;break}}}
return i}
function postParseChecks(pf,args){if(typeof postParse!='undefined'&&postParse.length){for(var k=0;k<postParse.length;k++){if(postParse[k](pf,args)) continue;return false}}
return true}
function registerCommands(cmdStr){if(typeof cmdStr!='string') return;var pM=cmdStr.split(',');pms=pms.concat(pM);for(var i=0;i<pM.length;i++){eval(pM[i].toUpperCase()+'='+pmCount++)}}
function registerNoParameterCommands(cmdStr){if(!cmdStr&&typeof cmdStr!='string') return;pmt=(!pmt)?cmdStr:pmt+','+cmdStr}
function registerHook(fnHookTo,fnRef,hookType,optPm){var hookPt,last=typeof optPm;if(fnHookTo=='plgIn'||fnHookTo=='postParse') return;if(typeof hookPts[fnHookTo]=='undefined') hookPts[fnHookTo]=new FunctionReference();hookPt=hookPts[fnHookTo];if(hookType!=null){if(hookType==FREPLACE){hookPt.ovload=fnRef;if(fnHookTo.indexOf('ol_content_')>-1) hookPt.alt[pms[CSSOFF-1-pmStart]]=fnRef} else if(hookType==FBEFORE||hookType==FAFTER){var hookPt=(hookType==1?hookPt.before:hookPt.after);if(typeof fnRef=='object'){hookPt=hookPt.concat(fnRef)} else{hookPt[hookPt.length++]=fnRef}
if(optPm) hookPt=reOrder(hookPt,fnRef,optPm)} else if(hookType==FALTERNATE){if(last=='number') hookPt.alt[pms[optPm-1-pmStart]]=fnRef} else if(hookType==FCHAIN){hookPt=hookPt.chain;if(typeof fnRef=='object') hookPt=hookPt.concat(fnRef);else hookPt[hookPt.length++]=fnRef}
return}}
function registerRunTimeFunction(fn){if(isFunction(fn)){if(typeof fn=='object'){runTime=runTime.concat(fn)} else{runTime[runTime.length++]=fn}}}
function registerCmdLineFunction(fn){if(isFunction(fn)){if(typeof fn=='object'){cmdLine=cmdLine.concat(fn)} else{cmdLine[cmdLine.length++]=fn}}}
function registerPostParseFunction(fn){if(isFunction(fn)){if(typeof fn=='object'){postParse=postParse.concat(fn)} else{postParse[postParse.length++]=fn}}}
function runHook(fnHookTo,hookType){var l=hookPts[fnHookTo],k,rtnVal=null,optPm,arS,ar=runHook.arguments;if(hookType==FREPLACE){arS=argToString(ar,2);if(typeof l=='undefined'||!(l=l.ovload)) rtnVal=eval(fnHookTo+'('+arS+')');else rtnVal=eval('l('+arS+')')} else if(hookType==FBEFORE||hookType==FAFTER){if(typeof l!='undefined'){l=(hookType==1?l.before:l.after);if(l.length){arS=argToString(ar,2);for(var k=0;k<l.length;k++) eval('l[k]('+arS+')')}}} else if(hookType==FALTERNATE){optPm=ar[2];arS=argToString(ar,3);if(typeof l=='undefined'||(l=l.alt[pms[optPm-1-pmStart]])=='undefined'){rtnVal=eval(fnHookTo+'('+arS+')')} else{rtnVal=eval('l('+arS+')')}} else if(hookType==FCHAIN){arS=argToString(ar,2);l=l.chain;for(k=l.length;k>0;k--) if((rtnVal=eval('l[k-1]('+arS+')'))!=void(0)) break}
return rtnVal}
function FunctionReference(){this.ovload=null;this.before=new Array();this.after=new Array();this.alt=new Array();this.chain=new Array()}
function Info(version,prerelease){this.version=version;this.prerelease=prerelease;this.simpleversion=Math.round(this.version*100);this.major=parseInt(this.simpleversion/100);this.minor=parseInt(this.simpleversion/10)-this.major * 10;this.revision=parseInt(this.simpleversion)-this.major * 100-this.minor * 10;this.meets=meets}
function meets(reqdVersion){return(!reqdVersion)?false:this.simpleversion>=Math.round(100*parseFloat(reqdVersion))}
registerHook("ol_content_simple",ol_content_simple,FALTERNATE,CSSOFF);registerHook("ol_content_caption",ol_content_caption,FALTERNATE,CSSOFF);registerHook("ol_content_background",ol_content_background,FALTERNATE,CSSOFF);registerHook("ol_content_simple",ol_content_simple,FALTERNATE,CSSCLASS);registerHook("ol_content_caption",ol_content_caption,FALTERNATE,CSSCLASS);registerHook("ol_content_background",ol_content_background,FALTERNATE,CSSCLASS);registerPostParseFunction(checkPositionFlags);registerHook("hideObject",nbspCleanup,FAFTER);registerHook("horizontalPlacement",horizontalPlacement,FCHAIN);registerHook("verticalPlacement",verticalPlacement,FCHAIN);if(olNs4||(olIe5&&isMac)||olKq) olLoaded=1;registerNoParameterCommands('sticky,autostatus,autostatuscap,fullhtml,hauto,vauto,closeclick,wrap,followmouse,mouseoff,compatmode');var olCheckMouseCapture=true;if((olNs4||olNs6||olIe4)){olMouseCapture()} else{overlib=no_overlib;nd=no_overlib;ver3fix=true}


/* - scripts.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/scripts.js?original=1
var timeCounter;
function abretela(){var argumentos=abretela.arguments;var num_arg=argumentos.length;var url=argumentos[0];if(num_arg==1){altura=200;largura=320;posx=30;posy=30;scroll_ca="yes"}
if(num_arg==2){altura=argumentos[1];largura=320;posx=30;posy=30;scroll_ca="yes"}
if(num_arg==3){altura=argumentos[1];largura=argumentos[2];posx=30;posy=30;scroll_ca="yes"}
if(num_arg==5){altura=argumentos[1];largura=argumentos[2];posx=argumentos[3];posy=argumentos[4];scroll_ca="yes"}
if(num_arg==6){altura=argumentos[1];largura=argumentos[2];posx=argumentos[3];posy=argumentos[4];if(argumentos[5]=="sim"){scroll_ca="yes"} else{scroll_ca="no"}}
var desktop=window.open(url,'_blank',"width="+largura+",height="+altura+",toolbar=no,location=no,status=no,menubar=no,scrollbars="+scroll_ca+",resizable=no");desktop.moveTo(posx,posy)}
function MM_reloadPage(init){if(init==true) with(navigator){if((appName=="Netscape")&&(parseInt(appVersion)==4)){document.MM_pgW=innerWidth;document.MM_pgH=innerHeight;onresize=MM_reloadPage}}
else if(innerWidth!=document.MM_pgW||innerHeight!=document.MM_pgH) location.reload()}
MM_reloadPage(true);
function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p) d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i]}}}
function MM_findObj(n,d){var p,i,x;if(!d) d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p)}
if(!(x=d[n])&&d.all) x=d.all[n];for(i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById) x=d.getElementById(n);return x}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)
if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc) x.oSrc=x.src;x.src=a[i+2]}}
function MM_showHideLayers(){var i,p,v,obj,args=MM_showHideLayers.arguments;for(i=0;i<(args.length-2);i+=3) if((obj=MM_findObj(args[i]))!=null){v=args[i+2];if(obj.style){obj=obj.style;v=(v=='show')?'visible':(v=='hide')?'hidden':v}
obj.visibility=v}
OP_timeout}
function OP_timeout(){if(!timeCounter){timeCounter=setTimeout(Hide_all,5000)} else{clearTimeout(timeCounter);timeCounter=setTimeout(Hide_all,5000)}}
function Hide_all(){MM_showHideLayers('formacao','','hide');MM_showHideLayers('uno','','hide');MM_showHideLayers('didaticos','','hide');MM_showHideLayers('literatura','','hide');MM_showHideLayers('tec','','hide');MM_showHideLayers('idiomas','','hide')}
function P7_hideDiv(evt){var b,relT,mT=false;if(document.layers){b=evt.target;if(b.p7aHide){b.visibility="hidden"}else{routeEvent(evt)}}else if(document.all&&!window.opera){b=event.srcElement;while(b!=null){if(b.tagName=="DIV"&&b.p7ahD){mT=true;break}b=b.parentElement}
if(!b.contains(event.toElement)){b.style.visibility="hidden"}}else if(document.getElementById){b=evt.currentTarget;relT=evt.relatedTarget;while(relT!=null){if(b==relT){mT=true;break}
relT=relT.parentNode}if(!mT){b.style.visibility="hidden"}}}
function P7_autoHide(){var i,g,args=P7_autoHide.arguments;for(i=0;i<args.length;i++){if((g=MM_findObj(args[i]))!=null){g.p7aHide=true;if(document.layers){g.captureEvents(Event.MOUSEOUT)}g.onmouseout=P7_hideDiv;g.p7ahD=true}}}
function OP_onload(){}


/* - mark_special_links.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/mark_special_links.js?original=1
function scanforlinks(){if(!W3CDOM){return false}
if((typeof external_links_in_content_only!='undefined')&&(external_links_in_content_only==false)){links=document.getElementsByTagName('a');for(i=0;i<links.length;i++){if((links[i].getAttribute('href'))&&(links[i].className.indexOf('link-plain')==-1)){var linkval=links[i].getAttribute('href');if(linkval.toLowerCase().indexOf(window.location.protocol+'//'+window.location.host)==0){} else if(linkval.indexOf('http:')!=0){} else{links[i].setAttribute('target','_blank')}}}}
contentarea=getContentArea();if(!contentarea)
return false;links=contentarea.getElementsByTagName('a');for(i=0;i<links.length;i++){if((links[i].getAttribute('href'))&&(links[i].className.indexOf('link-plain')==-1)){var linkval=links[i].getAttribute('href');if(linkval.toLowerCase().indexOf(window.location.protocol+'//'+window.location.host)==0){} else if(linkval.indexOf('http:')!=0){protocols=['mailto','ftp','news','irc','h323','sip','callto','https','feed','webcal'];for(p=0;p<protocols.length;p++){if(linkval.indexOf(protocols[p]+':')==0){wrapNode(links[i],'span','link-'+protocols[p]);break}}} else{if(links[i].getElementsByTagName('img').length==0){wrapNode(links[i],'span','link-external')}
if((typeof external_links_open_new_window!='undefined')&&(external_links_open_new_window==true)){links[i].setAttribute('target','_blank')}}}}};registerPloneFunction(scanforlinks);

/* - fckeditor.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/fckeditor.js?original=1
var FCKeditor=function(instanceName,width,height,toolbarSet,value){this.InstanceName=instanceName ;this.Width=width||'100%' ;this.Height=height||'200' ;this.ToolbarSet=toolbarSet||'Default' ;this.Value=value||'' ;this.BasePath=FCKeditor.BasePath ;this.CheckBrowser=true ;this.DisplayErrors=true ;this.Config=new Object() ;this.OnError=null }
FCKeditor.BasePath='/fckeditor/' ;FCKeditor.MinHeight=200 ;FCKeditor.MinWidth=750 ;FCKeditor.prototype.Version='2.6.3' ;FCKeditor.prototype.VersionBuild='19836' ;FCKeditor.prototype.Create=function(){document.write(this.CreateHtml()) }
FCKeditor.prototype.CreateHtml=function(){if(!this.InstanceName||this.InstanceName.length==0){this._ThrowError(701,'You must specify an instance name.') ;return '' }
var sHtml='' ;if(!this.CheckBrowser||this._IsCompatibleBrowser()){sHtml+='<input type="hidden" id="'+this.InstanceName+'" name="'+this.InstanceName+'" value="'+this._HTMLEncode(this.Value)+'" style="display:none" />' ;sHtml+=this._GetConfigHtml() ;sHtml+=this._GetIFrameHtml() }
else{var sWidth=this.Width.toString().indexOf('%')>0?this.Width:this.Width+'px' ;var sHeight=this.Height.toString().indexOf('%')>0?this.Height:this.Height+'px' ;sHtml+='<textarea name="'+this.InstanceName+'" rows="4" cols="40" style="width:'+sWidth+';height:'+sHeight ;if(this.TabIndex)
sHtml+='" tabindex="'+this.TabIndex ;sHtml+='">'+this._HTMLEncode(this.Value)+'<\/textarea>' }
return sHtml }
FCKeditor.prototype.ReplaceTextarea=function(){if(!this.CheckBrowser||this._IsCompatibleBrowser()){var oTextarea=document.getElementById(this.InstanceName) ;var colElementsByName=document.getElementsByName(this.InstanceName) ;var i=0;while(oTextarea||i==0){if(oTextarea&&oTextarea.tagName.toLowerCase()=='textarea')
break ;oTextarea=colElementsByName[i++] }
if(!oTextarea){alert('Error: The TEXTAREA with id or name set to "'+this.InstanceName+'" was not found') ;return }
oTextarea.style.display='none' ;if(oTextarea.tabIndex)
this.TabIndex=oTextarea.tabIndex ;this._InsertHtmlBefore(this._GetConfigHtml(),oTextarea) ;this._InsertHtmlBefore(this._GetIFrameHtml(),oTextarea) }}
FCKeditor.prototype._InsertHtmlBefore=function(html,element){if(element.insertAdjacentHTML)
element.insertAdjacentHTML('beforeBegin',html) ;else{var oRange=document.createRange() ;oRange.setStartBefore(element) ;var oFragment=oRange.createContextualFragment(html);element.parentNode.insertBefore(oFragment,element) }}
FCKeditor.prototype._GetConfigHtml=function(){var sConfig='' ;for(var o in this.Config){if(sConfig.length>0) sConfig+='&amp;' ;sConfig+=encodeURIComponent(o)+'='+encodeURIComponent(this.Config[o]) }
return '<input type="hidden" id="'+this.InstanceName+'___Config" value="'+sConfig+'" style="display:none" />' }
FCKeditor.prototype._GetIFrameHtml=function(){var sFile='fckeditor.html' ;try{if((/fcksource=true/i).test(window.top.location.search))
sFile='fckeditor.original.html' }
catch(e){}
var sLink=this.BasePath+'editor/'+sFile+'?InstanceName='+encodeURIComponent(this.InstanceName) ;if(this.ToolbarSet)
sLink+='&amp;Toolbar='+this.ToolbarSet ;html='<iframe id="'+this.InstanceName+'___Frame" src="'+sLink+'" width="'+this.Width+'" height="'+this.Height ;if(this.TabIndex)
html+='" tabindex="'+this.TabIndex ;html+='" frameborder="0" scrolling="no"></iframe>' ;return html }
FCKeditor.prototype._IsCompatibleBrowser=function(){return FCKeditor_IsCompatibleBrowser() }
FCKeditor.prototype._ThrowError=function(errorNumber,errorDescription){this.ErrorNumber=errorNumber ;this.ErrorDescription=errorDescription ;if(this.DisplayErrors){document.write('<div style="COLOR: #ff0000">') ;document.write('[ FCKeditor Error '+this.ErrorNumber+': '+this.ErrorDescription+' ]') ;document.write('</div>') }
if(typeof(this.OnError)=='function')
this.OnError(this,errorNumber,errorDescription) }
FCKeditor.prototype._HTMLEncode=function(text){if(typeof(text)!="string")
text=text.toString() ;text=text.replace(/&/g,"&amp;").replace(/"/g, "&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;") ;return text }
;(function(){var textareaToEditor=function(textarea){var editor=new FCKeditor(textarea.name) ;editor.Width=Math.max(textarea.offsetWidth,FCKeditor.MinWidth) ;editor.Height=Math.max(textarea.offsetHeight,FCKeditor.MinHeight) ;return editor }
FCKeditor.ReplaceAllTextareas=function(){var textareas=document.getElementsByTagName('textarea') ;for(var i=0 ;i<textareas.length ;i++){var editor=null ;var textarea=textareas[i] ;var name=textarea.name ;if(!name||name.length==0)
continue ;if(typeof arguments[0]=='string'){var classRegex=new RegExp('(?:^| )'+arguments[0]+'(?:$| )') ;if(!classRegex.test(textarea.className))
continue }
else if(typeof arguments[0]=='function'){editor=textareaToEditor(textarea) ;if(arguments[0](textarea,editor)===false)
continue }
if(!editor)
editor=textareaToEditor(textarea) ;editor.ReplaceTextarea() }}})() ;
function FCKeditor_IsCompatibleBrowser(){var sAgent=navigator.userAgent.toLowerCase() ;if(/*@cc_on!@*/false&&sAgent.indexOf("mac")==-1){var sBrowserVersion=navigator.appVersion.match(/MSIE (.\..)/)[1] ;return(sBrowserVersion>=5.5) }
if(navigator.product=="Gecko"&&navigator.productSub>=20030210&&!(typeof(opera)=='object'&&opera.postError))
return true ;if(window.opera&&window.opera.version&&parseFloat(window.opera.version())>=9.5)
return true ;if(sAgent.indexOf(' adobeair/')!=-1)
return(sAgent.match(/ adobeair\/(\d+)/ )[1] >= 1 ) ;	// Build must be at least v1
if(sAgent.indexOf(' applewebkit/')!=-1)
return(sAgent.match(/ applewebkit\/(\d+)/ )[1] >= 522 ) ;	// Build must be at least 522(v3)
return false }


/* - fck_plone.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/fck_plone.js?original=1
var FCKBaseHref={};makeLinksRelative=function(basehref,contents){var base=basehref.replace('http://www.moderna.com.br','');var href=base.replace(/\/[^\/]*$/,'/');var hrefparts=href.split('/');return contents.replace(/(<[^>]* (?:src|href)=")([^"]*)"/g,
function(str,tag,url,offset,contents){url=url.replace('http://www.moderna.com.br','');if(url.substring(0,1)=='#'){str=tag+url+'"'}
else{var urlparts=url.split('#');var anchor=urlparts[1]||'';url=urlparts[0];var urlparts=url.split('/');var common=0;while(common<urlparts.length&&common<hrefparts.length&&urlparts[common]==hrefparts[common])
common++;var last=urlparts[common];if(common+1==urlparts.length&&last=='emptypage'){urlparts[common]=''}
if(common>0){var path=new Array();var i=0;for(;i+common<hrefparts.length-1;i++){path[i]='..'};while(common<urlparts.length){path[i++]=urlparts[common++]};if(i==0){path[i++]='.'}
str=path.join('/');if(anchor){str=[str,anchor].join('#')}
str=tag+str+'"'}}
return str})};finalizePublication=function(editorInstance){var oField=editorInstance.LinkedField;var fieldName=oField.name;var baseHref=FCKBaseHref[fieldName];if(baseHref){relativeLinksHtml=makeLinksRelative(FCKBaseHref[fieldName],editorInstance.GetXHTML());oField.value=relativeLinksHtml}}
getParamValue=function(id){value=document.getElementById(id).value;if(value=='true') return true;if(value=='false') return false;return value}
FCKeditor_Plone_start_instance=function(fckContainer,inputname){var inputContainer=document.getElementById(inputname+'_'+'cleaninput');if(inputContainer){var fckParams=['path_user','base_path','fck_basehref','links_basehref','input_url','allow_server_browsing','browser_root','allow_file_upload','allow_image_upload','allow_flash_upload','fck_skin_path','lang','fck_default_r2l','force_paste_as_text','allow_latin_entities','spellchecker','keyboard_entermode','keyboard_shiftentermode','fck_toolbar','editor_width','editor_height'];var fckValues={};for(var i=0;i<fckParams.length;i++){var id=inputname+'_'+fckParams [i];fckValues [fckParams [i]]=getParamValue(id)}
var oFck=new FCKeditor(inputname);var pathUser=fckValues ['path_user']+'/';oFck.BasePath=fckValues ['base_path']+'/';oFck.Config['CustomConfigurationsPath']=fckValues ['input_url']+'/fckconfigPlone.js?field_name='+inputname;oFck.BaseHref=fckValues ['fck_basehref'];FCKBaseHref[inputname]=fckValues ['links_basehref'];if(inputContainer.innerText!=undefined) oFck.Value=inputContainer.innerText;else oFck.Value=inputContainer.textContent;oFck.Config['LinkBrowser']=fckValues ['allow_server_browsing'];oFck.Config['LinkBrowserURL']=fckValues ['base_path']+'/fckbrowser/browser.html?field_name='+inputname+'&Connector='+fckValues ['input_url']+'/connectorPlone&ServerPath='+fckValues ['browser_root']+'&CurrentPath='+pathUser ;oFck.Config['LinkUpload']=fckValues ['allow_file_upload'] ;oFck.Config['LinkUploadURL']=fckValues ['input_url']+'/uploadPlone?field_name='+inputname+'&CurrentPath='+pathUser;oFck.Config['ImageBrowser']=fckValues ['allow_server_browsing'];oFck.Config['ImageBrowserURL']=fckValues ['base_path']+'/fckbrowser/browser.html?field_name='+inputname+'&Type=Image&Connector='+fckValues ['input_url']+'/connectorPlone&ServerPath='+fckValues ['browser_root']+'&CurrentPath='+pathUser ;oFck.Config['ImageUpload']=fckValues ['allow_image_upload'] ;oFck.Config['ImageUploadURL']=fckValues ['input_url']+'/uploadPlone?field_name='+inputname+'&CurrentPath='+pathUser;oFck.Config['FlashBrowser']=fckValues ['allow_server_browsing'];oFck.Config['FlashBrowserURL']=fckValues ['base_path']+'/fckbrowser/browser.html?field_name='+inputname+'&Type=Flash&Connector='+fckValues ['input_url']+'/connectorPlone&ServerPath='+fckValues ['browser_root']+'&CurrentPath='+pathUser ;oFck.Config['FlashUpload']=fckValues ['allow_flash_upload'] ;oFck.Config['FlashUploadURL']=fckValues ['input_url']+'/uploadPlone?field_name='+inputname+'&CurrentPath='+pathUser;oFck.Config['MediaBrowser']=fckValues ['allow_server_browsing'];oFck.Config['MediaBrowserURL']=fckValues ['base_path']+'/fckbrowser/browser.html?field_name='+inputname+'&Type=Media&Connector='+fckValues ['input_url']+'/connectorPlone&ServerPath='+fckValues ['browser_root']+'&CurrentPath='+pathUser ;oFck.Config['SkinPath']=fckValues ['base_path']+'/editor/'+fckValues ['fck_skin_path'];oFck.Config['AutoDetectLanguage']=false;oFck.Config['DefaultLanguage']=fckValues ['lang'];oFck.Config['ForcePasteAsPlainText']=fckValues ['force_paste_as_text'];oFck.Config['IncludeLatinEntities']=fckValues ['allow_latin_entities'];oFck.Config['SpellChecker']=fckValues ['spellchecker'];oFck.Config['EnterMode']=fckValues ['keyboard_entermode'];oFck.Config['ShiftEnterMode']=fckValues ['keyboard_shiftentermode'];oFck.ToolbarSet=fckValues ['fck_toolbar'];oFck.Width=fckValues ['editor_width'];oFck.Height=fckValues ['editor_height'];try{fckContainer.innerHTML=oFck.CreateHtml();document.getElementById(inputname+'_fckLoading').style.display='none'}
catch(e){document.getElementById(inputname+'_fckLoading').style.display='none';document.getElementById(inputname+'_fckError').style.display='block'}}}
Save_inline=function(fieldname,form,editorInstance){if(editorInstance.Commands.GetCommand('FitWindow').GetState()){kukit.log('Full screen mode must be disabled before saving inline');editorInstance.Commands.GetCommand('FitWindow').Execute()} ;saveField=document.getElementById(fieldname+'_fckSaveField');if(saveField){kukit.log('Fire the savekupu server event = save inline without submitting');saveField.style.visibility='visible';if(saveField.fireEvent){saveField.fireEvent('onChange')}
else{var evt=document.createEvent("HTMLEvents");evt.initEvent("change",true,true);saveField.dispatchEvent(evt)}
comp=(setTimeout("saveField.style.visibility='hidden'",2000));return false}
else{kukit.log('Try to submit the form in portal_factory');window.onbeforeunload=null;form.submit()}}


/* - fck_ploneInit.js - */
// http://www.moderna.com.br/moderna/portal_javascripts/fck_ploneInit.js?original=1
function getElementsByClassName(oElm,strTagName,strClassName){var arrElements=(strTagName=="*"&&oElm.all)?oElm.all:oElm.getElementsByTagName(strTagName);var arrReturnElements=new Array();strClassName=strClassName.replace(/\-/g,"\\-");var oRegExp=new RegExp("(^|\\s)"+strClassName+"(\\s|$)");var oElement;for(var i=0;i<arrElements.length;i++){oElement=arrElements[i];if(oRegExp.test(oElement.className)){arrReturnElements.push(oElement)}}
return(arrReturnElements)}
function FCKeditor_OnComplete(editorInstance){editorInstance.Events.AttachEvent('OnAfterLinkedFieldUpdate',finalizePublication) }
FCKeditor_Plone_Init=function(){var fckContainers=getElementsByClassName(document,'div','fckContainer');for(var i=0;i<fckContainers.length;i++){var fckContainer=fckContainers [i];var fckContainerId=fckContainer.getAttribute('id');var inputname=fckContainerId.replace("_fckContainer","");FCKeditor_Plone_start_instance(fckContainer,inputname)}}
registerPloneFunction(FCKeditor_Plone_Init);
