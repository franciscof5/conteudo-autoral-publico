
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Questionario');

if (typeof this['Questionario'] == 'undefined') Questionario = {};

Questionario._path = '/janus/dwr';




Questionario.listarQuestionarioSocioeconomico = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'listarQuestionarioSocioeconomico', arguments);
};




Questionario.listarRespostasQuestionarioSocioeconomico = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'listarRespostasQuestionarioSocioeconomico', arguments);
};





Questionario.cadastrarRespostasQuestionarioSocioeconomico = function(p0, callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'cadastrarRespostasQuestionarioSocioeconomico', arguments);
};




Questionario.getRequest = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'getRequest', arguments);
};




Questionario.getResponse = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'getResponse', arguments);
};




Questionario.getSession = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'getSession', arguments);
};




Questionario.validaSessao = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'validaSessao', arguments);
};






Questionario.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'filtrarAreas', arguments);
};





Questionario.validaNivel = function(p0, callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'validaNivel', arguments);
};






Questionario.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'validaNivel', arguments);
};





Questionario.validaNivel = function(p0, callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'validaNivel', arguments);
};




Questionario.getLoginBean = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'getLoginBean', arguments);
};




Questionario.getNomsis = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'getNomsis', arguments);
};




Questionario.getSubsis = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'getSubsis', arguments);
};




Questionario.isDWRRequest = function(callback) {
return dwr.engine._execute(Questionario._path, 'Questionario', 'isDWRRequest', arguments);
};


