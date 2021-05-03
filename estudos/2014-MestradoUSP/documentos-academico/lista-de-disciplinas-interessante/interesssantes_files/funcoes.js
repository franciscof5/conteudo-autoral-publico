/*
 * Funcoes comuns do Janus
 * 
 * Observação: Funções comuns referentes ao menu estão no arquivo menu.js
 * 
 * */
var debug = false;
var contextPath = "/janus";

corrigeErrosJSFAntesDoLoad();


$(document).ready(
		function()
		{	
			corrigeErrosIE();
			criaQuebraLinhas();
			prepareMensages();
			prepararData();
			preparaInputs();			
			menu.carregarMenusFixos = carregarMenusFixos;
		}
);

function carregarMenusFixos()
{
	carregarMenuFixo("menuApresentacao");
	carregarMenuFixo("mnuDuvidas");	
}


function preparaInputs()
{
	if($(".number").onlyNumbers)
	{
		$(".number").onlyNumbers();
	}
}

function prepareMensages()
{
	removeMensagensDeErroRepetidas();
}

Array.prototype.contains = function(elemento)
{
	var ret = false;
	$(this).each(
			function(index, element)
			{
				if(element==elemento)
				{
					ret = true;
					return;
				}
			}
			);
	
	return ret;
}	

function addMensagemErro(mensagem)
{
	var conteudo = "";
	if($(".tabelaDeMensagens").exists())
	{
		conteudo = "<li><span class='erro'>" + mensagem + "</span></li>";
		
		$(".tabelaDeMensagens ul").append(conteudo);
	}
	else
	{			
		conteudo = "<p class='tabelaDeMensagens'></P>";			
		$(".conteudo").prepend(conteudo);
		$(".tabelaDeMensagens").html("<UL id='mensagens'><li><span class='erro'>" + mensagem + "</span></li></ul>");
		
	}	
	removeMensagensDeErroRepetidas();
}



/*
 * Remove mensagens de erro similares para o usuário, a estrutura das mensagens é:
 * 
 * <UL>
 * <LI><span class="erro">Mensagem 1</span></LI>
 * <LI><span class="erro">Mensagem 2</span></LI>
 * <LI><span class="erro">Mensagem 1</span></LI> <= precisa ser removida
 * <LI><span class="erro">Mensagem 3</span></LI>
 * </UL>
 * */


function removeMensagensDeErroRepetidas()
{	 
	
	
	$(".tabelaDeMensagens").each(
			function (index, elemento)
			{
				var todasMensagens  = new Array();
				var cont = 0;
				$(elemento).find("li").each(
					function(indexb,elementob)
					{
						var erro = $(elementob).html();
						if(todasMensagens.contains(erro))
						{
							$(elementob).remove();
						}
						else
						{
							todasMensagens[cont++] = erro;
							$(elementob).show();
							
						}
					}
				);
			}
			);	
}

function stringToDate(date) {
	var datePart = date.split(/[/.-]/);
	
	if (datePart.length != 3) {
		return undefined;
	}
	
	var dia = datePart[0];
	var mes = datePart[1];
	var ano = datePart[2];
	
	if (ano == null || ano == "" || mes == null || mes == "" || dia == null || dia == "") {
		return undefined;
	}
	
	if (ano.length != 4 || ano <= 0 || mes > 12 || mes < 1 || dia > 31 || dia < 1) {
		return undefined;
	}
	
	var isMesCom30Dias = [4,6,9,11].indexOf(mes) > -1;
	
	if ((isMesCom30Dias && dia > 30) || (mes == 2 && dia > 29)) {
		return undefined;
	}
	
	var isAnoBissexto = ano%400 == 0 || ((ano%4 == 0) && (ano%100 != 0));
	
	if (mes == 2 && dia > 28 && !isAnoBissexto) {
		return undefined;
	}
	
	var newDate = new Date(datePart[2], parseInt(datePart[1])-1, datePart[0]);
	
	if (isNaN(newDate.getTime())) {
		return undefined;
	}
	
	return newDate;
}

function prepararData()
{
	var yerNow = new Date().getFullYear();
	
	yerNow += 10;


	$.datepicker.setDefaults({
		dateFormat:'dd/mm/yy',
		dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
		dayNamesMin:['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
		dayNamesShort:['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
		monthNames:    ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'October', 'November', 'December'],
		monthNamesShort:    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		currentText: 'Hoje',
		closeText: 'Fechar',
		nextText: 'Pr&oacute;ximo',
		prevText: 'Anterior',
		yearRange:'1890:'+yerNow,
		changeMonth: true,
		changeYear: true
			});

	$(".date").attr("placeholder","dd/mm/aaaa");
	$( ".date" ).datepicker( "option", "dateFormat","dd/mm/yy");	
	$( ".date" ).datepicker();
	$( ".date" ).css("text-align","center").css("cursor","pointer").css("width","100px");
	$( "[disabled=disabled]"  ).addClass("campoDesabilitado").attr("placeholder","").css("cursor","default");
	$( "[readonly=readonly]"  ).addClass("campoDesabilitado").attr("placeholder","").css("cursor","default");	
	$( ".campodesabilitado"  ).datepicker("disable");
	
	 
}

function corrigeErrosIE()
{
	if(!isIE())
	{
		return;
	}
	
 	//correção da função trim -inexistente em versões do IE8 para baixo
	String.prototype.trim = function trim(){   
		    
			var indexStart = -1;
			var indexEnd = -1;
			var startEnd = false;
			
			for(var index=0;index < this.length;index++)
			{
				if(!startEnd )
				{
					if(this.charAt(index)==" ")
					{
						indexStart = index;
						indexEnd = index+1;
					}
					else
					{
						startEnd  =  true;
					}
				}
				
				if(startEnd)
				{		
				
					if(this.charAt(index)!=" ")
					{
						indexEnd = index;
					}
				}
				
			}
			return this.substring(indexStart+1,indexEnd+1);
			
		 }
}

function corrigeErrosJSFAntesDoLoad()
{
	/*
	 * Evita o erro abaixo:
	 * 
	 * Error:($(parentElement) || document.body).getElementsByTagName is not a function URL:http://localhost:8080/janusD/faces/myFacesExtensionResource/org.apache.myfaces.renderkit.html.util.MyFacesResourceLoader/13335475/prototype.PrototypeResourceLoader/prototype.js Line:835
	 * 
	 * O erro ocorre pois o JSF Tomahawk incui a biblioteca prototype de modo a tornar o JQuery incompatível com a chamada $
	 * Para evitar esse erro, é adicionado o plugin de jquery abaixo que resolve o problema. 
	 * */
	$.fn.getElementsByTagName = function(tagname){		
		 return $(tagname); 
	};
}

function criaQuebraLinhas()
{
	$(".startLine").before("<BR/>");
}


/*
Ex: onchange="esconde(form:idObjeto)"
*/
function esconde(objeto) {
	if(objeto==null)
	{
		log("Warning:Objeto é nulo");
		return;
	}
	objeto.style.display = 'none';
}


/*
Ex: onchange="mostra(form:idObjeto)"
*/
function mostra(objeto) {
	if(objeto==null)
	{
		log("Warning:Objeto é nulo");
		return;
	}
	objeto.style.display = 'inline';
}

/* Exemplo de uso: 
  <input type="text" onkeyup="numeros(this)" onkeydown="numeros(this)"/>
*/
function letras(inputText) {
	validar(inputText, /^\D*$/);
}

function numeros(inputText) {
	validar(inputText, /^\d*$/);
}

// numeros decimais com ate duas casas decimais
function numerosDecimais(inputText) {
	validar(inputText, /^\d{1,4}|((\d{1,2}.{1}\d{1,2})|(\d{1,2},{1}\d{1,2}))$/);
}

function codigoDisciplina(inputText) {
	validar(inputText, /^[a-zA-Z]{0,3}\d{0,4}$/);
}

function cpf(inputText) {
	var size = inputText.value.length;

	if(size == 3) inputText.value = inputText.value + ".";
	else if(size == 7) inputText.value = inputText.value + ".";
	else if(size == 11) inputText.value = inputText.value + "-";

	validar(inputText, /\d{3}.\d{3}.\d{3}-\d{2}/);
}

function validar(inputText, expressaoRegular) {
	if(expressaoRegular.test(inputText.value)) inputText.style.color = "black";
	else inputText.style.color = "red";
}

function tabelaMouseOver(objeto) {
	objeto.style.backgroundColor = '#A5CBFF';
}

function tabelaMouseOut(objeto) {
	objeto.style.backgroundColor = '#FFFFFF';
}

function tabelaOnClick(objeto) {
	objeto.style.backgroundColor = '#FFE0E0';
}

function tabelaOnDblClick(objeto) {
	objeto.style.backgroundColor = '#E0E0E0';
}



function redirect(url) {
	window.location= contextPath + url;
}

function refresh() {
	window.location.reload();
}

function popupAuxiliar(url) {
	return window.open(url, "popup-janus", "height=100,width=100,left=0,top=0,menubar=false,resizable=false,scrollbars=false,status=false,toolbar=false", false);
}

/*
	Usar quando todos os checkboxes possuem o mesmo "name"
*/
function selecionaTodos(mainCheckBox, checkBoxList) {
	if (mainCheckBox == null || checkBoxList == null) return;
	for (var i = 0; i < checkBoxList.length; i++) {
		checkBoxList[i].checked = mainCheckBox.checked;	
	}
}

/* Exemplo de uso:
	listaParticipacao.jsp
	<h:form id="IDFORM">
		<t:dataTable id="IDTABLE">
			<jdt:multipleRowsSelector id="idX" selectionList="#{bean.lista}"/>
		</t:dataTable>
	</h:form>
	
	Vai gerar: 
		<input type="checkbox" name="IDFORM:IDTABLE:0:idX"/>
		<input type="checkbox" name="IDFORM:IDTABLE:1:idX"/>
		...
	Dai tem que fazer:
	<h:selectBooleanCheckbox onclick="selecionaTodos(this, 'IDFORM:IDTABLE', 'idX');"/>
*/
function selecionaTodos(mainCheckBox, prefixo, sufixo) {
	if (mainCheckBox == null) return;
	var padraoJSF = new RegExp(prefixo + ':' + '\\d+' + ':' + sufixo);
	var todosInputsDaPagina = document.getElementsByTagName("input");
	for(i = 0; i < todosInputsDaPagina.length; i++) {
		if(todosInputsDaPagina[i].type == 'checkbox') {
			checkbox = todosInputsDaPagina[i];
			if(padraoJSF.test(checkbox.name)) {
				checkbox.checked = mainCheckBox.checked;
			}
		}
	}
}

/*
	FUNCOES PARA MANIPULACAO DE DATAS
*/

/*
 * 
 * date = data inicial
 * 
 * days = inteiro com os dias a ser somado (dias < 0 | dias >=0 )
 * 
 * retCallback = função que será chamada com a data já calculada
 * 
 * A função abaixo ignora propositalmente o horário de verão e usa o horário de verão
 * */
function addDaysByServer(date,days,retCallback)
{
	
	Util.somaDias(date,days,{
		  callback: retCallback,
		  timeout:30000,
		  errorHandler:erroDWR
		});
}

/*
 * A função abaixo ignora propositalmente o horário de verão.
 * */
function addDays(date,days)
{
	
	
	var delta = 24*60*60*1000;
	
	if(days==0)
	{
		return date;
	}
	else if(days<0)
	{
		delta = delta * -1;
		days = days * -1;
	}

	while(days>0)
	{
		var day = date.getDate();
		date.setTime(date.getTime()+delta);
		if(date.getDate()!=day)
		{
			days--;
		}
	}
	return date;
}
 


function dataValida(data) {
	var separador = '';
	if(data != '') {
		if(data.indexOf('/') != -1)
			separador = '/';
		else if(data.indexOf('.') != -1)
			separador = '.';
		else return false;
		if(data.length < 5 || data.length > 10 || 
			data.indexOf(separador) < 1 || data.indexOf(separador) > 2 || 
			data.lastIndexOf(separador) < 3 || data.lastIndexOf(separador) > 5 ||
			pegaDiaFormatado(data, separador) == '' || 
			pegaMesFormatado(data, separador) == '' || 
			pegaAnoFormatado(data, separador) == '')
			return false; 
	}
	return true; 
}


function dataParaString(data) {
	var dia = data.getDate()+'';
	var mes = data.getMonth()+1+'';
	var ano = data.getFullYear()+'';
	return (dia.length+''==1?"0":"")+dia+"/"+(mes.length+''==1?"0":"")+mes+"/"+ano;
}

function dataParaStringComHora(data) {
	var hora = data.getHours()+'';
	var minuto = data.getMinutes()+'';
	var segundo = data.getSeconds()+'';
	
	hora = hora.length == 1 ? "0"+hora : hora;
	minuto = minuto.length == 1 ? "0"+minuto : minuto;
	segundo = segundo.length == 1 ? "0"+segundo : segundo;
	
	return dataParaString(data) + " " + hora + ":" + minuto + ":" + segundo;
}

function dataParaStringSemSegundo(data) {
	var hora = data.getHours()+'';
	var minuto = data.getMinutes()+'';
	var segundo = data.getSeconds()+'';
	
	hora = hora.length == 1 ? "0"+hora : hora;
	minuto = minuto.length == 1 ? "0"+minuto : minuto;
	
	return dataParaString(data) + " " + hora + ":" + minuto;
}

function pegaDiaFormatado(data, separador) {
	var dia = '';
	dia = data.substring(0, data.indexOf(separador));
	if(dia.length == 1)
		dia = formataDiaMes(dia);
	if(dia*1 >= 1 && dia*1 <= 31)
		return dia;
	return '';
}

function pegaMesFormatado(data, separador) {
	var mes = '';
	mes = data.substring(data.indexOf(separador) + 1, data.lastIndexOf(separador));
	if(mes.length == 1)
		mes = formataDiaMes(mes);
	if(mes*1 >= 1 && mes*1 <= 12)
		return mes;
	return '';
}

function pegaAnoFormatado(data, separador) {
	var ano = '';
	ano = data.substring(data.lastIndexOf(separador) + 1);	
	if(ano.length <= 2) {
		if(ano.length == 1 && ano*1 < 10) 
			ano = '200' + ano;
	    else if(ano*1 < 40) 
			ano = '20' + ano;
    	else if(ano*1 < 100) 
    		ano = '19' + ano;
	}
	if(ano*1 < 2050 && ano*1 > 1000)
		return ano;
	return '';
}	

function formataDiaMes(diaOuMes) {
	if(diaOuMes < 10) 
		return '0' + diaOuMes;
	else return diaOuMes;
}

function existeFuncao(funcao)
{
	return typeof funcao == "function";
}

function carregaCombosCasoExistam(){
	try
	{
		if (existeFuncao(carregarCombosUnidadeProgramaArea))
		{
			carregarCombosUnidadeProgramaArea();
		}
		else
		{
			
			carregarCombosUnidadeProgramaArea = 
				function()
				{
					//para evitar erros em chamadas, se nï¿½o existe ele cria uma funï¿½ï¿½o dummy
				};
		}
	}
	catch(e)
	{
		log(e);

		carregarCombosUnidadeProgramaArea = 
			function()
			{
				//para evitar erros em chamadas, se nï¿½o existe ele cria uma funï¿½ï¿½o dummy
			};
	}
}

function addExtraFunctions(obj)
{
	if (obj) {
		obj.alpha = function(opacity) {
			this.style.opacity = opacity/100;
			this.style.filter = 'alpha(opacity='+opacity+');';
		}
	}
	
	if (obj) {
		obj.hide = function(opacity) {
			this.oldDisplay = this.style.display ; 
			this.style.display = 'none';
    	}
	}
	
	if (obj) {
		obj.show = function(opacity) {
			this.style.display = this.oldDisplay;
    	}
	}
}
 
function _(id)
{
	var obj = document.getElementById(id);
	addExtraFunctions(obj);
	return obj;
}

function __(id)
{
	var obj = parent.document.getElementById(id);
	addExtraFunctions(obj);
	return obj;
}


function alterarPerfil(nivel)
{
	$("#logoutForm\\:cmdAlterarPerfil").click();
}

function cbAlterarPerfil()
{
	document.location.reload();
}


function log(message)
{
	try
	{
		if(debug && console.log)
		{
			console.log(message);
		}
	}
	catch(e)
	{}
}

function gotoAction(action)
{
	$("#menuForm\\:nextAction").val(action);			
	$("#menuForm\\:redirect").trigger('click');
}

function erroDWR(msg, exc) {
	if(!exc.errorCode)
	{
		log("O servidor está demorando muito para responder, tente novamente mais tarde");
		return;
	}
 	
	log("[" + exc.errorCode + "] - " + msg );
}



function extraiCodigo(id,prefix)
{
	return parseInt(id.substring(prefix.length));
}


  
	
if(typeof window.getScrolling != "function")
{
	window.getScrolling = function(){};
}

window.onerror=myErrorHandler;

function myErrorHandler(errorMsg, url, lineNumber) 
{
	if (url == undefined)
	{
		log("url undefined");
		return;
	}
	//corrige erros especificos de JSF para alguns navegadores
	if($.browser.msie)
	{
		if(url.indexOf("prototype")!=-1)
		{
			return true;
		}

		if(errorMsg.indexOf("mover o foco")!=-1)
		{
			return true;
		}

		if(errorMsg.indexOf("focus")!=-1)
		{
			return true;
		}
	}
	else if($.browser.mozilla)
	{
		if(errorMsg.indexOf("f is undefined")!=-1)
		{
			//erro documentado em
			//http://stackoverflow.com/questions/1795643/jsf-commandlink-does-not-work-on-firefox-after-a-whole-form-rerender
			return true;
		}		
	}
	
	if(url.indexOf("tiny_mce/themes/advanced/langs/en.js")!=-1)
	{
		//erro documentado em 
		//http://tinymce.moxiecode.com/forum/viewtopic.php?id=19702
		return true;
	}	

	if(errorMsg.indexOf("document.getElementById")!=-1)
	{
		//ocasiona erro, em script gerado para forms JSF, exemplo da página listaAlunoEleicao.jsf
		return true;
	}
	
	if(errorMsg.indexOf("Cannot read property 'elements' of")!=-1)
	{
		//ocasiona erro, em algumas páginas onde um script gerado via JSF onde supõe a existência da sub propriedade elements do objeto retornado por getElementsById 
		return true;
	}
	
	alert("Error:" + errorMsg + " URL:" + url + " Line:" + lineNumber);
	return false;
}

 
function confirmModal(options)
{
	
	if(!options.callback || !options.content)
	{
		alert("Função de retorno e conteúdo são obrigatórios!");
		return;
	}

	if(!options.ok)
	{
		options.ok = "Ok";
	}
	
	if(!options.cancel)
	{
		options.cancel = "Cancelar";
	}
	
	var actions = "<div id='confirmDialogActions'><INPUT type='button' id='confirmDialogOK' class='actionConfirmDialog' value='" + options.ok + "'/> " +
			" <INPUT type='button' id='confirmDialogCancel' class='actionConfirmDialog' value='" + options.cancel + "'/></div>";
	if(options.title)
	{
		options.title = "<H3>" + options.title + "</H3>";
	}
	else
	{
		options.title = "";
	}
	options.message = "<P>"+options.message+"</P>";
	$("body").append("<DIV id='confirmDialog'>" + options.title + options.content + actions +"</DIV>");
	$(".actionConfirmDialog").data("options",options);
	$("#confirmDialogOK").bind("click",__confirmModalRet);
	$("#confirmDialogCancel").bind("click",__cancelModalRet);
	$("#confirmDialog").modal();
	$(".modalCloseImg").remove();
	
	function __confirmModalRet()
	{
		__modalRet($(".actionConfirmDialog").data("options"),true);
	}

	function __cancelModalRet()
	{
		__modalRet($(".actionConfirmDialog").data("options"),false);
	}


	function __modalRet(options,ret)
	{
		options.callback(ret);
		$.modal.close();
		$("#confirmDialog").remove();
	}
}

function isCPFValido(CPF) {
	
		//Verifica se o campo é nulo
		if (CPF == '') {
		  return false;
		}
		
		// Aqui começa a checagem do CPF
		var POSICAO, I, SOMA, DV, DV_INFORMADO;
		var DIGITO = new Array(10);
		DV_INFORMADO = CPF.substr(9, 2); // Retira os dois últimos dígitos do número informado
	
		// Desemembra o número do CPF na array DIGITO
		for (I=0; I<=8; I++) {
			DIGITO[I] = CPF.substr( I, 1);
		}
	
		//Calcula o valor do 10º dígito da verificação
		POSICAO = 10;
		SOMA = 0;
	   for (I=0; I<=8; I++) {
	      SOMA = SOMA + DIGITO[I] * POSICAO;
	      POSICAO = POSICAO - 1;
	   }
	   DIGITO[9] = SOMA % 11;
	   if (DIGITO[9] < 2) {
	        DIGITO[9] = 0;
	   }
	   else{
		   DIGITO[9] = 11 - DIGITO[9];
	   }
	
	   // Calcula o valor do 11º dígito da verificação
	   POSICAO = 11;
		SOMA = 0;
	   for (I=0; I<=9; I++) {
	      SOMA = SOMA + DIGITO[I] * POSICAO;
	      POSICAO = POSICAO - 1;
	   }
	   DIGITO[10] = SOMA % 11;
	   if (DIGITO[10] < 2) {
	        DIGITO[10] = 0;
	   }
	   else {
	        DIGITO[10] = 11 - DIGITO[10];
	   }
	
	   // Verifica se os valores dos dígitos verificadores conferem
	   DV = DIGITO[9] * 10 + DIGITO[10];
	   if (DV != DV_INFORMADO) {
	      return false;
	   }
	   
	   return true;
}

/*
 *
 *
 *
 * 	var conteudo = [
	        {nome:'Fulano Ciclano Beltrano', nomeMae:'Fulano Ciclano Beltrano', cpf:'2342343434',dtNasc:'23-01-2012',conflito:false},
	        {nome:'Fulano Ciclano Beltrano', nomeMae:'Fulano Ciclano Beltrano', cpf:'2342343434',dtNasc:'23-01-2012',conflito:true},
	        {nome:'Fulano Ciclano Beltrano', nomeMae:'Fulano Ciclano Beltrano', cpf:'2342343434',dtNasc:'23-01-2012',conflito:true},
	        {nome:'Fulano Ciclano Beltrano', nomeMae:'Fulano Ciclano Beltrano', cpf:'2342343434',dtNasc:'23-01-2012',conflito:false},
	        {nome:'Fulano Ciclano Beltrano', nomeMae:'Fulano Ciclano Beltrano', cpf:'2342343434',dtNasc:'23-01-2012',conflito:false}];
	var colNames = ['CPF','Nome','Nome Da Mãe','Dt. Nasc.'];
	var colModel = [
						{name:'cpf',width:100},
						{name:'nome',width:180},
						{name:'nomeMae',width:180},
						{name:'dtNasc',width:100}];
	
	
	//ex de chamada minima
	var options =
	{
		lista:conteudo,
		seletorTabela:"#listaAceite", 
		seletorRodape:"#listaAceiteRodape",
		colNamesValues:colNames,
		colModelValues:colModel
		
	};
	
	
	//passando mais parâmetros
	var options =
	{
		lista:conteudo,
		seletorTabela:"#listaAceite", 
		seletorRodape:"#listaAceiteRodape",
		colNamesValues:colNames,
		colModelValues:colModel,
		multiselect:false,
		view:true,
		viewtext:"Validar Dados",
		viewfunc:onValidarDados,
		onAfterInsertRow:insereCor,
		rowNum:30,
		height:400
		
	};
	
onAfterInsertRow result in one 
afterInsertRow	rowid
rowdata
rowelem 	This event fires after every inserted row.
rowid is the id of the inserted row
rowdata is an array of the data to be inserted into the row. This is array of type name: value, where the name is a name from colModel
rowelem is the element from the response. If the data is xml this is the xml element of the row; if the data is json this is array containing all the data for the row
Note: this event does not fire if gridview option is set to true 

 * */
function montarGrid(options)
{
	if(!options.lista || !options.seletorTabela || !options.seletorRodape ||!options.colNamesValues
			||!options.colModelValues)
		
	{
		alert("lista,selectorTabela,selectorRodape,colNamesValues,colModelValues são parâmetros obrigatórios");
		return; 
	}
	if(!options.onCellSelectFunction)
	{
		options.onCellSelectFunction = null;
	}
	if(!options.onRowSelectFunction)
	{
		options.onRowSelectFunction = null;
	}
	if(!options.onAfterInsertRow)
	{
		options.afterInsertRow = null;
	}
	if(!options.onLoadComplete)
	{
		options.onLoadComplete = null;
	}
		
	if(!options.multiselect)
	{
		options.multiselect = false;
	}

	if(!options.view)
	{
		options.view = false;
		options.viewtext = null;
		options.viewtitle = null;
		options.viewfunc = null;
	}
	
	if(!options.add) {
		options.add = false;
		options.addtext = null;
		options.addtitle = null;
		options.addfunc = null;
	} 

	if(!options.edit) {
		options.edit = false;
		options.edittext = null;
		options.edittitle = null;
		options.editfunc = null;
	}
	

	if(!options.del) {
		options.del= false;
		options.deltext = null;
		options.deltitle = null;
		options.delfunc = null;
	}
	
	
	if(!options.autowidth)
	{
		options.autowidth = false;
	} 
	
	if(!options.viewrecords)
	{
		options.viewrecords = false;
	}
	
	if(!options.rowNum)
	{
		options.rowNum = 10;
	}

	if(!options.height)
	{
		options.height = "250px";	
	}
	else	
	{
		if(!isNaN(options.height))
		{
			options.height = options.height + "px";
		}
	}
	
	if(!options.idPrefix)
	{
		options.idPrefix = "";
	}

	
	if (!options.sortname) {
		options.sortname = "";
		options.sortorder = "asc";
	}
	else {
		if (!options.sortorder) {
			options.sortorder = "asc";
		}
	}
	
	
	if (!options.rowList) {
		options.rowList = [];
	}
	
	if(!options.editBeforeShowFormFunction){
		options.editBeforeShowFormFunction = "";
	}

	if(!options.editAfterShowFormFunction){
		options.editAfterShowFormFunction = "";
	}
	
	if(!options.addBeforeShowFormFunction){
		
		options.addBeforeShowFormFunction = "";
	}
	
	if(!options.addAfterShowFormFunction){
		options.addAfterShowFormFunction = "";
	}
	 
	if(!options.editOnClickSubmitFunction){
		options.editOnClickSubmitFunction = "";
	}

	if(!options.addOnClickSubmitFunction){
		options.addOnClickSubmitFunction = "";
	}
		
	if(!options.delOnClickSubmitFunction){
		options.delOnClickSubmitFunction = "";
	}
		 
	
	function editAfterShowForm(){

		
		$(".ui-widget-overlay").css("opacity", 0.5);
		$(".ui-widget-overlay").css("background-image", "none");
		$(".ui-widget-overlay").css("background-color", "rgb(11,45,122)");

		if(options.editAfterShowFormFunction){
		 options.editAfterShowFormFunction();
		}
		
	}
	

	
	function addAfterShowForm(){

		
		$(".ui-widget-overlay").css("opacity", 0.5);
		$(".ui-widget-overlay").css("background-image", "none");
		$(".ui-widget-overlay").css("background-color", "rgb(11,45,122)");

		if(options.addAfterShowFormFunction){
		 options.addAfterShowFormFunction();
		}
		
	}
    
	

	
	function delAfterShowForm(){

		
		$(".ui-widget-overlay").css("opacity", 0.5);
		$(".ui-widget-overlay").css("background-image", "none");
		$(".ui-widget-overlay").css("background-color", "rgb(11,45,122)");

		if(options.delAfterShowFormFunction){
		 options.delAfterShowFormFunction();
		}
		
	}
    
	
	
	
	// descarrega o grid para funcionar ao realizar nova busca
	
	
	$(options.seletorTabela).jqGrid('GridUnload');
	$(options.seletorTabela).removeData("list",options.lista);
	$(options.seletorTabela).removeData("options",options);
	$(options.seletorTabela).data("list",options.lista);
	$(options.seletorTabela).data("options",options);
	$(options.seletorTabela).jqGrid({
		datatype: "local",
		align: "center",
		data: options.lista,
		pager: options.seletorRodape,
		height: options.height,
		idPrefix: options.idPrefix,
		autowidth: options.autowidth,
		rownumbers: false,
		viewrecords: options.viewrecords,
		multiselect: options.multiselect,
		ignoreCase: true,
		//caption: "Tipo de Exceção", //titulo do grid
		rowNum: options.rowNum,
		rowList: options.rowList,
		colNames:options.colNamesValues,
		colModel:options.colModelValues,
		onCellSelect:options.onCellSelectFunction,
		afterInsertRow:options.onAfterInsertRow,
		gridComplete:options.onLoadComplete,
		sortname:options.sortname,
		sortorder:options.sortorder,
		onSelectRow:options.onRowSelectFunction,
		editurl: contextPath + "/Jsp/blank.html"
	
	});
	$(options.seletorTabela).jqGrid('filterToolbar',{stringResult:true,searchOnEnter:false});
	$(options.seletorTabela).jqGrid('navGrid',options.seletorRodape,
		{			
			add:options.add, addtext:options.addtext, addtitle:options.addtitle, addfunc:options.addfunc,
			edit:options.edit, edittext:options.edittext, edittitle:options.edittitle, editfunc:options.editfunc,
			del:options.del, deltext:options.deltext, deltitle:options.deltitle, delfunc:options.delfunc,
			view:options.view, viewtext:options.viewtext, viewtitle:options.viewtitle, viewfunc:options.viewfunc,
			search:false,
			refresh:false,
			
		}, // use default settings for edit
		{
			width: 'auto',
			beforeShowForm:options.editBeforeShowFormFunction,
			afterShowForm:editAfterShowForm,
			recreateForm:true,
			closeAfterEdit: true,
			onclickSubmit: options.editOnClickSubmitFunction,
			url:false,
					
			
					
		}, // use default settings for add
		{
			width: 'auto',
			beforeShowForm:options.addBeforeShowFormFunction,
			afterShowForm:addAfterShowForm,
			recreateForm:true,
			closeAfterAdd: true,
			viewPagerButtons: false,
			onclickSubmit: options.addOnClickSubmitFunction
			
			
			
		}, // use default settings for del
		{
			width: 'auto',
			beforeShowForm:options.delBeforeShowFormFunction,
			afterShowForm:delAfterShowForm,
			recreateForm:true,
			closeAfterDel: true,
			viewPagerButtons: false,
			onclickSubmit: options.delOnClickSubmitFunction			
		},
		// delete instead that del:false we need this
		{multipleSearch:true}, // enable the advanced searching
		{closeOnEscape:true}  // allow the view dialog to be closed when user press ESC key
	);
}


	


function atencao(options)
{	
	if(!document.simpleModalId)
	{
		document.simpleModalId = 0;
	} 
	
	
	if(typeof options == "string")
	{
		options = {mensagem:options};
	}
	if($("#msgAlerta"+document.simpleModalId).exists())
	{		
		$("#msgAlerta"+document.simpleModalId).remove();
	}
	
	document.simpleModalId++;
	
	var cabecalho = "";
	if(options.cabecalho)
	{			
		cabecalho  = "<H3>" + options.cabecalho + "</H3>";
	}
	var conteudo = "<DIV class='msgAlerta' id='msgAlerta" + document.simpleModalId + "'>" + cabecalho + "<P>" +  options.mensagem  + "</P></DIV>";
	$("body").append(conteudo);
	$("#msgAlerta"+document.simpleModalId).modal();
}


/*
 * Cria modal resolvendo problema de quebra de funcionalidade do datapicker para modais.
 * Usar classe dateModal em vez de date.
 * Ex: gerarModal({seletor:'frmIncluir'});
 * */
function gerarModal(options)
{
	$(options.seletor).modal(options);

	$(options.seletor+" .dateModal").addClass("date");
	
	prepararData();

}

/*
 * Criar um Map com os parâmetros passados por GET
 * */

function pegaParametrosGet(window) {
	
	var url = window.location.href;
	var existeTarget = url.indexOf("#") >= 0;
	
	if (existeTarget) {
		url = url.substring(0, url.indexOf("#"));
	}	
	
	var aux = url.split("?");
	
	if (aux.length > 1) {
		var stringDeParametros = aux[1];
		var listaDeParametros = stringDeParametros.split("&");
		
		var chave;
		var valor;
		var parametros = new Object();
		
		for(var i=0; i < listaDeParametros.length; i++) {
			chave = listaDeParametros[i].split("=")[0];
			valor = listaDeParametros[i].split("=")[1];
			parametros[chave]=valor;
		}
		return parametros;
	}
	return null;
}

function removeAcentos(palavra) {
	var com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    var sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    var palavraSemAcento = '';
    
    for(i=0;i<palavra.length;i++) {
    	var letra = palavra[i];
    	var indiceAcento = com_acento.indexOf(letra);
    	if (indiceAcento > -1) {
    		palavraSemAcento += sem_acento[indiceAcento];
    	}
    	else {
    		palavraSemAcento+=letra;
    	}
    }
    
    return palavraSemAcento;
}


function telaImpressao(){
	var dfd = $.Deferred();
	dfd
	.done(preparaParaImpressao)
	.done(function() {
		 setTimeout(function (){

			 window.print();

         }, 500); 
		
    });
			
		
	dfd.resolve();

			
	
}

function exportarCSV(csvData,nomeArquivoCSV)
{

	$("#frmExportParaCSV").remove();
	
	var form= "<form id='frmExportParaCSV' method='post' action='" + contextPath + "/exportarCSV'> " +
			"<TEXTAREA id='stringCSV' name='stringCSV'></TEXTAREA> " + "<TEXTAREA id='nomeArquivoCSV' name='nomeArquivoCSV'> </TEXTAREA>" 
			" </form>";
	
	$("body").append(form);
	
	
	$("#stringCSV").text(csvData);
	$("#nomeArquivoCSV").text(nomeArquivoCSV);
	
	
	$("#frmExportParaCSV").submit();

	$("#frmExportParaCSV").remove();

}

function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? true: false;
}
