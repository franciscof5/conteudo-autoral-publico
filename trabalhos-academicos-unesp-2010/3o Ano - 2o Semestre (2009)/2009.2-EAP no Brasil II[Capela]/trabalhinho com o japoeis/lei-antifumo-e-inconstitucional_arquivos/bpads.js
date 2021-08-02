<!--
//'
//"
function buscapeads_append_param(nome, value) {
  buscapeads_param += (value != "") ? "&" + nome + "=" + value  : "";
}
function buscapeads_append_item_regiao(value, limite){
	for(var i=limite; i>value.length; i--){
    buscapeads_regiao += "0";
  }
  buscapeads_regiao += value;
}
function aceitaCookie(){
  var varcookie = document.cookie;
  document.cookie='testAccept=1';
  varcookie = document.cookie;
  var index = varcookie.indexOf('testAccept=');
  if(index == -1){
    return "0";
  }else{
    return "1";
  }
}

//function buscapeads_track(type) {
//  document.writeln("<img src="imagem/1x1.gif?cd=" + type + "" alt="Tracking..." border="0" width="1" height="1" />");
//}

// Verify required parameters
//if (buscapeads_afiliado == "") {
//  buscapeads_afiliado = "0";
//}
//if (buscapeads_site_origem == "") {
//  buscapeads_site_origem = "0";
//}
//if (buscapeads_vitrine_vers == "") {
//  buscapeads_vitrine_vers = "0.99";
//}

buscapeads_param += "id=" + buscapeads_afiliado;
buscapeads_append_param ("tc", buscapeads_tipo_cliente);
buscapeads_append_param ("pr", buscapeads_pr);
buscapeads_append_param ("vl", buscapeads_vitrine_local);

buscapeads_append_param ("so", buscapeads_site_origem);

buscapeads_append_param ("xn", buscapeads_extra_nome);
buscapeads_append_param ("xv", buscapeads_extra_valor);
buscapeads_append_param ("xu", removeEComercial(buscapeads_extra_url));

buscapeads_append_param ("vr", buscapeads_vitrine_vers);
buscapeads_append_param ("ac", aceitaCookie());

buscapeads_x      = buscapeads_formato.indexOf("x");
buscapeads_width  = buscapeads_formato.substr(0, buscapeads_x);
buscapeads_height = buscapeads_formato.substr(buscapeads_x + 1);
buscapeads_append_param ("wh", buscapeads_width);
buscapeads_append_param ("ht", buscapeads_height);
buscapeads_append_param ("cn", buscapeads_tipo_canal);
buscapeads_append_param ("cg", buscapeads_categorias);
buscapeads_append_param ("ex", buscapeads_excluir);
buscapeads_append_param ("pu", buscapeads_prod_unico);
buscapeads_append_param ("ab", buscapeads_abrangencia);

buscapeads_append_param ("lc", buscapeads_idioma+"-"+buscapeads_pais);
buscapeads_append_item_regiao(buscapeads_area,2);
buscapeads_append_item_regiao(buscapeads_cep,8);
buscapeads_append_item_regiao(buscapeads_estado,2);
buscapeads_append_item_regiao(buscapeads_cidade,7);
buscapeads_append_item_regiao(buscapeads_bairro,7);
buscapeads_append_param ("rg", buscapeads_regiao);

buscapeads_append_param ("cor", buscapeads_cores);

buscapeads_append_param ("kwt", buscapeads_txt_keyword);
buscapeads_append_param ("kwi", buscapeads_id_keyword);

buscapeads_dominio = "http://vitrine.buscape.";
buscapeads_dominio_pais = buscapeads_pais.toLowerCase();
buscapeads_dominio += ((buscapeads_dominio_pais=="cl")?"":"com.")+buscapeads_dominio_pais;

// Output contents
buscapeads_limitHeigth = 4;
buscapeads_limitHeigth += parseInt (buscapeads_height);
document.writeln("<ifra" + "me src=\"" + buscapeads_dominio + buscapeads_src +"?"+ buscapeads_param + "\" ");
document.writeln("  width=\"" + buscapeads_width + "\" height=\"" + buscapeads_limitHeigth + "\" ");
document.writeln("  marginwidth=\"0\" marginheight=\"0\" ");
document.writeln("  frameborder=\"0\" frameSpacing=\"0\" ");
document.writeln("  cellSpacing=\"0\" cellPadding=\"0\" ");
document.writeln("  scrolling=\"no\" noResize>");
//buscapeads_track("sem_suporte_iframe");
document.writeln("</ifra" + "me>");
// -->


function removeEComercial(txt_url){ 
	var url_retorno = new String(txt_url);
	var i;
	var char_code = "&";
	var index = url_retorno.indexOf(char_code, 0);
	while( index >=0 ){
		url_retorno = url_retorno.replace(char_code, "%26" );
		index = url_retorno.indexOf(char_code, 0);
	}
	return url_retorno;
}