//Configuração:
//Geral
afc_div_width = 230;
afc_div_padding = '0px 10px 10px 0';
afc_div_margin = '0px 10px 0px 0';
afc_div_background_color = 'FAFAFA';
afc_div_border = 0;
afc_div_border_color = '335F72';
afc_div_float = 'left';
afc_div_font_size = 10;
afc_div_fonte = 'verdana';


// Titulo "Links patrocinados"
afc_tit_texto = 'Links Patrocinados';
afc_tit_fonte = 'verdana';
afc_tit_fonte_cor = '4B4B4B';
afc_tit_tam_fonte = 10;
afc_tit_fonte_estilo = 'bold';
afc_tit_fonte_line_height = 10;
afc_tit_margin = 0;
afc_tit_text_align = 'left';

// <ul>
afc_ul_padding = 0;
afc_ul_margin = 0;
afc_ul_border = 0;
afc_ul_list_style = 'none';

// <li>
afc_li_padding = '8px 0px 0px 10';

//linha 1 
afc_lin1_font = 'verdana';
afc_lin1_font_size = 11;
afc_lin1_font_weight = 'bold';
afc_lin1_font_height = 14;
afc_lin1_color = '000000';
afc_lin1_margin = 0;
afc_lin1_text_decoration = 'underline';
afc_lin1_border = 0;
afc_lin1_line_height = 14;
afc_lin1_height = 14;
afc_lin1_padding = '0px 0px 3px 0';

//linha 2
afc_lin2_font = 'verdana';
afc_lin2_font_size = 11;
afc_lin2_font_weight = 'normal';
afc_lin2_line_height = 14;
afc_lin2_color = '000000';
afc_lin2_margin = 0;
afc_lin2_text_decoration = 'none';

//linha 3
afc_lin3_font = 'verdana';
afc_lin3_font_size = 11;
afc_lin3_font_weight = 'normal';
afc_lin3_line_height = 15;
afc_lin3_color = '335F72';
afc_lin3_text_decoration = 'none';
afc_lin3_margin = 0;

//funcoe auxiliares

function google_ad_request_done(google_ads) {
	if (google_ads.length == 0) {
		return;
	}
	//Criação da DIV
	var s = '<div id="afc_links" style="float:'+afc_div_float+' !important; width:'+afc_div_width+'px; background-color:#'+afc_div_background_color+'; border:'+afc_div_border+'px solid #'+afc_div_border_color+'; padding:'+afc_div_padding+'px; clear:both;  font-size:'+afc_div_font_size+'px; margin:'+afc_div_margin+'px; font:'+afc_div_fonte+';">';
		
	if (google_ads[0].type == "text") {
		s += '<h4 class="tit" style="background-color:#'+afc_div_background_color+'!important;">'+afc_tit_texto+'</h4>';
		s += '<ul style="padding:'+afc_ul_padding+'px; margin:'+afc_ul_margin+'px; border:'+afc_ul_border+'px; list-style:'+afc_ul_list_style+'; ;">';
		if (google_ads.length > 0) {
			for(i=0; i < google_ads.length; ++i) {
				s+=
				// Primeira linha do Anúncio
				'<li style="list-style:none ; padding:'+afc_li_padding+'px ;">'+'<h4 style="';
				if (i==0){afc_lin1_margin = '22px 0px 0px 0px !important;';}else{afc_lin1_margin ='0';}
				s+= 'background-color:#'+afc_div_background_color+'!important; margin:'+afc_lin1_margin+'px ; border:'+afc_lin1_border+'px ; padding:'+afc_lin1_padding+'px ; line-height:'+afc_lin1_line_height+'px ; height:'+afc_lin1_height+'px ;"><a style=" background-color:#'+afc_div_background_color+'!important; font-family:'+afc_lin1_font+' ; font-size:'+afc_lin1_font_size+'px ; font-weight:'+afc_lin1_font_weight+' ; font-height:'+afc_lin1_font_height+'px ; color:#'+afc_lin1_color+' ; text-decoration:'+afc_lin1_text_decoration+' ;" href="'+google_ads[i].url+'">'+google_ads[i].line1+'</a></h4>'+
					// Texto do Anúncio
					'<p style="font-family:'+afc_lin2_font+' ; font-size:'+afc_lin2_font_size+'px ; font-weight:'+afc_lin2_font_weight+' ; line-height:'+afc_lin2_line_height+'px ; color:#'+afc_lin2_color+' ; margin:'+afc_lin2_margin+'px ; text-decoration:'+afc_lin2_text_decoration+';">' + google_ads[i].line2 + '<br/> ' + google_ads[i].line3 + '</p>'+
					// Link final do Anúncio
					'<p style="font-family:'+afc_lin3_font+'; font-size:'+afc_lin3_font_size+'px; font-weight:'+afc_lin3_font_weight+'; line-height:'+afc_lin3_line_height+'px; margin:'+afc_lin3_margin+'px;"><a style="color:#'+afc_lin3_color+'; text-decoration:'+afc_lin3_text_decoration+' ;" href="'+google_ads[i].url+ '">'+google_ads[i].visible_url+ 
					'</a></p></li>';
			}
		} 
		s += '</ul>';
	}
	s += '</div>';
	document.write(s);
	
}

google_ad_client = 'ca-abril_js';
google_ad_channel = 'abd, abrilcom, abrilcom_contexto';
google_ad_output = 'js';
google_max_num_ads = '3';
google_ad_type = 'text';
google_encoding = 'iso-8859-1';
google_safe = 'high';
google_adtest = 'off'; //producao