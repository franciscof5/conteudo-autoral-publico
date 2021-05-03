function mudaClass(nomeDiv){
	termo = document.getElementById(nomeDiv)
	if(termo.className == '')
		termo.className = 'open';
	else
		if(termo.className == 'open') termo.className = '';
}

