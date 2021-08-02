iLastSize = '11px';
function F_ChangeFontSize(sLayer, iInitialSize, sType) {
	if (iInitialSize == 1) {
		iInitialSize = '10px';
	} else if (iInitialSize == 2) {
		iInitialSize = '11px';
	} else if (iInitialSize == 3) {
		iInitialSize = '12px';
	}
	var ppnp = 1;
	try {ppnp = pwa_pagination_number_pages;}
	catch(e){}
// 'pag' trocado por 'pagination_' 17/03/2008 - Jakeline Santos
		for (iCounter = 0; iCounter < ppnp; iCounter++) {
			oContent = document.getElementById('pagination_'+ iCounter);
		
			if (iInitialSize == 0) { //Define o tamanho automaticamente
				iActualSize = oContent.style.fontSize;
				if (iActualSize == '') { iActualSize = iLastSize; }
				iLastSize = iActualSize;
				
				if (iActualSize.indexOf('pt') > -1) {
					sTypeSize = 'pt';
				} else if (iActualSize.indexOf('px') > -1) {
					sTypeSize = 'px';
				} else {
					sTypeSize = 'ns';
				}
				iActualSize = iActualSize.replace(sTypeSize, '');
				
				if (sType == '-') {
					iNewSize = parseInt(iActualSize) - 1;
					if (iNewSize <= 0) { iNewSize = 1; }
					iNewSize = iNewSize + sTypeSize;
				} else if (sType == '+') {
					iNewSize = parseInt(iActualSize) + 1;
					iNewSize = iNewSize + sTypeSize;
				}
				oContent.style.fontSize = iNewSize;
			} else { //define o tamanho de acordo com o valor informado
				oContent.style.fontSize = iInitialSize;
			}
		}
/*	} else {
		oContent = document.getElementById(sLayer);
	
		if (iInitialSize == 0) { //Define o tamanho automaticamente
			iActualSize = oContent.style.fontSize;
			
			if (iActualSize.indexOf('pt') > -1) {
				sTypeSize = 'pt';
			} else if (iActualSize.indexOf('px') > -1) {
				sTypeSize = 'px';
			} else {
				sTypeSize = 'ns';
			}
			iActualSize = iActualSize.replace(sTypeSize, '');
			
			if (sType == '-') {
				iNewSize = parseInt(iActualSize) - 3;
				if (iNewSize <= 0) { iNewSize = 1; }
				iNewSize = iNewSize + sTypeSize;
			} else if (sType == '+') {
				iNewSize = parseInt(iActualSize) + 3;
				iNewSize = iNewSize + sTypeSize;
			}
			oContent.style.fontSize = iNewSize;
		} else { //define o tamanho de acordo com o valor informado
			oContent.style.fontSize = iInitialSize;
		}
	}
*/
}

function pop_print() {
	window.open( '/includes/pop_print.html', 'pop', 'width=520,height=580,scrollbars=yes');
}

function envComent() {
	window.location = '/noticia/comentarios/' + codigofwa + '_comente.shtml';
}

function popVejaComent() {
   var wVjComent = window.open('/noticia/comentarios/' + codigofwa + '_comentarios.shtml', 'PopComent', 'width=430,height=500,left=0,top=0,scrollbars=yes');
   wVjComent.focus();
}

function listaComentarios(total){
	var listar;
	var mostrar = 3;
	var pagina = window.location.href;
	
	if( (pagina.indexOf('_comente.shtml') == -1) && (pagina.indexOf('_enviado.shtml') == -1) ) {
		if(total > mostrar)
			listar = mostrar;
		else
			listar = total;
	} else {
		listar = total;
	}
	
	var sHTML;
	sHTML = '<div id="boxComentarios"><div class="titComentarios">Comentários</div>';
	for(i=0;i<listar;i++){
		sHTML = sHTML + comments[i][2] + '<div class="dataComentario">(' + comments[i][1] + ')</div>';
	}
	if( (pagina.indexOf('_comente.shtml') == -1) && (pagina.indexOf('_enviado.shtml') == -1) ){
		sHTML = sHTML + '<div class="clearDiv"></div>';
		sHTML = sHTML + '<div class="opComente"><a href="javascript:envComent();" title="envie seu comentário" target="_self">Comente</a></div>';
		sHTML = sHTML + '<div class="opVerTodos"><a href="/noticia/comentarios/' + codigofwa + '_comente.shtml">Ver todos os comentários</a></div>';
		sHTML = sHTML + '<div class="clearDiv"></div>';
	}
	sHTML = sHTML + '</div>';
	
	document.write(sHTML);
}


/***********
Script para controle de paginação gerada pelo FCKEditor no PWA
Desenvolvedor: Marcus Floriano
Data: 29/06/2007
*Adaptado para atender layout, por Jakeline Santos
*Data: 25/07/2008
Desenvolvimento Web
************/

/** Criação do objeto Pagination **/
Pagination = function () {
   this.Pagination = Pagination;
   this.name = 'Pagination';
   this.version = '1.0v';
   //Se houver somente uma página exibir navegação.
   this.navigation_one_page = false;
   // Caractere que separa os numeros da página
   this.sepchar = ' &nbsp; ';
   // Formato dos numeros para as páginas
   this.linkpage = '<a href="javascript:p.topage($NP$);void(0);">$NP$</a>';
   // Formado do numero da página selecionada
   this.linkpageselected = '<a href="javascript:p.topage($NP$);void(0);" class="ativo">$NP$</a>';
   // Total de numeros de página
   this.numberpages = pwa_pagination_number_pages;
   // ID da tag DIV do HTML para impressão da paginação
   this.dividnavigation = 'nav_pagination';
   // Página de inicio da paginação
   this.pagestart = 0;
}

/** Atalho para objeto interno **/
var pgt = Pagination.prototype;

/** método para a impressão da navegação da paginação **/
pgt.print_navigation = function() {
	if(!this.numberpages){return '';}
	if(this.numberpages == 1 && !this.navigation_one_page){document.getElementById(this.dividnavigation).style.display='none';}
	var objnav = document.getElementById(this.dividnavigation) ;
	if(objnav){
		var nav = "";
		nav += '<div class="anterior"><a href="javascript:p.topage(\'previous\');void(0);">Anterior</a></div>';
		nav += '<div class="meio">';
		for(var i=0;i<this.numberpages;i++){
			if(i!=0){
				nav += this.sepchar;
			}
			if(i == this.pagestart){
				nav += this.linkpageselected.replace(/\$NP\$/g,(i+1));
			} else {
				nav += this.linkpage.replace(/\$NP\$/g,(i+1));
			}
		}
		nav += '</div>';
		nav += '<div class="proxima"><a href="javascript:p.topage(\'next\');void(0);">Próxima</a></div>';
		objnav.innerHTML = nav;
	} else {
		alert('Desculpe, a tag <DIV> com o id ' + this.dividnavigation + ' não existe. Crie a tag para a inclusão da navegação da paginação, obrigado.') ;
	}
}

/** método para apresetar a página selecionada **/
pgt.topage = function(page)  {
	var p2s;
	if(!isNaN(page)) p2s = page-1;
	if(page == "previous") p2s = this.pagestart - 1;
	if(page == "next") p2s = this.pagestart + 1;
	if(p2s >= this.numberpages || p2s < 0) return false;
	var pageselected = document.getElementById('pagination_'+this.pagestart) ;
	var pagetoselect = document.getElementById('pagination_'+p2s) ;

	if(pageselected && pagetoselect){
		this.pagestart = p2s;
		pageselected.style.display = 'none';
		pagetoselect.style.display = 'block';
		this.print_navigation();
		window.scrollTo(0, 0);
	} else {
		alert('Desculpe, contate o administrador e informe o erro PG001.');
		return false;
	}

}
/*** fim script paginacao ***/
function maisMenos(){
	if(document.getElementById("maisEspalhe").innerHTML == "+")
		document.getElementById("maisEspalhe").innerHTML = "-";
	else if(document.getElementById("maisEspalhe").innerHTML == "-")
		document.getElementById("maisEspalhe").innerHTML = "+";
}