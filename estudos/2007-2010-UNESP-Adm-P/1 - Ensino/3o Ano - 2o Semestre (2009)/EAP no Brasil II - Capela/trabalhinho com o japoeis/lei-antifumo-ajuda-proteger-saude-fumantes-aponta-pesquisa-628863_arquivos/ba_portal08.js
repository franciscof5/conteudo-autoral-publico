if(typeof(sO)=='undefined'){var sO='sr/ba/portalabril';}
var sAdd='http://barrasassine.abril.com.br';
i=0;
sB='<div id="brA"><div class="blc1"><div class="ts1"></div><div class="txS"><a href="http://www.abrilsac.com.br" target="_blank">Clique e saiba tudo sobre sua assinatura!</a><br /><img  style="margin-top:12px;margin-bottom:6px;" src="http://barrasassine.abril.com.br/imagem/clube.gif" /><br /><a href="http://www.clubedoassinanteabril.com.br" target="_blank">O clube que conhece e reconhece voc&ecirc;.</a></div></div><div class="dAS"></div><div class="blc2"><div class="tAs"></div>';
sB=sB+'<div class="sAs"><form name="fb" method="post" action="javascript:void(0)"><select name="sb" onchange="window.open(this.value,\'ass\');"></select></form></div><div style="clear:left;"></div>';
sB=sB+'<div class="esp"><div class="dtB">';
sB=sB+'<div class="ft"><a href="http://www.assineabril.com.br/assinar/revista-veja/origem=sr/ba/portalabril" target="_blank"><img src="'+sAdd+'/imagem/capa/veja.gif"></a></div><div class="txt">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-veja/origem=sr/ba/portalabril" target="_blank">Assine Veja e ganhe 50% a mais da assinatura!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="ft"><a href="http://www.assineabril.com.br/assinar/revista-claudia/origem=sr/ba/portalabril" target="_blank"><img src="'+sAdd+'/imagem/capa/claudia.gif"></a></div><div class="txt">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-claudia/origem=sr/ba/portalabril" target="_blank">Assine CLAUDIA e receba grátis até 1 ano a mais!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-superinteressante/origem=sr/ba/portalabril" target="_blank">Assine SUPER e ganhe 50 dias para começar a pagar!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-manequim/origem=sr/ba/portalabril" target="_blank">Assine Manequim e receba grátis até 1 ano a mais!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-voce-sa/origem=sr/ba/portalabril" target="_blank">Assine Você S/A e ganhe 50% a mais da assinatura!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-caras/origem=sr/ba/portalabril" target="_blank">Assine CARAS e ganhe um vaporizador Steam Fast!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-superinteressante/origem=sr/ba/portalabril" target="_blank">Assine SUPER e ganhe 50% a mais da assinatura!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-playboy/origem=sr/ba/portalabril" target="_blank">Assine Playboy e ganhe 50 dias para começar a pagar!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-viagem-e-turismo/origem=sr/ba/portalabril" target="_blank">Assine Viagem e Turismo e ganhe 50% a mais da assinatura!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="tsf">';

sB=sB+'<a href="http://www.assineabril.com.br/assinar/revista-contigo/origem=sr/ba/portalabril" target="_blank">Assine CONTIGO e ganhe 50% a mais da assinatura!</a></div></div>'
sB=sB+'<a'+i+'>';
i++;
sB=sB+'</div></div>';
for(x=0;x<i-1;x++){sB=sB.replace('<a'+x+'>','<div class="sep"></div>');}
i=0;
sB=sB+'<div class="dAS2"></div><div class="blc3"><div class="tL"></div><div style="clear:left;"></div><div class="esp">';
if(i>0){sB=sB+'<div class="sep"></div>';}
i++;
sB=sB+'<div class="dtB">';
sB=sB+'<div class="ft"><a href="http://www.lojaabril.com.br/detalhes.asp?produto=97596&bannerId=barra_portal08" target="_blank"><img src="'+sAdd+'/imagem/loja/capricho/kit.gif"></a></div><div class="txt">';

sB=sB+'<a href="http://www.lojaabril.com.br/detalhes.asp?produto=97596&bannerId=barra_portal08" target="_blank">Kit Capricho Especial Lua Nova + Robert Pattinson- 2 X R$ 13,45</a></div></div>';
sB=sB+'</div></div><div style="clear:left;"></div></div>';
oD=document.getElementById('ass_db');
oD.innerHTML=sB;
document.write('<script charset="iso-8859-1" src="'+sAdd+'/select.js"></script>');