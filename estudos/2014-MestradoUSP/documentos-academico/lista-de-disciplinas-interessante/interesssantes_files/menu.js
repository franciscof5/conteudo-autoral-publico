
var menu = {carregarMenusFixos:null,menus:null}

var bloqueado = false;

var versaoMenu = "menuv24";

var debug = false;

$(document).ready(loadMenu);

function log(message)
{
	try
	{
		if(debug)
		{
			console.log(message);
		}
	}
	catch(err){}
}

function erroDWR(msg, exc) {
	if(!exc.errorCode)
	{
		log("O servidor está demorando muito para responder, tente novamente mais tarde");
		return;
	}
	log("[" + exc.errorCode + "] - " + msg );
}

function loadMenu()
{

	log("loadMenu:350");
	Permissao.buscarPermissoesNegadas({
	  callback: retBuscarPermissoesNegadas,
	  timeout:30000,
	  errorHandler:erroDWR
	});

	//carrega o loginBean
	Permissao.getRenderBean({
  		  callback: retGetRenderBean,
		  timeout:30000,
		  errorHandler:erroDWR
		});
	log("loadMenu:490");
}		 

function retGetRenderBean(data)
{
	am(data);
	versaoMenu = versaoMenu+"-"+data.loginBean.nusp+"-"+data.loginBean.nivel;
	menu.menus = $.cookie(versaoMenu);
	
	$("#menu .subMenu").hide();
	$("#menu .subItem").hide();
	
	carregarMenusAbertos();
	
	if(menu.carregarMenusFixos)
	{
		menu.carregarMenusFixos();
	}
	
	$(".loader").remove();
	$(".main").css("display","inline");
}

function carregarMenusAbertos()
{
	if(!menu.menus)
	{
		return;	
	}

	var keys = menu.menus.split(";");			

	for(var cont=0; cont < keys.length;cont++)
	{
		var parts = keys[cont].split("-");
		
		esconderMostrarSubAlgo(parts[0],parts[1]);
		bloqueado = false;				 
	}

}


function carregarMenuFixo(menu)
{
	$("#lbl" + menu).html("");
	$("#lbl" + menu).css("padding-left","12px");
	$("#sub" + menu).show();
	$("#" + menu).css("cursor","default");
	$("#" + menu).attr("onclick","");

}

function desbloquear()
{
	bloqueado = false;
}

function esconderMostrarSubMenu(id)
{
	esconderMostrarSubAlgo(id,"sub");
}

function esconderMostrarSubItem(id)
{
	esconderMostrarSubAlgo(id,"subItem");
}

function openMenu(id,algo)
{
	
	var key = id+"-"+algo;
	
	if(!menu.menus)
	{
		menu.menus = key;
	}
	else
	{
		if(menu.menus.indexOf(key)==-1)
		{
			menu.menus = menu.menus + ";" + key;
		}
	}
	$.cookie(versaoMenu,menu.menus, { path: '/' });
}

function closeMenu(id,algo)
{
	if(!menu.menus)
	{
		return;
	}
	var key = id+"-"+algo;
	if(menu.menus.indexOf(key)==-1)
	{
		return;
	}
	var keys = menu.menus.split(";");
	var newMenu = null;
	for(var cont=0; cont < keys.length;cont++)
	{
		if(keys[cont]==key)
		{
			continue;
		}
		
		if(!newMenu)
		{
			newMenu = keys[cont];
		}
		else
		{
			newMenu = newMenu  + ";" +keys[cont];
		}
	}
	menu.menus = newMenu;
	
	$.cookie(versaoMenu,menu.menus, { path: '/' });
}

function esconderMostrarSubAlgo(id,algo)
{
	if(bloqueado)
	{
		return;
	}
	
	var value = $("#lbl"+id).html();
	if(value=="+")
	{
		openMenu(id,algo);
		$("#lbl"+id).html("-")
	}
	else
	{
		closeMenu(id,algo);
		$("#lbl"+id).html("+")
	}
	esconderMostrar(algo+id);
}

function esconderMostrar(id)
{
	if(bloqueado)
	{
		return;
	}
	else
	{
		bloqueado = true;
	}
	
	if($("#" + id ).is(":visible"))
	{
		$("#" + id).hide();				
	}
	else
	{
		$("#" + id).show();
	}
	setTimeout("desbloquear()",200);
}



function gotoAction(action)
{
	$("#menuForm\\:nextAction").val(action);			
	$("#menuForm\\:redirect").trigger('click');
}

function retBuscarPermissoesNegadas(permissoes)
{
	if(!permissoes)
	{
		$(".main").remove();
		return;
	}
	
	for(var cont =0 ; cont < permissoes.length;cont++)
	{
		$("#" + permissoes[cont].nome).remove();
		$("#m" + permissoes[cont].nome).remove();
		}			 
	}
  