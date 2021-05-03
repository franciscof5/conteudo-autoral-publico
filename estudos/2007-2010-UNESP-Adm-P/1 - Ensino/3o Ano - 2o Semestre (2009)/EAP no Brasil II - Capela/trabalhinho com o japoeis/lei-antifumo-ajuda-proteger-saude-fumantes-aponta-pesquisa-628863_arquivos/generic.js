function fwa_player(A, E, G, D, F){
    if ((G != null) && (G != 0)) {
        if ((D == null) || (D == "")) {
            D = "player_padrao"
        }
        F = (F != null) ? "&nomLat=" + F : "";
        var C = "/player/" + D + ".shtml?CtrlMidia=" + E + "&CodMid=" + A + "&SeqMid=" + G + F;
        var B = window.open(C, "PopEnviar", "width=495,height=560,left=0,top=0");
        B.focus()
    }
    else {
        location.href = "http://cdn.ticbrasil.com.br/get_pointer.aspx?MMEDIA=" + A
    }
}

function fwa_player2(A, C, E, B, D){
    window.open("http://cdn.ticbrasil.com.br/get_pointer.aspx?MMEDIA=" + A)
}

function abrepopup(D, C, B){
    window.open(D, "AbrilComPopup", "scrollbars=yes,resizable=no,width=" + C + ",height=" + B)
}

function mudaClass(A){
    if (A.className == "") {
        A.className = "open"
    }
    else {
        if (A.className == "open") {
            A.className = ""
        }
    }
}

var os;
if (document.layers) {
    os = "n4"
}
else {
    if (document.getElementById && !document.all) {
        os = "n6"
    }
    else {
        if (document.all) {
            os = "ie"
        }
    }
}
function bookmark(){
    var C = document.title;
    var A = document.location.href;
    if (window.sidebar) {
        window.sidebar.addPanel(C, A, "")
    }
    else {
        if (window.opera && window.print) {
            var B = document.createElement("a");
            B.setAttribute("href", A);
            B.setAttribute("title", C);
            B.setAttribute("rel", "sidebar");
            B.click()
        }
        else {
            if (os == "ie") {
                window.external.AddFavorite(A, C)
            }
        }
    }
}

function tiraAcento(text) {
  text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
  text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
  text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
  text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
  text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
  text = text.replace(new RegExp('[Ç]','gi'), 'C');
  return text;
}

function addRSS(A, B){
    if (B == "") {
        B = "http://www.abril.com.br/noticias/geral/rss.xml"
    }
    if (B != "") {
        switch (A) {
            case "netvibes":
                window.open("http://www.netvibes.com/subscribe.php?url=" + B, "wAddRSS");
                break;
            case "igoogle":
                window.open("http://fusion.google.com/add?feedurl=" + B, "wAddRSS");
                break;
            case "msn":
                window.open("http://my.msn.com/addtomymsn.armx?m=1&id=rss&ut=" + B, "wAddRSS");
                break;
            case "yahoo":
                window.open("http://add.my.yahoo.com/rss?url=" + B, "wAddRSS");
                break;
            case "pageflakes":
                window.open("http://www.pageflakes.com/subscribe.aspx?url=" + B, "wAddRSS");
                break;
            default:
                return false
        }
    }
    else {
        return false
    }
}

function socialBookmark(D, C, B){
    var E;
    var A;
    if (!C) {
        E = tiraAcento(document.title)
		E = E.replace(' ', '+');
    }
    else {
        E = C
    }
    if (!B) {
        A = document.location.href
    }
    else {
        A = B
    }
    switch (D) {
        case "delicious":
            window.open("http://del.icio.us/post?url=" + A + "&title=" + E, "wSocialBM");
            break;
        case "blinklist":
            window.open("http://www.blinklist.com/index.php?Action=Blink/addblink.php&Url=" + A + "&Title=" + E, "wSocialBM");
            break;
        case "feedmelinks":
            window.open("http://feedmelinks.com/categorize?from=toolbar&op=submit&name=" + E + "&url=" + A, "wSocialBM");
            break;
        case "google":
            window.open("http://www.google.com/bookmarks/mark?op=edit&bkmk=" + A + "&title=" + E, "wSocialBM");
            break;
        case "newsvine":
            window.open('src="/js/scripts.js"http://www.newsvine.com/_wine/save?popoff=0&u=' + A + "&h=" + E, "wSocialBM");
            break;
        case "reddit":
            window.open("http://reddit.com/submit?url=" + A + "&title=" + E, "wSocialBM");
            break;
        case "yahoo":
            window.open("http://myweb2.search.yahoo.com/myresults/bookmarklet?t=" + E + "&u=" + A, "wSocialBM");
            break;
        case "facebook":
            window.open("http://www.facebook.com/sharer.php?u=" + A + "&t=" + E, "wSocialBM");
            break;
        case "technorati":
            window.open("http://technorati.com/faves?add=" + A + "&title=" + E, "wSocialBM");
            break;
        case "digg":
            window.open("http://digg.com/submit?phase=2&url=" + A + "&title=" + E, "wSocialBM");
            break;
        case "rec6":
            window.open("http://rec6.via6.com/link.php?url=" + A + "&title=" + E, "wSocialBM");
            break;
        case "twitter":
            window.open("http://twitter.com/home?status=" + E + ":%20" + A, "wSocialBM");
            break;
        case "windowslive":
            window.open("https://favorites.live.com/quickadd.aspx?marklet=1&mkt=en-us&url=" + A + "&title=" + E, "_self");
            break;
        case "netvibes":
            window.open("http://www.netvibes.com/subscribe.php?type=rss&url=http://www.abril.com.br/rss/home.xml", "wSocialBM");
            break;
        case "gostei":
            window.open("http://gostei.abril.com.br/post/new?u=" + A + "&t=" + E, "wSocialBM");
            break;
        case "blogblogs":
            window.open("http://blogblogs.com.br/my/bookmarks/add?bookmark_url[url]=" + A + "&bookmarking[description]=" + E, "wSocialBM");
            break
    }
}

function mostraEscondeDiv(A){
    if (document.getElementById(A).style.display == "") {
        document.getElementById(A).style.display = "none"
    }
    else {
        if (document.getElementById(A).style.display == "none") {
            document.getElementById(A).style.display = ""
        }
    }
}

function ValidaTicket(){
    username = readCookie("usuario");
    ticket = readCookie("ticket");
    codigo = "";
    if (username != null) {
        valores = username.split(";");
        codigo = valores[0]
    }
    if ((username == null && ticket == null) || (codigo == "2516185")) {
        return false
    }
    return true
}

function envAmigo(){
    var A = window.open("/envieamigo/envie_amigo.shtml", "PopEnviar", "width=453,height=503,left=0,top=0");
    A.focus()
}

function getQuery(){
    var A = window.location.href;
    if (A.indexOf("?") > -1) {
        return A.split("?")[1]
    }
    else {
        return ""
    }
}

function getUrlNoQuery(){
    var A = window.location.href;
    if (A.indexOf("?") > -1) {
        return A.split("?")[0]
    }
    else {
        return A
    }
}

function getQueryVariable(B){
    var C = window.location.href;
    if (C.indexOf("?") > -1) {
        C = C.split("?")[1];
        var A = C.split("&");
        for (i = 0; i < A.length; i++) {
            if (A[i].indexOf(B) > -1) {
                return A[i].split("=")[1];
                break
            }
        }
        return ""
    }
    else {
        return ""
    }
}

function incluirComentario(){
    var A = document.getElementById("comente");
    var B = "http://";
    if (A.nome.value == "") {
        alert("Por favor, preencha o nome");
        A.nome.focus();
        void (0)
    }
    else {
        if (A.email.value == "") {
            alert("Por favor, preencha o email");
            A.email.focus();
            void (0)
        }
        else {
            if (A.comentario.value == "") {
                alert("Por favor, preencha o comentário");
                A.comentario.focus();
                void (0)
            }
            else {
                if (A.email.value.indexOf("@") != -1) {
                    B = "mailto:"
                }
                else {
                    if (A.email.value.indexOf("http") != -1) {
                        B = ""
                    }
                }
                A.comentario.value = A.comentario.value.replace(/'/g, "");
                A.texto.value = '<div class="subtitComentarios">postado por <b><a href=' + B + A.email.value + ' target="_blank">' + A.nome.value + '</a></b></div><div class="txtComentario">' + A.comentario.value + "</div>";
                A.submit();
                void (0)
            }
        }
    }
}

function limpaComentario(A, B){
    if (A == 39 || A == 13) {
        return false
    }
}

var pag = 1;
var numeroFotos = 0;
function listaFotos(){
    numeroFotos++;
    if (numeroFotos % fpp == 0) {
        tpp++;
        document.write('</div><div id="lst_tmb' + tpp + '" class="lst_thumbs" style="display:none">')
    }
}

function navUltimas(A, B){
    if (B > 0 && B <= tpp) {
        for (i = 1; i <= tpp; i++) {
            if (i == B) {
                document.getElementById(A + i).style.display = ""
            }
            else {
                document.getElementById(A + i).style.display = "none"
            }
        }
        document.getElementById("ppImagens").innerHTML = B + " de " + tpp
    }
}

var sLocation;
var sSecondLevel;
sLocation = document.location.toString();
sLocation = sLocation.replace("http://", "");
sLocation = sLocation.replace("https://", "");
var aAuxLoc = sLocation.split("/");
if (aAuxLoc.length > 1) {
    sLocation = aAuxLoc[1]
}
else {
    sLocation = ""
}
if (aAuxLoc.length > 2) {
    sSecondLevel = aAuxLoc[2]
}
else {
    sSecondLevel = ""
}
function mudaMenu(){
    if (typeof secao != "undefined") {
        sLocation = secao
    }
    var A;
    if (sLocation.indexOf("/") > -1) {
        A = sLocation.split("/")[1]
    }
    else {
        A = sLocation
    }
    itemSMenu = sSecondLevel;
    var B = "|noticia|blog|forum|fotos|especiais|podcast|videos|";
    if (B.indexOf(A) > -1) {
        A = "noticias"
    }
    var C = "|papel-de-parede|jogos-testes|promocoes|";
    if (C.indexOf(A) > -1) {
        A = "diversao"
    }
    if (document.getElementById("sub_mnp_" + A)) {
        document.getElementById("sub_mnp_" + A).style.fontWeight = "bold"
    }
    if (document.getElementById("sm_" + A)) {
        document.getElementById("sm_" + A).className = "submenu_princ menu_on"
    }
    if (document.getElementById("tm_" + itemSMenu)) {
        document.getElementById("tm_" + itemSMenu).className = "sub_mnp sm_on"
    }
    else {
        if (document.getElementById("tm_" + sLocation)) {
            document.getElementById("tm_" + sLocation).className = "sub_mnp sm_on"
        }
    }
    if (document.getElementById("mnp_" + A)) {
        document.getElementById("mnp_" + A).className = "mnp_s";
        document.getElementById("seta_mnp").className = A
    }
    else {
        document.getElementById("mnp_home").className = "mnp_s"
    }
}

function mudaAba(B, A){
    for (i = 1; i <= A; i++) {
        if (i == B) {
            document.getElementById("aba_cnt_" + i).style.display = "";
            if (i == 1) {
                document.getElementById("aba_" + i).className = "aba_on_i"
            }
            else {
                document.getElementById("aba_" + i).className = "aba_on"
            }
        }
        else {
            document.getElementById("aba_cnt_" + i).style.display = "none";
            if (i == 1) {
                document.getElementById("aba_" + i).className = "aba_off_i"
            }
            else {
                document.getElementById("aba_" + i).className = "aba_off"
            }
        }
    }
}

function mudaAbaMultipla(C, A, B){
    for (i = 1; i <= A; i++) {
        if (i == C) {
            document.getElementById("aba_cnt_" + i + "_" + B).style.display = "";
            document.getElementById("aba_" + i + "_" + B).className = "ativo"
        }
        else {
            document.getElementById("aba_cnt_" + i + "_" + B).style.display = "none";
            document.getElementById("aba_" + i + "_" + B).className = ""
        }
    }
}

function shiftOpacity(C, A, B){
    if (B == 0) {
        opacity(C, 0, 300, A)
    }
    else {
        opacity(C, 300, 0, A)
    }
}

function opacity(F, D, A, B){
    var C = Math.round(B / 1000);
    var E = 0;
    if (D > A) {
        for (i = D; i >= A; i--) {
            setTimeout("changeOpac(" + i + ",'" + F + "')", (E * C));
            E++
        }
    }
    else {
        if (D < A) {
            for (i = D; i <= A; i++) {
                setTimeout("changeOpac(" + i + ",'" + F + "')", (E * C));
                E++
            }
        }
    }
}

function changeOpac(B, C){
    var A = document.getElementById(C).style;
    A.opacity = (B / 100);
    A.MozOpacity = (B / 100);
    A.KhtmlOpacity = (B / 100);
    A.filter = "alpha(opacity=" + B + ")"
}

var ctrCanal = 0;
var iLastCanal = 0;
var iPause = 0;
function mudaSeletor(A){
    shiftOpacity("imgTV" + iLastCanal, 1000, 1);
    document.getElementById("canal" + A).style.fontSize = "13px";
    document.getElementById("canal" + A).style.fontWeight = "bold";
    document.getElementById("canal" + A).style.backgroundColor = "#ffffff";
    document.getElementById("canal" + A).style.borderWidth = "1px";
    document.getElementById("canal" + A).style.borderColor = "#efefef";
    document.getElementById("canal" + A).style.borderStyle = "solid";
    document.getElementById("canal" + iLastCanal).style.fontSize = "12px";
    document.getElementById("canal" + iLastCanal).style.fontWeight = "normal";
    document.getElementById("canal" + iLastCanal).style.backgroundColor = "transparent";
    document.getElementById("canal" + iLastCanal).style.borderWidth = "0px";
    document.getElementById("chTV" + iLastCanal).style.display = "none";
    document.getElementById("chTV" + A).style.display = "";
    shiftOpacity("imgTV" + A, 500, 0);
    if (A == iTotalTV) {
        ctrCanal = -1
    }
    else {
        ctrCanal = A
    }
    iLastCanal = A
}

function startTime(){
    tTV = window.setInterval("mudaSeletor(ctrCanal+1);", 9000)
}

function stopTime(){
    clearTimeout(tTV)
}

function preparaTV(){
    document.getElementById("chTV0").style.display = "";
    document.getElementById("canal0").style.fontSize = "13px";
    document.getElementById("canal0").style.fontWeight = "bold";
    document.getElementById("canal0").style.backgroundColor = "#ffffff";
    document.getElementById("canal0").style.borderWidth = "1px";
    document.getElementById("canal0").style.borderColor = "#efefef";
    document.getElementById("canal0").style.borderStyle = "solid"
}

function pausaTime(){
    if (iPause == 0) {
        stopTime();
        iPause = 1
    }
    else {
        startTime();
        iPause = 0
    }
}

function mudaCor(A){
    if (A == 0) {
        A = readCookie("codSK")
    }
    if (A == "null" || A == null) {
        A = 1
    }
    document.getElementById("css_sk").href = "/css/sk" + A + "/cores.css";
    for (i = 1; i <= 6; i++) {
        if (i == A) {
            document.getElementById("bLkSk" + i).className = "cor_on"
        }
        else {
            document.getElementById("bLkSk" + i).className = "cor_off"
        }
    }
    createCookie("codSK", A, 500)
}

function createCookie(C, D, E){
    if (E) {
        var B = new Date();
        B.setTime(B.getTime() + (E * 24 * 60 * 60 * 1000));
        var A = "; expires=" + B.toGMTString()
    }
    else {
        var A = ""
    }
    document.cookie = C + "=" + D + A + "; path=/"
}

function readCookie(B){
    var D = B + "=";
    var A = document.cookie.split(";");
    for (var C = 0; C < A.length; C++) {
        var E = A[C];
        while (E.charAt(0) == " ") {
            E = E.substring(1, E.length)
        }
        if (E.indexOf(D) == 0) {
            return E.substring(D.length, E.length)
        }
    }
    return null
}

function labelDentro(c){
	if(c.value == "BUSCA"){
		c.value = "";
		c.className = "on";
	} else if(c.value == "") {
		c.value = "BUSCA";
		c.className = "";
	}
}

function enviaBusca(B){
    B.Keywords.value = B.busca.value;
    B.qu.value = B.busca.value;
    B.action = "http://busca.abril.com.br/resultados.shtml";
    B.Partner.value = "abril_br_xml_buscaabril";
    nome_site = B.nome_site;
    if (nome_site == "recreionline_tmp" || nome_site == "recreionline" || nome_site == "jovem" || nome_site == "novaescola") {
        B.sexfilter.value = "1"
    }
/*    if ((B.busca_tipo) && (B.busca_tipo.value == "web")) {
        B.action = "/busca/resultadoOverture.shtml";
        B.Partner.value = "abril_br_xml_search";
        var A = B.getElementsByTagName("input");
        for (i = 0; i < A.length; i++) {
            if (A[i].name == "in") {
                A[i].value = "10"
            }
        }
    } */
}

function enviaBuscaBarra(A){
    if (A.busca.value == "") {
        alert("Por favor preencha o campo de palavra-chave.");
        A.busca.focus();
        return
    }
    enviaBusca(A);
    A.submit()
}

function setSearchType(A){
    document.getElementById("busca_tipo").value = A;
    if (A == "abril") {
        document.getElementById("opBuscaAbril").className = "preto";
        document.getElementById("opBuscaWeb").className = "azul"
    }
    else {
        if (A == "web") {
            document.getElementById("opBuscaWeb").className = "preto";
            document.getElementById("opBuscaAbril").className = "azul"
        }
    }
}

function redirSelect(B){
    var A = B.split("*");
    if (B != "") {
        window.open(A[0], A[1])
    }
}

function verificarLinkSeta(){
    var A = window.location.toString();
    var G = A.lastIndexOf("/");
    var C = A.substring(0, G);
    var B = document.getElementById("menu").getElementsByTagName("a");
    for (var D = 0; D < B.length; D++) {
        var F = B[D].toString();
        if (F.indexOf("/") == 1) {
            var E = F.replace("/", "")
        }
        else {
            var E = F
        }
        urlLink = E;
        if (C == urlLink) {
            B[D].className = "ativo"
        }
    }
}

function legendaSobreFoto(A){
}

function fullDate(C) {
    var D = C.split("-");
    var A = new Array("Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    var B = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
//    var B = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
    todayDate = new Date();
    todayDate.setFullYear(D[0], (D[1] - 1), D[2]);
    return (B[todayDate.getDay()] + ", " + todayDate.getDate() + " de " + A[todayDate.getMonth()].toLowerCase() + " de " + todayDate.getFullYear())
//    return (B[todayDate.getDay()] + ", " + todayDate.getDate() + "/" + (todayDate.getMonth()+1) + "/" + todayDate.getFullYear())

}

if (PWA == null) {
    var PWA = {}
}
if (PWA.Home == null) {
    PWA.Home = {}
}
PWA.Home.fullDate = function(C){
	return fullDate(C);
};
PWA.Home.Especiais = {
    titles: {
        generic: "Geral",
        diversao: "Diversão",
        esportes: "Esportes",
        mulher: "Mulher",
        noticias: "Notícias",
        revistas: "Revistas",
        saude: "Saúde"
    },
    setStyle: function(A,W){
        var B = document.getElementById("miolo");
        B.className = A;
        for (i = 0; i < B.childNodes.length; i++) {
            if (B.childNodes[i].id == "title") {
                if(W != 'ok'){
			B.childNodes[i].innerHTML = "<h1>" + this.titles[A] + "</h1>";
		}
            }
        }
    },
    list: function(D, C){
        var A = (C + 1) / 4;
        var B = Math.ceil(A);
        if ((D + 1) % B == 0) {
            document.write("</div><div>")
        }
    }
};
function abusca(frm){
	if (!frm || typeof frm == 'undefined') frm = document.buscaBarraForm;
	if (frm.qu.value == ""){
		alert("O campo da busca deve ser preenchido!");
		frm.qu.focus();

	}else if (frm.qu.value == "BUSCA"){
		alert("O campo da busca deve ser preenchido!");
		frm.qu.focus();
	}else{
		frm.submit();
	}
}
function abusca2(frm){
	if (frm.qu.value == ""){
		alert("O campo da busca deve ser preenchido!");
		frm.qu.focus();

	}else if (frm.qu.value == "BUSCA"){
		alert("O campo da busca deve ser preenchido!");
		frm.qu.focus();
	}else{
		frm.submit();
	}
}
var mousex = 0;
var mousey = 0;
var espacoY = 15; //Espacamento que a caixa fica do mouse
var espacoX = 15; //Espacamento que a caixa fica do mouse
var nomeDiv = "";
var divBannerFlutuante =  null;

function init(status,numeroDiv)
{
    nomeDiv = "bannerFlutuante_" + numeroDiv;
    if(document.getElementById(nomeDiv) != null) {
        divBannerFlutuante = document.getElementById(nomeDiv);
        if(divBannerFlutuante != null) {
            divBannerFlutuante.style.display = "block";
            flush_xp();

        }    
        else {
            document.getElementById(nomeDiv).style.display = "none";
            document.onmousemove = null;
        }
    }
}

function getMouseXY(e) // works on IE6,FF,Moz,Opera7
{ 
  if (window.event)
  { 
  // if (e.pageX || e.pageY)
    //{ // this doesn't work on IE6!! (works on FF,Moz,Opera7)
        mousex = window.event.clientX + document.body.scrollLeft;
        mousey = window.event.clientY + document.body.scrollTop;      
    //  algor = '[e.pageX]';
    //  if (e.clientX || e.clientY) algor += ' [e.clientX] '
    }
    else //if (e.clientX || e.clientY)
    { // works on IE6,FF,Moz,Opera7
        mousex = e.pageX;
        mousey = e.pageY;
     // algor = '[e.clientX]';
     // if (e.pageX || e.pageY) algor += ' [e.pageX] '
    }  
  //}
  
   //alert(mousey + "/" + mousex + "/ oi");
    var timer = setTimeout("flush_xp()", 20);
}



function update(e) {
  getMouseXY(e); // NS is passing (event), while IE is passing (null)
}

function flush_xp() {
      //  alert(divBannerFlutuante + "/" + mousex + "/" + mousey);
        divBannerFlutuante.style.left = (mousex + espacoX) + "px";
        divBannerFlutuante.style.top = (mousey + espacoY) + "px";        
}


/*function fecha(x){
    var divBannerFlutuante = document.getElementById("bannerFlutuante");
    var carac = String.fromCharCode(x.which);
    if (carac == 'x')
        divBannerFlutuante.style.display = "none";
    return false;
}

document.captureEvents(Event.KEYPRESS);

document.onkeypress = fecha;*/
function imprimir(){
	window.print();
}