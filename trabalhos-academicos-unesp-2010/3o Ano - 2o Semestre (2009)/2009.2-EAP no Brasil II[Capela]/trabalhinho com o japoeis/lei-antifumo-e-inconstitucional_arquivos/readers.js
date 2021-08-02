

KWParser = {
    
     
     
     
    debug_referrer: ''
};

KWParser.search_engines = [
    ['google',     'google\\.', 'q'],                          // Google
    ['yahoo',      '([a-zA-Z]{2}\\.)?search\\.yahoo\\.', 'p'], // Yahoo
    ['bing',       'bing\\.', 'q'],                            // Bing
    ['aol',        'search\\.aol\\.', 'query'],                // AOL
    ['ask',        'ask\\.com', 'q'],                          // Ask.com
    ['altavista',  'altavista\\.', 'q'],                       // AltaVista
    ['lycos',      'search\\.lycos\\.', 'query'],              // Lycos
    ['alltheweb',  'alltheweb\\.', 'q'],                       // AllTheWeb
    ['technorati', 'technorati\\.com/search/([^\\?/]+)', 1],   // Technorati
    ['dogpile',    'dogpile\\.com/dogpile/ws/results/Web/([^\\?/]+)', 1, true], // DogPile
    ['lemos',      'lemos\\.','q']                             // LemosNet
];


/**
 * Decode the referrer string and return a list of search keywords.
 */
KWParser.decodeReferrer = function(referrer) {
    var query = null;
    var regex = new RegExp('');

    for (var i = 0; i < KWParser.search_engines.length; i ++) {
        var se = KWParser.search_engines[i];
        regex.compile('^http://(www\\.)?' + se[1], 'i');
        var match = referrer.match(regex);
        if (match) {
            var result;
            if (isNaN(se[2])) {
                result = KWParser.decodeReferrerQS(referrer, se[2]);
            } else {
                result = match[se[2] + 1];
            }
            if (result) {
                result = decodeURIComponent(result);
                // XXX: DogPile's URI requires decoding twice.
                if (se.length > 3 && se[3])
                    result = decodeURIComponent(result);
                result = result.replace(/\'|"/g, '');
                result = result.split(/[\s,\+\.]+/);
                return [se[0],result];
            }
            break;
        }
    }
    return null;
};

KWParser.decodeReferrerQS = function(referrer, match) {
    var qs = referrer
    var re = new RegExp( "[\\?&]?" + match + "=([^&$]*)", "i" );
    var result = re.exec( qs );

    return result!=null ? result[1] : null;
}

KWParser.parse = function() {
    // If 'debug_referrer' then we will use that as our referrer string
    // instead.
    var q = KWParser.debug_referrer ? KWParser.debug_referrer : document.referrer;
    var e = null;
    q = KWParser.decodeReferrer(q);
    return q;
};

var readers_src = '' + 
'' + 
'' + 
'<!-- http://blogblogs.com.br/embed/readers version 2.0 -->' + 
'' + 
'' + 
'' + 
'<style type="text/css">' + 
'	#bbw_readers .ut, #bbw_readers .ut * { border:0px; margin:0px; padding:0px; font-size:1px; display:none; }' + 
'</style>' + 
'' + 
'' + 
'<div id="bbw_readers">' + 
'	<div class=\'bbw_title\'>' + 
'		<a href=\'http://blogblogs.com.br\'><img src=\'http://assets5.blogblogs.com.br/embed/readers/widget_head_w.gif\'></a>' + 
'	</div>' + 
'	<div class=\'bbw_icons\'>' + 
'		' + 
'		<a href="http://blogblogs.com.br/usuario/glauciarcarvalho" title="Perfil do Glauciarcarvalho">' + 
'			<img src="http://assets5.blogblogs.com.br/embed/readers/user_w.gif">' + 
'		</a>' + 
'		' + 
'		<a href="http://blogblogs.com.br/blog/www-euvouparardefumar-com" title="Eu vou parar de fumar">' + 
'			<img src="http://assets2.blogblogs.com.br/embed/readers/blog_w.gif">' + 
'		</a>			' + 
'		<a href="http://blogblogs.com.br/my/gadgets/fave?url=http://www.euvouparardefumar.com" title="Adicionar aos meus favoritos no BlogBlogs">' + 
'			<img src="http://assets4.blogblogs.com.br/embed/readers/fave_w.gif">' + 
'		</a>			' + 
'		<a href="http://blogblogs.com.br/blog/www-euvouparardefumar-com/estrelas" title="Ver todos os fãs">' + 
'			<img src="http://assets5.blogblogs.com.br/embed/readers/fans_w.gif">' + 
'		</a>			' + 
'		<a href="http://feeds.feedburner.com/EuVouPararDeFumar" rel="nofollow" title="Assinar o feed deste blog">' + 
'			<img src="http://assets4.blogblogs.com.br/embed/readers/feed_w.gif">' + 
'		</a>			' + 
'	</div>' + 
'	' + 
'	<div class=\'bbw_subtitle\'>' + 
'		<a href="http://blogblogs.com.br/blog/www-euvouparardefumar-com/leitores" title="Ver todos...">Últimas Visitas</a>' + 
'	</div>' + 
'	<!-- visibility_control -->' + 
'	' + 
'		<a href="http://blogblogs.com.br/usuario/cadastro" title="Faça parte desta comunidade, venha para o BlogBlogs">' + 
'			<img src="http://assets5.blogblogs.com.br/avatars/no_user_50.gif" width="50" class="bbw_avatar" alt="Você">' + 
'		</a>' + 
'		' + 
'			<a href="http://blogblogs.com.br/usuario/rankingslistas" title="rankingslistas"><img src="http://assets5.blogblogs.com.br/avatars/0/154/avatar_154378_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="rankingslistas" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/prg62" title="PRG62"><img src="http://assets1.blogblogs.com.br/avatars/0/53/avatar_53406_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="PRG62" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/tonafolga" title="Tonafolga"><img src="http://assets2.blogblogs.com.br/avatars/0/171/avatar_171109_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="Tonafolga" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/du_nirvana" title="du_nirvana"><img src="http://assets2.blogblogs.com.br/avatars/0/69/avatar_69580_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="du_nirvana" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/meudocelardicas" title="meudocelardicas"><img src="http://assets4.blogblogs.com.br/avatars/0/174/avatar_174449_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="meudocelardicas" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/blogdolucaslopes" title="BlogDoLucasLopes"><img src="http://assets3.blogblogs.com.br/avatars/0/174/avatar_174614_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="BlogDoLucasLopes" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/gustavocardoso" title="gustavocardoso"><img src="http://assets1.blogblogs.com.br/avatars/0/54/avatar_54962_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="gustavocardoso" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/thepotterclube" title="thepotterclube"><img src="http://assets1.blogblogs.com.br/avatars/no_avatar_50.gif" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="thepotterclube" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/moreninha42" title="moreninha42"><img src="http://assets1.blogblogs.com.br/avatars/0/166/avatar_166718_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="moreninha42" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/viciadocarioca" title="viciadocarioca"><img src="http://assets5.blogblogs.com.br/avatars/0/29/avatar_29250_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="viciadocarioca" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/solangeebrenda" title="solangeebrenda"><img src="http://assets1.blogblogs.com.br/avatars/0/135/avatar_135764_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="solangeebrenda" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/donagiraffa" title="DonaGiraffa"><img src="http://assets1.blogblogs.com.br/avatars/0/167/avatar_167329_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="DonaGiraffa" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/atila_city" title="Atila_city"><img src="http://assets1.blogblogs.com.br/avatars/0/114/avatar_114649_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="Atila_city" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/sonhadores" title="sonhadores"><img src="http://assets3.blogblogs.com.br/avatars/0/158/avatar_158541_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="sonhadores" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/bostadevaca" title="BostaDeVaca"><img src="http://assets5.blogblogs.com.br/avatars/0/173/avatar_173150_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="BostaDeVaca" /></a>' + 
'			' + 
'			<a href="http://blogblogs.com.br/usuario/new" title="NEW"><img src="http://assets5.blogblogs.com.br/avatars/0/14/avatar_14766_50.jpg" class="bbw_avatar" onerror="BBS.defaultAvatar(this, 50);"  width="50" alt="NEW" /></a>' + 
'			' + 
'		' + 
'		<div class=\'bbw_footer\'>' + 
'			Por <a href=\'http://blogblogs.com.br\'>BlogBlogs.Com.Br</a><img src=\'http://www.google-analytics.com/__utm.gif?utmwv=1&utmn=4471960888&utmcs=-&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmcr=1&utmdt=Widget > Readers  > Blog: 173126&utmhn=embed.blogblogs.com.br&utmr=BBWREFTK_READERS&utmp=/embed/readers/173126/&utmac=UA-351784-4&utmcc=__utma%3D54506319.1651905023.1260418096.1260418096.1260418096.2%3B%2B__utmb%3D54506319%3B%2B__utmc%3D54506319%3B%2B__utmz%3D54506319.1260418096.2.2.utmccn%3DBBWCCNTK_READERS%3B%2B__utmv%3D54506319.%3B%2B\' alt=\'\' class=\'ut\'>' + 
'		</div>' + 
'	</div>' + 
'	' + 
'' + 
'<!-- End BlogBlogs Readers Widget -->';



var doc = document;
var ref; if (document.referrer == "") { ref = "-" } else { ref = document.referrer; };
var exp = new RegExp("BBWREFTK_READERS", "g");
readers_src = readers_src.replace(exp,escape(ref));

var keywords = KWParser.parse();
var exp2 = new RegExp("BBWCCNTK_READERS", "g");
var utmccn = "(direct)%7Cutmcsr%3D(direct)%7Cutmcmd%3D(none)";

var domain = document.domain;
var path = document.URL.replace("https://","");
path = path.replace("http://","");
path = path.replace(domain,"");


if (keywords == null)
{
	if (ref == "-") { } else
	{ var utmccn = "(referral)%7Cutmcsr%3D" + domain + "%7Cutmcct%3D" + path + "%7Cutmcmd%3Dreferral"; }
}
else
{
	utmctr = keywords[1].join("%2B");
	var utmccn = "(organic)%7Cutmcsr%3D" + keywords[0] + "%7Cutmctr%3D" + utmctr + "%7Cutmcmd%3Dorganic";
}

readers_src = readers_src.replace(exp2,utmccn);

function drawBBreaders(s){ document.write(s); }
drawBBreaders(readers_src);

