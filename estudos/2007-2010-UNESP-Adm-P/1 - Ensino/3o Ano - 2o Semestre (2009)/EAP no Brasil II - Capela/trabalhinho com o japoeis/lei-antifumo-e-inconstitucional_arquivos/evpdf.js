(function($) {

 $J = jQuery.noConflict();

$J(function() {

  // valid xhtml strict method of opening new windows 
  $J('a[rel="external"]').click(function() {
        window.open($J(this).attr('href'));
      });

  $J('.tabs').tabs({ fxAutoHeight: true });

/*
  $J('#topbanner').flash({
    'src': 'http://www.actbr.org.br/imagens/banners/actbr_468x60.swf',
    'width': 468,
    'height': 60
  });
*/

    $J('a.flash').each(function() {
        var $me = $J(this);
        var link = $me.attr('href');
        $me.hide();
        $me.parent().flash({'src': link, 'width': 500, 'height': 400});
    });

  // intro-box handlers 
	$J('#intro-nav li').click (function () {
        $J('#intro-nav li.current').removeClass ('current');
        $J('.intro-panel:visible').hide();
        $J('#'+$J(this).attr('id').split('_')[1]).fadeIn();
        $J(this).addClass('current');
      }).hover (function () {
        $J(this).addClass ('hover');
      }, function () {
        $J(this).removeClass ('hover'); 
      });

  // load indice content separatedly
  $J('#intro-nav li#for_aside-indice').click (function() {
    var $me = $J('#aside-indice-child');
    if (!$me.is('.loaded')) {
      $me.load('/indice.php', {}, function() {
        $J(this)
          .addClass('loaded')
          .jScrollPane({scrollbarOnLeft: true});
      });
    }
  });

  $J('#nav ul.main-nav li').hover(
    function() {
      $J(this).addClass('sfhover');
    },
    function() {
      $J(this).removeClass('sfhover');
    }
  );

});
})(jQuery);
