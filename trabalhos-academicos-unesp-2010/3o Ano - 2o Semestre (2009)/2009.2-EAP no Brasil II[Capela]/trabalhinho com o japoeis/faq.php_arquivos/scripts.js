$(document).ready(function() {
	//**************Font-size
    fontSize(".toolbox .item03", "#content", 9, 12, 20);
    $("#content").css('font-size', 12);    
    //***************Style-switcher
	$('.contraste').click(function() {
		if ( getActiveStyleSheet() == 'padrao' )
			setActiveStyleSheet('modify');
		else 
			setActiveStyleSheet('padrao');
	});	    
	//**************Vídeo
	/*
    $('div.video a[@href$="flv"]').flash(
        { src: '/lib/modules/phpFLV/phpFLVPlayback.swf', height: 274, width: 300, allowFullScreen : true, wmode : 'transparent' },
		{ version: 9 },
        function(htmlOptions) {
            $this = $(this);
            htmlOptions.flashvars.vfile = $this.attr('href').slice(0,-4)+".flv";
			this.innerHTML = '';
			$this.before($.fn.flash.transform(htmlOptions));						
        }
    );
	*/
	
	$('div.video a[@href$="flv"]').not('.campanha a[@href$="flv"]').flash(
		{ src: '/lib/modules/phpFLV/phpFLVPlayback.swf', height: 274, width: 300, allowFullScreen : true, wmode : 'transparent' },
		{ version: 9 },
		function(htmlOptions) {
			$this = $(this);
			htmlOptions.flashvars.vfile = $this.attr('href').slice(0,-4)+".flv";
			this.innerHTML = '';
			$this.before($.fn.flash.transform(htmlOptions));						
		}
	);    
	$('.campanha div.video a[@href$="flv"]').flash(
        { src: '/lib/modules/phpFLV/phpFLVPlayback_wide.swf', height: 485, width: 580, allowFullScreen : true, wmode : 'transparent' },
		{ version: 9 },
        function(htmlOptions) {
            $this = $(this);
            htmlOptions.flashvars.vfile = $this.attr('href').slice(0,-4)+".flv";
			this.innerHTML = '';
			$this.before($.fn.flash.transform(htmlOptions));						
        }
    );	
	
	
	
	
    $('div.video a[@href$="wmv"]').flash(
        { src: '/lib/modules/phpFLV/phpFLVPlayback.swf', height: 274, width: 300, allowFullScreen : true, wmode : 'transparent' },
		{ version: 9 },
        function(htmlOptions) {
            $this = $(this);
            htmlOptions.flashvars.vfile = $this.attr('href').slice(0,-4)+".flv";
			this.innerHTML = '';
			$this.before($.fn.flash.transform(htmlOptions));						
        }
    );				
	//***************Áudio			
    $('div.audio a[@href$="mp3"]').flash(
        { src: '/lib/modules/mp3player/mp3player.swf', height: 45, width: 300 },
		{ version: 8 },
        function(htmlOptions) {
            $this = $(this);
            htmlOptions.flashvars.mp3url = $this.attr('href');
			this.innerHTML = '';
			$this.before($.fn.flash.transform(htmlOptions));						
        }
    );	    
});
