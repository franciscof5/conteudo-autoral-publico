
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Recadastro');

if (typeof this['Recadastro'] == 'undefined') Recadastro = {};

Recadastro._path = '/janus/dwr';





















Recadastro.alterar = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'alterar', arguments);
};






Recadastro.listarLocalidade = function(p0, p1, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'listarLocalidade', arguments);
};




Recadastro.listar = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'listar', arguments);
};




Recadastro.listarNacionalidades = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'listarNacionalidades', arguments);
};





Recadastro.obterAuditoriaParametros = function(p0, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'obterAuditoriaParametros', arguments);
};




Recadastro.obterDadosRecadastrar = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'obterDadosRecadastrar', arguments);
};





Recadastro.obterDadosValidar = function(p0, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'obterDadosValidar', arguments);
};




Recadastro.listarTiposDocumentosIdentificacao = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'listarTiposDocumentosIdentificacao', arguments);
};




Recadastro.listarPaises = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'listarPaises', arguments);
};





Recadastro.listarEstados = function(p0, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'listarEstados', arguments);
};




Recadastro.naoAlterar = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'naoAlterar', arguments);
};






Recadastro.validar = function(p0, p1, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'validar', arguments);
};






Recadastro.naoValidar = function(p0, p1, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'naoValidar', arguments);
};




Recadastro.getRequest = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'getRequest', arguments);
};




Recadastro.getResponse = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'getResponse', arguments);
};




Recadastro.getSession = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'getSession', arguments);
};




Recadastro.validaSessao = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'validaSessao', arguments);
};






Recadastro.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'filtrarAreas', arguments);
};





Recadastro.validaNivel = function(p0, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'validaNivel', arguments);
};






Recadastro.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'validaNivel', arguments);
};





Recadastro.validaNivel = function(p0, callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'validaNivel', arguments);
};




Recadastro.getLoginBean = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'getLoginBean', arguments);
};




Recadastro.getNomsis = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'getNomsis', arguments);
};




Recadastro.getSubsis = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'getSubsis', arguments);
};




Recadastro.isDWRRequest = function(callback) {
return dwr.engine._execute(Recadastro._path, 'Recadastro', 'isDWRRequest', arguments);
};


