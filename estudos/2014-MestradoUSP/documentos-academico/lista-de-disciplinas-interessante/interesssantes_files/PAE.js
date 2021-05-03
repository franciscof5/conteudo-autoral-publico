
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.PAE');

if (typeof this['PAE'] == 'undefined') PAE = {};

PAE._path = '/janus/dwr';





PAE.obterInscritoPAE = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'obterInscritoPAE', arguments);
};






PAE.listarBolsas = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarBolsas', arguments);
};





PAE.getUnidadesResponsaveisPermitidas = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getUnidadesResponsaveisPermitidas', arguments);
};






PAE.buscarPeriodoInscricaoWEB = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'buscarPeriodoInscricaoWEB', arguments);
};






PAE.listarEstagiarios = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarEstagiarios', arguments);
};





PAE.obterSeAlunoComCotaDiferenciada = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'obterSeAlunoComCotaDiferenciada', arguments);
};








PAE.alterarHomologacaoPAEEmLote = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'alterarHomologacaoPAEEmLote', arguments);
};








PAE.alterarHomologacaoPAE = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'alterarHomologacaoPAE', arguments);
};




PAE.podeVerPeriodoInscricaoAluno = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'podeVerPeriodoInscricaoAluno', arguments);
};




PAE.listarColegiadosResponsaveis = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarColegiadosResponsaveis', arguments);
};




PAE.buscarUltimoPeriodo = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'buscarUltimoPeriodo', arguments);
};






PAE.removerPeriodoInscricaoWEB = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'removerPeriodoInscricaoWEB', arguments);
};




PAE.buscarDataFinalMaximaInscricaoPeloAluno = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'buscarDataFinalMaximaInscricaoPeloAluno', arguments);
};





PAE.listarPeriodosInscricaoWEB = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarPeriodosInscricaoWEB', arguments);
};






PAE.pegarNomeInscricaoJaExistente = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'pegarNomeInscricaoJaExistente', arguments);
};





PAE.noPrazo = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'noPrazo', arguments);
};









PAE.alterarClassificacao = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'alterarClassificacao', arguments);
};




PAE.listarAnoSem = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarAnoSem', arguments);
};






PAE.validaDataFimDeCursoDentroDoSemestre = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'validaDataFimDeCursoDentroDoSemestre', arguments);
};






PAE.calcularLimiteDeBolsas = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'calcularLimiteDeBolsas', arguments);
};





PAE.liberadoParaEdicao = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'liberadoParaEdicao', arguments);
};





PAE.liberadoParaHomologacao = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'liberadoParaHomologacao', arguments);
};




PAE.getAcaoListarAnoSemestre = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getAcaoListarAnoSemestre', arguments);
};








PAE.incluirPeriodoInscricaoWEB = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'incluirPeriodoInscricaoWEB', arguments);
};








PAE.alterarPeriodoInscricaoWEB = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'alterarPeriodoInscricaoWEB', arguments);
};






PAE.consultarBolsas = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'consultarBolsas', arguments);
};








PAE.consultarPagamentos = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'consultarPagamentos', arguments);
};






PAE.listarFolhasPagamento = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarFolhasPagamento', arguments);
};





PAE.listarFolhasPagamento = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarFolhasPagamento', arguments);
};




PAE.listarFolhasPagamento = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarFolhasPagamento', arguments);
};




PAE.listarStatusFrequencia = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarStatusFrequencia', arguments);
};









PAE.listarBolsistasFrequencia = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarBolsistasFrequencia', arguments);
};









PAE.listarControleDeVoluntarios = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarControleDeVoluntarios', arguments);
};









PAE.cadastrarFrequenciaDosBolsistas = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'cadastrarFrequenciaDosBolsistas', arguments);
};









PAE.cadastrarControleDosVoluntarios = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'cadastrarControleDosVoluntarios', arguments);
};





PAE.consultaDadosAluno = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'consultaDadosAluno', arguments);
};






PAE.listarSupervisores = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'listarSupervisores', arguments);
};






PAE.verificarDadosCertificado = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'verificarDadosCertificado', arguments);
};






PAE.geraLista = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'geraLista', arguments);
};




PAE.getRequest = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getRequest', arguments);
};




PAE.getResponse = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getResponse', arguments);
};




PAE.getSession = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getSession', arguments);
};




PAE.validaSessao = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'validaSessao', arguments);
};






PAE.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'filtrarAreas', arguments);
};





PAE.validaNivel = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'validaNivel', arguments);
};






PAE.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'validaNivel', arguments);
};





PAE.validaNivel = function(p0, callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'validaNivel', arguments);
};




PAE.getLoginBean = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getLoginBean', arguments);
};




PAE.getNomsis = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getNomsis', arguments);
};




PAE.getSubsis = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'getSubsis', arguments);
};




PAE.isDWRRequest = function(callback) {
return dwr.engine._execute(PAE._path, 'PAE', 'isDWRRequest', arguments);
};


