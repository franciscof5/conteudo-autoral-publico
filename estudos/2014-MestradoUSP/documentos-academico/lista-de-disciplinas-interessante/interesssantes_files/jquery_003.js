var onBuscaExata = null;
var onBuscaRapida = null;

(function($){
	/*******************************************************************************************/	
	// jquery.buscarPessoa.js - version 0.1
	// A jQuery plugin for search user in USP database
	// Author: Edson Vicente Carli Junior
	// Created: 2012-01-26 | Updated: 2012-01-26
	// $.buscarPessoa({callback:onSelecionarUsuario});
	//  function onSelecionarUsuario(index,usuario)
	// {
	//    alert(usuario.codpes)
	//    alert(usuario.nompes)
	//    alert(usuario.nivel)
	// }
	// Dependências jquery-ui.js, jquery-jqGrid.js, jquery-exists.js,jquery-simplemodal.js, Permissao.java
	//
	/*******************************************************************************************/
	$.buscarPessoa = function(options){


			
		if(!options || !options.callback)
		{
			alert("Callback é obrigatório!");
			return;
		}
 	 	
	 	var retCellSelect = function(rowID)
	 	{
	 		
	 		var options = $("#buscaUsuario").data("options");
	 		var usuario = $("#listUsuariosBusca").jqGrid('getRowData',rowID);
	 		options.callback(rowID,usuario);
	 		$.modal.close();
	 	}
	 	

		var retUsuarioBusca = function (data){
			
			if(!data)
			{
				data = [];
			}
			
			
			var isLista = data.length != undefined;
			
			if(!isLista)
			{
				data=[data];
			}
			
			
	 		var colNames = ['Nusp','Nível','Nome'];
	 		
	 		var optHidden = (options.ocultarNivel)?true:false;
	 		
			var colModel = [
			      		        {name:'codigoPessoa',width:60},
			    		        {name:'nivel',width:30,hidden:optHidden},
			    		        {name:'nome',width:395}];
			
			
			
	 		var opt =
	 			{
	 				lista:data,
	 				seletorTabela:"#listUsuariosBusca", 
	 				seletorRodape:"#listUsuariosBuscaRodape",
	 				colNamesValues:colNames,
	 				colModelValues:colModel,
	 				onRowSelectFunction:retCellSelect
	 			};
	 		
			montarGrid(opt);
			$("#buscaUsuario .loader").hide();
			$("#listUsuariosBusca").show();
		
	 	};
	 	
	 	var optionsDWR = {
				callback:retUsuarioBusca,
				timeout:30000,
				errorHandler:erroDWR
				};
	 	
		
	 	var resolveBuscaPorNUSP = function ()	 	
	 	{
	 		var options = $("#buscaUsuario").data("options");
	 		$("#gbox_listUsuariosBusca").hide();
	 		$("#buscaUsuario .loader").show();
	 		
 			if(isNaN($("#txtNusp").val())){
 				$("#listUsuariosBusca").html("");
 				return;
 			}
 			
			var buscarNiveisSecundarios = options.incluirNiveisSecundarios==true;
 			
 			
	 		if(options.somenteAlunos)
			{
				Aluno.buscarAtivoPorNusp($("#txtNusp").val().trim(),optionsDWR);
			}
			else if(options.somenteOrientadores)
			{

				Permissao.orientadorPorNusp($("#txtNusp").val().trim(),optionsDWR);
			}
			else if(options.somenteUsuarios)
			{
				//ja corrigido para multiníveis
				Permissao.usuarioPorNusp($("#txtNusp").val().trim(),buscarNiveisSecundarios,optionsDWR);
			}
			else
			{
				Permissao.pessoaPorNusp($("#txtNusp").val().trim(),optionsDWR);
			}	 
	 	}
	 	
		onBuscaRapida = function ()
	 	{
			var options = $("#buscaUsuario").data("options");
			
			$("#buscaUsuario .loader").show();
			$("#gbox_listUsuariosBusca").hide();
			
	 		if($("#txtNome").val())
	 		{

 				if(options.somenteAlunos)
 				{
 					Aluno.listarAtivoPorNomeFonetico($("#txtNome").val(),optionsDWR);
 				}
 				else if(options.somenteOrientadores)
 				{

		 			Permissao.orientadorPorNomeFonetico($("#txtNome").val(),optionsDWR);
 				}
 				else if(options.somenteUsuarios)
 				{

		 			Permissao.usuarioPorNomeFonetico($("#txtNome").val(),optionsDWR);
 				}
 				else
 				{
 					Permissao.pessoaPorNomeFonetico($("#txtNome").val(),optionsDWR);
 				}
	 			
	 		}
	 		else if($("#txtNusp").val()) 
	 		{
	 			resolveBuscaPorNUSP();	 			
	 		}
	 		else{
	 			alert("Favor preencher o NUSP ou o Nome");
	 			$("#buscaUsuario .loader").hide();
	 		}
	 	};
	 
		onBuscaExata =  function ()
	 	{	
			var options = $("#buscaUsuario").data("options");
			
			$("#buscaUsuario .loader").show();
			$("#gbox_listUsuariosBusca").hide();
			
			
	 		if($("#txtNome").val())
	 		{
	 			
 				if(options.somenteAlunos)
 				{

 					Aluno.listarAtivoPorNomeExato($("#txtNome").val(),optionsDWR);
 				}
				else if(options.somenteOrientadores)
 				{

		 			Permissao.orientadorPorNomeExato($("#txtNome").val(),optionsDWR);
 				}
				else if(options.somenteUsuarios)
 				{

		 			Permissao.usuarioPorNomeExato($("#txtNome").val(),optionsDWR);
 				}
 				else
 				{
		 			Permissao.pessoaPorNomeExato($("#txtNome").val(),optionsDWR);
 				}
	 		}
	 		else if($("#txtNusp").val()) 
	 		{ 				
	 			resolveBuscaPorNUSP();	
 			
	 		}
	 		else{
	 			alert("Favor preencher o NUSP ou o Nome");
	 			$("#buscaUsuario .loader").hide();
	 		}
	 	};
		
		var selector = this.selector;

		if(!$("#buscaUsuario").exists())
		{	
			$("body").append("<div id='buscaUsuario'><H3 id='nomeBusca'>Busca de usuário:</H3> " +
					' <label for="txtNusp">Nusp:</label><input id="txtNusp" value="" type="text" onkeypress="return validaEnter(event)" />' +
					'<label for="txtNome" class="startLine">Nome:</label><input id="txtNome" value="" type="text" onkeypress="return validaEnter(event)"/> ' +
					' <div id="buscaUsuariosAcoes"> ' +
					' <input type="button" value="Busca Fonetica" id="cmdBuscaRapida"/>' +
					' <input type="button" value="Busca Exata" id="cmdBuscaExata"/>' +
					' </div> ' +
					' <IMG class="loader" src="'  + contextPath + '/imagens/ajax-loader.gif" title="carregando..." alt="carregando..." />' +
					' <TABLE id="listUsuariosBusca" ></TABLE>' +
					'<div id="listUsuariosBuscaRodape"></div>' +
					'</div>');
			$("#cmdBuscaRapida").bind({click:onBuscaRapida});
			$("#cmdBuscaExata").bind({click:onBuscaExata});			
			criaQuebraLinhas();
		}
		
		$("#listUsuariosBusca").html("");
		
		if(options.somenteAlunos)
		{
			$("#nomeBusca").html("Buscar aluno:");
		}
		else if(options.somenteOrientadores)
		{
			$("#nomeBusca").html("Buscar orientador:");
		}
		else if(options.somenteUsuarios)
		{
			$("#nomeBusca").html("Buscar usuário:");
		}
		else
		{
			$("#nomeBusca").html("Buscar pessoa:");
		}
		
		$("#buscaUsuario").data("options",options);
		
		$('#buscaUsuario').modal({width:450});
	 
		
		
	}
	
})(jQuery);

function validaEnter(e)
{
	var keynum
	var keychar
	var numcheck

	if(window.event) // IE
	{
		keynum = e.keyCode
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		keynum = e.which
	}

	if(keynum==13)
	{
		onBuscaRapida();
	}
	
	return true;
}