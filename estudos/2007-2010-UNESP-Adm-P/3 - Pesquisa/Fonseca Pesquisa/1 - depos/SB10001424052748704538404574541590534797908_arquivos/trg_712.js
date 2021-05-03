var p39_version_712 = '1.0';
var p39_js_name_712 = 'trg_712.js.1.operational';
var p39_finished_712 = '0';
var p39_akamai_712 = '1';
var p39_su_712 = 'http://trg.peer39.net/advertiser/adstrg?';
var p39_au_712 = 'http://catrg.peer39.net/';
var p39_aid_712 = 712;
var p39_pu_712 = null;
var p39_validateRetry_712 = 10;
var p39_pr_712 = null;
var p39_synched_712 = '0';
var p39_cc_712 = '/7QnkE80XLKzILiqpjgeKxf/yYqPe70zfdO7mPRtaGk=';
var p39_pt_712 = null;
var p39_sid_712 = null;
var p39_cb_712 = '1';
var p39_sd_712 = null;
var p39_validateInterval_712 = 100;

//added by art 2009-10-28
   var p39_maxResults_712 = 30;
   var p39_default_712 = [];
   p39_default_712['id'] = 371;
   p39_default_712['name'] = 'Business';
   p39_default_712['description'] = '';
   p39_default_712['path'] = 'Business';
   p39_default_712['score'] = 100;
//added by art 2009-10-28

function p39_quoted(s) {
    return (s) ? '"' + s + '"' : '""';
}


function p39_encode(s) {
    return escape(s);
}


function p39_append(su, p, v) {
    if (v) {
        return su + '&' + p + '=' + v;
    }
    return su;
}


function p39_append_encode(su, p, v) {
    if (v) {
        return p39_append(su, p, p39_encode(v));
    }
    return su;
}


function p39_clean_url(u) {
    if (u) {
        if (u.indexOf('ad.yieldmanager.com') > 0) {
            var link_pos = u.indexOf('link=$,http');
            u = u.substring(link_pos, u.length);
            u = u.replace('link=$,http', 'http');
        }
    }
    return u;
}


function p39_validateFinished_712() {
    if ((p39_finished_712 == '1') || (p39_validateRetry_712 === 0)) {
        if (typeof(afterFinished_712) == "function") {
            afterFinished_712();
        }
    }
    else {
        p39_validateRetry_712--;
        setTimeout('p39_validateFinished_712()', p39_validateInterval_712);
    }
}


function p39_zero_pad(n, c) {
    var nz = n + '';
    while (nz.length < c) {
        nz = "0" + nz;
    }
    return nz;
}


function p39_hash_code(s) {
    var h = 0;
    var len = s.length;
    var UP = 2147483647;
    var DOWN = 2147483648;
    for (i = 0; i < len; i++) {
        h = 31 * h + s.charCodeAt(i);
        if (h > UP) {
            h -= DOWN;
            h = -DOWN + h % (UP + DOWN + 1);
        }
        else if (h < -DOWN) {
            h -= -DOWN - 1;
            h = UP + h % (UP + DOWN + 1);
        }
    }
    if (h < 0) {
        return -h;
    }
    return h;
}


function p39_build_akamai_url(u) {
    if (u) {
        var uh = p39_hash_code(u);
        var d1 = uh % 500;
        var d2 = parseInt(uh / 500, 10) % 500;
        var au = d1 + '/' + d2 + '/' + uh;
        return au;
    }
    return u;
}


function p39_showTRG() {
    var w = window;
    var su = null;
    if (p39_akamai_712 == '1') {
        su = p39_au_712 + p39_build_akamai_url("pu=" + p39_pu_712 + "&cc=" + p39_cc_712);
        su = su + "?aid=" + p39_zero_pad(p39_aid_712, 5);
        if (p39_sid_712) {
            su = su + "&sid=" + p39_zero_pad(p39_sid_712, 5);
        } else {
            su = su + "&sid=00000";
        }
        su = p39_append_encode(su, "pu", p39_pu_712);
        su = p39_append_encode(su, "cc", p39_cc_712);
        su = p39_append_encode(su, "pr", p39_pr_712);
        su = p39_append_encode(su, "pt", p39_pt_712);
        su = p39_append_encode(su, "sd", p39_sd_712);
    } else {
        su = p39_su_712 + 'cc=' + p39_cc_712;
        su = p39_append_encode(su, "pu", p39_pu_712);
        su = p39_append_encode(su, "pr", p39_pr_712);
        su = p39_append_encode(su, "pt", p39_pt_712);
        su = p39_append_encode(su, "sd", p39_sd_712);
    }
    su = p39_append_encode(su, "et", w.p39_extrk_712);
    if (w.p39_ac_712) {
        try {
            var alt_category = w.p39_ac_712.split(",");
            if (alt_category.length == 3) {
                su = p39_append_encode(su, "ac", alt_category[0] + ":" + alt_category[2]);
            }
        } catch(e) {}
    }
    su = su.substring(0, 1000);
    su = su.replace(/%\w?$/, '');
    document.write('<scr' + 'ipt type="text/javascript" src=' + p39_quoted(su) + '> </script>');
}


function extractCategories(t) {
    if ((t) && (t.length > 0)) {
        var p = t.indexOf("name=");
        var ep = 0;
        var i = 0;
        var res = [];
        while ((p <= t.length) && (p > 0)) {
            ep = t.indexOf('"', p + 6);
            res[i] = t.substring(p + 6, ep);
            p = t.indexOf("name=", ep + 1);
            i++;
        }
        return res;
    }
    return;
}


function p39_getTagValues(xml, vid) {
    var xml_obj;
    var res = [];
    try {
        xml_obj = new ActiveXObject("Microsoft.XMLDOM");
        xml_obj.async = false;
        xml_obj.loadXML(xml);
    }
    catch(e) {
        try {
            var parser = new DOMParser();
            xml_obj = parser.parseFromString(xml, "text/xml");
        }
        catch(ee) {
            return;
        }
    }
    if (xml_obj) {
        var categories = xml_obj.getElementsByTagName('category');
        for (catNo = 0; ((catNo < categories.length) && (catNo < p39_maxResults_712)); catNo++) {
            res[res.length] = categories[catNo].getAttribute(vid);
        }
    }
    if (res.length == 0)
    {
       res[0] = p39_default_712[vid];
    }
    return res;
}


function p39_resultsList(dct, vid, delim, app_def) {
    var pxml = getTargetingTags_712();
    var ares = p39_getTagValues(pxml, vid);
    if ((app_def) || (ares.length === 0)) {
        ares[ares.length] = dct;
    }
    return ares.join(delim);
}


function p39_resultsArray(default_content_type, value_id, append_default) {
    var results = [];
    var pxml = getTargetingTags_712();
    var ids = p39_getTagValues(pxml, 'id');
    var smb_adjust = 0;
    if (ids[0] == '225') {
       var scores = p39_getTagValues(pxml, 'score');
       for (idx in ids) {
          if (((ids[idx] == '231') && (scores[idx] > scores[0]))
              ||
              ((ids[idx] == '234') && (scores[idx] > scores[0]))) {
             smb_adjust += 1;
          }
       }
    }

    results = p39_getTagValues(pxml, value_id);
    if (smb_adjust == 2) {
       var remove = results.shift();
    }

    if ((append_default) || (results.length === 0)) {
        results[results.length] = default_content_type;
    }
    return results;
}


function p39_getJSName() {
    return p39_js_name_712;
}


function p39_resultsKVP(default_content, value_id, delimiter, keyName, append_default) {
    var arrayResults = p39_resultsArray(default_content, value_id, append_default);
    for (var arrayNo in arrayResults) {
        if (typeof arrayResults[arrayNo] !== 'function') {
            arrayResults[arrayNo] = (keyName + '=' + arrayResults[arrayNo]);
        }
    }
    return arrayResults.join(delimiter);
}
function p39_cleanComma(u, clean, quote, replaces, withs) { var utemp = quote ? clean : "" +u.match(clean); for ( var r in replaces){ if(true){utemp = utemp.replace(new RegExp(replaces[r]), withs[r]);} } return utemp; } function p39_cleanGeneric(u, accept, patterns ) { if (u.match(new RegExp(accept))){ var res = ""; for(var p in patterns) { if(true){res += p39_cleanComma(u,patterns[p].clean,patterns[p].quote,patterns[p].replaces,patterns[p].withs);} } return res; } return null; } function P39_cleanData(clean, quote, replaces, withs){ this.clean=clean; this.quote=quote; this.replaces=replaces; this.withs=withs; } function P39_acceptData(accept,cleanDatas){ this.accept=accept; this.cleanDatas=cleanDatas; } function p39_cleanSite(acceptDatas, u){ for (var ad in acceptDatas){ if(true){ var res = p39_cleanGeneric(u, acceptDatas[ad].accept, acceptDatas[ad].cleanDatas); if (res){return res;} } } return null;         } function p39_c683(u){var res = p39_cleanSite([new P39_acceptData(".*",[new P39_cleanData(".*",false,[/\?(mod|ru|sms_ss|mg|hat_input|dlbk|reflink).*/g],[""])])],u);if (res){return res;} else{ return u;}} function p39_clean_url_712(u) { try {var links = document.getElementsByTagName("link"); for (var i=0; i<links.length; i++) { if (links[i].rel == "canonical") { return links[i].href; }  } if (("" + u.match("//[^/]*")).substring(2).match("wsj.com")) {return p39_c683(u);}if (u.match("wsj")) {return p39_c683(u);}} catch(e){}return u;}
var w = window;
p39_sd_712 = Math.floor(Math.random() * 1000000);
if (w.p39_mpu) {
    p39_pu_712 = w.p39_mpu;
}
if (!p39_pu_712) {
    p39_pt_712 = document.title;
    p39_pu_712 = document.location.href;
    var ip = '0';
    try {
        p39_pu_712 = top.location.href;
        p39_pr_712 = document.referrer;
        if (top.location != document.location) {
            ip = '1';
        }
    }
    catch(e) {
        try {
            p39_pu_712 = window.parent.document.referrer;
            ip = '2';
        }
        catch(ee) {
            p39_pu_712 = document.referrer;
            ip = '3';
        }
        p39_pr_712 = null;
    }
    p39_sd_712 = p39_sd_712.toString() + '' + ip;
}
p39_pu_712 = p39_clean_url(p39_pu_712);
if (typeof(p39_clean_url_712) == "function") {
    if (p39_pu_712) {
        p39_pu_712 = p39_clean_url_712(p39_pu_712);
    }
}
p39_showTRG();
if (p39_synched_712 == '1') {
    p39_validateFinished_712();
}


function getDefaultTargetingTags_712() {
    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?><responseContainer><service><classifier><category path=\"Business\" description=\"\" name=\"Business\" id=\"220\"\/><\/classifier><\/service><log status=\"SUCCESS\"\/><\/responseContainer>';
}