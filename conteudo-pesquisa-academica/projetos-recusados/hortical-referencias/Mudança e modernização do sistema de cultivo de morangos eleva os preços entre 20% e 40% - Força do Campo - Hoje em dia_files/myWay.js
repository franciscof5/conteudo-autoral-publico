var social = social || {};
var $ = $ || {};
social.myway = social.myway || {};

$.extend(social.myway, {
    elementPath: null,
    runningRequests: 0,
    preferences: [],
    divIds: [
        "do-meu-jeito-1",
        "do-meu-jeito-2",
        "do-meu-jeito-3"
    ]
});


$.extend(social.myway, {
    populateFromCookies: function (targetId) {
        var subject = getCookie(targetId);
        if ((typeof subject != "undefined") && subject != "undefined" && subject != "") {
            console.log(subject);
            this.searchContentAndPopulateList(targetId, subject);
        }
    },
    isLoggedIn: function () {
        if (social.user) {
            var user = new social.user();
            if (user.isLoggedIn()) {
                return true;
            }
        }
        return false;
    },
    init: function (path) {
        this.elementPath = path;
        $('.do-seu-jeito > .editorias > .secoes a').draggable({
            revert: true
        });

        $(this.divIds).each(function (i, div) {
            $("#" + div).droppable({
                accept: '.do-seu-jeito > .editorias .secoes a',
                drop: function (event, ui) {
                    var caderno = $(ui.draggable).data('id');
                    if (!$('#meu-caderno-' + caderno).hasClass('active')) {
                        social.myway.searchContentAndPopulateList($(event.target).attr('id'), caderno, true);
                    }
                }
            });
            if(!social.myway.isLoggedIn()) social.myway.populateFromCookies(div);
        });

        $(document).on('click', '.fecha-meu-caderno', function () {
            var caderno = $(this).data('caderno');
            var coluna = $(this).closest('.do-seu-jeito .colunas .coluna .body').attr('id');
            $('#meu-caderno-' + caderno).removeClass('active');
            $('#' + coluna).empty();
            $('#' + coluna).append("<span class='drag-text'>Arraste aqui</span>");
            $('#' + coluna).addClass('vazio');
            setCookie(coluna, "", 365);
            $(social.myway.divIds).each(function (i, div) {
                if (div === coluna) social.myway.preferences[i] = "";
            });
            social.myway.saveUserPreferences();
        });



    },
    populateUserList: function (preferences) {
        if (preferences) {
            $(this.divIds).each(function (i, div) {
                if (preferences[i])   social.myway.searchContentAndPopulateList(div, preferences[i], false);
            });
        }
    },
    saveUserPreferences: function () {
        if (social.myway.runningRequests != 0) return;
       /* if (!this.isLoggedIn()) return;
        var json = {"subjects": []};
        $(social.myway.divIds).each(function (i, div) {
            json.subjects.push(social.myway.preferences[i]);
        });
        $.ajax({
            url: "/membership/diaryMyWay/save",
            cache: false,
            data: json,
            traditional: true
        });*/
    }
    ,
    searchContentAndPopulateList: function (targetid, subject, save) {
        var targetDiv = $("#" + targetid);
        $.ajax({
            url: this.elementPath,
            cache: true,
            data: {"subject": subject, "view": "ajax", "ot": "br.com.hed.pagelayout.AjaxPageLayout.ot"},
            beforeSend: function (data) {
                $(targetDiv).html("").removeClass("error").addClass("vazio loading");
                social.myway.runningRequests++;
            },
            complete: function () {
                social.myway.runningRequests--;
                $(targetDiv).removeClass("loading");
                $(social.myway.divIds).each(function (i, div) {
                    if (div == targetid) social.myway.preferences[i] = subject;
                });
                if (save === true) social.myway.saveUserPreferences();
            },
            success: function (data) {
                $(targetDiv).html(data).removeClass('vazio');
                $(".do-seu-jeito > .editorias > .secoes > #meu-caderno-" + subject).addClass('active');

                var cadernoAtivo = getCookie(targetid);
                if (cadernoAtivo != subject) {
                    $('#meu-caderno-' + cadernoAtivo).removeClass('active');
                }
                setCookie(targetid, subject, 365);
            },
            error: function () {
                $(targetDiv).addClass('error');
            }
        });
    }
});