
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Bolsista');

if (typeof this['Bolsista'] == 'undefined') Bolsista = {};

Bolsista._path = '/janus/dwr';




Bolsista.exibirAvisoBolsas = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'exibirAvisoBolsas', arguments);
};




Bolsista.pegarDataFimMinima = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'pegarDataFimMinima', arguments);
};








Bolsista.alterarDataFim = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'alterarDataFim', arguments);
};





Bolsista.buscarProgramas = function(p0, callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'buscarProgramas', arguments);
};




Bolsista.getRequest = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'getRequest', arguments);
};




Bolsista.getResponse = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'getResponse', arguments);
};




Bolsista.getSession = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'getSession', arguments);
};




Bolsista.validaSessao = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'validaSessao', arguments);
};






Bolsista.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'filtrarAreas', arguments);
};





Bolsista.validaNivel = function(p0, callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'validaNivel', arguments);
};






Bolsista.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'validaNivel', arguments);
};





Bolsista.validaNivel = function(p0, callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'validaNivel', arguments);
};




Bolsista.getLoginBean = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'getLoginBean', arguments);
};




Bolsista.getNomsis = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'getNomsis', arguments);
};




Bolsista.getSubsis = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'getSubsis', arguments);
};




Bolsista.isDWRRequest = function(callback) {
return dwr.engine._execute(Bolsista._path, 'Bolsista', 'isDWRRequest', arguments);
};


