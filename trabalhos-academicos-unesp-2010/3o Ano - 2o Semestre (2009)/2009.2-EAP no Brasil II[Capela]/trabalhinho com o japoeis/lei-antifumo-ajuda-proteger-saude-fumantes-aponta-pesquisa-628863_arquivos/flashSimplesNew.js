 document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + OAS_width + '" height="' + OAS_height +'">');
 document.write('<PARAM NAME=movie VALUE="' + localBannerFlash + '?' + clickTag + '=http://' + adServer + '/RealMedia/ads/click_lx.ads/' + PAGE + '/' + RAND + '/' + POS + '/' + CAMP + '/' +IMAGE + '/' + USER + '"><PARAM NAME=loop VALUE=true><PARAM NAME=menu VALUE=false><param NAME=wmode Value=' + WMODE + '><PARAM NAME=quality VALUE=high>');  
 document.write('<EMBED src="' + localBannerFlash + '?' + clickTag + '=http://' + adServer + '/RealMedia/ads/click_lx.ads/' + PAGE + '/' + RAND + '/' + POS + '/' + CAMP + '/' +IMAGE + '/' + USER + '" loop=true menu=false quality=high bgcolor=' + BGCOLOR + ' swLiveConnect=FALSE WIDTH="' + OAS_width + '" HEIGHT="' + OAS_height +'" TYPE="application/x-shockwave-flash">');
 document.write('</OBJECT>');

