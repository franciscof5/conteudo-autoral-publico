var timeCounter;
function abretela() {
	var argumentos=abretela.arguments;
	var num_arg=argumentos.length;
	var url=argumentos[0];
	if (num_arg == 1) {
		altura=200;
		largura=320;
		posx=30;
		posy=30;
		scroll_ca="yes";
	}
	if (num_arg == 2) {
		altura=argumentos[1];
		largura=320;
		posx=30;
		posy=30;
		scroll_ca="yes";
	}
	if (num_arg == 3) {
		altura=argumentos[1];
		largura=argumentos[2];
		posx=30;
		posy=30;
		scroll_ca="yes";
	}
	if (num_arg == 5) {
		altura=argumentos[1];
		largura=argumentos[2];
		posx=argumentos[3];
		posy=argumentos[4];
		scroll_ca="yes";
	}
	if (num_arg == 6) {
		altura=argumentos[1];
		largura=argumentos[2];
		posx=argumentos[3];
		posy=argumentos[4];
		if (argumentos[5] == "sim") {
			scroll_ca="yes";
		} else {
			scroll_ca="no";
		}
	}

      var desktop = window.open(url, '_blank',"width=" + largura + ",height=" + altura + ",toolbar=no,location=no,status=no,menubar=no,scrollbars=" + scroll_ca + ",resizable=no");
      desktop.moveTo(posx,posy);
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
  OP_timeout;
}

function OP_timeout() { //v6.0
  if (!timeCounter) {
     timeCounter=setTimeout(Hide_all,5000);
  } else {
     clearTimeout(timeCounter);
     timeCounter=setTimeout(Hide_all,5000);
  }
}

function Hide_all() {
   MM_showHideLayers('formacao','','hide');
   MM_showHideLayers('uno','','hide');
   MM_showHideLayers('didaticos','','hide');
   MM_showHideLayers('literatura','','hide');
   MM_showHideLayers('tec','','hide');
   MM_showHideLayers('idiomas','','hide');
}

function P7_hideDiv(evt) { //v1.3 by PVII
 var b,relT,mT=false;
 if(document.layers){b=evt.target;if(b.p7aHide){
  b.visibility="hidden";}else{routeEvent(evt);}
 }else if(document.all&&!window.opera){b=event.srcElement;
  while(b!=null){if(b.tagName=="DIV" && b.p7ahD){mT=true;break;}b=b.parentElement;}
  if(!b.contains(event.toElement)){b.style.visibility="hidden";}
 }else if(document.getElementById){b=evt.currentTarget;relT=evt.relatedTarget;
  while(relT!=null){if(b==relT){mT=true;break;}
  relT=relT.parentNode;}if(!mT){b.style.visibility="hidden";}}
}

function P7_autoHide() { //v1.3 by PVII
 var i,g,args=P7_autoHide.arguments;
 for(i=0;i<args.length;i++){if((g=MM_findObj(args[i]))!=null){
  g.p7aHide=true;if(document.layers){
  g.captureEvents(Event.MOUSEOUT);}g.onmouseout=P7_hideDiv;g.p7ahD=true;}}
}

function OP_onload() {
}

