
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Egressos');

if (typeof this['Egressos'] == 'undefined') Egressos = {};

Egressos._path = '/janus/dwr';




Egressos.listarCPG = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarCPG', arguments);
};





Egressos.listarPrograma = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarPrograma', arguments);
};





Egressos.listarArea = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarArea', arguments);
};




Egressos.listarEstadosDoBrasil = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarEstadosDoBrasil', arguments);
};









Egressos.buscaCamposValidacaoCursoGrad = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'buscaCamposValidacaoCursoGrad', arguments);
};







Egressos.buscaCamposValidacaoCursoPos = function(p0, p1, p2, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'buscaCamposValidacaoCursoPos', arguments);
};





Egressos.buscaCamposValidacaoSemNusp = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'buscaCamposValidacaoSemNusp', arguments);
};






Egressos.buscaCamposValidacao = function(p0, p1, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'buscaCamposValidacao', arguments);
};








Egressos.criarNusp = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'criarNusp', arguments);
};





Egressos.buscaNuspSemConflito = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'buscaNuspSemConflito', arguments);
};





Egressos.formataDatasDasValidacao = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'formataDatasDasValidacao', arguments);
};





Egressos.formataDatasDaValidacao = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'formataDatasDaValidacao', arguments);
};





Egressos.formataDatasDaSolicitacao = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'formataDatasDaSolicitacao', arguments);
};






Egressos.listarSolicitacoesAcesso = function(p0, p1, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarSolicitacoesAcesso', arguments);
};





Egressos.listarSolicitacoesAcessoGrad = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarSolicitacoesAcessoGrad', arguments);
};







Egressos.fornecerAcessoPos = function(p0, p1, p2, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'fornecerAcessoPos', arguments);
};






Egressos.fornecerAcessoGrad = function(p0, p1, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'fornecerAcessoGrad', arguments);
};






Egressos.negarAcessoGrad = function(p0, p1, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'negarAcessoGrad', arguments);
};







Egressos.negarAcessoPos = function(p0, p1, p2, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'negarAcessoPos', arguments);
};










Egressos.alterarCursoGrad = function(p0, p1, p2, p3, p4, p5, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'alterarCursoGrad', arguments);
};










Egressos.alterarCursoPos = function(p0, p1, p2, p3, p4, p5, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'alterarCursoPos', arguments);
};





Egressos.listarConflitoDeNUSPs = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'listarConflitoDeNUSPs', arguments);
};




Egressos.getRequest = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'getRequest', arguments);
};




Egressos.getResponse = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'getResponse', arguments);
};




Egressos.getSession = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'getSession', arguments);
};




Egressos.validaSessao = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'validaSessao', arguments);
};






Egressos.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'filtrarAreas', arguments);
};





Egressos.validaNivel = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'validaNivel', arguments);
};






Egressos.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'validaNivel', arguments);
};





Egressos.validaNivel = function(p0, callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'validaNivel', arguments);
};




Egressos.getLoginBean = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'getLoginBean', arguments);
};




Egressos.getNomsis = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'getNomsis', arguments);
};




Egressos.getSubsis = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'getSubsis', arguments);
};




Egressos.isDWRRequest = function(callback) {
return dwr.engine._execute(Egressos._path, 'Egressos', 'isDWRRequest', arguments);
};


