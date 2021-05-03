
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.AtributoPos');

if (typeof this['AtributoPos'] == 'undefined') AtributoPos = {};

AtributoPos._path = '/janus/dwr';







AtributoPos.listarAtributos = function(p0, p1, p2, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'listarAtributos', arguments);
};








AtributoPos.retornaStringJson = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'retornaStringJson', arguments);
};






AtributoPos.verificaValorSelect = function(p0, p1, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'verificaValorSelect', arguments);
};




AtributoPos.retornaNivelUsuario = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'retornaNivelUsuario', arguments);
};




AtributoPos.listarAtributoPosGrupo = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'listarAtributoPosGrupo', arguments);
};




AtributoPos.getRequest = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'getRequest', arguments);
};




AtributoPos.getResponse = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'getResponse', arguments);
};




AtributoPos.getSession = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'getSession', arguments);
};




AtributoPos.validaSessao = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'validaSessao', arguments);
};






AtributoPos.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'filtrarAreas', arguments);
};





AtributoPos.validaNivel = function(p0, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'validaNivel', arguments);
};






AtributoPos.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'validaNivel', arguments);
};





AtributoPos.validaNivel = function(p0, callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'validaNivel', arguments);
};




AtributoPos.getLoginBean = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'getLoginBean', arguments);
};




AtributoPos.getNomsis = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'getNomsis', arguments);
};




AtributoPos.getSubsis = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'getSubsis', arguments);
};




AtributoPos.isDWRRequest = function(callback) {
return dwr.engine._execute(AtributoPos._path, 'AtributoPos', 'isDWRRequest', arguments);
};


