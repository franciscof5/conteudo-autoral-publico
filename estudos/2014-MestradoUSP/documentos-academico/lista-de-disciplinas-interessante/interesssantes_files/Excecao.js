
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Excecao');

if (typeof this['Excecao'] == 'undefined') Excecao = {};

Excecao._path = '/janus/dwr';




Excecao.listarCPG = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'listarCPG', arguments);
};





Excecao.listarPrograma = function(p0, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'listarPrograma', arguments);
};





Excecao.listarArea = function(p0, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'listarArea', arguments);
};




Excecao.listarTipoExcecao = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'listarTipoExcecao', arguments);
};





Excecao.removerTipoExcecao = function(p0, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'removerTipoExcecao', arguments);
};






Excecao.incluirTipoExcecao = function(p0, p1, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'incluirTipoExcecao', arguments);
};






Excecao.alterarTipoExcecao = function(p0, p1, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'alterarTipoExcecao', arguments);
};





Excecao.listarExcecao = function(p0, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'listarExcecao', arguments);
};











Excecao.alterarExcecao = function(p0, p1, p2, p3, p4, p5, p6, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'alterarExcecao', arguments);
};











Excecao.incluirExcecao = function(p0, p1, p2, p3, p4, p5, p6, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'incluirExcecao', arguments);
};




Excecao.getRequest = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'getRequest', arguments);
};




Excecao.getResponse = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'getResponse', arguments);
};




Excecao.getSession = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'getSession', arguments);
};




Excecao.validaSessao = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'validaSessao', arguments);
};






Excecao.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'filtrarAreas', arguments);
};





Excecao.validaNivel = function(p0, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'validaNivel', arguments);
};






Excecao.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'validaNivel', arguments);
};





Excecao.validaNivel = function(p0, callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'validaNivel', arguments);
};




Excecao.getLoginBean = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'getLoginBean', arguments);
};




Excecao.getNomsis = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'getNomsis', arguments);
};




Excecao.getSubsis = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'getSubsis', arguments);
};




Excecao.isDWRRequest = function(callback) {
return dwr.engine._execute(Excecao._path, 'Excecao', 'isDWRRequest', arguments);
};


