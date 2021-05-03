
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Util');

if (typeof this['Util'] == 'undefined') Util = {};

Util._path = '/janus/dwr';






Util.somaDias = function(p0, p1, callback) {
return dwr.engine._execute(Util._path, 'Util', 'somaDias', arguments);
};




Util.dataAprovacaoRegimento2012 = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'dataAprovacaoRegimento2012', arguments);
};




Util.getRequest = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'getRequest', arguments);
};




Util.getResponse = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'getResponse', arguments);
};




Util.getSession = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'getSession', arguments);
};




Util.validaSessao = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'validaSessao', arguments);
};






Util.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Util._path, 'Util', 'filtrarAreas', arguments);
};





Util.validaNivel = function(p0, callback) {
return dwr.engine._execute(Util._path, 'Util', 'validaNivel', arguments);
};






Util.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Util._path, 'Util', 'validaNivel', arguments);
};





Util.validaNivel = function(p0, callback) {
return dwr.engine._execute(Util._path, 'Util', 'validaNivel', arguments);
};




Util.getLoginBean = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'getLoginBean', arguments);
};




Util.getNomsis = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'getNomsis', arguments);
};




Util.getSubsis = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'getSubsis', arguments);
};




Util.isDWRRequest = function(callback) {
return dwr.engine._execute(Util._path, 'Util', 'isDWRRequest', arguments);
};


