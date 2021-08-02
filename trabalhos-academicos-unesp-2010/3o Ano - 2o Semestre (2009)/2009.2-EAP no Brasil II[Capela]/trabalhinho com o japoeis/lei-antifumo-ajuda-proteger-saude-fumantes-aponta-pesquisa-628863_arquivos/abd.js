var FWA = {
	
	montaPaginacao2: function(tot,cod) {
		var pp = tot/15;
		if((tot%15) > 0) pp++;
		if(tot < 16){ pp=1; }	
		for(i=1;i<pp;i++){
			document.write("<a href=\""+ cod +"_comentarios"+ i +".shtml\" id=\"link"+i+"\">"+ i +"</a>");
			if(i < (pp)) {
				document.write(" &nbsp; "); 
			}
		}
		
		if(pp > 1) {
				var end = window.location.toString();
				var posicao = end.lastIndexOf("/");
				var prepara_nome = end.slice(posicao+1);
				var nome = prepara_nome.replace("#","");
				var arrumar = nome.replace(".shtml","");
				var pos = arrumar.indexOf("comentarios");
				var prepara2 = arrumar.slice(pos);
				var numero1 = prepara2.replace("comentarios","");
				var numero = parseInt(numero1);
	
				//alert(numero);
			
			document.getElementById("paginacao").style.display = "";
			
			
			if(numero>1){
				document.getElementById("ant").innerHTML = "<a href=\""+ cod +"_comentarios"+ (numero-1) +".shtml\">Anterior</a>";
			}else{
				document.getElementById("ant").innerHTML = "Anterior";
			}
			if(numero>=Math.ceil(pp)-1){
				document.getElementById("prox").innerHTML = "Próxima";
			}else{
				document.getElementById("prox").innerHTML = "<a href=\""+ cod +"_comentarios"+ (numero+1) +".shtml\">Próxima</a>";
			}
			
			document.getElementById("link"+numero1).className = "ativo";
			
		}
	},

	montaPaginacao: function(tot,cod) {
		var pp = tot/15;
		if((tot%15) > 0) pp++;
		if(tot < 16) pp=1;
		for(i=1;i<pp;i++){
			document.write("<a href=\""+ cod +"_comentarios"+ i +".shtml\">"+ i +"</a>");
			if(i < (pp)) {
				document.write(" &nbsp; "); 
			}
		}
		if(pp > 1) {
			document.getElementById("boxPaginacao").style.display = "";
		}
	},

	isEmail: function(email) {
	        var re = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i);
	        if (email.match(re)) {
			return (true);
		} else {
			return (false);
		}
	},

	isUrl: function(url) {
		var re = new RegExp(/^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/);
		if (url.match(re)) {
			return (true);
		} else {
			return (false);
		}
	},
	
	isLoginPassaporte: function() {
		var username = this.cookie('usuario');
		var ticket = this.cookie('usuario');
		if (username != null && ticket != null) {
			return true;
		}
		return false;
	},
	
	createQueryString: function (formObject,excludes) {
		var query = "";
		for (var i = 0; i < formObject.elements.length; i++) {
			var exclude = false;
			for(e in excludes){
				if(excludes[e] == formObject.elements[i].name){
					exclude = true;
				}
			}
			if(!exclude){
				if (i==0) {
					query = '?' + formObject.elements[i].name + '=' + formObject.elements[i].value;
				} else {
					query = query + '&' + formObject.elements[i].name + '=' + formObject.elements[i].value;
				}
			}
		}
		return (query);
	},
	
	cookie: function(name, value, options) {
	    if (typeof value != 'undefined') { // name and value given, set cookie
		options = options || {};
		if (value === null) {
		    value = '';
		    options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
		    var date;
		    if (typeof options.expires == 'number') {
			date = new Date();
			date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
		    } else {
			date = options.expires;
		    }
		    expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		// CAUTION: Needed to parenthesize options.path and options.domain
		// in the following expressions, otherwise they evaluate to undefined
		// in the packed version for some reason...
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	    } else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
		    var cookies = document.cookie.split(';');
		    for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) == (name + '=')) {
			    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
			    break;
			}
		    }
		}
		return cookieValue;
	    }
	}
};

FWA.forum = {
	postCapcha: function(formObject) {
		if(formObject.nome.value == '') {
			alert('Escreva o seu nome');
			return;
		}
		var email = formObject.email.value;
		if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
			email = "http://"+email;
		}
		if((!FWA.isEmail(email) && !FWA.isUrl(email)) && email.length > 0) {
			alert('Informe um email ou blog válido.');
			return;
		}
		if(formObject.comentario.value == '') {
			alert('Escreva o seu comentário');
			return;
		}
		if(!FWA.isLoginPassaporte()) {
			formObject.texto.value = "{'nome': '"+formObject.nome.value+"','email': '"+formObject.email.value+"','texto': '"+formObject.comentario.value.replace(/'/g,"\\'")+"'}";
		} else { formObject.texto.value = formObject.comentario.value; }

		var query = FWA.createQueryString(formObject,['comentario']);
		window.open('http://fwa.abril.com.br/fwa/captchaValidation.do'+query,'capcha','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=200');
	},
	
	printComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			document.write(values['texto'].replace(/\n/g,"<br/>"));
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	},
	
	printFormatedComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			var result = '';
			result += '<div class="subtitComentarios"><b>postado por ';
			if(values['email']!=''){
				var email = values['email'];
				if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
					email = "http://"+email;
				}			
				if(FWA.isEmail(email)){
					result += '<a href="mailto:'+values['email']+'">'+values['nome']+'</a>';
				} else if(FWA.isUrl(email)){
					result += '<a href="'+email+'" target="_blank">'+values['nome']+'</a>';
				} else {
					result += '<span class="lk">'+values['nome']+'</span>';
				}
			}else{
				result += '<span class="lk">'+values['nome']+'</span>';
			}
			result += '</b></div>';
			result += '<div class="txtComentario">'+values['texto'].replace(/\n/g,"<br/>")+'</div>';
			document.write(result);
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	}
	
};


FWA.blog = {
	postCapcha: function(formObject) {

		if(formObject.nome.value == '') {
			alert('Escreva o seu nome');
			return;
		}
		var email = formObject.email.value;
		if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
			email = "http://"+email;
		}
		if((!FWA.isEmail(email) && !FWA.isUrl(email)) && email.length > 0) {
			alert('Informe um email ou blog válido.');
			return;
		}
		if(formObject.comentario.value == '') {
			alert('Escreva o seu comentário');
			return;
		}
		if(!FWA.isLoginPassaporte()) {
			formObject.texto.value = "{'nome': '"+formObject.nome.value+"','email': '"+formObject.email.value+"','texto': '"+formObject.comentario.value.replace(/'/g,"\\'")+"'}";
		} else { formObject.texto.value = formObject.comentario.value.replace("'","\'"); }
		
		var urlRetorno = window.location.href;
		formObject.urlRetorno.value = urlRetorno.substr(urlRetorno.indexOf("?")+1,urlRetorno.length);

		var query = FWA.createQueryString(formObject,['comentario']);
		window.open('http://fwa.abril.com.br/fwa/captchaValidation.do'+query,'capcha','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=200');
	},
	
	printComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			document.write(values['texto'].replace(/\n/g,"<br/>"));
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	},
	
	printFormatedComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			var result = '';
			result += '<div class="subtitComentarios"><b>postado por ';
			if(values['email']!=''){
				var email = values['email'];
				if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
					email = "http://"+email;
				}			
				if(FWA.isEmail(email)){
					result += '<a href="mailto:'+values['email']+'">'+values['nome']+'</a>';
				} else if(FWA.isUrl(email)){
					result += '<a href="'+email+'" target="_blank">'+values['nome']+'</a>';
				} else {
					result += '<span class="lk">'+values['nome']+'</span>';
				}
			}else{
				result += '<span class="lk">'+values['nome']+'</span>';
			}
			result += '</b></div>';
			result += '<div class="txtComentario">'+values['texto'].replace(/\n/g,"<br/>")+'</div>';
			document.write(result);
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	},
	
	permalink : function() {
		var qs = window.location.href.split("?");
		var post_id = qs[1];
		if(post_id && !isNaN(post_id)){
			var posts = $("#blog .post");
			for(i=0;i<posts.length;i++) {
				var obj = $(posts[i]);
				if(obj.attr('id') != "postn_"+post_id){
					obj.hide();
				}
			}
			$("#espalhe-306").show();
		}
	}
	
};


FWA.materia = {
	
	totalComment: 0,
	
	postCapcha: function(formObject) {

		if(formObject.nome.value == '') {
			alert('Escreva o seu nome');
			return;
		}
		var email = formObject.email.value;
		if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
			email = "http://"+email;
		}
		if((!FWA.isEmail(email) && !FWA.isUrl(email)) && email.length > 0) {
			alert('Informe um email ou blog válido.');
			return;
		}
		if(formObject.comentario.value == '') {
			alert('Escreva o seu comentário');
			return;
		}
		if(!FWA.isLoginPassaporte()) {
			formObject.texto.value = "{'nome': '"+formObject.nome.value+"','email': '"+formObject.email.value+"','texto': '"+formObject.comentario.value.replace(/'/g,"\\'")+"'}";
		} else { formObject.texto.value = formObject.comentario.value.replace("'","\'"); }
		
		var urlRetorno = window.location.href;
		formObject.urlRetorno.value = urlRetorno.substr(urlRetorno.indexOf("?")+1,urlRetorno.length);

		var query = FWA.createQueryString(formObject,['comentario']);
		window.open('http://fwa.abril.com.br/fwa/captchaValidation.do'+query,'capcha','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=200');
	},
	
	printComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			document.write(values['texto'].replace(/\n/g,"<br/>"));
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	},
	
	printFormatedComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			var result = '';
			result += '<div class="subtitComentarios"><b>postado por ';
			if(values['email']!=''){
				var email = values['email'];
				if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
					email = "http://"+email;
				}			
				if(FWA.isEmail(email)){
					result += '<a href="mailto:'+values['email']+'">'+values['nome']+'</a>';
				} else if(FWA.isUrl(email)){
					result += '<a href="'+email+'" target="_blank">'+values['nome']+'</a>';
				} else {
					result += '<span class="lk">'+values['nome']+'</span>';
				}
			}else{
				result += '<span class="lk">'+values['nome']+'</span>';
			}
			result += '</b></div>';
			result += '<div class="txtComentario">'+values['texto'].replace(/\n/g,"<br/>")+'</div>';
			document.write(result);
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	},
	
	getTotalComment: function() {
		return this.totalComment;
	},
	
	incrementComment: function() {
		this.totalComment++;
	},
	
	pagination: function(page){
		var numberForPages = 5;
		var numberTotalPages = Math.ceil(this.totalComment / numberForPages);
		var pageShow = (page == null)?0:page;
		
		for(i=0;i<this.totalComment;i++){
			$("#boxComentarios #comentario_"+(i+1)).hide();
		}
		
		for(i=pageShow;i<(pageShow+numberForPages);i++){
			$("#boxComentarios #comentario_"+(i+1)).show();
		}
		
		var pages = '<div id="boxPaginacao" class="paginacao"><table class="pag_box" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td class="esq">&nbsp;</td><td class="cen">Página &nbsp;';
		
		for(i=0;i<numberTotalPages;i++){
			
			if((i*numberForPages) == pageShow){
				pages += "<b>"+(i+1)+"</b>";
			} else {
				pages += "<a href='javascript:FWA.materia.pagination("+(i*numberForPages)+");void(0);'>"+(i+1)+"</a>";
			}
			
			if(i < (numberTotalPages - 1)){
				pages += " | ";
			}
		}
		
		pages += '</td><td class="dir">&nbsp;</td></tr></tbody></table></div>';
		
		$("#boxComentarios #materia_paginacao").html(pages);
	}
	
};

FWA.fotolog = {
	postCapcha: function(formObject) {

		if(formObject.nome.value == '') {
			alert('Escreva o seu nome');
			return;
		}
		var email = formObject.email.value;
		if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
			email = "http://"+email;
		}
		if((!FWA.isEmail(email) && !FWA.isUrl(email)) && email.length > 0) {
			alert('Informe um email ou blog válido.');
			return;
		}
		if(formObject.comentario.value == '') {
			alert('Escreva o seu comentário');
			return;
		}
		if(!FWA.isLoginPassaporte()) {
			formObject.texto.value = "{'nome': '"+formObject.nome.value+"','email': '"+formObject.email.value+"','texto': '"+formObject.comentario.value.replace(/'/g,"\\'")+"'}";
		} else { formObject.texto.value = formObject.comentario.value.replace("'","\'"); }
		
		var urlRetorno = window.location.href;
		formObject.urlRetorno.value = urlRetorno.substr(urlRetorno.indexOf("?")+1,urlRetorno.length);

		var query = FWA.createQueryString(formObject,['comentario']);
		window.open('http://fwa.abril.com.br/fwa/captchaValidation.do'+query,'capcha','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=200');
	},
	
	printComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			document.write(values['texto'].replace(/\n/g,"<br/>"));
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	},
	
	printFormatedComment: function(data){
		data = data.replace(/\n/g,"<br/>");
		var re = new RegExp("^\{.*?\}$");
		if(data.match(re)){
			var values = eval('['+data+']')[0];
			var result = '';
			result += '<div class="subtitComentarios"><b>postado por ';
			if(values['email']!=''){
				var email = values['email'];
				if((email.indexOf("http") == -1 && email.indexOf("@") == -1 && !FWA.isEmail(email)) && email.length > 0) {
					email = "http://"+email;
				}			
				if(FWA.isEmail(email)){
					result += '<a href="mailto:'+values['email']+'">'+values['nome']+'</a>';
				} else if(FWA.isUrl(email)){
					result += '<a href="'+email+'" target="_blank">'+values['nome']+'</a>';
				} else {
					result += '<span class="lk">'+values['nome']+'</span>';
				}
			}else{
				result += '<span class="lk">'+values['nome']+'</span>';
			}
			result += '</b></div>';
			result += '<div class="txtComentario">'+values['texto'].replace(/\n/g,"<br/>")+'</div>';
			document.write(result);
		} else {
			document.write(data.replace(/\n/g,"<br/>"));
		}
	}
	
};

$(document).ready(function(){
	FWA.blog.permalink();	
});



