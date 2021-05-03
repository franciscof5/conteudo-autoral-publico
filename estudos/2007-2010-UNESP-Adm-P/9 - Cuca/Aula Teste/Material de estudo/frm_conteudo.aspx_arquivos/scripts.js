// FLASH
function GerarSWF($arquivo,$altura,$largura,$id,$variavel){
 
	document.writeln('<object type="application/x-shockwave-flash" data= "' + $arquivo + '" width="' + $largura + '" height="' + $altura + '" id="' + $id + '" name="' + $id + '">');
	document.writeln('<param name="movie" value="' + $arquivo + '" />');
	document.writeln('<param name="wmode" value="transparent" />');
  	document.writeln('</object>');
	
}

// MENU INTERNO
function montre(id) {
var d = document.getElementById(id);
	
	if (d) 
	{
		if (d.style.display=='block')
		{
			d.style.display='none';
		}
		else
		{
			d.style.display='block';
		}
	}

}

//POPUP PESQUISA
function popup(palavrachave) {
var width = 800 ;
var height = 600;
var left = 50;
var top = 50;
window.open("http://portal.objetivo.br/conteudoonline/interface.html?palavraChave="+palavrachave, "",'width='+width+', height='+height+', top='+top+', left='+left+', scrollbars=no,fullscreen=no');
}

//POPUP 
function NewWindow(mypage,myname,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win = window.open(mypage,myname,settings)
}