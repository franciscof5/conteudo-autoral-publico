//Validação de ContatoEmail
function validacao_contato_email(nmform) {
	var nome = document.getElementById('contato_nome').value;
	var email = document.getElementById('contato_email').value;
	
	//Consiste NOME (vazio)
	nome = nome.replace(' ', '');
	if (!nome || nome=='') {
		alert("O CAMPO NOME ESTÁ EM BRANCO\n\nPREENCHA CORRETAMENTE!");
		return false;
	}
	
	//Consiste EMAIL (vazio)
	var xemail = email.replace(' ', '');
	if (!xemail || xemail=='') {
		alert("O CAMPO E-MAIL ESTÁ EM BRANCO\n\nPREENCHA CORRETAMENTE!");
		return false;
	}
	
	//Consiste EMAIL (quatidade mínima de caracteres)
	if (email.length < 5) {
		alert("O CAMPO E-MAIL É INVÁLIDO\n\nPREENCHA CORRETAMENTE!");
		return false;
	}
	
	//Consiste EMAIL (.)
	if (email.indexOf('.') < 0) {
		alert("O CAMPO E-MAIL É INVÁLIDO\n\nNÃO CONTÉM PONTO ( . )\n\nPREENCHA CORRETAMENTE!");
		return false;
	}
	
	//Consiste EMAIL (@)
	if (email.search('@') < 0) {
		alert("O CAMPO E-MAIL É INVÁLIDO\n\nNÃO CONTÉM O SÍMBOLO @\n\nPREENCHA CORRETAMENTE!");
		return false;
	}
	
	//Consiste EMAIL ( )
	if (email.search(' ') >= 0) {
		alert("O CAMPO E-MAIL É INVÁLIDO\n\nNÃO PODE CONTER ESPAÇOS\n\nPREENCHA CORRETAMENTE!");
		return false;
	}
	
	//Consiste Email (Caracteres Válidos)
	var i, j;
	var arroba = 0;
	var provedor = 0;
	var email_char = false;
	var arr_char = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
							 'v','x','w','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
							 'Q','R','S','T','U','V','X','W','Y','Z','0','1','2','3','4','5','6','7','8','9',
							 '.','_','-','@');
	
	for (i=0; i<email.length; i++) {
		for (j=0; j<arr_char.length; j++) {
			if (email.charAt(i)==arr_char[j]) {
				email_char = true;
				break;
			}
		}
		
		if (i<3 && email.charAt(i)=='@') email_char=false;
		if (provedor>0) {
			if (email.charAt(i)=='.' && provedor<4) email_char=false;
			provedor++;
		}
		
		if (email.charAt(i)=='@') {
			arroba++;
			provedor++;
		}
		if (!email_char || arroba>1) {
			alert("O CAMPO E-MAIL É INVÁLIDO\n\nVERIFIQUE SEU E-MAIL COM ATENÇÃO\n\nPREENCHA CORRETAMENTE!");
			return false;
		}
		email_char = false;
	}
	
	arr_char = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
						 'v','x','w','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
						 'Q','R','S','T','U','V','X','W','Y','Z');
	email_char = false;
	for (i=1; i<3; i++) {
		for (j=0; j<arr_char.length; j++) {
			if (email.charAt((email.length - i))==arr_char[j]) {
				email_char = true;
				break;
			}
		}
		if (!email_char) {
			alert("O CAMPO E-MAIL É INVÁLIDO\n\nVERIFIQUE SEU E-MAIL COM ATENÇÃO\n\nPREENCHA CORRETAMENTE!");
			return false;
		}
		email_char = false;
	}
	 
	document.getElementById(nmform).submit();
}