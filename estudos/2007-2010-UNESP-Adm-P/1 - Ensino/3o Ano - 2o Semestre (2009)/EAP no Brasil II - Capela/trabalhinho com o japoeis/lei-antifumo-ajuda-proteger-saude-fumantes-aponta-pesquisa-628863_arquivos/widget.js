gostei$ = function(id) {
    var element = document.getElementById(id);
    return element ? Gostei.extend(element, Gostei.Elements) : null;
}

var Gostei = {
    defaults: {
        view: null,
        cssPath: null,
        loginURL: "https://aut.abril.com.br/loginwidget/gostei",
        host: "gostei.abril.com.br",
        skin: "",
        height: 140,
        width: 120
    },
    options: {},

    init: function(post, options) {
        this.options = this.extend(this.defaults, options || {});
        // escreve HTML
        this.addCss("http://" + this.options.host + "/Content/lightbox.css");
        this.writeWidget(post);
        this.writeLogin();
    },

    send: function(message) {        
        switch (message.toUpperCase()) {
            case 'LOGIN': this.openLogin();
                break;
            case 'OK': this.closeLogin();
                break;
        }
    },

    extend: function(destination, source) {
        for (var property in source)
            destination[property] = source[property];
        return destination;
    },

    serialize: function(obj) {
        var r = [];
        for (var p in obj) {
            if (typeof obj[p] != "function" && obj[p])
                r.push(p + "=" + encodeURIComponent(obj[p]));
        }
        return r.join('&');
    },

    openLogin: function() {
        var pageSize = this.getPageSize();
        var pageScroll = this.getPageScroll();

        var gostei_light = gostei$('gostei_light');
        gostei_light.css({
            display: 'block',
            top: pageScroll.y + ((pageSize.Window.height - gostei$('gosteilogin').height) / 2) + "px"
        });

        var gostei_fade = gostei$('gostei_fade');
        gostei_fade.css({
            display: 'block',
            width: pageSize.Page.width + "px",
            height: pageSize.Page.height + "px"
        });

        // fix problem with firefox 2 that show the dark layer beneath other page elements
        if (gostei_fade.parentNode.tagName.toUpperCase() != "BODY") {
            var clone_overlay = gostei_fade;
            var clone_box = gostei_light;
            gostei_fade.parentNode.removeChild(gostei_fade);
            gostei_light.parentNode.removeChild(gostei_light);
            document.body.appendChild(clone_overlay);
            document.body.appendChild(clone_box);
        }
    },

    closeLogin: function() {
        gostei$('gostei_light').hide();
        gostei$('gostei_fade').hide();

        // refresh the widget and the login
        this.refreshWidgets();
        var login = gostei$('gosteilogin');
        login.src = login.src;
    },

    refreshWidgets: function() {
        var iframes = document.getElementsByTagName("iframe");
        for (i = 0; i < iframes.length; i++) {
            if (iframes[i].className == "gosteiwidgetbutton") {
                if (this.isIE()) {
                    var _iframe = iframes[i].cloneNode();
                    var _parent = iframes[i].parentNode;
                    _parent.removeChild(iframes[i]);
                    _parent.appendChild(_iframe);

                } else {
                    iframes[i].src = iframes[i].src;
                }
            }
        }
    },

    addCss: function(src) {
        if (!gostei$('gostei_css')) {
            var head = document.getElementsByTagName("head")[0];
            var css = document.createElement("link");
            var css_options = { id: 'gostei_css', type: "text/css", href: src, rel: "stylesheet" }
            this.extend(css, css_options);
            head.appendChild(css);
        }
    },

    writeWidget: function(post) {
        document.write('<iframe class="gosteiwidgetbutton" src="http://' + this.options.host + '/post/showwidget?' +
        this.serialize(post) + '&skin=' + this.options.skin +
        (this.options.view ? '&view=' + this.options.view : '') +
         '" scrolling=no marginwidth=0 border=0 frameborder=0 allowtransparency="true" width=' + this.options.width +
        ' height=' + this.options.height + '></iframe>');
    },

    writeLogin: function() {
        if (gostei$('gosteilogin')) return;
        var path = location.protocol + '//' + (this.options.host.indexOf("localhost") > -1 ? this.options.host : location.host);

        document.write('<div style="display: none;" id="gostei_light" class="gostei_white_content">' +
	        '<iframe id="gosteilogin" src="' + this.options.loginURL + '?surl=' + encodeURIComponent(path + '/gostei_blank.htm#OK') +
	        (this.options.cssPath ? '&css=' + encodeURIComponent(this.options.cssPath) : '') +
	        '" frameborder=0 allowtransparency="true" height=400 width=400></iframe></div>' +
	        '<div style="display: none;" id="gostei_fade" class="gostei_black_overlay"></div>');
    },

    isIE: function() {
        return navigator.appName == "Microsoft Internet Explorer";
    },

    getPageScroll: function() {
        var yScroll;

        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
            yScroll = document.documentElement.scrollTop;
        } else if (document.body) {// all other Explorers
            yScroll = document.body.scrollTop;
        }

        return { x: '', y: yScroll };
    },

    getPageSize: function() {
        var xScroll, yScroll;

        if (window.innerHeight && window.scrollMaxY) {
            xScroll = document.body.scrollWidth;
            yScroll = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        var windowWidth, windowHeight;
        if (self.innerHeight) {	// all except Explorer
            windowWidth = self.innerWidth;
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) { // other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        // for small pages with total height less then height of the viewport
        pageHeight = (yScroll < windowHeight) ? windowHeight : yScroll;

        // for small pages with total width less then width of the viewport
        pageWidth = (xScroll < windowWidth) ? xScroll : windowWidth;

        return { Page: { width: pageWidth, height: pageHeight }, Window: { width: windowWidth, height: windowHeight} };
    },

    Elements: {
        hide: function() {
            this.style.display = "none";
            return this;
        },

        css: function(properties) {
            Gostei.extend(this.style, properties);
            return this;
        }
    }
}
if (GosteiOptions == 'undefined') {
    var GosteiOptions = {};
}
Gostei.init(GosteiPost, GosteiOptions);