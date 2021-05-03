/*-----------------------------------------------------------
*	fomentoModal - cria modais personalizados do E-Fomento	*
*-----------------------------------------------------------*

	// Parâmetros						                            

	-- tipo --
	definicao: altera o layout/botoes do modal
	valores: prompt/alert/confirm/custom/iframe
	padrao: alert
	
	-- protecao --
	definicao: bloqueia acesso ao conteudo da pagina
	valores: true/false
	padrao: true
	
	-- largura --
	definicao: define a largura do modal em pixels
	valores: inteiro
	padrao: 350
	
	-- titulo --
	definicao: define o titulo do modal (barra superior)
	valores: string
	padrao: Atenção
	
	-- conteudo -- (UNICO PARAMETRO OBRIGATORIO)
	definicao: define o conteudo principal do modal
	valores: string (aceita tags html)
	padrao: null (deve ser especificado)
	
	-- imagem --
	definicao: altera a imagem a ser mostrada como background do modal
	valores: caminho da imagem
	padrao: alert
	
	-- textoAceitar --
	definicao: define o texto do botao de confirmação
	valores: string
	padrao: OK
	
	-- textoCancelar --
	definicao: define o texto do botao de cancelamento
	valores: string
	padrao: cancelar
	
	-- funcaoAceitar --
	definicao: atribui uma funcao ao onclick do botao de confirmação
	valores: função
	padrao: null
	
	-- funcaoCancelar --
	definicao: atribui uma funcao ao onclick do botao de cancelamento
	valores: função
	padrao:null
	

	// Sintaxe
	
	new fomentoModal(
		{
			parametro1: valor,
			parametro2: valor
		}
	)
	
	
	// Valor do input (caso layout = prompt)
	
	obj.valor
	
-----------------------------------------------------------*/


function fomentoModal(parametros) {

this.funcaoCancelar = typeof parametros.funcaoCancelar !="undefined" ? parametros.funcaoCancelar : null;
this.funcaoAceitar = typeof parametros.funcaoAceitar !="undefined" ? parametros.funcaoAceitar : null;
this.tipo = typeof parametros.tipo !="undefined" ? parametros.tipo : "alert";
this.protecao = typeof parametros.protecao !="undefined" ? parametros.protecao : true;
this.largura = typeof parametros.largura !="undefined" ? parametros.largura + "px" : "350px";
this.altura = typeof parametros.altura !="undefined" ? parametros.altura + "px" : "300px";
this.conteudo = typeof parametros.conteudo !="undefined" ? parametros.conteudo : null;
this.titulo = typeof parametros.titulo !="undefined" ? parametros.titulo : " Atenção ";
this.textoAceitar = typeof parametros.textoAceitar != "undefined" ? parametros.textoAceitar : " OK ";
this.textoCancelar = typeof parametros.textoCancelar != "undefined" ? parametros.textoCancelar : " Cancelar ";
this.imagem = typeof parametros.imagem !="undefined" ? parametros.imagem : "../images/alert.gif";

if (this.tipo !="iframe" && !this.conteudo) return;

/* array e classes que controlam a estrutura */
this.estruturaClasses = ['fomentoHolder','sombraA','sombraB','sombraC','sombraD','fomentoModal','fomentoBarraSuperior','fomentoConteudoHolder','fomentoBotaoHolder','fomentoConteudo'];
this.detalheClasses = ['detalheUm','fomentoBarraSuperiorConteudo'];
this.estruturaArray = new Array();
this.detalheArray = new Array();

/* cria a estrutura do modal */
this.criarEstrutura();
}

fomentoModal.prototype.adicionarBotao = function(t, f) {
	var botao = document.createElement("button");
	botao.innerHTML = t || "Default";
	botao.modal = this;
	botao.funcao = f;
	botao.onclick = function() { this.modal.removerModal(); if (this.funcao) eval(this.funcao) }
	this.estruturaArray[8].appendChild(botao);
}

fomentoModal.prototype.criarEstrutura = function() {

	/* cria toda a estrutura de divs */
	for (var x=0; x<this.estruturaClasses.length; x++) {
	this.estruturaArray[x] = document.createElement("div");
	this.estruturaArray[x].modal = this;
	this.estruturaArray[x].className = this.estruturaClasses[x];
	}
	
	/* cria toda a estrutura de bs */
	for (var x=0; x<this.detalheClasses.length; x++) {
	this.detalheArray[x] = document.createElement("b");
	this.detalheArray[x].className = this.detalheClasses[x];
	}
	
	/* referencia a tag body */
	this.pageBody = document.getElementsByTagName("body")[0];
	
	/* referencia ao document element */
	this.de = document.documentElement;
	
	/* append da estrutura no body */
	this.estruturaArray[7].appendChild(this.estruturaArray[9]);
	this.estruturaArray[6].appendChild(this.detalheArray[0]);
	this.estruturaArray[6].appendChild(this.detalheArray[1]);
	this.estruturaArray[5].appendChild(this.estruturaArray[6]);
	this.estruturaArray[5].appendChild(this.estruturaArray[7]);	
	this.estruturaArray[5].appendChild(this.estruturaArray[8]);
	this.estruturaArray[4].appendChild(this.estruturaArray[5]);
	this.estruturaArray[3].appendChild(this.estruturaArray[4]);
	this.estruturaArray[2].appendChild(this.estruturaArray[3]);
	this.estruturaArray[1].appendChild(this.estruturaArray[2]);
	this.estruturaArray[0].appendChild(this.estruturaArray[1]);
	this.pageBody.appendChild(this.estruturaArray[0]);
	
	/* chama funcao para utilizar os parametros */
	this.tratarParametros();
}

fomentoModal.prototype.centralizar = function() {

	this.qtdScrollY = window.pageYOffset ? window.pageYOffset : this.de.scrollTop;
	this.qtdScrollX = window.pageXOffset ? window.pageXOffset : this.de.scrollLeft;
	
	this.estruturaArray[0].style.top = this.de.clientHeight/2 - this.estruturaArray[0].offsetHeight/2 + this.qtdScrollY + "px";
	this.estruturaArray[0].style.left = this.de.clientWidth/2 - this.estruturaArray[0].offsetWidth/2 + this.qtdScrollX + "px";
}

fomentoModal.prototype.tratarParametros = function() {

	if (this.protecao) this.criarOverlay();
	
	/* atribui largura definida */
	this.estruturaArray[0].style.width = this.largura;
	
	/* atribui background ao holder do conteudo */
	this.estruturaArray[7].style.background = "url(" + this.imagem + ") no-repeat 4% 50% #fff";

	/* atribui o conteudo */
	this.estruturaArray[9].innerHTML = this.conteudo;
	
	/* atribui o titulo */
	this.detalheArray[1].innerHTML = this.titulo;

	/* botao basico do modal */
	if (this.tipo !="custom" && this.tipo !="iframe") {
	this.botaoAceitar = document.createElement("button");
	this.botaoAceitar.innerHTML = this.textoAceitar;
	this.botaoAceitar.modal = this;
	this.botaoAceitar.onclick = function() { this.modal.removerModal(); if (this.modal.funcaoAceitar) eval(this.modal.funcaoAceitar) };
	this.estruturaArray[8].appendChild(this.botaoAceitar);
	}
	
	/* botao cancelar */
	if (this.tipo == "confirm" || this.tipo == "prompt") {
	this.botaoCancelar = document.createElement("button");
	this.botaoCancelar.innerHTML = this.textoCancelar;
	this.botaoCancelar.modal = this;
	this.botaoCancelar.onclick = function() { this.modal.removerModal(); if (this.modal.funcaoAceitar) eval(this.modal.funcaoCancelar) }
	this.estruturaArray[8].appendChild(this.botaoCancelar);
	}
	
	/* input text */
	if (this.tipo == "prompt") {
	this.promptInput = document.createElement("input");
	this.promptInput.style.display = "block";
	this.promptInput.style.font = "normal 11px arial";
	this.promptInput.style.marginTop = "10px";
	this.promptInput.style.width = "80%";
	this.promptInput.type = "text";
	this.estruturaArray[9].appendChild(this.promptInput);
	}
	
	if (this.tipo == "custom" || this.tipo == "iframe") {
	this.estruturaArray[9].className = "fomentoConteudoCustom";
	this.estruturaArray[8].className = "fomentoBotaoHolderCustom";
	}
	
	if (this.tipo == "iframe") {
	this.iframe = document.createElement("iframe");
	this.iframe.style.width = "100%";
	this.iframe.style.height = this.altura;
	this.iframe.frameBorder = "0";
	this.estruturaArray[9].appendChild(this.iframe);
	
	this.desabilitarModal();
	}
	
	/* atribui o drag&drop */
	this.estruturaArray[6].onmousedown = function(e) { this.modal.drag(e); return false };
	this.estruturaArray[6].onselectstart = function() { return false };

	/* centraliza o modal */
	this.centralizar();

}

fomentoModal.prototype.removerModal = function() {
	if (this.tipo == "prompt") { this.valor = this.promptInput.value };
	this.removerOverlay();
	this.estruturaArray[0].parentNode.removeChild(this.estruturaArray[0]);
}

fomentoModal.prototype.resizeOverlay = function() {
	if (this.overlayCriado) {
	this.overlay.style.height = this.de.scrollHeight > this.de.offsetHeight ? this.de.scrollHeight + "px" : this.de.offsetHeight + "px";
	this.overlay.style.width = this.de.clientWidth + "px";
	}
}

fomentoModal.prototype.criarOverlay = function(parametro) {

	if (this.overlayCriado) this.removerOverlay();
	
	this.desabilitaForms();
	
	var _this = this
	
	window.onresize = function() {
	_this.resizeOverlay();
	_this.centralizar();
	}

	this.pageBody.style.overflow = "hidden";
	this.de.style.overflow = "hidden";

	this.overlay = document.createElement("div");
	this.overlay.className = "overlay";
	
	this.overlay.style.height = this.de.scrollHeight > this.de.offsetHeight ? this.de.scrollHeight + "px" : this.de.offsetHeight + "px";
	this.overlay.style.width = this.de.clientWidth + "px";
	
	this.overlay.style.filter = "alpha(opacity=60)";
	this.overlay.style.opacity = "0.6";
	this.overlay.style.mozOpacity = "0.6";
	
	this.pageBody.appendChild(this.overlay);
	
	this.overlayCriado = true;
}

fomentoModal.prototype.desabilitaForms = function() {
	this.documentForms = new Array();
	this.z = 0;
	
	formTags = ['input','button']
	
	for (var x=0; x<formTags.length; x++) {
		formElements = document.getElementsByTagName(formTags[x]);
			for (var y=0; y<formElements.length; y++) {
				if (!formElements[y].disabled) {
				formElements[y].disabled = "disabled";
				this.documentForms[this.z] = formElements[y]
				this.z++
				}
			}
	}
}

fomentoModal.prototype.habilitaForms = function() {
	for (var x=0; x<this.z; x++) {
	this.documentForms[x].disabled = "";
	}
}

fomentoModal.prototype.removerOverlay = function() {

	this.pageBody.style.overflow = "auto";
	this.de.style.overflow = "auto";

	if (this.overlayCriado) {
	this.overlay.parentNode.removeChild(this.overlay);
	this.overlayCriado = false;
	this.habilitaForms();
	}
	
	window.onresize = function() {
	return false
	}	
	
}

fomentoModal.prototype.setUrl = function(url) {
	this.iframe.src = url;
	this.habilitarModal();
}

fomentoModal.prototype.desabilitarModal = function() {
	this.estruturaArray[0].style.display = "none";
	this.overlay.style.display = "none";
	this.pageBody.style.overflow = "auto";
	this.de.style.overflow = "auto";

	this.habilitaForms();
}

fomentoModal.prototype.habilitarModal = function() {
	this.estruturaArray[0].style.display = "";
	this.overlay.style.display = "";	
	this.pageBody.style.overflow = "hidden";
	this.de.style.overflow = "hidden";

	this.centralizar();
	this.desabilitaForms();
	
}

fomentoModal.prototype.drag = function(e) {
if (!e) e = window.event;

_modal = this;

document.onmouseup = function(e) { _modal.drop(e); return false };

this.inicialX = this.estruturaArray[0].offsetLeft;
this.inicialY = this.estruturaArray[0].offsetTop;

this.downX = e.pageX ? e.pageX : e.clientX ? e.clientX + this.pageBody.scrollLeft : null;
this.downY = e.pageY ? e.pageY : e.clientY ? e.clientY + this.pageBody.scrollTop : null;

	document.onmousemove = function(e) {
	if (!e) e = window.event;
	
	upX = e.pageX ? e.pageX : e.clientX ? e.clientX + _modal.pageBody.scrollLeft : null;
	upY = e.pageY ? e.pageY : e.clientY ? e.clientY + _modal.pageBody.scrollTop : null;
	
	vY = upY - (_modal.downY - _modal.inicialY);
	vX = upX - (_modal.downX - _modal.inicialX);
	
	if (vY < 12) vY = 12;
	if (vX < 12) vX = 12;
	
	if (vY + _modal.estruturaArray[0].offsetHeight > _modal.de.clientHeight + _modal.de.scrollTop) { vY = _modal.de.clientHeight - _modal.estruturaArray[0].offsetHeight + _modal.de.scrollTop };
	if (vX + _modal.estruturaArray[0].offsetWidth > _modal.de.clientWidth + _modal.de.scrollLeft) { vX = _modal.de.clientWidth - _modal.estruturaArray[0].offsetWidth + _modal.de.scrollLeft };
	
	_modal.estruturaArray[0].style.top = vY + "px";
	_modal.estruturaArray[0].style.left = vX + "px";
	
	if (e.preventDefault) { e.preventDefault() };
	return false;
	}	
}

fomentoModal.prototype.drop = function() {
	document.onmousemove = function() { return false };
}