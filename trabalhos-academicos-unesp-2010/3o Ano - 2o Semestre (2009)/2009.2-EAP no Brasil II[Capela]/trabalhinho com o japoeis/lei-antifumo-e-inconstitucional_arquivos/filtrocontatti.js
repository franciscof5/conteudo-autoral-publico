;(function($) {

    $J = jQuery.noConflict();

$J(document).ready(function() {

  // setup filters
  $J('#myfilter').keyup(function() {
    var f = $J(this).val().toLowerCase();
    var regex=new RegExp(f+"|\\s"+f,"i");
    $J('span[u_mail]').each(function() {
      if (regex.exec($J(this).attr('u_mail'))) {
        $J(this).show();
      } else {
        $J(this).hide();
      }
    });
  });

  // toggle between 'all' and 'none'
  $J('a.toggle').click(function(e) {
    e.preventDefault();
    $J('span[u_mail]:visible > input').attr('checked', $J(this).is('.all'));
    $J('#myfilter').focus();
  });

  // only submit if atleast 1 item has been selected
  $J('#form_friends_add_friend').submit(function(e) {
    return ($J('span[u_mail]:visible > input:checked').length > 0);
  });

  // hack for IE .. change does not trigger, so we'll manually
  // trigger a click and catch it 
  $J('ul#tipologie label').click(function(e) {
      $J(this).prev().click();
  });

  $J('ul#tipologie input[type=radio]').click(function() {
      $J('#inviteFriendsForm .params').hide();

      var $me = $J(this);
      var cl = $me.attr('class');
      var $el = $J('#'+cl);
      if ($el.length > 0) {
        $el.show();
        return;
      }
      var $api = $J('#'+$me.val()+cl);
      if ($api.length > 0) {
        $api.show();
        return;
      }
      $J('#cURL').show();
  });
});
})(jQuery);
