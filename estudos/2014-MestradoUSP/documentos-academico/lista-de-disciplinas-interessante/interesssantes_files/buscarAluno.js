    function preencherDadosAlunoSelecionado(){    	
    	
    	Aluno.listarCursosAlunoSelecionado({
    		callback : function(data) {
    		    if(data != null ){
    		    	/*Remove buscas anteriores*/
    		    	$(".tabelaLinhaCentralizada").show("slow");
    		    	
    		    	
    		    	/*Preenche o nome e o código USP do aluno selecionado*/
    		    	$(".span_codAlunoSelecionado").text(data[0].codpes);
    			    $(".span_nomAlunoSelecionado").text(data[0].nompes);
    			    $(".div_AlunoSelecionado").show("slow");
    			    
    			    /*Seleção automática do [0] para iniciar a página*/
    			    codareIncluir =  data[0].codare ;
    			    numseqpgmIncluir = data[0].numseqpgm ;
    			    $("#IncAlunoSelecionado").text(data[0].codpes);
    			    $("#txtAreaIncluir").val(data[0].codare);
    			    $("#txtNumSeqPgmIncluir").val(data[0].numseqpgm);
    			    
    			    
    			    /*Traz os cursos do aluno selecionado*/
    			    for (var i=0;i<data.length;i++){
    			    	
    			    	carregaSituacaoCursos(data[i].codpes,data[i].codare,data[i].numseqpgm,i);    			    	
    			    	
    			    	var tr_curso = "<tr class='tabelaLinhaCentralizada' id='tr_"+i+"'>" +
    			    					  "<td  class='td_image' > </td>" +
    			    					  "<td class='linhaCursoAluno'>" + nivel(data[i].nivpgm,data[i].vinalupgm) + "</td>" +
    			    					  "<td class='linhaCursoAluno'>" + data[i].nomare + "(" + data[i].codare + ") </td>" +
    			    					  "<td class='linhaCursoAluno'>" + data[i].numseqpgm + "</td>" +
    			    					  "<td id='situacao_"+ i + "' class='linhaCursoAluno'>" + "</td>" +
    			    					  '<td><img src="'+contextPath +'/imagens/icone/lupa.png" alt="visualizar" class="icone" onclick="selecionarAreaAlunoSelecionado('+data[i].codare+',' +data[i].numseqpgm +',' + i +')"></td> </tr>';
    			    	    
    			    	$(tr_curso).insertAfter('.tbody_curso');
    			    }
    			    $("#tr_0"+">td:eq(0)").html('<img src="/janusD/imagens/icone/setaLista.gif"/>');
    			    mostrarTelaBuscarOuAlunoSelecionado("alunoSelecionado")
    			    
    			    
    			    
    		    } else mostrarTelaBuscarOuAlunoSelecionado("telaBuscar");
    		}
    		   

    	});
    	
    }

    function selecionarAreaAlunoSelecionado(codare,numseqpgm,i){
        codareIncluir =  codare;
        numseqpgmIncluir = numseqpgm; 
        /*Remove de todas tabelaLinhaCentralizada o red*/
        $(".td_image").text("");
        $("#tr_"+i+">td:eq(0)").html('<img src="'+contextPath+'/imagens/icone/setaLista.gif"/>');
        
        
    }

    function fecharAluno(){
    	Aluno.fecharAlunoSelecionado({
    		callback : function() {
    			mostrarTelaBuscarOuAlunoSelecionado("telaBuscar")
    	}	
    	});
    }

    function buscarAlunoSelecionado(tipoBusca){
    	
    	 /* 1)Realizar os algoritmos de busca
    	  * 2)Trazer a tabela de alunos encontrados*/
    	
    	    var codigoAlunoSelecionado = $(".input_NUSP").val();
    	    var nomeAlunoSelecionado = $(".input_Nome").val();
    	    
    	    if(codigoAlunoSelecionado == "" && nomeAlunoSelecionado == ""){ 
    	    	$(".msg_buscaNaoEncontrada").css("color","red");
    	        $(".msg_buscaNaoEncontrada").text("Preencher o número usp ou nome do aluno.");
    		    $(".msg_buscaNaoEncontrada").show();
    		
    	    }else{
    	    	escolherAluno(codigoAlunoSelecionado, nomeAlunoSelecionado,tipoBusca);
    	    			

    	    }
    	    

    	
    }

    function escolherAluno(codigoAlunoSelecionado,nomeAlunoSelecionado,tipoBusca){
    	$("#ajaxload_buscaAluno").show();
    	Aluno.buscarAlunoSelecionado(codigoAlunoSelecionado,nomeAlunoSelecionado,tipoBusca,{
    		callback : function(data) {
    			
    			
    			$("#ajaxload_buscaAluno").hide();
    		    $(".tabelaLinhaCentralizada").remove();	
    			$("#tabelaBuscaAlunos").hide("slow");	
    			if(data.length == 1){	
    				 $(".msg_buscaNaoEncontrada").show();
    				$(".msg_buscaNaoEncontrada").hide();
    				  $("#tabelaBuscaAlunos").hide("slow");  
    				Aluno.selecionarAluno(data[0]);	
    				preencherDadosAlunoSelecionado();
    			    $(".input_NUSP").val("");
    			    $(".input_Nome").val("");
    			  
    			}else if(data.length == 0){
    				$(".msg_buscaNaoEncontrada").css("color","red");
    				$(".msg_buscaNaoEncontrada").css("align","center");
    				 $(".msg_buscaNaoEncontrada").text("Nenhum aluno encontrado.");
                   $(".msg_buscaNaoEncontrada").show();
                  
    		    }else if(data.length > 1){
    		    	 $(".msg_buscaNaoEncontrada").hide();
    			for (var i=0;i<data.length;i++){
    			
    			    	
    			 var tr_alunos = "<tr class='tabelaLinhaCentralizada' id='tr_alunos_"+i+"'>" +
    			    					  "<td>" + data[i].codpes + "</td>" +
    			    					  "<td>" + data[i].nompes + "</td>" +
    			       					  '<td><img src="' +contextPath+'/imagens/icone/lupa.png" alt="visualizar" class="icone" onclick="escolherAluno('+ data[i].codpes+',\'' + data[i].nompes + '\', \'E\')"></td> </tr>';
    			    	    
    			    	$(tr_alunos).insertAfter('.tbody_alunos');
    			}
    			$("#tabelaBuscaAlunos").show("slow");
    			  
    		}
    		
    	  }
    	});	 

    }

    function mostrarTelaBuscarOuAlunoSelecionado(mostrar){
    	if(mostrar == "telaBuscar"){
    		$(".div_AlunoSelecionado").hide("slow");
    		$("#tabelaCursoAlunoSelecionado").hide("slow");
    		$(".div_buscaAlunoSelecionado").show("slow");
    		
    	}
    	else if(mostrar == "alunoSelecionado"){
    		$(".div_buscaAlunoSelecionado").hide("slow");
    		$("#tabelaAlunoSelecionado").hide("slow");
    		$(".div_AlunoSelecionado").show("slow");
    		$("#tabelaCursoAlunoSelecionado").show("slow");
    		
    		
    	}
    	
    }
        
    /*Enter realiza busca rápida*/
    if(mostrar = "telaBuscar"){
	    $(document).keypress(function(e) {
	        if(e.which == 13) {
	        	if($(".input_NUSP").is(":focus") || $(".input_Nome").is(":focus")){
	        		$(".buttonDestacado").click();               
	        	}
	        }
	    });
    }
    
    function carregaSituacaoCursos(codpes,codare,numseqpgm,id){
    	Aluno.buscarSituacaoCurso(codpes,codare,numseqpgm,{
    		callback : function(retorno) {
    			if(retorno != null){
    				$("#situacao_" + id).text(retorno);
    			}
    	},
    	   errorHandler:function(message){
        	     alert("Erro ao obter situação do curso: " + message);
        	     return null;
    	   }	
        });
    }
    
    function nivel(nivel,vinalupgm){
    	if (nivel == null && vinalupgm == "ESPECIAL")
    		return "Especial";
    		else{
    			if(nivel == "DO") return "Doutorado";
    			else if(nivel == "DD") return "Doutorado Direto";
    			else if(nivel == "ME") return "Mestrado";
    		
    		}
    }
    
    
    
    
    
