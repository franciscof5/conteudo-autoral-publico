_satellite.pushAsyncScript(function(event, target, $variables){
  try {
  var email_user = _satellite.getVar('getEmail');
  var b2wuid = _satellite.getVar('getB2W-UID');
  var customerId = _satellite.getVar('getCustomerId');
  var criteoAccount = _satellite.getVar('getCriteoAccount');
  
  var hash = (
    typeof email_user === 'string'
    && email_user !== ''
    && typeof cage_hash_MD5 === 'function'
  ) ? cage_hash_MD5(email_user) : '';
  var isSponsored = _satellite.getVar('getURL').indexOf('pfm_type=vit_recommendation') > -1 ? 1 : 0;

  var getHref = function () {
    try {
      var topHref = _satellite.getVar('getWindowTopHref');
      if (topHref) return topHref;

      return window.top.location.href;
    } catch(e) {
      return;
    }
  };

  var criteo   = document.createElement('script');
  criteo.type  = 'text/javascript';
  criteo.async = true;
  criteo.src   = 'https://dynamic.criteo.com/js/ld/ld.js?a=' + criteoAccount;

  document.getElementsByTagName('body')[0].appendChild(criteo);
  window.criteo_q = window.criteo_q || [];

  var criteo_device = '';
  switch(
    cage_global_variable
      .detail
      .device
      .type
      .toLowerCase()
    ) {
    default:
      criteo_device = 'm';
      break;
    case 'desktop':
      criteo_device = 'd';
      break;
    case 'tablet':
      criteo_device = 't';
      break;
  }
  
  var tagplace = getHref();

  window.criteo_q.push({
    event: 'setAccount',
    account: criteoAccount,
    tagplace: tagplace,
  }, {
    event: 'setRetailerVisitorId',
    id: b2wuid
  }, {
    event: 'setHashedEmail',
    email: hash
  }, {
    event: 'setCustomerId',
    id: customerId
  }, {
    event: 'setSiteType',
    type: criteo_device
  }, {
    event: 'viewItem',
    item: _satellite.getVar("getProductPageID"),
    isSponsored: isSponsored,
    tagplace: tagplace,
  });
} catch (e) {}
});
