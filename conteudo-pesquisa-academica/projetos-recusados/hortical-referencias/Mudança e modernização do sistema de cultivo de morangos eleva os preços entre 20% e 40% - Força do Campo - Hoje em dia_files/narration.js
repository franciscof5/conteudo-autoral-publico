(function (parent, $) {
    var that = {};
    var link = null;

    that.container = "";

    that.initialize = function round_initialize(container, _link) {
        link = _link;
        that.container = container;

       call();
    };


    var setLoading = function () {
        var loadingHTML = '<div class="loading"><i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom center" ></i></div>';
        $(that.container).prepend(loadingHTML);
    };

    that.makehtml = function makeHtml(json) {
        //console.log(json);
        var momento, lanceClass, period = "";
        var icon = "fa-circle";
        if(json.periodo != "Partida não iniciada") {
            momento = json.momento;
        }else {
            momento = "";
        }
        if(json.acaoImportante != "") {
            lanceClass = "highlight";
            if(json.acaoImportante == "Gol") {
                icon = "fa-futbol-o"
            }else if(json.acaoImportante == "Cartão amarelo") {
               icon = "yellow-card"
            }else if(json.acaoImportante == "Cartão vermelho") {
            icon = "red-card"
            }else if(json.acaoImportante == "Substituição") {
            icon = "substitution"
            }else if(json.acaoImportante == "Impedimento") {
            icon = "whistle"
            }else if(json.acaoImportante == "Pênalti") {
            icon = "whistle"
            }
        }
        if(json.periodo == "Primeiro tempo") {
            period = "1º tempo";
        }else if(json.periodo == "Segundo tempo") {
            period = "2º tempo"
        }else {
            period = json.periodo;
        }

        var html = "<li id=" + json.id + "' class='comment'>";
        html += "<div class='live-time'><span class='minute'>" + momento + "</span><span class='period'>" + period + "</span></div>";
        html += "<div class='narration'>";
        html += "<i class='fa "+ icon + "'></i>";
        html += "<div class='team'>" + json.nomeEquipe + "</div>";
        html += "<div class='lance " + lanceClass + "'>" + json.descricao +  "</div>";
        html += "</div>"
        html += "</li>";
        return html;
    }

    function parseJson(live) {
        //console.log(live);
        console.log("Atualizando partida...");
        $("#liveCommentary").html("");
        var obj = $.parseJSON(live);
        for(var i=0;i<obj.length;i++){
            var tag = $("#liveCommentary");
            tag.prepend(that.makehtml(obj[i]));
            //console.log(obj[i]);
        }
    }

    function call() {
        $.ajax({
            url: link,
            data: {
                "ot": "br.com.hed.pagelayout.AjaxPageLayout.ot",
                "ajax": true
            },
            beforeSend: setLoading
        }).done(function (data) {
            parseJson(data);
            console.log("Done!");
        });
    }

    parent.narration = that;

})(hed, $);