document.write('<div id="menuopen" style="right:380px;"></div>');
document.write('<div id="menudesc" style="width:380px;"><ul>');
document.write('<li><a href="/">Home</a></li>');
document.write('<li><a href="/forum/">Fórum</a></li>');
document.write('<li><a href="/tutoriais/">Tutoriais</a></li>');
document.write('<li><a href="/projects/">Projetos</a></li>');
document.write('<li><a href="/gallery/">Galeria</a></li>');
document.write('<li><a href="/contato/">Contato</a></li>');
document.write('</ul></div>');
document.write('<div id="menulogin"></div>');
$.ajax({
    url: '/login.php',
    success: function(data) {
	$('#menulogin').html(data);
    }
});